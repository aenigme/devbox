var EZee = {
	
	// this vars should be set in <head> server-side
	config: {
		base_url: '/',
		site_url: '/', 
		upload_dir: '/useruploads/images/'
	},
	
	// this method is called on every page
	init: function() {
		
		// On Dom Ready
		jQuery(function($) {
			
			$('input[type=button]#addOption').click(function(e) {
				e.preventDefault();
				var input = document.createElement("input");
				var option = document.getElementById("option");
				
				if (option.value == '') {
					$('div#rowOption').addClass('error');
				} else {
					$('div#rowOption').removeClass('error');
					$('ol#viewOptions').append('<li rel="' + option.value + '">' + option.value + '<a href="javascript:;" class="label important removeOption">remove</a></li>'); // Update preview
					
					input.setAttribute("type", "hidden");
					input.setAttribute("name", "option[]");
					input.setAttribute("value", option.value); // Update hidden fields
					
					$('input#option').val('').focus(); // Reset option field
					
					document.getElementById("moreOptions").appendChild(input);
					$("#btnContinue").css('visibility', 'visible');
				}
				return false;
			});
			
			$("#matrix").change(function(e) {
				var el = $(this).children(':selected').attr('rel');
				$('.optionChoice').css('visibility', 'hidden');
				$(el).css('visibility', 'visible');
	        });
		});
		
		// On Window Load
		jQuery(window).load(function ($) {
			
		});
		
		// Load Immediately
		(function($) {
			
		})(jQuery);

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

EZee.init();
