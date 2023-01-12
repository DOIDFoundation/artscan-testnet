System.register(["./index-legacy.8460688d.js","./vendor-legacy.5567aa4d.js"],(function(t,e){"use strict";var i,r,n,s,o,p,a,l,d,u,h,c,g,m,y,f;return{setters:[t=>{i=t.c,r=t.g,n=t.n,s=t.D,o=t.T,p=t.b},t=>{a=t.S,l=t.p,d=t.x,u=t.y,h=t.k,c=t.m,g=t.e,m=t.c,y=t.z,f=t.n}],execute:function(){var t=Object.defineProperty,e=Object.getOwnPropertyDescriptor,b=(i,r,n,s)=>{for(var o,p=s>1?void 0:s?e(r,n):r,a=i.length-1;a>=0;a--)(o=i[a])&&(p=(s?o(r,n,p):o(p))||p);return s&&p&&t(r,n,p),p};class x extends a{constructor(){super(...arguments),this.search=async t=>{this.pending=!0,this.names=[];const{address:e,name:s}=await i(t,{allowAddress:!0,wrap:!0});if(e)return r(`/address/${e}`);if(s){const t=await n([s]);this.names=[t[0]]}this.ts++,this.pending=!1}}get len(){return this.names.length}get empty(){return!this.pending&&!this.len}}b([l({value:!1})],x.prototype,"pending",2),b([l({value:[]})],x.prototype,"names",2),b([l({value:0})],x.prototype,"ts",2);const v=new x,w=function(t={}){return this.validateDOID=async t=>{const e=t.detail??t;this.DOID={};const i=await s(e),{parsed:r}=i,{val:n,error:o,msg:p}=r;return o?{error:o,msg:p}:(this.DOID=i.parsed,i.parsed)}},$=(t,e={})=>class extends t{constructor(){super(...arguments),this.validateDOID=w.bind(this,e)(),this.DOID={},this.input$=d()}};var S=Object.defineProperty,D=Object.getOwnPropertyDescriptor,O=(t,e,i,r)=>{for(var n,s=r>1?void 0:r?D(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(s=(r?n(e,i,s):n(s))||s);return r&&s&&S(e,i,s),s};const I=(t,e,{lower:i=!1,upper:r=!1}={})=>(t&&(t=t?.trim(),i?t=t.toLowerCase():r&&(t=t.toUpperCase())),t);let k=class extends(o('.dui-input-text{position:relative;margin-left:auto;margin-right:auto;display:flex;width:100%;padding-top:1.25rem;padding-bottom:1.25rem}.dui-input-text input[type]{font-family:var(--fontFamily);position:relative;display:inline-flex;width:100%;border-radius:.375rem;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity));padding:1.5rem .75rem;font-size:1rem;line-height:1.5rem;border:1px solid #ccc;height:2rem}.dui-input-text[disabled]{opacity:.6}.dui-input-text.sm input[type]{padding-top:1rem;padding-bottom:1rem;font-size:.875rem;line-height:1.25rem;height:1.5rem}.dui-input-text.sm .dui-input-right,.dui-input-text.sm .dui-input-left{line-height:1rem;padding-top:1rem;padding-bottom:1rem}.dui-input-text .dui-input-msg,.dui-input-text .dui-input-tip,.dui-input-text label{line-height:1!important}.dui-input-text .dui-input-msg,.dui-input-text .dui-input-tip,.dui-input-text label{position:absolute;display:flex;height:1rem;flex-wrap:wrap;align-items:center;padding-left:.75rem;padding-right:.75rem;font-size:.875rem;line-height:1.25rem;margin-left:1px;top:.15rem}.dui-input-text .dui-input-msg{top:auto;bottom:.15rem}.dui-input-text .dui-input-tip{left:auto;right:0px}.dui-input-text .dui-input-right,.dui-input-text .dui-input-left{pointer-events:none;position:absolute;display:flex;align-items:center;justify-content:center;border-top-right-radius:.375rem;border-bottom-right-radius:.375rem;padding:1.5rem .5rem;z-index:1;right:1px;min-width:1.5rem;margin-top:1px;height:1.5rem;font-size:1em;line-height:1em}.dui-input-text .dui-input-right:empty,.dui-input-text .dui-input-left:empty{--tw-bg-opacity: 1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dui-input-text .dui-input-right>*,.dui-input-text .dui-input-left>*{pointer-events:auto}.dui-input-text .dui-input-left{right:auto;left:1px}.dui-input-text[required] label:after{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;font-weight:600;line-height:1;--tw-text-opacity: 1;color:rgba(239,68,68,var(--tw-text-opacity));content:"*";height:1em;margin-left:.25em}.dui-input-text[rightSlotted] input[type]{padding-right:5rem}.dui-input-text[leftSlotted] input[type]{padding-left:2.75rem}\n')){constructor(){super(...arguments),this.placeholder="",this.type="text",this.class="",this.disabled=!1,this.autoforce=!1,this.required=!1,this.lower=!1,this.upper=!1,this.err=!1,this.value="",this.debounce=300,this.rightSlotted=!1,this.leftSlotted=!1,this.onKeyup=t=>{"Enter"===t.key&&(this.emit("submit",this.value),setTimeout((()=>this.updateVal())))}}onSlotChange(t){const e=t.target;e&&e.assignedNodes({flatten:!0}).length}onSlotRight(t){this.rightSlotted=!!t.target}onSlotLeft(t){this.leftSlotted=!!t.target}firstUpdated(){if(this.autoforce){const t=this.$("input");t.focus(),t.select()}}onFocus(t){t.target.select()}updateVal(){const t=this.$("input");t&&(t.value=this.value)}onInput(t){t.stopImmediatePropagation();let e=t.target.value;this.value=I(e,0,{lower:this.lower,upper:this.upper})||"",this.updateVal(),this.emit("input",e)}render(){return u`<div class="dui-input-text ${this.class}" ?required="${this.required}" ?rightSlotted="${this.rightSlotted}" ?leftSlotted="${this.leftSlotted}" part="dui-input-text"><label><slot name="label" @slotchange="${this.onSlotChange}"></slot></label> <span class="dui-input-left"><slot name="left" @slotchange="${this.onSlotLeft}"></slot></span><input .type="${this.type}" .disabled="${this.disabled}" placeholder="${this.placeholder}" value="${this.value}" title="${this.title}" @focus="${this.onFocus}" @input="${this.onInput}" @keyup="${this.onKeyup}"><div class="dui-input-right"><slot name="right" @slotchange="${this.onSlotRight}"></slot></div><div class="dui-input-msg"><slot name="msg" @slotchange="${this.onSlotChange}"></slot></div><div class="dui-input-tip"><slot name="tip" @slotchange="${this.onSlotChange}"></slot></div></div>`}};O([c({type:String})],k.prototype,"placeholder",2),O([c({type:String})],k.prototype,"type",2),O([c({type:String})],k.prototype,"class",2),O([c({type:Boolean})],k.prototype,"disabled",2),O([c({type:Boolean})],k.prototype,"autoforce",2),O([c({type:Boolean})],k.prototype,"required",2),O([c({type:Boolean})],k.prototype,"lower",2),O([c({type:Boolean})],k.prototype,"upper",2),O([c({type:Boolean})],k.prototype,"err",2),O([c({type:String,converter:I})],k.prototype,"value",2),O([c({type:Number})],k.prototype,"debounce",2),O([h()],k.prototype,"rightSlotted",2),O([h()],k.prototype,"leftSlotted",2),k=O([g("dui-input-text")],k);var j=Object.defineProperty,B=Object.getOwnPropertyDescriptor,C=(t,e,i,r)=>{for(var n,s=r>1?void 0:r?B(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(s=(r?n(e,i,s):n(s))||s);return r&&s&&j(e,i,s),s};let P=class extends($(o(""))){constructor(){super(...arguments),this.bindStore=new m(this,v),this.bindBridge=new m(this,p),this.placeholder="",this.entire=!1,this.keyword="",this.err="",this.pending=!1,this.onInput=async t=>{await this.validateDOID(t??this.keyword);const{error:e,val:i,msg:r=""}=this.DOID;this.err=r,e||i&&(this.keyword=i)},this.doSearch=async()=>{await this.onInput(),this.DOID.error||this.emit("search",this.DOID)}}async connectedCallback(){if(super.connectedCallback(),void 0===this.default)return;const{parsed:{error:t,val:e=""}}=await s(this.default);t||(this.keyword=e)}render(){return u`<dui-input-text ${y(this.input$)} @input="${this.onInput}" @submit="${this.doSearch}" value="${this.keyword}" placeholder="${this.placeholder}" ?disabled="${this.pending}"><span slot="label"><slot name="label"></slot></span><span slot="right" class="-mr-1"><dui-button @click="${this.doSearch}" icon sm class="text-blue-500"><i class="mdi mdi-magnify text-lg"></i></dui-button></span><span slot="msg">${f(this.err,(()=>u`<span class="text-red-500">${this.err}</span>`),(()=>u`<slot name="msg"><span class="text-gray-400">e.g. sabet.doid, sabet.doid/galaxy-sailor-in-motion-2021-sabet#293032</span></slot>`))}</span></dui-input-text>`}};C([c()],P.prototype,"placeholder",2),C([c()],P.prototype,"default",2),C([c({type:Boolean})],P.prototype,"entire",2),C([h()],P.prototype,"keyword",2),C([h()],P.prototype,"err",2),C([h()],P.prototype,"pending",2),P=C([g("doid-search-entire")],P)}}}));
