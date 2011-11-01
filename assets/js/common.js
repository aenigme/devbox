function Link(url)  {
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

	init: function() {
		
		jQuery(function($) {

			$(".validate").blur(function(){
				var el = $(this);
				$.ajax({
					type: 'POST',
					url: '/admin/index/validate/',
					data: { action: 'validate', rule: el.attr('rel'), value: el.attr('value'), title: el.attr('title') },
					async: false,
					success: function(str) {
						el.next('span').remove();
						el.next('.select_skin').next('span').remove();

						var result = str.split("|");
						var valid = result[0];
						var tip = result[1];

						if(valid) {
							if ($(el.next('.select_skin')).length == 0) {
								el.after('<span class="tooltip_x"><img src="/images/icons/accept.png"></span>') ;
							} else {
								el.next('.select_skin').after('<span class="tooltip_x"><img src="/images/icons/accept.png"></span>') ;
							}
						} else if(str.length > 0) {
							if ($(el.next('.select_skin')).length == 0) {
								el.after('<span class="tooltip bt-active" title="' + tip + '"><img src="/images/icons/exclamation.png"></span>'); 
							} else {
								el.next('.select_skin').after('<span class="tooltip bt-active" title="' + tip + '"><img src="/images/icons/exclamation.png"></span>'); 
							}
							$('.tooltip').bt();
						}
					}
				});
			});
			
			$('input[type=button].link').click(function(e) {
				e.preventDefault();
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
			$('#contactForm').sendmail();
			$('.tooltip').bt();
			$('.lightbox').open_colorbox();
			$('.select').after('<div class="select_skin"></div>');
			
			$('input[type=button]#addOption').click(function(e) {
				e.preventDefault();
				var input = document.createElement("input");
				var option = document.getElementById("option");
				
				if (option.value == '') {
					$('div#rowOption').addClass('error');
				} else {
					$('div#rowOption').removeClass('error');
					$('ol#viewOptions').append('<li>' + option.value + '</li>'); // Update preview
					
					input.setAttribute("type", "hidden");
					input.setAttribute("name", "option[]");
					input.setAttribute("value", option.value); // Update hidden fields
					
					$('input#option').val('').focus(); // Reset option field
					
					document.getElementById("moreOptions").appendChild(input);
					$("#btnContinue").css('visibility', 'visible');
				}
				
				return false;
			});

		});
	}
};

Site.init();