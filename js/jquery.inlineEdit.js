/**
* jQuery Inline Edit
* Copyright (c) 2009 Markus Hedlund, Mimmin AB
* Version 1.0
* Licensed under MIT license
* http://www.opensource.org/licenses/mit-license.php
* http://labs.mimmin.com/inlineedit
*
*
* Adds inline edit to html elements with classes editableSingle and editableMulti.
* Elements must have class to identify type of data and id.
* Types are linked to urls
* 
* Example:
* <li class="editableSingle categoryName id3">
* 
* Javascript:
* $.inlineEdit({categoryName: 'category/edit/id/'});
* 
* 
* Or:
* <td class="editableSingle videoTitle id3"></td>
* <td class="editableMulti videoDescription id3"></td>
* 
* Javascript:
* $.inlineEdit({
*     videoTitle: '/video/edit/title/',
*     videoDescription: '/video/edit/description/'
* });
*/

(function($){
$.inlineEdit = function(urls, options){
	
	var editableUrls = urls;
	
	var options = jQuery.extend({
		afterSave: function(){},
		afterRemove: function(){},
		getId: getId,
		filterElementValue: function($o){return $o.html();},
		animate: false,
		colors: {
			success: 'green',
			error: 'red'
		}
	}, options);
	
	var initialValues = {};
	var editableFields = false;
	var linkClicked = false;
	
	if ($('.editableSingle, .editableMulti, .editableSelect').length > 0) {
		var simpleMode = $('.editableSingle, .editableMulti, .editableSelect')[0].tagName.toLowerCase() != 'td';
		options.colors.standard = $('.editableSingle, .editableMulti, .editableSelect').eq(0).css('color');
	}
	
	$('.editableSingle').click(function(){
		if (linkClicked) {
			linkClicked = false;
			return;
		}
		
		if (!editableFields || $('.editField').length < editableFields) {
			var value = options.filterElementValue($(this));
			saveInitialValue($(this));
			$(this).addClass('isEditing').css('color', options.colors.standard).stop();
			
			if ($('.editFieldFirst').length == 0) {
				editableFields = $(this).siblings('.editableSingle, .editableMulti, .editableSelect').length + 1;
				$(this).html('<div class="editFieldWrapper"><input type="text" value="' + value + '" class="input bold full editField editFieldFirst" /></div>');
				
				if (!simpleMode) {                       
				   $(this).siblings('.editableSingle, .editableMulti, .editableSelect').click();
				} else {
					editableFields = 1;
				}
				
				addSaveControllers(function(){
					$('.editFieldFirst').focus();
				});
			} else {
				$(this).html('<div class="editFieldWrapper"><input type="text" value="' + value + '" class="input bold full editField" /></div>');
			}
		}
	});
	
	$('.editableMulti').click(function(){
		if (linkClicked) {
			linkClicked = false;
			return false;
		}
		
		if (!editableFields || $('.editField').length < editableFields) {
			var value = options.filterElementValue($(this));
			saveInitialValue($(this));
			$(this).addClass('isEditing').css('color', options.colors.standard).stop();
			
			if ($('.editFieldFirst').length == 0) {
				editableFields = $(this).siblings('.editableSingle, .editableMulti, .editableSelect').length + 1;
				$(this).html('<div class="editFieldWrapper"><textarea class="textarea bold full editField editFieldFirst" style="margin-top: 8px;">' + value + '</textarea></div>');
				
				if (!simpleMode) {                       
				   $(this).siblings('.editableSingle, .editableMulti, .editableSelect').click();
				}
				
				addSaveControllers(function(){
					$('.editFieldFirst').focus();
				});
			} else {
				$(this).html('<div class="editFieldWrapper"><textarea class="textarea bold full editField" style="margin-top: 8px;">' + value + '</textarea></div>');
			}
		}
	});

	$('.editableSelect').click(function(){
		if (linkClicked) {
			linkClicked = false;
			return false;
		}
		
		if (!editableFields || $('.editField').length < editableFields) {
			var value = options.filterElementValue($(this));
			saveInitialValue($(this));
			$(this).addClass('isEditing').css('color', options.colors.standard).stop();
			
			editableFields = $(this).siblings('.editableSingle, .editableMulti, .editableSelect').length + 1;
			var arrValues = options.data;
			var option = '';
			$.each(arrValues,function( objKey, objValue ) {
				var select = ( objValue == value ) ? 'selected' : '';
				// KLUDGE:  updating the td.html(value) for the select dropdown.
				// option += '<option value="' + objKey +'"' + select + '>' + objValue + '</option>';
				option += '<option value="' + objValue +'"' + select + '>' + objValue + '</option>';
			});
			
			if ($('.editFieldFirst').length == 0) {
				$(this).html('<div class="editFieldWrapper">' +
					'<select class="select bold full editField editFieldFirst" style="margin-top: 8px;">' + 
					option +
					'</select></div>');
				
				if (!simpleMode) {                       
				   $(this).siblings('.editableSingle, .editableMulti').click();
				}
				
				addSaveControllers(function(){
					$('.editFieldFirst').focus();
				});
			} else {
				$(this).html('<div class="editFieldWrapper">' +
					'<select class="select bold full editField editFieldFirst" style="margin-top: 8px;">' + 
					option +
					'</select></div>');
			}
		}
	});	
	$('.editableSingle a, .editableMulti a, .editableSelect a,').click(function(){
		linkClicked = true;
	});
	
	function addSaveControllers(callback)
	{
		if ($('.editFieldWrapper:last').parent().hasClass('removable')) {
			$('.editFieldWrapper:last').append('<div class="clearfix"></div><div class="editFieldSaveControllers"><button class="button-secondary float-left editFieldSave">Save</button>' +
				'<button class="button-secondary float-left editFieldRemove">Delete</button>' +
				'<button class="button-secondary float-left editFieldCancel">Cancel</button></div>');
		} else {
			$('.editFieldWrapper:last').append('<div class="clearfix"></div><div class="editFieldSaveControllers"><button class="button-secondary float-left editFieldSave">Save</button>' +
				'<button class="button-secondary float-left editFieldCancel">Cancel</button></div><div class="clearfix"></div>');
		}
		$('.editFieldSaveControllers > button.editFieldSave').click(editSave);
		$('.editFieldSaveControllers > button.editFieldCancel').click(editCancel);
		$('.editFieldSaveControllers > button.editFieldRemove').click(editRemove);
		$('input.editField').keydown(function(e){
			if (e.keyCode == 13) {
				// Enter
				editSave();
			} else if (e.keyCode == 27) {
				// Escape
				editCancel();
			}
		});
		
		if (options.animate) {
			$('.editFieldWrapper').slideDown(500, callback);
		} else {
			$('.editFieldWrapper').show();
			callback();
		}
	}
	
	function editCancel(e)
	{
		linkClicked = typeof(e) != 'undefined';   // If e is set, call comes from mouse click
		
		$('.editField').each(function(){
			var $td = $(this).parents('.editableSingle, .editableMulti, .editableSelect');
			removeEditField($td, getInitialValue($td), false);
		});
	}
	
	function editRemove()
	{
		linkClicked = true;
		
		AttentionBox.showMessage('Are you sure you wish to delete this record?',
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
					$('.editFieldSaveControllers > button, .editField').attr('disabled', 'disabled').html('Removing...');

					var $td = $('.editField').eq(0).parents('.editableSingle, .editableMulti .editableSelect');
					var url = editableUrls.remove;
					var id = options.getId($td);

					$.ajax({
						url: url + id + '/',
						type: 'POST',
						success: function(msg){
							$('.editField').each(function(){
								var $td = $(this).parents('.editableSingle, .editableMulti, .editableSelect');

								if (msg == 1) {
									if (options.animate) {
										$td.slideUp(500, function(){
											$(this).remove();
										});
									} else {
										$td.remove();
									}
								} else {
									removeEditField($td, getInitialValue($td), false, options.colors.error);
								}
							});

							options.afterRemove({
								success: msg == 1,
								id: id
							});
						},
						error: function(){
							$('.editField').each(function(){
								var $td = $(this).parents('.editableSingle, .editableMulti, .editableSelect');
								removeEditField($td, getInitialValue($td), false, options.colors.error);
							});
						}
					});
				}
			}
		});

	}
	
	function removeEditField($td, value, animateColor, fromColor)
	{
		var f = function(){
			$td.html(value).removeClass('isEditing');
			if (animateColor) {
				$td.css('color', fromColor)/*.animate({color: options.colors.standard},5000)*/;
				setTimeout(function(){
					$td.css('color', options.colors.standard);
				}, 5000);
			} else if (typeof(fromColor) != 'undefined') {
				$td.css('color', fromColor);
			}
		};
		
		if (options.animate) {
			$td.children('.editFieldWrapper').slideUp(500, f);
		} else {
			$td.children('.editFieldWrapper').hide();
			f();
		}
	}
	
	function saveInitialValue($td)
	{
		var index = options.getId($td) + getTypeAndUrl($td).type;
		initialValues[index] = $td.html();
	}
	
	function getInitialValue($td)
	{
		var index = options.getId($td) + getTypeAndUrl($td).type;
		return initialValues[index];
	}
	
	function getId($td)
	{
		var id;
		$.each($td.attr('class').split(' '), function(index, name){
			if (name.match(/^id[0-9]*$/)) {
				id = name.match(/^id([0-9]*)$/)[1];
				return false;
			}
		});
		return id;
	}
	
	function getTypeAndUrl($td)
	{
		var typeAndUrl;
		$.each(editableUrls, function(index, name){
			if ($td.hasClass(index)) {
				typeAndUrl = {type: index, url: name};
				return false;
			}
		});
		return typeAndUrl;
	}
	
	function editSave()
	{
		$('.editFieldSaveControllers > button, .editField').attr('disabled', 'disabled');
		$('.editField').each(function(){
			var $td = $(this).parents('.editableSingle, .editableMulti, .editableSelect');
			var typeAndUrl = getTypeAndUrl($td);
			var url = typeAndUrl.url;   // Get save URL
			var id = options.getId($td);
			var value = $(this).val();
			var color = options.colors.standard;
			
			$.ajax({
				url: url + id + '/',
				data: {data: value},
				type: 'POST',
				success: function(msg){
					if (msg == 1) {
						removeEditField($td, value, true, options.colors.success);
					} else {
						removeEditField($td, value, false, options.colors.error);
					}
					
					options.afterSave({
						success: msg == 1,
						type: typeAndUrl.type,
						id: id,
						value: value
					});
				},
				error: function(){
					removeEditField($td, value, false, options.colors.error);
				}
			});
		});
	}
};
})(jQuery);