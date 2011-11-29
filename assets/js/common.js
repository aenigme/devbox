var changing = false;
var changed = true
var dateChanging = true;

function updateValuesChanged(event, ui, changing){
	if (!changing)
	displayValues(ui.label, ui.values)	
}

function updateValuesChanging(event, ui, changing){
	if (changing)
	displayValues(ui.label, ui.values)
}

function displayValues(slider, values){
	if (values.min instanceof Date) {
		slider.parents("form").find("input[name=min]").val($.datepicker.formatDate("yy-mm-dd", values.min));
		slider.parents("form").find("input[name=max]").val($.datepicker.formatDate("yy-mm-dd", values.max));
	}
	else {
		slider.parents("form").find("input[name=min]").val(values.min);
		slider.parents("form").find("input[name=max]").val(values.max);
	}
}

function getLink(url)  {
  document.location.href = url;
}

function isUnique( tableSelector ) {
    // Collect all values in an array
    var values = [] ;
    $( tableSelector + ' select#q2' ).each( function(idx,val){ values.push($(val).val()); } );

    // Sort it
    values.sort();

    // Check whether there are two equal values next to each other
    for( var k = 1; k < values.length; ++k ) {
        if( values[k] == values[k-1] ) return false ;
    }
    return true ;
}

function makeSlider(selector, options){
	var slider = $(selector)
	.rangeSlider(options)
	// .bind("valuesChanging", function(event, ui){updateValuesChanging(event, ui, changing);})
	.bind("valuesChanged", function(event, ui){updateValuesChanged(event, ui, changing);})
	.addClass("ui-rangeSlider-dev");
	displayValues(slider, slider.rangeSlider("values"));
}

function makeDateSlider(selector, options){
	var slider = $(selector)
	.dateRangeSlider(options)
	.bind("valuesChanging", function(event, ui){updateValuesChanging(event, ui, dateChanging);})
	.bind("valuesChanged", function(event, ui){updateValuesChanged(event, ui, dateChanging);})
	.addClass("ui-rangeSlider-dev");
	displayValues(slider, slider.rangeSlider("values"));
}

function setOption(element, option, value){
	if (value == "null") {
		value = null
	}
	$(element).parents(".example").find(".slider").rangeSlider("option", option, value);
	$(element).parents(".example").find(".dateSlider").dateRangeSlider("option", option, value);
}

function getOption(element, option){
	return $(element).parents(".example").find(".slider").rangeSlider("options")[option];
}

jQuery.fn.log = function (msg) {
  console.log("%s: %o", msg, this);
  return this;
};

jQuery.fn.simplehints = function() {
	return this.each(function() {
		var $this = $(this);
		
		if ($this.attr('value').length == 0) 
			$this.attr('value', $this.attr('title'));
		
		if ($this.attr('value') != $this.attr('title'))
			$this.addClass("bold");
				
		if ($this.attr('value').length != 0 && $this.attr('value') != $this.attr('title')) 
			$this.addClass("bold");
				
		$(this).focus(function () {
			if ($this.attr('value') == $this.attr('title'))	
				$(this).get(0).setSelectionRange(0,0);
		}).keypress(function() {
			if ($this.attr('value') == $this.attr('title') && $this.attr('type') != 'select-one')
				$this.attr('value', '').addClass("bold");
		}).change(function() {
			if ($this.attr('value') != $this.attr('title'))
				$this.addClass("bold");
			if ($this.attr('value') == $this.attr('title'))
				$this.removeClass("bold");
		}).blur(function() {
			if ($this.attr('value') == '')
				$this.attr('value', $this.attr('title')).removeClass("bold");
		}).parents('form').submit(function(e) {
			if ($this.attr('value') == $this.attr('title'))
				$this.attr('value', '');
		});
	});
};

jQuery.fn.sendmail = function() {
	return this.each(function() {
		$(this).ajaxForm({
			target: '#alert',
			success: function(str) {
				var result = str.split("|");
				var response = result[0];
				var url = result[1];
				
		        if (response == 'google_conversion') {
					$('.message').hide();
					$(".lightbox").colorbox.close;
		            window.location.href = '/thankyou/' + url;
		        }
				else {
					
					if(str.substring(0,5) == 'Thank') {
						$(this).parents('form').each(function(){
							$('input[type=submit]', this).attr('disabled', 'disabled');
							$('input[type=image]', this).attr('disabled', 'disabled');
						});
					}
					$(this).parents('form div.message').hide().show();
					$(this).parents().find('form .hint').simplehints();
					$('.tooltip').bt();
					$('.lightbox').open_colorbox();
					$.fn.colorbox.resize();
		        }
		    }
		});
	});
};

jQuery.fn.open_colorbox = function() {
	return this.each(function() {
		$(".lightbox").colorbox({
			innerHeight		: 400, 
			scrolling		: false,
			preloading		: true, 
			onComplete		: function() {
				$(this).parents().find('form .hint').simplehints();
				$('#contactForm').sendmail();
				$('.lightbox').open_colorbox();
				$.fn.colorbox.resize();
			}
		});	
	});
};

jQuery.preloadImages = function() {
	var a = (typeof arguments[0] == 'object')? arguments[0] : arguments;
	for(var i = a.length -1; i > 0; i--) {
		jQuery("<img>").attr("src", a[i]);
	}
}

var Home = {
	init: function() {
		jQuery(function($) {
			
		});
	}
};

var Site = {
	
	// this vars should be set in <head> server-side
	config: {
		base_url: '/',
		site_url: '/', 
		upload_dir: '/useruploads/images/'
	},

	init: function() {
		
		jQuery(function($) {

			$(".validate").blur(function(){
				var el = $(this);
				$.ajax({
					type: 'POST',
					url: '/ajax/validate/',
					data: { action: 'validate', rule: el.attr('rel'), value: el.attr('value'), title: el.attr('title') },
					async: false,
					success: function(str) {
						el.next('span').remove();

						var result = str.split("|");
						var valid = result[0];
						var tip = result[1];

						if(valid) {
							el.after('<span class="tooltip"><img src="/assets/images/icons/accept.png"></span>') ;
						} else if(str.length > 0) {
							el.after('<span class="tooltip bt-active" title="' + tip + '"><img src="/assets/images/icons/exclamation.png"></span>'); 
							$('.tooltip').bt();
						}
					}
				});
			});
			
			$('input[type=button].link').click(function(e) {
				e.preventDefault();
				location.href = $(this).attr('rel');
			});
			
			$('.link').click(function(e) {
				location.href = $(this).attr('rel');
			});
			
			$("#jump_menu").change(function(e) {
	            window.location.href = $(this).val();
	        });
			
			var changeMailTo = function(){
				var mArr = ["@","smashup","luca",".it"];
				$("#email").attr("href","mailto:"+mArr[2]+mArr[0]+mArr[1]+mArr[3]);
			}
					
			setTimeout(changeMailTo,500);
			
			var preload = [
				'/images/foobar_01.jpg', 
				'/images/foobar_02.jpg'
			];
			
			// $.preloadImages(preload);
			$(this).find('form .hint').simplehints();
			$('#focus').focus();
			$('#contactForm').sendmail();
			$('.tooltip').bt();
			$('.lightbox').open_colorbox();
			
			// Surv.ly functions
			$(document).bind("a.removeOption", "click", function(e){ 
				e.preventDefault();
				var el = $(this);
				var str = el.parent('li').attr('rel');
				$('input[name="option[]"][value="' + str + '"]').remove();
				el.parent('li').remove();
			});
		});
	}
};

Site.init();