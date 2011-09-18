/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();

/*
 * jQuery validation plug-in 1.5.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2008 JÃ¶rn Zaefferer
 *
 * $Id: jquery.validate.js 6110 2009-01-13 22:21:29Z joern.zaefferer $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($) {

$.extend($.fn, {
  // http://docs.jquery.com/Plugins/Validation/validate
  validate: function( options ) {
    
    // if nothing is selected, return nothing; can't chain anyway
    if (!this.length) {
      // options && options.debug && window.console && console.warn( "nothing selected, can't validate, returning nothing" );
      return;
    }
    
    // check if a validator for this form was already created
    var validator = $.data(this[0], 'validator');
    if ( validator ) {
      return validator;
    }
    
    validator = new $.validator( options, this[0] );
    $.data(this[0], 'validator', validator); 
    
    if ( validator.settings.onsubmit ) {
    
      // allow suppresing validation by adding a cancel class to the submit button
      this.find("input, button").filter(".cancel").click(function() {
        validator.cancelSubmit = true;
      });
    
      // validate the form on submit
      this.submit( function( event ) {
        if ( validator.settings.debug )
          // prevent form submit to be able to see console output
          event.preventDefault();
          
        function handle() {
          if ( validator.settings.submitHandler ) {
            validator.settings.submitHandler.call( validator, validator.currentForm );
            return false;
          }
          return true;
        }
          
        // prevent submit for invalid forms or custom submit handlers
        if ( validator.cancelSubmit ) {
          validator.cancelSubmit = false;
          return handle();
        }
        if ( validator.form() ) {
          if ( validator.pendingRequest ) {
            validator.formSubmitted = true;
            return false;
          }
          return handle();
        } else {
          validator.focusInvalid();
          return false;
        }
      });
    }
    
    return validator;
  },
  // http://docs.jquery.com/Plugins/Validation/valid
  valid: function() {
        if ( $(this[0]).is('form')) {
            return this.validate().form();
        } else {
            var valid = false;
            var validator = $(this[0].form).validate();
            this.each(function() {
        valid |= validator.element(this);
            });
            return valid;
        }
    },
  // attributes: space seperated list of attributes to retrieve and remove
  removeAttrs: function(attributes) {
    var result = {},
      $element = this;
    $.each(attributes.split(/\s/), function(index, value) {
      result[value] = $element.attr(value);
      $element.removeAttr(value);
    });
    return result;
  },
  // http://docs.jquery.com/Plugins/Validation/rules
  rules: function(command, argument) {
    var element = this[0];
    
    if (command) {
      var settings = $.data(element.form, 'validator').settings;
      var staticRules = settings.rules;
      var existingRules = $.validator.staticRules(element);
      switch(command) {
      case "add":
        $.extend(existingRules, $.validator.normalizeRule(argument));
        staticRules[element.name] = existingRules;
        if (argument.messages)
          settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
        break;
      case "remove":
        if (!argument) {
          delete staticRules[element.name];
          return existingRules;
        }
        var filtered = {};
        $.each(argument.split(/\s/), function(index, method) {
          filtered[method] = existingRules[method];
          delete existingRules[method];
        });
        return filtered;
      }
    }
    
    var data = $.validator.normalizeRules(
    $.extend(
      {},
      $.validator.metadataRules(element),
      $.validator.classRules(element),
      $.validator.attributeRules(element),
      $.validator.staticRules(element)
    ), element);
    
    // make sure required is at front
    if (data.required) {
      var param = data.required;
      delete data.required;
      data = $.extend({required: param}, data);
    }
    
    return data;
  }
});

// Custom selectors
$.extend($.expr[":"], {
  // http://docs.jquery.com/Plugins/Validation/blank
  blank: function(a) {return !$.trim(a.value);},
  // http://docs.jquery.com/Plugins/Validation/filled
  filled: function(a) {return !!$.trim(a.value);},
  // http://docs.jquery.com/Plugins/Validation/unchecked
  unchecked: function(a) {return !a.checked;}
});


$.format = function(source, params) {
  if ( arguments.length == 1 ) 
    return function() {
      var args = $.makeArray(arguments);
      args.unshift(source);
      return $.format.apply( this, args );
    };
  if ( arguments.length > 2 && params.constructor != Array  ) {
    params = $.makeArray(arguments).slice(1);
  }
  if ( params.constructor != Array ) {
    params = [ params ];
  }
  $.each(params, function(i, n) {
    source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
  });
  return source;
};

// constructor for validator
$.validator = function( options, form ) {
  this.settings = $.extend( {}, $.validator.defaults, options );
  this.currentForm = form;
  this.init();
};

$.extend($.validator, {

  defaults: {
    messages: {},
    groups: {},
    rules: {},
    debug: false,
    errorClass: "error",
    messageClass: "errorLabel",
    errorElement: "span",
    focusInvalid: true,
    errorContainer: $( [] ),
    errorLabelContainer: $( [] ),
    onsubmit: true,
    ignore: [],
    ignoreTitle: true,
    onfocusin: function(element) {
      this.lastActive = element;
        
      // hide error label and remove error class on focus if enabled
      if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
        this.settings.unhighlight && this.settings.unhighlight.call( this, element, this.settings.errorClass );
        this.errorsFor(element).hide();
      }
    },
    onfocusout: function(element) {
      if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
        this.element(element);
      }
    },
    onkeyup: function(element) {
      if ( element.name in this.submitted || element == this.lastElement ) {
        this.element(element);
      }
    },
    onclick: function(element) {
      if ( element.name in this.submitted )
        this.element(element);
    },
    highlight: function( element, errorClass ) {
      $( element ).addClass( errorClass );
      $( element ).closest('label').addClass( "errorLabel" );
    },
    unhighlight: function( element, errorClass ) {
      $( element ).removeClass( errorClass );
      $( element ).closest('label').removeClass( "errorLabel" );
    }
  },

  // http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
  setDefaults: function(settings) {
    $.extend( $.validator.defaults, settings );
  },

  messages: {
    required: "must be entered",
    remote: "Please fix this field",
    email: "Please enter a valid email address",
    url: "Please enter a valid URL",
    date: "- please use the correct date format",
    age13: "- you must be older than 13",
    age100: "- please enter your real date of birth",
    dateISO: "Please enter a valid date (ISO).",
    dateDE: "Bitte geben Sie ein gÃ¼ltiges Datum ein.",
    number: "Please enter a valid number.",
    numberDE: "Bitte geben Sie eine Nummer ein.",
    digits: "Please enter only digits",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "- Does not match",
    accept: "Please enter a value with a valid extension.",
    maxlength: $.format("Please enter no more than {0} characters."),
    minlength: $.format("must be at least {0} characters."),
    rangelength: $.format("Please enter a value between {0} and {1} characters long."),
    range: $.format("Please enter a value between {0} and {1}"),
    max: $.format("Please enter a value less than or equal to {0}"),
    min: $.format("Please enter a value greater than or equal to {0}")
  },
  
  autoCreateRanges: false,
  
  prototype: {
    
    init: function() {
      this.labelContainer = $(this.settings.errorLabelContainer);
      this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
      this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
      this.submitted = {};
      this.valueCache = {};
      this.pendingRequest = 0;
      this.pending = {};
      this.invalid = {};
      this.reset();
      
      var groups = (this.groups = {});
      $.each(this.settings.groups, function(key, value) {
        $.each(value.split(/\s/), function(index, name) {
          groups[name] = key;
        });
      });
      var rules = this.settings.rules;
      $.each(rules, function(key, value) {
        rules[key] = $.validator.normalizeRule(value);
      });
      
      function delegate(event) {
        var validator = $.data(this[0].form, "validator");
        validator.settings["on" + event.type] && validator.settings["on" + event.type].call(validator, this[0] );
      }
      $(this.currentForm)
        .delegate("focusin focusout keyup", ":text, :password, :file, select, textarea", delegate)
        .delegate("click", ":radio, :checkbox", delegate);

      if (this.settings.invalidHandler)
        $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
    },

    // http://docs.jquery.com/Plugins/Validation/Validator/form
    form: function() {
      this.checkForm();
      $.extend(this.submitted, this.errorMap);
      this.invalid = $.extend({}, this.errorMap);
      if (!this.valid())
        $(this.currentForm).triggerHandler("invalid-form", [this]);
      this.showErrors();
      return this.valid();
    },
    
    checkForm: function() {
      this.prepareForm();
      for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
        this.check( elements[i] );
      }
      return this.valid(); 
    },
    
    // http://docs.jquery.com/Plugins/Validation/Validator/element
    element: function( element ) {
      element = this.clean( element );
      this.lastElement = element;
      this.prepareElement( element );
      this.currentElements = $(element);
      var result = this.check( element );
      if ( result ) {
        delete this.invalid[element.name];
      } else {
        this.invalid[element.name] = true;
      }
      if ( !this.numberOfInvalids() ) {
        // Hide error containers on last error
        this.toHide = this.toHide.add( this.containers );
      }
      this.showErrors();
      return result;
    },

    // http://docs.jquery.com/Plugins/Validation/Validator/showErrors
    showErrors: function(errors) {
      if(errors) {
        // add items to error list and map
        $.extend( this.errorMap, errors );
        this.errorList = [];
        for ( var name in errors ) {
          this.errorList.push({
            message: errors[name],
            element: this.findByName(name)[0]
          });
        }
        // remove items from success list
        this.successList = $.grep( this.successList, function(element) {
          return !(element.name in errors);
        });
      }
      this.settings.showErrors
        ? this.settings.showErrors.call( this, this.errorMap, this.errorList )
        : this.defaultShowErrors();
    },
    
    // http://docs.jquery.com/Plugins/Validation/Validator/resetForm
    resetForm: function() {
      if ( $.fn.resetForm )
        $( this.currentForm ).resetForm();
      this.submitted = {};
      this.prepareForm();
      this.hideErrors();
      this.elements().removeClass( this.settings.errorClass );
    },
    
    numberOfInvalids: function() {
      return this.objectLength(this.invalid);
    },
    
    objectLength: function( obj ) {
      var count = 0;
      for ( var i in obj )
        count++;
      return count;
    },
    
    hideErrors: function() {
      //this.addWrapper( this.toHide ).hide();
    },
    
    valid: function() {
      return this.size() == 0;
    },
    
    size: function() {
      return this.errorList.length;
    },
    
    focusInvalid: function() {
      if( this.settings.focusInvalid ) {
        try {
          $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus();
        } catch(e) {
          // ignore IE throwing errors when focusing hidden elements
        }
      }
    },
    
    findLastActive: function() {
      var lastActive = this.lastActive;
      return lastActive && $.grep(this.errorList, function(n) {
        return n.element.name == lastActive.name;
      }).length == 1 && lastActive;
    },
    
    elements: function() {
      var validator = this,
        rulesCache = {};
      
      // select all valid inputs inside the form (no submit or reset buttons)
      // workaround $Query([]).add until http://dev.jquery.com/ticket/2114 is solved
      return $([]).add(this.currentForm.elements)
      .filter(":input")
      .not(":submit, :reset, :image, [disabled]")
      .not( this.settings.ignore )
      .filter(function() {
        !this.name && validator.settings.debug && window.console && console.error( "%o has no name assigned", this);
      
        // select only the first element for each name, and only those with rules specified
        if ( this.name in rulesCache || !validator.objectLength($(this).rules()) )
          return false;
        
        rulesCache[this.name] = true;
        return true;
      });
    },
    
    clean: function( selector ) {
      return $( selector )[0];
    },
    
    errors: function() {
      return $( "span.errorLabel", this.errorContext );
    },
    
    reset: function() {
      this.successList = [];
      this.errorList = [];
      this.errorMap = {};
      this.toShow = $([]);
      this.toHide = $([]);
      this.formSubmitted = false;
      this.currentElements = $([]);
    },
    
    prepareForm: function() {
      this.reset();
      this.toHide = this.errors().add( this.containers );
    },
    
    prepareElement: function( element ) {
      this.reset();
      this.toHide = this.errorsFor(element);
    },
  
    check: function( element ) {
      element = this.clean( element );
      
      // if radio/checkbox, validate first element in group instead
      if (this.checkable(element)) {
        element = this.findByName( element.name )[0];
      }
      
      var rules = $(element).rules();
      var dependencyMismatch = false;
      for( method in rules ) {
        var rule = { method: method, parameters: rules[method] };
        try {
          var result = $.validator.methods[method].call( this, element.value, element, rule.parameters );
          
          // if a method indicates that the field is optional and therefore valid,
          // don't mark it as valid when there are no other rules
          if ( result == "dependency-mismatch" ) {
            dependencyMismatch = true;
            continue;
          }
          dependencyMismatch = false;
          
          if ( result == "pending" ) {
            this.toHide = this.toHide.not( this.errorsFor(element) );
            return;
          }
          
          if( !result ) {
            this.formatAndAdd( element, rule );
            return false;
          }
        } catch(e) {
          this.settings.debug && window.console && console.log("exception occured when checking element " + element.id
             + ", check the '" + rule.method + "' method");
          throw e;
        }
      }
      if (dependencyMismatch)
        return;
      if ( this.objectLength(rules) )
        this.successList.push(element);
      return true;
    },
    
    // return the custom message for the given element and validation method
    // specified in the element's "messages" metadata
    customMetaMessage: function(element, method) {
      if (!$.metadata)
        return;
      
      var meta = this.settings.meta
        ? $(element).metadata()[this.settings.meta]
        : $(element).metadata();
      
      return meta && meta.messages && meta.messages[method];
    },
    
    // return the custom message for the given element name and validation method
    customMessage: function( name, method ) {
      var m = this.settings.messages[name];
      return m && (m.constructor == String
        ? m
        : m[method]);
    },
    
    // return the first defined argument, allowing empty strings
    findDefined: function() {
      for(var i = 0; i < arguments.length; i++) {
        if (arguments[i] !== undefined)
          return arguments[i];
      }
      return undefined;
    },
    
    defaultMessage: function( element, method) {
      return this.findDefined(
        this.customMessage( element.name, method ),
        this.customMetaMessage( element, method ),
        // title is never undefined, so handle empty string as undefined
        !this.settings.ignoreTitle && element.title || undefined,
        $.validator.messages[method],
        "<strong>Warning: No message defined for " + element.name + "</strong>"
      );
    },
    
    formatAndAdd: function( element, rule ) {
      var message = this.defaultMessage( element, rule.method );
      if ( typeof message == "function" ) 
        message = message.call(this, rule.parameters, element);
      this.errorList.push({
        message: message,
        element: element
      });
      this.errorMap[element.name] = message;
      this.submitted[element.name] = message;
    },
    
    addWrapper: function(toToggle) {
      if ( this.settings.wrapper )
        toToggle = toToggle.add( toToggle.parents( this.settings.wrapper ) );
      return toToggle;
    },
    
    defaultShowErrors: function() {
      for ( var i = 0; this.errorList[i]; i++ ) {
        var error = this.errorList[i];
        this.settings.highlight && this.settings.highlight.call( this, error.element, this.settings.errorClass );
        this.showLabel( error.element, error.message );
      }
      if( this.errorList.length ) {
        this.toShow = this.toShow.add( this.containers );
      }
      if (this.settings.success) {
        for ( var i = 0; this.successList[i]; i++ ) {
          this.showLabel( this.successList[i] );
        }
      }
      if (this.settings.unhighlight) {
        for ( var i = 0, elements = this.validElements(); elements[i]; i++ ) {
          this.settings.unhighlight.call( this, elements[i], this.settings.errorClass );
          $(elements[i]).closest('label.secondaryLabel').next("span.errorLabel").hide();
          
        }
      }
      //this.toHide = this.toHide.not( this.toShow );
      //this.hideErrors();
      this.addWrapper( this.toShow ).show();
    },
    
    validElements: function() {
      return this.currentElements.not(this.invalidElements());
    },
    
    invalidElements: function() {
      return $(this.errorList).map(function() {
        return this.element;
      });
    },
    
    showLabel: function(element, message) {
      var label = this.errorsFor( element );
      if ( label.length ) {
        // refresh error/success class
        label.removeClass().addClass( this.settings.messageClass );
        // check if we have a generated label, replace the message then
        label.attr("generated") && label.html(message);
      } else {
        label = $("<" + this.settings.errorElement + "/>").attr({"for":  this.idOrName(element), generated: true}).addClass("errorLabel").html( message || "");
        
        if(this.settings.wrapper){
          label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
        }
        
        if ( !this.labelContainer.append(label).length )
          this.settings.errorPlacement
            ? this.settings.errorPlacement(label, $(element) )
            : label.insertAfter(element);
        
      }
      if ( !message && this.settings.success ) {
        label.text("");
        typeof this.settings.success == "string"
          ? label.addClass( this.settings.success )
          : this.settings.success( label );
      }
      
      
      $(element).closest('label.secondaryLabel').after(label).show();
      this.toShow.add(label);
    },
    
    errorsFor: function(element) {
      return this.errors().filter("[htmlfor='" + this.idOrName(element) + "']");
    },
    
    idOrName: function(element) {
      return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
    },

    checkable: function( element ) {
      return /radio|checkbox/i.test(element.type);
    },
    
    findByName: function( name ) {
      // select by name and filter by form for performance over form.find("[name=...]")
      var form = this.currentForm;
      return $(document.getElementsByName(name)).map(function(index, element) {
        return element.form == form && element.name == name && element  || null;
      });
    },
    
    getLength: function(value, element) {
      switch( element.nodeName.toLowerCase() ) {
      case 'select':
        return $("option:selected", element).length;
      case 'input':
        if( this.checkable( element) )
          return this.findByName(element.name).filter(':checked').length;
      }
      return value.length;
    },
  
    depend: function(param, element) {
      return this.dependTypes[typeof param]
        ? this.dependTypes[typeof param](param, element)
        : true;
    },
  
    dependTypes: {
      "boolean": function(param, element) {
        return param;
      },
      "string": function(param, element) {
        return !!$(param, element.form).length;
      },
      "function": function(param, element) {
        return param(element);
      }
    },
    
    optional: function(element) {
      return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
    },
    
    startRequest: function(element) {
      if (!this.pending[element.name]) {
        this.pendingRequest++;
        this.pending[element.name] = true;
      }
    },
    
    stopRequest: function(element, valid) {
      this.pendingRequest--;
      // sometimes synchronization fails, make sure pendingRequest is never < 0
      if (this.pendingRequest < 0)
        this.pendingRequest = 0;
      delete this.pending[element.name];
      if ( valid && this.pendingRequest == 0 && this.formSubmitted && this.form() ) {
        $(this.currentForm).submit();
      } else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
        $(this.currentForm).triggerHandler("invalid-form", [this]);
      }
    },
    
    previousValue: function(element) {
      return $.data(element, "previousValue") || $.data(element, "previousValue", previous = {
        old: null,
        valid: true,
        message: this.defaultMessage( element, "remote" )
      });
    }
    
  },
  
  classRuleSettings: {
    required: {required: true},
    email: {email: true},
    url: {url: true},
    date: {date: true},
    dateISO: {dateISO: true},
    age100:{age100:true},
    age13: {age13: true},
    dateDE: {dateDE: true},
    number: {number: true},
    numberDE: {numberDE: true},
    digits: {digits: true},
    creditcard: {creditcard: true}
  },
  
  addClassRules: function(className, rules) {
    className.constructor == String ?
      this.classRuleSettings[className] = rules :
      $.extend(this.classRuleSettings, className);
  },
  
  classRules: function(element) {
    var rules = {};
    var classes = $(element).attr('class');
    classes && $.each(classes.split(' '), function() {
      if (this in $.validator.classRuleSettings) {
        $.extend(rules, $.validator.classRuleSettings[this]);
      }
    });
    return rules;
  },
  
  attributeRules: function(element) {
    var rules = {};
    var $element = $(element);
    
    for (method in $.validator.methods) {
      var value = $element.attr(method);
      if (value) {
        rules[method] = value;
      }
    }
    
    // maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
    if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
      delete rules.maxlength;
    }
    
    return rules;
  },
  
  metadataRules: function(element) {
    if (!$.metadata) return {};
    
    var meta = $.data(element.form, 'validator').settings.meta;
    return meta ?
      $(element).metadata()[meta] :
      $(element).metadata();
  },
  
  staticRules: function(element) {
    var rules = {};
    var validator = $.data(element.form, 'validator');
    if (validator.settings.rules) {
      rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
    }
    return rules;
  },
  
  normalizeRules: function(rules, element) {
    // handle dependency check
    $.each(rules, function(prop, val) {
      // ignore rule when param is explicitly false, eg. required:false
      if (val === false) {
        delete rules[prop];
        return;
      }
      if (val.param || val.depends) {
        var keepRule = true;
        switch (typeof val.depends) {
          case "string":
            keepRule = !!$(val.depends, element.form).length;
            break;
          case "function":
            keepRule = val.depends.call(element, element);
            break;
        }
        if (keepRule) {
          rules[prop] = val.param !== undefined ? val.param : true;
        } else {
          delete rules[prop];
        }
      }
    });
    
    // evaluate parameters
    $.each(rules, function(rule, parameter) {
      rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
    });
    
    // clean number parameters
    $.each(['minlength', 'maxlength', 'min', 'max'], function() {
      if (rules[this]) {
        rules[this] = Number(rules[this]);
      }
    });
    $.each(['rangelength', 'range'], function() {
      if (rules[this]) {
        rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
      }
    });
    
    if ($.validator.autoCreateRanges) {
      // auto-create ranges
      if (rules.min && rules.max) {
        rules.range = [rules.min, rules.max];
        delete rules.min;
        delete rules.max;
      }
      if (rules.minlength && rules.maxlength) {
        rules.rangelength = [rules.minlength, rules.maxlength];
        delete rules.minlength;
        delete rules.maxlength;
      }
    }
    
    // To support custom messages in metadata ignore rule methods titled "messages"
    if (rules.messages) {
      delete rules.messages
    }
    
    return rules;
  },
  
  // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
  normalizeRule: function(data) {
    if( typeof data == "string" ) {
      var transformed = {};
      $.each(data.split(/\s/), function() {
        transformed[this] = true;
      });
      data = transformed;
    }
    return data;
  },
  
  // http://docs.jquery.com/Plugins/Validation/Validator/addMethod
  addMethod: function(name, method, message) {
    $.validator.methods[name] = method;
    $.validator.messages[name] = message;
    if (method.length < 3) {
      $.validator.addClassRules(name, $.validator.normalizeRule(name));
    }
  },

  methods: {

    // http://docs.jquery.com/Plugins/Validation/Methods/required
    required: function(value, element, param) {
      // check if dependency is met
      if ( !this.depend(param, element) )
        return "dependency-mismatch";
      switch( element.nodeName.toLowerCase() ) {
      case 'select':
        var options = $("option:selected", element);
        return options.length > 0 && ( element.type == "select-multiple" || ($.browser.msie && !(options[0].attributes['value'].specified) ? options[0].text : options[0].value).length > 0);
      case 'input':
        if ( this.checkable(element) )
          return this.getLength(value, element) > 0;
      default:
        return $.trim(value).length > 0;
      }
    },
    
    // http://docs.jquery.com/Plugins/Validation/Methods/remote
    remote: function(value, element, param) {
      if ( this.optional(element) )
        return "dependency-mismatch";
      
      var previous = this.previousValue(element);
      
      if (!this.settings.messages[element.name] )
        this.settings.messages[element.name] = {};
      this.settings.messages[element.name].remote = typeof previous.message == "function" ? previous.message(value) : previous.message;
      
      param = typeof param == "string" && {url:param} || param; 
      
      if ( previous.old !== value ) {
        previous.old = value;
        var validator = this;
        this.startRequest(element);
        var data = {};
        data[element.name] = value;
        $.ajax($.extend(true, {
          url: param,
          mode: "abort",
          port: "validate" + element.name,
          dataType: "json",
          data: data,
          success: function(response) {
            if ( response ) {
              var submitted = validator.formSubmitted;
              validator.prepareElement(element);
              validator.formSubmitted = submitted;
              validator.successList.push(element);
              validator.showErrors();
            } else {
              var errors = {};
              errors[element.name] =  response || validator.defaultMessage( element, "remote" );
              validator.showErrors(errors);
            }
            previous.valid = response;
            validator.stopRequest(element, response);
          }
        }, param));
        return "pending";
      } else if( this.pending[element.name] ) {
        return "pending";
      }
      return previous.valid;
    },

    // http://docs.jquery.com/Plugins/Validation/Methods/minlength
    minlength: function(value, element, param) {
      return this.optional(element) || this.getLength($.trim(value), element) >= param;
    },
    
    // http://docs.jquery.com/Plugins/Validation/Methods/maxlength
    maxlength: function(value, element, param) {
      return this.optional(element) || this.getLength($.trim(value), element) <= param;
    },
    
    // http://docs.jquery.com/Plugins/Validation/Methods/rangelength
    rangelength: function(value, element, param) {
      var length = this.getLength($.trim(value), element);
      return this.optional(element) || ( length >= param[0] && length <= param[1] );
    },
    
    // http://docs.jquery.com/Plugins/Validation/Methods/min
    min: function( value, element, param ) {
      return this.optional(element) || value >= param;
    },
    
    // http://docs.jquery.com/Plugins/Validation/Methods/max
    max: function( value, element, param ) {
      return this.optional(element) || value <= param;
    },
    
    age13: function( value, element, param){
      var referenceDate = new Date();
      referenceDate.setFullYear(referenceDate.getFullYear() - 13);
      
      var givenDate = new Date(value);
      
      if(givenDate>referenceDate){
        return this.optional(element) || false;
      } else{
        return this.optional(element) || true;
      }
    },
    
    age100: function( value, element, param){
      var referenceDate = new Date();
      referenceDate.setFullYear(referenceDate.getFullYear() - 100);
      
      var givenDate = new Date(value);
      
      if(givenDate<referenceDate){
        return this.optional(element) || false;
        
      } else{
        return this.optional(element) || true;
      }
    },
    
    // http://docs.jquery.com/Plugins/Validation/Methods/range
    range: function( value, element, param ) {
      return this.optional(element) || ( value >= param[0] && value <= param[1] );
    },
    
    // http://docs.jquery.com/Plugins/Validation/Methods/email
    email: function(value, element) {
      // contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
      return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
    },
  
    // http://docs.jquery.com/Plugins/Validation/Methods/url
    url: function(value, element) {
      // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
      return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
    },
        
    // http://docs.jquery.com/Plugins/Validation/Methods/date
    date: function(value, element) {
      var dateArray = value.split('/');
      var dateValid = true;
      if(dateArray[0] > 12 || dateArray[1] > 31){
        dateValid = false;
      }
      return this.optional(element) || (!/Invalid|NaN/.test(new Date(value)) && dateValid) ;
    },
  
    // http://docs.jquery.com/Plugins/Validation/Methods/dateISO
    dateISO: function(value, element) {
      return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
    },
  
    // http://docs.jquery.com/Plugins/Validation/Methods/dateDE
    dateDE: function(value, element) {
      return this.optional(element) || /^\d\d?\.\d\d?\.\d\d\d?\d?$/.test(value);
    },
  
    // http://docs.jquery.com/Plugins/Validation/Methods/number
    number: function(value, element) {
      return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
    },
  
    // http://docs.jquery.com/Plugins/Validation/Methods/numberDE
    numberDE: function(value, element) {
      return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(value);
    },
    
    // http://docs.jquery.com/Plugins/Validation/Methods/digits
    digits: function(value, element) {
      return this.optional(element) || /^\d+$/.test(value);
    },
    
    // http://docs.jquery.com/Plugins/Validation/Methods/creditcard
    // based on http://en.wikipedia.org/wiki/Luhn
    creditcard: function(value, element) {
      if ( this.optional(element) )
        return "dependency-mismatch";
      // accept only digits and dashes
      if (/[^0-9-]+/.test(value))
        return false;
      var nCheck = 0,
        nDigit = 0,
        bEven = false;

      value = value.replace(/\D/g, "");

      for (n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n);
        var nDigit = parseInt(cDigit, 10);
        if (bEven) {
          if ((nDigit *= 2) > 9)
            nDigit -= 9;
        }
        nCheck += nDigit;
        bEven = !bEven;
      }

      return (nCheck % 10) == 0;
    },
    
    // http://docs.jquery.com/Plugins/Validation/Methods/accept
    accept: function(value, element, param) {
      param = typeof param == "string" ? param : "png|jpe?g|gif";
      return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i")); 
    },
    
    // http://docs.jquery.com/Plugins/Validation/Methods/equalTo
    equalTo: function(value, element, param) {
      return value == $(param).val();
    }
    
  }
  
});

})(jQuery);

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort() 
;(function($) {
  var ajax = $.ajax;
  var pendingRequests = {};
  $.ajax = function(settings) {
    // create settings for compatibility with ajaxSetup
    settings = $.extend(settings, $.extend({}, $.ajaxSettings, settings));
    var port = settings.port;
    if (settings.mode == "abort") {
      if ( pendingRequests[port] ) {
        pendingRequests[port].abort();
      }
      return (pendingRequests[port] = ajax.apply(this, arguments));
    }
    return ajax.apply(this, arguments);
  };
})(jQuery);

// provides cross-browser focusin and focusout events
// IE has native support, in other browsers, use event caputuring (neither bubbles)

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target 

// provides triggerEvent(type: String, target: Element) to trigger delegated events
;(function($) {
  $.each({
    focus: 'focusin',
    blur: 'focusout'  
  }, function( original, fix ){
    $.event.special[fix] = {
      setup:function() {
        if ( $.browser.msie ) return false;
        this.addEventListener( original, $.event.special[fix].handler, true );
      },
      teardown:function() {
        if ( $.browser.msie ) return false;
        this.removeEventListener( original,
        $.event.special[fix].handler, true );
      },
      handler: function(e) {
        arguments[0] = $.event.fix(e);
        arguments[0].type = fix;
        return $.event.handle.apply(this, arguments);
      }
    };
  });
  $.extend($.fn, {
    delegate: function(type, delegate, handler) {
      return this.bind(type, function(event) {
        var target = $(event.target);
        if (target.is(delegate)) {
          return handler.apply(target, arguments);
        }
      });
    },
    triggerEvent: function(type, target) {
      return this.triggerHandler(type, [$.event.fix({ type: type, target: target })]);
    }
  })
})(jQuery);


/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if ( fx.state == 0 ) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}

			fx.elem.style[attr] = "rgb(" + [
				Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
			].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// http://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}
	
	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
				break; 

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};
	
	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/

	var colors = {
		aqua:[0,255,255],
		azure:[240,255,255],
		beige:[245,245,220],
		black:[0,0,0],
		blue:[0,0,255],
		brown:[165,42,42],
		cyan:[0,255,255],
		darkblue:[0,0,139],
		darkcyan:[0,139,139],
		darkgrey:[169,169,169],
		darkgreen:[0,100,0],
		darkkhaki:[189,183,107],
		darkmagenta:[139,0,139],
		darkolivegreen:[85,107,47],
		darkorange:[255,140,0],
		darkorchid:[153,50,204],
		darkred:[139,0,0],
		darksalmon:[233,150,122],
		darkviolet:[148,0,211],
		fuchsia:[255,0,255],
		gold:[255,215,0],
		green:[0,128,0],
		indigo:[75,0,130],
		khaki:[240,230,140],
		lightblue:[173,216,230],
		lightcyan:[224,255,255],
		lightgreen:[144,238,144],
		lightgrey:[211,211,211],
		lightpink:[255,182,193],
		lightyellow:[255,255,224],
		lime:[0,255,0],
		magenta:[255,0,255],
		maroon:[128,0,0],
		navy:[0,0,128],
		olive:[128,128,0],
		orange:[255,165,0],
		pink:[255,192,203],
		purple:[128,0,128],
		violet:[128,0,128],
		red:[255,0,0],
		silver:[192,192,192],
		white:[255,255,255],
		yellow:[255,255,0]
	};
	
})(jQuery);


/**
 * jQWidon't v0.1 - Suppress typographic widows
 *   * http://davecardwell.co.uk/javascript/jquery/plugins/jquery-widont/0.1/
 *
 * Dave Cardwell <http://davecardwell.co.uk/>
 *
 * Built on the shoulders of giants:
 *   * John Resig <http://jquery.com/>
 *   * Shaun Inman <http://www.shauninman.com/plete/2006/08/...
 *                                             ...widont-wordpress-plugin.php>
 *
 *
 * Copyright (c) 2006 Dave Cardwell, dual licensed under the MIT and GPL
 * licenses:
 *   * http://www.opensource.org/licenses/mit-license.php
 *   * http://www.gnu.org/licenses/gpl.txt
 */


/**
 * For the latest version of this plugin, and a discussion of its usage and
 * implementation, visit:
 *   * http://davecardwell.co.uk/javascript/jquery/plugins/jquery-widont/
 */

new function() {
    /**
     * The following functions and attributes form the Public interface of the
     * jQWidon't plugin, accessed externally through the $.jqwidont object.
     * See the relevant function definition later in the source for further
     * information.
     *
     * $.jqwidont.auto()
     * $.jqwidont.auto( bool )
     * $.jqwidont.init()
     *
     * $.jqwidont.transform( string )
     */
    var Public = {
        // Given a boolean argument, auto() will turn initialisation at
        // $(document).ready() on or off accordingly.  Without, it simply
        // returns the current status.  init() performs the necessary steps to
        // start the jQWidon't plugin, including suppressing widows in all
        // <h*> elements in the page.
             'auto': function( bool ) {
                         return bool != undefined ? Private.auto = bool
                                                  : Private.auto;
                     },
             'init': function() {
                         return Private.init();
                     },

        // Perform the 'widont' transformation on a given string.
        'transform': function( string ) {
                         return Private.widont( string );
                     }
    };

    // Allow external access to the 'Public' interface through the $.jqwidont
    // object.
    $.jqwidont = Public;



    /**
     * The following functions and attributes form the internal methods and
     * state of the jQWidon't plugin.  See the relevant function definition
     * later in the source for further information.
     *
     * Private.auto
     * Private.init()
     *
     * Private.widont( string )
     *
     * Private.regexp
     */
    var Private = {
        // When auto is true (default), the init() function will be called at
        // $(document).ready().  init() itself performs the necessary steps to
        // start the jQWidon't plugin.
            'auto': true,
            'init': init,

        // Add a non-breaking space between the last two words of a given
        // string.
          'widont': widont,

        // Regular expression for use later in the plugin.
          'regexp': new RegExp(
                        '[\\n\\r\\s]+'            // whitespace/newlines
                      + '('                       // capture...
                      + '[^\\n\\r\\s(?:&#160;)]+' // non-whitespace/newlines
                      + '[\\n\\r\\s]*'            // trailing whitespace
                      + ')$'                      // ...to end of the string

                        , 'm' // match across newlines
                    )
    };



    /**
     * Unless disabled before $(document).ready() is triggered, execute the
     * init() function.
     */
    $(document).ready(function() {
        if( Private.auto ) init();
    });


    /**
     * Perform the necessary initialisation to use the jQWidon't plugin.
     */
    function init() {
        // Use the plugin on all <h*> elements in the page..
       // $( 'h1,h2,h3,h4,h5,h6' ).widont();
    };



    /**
     * Use the jQWidon't plugin on the given elements.
     */
    $.fn.widont = function() {
        return $(this).each(function() {
            var $obj = $(this);

            $obj.html( Private.widont( $obj.html() ) );
        });
    };



    /**
     * This function takes a string and uses the Private.regexp function to
     * attempt to replace the whitespace between the final two words with a
     * non-breaking space, so that line-wrapping cannot occur between them.
     */
    function widont( string ) {
        return string.replace( Private.regexp, "&#160;$1" );
    };
}();


/*
function write_player(_a) {
 videoPlayer = Animoto.VideoPlayer({
 file: '7GQrfBYVeVLV2Qu4HwPXDQ',
 image: 'cover_432x240.jpg', environment: 'staging',
 autostart: (_a ? 'true' : 'false'),

 animoto_mode: 'consumer',
 duration: 31160
 }); }

write_player(true);

*/

// Animoto Player Embed Code 
// jQuery Edition

;(function(){
	
var $$;

/**
 * 
 * @desc Replace matching elements with a flash movie.
 * @author Luke Lutman
 * @version 1.0.1
 *
 * @name flash
 * @param Hash htmlOptions Options for the embed/object tag.
 * @param Hash pluginOptions Options for detecting/updating the Flash plugin (optional).
 * @param Function replace Custom block called for each matched element if flash is installed (optional).
 * @param Function update Custom block called for each matched if flash isn't installed (optional).
 * @type jQuery
 *
 * @cat plugins/flash
 * 
 * @example $('#hello').flash({ src: 'hello.swf' });
 * @desc Embed a Flash movie.
 *
 * @example $('#hello').flash({ src: 'hello.swf' }, { version: 8 });
 * @desc Embed a Flash 8 movie.
 *
 * @example $('#hello').flash({ src: 'hello.swf' }, { expressInstall: true });
 * @desc Embed a Flash movie using Express Install if flash isn't installed.
 *
 * @example $('#hello').flash({ src: 'hello.swf' }, { update: false });
 * @desc Embed a Flash movie, don't show an update message if Flash isn't installed.
 *
**/
$$ = jQuery.fn.flash = function(htmlOptions, pluginOptions, replace, update) {
	
	// Set the default block.
	var block = replace || $$.replace;
	
	// Merge the default and passed plugin options.
	pluginOptions = $$.copy($$.pluginOptions, pluginOptions);
	
	// Detect Flash.
	if(!$$.hasFlash(pluginOptions.version)) {
		// Use Express Install (if specified and Flash plugin 6,0,65 or higher is installed).
		if(pluginOptions.expressInstall && $$.hasFlash(6,0,65)) {
			// Add the necessary flashvars (merged later).
			var expressInstallOptions = {
				flashvars: {  	
					MMredirectURL: location,
					MMplayerType: 'PlugIn',
					MMdoctitle: jQuery('title').text() 
				}					
			};
		// Ask the user to update (if specified).
		} else if (pluginOptions.update) {
			// Change the block to insert the update message instead of the flash movie.
			block = update || $$.update;
		// Fail
		} else {
			// The required version of flash isn't installed.
			// Express Install is turned off, or flash 6,0,65 isn't installed.
			// Update is turned off.
			// Return without doing anything.
			return this;
		}
	}
	
	// Merge the default, express install and passed html options.
	htmlOptions = $$.copy($$.htmlOptions, expressInstallOptions, htmlOptions);
	
	// Invoke $block (with a copy of the merged html options) for each element.
	return this.each(function(){
		block.call(this, $$.copy(htmlOptions));
	});
	
};
/**
 *
 * @name flash.copy
 * @desc Copy an arbitrary number of objects into a new object.
 * @type Object
 * 
 * @example $$.copy({ foo: 1 }, { bar: 2 });
 * @result { foo: 1, bar: 2 };
 *
**/
$$.copy = function() {
	var options = {}, flashvars = {};
	for(var i = 0; i < arguments.length; i++) {
		var arg = arguments[i];
		if(arg == undefined) continue;
		jQuery.extend(options, arg);
		// don't clobber one flash vars object with another
		// merge them instead
		if(arg.flashvars == undefined) continue;
		jQuery.extend(flashvars, arg.flashvars);
	}
	options.flashvars = flashvars;
	return options;
};
/*
 * @name flash.hasFlash
 * @desc Check if a specific version of the Flash plugin is installed
 * @type Boolean
 *
**/
$$.hasFlash = function() {
	// look for a flag in the query string to bypass flash detection
	if(/hasFlash\=true/.test(location)) return true;
	if(/hasFlash\=false/.test(location)) return false;
	var pv = $$.hasFlash.playerVersion().match(/\d+/g);
	var rv = String([arguments[0], arguments[1], arguments[2]]).match(/\d+/g) || String($$.pluginOptions.version).match(/\d+/g);
	for(var i = 0; i < 3; i++) {
		pv[i] = parseInt(pv[i] || 0);
		rv[i] = parseInt(rv[i] || 0);
		// player is less than required
		if(pv[i] < rv[i]) return false;
		// player is greater than required
		if(pv[i] > rv[i]) return true;
	}
	// major version, minor version and revision match exactly
	return true;
};
/**
 *
 * @name flash.hasFlash.playerVersion
 * @desc Get the version of the installed Flash plugin.
 * @type String
 *
**/
$$.hasFlash.playerVersion = function() {
	// ie
	try {
		try {
			// avoid fp6 minor version lookup issues
			// see: http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
			var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
			try { axo.AllowScriptAccess = 'always';	} 
			catch(e) { return '6,0,0'; }				
		} catch(e) {}
		return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
	// other browsers
	} catch(e) {
		try {
			if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
				return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
			}
		} catch(e) {}		
	}
	return '0,0,0';
};
/**
 *
 * @name flash.htmlOptions
 * @desc The default set of options for the object or embed tag.
 *
**/
$$.htmlOptions = {
	height: 240,
	id: "player",
	flashvars: {},
	wmode: 'transparent',
	pluginspage: 'http://www.adobe.com/go/getflashplayer',
	src: '#',
	type: 'application/x-shockwave-flash',
	width: 320		
};
/**
 *
 * @name flash.pluginOptions
 * @desc The default set of options for checking/updating the flash Plugin.
 *
**/
$$.pluginOptions = {
	expressInstall: false,
	update: true,
	version: '6.0.65'
};
/**
 *
 * @name flash.replace
 * @desc The default method for replacing an element with a Flash movie.
 *
**/
$$.replace = function(htmlOptions) {
	this.innerHTML = '<div class="alt">'+this.innerHTML+'</div>';
	jQuery(this)
		.addClass('flash-replaced')
		.prepend($$.transform(htmlOptions));
};
/**
 *
 * @name flash.update
 * @desc The default method for replacing an element with an update message.
 *
**/
$$.update = function(htmlOptions) {
	var url = String(location).split('?');
	url.splice(1,0,'?hasFlash=true&');
	url = url.join('');
	var msg = "<p class='noflash'>The video player should load in a few seconds. If it doesn't, you may not have the correct version of the Flash Player installed. Please <a href='http://www.adobe.com/go/getflashplayer' target='_blank'>install the latest version</a> and then reload this page.</p>";
	this.innerHTML = '<span class="alt">'+this.innerHTML+'</span>';
	jQuery(this)
		.addClass('flash-update')
		.prepend(msg);
};
/**
 *
 * @desc Convert a hash of html options to a string of attributes, using Function.apply(). 
 * @example toAttributeString.apply(htmlOptions)
 * @result foo="bar" foo="bar"
 *
**/
function toAttributeString() {
	var s = '';
	for(var key in this)
		if(typeof this[key] != 'function')
			s += key+'="'+this[key]+'" ';
	return s;		
};
/**
 *
 * @desc Convert a hash of flashvars to a url-encoded string, using Function.apply(). 
 * @example toFlashvarsString.apply(flashvarsObject)
 * @result foo=bar&foo=bar
 *
**/
function toFlashvarsString() {
	var s = '';
	for(var key in this)
		if(typeof this[key] != 'function')
			s += key+'='+encodeURIComponent(this[key])+'&';
	return s.replace(/&$/, '');		
};
/**
 *
 * @name flash.transform
 * @desc Transform a set of html options into an embed tag.
 * @type String 
 *
 * @example $$.transform(htmlOptions)
 * @result <embed src="foo.swf" ... />
 *
 * Note: The embed tag is NOT standards-compliant, but it 
 * works in all current browsers. flash.transform can be
 * overwritten with a custom function to generate more 
 * standards-compliant markup.
 *
**/
$$.transform = function(htmlOptions) {
	htmlOptions.toString = toAttributeString;
	if(htmlOptions.flashvars) htmlOptions.flashvars.toString = toFlashvarsString;
	return '<embed ' + String(htmlOptions) + '/>';		
};

/**
 *
 * Flash Player 9 Fix (http://blog.deconcept.com/2006/07/28/swfobject-143-released/)
 *
**/
if (window.attachEvent) {
	window.attachEvent("onbeforeunload", function(){
		__flash_unloadHandler = function() {};
		__flash_savedUnloadHandler = function() {};
	});
}
	
})();

/*
 * nyroModal - jQuery Plugin
 * http://nyromodal.nyrodev.com
 *
 * Copyright (c) 2008 Cedric Nirousset (nyrodev.com)
 * Licensed under the MIT license
 *
 * $Date: 2009-05-14 (Thu, 14 May 2009) $
 * $version: 1.5.0
 */
jQuery(function($) {

  // -------------------------------------------------------
  // Private Variables
  // -------------------------------------------------------

  var userAgent = navigator.userAgent.toLowerCase();
  //var browserVersion = (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1];
  var browserVersion = (userAgent.match(/.+(?:rv|webkit|khtml|opera|msie)[\/: ]([\d.]+)/ ) || [0,'0'])[1];

  var isIE6 = (/msie/.test(userAgent) && !/opera/.test(userAgent) && parseInt(browserVersion) < 7 && !window.XMLHttpRequest);
  var body = $('body');

  var currentSettings;

  var shouldResize = false;
  
  var gallery = {};

  // To know if the fix for the Issue 10 should be applied (or has been applied)
  var fixFF = false;

  // Used for retrieve the content from an hidden div
  var contentElt;
  var contentEltLast;

  // Contains info about nyroModal state and all div references
  var modal = {
    started: false,
    ready: false,
    dataReady: false,
    anim: false,
    animContent: false,
    loadingShown: false,
    transition: false,
    resizing: false,
    closing: false,
    error: false,
    blocker: null,
    blockerVars: null,
    full: null,
    bg: null,
    loading: null,
    tmp: null,
    content: null,
    wrapper: null,
    contentWrapper: null,
    scripts: new Array(),
    scriptsShown: new Array()
  };

  // Indicate of the height or the width was resized, to reinit the currentsettings related to null
  var resized = {
    width: false,
    height: false,
    windowResizing: false
  };
  
  var initSettingsSize = {
    width: null,
    height: null,
    windowResizing: true
  };
  
  var windowResizeTimeout;


  // -------------------------------------------------------
  // Public function
  // -------------------------------------------------------

  // jQuery extension function. A paramater object could be used to overwrite the default settings
  $.fn.nyroModal = function(settings) {
    if (!this)
      return false;
    return this.each(function() {
      var me = $(this);
      if (this.nodeName.toLowerCase() == 'form') {
        me
        .unbind('submit.nyroModal')
        .bind('submit.nyroModal', function(e) {
          if (me.data('nyroModalprocessing'))
            return true;
          if (this.enctype == 'multipart/form-data') {
            processModal($.extend(settings, {
              from: this
            }));
            return true;
          }
          e.preventDefault();
          processModal($.extend(settings, {
            from: this
          }));
          return false;
        });
      } else {
        me
        .unbind('click.nyroModal')
        .bind('click.nyroModal', function(e) {
          e.preventDefault();
          processModal($.extend(settings, {
            from: this
          }));
          return false;
        });
      }
    });
  };

  // jQuery extension function to call manually the modal. A paramater object could be used to overwrite the default settings
  $.fn.nyroModalManual = function(settings) {
    if (!this.length)
      processModal(settings);
    return this.each(function(){
      processModal($.extend(settings, {
        from: this
      }));
    });
  };

  $.nyroModalManual = function(settings) {
    processModal(settings);
  };

  // Update the current settings
  // object settings
  // string deep1 first key where overwrite the settings
  // string deep2 second key where overwrite the settings
  $.nyroModalSettings = function(settings, deep1, deep2) {
    setCurrentSettings(settings, deep1, deep2);
    if (!deep1 && modal.started) {
      if (modal.bg && settings.bgColor)
        currentSettings.updateBgColor(modal, currentSettings, function(){});

      if (modal.contentWrapper && settings.title)
        setTitle();

      if (!modal.error && (settings.windowResizing || (!modal.resizing && (('width' in settings && settings.width == currentSettings.width) || ('height' in settings && settings.height == currentSettings.height))))) {
        modal.resizing = true;
        if (modal.contentWrapper)
          calculateSize(true);
        if (modal.contentWrapper && modal.contentWrapper.is(':visible') && !modal.animContent) {
          if (fixFF)
            modal.content.css({position: ''});
          currentSettings.resize(modal, currentSettings, function() {
            currentSettings.windowResizing = false;
            modal.resizing = false;
            if (fixFF)
              modal.content.css({position: 'fixed'});
            if ($.isFunction(currentSettings.endResize))
              currentSettings.endResize(modal, currentSettings);
          });
        }
      }
    }
  };

  // Remove the modal function
  $.nyroModalRemove = function() {
    removeModal();
  };

  // Go to the next image for a gallery
  // return false if nothing was done
  $.nyroModalNext = function() {
    var link = getGalleryLink(1);
    if (link)
      return link.nyroModalManual(getCurrentSettingsNew());
    return false;
  };

  // Go to the previous image for a gallery
  // return false if nothing was done
  $.nyroModalPrev = function() {
    var link = getGalleryLink(-1);
    if (link)
      return link.nyroModalManual(getCurrentSettingsNew());
    return false;
  };


  // -------------------------------------------------------
  // Default Settings
  // -------------------------------------------------------

  $.fn.nyroModal.settings = {
    debug: false, // Show the debug in the background

    blocker: false, // Element which will be blocked by the modal

    modal: false, // Esc key or click backgrdound enabling or not

    type: '', // nyroModal type (form, formData, iframe, image, etc...)
    from: '', // Dom object where the call come from
    hash: '', // Eventual hash in the url

    processHandler: null, // Handler just before the real process

    selIndicator: 'nyroModalSel', // Value added when a form or Ajax is sent with a filter content

    formIndicator: 'nyroModal', // Value added when a form is sent

    content: null, // Raw content if type content is used

    bgColor: '#000000', // Background color

    ajax: {}, // Ajax option (url, data, type, success will be overwritten for a form, url and success only for an ajax call)

    swf: { // Swf player options if swf type is used.
      wmode: 'transparent'
    },

    width: null, // default Width If null, will be calculate automatically
    height: null, // default Height If null, will be calculate automatically

    minWidth: 400, // Minimum width
    minHeight: 300, // Minimum height

    resizable: true, // Indicate if the content is resizable. Will be set to false for swf
    autoSizable: true, // Indicate if the content is auto sizable. If not, the min size will be used

    padding: 25, // padding for the max modal size

    regexImg: '[^\.]\.(jpg|jpeg|png|tiff|gif|bmp)\s*$', // Regex to find images
    addImageDivTitle: true, // Indicate if the div title should be inserted
    defaultImgAlt: 'Image', // Default alt attribute for the images
    setWidthImgTitle: true, // Set the width to the image title
    ltr: true, // Left to Right by default. Put to false for Hebrew or Right to Left language

    gallery: null, // Gallery name if provided
    galleryLinks: '<a href="#" class="nyroModalPrev">Prev</a><a href="#"  class="nyroModalNext">Next</a>', // Use .nyroModalPrev and .nyroModalNext to set the navigation link
    galleryCounts: galleryCounts, // Callback to show the gallery count
    
    zIndexStart: 100,

    css: { // Default CSS option for the nyroModal Div. Some will be overwritten or updated when using IE6
      bg: {
        position: 'absolute',
        overflow: 'hidden',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%'
      },
      wrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '0'
      },
      wrapper2: {
      },
      content: {
        overflow: 'auto'
      },
      loading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-50px',
        marginLeft: '-50px'
      }
    },

    wrap: { // Wrapper div used to style the modal regarding the content type
      div: '<div class="wrapper"></div>',
      ajax: '<div class="wrapper"></div>',
      form: '<div class="wrapper"></div>',
      formData: '<div class="wrapper"></div>',
      image: '<div class="wrapperImg"></div>',
      swf: '<div class="wrapperSwf"></div>',
      iframe: '<div class="wrapperIframe"></div>',
      iframeForm: '<div class="wrapperIframe"></div>',
      manual: '<div class="wrapper"></div>'
    },

    closeButton: '<a href="#" class="nyroModalClose" id="closeBut" title="close">Close</a>', // Adding automaticly as the first child of #nyroModalWrapper

    title: null, // Modal title
    titleFromIframe: true, // When using iframe in the same domain, try to get the title from it

    openSelector: '.nyroModal', // selector for open a new modal. will be used to parse automaticly at page loading
    closeSelector: '.nyroModalClose', // selector to close the modal

    contentLoading: '<a href="#" class="nyroModalClose">Cancel</a>', // Loading div content

    errorClass: 'error', // CSS Error class added to the loading div in case of error
    contentError: 'The requested content cannot be loaded.<br />Please try again later.<br /><a href="#" class="nyroModalClose">Close</a>', // Content placed in the loading div in case of error

    handleError: null, // Callback in case of error

    showBackground: showBackground, // Show background animation function
    hideBackground: hideBackground, // Hide background animation function

    endFillContent: null, // Will be called after filling and wraping the content, before parsing closeSelector and openSelector and showing the content
    showContent: showContent, // Show content animation function
    endShowContent: null, // Will be called once the content is shown
    beforeHideContent: null, // Will be called just before the modal closing
    hideContent: hideContent, // Hide content animation function

    showTransition: showTransition, // Show the transition animation (a modal is already shown and a new one is requested)
    hideTransition: hideTransition, // Hide the transition animation to show the content

    showLoading: showLoading, // show loading animation function
    hideLoading: hideLoading, // hide loading animation function

    resize: resize, // Resize animation function
    endResize: null, // Will be called one the content is resized

    updateBgColor: updateBgColor, // Change background color animation function

    endRemove: null // Will be called once the modal is totally gone
  };

  // -------------------------------------------------------
  // Private function
  // -------------------------------------------------------

  // Main function
  function processModal(settings) {
    if (modal.loadingShown || modal.transition || modal.anim)
      return;
    debug('processModal');
    modal.started = true;
    setDefaultCurrentSettings(settings);
    if (!modal.full)
      modal.blockerVars = modal.blocker = null;
    modal.error = false;
    modal.closing = false;
    modal.dataReady = false;
    modal.scripts = new Array();
    modal.scriptsShown = new Array();

    currentSettings.type = fileType();

    if ($.isFunction(currentSettings.processHandler))
      currentSettings.processHandler(currentSettings);

    from = currentSettings.from;
    url = currentSettings.url;

    initSettingsSize.width = currentSettings.width;
    initSettingsSize.height = currentSettings.height;

    if (currentSettings.type == 'swf') {
      // Swf is transforming as a raw content
      setCurrentSettings({overflow: 'hidden'}, 'css', 'content');
      currentSettings.content = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+currentSettings.width+'" height="'+currentSettings.height+'"><param name="movie" value="'+url+'"></param>';
      var tmp = '';
      $.each(currentSettings.swf, function(name, val) {
        currentSettings.content+= '<param name="'+name+'" value="'+val+'"></param>';
        tmp+= ' '+name+'="'+val+'"';
      });
      currentSettings.content+= '<embed src="'+url+'" type="application/x-shockwave-flash" width="'+currentSettings.width+'" height="'+currentSettings.height+'"'+tmp+'></embed></object>';
    }

    if (from) {
      var jFrom = $(from);
      if (currentSettings.type == 'form') {
        var data = $(from).serializeArray();
        data.push({name: currentSettings.formIndicator, value: 1});
        if (currentSettings.selector)
          data.push({name: currentSettings.selIndicator, value: currentSettings.selector.substring(1)});
        $.ajax($.extend({}, currentSettings.ajax, {
            url: url,
            data: data,
            type: jFrom.attr('method') ? jFrom.attr('method') : 'get',
            success: ajaxLoaded,
            error: loadingError
          }));
        debug('Form Ajax Load: '+jFrom.attr('action'));
        showModal();
      } else if (currentSettings.type == 'formData') {
        // Form with data. We're using a hidden iframe
        initModal();
        jFrom.attr('target', 'nyroModalIframe');
        jFrom.attr('action', url);
        jFrom.prepend('<input type="hidden" name="'+currentSettings.formIndicator+'" value="1" />');
        if (currentSettings.selector)
          jFrom.prepend('<input type="hidden" name="'+currentSettings.selIndicator+'" value="'+currentSettings.selector.substring(1)+'" />');
        modal.tmp.html('<iframe frameborder="0" hspace="0" name="nyroModalIframe" src="javascript:false;"></iframe>');
        $('iframe', modal.tmp)
          .css({
            width: currentSettings.width,
            height: currentSettings.height
          })
          .error(loadingError)
          .load(formDataLoaded);
        debug('Form Data Load: '+jFrom.attr('action'));
        showModal();
        showContentOrLoading();
      } else if (currentSettings.type == 'image') {
        debug('Image Load: '+url);
        var title = jFrom.attr('title') || currentSettings.defaultImgAlt;
        initModal();
        modal.tmp.html('<img id="nyroModalImg" />').find('img').attr('alt', title);
        modal.tmp.css({lineHeight: 0});
        $('img', modal.tmp)
          .error(loadingError)
          .load(function() {
            debug('Image Loaded: '+this.src);
            $(this).unbind('load');
            var w = modal.tmp.width();
            var h = modal.tmp.height();
            modal.tmp.css({lineHeight: ''});
            resized.width = w;
            resized.height = h;
            setCurrentSettings({
              width: w,
              height: h,
              imgWidth: w,
              imgHeight: h
            });
            initSettingsSize.width = w;
            initSettingsSize.height = h;
            setCurrentSettings({overflow: 'hidden'}, 'css', 'content');
            modal.dataReady = true;
            if (modal.loadingShown || modal.transition)
              showContentOrLoading();
          })
          .attr('src', url);
        showModal();
      } else if (currentSettings.type == 'iframeForm') {
        initModal();
        modal.tmp.html('<iframe frameborder="0" hspace="0" src="javascript:false;" name="nyroModalIframe" id="nyroModalIframe"></iframe>');
        debug('Iframe Form Load: '+url);
        $('iframe', modal.tmp).eq(0)
          .css({
            width: '100%',
            height: $.support.boxModel? '99%' : '100%'
          })
          .load(function(e) {
            if (currentSettings.titleFromIframe && url.indexOf(window.location.hostname) > -1)
              $.nyroModalSettings({title: $('iframe', modal.full).contents().find('title').text()});
          });
        modal.dataReady = true;
        showModal();
      } else if (currentSettings.type == 'iframe') {
        initModal();
        modal.tmp.html('<iframe frameborder="0" hspace="0" src="'+url+'" name="nyroModalIframe" id="nyroModalIframe"></iframe>');
        debug('Iframe Load: '+url);
        $('iframe', modal.tmp).eq(0)
          .css({
            width: '100%',
            height: $.support.boxModel? '99%' : '100%'
          })
          .load(function(e) {
            if (currentSettings.titleFromIframe && url.indexOf(window.location.hostname) > -1)
              $.nyroModalSettings({title: $('iframe', modal.full).contents().find('title').text()});
          });
        modal.dataReady = true;
        showModal();
      } else if (currentSettings.type) {
        // Could be every other kind of type or a dom selector
        debug('Content: '+currentSettings.type);
        initModal();
        modal.tmp.html(currentSettings.content);
        var w = modal.tmp.width();
        var h = modal.tmp.height();
        var div = $(currentSettings.type);
        if (div.length) {
          setCurrentSettings({type: 'div'});
          w = div.width();
          h = div.height();
          if (contentElt)
            contentEltLast = contentElt;
          contentElt = div;
          modal.tmp.append(div.contents());
        }
        initSettingsSize.width = w;
        initSettingsSize.height = h;
        setCurrentSettings({
          width: w,
          height: h
        });
        if (modal.tmp.html())
          modal.dataReady = true;
        else
          loadingError();
        if (!modal.ready)
          showModal();
        else
          endHideContent();
      } else {
        debug('Ajax Load: '+url);
        setCurrentSettings({type: 'ajax'});
        var data = currentSettings.ajax.data || {};
        if (currentSettings.selector) {
          if (typeof data == "string") {
            data+= '&'+currentSettings.selIndicator+'='+currentSettings.selector.substring(1);
          } else {
            data[currentSettings.selIndicator] = currentSettings.selector.substring(1);
          }
        }
        $.ajax($.extend(true, currentSettings.ajax, {
          url: url,
          success: ajaxLoaded,
          error: loadingError,
          data: data
        }));
        showModal();
      }
    } else if (currentSettings.content) {
      // Raw content not from a DOM element
      debug('Content: '+currentSettings.type);
      setCurrentSettings({type: 'manual'});
      initModal();
      modal.tmp.html($('<div/>').html(currentSettings.content).contents());
      if (modal.tmp.html())
        modal.dataReady = true;
      else
        loadingError();
      showModal();
    } else {
      // What should we show here? nothing happen
    }
  }

  // Update the current settings
  // object settings
  // string deep1 first key where overwrite the settings
  // string deep2 second key where overwrite the settings
  function setDefaultCurrentSettings(settings) {
    debug('setDefaultCurrentSettings');
    currentSettings = $.extend(true, {}, $.fn.nyroModal.settings, settings);
    currentSettings.selector = '';
    currentSettings.borderW = 0;
    currentSettings.borderH = 0;
    currentSettings.resizable = true;
    setMargin();
  }

  function setCurrentSettings(settings, deep1, deep2) {
    if (modal.started) {
      if (deep1 && deep2) {
        $.extend(true, currentSettings[deep1][deep2], settings);
      } else if (deep1) {
        $.extend(true, currentSettings[deep1], settings);
      } else {
        if (modal.animContent) {
          if ('width' in settings) {
            if (!modal.resizing) {
              settings.setWidth = settings.width;
              shouldResize = true;
            }
            delete settings['width'];
          }
          if ('height' in settings) {
            if (!modal.resizing) {
              settings.setHeight = settings.height;
              shouldResize = true;
            }
            delete settings['height'];
          }
        }
        $.extend(true, currentSettings, settings);
      }
    } else {
      if (deep1 && deep2) {
        $.extend(true, $.fn.nyroModal.settings[deep1][deep2], settings);
      } else if (deep1) {
        $.extend(true, $.fn.nyroModal.settings[deep1], settings);
      } else {
        $.extend(true, $.fn.nyroModal.settings, settings);
      }
    }
  }

  // Set the margin for postionning the element. Useful for IE6
  function setMarginScroll() {
    if (isIE6 && !modal.blocker) {
      if (document.documentElement) {
        currentSettings.marginScrollLeft = document.documentElement.scrollLeft;
        currentSettings.marginScrollTop = document.documentElement.scrollTop;
      } else {
        currentSettings.marginScrollLeft = document.body.scrollLeft;
        currentSettings.marginScrollTop = document.body.scrollTop;
      }
    } else {
      currentSettings.marginScrollLeft = 0;
      currentSettings.marginScrollTop = 0;
    }
  }

  // Set the margin for the content
  function setMargin() {
    setMarginScroll();
    currentSettings.marginLeft = -(currentSettings.width+currentSettings.borderW)/2;
    currentSettings.marginTop = -(currentSettings.height+currentSettings.borderH)/2;
    if (!modal.blocker) {
      currentSettings.marginLeft+= currentSettings.marginScrollLeft;
      currentSettings.marginTop+= currentSettings.marginScrollTop;
    }
  }

  // Set the margin for the current loading
  function setMarginLoading() {
    setMarginScroll();
    var outer = getOuter(modal.loading);
    currentSettings.marginTopLoading = -(modal.loading.height() + outer.h.border + outer.h.padding)/2;
    currentSettings.marginLeftLoading = -(modal.loading.width() + outer.w.border + outer.w.padding)/2;
    if (!modal.blocker) {
      currentSettings.marginLefttLoading+= currentSettings.marginScrollLeft;
      currentSettings.marginTopLoading+= currentSettings.marginScrollTop;
    }
  }

  // Set the modal Title
  function setTitle() {
    var title = $('h1#nyroModalTitle', modal.contentWrapper);
    if (title.length)
      title.text(currentSettings.title);
    else
      modal.contentWrapper.prepend('<h1 id="nyroModalTitle">'+currentSettings.title+'</h1>');
  }

  // Init the nyroModal div by settings the CSS elements and hide needed elements
  function initModal() {
    debug('initModal');
    if (!modal.full) {
      if (currentSettings.debug)
        setCurrentSettings({color: 'white'}, 'css', 'bg');

      var full = {
        zIndex: currentSettings.zIndexStart,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      };

      var contain = body;
      var iframeHideIE = '';
      if (currentSettings.blocker) {
        modal.blocker = contain = $(currentSettings.blocker);
        var pos = modal.blocker.offset();
        var w = modal.blocker.outerWidth();
        var h = modal.blocker.outerHeight();
        if (isIE6) {
          setCurrentSettings({
            height: body.height()+'px',
            width: body.width()+'px',
            top: 0,
            left: 0
          }, 'css', 'bg');
        }
        modal.blockerVars = {
          top: pos.top,
          left: pos.left,
          width: w,
          height: h
        };
        var plusTop = (/msie/.test(userAgent) ?0:getCurCSS(body.get(0), 'borderTopWidth'));
        var plusLeft = (/msie/.test(userAgent) ?0:getCurCSS(body.get(0), 'borderLeftWidth'));
        full = {
          position: 'absolute',
          top: pos.top + plusTop,
          left: pos.left + plusLeft,
          width: w,
          height: h
        };
      } else if (isIE6) {
        body.css({
          height: body.height()+'px',
          width: body.width()+'px',
          position: 'static',
          overflow: 'hidden'
        });
        // This line was hiding the scrollbar in IE6
        //$('html').css({overflow: 'hidden'});
        setCurrentSettings({
          css: {
            bg: {
              position: 'absolute',
              zIndex: currentSettings.zIndexStart+1,
              height: '100%',
              width: '100%',
              top: currentSettings.marginScrollTop+'px',
              left: currentSettings.marginScrollLeft+'px'
            },
            wrapper: { zIndex: currentSettings.zIndexStart+2 },
            loading: { zIndex: currentSettings.zIndexStart+3 }
          }
        });

        iframeHideIE = $('<iframe id="nyroModalIframeHideIe"></iframe>')
                .css($.extend({},
                  currentSettings.css.bg, {
                    opacity: 0,
                    zIndex: 50,
                    border: 'none'
                  }));
      }

      contain.append($('<div id="nyroModalFull"><div id="nyroModalBg"></div><div id="nyroModalWrapper"><div id="nyroModalContent"></div></div><div id="nyrModalTmp"></div><div id="nyroModalLoading"></div></div>').hide());

      modal.full = $('#nyroModalFull')
        .css(full)
        .show();
      modal.bg = $('#nyroModalBg')
        .css($.extend({
            backgroundColor: currentSettings.bgColor
          }, currentSettings.css.bg))
        .before(iframeHideIE);
      if (!currentSettings.modal)
        modal.bg.click(removeModal);
      modal.loading = $('#nyroModalLoading')
        .css(currentSettings.css.loading)
        .hide();
      modal.contentWrapper = $('#nyroModalWrapper')
        .css(currentSettings.css.wrapper)
        .hide();
      modal.content = $('#nyroModalContent');
      modal.tmp = $('#nyrModalTmp').hide();

      // To stop the mousewheel if the the plugin is available
      if ($.isFunction($.fn.mousewheel)) {
        modal.content.mousewheel(function(e, d) {
          try{
            var elt = modal.content.get(0);
            if ((d > 0 && elt.scrollTop == 0) ||
                (d < 0 && elt.scrollHeight - elt.scrollTop == elt.clientHeight)) {
              e.preventDefault();
              e.stopPropagation();
            }
          } catch(e){}
        });
      }

      $(document).bind('keydown.nyroModal', keyHandler);
      modal.content.css({width: 'auto', height: 'auto'});
      modal.contentWrapper.css({width: 'auto', height: 'auto'});
      
      if (!currentSettings.blocker) {
        $(window).bind('resize.nyroModal', function() {
          window.clearTimeout(windowResizeTimeout);
          windowResizeTimeout = window.setTimeout(windowResizeHandler, 200);
        });
      }
    }
  }
  
  function windowResizeHandler() {
    $.nyroModalSettings(initSettingsSize);
  }

  // Show the modal (ie: the background and then the loading if needed or the content directly)
  function showModal() {
    debug('showModal');
    if (!modal.ready) {
      initModal();
      modal.anim = true;
      currentSettings.showBackground(modal, currentSettings, endBackground);
    } else {
      modal.anim = true;
      modal.transition = true;
      currentSettings.showTransition(modal, currentSettings, function(){endHideContent();modal.anim=false;showContentOrLoading();});
    }
  }

  // Used for the escape key or the arrow in the gallery type
  function keyHandler(e) {
    if (e.keyCode == 27) {
      if (!currentSettings.modal)
        removeModal();
    } else if (currentSettings.gallery && modal.ready && modal.dataReady && !modal.anim && !modal.transition) {
      if (e.keyCode == 39 || e.keyCode == 40) {
        e.preventDefault();
        $.nyroModalNext();
        return false;
      } else if (e.keyCode == 37 || e.keyCode == 38) {
        e.preventDefault();
        $.nyroModalPrev();
        return false;
      }
    }
  }

  // Determine the filetype regarding the link DOM element
  function fileType() {
    if (currentSettings.forceType) {
      var tmp = currentSettings.forceType;
      if (!currentSettings.content)
        currentSettings.from = true;
      currentSettings.forceType = null;
      return tmp;
    }

    var from = currentSettings.from;

    var url;

    if (from && from.nodeName) {
      var jFrom = $(from);
      
      url = jFrom.attr(from.nodeName.toLowerCase() == 'form' ? 'action' : 'href');
      if (!url)
        url = location.href.substring(window.location.host.length+7);
      currentSettings.url = url;

      if (jFrom.attr('rev') == 'modal')
        currentSettings.modal = true;

      currentSettings.title = jFrom.attr('title');

      if (from && from.rel && from.rel.toLowerCase() != 'nofollow')
        currentSettings.gallery = from.rel;

      var imgType = imageType(url, from);
      if (imgType)
        return imgType;
      
      if (isSwf(url))
        return 'swf';

      var iframe = false;
      if (from.target && from.target.toLowerCase() == '_blank' || (from.hostname && from.hostname.replace(/:\d*$/,'') != window.location.hostname.replace(/:\d*$/,''))) {
        iframe = true;
      }
      if (from.nodeName.toLowerCase() == 'form') {
        if (iframe)
          return 'iframeForm';
        setCurrentSettings(extractUrlSel(url));
        if (jFrom.attr('enctype') == 'multipart/form-data')
          return 'formData';
        return 'form';
      }
      if (iframe)
        return 'iframe';
    } else {
      url = currentSettings.url;
      if (!currentSettings.content)
        currentSettings.from = true;

      if (!url)
        return null;
        
      if (isSwf(url))
        return 'swf';

      var reg1 = new RegExp("^http://", "g");
      if (url.match(reg1))
        return 'iframe';
    }

    var imgType = imageType(url, from);
    if (imgType)
      return imgType;

    var tmp = extractUrlSel(url);
    setCurrentSettings(tmp);

    if (!tmp.url)
      return tmp.selector;
  }

  function imageType(url, from) {
    var image = new RegExp(currentSettings.regexImg, 'i');
    if (image.test(url)) {
      return 'image';
    }
  }
  
  function isSwf(url) {
    var swf = new RegExp('[^\.]\.(swf)\s*$', 'i');
    return swf.test(url);
  }

  function extractUrlSel(url) {
    var ret = {
      url: null,
      selector: null
    };

    if (url) {
      var hash = getHash(url);
      var hashLoc = getHash(window.location.href);
      var curLoc = window.location.href.substring(0, window.location.href.length - hashLoc.length);
      var req = url.substring(0, url.length - hash.length);

      if (req == curLoc) {
        ret.selector = hash;
      } else {
        ret.url = req;
        ret.selector = hash;
      }
    }
    return ret;
  }

  // Called when the content cannot be loaded or tiemout reached
  function loadingError() {
    debug('loadingError');

    modal.error = true;

    if (!modal.ready)
      return;

    if ($.isFunction(currentSettings.handleError))
      currentSettings.handleError(modal, currentSettings);

    modal.loading
      .addClass(currentSettings.errorClass)
      .html(currentSettings.contentError);
    $(currentSettings.closeSelector, modal.loading)
      .unbind('click.nyroModal')
      .bind('click.nyroModal', removeModal);
    setMarginLoading();
    modal.loading
      .css({
        marginTop: currentSettings.marginTopLoading+'px',
        marginLeft: currentSettings.marginLeftLoading+'px'
      });
  }

  // Put the content from modal.tmp to modal.content
  function fillContent() {
    debug('fillContent');
    if (!modal.tmp.html())
      return;

    modal.content.html(modal.tmp.contents());
    modal.tmp.empty();
    wrapContent();

    if (currentSettings.type == 'iframeForm') {
      $(currentSettings.from)
        .attr('target', 'nyroModalIframe')
        .data('nyroModalprocessing', 1)
        .submit()
        .attr('target', '_blank')
        .removeData('nyroModalprocessing');
    }
    
    if (!currentSettings.modal)
      modal.wrapper.prepend(currentSettings.closeButton);
        
    if ($.isFunction(currentSettings.endFillContent))
      currentSettings.endFillContent(modal, currentSettings);

    modal.content.append(modal.scripts);

    $(currentSettings.closeSelector, modal.contentWrapper)
      .unbind('click.nyroModal')
      .bind('click.nyroModal', removeModal);
    $(currentSettings.openSelector, modal.contentWrapper).nyroModal(getCurrentSettingsNew());
  }

  // Get the current settings to be used in new links
  function getCurrentSettingsNew() {
    var currentSettingsNew = $.extend(true, {}, currentSettings);
    if (resized.width)
      currentSettingsNew.width = null;
    else
      currentSettingsNew.width = initSettingsSize.width;
    if (resized.height)
      currentSettingsNew.height = null;
    else
      currentSettingsNew.height = initSettingsSize.height;
    currentSettingsNew.css.content.overflow = 'auto';
    return currentSettingsNew;
  }

  // Wrap the content and update the modal size if needed
  function wrapContent() {
    debug('wrapContent');

    var wrap = $(currentSettings.wrap[currentSettings.type]);
    modal.content.append(wrap.children().remove());
    modal.contentWrapper.wrapInner(wrap);

    if (currentSettings.gallery) {
      // Set the action for the next and prev button (or remove them)
      modal.content.append(currentSettings.galleryLinks);
      
      gallery.links = $('[rel="'+currentSettings.gallery+'"]');
      gallery.index = gallery.links.index(currentSettings.from);
      
      if (currentSettings.galleryCounts && $.isFunction(currentSettings.galleryCounts))
        currentSettings.galleryCounts(gallery.index + 1, gallery.links.length, modal, currentSettings);

      var currentSettingsNew = getCurrentSettingsNew();

      var linkPrev = getGalleryLink(-1);
      if (linkPrev) {
        var prev = $('.nyroModalPrev', modal.contentWrapper)
          .attr('href', linkPrev.attr('href'))
          .click(function(e) {
            e.preventDefault();
            $.nyroModalPrev();
            return false;
          });
        if (isIE6 && currentSettings.type == 'swf') {
          prev.before($('<iframe id="nyroModalIframeHideIeGalleryPrev"></iframe>').css({
                      position: prev.css('position'),
                      top: prev.css('top'),
                      left: prev.css('left'),
                      width: prev.width(),
                      height: prev.height(),
                      opacity: 0,
                      border: 'none'
                    }));
        }
      } else {
        $('.nyroModalPrev', modal.contentWrapper).remove();
      }
      var linkNext = getGalleryLink(1);
      if (linkNext) {
        var next = $('.nyroModalNext', modal.contentWrapper)
          .attr('href', linkNext.attr('href'))
          .click(function(e) {
            e.preventDefault();
            $.nyroModalNext();
            return false;
          });
        if (isIE6 && currentSettings.type == 'swf') {
          next.before($('<iframe id="nyroModalIframeHideIeGalleryNext"></iframe>')
                  .css($.extend({}, {
                      position: next.css('position'),
                      top: next.css('top'),
                      left: next.css('left'),
                      width: next.width(),
                      height: next.height(),
                      opacity: 0,
                      border: 'none'
                    })));
        }
      } else {
        $('.nyroModalNext', modal.contentWrapper).remove();
      }
    }
    
    calculateSize();
  }
  
  function getGalleryLink(dir) {
    if (currentSettings.gallery) {
      if (!currentSettings.ltr)
        dir *= -1;
      var index = gallery.index + dir;
      if (index >= 0 && index < gallery.links.length)
        return gallery.links.eq(index);
    }
    return false;
  }

  // Calculate the size for the contentWrapper
  function calculateSize(resizing) {
    debug('calculateSize');

    modal.wrapper = modal.contentWrapper.children('div:first');

    resized.width = false;
    resized.height = false;
    if (false && !currentSettings.windowResizing) {
      initSettingsSize.width = currentSettings.width;
      initSettingsSize.height = currentSettings.height;
    }
    
    if (currentSettings.autoSizable && (!currentSettings.width || !currentSettings.height)) {
      modal.contentWrapper
        .css({
          opacity: 0,
          width: 'auto',
          height: 'auto'
        })
        .show();
      var tmp = {
        width: 'auto',
        height: 'auto'
      };
      if (currentSettings.width) {
        tmp.width = currentSettings.width;
      } else if (currentSettings.type == 'iframe') {
        tmp.width = currentSettings.minWidth;
      }
        
      if (currentSettings.height) {
        tmp.height = currentSettings.height
      } else if (currentSettings.type == 'iframe') {
        tmp.height = currentSettings.minHeight;
      }
      
      modal.content.css(tmp);
      if (!currentSettings.width) {
        currentSettings.width = modal.content.outerWidth(true);
        resized.width = true;
      }
      if (!currentSettings.height) {
        currentSettings.height = modal.content.outerHeight(true);
        resized.height = true;
      }
      modal.contentWrapper.css({opacity: 1});
      if (!resizing)
        modal.contentWrapper.hide();
    }

    if (currentSettings.type != 'image' && currentSettings.type != 'swf') {
      currentSettings.width = Math.max(currentSettings.width, currentSettings.minWidth);
      currentSettings.height = Math.max(currentSettings.height, currentSettings.minHeight);
    }

    var outerWrapper = getOuter(modal.contentWrapper);
    var outerWrapper2 = getOuter(modal.wrapper);
    var outerContent = getOuter(modal.content);

    var tmp = {
      content: {
        width: currentSettings.width,
        height: currentSettings.height
      },
      wrapper2: {
        width: currentSettings.width + outerContent.w.total,
        height: currentSettings.height + outerContent.h.total
      },
      wrapper: {
        width: currentSettings.width + outerContent.w.total + outerWrapper2.w.total,
        height: currentSettings.height + outerContent.h.total + outerWrapper2.h.total
      }
    };

    if (currentSettings.resizable) {
      var maxHeight = modal.blockerVars? modal.blockerVars.height : $(window).height()
                - outerWrapper.h.border
                - (tmp.wrapper.height - currentSettings.height);
      var maxWidth = modal.blockerVars? modal.blockerVars.width : $(window).width()
                - outerWrapper.w.border
                - (tmp.wrapper.width - currentSettings.width);
      maxHeight-= currentSettings.padding*2;
      maxWidth-= currentSettings.padding*2;

      if (tmp.content.height > maxHeight || tmp.content.width > maxWidth) {
        // We're gonna resize the modal as it will goes outside the view port
        if (currentSettings.type == 'image' || currentSettings.type == 'swf') {
          // An image is resized proportionnaly
          var useW = currentSettings.imgWidth?currentSettings.imgWidth : currentSettings.width;
          var useH = currentSettings.imgHeight?currentSettings.imgHeight : currentSettings.height;
          var diffW = tmp.content.width - useW;
          var diffH = tmp.content.height - useH;
            if (diffH < 0) diffH = 0;
            if (diffW < 0) diffW = 0;
          var calcH = maxHeight - diffH;
          var calcW = maxWidth - diffW;
          var ratio = Math.min(calcH/useH, calcW/useW);
          calcW = Math.floor(useW*ratio);
          calcH = Math.floor(useH*ratio);
          tmp.content.height = calcH + diffH;
          tmp.content.width = calcW + diffW;
        } else {
          // For an HTML content, we simply decrease the size
          tmp.content.height = Math.min(tmp.content.height, maxHeight);
          tmp.content.width = Math.min(tmp.content.width, maxWidth);
        }
        tmp.wrapper2 = {
            width: tmp.content.width + outerContent.w.total,
            height: tmp.content.height + outerContent.h.total
          };
        tmp.wrapper = {
            width: tmp.content.width + outerContent.w.total + outerWrapper2.w.total,
            height: tmp.content.height + outerContent.h.total + outerWrapper2.h.total
          };
      }
    }
    
    if (currentSettings.type == 'swf') {
      $('object, embed', modal.content)
        .attr('width', tmp.content.width)
        .attr('height', tmp.content.height);
    } else if (currentSettings.type == 'image') {
      $('img', modal.content).css({
        width: tmp.content.width,
        height: tmp.content.height
      });
    }

    modal.content.css($.extend({}, tmp.content, currentSettings.css.content));
    modal.wrapper.css($.extend({}, tmp.wrapper2, currentSettings.css.wrapper2));

    if (!resizing)
      modal.contentWrapper.css($.extend({}, tmp.wrapper, currentSettings.css.wrapper));
      
      var scrollPos = document.body.scrollTop;

      if (scrollPos == 0)      {
          if (window.pageYOffset)
              scrollPos = window.pageYOffset;
          else
              scrollPos = (document.body.parentElement) ? document.body.parentElement.scrollTop : 0;
      }
      
      scrollPos = scrollPos + 25;
      
      modal.contentWrapper.css('top',scrollPos + 'px')
    if (currentSettings.type == 'image' && currentSettings.addImageDivTitle) {
      // Adding the title for the image
      $('img', modal.content).removeAttr('alt');
      var divTitle = $('div', modal.content);
      if (currentSettings.title != currentSettings.defaultImgAlt && currentSettings.title) {
        if (divTitle.length == 0) {
          divTitle = $('<div>'+currentSettings.title+'</div>');
          modal.content.append(divTitle);
        }
        if (currentSettings.setWidthImgTitle) {
          var outerDivTitle = getOuter(divTitle);
          divTitle.css({width: (tmp.content.width + outerContent.w.padding - outerDivTitle.w.total)+'px'});
        }
      } else if (divTitle.length = 0) {
        divTitle.remove();
      }
    }

    if (currentSettings.title)
      setTitle();

    tmp.wrapper.borderW = outerWrapper.w.border;
    tmp.wrapper.borderH = outerWrapper.h.border;

    setCurrentSettings(tmp.wrapper);
    setMargin();
  }

  function removeModal(e) {
    debug('removeModal');
    if (e)
      e.preventDefault();
    if (modal.full && modal.ready) {
      $(document).unbind('keydown.nyroModal');
      if (!currentSettings.blocker)
        $(window).unbind('resize.nyroModal');
      modal.ready = false;
      modal.anim = true;
      modal.closing = true;
      if (modal.loadingShown || modal.transition) {
        currentSettings.hideLoading(modal, currentSettings, function() {
            modal.loading.hide();
            modal.loadingShown = false;
            modal.transition = false;
            currentSettings.hideBackground(modal, currentSettings, endRemove);
          });
      } else {
        if (fixFF)
          modal.content.css({position: ''}); // Fix Issue #10, remove the attribute
        modal.wrapper.css({overflow: 'hidden'}); // Used to fix a visual issue when hiding
        modal.content.css({overflow: 'hidden'}); // Used to fix a visual issue when hiding
        if ($.isFunction(currentSettings.beforeHideContent)) {
          currentSettings.beforeHideContent(modal, currentSettings, function() {
            currentSettings.hideContent(modal, currentSettings, function() {
              endHideContent();
              currentSettings.hideBackground(modal, currentSettings, endRemove);
            });
          });
        } else {
          currentSettings.hideContent(modal, currentSettings, function() {
              endHideContent();
              currentSettings.hideBackground(modal, currentSettings, endRemove);
            });
        }
      }
    }
    if (e)
      return false;
  }

  function showContentOrLoading() {
    debug('showContentOrLoading');
    if (modal.ready && !modal.anim) {
      if (modal.dataReady) {
        if (modal.tmp.html()) {
          modal.anim = true;
          if (modal.transition) {
            fillContent();
            modal.animContent = true;
            currentSettings.hideTransition(modal, currentSettings, function() {
              modal.loading.hide();
              modal.transition = false;
              modal.loadingShown = false;
              endShowContent();
            });
          } else {
            currentSettings.hideLoading(modal, currentSettings, function() {
                modal.loading.hide();
                modal.loadingShown = false;
                fillContent();
                setMarginLoading();
                setMargin();
                modal.animContent = true;
                currentSettings.showContent(modal, currentSettings, endShowContent);
              });
          }
        }
      } else if (!modal.loadingShown && !modal.transition) {
        modal.anim = true;
        modal.loadingShown = true;
        if (modal.error)
          loadingError();
        else
          modal.loading.html(currentSettings.contentLoading);
        $(currentSettings.closeSelector, modal.loading)
          .unbind('click.nyroModal')
          .bind('click.nyroModal', removeModal);
        setMarginLoading();
        currentSettings.showLoading(modal, currentSettings, function(){modal.anim=false;showContentOrLoading();});
      }
    }
  }


  // -------------------------------------------------------
  // Private Data Loaded callback
  // -------------------------------------------------------

  function ajaxLoaded(data) {
    debug('AjaxLoaded: '+this.url);
    modal.tmp.html(currentSettings.selector
      ?filterScripts($('<div>'+data+'</div>').find(currentSettings.selector).contents())
      :filterScripts(data));
    if (modal.tmp.html()) {
      modal.dataReady = true;
      showContentOrLoading();
    } else
      loadingError();
  }

  function formDataLoaded() {
    debug('formDataLoaded');
    var jFrom = $(currentSettings.from);
    jFrom.attr('action', jFrom.attr('action')+currentSettings.selector);
    jFrom.attr('target', '');
    $('input[name='+currentSettings.formIndicator+']', currentSettings.from).remove();
    var iframe = modal.tmp.children('iframe');
    var iframeContent = iframe.unbind('load').contents().find(currentSettings.selector || 'body').not('script[src]');
    iframe.attr('src', 'about:blank'); // Used to stop the loading in FF
    modal.tmp.html(iframeContent.html());
    if (modal.tmp.html()) {
      modal.dataReady = true;
      showContentOrLoading();
    } else
      loadingError();
  }
  
  function galleryCounts(nb, total, elts, settings) {
    settings.title+= (settings.title?' - ':'') +nb+'/'+total;
  }


  // -------------------------------------------------------
  // Private Animation callback
  // -------------------------------------------------------

  function endHideContent() {
    debug('endHideContent');
    modal.anim = false;
    if (contentEltLast) {
      contentEltLast.append(modal.content.contents());
      contentEltLast = null;
    } else if (contentElt) {
      contentElt.append(modal.content.contents());
      contentElt= null;
    }
    modal.content.empty();
    
    gallery = {};
    
    modal.contentWrapper.hide().children().remove().empty().attr('style', '').hide();

    if (modal.closing || modal.transition)
      modal.contentWrapper.hide();

    modal.contentWrapper
      .css(currentSettings.css.wrapper)
      .append(modal.content);
    showContentOrLoading();
  }

  function endRemove() {
    debug('endRemove');
    $(document).unbind('keydown', keyHandler);
    modal.anim = false;
    modal.full.remove();
    modal.full = null;
    if (isIE6) {
      body.css({height: '', width: '', position: '', overflow: ''});
      $('html').css({overflow: ''});
    }
    if ($.isFunction(currentSettings.endRemove))
      currentSettings.endRemove(modal, currentSettings);
  }

  function endBackground() {
    debug('endBackground');
    modal.ready = true;
    modal.anim = false;
    showContentOrLoading();
  }

  function endShowContent() {
    debug('endShowContent');
    modal.anim = false;
    modal.animContent = false;
    modal.contentWrapper.css({opacity: ''}); // for the close button in IE
    fixFF = /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent) && parseFloat(browserVersion) < 1.9 && currentSettings.type != 'image';
    if (fixFF)
      modal.content.css({position: 'fixed'}); // Fix Issue #10
    modal.content.append(modal.scriptsShown);
    if (currentSettings.autoSizable && currentSettings.type == 'iframe') {
    //*
      var iframe = modal.content.find('iframe');
      if (iframe.length && iframe.attr('src').indexOf(window.location.hostname) !== -1) {
        var body = iframe.contents().find('body');
      
        if (body.height() > 0) {
          var h = body.outerHeight(true)+1;
          var w = body.outerWidth(true)+1;
          $.nyroModalSettings({
            height: h,
            width: w
          });
        } else {
          iframe.bind('load', function() {
            var body = iframe.contents().find('body');
            if (body.length && body.height() > 0) {
              var h = body.outerHeight(true)+1;
              var w = body.outerWidth(true)+1;
              $.nyroModalSettings({
                height: h,
                width: w
              });
            }
          });
        }
      }
    // */
    }
    if ($.isFunction(currentSettings.endShowContent))
      currentSettings.endShowContent(modal, currentSettings);
    if (shouldResize) {
      shouldResize = false;
      $.nyroModalSettings({width: currentSettings.setWidth, height: currentSettings.setHeight});
      delete currentSettings['setWidth'];
      delete currentSettings['setHeight'];
    }
    if (resized.width)
      setCurrentSettings({width: null});
    if (resized.height)
      setCurrentSettings({height: null});
  }


  // -------------------------------------------------------
  // Utilities
  // -------------------------------------------------------

  // Get the selector from an url (as string)
  function getHash(url) {
    if (typeof url == 'string') {
      var hashPos = url.indexOf('#');
      if (hashPos > -1)
        return url.substring(hashPos);
    }
    return '';
  }

  // Filter an html content to remove the script[src]
  function filterScripts(data) {
    // Removing the body, head and html tag
    if (typeof data == 'string')
      data = data.replace(/<\/?(html|head|body)([^>]*)>/gi, '');
    var tmp = new Array();
    $.each($.clean({0:data}, this.ownerDocument), function() {
      if ($.nodeName(this, "script")) {
        if (!this.src || $(this).attr('rel') == 'forceLoad') {
          if ($(this).attr('rev') == 'shown')
            modal.scriptsShown.push(this);
          else
            modal.scripts.push(this);
        }
      } else
        tmp.push(this);
    });
    return tmp;
  }

  // Get the vertical and horizontal margin, padding and border dimension
  function getOuter(elm) {
    elm = elm.get(0);
    var ret = {
      h: {
        margin: getCurCSS(elm, 'marginTop') + getCurCSS(elm, 'marginBottom'),
        border: getCurCSS(elm, 'borderTopWidth') + getCurCSS(elm, 'borderBottomWidth'),
        padding: getCurCSS(elm, 'paddingTop') + getCurCSS(elm, 'paddingBottom')
      },
      w: {
        margin: getCurCSS(elm, 'marginLeft') + getCurCSS(elm, 'marginRight'),
        border: getCurCSS(elm, 'borderLeftWidth') + getCurCSS(elm, 'borderRightWidth'),
        padding: getCurCSS(elm, 'paddingLeft') + getCurCSS(elm, 'paddingRight')
      }
    };

    ret.h.outer = ret.h.margin + ret.h.border;
    ret.w.outer = ret.w.margin + ret.w.border;

    ret.h.inner = ret.h.padding + ret.h.border;
    ret.w.inner = ret.w.padding + ret.w.border;

    ret.h.total = ret.h.outer + ret.h.padding;
    ret.w.total = ret.w.outer + ret.w.padding;

    return ret;
  }

  function getCurCSS(elm, name) {
    var ret = parseInt($.curCSS(elm, name, true));
    if (isNaN(ret))
      ret = 0;
    return ret;
  }

  // Proxy Debug function
  function debug(msg) {
    if ($.fn.nyroModal.settings.debug || currentSettings && currentSettings.debug)
      nyroModalDebug(msg, modal, currentSettings || {});
  }

  // -------------------------------------------------------
  // Default animation function
  // -------------------------------------------------------

  function showBackground(elts, settings, callback) {
    elts.bg.css({opacity:0}).fadeTo(500, 0.75, callback);
  }

  function hideBackground(elts, settings, callback) {
    elts.bg.fadeOut(300, callback);
  }

  function showLoading(elts, settings, callback) {
    elts.loading
      .css({
        marginTop: settings.marginTopLoading+'px',
        marginLeft: settings.marginLeftLoading+'px',
        opacity: 0
      })
      .show()
      .animate({
        opacity: 1
      }, {complete: callback, duration: 400});
  }

  function hideLoading(elts, settings, callback) {
    callback();
  }

  function showContent(elts, settings, callback) {
    elts.loading
      .css({
        marginTop: settings.marginTopLoading+'px',
        marginLeft: settings.marginLeftLoading+'px'
      })
      .show()
      .animate({
        width: settings.width+'px',
        height: settings.height+'px',
        marginTop: settings.marginTop+'px',
        marginLeft: settings.marginLeft+'px'
      }, {duration: 350, complete: function() {
        elts.contentWrapper
          .css({
            width: settings.width+'px',
            height: settings.height+'px',
            marginTop: settings.marginTop+'0px',
            marginLeft: settings.marginLeft+'px'
          })
          .show();
          elts.loading.fadeOut(200, callback);
        }
      });
  }

  function hideContent(elts, settings, callback) {
    elts.contentWrapper
      .animate({
        height: '50px',
        width: '50px',
        marginTop: (-(25+settings.borderH)/2 + settings.marginScrollTop)+'px',
        marginLeft: (-(25+settings.borderW)/2 + settings.marginScrollLeft)+'px'
      }, {duration: 350, complete: function() {
        elts.contentWrapper.hide();
        callback();
      }});
  }

  function showTransition(elts, settings, callback) {
    // Put the loading with the same dimensions of the current content
    elts.loading
      .css({
        marginTop: elts.contentWrapper.css('marginTop'),
        marginLeft: elts.contentWrapper.css('marginLeft'),
        height: elts.contentWrapper.css('height'),
        width: elts.contentWrapper.css('width'),
        opacity: 0
      })
      .show()
      .fadeTo(400, 1, function() {
          elts.contentWrapper.hide();
          callback();
        });
  }

  function hideTransition(elts, settings, callback) {
    // Place the content wrapper underneath the the loading with the right dimensions
    elts.contentWrapper
      .hide()
      .css({
        width: settings.width+'px',
        height: settings.height+'px',
        marginLeft: settings.marginLeft+'px',
        marginTop: settings.marginTop+'px',
        opacity: 1
      });
    elts.loading
      .animate({
        width: settings.width+'px',
        height: settings.height+'px',
        marginLeft: settings.marginLeft+'px',
        marginTop: settings.marginTop+'px'
      }, {complete: function() {
          elts.contentWrapper.show();
          elts.loading.fadeOut(400, function() {
            elts.loading.hide();
            callback();
          });
        }, duration: 350});
  }

  function resize(elts, settings, callback) {
    elts.contentWrapper
      .animate({
        width: settings.width+'px',
        height: settings.height+'px',
        marginLeft: settings.marginLeft+'px',
        marginTop: settings.marginTop+'px'
      }, {complete: callback, duration: 400});
  }

  function updateBgColor(elts, settings, callback) {
    if (!$.fx.step.backgroundColor) {
      elts.bg.css({backgroundColor: settings.bgColor});
      callback();
    } else
      elts.bg
        .animate({
          backgroundColor: settings.bgColor
        }, {complete: callback, duration: 400});
  }

  // -------------------------------------------------------
  // Default initialization
  // -------------------------------------------------------

  $($.fn.nyroModal.settings.openSelector).nyroModal();

});

// Default debug function, to be overwritten if needed
//      Be aware that the settings parameter could be empty
function nyroModalDebug(msg, elts, settings) {
  if (elts.full)
    elts.bg.prepend(msg+'<br />');
}

/**
 * jQuery.labelify - Display in-textbox hints
 * Stuart Langridge, http://www.kryogenix.org/
 * Released into the public domain
 * Date: 25th June 2008
 * @author Stuart Langridge
 * @version 1.3
 *
 */
jQuery.fn.labelify = function(settings) {
  settings = jQuery.extend({
    text: "title",
    labelledClass: ""
  }, settings);
  var lookups = {
    title: function(input) {
      return $(input).attr("title");
    },
    label: function(input) {
      return $("label[for=" + input.id +"]").text();
    }
  };
  var lookup;
  var jQuery_labellified_elements = $(this);
  return $(this).each(function() {
    if (typeof settings.text === "string") {
      lookup = lookups[settings.text]; // what if not there?
    } else {
      lookup = settings.text; // what if not a fn?
    };
    // bail if lookup isn't a function or if it returns undefined
    if (typeof lookup !== "function") { return; }
    var lookupval = lookup(this);
    if (!lookupval) { return; }

    // need to strip newlines because the browser strips them
    // if you set textbox.value to a string containing them    
    $(this).data("label",lookup(this).replace(/\n/g,''));
    $(this).focus(function() {
      if (this.value === $(this).data("label")) {
        this.value = this.defaultValue;
        $(this).removeClass(settings.labelledClass);
      }
    }).blur(function(){
      if (this.value === this.defaultValue) {
        this.value = $(this).data("label");
        $(this).addClass(settings.labelledClass);
      }
    });
    
    var removeValuesOnExit = function() {
      jQuery_labellified_elements.each(function(){
        if (this.value === $(this).data("label")) {
          this.value = this.defaultValue;
          $(this).removeClass(settings.labelledClass);
        }
      })
    };
    
    $(this).parents("form").submit(removeValuesOnExit);
    $(window).unload(removeValuesOnExit);
    
    if (this.value !== this.defaultValue) {
      // user already started typing; don't overwrite their work!
      return;
    }
    // actually set the value
    this.value = $(this).data("label");
    $(this).addClass(settings.labelledClass);

  });
};

/*
 * jquery.tools 1.0.2 - The missing UI library
 * 
 * [tools.tooltip-1.0.2]
 * 
 * Copyright (c) 2009 Tero Piirainen
 * http://flowplayer.org/tools/
 *
 * Dual licensed under MIT and GPL 2+ licenses
 * http://www.opensource.org/licenses
 * 
 * -----
 * 
 * Build: Fri Jun 12 12:46:48 GMT+00:00 2009
 */
(function(c){c.tools=c.tools||{version:{}};c.tools.version.tooltip="1.0.2";var b={toggle:[function(){this.getTip().show()},function(){this.getTip().hide()}],fade:[function(){this.getTip().fadeIn(this.getConf().fadeInSpeed)},function(){this.getTip().fadeOut(this.getConf().fadeOutSpeed)}]};c.tools.addTipEffect=function(d,f,e){b[d]=[f,e]};c.tools.addTipEffect("slideup",function(){var d=this.getConf();var e=d.slideOffset||10;this.getTip().css({opacity:0}).animate({top:"-="+e,opacity:d.opacity},d.slideInSpeed||200).show()},function(){var d=this.getConf();var e=d.slideOffset||10;this.getTip().animate({top:"-="+e,opacity:0},d.slideOutSpeed||200,function(){c(this).hide().animate({top:"+="+(e*2)},0)})});function a(f,e){var d=this;var h=f.next();if(e.tip){if(e.tip.indexOf("#")!=-1){h=c(e.tip)}else{h=f.nextAll(e.tip).eq(0);if(!h.length){h=f.parent().nextAll(e.tip).eq(0)}}}function j(k,l){c(d).bind(k,function(n,m){if(l&&l.call(this)===false&&m){m.proceed=false}});return d}c.each(e,function(k,l){if(c.isFunction(l)){j(k,l)}});var g=f.is("input, textarea");f.bind(g?"focus":"mouseover",function(k){k.target=this;d.show(k);h.hover(function(){d.show()},function(){d.hide()})});f.bind(g?"blur":"mouseout",function(){d.hide()});h.css("opacity",e.opacity);var i=0;c.extend(d,{show:function(q){if(q){f=c(q.target)}clearTimeout(i);if(h.is(":animated")||h.is(":visible")){return d}var o={proceed:true};c(d).trigger("onBeforeShow",o);if(!o.proceed){return d}var n=f.position().top-h.outerHeight();var k=h.outerHeight()+f.outerHeight();var r=e.position[0];if(r=="center"){n+=k/2}if(r=="bottom"){n+=k}var l=f.outerWidth()+h.outerWidth();var m=f.position().left+f.outerWidth();r=e.position[1];if(r=="center"){m-=l/2}if(r=="left"){m-=l}n+=e.offset[0];m+=e.offset[1];h.css({position:"absolute",top:n,left:m});b[e.effect][0].call(d);c(d).trigger("onShow");return d},hide:function(){clearTimeout(i);i=setTimeout(function(){if(!h.is(":visible")){return d}var k={proceed:true};c(d).trigger("onBeforeHide",k);if(!k.proceed){return d}b[e.effect][1].call(d);c(d).trigger("onHide")},e.delay||1);return d},isShown:function(){return h.is(":visible, :animated")},getConf:function(){return e},getTip:function(){return h},getTrigger:function(){return f},onBeforeShow:function(k){return j("onBeforeShow",k)},onShow:function(k){return j("onShow",k)},onBeforeHide:function(k){return j("onBeforeHide",k)},onHide:function(k){return j("onHide",k)}})}c.prototype.tooltip=function(d){var e=this.eq(typeof d=="number"?d:0).data("tooltip");if(e){return e}var f={tip:null,effect:"slideup",delay:30,opacity:1,position:["top","center"],offset:[0,0],api:false};if(c.isFunction(d)){d={onBeforeShow:d}}c.extend(f,d);this.each(function(){e=new a(c(this),f);c(this).data("tooltip",e)});return f.api?e:this}})(jQuery);


/*
 * Jeditable - jQuery in place edit plugin
 *
 * Copyright (c) 2006-2009 Mika Tuupola, Dylan Verheul
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/jeditable
 *
 * Based on editable by Dylan Verheul <dylan_at_dyve.net>:
 *    http://www.dyve.net/jquery/?editable
 *
 */

/**
  * Version 1.7.0
  *
  * ** means there is basic unit tests for this parameter. 
  *
  * @name  Jeditable
  * @type  jQuery
  * @param String  target             (POST) URL or function to send edited content to **
  * @param Hash    options            additional options 
  * @param String  options[method]    method to use to send edited content (POST or PUT) **
  * @param Function options[callback] Function to run after submitting edited content **
  * @param String  options[name]      POST parameter name of edited content
  * @param String  options[id]        POST parameter name of edited div id
  * @param Hash    options[submitdata] Extra parameters to send when submitting edited content.
  * @param String  options[type]      text, textarea or select (or any 3rd party input type) **
  * @param Integer options[rows]      number of rows if using textarea ** 
  * @param Integer options[cols]      number of columns if using textarea **
  * @param Mixed   options[height]    'auto', 'none' or height in pixels **
  * @param Mixed   options[width]     'auto', 'none' or width in pixels **
  * @param String  options[loadurl]   URL to fetch input content before editing **
  * @param String  options[loadtype]  Request type for load url. Should be GET or POST.
  * @param String  options[loadtext]  Text to display while loading external content.
  * @param Mixed   options[loaddata]  Extra parameters to pass when fetching content before editing.
  * @param Mixed   options[data]      Or content given as paramameter. String or function.**
  * @param String  options[indicator] indicator html to show when saving
  * @param String  options[tooltip]   optional tooltip text via title attribute **
  * @param String  options[event]     jQuery event such as 'click' of 'dblclick' **
  * @param String  options[submit]    submit button value, empty means no button **
  * @param String  options[cancel]    cancel button value, empty means no button **
  * @param String  options[cssclass]  CSS class to apply to input form. 'inherit' to copy from parent. **
  * @param String  options[style]     Style to apply to input form 'inherit' to copy from parent. **
  * @param String  options[select]    true or false, when true text is highlighted ??
  * @param String  options[placeholder] Placeholder text or html to insert when element is empty. **
  * @param String  options[onblur]    'cancel', 'submit', 'ignore' or function ??
  *             
  * @param Function options[onsubmit] function(settings, original) { ... } called before submit
  * @param Function options[onreset]  function(settings, original) { ... } called before reset
  * @param Function options[onerror]  function(settings, original, xhr) { ... } called on error
  *             
  * @param Hash    options[ajaxoptions]  jQuery Ajax options. See docs.jquery.com.
  *             
  */

(function($) {

    $.fn.editable = function(target, options) {
            
        if ('disable' == target) {
            $(this).data('disabled.editable', true);
            return;
        }
        if ('enable' == target) {
            $(this).data('disabled.editable', false);
            return;
        }
        if ('destroy' == target) {
            $(this)
                .unbind($(this).data('event.editable'))
                .removeData('disabled.editable')
                .removeData('event.editable');
            return;
        }
        
        var settings = {
            target     : target,
            name       : 'value',
            id         : 'id',
            type       : 'text',
            width      : 'auto',
            height     : 'auto',
            event      : 'click',
            onblur     : 'cancel',
            loadtype   : 'GET',
            loadtext   : 'Loading...',
            placeholder: '<a>Click here to edit your video\'s description.</a>',
            loaddata   : {},
            submitdata : {},
            ajaxoptions: {}
        };
        
        if(options) {
            $.extend(settings, options);
        }
    
        /* setup some functions */
        var plugin   = $.editable.types[settings.type].plugin || function() { };
        var submit   = $.editable.types[settings.type].submit || function() { };
        var buttons  = $.editable.types[settings.type].buttons 
                    || $.editable.types['defaults'].buttons;
        var content  = $.editable.types[settings.type].content 
                    || $.editable.types['defaults'].content;
        var element  = $.editable.types[settings.type].element 
                    || $.editable.types['defaults'].element;
        var reset    = $.editable.types[settings.type].reset 
                    || $.editable.types['defaults'].reset;
        var callback = settings.callback || function() { };
        var onedit   = settings.onedit   || function() { }; 
        var onsubmit = settings.onsubmit || function() { };
        var onreset  = settings.onreset  || function() { };
        var onerror  = settings.onerror  || reset;
          
        /* show tooltip */
        if (settings.tooltip) {
            $(this).attr('title', settings.tooltip);
        }
        
        settings.autowidth  = 'auto' == settings.width;
        settings.autoheight = 'auto' == settings.height;
        
        return this.each(function() {
                        
            /* save this to self because this changes when scope changes */
            var self = this;  
                   
            /* inlined block elements lose their width and height after first edit */
            /* save them for later use as workaround */
            var savedwidth  = $(self).width();
            var savedheight = $(self).height();
            
            /* save so it can be later used by $.editable('destroy') */
            $(this).data('event.editable', settings.event);
            
            /* if element is empty add something clickable (if requested) */
            if (!$.trim($(this).html())) {
                $(this).html(settings.placeholder);
            }
            
            $(this).bind(settings.event, function(e) {
                
                /* abort if disabled for this element */
                if (true === $(this).data('disabled.editable')) {
                    return;
                }
                
                /* prevent throwing an exeption if edit field is clicked again */
                if (self.editing) {
                    return;
                }
                
                /* abort if onedit hook returns false */
                if (false === onedit.apply(this, [settings, self])) {
                   return;
                }
                
                /* remove tooltip */
                if (settings.tooltip) {
                    $(self).removeAttr('title');
                }
                
                /* figure out how wide and tall we are, saved width and height */
                /* are workaround for http://dev.jquery.com/ticket/2190 */
                if (0 == $(self).width()) {
                    //$(self).css('visibility', 'hidden');
                    settings.width  = savedwidth;
                    settings.height = savedheight;
                } else {
                    if (settings.width != 'none') {
                        settings.width = 
                            settings.autowidth ? $(self).width()  : settings.width;
                    }
                    if (settings.height != 'none') {
                        settings.height = 
                            settings.autoheight ? $(self).height() : settings.height;
                    }
                }
                //$(this).css('visibility', '');
                
                /* remove placeholder text, replace is here because of IE */
                if ($(this).html().toLowerCase().replace(/(;|")/g, '') == 
                    settings.placeholder.toLowerCase().replace(/(;|")/g, '')) {
                        $(this).html('');
                }
                                
                self.editing    = true;
                self.revert     = $(self).html();
                $(self).html('');

                /* create the form object */
                var form = $('<form />');
                
                /* apply css or style or both */
                if (settings.cssclass) {
                    if ('inherit' == settings.cssclass) {
                        form.attr('class', $(self).attr('class'));
                    } else {
                        form.attr('class', settings.cssclass);
                    }
                }

                if (settings.style) {
                    if ('inherit' == settings.style) {
                        form.attr('style', $(self).attr('style'));
                        /* IE needs the second line or display wont be inherited */
                        form.css('display', $(self).css('display'));                
                    } else {
                        form.attr('style', settings.style);
                    }
                }

                /* add main input element to form and store it in input */
                var input = element.apply(form, [settings, self]);

                /* set input content via POST, GET, given data or existing value */
                var input_content;
                
                if (settings.loadurl) {
                    var t = setTimeout(function() {
                        input.disabled = true;
                        content.apply(form, [settings.loadtext, settings, self]);
                    }, 100);

                    var loaddata = {};
                    loaddata[settings.id] = self.id;
                    if ($.isFunction(settings.loaddata)) {
                        $.extend(loaddata, settings.loaddata.apply(self, [self.revert, settings]));
                    } else {
                        $.extend(loaddata, settings.loaddata);
                    }
                    $.ajax({
                       type : settings.loadtype,
                       url  : settings.loadurl,
                       data : loaddata,
                       async : false,
                       success: function(result) {
                          window.clearTimeout(t);
                          input_content = result;
                          input.disabled = false;
                       }
                    });
                } else if (settings.data) {
                    input_content = settings.data;
                    if ($.isFunction(settings.data)) {
                        input_content = settings.data.apply(self, [self.revert, settings]);
                    }
                } else {
                    input_content = self.revert; 
                }
                content.apply(form, [input_content, settings, self]);

                input.attr('name', settings.name);
        
                /* add buttons to the form */
                buttons.apply(form, [settings, self]);
         
                /* add created form to self */
                $(self).append(form);
         
                /* attach 3rd party plugin if requested */
                plugin.apply(form, [settings, self]);

                /* focus to first visible form element */
                $(':input:visible:enabled:first', form).focus();

                /* highlight input contents when requested */
                if (settings.select) {
                    input.select();
                }
        
                /* discard changes if pressing esc */
                input.keydown(function(e) {
                    if (e.keyCode == 27) {
                        e.preventDefault();
                        //self.reset();
                        reset.apply(form, [settings, self]);
                    }
                });

                /* discard, submit or nothing with changes when clicking outside */
                /* do nothing is usable when navigating with tab */
                var t;
                if ('cancel' == settings.onblur) {
                    input.blur(function(e) {
                        /* prevent canceling if submit was clicked */
                        t = setTimeout(function() {
                            reset.apply(form, [settings, self]);
                        }, 500);
                    });
                } else if ('submit' == settings.onblur) {
                    input.blur(function(e) {
                        /* prevent double submit if submit was clicked */
                        t = setTimeout(function() {
                            form.submit();
                        }, 200);
                    });
                } else if ($.isFunction(settings.onblur)) {
                    input.blur(function(e) {
                        settings.onblur.apply(self, [input.val(), settings]);
                    });
                } else {
                    input.blur(function(e) {
                      /* TODO: maybe something here */
                    });
                }

                form.submit(function(e) {

                    if (t) { 
                        clearTimeout(t);
                    }

                    /* do no submit */
                    e.preventDefault(); 
            
                    /* call before submit hook. */
                    /* if it returns false abort submitting */                    
                    if (false !== onsubmit.apply(form, [settings, self])) { 
                        /* custom inputs call before submit hook. */
                        /* if it returns false abort submitting */
                        if (false !== submit.apply(form, [settings, self])) { 

                          /* check if given target is function */
                          if ($.isFunction(settings.target)) {
                              var str = settings.target.apply(self, [input.val(), settings]);
                              $(self).html(str);
                              self.editing = false;
                              callback.apply(self, [self.innerHTML, settings]);
                              /* TODO: this is not dry */                              
                              if (!$.trim($(self).html())) {
                                  $(self).html(settings.placeholder);
                              }
                          } else {
                              /* add edited content and id of edited element to POST */
                              var submitdata = {};
                              submitdata[settings.name] = input.val();
                              submitdata[settings.id] = self.id;
                              /* add extra data to be POST:ed */
                              if ($.isFunction(settings.submitdata)) {
                                  $.extend(submitdata, settings.submitdata.apply(self, [self.revert, settings]));
                              } else {
                                  $.extend(submitdata, settings.submitdata);
                              }

                              /* quick and dirty PUT support */
                              if ('PUT' == settings.method) {
                                  submitdata['_method'] = 'put';
                              }

                              /* show the saving indicator */
                              $(self).html(settings.indicator);
                              
                              /* defaults for ajaxoptions */
                              var ajaxoptions = {
                                  type    : 'POST',
                                  data    : submitdata,
                                  url     : settings.target,
                                  success : function(result, status) {
                                      $(self).html(input.val());
                                      self.editing = false;
                                      callback.apply(self, [self.innerHTML, settings]);
                                      if (!$.trim($(self).html())) {
                                          $(self).html(settings.placeholder);
                                      }
                                  },
                                  error   : function(xhr, status, error) {
                                      onerror.apply(form, [settings, self, xhr]);
                                  }
                              }
                              
                              /* override with what is given in settings.ajaxoptions */
                              $.extend(ajaxoptions, settings.ajaxoptions);   
                              $.ajax(ajaxoptions);          
                              
                            }
                        }
                    }
                    
                    /* show tooltip again */
                    $(self).attr('title', settings.tooltip);
                    
                    return false;
                });
            });
            
            /* privileged methods */
            this.reset = function(form) {
                /* prevent calling reset twice when blurring */
                if (this.editing) {
                    /* before reset hook, if it returns false abort reseting */
                    if (false !== onreset.apply(form, [settings, self])) { 
                        $(self).html(self.revert);
                        self.editing   = false;
                        if (!$.trim($(self).html())) {
                            $(self).html(settings.placeholder);
                        }
                        /* show tooltip again */
                        if (settings.tooltip) {
                            $(self).attr('title', settings.tooltip);                
                        }
                    }                    
                }
            }            
        });

    };


    $.editable = {
        types: {
            defaults: {
                element : function(settings, original) {
                    var input = $('<input type="hidden"></input>');                
                    $(this).append(input);
                    return(input);
                },
                content : function(string, settings, original) {
                    $(':input:first', this).val(string);
                },
                reset : function(settings, original) {
                  original.reset(this);
                },
                buttons : function(settings, original) {
                    var form = this;
                    if (settings.submit) {
                        /* if given html string use that */
                        if (settings.submit.match(/>$/)) {
                            var submit = $(settings.submit).click(function() {
                                if (submit.attr("type") != "submit") {
                                    form.submit();
                                }
                            });
                        /* otherwise use button with given string as text */
                        } else {
                            var submit = $('<button type="submit" />');
                            submit.html(settings.submit);                            
                        }
                        $(this).append(submit);
                    }
                    if (settings.cancel) {
                        /* if given html string use that */
                        if (settings.cancel.match(/>$/)) {
                            var cancel = $(settings.cancel);
                        /* otherwise use button with given string as text */
                        } else {
                            var cancel = $('<button type="cancel" />');
                            cancel.html(settings.cancel);
                        }
                        $(this).append(cancel);

                        $(cancel).click(function(event) {
                            //original.reset();
                            if ($.isFunction($.editable.types[settings.type].reset)) {
                                var reset = $.editable.types[settings.type].reset;                                                                
                            } else {
                                var reset = $.editable.types['defaults'].reset;                                
                            }
                            reset.apply(form, [settings, original]);
                            return false;
                        });
                    }
                }
            },
            text: {
                element : function(settings, original) {
                    var input = $('<input />');
                    if (settings.width  != 'none') { input.width(settings.width);  }
                    if (settings.height != 'none') { input.height(settings.height); }
                    /* https://bugzilla.mozilla.org/show_bug.cgi?id=236791 */
                    //input[0].setAttribute('autocomplete','off');
                    input.attr('autocomplete','off');
                    $(this).append(input);
                    return(input);
                }
            },
            textarea: {
                element : function(settings, original) {
                    var textarea = $('<textarea />');
                    if (settings.rows) {
                        textarea.attr('rows', settings.rows);
                    } else if (settings.height != "none") {
                        textarea.height(settings.height);
                    }
                    if (settings.cols) {
                        textarea.attr('cols', settings.cols);
                    } else if (settings.width != "none") {
                        textarea.width(settings.width);
                    }
                    $(this).append(textarea);
                    return(textarea);
                }
            },
            select: {
               element : function(settings, original) {
                    var select = $('<select />');
                    $(this).append(select);
                    return(select);
                },
                content : function(data, settings, original) {
                    /* If it is string assume it is json. */
                    if (String == data.constructor) {      
                        eval ('var json = ' + data);
                    } else {
                    /* Otherwise assume it is a hash already. */
                        var json = data;
                    }
                    for (var key in json) {
                        if (!json.hasOwnProperty(key)) {
                            continue;
                        }
                        if ('selected' == key) {
                            continue;
                        } 
                        var option = $('<option />').val(key).append(json[key]);
                        $('select', this).append(option);    
                    }                    
                    /* Loop option again to set selected. IE needed this... */ 
                    $('select', this).children().each(function() {
                        if ($(this).val() == json['selected'] || 
                            $(this).text() == original.revert) {
                                $(this).attr('selected', 'selected');
                        };
                    });
                }
            }
        },

        /* Add new input type */
        addInputType: function(name, input) {
            $.editable.types[name] = input;
        }
    };

})(jQuery);

/*
Script: TextboxList.js
  Displays a textbox as a combination of boxes an inputs (eg: facebook tokenizer)

  Authors:
    Guillermo Rauch
    
  Note:
    TextboxList is not priceless for commercial use. See <http://devthought.com/projects/jquery/textboxlist/>. 
    Purchase to remove this message.
*/

(function($){
  
TextboxList = function(element, _options){
  
  var original, container, list, current, focused = false, index = [], blurtimer, events = {};
  var options = $.extend(true, {
    prefix: 'textboxlist',
    max: null,
    unique: false,
    uniqueInsensitive: true,
    endEditableBit: true,
    startEditableBit: true,
    hideEditableBits: true,
    inBetweenEditableBits: true,
    keys: {previous: 37, next: 39},
    bitsOptions: {editable: {}, box: {}},
    plugins: {},
    filter: function(str){ return $.trim(str.replace(/\s+/g, ' ')).replace(/,/g, ''); },
    encode: function(o){ return o ? o.join(',') : ''; },
    decode: function(o){ return o ? o.split(',') : []; }
  }, _options);
  
  element = $(element);
  
  var self = this;
  var init = function(){    
    original = element.css('display', 'none').attr('autocomplete', 'off').focus(focusLast);
    container = $('<div class="'+options.prefix+'" />')
      .insertAfter(element)
      .click(function(e){ 
        if ((e.target == list.get(0) || e.target == container.get(0)) && (!focused || current.toElement().get(0) != list.find(':last-child').get(0))) focusLast();      
      });     
    list = $('<ul class="'+ options.prefix +'-bits" />').appendTo(container);
    for (var name in options.plugins) enablePlugin(name, options.plugins[name]);    
    afterInit();
  };
  
  var enablePlugin = function(name, options){
    self.plugins[name] = new TextboxList[camelCase(capitalize(name))](self, options);
  };
  
  var afterInit = function(){
    if (options.endEditableBit) create('editable', null, {tabIndex: (original.tabIndex || 1)}).inject(list);
    addEvent('bitAdd', update, true);
    addEvent('bitRemove', update, true);
    $(document).click(function(e){
      if (!focused) return;
      if (e.target.className.indexOf(options.prefix) != -1){        
        if (e.target == $(container).get(0)) return;        
        var parent = $(e.target).parents('div.' + options.prefix);
        if (parent.get(0) == container.get(0)) return;
      }
      blur();
    }).keydown(function(ev){
      if (!focused || !current) return;
      var caret = current.is('editable') ? current.getCaret() : null;
      var value = current.getValue()[1];
      var special = !!$.map(['shift', 'alt', 'meta', 'ctrl'], function(e){ return ev[e]; }).length;
      var custom = special || (current.is('editable') && current.isSelected());
      var evStop = function(){ ev.stopPropagation(); ev.preventDefault(); };
      switch (ev.which){
        case 8:
          if (current.is('box')){ 
            evStop();
            return current.remove(); 
          }
        case options.keys.previous:
          if (current.is('box') || ((caret == 0 || !value.length) && !custom)){
            evStop();
            focusRelative('prev');
          }
          break;
        case 46:
          if (current.is('box')){ 
            evStop();
            return current.remove(); 
          }
        case options.keys.next: 
          if (current.is('box') || (caret == value.length && !custom)){
            evStop();
            focusRelative('next');
          }
      }
    });
    setValues(options.decode(original.val()));
  };
  
  var create = function(klass, value, opt){
    if (klass == 'box'){
      if (!value[0] && !value[1]) return false;
      if (chk(options.max) && list.getChildren('.' + options.prefix + '-bit-box').length + 1 > options.max) return false;
      if (options.unique && $.inArray(uniqueValue(value), index) != -1) return false;   
    }   
    return new TextboxListBit(klass, value, self, $.extend(true, options.bitsOptions[klass], opt));
  };
  
  var uniqueValue = function(value){
    return chk(value[0]) ? value[0] : (options.uniqueInsensitive ? value[1].toLowerCase() : value[1]);
  }
  
  var add = function(plain, id, html, afterEl){
    var b = create('box', [id, plain, html]);
    if (b){
      if (!afterEl || !afterEl.length) afterEl = list.find('.' + options.prefix + '-bit-box').filter(':last');
      b.inject(afterEl.length ? afterEl : list, afterEl.length ? 'after' : 'top');
    } 
    return self;
  };
  
  var focusRelative = function(dir, to){
    var el = getBit(to && $(to).length ? to : current).toElement();
    var b = getBit(el[dir]());
    if (b) b.focus();
    return self;
  };
  
  var focusLast = function(){
    var lastElement = list.children().filter(':last');
    if (lastElement) getBit(lastElement).focus();
    return self;
  };
  
  var blur = function(){  
    if (! focused) return self;
    if (current) current.blur();
    focused = false;
    return fireEvent('blur');
  };
  
  var getBit = function(obj){       
    return obj.jquery ? $(obj).data('textboxlist:bit') : obj;
  };
  
  var getValues = function(){
    return $.grep($.map(list.children(), function(el){
      var bit = getBit($(el));
      if (bit.is('editable')) return null;
      var v = bit.getValue();
      return (chk(v[0]) ? v[0] : options.filter(v[1])) || null;
    }), function(o){ return o != undefined; });
  };
  
  var setValues = function(values){
    if (!values) return;
    $.each(values, function(i, v){
      if (v) add.apply(self, $.isArray(v) ? [v[1], v[0], v[2]] : [v]);
    });   
  };
  
  var update = function(){
    original.val(options.encode(getValues()));
  };
  
  var addEvent = function(type, fn){
    if (events[type] == undefined) events[type] = [];
    var exists = false;
    $.each(events[type], function(f){
      if (f === fn){
        exists = true;
        return;
      };
    });
    if (!exists) events[type].push(fn);
    return self;
  };
  
  var fireEvent = function(type, args, delay){
    if (!events || !events[type]) return self;
    $.each(events[type], function(i, fn){   
      (function(){
        args = (args != undefined) ? splat(args) : Array.prototype.slice.call(arguments);
        var returns = function(){
          return fn.apply(self || null, args);
        };
        if (delay) return setTimeout(returns, delay);
        return returns();
      })();
    });
    return self;
  };
  
  var removeEvent = function(type, fn){
    if (events[type]){
      for (var i = events[type].length; i--; i){
        if (events[type][i] === fn) events[type].splice(i, 1);
      }
    } 
    return self;
  };
  
  this.onFocus = function(bit){
    if (current) current.blur();
    clearTimeout(blurtimer);
    current = bit;
    container.addClass(options.prefix + '-focus');    
    if (!focused){
      focused = true;
      fireEvent('focus', bit);
    }
  };
  
  this.onAdd = function(bit){
    if (options.unique && bit.is('box')) index.push(uniqueValue(bit.getValue()));
    bit.toElement().css('display', 'inline-block');
    if (bit.is('box')){
      var prior = getBit(bit.toElement().prev());
      if ((prior && prior.is('box') && options.inBetweenEditableBits) || (!prior && options.startEditableBit)){       
        var priorEl = prior && prior.toElement().length ? prior.toElement() : false;
        var b = create('editable').inject(priorEl || list, priorEl ? 'after' : 'top');
        if (options.hideEditableBits) b.hide();
      }
    }
  };
  
  this.onRemove = function(bit){
    if (!focused) return;
    if (options.unique && bit.is('box')){
      var i = $.inArray(uniqueValue(bit.getValue()), index);
      if (i != -1) index = index.splice(i + 1, 1);
    } 
    var prior = getBit(bit.toElement().prev());
    if (prior && prior.is('editable')) prior.remove();
    focusRelative('next', bit);
  };
  
  this.onBlur = function(bit, all){
    current = null;
    container.removeClass(options.prefix + '-focus');   
    blurtimer = setTimeout(blur, all ? 0 : 200);
  };
  
  this.setOptions = function(opt){
    options = $.extend(true, options, opt);
  };
  
  this.getOptions = function(){
    return options;
  };
  
  this.getContainer = function(){
    return container;
  };
  
  this.addEvent = addEvent;
  this.removeEvent = removeEvent;
  this.fireEvent = fireEvent;
  this.create = create;
  this.add = add;
  this.getValues = getValues;
  this.plugins = [];
  init();
};

TextboxListBit = function(type, value, textboxlist, _options){
  
  var element, bit, prefix, typeprefix, close, hidden, focused = false, name = capitalize(type); 
  var options = $.extend(true, type == 'box' ? {
    deleteButton: true
  } : {
    tabIndex: 1,
    growing: true,
    growingOptions: {},
    stopEnter: true,
    addOnBlur: true,
    addKeys: [ 13, 188, 59]
  }, _options);
  
  this.type = type;
  this.value = value;
  
  var self = this;
  var init = function(){
    prefix = textboxlist.getOptions().prefix + '-bit';
    typeprefix = prefix + '-' + type;
    bit = $('<li />').addClass(prefix).addClass(typeprefix)
      .data('textboxlist:bit', self)
      .hover(function(){ 
        bit.addClass(prefix + '-hover').addClass(typeprefix + '-hover'); 
      }, function(){
        bit.removeClass(prefix + '-hover').removeClass(typeprefix + '-hover'); 
      });
    if (type == 'box'){
      bit.html(chk(self.value[2]) ? self.value[2] : self.value[1]).click(focus);
      if (options.deleteButton){
        bit.addClass(typeprefix + '-deletable');
        close = $('<a href="#" class="'+ typeprefix +'-deletebutton" />').click(remove).appendTo(bit);
      }
      bit.children().click(function(e){ e.stopPropagation(); e.preventDefault(); });
    } else {
      element = $('<input type="text" class="'+ typeprefix +'-input" autocomplete="off" />').val(self.value ? self.value[1] : '').appendTo(bit);
      if (chk(options.tabIndex)) element.tabIndex = 2;
      if (options.growing) new GrowingInput(element, options.growingOptions);   
      element.focus(function(){ focus(true);  }).blur(function(){
        blur(true);
        if (options.addOnBlur) toBox(); 
      });       

      if (options.addKeys || options.stopEnter){
        element.keydown(function(ev){
          if (!focused) return;
          var evStop = function(){ ev.stopPropagation(); ev.preventDefault(); };
          if (options.stopEnter && ev.which === 13) evStop();
          if ($.inArray(ev.which, splat([188, 59])) != -1){
            evStop();
            toBox();
          }
        });
      }
    }
  };
  
  var inject = function(el, where){
    switch(where || 'bottom'){
      case 'top': bit.prependTo(el); break;
      case 'bottom': bit.appendTo(el); break;
      case 'before': bit.insertBefore(el); break;     
      case 'after': bit.insertAfter(el); break;           
    }
    textboxlist.onAdd(self);  
    return fireBitEvent('add');
  };
  
  var focus = function(noReal){
    if (focused) return self;
    show();
    focused = true;
    textboxlist.onFocus(self);
    bit.addClass(prefix + '-focus').addClass(prefix + '-' + type + '-focus');
    fireBitEvent('focus');    
    if (type == 'editable' && !noReal){
     element.focus();
    } else{

    }
    return self;
  };
  
  var blur = function(noReal){
    if (!focused) return self;
    focused = false;
    textboxlist.onBlur(self);
    bit.removeClass(prefix + '-focus').removeClass(prefix + '-' + type + '-focus');
    fireBitEvent('blur');
    if (type == 'editable'){
      if (!noReal) element.blur();
      if (hidden && !element.val().length) hide();
    }
    return self;
  };
  
  var remove = function(){
    blur();   
    textboxlist.onRemove(self);
    bit.remove();
    return fireBitEvent('remove');
  };
  
  var show = function(){
    bit.css('display', 'inline');
    return self;
  };
  
  var hide = function(){
    bit.css('display', 'none');   
    hidden = true;
    return self;
  };
  
  var fireBitEvent = function(type){
    type = capitalize(type);
    textboxlist.fireEvent('bit' + type, self).fireEvent('bit' + name + type, self);
    return self;
  };
  
  this.is = function(t){
    return type == t;
  };

  this.setValue = function(v){
    if (type == 'editable'){
      element.val(chk(v[0]) ? v[0] : v[1]);
      if (options.growing) element.data('growing').resize();
    } else value = v;
    return self; 
  };

  this.getValue = function(){
    return type == 'editable' ? [null, element.val(), null] : value;
  };
  
  if (type == 'editable'){
    this.getCaret = function(){
      var el = element.get(0);
      if (el.createTextRange){
        var r = document.selection.createRange().duplicate();   
        r.moveEnd('character', el.value.length);
        if (r.text === '') return el.value.length;
        return el.value.lastIndexOf(r.text);
      } else return el.selectionStart;
    };

    this.getCaretEnd = function(){
      var el = element.get(0);      
      if (el.createTextRange){
        var r = document.selection.createRange().duplicate();
        r.moveStart('character', -el.value.length);
        return r.text.length;
      } else return el.selectionEnd;
    };
    
    this.isSelected = function(){
      return focused && (self.getCaret() !== self.getCaretEnd());
    };
    
    var toBox = function(){
      var value = self.getValue();        
      var b = textboxlist.create('box', value);
      if (b){
        b.inject(bit, 'before');
        self.setValue([null, '', null]);
        return b;
      }
      return null;
    };
    
    this.toBox = toBox;
  }
  
  this.toElement = function(){
    return bit;
  };
  
  this.focus = focus;
  this.blur = blur;
  this.remove = remove;
  this.inject = inject;
  this.show = show;
  this.hide = hide;
  this.fireBitEvent = fireBitEvent;
  init();
};

var chk = function(v){ return !!(v || v === 0); };
var splat = function(a){ return (Object.prototype.toString.call(a) === "[object Array]") ? a : [a]; };
var camelCase = function(str){ return str.replace(/-\D/g, function(match){ return match.charAt(1).toUpperCase(); }); };
var capitalize = function(str){ return str.replace(/\b[a-z]/g, function(A){ return A.toUpperCase(); }); };

})(jQuery);


/*
Script: TextboxList.Autocomplete.js
  TextboxList Autocomplete plugin

  Authors:
    Guillermo Rauch
  
  Note:
    TextboxList is not priceless for commercial use. See <http://devthought.com/projects/jquery/textboxlist/>
    Purchase to remove this message.
*/

(function(){
  
TextboxList.Autocomplete = function(textboxlist, _options){
  
  var index, prefix, method, container, list, values = [], results = [], placeholder = false, current,  currentInput, hidetimer, doAdd, currentSearch;
  var options = $.extend(true, {
    minLength: 1,
    maxResults: 10,
    insensitive: true,
    highlight: true,
    highlightSelector: null,
    mouseInteraction: true,
    onlyFromValues: false,
    autoSelect: true,
    method: 'standard',
    placeholder: 'Type to receive suggestions'
  }, _options);
  
  var init = function(){
    textboxlist.addEvent('bitEditableAdd', setupBit)
      .addEvent('bitEditableFocus', search)
      .addEvent('bitEditableBlur', hide)
      .setOptions({bitsOptions: {editable: {addKeys: true, stopEnter: false}}});
    if ($.browser.msie) textboxlist.setOptions({bitsOptions: {editable: {addOnBlur: true}}});
    if (textboxlist.getOptions().unique){
      index = [];
      textboxlist.addEvent('bitBoxRemove', function(bit){
        if (bit.autoValue && $.inArray(bit.autoValue, index) != -1) index = index.splice($.inArray(bit.autoValue, index) + 1, 1);
      }, true);
    }
    prefix = textboxlist.getOptions().prefix + '-autocomplete';
    method = TextboxList.Autocomplete.Methods[options.method];
    container = $('<div class="'+ prefix +'" />').width(textboxlist.getContainer().width()).appendTo(textboxlist.getContainer());
    if (chk(options.placeholder)) placeholder = $('<div class="'+ prefix +'-placeholder" />').html(options.placeholder).appendTo(container);    
    list = $('<ul class="'+ prefix +'-results" />').appendTo(container).click(function(ev){
      ev.stopPropagation(); ev.preventDefault();
    });
  };
  
  var setupBit = function(bit){
    bit.toElement().keydown(navigate).keyup(function(){ search(); });
  };
  
  var search = function(bit){
    if (bit) currentInput = bit;
    if (!values.length) return;
    var search = currentInput.getValue()[1];
    if (search.length < options.minLength) showPlaceholder();
    if (search == currentSearch) return;
    currentSearch = search;
    list.css('display', 'none');
    if (search.length < options.minLength) return;
    showResults(search);
  };
  
  var showResults = function(search){
    var results = method.filter(values, search, options.insensitive, options.maxResults);
    if (index) results = $.grep(results, function(v){ return $.inArray(v, index) == -1; });
    hidePlaceholder();
    if (!results.length) return;
    blur();
    list.empty().css('display', 'block');
    $.each(results, function(i, r){ addResult(r, search); });
    if (options.onlyFromValues) focusFirst();
    if (options.autoSelect) focusFirst();
    results = results;
  };
  
  var addResult = function(r, searched){
    var element = $('<li class="'+ prefix +'-result" />').html(r[3] ? r[3] : r[1]).data('textboxlist:auto:value', r);   
    element.appendTo(list);
    if (options.highlight) $(options.highlightSelector ? element.find(options.highlightSelector) : element).each(function(){
      if ($(this).html()) method.highlight($(this), searched, options.insensitive, prefix + '-highlight');
    });
    if (options.mouseInteraction){
      element.css('cursor', 'pointer').hover(function(){ focus(element); }).mousedown(function(ev){
        ev.stopPropagation(); 
        ev.preventDefault();
        clearTimeout(hidetimer);
        doAdd = true;
      }).mouseup(function(){
        if (doAdd){
          addCurrent();
          currentInput.focus();
          search();
          doAdd = false;
        }
      });
      if (!options.onlyFromValues) element.mouseleave(function(){ if (current && (current.get(0) == element.get(0))) blur(); });  
    }
  };
  
  var hide = function(){
    hidetimer = setTimeout(function(){
      hidePlaceholder();
      list.css('display', 'none');
      currentSearch = null;     
    }, $.browser.msie ? 150 : 0);
  };
  
  var showPlaceholder = function(){
    if (placeholder) placeholder.css('display', 'block');   
  };
  
  var hidePlaceholder = function(){
    if (placeholder) placeholder.css('display', 'none');
  };
  
  var focus = function(element){
    if (!element || !element.length) return;
    blur();
    current = element.addClass(prefix + '-result-focus');
  };
  
  var blur = function(){
    if (current && current.length){
      current.removeClass(prefix + '-result-focus');
      current = null;
    }
  };
  
  var focusFirst = function(){
    return focus(list.find(':first'));
  };
  
  var focusRelative = function(dir){
    if (!current || !current.length) return self;
    return focus(current[dir]());
  };
  
  var addCurrent = function(){
    var value = current.data('textboxlist:auto:value');
    var b = textboxlist.create('box', value.slice(0, 3));
    if (b){
      b.autoValue = value;
      index.push(value);
      currentInput.setValue([null, '', null]);
      b.inject(currentInput.toElement(), 'before');
    }
    blur();
    return self;
  };
  
  var navigate = function(ev){
    var evStop = function(){ ev.stopPropagation(); ev.preventDefault(); };
    switch (ev.which){
      case 38:      
        evStop();
        (!options.onlyFromValues && current && current.get(0) === list.find(':first').get(0)) ? blur() : focusRelative('prev');
        break;
      case 40:      
        evStop();
        (current && current.length) ? focusRelative('next') : focusFirst();
        break;
      case 9:
        evStop();
        var input = currentInput.getValue();
        var typedInput = (new String(input).split(',')[1]).toLowerCase();
        if(typedInput == "" ){
          hide();
          blur();
          $('#share_message').focus();
          break;
        }
        
        var match = true;
        try{
          if(current){
            var ac = current.data('textboxlist:auto:value');
          } else{
            var ac = "";
          }
          var selectedInput = (new String(ac).split(',')[1]).toLowerCase();
          if((selectedInput.indexOf(typedInput) == -1) && !options.onlyFromValues){
            match = false;
          }
        } catch(e){ }
        if (current && current.length && match ){
          addCurrent();
          currentInput.setValue([null, '', null]);
        }
        else if (!options.onlyFromValues){
          var value = currentInput.getValue();        
          var b = textboxlist.create('box', value);
          if (b){
            b.inject(currentInput.toElement(), 'before');
          }
          currentInput.setValue([null, '', null]);
        }  
        break;
      case 13:
        evStop();
        var match = true;
        try{
          var input = currentInput.getValue();
          var typedInput = (new String(input).split(',')[1]).toLowerCase();
          if(current){
            var ac = current.data('textboxlist:auto:value');
          } else{
            var ac = ""
          }
          var selectedInput = (new String(ac).split(',')[1]).toLowerCase();
          
          if((selectedInput.indexOf(typedInput) == -1) && !options.onlyFromValues){
            match = false;
          }
        } catch(e){ }
        if (current && current.length && match ) addCurrent();
        else if (!options.onlyFromValues){
          var value = currentInput.getValue();        
          var b = textboxlist.create('box', value);
          if (b){
            b.inject(currentInput.toElement(), 'before');
            currentInput.setValue([null, '', null]);
          }
        }
    }
  };
  
  this.setValues = function(v){
    values = v;
  };
  
  init();
};

TextboxList.Autocomplete.Methods = {
  
  standard: {
    filter: function(values, search, insensitive, max){
      var newvals = [], regexp = new RegExp('\\b' + escapeRegExp(search), insensitive ? 'i' : '');
      for (var i = 0; i < values.length; i++){
        if (newvals.length === max) break;
        if (regexp.test(values[i][1])) newvals.push(values[i]);
      }
      return newvals;
    },
    
    highlight: function(element, search, insensitive, klass){
      var regex = new RegExp('(<[^>]*>)|(\\b'+ escapeRegExp(search) +')', insensitive ? 'ig' : 'g');
      return element.html(element.html().replace(regex, function(a, b, c){
        return (a.charAt(0) == '<') ? a : '<strong class="'+ klass +'">' + c + '</strong>'; 
      }));
    }
  }
  
};

var chk = function(v){ return !!(v || v === 0); };
var escapeRegExp = function(str){ return str.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1"); };

})();


/*
Script: TextboxList.Autocomplete.Binary.js
  TextboxList Autocomplete binary search extension

  Authors:
    Guillermo Rauch
  
  Note:
    TextboxList is not priceless for commercial use. See <http://devthought.com/projects/jquery/textboxlist/>
    Purchase to remove this message.
*/

TextboxList.Autocomplete.Methods.binary = {
  filter: function(values, search, insensitive, max){
    var method = insensitive ? 'toLowerCase' : 'toString', low = 0, high = values.length - 1, lastTry;
    search = search[method]();
    while (high >= low){
      var mid = parseInt((low + high) / 2);
      var curr = values[mid][1].substr(0, search.length)[method]();     
      var result = ((search == curr) ? 0 : ((search > curr) ? 1 : -1));
      if (result < 0) { high = mid - 1; continue; }
      if (result > 0) { low = mid + 1; continue; }
      if (result === 0) break;
    }       
    if (high < low) return [];
    var newvalues = [values[mid]], checkNext = true, checkPrev = true, v1, v2;
    for (var i = 1; i <= values.length - mid; i++){     
      if (newvalues.length === max) break;
      if (checkNext) v1 = values[mid + i] ? values[mid + i][1].substr(0, search.length)[method]() : false;
      if (checkPrev) v2 = values[mid - i] ? values[mid - i][1].substr(0, search.length)[method]() : false;
      checkNext = checkPrev = false;
      if (v1 === search) { newvalues.push(values[mid + i]); checkNext = true; }
      if (v2 === search) { newvalues.unshift(values[mid - i]); checkPrev = true; }
      if (! (checkNext || checkPrev)) break;
    }
    return newvalues;
  },
  
  highlight: function(element, search, insensitive, klass){
    var regex = new RegExp('(<[^>]*>)|(\\b'+ search.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1") +')', insensitive ? 'ig' : 'g');
    return element.html(element.html().replace(regex, function(a, b, c, d){
      return (a.charAt(0) == '<') ? a : '<strong class="'+ klass +'">' + c + '</strong>'; 
    }));
  }
};

/*
Script: GrowingInput.js
  Alters the size of an input depending on its content

  License:
    MIT-style license.

  Authors:
    Guillermo Rauch
*/

(function(){

GrowingInput = function(element, options){
  
  var value, lastValue, calc;
  
  options = $.extend({
    min: 0,
    max: null,
    startWidth: 260,
    correction: 15
  }, options);
  
  element = $(element).data('growing', this);
  
  var self = this;
  var init = function(){
    calc = $('<span></span>').css({
      'float': 'left',
      'display': '',
      'position': 'absolute',
      'left': -1000
    }).insertAfter(element);
    $.each(['font-size', 'font-family', 'padding-left', 'padding-top', 'padding-bottom', 
     'padding-right', 'border-left', 'border-right', 'border-top', 'border-bottom', 
     'word-spacing', 'letter-spacing', 'text-indent', 'text-transform'], function(i, p){        
        calc.css(p, element.css(p));
    });
    element.blur(resize).keyup(resize).keydown(resize).keypress(resize);
    resize();
  };
  
  var calculate = function(chars){
    calc.html(chars);
    var width = calc.width();
    return (width ? width : options.startWidth) + options.correction;
  };
  
  var resize = function(){
    lastValue = value;
    value = element.val();
    var retValue = value;   
    if(chk(options.min) && value.length < options.min){
      if(chk(lastValue) && (lastValue.length <= options.min)) return;
      retValue = str_pad(value, options.min, '-');
    } else if(chk(options.max) && value.length > options.max){
      if(chk(lastValue) && (lastValue.length >= options.max)) return;
      retValue = value.substr(0, options.max);
    }
    element.width(calculate(retValue));
    return self;
  };
  
  this.resize = resize;
  init();
};

var chk = function(v){ return !!(v || v === 0); };
var str_repeat = function(str, times){ return new Array(times + 1).join(str); };
var str_pad = function(self, length, str, dir){
  if (self.length >= length) return this;
  str = str || ' ';
  var pad = str_repeat(str, length - self.length).substr(0, length - self.length);
  if (!dir || dir == 'right') return self + pad;
  if (dir == 'left') return pad + self;
  return pad.substr(0, (pad.length / 2).floor()) + self + pad.substr(0, (pad.length / 2).ceil());
};

})();


/*
	jQuery Coda-Slider v1.1 - http://www.ndoherty.com/coda-slider
	
	Copyright (c) 2007 Niall Doherty
	
	Inspired by the clever folks at http://www.panic.com/coda
	Many thanks to Gian Carlo Mingati. Coda-Slider is a heavily modified version of his slideViewer, which can be found at  http://www.gcmingati.net/wordpress/wp-content/lab/jquery/imagestrip/imageslide-plugin.html
	
	Requirements:
	-  jQuery 1.2 ... available via  http://www.jquery.com
	-  jQuery easing plugin (1.2) ... available via  http://gsgd.co.uk/sandbox/jquery/easing/
	- jQuery easing compatability plugin ... available via  http://gsgd.co.uk/sandbox/jquery/easing/
	- CSS included in index.html
*/

jQuery(function(){
	jQuery("div.csw").prepend("<p class='loading'>loading&hellip;</p>");
});
var j = 0;
jQuery.fn.codaSlider = function(settings) {
	 settings = jQuery.extend({
     easeFunc: "expoinout",
     easeTime: 750,
     toolTip: false
  }, settings);
	return this.each(function(){
		var container = jQuery(this);
		// Remove the preloader gif...
		container.find("p.loading").remove();
		// Self-explanatory...
		container.removeClass("csw").addClass("stripViewer");
		// Get the width of a panel, set from CSS...
		var panelWidth = container.find("div.panel").width();
		// panelCount gives us a count of the panels in the container...
		var panelCount = container.find("div.panel").size();
		// Calculate the width of all the panels when lined up end-to-end...
		var stripViewerWidth = panelWidth*panelCount;
		// Use the above width to specify the CSS width for the panelContainer element...
		container.find("div.panelContainer").css("width" , stripViewerWidth);
		// Set the navWidth as a multiple of panelCount to account for margin-right on each li
		var navWidth = panelCount*2;
		
		// Specify the current panel.
		// If the loaded URL has a hash (cross-linking), we're going to use that hash to give the slider a specific starting position...
		if (location.hash && parseInt(location.hash.slice(1)) <= panelCount) {
			var cPanel = parseInt(location.hash.slice(1));
			var cnt = - (panelWidth*(cPanel - 1));
			jQuery(this).find("div.panelContainer").css({ left: cnt });
		// Otherwise, we'll just set the current panel to 1...
		} else { 
			var cPanel = 1;
		};
		
		// Create appropriate nav
		container.each(function(i) {
			
			// Create the Left and Right arrows
			jQuery(this).before("<div class='stripNavL' id='stripNavL" + j + "'><a href='#'>Left</a><\/div>");
			jQuery(this).after("<div class='stripNavR' id='stripNavR" + j + "'><a href='#'>Right</a><\/div>");
			
			// Left nav
			jQuery("div#stripNavL" + j + " a").click(function(){
				if (cPanel == 1) {
					var cnt = - (panelWidth*(panelCount - 1));
					cPanel = panelCount;
					jQuery(this).parent().parent().find("div.stripNav a.current").removeClass("current").parent().parent().find("li:last a").addClass("current");
				} else {
					cPanel -= 1;
					var cnt = - (panelWidth*(cPanel - 1));
					jQuery(this).parent().parent().find("div.stripNav a.current").removeClass("current").parent().prev().find("a").addClass("current");
				};
				jQuery(this).parent().parent().find("div.panelContainer").animate({ left: cnt}, settings.easeTime, settings.easeFunc);
				// Change the URL hash (cross-linking)...
				location.hash = cPanel;
				return false;
			});
			
			// Right nav
			jQuery("div#stripNavR" + j + " a").click(function(){
				if (cPanel == panelCount) {
					var cnt = 0;
					cPanel = 1;
					jQuery(this).parent().parent().find("div.stripNav a.current").removeClass("current").parent().parent().find("a:eq(0)").addClass("current");
				} else {
					var cnt = - (panelWidth*cPanel);
					cPanel += 1;
					jQuery(this).parent().parent().find("div.stripNav a.current").removeClass("current").parent().next().find("a").addClass("current");
				};
				jQuery(this).parent().parent().find("div.panelContainer").animate({ left: cnt}, settings.easeTime, settings.easeFunc);
				// Change the URL hash (cross-linking)...
				location.hash = cPanel;
				return false;
			});
			
			// Same-page cross-linking
			jQuery("a.cross-link").click(function(){
				jQuery(this).parents().find(".stripNav ul li a:eq(" + (parseInt(jQuery(this).attr("href").slice(1)) - 1) + ")").trigger('click');
			});	
			
		
			
		});
		
		j++;
  });
};


/*
    VERSION: Drop Shadow jQuery Plugin 1.6  12-13-2007

    REQUIRES: jquery.js (1.2.6 or later)

    SYNTAX: $(selector).dropShadow(options);  // Creates new drop shadows
                    $(selector).redrawShadow();       // Redraws shadows on elements
                    $(selector).removeShadow();       // Removes shadows from elements
                    $(selector).shadowId();           // Returns an existing shadow's ID

    OPTIONS:

        left    : integer (default = 4)
        top     : integer (default = 4)
        blur    : integer (default = 2)
        opacity : decimal (default = 0.5)
        color   : string (default = "black")
        swap    : boolean (default = false)

    The left and top parameters specify the distance and direction, in  pixels, to
    offset the shadow. Zero values position the shadow directly behind the element.
    Positive values shift the shadow to the right and down, while negative values 
    shift the shadow to the left and up.
    
    The blur parameter specifies the spread, or dispersion, of the shadow. Zero 
    produces a sharp shadow, one or two produces a normal shadow, and   three or four
    produces a softer shadow. Higher values increase the processing load.
    
    The opacity parameter   should be a decimal value, usually less than one. You can
    use a value higher than one in special situations, e.g. with extreme blurring. 
    
    Color is specified in the usual manner, with a color name or hex value. The
    color parameter does not apply with transparent images.
    
    The swap parameter reverses the stacking order of the original and the shadow.
    This can be used for special effects, like an embossed or engraved look.

    EXPLANATION:
    
    This jQuery plug-in adds soft drop shadows behind page elements. It is only
    intended for adding a few drop shadows to mostly stationary objects, like a
    page heading, a photo, or content containers.

    The shadows it creates are not bound to the original elements, so they won't
    move or change size automatically if the original elements change. A window
    resize event listener is assigned, which should re-align the shadows in many
    cases, but if the elements otherwise move or resize you will have to handle
    those events manually. Shadows can be redrawn with the redrawShadow() method
    or removed with the removeShadow() method. The redrawShadow() method uses the
    same options used to create the original shadow. If you want to change the
    options, you should remove the shadow first and then create a new shadow.
    
    The dropShadow method returns a jQuery collection of the new shadow(s). If
    further manipulation is required, you can store it in a variable like this:

        var myShadow = $("#myElement").dropShadow();

    You can also read the ID of the shadow from the original element at a later
    time. To get a shadow's ID, either read the shadowId attribute of the
    original element or call the shadowId() method. For example:

        var myShadowId = $("#myElement").attr("shadowId");  or
        var myShadowId = $("#myElement").shadowId();

    If the original element does not already have an ID assigned, a random ID will
    be generated for the shadow. However, if the original does have an ID, the 
    shadow's ID will be the original ID and "_dropShadow". For example, if the
    element's ID is "myElement", the shadow's ID would be "myElement_dropShadow".

    If you have a long piece of text and the user resizes the   window so that the
    text wraps or unwraps, the shape of the text changes and the words are no
    longer in the same positions. In that case, you can either preset the height
    and width, so that it becomes a fixed box, or you can shadow each word
    separately, like this:

        <h1><span>Your</span> <span>Page</span> <span>Title</span></h1>

        $("h1 span").dropShadow();

    The dropShadow method attempts to determine whether the selected elements have
    transparent backgrounds. If you want to shadow the content inside an element,
    like text or a transparent image, it must not have a background-color or
    background-image style. If the element has a solid background it will create a
    rectangular shadow around the outside box.

    The shadow elements are positioned absolutely one layer below the original 
    element, which is positioned relatively (unless it's already absolute).

    *** All shadows have the "dropShadow" class, for selecting with CSS or jQuery.

    ISSUES:
    
        1)  Limited styling of shadowed elements by ID. Because IDs must be unique,
                and the shadows have their own ID, styles applied by ID won't transfer
                to the shadows. Instead, style elements by class or use inline styles.
        2)  Sometimes shadows don't align properly. Elements may need to be wrapped
                in container elements, margins or floats changed, etc. or you may just 
                have to tweak the left and top offsets to get them to align. For example,
                with draggable objects, you have to wrap them inside two divs. Make the 
                outer div draggable and set the inner div's position to relative. Then 
                you can create a shadow on the element inside the inner div.
        3)  If the user changes font sizes it will throw the shadows off. Browsers 
                do not expose an event for font size changes. The only known way to 
                detect a user font size change is to embed an invisible text element and
                then continuously poll for changes in size.
        4)  Safari support is shaky, and may require even more tweaks/wrappers, etc.
        
        The bottom line is that this is a gimick effect, not PFM, and if you push it
        too hard or expect it to work in every possible situation on every browser,
        you will be disappointed. Use it sparingly, and don't use it for anything 
        critical. Otherwise, have fun with it!
                
    AUTHOR: Larry Stevens (McLars@eyebulb.com) This work is in the public domain,
                    and it is not supported in any way. Use it at your own risk.
*/


(function($){

    var dropShadowZindex = 1;  //z-index counter

    $.fn.dropShadow = function(options)
    {
        // default options
        var opt = $.extend({
            left: 2,
            top: 2,
            blur:8,
            color: "#000000",
            swap: false,
            opacity:0.5
            }, options);
        
        var hasCSS3boxShadowSupport = false;
        
        // Box Shadow Support in Firefox 3.1+  and Safari 3+
        if( (jQuery.browser.safari && jQuery.browser.version > 522) || (jQuery.browser.firefox && jQuery.browser.version > 3.1) ){
            hasCSS3boxShadowSupport = true;
        }
        
        if(hasCSS3boxShadowSupport){
            // Browser supports box shadow, so we add the CSS properties
            $(this).css('box-shadow',opt.left + 'px ' + opt.top + 'px ' + opt.blur + 'px ' + opt.color);
            $(this).css('-moz-box-shadow',opt.left + 'px ' + opt.top + 'px ' + opt.blur + 'px ' + opt.color);
            $(this).css('-webkit-box-shadow',opt.left + 'px ' + opt.top + 'px ' + opt.blur + 'px ' + opt.color);
        } else{
            // Browser does not support box shadow - lets try something else
            var jShadows = $([]);  //empty jQuery collection

            // Loop through original elements
            this.not(".dropShadow").each(function()
            {
                var jthis = $(this);
                var shadows = [];
                var blur = (opt.blur <= 0) ? 0 : opt.blur;
                var opacity = (blur == 0) ? opt.opacity : opt.opacity / (blur * 8);
                var zOriginal = (opt.swap) ? dropShadowZindex : dropShadowZindex + 1;
                var zShadow = (opt.swap) ? dropShadowZindex + 1 : dropShadowZindex;

                // Create ID for shadow
                var shadowId;
                if (this.id) {
                    shadowId = this.id + "_dropShadow";
                }
                else {
                    shadowId = "ds" + (1 + Math.floor(9999 * Math.random()));
                }

                // Modify original element
                $.data(this, "shadowId", shadowId); //store id in expando
                $.data(this, "shadowOptions", options); //store options in expando
                jthis
                    .attr("shadowId", shadowId)
                    .css("zIndex", zOriginal);
                if (jthis.css("position") != "absolute") {
                    jthis.css({
                        position: "relative",
                        zoom: 1 //for IE layout
                    });
                }

                // Create first shadow layer
                bgColor = jthis.css("backgroundColor");
                if (bgColor == "rgba(0, 0, 0, 0)") bgColor = "transparent";  //Safari
                if (bgColor != "transparent" || jthis.css("backgroundImage") != "none" 
                        || this.nodeName == "SELECT" 
                        || this.nodeName == "INPUT"
                        || this.nodeName == "TEXTAREA") {       
                    shadows[0] = $("<div></div>")
                        .css("background", opt.color);                              
                }
                else {
                    shadows[0] = jthis
                        .clone()
                        .removeAttr("id")
                        .removeAttr("name")
                        .removeAttr("shadowId")
                        .css("color", opt.color);
                }
                shadows[0]
                    .addClass("dropShadow")
                    .css({
                        height: jthis.outerHeight(),
                        left: blur,
                        opacity: opacity,
                        position: "absolute",
                        top: blur,
                        width: jthis.outerWidth(),
                        zIndex: zShadow
                    });

                // Create other shadow layers
                var layers = (5 * blur) + 1;                // Reduced number of layers for better performance
                for (i = 1; i < layers; i++) {
                    shadows[i] = shadows[0].clone();
                }

                // Position layers
                var i = 1;          
                var j = blur;
                while (j > 0) {
                    shadows[i].css({left: j * 2, top: 0});           //top
                    shadows[i + 1].css({left: j * 4, top: j * 2});   //right
                    shadows[i + 2].css({left: j * 2, top: j * 4});   //bottom
                    shadows[i + 3].css({left: 0, top: j * 2});       //left
                    shadows[i + 4].css({left: j * 3, top: j});       //top-right
                    //shadows[i + 5].css({left: j * 3, top: j * 3});   //bottom-right
                    //shadows[i + 6].css({left: j, top: j * 3});       //bottom-left
                   // shadows[i + 7].css({left: j, top: j});           //top-left
                    i += 5;
                    j--;
                }

                // Create container
                var divShadow = $("<div></div>")
                    .attr("id", shadowId) 
                    .addClass("dropShadow")
                    .css({
                        left: jthis.position().left + opt.left - blur,
                        marginTop: jthis.css("marginTop"),
                        marginRight: jthis.css("marginRight"),
                        marginBottom: jthis.css("marginBottom"),
                        marginLeft: jthis.css("marginLeft"),
                        position: "absolute",
                        top: jthis.position().top + opt.top - blur,
                        zIndex: zShadow
                    });

                // Add layers to container  
                for (i = 0; i < layers; i++) {
                    divShadow.append(shadows[i]);
                }

                // Add container to DOM
                jthis.after(divShadow);

                // Add shadow to return set
                jShadows = jShadows.add(divShadow);

                // Re-align shadow on window resize
                $(window).resize(function()
                {
                    try {
                        divShadow.css({
                            left: jthis.position().left + opt.left - blur,
                            top: jthis.position().top + opt.top - blur
                        });
                    }
                    catch(e){}
                });

                // Increment z-index counter
                dropShadowZindex += 2;

            });  //end each

            return this.pushStack(jShadows);
        }
        
    };
    
    

    $.fn.redrawShadow = function()
    {
        // Remove existing shadows
        this.removeShadow();
        
        // Draw new shadows
        return this.each(function()
        {
            var shadowOptions = $.data(this, "shadowOptions");
            $(this).dropShadow(shadowOptions);
        });
    };


    $.fn.removeShadow = function()
    {
        return this.each(function()
        {
            // Resetting CSS - no need to do browser check
            $(this).css('box-shadow','');
            $(this).css('-moz-box-shadow','');
            $(this).css('-webkit-box-shadow','');
            
            var shadowId = $(this).shadowId();
            $("div#" + shadowId).remove();
        });
    };


    $.fn.shadowId = function()
    {
        return $.data(this[0], "shadowId");
    };


    $(function()  
    {
        // Suppress printing of shadows
        var noPrint = "<style type='text/css' media='print'>";
        noPrint += ".dropShadow{visibility:hidden;}</style>";
        $("head").append(noPrint);
    });

})(jQuery);

/*  Animoto jQuery Extensions
 *
 *  A selection of extensions implementing UI behaviors for Animoto.com.
 *  
 *  - toggleButton: Used to 'disable' a button, disabling click events, changing text and applying a specified CSS class.
 *
 *
 *  Chris Korhonen, last modified 17/6/09
 */

jQuery.fn.toggleButton = function(settings) {
  settings = jQuery.extend({
    text: "Please Wait...",
    className: "disabled",
    preventClick: true
  }, settings);

  var originalText = $(this).text();
  if(!originalText){
    originalText = $(this).attr('value');
  }
  
  var isDisabled = $(this).hasClass(settings.className);
  
  $(this).toggleClass(settings.className).text(settings.text).attr('value', settings.text);
  
  try{  
    if(!$(this).data('events').change){
      $(this).bind('change',function(e){
        if(!$(e.target).hasClass(settings.className)){
           $(e.target).text(originalText).attr('value',originalText);
        }
      });
    }
  } catch(e){ //if no object data exists 
  }
  
  if(!isDisabled && settings.preventClick){
    $(this).attr('disabled', 'disabled');
  } else {
    $(this).removeAttr('disabled');
  }
  
  $(this).trigger('change');
};

(function($){
    $.fn.quotes = function(options)
    {
        var opt = $.extend({
            time: 10000,
            eegg: false,
            rotations: 5
            }, options);
        
        var current = 0;
        var currentRotation = 0;
        var quotes = $(this);
        quotes.children(':not(:first-child)').hide(); 
        
        var quoteList = quotes.children(':not(.eegg)');
        var eeggList  = quotes.children('.eegg');
        
        
        setInterval(function(){
            $(quoteList[current]).fadeOut(function(){
                if(current+1 >= quoteList.length){
                    current = 0
                    currentRotation++;
                    if(currentRotation == opt.rotations && opt.eegg){
                        quoteList = eeggList;
                        AnimotoFramework.trackEvent('/homepage/eegg_quote');
                    }
                } else{
                    current++;
                }
                $(quoteList[current]).fadeIn();
            });
        },opt.time);
    };
})(jQuery);


/*
2 * jQuery Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery.easing.php
3 *
4 * Adds compatibility for applications that use the pre 1.2 easing names
5 *
6 * Copyright (c) 2007 George Smith
7 * Licensed under the MIT License:
8 * http://www.opensource.org/licenses/mit-license.php
9 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0.C(0.1,{7:2(x,t,b,c,d){3 0.1.D(x,t,b,c,d)},5:2(x,t,b,c,d){3 0.1.6(x,t,b,c,d)},h:2(x,t,b,c,d){3 0.1.B(x,t,b,c,d)},A:2(x,t,b,c,d){3 0.1.m(x,t,b,c,d)},y:2(x,t,b,c,d){3 0.1.w(x,t,b,c,d)},v:2(x,t,b,c,d){3 0.1.u(x,t,b,c,d)},s:2(x,t,b,c,d){3 0.1.r(x,t,b,c,d)},q:2(x,t,b,c,d){3 0.1.p(x,t,b,c,d)},o:2(x,t,b,c,d){3 0.1.n(x,t,b,c,d)},8:2(x,t,b,c,d){3 0.1.l(x,t,b,c,d)},g:2(x,t,b,c,d){3 0.1.j(x,t,b,c,d)},i:2(x,t,b,c,d){3 0.1.k(x,t,b,c,d)},z:2(x,t,b,c,d){3 0.1.f(x,t,b,c,d)},e:2(x,t,b,c,d){3 0.1.a(x,t,b,c,d)},9:2(x,t,b,c,d){3 0.1.4(x,t,b,c,d)}});',40,40,'jQuery|easing|function|return|easeInOutBack|easeOut|easeOutQuad|easeIn|elasin|backinout|easeOutBack||||backout|easeInBack|elasout|easeInOut|elasinout|easeOutElastic|easeInOutElastic|easeInElastic|easeInExpo|easeInOutBounce|bounceinout|easeOutBounce|bounceout|easeInBounce|bouncein||easeInOutExpo|expoinout|easeOutExpo||expoout|backin|expoin|easeInOutQuad|extend|easeInQuad'.split('|'),0,{}));


/*
* Version: 1.2.1
* Release: 2008-12-21
*/
(function($) {
  var pasteEventName = ($.browser.msie ? 'paste' : 'input') + ".mask";
  var iPhone = (window.orientation!=undefined); 

  $.mask = {
    //Predefined character definitions
    definitions: {
      '9': "[0-9]",
      'a': "[A-Za-z]",
      '*': "[A-Za-z0-9]"
    }
  };

  $.fn.extend({
    //Helper Function for Caret positioning
    caret: function(begin, end) {
      if (this.length == 0) return;
      if (typeof begin == 'number') {
        end = (typeof end == 'number') ? end : begin;
        return this.each(function() {
          if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(begin, end);
          } else if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', begin);
            range.select();
          }
        });
      } else {
        if (this[0].setSelectionRange) {
          begin = this[0].selectionStart;
          end = this[0].selectionEnd;
        } else if (document.selection && document.selection.createRange) {
          var range = document.selection.createRange();
          begin = 0 - range.duplicate().moveStart('character', -100000);
          end = begin + range.text.length;
        }
        return { begin: begin, end: end };
      }
    },
    unmask: function() { return this.trigger("unmask"); },
    mask: function(mask, settings) {
      if (!mask && this.length > 0) {
        var input = $(this[0]);
        var tests = input.data("tests");
        return $.map(input.data("buffer"), function(c, i) {
          return tests[i] ? c : null;
        }).join('');
      }
      settings = $.extend({
        placeholder: "_",
        completed: null
      }, settings);

      var defs = $.mask.definitions;
      var tests = [];
      var partialPosition = mask.length;
      var firstNonMaskPos = null;
      var len = mask.length;

      $.each(mask.split(""), function(i, c) {
        if (c == '?') {
          len--;
          partialPosition = i;
        } else {
          tests.push(defs[c] ? new RegExp(defs[c]) : null);
          if (tests[tests.length - 1] && firstNonMaskPos == null)
            firstNonMaskPos = tests.length - 1;
        }
      });

      return this.each(function() {
        var input = $(this);
        var buffer = $.map(mask.split(""), function(c, i) { if (c != '?') return defs[c] ? settings.placeholder : c });
        var ignore = false;       //Variable for ignoring control keys
        var focusText = input.val();

        input.data("buffer", buffer).data("tests", tests);

        function seekNext(pos) {
          while (++pos < len) {
            if (tests[pos])
              return pos;
          }
          return len;
        };

        function shiftL(pos) {
          while (!tests[pos] && pos >= 0) pos--;
          for (var i = pos; i < len; i++) {
            if (tests[i]) {
              buffer[i] = settings.placeholder.charAt(i);
              var j = seekNext(i);
              if (j < len && tests[i].test(buffer[j])) {
                buffer[i] = buffer[j];
              } else
                break;
            }
          }
          writeBuffer();
          input.caret(Math.max(firstNonMaskPos, pos));
        };

        function shiftR(pos) {
          for (var i = pos, c = settings.placeholder.charAt(pos); i < len; i++) {
            if (tests[i]) {
              var j = seekNext(i);
              var t = buffer[i];
              buffer[i] = c;
              if (j < len && tests[j].test(t)) 
                c = t;
              else
                break;
            }
          }
        };

        function keydownEvent(e) {
          var pos = $(this).caret();
          var k = e.keyCode;

          ignore = (k < 16 || (k > 16 && k < 32) || (k > 32 && k < 41));
          //delete selection before proceeding
          if ((pos.begin - pos.end) != 0 && (!ignore || k == 8 || k == 46)) 
            clearBuffer(pos.begin, pos.end);
          
          //backspace, delete, and escape get special treatment
          if (k == 8 || k == 46 || (iPhone && k==127)) {//backspace/delete
            shiftL(pos.begin + (k == 46 ? 0 : -1));
            return false;
          } else if (k == 27) {//escape
            clearBuffer(0, len);
            writeBuffer();
            $(this).caret(firstNonMaskPos);
            return false;
          } else if(k == 191 || k == 111 || k == 190 || k == 110 || k == 109){  // Forward Slash
            if(pos.end == 1 || pos.end == 4){
              buffer[pos.end] = buffer[pos.end - 1];
              buffer[pos.end -1 ] = '0'
              writeBuffer();
              $(this).caret(pos.end + 2 );
            }
          } else if(k == 9){ //tab out
            if(pos.end == 8){ // check for completed date
              if(buffer[8] == "y" && buffer[9] == "y"){
                buffer[pos.end ] = buffer[pos.end - 2];
                buffer[pos.end + 1] = buffer[pos.end - 1];
                buffer[pos.end -2] = "1";
                buffer[pos.end -1] = "9";
                writeBuffer();
              }
            }
          } else if(k == 38 || k == 40 ){ // up/down arrows
            var adder = (k == 38 ? 1 : -1);
          }
        };

        function keypressEvent(e) {
          if (ignore) {
            ignore = false;
            //Fixes Mac FF bug on backspace
            return (e.keyCode == 8) ? false : null;
          }
          e = e || window.event;
          var k = e.charCode || e.keyCode || e.which;
          var pos = $(this).caret();

          if (e.ctrlKey || e.altKey) {//Ignore
            return true;
          } else if ((k >= 41 && k <= 122) || k == 32 || k > 186) {//typeable characters
            var p = seekNext(pos.begin - 1);
            if (p < len) {
              var c = String.fromCharCode(k);
              if (tests[p].test(c)) {
                shiftR(p);
                buffer[p] = c;
                writeBuffer();
                var next = seekNext(p);
                $(this).caret(next);
                if (settings.completed && next == len)
                  settings.completed.call(input);
              }
            }
          }
          return false;
        };

        function clearBuffer(start, end) {
          for (var i = start; i < end && i < len; i++) {
            if (tests[i])
              buffer[i] = settings.placeholder.charAt(i);
          }
        };

        function writeBuffer() { return input.val(buffer.join('')).val(); };

        function checkVal(allow) {
          //try to place characters where they belong
          var test = input.val();         
          var lastMatch = -1;
          for (var i = 0,pos=0; i < len; i++) {
            if (tests[i]) {
              buffer[i] = settings.placeholder.charAt(i);
              while (pos++ < test.length) {
                var c = test.charAt(pos - 1);
                if (tests[i].test(c)) {
                  buffer[i] = c;
                  lastMatch = i;
                  break;
                }
              }
              if (pos > test.length)
                break;
            }
          }
          if (!allow && lastMatch + 1 < partialPosition) {
            input.val("");
            clearBuffer(0, len);
          } else if (allow || lastMatch + 1 >= partialPosition) {
            writeBuffer();
            if(!allow)input.val(input.val().substring(0, lastMatch + 1));
          }         
          return (partialPosition ? i : firstNonMaskPos);
        };

        input
          .one("unmask", function() {
            input
              .unbind(".mask")
              .removeData("buffer")
              .removeData("tests");
          })
          .bind("focus.mask", function() {
            focusText = input.val();
            var pos = checkVal();
            writeBuffer();
            setTimeout(function() {
              input.caret(pos);
            }, 0);
          })
          .bind("blur.mask", function() {
            checkVal();
            if (input.val() != focusText)
              input.change();
          })
          .bind("keydown.mask", keydownEvent)
          .bind("keypress.mask", keypressEvent)
          .bind(pasteEventName, function(){ 
            setTimeout(function(){input.caret(checkVal(true));},0);
          });

        checkVal(); //Perform initial check for existing values
      });
    }
  });
})(jQuery);


/*
 * jQuery UI 1.7
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
jQuery.ui||(function(c){var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);c.ui={version:"1.7",plugin:{add:function(k,l,n){var m=c.ui[k].prototype;for(var j in n){m.plugins[j]=m.plugins[j]||[];m.plugins[j].push([l,n[j]])}},call:function(j,l,k){var n=j.plugins[l];if(!n||!j.element[0].parentNode){return}for(var m=0;m<n.length;m++){if(j.options[n[m][0]]){n[m][1].apply(j.element,k)}}}},contains:function(k,j){return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j)},hasScroll:function(m,k){if(c(m).css("overflow")=="hidden"){return false}var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;if(m[j]>0){return true}m[j]=1;l=(m[j]>0);m[j]=0;return l},isOverAxis:function(k,j,l){return(k>j)&&(k<(j+l))},isOver:function(o,k,n,m,j,l){return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(d){var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;c.attr=function(k,j,l){var m=l!==undefined;return(j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)))};c.fn.removeAttr=function(j){return(a.test(j)?this.each(function(){this.removeAttributeNS(h,j.replace(a,""))}):e.call(this,j))}}c.fn.extend({remove:function(){c("*",this).add(this).each(function(){c(this).triggerHandler("remove")});return i.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var j;if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){j=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}else{j=this.parents().filter(function(){return(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!j.length?c(document):j}});c.extend(c.expr[":"],{data:function(l,k,j){return !!c.data(l,j[3])},focusable:function(k){var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");return(/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length},tabbable:function(k){var j=c.attr(k,"tabindex");return(isNaN(j)||j>=0)&&c(k).is(":focusable")}});function g(m,n,o,l){function k(q){var p=c[m][n][q]||[];return(typeof p=="string"?p.split(/,?\s+/):p)}var j=k("getter");if(l.length==1&&typeof l[0]=="string"){j=j.concat(k("getterSetter"))}return(c.inArray(o,j)!=-1)}c.widget=function(k,j){var l=k.split(".")[0];k=k.split(".")[1];c.fn[k]=function(p){var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);if(n&&p.substring(0,1)=="_"){return this}if(n&&g(l,k,p,o)){var m=c.data(this[0],k);return(m?m[p].apply(m,o):undefined)}return this.each(function(){var q=c.data(this,k);(!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());(q&&n&&c.isFunction(q[p])&&q[p].apply(q,o))})};c[l]=c[l]||{};c[l][k]=function(o,n){var m=this;this.namespace=l;this.widgetName=k;this.widgetEventPrefix=c[l][k].eventPrefix||k;this.widgetBaseClass=l+"-"+k;this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);this.element=c(o).bind("setData."+k,function(q,p,r){if(q.target==o){return m._setData(p,r)}}).bind("getData."+k,function(q,p){if(q.target==o){return m._getData(p)}}).bind("remove",function(){return m.destroy()})};c[l][k].prototype=c.extend({},c.widget.prototype,j);c[l][k].getterSetter="option"};c.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(l,m){var k=l,j=this;if(typeof l=="string"){if(m===undefined){return this._getData(l)}k={};k[l]=m}c.each(k,function(n,o){j._setData(n,o)})},_getData:function(j){return this.options[j]},_setData:function(j,k){this.options[j]=k;if(j=="disabled"){this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(l,m,n){var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);m=c.Event(m);m.type=j;if(m.originalEvent){for(var k=c.event.props.length,o;k;){o=c.event.props[--k];m[o]=m.originalEvent[o]}}this.element.trigger(m,n);return !(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented())}};c.widget.defaults={disabled:false};c.ui.mouse={_mouseInit:function(){var j=this;this.element.bind("mousedown."+this.widgetName,function(k){return j._mouseDown(k)}).bind("click."+this.widgetName,function(k){if(j._preventClickEvent){j._preventClickEvent=false;k.stopImmediatePropagation();return false}});if(c.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(l){l.originalEvent=l.originalEvent||{};if(l.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(l));this._mouseDownEvent=l;var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);if(!m||j||!this._mouseCapture(l)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){k.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){this._mouseStarted=(this._mouseStart(l)!==false);if(!this._mouseStarted){l.preventDefault();return true}}this._mouseMoveDelegate=function(n){return k._mouseMove(n)};this._mouseUpDelegate=function(n){return k._mouseUp(n)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(c.browser.safari||l.preventDefault());l.originalEvent.mouseHandled=true;return true},_mouseMove:function(j){if(c.browser.msie&&!j.button){return this._mouseUp(j)}if(this._mouseStarted){this._mouseDrag(j);return j.preventDefault()}if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);(this._mouseStarted?this._mouseDrag(j):this._mouseUp(j))}return !this._mouseStarted},_mouseUp:function(j){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(j.target==this._mouseDownEvent.target);this._mouseStop(j)}return false},_mouseDistanceMet:function(j){return(Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance)},_mouseDelayMet:function(j){return this.mouseDelayMet},_mouseStart:function(j){},_mouseDrag:function(j){},_mouseStop:function(j){},_mouseCapture:function(j){return true}};c.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);;/*
 * jQuery UI Effects 1.7
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||(function(d){d.effects={version:"1.7",save:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.data("ec.storage."+h[f],g[0].style[h[f]])}}},restore:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.css(h[f],g.data("ec.storage."+h[f]))}}},setMode:function(f,g){if(g=="toggle"){g=f.is(":hidden")?"show":"hide"}return g},getBaseline:function(g,h){var i,f;switch(g[0]){case"top":i=0;break;case"middle":i=0.5;break;case"bottom":i=1;break;default:i=g[0]/h.height}switch(g[1]){case"left":f=0;break;case"center":f=0.5;break;case"right":f=1;break;default:f=g[1]/h.width}return{x:f,y:i}},createWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent()}var g={width:f.outerWidth(true),height:f.outerHeight(true),"float":f.css("float")};f.wrap('<div class="ui-effects-wrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');var j=f.parent();if(f.css("position")=="static"){j.css({position:"relative"});f.css({position:"relative"})}else{var i=f.css("top");if(isNaN(parseInt(i,10))){i="auto"}var h=f.css("left");if(isNaN(parseInt(h,10))){h="auto"}j.css({position:f.css("position"),top:i,left:h,zIndex:f.css("z-index")}).show();f.css({position:"relative",top:0,left:0})}j.css(g);return j},removeWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent().replaceWith(f)}return f},setTransition:function(g,i,f,h){h=h||{};d.each(i,function(k,j){unit=g.cssUnit(j);if(unit[0]>0){h[j]=unit[0]*f+unit[1]}});return h},animateClass:function(h,i,k,j){var f=(typeof k=="function"?k:(j?j:null));var g=(typeof k=="string"?k:null);return this.each(function(){var q={};var o=d(this);var p=o.attr("style")||"";if(typeof p=="object"){p=p.cssText}if(h.toggle){o.hasClass(h.toggle)?h.remove=h.toggle:h.add=h.toggle}var l=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.addClass(h.add)}if(h.remove){o.removeClass(h.remove)}var m=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.removeClass(h.add)}if(h.remove){o.addClass(h.remove)}for(var r in m){if(typeof m[r]!="function"&&m[r]&&r.indexOf("Moz")==-1&&r.indexOf("length")==-1&&m[r]!=l[r]&&(r.match(/color/i)||(!r.match(/color/i)&&!isNaN(parseInt(m[r],10))))&&(l.position!="static"||(l.position=="static"&&!r.match(/left|top|bottom|right/)))){q[r]=m[r]}}o.animate(q,i,g,function(){if(typeof d(this).attr("style")=="object"){d(this).attr("style")["cssText"]="";d(this).attr("style")["cssText"]=p}else{d(this).attr("style",p)}if(h.add){d(this).addClass(h.add)}if(h.remove){d(this).removeClass(h.remove)}if(f){f.apply(this,arguments)}})})}};function c(g,f){var i=g[1]&&g[1].constructor==Object?g[1]:{};if(f){i.mode=f}var h=g[1]&&g[1].constructor!=Object?g[1]:(i.duration?i.duration:g[2]);h=d.fx.off?0:typeof h==="number"?h:d.fx.speeds[h]||d.fx.speeds._default;var j=i.callback||(d.isFunction(g[1])&&g[1])||(d.isFunction(g[2])&&g[2])||(d.isFunction(g[3])&&g[3]);return[g[0],i,h,j]}d.fn.extend({_show:d.fn.show,_hide:d.fn.hide,__toggle:d.fn.toggle,_addClass:d.fn.addClass,_removeClass:d.fn.removeClass,_toggleClass:d.fn.toggleClass,effect:function(g,f,h,i){return d.effects[g]?d.effects[g].call(this,{method:g,options:f||{},duration:h,callback:i}):null},show:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._show.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"show"))}},hide:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._hide.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"hide"))}},toggle:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))||(arguments[0].constructor==Function)){return this.__toggle.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"toggle"))}},addClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{add:g},f,i,h]):this._addClass(g)},removeClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{remove:g},f,i,h]):this._removeClass(g)},toggleClass:function(g,f,i,h){return((typeof f!=="boolean")&&f)?d.effects.animateClass.apply(this,[{toggle:g},f,i,h]):this._toggleClass(g,f)},morph:function(f,h,g,j,i){return d.effects.animateClass.apply(this,[{add:h,remove:f},g,j,i])},switchClass:function(){return this.morph.apply(this,arguments)},cssUnit:function(f){var g=this.css(f),h=[];d.each(["em","px","%","pt"],function(j,k){if(g.indexOf(k)>0){h=[parseFloat(g),k]}});return h}});d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(g,f){d.fx.step[f]=function(h){if(h.state==0){h.start=e(h.elem,f);h.end=b(h.end)}h.elem.style[f]="rgb("+[Math.max(Math.min(parseInt((h.pos*(h.end[0]-h.start[0]))+h.start[0],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[1]-h.start[1]))+h.start[1],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[2]-h.start[2]))+h.start[2],10),255),0)].join(",")+")"}});function b(g){var f;if(g&&g.constructor==Array&&g.length==3){return g}if(f=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(g)){return[parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10)]}if(f=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(g)){return[parseFloat(f[1])*2.55,parseFloat(f[2])*2.55,parseFloat(f[3])*2.55]}if(f=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(g)){return[parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16)]}if(f=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(g)){return[parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16),parseInt(f[3]+f[3],16)]}if(f=/rgba\(0, 0, 0, 0\)/.exec(g)){return a.transparent}return a[d.trim(g).toLowerCase()]}function e(h,f){var g;do{g=d.curCSS(h,f);if(g!=""&&g!="transparent"||d.nodeName(h,"body")){break}f="backgroundColor"}while(h=h.parentNode);return b(g)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};d.easing.jswing=d.easing.swing;d.extend(d.easing,{def:"easeOutQuad",swing:function(g,h,f,j,i){return d.easing[d.easing.def](g,h,f,j,i)},easeInQuad:function(g,h,f,j,i){return j*(h/=i)*h+f},easeOutQuad:function(g,h,f,j,i){return -j*(h/=i)*(h-2)+f},easeInOutQuad:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h+f}return -j/2*((--h)*(h-2)-1)+f},easeInCubic:function(g,h,f,j,i){return j*(h/=i)*h*h+f},easeOutCubic:function(g,h,f,j,i){return j*((h=h/i-1)*h*h+1)+f},easeInOutCubic:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h+f}return j/2*((h-=2)*h*h+2)+f},easeInQuart:function(g,h,f,j,i){return j*(h/=i)*h*h*h+f},easeOutQuart:function(g,h,f,j,i){return -j*((h=h/i-1)*h*h*h-1)+f},easeInOutQuart:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h+f}return -j/2*((h-=2)*h*h*h-2)+f},easeInQuint:function(g,h,f,j,i){return j*(h/=i)*h*h*h*h+f},easeOutQuint:function(g,h,f,j,i){return j*((h=h/i-1)*h*h*h*h+1)+f},easeInOutQuint:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h*h+f}return j/2*((h-=2)*h*h*h*h+2)+f},easeInSine:function(g,h,f,j,i){return -j*Math.cos(h/i*(Math.PI/2))+j+f},easeOutSine:function(g,h,f,j,i){return j*Math.sin(h/i*(Math.PI/2))+f},easeInOutSine:function(g,h,f,j,i){return -j/2*(Math.cos(Math.PI*h/i)-1)+f},easeInExpo:function(g,h,f,j,i){return(h==0)?f:j*Math.pow(2,10*(h/i-1))+f},easeOutExpo:function(g,h,f,j,i){return(h==i)?f+j:j*(-Math.pow(2,-10*h/i)+1)+f},easeInOutExpo:function(g,h,f,j,i){if(h==0){return f}if(h==i){return f+j}if((h/=i/2)<1){return j/2*Math.pow(2,10*(h-1))+f}return j/2*(-Math.pow(2,-10*--h)+2)+f},easeInCirc:function(g,h,f,j,i){return -j*(Math.sqrt(1-(h/=i)*h)-1)+f},easeOutCirc:function(g,h,f,j,i){return j*Math.sqrt(1-(h=h/i-1)*h)+f},easeInOutCirc:function(g,h,f,j,i){if((h/=i/2)<1){return -j/2*(Math.sqrt(1-h*h)-1)+f}return j/2*(Math.sqrt(1-(h-=2)*h)+1)+f},easeInElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return -(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f},easeOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return h*Math.pow(2,-10*i)*Math.sin((i*l-j)*(2*Math.PI)/k)+m+f},easeInOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l/2)==2){return f+m}if(!k){k=l*(0.3*1.5)}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}if(i<1){return -0.5*(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f}return h*Math.pow(2,-10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k)*0.5+m+f},easeInBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*(h/=j)*h*((i+1)*h-i)+f},easeOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*((h=h/j-1)*h*((i+1)*h+i)+1)+f},easeInOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}if((h/=j/2)<1){return k/2*(h*h*(((i*=(1.525))+1)*h-i))+f}return k/2*((h-=2)*h*(((i*=(1.525))+1)*h+i)+2)+f},easeInBounce:function(g,h,f,j,i){return j-d.easing.easeOutBounce(g,i-h,0,j,i)+f},easeOutBounce:function(g,h,f,j,i){if((h/=i)<(1/2.75)){return j*(7.5625*h*h)+f}else{if(h<(2/2.75)){return j*(7.5625*(h-=(1.5/2.75))*h+0.75)+f}else{if(h<(2.5/2.75)){return j*(7.5625*(h-=(2.25/2.75))*h+0.9375)+f}else{return j*(7.5625*(h-=(2.625/2.75))*h+0.984375)+f}}}},easeInOutBounce:function(g,h,f,j,i){if(h<i/2){return d.easing.easeInBounce(g,h*2,0,j,i)*0.5+f}return d.easing.easeOutBounce(g,h*2-i,0,j,i)*0.5+j*0.5+f}})})(jQuery);;/*
 * jQuery UI Effects Blind 1.7
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.blind=function(b){return this.queue(function(){var d=a(this),c=["position","top","left"];var h=a.effects.setMode(d,b.options.mode||"hide");var g=b.options.direction||"vertical";a.effects.save(d,c);d.show();var j=a.effects.createWrapper(d).css({overflow:"hidden"});var e=(g=="vertical")?"height":"width";var i=(g=="vertical")?j.height():j.width();if(h=="show"){j.css(e,0)}var f={};f[e]=h=="show"?i:0;j.animate(f,b.duration,b.options.easing,function(){if(h=="hide"){d.hide()}a.effects.restore(d,c);a.effects.removeWrapper(d);if(b.callback){b.callback.apply(d[0],arguments)}d.dequeue()})})}})(jQuery);;/*
 * jQuery UI Effects Bounce 1.7
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.bounce=function(b){return this.queue(function(){var e=a(this),l=["position","top","left"];var k=a.effects.setMode(e,b.options.mode||"effect");var n=b.options.direction||"up";var c=b.options.distance||20;var d=b.options.times||5;var g=b.duration||250;if(/show|hide/.test(k)){l.push("opacity")}a.effects.save(e,l);e.show();a.effects.createWrapper(e);var f=(n=="up"||n=="down")?"top":"left";var p=(n=="up"||n=="left")?"pos":"neg";var c=b.options.distance||(f=="top"?e.outerHeight({margin:true})/3:e.outerWidth({margin:true})/3);if(k=="show"){e.css("opacity",0).css(f,p=="pos"?-c:c)}if(k=="hide"){c=c/(d*2)}if(k!="hide"){d--}if(k=="show"){var h={opacity:1};h[f]=(p=="pos"?"+=":"-=")+c;e.animate(h,g/2,b.options.easing);c=c/2;d--}for(var j=0;j<d;j++){var o={},m={};o[f]=(p=="pos"?"-=":"+=")+c;m[f]=(p=="pos"?"+=":"-=")+c;e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing);c=(k=="hide")?c*2:c/2}if(k=="hide"){var h={opacity:0};h[f]=(p=="pos"?"-=":"+=")+c;e.animate(h,g/2,b.options.easing,function(){e.hide();a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}})}else{var o={},m={};o[f]=(p=="pos"?"-=":"+=")+c;m[f]=(p=="pos"?"+=":"-=")+c;e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing,function(){a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}})}e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Clip 1.7
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.clip=function(b){return this.queue(function(){var f=a(this),j=["position","top","left","height","width"];var i=a.effects.setMode(f,b.options.mode||"hide");var k=b.options.direction||"vertical";a.effects.save(f,j);f.show();var c=a.effects.createWrapper(f).css({overflow:"hidden"});var e=f[0].tagName=="IMG"?c:f;var g={size:(k=="vertical")?"height":"width",position:(k=="vertical")?"top":"left"};var d=(k=="vertical")?e.height():e.width();if(i=="show"){e.css(g.size,0);e.css(g.position,d/2)}var h={};h[g.size]=i=="show"?d:0;h[g.position]=i=="show"?0:d/2;e.animate(h,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){f.hide()}a.effects.restore(f,j);a.effects.removeWrapper(f);if(b.callback){b.callback.apply(f[0],arguments)}f.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Drop 1.7
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.drop=function(b){return this.queue(function(){var e=a(this),d=["position","top","left","opacity"];var i=a.effects.setMode(e,b.options.mode||"hide");var h=b.options.direction||"left";a.effects.save(e,d);e.show();a.effects.createWrapper(e);var f=(h=="up"||h=="down")?"top":"left";var c=(h=="up"||h=="left")?"pos":"neg";var j=b.options.distance||(f=="top"?e.outerHeight({margin:true})/2:e.outerWidth({margin:true})/2);if(i=="show"){e.css("opacity",0).css(f,c=="pos"?-j:j)}var g={opacity:i=="show"?1:0};g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){e.hide()}a.effects.restore(e,d);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Highlight 1.7
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.highlight=function(b){return this.queue(function(){var e=a(this),d=["backgroundImage","backgroundColor","opacity"];var h=a.effects.setMode(e,b.options.mode||"show");var c=b.options.color||"#ffff99";var g=e.css("backgroundColor");a.effects.save(e,d);e.show();e.css({backgroundImage:"none",backgroundColor:c});var f={backgroundColor:g};if(h=="hide"){f.opacity=0}e.animate(f,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(h=="hide"){e.hide()}a.effects.restore(e,d);if(h=="show"&&a.browser.msie){this.style.removeAttribute("filter")}if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Pulsate 1.7
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.pulsate=function(b){return this.queue(function(){var d=a(this);var g=a.effects.setMode(d,b.options.mode||"show");var f=b.options.times||5;var e=b.duration?b.duration/2:a.fx.speeds._default/2;if(g=="hide"){f--}if(d.is(":hidden")){d.css("opacity",0);d.show();d.animate({opacity:1},e,b.options.easing);f=f-2}for(var c=0;c<f;c++){d.animate({opacity:0},e,b.options.easing).animate({opacity:1},e,b.options.easing)}if(g=="hide"){d.animate({opacity:0},e,b.options.easing,function(){d.hide();if(b.callback){b.callback.apply(this,arguments)}})}else{d.animate({opacity:0},e,b.options.easing).animate({opacity:1},e,b.options.easing,function(){if(b.callback){b.callback.apply(this,arguments)}})}d.queue("fx",function(){d.dequeue()});d.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Shake 1.7
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.shake=function(b){return this.queue(function(){var e=a(this),l=["position","top","left"];var k=a.effects.setMode(e,b.options.mode||"effect");var n=b.options.direction||"left";var c=b.options.distance||20;var d=b.options.times||3;var g=b.duration||b.options.duration||140;a.effects.save(e,l);e.show();a.effects.createWrapper(e);var f=(n=="up"||n=="down")?"top":"left";var p=(n=="up"||n=="left")?"pos":"neg";var h={},o={},m={};h[f]=(p=="pos"?"-=":"+=")+c;o[f]=(p=="pos"?"+=":"-=")+c*2;m[f]=(p=="pos"?"-=":"+=")+c*2;e.animate(h,g,b.options.easing);for(var j=1;j<d;j++){e.animate(o,g,b.options.easing).animate(m,g,b.options.easing)}e.animate(o,g,b.options.easing).animate(h,g/2,b.options.easing,function(){a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}});e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Slide 1.7
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.slide=function(b){return this.queue(function(){var e=a(this),d=["position","top","left"];var i=a.effects.setMode(e,b.options.mode||"show");var h=b.options.direction||"left";a.effects.save(e,d);e.show();a.effects.createWrapper(e).css({overflow:"hidden"});var f=(h=="up"||h=="down")?"top":"left";var c=(h=="up"||h=="left")?"pos":"neg";var j=b.options.distance||(f=="top"?e.outerHeight({margin:true}):e.outerWidth({margin:true}));if(i=="show"){e.css(f,c=="pos"?-j:j)}var g={};g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){e.hide()}a.effects.restore(e,d);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;

/*
 * jQuery UI Resizable 1.7.1
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	ui.core.js
 */
(function($) {

$.widget("ui.resizable", $.extend({}, $.ui.mouse, {

	_init: function() {

		var self = this, o = this.options;
		this.element.addClass("ui-resizable");

		$.extend(this, {
			_aspectRatio: !!(o.aspectRatio),
			aspectRatio: o.aspectRatio,
			originalElement: this.element,
			_proportionallyResizeElements: [],
			_helper: o.helper || o.ghost || o.animate ? o.helper || 'ui-resizable-helper' : null
		});

		//Wrap the element if it cannot hold child nodes
		if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {

			//Opera fix for relative positioning
			if (/relative/.test(this.element.css('position')) && $.browser.opera)
				this.element.css({ position: 'relative', top: 'auto', left: 'auto' });

			//Create a wrapper element and set the wrapper to the new current internal element
			this.element.wrap(
				$('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
					position: this.element.css('position'),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css('top'),
					left: this.element.css('left')
				})
			);

			//Overwrite the original this.element
			this.element = this.element.parent().data(
				"resizable", this.element.data('resizable')
			);

			this.elementIsWrapper = true;

			//Move margins to the wrapper
			this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") });
			this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0});

			//Prevent Safari textarea resize
			this.originalResizeStyle = this.originalElement.css('resize');
			this.originalElement.css('resize', 'none');

			//Push the actual element to our proportionallyResize internal array
			this._proportionallyResizeElements.push(this.originalElement.css({ position: 'static', zoom: 1, display: 'block' }));

			// avoid IE jump (hard set the margin)
			this.originalElement.css({ margin: this.originalElement.css('margin') });

			// fix handlers offset
			this._proportionallyResize();

		}

		this.handles = o.handles || (!$('.ui-resizable-handle', this.element).length ? "e,s,se" : { n: '.ui-resizable-n', e: '.ui-resizable-e', s: '.ui-resizable-s', w: '.ui-resizable-w', se: '.ui-resizable-se', sw: '.ui-resizable-sw', ne: '.ui-resizable-ne', nw: '.ui-resizable-nw' });
		if(this.handles.constructor == String) {

			if(this.handles == 'all') this.handles = 'n,e,s,w,se,sw,ne,nw';
			var n = this.handles.split(","); this.handles = {};

			for(var i = 0; i < n.length; i++) {

				var handle = $.trim(n[i]), hname = 'ui-resizable-'+handle;
				var axis = $('<div class="ui-resizable-handle ' + hname + '"></div>');

				// increase zIndex of sw, se, ne, nw axis
				//TODO : this modifies original option
				if(/sw|se|ne|nw/.test(handle)) axis.css({ zIndex: ++o.zIndex });

				//TODO : What's going on here?
				if ('se' == handle) {
					axis.addClass('ui-icon ui-icon-gripsmall-diagonal-se');
				};

				//Insert into internal handles object and append to element
				this.handles[handle] = '.ui-resizable-'+handle;
				this.element.append(axis);
			}

		}

		this._renderAxis = function(target) {

			target = target || this.element;

			for(var i in this.handles) {

				if(this.handles[i].constructor == String)
					this.handles[i] = $(this.handles[i], this.element).show();

				//Apply pad to wrapper element, needed to fix axis position (textarea, inputs, scrolls)
				if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {

					var axis = $(this.handles[i], this.element), padWrapper = 0;

					//Checking the correct pad and border
					padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth();

					//The padding type i have to apply...
					var padPos = [ 'padding',
						/ne|nw|n/.test(i) ? 'Top' :
						/se|sw|s/.test(i) ? 'Bottom' :
						/^e$/.test(i) ? 'Right' : 'Left' ].join("");

					target.css(padPos, padWrapper);

					this._proportionallyResize();

				}

				//TODO: What's that good for? There's not anything to be executed left
				if(!$(this.handles[i]).length)
					continue;

			}
		};

		//TODO: make renderAxis a prototype function
		this._renderAxis(this.element);

		this._handles = $('.ui-resizable-handle', this.element)
			.disableSelection();

		//Matching axis name
		this._handles.mouseover(function() {
			if (!self.resizing) {
				if (this.className)
					var axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
				//Axis, default = se
				self.axis = axis && axis[1] ? axis[1] : 'se';
			}
		});

		//If we want to auto hide the elements
		if (o.autoHide) {
			this._handles.hide();
			$(this.element)
				.addClass("ui-resizable-autohide")
				.hover(function() {
					$(this).removeClass("ui-resizable-autohide");
					self._handles.show();
				},
				function(){
					if (!self.resizing) {
						$(this).addClass("ui-resizable-autohide");
						self._handles.hide();
					}
				});
		}

		//Initialize the mouse interaction
		this._mouseInit();

	},

	destroy: function() {

		this._mouseDestroy();

		var _destroy = function(exp) {
			$(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing")
				.removeData("resizable").unbind(".resizable").find('.ui-resizable-handle').remove();
		};

		//TODO: Unwrap at same DOM position
		if (this.elementIsWrapper) {
			_destroy(this.element);
			var wrapper = this.element;
			wrapper.parent().append(
				this.originalElement.css({
					position: wrapper.css('position'),
					width: wrapper.outerWidth(),
					height: wrapper.outerHeight(),
					top: wrapper.css('top'),
					left: wrapper.css('left')
				})
			).end().remove();
		}

		this.originalElement.css('resize', this.originalResizeStyle);
		_destroy(this.originalElement);

	},

	_mouseCapture: function(event) {

		var handle = false;
		for(var i in this.handles) {
			if($(this.handles[i])[0] == event.target) handle = true;
		}

		return this.options.disabled || !!handle;

	},

	_mouseStart: function(event) {

		var o = this.options, iniPos = this.element.position(), el = this.element;

		this.resizing = true;
		this.documentScroll = { top: $(document).scrollTop(), left: $(document).scrollLeft() };

		// bugfix for http://dev.jquery.com/ticket/1749
		if (el.is('.ui-draggable') || (/absolute/).test(el.css('position'))) {
			el.css({ position: 'absolute', top: iniPos.top, left: iniPos.left });
		}

		//Opera fixing relative position
		if ($.browser.opera && (/relative/).test(el.css('position')))
			el.css({ position: 'relative', top: 'auto', left: 'auto' });

		this._renderProxy();

		var curleft = num(this.helper.css('left')), curtop = num(this.helper.css('top'));

		if (o.containment) {
			curleft += $(o.containment).scrollLeft() || 0;
			curtop += $(o.containment).scrollTop() || 0;
		}

		//Store needed variables
		this.offset = this.helper.offset();
		this.position = { left: curleft, top: curtop };
		this.size = this._helper ? { width: el.outerWidth(), height: el.outerHeight() } : { width: el.width(), height: el.height() };
		this.originalSize = this._helper ? { width: el.outerWidth(), height: el.outerHeight() } : { width: el.width(), height: el.height() };
		this.originalPosition = { left: curleft, top: curtop };
		this.sizeDiff = { width: el.outerWidth() - el.width(), height: el.outerHeight() - el.height() };
		this.originalMousePosition = { left: event.pageX, top: event.pageY };

		//Aspect Ratio
		this.aspectRatio = (typeof o.aspectRatio == 'number') ? o.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);

	    var cursor = $('.ui-resizable-' + this.axis).css('cursor');
	    $('body').css('cursor', cursor == 'auto' ? this.axis + '-resize' : cursor);

		el.addClass("ui-resizable-resizing");
		this._propagate("start", event);
		return true;
	},

	_mouseDrag: function(event) {

		//Increase performance, avoid regex
		var el = this.helper, o = this.options, props = {},
			self = this, smp = this.originalMousePosition, a = this.axis;

		var dx = (event.pageX-smp.left)||0, dy = (event.pageY-smp.top)||0;
		var trigger = this._change[a];
		if (!trigger) return false;

		// Calculate the attrs that will be change
		var data = trigger.apply(this, [event, dx, dy]), ie6 = $.browser.msie && $.browser.version < 7, csdif = this.sizeDiff;

		if (this._aspectRatio || event.shiftKey)
			data = this._updateRatio(data, event);

		data = this._respectSize(data, event);

		// plugins callbacks need to be called first
		this._propagate("resize", event);

		el.css({
			top: this.position.top + "px", left: this.position.left + "px",
			width: this.size.width + "px", height: this.size.height + "px"
		});

		if (!this._helper && this._proportionallyResizeElements.length)
			this._proportionallyResize();

		this._updateCache(data);

		// calling the user callback at the end
		this._trigger('resize', event, this.ui());

		return false;
	},

	_mouseStop: function(event) {

		this.resizing = false;
		var o = this.options, self = this;

		if(this._helper) {
			var pr = this._proportionallyResizeElements, ista = pr.length && (/textarea/i).test(pr[0].nodeName),
						soffseth = ista && $.ui.hasScroll(pr[0], 'left') /* TODO - jump height */ ? 0 : self.sizeDiff.height,
							soffsetw = ista ? 0 : self.sizeDiff.width;

			var s = { width: (self.size.width - soffsetw), height: (self.size.height - soffseth) },
				left = (parseInt(self.element.css('left'), 10) + (self.position.left - self.originalPosition.left)) || null,
				top = (parseInt(self.element.css('top'), 10) + (self.position.top - self.originalPosition.top)) || null;

			if (!o.animate)
				this.element.css($.extend(s, { top: top, left: left }));

			self.helper.height(self.size.height);
			self.helper.width(self.size.width);

			if (this._helper && !o.animate) this._proportionallyResize();
		}

		$('body').css('cursor', 'auto');

		this.element.removeClass("ui-resizable-resizing");

		this._propagate("stop", event);

		if (this._helper) this.helper.remove();
		return false;

	},

	_updateCache: function(data) {
		var o = this.options;
		this.offset = this.helper.offset();
		if (isNumber(data.left)) this.position.left = data.left;
		if (isNumber(data.top)) this.position.top = data.top;
		if (isNumber(data.height)) this.size.height = data.height;
		if (isNumber(data.width)) this.size.width = data.width;
	},

	_updateRatio: function(data, event) {

		var o = this.options, cpos = this.position, csize = this.size, a = this.axis;

		if (data.height) data.width = (csize.height * this.aspectRatio);
		else if (data.width) data.height = (csize.width / this.aspectRatio);

		if (a == 'sw') {
			data.left = cpos.left + (csize.width - data.width);
			data.top = null;
		}
		if (a == 'nw') {
			data.top = cpos.top + (csize.height - data.height);
			data.left = cpos.left + (csize.width - data.width);
		}

		return data;
	},

	_respectSize: function(data, event) {

		var el = this.helper, o = this.options, pRatio = this._aspectRatio || event.shiftKey, a = this.axis,
				ismaxw = isNumber(data.width) && o.maxWidth && (o.maxWidth < data.width), ismaxh = isNumber(data.height) && o.maxHeight && (o.maxHeight < data.height),
					isminw = isNumber(data.width) && o.minWidth && (o.minWidth > data.width), isminh = isNumber(data.height) && o.minHeight && (o.minHeight > data.height);

		if (isminw) data.width = o.minWidth;
		if (isminh) data.height = o.minHeight;
		if (ismaxw) data.width = o.maxWidth;
		if (ismaxh) data.height = o.maxHeight;

		var dw = this.originalPosition.left + this.originalSize.width, dh = this.position.top + this.size.height;
		var cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);

		if (isminw && cw) data.left = dw - o.minWidth;
		if (ismaxw && cw) data.left = dw - o.maxWidth;
		if (isminh && ch)	data.top = dh - o.minHeight;
		if (ismaxh && ch)	data.top = dh - o.maxHeight;

		// fixing jump error on top/left - bug #2330
		var isNotwh = !data.width && !data.height;
		if (isNotwh && !data.left && data.top) data.top = null;
		else if (isNotwh && !data.top && data.left) data.left = null;

		return data;
	},

	_proportionallyResize: function() {

		var o = this.options;
		if (!this._proportionallyResizeElements.length) return;
		var element = this.helper || this.element;

		for (var i=0; i < this._proportionallyResizeElements.length; i++) {

			var prel = this._proportionallyResizeElements[i];

			if (!this.borderDif) {
				var b = [prel.css('borderTopWidth'), prel.css('borderRightWidth'), prel.css('borderBottomWidth'), prel.css('borderLeftWidth')],
					p = [prel.css('paddingTop'), prel.css('paddingRight'), prel.css('paddingBottom'), prel.css('paddingLeft')];

				this.borderDif = $.map(b, function(v, i) {
					var border = parseInt(v,10)||0, padding = parseInt(p[i],10)||0;
					return border + padding;
				});
			}

			if ($.browser.msie && !(!($(element).is(':hidden') || $(element).parents(':hidden').length)))
				continue;

			prel.css({
				height: (element.height() - this.borderDif[0] - this.borderDif[2]) || 0,
				width: (element.width() - this.borderDif[1] - this.borderDif[3]) || 0
			});

		};

	},

	_renderProxy: function() {

		var el = this.element, o = this.options;
		this.elementOffset = el.offset();

		if(this._helper) {

			this.helper = this.helper || $('<div style="overflow:hidden;"></div>');

			// fix ie6 offset TODO: This seems broken
			var ie6 = $.browser.msie && $.browser.version < 7, ie6offset = (ie6 ? 1 : 0),
			pxyoffset = ( ie6 ? 2 : -1 );

			this.helper.addClass(this._helper).css({
				width: this.element.outerWidth() + pxyoffset,
				height: this.element.outerHeight() + pxyoffset,
				position: 'absolute',
				left: this.elementOffset.left - ie6offset +'px',
				top: this.elementOffset.top - ie6offset +'px',
				zIndex: ++o.zIndex //TODO: Don't modify option
			});

			this.helper
				.appendTo("body")
				.disableSelection();

		} else {
			this.helper = this.element;
		}

	},

	_change: {
		e: function(event, dx, dy) {
			return { width: this.originalSize.width + dx };
		},
		w: function(event, dx, dy) {
			var o = this.options, cs = this.originalSize, sp = this.originalPosition;
			return { left: sp.left + dx, width: cs.width - dx };
		},
		n: function(event, dx, dy) {
			var o = this.options, cs = this.originalSize, sp = this.originalPosition;
			return { top: sp.top + dy, height: cs.height - dy };
		},
		s: function(event, dx, dy) {
			return { height: this.originalSize.height + dy };
		},
		se: function(event, dx, dy) {
			return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
		},
		sw: function(event, dx, dy) {
			return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
		},
		ne: function(event, dx, dy) {
			return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
		},
		nw: function(event, dx, dy) {
			return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
		}
	},

	_propagate: function(n, event) {
		$.ui.plugin.call(this, n, [event, this.ui()]);
		(n != "resize" && this._trigger(n, event, this.ui()));
	},

	plugins: {},

	ui: function() {
		return {
			originalElement: this.originalElement,
			element: this.element,
			helper: this.helper,
			position: this.position,
			size: this.size,
			originalSize: this.originalSize,
			originalPosition: this.originalPosition
		};
	}

}));

$.extend($.ui.resizable, {
	version: "1.7.1",
	eventPrefix: "resize",
	defaults: {
		alsoResize: false,
		animate: false,
		animateDuration: "slow",
		animateEasing: "swing",
		aspectRatio: false,
		autoHide: false,
		cancel: ":input,option",
		containment: false,
		delay: 0,
		distance: 1,
		ghost: false,
		grid: false,
		handles: "e,s,se",
		helper: false,
		maxHeight: null,
		maxWidth: null,
		minHeight: 10,
		minWidth: 10,
		zIndex: 1000
	}
});

/*
 * Resizable Extensions
 */

$.ui.plugin.add("resizable", "alsoResize", {

	start: function(event, ui) {

		var self = $(this).data("resizable"), o = self.options;

		_store = function(exp) {
			$(exp).each(function() {
				$(this).data("resizable-alsoresize", {
					width: parseInt($(this).width(), 10), height: parseInt($(this).height(), 10),
					left: parseInt($(this).css('left'), 10), top: parseInt($(this).css('top'), 10)
				});
			});
		};

		if (typeof(o.alsoResize) == 'object' && !o.alsoResize.parentNode) {
			if (o.alsoResize.length) { o.alsoResize = o.alsoResize[0];	_store(o.alsoResize); }
			else { $.each(o.alsoResize, function(exp, c) { _store(exp); }); }
		}else{
			_store(o.alsoResize);
		}
	},

	resize: function(event, ui){
		var self = $(this).data("resizable"), o = self.options, os = self.originalSize, op = self.originalPosition;

		var delta = {
			height: (self.size.height - os.height) || 0, width: (self.size.width - os.width) || 0,
			top: (self.position.top - op.top) || 0, left: (self.position.left - op.left) || 0
		},

		_alsoResize = function(exp, c) {
			$(exp).each(function() {
				var el = $(this), start = $(this).data("resizable-alsoresize"), style = {}, css = c && c.length ? c : ['width', 'height', 'top', 'left'];

				$.each(css || ['width', 'height', 'top', 'left'], function(i, prop) {
					var sum = (start[prop]||0) + (delta[prop]||0);
					if (sum && sum >= 0)
						style[prop] = sum || null;
				});

				//Opera fixing relative position
				if (/relative/.test(el.css('position')) && $.browser.opera) {
					self._revertToRelativePosition = true;
					el.css({ position: 'absolute', top: 'auto', left: 'auto' });
				}

				el.css(style);
			});
		};

		if (typeof(o.alsoResize) == 'object' && !o.alsoResize.nodeType) {
			$.each(o.alsoResize, function(exp, c) { _alsoResize(exp, c); });
		}else{
			_alsoResize(o.alsoResize);
		}
	},

	stop: function(event, ui){
		var self = $(this).data("resizable");

		//Opera fixing relative position
		if (self._revertToRelativePosition && $.browser.opera) {
			self._revertToRelativePosition = false;
			el.css({ position: 'relative' });
		}

		$(this).removeData("resizable-alsoresize-start");
	}
});

$.ui.plugin.add("resizable", "animate", {

	stop: function(event, ui) {
		var self = $(this).data("resizable"), o = self.options;

		var pr = self._proportionallyResizeElements, ista = pr.length && (/textarea/i).test(pr[0].nodeName),
					soffseth = ista && $.ui.hasScroll(pr[0], 'left') /* TODO - jump height */ ? 0 : self.sizeDiff.height,
						soffsetw = ista ? 0 : self.sizeDiff.width;

		var style = { width: (self.size.width - soffsetw), height: (self.size.height - soffseth) },
					left = (parseInt(self.element.css('left'), 10) + (self.position.left - self.originalPosition.left)) || null,
						top = (parseInt(self.element.css('top'), 10) + (self.position.top - self.originalPosition.top)) || null;

		self.element.animate(
			$.extend(style, top && left ? { top: top, left: left } : {}), {
				duration: o.animateDuration,
				easing: o.animateEasing,
				step: function() {

					var data = {
						width: parseInt(self.element.css('width'), 10),
						height: parseInt(self.element.css('height'), 10),
						top: parseInt(self.element.css('top'), 10),
						left: parseInt(self.element.css('left'), 10)
					};

					if (pr && pr.length) $(pr[0]).css({ width: data.width, height: data.height });

					// propagating resize, and updating values for each animation step
					self._updateCache(data);
					self._propagate("resize", event);

				}
			}
		);
	}

});

$.ui.plugin.add("resizable", "containment", {

	start: function(event, ui) {
		var self = $(this).data("resizable"), o = self.options, el = self.element;
		var oc = o.containment,	ce = (oc instanceof $) ? oc.get(0) : (/parent/.test(oc)) ? el.parent().get(0) : oc;
		if (!ce) return;

		self.containerElement = $(ce);

		if (/document/.test(oc) || oc == document) {
			self.containerOffset = { left: 0, top: 0 };
			self.containerPosition = { left: 0, top: 0 };

			self.parentData = {
				element: $(document), left: 0, top: 0,
				width: $(document).width(), height: $(document).height() || document.body.parentNode.scrollHeight
			};
		}

		// i'm a node, so compute top, left, right, bottom
		else {
			var element = $(ce), p = [];
			$([ "Top", "Right", "Left", "Bottom" ]).each(function(i, name) { p[i] = num(element.css("padding" + name)); });

			self.containerOffset = element.offset();
			self.containerPosition = element.position();
			self.containerSize = { height: (element.innerHeight() - p[3]), width: (element.innerWidth() - p[1]) };

			var co = self.containerOffset, ch = self.containerSize.height,	cw = self.containerSize.width,
						width = ($.ui.hasScroll(ce, "left") ? ce.scrollWidth : cw ), height = ($.ui.hasScroll(ce) ? ce.scrollHeight : ch);

			self.parentData = {
				element: ce, left: co.left, top: co.top, width: width, height: height
			};
		}
	},

	resize: function(event, ui) {
		var self = $(this).data("resizable"), o = self.options,
				ps = self.containerSize, co = self.containerOffset, cs = self.size, cp = self.position,
				pRatio = self._aspectRatio || event.shiftKey, cop = { top:0, left:0 }, ce = self.containerElement;

		if (ce[0] != document && (/static/).test(ce.css('position'))) cop = co;

		if (cp.left < (self._helper ? co.left : 0)) {
			self.size.width = self.size.width + (self._helper ? (self.position.left - co.left) : (self.position.left - cop.left));
			if (pRatio) self.size.height = self.size.width / o.aspectRatio;
			self.position.left = o.helper ? co.left : 0;
		}

		if (cp.top < (self._helper ? co.top : 0)) {
			self.size.height = self.size.height + (self._helper ? (self.position.top - co.top) : self.position.top);
			if (pRatio) self.size.width = self.size.height * o.aspectRatio;
			self.position.top = self._helper ? co.top : 0;
		}

		self.offset.left = self.parentData.left+self.position.left;
		self.offset.top = self.parentData.top+self.position.top;

		var woset = Math.abs( (self._helper ? self.offset.left - cop.left : (self.offset.left - cop.left)) + self.sizeDiff.width ),
					hoset = Math.abs( (self._helper ? self.offset.top - cop.top : (self.offset.top - co.top)) + self.sizeDiff.height );

		var isParent = self.containerElement.get(0) == self.element.parent().get(0),
		    isOffsetRelative = /relative|absolute/.test(self.containerElement.css('position'));

		if(isParent && isOffsetRelative) woset -= self.parentData.left;

		if (woset + self.size.width >= self.parentData.width) {
			self.size.width = self.parentData.width - woset;
			if (pRatio) self.size.height = self.size.width / self.aspectRatio;
		}

		if (hoset + self.size.height >= self.parentData.height) {
			self.size.height = self.parentData.height - hoset;
			if (pRatio) self.size.width = self.size.height * self.aspectRatio;
		}
	},

	stop: function(event, ui){
		var self = $(this).data("resizable"), o = self.options, cp = self.position,
				co = self.containerOffset, cop = self.containerPosition, ce = self.containerElement;

		var helper = $(self.helper), ho = helper.offset(), w = helper.outerWidth() - self.sizeDiff.width, h = helper.outerHeight() - self.sizeDiff.height;

		if (self._helper && !o.animate && (/relative/).test(ce.css('position')))
			$(this).css({ left: ho.left - cop.left - co.left, width: w, height: h });

		if (self._helper && !o.animate && (/static/).test(ce.css('position')))
			$(this).css({ left: ho.left - cop.left - co.left, width: w, height: h });

	}
});

$.ui.plugin.add("resizable", "ghost", {

	start: function(event, ui) {

		var self = $(this).data("resizable"), o = self.options, cs = self.size;

		self.ghost = self.originalElement.clone();
		self.ghost
			.css({ opacity: .25, display: 'block', position: 'relative', height: cs.height, width: cs.width, margin: 0, left: 0, top: 0 })
			.addClass('ui-resizable-ghost')
			.addClass(typeof o.ghost == 'string' ? o.ghost : '');

		self.ghost.appendTo(self.helper);

	},

	resize: function(event, ui){
		var self = $(this).data("resizable"), o = self.options;
		if (self.ghost) self.ghost.css({ position: 'relative', height: self.size.height, width: self.size.width });
	},

	stop: function(event, ui){
		var self = $(this).data("resizable"), o = self.options;
		if (self.ghost && self.helper) self.helper.get(0).removeChild(self.ghost.get(0));
	}

});

$.ui.plugin.add("resizable", "grid", {

	resize: function(event, ui) {
		var self = $(this).data("resizable"), o = self.options, cs = self.size, os = self.originalSize, op = self.originalPosition, a = self.axis, ratio = o._aspectRatio || event.shiftKey;
		o.grid = typeof o.grid == "number" ? [o.grid, o.grid] : o.grid;
		var ox = Math.round((cs.width - os.width) / (o.grid[0]||1)) * (o.grid[0]||1), oy = Math.round((cs.height - os.height) / (o.grid[1]||1)) * (o.grid[1]||1);

		if (/^(se|s|e)$/.test(a)) {
			self.size.width = os.width + ox;
			self.size.height = os.height + oy;
		}
		else if (/^(ne)$/.test(a)) {
			self.size.width = os.width + ox;
			self.size.height = os.height + oy;
			self.position.top = op.top - oy;
		}
		else if (/^(sw)$/.test(a)) {
			self.size.width = os.width + ox;
			self.size.height = os.height + oy;
			self.position.left = op.left - ox;
		}
		else {
			self.size.width = os.width + ox;
			self.size.height = os.height + oy;
			self.position.top = op.top - oy;
			self.position.left = op.left - ox;
		}
	}

});

var num = function(v) {
	return parseInt(v, 10) || 0;
};

var isNumber = function(value) {
	return !isNaN(parseInt(value, 10));
};

})(jQuery);


/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

// Simple Set Clipboard System
// Author: Joseph Huckaby

var ZeroClipboard = {
  
  version: "1.0.4",
  clients: {}, // registered upload clients on page, indexed by id
  moviePath: '/swf/ZeroClipboard.swf', // URL to movie
  nextId: 1, // ID of next movie
  
  $: function(thingy) {
    // simple DOM lookup utility function
    if (typeof(thingy) == 'string') thingy = document.getElementById(thingy);
    if (!thingy.addClass) {
      // extend element with a few useful methods
      thingy.hide = function() { this.style.display = 'none'; };
      thingy.show = function() { this.style.display = ''; };
      thingy.addClass = function(name) { this.removeClass(name); this.className += ' ' + name; };
      thingy.removeClass = function(name) {
        this.className = this.className.replace( new RegExp("\\s*" + name + "\\s*"), " ").replace(/^\s+/, '').replace(/\s+$/, '');
      };
      thingy.hasClass = function(name) {
        return !!this.className.match( new RegExp("\\s*" + name + "\\s*") );
      }
    }
    return thingy;
  },
  
  setMoviePath: function(path) {
    // set path to ZeroClipboard.swf
    this.moviePath = path;
  },
  
  dispatch: function(id, eventName, args) {
    // receive event from flash movie, send to client   
    var client = this.clients[id];
    if (client) {
      client.receiveEvent(eventName, args);
    }
  },
  
  register: function(id, client) {
    // register new client to receive events
    this.clients[id] = client;
  },
  
  getDOMObjectPosition: function(obj) {
    // get absolute coordinates for dom element
    var info = {
      left: 0, 
      top: 0, 
      width: obj.width ? obj.width : obj.offsetWidth, 
      height: obj.height ? obj.height : obj.offsetHeight
    };

    while (obj) {
      info.left += obj.offsetLeft;
      info.top += obj.offsetTop;
      obj = obj.offsetParent;
    }

    return info;
  },
  
  Client: function(elem) {
    // constructor for new simple upload client
    this.handlers = {};
    
    // unique ID
    this.id = ZeroClipboard.nextId++;
    this.movieId = 'ZeroClipboardMovie_' + this.id;
    
    // register client with singleton to receive flash events
    ZeroClipboard.register(this.id, this);
    
    // create movie
    if (elem) this.glue(elem);
  }
};

ZeroClipboard.Client.prototype = {
  
  id: 0, // unique ID for us
  ready: false, // whether movie is ready to receive events or not
  movie: null, // reference to movie object
  clipText: '', // text to copy to clipboard
  handCursorEnabled: true, // whether to show hand cursor, or default pointer cursor
  cssEffects: true, // enable CSS mouse effects on dom container
  handlers: null, // user event handlers
  
  glue: function(elem) {
    // glue to DOM element
    // elem can be ID or actual DOM element object
    this.domElement = ZeroClipboard.$(elem);
    
    // float just above object, or zIndex 99 if dom element isn't set
    var zIndex = 200;
    if (this.domElement.style.zIndex) {
      zIndex = parseInt(this.domElement.style.zIndex) + 1;
    }
    
    // find X/Y position of domElement
    var box = ZeroClipboard.getDOMObjectPosition(this.domElement);
    
    // create floating DIV above element
    this.div = document.createElement('div');
    var style = this.div.style;
    style.position = 'absolute';
    style.left = '' + box.left  + 'px';
    style.top = '' + box.top  + 'px';
    style.width = '' + box.width + 'px';
    style.height = '' + box.height + 'px';
    style.zIndex = zIndex;
    
    //style.backgroundColor = '#f00'; // debug
    
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(this.div);
    
    this.div.innerHTML = this.getHTML( box.width, box.height );
  },
  
  getHTML: function(width, height) {
    // return HTML for movie
    var html = '';
    var flashvars = 'id=' + this.id + 
      '&width=' + width + 
      '&height=' + height;
      
    if (navigator.userAgent.match(/MSIE/)) {
      // IE gets an OBJECT tag
      var protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
      html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+protocol+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+width+'" height="'+height+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+flashvars+'"/><param name="wmode" value="transparent"/></object>';
    }
    else {
      // all other browsers get an EMBED tag
      html += '<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+flashvars+'" wmode="transparent" />';
    }
    return html;
  },
  
  hide: function() {
    // temporarily hide floater offscreen
    if (this.div) {
      this.div.style.left = '-2000px';
    }
  },
  
  show: function() {
    // show ourselves after a call to hide()
    this.reposition();
  },
  
  destroy: function() {
    // destroy control and floater
    if (this.domElement && this.div) {
      this.hide();
      this.div.innerHTML = '';
      
      var body = document.getElementsByTagName('body')[0];
      try { body.removeChild( this.div ); } catch(e) {;}
      
      this.domElement = null;
      this.div = null;
    }
  },
  
  reposition: function(elem) {
    // reposition our floating div, optionally to new container
    // warning: container CANNOT change size, only position
    if (elem) {
      this.domElement = ZeroClipboard.$(elem);
      if (!this.domElement) this.hide();
    }
    
    if (this.domElement && this.div) {
      var box = ZeroClipboard.getDOMObjectPosition(this.domElement);
      var style = this.div.style;
      
      var left = box.left + 10;
      var top = box.top + 10;     
      style.left = '' + left + 'px';
      style.top = '' + top + 'px';
    }
  },
  
  setText: function(newText) {
    // set text to be copied to clipboard
    this.clipText = newText;
    if (this.ready) this.movie.setText(newText);
  },
  
  addEventListener: function(eventName, func) {
    // add user event listener for event
    // event types: load, queueStart, fileStart, fileComplete, queueComplete, progress, error, cancel
    eventName = eventName.toString().toLowerCase().replace(/^on/, '');
    if (!this.handlers[eventName]) this.handlers[eventName] = [];
    this.handlers[eventName].push(func);
  },
  
  setHandCursor: function(enabled) {
    // enable hand cursor (true), or default arrow cursor (false)
    this.handCursorEnabled = enabled;
    if (this.ready) this.movie.setHandCursor(enabled);
  },
  
  setCSSEffects: function(enabled) {
    // enable or disable CSS effects on DOM container
    this.cssEffects = !!enabled;
  },
  
  receiveEvent: function(eventName, args) {
    // receive event from flash
    eventName = eventName.toString().toLowerCase().replace(/^on/, '');
        
    // special behavior for certain events
    switch (eventName) {
      case 'load':
        // movie claims it is ready, but in IE this isn't always the case...
        // bug fix: Cannot extend EMBED DOM elements in Firefox, must use traditional function
        this.movie = document.getElementById(this.movieId);
        if (!this.movie) {
          var self = this;
          setTimeout( function() { self.receiveEvent('load', null); }, 1 );
          return;
        }
        
        // firefox on pc needs a "kick" in order to set these in certain cases
        if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
          var self = this;
          setTimeout( function() { self.receiveEvent('load', null); }, 100 );
          this.ready = true;
          return;
        }
        
        this.ready = true;
        this.movie.setText( this.clipText );
        this.movie.setHandCursor( this.handCursorEnabled );
        break;
      
      case 'mouseover':
        if (this.domElement && this.cssEffects) {
          this.domElement.addClass('hover');
          if (this.recoverActive) this.domElement.addClass('active');
        }
        break;
      
      case 'mouseout':
        if (this.domElement && this.cssEffects) {
          this.recoverActive = false;
          if (this.domElement.hasClass('active')) {
            this.domElement.removeClass('active');
            this.recoverActive = true;
          }
          this.domElement.removeClass('hover');
        }
        break;
      
      case 'mousedown':
        if (this.domElement && this.cssEffects) {
          this.domElement.addClass('active');
        }
        break;
      
      case 'mouseup':
        if (this.domElement && this.cssEffects) {
          this.domElement.removeClass('active');
          this.recoverActive = false;
        }
        break;
    } // switch eventName
    
    if (this.handlers[eventName]) {
      for (var idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
        var func = this.handlers[eventName][idx];
      
        if (typeof(func) == 'function') {
          // actual function reference
          func(this, args);
        }
        else if ((typeof(func) == 'object') && (func.length == 2)) {
          // PHP style object + method, i.e. [myObject, 'myMethod']
          func[0][ func[1] ](this, args);
        }
        else if (typeof(func) == 'string') {
          // name of function
          window[func](this, args);
        }
      } // foreach event handler defined
    } // user defined handler for event
  }
  
};


// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
// http://ejohn.org/blog/javascript-micro-templating/
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
      
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
        
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
        
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<@").join("\t")
          .replace(/((^|@>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)@>/g, "',$1,'")
          .split("\t").join("');")
          .split("@>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
    
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();

// creates Hints that never return after being closed.
// basic concepts:
//   - all hint commands are ignored if the specified hint wasn't created.
//   - create the hint in a rails view inside the condition: if show_hint?(hint_name).
//     this will only create the hint if it hasn't already been registered as viewed for the current user.
//   - show the hint with Hint.show(hint_name, target) whenever it might be needed.
//     if it's already been viewed or closed the call is ignored.
//   - hide the hint temporarily with Hint.hide(hint_name)
//   - close the hint permanently with Hint.close(hint_name) or equivalently the user may click the 'ok' button on the hint.
//   - Hint.init must be called once with the url that should be used to register hint views.
//   - make sure to create a microtemplate for each hint using the hint_micro_template helper
var Hint = function() {
  // private

  // send ajax request to register view on backend
  var registerView = function(hint) {
    if (hint.length > 0 && !hint.data('registered')) {
      jQuery.ajax({
        type: "POST",
        url: Hint.registerUrl,
        data: {'user_hint[name]': hint.data('name')},
        success: function(data){},
        error: function(XMLHttpRequest, textStatus, errorThrown){
          Animoto.error('error saving hint ' + hint.data('name'));
        }
      });
      hint.data('registered', true);
    }
  };

  // remove from dom and register view
  var remove = function(hint) {
    if (hint.data('fakeHint')) {
      hint.hide();
    } else {
      registerView(hint);
      hint.remove();
    }
  };

  var LEFT_RIGHT_VERTICAL_OFFSET = 20;

  var setArrowPosition = function(hint) {
    var arrow = hint.find('.arrow');
    if (hint.is('.hintRight, .hintLeft')) {
      arrow.css('top', hint.height()/2 - LEFT_RIGHT_VERTICAL_OFFSET - arrow.height()/2);
    }
    if (hint.is('.hintTop, .hintBottom')) {
      arrow.css('left', hint.width()/2 - arrow.width()/2);
    }
  };

  var setPosition = function(hint, target, offset) {
    var middle = target.offset().top + target.height()/2;
    var center = target.offset().left + target.width()/2;
    var top, left;
    if (hint.is('.hintRight')) {
      top = middle - hint.height()/2 + LEFT_RIGHT_VERTICAL_OFFSET;
      left = target.offset().left + target.width();
    } else if (hint.is('.hintBottom')) {
      top = target.offset().top + target.height();
      left = center - hint.width()/2;
    } else if (hint.is('.hintTop')) {
      top = target.offset().top - hint.height();
      left = center - hint.width()/2;
    } else { // hintLeft
      top = middle - hint.height()/2 + LEFT_RIGHT_VERTICAL_OFFSET;
      left = target.offset().left - hint.width();
    }
    // custom left position
    if (offset && offset.x) {
      left = offset.x(hint, target);
    }
    // custom top position
    if (offset && offset.y) {
      top = offset.y(hint, target) + LEFT_RIGHT_VERTICAL_OFFSET;
    }
    hint.css({top: top, left: left});
    setArrowPosition(hint);
  };

  // public

  return {
    // not assuming dom-ready
    init: function(registerUrl) {
      Hint.registerUrl = registerUrl;
    },

    find: function(name) {
      return jQuery('.' + name + '_Hint');
    },

    // position: 'Left' (default), 'Right', 'Top' or 'Bottom'
    //   - results in class of hintLeft, hintRight, etc
    // fakeHint: if true then hint view isn't registered in db and isn't permanently removed when closed
    create: function(name, position, templateParams, fakeHint) {
      var templateName = name + '_HintTemplate';
      if(jQuery('#' + templateName).length > 0){
        templateParams = templateParams || {};
        templateParams.position = position || 'Left';
        var hint = jQuery(tmpl(templateName, templateParams)).appendTo('body').data('name', name).data('fakeHint', fakeHint || false);
        hint.find('.close').click(function() {
          remove(hint);
          return false;
        });
      } else{
        return false;
      }
    },

    // target is the item the hint should be pointing at.
    // target must be visible when 'show' is called in order for positioning to work
    // textClass: optional. if present hide all '.text' in content area and then show '.'+textClass
    // offsetCallbacks: optional. custom pointer offsets like {x: function(hint, target)} (and/or 'y:')
    show: function(name, target, textClass, offsetCallbacks) {
      var hint = Hint.find(name);
      if (hint.length > 0 && target.length > 0) {
        if (textClass) {
          hint.find('.text').hide();
          hint.find('.' + textClass).show();
        }
        hint.show();
        setPosition(hint, target, offsetCallbacks);
      }
    },

    hide: function(name) {
      Hint.find(name).hide();
    },

    close: function(name) {
      remove(Hint.find(name));
    },

    // whether the hint is currently visible
    visible: function(name) {
      return Hint.find(name).filter(':visible').length > 0;
    }
  }
}();


/* SWFObject v2.1 <http://code.google.com/p/swfobject/>
	Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
	This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var b="undefined",Q="object",n="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",P="application/x-shockwave-flash",m="SWFObjectExprInst",j=window,K=document,T=navigator,o=[],N=[],i=[],d=[],J,Z=null,M=null,l=null,e=false,A=false;var h=function(){var v=typeof K.getElementById!=b&&typeof K.getElementsByTagName!=b&&typeof K.createElement!=b,AC=[0,0,0],x=null;if(typeof T.plugins!=b&&typeof T.plugins[n]==Q){x=T.plugins[n].description;if(x&&!(typeof T.mimeTypes!=b&&T.mimeTypes[P]&&!T.mimeTypes[P].enabledPlugin)){x=x.replace(/^.*\s+(\S+\s+\S+$)/,"$1");AC[0]=parseInt(x.replace(/^(.*)\..*$/,"$1"),10);AC[1]=parseInt(x.replace(/^.*\.(.*)\s.*$/,"$1"),10);AC[2]=/r/.test(x)?parseInt(x.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof j.ActiveXObject!=b){var y=null,AB=false;try{y=new ActiveXObject(p+".7")}catch(t){try{y=new ActiveXObject(p+".6");AC=[6,0,21];y.AllowScriptAccess="always"}catch(t){if(AC[0]==6){AB=true}}if(!AB){try{y=new ActiveXObject(p)}catch(t){}}}if(!AB&&y){try{x=y.GetVariable("$version");if(x){x=x.split(" ")[1].split(",");AC=[parseInt(x[0],10),parseInt(x[1],10),parseInt(x[2],10)]}}catch(t){}}}}var AD=T.userAgent.toLowerCase(),r=T.platform.toLowerCase(),AA=/webkit/.test(AD)?parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,q=false,z=r?/win/.test(r):/win/.test(AD),w=r?/mac/.test(r):/mac/.test(AD);/*@cc_on q=true;@if(@_win32)z=true;@elif(@_mac)w=true;@end@*/return{w3cdom:v,pv:AC,webkit:AA,ie:q,win:z,mac:w}}();var L=function(){if(!h.w3cdom){return }f(H);if(h.ie&&h.win){try{K.write("<script id=__ie_ondomload defer=true src=//:><\/script>");J=C("__ie_ondomload");if(J){I(J,"onreadystatechange",S)}}catch(q){}}if(h.webkit&&typeof K.readyState!=b){Z=setInterval(function(){if(/loaded|complete/.test(K.readyState)){E()}},10)}if(typeof K.addEventListener!=b){K.addEventListener("DOMContentLoaded",E,null)}R(E)}();function S(){if(J.readyState=="complete"){J.parentNode.removeChild(J);E()}}function E(){if(e){return }if(h.ie&&h.win){var v=a("span");try{var u=K.getElementsByTagName("body")[0].appendChild(v);u.parentNode.removeChild(u)}catch(w){return }}e=true;if(Z){clearInterval(Z);Z=null}var q=o.length;for(var r=0;r<q;r++){o[r]()}}function f(q){if(e){q()}else{o[o.length]=q}}function R(r){if(typeof j.addEventListener!=b){j.addEventListener("load",r,false)}else{if(typeof K.addEventListener!=b){K.addEventListener("load",r,false)}else{if(typeof j.attachEvent!=b){I(j,"onload",r)}else{if(typeof j.onload=="function"){var q=j.onload;j.onload=function(){q();r()}}else{j.onload=r}}}}}function H(){var t=N.length;for(var q=0;q<t;q++){var u=N[q].id;if(h.pv[0]>0){var r=C(u);if(r){N[q].width=r.getAttribute("width")?r.getAttribute("width"):"0";N[q].height=r.getAttribute("height")?r.getAttribute("height"):"0";if(c(N[q].swfVersion)){if(h.webkit&&h.webkit<312){Y(r)}W(u,true)}else{if(N[q].expressInstall&&!A&&c("6.0.65")&&(h.win||h.mac)){k(N[q])}else{O(r)}}}}else{W(u,true)}}}function Y(t){var q=t.getElementsByTagName(Q)[0];if(q){var w=a("embed"),y=q.attributes;if(y){var v=y.length;for(var u=0;u<v;u++){if(y[u].nodeName=="DATA"){w.setAttribute("src",y[u].nodeValue)}else{w.setAttribute(y[u].nodeName,y[u].nodeValue)}}}var x=q.childNodes;if(x){var z=x.length;for(var r=0;r<z;r++){if(x[r].nodeType==1&&x[r].nodeName=="PARAM"){w.setAttribute(x[r].getAttribute("name"),x[r].getAttribute("value"))}}}t.parentNode.replaceChild(w,t)}}function k(w){A=true;var u=C(w.id);if(u){if(w.altContentId){var y=C(w.altContentId);if(y){M=y;l=w.altContentId}}else{M=G(u)}if(!(/%$/.test(w.width))&&parseInt(w.width,10)<310){w.width="310"}if(!(/%$/.test(w.height))&&parseInt(w.height,10)<137){w.height="137"}K.title=K.title.slice(0,47)+" - Flash Player Installation";var z=h.ie&&h.win?"ActiveX":"PlugIn",q=K.title,r="MMredirectURL="+j.location+"&MMplayerType="+z+"&MMdoctitle="+q,x=w.id;if(h.ie&&h.win&&u.readyState!=4){var t=a("div");x+="SWFObjectNew";t.setAttribute("id",x);u.parentNode.insertBefore(t,u);u.style.display="none";var v=function(){u.parentNode.removeChild(u)};I(j,"onload",v)}U({data:w.expressInstall,id:m,width:w.width,height:w.height},{flashvars:r},x)}}function O(t){if(h.ie&&h.win&&t.readyState!=4){var r=a("div");t.parentNode.insertBefore(r,t);r.parentNode.replaceChild(G(t),r);t.style.display="none";var q=function(){t.parentNode.removeChild(t)};I(j,"onload",q)}else{t.parentNode.replaceChild(G(t),t)}}function G(v){var u=a("div");if(h.win&&h.ie){u.innerHTML=v.innerHTML}else{var r=v.getElementsByTagName(Q)[0];if(r){var w=r.childNodes;if(w){var q=w.length;for(var t=0;t<q;t++){if(!(w[t].nodeType==1&&w[t].nodeName=="PARAM")&&!(w[t].nodeType==8)){u.appendChild(w[t].cloneNode(true))}}}}}return u}function U(AG,AE,t){var q,v=C(t);if(v){if(typeof AG.id==b){AG.id=t}if(h.ie&&h.win){var AF="";for(var AB in AG){if(AG[AB]!=Object.prototype[AB]){if(AB.toLowerCase()=="data"){AE.movie=AG[AB]}else{if(AB.toLowerCase()=="styleclass"){AF+=' class="'+AG[AB]+'"'}else{if(AB.toLowerCase()!="classid"){AF+=" "+AB+'="'+AG[AB]+'"'}}}}}var AD="";for(var AA in AE){if(AE[AA]!=Object.prototype[AA]){AD+='<param name="'+AA+'" value="'+AE[AA]+'" />'}}v.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+AF+">"+AD+"</object>";i[i.length]=AG.id;q=C(AG.id)}else{if(h.webkit&&h.webkit<312){var AC=a("embed");AC.setAttribute("type",P);for(var z in AG){if(AG[z]!=Object.prototype[z]){if(z.toLowerCase()=="data"){AC.setAttribute("src",AG[z])}else{if(z.toLowerCase()=="styleclass"){AC.setAttribute("class",AG[z])}else{if(z.toLowerCase()!="classid"){AC.setAttribute(z,AG[z])}}}}}for(var y in AE){if(AE[y]!=Object.prototype[y]){if(y.toLowerCase()!="movie"){AC.setAttribute(y,AE[y])}}}v.parentNode.replaceChild(AC,v);q=AC}else{var u=a(Q);u.setAttribute("type",P);for(var x in AG){if(AG[x]!=Object.prototype[x]){if(x.toLowerCase()=="styleclass"){u.setAttribute("class",AG[x])}else{if(x.toLowerCase()!="classid"){u.setAttribute(x,AG[x])}}}}for(var w in AE){if(AE[w]!=Object.prototype[w]&&w.toLowerCase()!="movie"){F(u,w,AE[w])}}v.parentNode.replaceChild(u,v);q=u}}}return q}function F(t,q,r){var u=a("param");u.setAttribute("name",q);u.setAttribute("value",r);t.appendChild(u)}function X(r){var q=C(r);if(q&&(q.nodeName=="OBJECT"||q.nodeName=="EMBED")){if(h.ie&&h.win){if(q.readyState==4){B(r)}else{j.attachEvent("onload",function(){B(r)})}}else{q.parentNode.removeChild(q)}}}function B(t){var r=C(t);if(r){for(var q in r){if(typeof r[q]=="function"){r[q]=null}}r.parentNode.removeChild(r)}}function C(t){var q=null;try{q=K.getElementById(t)}catch(r){}return q}function a(q){return K.createElement(q)}function I(t,q,r){t.attachEvent(q,r);d[d.length]=[t,q,r]}function c(t){var r=h.pv,q=t.split(".");q[0]=parseInt(q[0],10);q[1]=parseInt(q[1],10)||0;q[2]=parseInt(q[2],10)||0;return(r[0]>q[0]||(r[0]==q[0]&&r[1]>q[1])||(r[0]==q[0]&&r[1]==q[1]&&r[2]>=q[2]))?true:false}function V(v,r){if(h.ie&&h.mac){return }var u=K.getElementsByTagName("head")[0],t=a("style");t.setAttribute("type","text/css");t.setAttribute("media","screen");if(!(h.ie&&h.win)&&typeof K.createTextNode!=b){t.appendChild(K.createTextNode(v+" {"+r+"}"))}u.appendChild(t);if(h.ie&&h.win&&typeof K.styleSheets!=b&&K.styleSheets.length>0){var q=K.styleSheets[K.styleSheets.length-1];if(typeof q.addRule==Q){q.addRule(v,r)}}}function W(t,q){var r=q?"visible":"hidden";if(e&&C(t)){C(t).style.visibility=r}else{V("#"+t,"visibility:"+r)}}function g(s){var r=/[\\\"<>\.;]/;var q=r.exec(s)!=null;return q?encodeURIComponent(s):s}var D=function(){if(h.ie&&h.win){window.attachEvent("onunload",function(){var w=d.length;for(var v=0;v<w;v++){d[v][0].detachEvent(d[v][1],d[v][2])}var t=i.length;for(var u=0;u<t;u++){X(i[u])}for(var r in h){h[r]=null}h=null;for(var q in swfobject){swfobject[q]=null}swfobject=null})}}();return{registerObject:function(u,q,t){if(!h.w3cdom||!u||!q){return }var r={};r.id=u;r.swfVersion=q;r.expressInstall=t?t:false;N[N.length]=r;W(u,false)},getObjectById:function(v){var q=null;if(h.w3cdom){var t=C(v);if(t){var u=t.getElementsByTagName(Q)[0];if(!u||(u&&typeof t.SetVariable!=b)){q=t}else{if(typeof u.SetVariable!=b){q=u}}}}return q},embedSWF:function(x,AE,AB,AD,q,w,r,z,AC){if(!h.w3cdom||!x||!AE||!AB||!AD||!q){return }AB+="";AD+="";if(c(q)){W(AE,false);var AA={};if(AC&&typeof AC===Q){for(var v in AC){if(AC[v]!=Object.prototype[v]){AA[v]=AC[v]}}}AA.data=x;AA.width=AB;AA.height=AD;var y={};if(z&&typeof z===Q){for(var u in z){if(z[u]!=Object.prototype[u]){y[u]=z[u]}}}if(r&&typeof r===Q){for(var t in r){if(r[t]!=Object.prototype[t]){if(typeof y.flashvars!=b){y.flashvars+="&"+t+"="+r[t]}else{y.flashvars=t+"="+r[t]}}}}f(function(){U(AA,y,AE);if(AA.id==AE){W(AE,true)}})}else{if(w&&!A&&c("6.0.65")&&(h.win||h.mac)){A=true;W(AE,false);f(function(){var AF={};AF.id=AF.altContentId=AE;AF.width=AB;AF.height=AD;AF.expressInstall=w;k(AF)})}}},getFlashPlayerVersion:function(){return{major:h.pv[0],minor:h.pv[1],release:h.pv[2]}},hasFlashPlayerVersion:c,createSWF:function(t,r,q){if(h.w3cdom){return U(t,r,q)}else{return undefined}},removeSWF:function(q){if(h.w3cdom){X(q)}},createCSS:function(r,q){if(h.w3cdom){V(r,q)}},addDomLoadEvent:f,addLoadEvent:R,getQueryParamValue:function(v){var u=K.location.search||K.location.hash;if(v==null){return g(u)}if(u){var t=u.substring(1).split("&");for(var r=0;r<t.length;r++){if(t[r].substring(0,t[r].indexOf("="))==v){return g(t[r].substring((t[r].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(A&&M){var q=C(m);if(q){q.parentNode.replaceChild(M,q);if(l){W(l,true);if(h.ie&&h.win){M.style.display="block"}}M=null;l=null;A=false}}}}}();

$(document).ready(function(){
    AnimotoFramework.initTabs();
    if($('#homepage').length > 1){ } else{
        AnimotoFramework.initPoster();
    }
    
    if($('#sign-up-page').length > 0){
      
    }
    
    AnimotoFramework.initCaseStudies();
    AnimotoFramework.addHighlightBehavior();
    AnimotoFramework.initForms();
    
    if($.browser.msie && parseInt($.browser.version) == 6){
        AnimotoFramework.labelFormElements();
    }
    
    AnimotoFramework.handleFlashMessaging();
    AnimotoFramework.initTooltip();
    
   // $('#helpTrigger a').click(AnimotoFramework.toggleHelpDisplay);
    
    $.nyroModalSettings({
      debug: false,
      bgColor:"#020202",
      width:600,
      minHeight:350,
      height:'auto',
      padding:0,
      marginTop: '100px',
      css: {
        full: {
          position: 'absolute'
        },
        bg: {
          position: 'fixed'
        },
        content: {
          height:'auto'
        },
        wrapper2: {
          height: 'auto'
        },
        wrapper: {
          top:'25px',
          height:'auto'
        }
      },
      endRemove: function(){
        document.location.hash = "#";
      },
      showBackground:function(elts,settings, callback){
        elts.bg.css({opacity:0}).fadeTo(100, 0.75, callback);
      },
      hideBackground:function(elts,settings, callback){
        elts.bg.fadeOut(100, callback);
      },
      showContent: function(elts, settings, callback){
        elts.contentWrapper.css({
          width: settings.width+'px',
          height: 'auto',
          marginTop: '0px',
          marginLeft: settings.marginLeft+'px'
        }).show();
      },
      hideContent: function(elts, settinsg, callback){
        elts.contentWrapper.fadeOut(80);
	      callback();
      },
      resize: function(elts, settings, callback) {
        elts.contentWrapper.animate({
          width: settings.width+'px',
          height: 'auto',
          marginLeft: settings.marginLeft+'px',
          marginTop: settings.marginTop+'px'
        }, {complete: callback, duration: 400});
      },
      showLoading: function(elts, settings, callback) {
        //elts.loading.css({
        //  marginTop: settings.marginTopLoading+'px',
        //  marginLeft: settings.marginLeftLoading+'px',
        //  opacity: 0
        //}).show().animate({ opacity: 0}, {complete: callback, duration: 400});
        callback();
      }
    });
    
    
    $('a.lightbox').nyroModal();
    
});

jQuery.fn.toggleText = function(a, b) {
  return this.each(function() {
    jQuery(this).html(jQuery(this).html() == a ? b : a);
  });
};

if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
    var is_iphone = true;
} else {
    var is_iphone = false;
}


var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65"; 
    $(document).keydown(function(e) { 
        kkeys.push( e.keyCode ); 
        if ( kkeys.toString().indexOf( konami ) >= 0 ){ 
            $(document).unbind('keydown',arguments.callee); 
            AnimotoFramework.trackPageEvent('home-page','konami');        
            AnimotoFramework.embedShowcasePlayer(
                   'http://static.animoto.com/videos/demo_karaoke.mp4',
                   'main',
                   'http://static.animoto.com/videos/cover_karaoke.jpg',
                   'videoPlayer',
                   '',
                   '',
                   true
               );
        } 
    });


var AnimotoFramework = function(){
    return{
        
        // Labels form elements for IE
        labelFormElements: function(){
            $("input[type=password], input[type=text],textarea").addClass("text");
            $("input[type=radio]").addClass("radio");
            $("input[type=password], input[type=text], textarea").focus(function() {
                $(this).addClass("focus"); 
            });

            $("input[type=password], input[type=text], textarea").blur(function(){
                if ($(this).find(".focus")) {
                    $(this).removeClass("focus");
                }
            });
        },
        
        handleFlashMessaging: function(){
            var offset = "126"; 
            var container = $('#header_flash');
            
            if($('#homepage').length > 0){
                offset = "105";
            }
            
            $('#header_flash .controls').click(function(){
                container.animate({top:"-" + offset + "px"},650, function(){
                    container.hide();
                });
            });
            if($('#header_flash .flash').html() != null && $('#header_flash .flash').html() != ""){
                container.show();
                container.animate({top: offset + "px"},650);
            }
        },
        
        showFlashMessage: function(heading,message){
            var offset = "126";
            var container = $('#header_flash');
            
             if($('#homepage').length > 0){
                    offset = "105";
                }
            
            if(message){
                message = "<p>" + heading + "</p>" + "<p class='secondary'>" + message + "</p>"
            } else{
                message = "<p>" + heading + "</p>"
            } 
            container.show();
            $('#header_flash .flash').html( message);
            container.animate({top:offset +"px"},650);
        },
        
        toggleHelpDisplay:function(){
          var container = $('#header_help');
          container.animate({top:"126px"},650);
          
          UserVoice.Widget.embed({ 
            subdomain: 'animoto',
            topic_id: '9153',
            stylesheet: 'null'
          });
                    
          return false
        },
        
        // Initializes Navigation Tabs
        initTabs: function(){
            var navDuration = 150; //time in miliseconds
            var navJumpHeight = "6px"; 
            $('.navigationPanel ul li:not(.active,.license)').hover(function() {
                $(this).animate({ top: "-="+navJumpHeight}, navDuration);       
            }, function() {
                $(this).animate({ top : "0px" }, navDuration);
            });
            $('.navigationPanel ul li a:not(li.active a,li.license a)').hover(function() {
                  $(this).animate({  paddingTop: "+="+navJumpHeight, backgroundColor:'#292929' }, navDuration);          
            }, function() {
                  $(this).animate({  paddingTop: "-="+navJumpHeight, backgroundColor:'#131313' }, navDuration);
            });
             $('.navigationPanel h1 a').hover(function() {
                    $(this).animate({  color:'#fff'}, navDuration);  
                    $(this).parent().animate({  backgroundColor:'#191919'}, navDuration);           
             }, function() {
                    $(this).animate({ color:'#aaaaaa' }, navDuration);
                    $(this).parent().animate({  backgroundColor:'#131313'}, navDuration);  
             });
        },

        restrictCommentLength:function() {
          $('#commentPrompt').hide();
          if ($('#comment_content').val() == 'Add your comment...') {
            return;
          }
          $('#commentCharsRemaining').show();
          var MAX_COMMENT_LENGTH = 255;
          try{
            if ($('#comment_content').val().length > MAX_COMMENT_LENGTH) {
              $('#comment_content').val($('#comment_content').val().substr(0, MAX_COMMENT_LENGTH));
              $('#commentCharsRemaining').addClass('maximum').effect('pulsate',[],1000);;
            }
            $('#commentCharCount').text(MAX_COMMENT_LENGTH - $('#comment_content').val().length);
          } catch(e){}
        },

        initCommentForm:function(){
            $('#comment_content').focus(function(e){
               var textarea =  $(e.target);
               var value = textarea.attr('value');
               if(value == "Add your comment..."){
                   textarea.attr('value', '');
               }
               AnimotoFramework.restrictCommentLength();
            }).blur( function(e){
                var textarea =  $(e.target);
                var value = textarea.attr('value');
                if(value == ""){
                    textarea.attr('value', 'Add your comment...');
                }
            });
            
            AnimotoFramework.restrictCommentLength();

            // update char count and/or prevent more chars on each keyup
            $('#comment_content').keyup(AnimotoFramework.restrictCommentLength);

            $('#submitComment').click(function(){
                var value =  $.trim($('#comment_content').attr('value'));
                
                if(value != "Add your comment..." && value != ""){
                    $('#submitComment').toggleButton();

                    $.ajax({
                      type: "POST",
                      url: $('#comment_form').attr('action'),
                      data: {'comment[content]': value},
                      success: function(data){
                        $('p.commentNoComments').fadeOut(500, function(){
                          $('.comments').append(data);
                        });
                        
                        var counter = $('#commentCount');
                        counter.text(parseInt(counter.text()) + 1);

                        AnimotoFramework.trackPageEvent('play-page', 'comment_post');
                      },
                      error: function(XMLHttpRequest, textStatus, errorThrown){
                        $('#commentCharsRemaining').hide();
                        $('#commentPrompt').text('There was an error, please try again.');
                        $('#submitComment').toggleButton();
                        AnimotoFramework.trackPageEvent('play-page', 'comment_post_error_' + textStatus); 
                      },
                      complete: function() {
                        $('#commentPost').fadeOut(500,function(){
                          $('#commentPosted').fadeIn(500);
                        });
                      }
                    });
                } else{
                    $('#commentCharsRemaining').hide();
                    $('#commentPrompt').effect('pulsate',[],1000);
                }

                return false;
            });
        },
        
        deleteComment: function(id){
            var comment = $('#' + id);
            $('#'+ id + ' .comment_delete').unbind('click').text('Deleting...');
                      
            $.ajax({
                type: "DELETE",
                url: '/comments/' + id,
                success: function(){
                    comment.replaceWith('<li id="' + id +'" class=\'comment deleted\'><div class=\'head\'>&nbsp;</div><div class=\'body\'>Comment has been deleted. <a onclick=\'AnimotoFramework.restoreComment("' + id + '");return false;\'>Undo</a></div></li>');
                    
                    var counter = $('#commentCount');
                    var count = parseInt(counter.text());
                    count--;
                    counter.text(count);
                    
                    if(count == 0){
                      $('#commentPost img').removeClass('hidden');
                    }
                    
                    AnimotoFramework.trackPageEvent('play-page', 'comment_delete'); 
                },
                error: function(XMLHttpRequest, textStatus, errorThrown){
                    AnimotoFramework.trackPageEvent('play-page', 'comment_delete_error_' + textStatus); 
                }
            });
            
            
        },
        
        restoreComment: function(id){
            $.ajax({
               type: "PUT",
               url: '/comments/' + id + '/restore',
               success: function(data){
                   $('#'+id).replaceWith(data);
                   var counter = $('#commentCount');
                   var count = parseInt(counter.text());
                   count++;
                   counter.text(count);
                   
                   AnimotoFramework.trackPageEvent('play-page', 'comment_restore');
               },
               error: function(XMLHttpRequest, textStatus, errorThrown){
                   AnimotoFramework.trackPageEvent('play-page', 'comment_restore_error_' + textStatus);
               }
            });
        },
        
        // Inits Drop Shadows
        initShadows: function(){
            
          $('.navigationPanel h1').dropShadow({left:0,top:0,blur:1})   
         // $('.contentPanel,.posterPanel,.navigationPanel').dropShadow({left:0,top:0,blur:0})  
        },
        
        // Initializes Poster Board UI Element (if present), setting up player behavior and performing 
        // typographic tweaks
        initPoster: function(){
            //$('.posterPanel p').widont();
            $('#controlToggle').click(AnimotoFramework.togglePosterPlayer);  
            
        },
        
        // Toggle functionality for posterboard
        togglePosterPlayer: function(){
            var player = $('.posterPanel .player');
          
            if(player.hasClass('hidden')){
                $('.posterPanel .content').fadeOut(299, function(){
                    AnimotoFramework.trackEvent('view_video');
                    player.fadeIn(function(){player.removeClass('hidden');});
                    $('#controlToggle').html('Back &raquo;');
                });
            } else {
                player.fadeOut(function(){
                    AnimotoFramework.trackEvent('close_video');
                    player.addClass('hidden');
                    $('.posterPanel .content').fadeIn(299);     
                    $('#controlToggle').html('View Sample Video &raquo;');
                });
            }
        },
        
        initCaseStudies: function(){
            if($('.lightboxPanel').size() > 0){
                var currentPage = 1;
                var itemsPerPage = 3
                var containerWidth = 954;
                var childWidth = $('#lightgrid_content .matteFrame').width(); 
                var numChildren = $('#lightgrid_content .matteFrame').length;
                var children = numChildren * (-1 * childWidth);
                var views = Math.ceil((numChildren)/  3);

                $('ul#lightgrid_content li:nth-child(3n)').css('margin-right','115px');
                
                $('#lightgrid_left').click(function(event){
                    var offset = $('#lightgrid_content').css('margin-left');
                    if(currentPage >= views){
                       AnimotoFramework.trackPageEvent('case-studies','scroll_end');
                    } else{
                        $('#lightgrid_content').animate({marginLeft:'-=' + containerWidth +'px'},300);
                        currentPage++;
                        $('#lightgrid_status ').removeClass();
                        $('#lightgrid_status').addClass(AnimotoFramework.calculateStatusIndicator(views,currentPage));
                        AnimotoFramework.trackPageEvent('case-studies','scroll_forward/' + currentPage);
                    }
                });
                $('#lightgrid_right').click(function(event){
                    var offset = $('#lightgrid_content').css('margin-left')
                    if(currentPage <= 1){
                        AnimotoFramework.trackPageEvent('case-studies','scroll_start');
                    } else {
                        $('#lightgrid_content').animate({marginLeft:'+='+ containerWidth  + 'px'},300);
                        currentPage--;
                        $('#lightgrid_status ').removeClass();
                        $('#lightgrid_status').addClass(AnimotoFramework.calculateStatusIndicator(views,currentPage));
                        AnimotoFramework.trackPageEvent('case-studies','scroll_backward/' + currentPage);
                    }
                });
                $(".matteFrame").click(AnimotoFramework.clickCaseStudy);
                $(document).ready(function(){
                    AnimotoFramework.updateCaseStudy();
                });
                $('#lightgrid_status ').addClass(AnimotoFramework.calculateStatusIndicator(views,currentPage));
            
            }
        },
        
        clickCaseStudy: function(e){
            var id = $(e.target).closest('a').attr('id');
            window.location.hash = '#' + id.substring(6,id.length);
            AnimotoFramework.updateCaseStudy();
            $(e.target).closest("div.matteFrame").addClass('selected');
            return false;
        },
        
        trackEvent: function(name){
          var url = window.location.href
          var temp = new Array();
          
          var hashPos = url.lastIndexOf('#');
          if(hashPos > -1){
              url = url.substring(0,hashPos);
          }
          
          temp = url.split('/')
          var length = temp.length;
          var prefix = '/';
          for(var i=3;i<length;i++){
              prefix = prefix + temp[i] + '/';
          }
          
          pageTracker._trackPageview(prefix+name);  
        },

        trackPageEvent: function(category, action){
          try {pageTracker._trackEvent(category, action);}
          catch (err) {
            try {AnimotoFramework.trackEvent('trackPageEvent_error');}
            catch (err2) {}
          }
        },
        
        trackEventData: function(category, action, label, value){
          try {pageTracker._trackEvent(category, action, label, value);}
          catch (err) {
            try {AnimotoFramework.trackEvent('trackPageEvent_error');}
            catch (err2) {}
          }
        },

        updateCaseStudy:function(){
            var id = (window.location.hash).substring(1,window.location.hash.length)
            
            var queryPos = id.lastIndexOf('?');
             if(queryPos > -1){
                id = id.substring(0,queryPos);
             }
            
            if(id){
                try{
                    var clean = eval('clean_' + id);
                    eval('clean_' + id+"= false");
                } catch(e){ clean=false }
            }
            
            $('.posterPanel .testimonial .player').empty();
            $('.posterPanel .testimonial').hide();
            $('.matteFrame').removeClass('active').click(AnimotoFramework.clickCaseStudy);
            
            if(window.location.hash != ""){
                testimonial_name = window.location.hash.replace('#','');
                var queryPos = testimonial_name.lastIndexOf('?');
                if(queryPos > -1){
                    testimonial_name = testimonial_name.substring(0,queryPos);
                }
                if(clean){
                    $('#detail_' + testimonial_name).show().removeClass('hidden');
                    eval('clean_' + id+"= false");
                    eval("init_"+ testimonial_name+"()");
                } else{
                    eval("init_"+ testimonial_name+"()");
                    $('#detail_' + testimonial_name).show().removeClass('hidden');
                }
                
                $('#blurb_' + testimonial_name + ' .matteFrame').addClass('active').unbind('click',AnimotoFramework.clickCaseStudy);
                
                
                AnimotoFramework.trackPageEvent('case-study',testimonial_name);
                                
                
                
            } else {
                id = $('.posterPanel  .testimonial:first').attr('id');
                $('.posterPanel  .testimonial:first').show().removeClass('hidden');
                eval("init_"+ id.substring(7,id.length) +"()");
                $('#blurb_' + id.substring(7,id.length) + ' .matteFrame').addClass('active').unbind('click',AnimotoFramework.clickCaseStudy);;
                
            }
        },
        
        calculateStatusIndicator: function(pages,position){
            return "scroll_" + position + "_of_" + pages;
        },
        
        // Adds form highlights
        addHighlightBehavior: function(){
            $('input:enabled').each(function(){
                $(this).focus(function(){
                    $(this).closest("div.fieldGroup").addClass("fieldGroup_selected");
                });

                $(this).blur(function(){
                    $(this).closest("div.fieldGroup").removeClass("fieldGroup_selected");
                });
            });

            $('select').each(function(){
                $(this).focus(function(){
                    $(this).closest("div.fieldGroup").addClass("fieldGroup_selected");
                });

                $(this).blur(function(){
                    $(this).closest("div.fieldGroup").removeClass("fieldGroup_selected");
                });
            });

            $('textarea').each(function(){
                $(this).focus(function(){
                    $(this).closest("div.fieldGroup").addClass("fieldGroup_selected");
                });

                $(this).blur(function(){
                    $(this).closest("div.fieldGroup").removeClass("fieldGroup_selected");
                });
            });
        },
        
        // Initialize form validations
        initForms: function(){
            
            $('#mainSignInForm').validate({ debug:"false",
                invalidHandler: function(form, validator){
                    var errors = validator.numberOfInvalids();
                    if(errors){
                        var message = errors == 1 ? 'There is one error. It has been highlighted.' : 'There are ' + errors + ' errors. They have been highlighted.';
                        $('#signInForm h5.errorTitle').text(message).focus();
                    } else {
                        $('#signInForm h5.errorTitle').text("");
                    }
                },
                submitHandler: function(form){
                    form.submit();
                    $('#btn_submit').toggleButton();
                }
            });
            
            $('#forgot-password-form').validate({ debug:"false",
                invalidHandler: function(form, validator){
                    var errors = validator.numberOfInvalids();
                    if(errors){
                        var message = errors == 1 ? 'There is one error. It has been highlighted.' : 'There are ' + errors + ' errors. They have been highlighted.';
                        $('#signInForm h5.errorTitle').text(message).focus();
                    } else {
                        $('#signInForm h5.errorTitle').text("");
                    }
                },
                submitHandler: function(form){
                    form.submit();
                    $('#btn_submit').toggleButton();
                }
            });
            
            if($('#sign-up-page').length > 0){
              if(!is_iphone){
                  $('#user_date_of_birth').mask('99/99/9999', { placeholder:"mm/dd/yyyy"});
              }

              if(!($('#user_date_of_birth').attr('value'))){
                  $('#user_date_of_birth').labelify({labelledClass: "inlineLabel"});
              }
              
          
              
               $('#signUpForm').validate({ debug:false,
                    invalidHandler: function(form, validator){
                        var errors = validator.numberOfInvalids();
                        if(errors){
                            var message = errors == 1 ? 'There is one error. It has been highlighted.' : 'There are ' + errors + ' errors. They have been highlighted.';
                            $('#signUpForm h5.errorTitle').text(message).focus();
                        } else {
                            $('#signUpForm h5.errorTitle').text("");
                        }
                        
                        var dob = "valid";
                        if(!$('#signUpForm').validate().element('#user_date_of_birth')){
                         dob = $('#user_date_of_birth').attr('value')
                        }
                        if(dob == ""){
                          dob = "blank";
                        }
                        
                        AnimotoFramework.trackEventData('sign-up-form','errors-' + errors + '-' + $('#signUpForm input.error').attr('id'), dob,0);
                    },
                    submitHandler: function(form){
                          $('#signUpForm button').html('Submitting...').addClass('disabled').attr('disabled','disabled').keypress(function(){
                          return disableEnterKey(event);
                        });
                        $('#signUpForm input').keypress(function(){
                            return disableEnterKey(event);
                        });
                        $('#signUpForm select').keypress(function(){
                            return disableEnterKey(event);
                        });
                        $('#signUpForm button').click(function(){
                            this.disabled = true;
                            return false;
                        });
                        form.submit();
                    }
                });

                if($('#signUpForm')){
                    $('input.email').focus();
                }       
                
                $('#togglePanel').hide();
                $('#toggleSubmit').hide();
                $('#toggleControl').click(function(){
                    if($("#togglePanel").is(":visible")){
                        $('#toggleIcon').removeClass('toggleSelected');
                            $('#togglePanel').hide();   
                            AnimotoFramework.trackPageEvent('sign-up-form','hide_promo_code');
                    } else {
                        $('#toggleIcon').addClass('toggleSelected');
                        $('#togglePanel').show();
                        AnimotoFramework.trackPageEvent('sign-up-form','reveal_promo_code');
                    }       
                });

                $('#toggleIcon').click(function(){
                    if($("#togglePanel").is(":visible")){
                        $('#toggleIcon').removeClass('toggleSelected');
                            $('#togglePanel').hide();
                            AnimotoFramework.trackPageEvent('sign-up-form','hide_promo_code');
                    } else {
                        $('#toggleIcon').addClass('toggleSelected');
                        $('#togglePanel').show().children('input:first').focus();
                        AnimotoFramework.trackPageEvent('sign-up-form','reveal_promo_code');
                    }       
                });
              
            }
            


            // Initialize Validators
           
          
            $('#a4c_signup').validate({ debug:false,
                invalidHandler: AnimotoFramework.handleFormInvalids,
                submitHandler: AnimotoFramework.handleFormSubmit
            });
                
            $('#a4e_signup').validate({ debug:false,
                 invalidHandler: AnimotoFramework.handleFormInvalids,
                 submitHandler: AnimotoFramework.handleFormSubmit
            });
        
            $('#dvd_form').validate({ debug:false,
              invalidHandler: AnimotoFramework.handleFormInvalids
            });
        
        },
        
        
        // Generic Invalid Field For Forms
        handleFormInvalids: function(form, validator){
            var errors = validator.numberOfInvalids();
            if(errors){
                var message = errors == 1 ? 'There is one error. It has been highlighted.' : 'There are ' + errors + ' errors. They have been highlighted.';
                $('h5.errorTitle').text(message).focus();
            } else {
                $('h5.errorTitle').text("");
            }
            
        },
        
        // Form Submitter
        handleFormSubmit: function(form){
            $('input[type=submit]').animate({backgroundColor:"#595959"}).css('border','none').attr('disabled','disabled').keypress(function(){
                return disableEnterKey(event);
            });
            $('input').keypress(function(){
                return disableEnterKey(event);
            });
            $('select').keypress(function(){
                return disableEnterKey(event);
            });
            form.submit(function(){ 
                $(':button',this).attr('disabled','disabled').click(function(){
                    this.disabled = true;
                });
            });
        },
        
        // Player Embed for CAUSE style showcase-mode placements
        embedShowcasePlayer: function(okey,id,cover,target,cta_text,cta_url,autostart){
                var params = {
                  allowFullScreen: 'true',
                  allowscriptaccess: 'always',
                  allowNetworking: 'all',
                  wmode: 'transparent'
                };
                
                if(!autostart){
                    autostart = false;
                }

                var flashVars = {
                  file:  okey,
                  image: cover,
                  environment:  'production',
                  animoto_mode: 'commercial',
                  controlbar:'showcase',
                  autostart:autostart,
                  displaytime:false,
                  mp4override:true,
                  calltoaction_url: cta_url,
                  calltoaction_text: cta_text
                };
                
                var attributes = {
                    'class': 'showcasePlayer'
                };
                
                var so = swfobject.embedSWF(CURRENT_PLAYER_SWF + '?' + Math.floor(Math.random()*10000), target, 432, 240, "9.0.115", null, flashVars, params, attributes);
           
        },
        
        embedBasicPlayer: function(okey,id,cover,target,environment,length,created,autoStart){
            $(target).flash({
                src:CURRENT_PLAYER_SWF + '?' + Math.floor(Math.random()*10000), 
                width:432, 
                height: 240, 
                id:"player_" + id,
                allowFullScreen: 'true',
                allowScriptAccess: 'always',
                allowNetworking: 'all',
                flashvars: {
                    file: okey,
                    image: cover,
                    environment:environment,
                    animoto_mode: 'commercial',
                    autostart: (autoStart ? 'true' : 'false'),
                    allowFullScreen: 'true',
                    allowScriptAccess: 'always',
                    allowNetworking: 'all',
                    duration: length,
                    created: created
                }
            },  {version:"9,0,115"});    
        },
        
        embedCommercialPlayer: function(okey,id,cover,target,cta_text,cta_url,environment,length,created,autoStart){
            $(target).flash({
                src:CURRENT_PLAYER_SWF + '?' + Math.floor(Math.random()*10000), 
                width:432, 
                height: 240, 
                id:"player_" + id,
                allowFullScreen: 'true',
                allowScriptAccess: 'always',
                allowNetworking: 'all',
                flashvars: {
                    file: okey,
                    image: cover,
                    environment:environment,
                    animoto_mode: 'commercial',
                    autostart: (autoStart ? 'true' : 'false'),
                    allowFullScreen: 'true',
                    allowScriptAccess: 'always',
                    allowNetworking: 'all',
                    calltoaction_url: cta_url,
                    calltoaction_text: cta_text
                }
            },  {version:"9,0,115"});    
        },
        
        embedGreetingPlayer: function(okey,id,cover,target,environment,length,created,autoStart){
          $(target).flash({
            src:CURRENT_PLAYER_SWF + '?' + Math.floor(Math.random()*10000), 
            width:432, 
            height: 240, 
            id:"player_" + id,
            allowFullScreen: 'true',
            allowScriptAccess: 'always',
            allowNetworking: 'all',
            flashvars: {
              file: okey,
              image: cover,
              environment:environment,
              animoto_mode: 'greetingcard',
              autostart: (autoStart ? 'true' : 'false'),
              allowFullScreen: 'true',
              allowScriptAccess: 'always',
              allowNetworking: 'all',
              duration: length,
              created: created
            }
          },  {version:"9,0,115"});    
        },
            
            
            embedLargeShowcasePlayer: function(okey,id,cover,target,cta_text,cta_url){
                $(target).flash({
                    src:'http://staging.animoto.com/system/tests/media_player_reskin.swf', 
                    width:648, 
                    height: 360, 
                    id:"player_" + id,
                    allowFullScreen: 'true',
                    allowScriptAccess: 'always',
                    allowNetworking: 'all',
                    flashvars: {
                        file: okey,
                        image: cover,
                        environment:'production',
                        animoto_mode: 'commercial',
                        autostart: false,
                        controlbar:'showcase',
                        allowFullScreen: 'true',
                        allowScriptAccess: 'always',
                        allowNetworking: 'all',
                        calltoaction_url: cta_url,
                        calltoaction_text: cta_text
                    }
                },  {version:"9,0,115"});    
            },
            
            lightbox: function(url, height){
              $.nyroModalManual({
                url: url, 
                height:height
              });
            },
            
            initTooltip: function(){
    
                xOffset = 10;
                yOffset = 20;       
    
        
                $("a.tooltip").hover(function(e){                                             
                    this.t = this.title;
                    this.title = "";                                      
                    $("body").append("<p id='tooltip'>"+ this.t +"</p>");
                    $("#tooltip").css("top",(e.pageY - xOffset) + "px").css("left",(e.pageX + yOffset) + "px").fadeIn("fast");        
                 },
                function(){
                    this.title = this.t;        
                    $("#tooltip").remove();
                }); 
                $("a.tooltip").mousemove(function(e){
                    $("#tooltip")
                        .css("top",(e.pageY - xOffset) + "px")
                        .css("left",(e.pageX + yOffset) + "px");
                });         
            },
            
            triggerDelete: function(e){
              var button = $(e.target);
              $('#button_delete a h5').text('Are you sure?');
              $('#button_delete a p').text('Click again to confirm');
              
              button.unbind('click').click(function(){
                clearTimeout(timeout);
                $('#button_delete a h5').text('Deleting...');
                $('#button_delete a p').text('Please Wait...');
                $('#post_delete').submit();
                button.unbind('click').click(function() { return false; });
                return false;
              });
              
              timeout = setTimeout(function(){
                $('#button_delete a h5').text('Delete');
                $('#button_delete a p').text('Delete this video');
                button.unbind('click').click(AnimotoFramework.triggerDelete)
              },10000)
              
            },
            
            initAdminPanel:function(okey){
              $('#ownerPanel a.lightbox').nyroModal();
              
              $('#button_oneclick').click(function(e){
                $('#post_oneclick').submit();
                $('#button_oneclick').unbind('click').click(function(){ return false; });
                $('#button_oneclick p').text('Please wait...');
                return false;
              });
              
              var timeout;
              
              $('#button_delete').click(AnimotoFramework.triggerDelete);

              $('#button_hires').click(function(e){
                $('#button_hires').toggleButton({text: 'Processing...'});
                AnimotoFramework.trackPageEvent('play-page', 'order_hires');

                $.ajax({
                  type: "POST",
                  url: '/renders/' + okey + '/iso.js',
                  // google chrome gives bad post data when no 'data' is specified
                  // and firefox & safari started giving me failsafe errors in dev mode when data was just '{}'
                  data: {'ignore':'me'},
                  success: function(data){
                    $('#blurb_hires').replaceWith('<ul id="status_hires"><li class="icon_himp4_rendering">MP4<br /><span>Processing...</span></li><li class="icon_himp4_rendering">ISO <br /><span>Processing...</span></li></ul>');
                    
                    var poll = setInterval(function(){
                      $.getJSON('/renders/' + okey + '/iso', function(data,textStatus){
                        $('#status_hires').replaceWith(data.html);
                        
                        if(data.status == ""){
                          poll = clearInterval();
                        }
                      });

                    },40000);
                    AnimotoFramework.trackPageEvent('play-page', 'order_hires_success');
                  },
                  error: function(XMLHttpRequest, textStatus, errorThrown){
                    $('#blurb_hires').replaceWith('<p>We encountered a problem with your request, please refresh the page and retry.</p>')
                    AnimotoFramework.trackPageEvent('play-page', 'order_hires_fail');
                  }
                });

                return false;
              });
            },
            
            initShareLinks:function(){
              var facebook = $('#mini_facebook a');
              var twitter  = $('#mini_twitter a');
              var myspace  = $('#mini_myspace a');
              
              myspace.click(function(){
                AnimotoFramework.trackPageEvent('play-page', 'share_myspace')
              });
              
            },
            
            embedWidget: function(){
              $('#embedSizes li').click(function(e){
                var option = $(e.target);
                option.addClass('selected').siblings().removeClass('selected');
                
                var width  = option.children('#width').text();
                var height = option.children('#height').text();
                
                var embedString = $('#embedCode').val();
                embedString = embedString.replace(/-EMH\/\d+/, '-EMH/' + height);
                embedString = embedString.replace(/-EMW\/\d+/, '-EMW/' + width);
                $('#embedCode').val(embedString).text(embedString);
                
                try{
                  clip.setText(embedString);
                } catch(e){ }
                
              });
              
            },
            
            initExportPanel: function(){
              AnimotoFramework.trackPageEvent('play-page', 'export');
              document.location.hash = "export";
              
              $('#button_youtube_start').click(function(){
                AnimotoFramework.trackPageEvent('play-page', 'export_youtube_start');
                $('#button_youtube_start').toggleButton({text: 'Starting...'});
                window.open($('#button_youtube_start').attr('href'),'_blank','toolbar=no,status=no,width=960,height=420');
                return false;
              });

              window.onYouTubeAuth = function() {
                AnimotoFramework.trackPageEvent('play-page', 'export_youtube_authenticated');
                
                $('#export_process_blurb').fadeOut();
                $('#export_process_indicator').fadeIn();
              };

              window.onYouTubeAuthSocketError = function() {
                AnimotoFramework.trackPageEvent('play-page', 'export_youtube_socket_error');

                $('#export_process_blurb').fadeOut();
                $('#export_process_socket_error').fadeIn();
              };

              $('#button_smugmug_start').click(function() {
                AnimotoFramework.trackPageEvent('play-page', 'export_smugmug_start');
                $('#button_smugmug_start').toggleButton({text: 'Starting...'});
                window.open($('#button_smugmug_start').attr('href'),'_blank','toolbar=no,status=no,width=960,height=420');
                return false;
              });

              window.onSmugMugAuth = function(success) {
                AnimotoFramework.trackPageEvent('play-page', 'export_smugmug_authenticated');
                $('#smugmug_export_process_blurb').hide();
                if (success) {
                  $('#smugmug_export_process_indicator').fadeIn();
                } else {
                  $('#smugmug_export_process_error').fadeIn();
                }
              };
            },
            
            initEmbedPanel: function(){
              AnimotoFramework.trackPageEvent('play-page', 'embed');
              document.location.hash = "embed";
              $.nyroModalSettings({height:530});
              ZeroClipboard.setMoviePath('/swf/ZeroClipboard.swf');
            },
            
            initGreetingPanel: function(){
                AnimotoFramework.trackPageEvent('play-page', 'greeting');
                $.nyroModalSettings({height:440});
                AnimotoFramework.initShareCommon();
            },

            createShares: function(emails, message, skin, totalCount, erroredEmails) {
              if (emails.length == 0) {
                // finished
                $('#share_form button').toggleButton();
                if (erroredEmails.length > 0) {
                  $('#sharePrompt').effect('pulsate',[],1000).text(
                    ('Sorry, we encountered a problem. Please verify the following email addresses: ' + erroredEmails.join(', '))
                  );
                  AnimotoFramework.trackPageEvent('play-page', 'share_email_error'); 
                } else {
                  $('#sharePrompt').text('All emails sent');
                  
                  AnimotoFramework.trackPageEvent('play-page', 'share_email_success'); 
                  $('.textboxlist-bit-box-deletable').remove()
                  $('#share_email').attr('value','');
                }
              } else {
                // more to send
                var email = emails[0];
                $('#sharePrompt').text('Emailing ' + (totalCount-emails.length+1) + ' of ' + totalCount + ' ( ' + email + ')');
                $.ajax({
                  type: "POST",
                  data: {'share[email]': email, 'share[message]': message, 'share[skin]': skin},
                  url: $('#share_form').attr('action'),
                  dataType: "json",
                  success: function(data){
                    if(!data.success){
                      erroredEmails.push(email);
                    }
                  },
                  error: function(XMLHttpRequest, textStatus, errorThrown){
                    erroredEmails.push(email);
                  },
                  complete: function() {
                    AnimotoFramework.createShares(emails.slice(1), message, skin, totalCount, erroredEmails);
                  }
                });
              }
            },

            initShareCommon: function() {
              $('#emailPreviewToggle').click(function(e){
                $(e.target).toggleClass('toggleActive'); 
                $('#emailPreview').toggle();
              });
              
              $('#share_form button').click(function(e){
                $('#share_form button').toggleButton({text:'Sending...'});
                $('#sharePrompt').text('');
                var emails  = $('#share_email').val().split(',');
                var message = $('#share_message').val();
                var skin    = $('#share_skin').val();
                AnimotoFramework.trackPageEvent('play-page', 'share_email'); 
                if(emails.length == 1 && emails[0] == ""){
                  //handle blank case
                  $('#share_form button').toggleButton();
                  $('#sharePrompt').effect('pulsate',[],1000).text('Please enter an email address');
                } else{
                  AnimotoFramework.createShares(emails, message, skin, emails.length, []);
                }
                return false;
              });

              AnimotoFramework.initTextBoxList();
            },

            initTextBoxList: function() {
              $('.textboxlist').remove();
              var t = new TextboxList('#share_email', {
                unique:true, 
                tabIndex:1, 
                plugins: {autocomplete: {}},
                bitsOptions: {
                  editable: {
                    addKeys: [13, 188, 34]
                  }
                }
              });
              t.addEvent('blur',function(){
                 $('.textboxlist-bit:visible').attr('style','');  
              });

              var autocomplete = t.plugins['autocomplete'];

              $.get('/users/contact_list', function(data,textStatus){
                var values = AnimotoFramework.parseContacts(data);
                var options = [];
                autocomplete.setValues(values);
              });
            },

            initSharePanel: function(){
              AnimotoFramework.trackPageEvent('play-page', 'share');
              document.location.hash = "share";
              $('#toggleLink').click(function(){
                $('#clearspringLaunchpad').toggle();
                $('#toggleLink').toggleClass('toggleActive');
              });
              
              $.nyroModalSettings({height:620});

              AnimotoFramework.initShareCommon();

              window.onAuthReturn = function(service) {
                AnimotoFramework.trackPageEvent('play-page', 'contact_auth_callback_' + service);
                AnimotoFramework.initTextBoxList();
                var serviceName = service == 'google' ? 'Gmail' : (service == 'live' ? 'MSN' : 'Yahoo');
                $('#shareEmail .serviceName').text(serviceName);
                $('#shareEmail .preImport').hide();
                $('#shareEmail .postImport').show();
              };

              window.onAuthReturnError = function(message) {
                alert(message);
              };
            },

            parseContacts: function(data) {
              var values = [];
              var lines = data.split('\n');

              for(var i=0; i<lines.length; i++){
                var line = lines[i].split('\t');
                var email  = line[0];
                var name   = line[1];
                var source = line[2];
                if (!name) name = email;
                values.push([ 
                  email, 
                  name, 
                  null, 
                  name + "<br /><small class='autocomplete_address'>(" + email + ")</small>"
                ]);
              }
              return values;
            }

    };
}();

function reloadCaptcha(){
    Recaptcha.reload();
    pageTracker._trackPageEvent('sign-up','recaptcha-' + captchaReloaded);
    captchaReloaded++;
}

var captchaReloaded = 1;

function disableEnterKey(e){
     var key;
     if(window.event)
          key = window.event.keyCode;     //IE
     else
          key = e.which;     //firefox
     if(key == 13)
          return false;
     else
          return true;
}