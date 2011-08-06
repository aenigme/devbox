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
			
			$('input[type=button]').click(function() {
				var el = $(this);
				location.href = el.attr('rel');
			});
			
			$("#jump_menu").change(function(e) {
	            window.location.href = $(this).val();
	        });
	  
			var preload = [
				'/images/site/indexslide1.jpg', 
				'/images/site/indexslide2.jpg', 
				'/images/site/indexslide3.jpg', 
				'/images/site/indexslide4.jpg'
			];
			
			// $.preloadImages(preload);
			
			$(this).find('form .hint').simplehints();
			$('#contactForm').sendmail();
			$('.tooltip').bt();
			$('.lightbox').open_colorbox();
			$('.select').after('<div class="select_skin"></div>');
			
			Cufon.replace('h1',{ textShadow: '1px 1px #000'});
			Cufon.replace('h2',{ textShadow: '1px 1px #000'});
			
			var $oe_menu		= $('#oe_menu');
			var $oe_menu_items	= $oe_menu.children('li');
			var $oe_overlay		= $('#oe_overlay');

			$oe_menu_items.bind('mouseenter',function(){
				var $this = $(this);
				$this.addClass('slided selected');
				$this.children('div').css('z-index','9999').stop(true,true).slideDown(200,function(){
					$oe_menu_items.not('.slided').children('div').hide();
					$this.removeClass('slided');
				});
			}).bind('mouseleave',function(){
				var $this = $(this);
				$this.removeClass('selected').children('div').css('z-index','1');
			});

			$oe_menu.bind('mouseenter',function(){
				var $this = $(this);
				$oe_overlay.stop(true,true).fadeTo(200, 0.6);
				$this.addClass('hovered');
			}).bind('mouseleave',function(){
				var $this = $(this);
				$this.removeClass('hovered');
				$oe_overlay.stop(true,true).fadeTo(200, 0);
				$oe_menu_items.children('div').hide();
			})
			
			var read_button = function(class_names) {
		    var r = {
		      selected: false,
		      type: 0
		    };

		    for (var i=0; i < class_names.length; i++) {
				if (class_names[i].indexOf('selected-') == 0) {
		        	r.selected = true;
		      	}
		      	if (class_names[i].indexOf('segment-') == 0) {
		        	r.segment = class_names[i].split('-')[1];
		      	}
		    };
		    	return r;
		  	};

		  	var determine_sort = function($buttons) {
		    	var $selected = $buttons.parent().filter('[class*="selected-"]');
		    	return $selected.find('a').attr('data-value');
		  	};

		  	var determine_kind = function($buttons) {
		    	var $selected = $buttons.parent().filter('[class*="selected-"]');
		    	return $selected.find('a').attr('data-value');
		  	};

		  	var $preferences = {
		    	duration: 800,
		    	easing: 'easeInOutQuad',
		    	adjustHeight: 'dynamic'
		  	};

		  	var $list = $('#list');
		  	var $data = $list.clone();

		  	var $controls = $('ul.splitter ul');

		  }); 
		});
	},
	
	helpers: {
		/*
			TODO This isn't intelligent enough to accept escaped delimiters.  Accepts: "name=value,name2=value2"
		*/
		attr_params: function(value) {
			var param_pairs = value.split(',');
			var params = {};
			$.each(param_pairs, function(k, v) {
				var param_pair = v.split('=');
				if (param_pair.length == 2)
				{
					params[param_pair[0]] = param_pair[1];
				}
			});
			
			return params;
		}
	}
};

Site.init();