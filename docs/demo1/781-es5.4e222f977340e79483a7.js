!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,a,o=[],i=!0,u=!1;try{for(e=e.call(n);!(i=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){u=!0,a=c}finally{try{i||null==e.return||e.return()}finally{if(u)throw a}}return o}(n,t)||c(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,a,o){return(t=e()?Reflect.construct:function(n,t,e){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(n,a));return e&&r(o,e.prototype),o}).apply(null,arguments)}function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(n){return!1}}function r(n,t){return(r=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function a(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function i(n){return function(n){if(Array.isArray(n))return l(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||c(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=c(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,a=function(){};return{s:a,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return i=n.done,n},e:function(n){u=!0,o=n},f:function(){try{i||null==e.return||e.return()}finally{if(u)throw o}}}}function c(n,t){if(n){if("string"==typeof n)return l(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(n,t):void 0}}function l(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}!function(){"use strict";function e(n,t){for(var e=Math.max(n.length,t.length),r=new Array(e),a=0;a<e;a++)r[a]=[n[a],t[a]];return r}function r(n,t){return Array.from(regeneratorRuntime.mark(function n(t,e){var r,a,o,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r=0,a=u(t),n.prev=2,a.s();case 4:if((o=a.n()).done){n.next=11;break}return i=o.value,n.next=8,e(i,r);case 8:r+=1;case 9:n.next=4;break;case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),a.e(n.t0);case 16:return n.prev=16,a.f(),n.finish(16);case 19:case"end":return n.stop()}},n,null,[[2,13,16,19]])})(regeneratorRuntime.mark(function n(t,e){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r=0;case 1:if(!(r<e)){n.next=7;break}return n.next=4,r;case 4:++r,n.next=1;break;case 7:case"end":return n.stop()}},n)})(0,t),n))}function c(n,t,e){for(var r=Math.min(n.length,t.length),a=new Array(r),o=0;o<r;++o)a[o]=e(n[o],t[o]);return a}function l(n,t){for(var e=n.length,r=new Array(e),a=0;a<e;++a)r[a]=t(n[a]);return r}function f(n,t){!function(n,t,e){for(var r=Math.min(n.length,t.length),a=0;a<r;++a)n[a]=n[a]+t[a]}(n,t)}function s(n,t){return l(n,function(n){return n*t})}function h(n,t){for(var e=Math.min(n.length,t.length),r=0,a=0,o=0;o<e;++o){var i=n[o]*t[o]-a,u=r+i;a=u-r-i,r=u}return r}function v(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=e-t;return r(function(){return t+Math.random()*a},n)}function y(n){return i(n)}function p(n){var t,e=0,r=u(n);try{for(r.s();!(t=r.n()).done;){e+=t.value}}catch(a){r.e(a)}finally{r.f()}return e}function g(n,t){for(var e=new Array(n[0].length),r=Math.min(n.length,t.length),a=0;a<e.length;++a){for(var o=0,i=0,u=0;u<r;u++){var c=n[u][a]*t[u]-i,l=o+c;i=l-o-c,o=l}e[a]=o}return e}var m=function n(t,e){var a;o(this,n),this.neuronCnt=t,this.prevLayer=e;var i=(null===(a=this.prevLayer)||void 0===a?void 0:a.neuronCnt)||0;this.values=r(function(){return 0},this.neuronCnt),i>0?(this.biases=v(this.neuronCnt,-1,1),this.backWeights=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return r(function(n){return v(t,e,a)},n)}(this.neuronCnt,i)):(this.biases=[],this.backWeights=[])},d=function(){function n(){o(this,n),this.layers=new Array(arguments.length),this.learningRate=.01;for(var t=0;t<arguments.length;t++)this.layers[t]=new m(t<0||arguments.length<=t?void 0:arguments[t],t>0?this.layers[t-1]:void 0)}var t,e,r;return t=n,(e=[{key:"train",value:function(n,t){for(var e=c(t,this.compute(n),function(n,t){return n-t}),r=this.layers.length-2;r>=0;r--){for(var a=this.layers[r+1],o=this.layers[r],i=s(c(e,l(a.values,function(n){return n*(1-n)}),function(n,t){return n*t}),this.learningRate),u=0;u<a.neuronCnt;u++)f(a.backWeights[u],s(o.values,i[u]));f(a.biases,i),null!==o.prevLayer&&(e=g(a.backWeights,e))}}},{key:"compute",value:function(n){var t,e=this.layers[0];e.values=n;for(var r=1;r<this.layers.length;r++){for(var a=this.layers[r],o=0;o<a.backWeights.length;o++)a.values[o]=(t=h(a.backWeights[o],e.values)+a.biases[o],1/(1+Math.exp(-t)));e=a}return this.layers[this.layers.length-1].values}},{key:"getSnapshot",value:function(){return{weights:this.layers.slice(1).map(function(n){return n.backWeights.map(function(n){return y(n)})}),biases:this.layers.slice(1).map(function(n){return y(n.biases)})}}}])&&a(t.prototype,e),r&&a(t,r),n}(),b=[13,7,5],w=t(d,[2].concat(b,[1]));w.learningRate=.01;var A=[],k=0,x=0;addEventListener("message",function(n){var e,r,a=n.data;switch(a.type){case"add_point":A.push(a.point),k=0;break;case"set_points":A=a.points,k=0;break;case"refresh":var o=(null===(e=a.config)||void 0===e?void 0:e.layers)||b,u=(null===(r=a.config)||void 0===r?void 0:r.learningRate)||.01;(w=t(d,[2].concat(i(o),[1]))).learningRate=u,k=0}}),setTimeout(function t(){try{!function(){var t=5e6-k;if(!(t<=0||0===A.length)){var r,a=performance.now(),o=A.map(function(n){return[[n.x,n.y],[n.type]]});for(r=0;r<t;r++){var i=o[Math.floor(Math.random()*o.length)];if(w.train(i[0],i[1]),r%1e4==0&&performance.now()-a>10.416666666666666)break}(k+=r)>=5e6&&(x=0,console.log("*** DATA SET TRAINING FINISHED ***"),function(t,r){if(0!==r.length){console.log("***");for(var a=0,o=0;o<r.length;o++){var i=n(r[o],2),u=i[0],c=i[1],l=t.compute(u),f=l.map(function(n){return n.toFixed(2)}),s=c.map(function(n){return n.toFixed(2)}),h=e(c,l).map(function(t){var e=n(t,2),r=e[0],a=e[1];return 100-100*Math.abs(r-a)}),v=h.map(function(n){return n.toFixed(1)});console.log("INPUT ".concat(u," OUTPUT ").concat(f," EXPECTED ").concat(s," (accuracy ").concat(v,"%)")),a+=p(h)}console.log("TOTAL ACCURACY: ".concat((a/r.length/r[0][1].length).toFixed(2),"%")),console.log("***")}}(w,o)),function(){var n=performance.now();if(!(n-x<41.666666666666664)){for(var t=Math.ceil(160),e=Math.ceil(120),r=new Uint32Array(t*e),a=0;a<t;a++)for(var o=0;o<e;o++){var i=w.compute([.00625*a,.008333333333333333*o]);r[o*t+a]=4283957454|(255*i[0]&255)<<8}var u={type:"training_data",iteration:k,state:r.buffer,nnSnapshot:w.getSnapshot(),width:t,height:e,t:performance.now()};x=n,postMessage(u,[r.buffer]),console.log("*** Computing ".concat((performance.now()-n).toFixed(2),"ms"))}}()}}()}finally{k<5e6&&A.length>0?setTimeout(t,3):setTimeout(t,1e3)}},0)}()}();