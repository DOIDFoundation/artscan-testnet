System.register(["./index-legacy.ee83bdde.js","./entire-legacy.97c4c91a.js","./vendor-legacy.5567aa4d.js"],(function(e,t){"use strict";var s,r,o,n;return{setters:[e=>{s=e.T,r=e.g},null,e=>{o=e.y,n=e.e}],execute:function(){var t=Object.defineProperty,i=Object.getOwnPropertyDescriptor;let a=class extends(s("")){render(){return o`<strong class="block w-24 h-24 m-12 mx-auto" href="/"><img class="w-full h-full object-contain select-none pointer-events-none" src="${"/assets/doid-15c8a698.svg"}"></strong><div class="my-8 text-center"><strong class="block"><slot name="h1"></slot></strong><slot name="msg"></slot></div>`}};a=((e,s,r,o)=>{for(var n,a=o>1?void 0:o?i(s,r):s,l=e.length-1;l>=0;l--)(n=e[l])&&(a=(o?n(s,r,a):n(a))||a);return o&&a&&t(s,r,a),a})([n("doid-symbol")],a);var l=Object.defineProperty,c=Object.getOwnPropertyDescriptor;let d=e("ViewHome",class extends(s("")){constructor(){super(...arguments),this.goto=e=>{const{token:t,uri:s,DOID:o}=e.detail;t.name?r(`/collection/${s}`):r(`/artist/${o.doid}`)}}render(){return o`<div class="home"><div class="dui-container"><doid-symbol><span slot="h1">ARTSCAN</span><p slot="msg">Authentic art, with Web3 artist signature</p></doid-symbol><div class="max-w-2xl mx-auto"><doid-search-entire @search="${this.goto}" placeholder="Search by DOID artist signature/artwork"><span slot="label">DOID of artist or artwork</span></doid-search-entire></div></div></div>`}});e("ViewHome",d=((e,t,s,r)=>{for(var o,n=r>1?void 0:r?c(t,s):t,i=e.length-1;i>=0;i--)(o=e[i])&&(n=(r?o(t,s,n):o(n))||n);return r&&n&&l(t,s,n),n})([n("view-home")],d))}}}));
