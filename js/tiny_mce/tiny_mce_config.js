tinyMCE.init({
	mode : "textareas",
	theme : "advanced",
	skin : "thebigreason",
	file_browser_callback : "tinyBrowser",
	editor_selector : "wysiwyg",
	document_base_url : "",
	relative_urls : false,
	plugins : "paste,preview,advimage,tabfocus,table,fullscreen,media,safari",
	theme_advanced_buttons1 : "formatselect,fontsizeselect,separator,bold,italic,underline,bullist,separator,justifyleft,justifycenter,justifyright,justifyfull,separator,pastetext,pasteword,separator,code,preview,fullscreen",
	theme_advanced_buttons2 : "link,unlink,anchor,separator,hr,removeformat,visualaid,separator,tablecontrols,separator,image,media",
	theme_advanced_buttons3 : "",
	theme_advanced_toolbar_location : "top",
	theme_advanced_toolbar_align : "left",
	paste_auto_cleanup_on_paste : true,
	paste_remove_styles_if_webkit : true, 
	content_css: "/css/tinymce.css",
	relative_urls : false, 
	inline_styles : true,
	force_p_newlines: true,
	force_br_newlines : true,
	tab_focus : ':prev,:next'
});

tinyMCE.init({
		mode : "textareas",
		theme : "advanced",
		skin : "thebigreason",
		plugins : "paste,preview,fullscreen,safari",
		editor_selector : "rte",
		document_base_url : "",
		relative_urls : false,
		theme_advanced_buttons1 : "formatselect,fontsizeselect,separator,bold,italic,underline,bullist,separator,justifyleft,justifycenter,justifyright,justifyfull,separator,link,unlink,anchor,image,media,separator,code,preview",
		theme_advanced_buttons2 : "",
		theme_advanced_buttons3 : "",
		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		theme_advanced_resizing : false,
		paste_auto_cleanup_on_paste : true,
		paste_remove_styles_if_webkit : true,
		content_css: "/css/tinymce.css",
		force_p_newlines: true,
		force_br_newlines : true,
		tab_focus : ':prev,:next'
});

tinyMCE.init({
		mode : "textareas",
		theme : "advanced",
		skin : "thebigreason",
		plugins : "paste,safari",
		editor_selector : "simple",
		document_base_url : "",
		relative_urls : false,
		theme_advanced_buttons1 : "bold,italic,underline,bullist,separator,link,unlink,anchor,image,separator,code",
		theme_advanced_buttons2 : "",
		theme_advanced_buttons3 : "",
		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		theme_advanced_resizing : false,
		paste_auto_cleanup_on_paste : true,
		paste_remove_styles_if_webkit : true,
		content_css: "/css/tinymce.css",
		force_p_newlines: true,
		force_br_newlines : true,
		tab_focus : ':prev,:next'
});
tinyMCE.init({
		mode : "textareas",
		theme : "advanced",
		skin : "thebigreason",
		plugins : "paste,safari",
		editor_selector : "notepad",
		theme_advanced_buttons1 : "pastetext,pasteword",
		theme_advanced_buttons2 : "",
		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		theme_advanced_statusbar_location : "bottom",
		theme_advanced_resizing : false,
		paste_auto_cleanup_on_paste : true,
		paste_remove_styles_if_webkit : true, 
		content_css: "/css/tinymce.css",
		forced_root_block : false,
		force_p_newlines: false,
		force_br_newlines : true,
		tab_focus : ':prev,:next',

		
		setup : function(ed) {
			  var el = $(this);
		      ed.onKeyUp.add(function(ed, e) {

		          var p = tinymce.DOM.get(tinyMCE.activeEditor.id + '_path_row');
		          if(ed.getContent().length > this.textLimit) {
		            this.setContent(this.getContent().substring(0,this.textLimit));
		            tinyMCE.execInstanceCommand(tinyMCE.activeEditor.id,"selectall", false, null);
		            if (tinyMCE.isMSIE) {
		                rng = this.selection.getRng();
		                rng.collapse(false);
		                rng.select();
		            }
		            else {
		                sel = this.selection.getSel();
		                sel.collapseToEnd();
		            }
		              tinymce.DOM.setHTML(p, 'Character Limit (0)');
		          } else {
		            tinymce.DOM.setHTML(p, 'Character Limit (' + (this.textLimit - ed.getContent().length) + ')');
		          }
		      });
		      ed.onInit.add(function(ed) {
		          this.textLimit = tinymce.DOM.getAttrib(ed.id, 'rel', 255);
		          var p = tinymce.DOM.get(ed.id + '_path_row', this.textLimit);
		          tinymce.DOM.setHTML(p, 'Character Limit (' + this.textLimit + ')');
		      });
		   },
		
});