module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=7)}([function(e,n,t){"use strict";e.exports=t(1)},function(e,n,t){"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(2),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,v=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function S(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||b}function j(){}function w(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||b}S.prototype.isReactComponent={},S.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,n,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=S.prototype;var x=w.prototype=new j;x.constructor=w,r(x,S.prototype),x.isPureReactComponent=!0;var _={current:null},O=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var r,o={},c=null,i=null;if(null!=n)for(r in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(c=""+n.key),n)O.call(n,r)&&!E.hasOwnProperty(r)&&(o[r]=n[r]);var a=arguments.length-2;if(1===a)o.children=t;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:u,type:e,key:c,ref:i,props:o,_owner:_.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var P=/\/+/g,R=[];function $(e,n,t,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=n,o.func=t,o.context=r,o.count=0,o}return{result:e,keyPrefix:n,func:t,context:r,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function A(e,n,t){return null==e?0:function e(n,t,r,o){var i=typeof n;"undefined"!==i&&"boolean"!==i||(n=null);var a=!1;if(null===n)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case u:case c:a=!0}}if(a)return r(o,n,""===t?"."+N(n,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(n))for(var l=0;l<n.length;l++){var f=t+N(i=n[l],l);a+=e(i,f,r,o)}else if(null===n||"object"!=typeof n?f=null:f="function"==typeof(f=h&&n[h]||n["@@iterator"])?f:null,"function"==typeof f)for(n=f.call(n),l=0;!(i=n.next()).done;)a+=e(i=i.value,f=t+N(i,l++),r,o);else if("object"===i)throw r=""+n,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(n).join(", ")+"}":r,""));return a}(e,"",n,t)}function N(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return n[e]}))}(e.key):n.toString(36)}function T(e,n){e.func.call(e.context,n,e.count++)}function I(e,n,t){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?U(e,r,t,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,n){return{$$typeof:u,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+t)),r.push(e))}function U(e,n,t,r,o){var u="";null!=t&&(u=(""+t).replace(P,"$&/")+"/"),A(e,I,n=$(n,u,r,o)),M(n)}var L={current:null};function q(){var e=L.current;if(null===e)throw Error(m(321));return e}var B={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:function(e,n,t){if(null==e)return e;var r=[];return U(e,r,null,n,t),r},forEach:function(e,n,t){if(null==e)return e;A(e,T,n=$(null,null,n,t)),M(n)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var n=[];return U(e,n,null,(function(e){return e})),n},only:function(e){if(!C(e))throw Error(m(143));return e}},n.Component=S,n.Fragment=i,n.Profiler=l,n.PureComponent=w,n.StrictMode=a,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,n.cloneElement=function(e,n,t){if(null==e)throw Error(m(267,e));var o=r({},e.props),c=e.key,i=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,a=_.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in n)O.call(n,f)&&!E.hasOwnProperty(f)&&(o[f]=void 0===n[f]&&void 0!==l?l[f]:n[f])}var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:u,type:e.type,key:c,ref:i,props:o,_owner:a}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:s,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:p,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},n.memo=function(e,n){return{$$typeof:y,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return q().useCallback(e,n)},n.useContext=function(e,n){return q().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return q().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return q().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return q().useLayoutEffect(e,n)},n.useMemo=function(e,n){return q().useMemo(e,n)},n.useReducer=function(e,n,t){return q().useReducer(e,n,t)},n.useRef=function(e){return q().useRef(e)},n.useState=function(e){return q().useState(e)},n.version="16.13.1"},function(e,n,t){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,i,a=c(e),l=1;l<arguments.length;l++){for(var f in t=Object(arguments[l]))o.call(t,f)&&(a[f]=t[f]);if(r){i=r(t);for(var s=0;s<i.length;s++)u.call(t,i[s])&&(a[i[s]]=t[i[s]])}}return a}},function(e,n,t){var r=t(4),o=t(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var u={insert:"head",singleton:!1};r(o,u);e.exports=o.locals||{}},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},u=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),c=[];function i(e){for(var n=-1,t=0;t<c.length;t++)if(c[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},r=[],o=0;o<e.length;o++){var u=e[o],a=n.base?u[0]+n.base:u[0],l=t[a]||0,f="".concat(a," ").concat(l);t[a]=l+1;var s=i(f),p={css:u[1],media:u[2],sourceMap:u[3]};-1!==s?(c[s].references++,c[s].updater(p)):c.push({identifier:f,updater:h(p,n),references:1}),r.push(f)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var c=u(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var f,s=(f=[],function(e,n){return f[e]=n,f.filter(Boolean).join("\n")});function p(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,o);else{var u=document.createTextNode(o),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(u,c[n]):e.appendChild(u)}}function d(e,n,t){var r=t.css,o=t.media,u=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),u&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var y=null,v=0;function h(e,n){var t,r,o;if(n.singleton){var u=v++;t=y||(y=l(n)),r=p.bind(null,t,u,!1),o=p.bind(null,t,u,!0)}else t=l(n),r=d.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);c[o].references--}for(var u=a(e,n),l=0;l<t.length;l++){var f=i(t[l]);0===c[f].references&&(c[f].updater(),c.splice(f,1))}t=u}}}},function(e,n,t){(n=t(6)(!1)).push([e.i,".nav {  \r\n    display: flex; \r\n    height: 100%;\r\n  }\r\n\r\n  .nav > div {\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-size: 2em;\r\n    color: #ffeead;\r\n    flex-grow: 1;\r\n  }\r\n  \r\n  .nav > div:nth-child(1) {\r\n    background-color: #96ceb4;\t\r\n  }\r\n  \r\n  .nav > div:nth-child(2) {\r\n    background-color: #ff6f69;\r\n  }\r\n  \r\n  .nav > div:nth-child(3) {\r\n    background-color: #88d8b0;\r\n  }\r\n\r\n  .nav > div:nth-child(4) {\r\n    background-color: #ff6f69;\r\n  }\r\n\r\n  .nav {\r\n    border: 5px solid #ffcc5c;\r\n  }\r\n  \r\n  ",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(c=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(a," */")),u=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(u).concat([o]).join("\n")}var c,i,a;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(o[c]=!0)}for(var i=0;i<e.length;i++){var a=[].concat(e[i]);r&&o[a[0]]||(t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),n.push(a))}},n}},function(e,n,t){"use strict";t.r(n),t.d(n,"AppButton",(function(){return u})),t.d(n,"WombatNav",(function(){return c}));var r=t(0),o=t.n(r);const u=e=>o.a.createElement("div",null,o.a.createElement("button",null,e.children));t(3);const c=e=>o.a.createElement("nav",{className:"nav"},o.a.createElement("div",null,"Home"),o.a.createElement("div",null,"Profile"),o.a.createElement("div",null,"Search ",o.a.createElement("input",{type:"textbox"})," "),o.a.createElement("div",null,"Logout"))}]);