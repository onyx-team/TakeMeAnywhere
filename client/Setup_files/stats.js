!function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}({0:function(t,e,r){t.exports=r(8)},8:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function n(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function i(t){var e=0;if(0===t.length)return e;for(var r=0;r<t.length;r++){var o=t.charCodeAt(r);e=(e<<5)-e+o,e&=e}return e}function s(){var t=document.querySelectorAll(".fa");return Array.apply(void 0,n(t)).map(function(t){var e=window.getComputedStyle(t,":before");return{classes:Array.apply(void 0,n(t.classList)),tag:t.tagName.toLowerCase(),title:t.getAttribute("title"),valid:!!e.content&&"FontAwesome"===e.fontFamily}})}function a(t){var e=i(t),r=window.localStorage.getItem(y);return!!r&&!!~JSON.parse(r).indexOf(e)}function u(t){var e=i(t),r=window.localStorage.getItem(y)||"[]",o=JSON.parse(r);o.push(e),window.localStorage.setItem(y,JSON.stringify(o))}function f(t){return!!Array.apply(void 0,n(t.split(","))).find(function(t){var e=new RegExp(t.trim().replace(".","\\.").replace("*","(.*)"));return window.location.host.match(e)})}function c(t){var e=window.FontAwesomeCdnConfig,r=e.faCdnUrl,o=e.code,n=window.FontAwesomeCdnConfig.reporting.domains,i=JSON.stringify({id:o,url:location.toString(),icons:t}),s=window.performance.navigation,c=s.type===s.TYPE_RELOAD;!f(n)||a(i)&&!c||fetch(r+"/api/embed-code-stats",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:i}).then(function(){u(i)})}r(23);var d=r(20),l=o(d),h=r(18),p=o(h),y="@fa-cdn("+i(window.location.host)+")";(0,p["default"])(function(){console&&console.log&&console.log("Font Awesome CDN reporting has been enabled");var t=window.FontAwesomeCdnConfig.asyncLoading.enabled,e=!t,r=(0,l["default"])(function(){e&&c(s())},100),o=new MutationObserver(r);window.FontAwesomeHooks={loaded:function(){e=!0,setTimeout(r,10)}};try{o.observe(document,{childList:!0,subtree:!0}),r()}catch(n){}})},18:function(t,e,r){/*!
	  * domready (c) Dustin Diaz 2014 - License MIT
	  */
!function(e,r){t.exports=r()}("domready",function(){var t,e=[],r=document,o=r.documentElement.doScroll,n="DOMContentLoaded",i=(o?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState);return i||r.addEventListener(n,t=function(){for(r.removeEventListener(n,t),i=1;t=e.shift();)t()}),function(t){i?setTimeout(t,0):e.push(t)}})},20:function(t,e){function r(t,e,r){function o(e){var r=y,o=m;return y=m=void 0,A=e,v=t.apply(o,r)}function i(t){return A=t,w=setTimeout(c,e),O?o(t):v}function s(t){var r=t-E,o=t-A,n=e-r;return _?T(n,b-o):n}function f(t){var r=t-E,o=t-A;return!E||r>=e||r<0||_&&o>=b}function c(){var t=x();return f(t)?d(t):void(w=setTimeout(c,s(t)))}function d(t){return clearTimeout(w),w=void 0,P&&y?o(t):(y=m=void 0,v)}function l(){void 0!==w&&clearTimeout(w),E=A=0,y=m=w=void 0}function h(){return void 0===w?v:d(x())}function p(){var t=x(),r=f(t);if(y=arguments,m=this,E=t,r){if(void 0===w)return i(E);if(_)return clearTimeout(w),w=setTimeout(c,e),o(E)}return void 0===w&&(w=setTimeout(c,e)),v}var y,m,b,v,w,E=0,A=0,O=!1,_=!1,P=!0;if("function"!=typeof t)throw new TypeError(u);return e=a(e)||0,n(r)&&(O=!!r.leading,_="maxWait"in r,b=_?g(a(r.maxWait)||0,e):b,P="trailing"in r?!!r.trailing:P),p.cancel=l,p.flush=h,p}function o(t){var e=n(t)?w.call(t):"";return e==c||e==d}function n(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function i(t){return!!t&&"object"==typeof t}function s(t){return"symbol"==typeof t||i(t)&&w.call(t)==l}function a(t){if("number"==typeof t)return t;if(s(t))return f;if(n(t)){var e=o(t.valueOf)?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(h,"");var r=y.test(t);return r||m.test(t)?b(t.slice(2),r?2:8):p.test(t)?f:+t}var u="Expected a function",f=NaN,c="[object Function]",d="[object GeneratorFunction]",l="[object Symbol]",h=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v=Object.prototype,w=v.toString,g=Math.max,T=Math.min,x=Date.now;t.exports=r},23:function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function o(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return y.iterable&&(e[Symbol.iterator]=function(){return e}),e}function n(t){this.map={},t instanceof n?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function s(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function a(t){var e=new FileReader;return e.readAsArrayBuffer(t),s(e)}function u(t){var e=new FileReader;return e.readAsText(t),s(e)}function f(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,"string"==typeof t)this._bodyText=t;else if(y.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(y.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(y.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(t){if(!y.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):y.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},y.blob?(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(a)},this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var t=i(this);return t?t:Promise.resolve(this._bodyText)},y.formData&&(this.formData=function(){return this.text().then(l)}),this.json=function(){return this.text().then(JSON.parse)},this}function c(t){var e=t.toUpperCase();return m.indexOf(e)>-1?e:t}function d(t,e){e=e||{};var r=e.body;if(d.prototype.isPrototypeOf(t)){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new n(t.headers)),this.method=t.method,this.mode=t.mode,r||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=t;if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new n(e.headers)),this.method=c(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function l(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function h(t){var e=new n,r=(t.getAllResponseHeaders()||"").trim().split("\n");return r.forEach(function(t){var r=t.trim().split(":"),o=r.shift().trim(),n=r.join(":").trim();e.append(o,n)}),e}function p(t,e){e||(e={}),this.type="default",this.status=e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText,this.headers=e.headers instanceof n?e.headers:new n(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var y={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};n.prototype.append=function(t,o){t=e(t),o=r(o);var n=this.map[t];n||(n=[],this.map[t]=n),n.push(o)},n.prototype["delete"]=function(t){delete this.map[e(t)]},n.prototype.get=function(t){var r=this.map[e(t)];return r?r[0]:null},n.prototype.getAll=function(t){return this.map[e(t)]||[]},n.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},n.prototype.set=function(t,o){this.map[e(t)]=[r(o)]},n.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(r){this.map[r].forEach(function(o){t.call(e,o,r,this)},this)},this)},n.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),o(t)},n.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),o(t)},n.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),o(t)},y.iterable&&(n.prototype[Symbol.iterator]=n.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this)},f.call(d.prototype),f.call(p.prototype),p.prototype.clone=function(){return new p(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})},p.error=function(){var t=new p(null,{status:0,statusText:""});return t.type="error",t};var b=[301,302,303,307,308];p.redirect=function(t,e){if(b.indexOf(e)===-1)throw new RangeError("Invalid status code");return new p(null,{status:e,headers:{location:t}})},t.Headers=n,t.Request=d,t.Response=p,t.fetch=function(t,e){return new Promise(function(r,o){function n(){return"responseURL"in s?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):void 0}var i;i=d.prototype.isPrototypeOf(t)&&!e?t:new d(t,e);var s=new XMLHttpRequest;s.onload=function(){var t={status:s.status,statusText:s.statusText,headers:h(s),url:n()},e="response"in s?s.response:s.responseText;r(new p(e,t))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials&&(s.withCredentials=!0),"responseType"in s&&y.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}});
//# sourceMappingURL=stats.js.map