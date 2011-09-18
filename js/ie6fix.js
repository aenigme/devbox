(function() {
	// fix ie blinking
	var m = document.uniqueID && document.compatMode && !window.XMLHttpRequest && document.execCommand;
	try { if (!!m) { m('BackgroundImageCache', false, true); } }
	catch (oh) { };
})();