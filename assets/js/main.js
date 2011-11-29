(function($) {
	$(function(){
		$(document).ready(function(){

		$('ul.accordion a').click(function () {
			$(this).each(function() {
				$('ul.accordion a').removeClass('active');
				});
			$(this).addClass('active');
		});
		
		$('ul.accordion').accordion({
			active: ".active",
			autoHeight: false,
			header: ".opener",
			collapsible: true,
			event: "click"
		});
	});
	});
})(jQuery);

$(function(){
	hideFormText();
	initBackgroundResize();
	openClose('#slide-block','.menu-opener');
	initCategory();
});
/* init category */
function initCategory() {
	$('ul.top-nav').each(function(){
		var _list = $(this);
		var _links = _list.find('a');
		_links.each(function() {
			var _link = $(this);
			var _href = _link.get(0).hash;
			var _tab = $(_href);
			var closer = _tab.find('.close');

			if(_link.hasClass('active')) _tab.show();
			else _tab.hide();
			closer.click(function(){
				_links.filter('.active').each(function(){
					$($(this).removeClass('active').get(0).hash).hide();
				});
				return false;
			});
			_link.click(function(e){
				_links.filter('.active').each(function(){
					$($(this).removeClass('active').get(0).hash).hide();
				});
				_link.addClass('active');
				_tab.show();
				e.preventDefault();
			});
		});
	});
}
//open close
function openClose(holder,open){
	var activeClass = 'active';
	$(holder).each(function(){
		var parent = $(this);
		var opener = parent.find(open);
		opener.click(function(){
			if (parent.hasClass(activeClass)) parent.removeClass(activeClass)
			else parent.addClass(activeClass);
			return false;
		});
	});
}
// background resize init
function initBackgroundResize() {
	var holder = document.getElementById('bg');
	var images = holder.getElementsByTagName('img');
	for(var i = 0; i < images.length; i++) {
		backgroundStretcher.stretchImage(images[i]);
	}
	backgroundStretcher.setBgHolder(holder);
}
// image stretch module
backgroundStretcher = {
	images: [],
	holders: [],
	viewWidth: 0,
	viewHeight: 0,
	stretchByWindow: true, // or entire page
	init: function(){
		this.addHandlers();
		this.resizeAll();
		return this;
	},
	stretchImage: function(obj) {
		var img = new Image();
		img.onload = this.bind(function(){
			obj.iRatio = img.width / img.height;
			obj.iWidth = img.width;
			obj.iHeight = img.height;
			obj.style.msInterpolationMode = 'bicubic'; // IE7 fix
			this.resizeImage(obj);
		});
		img.src = obj.src;
		this.images.push(obj);
	},
	setBgHolder: function(obj) {
		this.holders.push(obj);
		this.resizeAll();
	},
	resizeImage: function(obj) {
		if(obj.iRatio) {
			var slideWidth = this.viewWidth;
			var slideHeight = slideWidth / obj.iRatio;
			if(slideHeight < this.viewHeight) {
				slideHeight = this.viewHeight;
				slideWidth = slideHeight * obj.iRatio;
			}
			obj.style.width = slideWidth+'px';
			obj.style.height = slideHeight+'px';
			obj.style.top = (this.viewHeight - slideHeight)/2+'px';
			obj.style.left = (this.viewWidth - slideWidth)/2+'px';
		}
	},
	resizeHolder: function(obj) {
		obj.style.width = this.viewWidth+'px';
		obj.style.height = this.viewHeight+'px';
	},
	getWindowWidth: function() {
		return typeof window.innerWidth === 'number' ? window.innerWidth : document.documentElement.clientWidth;
	},
	getWindowHeight: function() {
		return typeof window.innerHeight === 'number' ? window.innerHeight : document.documentElement.clientHeight;
	},
	getPageWidth: function() {
		if(!document.body) return 0;
		return Math.max(
			Math.max(document.body.clientWidth, document.documentElement.clientWidth),
			Math.max(document.body.offsetWidth, document.body.scrollWidth)
		);
	},
	getPageHeight: function() {
		if(!document.body) return 0;
		return Math.max(
			Math.max(document.body.clientHeight, document.documentElement.clientHeight),
			Math.max(document.body.offsetHeight, document.body.scrollHeight)
		);
	},
	resizeAll: function() {
		// crop holder width by window size
		for(var i = 0; i < this.holders.length; i++) {
			this.holders[i].style.width = '100%'; 
		}
		
		// delay required for IE to handle resize
		clearTimeout(this.resizeTimer);
		this.resizeTimer = setTimeout(this.bind(function(){
			// hide background holders
			for(var i = 0; i < this.holders.length; i++) {
				this.holders[i].style.display = 'none';
			}
			
			// calculate real page dimensions with hidden background blocks
			this.viewWidth = this[this.stretchByWindow ? 'getWindowWidth' : 'getPageWidth']();
			this.viewHeight = this[this.stretchByWindow ? 'getWindowHeight' : 'getPageHeight']();
			
			// show and resize all background holders
			for(i = 0; i < this.holders.length; i++) {
				this.holders[i].style.display = 'block';
				this.resizeHolder(this.holders[i]);
			}
			for(i = 0; i < this.images.length; i++) {
				this.resizeImage(this.images[i]);
			}
		}),10);
	},
	addHandlers: function() {
		if (window.addEventListener) window.addEventListener('resize', this.bind(this.resizeAll), false);
		else if (window.attachEvent) window.attachEvent('onresize', this.bind(this.resizeAll));
	},
	bind: function(fn, scope, args) {
		var newScope = scope || this;
		return function() {
			return fn.apply(newScope, args || arguments);
		}
	} 
}.init();
//hide form text
function hideFormText() {
	var _inputs = document.getElementsByTagName('input');
	var _txt = document.getElementsByTagName('textarea');
	var _value = [];
	
	if (_inputs) {
		for(var i=0; i<_inputs.length; i++) {
			if (_inputs[i].type == 'text' || _inputs[i].type == 'password') {
				
				_inputs[i].index = i;
				_value[i] = _inputs[i].value;
				
				_inputs[i].onfocus = function(){
					if (this.value == _value[this.index])
						this.value = '';
				}
				_inputs[i].onblur = function(){
					if (this.value == '')
						this.value = _value[this.index];
				}
			}
		}
	}
	if (_txt) {
		for(var i=0; i<_txt.length; i++) {
			_txt[i].index = i;
			_value['txt'+i] = _txt[i].value;
			
			_txt[i].onfocus = function(){
				if (this.value == _value['txt'+this.index])
					this.value = '';
			}
			_txt[i].onblur = function(){
				if (this.value == '')
					this.value = _value['txt'+this.index];
			}
		}
	}
}
// iepp v2.1pre @jon_neal & @aFarkas github.com/aFarkas/iepp
// html5shiv @rem remysharp.com/html5-enabling-script
// Dual licensed under the MIT or GPL Version 2 licenses
/*@cc_on(function(a,b){function r(a){var b=-1;while(++b<f)a.createElement(e[b])}if(!window.attachEvent||!b.createStyleSheet||!function(){var a=document.createElement("div");return a.innerHTML="<elem></elem>",a.childNodes.length!==1}())return;a.iepp=a.iepp||{};var c=a.iepp,d=c.html5elements||"abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|subline|summary|time|video",e=d.split("|"),f=e.length,g=new RegExp("(^|\\s)("+d+")","gi"),h=new RegExp("<(/*)("+d+")","gi"),i=/^\s*[\{\}]\s*$/,j=new RegExp("(^|[^\\n]*?\\s)("+d+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),k=b.createDocumentFragment(),l=b.documentElement,m=b.getElementsByTagName("script")[0].parentNode,n=b.createElement("body"),o=b.createElement("style"),p=/print|all/,q;c.getCSS=function(a,b){try{if(a+""===undefined)return""}catch(d){return""}var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,p.test(b)&&h.push(c.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},c.parseCSS=function(a){var b=[],c;while((c=j.exec(a))!=null)b.push(((i.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(g,"$1.iepp-$2")+c[4]);return b.join("\n")},c.writeHTML=function(){var a=-1;q=q||b.body;while(++a<f){var c=b.getElementsByTagName(e[a]),d=c.length,g=-1;while(++g<d)c[g].className.indexOf("iepp-")<0&&(c[g].className+=" iepp-"+e[a])}k.appendChild(q),l.appendChild(n),n.className=q.className,n.id=q.id,n.innerHTML=q.innerHTML.replace(h,"<$1font")},c._beforePrint=function(){if(c.disablePP)return;o.styleSheet.cssText=c.parseCSS(c.getCSS(b.styleSheets,"all")),c.writeHTML()},c.restoreHTML=function(){if(c.disablePP)return;n.swapNode(q)},c._afterPrint=function(){c.restoreHTML(),o.styleSheet.cssText=""},r(b),r(k);if(c.disablePP)return;m.insertBefore(o,m.firstChild),o.media="print",o.className="iepp-printshim",a.attachEvent("onbeforeprint",c._beforePrint),a.attachEvent("onafterprint",c._afterPrint)})(this,document)@*/
$(function(){
	$('ul.accordion2').accordion({
		active: ".selected",
		autoHeight: false,
		header: ".opener",
		collapsible: true,
		event: "click"
	});
});