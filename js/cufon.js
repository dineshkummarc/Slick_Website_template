var Cufon=(function(){var L=function(){return L.replace.apply(null,arguments)};var V=L.DOM={ready:(function(){var a=false,c={loaded:1,complete:1};var Z=[],b=function(){if(a){return}a=true;for(var d;d=Z.shift();d()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",b,false);window.addEventListener("pageshow",b,false)}if(!window.opera&&document.readyState){(function(){c[document.readyState]?b():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");b()}catch(d){setTimeout(arguments.callee,1)}})()}P(window,"load",b);return function(d){if(!arguments.length){b()}else{a?d():Z.push(d)}}})()};var M=L.CSS={Size:function(a,Z){this.value=parseFloat(a);this.unit=String(a).match(/[a-z%]*$/)[0]||"px";this.convert=function(b){return b/Z*this.value};this.convertFrom=function(b){return b/this.value*Z};this.toString=function(){return this.value+this.unit}},color:I(function(a){var Z={};Z.color=a.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(c,b,d){Z.opacity=parseFloat(d);return"rgb("+b+")"});return Z}),getStyle:function(a){var Z=document.defaultView;if(Z&&Z.getComputedStyle){return new A(Z.getComputedStyle(a,null))}if(a.currentStyle){return new A(a.currentStyle)}return new A(a.style)},gradient:I(function(d){var e={id:d,type:d.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},a=d.substr(d.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var c=0,Z=a.length,b;c<Z;++c){b=a[c].split("=",2).reverse();e.stops.push([b[1]||c/(Z-1),b[0]])}return e}),quotedList:I(function(c){var b=[],a=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,Z;while(Z=a.exec(c)){b.push(Z[3]||Z[1])}return b}),recognizesMedia:I(function(c){var b=document.createElement("style"),a,Z;b.type="text/css";b.media=c;a=F("head")[0];a.insertBefore(b,a.firstChild);Z=!!(b.sheet||b.styleSheet);a.removeChild(b);return Z}),supports:function(b,a){var Z=document.createElement("span").style;if(Z[b]===undefined){return false}Z[b]=a;return Z[b]===a},textAlign:function(c,b,Z,a){if(b.get("textAlign")=="right"){if(Z>0){c=" "+c}}else{if(Z<a-1){c+=" "}}return c},textDecoration:function(e,d){if(!d){d=this.getStyle(e)}var a={underline:null,overline:null,"line-through":null};for(var Z=e;Z.parentNode&&Z.parentNode.nodeType==1;){var c=true;for(var b in a){if(!J(a,b)||a[b]){continue}if(d.get("textDecoration").indexOf(b)!=-1){a[b]=d.get("color")}c=false}if(c){break}d=this.getStyle(Z=Z.parentNode)}return a},textShadow:I(function(d){if(d=="none"){return null}var c=[],e={},Z,a=0;var b=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(Z=b.exec(d)){if(Z[0]==","){c.push(e);e={},a=0}else{if(Z[1]){e.color=Z[1]}else{e[["offX","offY","blur"][a++]]=Z[2]}}}c.push(e);return c}),textTransform:function(a,Z){return a[{uppercase:"toUpperCase",lowercase:"toLowerCase"}[Z.get("textTransform")]||"toString"]()},whiteSpace:(function(){var Z={inline:1,"inline-block":1,"run-in":1};return function(c,a,b){if(Z[a.get("display")]){return c}if(!b.previousSibling){c=c.replace(/^\s+/,"")}if(!b.nextSibling){c=c.replace(/\s+$/,"")}return c}})()};M.ready=(function(){var b=!M.recognizesMedia("all"),a=false;var Z=[],d=function(){b=true;for(var g;g=Z.shift();g()){}};var e=F("link"),f={stylesheet:1};function c(){var h,g,j;for(g=0;j=e[g];++g){if(j.disabled||!f[j.rel.toLowerCase()]||!M.recognizesMedia(j.media||"screen")){continue}h=j.sheet||j.styleSheet;if(!h||h.disabled){return false}}return true}V.ready(function(){if(!a){a=M.getStyle(document.body).isUsable()}if(b||(a&&c())){d()}else{setTimeout(arguments.callee,10)}});return function(g){if(b){g()}else{Z.push(g)}}})();function R(a){var Z=this.face=a.face;this.glyphs=a.glyphs;this.kerning=a.kerning;this.w=a.w;this.baseSize=parseInt(Z["units-per-em"],10);this.family=Z["font-family"].toLowerCase();this.weight=Z["font-weight"];this.style=Z["font-style"]||"normal";this.viewBox=(function(){var c=Z.bbox.split(/\s+/);var b={minX:parseInt(c[0],10),minY:parseInt(c[1],10),maxX:parseInt(c[2],10),maxY:parseInt(c[3],10)};b.width=b.maxX-b.minX,b.height=b.maxY-b.minY;b.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return b})();this.ascent=-parseInt(Z.ascent,10);this.descent=-parseInt(Z.descent,10);this.height=-this.ascent+this.descent}function E(){var a={},Z={oblique:"italic",italic:"oblique"};this.add=function(b){(a[b.style]||(a[b.style]={}))[b.weight]=b};this.get=function(f,g){var e=a[f]||a[Z[f]]||a.normal||a.italic||a.oblique;if(!e){return null}g={normal:400,bold:700}[g]||parseInt(g,10);if(e[g]){return e[g]}var c={1:1,99:0}[g%100],i=[],d,b;if(c===undefined){c=g>400}if(g==500){g=400}for(var h in e){if(!J(e,h)){continue}h=parseInt(h,10);if(!d||h<d){d=h}if(!b||h>b){b=h}i.push(h)}if(g<d){g=d}if(g>b){g=b}i.sort(function(k,j){return(c?(k>g&&j>g)?k<j:k>j:(k<g&&j<g)?k>j:k<j)?-1:1});return e[i[0]]}}function Q(){function b(d,e){if(d.contains){return d.contains(e)}return d.compareDocumentPosition(e)&16}function Z(f){var d=f.relatedTarget;if(!d||b(this,d)){return}a(this)}function c(d){a(this)}function a(d){setTimeout(function(){L.replace(d,D.get(d).options,true)},10)}this.attach=function(d){if(d.onmouseenter===undefined){P(d,"mouseover",Z);P(d,"mouseout",Z)}else{P(d,"mouseenter",c);P(d,"mouseleave",c)}}}function Y(){var b={},Z=0;function a(c){return c.cufid||(c.cufid=++Z)}this.get=function(c){var d=a(c);return b[d]||(b[d]={})}}function A(Z){var b={},a={};this.extend=function(c){for(var d in c){if(J(c,d)){b[d]=c[d]}}return this};this.get=function(c){return b[c]!=undefined?b[c]:Z[c]};this.getSize=function(d,c){return a[d]||(a[d]=new M.Size(this.get(d),c))};this.isUsable=function(){return !!Z}}function P(a,Z,b){if(a.addEventListener){a.addEventListener(Z,b,false)}else{if(a.attachEvent){a.attachEvent("on"+Z,function(){return b.call(a,window.event)})}}}function T(a,Z){var b=D.get(a);if(b.options){return a}if(Z.hover&&Z.hoverables[a.nodeName.toLowerCase()]){B.attach(a)}b.options=Z;return a}function I(Z){var a={};return function(b){if(!J(a,b)){a[b]=Z.apply(null,arguments)}return a[b]}}function C(e,d){if(!d){d=M.getStyle(e)}var a=M.quotedList(d.get("fontFamily").toLowerCase()),c;for(var b=0,Z=a.length;b<Z;++b){c=a[b];if(H[c]){return H[c].get(d.get("fontStyle"),d.get("fontWeight"))}}return null}function F(Z){return document.getElementsByTagName(Z)}function J(a,Z){return a.hasOwnProperty(Z)}function G(){var Z={},b,d;for(var c=0,a=arguments.length;b=arguments[c],c<a;++c){for(d in b){if(J(b,d)){Z[d]=b[d]}}}return Z}function N(c,m,a,n,d,b){var k=n.separate;if(k=="none"){return X[n.engine].apply(null,arguments)}var j=document.createDocumentFragment(),f;var g=m.split(O[k]),Z=(k=="words");if(Z&&S){if(/^\s/.test(m)){g.unshift("")}if(/\s$/.test(m)){g.push("")}}for(var h=0,e=g.length;h<e;++h){f=X[n.engine](c,Z?M.textAlign(g[h],a,h,e):g[h],a,n,d,b,h<e-1);if(f){j.appendChild(f)}}return j}function K(a,i){var b,Z,c,f,e,h;for(c=T(a,i).firstChild;c;c=e){f=c.nodeType;e=c.nextSibling;h=false;if(f==1){if(!c.firstChild){continue}if(!/cufon/.test(c.className)){arguments.callee(c,i);continue}else{h=true}}else{if(f!=3){continue}}if(!Z){Z=M.getStyle(a).extend(i)}if(!b){b=C(a,Z)}if(!b){continue}if(h){X[i.engine](b,null,Z,i,c,a);continue}var g=M.whiteSpace(c.data,Z,c);if(g===""){continue}var d=N(b,g,Z,i,c,a);if(d){c.parentNode.replaceChild(d,c)}else{c.parentNode.removeChild(c)}}}var S=" ".split(/\s+/).length==0;var D=new Y();var B=new Q();var W=[];var X={},H={},U={enableTextDecoration:false,engine:null,hover:false,hoverables:{a:true},printable:true,selector:(window.Sizzle||(window.jQuery&&function(Z){return jQuery(Z)})||(window.dojo&&dojo.query)||(window.$$&&function(Z){return $$(Z)})||(window.$&&function(Z){return $(Z)})||(document.querySelectorAll&&function(Z){return document.querySelectorAll(Z)})||F),separate:"words",textShadow:"none"};var O={words:/[^\S\u00a0]+/,characters:""};L.now=function(){V.ready();return L};L.refresh=function(){var b=W.splice(0,W.length);for(var a=0,Z=b.length;a<Z;++a){L.replace.apply(null,b[a])}return L};L.registerEngine=function(a,Z){if(!Z){return L}X[a]=Z;return L.set("engine",a)};L.registerFont=function(b){var Z=new R(b),a=Z.family;if(!H[a]){H[a]=new E()}H[a].add(Z);return L.set("fontFamily",'"'+a+'"')};L.replace=function(b,a,Z){a=G(U,a);if(!a.engine){return L}if(typeof a.textShadow=="string"){a.textShadow=M.textShadow(a.textShadow)}if(typeof a.color=="string"&&/^-/.test(a.color)){a.textGradient=M.gradient(a.color)}if(!Z){W.push(arguments)}if(b.nodeType||typeof b=="string"){b=[b]}M.ready(function(){for(var d=0,c=b.length;d<c;++d){var e=b[d];if(typeof e=="string"){L.replace(a.selector(e),a,true)}else{K(e,a)}}});return L};L.set=function(Z,a){U[Z]=a;return L};return L})();Cufon.registerEngine("canvas",(function(){var B=document.createElement("canvas");if(!B||!B.getContext||!B.getContext.apply){return}B=null;var A=Cufon.CSS.supports("display","inline-block");var E=!A&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var F=document.createElement("style");F.type="text/css";F.appendChild(document.createTextNode(".cufon-canvas{text-indent:0}@media screen,projection{.cufon-canvas{display:inline;display:inline-block;position:relative;vertical-align:middle"+(E?"":";font-size:1px;line-height:1px")+"}.cufon-canvas .cufon-alt{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden}"+(A?".cufon-canvas canvas{position:relative}":".cufon-canvas canvas{position:absolute}")+"}@media print{.cufon-canvas{padding:0 !important}.cufon-canvas canvas{display:none}.cufon-canvas .cufon-alt{display:inline}}"));document.getElementsByTagName("head")[0].appendChild(F);function D(O,H){var M=0,L=0;var G=[],N=/([mrvxe])([^a-z]*)/g,J;generate:for(var I=0;J=N.exec(O);++I){var K=J[2].split(",");switch(J[1]){case"v":G[I]={m:"bezierCurveTo",a:[M+~~K[0],L+~~K[1],M+~~K[2],L+~~K[3],M+=~~K[4],L+=~~K[5]]};break;case"r":G[I]={m:"lineTo",a:[M+=~~K[0],L+=~~K[1]]};break;case"m":G[I]={m:"moveTo",a:[M=~~K[0],L=~~K[1]]};break;case"x":G[I]={m:"closePath"};break;case"e":break generate}H[G[I].m].apply(H,G[I].a)}return G}function C(K,J){for(var I=0,H=K.length;I<H;++I){var G=K[I];J[G.m].apply(J,G.a)}}return function(AD,Z,u,V,d,AE){var I=(Z===null);if(I){Z=d.alt}var b=AD.viewBox;var K=u.getSize("fontSize",AD.baseSize);var s=u.get("letterSpacing");s=(s=="normal")?0:K.convertFrom(parseInt(s,10));var c=0,t=0,r=0,X=0;var a=V.textShadow,p=[];if(a){for(var AC=a.length;AC--;){var h=a[AC];var o=K.convertFrom(parseFloat(h.offX));var n=K.convertFrom(parseFloat(h.offY));p[AC]=[o,n];if(n<c){c=n}if(o>t){t=o}if(n>r){r=n}if(o<X){X=o}}}var AH=Cufon.CSS.textTransform(Z,u).split(""),T;var J=AD.glyphs,W,M,w;var G=0,P,f=[];for(var AC=0,AA=0,v=AH.length;AC<v;++AC){W=J[T=AH[AC]]||AD.missingGlyph;if(!W){continue}if(M){G-=w=M[T]||0;f[AA-1]-=w}G+=P=f[AA++]=~~(W.w||AD.w)+s;M=W.k}if(P===undefined){return null}t+=b.width-P;X+=b.minX;var U,L;if(I){U=d;L=d.firstChild}else{U=document.createElement("span");U.className="cufon cufon-canvas";U.alt=Z;L=document.createElement("canvas");U.appendChild(L);if(V.printable){var z=document.createElement("span");z.className="cufon-alt";z.appendChild(document.createTextNode(Z));U.appendChild(z)}}var AI=U.style;var m=L.style;var H=K.convert(b.height);var AG=Math.ceil(H);var q=AG/H;L.width=Math.ceil(K.convert(G*q+t-X));L.height=Math.ceil(K.convert(b.height-c+r));c+=b.minY;m.top=Math.round(K.convert(c-AD.ascent))+"px";m.left=Math.round(K.convert(X))+"px";var S=Math.ceil(K.convert(G*q))+"px";if(A){AI.width=S;AI.height=K.convert(AD.height)+"px"}else{AI.paddingLeft=S;AI.paddingBottom=(K.convert(AD.height)-1)+"px"}var AF=L.getContext("2d"),e=H/b.height;AF.scale(e,e*q);AF.translate(-X,-c);AF.lineWidth=AD.face["underline-thickness"];AF.save();function N(i,g){AF.strokeStyle=g;AF.beginPath();AF.moveTo(0,i);AF.lineTo(G,i);AF.stroke()}var O=V.enableTextDecoration?Cufon.CSS.textDecoration(AE,u):{};if(O.underline){N(-AD.face["underline-position"],O.underline)}if(O.overline){N(AD.ascent,O.overline)}function AB(){AF.scale(q,1);for(var x=0,k=0,g=AH.length;x<g;++x){var y=J[AH[x]]||AD.missingGlyph;if(!y){continue}if(y.d){AF.beginPath();if(y.code){C(y.code,AF)}else{y.code=D("m"+y.d,AF)}AF.fill()}AF.translate(f[k++],0)}AF.restore()}if(a){for(var AC=a.length;AC--;){var h=a[AC];AF.save();AF.fillStyle=h.color;AF.translate.apply(AF,p[AC]);AB()}}var R=V.textGradient;if(R){var Y=R.stops,Q=AF.createLinearGradient(0,b.minY,0,b.maxY);for(var AC=0,v=Y.length;AC<v;++AC){Q.addColorStop.apply(Q,Y[AC])}AF.fillStyle=Q}else{AF.fillStyle=u.get("color")}AB();if(O["line-through"]){N(-AD.descent,O["line-through"])}return U}})());Cufon.registerEngine("vml",(function(){if(!document.namespaces){return}if(document.namespaces.cvml==null){document.namespaces.add("cvml","urn:schemas-microsoft-com:vml")}var B=document.createElement("cvml:shape");B.style.behavior="url(#default#VML)";if(!B.coordsize){return}B=null;document.write('<style type="text/css">.cufon-vml-canvas{text-indent:0}@media screen{cvml\\:shape,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute}.cufon-vml-canvas{position:absolute;text-align:left}.cufon-vml{display:inline-block;position:relative;vertical-align:middle}.cufon-vml .cufon-alt{position:absolute;left:-10000in;font-size:1px}a .cufon-vml{cursor:pointer}}@media print{.cufon-vml *{display:none}.cufon-vml .cufon-alt{display:inline}}</style>');function C(F,G){return A(F,/(?:em|ex|%)$/i.test(G)?"1em":G)}function A(I,J){if(/px$/i.test(J)){return parseFloat(J)}var H=I.style.left,G=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;I.style.left=J;var F=I.style.pixelLeft;I.style.left=H;I.runtimeStyle.left=G;return F}var E={};function D(K){var L=K.id;if(!E[L]){var I=K.stops,J=document.createElement("cvml:fill"),F=[];J.type="gradient";J.angle=180;J.focus="0";J.method="sigma";J.color=I[0][1];for(var H=1,G=I.length-1;H<G;++H){F.push(I[H][0]*100+"% "+I[H][1])}J.colors=F.join(",");J.color2=I[G][1];E[L]=J}return E[L]}return function(AB,b,v,Y,f,AC,t){var I=(b===null);if(I){b=f.alt}var d=AB.viewBox;var K=v.computedFontSize||(v.computedFontSize=new Cufon.CSS.Size(C(AC,v.get("fontSize"))+"px",AB.baseSize));var s=v.computedLSpacing;if(s==undefined){s=v.get("letterSpacing");v.computedLSpacing=s=(s=="normal")?0:~~K.convertFrom(A(AC,s))}var V,L;if(I){V=f;L=f.firstChild}else{V=document.createElement("span");V.className="cufon cufon-vml";V.alt=b;L=document.createElement("span");L.className="cufon-vml-canvas";V.appendChild(L);if(Y.printable){var y=document.createElement("span");y.className="cufon-alt";y.appendChild(document.createTextNode(b));V.appendChild(y)}if(!t){V.appendChild(document.createElement("cvml:shape"))}}var AH=V.style;var n=L.style;var G=K.convert(d.height),AE=Math.ceil(G);var r=AE/G;var q=d.minX,p=d.minY;n.height=AE;n.top=Math.round(K.convert(p-AB.ascent));n.left=Math.round(K.convert(q));AH.height=K.convert(AB.height)+"px";var P=Y.enableTextDecoration?Cufon.CSS.textDecoration(AC,v):{};var a=v.get("color");var AG=Cufon.CSS.textTransform(b,v).split(""),U;var J=AB.glyphs,Z,M,x;var F=0,g=[],o=0,Q;var S,c=Y.textShadow;for(var AA=0,z=0,w=AG.length;AA<w;++AA){Z=J[U=AG[AA]]||AB.missingGlyph;if(!Z){continue}if(M){F-=x=M[U]||0;g[z-1]-=x}F+=Q=g[z++]=~~(Z.w||AB.w)+s;M=Z.k}if(Q===undefined){return null}var T=-q+F+(d.width-Q);var AF=K.convert(T*r),u=Math.round(AF);var m=T+","+d.height,H;var e="r"+m+"ns";var R=Y.textGradient&&D(Y.textGradient);for(AA=0,z=0;AA<w;++AA){Z=J[AG[AA]]||AB.missingGlyph;if(!Z){continue}if(I){S=L.childNodes[z];if(S.firstChild){S.removeChild(S.firstChild)}}else{S=document.createElement("cvml:shape");L.appendChild(S)}S.stroked="f";S.coordsize=m;S.coordorigin=H=(q-o)+","+p;S.path=(Z.d?"m"+Z.d+"xe":"")+"m"+H+e;S.fillcolor=a;if(R){S.appendChild(R.cloneNode(false))}var AD=S.style;AD.width=u;AD.height=AE;if(c){var O=c[0],N=c[1];var X=Cufon.CSS.color(O.color),W;var h=document.createElement("cvml:shadow");h.on="t";h.color=X.color;h.offset=O.offX+","+O.offY;if(N){W=Cufon.CSS.color(N.color);h.type="double";h.color2=W.color;h.offset2=N.offX+","+N.offY}h.opacity=X.opacity||(W&&W.opacity)||1;S.appendChild(h)}o+=g[z++]}AH.width=Math.max(Math.ceil(K.convert(F*r)),0);return V}})());