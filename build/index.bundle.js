(()=>{var e={426:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(81),o=r.n(n),c=r(645),a=r.n(c),s=r(667),i=r.n(s),u=new URL(r(985),r.b),l=a()(o()),p=i()(u);l.push([e.id,".hello{\n    color: red;\n    text-transform: uppercase;\n    background: url("+p+");\n}",""]);const d=l},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(a[i]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&a[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},522:e=>{e.exports=[["to","from","heading","body"],["Mary","John","Reminder","Call Cindy on Tuesday"],["Zoe","Bill","Reminder","Buy orange juice"],["Autumn","Lindsey","Letter","I miss you"]]},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var c={},a=[],s=0;s<e.length;s++){var i=e[s],u=n.base?i[0]+n.base:i[0],l=c[u]||0,p="".concat(u," ").concat(l);c[u]=l+1;var d=r(p),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var m=o(f,n);n.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var c=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var s=r(c[a]);t[s].references--}for(var i=n(e,o),u=0;u<c.length;u++){var l=r(c[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=i}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var c=r.sourceMap;c&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},845:(e,t,r)=>{"use strict";function n(){console.log("I get called from print.js!")}r.d(t,{Z:()=>n})},985:(e,t,r)=>{"use strict";e.exports=r.p+"d9329cb95d247e02f3d8.png"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={id:n,exports:{}};return e[n](c,c.exports,r),c.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,(()=>{"use strict";var e=r(379),t=r.n(e),n=r(795),o=r.n(n),c=r(569),a=r.n(c),s=r(565),i=r.n(s),u=r(216),l=r.n(u),p=r(589),d=r.n(p),f=r(426),m={};m.styleTagTransform=d(),m.setAttributes=i(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=r(985),v=r(522),g=r.n(v);const y=JSON.parse('{"T":"YAML Example","c":{"u2":"Tom Preston-Werner"}}'),b=JSON.parse('{"T":"JSON5 Example","c":{"u2":"Tom Preston-Werner"}}');var x=r(845);console.log(y.T),console.log(y.c.u2),console.log(b.T),console.log(b.c.u2),document.body.appendChild(function(){const e=document.createElement("div"),t=document.createElement("button");e.innerHTML="hi web",e.classList.add("hello");const r=new Image;return r.src=h,e.appendChild(r),console.log(g()),t.innerHTML="Click me and check the console!",t.onclick=x.Z,e.appendChild(t),e}())})()})();