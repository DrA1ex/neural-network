!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(e,n)||r(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=r(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==t.return||t.return()}finally{if(u)throw i}}}}function r(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}!function(){"use strict";var r,t,o,a={8992:function(e,r,t){var o=regeneratorRuntime.mark(i),a=regeneratorRuntime.mark(c);function i(e,n){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=e;case 1:if(!(r<n)){t.next=7;break}return t.next=4,r;case 4:++r,t.next=1;break;case 7:case"end":return t.stop()}},o)}function c(e,r){var t,o,i,c;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t=0,o=n(e),a.prev=2,o.s();case 4:if((i=o.n()).done){a.next=11;break}return c=i.value,a.next=8,r(c,t);case 8:t+=1;case 9:a.next=4;break;case 11:a.next=16;break;case 13:a.prev=13,a.t0=a.catch(2),o.e(a.t0);case 16:return a.prev=16,o.f(),a.finish(16);case 19:case"end":return a.stop()}},a,null,[[2,13,16,19]])}t.d(r,{w6:function(){return i},UI:function(){return c}})},3402:function(r,t,o){function a(e,n){for(var r=0,t=0;t<e.length;t++)r+=Math.pow(n[t]-e[t],2);return r/e.length}var i=o(3515),c=[13,7,5],u=i.h0("#e72525"),f=i.h0("#2562e7"),s=o(6851),l=y(c,.01),p=[],v=0,d=0;function y(e,r){var t=new s.Z.Models.Sequential(new s.Z.Optimizers.nesterov(.25,r));t.addLayer(new s.Z.Layers.Dense(2));var o,a=n(e);try{for(a.s();!(o=a.n()).done;){var i=o.value;t.addLayer(new s.Z.Layers.Dense(i,"sigmoid","xavier"))}}catch(c){a.e(c)}finally{a.f()}return t.addLayer(new s.Z.Layers.Dense(1)),t.compile(),t}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.25,n=performance.now();if(!(n-d<41.666666666666664)){for(var r=1/640/e,t=1/480/e,o=Math.ceil(1/r),a=Math.ceil(1/t),c=new Uint32Array(o*a),s=0;s<o;s++)for(var p=0;p<a;p++){var y=l.compute([s*r,p*t]);c[p*o+s]=i.a4(u,f,y[0])}var h={type:"training_data",iteration:v,state:c.buffer,nnSnapshot:l.getSnapshot(),width:o,height:a,t:performance.now()};d=n,postMessage(h,[c.buffer]),console.log("*** Computing ".concat((performance.now()-n).toFixed(2),"ms"))}}addEventListener("message",function(e){var n,r,t=e.data;switch(t.type){case"add_point":p.push(t.point),v=0;break;case"set_points":p=t.points,v=0;break;case"refresh":var o=(null===(n=t.config)||void 0===n?void 0:n.layers)||c,a=(null===(r=t.config)||void 0===r?void 0:r.learningRate)||.01;l=y(o,a),v=0}}),setTimeout(function n(){try{!function(){var n=5e6-v;if(!(n<=0||0===p.length)){var r,t=performance.now(),o=p.map(function(e){return[[e.x,e.y],[e.type]]});for(r=0;r<n;r++){var i=o[Math.floor(Math.random()*o.length)];if(l.train(i[0],i[1]),r%1e4==0&&performance.now()-t>10.416666666666666)break}var c=performance.now()-t;console.log("*** BATCH FINISHED with ".concat(r," in ").concat(c.toFixed(2),"ms (").concat((r/c).toFixed(2)," op/ms)")),(v+=r)>=5e6?(d=0,console.log("*** DATA SET TRAINING FINISHED ***"),function(n,r){if(0!==r.length){console.log("***");for(var t=0,o=0;o<r.length;o++){var i=e(r[o],2),c=i[0],u=i[1],f=n.compute(c),s=f.map(function(e){return e.toFixed(2)}),l=u.map(function(e){return e.toFixed(2)}),p=a(u,f);console.log("INPUT ".concat(c," OUTPUT ").concat(s," EXPECTED ").concat(l," (accuracy ").concat((100*p).toFixed(2),"%)")),t+=p}console.log("TOTAL ACCURACY: ".concat((t/r.length).toFixed(2),"%")),console.log("***")}}(l,o),h(2)):h()}}()}finally{v<5e6&&p.length>0?setTimeout(n,3):setTimeout(n,1e3)}},0)}},i={};function c(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={exports:{}};return a[e](r,r.exports,c),r.exports}c.m=a,c.x=function(){var e=c.O(void 0,[742],function(){return c(3402)});return c.O(e)},r=[],c.O=function(e,n,t,o){if(!n){var a=1/0;for(f=0;f<r.length;f++){n=r[f][0],t=r[f][1],o=r[f][2];for(var i=!0,u=0;u<n.length;u++)(!1&o||a>=o)&&Object.keys(c.O).every(function(e){return c.O[e](n[u])})?n.splice(u--,1):(i=!1,o<a&&(a=o));i&&(r.splice(f--,1),e=t())}return e}o=o||0;for(var f=r.length;f>0&&r[f-1][2]>o;f--)r[f]=r[f-1];r[f]=[n,t,o]},c.d=function(e,n){for(var r in n)c.o(n,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce(function(n,r){return c.f[r](e,n),n},[]))},c.u=function(e){return e+"-es2017.9cdf382509bca7134c1c.js"},c.miniCssF=function(e){},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.tu=function(e){return void 0===t&&(t={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(t=trustedTypes.createPolicy("angular#bundler",t))),t.createScriptURL(e)},c.p="",function(){var e={761:1};c.f.i=function(n,r){e[n]||importScripts(c.tu(c.p+c.u(n)))};var n=self.webpackChunkneural_network=self.webpackChunkneural_network||[],r=n.push.bind(n);n.push=function(n){var t=n[0],o=n[1],a=n[2];for(var i in o)c.o(o,i)&&(c.m[i]=o[i]);for(a&&a(c);t.length;)e[t.pop()]=1;r(n)}}(),o=c.x,c.x=function(){return c.e(742).then(o)},c.x()}()}();