!function(){"use strict";var n,t,e,r={8992:function(n,t,e){function*r(n,t){for(let e=n;e<t;++e)yield e}function*o(n,t){let e=0;for(const r of n)yield t(r,e),e+=1}function*u(n){const t=[];for(const e of n)t.push(e);for(let e=t.length-1;e>=0;e--)yield t[e]}function*f(n){const t=function(n){let t,e=n.length;for(;0!==e;)t=Math.floor(Math.random()*e),e--,[n[e],n[t]]=[n[t],n[e]];return n}(Array.from(r(0,n.length)));for(const e of t)yield n[e]}function*c(n,t){const e=Math.max(n.length,t.length);for(let r=0;r<e;r++)yield[n[r],t[r]]}function*i(n,t){const e=function*(n){for(const t of n)yield t}(n);for(;;){const n=Array.from(a(e,t));if(!(n.length>0))break;yield n}}function*a(n,t){const e=n[Symbol.iterator]();let r,o=0;for(;!1===(r=e.next()).done&&(yield r.value,++o,!(o>=t)););}e.d(t,{w6:function(){return r},UI:function(){return o},GY:function(){return u},yg:function(){return f},$R:function(){return c},uK:function(){return i}})},5307:function(n,t,e){e.d(t,{hl:function(){return o},q9:function(){return u},ZN:function(){return f},fe:function(){return c},B5:function(){return i},lu:function(){return a},BU:function(){return s},W0:function(){return l},bM:function(){return d},dW:function(){return p},MX:function(){return y},JG:function(){return g},o1:function(){return m},KM:function(){return w},Kk:function(){return M}});var r=e(8992);function o(n,t){return Array.from(r.UI(r.w6(0,t),n))}function u(n,t){return o(()=>n,t)}function f(n,t,e){const r=Math.min(n.length,t.length);for(let o=0;o<r;++o)n[o]=e(n[o],t[o])}function c(n,t,e,r){const o=Math.min(n.length,t.length),u=r||new Array(o);for(let f=0;f<o;++f)u[f]=e(n[f],t[f]);return u}function i(n,t,e){const r=n.length,o=e||new Array(r);for(let u=0;u<r;++u)o[u]=t(n[u],u);return o}function a(n,t,e){return c(n,t,(n,t)=>n-t,e)}function s(n,t){f(n,t,(n,t)=>n+t)}function l(n,t){return c(n,t,(n,t)=>n*t,n)}function h(n,t){const e=Math.min(n.length,t.length);let r=0,o=0;for(let u=0;u<e;++u){const e=n[u]*t[u]-o,f=r+e;o=f-r-e,r=f}return r}function d(n){return u(0,n)}function p(n,t){return o(()=>d(t),n)}function y(n,t=0,e=1){const r=e-t;return o(()=>t+Math.random()*r,n)}function g(n){return[...n]}function m(n,t,e=0,r=1){return o(n=>y(t,e,r),n)}function w(n,t,e){const r=n.length,o=e||new Array(r);for(let u=0;u<r;u++)o[u]=h(n[u],t);return o}function M(n,t){const e=new Array(n[0].length),r=Math.min(n.length,t.length);for(let o=0;o<e.length;++o){let u=0,f=0;for(let e=0;e<r;e++){const r=n[e][o]*t[e]-f,c=u+r;f=c-u-r,u=c}e[o]=u}return e}},9256:function(n,t,e){var r=e(8992),o=e(3515),u=e(5307),f=e(3430);const c=o.h0("#000000"),i=o.h0("#ffffff");let a,s,l=0,h=0,d=0,p=0,y=[16,[32,64],256],g=.01,m=w();function w(){function n(){return new f.Z.Optimizers.nesterov(g,.25)}function t(n){return new f.Z.Layers.Dense(n)}const[e,o,u]=y,c=new f.Z.Models.Sequential(n());c.addLayer(new f.Z.Layers.Dense(e));for(const r of o)c.addLayer(t(r));c.addLayer(new f.Z.Layers.Dense(u)),c.compile();const i=new f.Z.Models.Sequential(n());i.addLayer(new f.Z.Layers.Dense(u));for(const f of r.GY(o))i.addLayer(t(f));return i.addLayer(new f.Z.Layers.Dense(1)),i.compile(),new f.Z.Models.GAN(c,i,n())}function M(){const n=Math.floor(Math.sqrt(y[2])),t=5*n,e=v(5,n,()=>function(n){return n[Math.floor(Math.random()*n.length)]}(a)),r=v(5,n,()=>{const n=function(n,t=0,e=1){return u.MX(n,t,e)}(y[0]);return m.compute(n)});postMessage({type:"training_data",width:t,height:t,trainingData:e,generatedData:r,currentIteration:h},[e,r])}function v(n,t,e){const r=t*n,o=new Uint32Array(r*r);for(let u=0;u<n;u++)for(let f=0;f<n;f++){const n=b(e(u,f)),c=u*t,i=f*t;for(let e=0;e<n.length;e++){const u=e%t;o[(c+(e-u)/t)*r+i+u]=n[e]}}return o.buffer}function b(n){const t=new Uint32Array(n.length);for(let e=0;e<n.length;e++)t[e]=o.a4(c,i,n[e]);return t}addEventListener("message",({data:n})=>{var t;function e(){n.params&&(y=n.params),m=w(),h=0,d=Math.max(1,Math.floor(a.length/200)),p=Math.ceil(a.length/d),a&&a.length>0&&M(),postMessage({type:"progress",epoch:1,batchNo:1,batchCount:p,speed:0})}switch(n.type){case"refresh":n.learningRate&&(g=n.learningRate),3===(null===(t=null==n?void 0:n.layers)||void 0===t?void 0:t.length)&&(y=n.layers),e();break;case"set_data":a=n.data,e()}}),setTimeout(function n(){try{!function(){if(!m||!a||0===a.length)return;const n=performance.now();let t=n,e=0,o=0;for(;;){if(h%p==0&&(s=Array.from(r.uK(r.yg(a),d))),m.trainBatch(s[h%p]),++e>o){const n=(performance.now()-t)/e;o=333.3333333333333/n,postMessage({type:"progress",epoch:Math.floor(h/p)+1,batchNo:h%p+1,batchCount:p,speed:1e3/n}),e=0,t=performance.now()}if(++h,h%10==0&&performance.now()-n>500)break}postMessage({type:"progress",epoch:Math.floor(h/p)+1,batchNo:h%p+1});const u=performance.now();u-l>1e3&&(M(),l=u,console.log(`*** DRAW took ${(performance.now()-u).toFixed(2)}ms`))}()}finally{m&&a&&0!==a.length?setTimeout(n,0):setTimeout(n,1e3)}},0)}},o={};function u(n){var t=o[n];if(void 0!==t)return t.exports;var e=o[n]={exports:{}};return r[n](e,e.exports,u),e.exports}u.m=r,u.x=function(){var n=u.O(void 0,[440],function(){return u(9256)});return u.O(n)},n=[],u.O=function(t,e,r,o){if(!e){var f=1/0;for(a=0;a<n.length;a++){e=n[a][0],r=n[a][1],o=n[a][2];for(var c=!0,i=0;i<e.length;i++)(!1&o||f>=o)&&Object.keys(u.O).every(function(n){return u.O[n](e[i])})?e.splice(i--,1):(c=!1,o<f&&(f=o));c&&(n.splice(a--,1),t=r())}return t}o=o||0;for(var a=n.length;a>0&&n[a-1][2]>o;a--)n[a]=n[a-1];n[a]=[e,r,o]},u.d=function(n,t){for(var e in t)u.o(t,e)&&!u.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},u.f={},u.e=function(n){return Promise.all(Object.keys(u.f).reduce(function(t,e){return u.f[e](n,t),t},[]))},u.u=function(n){return n+"-es2017.352aa0b08f290bd8e59b.js"},u.miniCssF=function(n){},u.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},u.tu=function(n){return void 0===t&&(t={createScriptURL:function(n){return n}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(t=trustedTypes.createPolicy("angular#bundler",t))),t.createScriptURL(n)},u.p="",function(){var n={256:1};u.f.i=function(t,e){n[t]||importScripts(u.tu(u.p+u.u(t)))};var t=self.webpackChunkneural_network=self.webpackChunkneural_network||[],e=t.push.bind(t);t.push=function(t){var r=t[0],o=t[1],f=t[2];for(var c in o)u.o(o,c)&&(u.m[c]=o[c]);for(f&&f(u);r.length;)n[r.pop()]=1;e(t)}}(),e=u.x,u.x=function(){return u.e(440).then(e)},u.x()}();