!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,a,o=[],u=!0,i=!1;try{for(r=r.call(e);!(u=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);u=!0);}catch(c){i=!0,a=c}finally{try{u||null==r.return||r.return()}finally{if(i)throw a}}return o}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||t(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,u=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw u}}}}function t(e,n){if(e){if("string"==typeof e)return a(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,n):void 0}}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}!function(){"use strict";var t,a,o,u={8992:function(e,n,t){var a=regeneratorRuntime.mark(l),o=regeneratorRuntime.mark(h),u=regeneratorRuntime.mark(v),i=regeneratorRuntime.mark(p),c=regeneratorRuntime.mark(d),f=regeneratorRuntime.mark(y),s=regeneratorRuntime.mark(m);function l(e,n){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=e;case 1:if(!(r<n)){t.next=7;break}return t.next=4,r;case 4:++r,t.next=1;break;case 7:case"end":return t.stop()}},a)}function h(e,n){var t,a,u,i;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:t=0,a=r(e),o.prev=2,a.s();case 4:if((u=a.n()).done){o.next=11;break}return i=u.value,o.next=8,n(i,t);case 8:t+=1;case 9:o.next=4;break;case 11:o.next=16;break;case 13:o.prev=13,o.t0=o.catch(2),a.e(o.t0);case 16:return o.prev=16,a.f(),o.finish(16);case 19:case"end":return o.stop()}},o,null,[[2,13,16,19]])}function v(e){var n,t,a,o,i;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:n=[],t=r(e);try{for(t.s();!(a=t.n()).done;)o=a.value,n.push(o)}catch(c){t.e(c)}finally{t.f()}i=n.length-1;case 4:if(!(i>=0)){u.next=10;break}return u.next=7,n[i];case 7:i--,u.next=4;break;case 10:case"end":return u.stop()}},u)}function p(e){var n,t,a,o;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:n=function(e){for(var n,r=e.length;0!==r;){var t;n=Math.floor(Math.random()*r),r--,t=[e[n],e[r]],e[r]=t[0],e[n]=t[1]}return e}(Array.from(l(0,e.length))),t=r(n),u.prev=2,t.s();case 4:if((a=t.n()).done){u.next=10;break}return o=a.value,u.next=8,e[o];case 8:u.next=4;break;case 10:u.next=15;break;case 12:u.prev=12,u.t0=u.catch(2),t.e(u.t0);case 15:return u.prev=15,t.f(),u.finish(15);case 18:case"end":return u.stop()}},i,null,[[2,12,15,18]])}function d(e,n){var r,t;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:r=Math.max(e.length,n.length),t=0;case 2:if(!(t<r)){a.next=8;break}return a.next=5,[e[t],n[t]];case 5:t++,a.next=2;break;case 8:case"end":return a.stop()}},c)}function y(e,n){var t,a;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:t=regeneratorRuntime.mark(function e(n){var t,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=r(n),e.prev=1,t.s();case 3:if((a=t.n()).done){e.next=9;break}return o=a.value,e.next=7,o;case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:case"end":return e.stop()}},e,null,[[1,11,14,17]])})(e);case 1:if((a=Array.from(m(t,n))).length>0){o.next=4;break}return o.abrupt("break",8);case 4:return o.next=6,a;case 6:o.next=1;break;case 8:case"end":return o.stop()}},f)}function m(e,n){var r,t,a;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:r=e[Symbol.iterator](),a=0;case 2:if(o.t0=!1===(t=r.next()).done,!o.t0){o.next=8;break}return o.next=6,t.value;case 6:++a,o.t0=!(a>=n);case 8:if(!o.t0){o.next=12;break}case 10:o.next=2;break;case 12:case"end":return o.stop()}},s)}t.d(n,{w6:function(){return l},UI:function(){return h},GY:function(){return v},yg:function(){return p},$R:function(){return d},uK:function(){return y}})},5307:function(e,r,t){t.d(r,{hl:function(){return o},q9:function(){return u},ZN:function(){return i},fe:function(){return c},B5:function(){return f},lu:function(){return s},BU:function(){return l},W0:function(){return h},bM:function(){return p},dW:function(){return d},MX:function(){return y},JG:function(){return m},o1:function(){return g},KM:function(){return b},Kk:function(){return w}});var a=t(8992);function o(e,n){return Array.from(a.UI(a.w6(0,n),e))}function u(e,n){return o(function(){return e},n)}function i(e,n,r){for(var t=Math.min(e.length,n.length),a=0;a<t;++a)e[a]=r(e[a],n[a])}function c(e,n,r,t){for(var a=Math.min(e.length,n.length),o=t||new Array(a),u=0;u<a;++u)o[u]=r(e[u],n[u]);return o}function f(e,n,r){for(var t=e.length,a=r||new Array(t),o=0;o<t;++o)a[o]=n(e[o],o);return a}function s(e,n,r){return c(e,n,function(e,n){return e-n},r)}function l(e,n){i(e,n,function(e,n){return e+n})}function h(e,n){return c(e,n,function(e,n){return e*n},e)}function v(e,n){for(var r=Math.min(e.length,n.length),t=0,a=0,o=0;o<r;++o){var u=e[o]*n[o]-a,i=t+u;a=i-t-u,t=i}return t}function p(e){return u(0,e)}function d(e,n){return o(function(){return p(n)},e)}function y(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,t=r-n;return o(function(){return n+Math.random()*t},e)}function m(e){return n(e)}function g(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return o(function(e){return y(n,r,t)},e)}function b(e,n,r){for(var t=e.length,a=r||new Array(t),o=0;o<t;o++)a[o]=v(e[o],n);return a}function w(e,n){for(var r=new Array(e[0].length),t=Math.min(e.length,n.length),a=0;a<r.length;++a){for(var o=0,u=0,i=0;i<t;i++){var c=e[i][a]*n[i]-u,f=o+c;u=f-o-c,o=f}r[a]=o}return r}},9256:function(n,t,a){var o,u,i=a(8992),c=a(3515),f=a(5307),s=a(3430),l=c.h0("#000000"),h=c.h0("#ffffff"),v=0,p=0,d=0,y=0,m=[16,[32,64],256],g=.01,b=w();function w(){function n(){return new s.Z.Optimizers.nesterov(g,.25)}function t(e){return new s.Z.Layers.Dense(e)}var a=e(m,3),o=a[0],u=a[1],c=a[2],f=new s.Z.Models.Sequential(n());f.addLayer(new s.Z.Layers.Dense(o));var l,h=r(u);try{for(h.s();!(l=h.n()).done;){var v=l.value;f.addLayer(t(v))}}catch(w){h.e(w)}finally{h.f()}f.addLayer(new s.Z.Layers.Dense(c)),f.compile();var p=new s.Z.Models.Sequential(n());p.addLayer(new s.Z.Layers.Dense(c));var d,y=r(i.GY(u));try{for(y.s();!(d=y.n()).done;){var b=d.value;p.addLayer(t(b))}}catch(w){y.e(w)}finally{y.f()}return p.addLayer(new s.Z.Layers.Dense(1)),p.compile(),new s.Z.Models.GAN(f,p,n())}function x(){var e=Math.floor(Math.sqrt(m[2])),n=5*e,r=k(5,e,function(){return function(e){return e[Math.floor(Math.random()*e.length)]}(o)}),t=k(5,e,function(){var e=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return f.MX(e,n,r)}(m[0]);return b.compute(e)});postMessage({type:"training_data",width:n,height:n,trainingData:r,generatedData:t,currentIteration:p},[r,t])}function k(e,n,r){for(var t=n*e,a=new Uint32Array(t*t),o=0;o<e;o++)for(var u=0;u<e;u++)for(var i=M(r(o,u)),c=o*n,f=u*n,s=0;s<i.length;s++){var l=s%n;a[(c+(s-l)/n)*t+f+l]=i[s]}return a.buffer}function M(e){for(var n=new Uint32Array(e.length),r=0;r<e.length;r++)n[r]=c.a4(l,h,e[r]);return n}addEventListener("message",function(e){var n,r=e.data;function t(){r.params&&(m=r.params),b=w(),p=0,d=Math.max(1,Math.floor(o.length/200)),y=Math.ceil(o.length/d),o&&o.length>0&&x(),postMessage({type:"progress",epoch:1,batchNo:1,batchCount:y,speed:0})}switch(r.type){case"refresh":r.learningRate&&(g=r.learningRate),3===(null===(n=null==r?void 0:r.layers)||void 0===n?void 0:n.length)&&(m=r.layers),t();break;case"set_data":o=r.data,t()}}),setTimeout(function e(){try{!function(){if(b&&o&&0!==o.length){for(var e=performance.now(),n=e,r=0,t=0;;){if(p%y==0&&(u=Array.from(i.uK(i.yg(o),d))),b.trainBatch(u[p%y]),++r>t){var a=(performance.now()-n)/r;t=333.3333333333333/a,postMessage({type:"progress",epoch:Math.floor(p/y)+1,batchNo:p%y+1,batchCount:y,speed:1e3/a}),r=0,n=performance.now()}if(++p%10==0&&performance.now()-e>500)break}postMessage({type:"progress",epoch:Math.floor(p/y)+1,batchNo:p%y+1});var c=performance.now();c-v>1e3&&(x(),v=c,console.log("*** DRAW took ".concat((performance.now()-c).toFixed(2),"ms")))}}()}finally{b&&o&&0!==o.length?setTimeout(e,0):setTimeout(e,1e3)}},0)}},i={};function c(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={exports:{}};return u[e](r,r.exports,c),r.exports}c.m=u,c.x=function(){var e=c.O(void 0,[440],function(){return c(9256)});return c.O(e)},t=[],c.O=function(e,n,r,a){if(!n){var o=1/0;for(f=0;f<t.length;f++){n=t[f][0],r=t[f][1],a=t[f][2];for(var u=!0,i=0;i<n.length;i++)(!1&a||o>=a)&&Object.keys(c.O).every(function(e){return c.O[e](n[i])})?n.splice(i--,1):(u=!1,a<o&&(o=a));u&&(t.splice(f--,1),e=r())}return e}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[n,r,a]},c.d=function(e,n){for(var r in n)c.o(n,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce(function(n,r){return c.f[r](e,n),n},[]))},c.u=function(e){return e+"-es2017.352aa0b08f290bd8e59b.js"},c.miniCssF=function(e){},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.tu=function(e){return void 0===a&&(a={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(a=trustedTypes.createPolicy("angular#bundler",a))),a.createScriptURL(e)},c.p="",function(){var e={256:1};c.f.i=function(n,r){e[n]||importScripts(c.tu(c.p+c.u(n)))};var n=self.webpackChunkneural_network=self.webpackChunkneural_network||[],r=n.push.bind(n);n.push=function(n){var t=n[0],a=n[1],o=n[2];for(var u in a)c.o(a,u)&&(c.m[u]=a[u]);for(o&&o(c);t.length;)e[t.pop()]=1;r(n)}}(),o=c.x,c.x=function(){return c.e(440).then(o)},c.x()}()}();