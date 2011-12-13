// -- CUSTOM FUNCTIONS AND EFFECTS --

$(function() {

	/* Image Preloader */

	target = $(".cycle_slider li, .products li a");
	images = target.find("img");
	counter = 0;
	i=0;
	loaded = [];
	nextDelay = 0;
	images.each(function(){
		if( $(this).parent().length == 0 )
			$(this).wrap("<span class='preload' />");
		else
			$(this).parent().addClass("preload");
		loaded[i++] = false;
	});
	images = $.makeArray(images);
	timer = setInterval(function() {
		if( counter >= loaded.length )
		{
			clearInterval(timer);
			return;
		}
		for( i=0; i<images.length; i++ )
		{
			if( images[i].complete )
			{
				if( loaded[i] == false )
				{
					loaded[i] = true;
					counter++;
					nextDelay = nextDelay + 100;
				}
				$(images[i]).css("visibility","visible").delay(nextDelay).animate({opacity:1}, 300,
				function(){
					$(this).parent().removeClass("preload");
				});
			}
			else
			{
				$(images[i]).css( {"visibility":"hidden", opacity:0} );
			}
		}
	}, 100 );
});

$(document).ready(function(){

	/* Change the HTML5 data-rel attribute to rel */

	$('a[data-rel]').each(function() {
		$(this).attr('rel', $(this).data('rel'));
	});


	/* PrettyPhoto initialize */

	$("a[rel^='prettyPhoto[gallery1]']").prettyPhoto({
		animation_speed: 'fast',
		slideshow: 5000,
		autoplay_slideshow: false,
		opacity: 0.80,
		show_title: false,
		theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
		overlay_gallery: false,
		social_tools: false
	});


	/* Thumbnail hover effect */

	jQuery.fn.thumbHover = function(options) {
		var settings = jQuery.extend({ xOffset: 0, yOffset: 0 }, options);
		$(this).each(function()
		{
			var images = $(this).contents("img");
			if (images.length > 0)
			{
				var zoom = $('<div class="zoom"></div>').appendTo($(this));
				$(zoom).css({opacity: "0"});
				$(this).hover(function()
				{
					var x = images.width();
					var y = images.height();
					var xy =  images.position();
					$(zoom).css({width:x, height:y, top:xy.top + settings.xOffset, left:xy.left + settings.yOffset});
					$(zoom).stop().animate({"opacity": "0.85"}, 200);
				},
				function() {
					$(zoom).stop().animate({"opacity": "0"}, 200);
				});
			}
		});
		return this;
	};
	$("a[rel^='prettyPhoto[gallery1]']").thumbHover({ xOffset: 4, yOffset: 4 });


	/* Subscribe form validation */

	$(".subscribe").validate({
		focusInvalid: false,
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			}
		},
		errorPlacement: function(error, element) {
			error.hide();
		},
		submitHandler: function(){
			$.post($(".subscribe").attr('action'), $(".subscribe").serialize()+'&ajax=1', function(result){
				if(result)
				{
					$('#success').fadeIn(500);
				}
				else
				{
					$('#error').fadeIn(500);
				}
			});
		}
	});
	$("#success, #error").hover(function(){
		$(this).fadeOut();
	});


	/* Scroll to top */

	$('.top_btn').hide();
	$(window).scroll(function () {
		if( $(this).scrollTop() > 100 ) {
			$('.top_btn').fadeIn(300);
		}
		else {
			$('.top_btn').fadeOut(300);
		}
	});

	$('.top_btn a').click(function(){
		$('html, body').animate({scrollTop:0}, 500 );
		return false;
	});


	/* Live preview option panel */

	$('.option_panel').css({left:"-218px"});
	var tog = 0;
	$('a.opt_btn').click(function(){
		if( tog++ % 2 == 0 ) {
			$('.option_panel').stop().animate({left:"0px"}, 300 );
		}
		else {
			$('.option_panel').stop().animate({left:"-218px"}, 300 );
		}
		return false;
	});
})