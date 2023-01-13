import{T as u,m as $,g as x}from"./index-e13c8d95.js";import"./entire-396e4430.js";import{y as a,u as D,n as d,m,e as v,j as y,k as p}from"./vendor-c8c15b27.js";import{g as _,a as O,b as k}from"./list-db61542b.js";const w="";var I=Object.defineProperty,C=Object.getOwnPropertyDescriptor,b=(e,t,n,i)=>{for(var s=i>1?void 0:i?C(t,n):t,r=e.length-1,l;r>=0;r--)(l=e[r])&&(s=(i?l(t,n,s):l(s))||s);return i&&s&&I(t,n,s),s};let g=class extends u(w){constructor(){super(...arguments),this.items=[],this.class=""}connectedCallback(){super.connectedCallback()}render(){return a`<div class="inline-flex gap-1 ${this.class}">${D(this.items,(e,t)=>a`${d(e.url,()=>a`<dui-link link href="${e.url}">${e.name}</dui-link>`,()=>a`<span>${e.name}</span>`)} ${d(t<this.items.length-1,()=>a`<span class="inline-block mx-1 text-gray-400">/</span>`)}`)}</div>`}};b([m()],g.prototype,"items",2);b([m()],g.prototype,"class",2);g=b([v("coll-breadcrumb")],g);const P="";var N=Object.defineProperty,j=Object.getOwnPropertyDescriptor,c=(e,t,n,i)=>{for(var s=i>1?void 0:i?j(t,n):t,r=e.length-1,l;r>=0;r--)(l=e[r])&&(s=(i?l(t,n,s):l(s))||s);return i&&s&&N(t,n,s),s};let o=class extends u(P){constructor(){super(...arguments),this.item={},this.pending=!1,this.err="",this.ts=0,this.meta={},this.getMeta=async()=>{this.meta=await _(this.item)}}get doid(){var e;return(e=this.DOID)==null?void 0:e.doid}get doidName(){var e;return(e=this.DOID)==null?void 0:e.name}get token(){var e;return(e=this.DOID)==null?void 0:e.token}get minter(){var e,t;return(t=(e=this.token)==null?void 0:e.minter)!=null?t:""}get tokenID(){var e,t;return(t=(e=this.token)==null?void 0:e.tokenID)!=null?t:""}get slugName(){var e,t;return(t=(e=this.token)==null?void 0:e.slugName)!=null?t:""}get slugID(){var e,t;return(t=(e=this.token)==null?void 0:e.slugID)!=null?t:""}get address(){return this.item.address}get empty(){var e;return!this.pending&&!!this.ts&&!((e=this.meta)!=null&&e.name)}get opensea(){const e=`${O("url")}/${this.address}/${this.tokenID}`;return{url:e,origin:new URL(e).origin}}get scan(){return`${$().scan}/address/${this.address}`}async getCollection(){if(!this.pending&&(this.slugName||this.tokenID||this.minter)){this.pending=!0,this.err="";try{const e=await k(this);this.item=e||{},await this.getMeta()}catch(e){this.err=e.message||e}this.ts++,this.pending=!1}}async connectedCallback(){super.connectedCallback(),await this.getCollection()}render(){return a`<div class="comp-collection">${d(this.empty,()=>a``,()=>a`${d(this.pending,()=>a`<loading-icon></loading-icon>`,()=>a`${d(!this.err,()=>{var e,t,n,i;return a`<div class="my-4 grid grid-cols-1 lg_grid-cols-5 gap-4 lg_gap-8"><div class="lg_col-span-2 flex flex-col gap-2 items-center p-4 lg_px-6 bg-gray-100 rounded-md"><img-loader class="w-80 h-80 lg_w-60 lg_h-60" src="${this.meta.image}" loading="lazy"></img-loader><loading-skeleton class="flex flex-col items-center" .expect="${(e=this.meta)==null?void 0:e.name}" num="3"><div class="text-base mb-2">${(t=this.meta)==null?void 0:t.name}</div><div class="break-words break-all text-gray-500">${(n=this.meta)==null?void 0:n.description}</div></loading-skeleton></div><div class="py-2 lg_mt-0 lg_col-span-3"><b class="inline-block text-white rounded py-0.5 px-1 text-xs mb-2 ${y({"bg-green-600":!!this.meta.sync,"bg-gray-500":!this.meta.sync})}">${this.meta.sync?"Verified":"Unverified"}</b><div class="flex lg_flex-col gap-2 mb-2"><b>Created by:</b> <span class="text-gray-500">${this.doid}</span></div><div class="flex lg_flex-col gap-2 mb-2"><b>Owned by:</b> <span class="text-gray-500">${d((i=this.item.doids)==null?void 0:i.length,()=>{var s,r;return a`${(r=(s=this.item.doids)==null?void 0:s.at(0))==null?void 0:r.name}`},()=>a`<dui-address .address="${this.item.owner}"></dui-address>`)}</span></div><div class="flex lg_flex-col gap-2 mb-2"><b>Marketplace:</b><dui-link open href="${this.opensea.url}">${this.opensea.origin}</dui-link></div><div class="mt-6 lg_mt-6"><div class="text-base mb-3"><b>Meta Info.</b></div><div class="flex flex-col gap-2"><div class="flex gap-2 items-center"><span>Contract:</span><dui-address href="${this.scan}" class="lg_text-sm text-blue-500" .address="${this.item.address}"></dui-address></div><div class="flex gap-2 text-xs lg_text-sm"><span>Token ID:</span> <span class="text-gray-500">${this.item.tokenID}</span></div><div class="flex gap-2 items-center text-xs lg_text-sm"><span>Chain:</span> <span><span class="text-gray-500">Ethereum</span><i class="mdi mdi-ethereum ml-1"></i></span></div></div></div></div></div>`})}`)}`)}</div>`}};c([m()],o.prototype,"DOID",2);c([p()],o.prototype,"cooked",2);c([p()],o.prototype,"item",2);c([p()],o.prototype,"pending",2);c([p()],o.prototype,"err",2);c([p()],o.prototype,"ts",2);c([p()],o.prototype,"meta",2);o=c([v("doid-collection")],o);const M="";var S=Object.defineProperty,T=Object.getOwnPropertyDescriptor,f=(e,t,n,i)=>{for(var s=i>1?void 0:i?T(t,n):t,r=e.length-1,l;r>=0;r--)(l=e[r])&&(s=(i?l(t,n,s):l(s))||s);return i&&s&&S(t,n,s),s};let h=class extends u(M){constructor(){super(...arguments),this.onSearch=e=>{x(`/collection/${e.detail.uri}`)}}get doid(){var e;return(e=this.DOID)==null?void 0:e.doid}get tokenName(){var e,t;return(t=(e=this.DOID)==null?void 0:e.token)==null?void 0:t.name}get items(){const e=[];return this.tokenName&&e.push({name:this.doid,url:`/collection/${this.doid}`}),e.length&&e.push({name:"Collection"}),e}connectedCallback(){super.connectedCallback()}render(){var e;return a`<div class="view-collection"><div class="dui-container"><doid-search-entire .default="${(e=this.DOID)==null?void 0:e.val}" @search="${this.onSearch}" placeholder="DOID of artist or artwork"><span slot="label"></span> <span slot="msg"></span></doid-search-entire><coll-breadcrumb .items="${this.items}" class="mb-2"></coll-breadcrumb>${d(this.tokenName,()=>a`<doid-collection .DOID="${this.DOID}"></doid-collection>`,()=>a`<doid-collections .DOID="${this.DOID}"></doid-collections>`)}</div></div>`}};f([m()],h.prototype,"DOID",2);h=f([v("view-collection")],h);export{h as ViewCollection};
