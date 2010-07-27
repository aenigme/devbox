jQuery.fn.log = function (msg) {
  console.log("%s: %o", msg, this);
  return this;
};

jQuery.fn.simplehints = function() {
	return this.each(function() {
		var $this = $(this);
		
		if ($this.attr('value').length == 0) 
			$this.attr('value', $this.attr('title'));
				
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
		        if (str == 'google_conversion') {
					$('.message').hide();
					$(".lightbox").colorbox.close;
		            window.location.href = '/therapists/thankyou';
		        }
				else {
					if(str.substring(0,6) == 'Thanks') {
						$('form').each(function(){
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
				$('#contactForm').sendmail();
				$('#subscriptionForm').sendmail();
				$(this).parents().find('form .hint').simplehints();
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

var Site = {
	
	// this vars should be set in <head> server-side
	config: {
		base_url: '/',
		site_url: '/', 
		upload_dir: '/useruploads/'
	},
	
	// this method is called on every page
	init: function() {
		
		// On Dom Ready
		jQuery(function($) {

			var preload = [
				'/images/name_01.jpg', 
				'/images/name_02.jpg'
			];
			
			$.preloadImages(preload);
			
			$('#contactForm').sendmail();
			$('#subscriptionForm').sendmail();
			$(this).find('form .hint').simplehints();
			$('.tooltip').bt();
			$('.lightbox').open_colorbox();

		});
	}
};

Site.init();