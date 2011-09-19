function Link(url)  {
  document.location.href = url;
}

jQuery.fn.confirm = function(message, callback) {
	return this.each(function() {
		AttentionBox.showMessage(message,
		{
			buttons : 
			[
				{ caption : "Cancel", cancel: false },
				{ caption : "Delete" }
			],
			callback: function(action)
			{	
				if (action == "Delete")
				{
					window.location= callback;
				}
			}
		});
	});
}

jQuery.fn.log = function (msg) {
  console.log("%s: %o", msg, this);
  return this;
};

jQuery.fn.open_colorbox = function() {
	return this.each(function() {
		$(".lightbox").colorbox({
			innerHeight		: 400, 
			initialWidth	: 400,
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

jQuery.fn.plupload_button = function() {
	return this.each(function() {
		var $this = $(this);
		var params = Site.helpers.attr_params($this.attr('title'));

    	var step = 0;
	    var uploader = new plupload.Uploader({
	        runtimes: 'flash,silverlight',
	        browse_button: 'pick_files',
			multipart: true, 
	        multi_selection: false,
	        max_file_size: '2mb',
	        unique_names: true,
	        url: '/admin/ajax/' + $this.attr('rel'), 
	        flash_swf_url: '/js/plupload.flash.swf',
	        silverlight_xap_url: '/js/plupload.silverlight.xap',
	        filters: [{ 
				title: "Image files", extensions: "jpg,gif,png,JPG,GIF,PNG" 
			}]
	    });
	
	    uploader.bind('UploadFile', function(up, file) {
	        up.settings.url = '/admin/ajax/' + $this.attr('rel')
	    });

	    uploader.bind('Error', function(uploader, error) {
		    if (error.code == plupload.FILE_SIZE_ERROR) {
				AttentionBox.showMessage('Your file is larger than the maximum size limit of 2mb.');
		    }
	    });

	    uploader.bind('QueueChanged', function(up) {
	        if (uploader.state != 2 & up.files.length > 0) {
	            $('#uploadIcon').html('<img src="/Images/throbber.gif" />');
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
				$this.parent().prev().children().html('<a href="#" class="delLink"></a><img src="' + Site.config.upload_dir + msg + '" width="' + $this.attr('width') + '" height="' + $this.attr('height') + '" data-index="1" data-admincode="undefined" >').parent().show().css("background", "none").next().hide();
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

var Site = {
	
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
			
			$('.confirm').click(function (e) {
				e.preventDefault();
				$(this).confirm($(this).attr('rel'), $(this).attr('href'));
			});
			
			$(".confirm_pass").blur(function(){
				var el = $(this);
				pw1 = document.form.pass.value;
				pw2 = document.form.confirm.value;
				
				el.next('span').remove();
				
				if (pw1 != pw2 || pw2 == '') {
					el.after('<span class="tooltip" style="margin-left: 10px;" title="Please confirm the password entry"><img src="/images/icons/exclamation.png"></span>'); 
					el.css( 'background-color', '#FFFF99' );
					$('.tooltip').bt();
				} else if (pw2 != ''){
					el.after('<span class="tooltip" style="margin-left: 13px;"><img src="/images/icons/accept.png"></span>') ;
					el.css( 'background-color', '#FFFFFF' );
				}
			});
			
			$(".fileDelete").click(function (e) {
				e.preventDefault();
				var el = $(this);
				el.confirm("Deleting this file cannot be undone.  Are you sure you wish to continue?", function () {
					$.ajax({
						type: 'POST',
						url: '/admin/ajax/delete/',
						data: { id: el.attr('id') },
						async: false,
						success: function(str) {
							el.parents('tr').remove();
						}
					});
				});
			});
			
			$(".filebrowser").colorbox({
				innerWidth		: 700, 
				innerHeight		: 420, 
				scrolling		: false,
				preloading		: true, 
				iframe			: true,
				href			: "/js/tiny_mce/plugins/tinybrowser/tinybrowser.php?type=file&feid=elementid"
			});
			
			$(".imagebrowser").colorbox({
				innerWidth		: 700, 
				innerHeight		: 420, 
				scrolling		: false,
				preloading		: true, 
				iframe			: true,
				href			: "/js/tiny_mce/plugins/tinybrowser/tinybrowser.php?type=image&feid=elementid"
			});

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
			
			// Add markItUp! to your textarea in one line
			// $('textarea').markItUp( { Settings }, { OptionalExtraSettings } );
			$('#markItUp').markItUp(mySettings);

			// You can add content from anywhere in your page
			// $.markItUp( { Settings } );	
			$('.add').click(function() {
		 		$.markItUp( { 	openWith:'<opening tag>',
								closeWith:'<\/closing tag>',
								placeHolder:"New content"
							}
						);
		 		return false;
			});

			// And you can add/remove markItUp! whenever you want
			// $(textarea).markItUpRemove();
			$('.toggle').click(function() {
				if ($("#markItUp.markItUpEditor").length === 1) {
		 			$("#markItUp").markItUpRemove();
					$("span", this).text("get markItUp! back");
				} else {
					$('#markItUp').markItUp(mySettings);
					$("span", this).text("remove markItUp!");
				}
		 		return false;
			});
			
			$('input[type=button]').click(function() {
				var el = $(this);
				location.href = el.attr('rel');
			});
					
			$('.zone').click(function (e) {
				var el = $(this);
				el.parents('form').find("#pick_files").attr('rel', 'upload/advert/' + el.attr('value') + '/');
				$('#pick_files').plupload_button();
			});

			$(this).find('form .hint').simplehints();
			$('#focus').focus();
			$('#help').accordion({ active: -1, collapsible: true });
			$('#pick_files').plupload_button('pick_files');
			$('.lightbox').open_colorbox();
			$('.tooltip').bt();
			$('.select').after('<div class="select_skin"></div>');
			$("input:checkbox, input:radio").uniform();
			// $("body select").msDropDown();
			
			// Long Drop Down Menu
			var $menu = $('#ldd_menu');
			
			/**
			 * for each list element,
			 * we show the submenu when hovering and
			 * expand the span element (title) to 300px
			 */
			$menu.children('li').each(function(){
				var $this = $(this);
				var $span = $this.children('span');
				$span.data('width',$span.width());
				
				$this.bind('mouseenter',function(){
					$menu.find('.ldd_submenu').stop(true,true).hide();
					$span.stop().animate({'width':'300px'},300,function(){
						$this.find('.ldd_submenu').slideDown(300);
					});
				}).bind('mouseleave',function(){
					$this.find('.ldd_submenu').stop(true,true).hide();
					$span.stop().animate({'width':$span.data('width')+'px'},300);
				});
			});
			
			// Tabs
			$('#tabs, #tabs2, #tabs5').tabs();

			// Datepicker
			$('#datepicker').datepicker({
				inline: true
			});
			$('#publish_date').datepicker({ 
				dateFormat: 'yy-mm-dd' 
			});
			$('#start').datepicker({ 
				dateFormat: 'yy-mm-dd' 
			});
			$('#end').datepicker({ 
				dateFormat: 'yy-mm-dd' 
			});

			//Hover states on the static widgets
			$('#dialog_link, ul#icons li').hover(
				function() { $(this).addClass('ui-state-hover'); }, 
				function() { $(this).removeClass('ui-state-hover'); }
			);

			$(".portlet").addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
				.find(".portlet-header")
					.addClass("ui-widget-header")
					.prepend('<span class="ui-icon ui-icon-circle-arrow-s"></span>')
					.end()
				.find(".portlet-content");

			$(".portlet-header .ui-icon").click(function() {
				$(this).toggleClass("ui-icon-circle-arrow-n");
				$(this).parents(".portlet:first").find(".portlet-content").slideToggle();
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

Site.init();

var upload_number = 0;
function addFileInput() {
	upload_number++;
	var d = document.createElement("div");
	var text = document.createElement("input");
	var file = document.createElement("input");
	var filename = document.createElement("input");

	text.setAttribute("type", "text");
	text.setAttribute("id", "fakefile_doc");
	text.setAttribute("value", "Browse for file");

	file.setAttribute("type", "file");
	file.setAttribute("onmouseout", "if(this.value!='') {document.getElementById('filevalue"+ upload_number + "').value = (this.value); document.getElementById('moreUploadsLink').style.display = 'block';}");
	file.setAttribute("name", "uploadfile[]");
	file.setAttribute("class", "file");
	file.setAttribute("id", "uploadfile");

	filename.setAttribute("type", "text");
	filename.setAttribute("id", "filevalue"+upload_number);
	filename.setAttribute("class", "filevalue");
	filename.setAttribute("style", "width: 95%;");
	filename.setAttribute("value", "");

	d.appendChild(text);
	d.appendChild(file);
	d.appendChild(filename);
	document.getElementById("moreUploads").appendChild(d);
}

var archive_preview = {
	minHeight:500,
	minWidth:480,
	maxWidth:480, 
	containerId: 'preview-container', 
	position: ['10%']
}



