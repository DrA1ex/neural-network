(self.webpackChunkneural_network=self.webpackChunkneural_network||[]).push([[592],{3131:function(t,s,e){"use strict";e.d(s,{w:function(){return i}});var r=e(809),n=e(196);class a{constructor(t,s){var e;this.neuronCnt=t,this.prevLayer=s;const n=(null===(e=this.prevLayer)||void 0===e?void 0:e.neuronCnt)||0;this.values=r.bM(this.neuronCnt),n>0?(this.biases=r.MX(this.neuronCnt,-1,1),this.backWeights=r.o1(this.neuronCnt,n)):(this.biases=[],this.backWeights=[])}}class i{constructor(...t){this.layers=new Array(t.length),this.learningRate=.01;for(let s=0;s<t.length;s++)this.layers[s]=new a(t[s],s>0?this.layers[s-1]:void 0)}train(t,s,e=!0){const n=this.compute(t);let a=r.lu(s,n);return this.trainByError(a,e)}trainByError(t,s=!0){for(let e=this.layers.length-2;e>=0;e--){const a=this.layers[e+1],i=this.layers[e],u=r.yH(r.dC(t,n.DV(a.values)),this.learningRate);let h;s?(h=a.backWeights,r.BU(a.biases,u)):h=r.Pj(a.backWeights);for(let t=0;t<a.neuronCnt;t++)r.BU(h[t],r.yH(i.values,u[t]));null!==i.prevLayer&&(t=r.Kk(h,t))}return t}compute(t){let s=this.layers[0];s.values=t;for(let e=1;e<this.layers.length;e++){const t=this.layers[e];for(let e=0;e<t.backWeights.length;e++)t.values[e]=n.oM(r.AK(t.backWeights[e],s.values)+t.biases[e]);s=t}return this.layers[this.layers.length-1].values}getSnapshot(){return{weights:this.layers.slice(1).map(t=>t.backWeights.map(t=>r.JG(t))),biases:this.layers.slice(1).map(t=>r.JG(t.biases))}}}},3515:function(t,s,e){"use strict";function r(t){const s=function(t){return[Number.parseInt(t.substr(1,2),16),Number.parseInt(t.substr(3,2),16),Number.parseInt(t.substr(5,2),16)]}(t);return 4278190080|s[2]<<16|s[1]<<8|s[0]}function n(t,s,e){const r=t>>16&255,n=t>>8&255,a=255&t;return((s>>16&255)-r)*(e=Math.max(0,Math.min(1,e)))+r<<16|((s>>8&255)-n)*e+n<<8|((255&s)-a)*e+a|4278190080}e.d(s,{h0:function(){return r},a4:function(){return n}})}}]);