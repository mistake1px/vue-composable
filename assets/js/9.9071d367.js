(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{317:function(e,t,r){"use strict";r.r(t);var n=r(19),u=r(60),a={name:"axios-example",setup:function(){var e=Object(n.g)(1),t=Object(u.c)(),r=t.data,a=t.loading,o=t.exec,c=(t.error,t.status);return Object(n.h)(e,(function(e){o({method:"GET",url:"https://reqres.in/api/user/"+e})})),{id:e,data:r,loading:a,status:c}}},o=r(2),c=Object(o.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v("current Id "+e._s(e.id))]),e._v(" "),r("p",[r("button",{on:{click:function(t){e.id--}}},[e._v("prev")]),e._v(" "),r("button",{on:{click:function(t){e.id++}}},[e._v("next")])]),e._v(" "),e.loading?r("p",[e._v("loading...")]):r("div",[r("p",[e._v("Status: "+e._s(e.status))]),e._v("\n    "+e._s(e.data)+"\n  ")])])}),[],!1,null,null,null);t.default=c.exports},60:function(e,t,r){"use strict";r.d(t,"a",(function(){return I})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return J})),r.d(t,"d",(function(){return P})),r.d(t,"e",(function(){return j})),r.d(t,"f",(function(){return D})),r.d(t,"g",(function(){return C})),r.d(t,"h",(function(){return w})),r.d(t,"i",(function(){return k})),r.d(t,"j",(function(){return R})),r.d(t,"k",(function(){return m})),r.d(t,"l",(function(){return E})),r.d(t,"m",(function(){return L})),r.d(t,"n",(function(){return A}));r(71),r(72),r(73),r(65),r(63),r(74),r(75),r(62),r(76),r(77),r(68);var n=r(69),u=(r(78),r(79),r(80),r(81)),a=(r(64),r(82)),o=r(83),c=r(19),i=r(84),l=r.n(i);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){return Object(c.c)(e)?e:Object(c.g)(e)}var b=function(e){return"function"==typeof e},p=function(e){return d(e)&&b(e.getTime)},d=function(e){return null!==e&&"object"===Object(o.a)(e)};function g(e){return d(e)&&b(e.then)&&b(e.catch)}function O(e){return new Promise((function(t){setTimeout(t,e)}))}function j(e,t,r,n){var u=f(e),a=function(){return u.value.removeEventListener(t,r)};return Object(c.d)((function(){return u.value.addEventListener(t,r,n)})),Object(c.e)(a),a}function m(e){var t=f(e.currentPage),r=f(e.pageSize),n=Object(c.g)(0),u=f(e.total),a=Object(c.a)({get:function(){return n.value},set:function(e){"number"==typeof e&&(n.value=Math.min(e,u.value))}}),o=Object(c.a)({get:function(){return t.value},set:function(e){var r,n,u;"number"==typeof e&&(t.value=(r=e,n=1,u=l.value,r<n?n:r>u?u:r),a.value=(t.value-1)*i.value)}}),i=Object(c.a)({get:function(){return r.value},set:function(e){"number"==typeof e&&(r.value=e)}}),l=Object(c.a)((function(){return Math.ceil(u.value/i.value)}));o.value=t.value;return Object(c.h)([u,i],(function(){o.value>l.value&&(o.value=l.value)}),{lazy:!0}),{pageSize:i,total:u,currentPage:o,offset:a,lastPage:l,next:function(){return++o.value},prev:function(){return--o.value},first:function(){return o.value=1},last:function(){return o.value=l.value}}}function y(e,t){var r=f(e),n=m(v({},{currentPage:1,pageSize:10},{},t,{total:Object(c.a)((function(){return r.value.length}))})),u=Object(c.a)((function(){var e=r.value;return Array.isArray(e)?e.slice(n.offset.value,n.offset.value+n.pageSize.value):[]}));return v({},n,{result:u})}function h(e,t){return x(e,t)}function x(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{isImmediate:!1};return function(){for(var u=arguments.length,a=new Array(u),o=0;o<u;o++)a[o]=arguments[o];var c=this,i=function(){t=void 0,n.isImmediate||e.apply(c,a)},l=n.isImmediate&&void 0===t;void 0!==t&&clearTimeout(t),t=setTimeout(i,r),l&&e.apply(c,a)}}function w(e,t,r){var n=Object(c.g)(0),u=Object(c.g)(0),a=function(e){n.value=e.x,u.value=e.y},o="number"==typeof t?void 0:t;("number"==typeof t?t:r)&&(a=h(a,r));var i=j(e,"mousemove",a,o);return{mouseX:n,mouseY:u,remove:i}}function k(e,t,r){var n=f(e),u=Object(c.g)(n.value&&n.value.clientHeight),a=Object(c.g)(n.value&&n.value.clientWidth),o=function(){u.value=n.value.clientHeight,a.value=n.value.clientWidth},i="number"==typeof t?void 0:t;("number"==typeof t?t:r)&&(o=h(o,r));var l=j(n,"resize",o,i);return{height:u,width:a,remove:l}}function R(e,t,r){var n=f(e),u=Object(c.g)(n.value&&n.value.scrollTop),a=Object(c.g)(n.value&&n.value.scrollLeft),o=function(e){u.value=n.value.scrollTop,a.value=n.value.scrollLeft},i="number"==typeof t?void 0:t;("number"==typeof t?t:r)&&(o=h(o,r));var l=j(n,"scroll",o,i);return{scrollTop:u,scrollLeft:a,remove:l}}function E(e){if(!e)throw new Error("[usePromise] argument can't be '".concat(e,"'"));if("function"!=typeof e)throw new Error("[usePromise] expects function, but received ".concat(Object(o.a)(e)));var t=Object(c.g)(!1),r=Object(c.g)(null),n=Object(c.g)(null),a=Object(c.g)();return{exec:function(){var o=Object(u.a)(regeneratorRuntime.mark((function u(){var o,c,i=arguments;return regeneratorRuntime.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t.value=!0,r.value=null,n.value=null,o=a.value=e.apply(void 0,i),u.prev=4,u.next=7,o;case 7:return c=u.sent,a.value===o&&(n.value=c),u.abrupt("return",c);case 12:return u.prev=12,u.t0=u.catch(4),a.value===o&&(r.value=u.t0,n.value=null),u.abrupt("return",void 0);case 16:return u.prev=16,a.value===o&&(t.value=!1),u.finish(16);case 19:case"end":return u.stop()}}),u,null,[[4,12,16,19]])})));return function(){return o.apply(this,arguments)}}(),result:n,promise:a,loading:t,error:r}}function P(e){var t=Object(c.g)(!1),r=void 0,n=function(e){return new Promise((function(n,u){r=function(e){t.value=!0,u(e)},e.then(n).catch(u)}))};return v({},E((function(){return n(e.apply(void 0,arguments))})),{cancel:function(e){return r(e)},cancelled:t})}var S=Symbol(void 0),T=Symbol(void 0),_=function(){var e=Object(u.a)(regeneratorRuntime.mark((function e(t,r,u,a){var c,i,l,s,v,f,b,d,j,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=r[S].value,i=-1,l=t.maxRetries||9001,s=t.retryDelay||z,r.retryErrors.value=[],r.isRetrying.value=!1,r.nextRetry.value=void 0,v=void 0;case 8:if(f=!1,b=null,e.prev=10,++i,!g(b=a?u.apply(void 0,Object(n.a)(a)):u())){e.next=17;break}return e.next=16,b;case 16:b=e.sent;case 17:if(!r[T].value){e.next=19;break}return e.abrupt("return",null);case 19:f=!0,e.next=26;break;case 22:e.prev=22,e.t0=e.catch(10),b=null,r.retryErrors.value.push(e.t0);case 26:if(c===r[S].value){e.next=28;break}return e.abrupt("return",b);case 28:if(!f){e.next=32;break}return r.isRetrying.value=!1,r.nextRetry.value=void 0,e.abrupt("return",b);case 32:if(!(i>=l)){e.next=36;break}return r.isRetrying.value=!1,r.nextRetry.value=void 0,e.abrupt("return",Promise.reject(new Error("[useRetry] max retries reached ".concat(l))));case 36:if(r.isRetrying.value=!0,d=Date.now(),!g(j=s(i))){e.next=45;break}return e.next=42,j;case 42:e.t1=e.sent,e.next=46;break;case 45:e.t1=j;case 46:if(m=e.t1,g(j)&&!m){e.next=61;break}if("number"!=typeof m){e.next=52;break}v=m,e.next=57;break;case 52:if(!p(m)){e.next=56;break}v=m.getTime(),e.next=57;break;case 56:throw new Error("[useRetry] invalid value received from options.retryDelay '".concat(Object(o.a)(m),"'"));case 57:if(v<d?r.nextRetry.value=d+v:(r.nextRetry.value=v,v-=d),!(v>0)){e.next=61;break}return e.next=61,O(v);case 61:if(!r[T].value){e.next=63;break}return e.abrupt("return",null);case 63:if(c===r[S].value){e.next=65;break}return e.abrupt("return",b);case 65:if(i<9e3){e.next=8;break}case 66:return e.abrupt("return",null);case 67:case"end":return e.stop()}}),e,null,[[10,22]])})));return function(t,r,n,u){return e.apply(this,arguments)}}();function L(e,t){var r,n=!e||b(e)?{}:e,u=b(e)?e:t;if(!b(e)&&!d(e))throw new Error("[useRetry] options needs to be 'object'");if(u&&!b(u))throw new Error("[useRetry] factory needs to be 'function'");var o=Object(c.g)(!1),i=Object(c.g)(),l=Object(c.g)([]),s={value:!1},f=(r={isRetrying:o,retryCount:Object(c.a)((function(){return l.value.length})),nextRetry:i,retryErrors:l},Object(a.a)(r,S,{value:0}),Object(a.a)(r,T,s),r),p=u?function(){++f[S].value;for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return _(n,f,u,t)}:function(e){return++f[S].value,_(n,f,e,void 0)};return v({},f,{cancel:function(){f.isRetrying.value=!1,f.retryErrors.value.push(new Error("[useRetry] cancelled")),f.nextRetry.value=void 0,s.value=!0},exec:p})}var I=function(e){var t=100*Math.pow(2,e);return t+.2*t*Math.random()},z=function(){return 0};function D(e){var t=Object(c.g)(null),r=Object(c.g)(null),n=!e||!1!==e.isJson,a=!e||!1!==e.parseImmediate,o=E(function(){var e=Object(u.a)(regeneratorRuntime.mark((function e(u,o){var c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u,o);case 2:if(c=e.sent,!n){e.next=8;break}if(i=c.json().then((function(e){return t.value=e})).catch((function(e){t.value=null,r.value=e})),!a){e.next=8;break}return e.next=8,i;case 8:return e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),i=Object(c.a)((function(){return o.result.value&&o.result.value.status||null})),l=Object(c.a)((function(){return o.result.value&&o.result.value.statusText||null}));return v({},o,{json:t,jsonError:r,status:i,statusText:l})}var M=l.a||globalThis&&globalThis.axios;function J(e){var t=M.create(e),r=Object(c.a)((function(){return t})),n=E(function(){var e=Object(u.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.request(r));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a=Object(c.a)((function(){return n.result.value&&n.result.value.data||n.error.value&&n.error.value.response&&n.error.value.response.data||null})),o=Object(c.a)((function(){return n.result.value&&n.result.value.status||n.error.value&&n.error.value.response&&n.error.value.response.status||null})),i=Object(c.a)((function(){return n.result.value&&n.result.value.statusText||n.error.value&&n.error.value.response&&n.error.value.response.statusText||null}));return v({},n,{client:r,data:a,status:o,statusText:i})}function A(e,t){var r=new WebSocket(e,t),n=Object(c.g)(null),u=Object(c.g)(),a=Object(c.g)(null),o=Object(c.g)(!1),i=Object(c.g)(!1),l=Object(c.g)(!1);r.addEventListener("message",(function(e){n.value=e,a.value=e.data})),r.addEventListener("error",(function(e){u.value=e,l.value=!0})),r.addEventListener("close",(function(){o.value=!1,i.value=!0})),r.addEventListener("open",(function(){o.value=!0,i.value=!1}));return{ws:r,send:function(e){return r.send(e)},close:function(e,t){r.close(e,t)},messageEvent:n,errorEvent:u,data:a,isOpen:o,isClosed:i,errored:l}}var W=new Map,q=new WeakMap;function C(e,t){var r=!1,n=W.get(e),u=localStorage.getItem(e),a=n&&q.get(n)||!!t&&f(t)||Object(c.g)(null);if(u&&!n)try{a.value=JSON.parse(u),r=!1}catch(t){console.warn("[useLocalStorage] error parsing value from localStorage",e,t)}n||(n={},W.set(e,n),q.set(n,a),Object(c.h)(a,(function(t){void 0!==t?x((function(){return localStorage.setItem(e,JSON.stringify(t))}),100)():localStorage.removeItem(e)}),{deep:!0,lazy:r}));return{storage:a,clear:function(){W.forEach((function(e){var t=q.get(e);t&&(t.value=void 0),q.delete(e)})),W.clear()},remove:function(){W.delete(e),q.delete(n),a.value=void 0}}}}}]);