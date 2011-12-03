/*!
* Aloha Editor
* Author & Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Licensed unter the terms of http://www.aloha-editor.com/license.html
*/

if (typeof EXAMPLE == 'undefined' || !EXAMPLE) {
	var EXAMPLE = {};
}

EXAMPLE.DummySavePlugin = new GENTICS.Aloha.Plugin('com.example.aloha.DummySave');

EXAMPLE.DummySavePlugin.languages = ['en', 'de'];

EXAMPLE.DummySavePlugin.init = function () {
	var that = this;
	var saveButton = new GENTICS.Aloha.ui.Button({
		label : this.i18n("button.save"),
		onclick : function() {
			that.save();
		}
	});
	
	var adminButton = new GENTICS.Aloha.ui.Button({
		label : this.i18n("button.admin"),
		onclick : function() {
			window.location.replace("/dashboard");
		}
	});
	
	GENTICS.Aloha.Ribbon.addButton(adminButton);
	GENTICS.Aloha.Ribbon.addButton(saveButton);
};

EXAMPLE.DummySavePlugin.save = function () {
	var content = "";
	var title = "";
	var value = "";

	jQuery.each(GENTICS.Aloha.editables,function (index, editable) {
		title = editable.getTitle();
		value = editable.getContents().replace(/\t/g, '');
		content = content + "Title: " + editable.getTitle() +"\nEditable ID: " + editable.getId() +"\nHTML code: " + editable.getContents() + "\n\n";
	});
	content = content.replace(/\t/g, '');

	$.ajax({
		type: 'POST',
		url: '/ajax/upload/page/',
		data: { filename: title, content: value },
		async: false,
		success: function(str) {
			var result = str.split("|");
			var valid = result[0];
			var tip = result[1];

			if(valid) {
				alert(this.i18n('saveMessage')+"\n\n"+content);
			} else {
				alert(tip);
			}
		}
	});
} ;