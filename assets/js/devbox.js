jQuery.fn.plupload_button = function() {
	return this.each(function() {
		var $this = $(this);
		var params = devbox.helpers.attr_params($this.attr('title'));

    	var step = 0;
	    var uploader = new plupload.Uploader({
	        runtimes: 'flash,silverlight',
	        browse_button: 'pick_files',
			multipart: true, 
	        multi_selection: false,
	        max_file_size: '2mb',
	        unique_names: true,
	        url: '/ajax/' + $this.attr('rel'), 
	        flash_swf_url: '/assets/js/plupload.flash.swf',
	        silverlight_xap_url: '/assets/js/plupload.silverlight.xap',
	        filters: [{ 
				title: "Image files", extensions: "jpg,gif,png,JPG,GIF,PNG" 
			}]
	    });
	
	    uploader.bind('UploadFile', function(up, file) {
	        up.settings.url = '/ajax/' + $this.attr('rel')
	    });

	    uploader.bind('Error', function(uploader, error) {
		    if (error.code == plupload.FILE_SIZE_ERROR) {
				AttentionBox.showMessage('Your file is larger than the maximum size limit of 2mb.');
		    }
	    });

	    uploader.bind('QueueChanged', function(up) {
	        if (uploader.state != 2 & up.files.length > 0) {
	            $('#uploadIcon').html('<img src="/assets/images/ajax-loader.gif" />');
	            uploader.start();
	        }
	    });

	    uploader.bind('FileUploaded', function(Uploader, file, response) {
			var result = response.response.split("|");
			var id = result[0];
			var msg = result[1];
			
			if(id == 'error') {
				AttentionBox.showMessage(msg);
			} else {
				$this.parent().prev().children().html('<a href="#" class="delLink"></a><img src="' + devbox.config.upload_dir + msg + '" width="' + $this.attr('width') + '" height="' + $this.attr('height') + '" data-index="1" data-admincode="undefined" >').parent().show().css("background", "none").next().hide();
				$this.parent().prev().children('#imageCode').attr('value', id);
			}
			
	        $(".delLink").click(function(e) {
	            $(this).parent().parent().next().show();
	            $(this).parent().parent().hide();
				$('#imageCode').attr('value', '');
	            uploader.refresh();
	            e.preventDefault();
	        });
	    });

	    uploader.bind('UploadProgress', function(up, file) {
	        $('#' + file.id).find('.title').html(file.percent + '%');
	    });
	
		uploader.init();
	});
};

var devbox = {
	
	config: {
		base_url: '/',
		site_url: '/', 
		upload_dir: '/uploads/images/'
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
			
			$('#pick_files').plupload_button('pick_files');
			
			var config = {
				toolbar:
				[
					['Source', '-', 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink'],
					['UIColor']
				]
			};

			$('.html5').ckeditor(config);
			
			// Picmeleo Manager
			// $('#pick_files').click(function() {
			// 	picmeleoApi.open('http://www.nexersys.com/assets/images/nexersys/img-07.png');
			// });
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

devbox.init();
