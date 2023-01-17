import{T as u,j as _}from"./index-31e3f2b0.js";import{y as l,m as v,e as f,n as g,l as c}from"./vendor-c36f6596.js";import{g as O,a as I,b as k}from"./list-44d98589.js";var w=Object.defineProperty,P=Object.getOwnPropertyDescriptor,b=(e,t,r,i)=>{for(var s=i>1?void 0:i?P(t,r):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(s=(i?n(t,r,s):n(s))||s);return i&&s&&w(t,r,s),s};let h=class extends u(""){get doid(){var e,t;return(t=(e=this.DOID)==null?void 0:e.doid)!=null?t:""}get tokenish(){var e,t;return(t=(e=this.DOID)==null?void 0:e.uri)==null?void 0:t.replace(this.doid,"")}render(){return this.tokenish?l`<dui-link link href="${`/artist/${this.doid}`}">${this.doid}</dui-link>${this.tokenish}`:l`${this.doid}`}};b([v()],h.prototype,"DOID",2);h=b([f("coll-marker")],h);const C="";var N=Object.defineProperty,j=Object.getOwnPropertyDescriptor,d=(e,t,r,i)=>{for(var s=i>1?void 0:i?j(t,r):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(s=(i?n(t,r,s):n(s))||s);return i&&s&&N(t,r,s),s};let o=class extends u(C){constructor(){super(...arguments),this.pending=!1,this.metaPending=!1,this.err="",this.ts=0,this.getMeta=async()=>{if(!this.metaPending&&(this.metaPending=!0,this.item))try{this.meta=await O(this.item)}catch(e){}finally{this.metaPending=!1}}}get doid(){var e;return(e=this.DOID)==null?void 0:e.doid}get doidName(){var e;return(e=this.DOID)==null?void 0:e.name}get token(){var e;return(e=this.DOID)==null?void 0:e.token}get minter(){var e,t;return(t=(e=this.token)==null?void 0:e.minter)!=null?t:""}get tokenID(){var e,t;return(t=(e=this.token)==null?void 0:e.tokenID)!=null?t:""}get slugName(){var e,t;return(t=(e=this.token)==null?void 0:e.slugName)!=null?t:""}get address(){var e;return(e=this.item)==null?void 0:e.address}get empty(){return!this.pending&&!!this.ts&&!this.metaPending&&(!this.item||!this.sameURI)}get opensea(){const e=`${I("url")}/${this.address}/${this.tokenID}`;return{url:e,origin:new URL(e).origin}}get scan(){return`${_().scan}/address/${this.address}`}get sameURI(){var t,r,i;const{slugURI:e}=(t=this.item)!=null?t:{};return e&&((i=(r=this.DOID)==null?void 0:r.uri)==null?void 0:i.endsWith(e))}async getCollection(){if(!this.pending&&(this.slugName||this.tokenID||this.minter)){this.pending=!0,this.err="";try{this.item=await k(this),this.getMeta()}catch(e){this.err=e.message||e}this.ts++,this.pending=!1}}async connectedCallback(){super.connectedCallback(),this.getCollection()}render(){return l`<div class="comp-collection">${g(this.empty,()=>l`<p class="text-center">No data yet.</p>`,()=>l`${g(this.pending,()=>l`<loading-icon type="block"></loading-icon>`,()=>l`${g(!this.err,()=>{var e,t,r,i,s,a,n,D;return l`<div class="my-4 grid grid-cols-1 lg_grid-cols-5 gap-4 lg_gap-8"><div class="lg_col-span-2 flex flex-col gap-2 items-center p-4 lg_px-6 bg-gray-100 rounded-md"><img-loader class="w-80 h-80 lg_w-60 lg_h-60" src="${(e=this.meta)==null?void 0:e.image}" loading="lazy"></img-loader><loading-skeleton class="flex flex-col items-center" .expect="${(t=this.meta)==null?void 0:t.name}" num="3"><div class="text-base mb-2">${(r=this.meta)==null?void 0:r.name}</div><div class="break-words break-all text-gray-500">${(i=this.meta)==null?void 0:i.description}</div></loading-skeleton></div><div class="py-2 lg_mt-0 lg_col-span-3"><div class="flex lg_flex-col gap-2 mb-2"><b>Created by:</b> <span class="text-gray-500">${this.doid}</span></div><div class="flex lg_flex-col gap-2 mb-2"><b>Owned by:</b> <span class="text-gray-500">${g((a=(s=this.item)==null?void 0:s.doids)==null?void 0:a.length,()=>{var p,$,x;return l`${(x=($=(p=this.item)==null?void 0:p.doids)==null?void 0:$.at(0))==null?void 0:x.name}`},()=>{var p;return l`<dui-address .address="${(p=this.item)==null?void 0:p.owner}"></dui-address>`})}</span></div><div class="flex lg_flex-col gap-2 mb-2"><b>Marketplace:</b><dui-link open href="${this.opensea.url}">${this.opensea.origin}</dui-link></div><div class="mt-6 lg_mt-6"><div class="text-base mb-3"><b>Meta Info.</b></div><div class="flex flex-col gap-2"><div class="flex gap-2 items-center"><span>Contract:</span><dui-address href="${this.scan}" class="lg_text-sm text-blue-500" .address="${(n=this.item)==null?void 0:n.address}"></dui-address></div><div class="flex gap-2 text-xs lg_text-sm"><span>Token ID:</span> <span class="text-gray-500">${(D=this.item)==null?void 0:D.tokenID}</span></div><div class="flex gap-2 items-center text-xs lg_text-sm"><span>Chain:</span> <span><span class="text-gray-500">Ethereum</span><i class="mdi mdi-ethereum ml-1"></i></span></div></div></div></div></div>`})}`)}`)}</div>`}};d([v()],o.prototype,"DOID",2);d([c()],o.prototype,"cooked",2);d([c()],o.prototype,"item",2);d([c()],o.prototype,"pending",2);d([c()],o.prototype,"metaPending",2);d([c()],o.prototype,"err",2);d([c()],o.prototype,"ts",2);d([c()],o.prototype,"meta",2);o=d([f("doid-collection")],o);const M="";var U=Object.defineProperty,R=Object.getOwnPropertyDescriptor,y=(e,t,r,i)=>{for(var s=i>1?void 0:i?R(t,r):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(s=(i?n(t,r,s):n(s))||s);return i&&s&&U(t,r,s),s};let m=class extends u(M){get tokenName(){var e,t;return(t=(e=this.DOID)==null?void 0:e.token)==null?void 0:t.name}connectedCallback(){super.connectedCallback()}render(){return l`<div class="view-collection"><div class="dui-container"><coll-marker .DOID="${this.DOID}" class="block mb-6"></coll-marker>${g(this.tokenName,()=>l`<doid-collection .DOID="${this.DOID}"></doid-collection>`,()=>l`<doid-collections .DOID="${this.DOID}"></doid-collections>`)}</div></div>`}};y([v()],m.prototype,"DOID",2);m=y([f("view-collection")],m);export{m as ViewCollection};
