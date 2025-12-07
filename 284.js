(self.webpackChunk_dashboard_footer=self.webpackChunk_dashboard_footer||[]).push([[284],{7:(F,P,t)=>{var i=t(1960),d="__lodash_hash_undefined__";function r(x,l){var p=this.__data__;return this.size+=this.has(x)?0:1,p[x]=i&&l===void 0?d:l,this}F.exports=r},31:(F,P,t)=>{var i=t(8037);function d(r){return i(this,r).get(r)}F.exports=d},128:F=>{function P(t){return function(i,d,r){for(var x=-1,l=Object(i),p=r(i),s=p.length;s--;){var f=p[t?s:++x];if(d(l[f],f,l)===!1)break}return i}}F.exports=P},142:F=>{function P(t,i){for(var d=-1,r=Array(t);++d<t;)r[d]=i(d);return r}F.exports=P},161:(F,P,t)=>{"use strict";t.d(P,{S8:()=>l,cd:()=>p});var i=t(5868);function d(){const I=typeof WeakSet=="function",b=I?new WeakSet:[];function u(E){if(I)return b.has(E)?!0:(b.add(E),!1);for(let L=0;L<b.length;L++)if(b[L]===E)return!0;return b.push(E),!1}function S(E){if(I)b.delete(E);else for(let L=0;L<b.length;L++)if(b[L]===E){b.splice(L,1);break}}return[u,S]}var r=t(535),x=t(9353);function l(I,b=100,u=1/0){try{return s("",I,b,u)}catch(S){return{ERROR:`**non-serializable** (${S})`}}}function p(I,b=3,u=100*1024){const S=l(I,b);return h(S)>u?p(I,b-1,u):S}function s(I,b,u=1/0,S=1/0,E=d()){const[L,T]=E;if(b==null||["boolean","string"].includes(typeof b)||typeof b=="number"&&Number.isFinite(b))return b;const Q=f(I,b);if(!Q.startsWith("[object "))return Q;if(b.__sentry_skip_normalization__)return b;const G=typeof b.__sentry_override_normalization_depth__=="number"?b.__sentry_override_normalization_depth__:u;if(G===0)return Q.replace("object ","");if(L(b))return"[Circular ~]";const se=b;if(se&&typeof se.toJSON=="function")try{const ne=se.toJSON();return s("",ne,G-1,S,E)}catch{}const U=Array.isArray(b)?[]:{};let y=0;const B=(0,r.W4)(b);for(const ne in B){if(!Object.prototype.hasOwnProperty.call(B,ne))continue;if(y>=S){U[ne]="[MaxProperties ~]";break}const M=B[ne];U[ne]=s(ne,M,G-1,S,E),y++}return T(b),U}function f(I,b){try{if(I==="domain"&&b&&typeof b=="object"&&b._events)return"[Domain]";if(I==="domainEmitter")return"[DomainEmitter]";if(typeof t.g<"u"&&b===t.g)return"[Global]";if(typeof window<"u"&&b===window)return"[Window]";if(typeof document<"u"&&b===document)return"[Document]";if((0,i.L2)(b))return"[VueViewModel]";if((0,i.mE)(b))return"[SyntheticEvent]";if(typeof b=="number"&&!Number.isFinite(b))return`[${b}]`;if(typeof b=="function")return`[Function: ${(0,x.qQ)(b)}]`;if(typeof b=="symbol")return`[${String(b)}]`;if(typeof b=="bigint")return`[BigInt: ${String(b)}]`;const u=z(b);return/^HTML(\w*)Element$/.test(u)?`[HTMLElement: ${u}]`:`[object ${u}]`}catch(u){return`**non-serializable** (${u})`}}function z(I){const b=Object.getPrototypeOf(I);return b?b.constructor.name:"null prototype"}function N(I){return~-encodeURI(I).split(/%..|./).length}function h(I){return N(JSON.stringify(I))}function A(I,b){const u=b.replace(/\\/g,"/").replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");let S=I;try{S=decodeURI(I)}catch{}return S.replace(/\\/g,"/").replace(/webpack:\/?/g,"").replace(new RegExp(`(file://)?/*${u}/*`,"ig"),"app:///")}},235:(F,P,t)=>{var i=t(1534),d=t(9637),r=t(8089);function x(l){return typeof l.constructor=="function"&&!r(l)?i(d(l)):{}}F.exports=x},261:(F,P,t)=>{"use strict";F.exports=t(4505)},275:F=>{var P=Function.prototype,t=P.toString;function i(d){if(d!=null){try{return t.call(d)}catch{}try{return d+""}catch{}}return""}F.exports=i},435:(F,P,t)=>{var i=t(9830);function d(r,x){for(var l=r.length;l--;)if(i(r[l][0],x))return l;return-1}F.exports=d},436:(F,P,t)=>{var i=t(2823),d=t(6663),r=t(1311),x=t(6554),l=t(6015),p=t(5816),s=t(4892);function f(z,N,h,A,I){z!==N&&r(N,function(b,u){if(I||(I=new i),l(b))x(z,N,u,h,f,A,I);else{var S=A?A(s(z,u),b,u+"",z,N,I):void 0;S===void 0&&(S=b),d(z,u,S)}},p)}F.exports=f},449:(F,P,t)=>{"use strict";var i;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=t(4711),r=Symbol.for("react.element"),x=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,p=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function f(z,N,h){var A,I={},b=null,u=null;h!==void 0&&(b=""+h),N.key!==void 0&&(b=""+N.key),N.ref!==void 0&&(u=N.ref);for(A in N)l.call(N,A)&&!s.hasOwnProperty(A)&&(I[A]=N[A]);if(z&&z.defaultProps)for(A in N=z.defaultProps,N)I[A]===void 0&&(I[A]=N[A]);return{$$typeof:r,type:z,key:b,ref:u,props:I,_owner:p.current}}i=x,P.jsx=f,P.jsxs=f},535:(F,P,t)=>{"use strict";t.d(P,{Ce:()=>u,GS:()=>p,HF:()=>b,W4:()=>h,my:()=>s,pO:()=>f,sp:()=>z,u4:()=>N});var i=t(3322),d=t(8616),r=t(5868),x=t(7504),l=t(5425);function p(T,Q,G){if(!(Q in T))return;const se=T[Q],U=G(se);typeof U=="function"&&f(U,se),T[Q]=U}function s(T,Q,G){try{Object.defineProperty(T,Q,{value:G,writable:!0,configurable:!0})}catch{d.T&&x.vF.log(`Failed to add non-enumerable property "${Q}" to object`,T)}}function f(T,Q){try{const G=Q.prototype||{};T.prototype=Q.prototype=G,s(T,"__sentry_original__",Q)}catch{}}function z(T){return T.__sentry_original__}function N(T){return Object.keys(T).map(Q=>`${encodeURIComponent(Q)}=${encodeURIComponent(T[Q])}`).join("&")}function h(T){if((0,r.bJ)(T))return{message:T.message,name:T.name,stack:T.stack,...I(T)};if((0,r.xH)(T)){const Q={type:T.type,target:A(T.target),currentTarget:A(T.currentTarget),...I(T)};return typeof CustomEvent<"u"&&(0,r.tH)(T,CustomEvent)&&(Q.detail=T.detail),Q}else return T}function A(T){try{return(0,r.vq)(T)?(0,i.Hd)(T):Object.prototype.toString.call(T)}catch{return"<unknown>"}}function I(T){if(typeof T=="object"&&T!==null){const Q={};for(const G in T)Object.prototype.hasOwnProperty.call(T,G)&&(Q[G]=T[G]);return Q}else return{}}function b(T,Q=40){const G=Object.keys(h(T));G.sort();const se=G[0];if(!se)return"[object has no keys]";if(se.length>=Q)return(0,l.xv)(se,Q);for(let U=G.length;U>0;U--){const y=G.slice(0,U).join(", ");if(!(y.length>Q))return U===G.length?y:(0,l.xv)(y,Q)}return""}function u(T){return S(T,new Map)}function S(T,Q){if(E(T)){const G=Q.get(T);if(G!==void 0)return G;const se={};Q.set(T,se);for(const U of Object.getOwnPropertyNames(T))typeof T[U]<"u"&&(se[U]=S(T[U],Q));return se}if(Array.isArray(T)){const G=Q.get(T);if(G!==void 0)return G;const se=[];return Q.set(T,se),T.forEach(U=>{se.push(S(U,Q))}),se}return T}function E(T){if(!(0,r.Qd)(T))return!1;try{const Q=Object.getPrototypeOf(T).constructor.name;return!Q||Q==="Object"}catch{return!0}}function L(T){let Q;switch(!0){case T==null:Q=new String(T);break;case(typeof T=="symbol"||typeof T=="bigint"):Q=Object(T);break;case isPrimitive(T):Q=new T.constructor(T);break;default:Q=T;break}return Q}},536:(F,P,t)=>{"use strict";t.d(P,{ie:()=>un,s3:()=>ma,XF:()=>Oa,iB:()=>Vt,s9:()=>Ha,we:()=>cr,iQ:()=>er,Mk:()=>Kt,bv:()=>Re,C1:()=>pn,SV:()=>Qn,It:()=>lt});var i=t(1735),d=t(7464),r=t(2776),x=function(_){if(typeof document>"u")return null;var g=Array.isArray(_)?_[0]:_;return g.ownerDocument.body},l=new WeakMap,p=new WeakMap,s={},f=0,z=function(_){return _&&(_.host||z(_.parentNode))},N=function(_,g){return g.map(function(R){if(_.contains(R))return R;var Y=z(R);return Y&&_.contains(Y)?Y:(console.error("aria-hidden",R,"in not contained inside",_,". Doing nothing"),null)}).filter(function(R){return!!R})},h=function(_,g,R,Y){var fe=N(g,Array.isArray(_)?_:[_]);s[R]||(s[R]=new WeakMap);var he=s[R],we=[],ze=new Set,Oe=new Set(fe),De=function(je){!je||ze.has(je)||(ze.add(je),De(je.parentNode))};fe.forEach(De);var Ge=function(je){!je||Oe.has(je)||Array.prototype.forEach.call(je.children,function($e){if(ze.has($e))Ge($e);else{var Me=$e.getAttribute(Y),Qe=Me!==null&&Me!=="false",Ue=(l.get($e)||0)+1,zn=(he.get($e)||0)+1;l.set($e,Ue),he.set($e,zn),we.push($e),Ue===1&&Qe&&p.set($e,!0),zn===1&&$e.setAttribute(R,"true"),Qe||$e.setAttribute(Y,"true")}})};return Ge(g),ze.clear(),f++,function(){we.forEach(function(je){var $e=l.get(je)-1,Me=he.get(je)-1;l.set(je,$e),he.set(je,Me),$e||(p.has(je)||je.removeAttribute(Y),p.delete(je)),Me||je.removeAttribute(R)}),f--,f||(l=new WeakMap,l=new WeakMap,p=new WeakMap,s={})}},A=function(_,g,R){R===void 0&&(R="data-aria-hidden");var Y=Array.from(Array.isArray(_)?_:[_]),fe=g||x(_);return fe?(Y.push.apply(Y,Array.from(fe.querySelectorAll("[aria-live]"))),h(Y,fe,R,"aria-hidden")):function(){return null}},I=function(_,g,R){R===void 0&&(R="data-inert-ed");var Y=g||x(_);return Y?h(_,Y,R,"inert"):function(){return null}},b=function(){return typeof HTMLElement<"u"&&HTMLElement.prototype.hasOwnProperty("inert")},u=function(_,g,R){return R===void 0&&(R="data-suppressed"),(b()?I:A)(_,g,R)};/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var S=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],E=S.join(","),L=typeof Element>"u",T=L?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Q=!L&&Element.prototype.getRootNode?function(_){var g;return _==null||(g=_.getRootNode)===null||g===void 0?void 0:g.call(_)}:function(_){return _?.ownerDocument},G=function _(g,R){var Y;R===void 0&&(R=!0);var fe=g==null||(Y=g.getAttribute)===null||Y===void 0?void 0:Y.call(g,"inert"),he=fe===""||fe==="true",we=he||R&&g&&_(g.parentNode);return we},se=function(g){var R,Y=g==null||(R=g.getAttribute)===null||R===void 0?void 0:R.call(g,"contenteditable");return Y===""||Y==="true"},U=function(g,R,Y){if(G(g))return[];var fe=Array.prototype.slice.apply(g.querySelectorAll(E));return R&&T.call(g,E)&&fe.unshift(g),fe=fe.filter(Y),fe},y=function _(g,R,Y){for(var fe=[],he=Array.from(g);he.length;){var we=he.shift();if(!G(we,!1))if(we.tagName==="SLOT"){var ze=we.assignedElements(),Oe=ze.length?ze:we.children,De=_(Oe,!0,Y);Y.flatten?fe.push.apply(fe,De):fe.push({scopeParent:we,candidates:De})}else{var Ge=T.call(we,E);Ge&&Y.filter(we)&&(R||!g.includes(we))&&fe.push(we);var je=we.shadowRoot||typeof Y.getShadowRoot=="function"&&Y.getShadowRoot(we),$e=!G(je,!1)&&(!Y.shadowRootFilter||Y.shadowRootFilter(we));if(je&&$e){var Me=_(je===!0?we.children:je.children,!0,Y);Y.flatten?fe.push.apply(fe,Me):fe.push({scopeParent:we,candidates:Me})}else he.unshift.apply(he,we.children)}}return fe},B=function(g){return!isNaN(parseInt(g.getAttribute("tabindex"),10))},ne=function(g){if(!g)throw new Error("No node provided");return g.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(g.tagName)||se(g))&&!B(g)?0:g.tabIndex},M=function(g,R){var Y=ne(g);return Y<0&&R&&!B(g)?0:Y},$=function(g,R){return g.tabIndex===R.tabIndex?g.documentOrder-R.documentOrder:g.tabIndex-R.tabIndex},ae=function(g){return g.tagName==="INPUT"},J=function(g){return ae(g)&&g.type==="hidden"},xe=function(g){var R=g.tagName==="DETAILS"&&Array.prototype.slice.apply(g.children).some(function(Y){return Y.tagName==="SUMMARY"});return R},q=function(g,R){for(var Y=0;Y<g.length;Y++)if(g[Y].checked&&g[Y].form===R)return g[Y]},le=function(g){if(!g.name)return!0;var R=g.form||Q(g),Y=function(ze){return R.querySelectorAll('input[type="radio"][name="'+ze+'"]')},fe;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")fe=Y(window.CSS.escape(g.name));else try{fe=Y(g.name)}catch(we){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",we.message),!1}var he=q(fe,g.form);return!he||he===g},te=function(g){return ae(g)&&g.type==="radio"},Z=function(g){return te(g)&&!le(g)},ce=function(g){var R,Y=g&&Q(g),fe=(R=Y)===null||R===void 0?void 0:R.host,he=!1;if(Y&&Y!==g){var we,ze,Oe;for(he=!!((we=fe)!==null&&we!==void 0&&(ze=we.ownerDocument)!==null&&ze!==void 0&&ze.contains(fe)||g!=null&&(Oe=g.ownerDocument)!==null&&Oe!==void 0&&Oe.contains(g));!he&&fe;){var De,Ge,je;Y=Q(fe),fe=(De=Y)===null||De===void 0?void 0:De.host,he=!!((Ge=fe)!==null&&Ge!==void 0&&(je=Ge.ownerDocument)!==null&&je!==void 0&&je.contains(fe))}}return he},O=function(g){var R=g.getBoundingClientRect(),Y=R.width,fe=R.height;return Y===0&&fe===0},ue=function(g,R){var Y=R.displayCheck,fe=R.getShadowRoot;if(getComputedStyle(g).visibility==="hidden")return!0;var he=T.call(g,"details>summary:first-of-type"),we=he?g.parentElement:g;if(T.call(we,"details:not([open]) *"))return!0;if(!Y||Y==="full"||Y==="legacy-full"){if(typeof fe=="function"){for(var ze=g;g;){var Oe=g.parentElement,De=Q(g);if(Oe&&!Oe.shadowRoot&&fe(Oe)===!0)return O(g);g.assignedSlot?g=g.assignedSlot:!Oe&&De!==g.ownerDocument?g=De.host:g=Oe}g=ze}if(ce(g))return!g.getClientRects().length;if(Y!=="legacy-full")return!0}else if(Y==="non-zero-area")return O(g);return!1},D=function(g){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(g.tagName))for(var R=g.parentElement;R;){if(R.tagName==="FIELDSET"&&R.disabled){for(var Y=0;Y<R.children.length;Y++){var fe=R.children.item(Y);if(fe.tagName==="LEGEND")return T.call(R,"fieldset[disabled] *")?!0:!fe.contains(g)}return!0}R=R.parentElement}return!1},ee=function(g,R){return!(R.disabled||G(R)||J(R)||ue(R,g)||xe(R)||D(R))},ie=function(g,R){return!(Z(R)||ne(R)<0||!ee(g,R))},ye=function(g){var R=parseInt(g.getAttribute("tabindex"),10);return!!(isNaN(R)||R>=0)},be=function _(g){var R=[],Y=[];return g.forEach(function(fe,he){var we=!!fe.scopeParent,ze=we?fe.scopeParent:fe,Oe=M(ze,we),De=we?_(fe.candidates):ze;Oe===0?we?R.push.apply(R,De):R.push(ze):Y.push({documentOrder:he,tabIndex:Oe,item:fe,isScope:we,content:De})}),Y.sort($).reduce(function(fe,he){return he.isScope?fe.push.apply(fe,he.content):fe.push(he.content),fe},[]).concat(R)},j=function(g,R){R=R||{};var Y;return R.getShadowRoot?Y=y([g],R.includeContainer,{filter:ie.bind(null,R),flatten:!1,getShadowRoot:R.getShadowRoot,shadowRootFilter:ye}):Y=U(g,R.includeContainer,ie.bind(null,R)),be(Y)},w=function(g,R){R=R||{};var Y;return R.getShadowRoot?Y=y([g],R.includeContainer,{filter:ee.bind(null,R),flatten:!0,getShadowRoot:R.getShadowRoot}):Y=U(g,R.includeContainer,ee.bind(null,R)),Y},W=function(g,R){if(R=R||{},!g)throw new Error("No node provided");return T.call(g,E)===!1?!1:ie(R,g)},oe=null,ve=function(g,R){if(R=R||{},!g)throw new Error("No node provided");return T.call(g,oe)===!1?!1:ee(R,g)},Se=t(4220);function Ae(){return Ae=Object.assign?Object.assign.bind():function(_){for(var g=1;g<arguments.length;g++){var R=arguments[g];for(var Y in R)Object.prototype.hasOwnProperty.call(R,Y)&&(_[Y]=R[Y])}return _},Ae.apply(this,arguments)}var Ie=typeof document<"u"?r.useLayoutEffect:r.useEffect;let We=!1,Le=0;const Ke=()=>"floating-ui-"+Le++;function Ze(){const[_,g]=r.useState(()=>We?Ke():void 0);return Ie(()=>{_==null&&g(Ke())},[]),r.useEffect(()=>{We||(We=!0)},[]),_}const Rn=r["useId".toString()]||Ze,un=r.forwardRef(function(g,R){let{context:{placement:Y,elements:{floating:fe},middlewareData:{arrow:he}},width:we=14,height:ze=7,tipRadius:Oe=0,strokeWidth:De=0,staticOffset:Ge,stroke:je,d:$e,style:{transform:Me,...Qe}={},...Ue}=g;const zn=Rn();if(!fe)return null;De*=2;const bn=De/2,an=we/2*(Oe/-8+1),nt=ze/2*Oe/4,[cn,kn]=Y.split("-"),qe=i.iD.isRTL(fe),rt=!!$e,Kn=cn==="top"||cn==="bottom",Ln=Ge&&kn==="end"?"bottom":"top";let On=Ge&&kn==="end"?"right":"left";Ge&&qe&&(On=kn==="end"?"left":"right");const Nn=he?.x!=null?Ge||he.x:"",Ye=he?.y!=null?Ge||he.y:"",on=$e||"M0,0"+(" H"+we)+(" L"+(we-an)+","+(ze-nt))+(" Q"+we/2+","+ze+" "+an+","+(ze-nt))+" Z",He={top:rt?"rotate(180deg)":"",left:rt?"rotate(90deg)":"rotate(-90deg)",bottom:rt?"":"rotate(180deg)",right:rt?"rotate(-90deg)":"rotate(90deg)"}[cn];return r.createElement("svg",Ae({},Ue,{"aria-hidden":!0,ref:R,width:rt?we:we+De,height:we,viewBox:"0 0 "+we+" "+(ze>we?ze:we),style:{position:"absolute",pointerEvents:"none",[On]:Nn,[Ln]:Ye,[cn]:Kn||rt?"100%":"calc(100% - "+De/2+"px)",transform:""+He+(Me??""),...Qe}}),De>0&&r.createElement("path",{clipPath:"url(#"+zn+")",fill:"none",stroke:je,strokeWidth:De+($e?0:1),d:on}),r.createElement("path",{stroke:De&&!$e?Ue.fill:"none",d:on}),r.createElement("clipPath",{id:zn},r.createElement("rect",{x:-bn,y:bn*(rt?-1:1),width:we+De,height:we})))});function dt(){const _=new Map;return{emit(g,R){var Y;(Y=_.get(g))==null||Y.forEach(fe=>fe(R))},on(g,R){_.set(g,[..._.get(g)||[],R])},off(g,R){var Y;_.set(g,((Y=_.get(g))==null?void 0:Y.filter(fe=>fe!==R))||[])}}}const In=r.createContext(null),Dn=r.createContext(null),yn=()=>{var _;return((_=r.useContext(In))==null?void 0:_.id)||null},Cn=()=>r.useContext(Dn);function Ct(_){const g=Rn(),R=Cn(),Y=yn(),fe=_||Y;return Ie(()=>{const he={id:g,parentId:fe};return R?.addNode(he),()=>{R?.removeNode(he)}},[R,g,fe]),g}function mt(_){let{children:g,id:R}=_;const Y=yn();return React.createElement(In.Provider,{value:React.useMemo(()=>({id:R,parentId:Y}),[R,Y])},g)}function ht(_){let{children:g}=_;const R=React.useRef([]),Y=React.useCallback(we=>{R.current=[...R.current,we]},[]),fe=React.useCallback(we=>{R.current=R.current.filter(ze=>ze!==we)},[]),he=React.useState(()=>dt())[0];return React.createElement(Dn.Provider,{value:React.useMemo(()=>({nodesRef:R,addNode:Y,removeNode:fe,events:he}),[R,Y,fe,he])},g)}function st(_){return _?.ownerDocument||document}function At(){const _=navigator.userAgentData;return _!=null&&_.platform?_.platform:navigator.platform}function St(){const _=navigator.userAgentData;return _&&Array.isArray(_.brands)?_.brands.map(g=>{let{brand:R,version:Y}=g;return R+"/"+Y}).join(" "):navigator.userAgent}function Pt(_){return st(_).defaultView||window}function kt(_){return _?_ instanceof Element||_ instanceof Pt(_).Element:!1}function Mt(_){return _?_ instanceof HTMLElement||_ instanceof Pt(_).HTMLElement:!1}function Ht(_){if(typeof ShadowRoot>"u")return!1;const g=Pt(_).ShadowRoot;return _ instanceof g||_ instanceof ShadowRoot}function $t(_){if(_.mozInputSource===0&&_.isTrusted)return!0;const g=/Android/i;return(g.test(At())||g.test(St()))&&_.pointerType?_.type==="click"&&_.buttons===1:_.detail===0&&!_.pointerType}function Bt(_){return _.width===0&&_.height===0||_.width===1&&_.height===1&&_.pressure===0&&_.detail===0&&_.pointerType!=="mouse"||_.width<1&&_.height<1&&_.pressure===0&&_.detail===0}function dn(){return/apple/i.test(navigator.vendor)}function Ce(){return At().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function en(_,g){const R=["mouse","pen"];return g||R.push("",void 0),R.includes(_)}function Un(_){return"nativeEvent"in _}function Ve(_,g){if(!_||!g)return!1;const R=g.getRootNode&&g.getRootNode();if(_.contains(g))return!0;if(R&&Ht(R)){let Y=g;for(;Y;){if(_===Y)return!0;Y=Y.parentNode||Y.host}}return!1}function gn(_){return"data-floating-ui-"+_}function Pn(_){const g=(0,r.useRef)(_);return Ie(()=>{g.current=_}),g}const wt=gn("safe-polygon");function ft(_,g,R){return R&&!en(R)?0:typeof _=="number"?_:_?.[g]}function Kt(_,g){g===void 0&&(g={});const{open:R,onOpenChange:Y,dataRef:fe,events:he,elements:{domReference:we,floating:ze},refs:Oe}=_,{enabled:De=!0,delay:Ge=0,handleClose:je=null,mouseOnly:$e=!1,restMs:Me=0,move:Qe=!0}=g,Ue=Cn(),zn=yn(),bn=Pn(je),an=Pn(Ge),nt=r.useRef(),cn=r.useRef(),kn=r.useRef(),qe=r.useRef(),rt=r.useRef(!0),Kn=r.useRef(!1),Ln=r.useRef(()=>{}),On=r.useCallback(()=>{var He;const jn=(He=fe.current.openEvent)==null?void 0:He.type;return jn?.includes("mouse")&&jn!=="mousedown"},[fe]);r.useEffect(()=>{if(!De)return;function He(){clearTimeout(cn.current),clearTimeout(qe.current),rt.current=!0}return he.on("dismiss",He),()=>{he.off("dismiss",He)}},[De,he]),r.useEffect(()=>{if(!De||!bn.current||!R)return;function He(qn){On()&&Y(!1,qn)}const jn=st(ze).documentElement;return jn.addEventListener("mouseleave",He),()=>{jn.removeEventListener("mouseleave",He)}},[ze,R,Y,De,bn,fe,On]);const Nn=r.useCallback(function(He,jn){jn===void 0&&(jn=!0);const qn=ft(an.current,"close",nt.current);qn&&!kn.current?(clearTimeout(cn.current),cn.current=setTimeout(()=>Y(!1,He),qn)):jn&&(clearTimeout(cn.current),Y(!1,He))},[an,Y]),Ye=r.useCallback(()=>{Ln.current(),kn.current=void 0},[]),on=r.useCallback(()=>{if(Kn.current){const He=st(Oe.floating.current).body;He.style.pointerEvents="",He.removeAttribute(wt),Kn.current=!1}},[Oe]);return r.useEffect(()=>{if(!De)return;function He(){return fe.current.openEvent?["click","mousedown"].includes(fe.current.openEvent.type):!1}function jn(Xn){if(clearTimeout(cn.current),rt.current=!1,$e&&!en(nt.current)||Me>0&&ft(an.current,"open")===0)return;const zt=ft(an.current,"open",nt.current);zt?cn.current=setTimeout(()=>{Y(!0,Xn)},zt):Y(!0,Xn)}function qn(Xn){if(He())return;Ln.current();const zt=st(ze);if(clearTimeout(qe.current),bn.current){R||clearTimeout(cn.current),kn.current=bn.current({..._,tree:Ue,x:Xn.clientX,y:Xn.clientY,onClose(){on(),Ye(),Nn(Xn)}});const it=kn.current;zt.addEventListener("mousemove",it),Ln.current=()=>{zt.removeEventListener("mousemove",it)};return}(nt.current==="touch"?!Ve(ze,Xn.relatedTarget):!0)&&Nn(Xn)}function ut(Xn){He()||bn.current==null||bn.current({..._,tree:Ue,x:Xn.clientX,y:Xn.clientY,onClose(){on(),Ye(),Nn(Xn)}})(Xn)}if(kt(we)){const Xn=we;return R&&Xn.addEventListener("mouseleave",ut),ze?.addEventListener("mouseleave",ut),Qe&&Xn.addEventListener("mousemove",jn,{once:!0}),Xn.addEventListener("mouseenter",jn),Xn.addEventListener("mouseleave",qn),()=>{R&&Xn.removeEventListener("mouseleave",ut),ze?.removeEventListener("mouseleave",ut),Qe&&Xn.removeEventListener("mousemove",jn),Xn.removeEventListener("mouseenter",jn),Xn.removeEventListener("mouseleave",qn)}}},[we,ze,De,_,$e,Me,Qe,Nn,Ye,on,Y,R,Ue,an,bn,fe]),Ie(()=>{var He;if(De&&R&&(He=bn.current)!=null&&He.__options.blockPointerEvents&&On()){const ut=st(ze).body;if(ut.setAttribute(wt,""),ut.style.pointerEvents="none",Kn.current=!0,kt(we)&&ze){var jn,qn;const Xn=we,zt=Ue==null||(jn=Ue.nodesRef.current.find(Ut=>Ut.id===zn))==null||(qn=jn.context)==null?void 0:qn.elements.floating;return zt&&(zt.style.pointerEvents=""),Xn.style.pointerEvents="auto",ze.style.pointerEvents="auto",()=>{Xn.style.pointerEvents="",ze.style.pointerEvents=""}}}},[De,R,zn,ze,we,Ue,bn,fe,On]),Ie(()=>{R||(nt.current=void 0,Ye(),on())},[R,Ye,on]),r.useEffect(()=>()=>{Ye(),clearTimeout(cn.current),clearTimeout(qe.current),on()},[De,Ye,on]),r.useMemo(()=>{if(!De)return{};function He(jn){nt.current=jn.pointerType}return{reference:{onPointerDown:He,onPointerEnter:He,onMouseMove(jn){R||Me===0||(clearTimeout(qe.current),qe.current=setTimeout(()=>{rt.current||Y(!0,jn.nativeEvent)},Me))}},floating:{onMouseEnter(){clearTimeout(cn.current)},onMouseLeave(jn){he.emit("dismiss",{type:"mouseLeave",data:{returnFocus:!1}}),Nn(jn.nativeEvent,!1)}}}},[he,De,Me,R,Y,Nn])}const ua=r.createContext({delay:0,initialDelay:0,timeoutMs:0,currentId:null,setCurrentId:()=>{},setState:()=>{},isInstantPhase:!1}),Sa=()=>React.useContext(ua),Ya=_=>{let{children:g,delay:R,timeoutMs:Y=0}=_;const[fe,he]=React.useReducer((Oe,De)=>({...Oe,...De}),{delay:R,timeoutMs:Y,initialDelay:R,currentId:null,isInstantPhase:!1}),we=React.useRef(null),ze=React.useCallback(Oe=>{he({currentId:Oe})},[]);return Ie(()=>{fe.currentId?we.current===null?we.current=fe.currentId:he({isInstantPhase:!0}):(he({isInstantPhase:!1}),we.current=null)},[fe.currentId]),React.createElement(ua.Provider,{value:React.useMemo(()=>({...fe,setState:he,setCurrentId:ze}),[fe,he,ze])},g)},Na=(_,g)=>{let{open:R,onOpenChange:Y}=_,{id:fe}=g;const{currentId:he,setCurrentId:we,initialDelay:ze,setState:Oe,timeoutMs:De}=Sa();Ie(()=>{he&&(Oe({delay:{open:1,close:ft(ze,"close")}}),he!==fe&&Y(!1))},[fe,Y,Oe,he,ze]),Ie(()=>{function Ge(){Y(!1),Oe({delay:ze,currentId:null})}if(!R&&he===fe)if(De){const je=window.setTimeout(Ge,De);return()=>{clearTimeout(je)}}else Ge()},[R,Oe,he,fe,Y,ze,De]),Ie(()=>{R&&we(fe)},[R,we,fe])};function gt(_){let g=_.activeElement;for(;((R=g)==null||(Y=R.shadowRoot)==null?void 0:Y.activeElement)!=null;){var R,Y;g=g.shadowRoot.activeElement}return g}let Jt=0;function Zt(_,g){g===void 0&&(g={});const{preventScroll:R=!1,cancelPrevious:Y=!0,sync:fe=!1}=g;Y&&cancelAnimationFrame(Jt);const he=()=>_?.focus({preventScroll:R});fe?he():Jt=requestAnimationFrame(he)}function ra(_,g){var R;let Y=[],fe=(R=_.find(he=>he.id===g))==null?void 0:R.parentId;for(;fe;){const he=_.find(we=>we.id===fe);fe=he?.parentId,he&&(Y=Y.concat(he))}return Y}function Xt(_,g){let R=_.filter(fe=>{var he;return fe.parentId===g&&((he=fe.context)==null?void 0:he.open)}),Y=R;for(;Y.length;)Y=_.filter(fe=>{var he;return(he=Y)==null?void 0:he.some(we=>{var ze;return fe.parentId===we.id&&((ze=fe.context)==null?void 0:ze.open)})}),R=R.concat(Y);return R}function ia(_){return"composedPath"in _?_.composedPath()[0]:_.target}const ja="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function oa(_){return Mt(_)&&_.matches(ja)}function Dt(_){_.preventDefault(),_.stopPropagation()}const da=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Ta(_,g){const R=j(_,da());g==="prev"&&R.reverse();const Y=R.indexOf(gt(st(_)));return R.slice(Y+1)[0]}function Pa(){return Ta(document.body,"next")}function qt(){return Ta(document.body,"prev")}function ea(_,g){const R=g||_.currentTarget,Y=_.relatedTarget;return!Y||!Ve(R,Y)}function Fa(_){j(_,da()).forEach(R=>{R.dataset.tabindex=R.getAttribute("tabindex")||"",R.setAttribute("tabindex","-1")})}function Ba(_){_.querySelectorAll("[data-tabindex]").forEach(R=>{const Y=R.dataset.tabindex;delete R.dataset.tabindex,Y?R.setAttribute("tabindex",Y):R.removeAttribute("tabindex")})}const ga={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};let Ra;function va(_){_.key==="Tab"&&(_.target,clearTimeout(Ra))}const ca=r.forwardRef(function(g,R){const[Y,fe]=r.useState();Ie(()=>(dn()&&fe("button"),document.addEventListener("keydown",va),()=>{document.removeEventListener("keydown",va)}),[]);const he={ref:R,tabIndex:0,role:Y,"aria-hidden":Y?void 0:!0,[gn("focus-guard")]:"",style:ga};return r.createElement("span",Ae({},g,he))}),ba=r.createContext(null);function sa(_){let{id:g,root:R}=_===void 0?{}:_;const[Y,fe]=r.useState(null),he=Rn(),we=fa(),ze=r.useMemo(()=>({id:g,root:R,portalContext:we,uniqueId:he}),[g,R,we,he]),Oe=r.useRef();return Ie(()=>()=>{Y?.remove()},[Y,ze]),Ie(()=>{if(Oe.current===ze)return;Oe.current=ze;const{id:De,root:Ge,portalContext:je,uniqueId:$e}=ze,Me=De?document.getElementById(De):null,Qe=gn("portal");if(Me){const Ue=document.createElement("div");Ue.id=$e,Ue.setAttribute(Qe,""),Me.appendChild(Ue),fe(Ue)}else{let Ue=Ge||je?.portalNode;Ue&&!kt(Ue)&&(Ue=Ue.current),Ue=Ue||document.body;let zn=null;De&&(zn=document.createElement("div"),zn.id=De,Ue.appendChild(zn));const bn=document.createElement("div");bn.id=$e,bn.setAttribute(Qe,""),Ue=zn||Ue,Ue.appendChild(bn),fe(bn)}},[ze]),Y}function Oa(_){let{children:g,id:R,root:Y=null,preserveTabOrder:fe=!0}=_;const he=sa({id:R,root:Y}),[we,ze]=r.useState(null),Oe=r.useRef(null),De=r.useRef(null),Ge=r.useRef(null),je=r.useRef(null),$e=!!we&&!we.modal&&we.open&&fe&&!!(Y||he);return r.useEffect(()=>{if(!he||!fe||we!=null&&we.modal)return;function Me(Qe){he&&ea(Qe)&&(Qe.type==="focusin"?Ba:Fa)(he)}return he.addEventListener("focusin",Me,!0),he.addEventListener("focusout",Me,!0),()=>{he.removeEventListener("focusin",Me,!0),he.removeEventListener("focusout",Me,!0)}},[he,fe,we?.modal]),r.createElement(ba.Provider,{value:r.useMemo(()=>({preserveTabOrder:fe,beforeOutsideRef:Oe,afterOutsideRef:De,beforeInsideRef:Ge,afterInsideRef:je,portalNode:he,setFocusManagerState:ze}),[fe,he])},$e&&he&&r.createElement(ca,{"data-type":"outside",ref:Oe,onFocus:Me=>{if(ea(Me,he)){var Qe;(Qe=Ge.current)==null||Qe.focus()}else{const Ue=qt()||we?.refs.domReference.current;Ue?.focus()}}}),$e&&he&&r.createElement("span",{"aria-owns":he.id,style:ga}),he&&(0,Se.createPortal)(g,he),$e&&he&&r.createElement(ca,{"data-type":"outside",ref:De,onFocus:Me=>{if(ea(Me,he)){var Qe;(Qe=je.current)==null||Qe.focus()}else{const Ue=Pa()||we?.refs.domReference.current;Ue?.focus(),we?.closeOnFocusOut&&we?.onOpenChange(!1,Me.nativeEvent)}}}))}const fa=()=>r.useContext(ba),na=r.forwardRef(function(g,R){return r.createElement("button",Ae({},g,{type:"button",ref:R,tabIndex:-1,style:ga}))});function ma(_){const{context:g,children:R,disabled:Y=!1,order:fe=["content"],guards:he=!0,initialFocus:we=0,returnFocus:ze=!0,modal:Oe=!0,visuallyHiddenDismiss:De=!1,closeOnFocusOut:Ge=!0}=_,{open:je,refs:$e,nodeId:Me,onOpenChange:Qe,events:Ue,dataRef:zn,elements:{domReference:bn,floating:an}}=g,nt=b()?he:!0,cn=Pn(fe),kn=Pn(we),qe=Pn(ze),rt=Cn(),Kn=fa(),Ln=typeof we=="number"&&we<0,On=r.useRef(null),Nn=r.useRef(null),Ye=r.useRef(!1),on=r.useRef(null),He=r.useRef(!1),jn=Kn!=null,qn=bn&&bn.getAttribute("role")==="combobox"&&oa(bn),ut=r.useCallback(function(it){return it===void 0&&(it=an),it?j(it,da()):[]},[an]),Xn=r.useCallback(it=>{const Bn=ut(it);return cn.current.map(at=>bn&&at==="reference"?bn:an&&at==="floating"?an:Bn).filter(Boolean).flat()},[bn,an,cn,ut]);r.useEffect(()=>{if(Y||!Oe)return;function it(at){if(at.key==="Tab"){Ve(an,gt(st(an)))&&ut().length===0&&!qn&&Dt(at);const ct=Xn(),Nt=ia(at);cn.current[0]==="reference"&&Nt===bn&&(Dt(at),at.shiftKey?Zt(ct[ct.length-1]):Zt(ct[1])),cn.current[1]==="floating"&&Nt===an&&at.shiftKey&&(Dt(at),Zt(ct[0]))}}const Bn=st(an);return Bn.addEventListener("keydown",it),()=>{Bn.removeEventListener("keydown",it)}},[Y,bn,an,Oe,cn,$e,qn,ut,Xn]),r.useEffect(()=>{if(Y||!Ge)return;function it(){He.current=!0,setTimeout(()=>{He.current=!1})}function Bn(at){const ct=at.relatedTarget;queueMicrotask(()=>{const Nt=!(Ve(bn,ct)||Ve(an,ct)||Ve(ct,an)||Ve(Kn?.portalNode,ct)||ct!=null&&ct.hasAttribute(gn("focus-guard"))||rt&&(Xt(rt.nodesRef.current,Me).find(Lt=>{var $n,tt;return Ve(($n=Lt.context)==null?void 0:$n.elements.floating,ct)||Ve((tt=Lt.context)==null?void 0:tt.elements.domReference,ct)})||ra(rt.nodesRef.current,Me).find(Lt=>{var $n,tt;return(($n=Lt.context)==null?void 0:$n.elements.floating)===ct||((tt=Lt.context)==null?void 0:tt.elements.domReference)===ct})));ct&&Nt&&!He.current&&ct!==on.current&&(Ye.current=!0,Qe(!1,at))})}if(an&&Mt(bn))return bn.addEventListener("focusout",Bn),bn.addEventListener("pointerdown",it),!Oe&&an.addEventListener("focusout",Bn),()=>{bn.removeEventListener("focusout",Bn),bn.removeEventListener("pointerdown",it),!Oe&&an.removeEventListener("focusout",Bn)}},[Y,bn,an,Oe,Me,rt,Kn,Qe,Ge]),r.useEffect(()=>{var it;if(Y)return;const Bn=Array.from((Kn==null||(it=Kn.portalNode)==null?void 0:it.querySelectorAll("["+gn("portal")+"]"))||[]);if(an&&Oe){const at=[an,...Bn,On.current,Nn.current].filter(Lt=>Lt!=null),Nt=(nt?A:u)(cn.current.includes("reference")||qn?at.concat(bn||[]):at,void 0,gn("inert"));return()=>{Nt()}}},[Y,bn,an,Oe,cn,Kn,qn,nt]),Ie(()=>{if(Y||!an)return;const it=st(an),Bn=gt(it);queueMicrotask(()=>{const at=Xn(an),ct=kn.current,Nt=(typeof ct=="number"?at[ct]:ct.current)||an,Lt=Ve(an,Bn);!Ln&&!Lt&&je&&Zt(Nt,{preventScroll:Nt===an})})},[Y,je,an,Ln,Xn,kn]),Ie(()=>{if(Y||!an)return;let it=!1;const Bn=st(an),at=gt(Bn),ct=zn.current;on.current=at;function Nt(Lt){if(Lt.type==="escapeKey"&&$e.domReference.current&&(on.current=$e.domReference.current),["referencePress","escapeKey"].includes(Lt.type))return;const $n=Lt.data.returnFocus;typeof $n=="object"?(Ye.current=!1,it=$n.preventScroll):Ye.current=!$n}return Ue.on("dismiss",Nt),()=>{Ue.off("dismiss",Nt);const Lt=gt(Bn);(Ve(an,Lt)||rt&&Xt(rt.nodesRef.current,Me).some(tt=>{var ot;return Ve((ot=tt.context)==null?void 0:ot.elements.floating,Lt)})||ct.openEvent&&["click","mousedown"].includes(ct.openEvent.type))&&$e.domReference.current&&(on.current=$e.domReference.current),qe.current&&Mt(on.current)&&!Ye.current&&Zt(on.current,{cancelPrevious:!1,preventScroll:it})}},[Y,an,qe,zn,$e,Ue,rt,Me]),Ie(()=>{if(!(Y||!Kn))return Kn.setFocusManagerState({...g,modal:Oe,closeOnFocusOut:Ge,open:je}),()=>{Kn.setFocusManagerState(null)}},[Y,Kn,Oe,je,Ge,g]),Ie(()=>{if(!Y&&an&&typeof MutationObserver=="function"){const it=()=>{const at=an.getAttribute("tabindex");cn.current.includes("floating")||gt(st(an))!==$e.domReference.current&&ut().length===0?at!=="0"&&an.setAttribute("tabindex","0"):at!=="-1"&&an.setAttribute("tabindex","-1")};it();const Bn=new MutationObserver(it);return Bn.observe(an,{childList:!0,subtree:!0,attributes:!0}),()=>{Bn.disconnect()}}},[Y,an,$e,cn,ut]);function zt(it){return Y||!De||!Oe?null:r.createElement(na,{ref:it==="start"?On:Nn,onClick:Bn=>Qe(!1,Bn.nativeEvent)},typeof De=="string"?De:"Dismiss")}const Ut=!Y&&nt&&!qn&&(jn||Oe);return r.createElement(r.Fragment,null,Ut&&r.createElement(ca,{"data-type":"inside",ref:Kn?.beforeInsideRef,onFocus:it=>{if(Oe){const at=Xn();Zt(fe[0]==="reference"?at[0]:at[at.length-1])}else if(Kn!=null&&Kn.preserveTabOrder&&Kn.portalNode)if(Ye.current=!1,ea(it,Kn.portalNode)){const at=Pa()||bn;at?.focus()}else{var Bn;(Bn=Kn.beforeOutsideRef.current)==null||Bn.focus()}}}),!qn&&zt("start"),R,zt("end"),Ut&&r.createElement(ca,{"data-type":"inside",ref:Kn?.afterInsideRef,onFocus:it=>{if(Oe)Zt(Xn()[0]);else if(Kn!=null&&Kn.preserveTabOrder&&Kn.portalNode)if(Ge&&(Ye.current=!0),ea(it,Kn.portalNode)){const at=qt()||bn;at?.focus()}else{var Bn;(Bn=Kn.afterOutsideRef.current)==null||Bn.focus()}}}))}function ir(_,g){const R=_.compareDocumentPosition(g);return R&Node.DOCUMENT_POSITION_FOLLOWING||R&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:R&Node.DOCUMENT_POSITION_PRECEDING||R&Node.DOCUMENT_POSITION_CONTAINS?1:0}function pa(_,g){if(_.size!==g.size)return!1;for(const[R,Y]of _.entries())if(Y!==g.get(R))return!1;return!0}const ha=r.createContext({register:()=>{},unregister:()=>{},map:new Map,elementsRef:{current:[]}});function or(_){let{children:g,elementsRef:R,labelsRef:Y}=_;const[fe,he]=React.useState(()=>new Map),we=React.useCallback(Oe=>{he(De=>new Map(De).set(Oe,null))},[]),ze=React.useCallback(Oe=>{he(De=>{const Ge=new Map(De);return Ge.delete(Oe),Ge})},[]);return Ie(()=>{const Oe=new Map(fe);Array.from(Oe.keys()).sort(ir).forEach((Ge,je)=>{Oe.set(Ge,je)}),pa(fe,Oe)||he(Oe)},[fe]),React.createElement(ha.Provider,{value:React.useMemo(()=>({register:we,unregister:ze,map:fe,elementsRef:R,labelsRef:Y}),[we,ze,fe,R,Y])},g)}function Xa(_){let{label:g}=_===void 0?{}:_;const[R,Y]=React.useState(null),fe=React.useRef(null),{register:he,unregister:we,map:ze,elementsRef:Oe,labelsRef:De}=React.useContext(ha),Ge=React.useCallback(je=>{if(fe.current=je,R!==null&&(Oe.current[R]=je,De)){var $e;const Me=g!==void 0;De.current[R]=Me?g:($e=je?.textContent)!=null?$e:null}},[R,Oe,De,g]);return Ie(()=>{const je=fe.current;if(je)return he(je),()=>{we(je)}},[he,we]),Ie(()=>{const je=fe.current?ze.get(fe.current):null;je!=null&&Y(je)},[ze]),React.useMemo(()=>({ref:Ge,index:R??-1}),[R,Ge])}const vr=null,br=null;function Va(_){return Mt(_.target)&&_.target.tagName==="BUTTON"}function Ua(_){return oa(_)}function yt(_,g){g===void 0&&(g={});const{open:R,onOpenChange:Y,dataRef:fe,elements:{domReference:he}}=_,{enabled:we=!0,event:ze="click",toggle:Oe=!0,ignoreMouse:De=!1,keyboardHandlers:Ge=!0}=g,je=React.useRef(),$e=React.useRef(!1);return React.useMemo(()=>we?{reference:{onPointerDown(Me){je.current=Me.pointerType},onMouseDown(Me){Me.button===0&&(en(je.current,!0)&&De||ze!=="click"&&(R&&Oe&&(!fe.current.openEvent||fe.current.openEvent.type==="mousedown")?Y(!1,Me.nativeEvent):(Me.preventDefault(),Y(!0,Me.nativeEvent))))},onClick(Me){if(ze==="mousedown"&&je.current){je.current=void 0;return}en(je.current,!0)&&De||(R&&Oe&&(!fe.current.openEvent||fe.current.openEvent.type==="click")?Y(!1,Me.nativeEvent):Y(!0,Me.nativeEvent))},onKeyDown(Me){je.current=void 0,!(Me.defaultPrevented||!Ge||Va(Me))&&(Me.key===" "&&!Ua(he)&&(Me.preventDefault(),$e.current=!0),Me.key==="Enter"&&Y(!(R&&Oe),Me.nativeEvent))},onKeyUp(Me){Me.defaultPrevented||!Ge||Va(Me)||Ua(he)||Me.key===" "&&$e.current&&($e.current=!1,Y(!(R&&Oe),Me.nativeEvent))}}}:{},[we,fe,ze,De,Ge,he,Oe,R,Y])}const wa=r["useInsertionEffect".toString()]||(_=>_());function Gt(_){const g=r.useRef(()=>{});return wa(()=>{g.current=_}),r.useCallback(function(){for(var R=arguments.length,Y=new Array(R),fe=0;fe<R;fe++)Y[fe]=arguments[fe];return g.current==null?void 0:g.current(...Y)},[])}function Ja(_,g){let R=null,Y=null,fe=!1;return{contextElement:_.current||void 0,getBoundingClientRect(){var he,we;const ze=((he=_.current)==null?void 0:he.getBoundingClientRect())||{width:0,height:0,x:0,y:0},Oe=g.axis==="x"||g.axis==="both",De=g.axis==="y"||g.axis==="both",Ge=["mouseenter","mousemove"].includes(((we=g.dataRef.current.openEvent)==null?void 0:we.type)||"")&&g.pointerType!=="touch";let je=ze.width,$e=ze.height,Me=ze.x,Qe=ze.y;return R==null&&g.x&&Oe&&(R=ze.x-g.x),Y==null&&g.y&&De&&(Y=ze.y-g.y),Me-=R||0,Qe-=Y||0,je=0,$e=0,!fe||Ge?(je=g.axis==="y"?ze.width:0,$e=g.axis==="x"?ze.height:0,Me=Oe&&g.x!=null?g.x:Me,Qe=De&&g.y!=null?g.y:Qe):fe&&!Ge&&($e=g.axis==="x"?ze.height:$e,je=g.axis==="y"?ze.width:je),fe=!0,{width:je,height:$e,x:Me,y:Qe,top:Qe,right:Me+je,bottom:Qe+$e,left:Me}}}}function xa(_){return _!=null&&_.clientX!=null}function Qa(_,g){g===void 0&&(g={});const{open:R,refs:Y,dataRef:fe,elements:{floating:he}}=_,{enabled:we=!0,axis:ze="both",x:Oe=null,y:De=null}=g,Ge=React.useRef(!1),je=React.useRef(null),[$e,Me]=React.useState(),[Qe,Ue]=React.useState([]),zn=Gt((cn,kn)=>{Ge.current||fe.current.openEvent&&!xa(fe.current.openEvent)||Y.setPositionReference(Ja(Y.domReference,{x:cn,y:kn,axis:ze,dataRef:fe,pointerType:$e}))}),bn=Gt(cn=>{Oe!=null||De!=null||(R?je.current||Ue([]):zn(cn.clientX,cn.clientY))}),an=en($e)?he:R,nt=React.useCallback(()=>{if(!an||!we||Oe!=null||De!=null)return;const cn=Pt(Y.floating.current);function kn(qe){const rt=ia(qe);Ve(Y.floating.current,rt)?(cn.removeEventListener("mousemove",kn),je.current=null):zn(qe.clientX,qe.clientY)}if(!fe.current.openEvent||xa(fe.current.openEvent)){cn.addEventListener("mousemove",kn);const qe=()=>{cn.removeEventListener("mousemove",kn),je.current=null};return je.current=qe,qe}Y.setPositionReference(Y.domReference.current)},[fe,we,an,Y,zn,Oe,De]);return React.useEffect(()=>nt(),[nt,Qe]),React.useEffect(()=>{we&&!he&&(Ge.current=!1)},[we,he]),React.useEffect(()=>{!we&&R&&(Ge.current=!0)},[we,R]),Ie(()=>{we&&(Oe!=null||De!=null)&&(Ge.current=!1,zn(Oe,De))},[we,Oe,De,zn]),React.useMemo(()=>{if(!we)return{};function cn(kn){let{pointerType:qe}=kn;Me(qe)}return{reference:{onPointerDown:cn,onPointerEnter:cn,onMouseMove:bn,onMouseEnter:bn}}},[we,bn])}function ka(_,g){if(g==null)return!1;if("composedPath"in _)return _.composedPath().includes(g);const R=_;return R.target!=null&&g.contains(R.target)}const qa={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},dr={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Ma=_=>{var g,R;return{escapeKeyBubbles:typeof _=="boolean"?_:(g=_?.escapeKey)!=null?g:!1,outsidePressBubbles:typeof _=="boolean"?_:(R=_?.outsidePress)!=null?R:!0}};function Ha(_,g){g===void 0&&(g={});const{open:R,onOpenChange:Y,events:fe,nodeId:he,elements:{reference:we,domReference:ze,floating:Oe},dataRef:De}=_,{enabled:Ge=!0,escapeKey:je=!0,outsidePress:$e=!0,outsidePressEvent:Me="pointerdown",referencePress:Qe=!1,referencePressEvent:Ue="pointerdown",ancestorScroll:zn=!1,bubbles:bn}=g,an=Cn(),nt=yn()!=null,cn=Gt(typeof $e=="function"?$e:()=>!1),kn=typeof $e=="function"?cn:$e,qe=r.useRef(!1),{escapeKeyBubbles:rt,outsidePressBubbles:Kn}=Ma(bn),Ln=Gt(Nn=>{if(!R||!Ge||!je||Nn.key!=="Escape")return;const Ye=an?Xt(an.nodesRef.current,he):[];if(!rt&&(Nn.stopPropagation(),Ye.length>0)){let on=!0;if(Ye.forEach(He=>{var jn;if((jn=He.context)!=null&&jn.open&&!He.context.dataRef.current.__escapeKeyBubbles){on=!1;return}}),!on)return}fe.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),Y(!1,Un(Nn)?Nn.nativeEvent:Nn)}),On=Gt(Nn=>{const Ye=qe.current;if(qe.current=!1,Ye||typeof kn=="function"&&!kn(Nn))return;const on=ia(Nn);if(Mt(on)&&Oe){const qn=on.clientWidth>0&&on.scrollWidth>on.clientWidth,ut=on.clientHeight>0&&on.scrollHeight>on.clientHeight;let Xn=ut&&Nn.offsetX>on.clientWidth;if(ut&&Pt(Oe).getComputedStyle(on).direction==="rtl"&&(Xn=Nn.offsetX<=on.offsetWidth-on.clientWidth),Xn||qn&&Nn.offsetY>on.clientHeight)return}const He=an&&Xt(an.nodesRef.current,he).some(qn=>{var ut;return ka(Nn,(ut=qn.context)==null?void 0:ut.elements.floating)});if(ka(Nn,Oe)||ka(Nn,ze)||He)return;const jn=an?Xt(an.nodesRef.current,he):[];if(jn.length>0){let qn=!0;if(jn.forEach(ut=>{var Xn;if((Xn=ut.context)!=null&&Xn.open&&!ut.context.dataRef.current.__outsidePressBubbles){qn=!1;return}}),!qn)return}fe.emit("dismiss",{type:"outsidePress",data:{returnFocus:nt?{preventScroll:!0}:$t(Nn)||Bt(Nn)}}),Y(!1,Nn)});return r.useEffect(()=>{if(!R||!Ge)return;De.current.__escapeKeyBubbles=rt,De.current.__outsidePressBubbles=Kn;function Nn(He){Y(!1,He)}const Ye=st(Oe);je&&Ye.addEventListener("keydown",Ln),kn&&Ye.addEventListener(Me,On);let on=[];return zn&&(kt(ze)&&(on=(0,i.v9)(ze)),kt(Oe)&&(on=on.concat((0,i.v9)(Oe))),!kt(we)&&we&&we.contextElement&&(on=on.concat((0,i.v9)(we.contextElement)))),on=on.filter(He=>{var jn;return He!==((jn=Ye.defaultView)==null?void 0:jn.visualViewport)}),on.forEach(He=>{He.addEventListener("scroll",Nn,{passive:!0})}),()=>{je&&Ye.removeEventListener("keydown",Ln),kn&&Ye.removeEventListener(Me,On),on.forEach(He=>{He.removeEventListener("scroll",Nn)})}},[De,Oe,ze,we,je,kn,Me,R,Y,zn,Ge,rt,Kn,Ln,On]),r.useEffect(()=>{qe.current=!1},[kn,Me]),r.useMemo(()=>Ge?{reference:{onKeyDown:Ln,[qa[Ue]]:Nn=>{Qe&&(fe.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),Y(!1,Nn.nativeEvent))}},floating:{onKeyDown:Ln,[dr[Me]]:()=>{qe.current=!0}}}:{},[Ge,fe,Qe,Me,Ue,Y,Ln])}function cr(_){var g;_===void 0&&(_={});const{open:R=!1,onOpenChange:Y,nodeId:fe}=_,[he,we]=r.useState(null),ze=((g=_.elements)==null?void 0:g.reference)||he,Oe=(0,d.we)(_),De=Cn(),Ge=Gt((cn,kn)=>{cn&&($e.current.openEvent=kn),Y?.(cn,kn)}),je=r.useRef(null),$e=r.useRef({}),Me=r.useState(()=>dt())[0],Qe=Rn(),Ue=r.useCallback(cn=>{const kn=kt(cn)?{getBoundingClientRect:()=>cn.getBoundingClientRect(),contextElement:cn}:cn;Oe.refs.setReference(kn)},[Oe.refs]),zn=r.useCallback(cn=>{(kt(cn)||cn===null)&&(je.current=cn,we(cn)),(kt(Oe.refs.reference.current)||Oe.refs.reference.current===null||cn!==null&&!kt(cn))&&Oe.refs.setReference(cn)},[Oe.refs]),bn=r.useMemo(()=>({...Oe.refs,setReference:zn,setPositionReference:Ue,domReference:je}),[Oe.refs,zn,Ue]),an=r.useMemo(()=>({...Oe.elements,domReference:ze}),[Oe.elements,ze]),nt=r.useMemo(()=>({...Oe,refs:bn,elements:an,dataRef:$e,nodeId:fe,floatingId:Qe,events:Me,open:R,onOpenChange:Ge}),[Oe,fe,Qe,Me,R,Ge,bn,an]);return Ie(()=>{const cn=De?.nodesRef.current.find(kn=>kn.id===fe);cn&&(cn.context=nt)}),r.useMemo(()=>({...Oe,context:nt,refs:bn,elements:an}),[Oe,bn,an,nt])}function er(_,g){g===void 0&&(g={});const{open:R,onOpenChange:Y,dataRef:fe,events:he,refs:we,elements:{floating:ze,domReference:Oe}}=_,{enabled:De=!0,keyboardOnly:Ge=!0}=g,je=r.useRef(""),$e=r.useRef(!1),Me=r.useRef();return r.useEffect(()=>{if(!De)return;const Ue=st(ze).defaultView||window;function zn(){!R&&Mt(Oe)&&Oe===gt(st(Oe))&&($e.current=!0)}return Ue.addEventListener("blur",zn),()=>{Ue.removeEventListener("blur",zn)}},[ze,Oe,R,De]),r.useEffect(()=>{if(!De)return;function Qe(Ue){(Ue.type==="referencePress"||Ue.type==="escapeKey")&&($e.current=!0)}return he.on("dismiss",Qe),()=>{he.off("dismiss",Qe)}},[he,De]),r.useEffect(()=>()=>{clearTimeout(Me.current)},[]),r.useMemo(()=>De?{reference:{onPointerDown(Qe){let{pointerType:Ue}=Qe;je.current=Ue,$e.current=!!(Ue&&Ge)},onMouseLeave(){$e.current=!1},onFocus(Qe){var Ue;$e.current||Qe.type==="focus"&&((Ue=fe.current.openEvent)==null?void 0:Ue.type)==="mousedown"&&ka(fe.current.openEvent,Oe)||Y(!0,Qe.nativeEvent)},onBlur(Qe){$e.current=!1;const Ue=Qe.relatedTarget,zn=kt(Ue)&&Ue.hasAttribute(gn("focus-guard"))&&Ue.getAttribute("data-type")==="outside";Me.current=setTimeout(()=>{Ve(we.floating.current,Ue)||Ve(Oe,Ue)||zn||Y(!1,Qe.nativeEvent)})}}}:{},[De,Ge,Oe,we,fe,Y])}function Ee(_,g,R){const Y=new Map;return{...R==="floating"&&{tabIndex:-1},..._,...g.map(fe=>fe?fe[R]:null).concat(_).reduce((fe,he)=>(he&&Object.entries(he).forEach(we=>{let[ze,Oe]=we;if(ze.indexOf("on")===0){if(Y.has(ze)||Y.set(ze,[]),typeof Oe=="function"){var De;(De=Y.get(ze))==null||De.push(Oe),fe[ze]=function(){for(var Ge,je=arguments.length,$e=new Array(je),Me=0;Me<je;Me++)$e[Me]=arguments[Me];return(Ge=Y.get(ze))==null?void 0:Ge.map(Qe=>Qe(...$e)).find(Qe=>Qe!==void 0)}}}else fe[ze]=Oe}),fe),{})}}function Re(_){_===void 0&&(_=[]);const g=_,R=r.useCallback(he=>Ee(he,_,"reference"),g),Y=r.useCallback(he=>Ee(he,_,"floating"),g),fe=r.useCallback(he=>Ee(he,_,"item"),_.map(he=>he?.item));return r.useMemo(()=>({getReferenceProps:R,getFloatingProps:Y,getItemProps:fe}),[R,Y,fe])}let Xe=!1;const xn="ArrowUp",Tn="ArrowDown",wn="ArrowLeft",Sn="ArrowRight";function et(_,g,R){return Math.floor(_/g)!==R}function Jn(_,g){return g<0||g>=_.current.length}function k(_,g){let{startingIndex:R=-1,decrement:Y=!1,disabledIndices:fe,amount:he=1}=g===void 0?{}:g;const we=_.current;let ze=R;do{var Oe,De;ze=ze+(Y?-he:he)}while(ze>=0&&ze<=we.length-1&&(fe?fe.includes(ze):we[ze]==null||(Oe=we[ze])!=null&&Oe.hasAttribute("disabled")||((De=we[ze])==null?void 0:De.getAttribute("aria-disabled"))==="true"));return ze}function K(_,g,R){switch(_){case"vertical":return g;case"horizontal":return R;default:return g||R}}function re(_,g){return K(g,_===xn||_===Tn,_===wn||_===Sn)}function Pe(_,g,R){return K(g,_===Tn,R?_===wn:_===Sn)||_==="Enter"||_==" "||_===""}function Be(_,g,R){return K(g,R?_===wn:_===Sn,_===Tn)}function Fe(_,g,R){return K(g,R?_===Sn:_===wn,_===xn)}function Je(_,g){return k(_,{disabledIndices:g})}function rn(_,g){return k(_,{decrement:!0,startingIndex:_.current.length,disabledIndices:g})}function pn(_,g){const{open:R,onOpenChange:Y,refs:fe,elements:{domReference:he,floating:we}}=_,{listRef:ze,activeIndex:Oe,onNavigate:De=()=>{},enabled:Ge=!0,selectedIndex:je=null,allowEscape:$e=!1,loop:Me=!1,nested:Qe=!1,rtl:Ue=!1,virtual:zn=!1,focusItemOnOpen:bn="auto",focusItemOnHover:an=!0,openOnArrowKeyDown:nt=!0,disabledIndices:cn=void 0,orientation:kn="vertical",cols:qe=1,scrollItemIntoView:rt=!0}=g,Kn=yn(),Ln=Cn(),On=Gt(De),Nn=r.useRef(bn),Ye=r.useRef(je??-1),on=r.useRef(null),He=r.useRef(!0),jn=r.useRef(On),qn=r.useRef(!!we),ut=r.useRef(!1),Xn=r.useRef(!1),zt=Pn(cn),Ut=Pn(R),it=Pn(rt),[Bn,at]=r.useState(),ct=Gt(function($n,tt,ot){ot===void 0&&(ot=!1);const Et=$n.current[tt.current];Et&&(zn?at(Et.id):Zt(Et,{preventScroll:!0,sync:Ce()&&dn()?Xe||ut.current:!1}),requestAnimationFrame(()=>{const Ot=it.current;Ot&&Et&&(ot||!He.current)&&(Et.scrollIntoView==null||Et.scrollIntoView(typeof Ot=="boolean"?{block:"nearest",inline:"nearest"}:Ot))}))});Ie(()=>{document.createElement("div").focus({get preventScroll(){return Xe=!0,!1}})},[]),Ie(()=>{Ge&&(R&&we?Nn.current&&je!=null&&(Xn.current=!0,On(je)):qn.current&&(Ye.current=-1,jn.current(null)))},[Ge,R,we,je,On]),Ie(()=>{if(Ge&&R&&we)if(Oe==null){if(ut.current=!1,je!=null)return;if(qn.current&&(Ye.current=-1,ct(ze,Ye)),!qn.current&&Nn.current&&(on.current!=null||Nn.current===!0&&on.current==null)){let $n=0;const tt=()=>{ze.current[0]==null?($n<2&&($n?requestAnimationFrame:queueMicrotask)(tt),$n++):(Ye.current=on.current==null||Pe(on.current,kn,Ue)||Qe?Je(ze,zt.current):rn(ze,zt.current),on.current=null,On(Ye.current))};tt()}}else Jn(ze,Oe)||(Ye.current=Oe,ct(ze,Ye,Xn.current),Xn.current=!1)},[Ge,R,we,Oe,je,Qe,ze,kn,Ue,On,ct,zt]),Ie(()=>{if(Ge&&qn.current&&!we&&Ln){var $n,tt;const ot=Ln.nodesRef.current,Et=($n=ot.find(Wt=>Wt.id===Kn))==null||(tt=$n.context)==null?void 0:tt.elements.floating,Ot=gt(st(we)),Vn=ot.some(Wt=>Wt.context&&Ve(Wt.context.elements.floating,Ot));Et&&!Vn&&Et.focus({preventScroll:!0})}},[Ge,we,Ln,Kn]),Ie(()=>{jn.current=On,qn.current=!!we}),Ie(()=>{R||(on.current=null)},[R]);const Nt=Oe!=null,Lt=r.useMemo(()=>{function $n(ot){if(!R)return;const Et=ze.current.indexOf(ot);Et!==-1&&On(Et)}return{onFocus(ot){let{currentTarget:Et}=ot;$n(Et)},onClick:ot=>{let{currentTarget:Et}=ot;return Et.focus({preventScroll:!0})},...an&&{onMouseMove(ot){let{currentTarget:Et}=ot;$n(Et)},onPointerLeave(ot){let{pointerType:Et}=ot;!He.current||Et==="touch"||(Ye.current=-1,ct(ze,Ye),On(null),zn||Zt(fe.floating.current,{preventScroll:!0}))}}}},[R,fe,ct,an,ze,On,zn]);return r.useMemo(()=>{if(!Ge)return{};const $n=zt.current;function tt(Vn){if(He.current=!1,ut.current=!0,!Ut.current&&Vn.currentTarget===fe.floating.current)return;if(Qe&&Fe(Vn.key,kn,Ue)){Dt(Vn),Y(!1,Vn.nativeEvent),Mt(he)&&he.focus();return}const Wt=Ye.current,ya=Je(ze,$n),Yt=rn(ze,$n);if(Vn.key==="Home"&&(Dt(Vn),Ye.current=ya,On(Ye.current)),Vn.key==="End"&&(Dt(Vn),Ye.current=Yt,On(Ye.current)),qe>1){const _t=Ye.current;if(Vn.key===xn){if(Dt(Vn),_t===-1)Ye.current=Yt;else if(Ye.current=k(ze,{startingIndex:_t,amount:qe,decrement:!0,disabledIndices:$n}),Me&&(_t-qe<ya||Ye.current<0)){const za=_t%qe,sr=Yt%qe,Rr=Yt-(sr-za);sr===za?Ye.current=Yt:Ye.current=sr>za?Rr:Rr-qe}Jn(ze,Ye.current)&&(Ye.current=_t),On(Ye.current)}if(Vn.key===Tn&&(Dt(Vn),_t===-1?Ye.current=ya:(Ye.current=k(ze,{startingIndex:_t,amount:qe,disabledIndices:$n}),Me&&_t+qe>Yt&&(Ye.current=k(ze,{startingIndex:_t%qe-qe,amount:qe,disabledIndices:$n}))),Jn(ze,Ye.current)&&(Ye.current=_t),On(Ye.current)),kn==="both"){const za=Math.floor(_t/qe);Vn.key===Sn&&(Dt(Vn),_t%qe!==qe-1?(Ye.current=k(ze,{startingIndex:_t,disabledIndices:$n}),Me&&et(Ye.current,qe,za)&&(Ye.current=k(ze,{startingIndex:_t-_t%qe-1,disabledIndices:$n}))):Me&&(Ye.current=k(ze,{startingIndex:_t-_t%qe-1,disabledIndices:$n})),et(Ye.current,qe,za)&&(Ye.current=_t)),Vn.key===wn&&(Dt(Vn),_t%qe!==0?(Ye.current=k(ze,{startingIndex:_t,disabledIndices:$n,decrement:!0}),Me&&et(Ye.current,qe,za)&&(Ye.current=k(ze,{startingIndex:_t+(qe-_t%qe),decrement:!0,disabledIndices:$n}))):Me&&(Ye.current=k(ze,{startingIndex:_t+(qe-_t%qe),decrement:!0,disabledIndices:$n})),et(Ye.current,qe,za)&&(Ye.current=_t));const sr=Math.floor(Yt/qe)===za;Jn(ze,Ye.current)&&(Me&&sr?Ye.current=Vn.key===wn?Yt:k(ze,{startingIndex:_t-_t%qe-1,disabledIndices:$n}):Ye.current=_t),On(Ye.current);return}}if(re(Vn.key,kn)){if(Dt(Vn),R&&!zn&&gt(Vn.currentTarget.ownerDocument)===Vn.currentTarget){Ye.current=Pe(Vn.key,kn,Ue)?ya:Yt,On(Ye.current);return}Pe(Vn.key,kn,Ue)?Me?Ye.current=Wt>=Yt?$e&&Wt!==ze.current.length?-1:ya:k(ze,{startingIndex:Wt,disabledIndices:$n}):Ye.current=Math.min(Yt,k(ze,{startingIndex:Wt,disabledIndices:$n})):Me?Ye.current=Wt<=ya?$e&&Wt!==-1?ze.current.length:Yt:k(ze,{startingIndex:Wt,decrement:!0,disabledIndices:$n}):Ye.current=Math.max(ya,k(ze,{startingIndex:Wt,decrement:!0,disabledIndices:$n})),Jn(ze,Ye.current)?On(null):On(Ye.current)}}function ot(Vn){bn==="auto"&&$t(Vn.nativeEvent)&&(Nn.current=!0)}function Et(Vn){Nn.current=bn,bn==="auto"&&Bt(Vn.nativeEvent)&&(Nn.current=!0)}const Ot=zn&&R&&Nt&&{"aria-activedescendant":Bn};return{reference:{...Ot,onKeyDown(Vn){He.current=!1;const Wt=Vn.key.indexOf("Arrow")===0;if(zn&&R)return tt(Vn);if(!R&&!nt&&Wt)return;const ya=Wt||Vn.key==="Enter"||Vn.key.trim()==="",Yt=re(Vn.key,kn),_t=Be(Vn.key,kn,Ue);if(ya&&(on.current=Qe&&Yt?null:Vn.key),Qe){_t&&(Dt(Vn),R?(Ye.current=Je(ze,$n),On(Ye.current)):Y(!0,Vn.nativeEvent));return}Yt&&(je!=null&&(Ye.current=je),Dt(Vn),!R&&nt?Y(!0,Vn.nativeEvent):tt(Vn),R&&On(Ye.current))},onFocus(){R&&On(null)},onPointerDown:Et,onMouseDown:ot,onClick:ot},floating:{"aria-orientation":kn==="both"?void 0:kn,...Ot,onKeyDown:tt,onPointerMove(){He.current=!0}},item:Lt}},[he,fe,Bn,zt,Ut,ze,Ge,kn,Ue,zn,R,Nt,Qe,je,nt,$e,qe,Me,bn,On,Y,Lt])}function Qn(_){return r.useMemo(()=>_.every(g=>g==null)?null:g=>{_.forEach(R=>{typeof R=="function"?R(g):R!=null&&(R.current=g)})},_)}function lt(_,g){g===void 0&&(g={});const{open:R,floatingId:Y}=_,{enabled:fe=!0,role:he="dialog"}=g,we=Rn();return r.useMemo(()=>{const ze={id:Y,role:he};return fe?he==="tooltip"?{reference:{"aria-describedby":R?Y:void 0},floating:ze}:{reference:{"aria-expanded":R?"true":"false","aria-haspopup":he==="alertdialog"?"dialog":he,"aria-controls":R?Y:void 0,...he==="listbox"&&{role:"combobox"},...he==="menu"&&{id:we}},floating:{...ze,...he==="menu"&&{"aria-labelledby":we}}}:{}},[fe,he,R,Y,we])}const me=_=>_.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(g,R)=>(R?"-":"")+g.toLowerCase());function ge(_,g){return typeof _=="function"?_(g):_}function hn(_,g){const[R,Y]=React.useState(_);return _&&!R&&Y(!0),React.useEffect(()=>{if(!_){const fe=setTimeout(()=>Y(!1),g);return()=>clearTimeout(fe)}},[_,g]),R}function vn(_,g){g===void 0&&(g={});const{open:R,elements:{floating:Y}}=_,{duration:fe=250}=g,we=(typeof fe=="number"?fe:fe.close)||0,[ze,Oe]=React.useState(!1),[De,Ge]=React.useState("unmounted"),je=hn(R,we);return Ie(()=>{ze&&!je&&Ge("unmounted")},[ze,je]),Ie(()=>{if(Y)if(R){Ge("initial");const $e=requestAnimationFrame(()=>{Ge("open")});return()=>{cancelAnimationFrame($e)}}else Oe(!0),Ge("close")},[R,Y]),{isMounted:je,status:De}}function Wn(_,g){g===void 0&&(g={});const{initial:R={opacity:0},open:Y,close:fe,common:he,duration:we=250}=g,ze=_.placement,Oe=ze.split("-")[0],De=React.useMemo(()=>({side:Oe,placement:ze}),[Oe,ze]),Ge=typeof we=="number",je=(Ge?we:we.open)||0,$e=(Ge?we:we.close)||0,[Me,Qe]=React.useState(()=>({...ge(he,De),...ge(R,De)})),{isMounted:Ue,status:zn}=vn(_,{duration:we}),bn=Pn(R),an=Pn(Y),nt=Pn(fe),cn=Pn(he);return Ie(()=>{const kn=ge(bn.current,De),qe=ge(nt.current,De),rt=ge(cn.current,De),Kn=ge(an.current,De)||Object.keys(kn).reduce((Ln,On)=>(Ln[On]="",Ln),{});if(zn==="initial"&&Qe(Ln=>({transitionProperty:Ln.transitionProperty,...rt,...kn})),zn==="open"&&Qe({transitionProperty:Object.keys(Kn).map(me).join(","),transitionDuration:je+"ms",...rt,...Kn}),zn==="close"){const Ln=qe||kn;Qe({transitionProperty:Object.keys(Ln).map(me).join(","),transitionDuration:$e+"ms",...rt,...Ln})}},[$e,nt,bn,an,cn,je,zn,De]),{isMounted:Ue,styles:Me}}function Hn(_,g){var R;const{open:Y,dataRef:fe}=_,{listRef:he,activeIndex:we,onMatch:ze,onTypingChange:Oe,enabled:De=!0,findMatch:Ge=null,resetMs:je=750,ignoreKeys:$e=[],selectedIndex:Me=null}=g,Qe=React.useRef(),Ue=React.useRef(""),zn=React.useRef((R=Me??we)!=null?R:-1),bn=React.useRef(null),an=Gt(ze),nt=Gt(Oe),cn=Pn(Ge),kn=Pn($e);return Ie(()=>{Y&&(clearTimeout(Qe.current),bn.current=null,Ue.current="")},[Y]),Ie(()=>{if(Y&&Ue.current===""){var qe;zn.current=(qe=Me??we)!=null?qe:-1}},[Y,Me,we]),React.useMemo(()=>{if(!De)return{};function qe(Ln){Ln?fe.current.typing||(fe.current.typing=Ln,nt(Ln)):fe.current.typing&&(fe.current.typing=Ln,nt(Ln))}function rt(Ln,On,Nn){const Ye=cn.current?cn.current(On,Nn):On.find(on=>on?.toLocaleLowerCase().indexOf(Nn.toLocaleLowerCase())===0);return Ye?Ln.indexOf(Ye):-1}function Kn(Ln){const On=he.current;if(Ue.current.length>0&&Ue.current[0]!==" "&&(rt(On,On,Ue.current)===-1?qe(!1):Ln.key===" "&&Dt(Ln)),On==null||kn.current.includes(Ln.key)||Ln.key.length!==1||Ln.ctrlKey||Ln.metaKey||Ln.altKey)return;Y&&Ln.key!==" "&&(Dt(Ln),qe(!0)),On.every(He=>{var jn,qn;return He?((jn=He[0])==null?void 0:jn.toLocaleLowerCase())!==((qn=He[1])==null?void 0:qn.toLocaleLowerCase()):!0})&&Ue.current===Ln.key&&(Ue.current="",zn.current=bn.current),Ue.current+=Ln.key,clearTimeout(Qe.current),Qe.current=setTimeout(()=>{Ue.current="",zn.current=bn.current,qe(!1)},je);const Ye=zn.current,on=rt(On,[...On.slice((Ye||0)+1),...On.slice(0,(Ye||0)+1)],Ue.current);on!==-1?(an(on),bn.current=on):Ln.key!==" "&&(Ue.current="",qe(!1))}return{reference:{onKeyDown:Kn},floating:{onKeyDown:Kn,onKeyUp(Ln){Ln.key===" "&&qe(!1)}}}},[De,Y,fe,he,je,kn,cn,an,nt])}function Mn(_,g){return{..._,rects:{..._.rects,floating:{..._.rects.floating,height:g}}}}const Yn=_=>({name:"inner",options:_,async fn(g){const{listRef:R,overflowRef:Y,onFallbackChange:fe,offset:he=0,index:we=0,minItemsVisible:ze=4,referenceOverflowThreshold:Oe=0,scrollRef:De,...Ge}=_,{rects:je,elements:{floating:$e}}=g,Me=R.current[we];if(!Me)return{};const Qe={...g,...await offset(-Me.offsetTop-$e.clientTop-je.reference.height/2-Me.offsetHeight/2-he).fn(g)},Ue=De?.current||$e,zn=await detectOverflow(Mn(Qe,Ue.scrollHeight),Ge),bn=await detectOverflow(Qe,{...Ge,elementContext:"reference"}),an=Math.max(0,zn.top),nt=Qe.y+an,cn=Math.max(0,Ue.scrollHeight-an-Math.max(0,zn.bottom));return Ue.style.maxHeight=cn+"px",Ue.scrollTop=an,fe&&(Ue.offsetHeight<Me.offsetHeight*Math.min(ze,R.current.length-1)-1||bn.top>=-Oe||bn.bottom>=-Oe?flushSync(()=>fe(!0)):flushSync(()=>fe(!1))),Y&&(Y.current=await detectOverflow(Mn({...Qe,y:nt},Ue.offsetHeight),Ge)),{y:nt}}});function Zn(_,g){const{open:R,elements:Y}=_,{enabled:fe=!0,overflowRef:he,scrollRef:we,onChange:ze}=g,Oe=Gt(ze),De=React.useRef(!1),Ge=React.useRef(null),je=React.useRef(null);return React.useEffect(()=>{if(!fe)return;function $e(Qe){if(Qe.ctrlKey||!Me||he.current==null)return;const Ue=Qe.deltaY,zn=he.current.top>=-.5,bn=he.current.bottom>=-.5,an=Me.scrollHeight-Me.clientHeight,nt=Ue<0?-1:1,cn=Ue<0?"max":"min";Me.scrollHeight<=Me.clientHeight||(!zn&&Ue>0||!bn&&Ue<0?(Qe.preventDefault(),flushSync(()=>{Oe(kn=>kn+Math[cn](Ue,an*nt))})):/firefox/i.test(St())&&(Me.scrollTop+=Ue))}const Me=we?.current||Y.floating;if(R&&Me)return Me.addEventListener("wheel",$e),requestAnimationFrame(()=>{Ge.current=Me.scrollTop,he.current!=null&&(je.current={...he.current})}),()=>{Ge.current=null,je.current=null,Me.removeEventListener("wheel",$e)}},[fe,R,Y.floating,he,we,Oe]),React.useMemo(()=>fe?{floating:{onKeyDown(){De.current=!0},onWheel(){De.current=!1},onPointerMove(){De.current=!1},onScroll(){const $e=we?.current||Y.floating;if(!(!he.current||!$e||!De.current)){if(Ge.current!==null){const Me=$e.scrollTop-Ge.current;(he.current.bottom<-.5&&Me<-1||he.current.top<-.5&&Me>1)&&flushSync(()=>Oe(Qe=>Qe+Me))}requestAnimationFrame(()=>{Ge.current=$e.scrollTop})}}}}:{},[fe,he,Y.floating,we,Oe])}function Fn(_,g){const[R,Y]=_;let fe=!1;const he=g.length;for(let we=0,ze=he-1;we<he;ze=we++){const[Oe,De]=g[we]||[0,0],[Ge,je]=g[ze]||[0,0];De>=Y!=je>=Y&&R<=(Ge-Oe)*(Y-De)/(je-De)+Oe&&(fe=!fe)}return fe}function xt(_,g){return _[0]>=g.x&&_[0]<=g.x+g.width&&_[1]>=g.y&&_[1]<=g.y+g.height}function Vt(_){_===void 0&&(_={});const{buffer:g=.5,blockPointerEvents:R=!1,requireIntent:Y=!0}=_;let fe,he=!1,we=null,ze=null,Oe=performance.now();function De(je,$e){const Me=performance.now(),Qe=Me-Oe;if(we===null||ze===null||Qe===0)return we=je,ze=$e,Oe=Me,null;const Ue=je-we,zn=$e-ze,an=Math.sqrt(Ue*Ue+zn*zn)/Qe;return we=je,ze=$e,Oe=Me,an}const Ge=je=>{let{x:$e,y:Me,placement:Qe,elements:Ue,onClose:zn,nodeId:bn,tree:an}=je;return function(cn){function kn(){clearTimeout(fe),zn()}if(clearTimeout(fe),!Ue.domReference||!Ue.floating||Qe==null||$e==null||Me==null)return;const{clientX:qe,clientY:rt}=cn,Kn=[qe,rt],Ln=ia(cn),On=cn.type==="mouseleave",Nn=Ve(Ue.floating,Ln),Ye=Ve(Ue.domReference,Ln),on=Ue.domReference.getBoundingClientRect(),He=Ue.floating.getBoundingClientRect(),jn=Qe.split("-")[0],qn=$e>He.right-He.width/2,ut=Me>He.bottom-He.height/2,Xn=xt(Kn,on),zt=He.width>on.width,Ut=He.height>on.height,it=(zt?on:He).left,Bn=(zt?on:He).right,at=(Ut?on:He).top,ct=(Ut?on:He).bottom;if(Nn&&(he=!0,!On))return;if(Ye&&(he=!1),Ye&&!On){he=!0;return}if(On&&kt(cn.relatedTarget)&&Ve(Ue.floating,cn.relatedTarget)||an&&Xt(an.nodesRef.current,bn).some($n=>{let{context:tt}=$n;return tt?.open}))return;if(jn==="top"&&Me>=on.bottom-1||jn==="bottom"&&Me<=on.top+1||jn==="left"&&$e>=on.right-1||jn==="right"&&$e<=on.left+1)return kn();let Nt=[];switch(jn){case"top":Nt=[[it,on.top+1],[it,He.bottom-1],[Bn,He.bottom-1],[Bn,on.top+1]];break;case"bottom":Nt=[[it,He.top+1],[it,on.bottom-1],[Bn,on.bottom-1],[Bn,He.top+1]];break;case"left":Nt=[[He.right-1,ct],[He.right-1,at],[on.left+1,at],[on.left+1,ct]];break;case"right":Nt=[[on.right-1,ct],[on.right-1,at],[He.left+1,at],[He.left+1,ct]];break}function Lt($n){let[tt,ot]=$n;switch(jn){case"top":{const Et=[zt?tt+g/2:qn?tt+g*4:tt-g*4,ot+g+1],Ot=[zt?tt-g/2:qn?tt+g*4:tt-g*4,ot+g+1],Vn=[[He.left,qn||zt?He.bottom-g:He.top],[He.right,qn?zt?He.bottom-g:He.top:He.bottom-g]];return[Et,Ot,...Vn]}case"bottom":{const Et=[zt?tt+g/2:qn?tt+g*4:tt-g*4,ot-g],Ot=[zt?tt-g/2:qn?tt+g*4:tt-g*4,ot-g],Vn=[[He.left,qn||zt?He.top+g:He.bottom],[He.right,qn?zt?He.top+g:He.bottom:He.top+g]];return[Et,Ot,...Vn]}case"left":{const Et=[tt+g+1,Ut?ot+g/2:ut?ot+g*4:ot-g*4],Ot=[tt+g+1,Ut?ot-g/2:ut?ot+g*4:ot-g*4];return[...[[ut||Ut?He.right-g:He.left,He.top],[ut?Ut?He.right-g:He.left:He.right-g,He.bottom]],Et,Ot]}case"right":{const Et=[tt-g,Ut?ot+g/2:ut?ot+g*4:ot-g*4],Ot=[tt-g,Ut?ot-g/2:ut?ot+g*4:ot-g*4],Vn=[[ut||Ut?He.left+g:He.right,He.top],[ut?Ut?He.left+g:He.right:He.left+g,He.bottom]];return[Et,Ot,...Vn]}}}if(!Fn([qe,rt],Nt)){if(he&&!Xn)return kn();if(!On&&Y){const $n=De(cn.clientX,cn.clientY);if($n!==null&&$n<.1)return kn()}Fn([qe,rt],Lt([$e,Me]))?!he&&Y&&(fe=window.setTimeout(kn,40)):kn()}}};return Ge.__options={blockPointerEvents:R},Ge}},622:(F,P,t)=>{"use strict";t.d(P,{N:()=>L});var i=t(7545),d=t(2776),r=t(3706),x=t(4546),l=t(7004);function p(){var T=(0,d.useRef)(!1);return(0,l.E)(function(){return T.current=!0,function(){T.current=!1}},[]),T}function s(){var T=p(),Q=(0,i.zs)((0,d.useState)(0),2),G=Q[0],se=Q[1],U=(0,d.useCallback)(function(){T.current&&se(G+1)},[G]),y=(0,d.useCallback)(function(){return x.Ay.postRender(U)},[U]);return[y,G]}var f=t(8331),z=t(7157),N=t(6514),h=function(T){var Q=T.children,G=T.initial,se=T.isPresent,U=T.onExitComplete,y=T.custom,B=T.presenceAffectsLayout,ne=(0,z.M)(A),M=(0,N.B)(),$=(0,d.useMemo)(function(){return{id:M,initial:G,isPresent:se,custom:y,onExitComplete:function(ae){var J,xe;ne.set(ae,!0);try{for(var q=(0,i.Ju)(ne.values()),le=q.next();!le.done;le=q.next()){var te=le.value;if(!te)return}}catch(Z){J={error:Z}}finally{try{le&&!le.done&&(xe=q.return)&&xe.call(q)}finally{if(J)throw J.error}}U?.()},register:function(ae){return ne.set(ae,!1),function(){return ne.delete(ae)}}}},B?void 0:[se]);return(0,d.useMemo)(function(){ne.forEach(function(ae,J){return ne.set(J,!1)})},[se]),d.useEffect(function(){!se&&!ne.size&&U?.()},[se]),d.createElement(f.t.Provider,{value:$},Q)};function A(){return new Map}var I=t(1837),b=t(6223),u=function(T){return T.key||""};function S(T,Q){T.forEach(function(G){var se=u(G);Q.set(se,G)})}function E(T){var Q=[];return d.Children.forEach(T,function(G){(0,d.isValidElement)(G)&&Q.push(G)}),Q}var L=function(T){var Q=T.children,G=T.custom,se=T.initial,U=se===void 0?!0:se,y=T.onExitComplete,B=T.exitBeforeEnter,ne=T.presenceAffectsLayout,M=ne===void 0?!0:ne,$=(0,i.zs)(s(),1),ae=$[0],J=(0,d.useContext)(I.L).forceRender;J&&(ae=J);var xe=p(),q=E(Q),le=q,te=new Set,Z=(0,d.useRef)(le),ce=(0,d.useRef)(new Map).current,O=(0,d.useRef)(!0);if((0,l.E)(function(){O.current=!1,S(q,ce),Z.current=le}),(0,b.l)(function(){O.current=!0,ce.clear(),te.clear()}),O.current)return d.createElement(d.Fragment,null,le.map(function(be){return d.createElement(h,{key:u(be),isPresent:!0,initial:U?void 0:!1,presenceAffectsLayout:M},be)}));le=(0,i.fX)([],(0,i.zs)(le),!1);for(var ue=Z.current.map(u),D=q.map(u),ee=ue.length,ie=0;ie<ee;ie++){var ye=ue[ie];D.indexOf(ye)===-1&&te.add(ye)}return B&&te.size&&(le=[]),te.forEach(function(be){if(D.indexOf(be)===-1){var j=ce.get(be);if(j){var w=ue.indexOf(be),W=function(){ce.delete(be),te.delete(be);var oe=Z.current.findIndex(function(ve){return ve.key===be});if(Z.current.splice(oe,1),!te.size){if(Z.current=q,xe.current===!1)return;ae(),y&&y()}};le.splice(w,0,d.createElement(h,{key:u(j),isPresent:!1,onExitComplete:W,custom:G,presenceAffectsLayout:M},j))}}}),le=le.map(function(be){var j=be.key;return te.has(j)?be:d.createElement(h,{key:u(be),isPresent:!0,presenceAffectsLayout:M},be)}),r._!=="production"&&B&&le.length>1&&console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),d.createElement(d.Fragment,null,te.size?le:le.map(function(be){return(0,d.cloneElement)(be)}))}},661:(F,P,t)=>{var i=t(142),d=t(3581),r=t(4383),x=t(8098),l=t(4683),p=t(3905),s=Object.prototype,f=s.hasOwnProperty;function z(N,h){var A=r(N),I=!A&&d(N),b=!A&&!I&&x(N),u=!A&&!I&&!b&&p(N),S=A||I||b||u,E=S?i(N.length,String):[],L=E.length;for(var T in N)(h||f.call(N,T))&&!(S&&(T=="length"||b&&(T=="offset"||T=="parent")||u&&(T=="buffer"||T=="byteLength"||T=="byteOffset")||l(T,L)))&&E.push(T);return E}F.exports=z},718:(F,P,t)=>{var i=t(435),d=Array.prototype,r=d.splice;function x(l){var p=this.__data__,s=i(p,l);if(s<0)return!1;var f=p.length-1;return s==f?p.pop():r.call(p,s,1),--this.size,!0}F.exports=x},738:(F,P,t)=>{"use strict";t.d(P,{s:()=>ki});var i=t(2776),d=t.n(i);const r="#f6f5ffff",x="#887be3ff",l="#6250d4ff",p="#3a26bdff",s="#6250d4ff",f="#6250d4ff",z="#c24632ff",N="#b1a8f0ff",h="#ffffffff",A="#ffffffff",I="#ffffffff",b="#ffffffff",u="#00000000",S="#e0dcfaff",E="#00000000",L="#00000000",T="#ffffffff",Q="#e0dcfaff",G="#ffffffff",se="#e0dcfaff",U="#6250d4ff",y="#4e3bccff",B="#c24632ff",ne="#b1a8f0ff",M="#6250d4ff",$="#6250d4ff",ae="#c24632ff",J="#b1a8f0ff",xe="#00000000",q="#00000000",le="#00000000",te="#00000000",Z="#ffffffff",ce="#000000ff",O="#edf4ffff",ue="#d9e7ffff",D="#ccdefcff",ee="#a6c3f5ff",ie="#7aa7f5ff",ye="#5b91f0ff",be="#4580e5ff",j="#326cd1ff",w="#235ec4ff",W="#1650b5ff",oe="#eaf7e4ff",ve="#d1f5bfff",Se="#c7edb4ff",Ae="#a1db84ff",Ie="#6dc242ff",We="#53a828ff",Le="#45991fff",Ke="#388716ff",Ze="#2b7a0cff",ln="#266b0bff",Rn="#ffffffff",un="#f7f7f7ff",dt="#f0f1f2ff",In="#e1e4e8ff",Dn="#d0d4d9ff",yn="#c1c6ccff",Cn="#a7adb5ff",Ct="#979fa8ff",mt="#889099ff",ht="#7e868fff",st="#6f7680ff",At="#656c75ff",St="#596069ff",Pt="#464c54ff",kt="#373c42ff",Mt="#23282eff",Ht="#0f1214ff",$t="#000000ff",Bt="#fcf2f0ff",dn="#fce2deff",Ce="#f7d7d2ff",en="#f0b3aaff",Un="#f08878ff",Ve="#eb6b57ff",gn="#e05843ff",Pn="#c24632ff",wt="#b03927ff",ft="#9e2c1bff",Kt="#f6f5ffff",ua="#e0dcfaff",Sa="#c8c1f5ff",Ya="#b1a8f0ff",Na="#9c90e8ff",gt="#887be3ff",Jt="#7565dbff",Zt="#6250d4ff",ra="#4e3bccff",Xt="#3a26bdff",ia="#fcf6d4ff",ja="#f7ecb2ff",oa="#f2e49bff",Dt="#e5d067ff",da="#d9b216ff",Ta="#cc9c00ff",Pa="#bf8c00ff",qt="#ad7a03ff",ea="#a16c03ff",Fa="#945f03ff",Ba="#cdecf7ff",ga="#81cfecff",Ra="#049fd9ff",va="#cfddf9ff",ca="#86aaf0ff",ba="#0d56e2ff",sa="#efe6f7ff",Oa="#d8bfeaff",fa="#b180d6ff",na="#f2cce2ff",ma="#df80b7ff",ir="#c0006fff",pa="#fde0e4ff",ha="#f9b1bcff",or="#f4647aff",Xa="#f1d6ccff",vr="#db9780ff",br="#b73000ff",Va="#ebeacfff",Ua="#cdcb88ff",yt="#9c9711ff",Ia="#d6e2d4ff",wa="#98b693ff",Gt="#316e27ff",Ja="#cceee7ff",xa="#80d3c4ff",Qa="#00a889ff",ka="#cce2e5ff",qa="#80b5beff",dr="#006c7dff",Ma="#049fd9ff",Ha="#0d56e2ff",cr="#b180d6ff",er="#c0006fff",Ee="#f4647aff",Re="#b73000ff",Xe="#9c9711ff",xn="#316e27ff",Tn="#00a889ff",wn="#006c7dff",Sn="#e1e4e8ff",et="#d0d4d9ff",Jn="#c1c6ccff",k="#4580e5ff",K="#45991fff",re="#d0d4d9ff",Pe="#ffffffff",Be="#e1e4e8ff",Fe="#6dc242ff",Je="#7aa7f5ff",rn="#e1e4e8ff",pn="#4580e5ff",Qn="#f7f7f7ff",lt="#e1e4e8ff",me="#d0d4d9ff",ge="#c24632ff",hn="#c24632ff",vn="#f0b3aaff",Wn="#ffffffff",Hn="#ffffffff",Mn="#ffffffff",Yn="#ffffffff",Zn="#fce2deff",Fn="#ffffffff",xt="#c24632ff",Vt="#b03927ff",_="#f0b3aaff",g="#c24632ff",R="#c24632ff",Y="#f0b3aaff",fe="#00000000",he="#00000000",we="#00000000",ze="#45991fff",Oe="#d9b216ff",De="#e05843ff",Ge="#c1c6ccff",je="#c1c6ccff",$e="#a7adb5ff",Me="#45991fff",Qe="#e05843ff",Ue="#5b91f0ff",zn="#45991fff",bn="#eaf7e4ff",an="#377a19ff",nt="#d9b216ff",cn="#f7ecb2ff",kn="#ad7a03ff",qe="#e05843ff",rt="#fce2deff",Kn="#c83721ff",Ln="#53a828ff",On="#20ab4eff",Nn="#23282eff",Ye="#c1c6ccff",on="#c1c6ccff",He="#f7f7f7ff",jn="#326cd1ff",qn="#d0d4d9ff",ut="#ffffffff",Xn="#0f1214ff",zt="#7aa7f5ff",Ut="#d0d4d9ff",it="#326cd1ff",Bn="#326cd1ff",at="#326cd1ff",ct="#c24632ff",Nt="#a6c3f5ff",Lt="#ffffffff",$n="#ffffffff",tt="#ffffffff",ot="#ffffffff",Et="#00000000",Ot="#d9e7ffff",Vn="#00000000",Wt="#00000000",ya="#ffffffff",Yt="#d9e7ffff",_t="#00000000",za="#ffffffff",sr="#326cd1ff",Rr="#235ec4ff",Wo="#c24632ff",Ko="#a6c3f5ff",Go="#326cd1ff",Zo="#326cd1ff",Oi="#c24632ff",Or="#a6c3f5ff",Zr="#00000000",Yo="#00000000",Ii="#00000000",Xo="#00000000",Mi="#e1e4e8ff",Jo="#f7f7f7ff",Qo="#6f7680ff",qo="#656c75ff",Yr="#373c42ff",Xr="#23282eff",ed="#049FD91A",Ai="#049FD933",Di="#049FD94D",Jr="#049FD966",nd="#049FD980",Qr="#049FD999",td="#049FD9B3",ad="#049FD9CC",rd="#049FD9E6",id="#049FD9",od=16,dd=24,Ir=36,cd="0px 2px 5px #0000000D",sd=0,fd="0px 2px 5px #0000000D",ld="0px -2px 5px #0000000D",ud="0px 3px 8px #00000014",Mr="0px -3px 8px #00000014",gd="0px 4px 12px #0000001F",Li="0px -4px 12px #0000001F",vd="0px 4px 12px #000000E6",jt="0px -4px 12px #000000E6",Ni="0px 2px 5px #0000000D",bd="0px 3px 8px #00000014",md="0px 4px 12px #0000001F",pd=1,ji=3,Fi=5,hd=7,Ar=0,Bi=4,Vi=8,Ui=12,Dr=16,Hi=24,wd=36,xd=48,kd=0,yd=4,zd=6,Ed=8,Lr=12,Nr=0,_d=1,$i=2,Wi=12,Cd=8,Ki=2,mr=3,jr=400,qr=48,Sd=36,Gi=24,Td=16,Pd=12,Rd=8,Od=4,ei=400,Id=600,ni=700,ti=18,Md=20,Ad=22,Zi=24,Dd=34,Ld=44,Nd=52,jd=60,Fd=72,Yi=12,Xi=14,ai=16,ri=18,Bd=24,Vd=32,ii=40,oi=48,Fc=60,zr=8,Ud=6,Hd=7,xr=12,Ji=14,$d=5,Qi=16,Er=13,Wd=6,Kd=2,Gd=2,di=6,ci=14,Bc=12,Zd=700,Yd=20,Xd=18,Jd=28,si=32,qi=20,Qd=4,Vc=8,qd=7,ec=10,fi=0,nc=0,tc=3,ac=5,rc=0,ic=0,pr=20,oc=36,dc=48,li=72,eo=15,Fr="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",no="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",to="Roboto Mono, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace",ui="'Sharp Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",ao=400,gi=600,cc=700,ro=null;var io=Object.defineProperty,nr=(tn,vt)=>io(tn,"name",{value:vt,configurable:!0});const oo={sm:"small",md:"middle",lg:"large"},co=null;var kr=Object.defineProperty,so=(tn,vt)=>kr(tn,"name",{value:vt,configurable:!0});const sc=null,fo={sm:{pixels:[0,960],kind:"minMax"},md:{pixels:[960,1280],kind:"minMax"},lg:{pixels:[1280,1680],kind:"minMax"},xl:{pixels:[1680,2080],kind:"minMax"},xxl:{pixels:[2081,Number.MAX_SAFE_INTEGER],kind:"min"}},_r=null,fc=null,lo=null;var uo=Object.defineProperty,go=(tn,vt)=>uo(tn,"name",{value:vt,configurable:!0});const lc=null;var vo=Object.defineProperty,uc=(tn,vt)=>vo(tn,"name",{value:vt,configurable:!0});const vi=null,gc=null,bo=null,Ea={blue1:O,blue2:ue,blue3:D,blue4:ee,blue5:ie,blue6:ye,blue7:be,blue8:j,blue9:w,blue10:W,green1:oe,green2:ve,green3:Se,green4:Ae,green5:Ie,green6:We,green7:Le,green8:Ke,green9:Ze,green10:ln,neutral1:Rn,neutral2:un,neutral3:dt,neutral4:In,neutral5:Dn,neutral6:yn,neutral7:Cn,neutral8:Ct,neutral9:mt,neutral10:ht,neutral11:st,neutral12:At,neutral13:St,neutral14:Pt,neutral15:kt,neutral16:Mt,neutral17:Ht,neutral18:$t,red1:Bt,red2:dn,red3:Ce,red4:en,red5:Un,red6:Ve,red7:gn,red8:Pn,red9:wt,red10:ft,purple1:Kt,purple2:ua,purple3:Sa,purple4:Ya,purple5:Na,purple6:gt,purple7:Jt,purple8:Zt,purple9:ra,purple10:Xt,yellow1:ia,yellow2:ja,yellow3:oa,yellow4:Dt,yellow5:da,yellow6:Ta,yellow7:Pa,yellow8:qt,yellow9:ea,yellow10:Fa,accentA1:Ba,accentA2:ga,accentA3:Ra,accentB1:va,accentB2:ca,accentB3:ba,accentC1:sa,accentC2:Oa,accentC3:fa,accentD1:na,accentD2:ma,accentD3:ir,accentE1:pa,accentE2:ha,accentE3:or,accentF1:Xa,accentF2:vr,accentF3:br,accentG1:Va,accentG2:Ua,accentG3:yt,accentH1:Ia,accentH2:wa,accentH3:Gt,accentI1:Ja,accentI2:xa,accentI3:Qa,accentJ1:ka,accentJ2:qa,accentJ3:dr},mo={accentA1:Ea.accentA1,accentB1:Ea.accentB1,accentC1:Ea.accentC1,accentD1:Ea.accentD1,accentE1:Ea.accentE1,accentF1:Ea.accentF1,accentG1:Ea.accentG1,accentH1:Ea.accentH1,accentI1:Ea.accentI1,accentJ1:Ea.accentJ1},Cr={startColor:Ln,endColor:On},po={fill:r,border:x,text:l,visitedLink:p},Qt=[Ma,Ha,cr,er,Ee,Re,Xe,xn,Tn,wn],$a={positive:zn,warning:nt,negative:qe},ho=12,Wa={none:0,xxs:4,xs:8,sm:12,md:16,lg:24,xl:36,xxl:48},bi="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",Br="Roboto Mono, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace",wo={body:`Inter, ${bi}`,code:`${Br}`,heading:`'Sharp Sans', ${bi}`},fr={regular:400,semiBold:600,bold:700},xo={xxxs:12,xxs:14,xs:16,sm:18,md:24,lg:32,xl:40,xxl:48,xxxl:60},Vr={xxxs:18,xxs:20,xs:22,sm:24,md:34,lg:44,xl:52,xxl:60,xxxl:72};var mi=Object.defineProperty,Ur=(tn,vt)=>mi(tn,"name",{value:vt,configurable:!0});const Ka=Ur(tn=>tn+(tn===0?"":"px"),"convertNumberToPixelValue"),tr={"mds-space-none":Ka(Wa.none),"mds-space-xxs":Ka(Wa.xxs),"mds-space-xs":Ka(Wa.xs),"mds-space-sm":Ka(Wa.sm),"mds-space-md":Ka(Wa.md),"mds-space-lg":Ka(Wa.lg),"mds-space-xl":Ka(Wa.xl),"mds-space-xxl":Ka(Wa.xxl)},lr={"margin-none":tr["mds-space-none"],"margin-xxs":tr["mds-space-xxs"],"margin-xs":tr["mds-space-xs"],"margin-sm":tr["mds-space-sm"],"margin-md":tr["mds-space-md"],"margin-lg":tr["mds-space-lg"],"margin-xl":tr["mds-space-xl"],"margin-xxl":tr["mds-space-xxl"]};var pi=(tn=>(tn.baseline="baseline",tn.bottom="end",tn.middle="center",tn.top="start",tn))(pi||{}),ko=(tn=>(tn.lifted="lifted",tn.liftedReverse="liftedReverse",tn.none="none",tn.raised="raised",tn.raisedReverse="raisedReverse",tn.subtle="subtle",tn.subtleReverse="subtleReverse",tn))(ko||{}),yo=(tn=>(tn[tn.xl=912]="xl",tn[tn.lg=768]="lg",tn[tn.md=576]="md",tn[tn.sm=384]="sm",tn))(yo||{}),hr=(tn=>(tn.bold="bold",tn.light="light",tn.medium="medium",tn))(hr||{}),hi=(tn=>(tn.medium="medium",tn))(hi||{}),zo=(tn=>(tn.body="body",tn.code="code",tn.heading="heading",tn))(zo||{}),Eo=Object.defineProperty,_o=(tn,vt)=>Eo(tn,"name",{value:vt,configurable:!0});function Sr(tn,...vt){const _a=Array.isArray(tn)?tn:[tn];for(const ur of _a){const{message:gr,prop:ar,propValues:rr}=ur;if(ar&&!rr||ar&&rr&&rr.includes(ar))console.warn(`Magnetic: ${gr}`,vt);else return}}_o(Sr,"consoleWarn");var Co=Object.defineProperty,vc=(tn,vt)=>Co(tn,"name",{value:vt,configurable:!0});const bc=null;var So=Object.defineProperty,Hr=(tn,vt)=>So(tn,"name",{value:vt,configurable:!0});const mc=null;var To=Object.defineProperty,Po=(tn,vt)=>To(tn,"name",{value:vt,configurable:!0});const Ro=null;var Oo=Object.defineProperty,wi=(tn,vt)=>Oo(tn,"name",{value:vt,configurable:!0});const Io=null;var Mo=t(5622),Ao=t(6978),$r=Object.defineProperty,Do=(tn,vt)=>$r(tn,"name",{value:vt,configurable:!0});const xi=Do(tn=>typeof tn=="number"?tn:tn?1:0,"computeFlexWeight"),ki=(0,i.forwardRef)(({align:tn="stretch",alignSelf:vt,as:_a,basis:ur="auto",className:gr,direction:ar="horizontal",gap:rr=0,grow:yi=0,justify:Lo="flex-start",justifySelf:Wr,margin:No,maxWidth:zi,minWidth:Ei,reverse:jo=!1,shrink:Fo=1,style:_i,width:Ci,wrap:Bo=!1,...Vo},Si)=>{const yr=(0,i.useMemo)(()=>_a||"div",[_a]),Ti=(0,Mo.K)(No),Uo=(0,Ao.U)("mds-flex",gr,Ti);return d().createElement(d().Fragment,null,(0,i.createElement)(yr,{...Vo,className:Uo,ref:Si,style:{..._i,alignItems:tn,display:"flex",flexBasis:ur,flexDirection:`${ar==="horizontal"?"row":"column"}${jo?"-reverse":""}`,flexGrow:xi(yi),flexShrink:xi(Fo),flexWrap:Bo?"wrap":"nowrap",gap:typeof rr=="number"?rr:Wa[rr],justifyContent:Lo,...vt&&{alignSelf:vt},...Wr&&{justifySelf:Wr},...zi&&{maxWidth:zi},...Ei&&{minWidth:Ei},...Ci&&{width:Ci}}}))})},789:(F,P,t)=>{var i=t(7752),d=t(718),r=t(7849),x=t(3957),l=t(845);function p(s){var f=-1,z=s==null?0:s.length;for(this.clear();++f<z;){var N=s[f];this.set(N[0],N[1])}}p.prototype.clear=i,p.prototype.delete=d,p.prototype.get=r,p.prototype.has=x,p.prototype.set=l,F.exports=p},845:(F,P,t)=>{var i=t(435);function d(r,x){var l=this.__data__,p=i(l,r);return p<0?(++this.size,l.push([r,x])):l[p][1]=x,this}F.exports=d},971:(F,P,t)=>{var i=t(8037);function d(r,x){var l=i(this,r),p=l.size;return l.set(r,x),this.size+=l.size==p?0:1,this}F.exports=d},1020:(F,P,t)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=t(9476),d=Symbol.for("react.element"),r=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function s(f,z,N){var h,A={},I=null,b=null;N!==void 0&&(I=""+N),z.key!==void 0&&(I=""+z.key),z.ref!==void 0&&(b=z.ref);for(h in z)x.call(z,h)&&!p.hasOwnProperty(h)&&(A[h]=z[h]);if(f&&f.defaultProps)for(h in z=f.defaultProps,z)A[h]===void 0&&(A[h]=z[h]);return{$$typeof:d,type:f,key:I,ref:b,props:A,_owner:l.current}}P.Fragment=r,P.jsx=s,P.jsxs=s},1029:(F,P,t)=>{var i=t(7187),d=Object.prototype,r=d.hasOwnProperty,x=d.toString,l=i?i.toStringTag:void 0;function p(s){var f=r.call(s,l),z=s[l];try{s[l]=void 0;var N=!0}catch{}var h=x.call(s);return N&&(f?s[l]=z:delete s[l]),h}F.exports=p},1036:(F,P,t)=>{var i=t(8037);function d(r){var x=i(this,r).delete(r);return this.size-=x?1:0,x}F.exports=d},1138:(F,P,t)=>{"use strict";t.d(P,{_:()=>U});var i=t(2228),d=t(7504);const r=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__;var x=t(1146);const l={};function p(y){const B=l[y];if(B)return B;let ne=x.j[y];if((0,i.a3)(ne))return l[y]=ne.bind(x.j);const M=x.j.document;if(M&&typeof M.createElement=="function")try{const $=M.createElement("iframe");$.hidden=!0,M.head.appendChild($);const ae=$.contentWindow;ae&&ae[y]&&(ne=ae[y]),M.head.removeChild($)}catch($){r&&d.vF.warn(`Could not create sandbox iframe for ${y} check, bailing to window.${y}: `,$)}return ne&&(l[y]=ne.bind(x.j))}function s(y){l[y]=void 0}function f(...y){return p("fetch")(...y)}function z(...y){return p("setTimeout")(...y)}var N=t(3840),h=t(7326);function A(y){const B=[];function ne(){return y===void 0||B.length<y}function M(J){return B.splice(B.indexOf(J),1)[0]||Promise.resolve(void 0)}function $(J){if(!ne())return(0,h.xg)(new N.U("Not adding Promise because buffer limit was reached."));const xe=J();return B.indexOf(xe)===-1&&B.push(xe),xe.then(()=>M(xe)).then(null,()=>M(xe).then(null,()=>{})),xe}function ae(J){return new h.T2((xe,q)=>{let le=B.length;if(!le)return xe(!0);const te=setTimeout(()=>{J&&J>0&&xe(!1)},J);B.forEach(Z=>{(0,h.XW)(Z).then(()=>{--le||(clearTimeout(te),xe(!0))},q)})})}return{$:B,add:$,drain:ae}}var I=t(8972);const b=60*1e3;function u(y,B=Date.now()){const ne=parseInt(`${y}`,10);if(!isNaN(ne))return ne*1e3;const M=Date.parse(`${y}`);return isNaN(M)?b:M-B}function S(y,B){return y[B]||y.all||0}function E(y,B,ne=Date.now()){return S(y,B)>ne}function L(y,{statusCode:B,headers:ne},M=Date.now()){const $={...y},ae=ne&&ne["x-sentry-rate-limits"],J=ne&&ne["retry-after"];if(ae)for(const xe of ae.trim().split(",")){const[q,le,,,te]=xe.split(":",5),Z=parseInt(q,10),ce=(isNaN(Z)?60:Z)*1e3;if(!le)$.all=M+ce;else for(const O of le.split(";"))O==="metric_bucket"?(!te||te.split(";").includes("custom"))&&($[O]=M+ce):$[O]=M+ce}else J?$.all=M+u(J,M):B===429&&($.all=M+60*1e3);return $}var T=t(3894);const Q=64;function G(y,B,ne=A(y.bufferSize||Q)){let M={};const $=J=>ne.drain(J);function ae(J){const xe=[];if((0,I.yH)(J,(Z,ce)=>{const O=(0,I.zk)(ce);if(E(M,O)){const ue=se(Z,ce);y.recordDroppedEvent("ratelimit_backoff",O,ue)}else xe.push(Z)}),xe.length===0)return(0,h.XW)({});const q=(0,I.h4)(J[0],xe),le=Z=>{(0,I.yH)(q,(ce,O)=>{const ue=se(ce,O);y.recordDroppedEvent(Z,(0,I.zk)(O),ue)})},te=()=>B({body:(0,I.bN)(q)}).then(Z=>(Z.statusCode!==void 0&&(Z.statusCode<200||Z.statusCode>=300)&&T.T&&d.vF.warn(`Sentry responded with status code ${Z.statusCode} to sent event.`),M=L(M,Z),Z),Z=>{throw le("network_error"),Z});return ne.add(te).then(Z=>Z,Z=>{if(Z instanceof N.U)return T.T&&d.vF.error("Skipped sending event because buffer is full."),le("queue_overflow"),(0,h.XW)({});throw Z})}return{send:ae,flush:$}}function se(y,B){if(!(B!=="event"&&B!=="transaction"))return Array.isArray(y)?y[1]:void 0}function U(y,B=p("fetch")){let ne=0,M=0;function $(ae){const J=ae.body.length;ne+=J,M++;const xe={body:ae.body,method:"POST",referrerPolicy:"origin",headers:y.headers,keepalive:ne<=6e4&&M<15,...y.fetchOptions};if(!B)return s("fetch"),(0,h.xg)("No fetch implementation available");try{return B(y.url,xe).then(q=>(ne-=J,M--,{statusCode:q.status,headers:{"x-sentry-rate-limits":q.headers.get("X-Sentry-Rate-Limits"),"retry-after":q.headers.get("Retry-After")}}))}catch(q){return s("fetch"),ne-=J,M--,(0,h.xg)(q)}}return G(y,$)}},1146:(F,P,t)=>{"use strict";t.d(P,{j:()=>d});var i=t(9513);const d=i.O},1308:(F,P,t)=>{"use strict";t.d(P,{P_:()=>I});const d={DEFAULTS:{ID:"mds-theme-style"}};var r=Object.defineProperty,x=(dn,Ce)=>r(dn,"name",{value:Ce,configurable:!0}),l=(dn,Ce,en)=>{if(!Ce.has(dn))throw TypeError("Cannot "+en)},p=(dn,Ce,en)=>(l(dn,Ce,"read from private field"),en?en.call(dn):Ce.get(dn)),s=(dn,Ce,en)=>{if(Ce.has(dn))throw TypeError("Cannot add the same private member more than once");Ce instanceof WeakSet?Ce.add(dn):Ce.set(dn,en)},f=(dn,Ce,en,Un)=>(l(dn,Ce,"write to private field"),Un?Un.call(dn,en):Ce.set(dn,en),en),z,N,h;const A=class{constructor(Ce={}){s(this,z,void 0),s(this,N,void 0);const{id:en=d.DEFAULTS.ID}=Ce;f(this,N,en),f(this,z,this.sheet??this.element??void 0)}get context(){return p(this,z)}get element(){const Ce=p(this,N);if(globalThis?.document)return globalThis.document.querySelector(`#${Ce}`)??(()=>{const en=globalThis.document.createElement("style");return en.setAttribute("type","text/css"),en.setAttribute("id",Ce),globalThis.document.head.append(en),en})()}get sheet(){const Ce=p(this,N);if(globalThis?.document?.adoptedStyleSheets)return globalThis.document.adoptedStyleSheets.find(en=>en.id===Ce)??(()=>{const en=new CSSStyleSheet;return en.id=Ce,globalThis.document.adoptedStyleSheets=[...globalThis.document.adoptedStyleSheets,en],en})()}set(Ce={}){const{style:en=""}=Ce,Un=p(this,z);return Un instanceof CSSStyleSheet&&Un.replaceSync(en),Un instanceof HTMLStyleElement&&(Un.textContent=en),this}static get instance(){return p(this,h)||f(this,h,new this),p(this,h)}};z=new WeakMap,N=new WeakMap,h=new WeakMap,x(A,"Styles"),s(A,h,void 0);let I=A;const b={DARK:"dark",LIGHT:"light"},u={modeDefaults:{dark:"dark-classic",light:"light-classic"},theme:"light-classic",themes:[{label:"Dark",selector:"dark",id:"dark",mode:b.DARK},{label:"Dark Classic",selector:"dark-classic",id:"dark-classic",mode:b.DARK},{label:"Light",selector:"light",id:"light",mode:b.LIGHT},{label:"Light Classic",selector:"light-classic",id:"light-classic",mode:b.LIGHT},{label:"Blue Dark",selector:"blue-dark",id:"blue-dark",mode:b.DARK},{label:"Blue Dark Classic",selector:"blue-dark-classic",id:"blue-dark-classic",mode:b.DARK},{label:"Blue Light",selector:"blue-light",id:"blue-light",mode:b.LIGHT},{label:"Blue Light Classic",selector:"blue-light-classic",id:"blue-light-classic",mode:b.LIGHT}]},S={label:"System",selector:"light-classic",id:"system",mode:b.LIGHT},T={ATTRIBUTES:{ID:"data-mds-theme-id",MODE_DEFAULTS:"data-mds-mode-defaults",SELECTOR:"data-mds-theme",THEMES:"data-mds-themes"},MAGNETIC_THEME_CONFIG:u,THEME_EVENT:{CHANGE_THEME:"change:theme"},THEME_SERIAL_SYSTEM:S,THEME_MODE:b};var Q=Object.defineProperty,G=(dn,Ce)=>Q(dn,"name",{value:Ce,configurable:!0}),se=(dn,Ce,en)=>{if(!Ce.has(dn))throw TypeError("Cannot "+en)},U=(dn,Ce,en)=>(se(dn,Ce,"read from private field"),en?en.call(dn):Ce.get(dn)),y=(dn,Ce,en)=>{if(Ce.has(dn))throw TypeError("Cannot add the same private member more than once");Ce instanceof WeakSet?Ce.add(dn):Ce.set(dn,en)},B=(dn,Ce,en,Un)=>(se(dn,Ce,"write to private field"),Un?Un.call(dn,en):Ce.set(dn,en),en),ne,M,$,ae;const J=class jc{constructor(Ce={}){y(this,ne,void 0),y(this,M,void 0),y(this,$,void 0),B(this,M,globalThis?.matchMedia?.("(prefers-color-scheme: dark)")),B(this,ne,globalThis?.document?.createElement("div")),B(this,$,{[T.THEME_EVENT.CHANGE_THEME]:[]}),this.set(Ce)}set context(Ce){const{current:en,modeDefaults:Un,themes:Ve}=this;U(this,ne).removeAttribute(T.ATTRIBUTES.ID),U(this,ne).removeAttribute(T.ATTRIBUTES.SELECTOR),U(this,ne).removeAttribute(T.ATTRIBUTES.MODE_DEFAULTS),U(this,ne).removeAttribute(T.ATTRIBUTES.THEMES),B(this,ne,Ce),this.set({theme:en?.id,modeDefaults:Un,themes:Ve})}get current(){if(!U(this,ne))return;const Ce=U(this,ne).getAttribute(T.ATTRIBUTES.ID);return this.themes.find(en=>en.id===Ce)}set current(Ce){if(!U(this,ne)||U(this,ne).getAttribute(T.ATTRIBUTES.ID)===Ce)return;const Un=this.themes.find(gn=>gn.id===Ce);U(this,ne).setAttribute(T.ATTRIBUTES.ID,Un?.id??""),U(this,ne).setAttribute(T.ATTRIBUTES.SELECTOR,Un?.selector??"");const{onSystemChange:Ve}=this;if(Ce===T.THEME_SERIAL_SYSTEM.id){this.onSystemChange(),U(this,M)?.addEventListener("change",Ve.bind(this));return}this.handleThemeChange(),U(this,M)?.removeEventListener("change",Ve.bind(this))}get modeDefaults(){const Ce=U(this,ne).getAttribute(T.ATTRIBUTES.MODE_DEFAULTS)||"{}";return JSON.parse(Ce)}set modeDefaults(Ce){const en=JSON.stringify(Ce);U(this,ne).setAttribute(T.ATTRIBUTES.MODE_DEFAULTS,en)}get themes(){const Ce=U(this,ne).getAttribute(T.ATTRIBUTES.THEMES)||"[]";return JSON.parse(Ce)}set themes(Ce){const en=JSON.stringify(Ce);U(this,ne).setAttribute(T.ATTRIBUTES.THEMES,en)}emit(Ce){const{type:en}=Ce,Un=U(this,$)[en];if(Un)for(const Ve of Un)Ve(Ce)}handleThemeChange(){const Ce=U(this,ne).getAttribute(T.ATTRIBUTES.ID)??"",en=this.themes.find(Ve=>Ve.id===Ce),Un=new CustomEvent(T.THEME_EVENT.CHANGE_THEME,{detail:{theme:en}});this.emit(Un)}onSystemChange(Ce){const{matches:en}=Ce??{matches:U(this,M)?.matches??!1},{modeDefaults:Un,themes:Ve}=this,gn=Ve.find(ft=>ft.id===T.THEME_SERIAL_SYSTEM.id),Pn=en?Un.dark:Un.light,wt=Ve.find(ft=>ft.id===Pn);gn.selector=wt?.selector??gn.selector,gn.mode=wt?.mode??gn.mode,this.themes=Ve,U(this,ne).setAttribute(T.ATTRIBUTES.SELECTOR,gn.selector),this.handleThemeChange()}addEventListener(Ce,en){return U(this,$)[Ce].includes(en)?this:(U(this,$)[Ce].push(en),this)}removeEventListener(Ce,en){const Un=U(this,$)[Ce].indexOf(en);return Un===-1?this:(U(this,$)[Ce].splice(Un,1),this)}set(Ce){Ce.context&&Ce.context!==U(this,ne)&&(this.context=Ce.context),this.modeDefaults=Ce.modeDefaults?{...Ce.modeDefaults}:this.modeDefaults,this.themes=Ce.themes?[...Ce.themes,T.THEME_SERIAL_SYSTEM]:this.themes;const en=U(this,ne).getAttribute(T.ATTRIBUTES.ID);return this.current=Ce.theme??this.current?.id??en??"light-classic",this}static get instance(){return U(this,ae)||B(this,ae,new jc({context:globalThis?.document?.body})),U(this,ae)}};ne=new WeakMap,M=new WeakMap,$=new WeakMap,ae=new WeakMap,G(J,"Theme"),y(J,ae,void 0);let xe=J;var q=`/**
 * This file is auto-generated. Do not edit it directly.
 */

*[data-mds-theme="blue-dark-classic"] {
  --brand-bg-active: #464c54;
  --brand-bg-default: #373c42;
  --brand-bg-disabled: #e1e4e8;
  --brand-bg-focus: #464c54;
  --brand-bg-gradient-default: linear-gradient(90deg, #373c42 0%, #0f1214 100%);
  --brand-bg-gradient-end: #0f1214;
  --brand-bg-gradient-start: #373c42;
  --brand-bg-hover: #373c42;
  --brand-bg-strong-active: #373c42;
  --brand-bg-strong-default: #373c42;
  --brand-bg-strong-focus: #373c42;
  --brand-bg-strong-hover: #373c42;
  --brand-border-active: #cce1ff;
  --brand-icon-active: #fff;
  --brand-icon-default: #f7f7f7;
  --brand-icon-hover: #fff;
  --brand-icon-weak-active: #f7f7f7;
  --brand-icon-weak-default: #f7f7f7;
  --brand-icon-weak-focus: #f7f7f7;
  --brand-icon-weak-hover: #f7f7f7;
  --brand-text-active: #f7f7f7;
  --brand-text-default: #f7f7f7;
  --brand-text-hover: #f7f7f7;
  --brand-text-strong-default: #f0f1f2;
  --brand-text-weak-active: #f7f7f7;
  --brand-text-weak-default: #f7f7f7;
  --brand-text-weak-focus: #f7f7f7;
  --brand-text-weak-hover: #f7f7f7;
  --brand-accent-border-active: #5191f0;
  --brand-accent-border-default: #5191f0;
  --brand-accent-border-focus: #5191f0;
  --brand-accent-border-hover: #7e868f;
  --brand-accent-border-medium-active: #1d69cc;
  --brand-accent-border-medium-default: #596069;
  --brand-accent-border-medium-disabled: #fff;
  --brand-accent-border-medium-focus: #fff;
  --brand-accent-border-medium-hover: #fff;
  --brand-accent-border-strong-active: #0f1214;
  --brand-accent-border-strong-default: #0f1214;
  --brand-accent-border-strong-disabled: #fff;
  --brand-accent-border-strong-focus: #fff;
  --brand-accent-border-strong-hover: #fff;
  --brand-accent-border-weak-active: #2774d9;
  --brand-accent-border-weak-default: #d0d4d9;
  --brand-accent-border-weak-disabled: #fff;
  --brand-accent-border-weak-focus: #fff;
  --brand-accent-border-weak-hover: #fff;
  --brand-accent-icon-active: #7cadf7;
  --brand-accent-icon-default: #c1c6cc;
  --brand-accent-icon-disabled: #6f7680;
  --brand-accent-icon-focus: #fff;
  --brand-accent-icon-medium-active: #5191f0;
  --brand-accent-icon-medium-default: #979fa8;
  --brand-accent-icon-medium-disabled: #fff;
  --brand-accent-icon-medium-focus: #fff;
  --brand-accent-icon-weak-active: #2774d9;
  --brand-accent-icon-weak-default: #6f7680;
  --brand-accent-icon-weak-disabled: #fff;
  --brand-accent-icon-weak-focus: #fff;
  --base-bg-default: #0f1214;
  --base-bg-hover: #0f1214;
  --base-bg-active: #0f1214;
  --base-bg-disabled: #464c54;
  --base-bg-weak-default: #23282e;
  --base-bg-weak-hover: #373c42;
  --base-bg-weak-active: #23282e;
  --base-bg-weak-disabled: #464c54;
  --base-bg-medium-default: #373c42;
  --base-bg-medium-hover: #464c54;
  --base-bg-medium-active: #373c42;
  --base-bg-medium-disabled: #e85fc6;
  --base-bg-strong-default: #a7adb5;
  --base-bg-strong-hover: #d0d4d9;
  --base-bg-strong-focus: #d0d4d9;
  --base-bg-strong-active: #d0d4d9;
  --base-bg-strong-disabled: #596069;
  --base-icon-in-default: #23282e;
  --base-icon-in-hover: #23282e;
  --base-icon-in-focus: #23282e;
  --base-icon-in-active: #23282e;
  --base-icon-in-disabled: #6f7680;
  --base-text-default: #f7f7f7;
  --base-text-disabled: #6f7680;
  --base-text-weak-default: #889099;
  --base-text-weak-disabled: #6f7680;
  --base-text-medium-default: #d0d4d9;
  --base-text-medium-disabled: #6f7680;
  --base-text-strong-default: #f0f1f2;
  --base-text-strong-disabled: #6f7680;
  --base-text-in-default: #23282e;
  --base-text-in-hover: #23282e;
  --base-text-in-focus: #23282e;
  --base-text-in-active: #23282e;
  --base-text-in-disabled: #23282e;
  --base-text-in-weak-default: #fff;
  --base-border-default: #596069;
  --base-border-weak-default: #23282e;
  --base-border-medium-default: #464c54;
  --base-border-strong-default: #c1c6cc;
  --base-border-gradient-default: linear-gradient(
    180deg,
    #0f1214 0%,
    #656c75 50%,
    #0f1214 100%
  );
  --inverse-bg-default: #373c42;
  --inverse-bg-hover: #373c42;
  --inverse-bg-focus: #464c54;
  --inverse-bg-active: #464c54;
  --inverse-bg-disabled: #e1e4e8;
  --inverse-bg-gradient-start: #373c42;
  --inverse-bg-gradient-end: #0f1214;
  --inverse-bg-gradient-default: linear-gradient(
    90deg,
    #373c42 0%,
    #0f1214 100%
  );
  --inverse-bg-weak-default: #464c54;
  --inverse-text-default: #f7f7f7;
  --inverse-text-hover: #f7f7f7;
  --inverse-text-focus: #f7f7f7;
  --inverse-text-active: #f7f7f7;
  --inverse-text-disabled: #656c75;
  --inverse-text-medium-default: #c1c6cc;
  --inverse-text-medium-disabled: #656c75;
  --inverse-icon-default: #f7f7f7;
  --inverse-icon-hover: #fff;
  --inverse-icon-focus: #fff;
  --inverse-icon-active: #fff;
  --inverse-icon-disabled: #6f7680;
  --inverse-icon-strong-default: #fff;
  --inverse-icon-strong-hover: #fff;
  --inverse-icon-strong-focus: #fff;
  --inverse-icon-strong-active: #fff;
  --inverse-icon-strong-disabled: #6f7680;
  --inverse-border-default: #6f7680;
  --inverse-border-hover: #649ef5;
  --inverse-border-focus: #cce1ff;
  --inverse-border-active: #cce1ff;
  --inverse-border-disabled: #e1e4e8;
  --control-bg-default: #23282e;
  --control-bg-hover: #2a3442;
  --control-bg-focus: #2a3442;
  --control-bg-active: #2a3442;
  --control-bg-disabled: #373c42;
  --control-bg-weak-default: #23282e;
  --control-bg-weak-hover: #373c42;
  --control-bg-weak-focus: #23282e;
  --control-bg-weak-active: #2a3442;
  --control-bg-weak-disabled: #373c42;
  --control-bg-medium-default: #23282e;
  --control-bg-medium-hover: #373c42;
  --control-bg-medium-focus: #979fa8;
  --control-bg-medium-active: #2a3442;
  --control-bg-medium-disabled: #373c42;
  --control-bg-strong-default: #649ef5;
  --control-bg-strong-hover: #7cadf7;
  --control-bg-strong-focus: #7cadf7;
  --control-bg-strong-active: #7cadf7;
  --control-bg-strong-disabled: #596069;
  --control-icon-default: #649ef5;
  --control-icon-hover: #7cadf7;
  --control-icon-focus: #7cadf7;
  --control-icon-active: #7cadf7;
  --control-icon-disabled: #cce1ff;
  --control-icon-weak-default: #c1c6cc;
  --control-icon-weak-hover: #649ef5;
  --control-icon-weak-focus: #649ef5;
  --control-icon-weak-active: #649ef5;
  --control-icon-weak-disabled: #6f7680;
  --control-icon-medium-default: #649ef5;
  --control-icon-medium-hover: #979fa8;
  --control-icon-medium-focus: #979fa8;
  --control-icon-medium-active: #889099;
  --control-icon-medium-disabled: #e1e4e8;
  --control-icon-strong-default: #d0d4d9;
  --control-icon-strong-hover: #f0f1f2;
  --control-icon-strong-focus: #649ef5;
  --control-icon-strong-active: #649ef5;
  --control-icon-strong-disabled: #6f7680;
  --control-icon-in-default: #23282e;
  --control-icon-in-hover: #23282e;
  --control-icon-in-focus: #23282e;
  --control-icon-in-active: #23282e;
  --control-icon-in-disabled: #6f7680;
  --control-icon-in-strong-default: #649ef5;
  --control-icon-in-strong-hover: #7cadf7;
  --control-icon-in-strong-focus: #7cadf7;
  --control-icon-in-strong-active: #7cadf7;
  --control-icon-in-strong-disabled: #6f7680;
  --control-border-default: #7e868f;
  --control-border-hover: #7cadf7;
  --control-border-focus: #7cadf7;
  --control-border-active: #7cadf7;
  --control-border-disabled: #596069;
  --control-border-weak-default: #656c75;
  --control-border-weak-hover: #7cadf7;
  --control-border-weak-focus: #7cadf7;
  --control-border-weak-active: #7cadf7;
  --control-border-weak-disabled: #596069;
  --control-border-medium-default: #649ef5;
  --control-border-medium-hover: #649ef5;
  --control-border-medium-focus: #649ef5;
  --control-border-medium-active: #649ef5;
  --control-border-medium-disabled: #596069;
  --control-border-strong-default: #c1c6cc;
  --control-border-strong-hover: #656c75;
  --control-border-strong-focus: #656c75;
  --control-border-strong-active: #649ef5;
  --control-border-strong-disabled: #596069;
  --interact-bg-default: #649ef5;
  --interact-bg-hover: #7cadf7;
  --interact-bg-focus: #7cadf7;
  --interact-bg-active: #7cadf7;
  --interact-bg-disabled: #446392;
  --interact-bg-weak-default: #23282e;
  --interact-bg-weak-hover: #2f3d52;
  --interact-bg-weak-focus: #2f3d52;
  --interact-bg-weak-active: #2f3d52;
  --interact-bg-weak-disabled: #464c54;
  --interact-bg-medium-default: #649ef5;
  --interact-bg-medium-hover: #596069;
  --interact-bg-medium-active: #3a5276;
  --interact-bg-strong-hover: #596069;
  --interact-bg-strong-active: #596069;
  --interact-text-default: #649ef5;
  --interact-text-hover: #7cadf7;
  --interact-text-focus: #7cadf7;
  --interact-text-active: #7cadf7;
  --interact-text-disabled: #446392;
  --interact-text-weak-default: #c1c6cc;
  --interact-text-weak-hover: #649ef5;
  --interact-text-weak-focus: #649ef5;
  --interact-text-weak-active: #649ef5;
  --interact-text-weak-disabled: #6f7680;
  --interact-text-in-default: #23282e;
  --interact-text-in-hover: #23282e;
  --interact-text-in-focus: #23282e;
  --interact-text-in-active: #23282e;
  --interact-text-in-disabled: #23282e;
  --interact-icon-default: #649ef5;
  --interact-icon-hover: #7cadf7;
  --interact-icon-focus: #7cadf7;
  --interact-icon-active: #7cadf7;
  --interact-icon-disabled: #446392;
  --interact-icon-weak-default: #c1c6cc;
  --interact-icon-weak-hover: #d0d4d9;
  --interact-icon-weak-focus: #d0d4d9;
  --interact-icon-weak-active: #d0d4d9;
  --interact-icon-weak-disabled: #6f7680;
  --interact-icon-medium-default: #c1c6cc;
  --interact-icon-medium-hover: #649ef5;
  --interact-icon-medium-focus: #649ef5;
  --interact-icon-medium-active: #649ef5;
  --interact-icon-medium-disabled: #6f7680;
  --interact-icon-strong-default: #d0d4d9;
  --interact-icon-strong-hover: #f0f1f2;
  --interact-icon-strong-focus: #f0f1f2;
  --interact-icon-strong-active: #f0f1f2;
  --interact-icon-strong-disabled: #6f7680;
  --interact-icon-in-default: #23282e;
  --interact-icon-in-hover: #23282e;
  --interact-icon-in-focus: #23282e;
  --interact-icon-in-active: #23282e;
  --interact-icon-in-disabled: #23282e;
  --interact-border-default: #649ef5;
  --interact-border-hover: #7cadf7;
  --interact-border-focus: #7cadf7;
  --interact-border-active: #7cadf7;
  --interact-border-disabled: #446392;
  --interact-border-weak-default: #656c75;
  --interact-border-weak-hover: #cce1ff;
  --interact-border-weak-focus: #e1e4e8;
  --interact-border-weak-active: #e1e4e8;
  --interact-border-weak-disabled: #596069;
  --interact-border-medium-default: #649ef5;
  --interact-border-medium-hover: #a3c8ff;
  --interact-border-medium-focus: #649ef5;
  --interact-border-medium-active: #649ef5;
  --interact-border-medium-disabled: #e1e4e8;
  --positive-bg-default: #6bbf41;
  --positive-bg-hover: #6bbf41;
  --positive-bg-focus: #6bbf41;
  --positive-bg-active: #6bbf41;
  --positive-bg-disabled: #6bbf41;
  --positive-bg-weak-default: #23282e;
  --positive-bg-weak-hover: #23282e;
  --positive-bg-weak-focus: #23282e;
  --positive-bg-weak-active: #23282e;
  --positive-bg-weak-disabled: #23282e;
  --positive-bg-medium-default: #395534;
  --positive-bg-medium-hover: #395534;
  --positive-bg-medium-focus: #395534;
  --positive-bg-medium-active: #395534;
  --positive-bg-medium-disabled: #373c42;
  --positive-bg-strong-default: #23381e;
  --positive-icon-default: #6bbf41;
  --positive-icon-hover: #6bbf41;
  --positive-icon-focus: #6bbf41;
  --positive-icon-active: #6bbf41;
  --positive-icon-disabled: #596069;
  --positive-icon-weak-default: #6bbf41;
  --positive-icon-weak-hover: #6bbf41;
  --positive-icon-weak-focus: #6bbf41;
  --positive-icon-weak-active: #6bbf41;
  --positive-icon-weak-disabled: #596069;
  --positive-icon-strong-default: #6bbf41;
  --positive-icon-strong-hover: #6bbf41;
  --positive-icon-strong-focus: #6bbf41;
  --positive-icon-strong-active: #6bbf41;
  --positive-icon-strong-disabled: #477438;
  --positive-icon-in-default: #23282e;
  --positive-icon-in-hover: #23282e;
  --positive-icon-in-focus: #23282e;
  --positive-icon-in-active: #23282e;
  --positive-icon-in-disabled: #23282e;
  --positive-border-default: #6bbf41;
  --positive-border-hover: #6bbf41;
  --positive-border-focus: #6bbf41;
  --positive-border-active: #6bbf41;
  --positive-border-disabled: #6bbf41;
  --positive-border-weak-default: #23282e;
  --positive-border-weak-hover: #6bbf41;
  --positive-border-weak-focus: #6bbf41;
  --positive-border-weak-active: #6bbf41;
  --positive-border-weak-disabled: #596069;
  --positive-border-strong-default: #f7f7f7;
  --positive-border-strong-hover: #f7f7f7;
  --positive-border-strong-focus: #f7f7f7;
  --positive-border-strong-active: #f7f7f7;
  --positive-border-strong-disabled: #f7f7f7;
  --positive-text-in-default: #23282e;
  --positive-text-in-hover: #23282e;
  --positive-text-in-focus: #23282e;
  --positive-text-in-active: #23282e;
  --positive-text-in-disabled: #23282e;
  --warning-bg-default: #f0c243;
  --warning-bg-hover: #f0c243;
  --warning-bg-focus: #f0c243;
  --warning-bg-active: #f0c243;
  --warning-bg-disabled: #f0c243;
  --warning-bg-weak-default: #23282e;
  --warning-bg-weak-hover: #23282e;
  --warning-bg-weak-focus: #23282e;
  --warning-bg-weak-active: #23282e;
  --warning-bg-weak-disabled: #23282e;
  --warning-bg-medium-default: #5c4d28;
  --warning-bg-medium-hover: #5c4d28;
  --warning-bg-medium-focus: #5c4d28;
  --warning-bg-medium-active: #5c4d28;
  --warning-bg-medium-disabled: #373c42;
  --warning-bg-strong-default: #35301c;
  --warning-icon-default: #f0c243;
  --warning-icon-hover: #f0c243;
  --warning-icon-focus: #f0c243;
  --warning-icon-active: #f0c243;
  --warning-icon-disabled: #596069;
  --warning-icon-strong-default: #f0c243;
  --warning-icon-strong-hover: #f0c243;
  --warning-icon-strong-focus: #f0c243;
  --warning-icon-strong-active: #f0c243;
  --warning-icon-strong-disabled: #f0c243;
  --warning-icon-in-default: #23282e;
  --warning-icon-in-hover: #23282e;
  --warning-icon-in-focus: #23282e;
  --warning-icon-in-active: #23282e;
  --warning-icon-in-disabled: #23282e;
  --warning-border-default: #f0c243;
  --warning-border-hover: #f0c243;
  --warning-border-focus: #f0c243;
  --warning-border-active: #f0c243;
  --warning-border-disabled: #f0c243;
  --warning-border-weak-default: #23282e;
  --warning-border-weak-hover: #23282e;
  --warning-border-weak-focus: #23282e;
  --warning-border-weak-active: #23282e;
  --warning-border-weak-disabled: #596069;
  --warning-border-strong-default: #f7f7f7;
  --warning-border-strong-hover: #f7f7f7;
  --warning-border-strong-focus: #f7f7f7;
  --warning-border-strong-active: #f7f7f7;
  --warning-border-strong-disabled: #f7f7f7;
  --warning-text-in-default: #23282e;
  --warning-text-in-hover: #23282e;
  --warning-text-in-focus: #23282e;
  --warning-text-in-active: #23282e;
  --warning-text-in-disabled: #23282e;
  --severe-warning-bg-default: #f7782f;
  --severe-warning-bg-hover: #f7782f;
  --severe-warning-bg-focus: #f7782f;
  --severe-warning-bg-active: #f7782f;
  --severe-warning-bg-disabled: #f7782f;
  --severe-warning-bg-weak-default: #23282e;
  --severe-warning-bg-weak-hover: #23282e;
  --severe-warning-bg-weak-focus: #23282e;
  --severe-warning-bg-weak-active: #23282e;
  --severe-warning-bg-weak-disabled: #23282e;
  --severe-warning-bg-medium-default: #644637;
  --severe-warning-bg-medium-hover: #644637;
  --severe-warning-bg-medium-focus: #644637;
  --severe-warning-bg-medium-active: #644637;
  --severe-warning-bg-medium-disabled: #373c42;
  --severe-warning-bg-strong-default: #462e21;
  --severe-warning-icon-default: #f7782f;
  --severe-warning-icon-hover: #f7782f;
  --severe-warning-icon-focus: #f7782f;
  --severe-warning-icon-active: #f7782f;
  --severe-warning-icon-disabled: #596069;
  --severe-warning-icon-strong-default: #fc8d4c;
  --severe-warning-icon-strong-hover: #fc8d4c;
  --severe-warning-icon-strong-focus: #fc8d4c;
  --severe-warning-icon-strong-active: #fc8d4c;
  --severe-warning-icon-strong-disabled: #fc8d4c;
  --severe-warning-icon-in-default: #23282e;
  --severe-warning-icon-in-hover: #23282e;
  --severe-warning-icon-in-focus: #23282e;
  --severe-warning-icon-in-active: #23282e;
  --severe-warning-icon-in-disabled: #23282e;
  --severe-warning-border-default: #f7782f;
  --severe-warning-border-hover: #f7782f;
  --severe-warning-border-focus: #f7782f;
  --severe-warning-border-active: #f7782f;
  --severe-warning-border-disabled: #f7782f;
  --severe-warning-border-weak-default: #23282e;
  --severe-warning-border-weak-hover: #23282e;
  --severe-warning-border-weak-focus: #23282e;
  --severe-warning-border-weak-active: #23282e;
  --severe-warning-border-weak-disabled: #596069;
  --negative-bg-default: #fa5762;
  --negative-bg-hover: #ff6e72;
  --negative-bg-focus: #ff6e72;
  --negative-bg-active: #ff6e72;
  --negative-bg-disabled: #8f3f48;
  --negative-bg-weak-default: #23282e;
  --negative-bg-weak-hover: #984952;
  --negative-bg-weak-focus: #984952;
  --negative-bg-weak-active: #984952;
  --negative-bg-weak-disabled: #373c42;
  --negative-bg-medium-default: #63363e;
  --negative-bg-medium-hover: #63363e;
  --negative-bg-medium-focus: #63363e;
  --negative-bg-medium-active: #63363e;
  --negative-bg-medium-disabled: #373c42;
  --negative-bg-strong-default: #46272a;
  --negative-text-default: #fa5762;
  --negative-text-hover: #ff878b;
  --negative-text-focus: #ff878b;
  --negative-text-active: #ff878b;
  --negative-text-disabled: #8f3f48;
  --negative-text-in-default: #23282e;
  --negative-text-in-hover: #23282e;
  --negative-text-in-focus: #23282e;
  --negative-text-in-active: #23282e;
  --negative-text-in-disabled: #23282e;
  --negative-icon-default: #fa5762;
  --negative-icon-hover: #ff878b;
  --negative-icon-focus: #ff878b;
  --negative-icon-active: #ff878b;
  --negative-icon-disabled: #8f3f48;
  --negative-icon-weak-default: #ffb2b5;
  --negative-icon-weak-hover: #ffb2b5;
  --negative-icon-weak-focus: #ffb2b5;
  --negative-icon-weak-active: #ffb2b5;
  --negative-icon-weak-disabled: #596069;
  --negative-icon-in-default: #23282e;
  --negative-icon-in-hover: #23282e;
  --negative-icon-in-focus: #23282e;
  --negative-icon-in-active: #23282e;
  --negative-icon-in-disabled: #23282e;
  --negative-border-default: #fa5762;
  --negative-border-hover: #ff878b;
  --negative-border-focus: #ff878b;
  --negative-border-active: #ff878b;
  --negative-border-disabled: #914b50;
  --negative-border-weak-default: #23282e;
  --negative-border-weak-hover: #23282e;
  --negative-border-weak-focus: #23282e;
  --negative-border-weak-active: #23282e;
  --negative-border-weak-disabled: #596069;
  --negative-border-medium-default: #eb4651;
  --negative-border-medium-hover: #ff878b;
  --negative-border-medium-focus: #ff878b;
  --negative-border-medium-active: #ff878b;
  --negative-border-medium-disabled: #8f3f48;
  --negative-border-strong-default: #f7f7f7;
  --negative-border-strong-hover: #fff;
  --negative-border-strong-focus: #f7f7f7;
  --negative-border-strong-active: #f7f7f7;
  --negative-border-strong-disabled: #f7f7f7;
  --info-bg-default: #7cadf7;
  --info-bg-hover: #7cadf7;
  --info-bg-focus: #7cadf7;
  --info-bg-active: #7cadf7;
  --info-bg-disabled: #7cadf7;
  --info-bg-weak-default: #23282e;
  --info-bg-weak-hover: #23282e;
  --info-bg-weak-focus: #23282e;
  --info-bg-weak-active: #23282e;
  --info-bg-weak-disabled: #23282e;
  --info-bg-medium-default: #3e506a;
  --info-bg-medium-hover: #3e506a;
  --info-bg-medium-focus: #3e506a;
  --info-bg-medium-active: #3e506a;
  --info-bg-medium-disabled: #373c42;
  --info-bg-strong-default: #283648;
  --info-icon-default: #7cadf7;
  --info-icon-hover: #7cadf7;
  --info-icon-focus: #7cadf7;
  --info-icon-active: #7cadf7;
  --info-icon-disabled: #596069;
  --info-icon-weak-default: #7cadf7;
  --info-icon-weak-hover: #7cadf7;
  --info-icon-weak-focus: #7cadf7;
  --info-icon-weak-active: #7cadf7;
  --info-icon-weak-disabled: #596069;
  --info-icon-in-default: #23282e;
  --info-icon-in-hover: #23282e;
  --info-icon-in-focus: #23282e;
  --info-icon-in-active: #23282e;
  --info-icon-in-disabled: #23282e;
  --info-border-default: #7cadf7;
  --info-border-hover: #7cadf7;
  --info-border-focus: #7cadf7;
  --info-border-active: #7cadf7;
  --info-border-disabled: #7cadf7;
  --info-border-weak-default: #23282e;
  --info-border-weak-hover: #23282e;
  --info-border-weak-focus: #23282e;
  --info-border-weak-active: #23282e;
  --info-border-weak-disabled: #596069;
  --dormant-bg-default: #6f7680;
  --dormant-bg-disabled: #6f7680;
  --dormant-bg-medium-default: #464c54;
  --dormant-bg-medium-disabled: #373c42;
  --dormant-icon-default: #c1c6cc;
  --dormant-icon-disabled: #596069;
  --dormant-icon-medium-default: #fff;
  --dormant-icon-in-default: #23282e;
  --dormant-icon-in-disabled: #23282e;
  --dormant-icon-in-medium-default: #23282e;
  --dormant-border-default: #a7adb5;
  --dormant-border-disabled: #596069;
  --accent-a-default: #9ca6ff;
  --accent-a-hover: #8a95ff;
  --accent-a-weak-default: #4d5477;
  --accent-b-default: #e3447c;
  --accent-b-hover: #cf3a7a;
  --accent-b-weak-default: #704959;
  --accent-c-default: #fcb3c8;
  --accent-c-hover: #ff87a9;
  --accent-c-weak-default: #6f5964;
  --accent-d-default: #9b5ff5;
  --accent-d-hover: #8d4eed;
  --accent-d-weak-default: #5b5077;
  --accent-e-default: #9dba4c;
  --accent-e-hover: #89ab2c;
  --accent-e-weak-default: #4e5b39;
  --accent-f-default: #d95a1a;
  --accent-f-hover: #c44f14;
  --accent-f-weak-default: #6f4b39;
  --accent-g-default: #4ad9d9;
  --accent-g-hover: #17c2c2;
  --accent-g-weak-default: #1f5e62;
  --accent-h-default: #028e99;
  --accent-h-hover: #01818c;
  --accent-h-weak-default: #456a6d;
  --accent-i-default: #f582d8;
  --accent-i-hover: #f26dd1;
  --accent-i-weak-default: #6c476a;
  --accent-j-default: #767eb2;
  --accent-j-hover: #6871a3;
  --accent-j-weak-default: #505569;
  --accent-k-default: #4cbf7f;
  --accent-k-hover: #36b26e;
  --accent-k-weak-default: #315d4a;
  --in-progress-bg-medium-default: #3e506a;
  --in-progress-bg-medium-hover: #3e506a;
  --in-progress-bg-medium-focus: #3e506a;
  --in-progress-bg-medium-active: #3e506a;
  --in-progress-bg-medium-disabled: #373c42;
  --in-progress-icon-default: #7cadf7;
  --in-progress-icon-hover: #7cadf7;
  --in-progress-icon-focus: #7cadf7;
  --in-progress-icon-active: #7cadf7;
  --in-progress-icon-disabled: #596069;
  --in-progress-icon-in-default: #23282e;
  --in-progress-icon-in-hover: #23282e;
  --in-progress-icon-in-focus: #23282e;
  --in-progress-icon-in-active: #23282e;
  --in-progress-icon-in-disabled: #23282e;
  --in-progress-border-default: #7cadf7;
  --in-progress-border-hover: #7cadf7;
  --in-progress-border-focus: #7cadf7;
  --in-progress-border-active: #7cadf7;
  --in-progress-border-disabled: #7cadf7;
  --low-warning-bg-medium-default: #1f565b;
  --low-warning-bg-medium-hover: #1f565b;
  --low-warning-bg-medium-focus: #1f565b;
  --low-warning-bg-medium-active: #1f565b;
  --low-warning-bg-medium-disabled: #373c42;
  --low-warning-icon-default: #0bb2b8;
  --low-warning-icon-hover: #0bb2b8;
  --low-warning-icon-focus: #0bb2b8;
  --low-warning-icon-active: #0bb2b8;
  --low-warning-icon-disabled: #596069;
  --low-warning-icon-in-default: #23282e;
  --low-warning-icon-in-hover: #23282e;
  --low-warning-icon-in-focus: #23282e;
  --low-warning-icon-in-active: #23282e;
  --low-warning-icon-in-disabled: #23282e;
  --low-warning-border-default: #0bb2b8;
  --low-warning-border-hover: #0bb2b8;
  --low-warning-border-focus: #0bb2b8;
  --low-warning-border-active: #0bb2b8;
  --low-warning-border-disabled: #0bb2b8;
  --excellent-bg-medium-default: #2f5546;
  --excellent-bg-medium-hover: #2f5546;
  --excellent-bg-medium-focus: #2f5546;
  --excellent-bg-medium-active: #2f5546;
  --excellent-bg-medium-disabled: #373c42;
  --excellent-icon-default: #4cbf7f;
  --excellent-icon-hover: #4cbf7f;
  --excellent-icon-focus: #4cbf7f;
  --excellent-icon-active: #4cbf7f;
  --excellent-icon-disabled: #596069;
  --excellent-icon-in-default: #23282e;
  --excellent-icon-in-hover: #23282e;
  --excellent-icon-in-focus: #23282e;
  --excellent-icon-in-active: #23282e;
  --excellent-icon-in-disabled: #23282e;
  --excellent-border-default: #4cbf7f;
  --excellent-border-hover: #4cbf7f;
  --excellent-border-focus: #4cbf7f;
  --excellent-border-active: #4cbf7f;
  --excellent-border-disabled: #4cbf7f;
  --port-diagram-base-bg-default: #c1c6cc;
  --port-diagram-base-bg-active: #889099;
  --port-diagram-base-bg-medium-default: #d0d4d9;
  --port-diagram-base-bg-medium-active: #c1c6cc;
  --port-diagram-base-bg-weak-default: #f0f1f2;
  --port-diagram-base-border-default: #6f7680;
  --port-diagram-base-border-active: #6f7680;
  --port-diagram-base-border-medium-active: #6f7680;
  --port-diagram-base-border-strong-default: #23282e;
  --port-diagram-base-border-strong-active: #23282e;
  --port-diagram-base-icon-in-default: #373c42;
  --port-diagram-base-icon-in-active: #373c42;
  --port-diagram-full-speed-bg-default: #2b7a0c;
  --port-diagram-full-speed-bg-active: #266b0b;
  --port-diagram-full-speed-bg-medium-default: #b0e396;
  --port-diagram-full-speed-bg-medium-active: #6bbf41;
  --port-diagram-full-speed-border-medium-active: #266b0b;
  --port-diagram-full-speed-border-strong-default: #23282e;
  --port-diagram-full-speed-border-strong-active: #23282e;
  --port-diagram-full-speed-icon-in-default: #fff;
  --port-diagram-full-speed-icon-in-active: #fff;
  --port-diagram-disconnected-bg-default: #373c42;
  --port-diagram-disconnected-bg-active: #23282e;
  --port-diagram-disconnected-bg-medium-default: #d0d4d9;
  --port-diagram-disconnected-bg-medium-active: #c1c6cc;
  --port-diagram-disconnected-border-medium-active: #6f7680;
  --port-diagram-disconnected-border-strong-default: #23282e;
  --port-diagram-disconnected-border-strong-active: #23282e;
  --port-diagram-disconnected-icon-in-default: #fff;
  --port-diagram-disconnected-icon-in-active: #fff;
  --port-diagram-reduced-speed-bg-default: #2b7a0c;
  --port-diagram-reduced-speed-bg-active: #266b0b;
  --port-diagram-reduced-speed-bg-medium-default: #45991f;
  --port-diagram-reduced-speed-bg-medium-active: #398519;
  --port-diagram-reduced-speed-border-default: #fff;
  --port-diagram-reduced-speed-border-active: #fff;
  --port-diagram-reduced-speed-border-medium-active: #266b0b;
  --port-diagram-reduced-speed-border-strong-default: #23282e;
  --port-diagram-reduced-speed-border-strong-active: #23282e;
  --port-diagram-reduced-speed-icon-in-default: #fff;
  --port-diagram-reduced-speed-icon-in-active: #fff;
  --port-diagram-warning-bg-default: #b05f04;
  --port-diagram-warning-bg-active: #944b03;
  --port-diagram-warning-bg-medium-default: #f0c243;
  --port-diagram-warning-bg-medium-active: #e0a419;
  --port-diagram-warning-border-medium-active: #944b03;
  --port-diagram-warning-border-strong-default: #23282e;
  --port-diagram-warning-border-strong-active: #23282e;
  --port-diagram-warning-border-default: #fff;
  --port-diagram-warning-icon-in-default: #fff;
  --port-diagram-warning-icon-in-active: #fff;
  --port-diagram-critical-bg-default: #cc2d37;
  --port-diagram-critical-bg-active: #a01d26;
  --port-diagram-critical-bg-medium-default: #ffb2b5;
  --port-diagram-critical-bg-medium-active: #ff878b;
  --port-diagram-critical-border-medium-active: #a01d26;
  --port-diagram-critical-border-strong-default: #23282e;
  --port-diagram-critical-border-strong-active: #23282e;
  --port-diagram-critical-icon-in-default: #fff;
  --port-diagram-critical-icon-in-active: #fff;
  --port-diagram-low-power-bg-default: #b05f04;
  --port-diagram-low-power-bg-active: #944b03;
  --port-diagram-low-power-bg-medium-default: #f0c243;
  --port-diagram-low-power-bg-medium-active: #e0a419;
  --port-diagram-low-power-bg-weak-default: #f5e08e;
  --port-diagram-low-power-bg-weak-active: #f2d268;
  --port-diagram-low-power-border-medium-active: #944b03;
  --port-diagram-low-power-border-strong-default: #23282e;
  --port-diagram-low-power-border-strong-active: #23282e;
  --port-diagram-low-power-icon-in-default: #b05f04;
  --port-diagram-low-power-icon-in-active: #944b03;

  /* dark classic theme -- elevation ( FOR INTERNAL USE ONLY, TEMPORARY ) */
  --elevation-control-default: 0px 3px 8px 0px rgba(0,0,0,0.47843);
  --elevation-control-focus: 0px 0px 0px 2px #446392, 0px 0px 0px 4px #649ef5;
  --elevation-control-select: 0px 0px 0px 2px #7cadf7;
  --elevation-data-viz-focus: 0px 0px 0px 2px #23282e, 0px 0px 0px 4px #fff,
    0px 0px 0px 6px #446392, 0px 0px 0px 8px #7cadf7;
  --elevation-data-viz-select: 0px 0px 0px 2px #23282e, 0px 0px 0px 4px #fff;
  --elevation-floating-default: 0px 4px 12px 0px rgba(0,0,0,0.78039);
  --elevation-invalid-default: 0px 0px 0px 2px #914b50;
  --elevation-invalid-focus: 0px 0px 0px 2px #914b50, 0px 0px 0px 4px #ff878b;
  --elevation-lifted-default: 0px 3px 8px 0px rgba(0,0,0,0.47843);
  --elevation-lifted-inset: 10px 0 8px -8px rgba(0,0,0,0.47843) inset;
  --elevation-raised-default: 0px 4px 12px 0px rgba(0,0,0,0.61961);
  --elevation-subtle-default: 0px 2px 5px 0px rgba(0,0,0,0.34902);

  /* color tokens -- data visualizations */
  --data-viz-categorical-1-active: #6977f0;
  --data-viz-categorical-1-default: #6977f0;
  --data-viz-categorical-1-focus: #bac1ff;
  --data-viz-categorical-1-gradient-default: linear-gradient(
    180deg,
    #6977f0 50%,
    #4653c7 100%
  );
  --data-viz-categorical-1-gradient-default-end: #6977f0;
  --data-viz-categorical-1-gradient-default-start: #4653c7;
  --data-viz-categorical-1-hover: #bac1ff;
  --data-viz-categorical-1-weak-gradient-active: linear-gradient(
    180deg,
    #384068 0%,
    #23282e 100%
  );
  --data-viz-categorical-1-weak-gradient-active-end: #384068;
  --data-viz-categorical-1-weak-gradient-active-start: #23282e;
  --data-viz-categorical-1-weak-gradient-default: linear-gradient(
    180deg,
    #384068 0%,
    #23282e 100%
  );
  --data-viz-categorical-1-weak-gradient-default-end: #384068;
  --data-viz-categorical-1-weak-gradient-default-start: #23282e;
  --data-viz-categorical-1-weak-gradient-focus: linear-gradient(
    180deg,
    #46508f 0%,
    #23282e 100%
  );
  --data-viz-categorical-1-weak-gradient-focus-end: #46508f;
  --data-viz-categorical-1-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-1-weak-gradient-hover: linear-gradient(
    180deg,
    #46508f 0%,
    #23282e 100%
  );
  --data-viz-categorical-1-weak-gradient-hover-end: #46508f;
  --data-viz-categorical-1-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-10-active: #767eb2;
  --data-viz-categorical-10-default: #767eb2;
  --data-viz-categorical-10-focus: #c1c6e8;
  --data-viz-categorical-10-gradient-default: linear-gradient(
    180deg,
    #767eb2 50%,
    #545c8a 100%
  );
  --data-viz-categorical-10-gradient-default-end: #767eb2;
  --data-viz-categorical-10-gradient-default-start: #545c8a;
  --data-viz-categorical-10-hover: #c1c6e8;
  --data-viz-categorical-10-weak-gradient-active: linear-gradient(
    180deg,
    #3c4256 0%,
    #23282e 100%
  );
  --data-viz-categorical-10-weak-gradient-active-end: #3c4256;
  --data-viz-categorical-10-weak-gradient-active-start: #23282e;
  --data-viz-categorical-10-weak-gradient-default: linear-gradient(
    180deg,
    #3c4256 0%,
    #23282e 100%
  );
  --data-viz-categorical-10-weak-gradient-default-end: #3c4256;
  --data-viz-categorical-10-weak-gradient-default-start: #23282e;
  --data-viz-categorical-10-weak-gradient-focus: linear-gradient(
    180deg,
    #4d5370 0%,
    #23282e 100%
  );
  --data-viz-categorical-10-weak-gradient-focus-end: #4d5370;
  --data-viz-categorical-10-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-10-weak-gradient-hover: linear-gradient(
    180deg,
    #4d5370 0%,
    #23282e 100%
  );
  --data-viz-categorical-10-weak-gradient-hover-end: #4d5370;
  --data-viz-categorical-10-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-11-active: #fc8d4c;
  --data-viz-categorical-11-default: #fc8d4c;
  --data-viz-categorical-11-focus: #ffd9bf;
  --data-viz-categorical-11-gradient-default: linear-gradient(
    180deg,
    #fc8d4c 50%,
    #d95a1a 100%
  );
  --data-viz-categorical-11-gradient-default-end: #fc8d4c;
  --data-viz-categorical-11-gradient-default-start: #d95a1a;
  --data-viz-categorical-11-hover: #ffd9bf;
  --data-viz-categorical-11-weak-gradient-active: linear-gradient(
    180deg,
    #644637 0%,
    #23282e 100%
  );
  --data-viz-categorical-11-weak-gradient-active-end: #644637;
  --data-viz-categorical-11-weak-gradient-active-start: #23282e;
  --data-viz-categorical-11-weak-gradient-default: linear-gradient(
    180deg,
    #644637 0%,
    #23282e 100%
  );
  --data-viz-categorical-11-weak-gradient-default-end: #644637;
  --data-viz-categorical-11-weak-gradient-default-start: #23282e;
  --data-viz-categorical-11-weak-gradient-focus: linear-gradient(
    180deg,
    #8f5b3d 0%,
    #23282e 100%
  );
  --data-viz-categorical-11-weak-gradient-focus-end: #8f5b3d;
  --data-viz-categorical-11-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-11-weak-gradient-hover: linear-gradient(
    180deg,
    #8f5b3d 0%,
    #23282e 100%
  );
  --data-viz-categorical-11-weak-gradient-hover-end: #8f5b3d;
  --data-viz-categorical-11-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-12-active: #169855;
  --data-viz-categorical-12-default: #169855;
  --data-viz-categorical-12-focus: #75d9a0;
  --data-viz-categorical-12-gradient-default: linear-gradient(
    180deg,
    #169855 50%,
    #087041 100%
  );
  --data-viz-categorical-12-gradient-default-end: #169855;
  --data-viz-categorical-12-gradient-default-start: #087041;
  --data-viz-categorical-12-hover: #75d9a0;
  --data-viz-categorical-12-weak-gradient-active: linear-gradient(
    180deg,
    #1f4a3a 0%,
    #23282e 100%
  );
  --data-viz-categorical-12-weak-gradient-active-end: #1f4a3a;
  --data-viz-categorical-12-weak-gradient-active-start: #23282e;
  --data-viz-categorical-12-weak-gradient-default: linear-gradient(
    180deg,
    #1f4a3a 0%,
    #23282e 100%
  );
  --data-viz-categorical-12-weak-gradient-default-end: #1f4a3a;
  --data-viz-categorical-12-weak-gradient-default-start: #23282e;
  --data-viz-categorical-12-weak-gradient-focus: linear-gradient(
    180deg,
    #1d6042 0%,
    #23282e 100%
  );
  --data-viz-categorical-12-weak-gradient-focus-end: #1d6042;
  --data-viz-categorical-12-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-12-weak-gradient-hover: linear-gradient(
    180deg,
    #1d6042 0%,
    #23282e 100%
  );
  --data-viz-categorical-12-weak-gradient-hover-end: #1d6042;
  --data-viz-categorical-12-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-2-active: #17c2c2;
  --data-viz-categorical-2-default: #17c2c2;
  --data-viz-categorical-2-focus: #a9ebeb;
  --data-viz-categorical-2-gradient-default: linear-gradient(
    180deg,
    #17c2c2 50%,
    #028e99 100%
  );
  --data-viz-categorical-2-gradient-default-end: #17c2c2;
  --data-viz-categorical-2-gradient-default-start: #028e99;
  --data-viz-categorical-2-hover: #a9ebeb;
  --data-viz-categorical-2-weak-gradient-active: linear-gradient(
    180deg,
    #1f565b 0%,
    #23282e 100%
  );
  --data-viz-categorical-2-weak-gradient-active-end: #1f565b;
  --data-viz-categorical-2-weak-gradient-active-start: #23282e;
  --data-viz-categorical-2-weak-gradient-default: linear-gradient(
    180deg,
    #1f565b 0%,
    #23282e 100%
  );
  --data-viz-categorical-2-weak-gradient-default-end: #1f565b;
  --data-viz-categorical-2-weak-gradient-default-start: #23282e;
  --data-viz-categorical-2-weak-gradient-focus: linear-gradient(
    180deg,
    #1d7578 0%,
    #23282e 100%
  );
  --data-viz-categorical-2-weak-gradient-focus-end: #1d7578;
  --data-viz-categorical-2-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-2-weak-gradient-hover: linear-gradient(
    180deg,
    #1d7578 0%,
    #23282e 100%
  );
  --data-viz-categorical-2-weak-gradient-hover-end: #1d7578;
  --data-viz-categorical-2-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-3-active: #e0ccff;
  --data-viz-categorical-3-default: #e0ccff;
  --data-viz-categorical-3-focus: #f3ebff;
  --data-viz-categorical-3-gradient-default: linear-gradient(
    180deg,
    #e0ccff 50%,
    #b587fa 100%
  );
  --data-viz-categorical-3-gradient-default-end: #e0ccff;
  --data-viz-categorical-3-gradient-default-start: #b587fa;
  --data-viz-categorical-3-hover: #f3ebff;
  --data-viz-categorical-3-weak-gradient-active: linear-gradient(
    180deg,
    #5c596d 0%,
    #23282e 100%
  );
  --data-viz-categorical-3-weak-gradient-active-end: #5c596d;
  --data-viz-categorical-3-weak-gradient-active-start: #23282e;
  --data-viz-categorical-3-weak-gradient-default: linear-gradient(
    180deg,
    #5c596d 0%,
    #23282e 100%
  );
  --data-viz-categorical-3-weak-gradient-default-end: #5c596d;
  --data-viz-categorical-3-weak-gradient-default-start: #23282e;
  --data-viz-categorical-3-weak-gradient-focus: linear-gradient(
    180deg,
    #817a96 0%,
    #23282e 100%
  );
  --data-viz-categorical-3-weak-gradient-focus-end: #817a96;
  --data-viz-categorical-3-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-3-weak-gradient-hover: linear-gradient(
    180deg,
    #817a96 0%,
    #23282e 100%
  );
  --data-viz-categorical-3-weak-gradient-hover-end: #817a96;
  --data-viz-categorical-3-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-4-active: #e3447c;
  --data-viz-categorical-4-default: #e3447c;
  --data-viz-categorical-4-focus: #fcb3c8;
  --data-viz-categorical-4-gradient-default: linear-gradient(
    180deg,
    #e3447c 50%,
    #b02863 100%
  );
  --data-viz-categorical-4-gradient-default-end: #e3447c;
  --data-viz-categorical-4-gradient-default-start: #b02863;
  --data-viz-categorical-4-hover: #fcb3c8;
  --data-viz-categorical-4-weak-gradient-active: linear-gradient(
    180deg,
    #5d3045 0%,
    #23282e 100%
  );
  --data-viz-categorical-4-weak-gradient-active-end: #5d3045;
  --data-viz-categorical-4-weak-gradient-active-start: #23282e;
  --data-viz-categorical-4-weak-gradient-default: linear-gradient(
    180deg,
    #5d3045 0%,
    #23282e 100%
  );
  --data-viz-categorical-4-weak-gradient-default-end: #5d3045;
  --data-viz-categorical-4-weak-gradient-default-start: #23282e;
  --data-viz-categorical-4-weak-gradient-focus: linear-gradient(
    180deg,
    #833655 0%,
    #23282e 100%
  );
  --data-viz-categorical-4-weak-gradient-focus-end: #833655;
  --data-viz-categorical-4-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-4-weak-gradient-hover: linear-gradient(
    180deg,
    #833655 0%,
    #23282e 100%
  );
  --data-viz-categorical-4-weak-gradient-hover-end: #833655;
  --data-viz-categorical-4-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-5-active: #9dba4c;
  --data-viz-categorical-5-default: #9dba4c;
  --data-viz-categorical-5-focus: #d7e8a9;
  --data-viz-categorical-5-gradient-default: linear-gradient(
    180deg,
    #9dba4c 50%,
    #6c8c14 100%
  );
  --data-viz-categorical-5-gradient-default-end: #9dba4c;
  --data-viz-categorical-5-gradient-default-start: #6c8c14;
  --data-viz-categorical-5-hover: #d7e8a9;
  --data-viz-categorical-5-weak-gradient-active: linear-gradient(
    180deg,
    #485437 0%,
    #23282e 100%
  );
  --data-viz-categorical-5-weak-gradient-active-end: #485437;
  --data-viz-categorical-5-weak-gradient-active-start: #23282e;
  --data-viz-categorical-5-weak-gradient-default: linear-gradient(
    180deg,
    #485437 0%,
    #23282e 100%
  );
  --data-viz-categorical-5-weak-gradient-default-end: #485437;
  --data-viz-categorical-5-weak-gradient-default-start: #23282e;
  --data-viz-categorical-5-weak-gradient-focus: linear-gradient(
    180deg,
    #60713d 0%,
    #23282e 100%
  );
  --data-viz-categorical-5-weak-gradient-focus-end: #60713d;
  --data-viz-categorical-5-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-5-weak-gradient-hover: linear-gradient(
    180deg,
    #60713d 0%,
    #23282e 100%
  );
  --data-viz-categorical-5-weak-gradient-hover-end: #60713d;
  --data-viz-categorical-5-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-6-active: #9b5ff5;
  --data-viz-categorical-6-default: #9b5ff5;
  --data-viz-categorical-6-focus: #d6baff;
  --data-viz-categorical-6-gradient-default: linear-gradient(
    180deg,
    #9b5ff5 50%,
    #753bcc 100%
  );
  --data-viz-categorical-6-gradient-default-end: #9b5ff5;
  --data-viz-categorical-6-gradient-default-start: #753bcc;
  --data-viz-categorical-6-hover: #d6baff;
  --data-viz-categorical-6-weak-gradient-active: linear-gradient(
    180deg,
    #47396a 0%,
    #23282e 100%
  );
  --data-viz-categorical-6-weak-gradient-active-end: #47396a;
  --data-viz-categorical-6-weak-gradient-active-start: #23282e;
  --data-viz-categorical-6-weak-gradient-default: linear-gradient(
    180deg,
    #47396a 0%,
    #23282e 100%
  );
  --data-viz-categorical-6-weak-gradient-default-end: #47396a;
  --data-viz-categorical-6-weak-gradient-default-start: #23282e;
  --data-viz-categorical-6-weak-gradient-focus: linear-gradient(
    180deg,
    #5f4491 0%,
    #23282e 100%
  );
  --data-viz-categorical-6-weak-gradient-focus-end: #5f4491;
  --data-viz-categorical-6-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-6-weak-gradient-hover: linear-gradient(
    180deg,
    #5f4491 0%,
    #23282e 100%
  );
  --data-viz-categorical-6-weak-gradient-hover-end: #5f4491;
  --data-viz-categorical-6-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-7-active: #ff87a9;
  --data-viz-categorical-7-default: #ff87a9;
  --data-viz-categorical-7-focus: #ffd4e0;
  --data-viz-categorical-7-gradient-default: linear-gradient(
    180deg,
    #ff87a9 50%,
    #e3447c 100%
  );
  --data-viz-categorical-7-gradient-default-end: #ff87a9;
  --data-viz-categorical-7-gradient-default-start: #e3447c;
  --data-viz-categorical-7-hover: #ffd4e0;
  --data-viz-categorical-7-weak-gradient-active: linear-gradient(
    180deg,
    #654553 0%,
    #23282e 100%
  );
  --data-viz-categorical-7-weak-gradient-active-end: #654553;
  --data-viz-categorical-7-weak-gradient-active-start: #23282e;
  --data-viz-categorical-7-weak-gradient-default: linear-gradient(
    180deg,
    #654553 0%,
    #23282e 100%
  );
  --data-viz-categorical-7-weak-gradient-default-end: #654553;
  --data-viz-categorical-7-weak-gradient-default-start: #23282e;
  --data-viz-categorical-7-weak-gradient-focus: linear-gradient(
    180deg,
    #91586c 0%,
    #23282e 100%
  );
  --data-viz-categorical-7-weak-gradient-focus-end: #91586c;
  --data-viz-categorical-7-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-7-weak-gradient-hover: linear-gradient(
    180deg,
    #91586c 0%,
    #23282e 100%
  );
  --data-viz-categorical-7-weak-gradient-hover-end: #91586c;
  --data-viz-categorical-7-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-8-active: #028e99;
  --data-viz-categorical-8-default: #028e99;
  --data-viz-categorical-8-focus: #4ad9d9;
  --data-viz-categorical-8-gradient-default: linear-gradient(
    180deg,
    #028e99 50%,
    #006773 100%
  );
  --data-viz-categorical-8-gradient-default-end: #028e99;
  --data-viz-categorical-8-gradient-default-start: #006773;
  --data-viz-categorical-8-hover: #4ad9d9;
  --data-viz-categorical-8-weak-gradient-active: linear-gradient(
    180deg,
    #19474e 0%,
    #23282e 100%
  );
  --data-viz-categorical-8-weak-gradient-active-end: #19474e;
  --data-viz-categorical-8-weak-gradient-active-start: #23282e;
  --data-viz-categorical-8-weak-gradient-default: linear-gradient(
    180deg,
    #19474e 0%,
    #23282e 100%
  );
  --data-viz-categorical-8-weak-gradient-default-end: #19474e;
  --data-viz-categorical-8-weak-gradient-default-start: #23282e;
  --data-viz-categorical-8-weak-gradient-focus: linear-gradient(
    180deg,
    #135b64 0%,
    #23282e 100%
  );
  --data-viz-categorical-8-weak-gradient-focus-end: #135b64;
  --data-viz-categorical-8-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-8-weak-gradient-hover: linear-gradient(
    180deg,
    #135b64 0%,
    #23282e 100%
  );
  --data-viz-categorical-8-weak-gradient-hover-end: #135b64;
  --data-viz-categorical-8-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-9-active: #9adffc;
  --data-viz-categorical-9-default: #9adffc;
  --data-viz-categorical-9-focus: #d9f4ff;
  --data-viz-categorical-9-gradient-default: linear-gradient(
    180deg,
    #9adffc 50%,
    #23a8eb 100%
  );
  --data-viz-categorical-9-gradient-default-end: #9adffc;
  --data-viz-categorical-9-gradient-default-start: #23a8eb;
  --data-viz-categorical-9-hover: #d9f4ff;
  --data-viz-categorical-9-weak-gradient-active: linear-gradient(
    180deg,
    #475f6c 0%,
    #23282e 100%
  );
  --data-viz-categorical-9-weak-gradient-active-end: #475f6c;
  --data-viz-categorical-9-weak-gradient-active-start: #23282e;
  --data-viz-categorical-9-weak-gradient-default: linear-gradient(
    180deg,
    #475f6c 0%,
    #23282e 100%
  );
  --data-viz-categorical-9-weak-gradient-default-end: #475f6c;
  --data-viz-categorical-9-weak-gradient-default-start: #23282e;
  --data-viz-categorical-9-weak-gradient-focus: linear-gradient(
    180deg,
    #5e8395 0%,
    #23282e 100%
  );
  --data-viz-categorical-9-weak-gradient-focus-end: #5e8395;
  --data-viz-categorical-9-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-9-weak-gradient-hover: linear-gradient(
    180deg,
    #5e8395 0%,
    #23282e 100%
  );
  --data-viz-categorical-9-weak-gradient-hover-end: #5e8395;
  --data-viz-categorical-9-weak-gradient-hover-start: #23282e;
  --data-viz-dormant-active: #a7adb5;
  --data-viz-dormant-default: #a7adb5;
  --data-viz-dormant-focus: #e1e4e8;
  --data-viz-dormant-gradient-default: linear-gradient(
    180deg,
    #a7adb5 50%,
    #7e868f 100%
  );
  --data-viz-dormant-gradient-default-end: #a7adb5;
  --data-viz-dormant-gradient-default-start: #7e868f;
  --data-viz-dormant-hover: #e1e4e8;
  --data-viz-dormant-weak-gradient-active: linear-gradient(
    180deg,
    #464c54 0%,
    #23282e 100%
  );
  --data-viz-dormant-weak-gradient-active-end: #464c54;
  --data-viz-dormant-weak-gradient-active-start: #23282e;
  --data-viz-dormant-weak-gradient-default: linear-gradient(
    180deg,
    #464c54 0%,
    #23282e 100%
  );
  --data-viz-dormant-weak-gradient-default-end: #464c54;
  --data-viz-dormant-weak-gradient-default-start: #23282e;
  --data-viz-dormant-weak-gradient-focus: linear-gradient(
    180deg,
    #656c75 0%,
    #23282e 100%
  );
  --data-viz-dormant-weak-gradient-focus-end: #656c75;
  --data-viz-dormant-weak-gradient-focus-start: #23282e;
  --data-viz-dormant-weak-gradient-hover: linear-gradient(
    180deg,
    #656c75 0%,
    #23282e 100%
  );
  --data-viz-dormant-weak-gradient-hover-end: #656c75;
  --data-viz-dormant-weak-gradient-hover-start: #23282e;
  --data-viz-excellent-active: #649ef5;
  --data-viz-excellent-default: #649ef5;
  --data-viz-excellent-focus: #bad6ff;
  --data-viz-excellent-gradient-default: linear-gradient(
    180deg,
    #649ef5 50%,
    #2774d9 100%
  );
  --data-viz-excellent-gradient-default-end: #649ef5;
  --data-viz-excellent-gradient-default-start: #2774d9;
  --data-viz-excellent-hover: #bad6ff;
  --data-viz-excellent-weak-gradient-active: linear-gradient(
    180deg,
    #374b6a 0%,
    #23282e 100%
  );
  --data-viz-excellent-weak-gradient-active-end: #374b6a;
  --data-viz-excellent-weak-gradient-active-start: #23282e;
  --data-viz-excellent-weak-gradient-default: linear-gradient(
    180deg,
    #374b6a 0%,
    #23282e 100%
  );
  --data-viz-excellent-weak-gradient-default-end: #374b6a;
  --data-viz-excellent-weak-gradient-default-start: #23282e;
  --data-viz-excellent-weak-gradient-focus: linear-gradient(
    180deg,
    #446392 0%,
    #23282e 100%
  );
  --data-viz-excellent-weak-gradient-focus-end: #446392;
  --data-viz-excellent-weak-gradient-focus-start: #23282e;
  --data-viz-excellent-weak-gradient-hover: linear-gradient(
    180deg,
    #446392 0%,
    #23282e 100%
  );
  --data-viz-excellent-weak-gradient-hover-end: #446392;
  --data-viz-excellent-weak-gradient-hover-start: #23282e;
  --data-viz-low-warning-active: #0bb2b8;
  --data-viz-low-warning-default: #0bb2b8;
  --data-viz-low-warning-focus: #84e3e3;
  --data-viz-low-warning-gradient-default: linear-gradient(
    180deg,
    #0bb2b8 50%,
    #01818c 100%
  );
  --data-viz-low-warning-gradient-default-end: #0bb2b8;
  --data-viz-low-warning-gradient-default-start: #01818c;
  --data-viz-low-warning-hover: #84e3e3;
  --data-viz-low-warning-weak-gradient-active: linear-gradient(
    180deg,
    #1c5157 0%,
    #23282e 100%
  );
  --data-viz-low-warning-weak-gradient-active-end: #1c5157;
  --data-viz-low-warning-weak-gradient-active-start: #23282e;
  --data-viz-low-warning-weak-gradient-default: linear-gradient(
    180deg,
    #1c5157 0%,
    #23282e 100%
  );
  --data-viz-low-warning-weak-gradient-default-end: #1c5157;
  --data-viz-low-warning-weak-gradient-default-start: #23282e;
  --data-viz-low-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #176d73 0%,
    #23282e 100%
  );
  --data-viz-low-warning-weak-gradient-focus-end: #176d73;
  --data-viz-low-warning-weak-gradient-focus-start: #23282e;
  --data-viz-low-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #176d73 0%,
    #23282e 100%
  );
  --data-viz-low-warning-weak-gradient-hover-end: #176d73;
  --data-viz-low-warning-weak-gradient-hover-start: #23282e;
  --data-viz-negative-active: #fa5762;
  --data-viz-negative-default: #fa5762;
  --data-viz-negative-focus: #ffb2b5;
  --data-viz-negative-gradient-default: linear-gradient(
    180deg,
    #fa5762 50%,
    #cc2d37 100%
  );
  --data-viz-negative-gradient-default-end: #fa5762;
  --data-viz-negative-gradient-default-start: #cc2d37;
  --data-viz-negative-hover: #ffb2b5;
  --data-viz-negative-weak-gradient-active: linear-gradient(
    180deg,
    #63363e 0%,
    #23282e 100%
  );
  --data-viz-negative-weak-gradient-active-end: #63363e;
  --data-viz-negative-weak-gradient-active-start: #23282e;
  --data-viz-negative-weak-gradient-default: linear-gradient(
    180deg,
    #63363e 0%,
    #23282e 100%
  );
  --data-viz-negative-weak-gradient-default-end: #63363e;
  --data-viz-negative-weak-gradient-default-start: #23282e;
  --data-viz-negative-weak-gradient-focus: linear-gradient(
    180deg,
    #8f3f48 0%,
    #23282e 100%
  );
  --data-viz-negative-weak-gradient-focus-end: #8f3f48;
  --data-viz-negative-weak-gradient-focus-start: #23282e;
  --data-viz-negative-weak-gradient-hover: linear-gradient(
    180deg,
    #8f3f48 0%,
    #23282e 100%
  );
  --data-viz-negative-weak-gradient-hover-end: #8f3f48;
  --data-viz-negative-weak-gradient-hover-start: #23282e;
  --data-viz-positive-active: #33bbf5;
  --data-viz-positive-default: #33bbf5;
  --data-viz-positive-focus: #b5e9ff;
  --data-viz-positive-gradient-default: linear-gradient(
    180deg,
    #33bbf5 50%,
    #0d8bd4 100%
  );
  --data-viz-positive-gradient-default-end: #33bbf5;
  --data-viz-positive-gradient-default-start: #0d8bd4;
  --data-viz-positive-hover: #b5e9ff;
  --data-viz-positive-weak-gradient-active: linear-gradient(
    180deg,
    #28546a 0%,
    #23282e 100%
  );
  --data-viz-positive-weak-gradient-active-end: #28546a;
  --data-viz-positive-weak-gradient-active-start: #23282e;
  --data-viz-positive-weak-gradient-default: linear-gradient(
    180deg,
    #28546a 0%,
    #23282e 100%
  );
  --data-viz-positive-weak-gradient-default-end: #28546a;
  --data-viz-positive-weak-gradient-default-start: #23282e;
  --data-viz-positive-weak-gradient-focus: linear-gradient(
    180deg,
    #2b7192 0%,
    #23282e 100%
  );
  --data-viz-positive-weak-gradient-focus-end: #2b7192;
  --data-viz-positive-weak-gradient-focus-start: #23282e;
  --data-viz-positive-weak-gradient-hover: linear-gradient(
    180deg,
    #2b7192 0%,
    #23282e 100%
  );
  --data-viz-positive-weak-gradient-hover-end: #2b7192;
  --data-viz-positive-weak-gradient-hover-start: #23282e;
  --data-viz-severe-warning-active: #f7782f;
  --data-viz-severe-warning-default: #f7782f;
  --data-viz-severe-warning-focus: #fcc9a7;
  --data-viz-severe-warning-gradient-default: linear-gradient(
    180deg,
    #f7782f 50%,
    #c44f14 100%
  );
  --data-viz-severe-warning-gradient-default-end: #f7782f;
  --data-viz-severe-warning-gradient-default-start: #c44f14;
  --data-viz-severe-warning-hover: #fcc9a7;
  --data-viz-severe-warning-weak-gradient-active: linear-gradient(
    180deg,
    #63402e 0%,
    #23282e 100%
  );
  --data-viz-severe-warning-weak-gradient-active-end: #63402e;
  --data-viz-severe-warning-weak-gradient-active-start: #23282e;
  --data-viz-severe-warning-weak-gradient-default: linear-gradient(
    180deg,
    #63402e 0%,
    #23282e 100%
  );
  --data-viz-severe-warning-weak-gradient-default-end: #63402e;
  --data-viz-severe-warning-weak-gradient-default-start: #23282e;
  --data-viz-severe-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #8d502f 0%,
    #23282e 100%
  );
  --data-viz-severe-warning-weak-gradient-focus-end: #8d502f;
  --data-viz-severe-warning-weak-gradient-focus-start: #23282e;
  --data-viz-severe-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #8d502f 0%,
    #23282e 100%
  );
  --data-viz-severe-warning-weak-gradient-hover-end: #8d502f;
  --data-viz-severe-warning-weak-gradient-hover-start: #23282e;
  --data-viz-warning-active: #f0c243;
  --data-viz-warning-default: #f0c243;
  --data-viz-warning-focus: #f5e08e;
  --data-viz-warning-gradient-default: linear-gradient(
    180deg,
    #f0c243 50%,
    #d6900d 100%
  );
  --data-viz-warning-gradient-default-end: #f0c243;
  --data-viz-warning-gradient-default-start: #d6900d;
  --data-viz-warning-hover: #f5e08e;
  --data-viz-warning-weak-gradient-active: linear-gradient(
    180deg,
    #615634 0%,
    #23282e 100%
  );
  --data-viz-warning-weak-gradient-active-end: #615634;
  --data-viz-warning-weak-gradient-active-start: #23282e;
  --data-viz-warning-weak-gradient-default: linear-gradient(
    180deg,
    #615634 0%,
    #23282e 100%
  );
  --data-viz-warning-weak-gradient-default-end: #615634;
  --data-viz-warning-weak-gradient-default-start: #23282e;
  --data-viz-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #897539 0%,
    #23282e 100%
  );
  --data-viz-warning-weak-gradient-focus-end: #897539;
  --data-viz-warning-weak-gradient-focus-start: #23282e;
  --data-viz-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #897539 0%,
    #23282e 100%
  );
  --data-viz-warning-weak-gradient-hover-end: #897539;
  --data-viz-warning-weak-gradient-hover-start: #23282e;

  /* token for modal overlay */
  --overlay-bg-default: rgba(0,0,0,0.69804);
}

/* Non-token additions for contextual container. */
*[data-mds-theme="dark-classic"] [class^="mds-"] {
  color-scheme: dark;
}
*[data-mds-theme="dark-classic"] [class*=" mds-"] {
  color-scheme: dark;
}
`,le=`/**
 * This file is auto-generated. Do not edit it directly.
 */

*[data-mds-theme="blue-dark"] {
  --brand-bg-active: #464c54;
  --brand-bg-default: #373c42;
  --brand-bg-disabled: #e1e4e8;
  --brand-bg-focus: #464c54;
  --brand-bg-gradient-default: linear-gradient(90deg, #373c42 0%, #0f1214 100%);
  --brand-bg-gradient-end: #0f1214;
  --brand-bg-gradient-start: #373c42;
  --brand-bg-hover: #373c42;
  --brand-bg-strong-active: #373c42;
  --brand-bg-strong-default: #373c42;
  --brand-bg-strong-focus: #373c42;
  --brand-bg-strong-hover: #373c42;
  --brand-border-active: #cce1ff;
  --brand-icon-active: #fff;
  --brand-icon-default: #f7f7f7;
  --brand-icon-hover: #fff;
  --brand-icon-weak-active: #f7f7f7;
  --brand-icon-weak-default: #f7f7f7;
  --brand-icon-weak-focus: #f7f7f7;
  --brand-icon-weak-hover: #f7f7f7;
  --brand-text-active: #f7f7f7;
  --brand-text-default: #f7f7f7;
  --brand-text-hover: #f7f7f7;
  --brand-text-strong-default: #f0f1f2;
  --brand-text-weak-active: #f7f7f7;
  --brand-text-weak-default: #f7f7f7;
  --brand-text-weak-focus: #f7f7f7;
  --brand-text-weak-hover: #f7f7f7;
  --brand-accent-border-active: #5191f0;
  --brand-accent-border-default: #5191f0;
  --brand-accent-border-focus: #5191f0;
  --brand-accent-border-hover: #7e868f;
  --brand-accent-border-medium-active: #1d69cc;
  --brand-accent-border-medium-default: #596069;
  --brand-accent-border-medium-disabled: #fff;
  --brand-accent-border-medium-focus: #fff;
  --brand-accent-border-medium-hover: #fff;
  --brand-accent-border-strong-active: #0f1214;
  --brand-accent-border-strong-default: #0f1214;
  --brand-accent-border-strong-disabled: #fff;
  --brand-accent-border-strong-focus: #fff;
  --brand-accent-border-strong-hover: #fff;
  --brand-accent-border-weak-active: #2774d9;
  --brand-accent-border-weak-default: #d0d4d9;
  --brand-accent-border-weak-disabled: #fff;
  --brand-accent-border-weak-focus: #fff;
  --brand-accent-border-weak-hover: #fff;
  --brand-accent-icon-active: #7cadf7;
  --brand-accent-icon-default: #c1c6cc;
  --brand-accent-icon-disabled: #6f7680;
  --brand-accent-icon-focus: #fff;
  --brand-accent-icon-medium-active: #5191f0;
  --brand-accent-icon-medium-default: #979fa8;
  --brand-accent-icon-medium-disabled: #fff;
  --brand-accent-icon-medium-focus: #fff;
  --brand-accent-icon-weak-active: #2774d9;
  --brand-accent-icon-weak-default: #6f7680;
  --brand-accent-icon-weak-disabled: #fff;
  --brand-accent-icon-weak-focus: #fff;
  --base-bg-default: #0f1214;
  --base-bg-hover: #0f1214;
  --base-bg-active: #0f1214;
  --base-bg-disabled: #464c54;
  --base-bg-weak-default: #23282e;
  --base-bg-weak-hover: #373c42;
  --base-bg-weak-active: #23282e;
  --base-bg-weak-disabled: #464c54;
  --base-bg-medium-default: #373c42;
  --base-bg-medium-hover: #464c54;
  --base-bg-medium-active: #373c42;
  --base-bg-medium-disabled: #e85fc6;
  --base-bg-strong-default: #a7adb5;
  --base-bg-strong-hover: #d0d4d9;
  --base-bg-strong-focus: #d0d4d9;
  --base-bg-strong-active: #d0d4d9;
  --base-bg-strong-disabled: #596069;
  --base-icon-in-default: #23282e;
  --base-icon-in-hover: #23282e;
  --base-icon-in-focus: #23282e;
  --base-icon-in-active: #23282e;
  --base-icon-in-disabled: #6f7680;
  --base-text-default: #f7f7f7;
  --base-text-disabled: #6f7680;
  --base-text-weak-default: #889099;
  --base-text-weak-disabled: #6f7680;
  --base-text-medium-default: #d0d4d9;
  --base-text-medium-disabled: #6f7680;
  --base-text-strong-default: #f0f1f2;
  --base-text-strong-disabled: #6f7680;
  --base-text-in-default: #23282e;
  --base-text-in-hover: #23282e;
  --base-text-in-focus: #23282e;
  --base-text-in-active: #23282e;
  --base-text-in-disabled: #23282e;
  --base-text-in-weak-default: #fff;
  --base-border-default: #596069;
  --base-border-weak-default: #23282e;
  --base-border-medium-default: #464c54;
  --base-border-strong-default: #c1c6cc;
  --base-border-gradient-default: linear-gradient(
    180deg,
    #0f1214 0%,
    #656c75 50%,
    #0f1214 100%
  );
  --inverse-bg-default: #373c42;
  --inverse-bg-hover: #373c42;
  --inverse-bg-focus: #464c54;
  --inverse-bg-active: #464c54;
  --inverse-bg-disabled: #e1e4e8;
  --inverse-bg-gradient-start: #373c42;
  --inverse-bg-gradient-end: #0f1214;
  --inverse-bg-gradient-default: linear-gradient(
    90deg,
    #373c42 0%,
    #0f1214 100%
  );
  --inverse-bg-weak-default: #464c54;
  --inverse-text-default: #f7f7f7;
  --inverse-text-hover: #f7f7f7;
  --inverse-text-focus: #f7f7f7;
  --inverse-text-active: #f7f7f7;
  --inverse-text-disabled: #656c75;
  --inverse-text-medium-default: #c1c6cc;
  --inverse-text-medium-disabled: #656c75;
  --inverse-icon-default: #f7f7f7;
  --inverse-icon-hover: #fff;
  --inverse-icon-focus: #fff;
  --inverse-icon-active: #fff;
  --inverse-icon-disabled: #6f7680;
  --inverse-icon-strong-default: #fff;
  --inverse-icon-strong-hover: #fff;
  --inverse-icon-strong-focus: #fff;
  --inverse-icon-strong-active: #fff;
  --inverse-icon-strong-disabled: #6f7680;
  --inverse-border-default: #6f7680;
  --inverse-border-hover: #649ef5;
  --inverse-border-focus: #cce1ff;
  --inverse-border-active: #cce1ff;
  --inverse-border-disabled: #e1e4e8;
  --control-bg-default: #23282e;
  --control-bg-hover: #2a3442;
  --control-bg-focus: #2a3442;
  --control-bg-active: #2a3442;
  --control-bg-disabled: #373c42;
  --control-bg-weak-default: #23282e;
  --control-bg-weak-hover: #373c42;
  --control-bg-weak-focus: #23282e;
  --control-bg-weak-active: #2a3442;
  --control-bg-weak-disabled: #373c42;
  --control-bg-medium-default: #23282e;
  --control-bg-medium-hover: #373c42;
  --control-bg-medium-focus: #979fa8;
  --control-bg-medium-active: #2a3442;
  --control-bg-medium-disabled: #373c42;
  --control-bg-strong-default: #649ef5;
  --control-bg-strong-hover: #7cadf7;
  --control-bg-strong-focus: #7cadf7;
  --control-bg-strong-active: #7cadf7;
  --control-bg-strong-disabled: #596069;
  --control-icon-default: #649ef5;
  --control-icon-hover: #7cadf7;
  --control-icon-focus: #7cadf7;
  --control-icon-active: #7cadf7;
  --control-icon-disabled: #cce1ff;
  --control-icon-weak-default: #c1c6cc;
  --control-icon-weak-hover: #649ef5;
  --control-icon-weak-focus: #649ef5;
  --control-icon-weak-active: #649ef5;
  --control-icon-weak-disabled: #6f7680;
  --control-icon-medium-default: #649ef5;
  --control-icon-medium-hover: #979fa8;
  --control-icon-medium-focus: #979fa8;
  --control-icon-medium-active: #889099;
  --control-icon-medium-disabled: #e1e4e8;
  --control-icon-strong-default: #d0d4d9;
  --control-icon-strong-hover: #f0f1f2;
  --control-icon-strong-focus: #649ef5;
  --control-icon-strong-active: #649ef5;
  --control-icon-strong-disabled: #6f7680;
  --control-icon-in-default: #23282e;
  --control-icon-in-hover: #23282e;
  --control-icon-in-focus: #23282e;
  --control-icon-in-active: #23282e;
  --control-icon-in-disabled: #6f7680;
  --control-icon-in-strong-default: #649ef5;
  --control-icon-in-strong-hover: #7cadf7;
  --control-icon-in-strong-focus: #7cadf7;
  --control-icon-in-strong-active: #7cadf7;
  --control-icon-in-strong-disabled: #6f7680;
  --control-border-default: #7e868f;
  --control-border-hover: #7cadf7;
  --control-border-focus: #7cadf7;
  --control-border-active: #7cadf7;
  --control-border-disabled: #596069;
  --control-border-weak-default: #656c75;
  --control-border-weak-hover: #7cadf7;
  --control-border-weak-focus: #7cadf7;
  --control-border-weak-active: #7cadf7;
  --control-border-weak-disabled: #596069;
  --control-border-medium-default: #649ef5;
  --control-border-medium-hover: #649ef5;
  --control-border-medium-focus: #649ef5;
  --control-border-medium-active: #649ef5;
  --control-border-medium-disabled: #596069;
  --control-border-strong-default: #c1c6cc;
  --control-border-strong-hover: #656c75;
  --control-border-strong-focus: #656c75;
  --control-border-strong-active: #649ef5;
  --control-border-strong-disabled: #596069;
  --interact-bg-default: #649ef5;
  --interact-bg-hover: #7cadf7;
  --interact-bg-focus: #7cadf7;
  --interact-bg-active: #7cadf7;
  --interact-bg-disabled: #446392;
  --interact-bg-weak-default: #23282e;
  --interact-bg-weak-hover: #2f3d52;
  --interact-bg-weak-focus: #2f3d52;
  --interact-bg-weak-active: #2f3d52;
  --interact-bg-weak-disabled: #464c54;
  --interact-bg-medium-default: #649ef5;
  --interact-bg-medium-hover: #3a5276;
  --interact-bg-medium-active: #3a5276;
  --interact-bg-strong-hover: #596069;
  --interact-bg-strong-active: #596069;
  --interact-text-default: #649ef5;
  --interact-text-hover: #7cadf7;
  --interact-text-focus: #7cadf7;
  --interact-text-active: #7cadf7;
  --interact-text-disabled: #446392;
  --interact-text-weak-default: #c1c6cc;
  --interact-text-weak-hover: #649ef5;
  --interact-text-weak-focus: #649ef5;
  --interact-text-weak-active: #649ef5;
  --interact-text-weak-disabled: #6f7680;
  --interact-text-in-default: #23282e;
  --interact-text-in-hover: #23282e;
  --interact-text-in-focus: #23282e;
  --interact-text-in-active: #23282e;
  --interact-text-in-disabled: #23282e;
  --interact-icon-default: #649ef5;
  --interact-icon-hover: #7cadf7;
  --interact-icon-focus: #7cadf7;
  --interact-icon-active: #7cadf7;
  --interact-icon-disabled: #446392;
  --interact-icon-weak-default: #c1c6cc;
  --interact-icon-weak-hover: #d0d4d9;
  --interact-icon-weak-focus: #d0d4d9;
  --interact-icon-weak-active: #d0d4d9;
  --interact-icon-weak-disabled: #6f7680;
  --interact-icon-medium-default: #c1c6cc;
  --interact-icon-medium-hover: #649ef5;
  --interact-icon-medium-focus: #649ef5;
  --interact-icon-medium-active: #649ef5;
  --interact-icon-medium-disabled: #6f7680;
  --interact-icon-strong-default: #d0d4d9;
  --interact-icon-strong-hover: #f0f1f2;
  --interact-icon-strong-focus: #f0f1f2;
  --interact-icon-strong-active: #f0f1f2;
  --interact-icon-strong-disabled: #6f7680;
  --interact-icon-in-default: #23282e;
  --interact-icon-in-hover: #23282e;
  --interact-icon-in-focus: #23282e;
  --interact-icon-in-active: #23282e;
  --interact-icon-in-disabled: #23282e;
  --interact-border-default: #649ef5;
  --interact-border-hover: #7cadf7;
  --interact-border-focus: #7cadf7;
  --interact-border-active: #7cadf7;
  --interact-border-disabled: #446392;
  --interact-border-weak-default: #656c75;
  --interact-border-weak-hover: #cce1ff;
  --interact-border-weak-focus: #e1e4e8;
  --interact-border-weak-active: #e1e4e8;
  --interact-border-weak-disabled: #596069;
  --interact-border-medium-default: #649ef5;
  --interact-border-medium-hover: #a3c8ff;
  --interact-border-medium-focus: #649ef5;
  --interact-border-medium-active: #649ef5;
  --interact-border-medium-disabled: #e1e4e8;
  --positive-bg-default: #33bbf5;
  --positive-bg-hover: #33bbf5;
  --positive-bg-focus: #33bbf5;
  --positive-bg-active: #33bbf5;
  --positive-bg-disabled: #33bbf5;
  --positive-bg-weak-default: #23282e;
  --positive-bg-weak-hover: #23282e;
  --positive-bg-weak-focus: #23282e;
  --positive-bg-weak-active: #23282e;
  --positive-bg-weak-disabled: #23282e;
  --positive-bg-medium-default: #28546a;
  --positive-bg-medium-hover: #28546a;
  --positive-bg-medium-focus: #28546a;
  --positive-bg-medium-active: #28546a;
  --positive-bg-medium-disabled: #373c42;
  --positive-bg-strong-default: #173746;
  --positive-icon-default: #33bbf5;
  --positive-icon-hover: #33bbf5;
  --positive-icon-focus: #33bbf5;
  --positive-icon-active: #33bbf5;
  --positive-icon-disabled: #596069;
  --positive-icon-weak-default: #6fd2fc;
  --positive-icon-weak-hover: #6fd2fc;
  --positive-icon-weak-focus: #6fd2fc;
  --positive-icon-weak-active: #6fd2fc;
  --positive-icon-weak-disabled: #596069;
  --positive-icon-strong-default: #33bbf5;
  --positive-icon-strong-hover: #33bbf5;
  --positive-icon-strong-focus: #33bbf5;
  --positive-icon-strong-active: #33bbf5;
  --positive-icon-strong-disabled: #2b7192;
  --positive-icon-in-default: #23282e;
  --positive-icon-in-hover: #23282e;
  --positive-icon-in-focus: #23282e;
  --positive-icon-in-active: #23282e;
  --positive-icon-in-disabled: #23282e;
  --positive-border-default: #33bbf5;
  --positive-border-hover: #33bbf5;
  --positive-border-focus: #33bbf5;
  --positive-border-active: #33bbf5;
  --positive-border-disabled: #33bbf5;
  --positive-border-weak-default: #23282e;
  --positive-border-weak-hover: #33bbf5;
  --positive-border-weak-focus: #33bbf5;
  --positive-border-weak-active: #33bbf5;
  --positive-border-weak-disabled: #596069;
  --positive-border-strong-default: #f7f7f7;
  --positive-border-strong-hover: #f7f7f7;
  --positive-border-strong-focus: #f7f7f7;
  --positive-border-strong-active: #f7f7f7;
  --positive-border-strong-disabled: #f7f7f7;
  --positive-text-in-default: #23282e;
  --positive-text-in-hover: #23282e;
  --positive-text-in-focus: #23282e;
  --positive-text-in-active: #23282e;
  --positive-text-in-disabled: #23282e;
  --warning-bg-default: #f0c243;
  --warning-bg-hover: #f0c243;
  --warning-bg-focus: #f0c243;
  --warning-bg-active: #f0c243;
  --warning-bg-disabled: #f0c243;
  --warning-bg-weak-default: #23282e;
  --warning-bg-weak-hover: #23282e;
  --warning-bg-weak-focus: #23282e;
  --warning-bg-weak-active: #23282e;
  --warning-bg-weak-disabled: #23282e;
  --warning-bg-medium-default: #5c4d28;
  --warning-bg-medium-hover: #5c4d28;
  --warning-bg-medium-focus: #5c4d28;
  --warning-bg-medium-active: #5c4d28;
  --warning-bg-medium-disabled: #373c42;
  --warning-bg-strong-default: #35301c;
  --warning-icon-default: #f0c243;
  --warning-icon-hover: #f0c243;
  --warning-icon-focus: #f0c243;
  --warning-icon-active: #f0c243;
  --warning-icon-disabled: #596069;
  --warning-icon-strong-default: #f0c243;
  --warning-icon-strong-hover: #f0c243;
  --warning-icon-strong-focus: #f0c243;
  --warning-icon-strong-active: #f0c243;
  --warning-icon-strong-disabled: #f0c243;
  --warning-icon-in-default: #23282e;
  --warning-icon-in-hover: #23282e;
  --warning-icon-in-focus: #23282e;
  --warning-icon-in-active: #23282e;
  --warning-icon-in-disabled: #23282e;
  --warning-border-default: #f0c243;
  --warning-border-hover: #f0c243;
  --warning-border-focus: #f0c243;
  --warning-border-active: #f0c243;
  --warning-border-disabled: #f0c243;
  --warning-border-weak-default: #23282e;
  --warning-border-weak-hover: #23282e;
  --warning-border-weak-focus: #23282e;
  --warning-border-weak-active: #23282e;
  --warning-border-weak-disabled: #596069;
  --warning-border-strong-default: #f7f7f7;
  --warning-border-strong-hover: #f7f7f7;
  --warning-border-strong-focus: #f7f7f7;
  --warning-border-strong-active: #f7f7f7;
  --warning-border-strong-disabled: #f7f7f7;
  --warning-text-in-default: #23282e;
  --warning-text-in-hover: #23282e;
  --warning-text-in-focus: #23282e;
  --warning-text-in-active: #23282e;
  --warning-text-in-disabled: #23282e;
  --severe-warning-bg-default: #f7782f;
  --severe-warning-bg-hover: #f7782f;
  --severe-warning-bg-focus: #f7782f;
  --severe-warning-bg-active: #f7782f;
  --severe-warning-bg-disabled: #f7782f;
  --severe-warning-bg-weak-default: #23282e;
  --severe-warning-bg-weak-hover: #23282e;
  --severe-warning-bg-weak-focus: #23282e;
  --severe-warning-bg-weak-active: #23282e;
  --severe-warning-bg-weak-disabled: #23282e;
  --severe-warning-bg-medium-default: #644637;
  --severe-warning-bg-medium-hover: #644637;
  --severe-warning-bg-medium-focus: #644637;
  --severe-warning-bg-medium-active: #644637;
  --severe-warning-bg-medium-disabled: #373c42;
  --severe-warning-bg-strong-default: #462e21;
  --severe-warning-icon-default: #f7782f;
  --severe-warning-icon-hover: #f7782f;
  --severe-warning-icon-focus: #f7782f;
  --severe-warning-icon-active: #f7782f;
  --severe-warning-icon-disabled: #596069;
  --severe-warning-icon-strong-default: #fc8d4c;
  --severe-warning-icon-strong-hover: #fc8d4c;
  --severe-warning-icon-strong-focus: #fc8d4c;
  --severe-warning-icon-strong-active: #fc8d4c;
  --severe-warning-icon-strong-disabled: #fc8d4c;
  --severe-warning-icon-in-default: #23282e;
  --severe-warning-icon-in-hover: #23282e;
  --severe-warning-icon-in-focus: #23282e;
  --severe-warning-icon-in-active: #23282e;
  --severe-warning-icon-in-disabled: #23282e;
  --severe-warning-border-default: #f7782f;
  --severe-warning-border-hover: #f7782f;
  --severe-warning-border-focus: #f7782f;
  --severe-warning-border-active: #f7782f;
  --severe-warning-border-disabled: #f7782f;
  --severe-warning-border-weak-default: #23282e;
  --severe-warning-border-weak-hover: #23282e;
  --severe-warning-border-weak-focus: #23282e;
  --severe-warning-border-weak-active: #23282e;
  --severe-warning-border-weak-disabled: #596069;
  --negative-bg-default: #fa5762;
  --negative-bg-hover: #ff6e72;
  --negative-bg-focus: #ff6e72;
  --negative-bg-active: #ff6e72;
  --negative-bg-disabled: #8f3f48;
  --negative-bg-weak-default: #23282e;
  --negative-bg-weak-hover: #984952;
  --negative-bg-weak-focus: #984952;
  --negative-bg-weak-active: #984952;
  --negative-bg-weak-disabled: #373c42;
  --negative-bg-medium-default: #63363e;
  --negative-bg-medium-hover: #63363e;
  --negative-bg-medium-focus: #63363e;
  --negative-bg-medium-active: #63363e;
  --negative-bg-medium-disabled: #373c42;
  --negative-bg-strong-default: #46272a;
  --negative-text-default: #fa5762;
  --negative-text-hover: #ff878b;
  --negative-text-focus: #ff878b;
  --negative-text-active: #ff878b;
  --negative-text-disabled: #8f3f48;
  --negative-text-in-default: #23282e;
  --negative-text-in-hover: #23282e;
  --negative-text-in-focus: #23282e;
  --negative-text-in-active: #23282e;
  --negative-text-in-disabled: #23282e;
  --negative-icon-default: #fa5762;
  --negative-icon-hover: #ff878b;
  --negative-icon-focus: #ff878b;
  --negative-icon-active: #ff878b;
  --negative-icon-disabled: #8f3f48;
  --negative-icon-weak-default: #ffb2b5;
  --negative-icon-weak-hover: #ffb2b5;
  --negative-icon-weak-focus: #ffb2b5;
  --negative-icon-weak-active: #ffb2b5;
  --negative-icon-weak-disabled: #596069;
  --negative-icon-in-default: #23282e;
  --negative-icon-in-hover: #23282e;
  --negative-icon-in-focus: #23282e;
  --negative-icon-in-active: #23282e;
  --negative-icon-in-disabled: #23282e;
  --negative-border-default: #fa5762;
  --negative-border-hover: #ff878b;
  --negative-border-focus: #ff878b;
  --negative-border-active: #ff878b;
  --negative-border-disabled: #914b50;
  --negative-border-weak-default: #23282e;
  --negative-border-weak-hover: #23282e;
  --negative-border-weak-focus: #23282e;
  --negative-border-weak-active: #23282e;
  --negative-border-weak-disabled: #596069;
  --negative-border-medium-default: #eb4651;
  --negative-border-medium-hover: #ff878b;
  --negative-border-medium-focus: #ff878b;
  --negative-border-medium-active: #ff878b;
  --negative-border-medium-disabled: #8f3f48;
  --negative-border-strong-default: #f7f7f7;
  --negative-border-strong-hover: #fff;
  --negative-border-strong-focus: #f7f7f7;
  --negative-border-strong-active: #f7f7f7;
  --negative-border-strong-disabled: #f7f7f7;
  --info-bg-default: #b587fa;
  --info-bg-hover: #b587fa;
  --info-bg-focus: #b587fa;
  --info-bg-active: #b587fa;
  --info-bg-disabled: #b587fa;
  --info-bg-weak-default: #23282e;
  --info-bg-weak-hover: #23282e;
  --info-bg-weak-focus: #23282e;
  --info-bg-weak-active: #23282e;
  --info-bg-weak-disabled: #23282e;
  --info-bg-medium-default: #534a6d;
  --info-bg-medium-hover: #534a6d;
  --info-bg-medium-focus: #534a6d;
  --info-bg-medium-active: #534a6d;
  --info-bg-medium-disabled: #373c42;
  --info-bg-strong-default: #352d49;
  --info-icon-default: #b587fa;
  --info-icon-hover: #b587fa;
  --info-icon-focus: #b587fa;
  --info-icon-active: #b587fa;
  --info-icon-disabled: #596069;
  --info-icon-weak-default: #a974f7;
  --info-icon-weak-hover: #a974f7;
  --info-icon-weak-focus: #a974f7;
  --info-icon-weak-active: #a974f7;
  --info-icon-weak-disabled: #596069;
  --info-icon-in-default: #23282e;
  --info-icon-in-hover: #23282e;
  --info-icon-in-focus: #23282e;
  --info-icon-in-active: #23282e;
  --info-icon-in-disabled: #23282e;
  --info-border-default: #b587fa;
  --info-border-hover: #b587fa;
  --info-border-focus: #b587fa;
  --info-border-active: #b587fa;
  --info-border-disabled: #b587fa;
  --info-border-weak-default: #23282e;
  --info-border-weak-hover: #23282e;
  --info-border-weak-focus: #23282e;
  --info-border-weak-active: #23282e;
  --info-border-weak-disabled: #596069;
  --dormant-bg-default: #6f7680;
  --dormant-bg-disabled: #6f7680;
  --dormant-bg-medium-default: #464c54;
  --dormant-bg-medium-disabled: #373c42;
  --dormant-icon-default: #c1c6cc;
  --dormant-icon-disabled: #596069;
  --dormant-icon-medium-default: #fff;
  --dormant-icon-in-default: #23282e;
  --dormant-icon-in-disabled: #23282e;
  --dormant-icon-in-medium-default: #23282e;
  --dormant-border-default: #a7adb5;
  --dormant-border-disabled: #596069;
  --accent-a-default: #9ca6ff;
  --accent-a-hover: #8a95ff;
  --accent-a-weak-default: #4d5477;
  --accent-b-default: #e3447c;
  --accent-b-hover: #cf3a7a;
  --accent-b-weak-default: #704959;
  --accent-c-default: #fcb3c8;
  --accent-c-hover: #ff87a9;
  --accent-c-weak-default: #6f5964;
  --accent-d-default: #9b5ff5;
  --accent-d-hover: #8d4eed;
  --accent-d-weak-default: #5b5077;
  --accent-e-default: #9dba4c;
  --accent-e-hover: #89ab2c;
  --accent-e-weak-default: #4e5b39;
  --accent-f-default: #d95a1a;
  --accent-f-hover: #c44f14;
  --accent-f-weak-default: #6f4b39;
  --accent-g-default: #4ad9d9;
  --accent-g-hover: #17c2c2;
  --accent-g-weak-default: #1f5e62;
  --accent-h-default: #028e99;
  --accent-h-hover: #01818c;
  --accent-h-weak-default: #456a6d;
  --accent-i-default: #f582d8;
  --accent-i-hover: #f26dd1;
  --accent-i-weak-default: #6c476a;
  --accent-j-default: #767eb2;
  --accent-j-hover: #6871a3;
  --accent-j-weak-default: #505569;
  --accent-k-default: #4cbf7f;
  --accent-k-hover: #36b26e;
  --accent-k-weak-default: #315d4a;
  --in-progress-bg-medium-default: #534a6d;
  --in-progress-bg-medium-hover: #534a6d;
  --in-progress-bg-medium-focus: #534a6d;
  --in-progress-bg-medium-active: #534a6d;
  --in-progress-bg-medium-disabled: #373c42;
  --in-progress-icon-default: #b587fa;
  --in-progress-icon-hover: #b587fa;
  --in-progress-icon-focus: #b587fa;
  --in-progress-icon-active: #b587fa;
  --in-progress-icon-disabled: #596069;
  --in-progress-icon-in-default: #23282e;
  --in-progress-icon-in-hover: #23282e;
  --in-progress-icon-in-focus: #23282e;
  --in-progress-icon-in-active: #23282e;
  --in-progress-icon-in-disabled: #23282e;
  --in-progress-border-default: #b587fa;
  --in-progress-border-hover: #b587fa;
  --in-progress-border-focus: #b587fa;
  --in-progress-border-active: #b587fa;
  --in-progress-border-disabled: #b587fa;
  --low-warning-bg-medium-default: #1f565b;
  --low-warning-bg-medium-hover: #1f565b;
  --low-warning-bg-medium-focus: #1f565b;
  --low-warning-bg-medium-active: #1f565b;
  --low-warning-bg-medium-disabled: #373c42;
  --low-warning-icon-default: #0bb2b8;
  --low-warning-icon-hover: #0bb2b8;
  --low-warning-icon-focus: #0bb2b8;
  --low-warning-icon-active: #0bb2b8;
  --low-warning-icon-disabled: #596069;
  --low-warning-icon-in-default: #23282e;
  --low-warning-icon-in-hover: #23282e;
  --low-warning-icon-in-focus: #23282e;
  --low-warning-icon-in-active: #23282e;
  --low-warning-icon-in-disabled: #23282e;
  --low-warning-border-default: #0bb2b8;
  --low-warning-border-hover: #0bb2b8;
  --low-warning-border-focus: #0bb2b8;
  --low-warning-border-active: #0bb2b8;
  --low-warning-border-disabled: #0bb2b8;
  --excellent-bg-medium-default: #3e506a;
  --excellent-bg-medium-hover: #3e506a;
  --excellent-bg-medium-focus: #3e506a;
  --excellent-bg-medium-active: #3e506a;
  --excellent-bg-medium-disabled: #373c42;
  --excellent-icon-default: #649ef5;
  --excellent-icon-hover: #649ef5;
  --excellent-icon-focus: #649ef5;
  --excellent-icon-active: #649ef5;
  --excellent-icon-disabled: #596069;
  --excellent-icon-in-default: #23282e;
  --excellent-icon-in-hover: #23282e;
  --excellent-icon-in-focus: #23282e;
  --excellent-icon-in-active: #23282e;
  --excellent-icon-in-disabled: #23282e;
  --excellent-border-default: #649ef5;
  --excellent-border-hover: #649ef5;
  --excellent-border-focus: #649ef5;
  --excellent-border-active: #649ef5;
  --excellent-border-disabled: #649ef5;
  --port-diagram-base-bg-default: #c1c6cc;
  --port-diagram-base-bg-active: #889099;
  --port-diagram-base-bg-medium-default: #d0d4d9;
  --port-diagram-base-bg-medium-active: #c1c6cc;
  --port-diagram-base-bg-weak-default: #f0f1f2;
  --port-diagram-base-border-default: #6f7680;
  --port-diagram-base-border-active: #6f7680;
  --port-diagram-base-border-medium-active: #6f7680;
  --port-diagram-base-border-strong-default: #23282e;
  --port-diagram-base-border-strong-active: #23282e;
  --port-diagram-base-icon-in-default: #373c42;
  --port-diagram-base-icon-in-active: #373c42;
  --port-diagram-full-speed-bg-default: #0570ad;
  --port-diagram-full-speed-bg-active: #03639c;
  --port-diagram-full-speed-bg-medium-default: #9adffc;
  --port-diagram-full-speed-bg-medium-active: #33bbf5;
  --port-diagram-full-speed-border-medium-active: #03639c;
  --port-diagram-full-speed-border-strong-default: #23282e;
  --port-diagram-full-speed-border-strong-active: #23282e;
  --port-diagram-full-speed-icon-in-default: #fff;
  --port-diagram-full-speed-icon-in-active: #fff;
  --port-diagram-disconnected-bg-default: #373c42;
  --port-diagram-disconnected-bg-active: #23282e;
  --port-diagram-disconnected-bg-medium-default: #d0d4d9;
  --port-diagram-disconnected-bg-medium-active: #c1c6cc;
  --port-diagram-disconnected-border-medium-active: #6f7680;
  --port-diagram-disconnected-border-strong-default: #23282e;
  --port-diagram-disconnected-border-strong-active: #23282e;
  --port-diagram-disconnected-icon-in-default: #fff;
  --port-diagram-disconnected-icon-in-active: #fff;
  --port-diagram-reduced-speed-bg-default: #0570ad;
  --port-diagram-reduced-speed-bg-active: #03639c;
  --port-diagram-reduced-speed-bg-medium-default: #0d8bd4;
  --port-diagram-reduced-speed-bg-medium-active: #087abd;
  --port-diagram-reduced-speed-border-default: #fff;
  --port-diagram-reduced-speed-border-active: #fff;
  --port-diagram-reduced-speed-border-medium-active: #03639c;
  --port-diagram-reduced-speed-border-strong-default: #23282e;
  --port-diagram-reduced-speed-border-strong-active: #23282e;
  --port-diagram-reduced-speed-icon-in-default: #fff;
  --port-diagram-reduced-speed-icon-in-active: #fff;
  --port-diagram-warning-bg-default: #b05f04;
  --port-diagram-warning-bg-active: #944b03;
  --port-diagram-warning-bg-medium-default: #f0c243;
  --port-diagram-warning-bg-medium-active: #e0a419;
  --port-diagram-warning-border-medium-active: #944b03;
  --port-diagram-warning-border-strong-default: #23282e;
  --port-diagram-warning-border-strong-active: #23282e;
  --port-diagram-warning-border-default: #fff;
  --port-diagram-warning-icon-in-default: #fff;
  --port-diagram-warning-icon-in-active: #fff;
  --port-diagram-critical-bg-default: #cc2d37;
  --port-diagram-critical-bg-active: #a01d26;
  --port-diagram-critical-bg-medium-default: #ffb2b5;
  --port-diagram-critical-bg-medium-active: #ff878b;
  --port-diagram-critical-border-medium-active: #a01d26;
  --port-diagram-critical-border-strong-default: #23282e;
  --port-diagram-critical-border-strong-active: #23282e;
  --port-diagram-critical-icon-in-default: #fff;
  --port-diagram-critical-icon-in-active: #fff;
  --port-diagram-low-power-bg-default: #b05f04;
  --port-diagram-low-power-bg-active: #944b03;
  --port-diagram-low-power-bg-medium-default: #f0c243;
  --port-diagram-low-power-bg-medium-active: #e0a419;
  --port-diagram-low-power-bg-weak-default: #f5e08e;
  --port-diagram-low-power-bg-weak-active: #f2d268;
  --port-diagram-low-power-border-medium-active: #944b03;
  --port-diagram-low-power-border-strong-default: #23282e;
  --port-diagram-low-power-border-strong-active: #23282e;
  --port-diagram-low-power-icon-in-default: #b05f04;
  --port-diagram-low-power-icon-in-active: #944b03;

  /* dark theme -- elevation ( FOR INTERNAL USE ONLY, TEMPORARY ) */
  --elevation-control-default: 0px 3px 8px 0px rgba(0,0,0,0.47843);
  --elevation-control-focus: 0px 0px 0px 2px #446392, 0px 0px 0px 4px #649ef5;
  --elevation-control-select: 0px 0px 0px 2px #7cadf7;
  --elevation-data-viz-focus: 0px 0px 0px 2px #23282e, 0px 0px 0px 4px #fff,
    0px 0px 0px 6px #446392, 0px 0px 0px 8px #7cadf7;
  --elevation-data-viz-select: 0px 0px 0px 2px #23282e, 0px 0px 0px 4px #fff;
  --elevation-floating-default: 0px 4px 12px 0px rgba(0,0,0,0.78039);
  --elevation-invalid-default: 0px 0px 0px 2px #914b50;
  --elevation-invalid-focus: 0px 0px 0px 2px #914b50, 0px 0px 0px 4px #ff878b;
  --elevation-lifted-default: 0px 3px 8px 0px rgba(0,0,0,0.47843);
  --elevation-lifted-inset: inset 10px 0 8px -8px rgba(0,0,0,0.47843);
  --elevation-raised-default: 0px 4px 12px 0px rgba(0,0,0,0.61961);
  --elevation-subtle-default: 0px 2px 5px 0px rgba(0,0,0,0.34902);

  /* color tokens -- data visualizations */
  --data-viz-categorical-1-active: #6977f0;
  --data-viz-categorical-1-default: #6977f0;
  --data-viz-categorical-1-focus: #bac1ff;
  --data-viz-categorical-1-gradient-default: linear-gradient(
    180deg,
    #6977f0 50%,
    #4653c7 100%
  );
  --data-viz-categorical-1-gradient-default-end: #6977f0;
  --data-viz-categorical-1-gradient-default-start: #4653c7;
  --data-viz-categorical-1-hover: #bac1ff;
  --data-viz-categorical-1-weak-gradient-active: linear-gradient(
    180deg,
    #384068 0%,
    #23282e 100%
  );
  --data-viz-categorical-1-weak-gradient-active-end: #384068;
  --data-viz-categorical-1-weak-gradient-active-start: #23282e;
  --data-viz-categorical-1-weak-gradient-default: linear-gradient(
    180deg,
    #384068 0%,
    #23282e 100%
  );
  --data-viz-categorical-1-weak-gradient-default-end: #384068;
  --data-viz-categorical-1-weak-gradient-default-start: #23282e;
  --data-viz-categorical-1-weak-gradient-focus: linear-gradient(
    180deg,
    #46508f 0%,
    #23282e 100%
  );
  --data-viz-categorical-1-weak-gradient-focus-end: #46508f;
  --data-viz-categorical-1-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-1-weak-gradient-hover: linear-gradient(
    180deg,
    #46508f 0%,
    #23282e 100%
  );
  --data-viz-categorical-1-weak-gradient-hover-end: #46508f;
  --data-viz-categorical-1-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-10-active: #767eb2;
  --data-viz-categorical-10-default: #767eb2;
  --data-viz-categorical-10-focus: #c1c6e8;
  --data-viz-categorical-10-gradient-default: linear-gradient(
    180deg,
    #767eb2 50%,
    #545c8a 100%
  );
  --data-viz-categorical-10-gradient-default-end: #767eb2;
  --data-viz-categorical-10-gradient-default-start: #545c8a;
  --data-viz-categorical-10-hover: #c1c6e8;
  --data-viz-categorical-10-weak-gradient-active: linear-gradient(
    180deg,
    #3c4256 0%,
    #23282e 100%
  );
  --data-viz-categorical-10-weak-gradient-active-end: #3c4256;
  --data-viz-categorical-10-weak-gradient-active-start: #23282e;
  --data-viz-categorical-10-weak-gradient-default: linear-gradient(
    180deg,
    #3c4256 0%,
    #23282e 100%
  );
  --data-viz-categorical-10-weak-gradient-default-end: #3c4256;
  --data-viz-categorical-10-weak-gradient-default-start: #23282e;
  --data-viz-categorical-10-weak-gradient-focus: linear-gradient(
    180deg,
    #4d5370 0%,
    #23282e 100%
  );
  --data-viz-categorical-10-weak-gradient-focus-end: #4d5370;
  --data-viz-categorical-10-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-10-weak-gradient-hover: linear-gradient(
    180deg,
    #4d5370 0%,
    #23282e 100%
  );
  --data-viz-categorical-10-weak-gradient-hover-end: #4d5370;
  --data-viz-categorical-10-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-11-active: #fc8d4c;
  --data-viz-categorical-11-default: #fc8d4c;
  --data-viz-categorical-11-focus: #ffd9bf;
  --data-viz-categorical-11-gradient-default: linear-gradient(
    180deg,
    #fc8d4c 50%,
    #d95a1a 100%
  );
  --data-viz-categorical-11-gradient-default-end: #fc8d4c;
  --data-viz-categorical-11-gradient-default-start: #d95a1a;
  --data-viz-categorical-11-hover: #ffd9bf;
  --data-viz-categorical-11-weak-gradient-active: linear-gradient(
    180deg,
    #644637 0%,
    #23282e 100%
  );
  --data-viz-categorical-11-weak-gradient-active-end: #644637;
  --data-viz-categorical-11-weak-gradient-active-start: #23282e;
  --data-viz-categorical-11-weak-gradient-default: linear-gradient(
    180deg,
    #644637 0%,
    #23282e 100%
  );
  --data-viz-categorical-11-weak-gradient-default-end: #644637;
  --data-viz-categorical-11-weak-gradient-default-start: #23282e;
  --data-viz-categorical-11-weak-gradient-focus: linear-gradient(
    180deg,
    #8f5b3d 0%,
    #23282e 100%
  );
  --data-viz-categorical-11-weak-gradient-focus-end: #8f5b3d;
  --data-viz-categorical-11-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-11-weak-gradient-hover: linear-gradient(
    180deg,
    #8f5b3d 0%,
    #23282e 100%
  );
  --data-viz-categorical-11-weak-gradient-hover-end: #8f5b3d;
  --data-viz-categorical-11-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-12-active: #169855;
  --data-viz-categorical-12-default: #169855;
  --data-viz-categorical-12-focus: #75d9a0;
  --data-viz-categorical-12-gradient-default: linear-gradient(
    180deg,
    #169855 50%,
    #087041 100%
  );
  --data-viz-categorical-12-gradient-default-end: #169855;
  --data-viz-categorical-12-gradient-default-start: #087041;
  --data-viz-categorical-12-hover: #75d9a0;
  --data-viz-categorical-12-weak-gradient-active: linear-gradient(
    180deg,
    #1f4a3a 0%,
    #23282e 100%
  );
  --data-viz-categorical-12-weak-gradient-active-end: #1f4a3a;
  --data-viz-categorical-12-weak-gradient-active-start: #23282e;
  --data-viz-categorical-12-weak-gradient-default: linear-gradient(
    180deg,
    #1f4a3a 0%,
    #23282e 100%
  );
  --data-viz-categorical-12-weak-gradient-default-end: #1f4a3a;
  --data-viz-categorical-12-weak-gradient-default-start: #23282e;
  --data-viz-categorical-12-weak-gradient-focus: linear-gradient(
    180deg,
    #1d6042 0%,
    #23282e 100%
  );
  --data-viz-categorical-12-weak-gradient-focus-end: #1d6042;
  --data-viz-categorical-12-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-12-weak-gradient-hover: linear-gradient(
    180deg,
    #1d6042 0%,
    #23282e 100%
  );
  --data-viz-categorical-12-weak-gradient-hover-end: #1d6042;
  --data-viz-categorical-12-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-2-active: #17c2c2;
  --data-viz-categorical-2-default: #17c2c2;
  --data-viz-categorical-2-focus: #a9ebeb;
  --data-viz-categorical-2-gradient-default: linear-gradient(
    180deg,
    #17c2c2 50%,
    #028e99 100%
  );
  --data-viz-categorical-2-gradient-default-end: #17c2c2;
  --data-viz-categorical-2-gradient-default-start: #028e99;
  --data-viz-categorical-2-hover: #a9ebeb;
  --data-viz-categorical-2-weak-gradient-active: linear-gradient(
    180deg,
    #1f565b 0%,
    #23282e 100%
  );
  --data-viz-categorical-2-weak-gradient-active-end: #1f565b;
  --data-viz-categorical-2-weak-gradient-active-start: #23282e;
  --data-viz-categorical-2-weak-gradient-default: linear-gradient(
    180deg,
    #1f565b 0%,
    #23282e 100%
  );
  --data-viz-categorical-2-weak-gradient-default-end: #1f565b;
  --data-viz-categorical-2-weak-gradient-default-start: #23282e;
  --data-viz-categorical-2-weak-gradient-focus: linear-gradient(
    180deg,
    #1d7578 0%,
    #23282e 100%
  );
  --data-viz-categorical-2-weak-gradient-focus-end: #1d7578;
  --data-viz-categorical-2-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-2-weak-gradient-hover: linear-gradient(
    180deg,
    #1d7578 0%,
    #23282e 100%
  );
  --data-viz-categorical-2-weak-gradient-hover-end: #1d7578;
  --data-viz-categorical-2-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-3-active: #e0ccff;
  --data-viz-categorical-3-default: #e0ccff;
  --data-viz-categorical-3-focus: #f3ebff;
  --data-viz-categorical-3-gradient-default: linear-gradient(
    180deg,
    #e0ccff 50%,
    #b587fa 100%
  );
  --data-viz-categorical-3-gradient-default-end: #e0ccff;
  --data-viz-categorical-3-gradient-default-start: #b587fa;
  --data-viz-categorical-3-hover: #f3ebff;
  --data-viz-categorical-3-weak-gradient-active: linear-gradient(
    180deg,
    #5c596d 0%,
    #23282e 100%
  );
  --data-viz-categorical-3-weak-gradient-active-end: #5c596d;
  --data-viz-categorical-3-weak-gradient-active-start: #23282e;
  --data-viz-categorical-3-weak-gradient-default: linear-gradient(
    180deg,
    #5c596d 0%,
    #23282e 100%
  );
  --data-viz-categorical-3-weak-gradient-default-end: #5c596d;
  --data-viz-categorical-3-weak-gradient-default-start: #23282e;
  --data-viz-categorical-3-weak-gradient-focus: linear-gradient(
    180deg,
    #817a96 0%,
    #23282e 100%
  );
  --data-viz-categorical-3-weak-gradient-focus-end: #817a96;
  --data-viz-categorical-3-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-3-weak-gradient-hover: linear-gradient(
    180deg,
    #817a96 0%,
    #23282e 100%
  );
  --data-viz-categorical-3-weak-gradient-hover-end: #817a96;
  --data-viz-categorical-3-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-4-active: #e3447c;
  --data-viz-categorical-4-default: #e3447c;
  --data-viz-categorical-4-focus: #fcb3c8;
  --data-viz-categorical-4-gradient-default: linear-gradient(
    180deg,
    #e3447c 50%,
    #b02863 100%
  );
  --data-viz-categorical-4-gradient-default-end: #e3447c;
  --data-viz-categorical-4-gradient-default-start: #b02863;
  --data-viz-categorical-4-hover: #fcb3c8;
  --data-viz-categorical-4-weak-gradient-active: linear-gradient(
    180deg,
    #5d3045 0%,
    #23282e 100%
  );
  --data-viz-categorical-4-weak-gradient-active-end: #5d3045;
  --data-viz-categorical-4-weak-gradient-active-start: #23282e;
  --data-viz-categorical-4-weak-gradient-default: linear-gradient(
    180deg,
    #5d3045 0%,
    #23282e 100%
  );
  --data-viz-categorical-4-weak-gradient-default-end: #5d3045;
  --data-viz-categorical-4-weak-gradient-default-start: #23282e;
  --data-viz-categorical-4-weak-gradient-focus: linear-gradient(
    180deg,
    #833655 0%,
    #23282e 100%
  );
  --data-viz-categorical-4-weak-gradient-focus-end: #833655;
  --data-viz-categorical-4-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-4-weak-gradient-hover: linear-gradient(
    180deg,
    #833655 0%,
    #23282e 100%
  );
  --data-viz-categorical-4-weak-gradient-hover-end: #833655;
  --data-viz-categorical-4-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-5-active: #9dba4c;
  --data-viz-categorical-5-default: #9dba4c;
  --data-viz-categorical-5-focus: #d7e8a9;
  --data-viz-categorical-5-gradient-default: linear-gradient(
    180deg,
    #9dba4c 50%,
    #6c8c14 100%
  );
  --data-viz-categorical-5-gradient-default-end: #9dba4c;
  --data-viz-categorical-5-gradient-default-start: #6c8c14;
  --data-viz-categorical-5-hover: #d7e8a9;
  --data-viz-categorical-5-weak-gradient-active: linear-gradient(
    180deg,
    #485437 0%,
    #23282e 100%
  );
  --data-viz-categorical-5-weak-gradient-active-end: #485437;
  --data-viz-categorical-5-weak-gradient-active-start: #23282e;
  --data-viz-categorical-5-weak-gradient-default: linear-gradient(
    180deg,
    #485437 0%,
    #23282e 100%
  );
  --data-viz-categorical-5-weak-gradient-default-end: #485437;
  --data-viz-categorical-5-weak-gradient-default-start: #23282e;
  --data-viz-categorical-5-weak-gradient-focus: linear-gradient(
    180deg,
    #60713d 0%,
    #23282e 100%
  );
  --data-viz-categorical-5-weak-gradient-focus-end: #60713d;
  --data-viz-categorical-5-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-5-weak-gradient-hover: linear-gradient(
    180deg,
    #60713d 0%,
    #23282e 100%
  );
  --data-viz-categorical-5-weak-gradient-hover-end: #60713d;
  --data-viz-categorical-5-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-6-active: #9b5ff5;
  --data-viz-categorical-6-default: #9b5ff5;
  --data-viz-categorical-6-focus: #d6baff;
  --data-viz-categorical-6-gradient-default: linear-gradient(
    180deg,
    #9b5ff5 50%,
    #753bcc 100%
  );
  --data-viz-categorical-6-gradient-default-end: #9b5ff5;
  --data-viz-categorical-6-gradient-default-start: #753bcc;
  --data-viz-categorical-6-hover: #d6baff;
  --data-viz-categorical-6-weak-gradient-active: linear-gradient(
    180deg,
    #47396a 0%,
    #23282e 100%
  );
  --data-viz-categorical-6-weak-gradient-active-end: #47396a;
  --data-viz-categorical-6-weak-gradient-active-start: #23282e;
  --data-viz-categorical-6-weak-gradient-default: linear-gradient(
    180deg,
    #47396a 0%,
    #23282e 100%
  );
  --data-viz-categorical-6-weak-gradient-default-end: #47396a;
  --data-viz-categorical-6-weak-gradient-default-start: #23282e;
  --data-viz-categorical-6-weak-gradient-focus: linear-gradient(
    180deg,
    #5f4491 0%,
    #23282e 100%
  );
  --data-viz-categorical-6-weak-gradient-focus-end: #5f4491;
  --data-viz-categorical-6-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-6-weak-gradient-hover: linear-gradient(
    180deg,
    #5f4491 0%,
    #23282e 100%
  );
  --data-viz-categorical-6-weak-gradient-hover-end: #5f4491;
  --data-viz-categorical-6-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-7-active: #ff87a9;
  --data-viz-categorical-7-default: #ff87a9;
  --data-viz-categorical-7-focus: #ffd4e0;
  --data-viz-categorical-7-gradient-default: linear-gradient(
    180deg,
    #ff87a9 50%,
    #e3447c 100%
  );
  --data-viz-categorical-7-gradient-default-end: #ff87a9;
  --data-viz-categorical-7-gradient-default-start: #e3447c;
  --data-viz-categorical-7-hover: #ffd4e0;
  --data-viz-categorical-7-weak-gradient-active: linear-gradient(
    180deg,
    #654553 0%,
    #23282e 100%
  );
  --data-viz-categorical-7-weak-gradient-active-end: #654553;
  --data-viz-categorical-7-weak-gradient-active-start: #23282e;
  --data-viz-categorical-7-weak-gradient-default: linear-gradient(
    180deg,
    #654553 0%,
    #23282e 100%
  );
  --data-viz-categorical-7-weak-gradient-default-end: #654553;
  --data-viz-categorical-7-weak-gradient-default-start: #23282e;
  --data-viz-categorical-7-weak-gradient-focus: linear-gradient(
    180deg,
    #91586c 0%,
    #23282e 100%
  );
  --data-viz-categorical-7-weak-gradient-focus-end: #91586c;
  --data-viz-categorical-7-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-7-weak-gradient-hover: linear-gradient(
    180deg,
    #91586c 0%,
    #23282e 100%
  );
  --data-viz-categorical-7-weak-gradient-hover-end: #91586c;
  --data-viz-categorical-7-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-8-active: #028e99;
  --data-viz-categorical-8-default: #028e99;
  --data-viz-categorical-8-focus: #4ad9d9;
  --data-viz-categorical-8-gradient-default: linear-gradient(
    180deg,
    #028e99 50%,
    #006773 100%
  );
  --data-viz-categorical-8-gradient-default-end: #028e99;
  --data-viz-categorical-8-gradient-default-start: #006773;
  --data-viz-categorical-8-hover: #4ad9d9;
  --data-viz-categorical-8-weak-gradient-active: linear-gradient(
    180deg,
    #19474e 0%,
    #23282e 100%
  );
  --data-viz-categorical-8-weak-gradient-active-end: #19474e;
  --data-viz-categorical-8-weak-gradient-active-start: #23282e;
  --data-viz-categorical-8-weak-gradient-default: linear-gradient(
    180deg,
    #19474e 0%,
    #23282e 100%
  );
  --data-viz-categorical-8-weak-gradient-default-end: #19474e;
  --data-viz-categorical-8-weak-gradient-default-start: #23282e;
  --data-viz-categorical-8-weak-gradient-focus: linear-gradient(
    180deg,
    #135b64 0%,
    #23282e 100%
  );
  --data-viz-categorical-8-weak-gradient-focus-end: #135b64;
  --data-viz-categorical-8-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-8-weak-gradient-hover: linear-gradient(
    180deg,
    #135b64 0%,
    #23282e 100%
  );
  --data-viz-categorical-8-weak-gradient-hover-end: #135b64;
  --data-viz-categorical-8-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-9-active: #9adffc;
  --data-viz-categorical-9-default: #9adffc;
  --data-viz-categorical-9-focus: #d9f4ff;
  --data-viz-categorical-9-gradient-default: linear-gradient(
    180deg,
    #9adffc 50%,
    #23a8eb 100%
  );
  --data-viz-categorical-9-gradient-default-end: #9adffc;
  --data-viz-categorical-9-gradient-default-start: #23a8eb;
  --data-viz-categorical-9-hover: #d9f4ff;
  --data-viz-categorical-9-weak-gradient-active: linear-gradient(
    180deg,
    #475f6c 0%,
    #23282e 100%
  );
  --data-viz-categorical-9-weak-gradient-active-end: #475f6c;
  --data-viz-categorical-9-weak-gradient-active-start: #23282e;
  --data-viz-categorical-9-weak-gradient-default: linear-gradient(
    180deg,
    #475f6c 0%,
    #23282e 100%
  );
  --data-viz-categorical-9-weak-gradient-default-end: #475f6c;
  --data-viz-categorical-9-weak-gradient-default-start: #23282e;
  --data-viz-categorical-9-weak-gradient-focus: linear-gradient(
    180deg,
    #5e8395 0%,
    #23282e 100%
  );
  --data-viz-categorical-9-weak-gradient-focus-end: #5e8395;
  --data-viz-categorical-9-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-9-weak-gradient-hover: linear-gradient(
    180deg,
    #5e8395 0%,
    #23282e 100%
  );
  --data-viz-categorical-9-weak-gradient-hover-end: #5e8395;
  --data-viz-categorical-9-weak-gradient-hover-start: #23282e;
  --data-viz-dormant-active: #a7adb5;
  --data-viz-dormant-default: #a7adb5;
  --data-viz-dormant-focus: #e1e4e8;
  --data-viz-dormant-gradient-default: linear-gradient(
    180deg,
    #a7adb5 50%,
    #7e868f 100%
  );
  --data-viz-dormant-gradient-default-end: #a7adb5;
  --data-viz-dormant-gradient-default-start: #7e868f;
  --data-viz-dormant-hover: #e1e4e8;
  --data-viz-dormant-weak-gradient-active: linear-gradient(
    180deg,
    #464c54 0%,
    #23282e 100%
  );
  --data-viz-dormant-weak-gradient-active-end: #464c54;
  --data-viz-dormant-weak-gradient-active-start: #23282e;
  --data-viz-dormant-weak-gradient-default: linear-gradient(
    180deg,
    #464c54 0%,
    #23282e 100%
  );
  --data-viz-dormant-weak-gradient-default-end: #464c54;
  --data-viz-dormant-weak-gradient-default-start: #23282e;
  --data-viz-dormant-weak-gradient-focus: linear-gradient(
    180deg,
    #656c75 0%,
    #23282e 100%
  );
  --data-viz-dormant-weak-gradient-focus-end: #656c75;
  --data-viz-dormant-weak-gradient-focus-start: #23282e;
  --data-viz-dormant-weak-gradient-hover: linear-gradient(
    180deg,
    #656c75 0%,
    #23282e 100%
  );
  --data-viz-dormant-weak-gradient-hover-end: #656c75;
  --data-viz-dormant-weak-gradient-hover-start: #23282e;
  --data-viz-excellent-active: #649ef5;
  --data-viz-excellent-default: #649ef5;
  --data-viz-excellent-focus: #bad6ff;
  --data-viz-excellent-gradient-default: linear-gradient(
    180deg,
    #649ef5 50%,
    #2774d9 100%
  );
  --data-viz-excellent-gradient-default-end: #649ef5;
  --data-viz-excellent-gradient-default-start: #2774d9;
  --data-viz-excellent-hover: #bad6ff;
  --data-viz-excellent-weak-gradient-active: linear-gradient(
    180deg,
    #374b6a 0%,
    #23282e 100%
  );
  --data-viz-excellent-weak-gradient-active-end: #374b6a;
  --data-viz-excellent-weak-gradient-active-start: #23282e;
  --data-viz-excellent-weak-gradient-default: linear-gradient(
    180deg,
    #374b6a 0%,
    #23282e 100%
  );
  --data-viz-excellent-weak-gradient-default-end: #374b6a;
  --data-viz-excellent-weak-gradient-default-start: #23282e;
  --data-viz-excellent-weak-gradient-focus: linear-gradient(
    180deg,
    #446392 0%,
    #23282e 100%
  );
  --data-viz-excellent-weak-gradient-focus-end: #446392;
  --data-viz-excellent-weak-gradient-focus-start: #23282e;
  --data-viz-excellent-weak-gradient-hover: linear-gradient(
    180deg,
    #446392 0%,
    #23282e 100%
  );
  --data-viz-excellent-weak-gradient-hover-end: #446392;
  --data-viz-excellent-weak-gradient-hover-start: #23282e;
  --data-viz-low-warning-active: #0bb2b8;
  --data-viz-low-warning-default: #0bb2b8;
  --data-viz-low-warning-focus: #84e3e3;
  --data-viz-low-warning-gradient-default: linear-gradient(
    180deg,
    #0bb2b8 50%,
    #01818c 100%
  );
  --data-viz-low-warning-gradient-default-end: #0bb2b8;
  --data-viz-low-warning-gradient-default-start: #01818c;
  --data-viz-low-warning-hover: #84e3e3;
  --data-viz-low-warning-weak-gradient-active: linear-gradient(
    180deg,
    #1c5157 0%,
    #23282e 100%
  );
  --data-viz-low-warning-weak-gradient-active-end: #1c5157;
  --data-viz-low-warning-weak-gradient-active-start: #23282e;
  --data-viz-low-warning-weak-gradient-default: linear-gradient(
    180deg,
    #1c5157 0%,
    #23282e 100%
  );
  --data-viz-low-warning-weak-gradient-default-end: #1c5157;
  --data-viz-low-warning-weak-gradient-default-start: #23282e;
  --data-viz-low-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #176d73 0%,
    #23282e 100%
  );
  --data-viz-low-warning-weak-gradient-focus-end: #176d73;
  --data-viz-low-warning-weak-gradient-focus-start: #23282e;
  --data-viz-low-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #176d73 0%,
    #23282e 100%
  );
  --data-viz-low-warning-weak-gradient-hover-end: #176d73;
  --data-viz-low-warning-weak-gradient-hover-start: #23282e;
  --data-viz-negative-active: #fa5762;
  --data-viz-negative-default: #fa5762;
  --data-viz-negative-focus: #ffb2b5;
  --data-viz-negative-gradient-default: linear-gradient(
    180deg,
    #fa5762 50%,
    #cc2d37 100%
  );
  --data-viz-negative-gradient-default-end: #fa5762;
  --data-viz-negative-gradient-default-start: #cc2d37;
  --data-viz-negative-hover: #ffb2b5;
  --data-viz-negative-weak-gradient-active: linear-gradient(
    180deg,
    #63363e 0%,
    #23282e 100%
  );
  --data-viz-negative-weak-gradient-active-end: #63363e;
  --data-viz-negative-weak-gradient-active-start: #23282e;
  --data-viz-negative-weak-gradient-default: linear-gradient(
    180deg,
    #63363e 0%,
    #23282e 100%
  );
  --data-viz-negative-weak-gradient-default-end: #63363e;
  --data-viz-negative-weak-gradient-default-start: #23282e;
  --data-viz-negative-weak-gradient-focus: linear-gradient(
    180deg,
    #8f3f48 0%,
    #23282e 100%
  );
  --data-viz-negative-weak-gradient-focus-end: #8f3f48;
  --data-viz-negative-weak-gradient-focus-start: #23282e;
  --data-viz-negative-weak-gradient-hover: linear-gradient(
    180deg,
    #8f3f48 0%,
    #23282e 100%
  );
  --data-viz-negative-weak-gradient-hover-end: #8f3f48;
  --data-viz-negative-weak-gradient-hover-start: #23282e;
  --data-viz-positive-active: #33bbf5;
  --data-viz-positive-default: #33bbf5;
  --data-viz-positive-focus: #b5e9ff;
  --data-viz-positive-gradient-default: linear-gradient(
    180deg,
    #33bbf5 50%,
    #0d8bd4 100%
  );
  --data-viz-positive-gradient-default-end: #33bbf5;
  --data-viz-positive-gradient-default-start: #0d8bd4;
  --data-viz-positive-hover: #b5e9ff;
  --data-viz-positive-weak-gradient-active: linear-gradient(
    180deg,
    #28546a 0%,
    #23282e 100%
  );
  --data-viz-positive-weak-gradient-active-end: #28546a;
  --data-viz-positive-weak-gradient-active-start: #23282e;
  --data-viz-positive-weak-gradient-default: linear-gradient(
    180deg,
    #28546a 0%,
    #23282e 100%
  );
  --data-viz-positive-weak-gradient-default-end: #28546a;
  --data-viz-positive-weak-gradient-default-start: #23282e;
  --data-viz-positive-weak-gradient-focus: linear-gradient(
    180deg,
    #2b7192 0%,
    #23282e 100%
  );
  --data-viz-positive-weak-gradient-focus-end: #2b7192;
  --data-viz-positive-weak-gradient-focus-start: #23282e;
  --data-viz-positive-weak-gradient-hover: linear-gradient(
    180deg,
    #2b7192 0%,
    #23282e 100%
  );
  --data-viz-positive-weak-gradient-hover-end: #2b7192;
  --data-viz-positive-weak-gradient-hover-start: #23282e;
  --data-viz-severe-warning-active: #f7782f;
  --data-viz-severe-warning-default: #f7782f;
  --data-viz-severe-warning-focus: #fcc9a7;
  --data-viz-severe-warning-gradient-default: linear-gradient(
    180deg,
    #f7782f 50%,
    #c44f14 100%
  );
  --data-viz-severe-warning-gradient-default-end: #f7782f;
  --data-viz-severe-warning-gradient-default-start: #c44f14;
  --data-viz-severe-warning-hover: #fcc9a7;
  --data-viz-severe-warning-weak-gradient-active: linear-gradient(
    180deg,
    #63402e 0%,
    #23282e 100%
  );
  --data-viz-severe-warning-weak-gradient-active-end: #63402e;
  --data-viz-severe-warning-weak-gradient-active-start: #23282e;
  --data-viz-severe-warning-weak-gradient-default: linear-gradient(
    180deg,
    #63402e 0%,
    #23282e 100%
  );
  --data-viz-severe-warning-weak-gradient-default-end: #63402e;
  --data-viz-severe-warning-weak-gradient-default-start: #23282e;
  --data-viz-severe-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #8d502f 0%,
    #23282e 100%
  );
  --data-viz-severe-warning-weak-gradient-focus-end: #8d502f;
  --data-viz-severe-warning-weak-gradient-focus-start: #23282e;
  --data-viz-severe-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #8d502f 0%,
    #23282e 100%
  );
  --data-viz-severe-warning-weak-gradient-hover-end: #8d502f;
  --data-viz-severe-warning-weak-gradient-hover-start: #23282e;
  --data-viz-warning-active: #f0c243;
  --data-viz-warning-default: #f0c243;
  --data-viz-warning-focus: #f5e08e;
  --data-viz-warning-gradient-default: linear-gradient(
    180deg,
    #f0c243 50%,
    #d6900d 100%
  );
  --data-viz-warning-gradient-default-end: #f0c243;
  --data-viz-warning-gradient-default-start: #d6900d;
  --data-viz-warning-hover: #f5e08e;
  --data-viz-warning-weak-gradient-active: linear-gradient(
    180deg,
    #615634 0%,
    #23282e 100%
  );
  --data-viz-warning-weak-gradient-active-end: #615634;
  --data-viz-warning-weak-gradient-active-start: #23282e;
  --data-viz-warning-weak-gradient-default: linear-gradient(
    180deg,
    #615634 0%,
    #23282e 100%
  );
  --data-viz-warning-weak-gradient-default-end: #615634;
  --data-viz-warning-weak-gradient-default-start: #23282e;
  --data-viz-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #897539 0%,
    #23282e 100%
  );
  --data-viz-warning-weak-gradient-focus-end: #897539;
  --data-viz-warning-weak-gradient-focus-start: #23282e;
  --data-viz-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #897539 0%,
    #23282e 100%
  );
  --data-viz-warning-weak-gradient-hover-end: #897539;
  --data-viz-warning-weak-gradient-hover-start: #23282e;

  /* token for modal overlay */
  --overlay-bg-default: rgba(0,0,0,0.69804);
}

/* Non-token additions for contextual container. */
*[data-mds-theme="dark"] [class^="mds-"] {
  color-scheme: dark;
}
*[data-mds-theme="dark"] [class*=" mds-"] {
  color-scheme: dark;
}
`,te=`/**
 * This file is auto-generated. Do not edit it directly.
 */

*[data-mds-theme="blue-light-classic"] {
  --brand-bg-active: #464c54;
  --brand-bg-default: #373c42;
  --brand-bg-disabled: #e1e4e8;
  --brand-bg-focus: #464c54;
  --brand-bg-gradient-default: linear-gradient(90deg, #373c42 0%, #0f1214 100%);
  --brand-bg-gradient-end: #0f1214;
  --brand-bg-gradient-start: #373c42;
  --brand-bg-hover: #373c42;
  --brand-bg-strong-active: #373c42;
  --brand-bg-strong-default: #373c42;
  --brand-bg-strong-focus: #373c42;
  --brand-bg-strong-hover: #373c42;
  --brand-border-active: #cce1ff;
  --brand-icon-active: #fff;
  --brand-icon-default: #f7f7f7;
  --brand-icon-hover: #fff;
  --brand-icon-weak-active: #f7f7f7;
  --brand-icon-weak-default: #f7f7f7;
  --brand-icon-weak-focus: #f7f7f7;
  --brand-icon-weak-hover: #f7f7f7;
  --brand-text-active: #f7f7f7;
  --brand-text-default: #f7f7f7;
  --brand-text-hover: #f7f7f7;
  --brand-text-strong-default: #f0f1f2;
  --brand-text-weak-active: #f7f7f7;
  --brand-text-weak-default: #f7f7f7;
  --brand-text-weak-focus: #f7f7f7;
  --brand-text-weak-hover: #f7f7f7;
  --brand-accent-border-active: #3e84e5;
  --brand-accent-border-default: #5191f0;
  --brand-accent-border-focus: #3e84e5;
  --brand-accent-border-hover: #e1e4e8;
  --brand-accent-border-medium-active: #e3eeff;
  --brand-accent-border-medium-default: #f0f1f2;
  --brand-accent-border-medium-disabled: #fff;
  --brand-accent-border-medium-focus: #fff;
  --brand-accent-border-medium-hover: #fff;
  --brand-accent-border-strong-active: #f7f7f7;
  --brand-accent-border-strong-default: #f7f7f7;
  --brand-accent-border-strong-disabled: #fff;
  --brand-accent-border-strong-focus: #f7f7f7;
  --brand-accent-border-strong-hover: #f7f7f7;
  --brand-accent-border-weak-active: #7cadf7;
  --brand-accent-border-weak-default: #d0d4d9;
  --brand-accent-border-weak-disabled: #fff;
  --brand-accent-border-weak-focus: #fff;
  --brand-accent-border-weak-hover: #fff;
  --brand-accent-icon-active: #3e84e5;
  --brand-accent-icon-default: #7e868f;
  --brand-accent-icon-disabled: #d0d4d9;
  --brand-accent-icon-focus: #fff;
  --brand-accent-icon-medium-active: #5191f0;
  --brand-accent-icon-medium-default: #a7adb5;
  --brand-accent-icon-medium-disabled: #d0d4d9;
  --brand-accent-icon-medium-focus: #fff;
  --brand-accent-icon-weak-active: #7cadf7;
  --brand-accent-icon-weak-default: #c1c6cc;
  --brand-accent-icon-weak-disabled: #d0d4d9;
  --brand-accent-icon-weak-focus: #fff;
  --base-bg-default: #f7f7f7;
  --base-bg-hover: #f7f7f7;
  --base-bg-active: #f7f7f7;
  --base-bg-disabled: #f0f1f2;
  --base-bg-weak-default: #fff;
  --base-bg-weak-hover: rgba(225,228,232,0.8);
  --base-bg-weak-active: #f0f1f2;
  --base-bg-weak-disabled: #f0f1f2;
  --base-bg-medium-default: #f7f7f7;
  --base-bg-medium-hover: #e1e4e8;
  --base-bg-medium-active: #f0f1f2;
  --base-bg-medium-disabled: #f7f7f7;
  --base-bg-strong-default: #656c75;
  --base-bg-strong-hover: #23282e;
  --base-bg-strong-focus: #23282e;
  --base-bg-strong-active: #23282e;
  --base-bg-strong-disabled: #d0d4d9;
  --base-icon-in-default: #fff;
  --base-icon-in-hover: #fff;
  --base-icon-in-focus: #fff;
  --base-icon-in-active: #fff;
  --base-icon-in-disabled: #fff;
  --base-text-default: #23282e;
  --base-text-disabled: #c1c6cc;
  --base-text-weak-default: #889099;
  --base-text-weak-disabled: #c1c6cc;
  --base-text-medium-default: #596069;
  --base-text-medium-disabled: #c1c6cc;
  --base-text-strong-default: #373c42;
  --base-text-strong-disabled: #c1c6cc;
  --base-text-in-default: #fff;
  --base-text-in-hover: #fff;
  --base-text-in-focus: #fff;
  --base-text-in-active: #fff;
  --base-text-in-disabled: #fff;
  --base-text-in-weak-default: #f7f7f7;
  --base-border-default: #e1e4e8;
  --base-border-weak-default: #fff;
  --base-border-medium-default: #e1e4e8;
  --base-border-strong-default: #656c75;
  --base-border-gradient-default: linear-gradient(
    180deg,
    #f7f7f7 0%,
    #e1e4e8 50%,
    #f7f7f7 100%
  );
  --inverse-bg-default: #373c42;
  --inverse-bg-hover: #373c42;
  --inverse-bg-focus: #464c54;
  --inverse-bg-active: #464c54;
  --inverse-bg-disabled: #e1e4e8;
  --inverse-bg-gradient-start: #373c42;
  --inverse-bg-gradient-end: #0f1214;
  --inverse-bg-gradient-default: linear-gradient(
    90deg,
    #373c42 0%,
    #0f1214 100%
  );
  --inverse-bg-weak-default: #373c42;
  --inverse-text-default: #f7f7f7;
  --inverse-text-hover: #f7f7f7;
  --inverse-text-focus: #f7f7f7;
  --inverse-text-active: #f7f7f7;
  --inverse-text-disabled: #656c75;
  --inverse-text-medium-default: #c1c6cc;
  --inverse-text-medium-disabled: #656c75;
  --inverse-icon-default: #f7f7f7;
  --inverse-icon-hover: #fff;
  --inverse-icon-focus: #fff;
  --inverse-icon-active: #fff;
  --inverse-icon-disabled: #6f7680;
  --inverse-icon-strong-default: #fff;
  --inverse-icon-strong-hover: #fff;
  --inverse-icon-strong-focus: #fff;
  --inverse-icon-strong-active: #fff;
  --inverse-icon-strong-disabled: #fff;
  --inverse-border-default: #6f7680;
  --inverse-border-hover: #649ef5;
  --inverse-border-focus: #cce1ff;
  --inverse-border-active: #cce1ff;
  --inverse-border-disabled: #e1e4e8;
  --control-bg-default: #fff;
  --control-bg-hover: #e3eeff;
  --control-bg-focus: #f0f1f2;
  --control-bg-active: #f0f1f2;
  --control-bg-disabled: #f7f7f7;
  --control-bg-weak-default: #fff;
  --control-bg-weak-hover: #cce1ff;
  --control-bg-weak-focus: #e3eeff;
  --control-bg-weak-active: #e3eeff;
  --control-bg-weak-disabled: #f7f7f7;
  --control-bg-medium-default: #fff;
  --control-bg-medium-hover: #f7f7f7;
  --control-bg-medium-focus: #e3eeff;
  --control-bg-medium-active: #e3eeff;
  --control-bg-medium-disabled: #e1e4e8;
  --control-bg-strong-default: #2774d9;
  --control-bg-strong-hover: #0d5cbd;
  --control-bg-strong-focus: #0d5cbd;
  --control-bg-strong-active: #0d5cbd;
  --control-bg-strong-disabled: #bad6ff;
  --control-icon-default: #1d69cc;
  --control-icon-hover: #0d5cbd;
  --control-icon-focus: #0d5cbd;
  --control-icon-active: #0d5cbd;
  --control-icon-disabled: #a3c8ff;
  --control-icon-weak-default: #7e868f;
  --control-icon-weak-hover: #2774d9;
  --control-icon-weak-focus: #2774d9;
  --control-icon-weak-active: #2774d9;
  --control-icon-weak-disabled: #d0d4d9;
  --control-icon-medium-default: #2774d9;
  --control-icon-medium-hover: #0d5cbd;
  --control-icon-medium-focus: #0d5cbd;
  --control-icon-medium-active: #0d5cbd;
  --control-icon-medium-disabled: #a3c8ff;
  --control-icon-strong-default: #656c75;
  --control-icon-strong-hover: #464c54;
  --control-icon-strong-focus: #1d69cc;
  --control-icon-strong-active: #1d69cc;
  --control-icon-strong-disabled: #c1c6cc;
  --control-icon-in-default: #fff;
  --control-icon-in-hover: #fff;
  --control-icon-in-focus: #fff;
  --control-icon-in-active: #fff;
  --control-icon-in-disabled: #c1c6cc;
  --control-icon-in-strong-default: #2774d9;
  --control-icon-in-strong-hover: #2774d9;
  --control-icon-in-strong-focus: #2774d9;
  --control-icon-in-strong-active: #2774d9;
  --control-icon-in-strong-disabled: #c1c6cc;
  --control-border-default: #889099;
  --control-border-hover: #3e84e5;
  --control-border-focus: #3e84e5;
  --control-border-active: #3e84e5;
  --control-border-disabled: #d0d4d9;
  --control-border-weak-default: #e1e4e8;
  --control-border-weak-hover: #7cadf7;
  --control-border-weak-focus: #7cadf7;
  --control-border-weak-active: #7cadf7;
  --control-border-weak-disabled: #d0d4d9;
  --control-border-medium-default: #2774d9;
  --control-border-medium-hover: #bad6ff;
  --control-border-medium-focus: #2774d9;
  --control-border-medium-active: #2774d9;
  --control-border-medium-disabled: #d0d4d9;
  --control-border-strong-default: #656c75;
  --control-border-strong-hover: #656c75;
  --control-border-strong-focus: #2774d9;
  --control-border-strong-active: #2774d9;
  --control-border-strong-disabled: #d0d4d9;
  --interact-bg-default: #1d69cc;
  --interact-bg-hover: #0d5cbd;
  --interact-bg-focus: #0d5cbd;
  --interact-bg-active: #0d5cbd;
  --interact-bg-disabled: #a3c8ff;
  --interact-bg-weak-default: #fff;
  --interact-bg-weak-hover: #cce1ff;
  --interact-bg-weak-focus: #cce1ff;
  --interact-bg-weak-active: #cce1ff;
  --interact-bg-weak-disabled: #fff;
  --interact-bg-medium-default: #2774d9;
  --interact-bg-medium-hover: #cce1ff;
  --interact-bg-medium-active: #cce1ff;
  --interact-bg-strong-active: #f7f7f7;
  --interact-bg-strong-hover: #f7f7f7;
  --interact-text-default: #1d69cc;
  --interact-text-hover: #0d5cbd;
  --interact-text-focus: #0d5cbd;
  --interact-text-active: #0d5cbd;
  --interact-text-disabled: #a3c8ff;
  --interact-text-weak-default: #656c75;
  --interact-text-weak-hover: #1d69cc;
  --interact-text-weak-focus: #1d69cc;
  --interact-text-weak-active: #1d69cc;
  --interact-text-weak-disabled: #c1c6cc;
  --interact-text-in-default: #fff;
  --interact-text-in-hover: #fff;
  --interact-text-in-focus: #fff;
  --interact-text-in-active: #fff;
  --interact-text-in-disabled: #fff;
  --interact-icon-default: #1d69cc;
  --interact-icon-hover: #0d5cbd;
  --interact-icon-focus: #0d5cbd;
  --interact-icon-active: #0d5cbd;
  --interact-icon-disabled: #a3c8ff;
  --interact-icon-weak-default: #7e868f;
  --interact-icon-weak-hover: #6f7680;
  --interact-icon-weak-focus: #6f7680;
  --interact-icon-weak-active: #6f7680;
  --interact-icon-weak-disabled: #d0d4d9;
  --interact-icon-medium-default: #7e868f;
  --interact-icon-medium-hover: #2774d9;
  --interact-icon-medium-focus: #2774d9;
  --interact-icon-medium-active: #2774d9;
  --interact-icon-medium-disabled: #c1c6cc;
  --interact-icon-strong-default: #656c75;
  --interact-icon-strong-hover: #464c54;
  --interact-icon-strong-focus: #464c54;
  --interact-icon-strong-active: #464c54;
  --interact-icon-strong-disabled: #a7adb5;
  --interact-icon-in-default: #fff;
  --interact-icon-in-hover: #fff;
  --interact-icon-in-focus: #fff;
  --interact-icon-in-active: #fff;
  --interact-icon-in-disabled: #fff;
  --interact-border-default: #1d69cc;
  --interact-border-hover: #0d5cbd;
  --interact-border-focus: #0d5cbd;
  --interact-border-active: #0d5cbd;
  --interact-border-disabled: #a3c8ff;
  --interact-border-weak-default: #e1e4e8;
  --interact-border-weak-hover: #cce1ff;
  --interact-border-weak-focus: #e1e4e8;
  --interact-border-weak-active: #e1e4e8;
  --interact-border-weak-disabled: #e1e4e8;
  --interact-border-medium-default: #2774d9;
  --interact-border-medium-hover: #bad6ff;
  --interact-border-medium-focus: #2774d9;
  --interact-border-medium-active: #2774d9;
  --interact-border-medium-disabled: #e1e4e8;
  --positive-bg-default: #45991f;
  --positive-bg-hover: #45991f;
  --positive-bg-focus: #45991f;
  --positive-bg-active: #45991f;
  --positive-bg-disabled: #b0e396;
  --positive-bg-weak-default: #fff;
  --positive-bg-weak-hover: #fff;
  --positive-bg-weak-focus: #fff;
  --positive-bg-weak-active: #fff;
  --positive-bg-weak-disabled: #fff;
  --positive-bg-medium-default: #e0f5d5;
  --positive-bg-medium-hover: #e0f5d5;
  --positive-bg-medium-focus: #e0f5d5;
  --positive-bg-medium-active: #e0f5d5;
  --positive-bg-medium-disabled: #f7f7f7;
  --positive-bg-strong-default: #e0f5d5;
  --positive-icon-default: #45991f;
  --positive-icon-hover: #45991f;
  --positive-icon-focus: #45991f;
  --positive-icon-active: #45991f;
  --positive-icon-disabled: #d0d4d9;
  --positive-icon-weak-default: #b0e396;
  --positive-icon-weak-hover: #b0e396;
  --positive-icon-weak-focus: #b0e396;
  --positive-icon-weak-active: #b0e396;
  --positive-icon-weak-disabled: #b0e396;
  --positive-icon-strong-default: #45991f;
  --positive-icon-strong-hover: #45991f;
  --positive-icon-strong-focus: #45991f;
  --positive-icon-strong-active: #45991f;
  --positive-icon-strong-disabled: #d0d4d9;
  --positive-icon-in-default: #fff;
  --positive-icon-in-hover: #fff;
  --positive-icon-in-focus: #fff;
  --positive-icon-in-active: #fff;
  --positive-icon-in-disabled: #fff;
  --positive-border-default: #45991f;
  --positive-border-hover: #45991f;
  --positive-border-focus: #45991f;
  --positive-border-active: #45991f;
  --positive-border-disabled: #d0d4d9;
  --positive-border-weak-default: #fff;
  --positive-border-weak-hover: #fff;
  --positive-border-weak-focus: #fff;
  --positive-border-weak-active: #fff;
  --positive-border-weak-disabled: #d0d4d9;
  --positive-border-strong-default: #398519;
  --positive-border-strong-hover: #398519;
  --positive-border-strong-focus: #398519;
  --positive-border-strong-active: #398519;
  --positive-border-strong-disabled: #398519;
  --positive-text-in-default: #fff;
  --positive-text-in-hover: #fff;
  --positive-text-in-focus: #fff;
  --positive-text-in-active: #fff;
  --positive-text-in-disabled: #fff;
  --warning-bg-default: #cc8604;
  --warning-bg-hover: #cc8604;
  --warning-bg-focus: #cc8604;
  --warning-bg-active: #cc8604;
  --warning-bg-disabled: #f2d268;
  --warning-bg-weak-default: #fff;
  --warning-bg-weak-hover: #fff;
  --warning-bg-weak-focus: #fff;
  --warning-bg-weak-active: #fff;
  --warning-bg-weak-disabled: #fff;
  --warning-bg-medium-default: #faefb9;
  --warning-bg-medium-hover: #faefb9;
  --warning-bg-medium-focus: #faefb9;
  --warning-bg-medium-active: #faefb9;
  --warning-bg-medium-disabled: #f7f7f7;
  --warning-bg-strong-default: #faefb9;
  --warning-icon-default: #cc8604;
  --warning-icon-hover: #cc8604;
  --warning-icon-focus: #cc8604;
  --warning-icon-active: #cc8604;
  --warning-icon-disabled: #d0d4d9;
  --warning-icon-strong-default: #bd7202;
  --warning-icon-strong-hover: #bd7202;
  --warning-icon-strong-focus: #bd7202;
  --warning-icon-strong-active: #bd7202;
  --warning-icon-strong-disabled: #d0d4d9;
  --warning-icon-in-default: #fff;
  --warning-icon-in-hover: #fff;
  --warning-icon-in-focus: #fff;
  --warning-icon-in-active: #fff;
  --warning-icon-in-disabled: #fff;
  --warning-border-default: #cc8604;
  --warning-border-hover: #cc8604;
  --warning-border-focus: #cc8604;
  --warning-border-active: #cc8604;
  --warning-border-disabled: #d0d4d9;
  --warning-border-weak-default: #fff;
  --warning-border-weak-hover: #fff;
  --warning-border-weak-focus: #fff;
  --warning-border-weak-active: #fff;
  --warning-border-weak-disabled: #d0d4d9;
  --warning-border-strong-default: #a65503;
  --warning-border-strong-hover: #a65503;
  --warning-border-strong-focus: #a65503;
  --warning-border-strong-active: #a65503;
  --warning-border-strong-disabled: #a65503;
  --warning-text-in-default: #fff;
  --warning-text-in-hover: #fff;
  --warning-text-in-focus: #fff;
  --warning-text-in-active: #fff;
  --warning-text-in-disabled: #fff;
  --severe-warning-bg-default: #f26722;
  --severe-warning-bg-hover: #f26722;
  --severe-warning-bg-focus: #f26722;
  --severe-warning-bg-active: #f26722;
  --severe-warning-bg-disabled: #fcc9a7;
  --severe-warning-bg-weak-default: #fff;
  --severe-warning-bg-weak-hover: #fff;
  --severe-warning-bg-weak-focus: #fff;
  --severe-warning-bg-weak-active: #fff;
  --severe-warning-bg-weak-disabled: #fff;
  --severe-warning-bg-medium-default: #ffeadb;
  --severe-warning-bg-medium-hover: #ffeadb;
  --severe-warning-bg-medium-focus: #ffeadb;
  --severe-warning-bg-medium-active: #ffeadb;
  --severe-warning-bg-medium-disabled: #f7f7f7;
  --severe-warning-bg-strong-default: #ffeadb;
  --severe-warning-icon-default: #f26722;
  --severe-warning-icon-hover: #d95a1a;
  --severe-warning-icon-focus: #c44f14;
  --severe-warning-icon-active: #c44f14;
  --severe-warning-icon-disabled: #d0d4d9;
  --severe-warning-icon-strong-default: #d95a1a;
  --severe-warning-icon-strong-hover: #d95a1a;
  --severe-warning-icon-strong-focus: #d95a1a;
  --severe-warning-icon-strong-active: #d95a1a;
  --severe-warning-icon-strong-disabled: #d95a1a;
  --severe-warning-icon-in-default: #fff;
  --severe-warning-icon-in-hover: #fff;
  --severe-warning-icon-in-focus: #fff;
  --severe-warning-icon-in-active: #fff;
  --severe-warning-icon-in-disabled: #fff;
  --severe-warning-border-default: #f26722;
  --severe-warning-border-hover: #f26722;
  --severe-warning-border-focus: #f26722;
  --severe-warning-border-active: #f26722;
  --severe-warning-border-disabled: #f26722;
  --severe-warning-border-weak-default: #fff;
  --severe-warning-border-weak-hover: #fff;
  --severe-warning-border-weak-focus: #fff;
  --severe-warning-border-weak-active: #fff;
  --severe-warning-border-weak-disabled: #d0d4d9;
  --negative-bg-default: #cc2d37;
  --negative-bg-hover: #cc2d37;
  --negative-bg-focus: #cc2d37;
  --negative-bg-active: #cc2d37;
  --negative-bg-disabled: #ffb2b5;
  --negative-bg-weak-default: #fff;
  --negative-bg-weak-hover: #ffd4d5;
  --negative-bg-weak-focus: #ffd4d5;
  --negative-bg-weak-active: #ffd4d5;
  --negative-bg-weak-disabled: #fff;
  --negative-bg-medium-default: #ffe8e9;
  --negative-bg-medium-hover: #ffe8e9;
  --negative-bg-medium-focus: #ffe8e9;
  --negative-bg-medium-active: #ffe8e9;
  --negative-bg-medium-disabled: #f7f7f7;
  --negative-bg-strong-default: #ffe8e9;
  --negative-text-default: #cc2d37;
  --negative-text-hover: #b2242d;
  --negative-text-focus: #b2242d;
  --negative-text-active: #b2242d;
  --negative-text-disabled: #ffb2b5;
  --negative-text-in-default: #fff;
  --negative-text-in-hover: #fff;
  --negative-text-in-focus: #fff;
  --negative-text-in-active: #fff;
  --negative-text-in-disabled: #fff;
  --negative-icon-default: #cc2d37;
  --negative-icon-hover: #b2242d;
  --negative-icon-focus: #b2242d;
  --negative-icon-active: #b2242d;
  --negative-icon-disabled: #ffb2b5;
  --negative-icon-weak-default: #ffc7c9;
  --negative-icon-weak-hover: #ffc7c9;
  --negative-icon-weak-focus: #ffc7c9;
  --negative-icon-weak-active: #ffc7c9;
  --negative-icon-weak-disabled: #d0d4d9;
  --negative-icon-in-default: #fff;
  --negative-icon-in-hover: #fff;
  --negative-icon-in-focus: #fff;
  --negative-icon-in-active: #fff;
  --negative-icon-in-disabled: #fff;
  --negative-border-default: #cc2d37;
  --negative-border-hover: #b2242d;
  --negative-border-focus: #b2242d;
  --negative-border-active: #b2242d;
  --negative-border-disabled: #ffb2b5;
  --negative-border-weak-default: #fff;
  --negative-border-weak-hover: #fff;
  --negative-border-weak-focus: #fff;
  --negative-border-weak-active: #fff;
  --negative-border-weak-disabled: #d0d4d9;
  --negative-border-medium-default: #d93843;
  --negative-border-medium-hover: #d93843;
  --negative-border-medium-focus: #d93843;
  --negative-border-medium-active: #d93843;
  --negative-border-medium-disabled: #ffb2b5;
  --negative-border-strong-default: #b2242d;
  --negative-border-strong-hover: #b2242d;
  --negative-border-strong-focus: #b2242d;
  --negative-border-strong-active: #b2242d;
  --negative-border-strong-disabled: #ffb2b5;
  --info-bg-default: #2774d9;
  --info-bg-hover: #2774d9;
  --info-bg-focus: #2774d9;
  --info-bg-active: #2774d9;
  --info-bg-disabled: #2774d9;
  --info-bg-weak-default: #fff;
  --info-bg-weak-hover: #fff;
  --info-bg-weak-focus: #fff;
  --info-bg-weak-active: #fff;
  --info-bg-weak-disabled: #fff;
  --info-bg-medium-default: #e3eeff;
  --info-bg-medium-hover: #e3eeff;
  --info-bg-medium-focus: #e3eeff;
  --info-bg-medium-active: #e3eeff;
  --info-bg-medium-disabled: #f7f7f7;
  --info-bg-strong-default: #e3eeff;
  --info-icon-default: #2774d9;
  --info-icon-hover: #2774d9;
  --info-icon-focus: #2774d9;
  --info-icon-active: #2774d9;
  --info-icon-disabled: #d0d4d9;
  --info-icon-weak-default: #a3c8ff;
  --info-icon-weak-hover: #a3c8ff;
  --info-icon-weak-focus: #a3c8ff;
  --info-icon-weak-active: #a3c8ff;
  --info-icon-weak-disabled: #a3c8ff;
  --info-icon-in-default: #fff;
  --info-icon-in-hover: #fff;
  --info-icon-in-focus: #fff;
  --info-icon-in-active: #fff;
  --info-icon-in-disabled: #fff;
  --info-border-default: #2774d9;
  --info-border-hover: #2774d9;
  --info-border-focus: #2774d9;
  --info-border-active: #2774d9;
  --info-border-disabled: #d0d4d9;
  --info-border-weak-default: #fff;
  --info-border-weak-hover: #fff;
  --info-border-weak-focus: #fff;
  --info-border-weak-active: #fff;
  --info-border-weak-disabled: #d0d4d9;
  --dormant-bg-default: #6f7680;
  --dormant-bg-disabled: #6f7680;
  --dormant-bg-medium-default: #e1e4e8;
  --dormant-bg-medium-disabled: #f7f7f7;
  --dormant-icon-default: #6f7680;
  --dormant-icon-disabled: #d0d4d9;
  --dormant-icon-medium-default: #fff;
  --dormant-icon-in-default: #fff;
  --dormant-icon-in-disabled: #fff;
  --dormant-icon-in-medium-default: #fff;
  --dormant-border-default: #889099;
  --dormant-border-disabled: #d0d4d9;
  --accent-a-default: #7d8aff;
  --accent-a-hover: #6977f0;
  --accent-a-weak-default: #ebedff;
  --accent-b-default: #b02863;
  --accent-b-hover: #991d53;
  --accent-b-weak-default: #ffe8ef;
  --accent-c-default: #f2638c;
  --accent-c-hover: #e3447c;
  --accent-c-weak-default: #ffd4e0;
  --accent-d-default: #753bcc;
  --accent-d-hover: #6732b8;
  --accent-d-weak-default: #f3ebff;
  --accent-e-default: #7da11b;
  --accent-e-hover: #6c8c14;
  --accent-e-weak-default: #eaf2d3;
  --accent-f-default: #ad3907;
  --accent-f-hover: #942e03;
  --accent-f-weak-default: #ffeadb;
  --accent-g-default: #04a4b0;
  --accent-g-hover: #028e99;
  --accent-g-weak-default: #d5f5f5;
  --accent-h-default: #006773;
  --accent-h-hover: #005c66;
  --accent-h-weak-default: #a9ebeb;
  --accent-i-default: #e85fc6;
  --accent-i-hover: #d649b3;
  --accent-i-weak-default: #ffe8f9;
  --accent-j-default: #545c8a;
  --accent-j-hover: #484f7a;
  --accent-j-weak-default: #ebedff;
  --accent-k-default: #21a65f;
  --accent-k-hover: #169855;
  --accent-k-weak-default: #d4f5e1;
  --in-progress-bg-medium-default: #e3eeff;
  --in-progress-bg-medium-hover: #e3eeff;
  --in-progress-bg-medium-focus: #e3eeff;
  --in-progress-bg-medium-active: #e3eeff;
  --in-progress-bg-medium-disabled: #f7f7f7;
  --in-progress-icon-default: #2774d9;
  --in-progress-icon-hover: #2774d9;
  --in-progress-icon-focus: #2774d9;
  --in-progress-icon-active: #2774d9;
  --in-progress-icon-disabled: #d0d4d9;
  --in-progress-icon-in-default: #fff;
  --in-progress-icon-in-hover: #fff;
  --in-progress-icon-in-focus: #fff;
  --in-progress-icon-in-active: #fff;
  --in-progress-icon-in-disabled: #fff;
  --in-progress-border-default: #2774d9;
  --in-progress-border-hover: #2774d9;
  --in-progress-border-focus: #2774d9;
  --in-progress-border-active: #2774d9;
  --in-progress-border-disabled: #d0d4d9;
  --low-warning-bg-medium-default: #d5f5f5;
  --low-warning-bg-medium-hover: #d5f5f5;
  --low-warning-bg-medium-focus: #d5f5f5;
  --low-warning-bg-medium-active: #d5f5f5;
  --low-warning-bg-medium-disabled: #f7f7f7;
  --low-warning-icon-default: #028e99;
  --low-warning-icon-hover: #028e99;
  --low-warning-icon-focus: #028e99;
  --low-warning-icon-active: #028e99;
  --low-warning-icon-disabled: #d0d4d9;
  --low-warning-icon-in-default: #fff;
  --low-warning-icon-in-hover: #fff;
  --low-warning-icon-in-focus: #fff;
  --low-warning-icon-in-active: #fff;
  --low-warning-icon-in-disabled: #fff;
  --low-warning-border-default: #028e99;
  --low-warning-border-hover: #028e99;
  --low-warning-border-focus: #028e99;
  --low-warning-border-active: #028e99;
  --low-warning-border-disabled: #d0d4d9;
  --excellent-bg-medium-default: #d4f5e1;
  --excellent-bg-medium-hover: #d4f5e1;
  --excellent-bg-medium-focus: #d4f5e1;
  --excellent-bg-medium-active: #d4f5e1;
  --excellent-bg-medium-disabled: #f7f7f7;
  --excellent-icon-default: #087041;
  --excellent-icon-hover: #087041;
  --excellent-icon-focus: #087041;
  --excellent-icon-active: #087041;
  --excellent-icon-disabled: #d0d4d9;
  --excellent-icon-in-default: #fff;
  --excellent-icon-in-hover: #fff;
  --excellent-icon-in-focus: #fff;
  --excellent-icon-in-active: #fff;
  --excellent-icon-in-disabled: #fff;
  --excellent-border-default: #075e39;
  --excellent-border-hover: #075e39;
  --excellent-border-focus: #075e39;
  --excellent-border-active: #075e39;
  --excellent-border-disabled: #d0d4d9;
  --port-diagram-base-bg-default: #c1c6cc;
  --port-diagram-base-bg-active: #889099;
  --port-diagram-base-bg-medium-default: #d0d4d9;
  --port-diagram-base-bg-medium-active: #c1c6cc;
  --port-diagram-base-bg-weak-default: #f0f1f2;
  --port-diagram-base-border-default: #6f7680;
  --port-diagram-base-border-active: #6f7680;
  --port-diagram-base-border-medium-active: #6f7680;
  --port-diagram-base-border-strong-default: #23282e;
  --port-diagram-base-border-strong-active: #23282e;
  --port-diagram-base-icon-in-default: #373c42;
  --port-diagram-base-icon-in-active: #373c42;
  --port-diagram-full-speed-bg-default: #2b7a0c;
  --port-diagram-full-speed-bg-active: #266b0b;
  --port-diagram-full-speed-bg-medium-default: #b0e396;
  --port-diagram-full-speed-bg-medium-active: #6bbf41;
  --port-diagram-full-speed-border-medium-active: #266b0b;
  --port-diagram-full-speed-border-strong-default: #23282e;
  --port-diagram-full-speed-border-strong-active: #23282e;
  --port-diagram-full-speed-icon-in-default: #fff;
  --port-diagram-full-speed-icon-in-active: #fff;
  --port-diagram-disconnected-bg-default: #373c42;
  --port-diagram-disconnected-bg-active: #23282e;
  --port-diagram-disconnected-bg-medium-default: #d0d4d9;
  --port-diagram-disconnected-bg-medium-active: #c1c6cc;
  --port-diagram-disconnected-border-medium-active: #6f7680;
  --port-diagram-disconnected-border-strong-default: #23282e;
  --port-diagram-disconnected-border-strong-active: #23282e;
  --port-diagram-disconnected-icon-in-default: #fff;
  --port-diagram-disconnected-icon-in-active: #fff;
  --port-diagram-reduced-speed-bg-default: #2b7a0c;
  --port-diagram-reduced-speed-bg-active: #266b0b;
  --port-diagram-reduced-speed-bg-medium-default: #45991f;
  --port-diagram-reduced-speed-bg-medium-active: #398519;
  --port-diagram-reduced-speed-border-default: #fff;
  --port-diagram-reduced-speed-border-active: #fff;
  --port-diagram-reduced-speed-border-medium-active: #266b0b;
  --port-diagram-reduced-speed-border-strong-default: #23282e;
  --port-diagram-reduced-speed-border-strong-active: #23282e;
  --port-diagram-reduced-speed-icon-in-default: #fff;
  --port-diagram-reduced-speed-icon-in-active: #fff;
  --port-diagram-warning-bg-default: #b05f04;
  --port-diagram-warning-bg-active: #944b03;
  --port-diagram-warning-bg-medium-default: #f0c243;
  --port-diagram-warning-bg-medium-active: #e0a419;
  --port-diagram-warning-border-medium-active: #944b03;
  --port-diagram-warning-border-strong-default: #23282e;
  --port-diagram-warning-border-strong-active: #23282e;
  --port-diagram-warning-border-default: #fff;
  --port-diagram-warning-icon-in-default: #fff;
  --port-diagram-warning-icon-in-active: #fff;
  --port-diagram-critical-bg-default: #cc2d37;
  --port-diagram-critical-bg-active: #a01d26;
  --port-diagram-critical-bg-medium-default: #ffb2b5;
  --port-diagram-critical-bg-medium-active: #ff878b;
  --port-diagram-critical-border-medium-active: #a01d26;
  --port-diagram-critical-border-strong-default: #23282e;
  --port-diagram-critical-border-strong-active: #23282e;
  --port-diagram-critical-icon-in-default: #fff;
  --port-diagram-critical-icon-in-active: #fff;
  --port-diagram-low-power-bg-default: #b05f04;
  --port-diagram-low-power-bg-active: #944b03;
  --port-diagram-low-power-bg-medium-default: #f0c243;
  --port-diagram-low-power-bg-medium-active: #e0a419;
  --port-diagram-low-power-bg-weak-default: #f5e08e;
  --port-diagram-low-power-bg-weak-active: #f2d268;
  --port-diagram-low-power-border-medium-active: #944b03;
  --port-diagram-low-power-border-strong-default: #23282e;
  --port-diagram-low-power-border-strong-active: #23282e;
  --port-diagram-low-power-icon-in-default: #b05f04;
  --port-diagram-low-power-icon-in-active: #944b03;

  /* light classic theme -- elevation ( FOR INTERNAL USE ONLY, TEMPORARY ) */
  --elevation-control-default: 0px 3px 8px 0px rgba(0,0,0,0.07843);
  --elevation-control-focus: 0px 0px 0px 2px #cce1ff, 0px 0px 0px 4px #2774d9;
  --elevation-control-select: 0px 0px 0px 2px #3e84e5;
  --elevation-data-viz-focus: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #23282e,
    0px 0px 0px 6px #cce1ff, 0px 0px 0px 8px #3e84e5;
  --elevation-data-viz-select: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #23282e;
  --elevation-floating-default: 0px 4px 12px 0px rgba(0,0,0,0.18039);
  --elevation-invalid-default: 0px 0px 0px 2px #ffd4d5;
  --elevation-invalid-focus: 0px 0px 0px 2px #ffd4d5, 0px 0px 0px 4px #d93843;
  --elevation-lifted-default: 0px 3px 8px 0px rgba(0,0,0,0.07843);
  --elevation-lifted-inset: 10px 0 8px -8px rgba(0,0,0,0.07843) inset;
  --elevation-raised-default: 0px 4px 12px 0px rgba(0,0,0,0.12157);
  --elevation-subtle-default: 0px 2px 5px 0px rgba(0,0,0,0.05098);

  /* color tokens -- data visualizations */
  --data-viz-categorical-1-active: #505ed9;
  --data-viz-categorical-1-default: #505ed9;
  --data-viz-categorical-1-focus: #3b47b2;
  --data-viz-categorical-1-gradient-default: linear-gradient(
    180deg,
    #505ed9 50%,
    #6977f0 100%
  );
  --data-viz-categorical-1-gradient-default-end: #505ed9;
  --data-viz-categorical-1-gradient-default-start: #6977f0;
  --data-viz-categorical-1-hover: #3b47b2;
  --data-viz-categorical-1-weak-gradient-active: linear-gradient(
    180deg,
    #ccd1ff 0%,
    #fff 100%
  );
  --data-viz-categorical-1-weak-gradient-active-end: #ccd1ff;
  --data-viz-categorical-1-weak-gradient-active-start: #fff;
  --data-viz-categorical-1-weak-gradient-default: linear-gradient(
    180deg,
    #ccd1ff 0%,
    #fff 100%
  );
  --data-viz-categorical-1-weak-gradient-default-end: #ccd1ff;
  --data-viz-categorical-1-weak-gradient-default-start: #fff;
  --data-viz-categorical-1-weak-gradient-focus: linear-gradient(
    180deg,
    #bac1ff 0%,
    #ebedff 100%
  );
  --data-viz-categorical-1-weak-gradient-focus-end: #bac1ff;
  --data-viz-categorical-1-weak-gradient-focus-start: #ebedff;
  --data-viz-categorical-1-weak-gradient-hover: linear-gradient(
    180deg,
    #bac1ff 0%,
    #ebedff 100%
  );
  --data-viz-categorical-1-weak-gradient-hover-end: #bac1ff;
  --data-viz-categorical-1-weak-gradient-hover-start: #ebedff;
  --data-viz-categorical-10-active: #545c8a;
  --data-viz-categorical-10-default: #545c8a;
  --data-viz-categorical-10-focus: #484f7a;
  --data-viz-categorical-10-gradient-default: linear-gradient(
    180deg,
    #545c8a 50%,
    #6871a3 100%
  );
  --data-viz-categorical-10-gradient-default-end: #545c8a;
  --data-viz-categorical-10-gradient-default-start: #6871a3;
  --data-viz-categorical-10-hover: #484f7a;
  --data-viz-categorical-10-weak-gradient-active: linear-gradient(
    180deg,
    #ced3f2 0%,
    #fff 100%
  );
  --data-viz-categorical-10-weak-gradient-active-end: #ced3f2;
  --data-viz-categorical-10-weak-gradient-active-start: #fff;
  --data-viz-categorical-10-weak-gradient-default: linear-gradient(
    180deg,
    #ced3f2 0%,
    #fff 100%
  );
  --data-viz-categorical-10-weak-gradient-default-end: #ced3f2;
  --data-viz-categorical-10-weak-gradient-default-start: #fff;
  --data-viz-categorical-10-weak-gradient-focus: linear-gradient(
    180deg,
    #c1c6e8 0%,
    #ebedff 100%
  );
  --data-viz-categorical-10-weak-gradient-focus-end: #c1c6e8;
  --data-viz-categorical-10-weak-gradient-focus-start: #ebedff;
  --data-viz-categorical-10-weak-gradient-hover: linear-gradient(
    180deg,
    #c1c6e8 0%,
    #ebedff 100%
  );
  --data-viz-categorical-10-weak-gradient-hover-end: #c1c6e8;
  --data-viz-categorical-10-weak-gradient-hover-start: #ebedff;
  --data-viz-categorical-11-active: #f26722;
  --data-viz-categorical-11-default: #f26722;
  --data-viz-categorical-11-focus: #c44f14;
  --data-viz-categorical-11-gradient-default: linear-gradient(
    180deg,
    #f26722 50%,
    #fc8d4c 100%
  );
  --data-viz-categorical-11-gradient-default-end: #f26722;
  --data-viz-categorical-11-gradient-default-start: #fc8d4c;
  --data-viz-categorical-11-hover: #c44f14;
  --data-viz-categorical-11-weak-gradient-active: linear-gradient(
    180deg,
    #fcc9a7 0%,
    #fff 100%
  );
  --data-viz-categorical-11-weak-gradient-active-end: #fcc9a7;
  --data-viz-categorical-11-weak-gradient-active-start: #fff;
  --data-viz-categorical-11-weak-gradient-default: linear-gradient(
    180deg,
    #fcc9a7 0%,
    #fff 100%
  );
  --data-viz-categorical-11-weak-gradient-default-end: #fcc9a7;
  --data-viz-categorical-11-weak-gradient-default-start: #fff;
  --data-viz-categorical-11-weak-gradient-focus: linear-gradient(
    180deg,
    #fcb88d 0%,
    #ffeadb 100%
  );
  --data-viz-categorical-11-weak-gradient-focus-end: #fcb88d;
  --data-viz-categorical-11-weak-gradient-focus-start: #ffeadb;
  --data-viz-categorical-11-weak-gradient-hover: linear-gradient(
    180deg,
    #fcb88d 0%,
    #ffeadb 100%
  );
  --data-viz-categorical-11-weak-gradient-hover-end: #fcb88d;
  --data-viz-categorical-11-weak-gradient-hover-start: #ffeadb;
  --data-viz-categorical-12-active: #0b7b46;
  --data-viz-categorical-12-default: #0b7b46;
  --data-viz-categorical-12-focus: #075e39;
  --data-viz-categorical-12-gradient-default: linear-gradient(
    180deg,
    #0b7b46 50%,
    #169855 100%
  );
  --data-viz-categorical-12-gradient-default-end: #0b7b46;
  --data-viz-categorical-12-gradient-default-start: #169855;
  --data-viz-categorical-12-hover: #075e39;
  --data-viz-categorical-12-weak-gradient-active: linear-gradient(
    180deg,
    #97e5b8 0%,
    #fff 100%
  );
  --data-viz-categorical-12-weak-gradient-active-end: #97e5b8;
  --data-viz-categorical-12-weak-gradient-active-start: #fff;
  --data-viz-categorical-12-weak-gradient-default: linear-gradient(
    180deg,
    #97e5b8 0%,
    #fff 100%
  );
  --data-viz-categorical-12-weak-gradient-default-end: #97e5b8;
  --data-viz-categorical-12-weak-gradient-default-start: #fff;
  --data-viz-categorical-12-weak-gradient-focus: linear-gradient(
    180deg,
    #75d9a0 0%,
    #d4f5e1 100%
  );
  --data-viz-categorical-12-weak-gradient-focus-end: #75d9a0;
  --data-viz-categorical-12-weak-gradient-focus-start: #d4f5e1;
  --data-viz-categorical-12-weak-gradient-hover: linear-gradient(
    180deg,
    #75d9a0 0%,
    #d4f5e1 100%
  );
  --data-viz-categorical-12-weak-gradient-hover-end: #75d9a0;
  --data-viz-categorical-12-weak-gradient-hover-start: #d4f5e1;
  --data-viz-categorical-2-active: #04a4b0;
  --data-viz-categorical-2-default: #04a4b0;
  --data-viz-categorical-2-focus: #01818c;
  --data-viz-categorical-2-gradient-default: linear-gradient(
    180deg,
    #04a4b0 50%,
    #17c2c2 100%
  );
  --data-viz-categorical-2-gradient-default-end: #04a4b0;
  --data-viz-categorical-2-gradient-default-start: #17c2c2;
  --data-viz-categorical-2-hover: #01818c;
  --data-viz-categorical-2-weak-gradient-active: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-categorical-2-weak-gradient-active-end: #84e3e3;
  --data-viz-categorical-2-weak-gradient-active-start: #fff;
  --data-viz-categorical-2-weak-gradient-default: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-categorical-2-weak-gradient-default-end: #84e3e3;
  --data-viz-categorical-2-weak-gradient-default-start: #fff;
  --data-viz-categorical-2-weak-gradient-focus: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-categorical-2-weak-gradient-focus-end: #4ad9d9;
  --data-viz-categorical-2-weak-gradient-focus-start: #d5f5f5;
  --data-viz-categorical-2-weak-gradient-hover: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-categorical-2-weak-gradient-hover-end: #4ad9d9;
  --data-viz-categorical-2-weak-gradient-hover-start: #d5f5f5;
  --data-viz-categorical-3-active: #a974f7;
  --data-viz-categorical-3-default: #a974f7;
  --data-viz-categorical-3-focus: #8d4eed;
  --data-viz-categorical-3-gradient-default: linear-gradient(
    180deg,
    #a974f7 50%,
    #c299ff 100%
  );
  --data-viz-categorical-3-gradient-default-end: #a974f7;
  --data-viz-categorical-3-gradient-default-start: #c299ff;
  --data-viz-categorical-3-hover: #8d4eed;
  --data-viz-categorical-3-weak-gradient-active: linear-gradient(
    180deg,
    #e0ccff 0%,
    #fff 100%
  );
  --data-viz-categorical-3-weak-gradient-active-end: #e0ccff;
  --data-viz-categorical-3-weak-gradient-active-start: #fff;
  --data-viz-categorical-3-weak-gradient-default: linear-gradient(
    180deg,
    #e0ccff 0%,
    #fff 100%
  );
  --data-viz-categorical-3-weak-gradient-default-end: #e0ccff;
  --data-viz-categorical-3-weak-gradient-default-start: #fff;
  --data-viz-categorical-3-weak-gradient-focus: linear-gradient(
    180deg,
    #d6baff 0%,
    #f3ebff 100%
  );
  --data-viz-categorical-3-weak-gradient-focus-end: #d6baff;
  --data-viz-categorical-3-weak-gradient-focus-start: #f3ebff;
  --data-viz-categorical-3-weak-gradient-hover: linear-gradient(
    180deg,
    #d6baff 0%,
    #f3ebff 100%
  );
  --data-viz-categorical-3-weak-gradient-hover-end: #d6baff;
  --data-viz-categorical-3-weak-gradient-hover-start: #f3ebff;
  --data-viz-categorical-4-active: #c2306f;
  --data-viz-categorical-4-default: #c2306f;
  --data-viz-categorical-4-focus: #991d53;
  --data-viz-categorical-4-gradient-default: linear-gradient(
    180deg,
    #c2306f 50%,
    #e3447c 100%
  );
  --data-viz-categorical-4-gradient-default-end: #c2306f;
  --data-viz-categorical-4-gradient-default-start: #e3447c;
  --data-viz-categorical-4-hover: #991d53;
  --data-viz-categorical-4-weak-gradient-active: linear-gradient(
    180deg,
    #ffc4d5 0%,
    #fff 100%
  );
  --data-viz-categorical-4-weak-gradient-active-end: #ffc4d5;
  --data-viz-categorical-4-weak-gradient-active-start: #fff;
  --data-viz-categorical-4-weak-gradient-default: linear-gradient(
    180deg,
    #ffc4d5 0%,
    #fff 100%
  );
  --data-viz-categorical-4-weak-gradient-default-end: #ffc4d5;
  --data-viz-categorical-4-weak-gradient-default-start: #fff;
  --data-viz-categorical-4-weak-gradient-focus: linear-gradient(
    180deg,
    #fcb3c8 0%,
    #ffe8ef 100%
  );
  --data-viz-categorical-4-weak-gradient-focus-end: #fcb3c8;
  --data-viz-categorical-4-weak-gradient-focus-start: #ffe8ef;
  --data-viz-categorical-4-weak-gradient-hover: linear-gradient(
    180deg,
    #fcb3c8 0%,
    #ffe8ef 100%
  );
  --data-viz-categorical-4-weak-gradient-hover-end: #fcb3c8;
  --data-viz-categorical-4-weak-gradient-hover-start: #ffe8ef;
  --data-viz-categorical-5-active: #7da11b;
  --data-viz-categorical-5-default: #7da11b;
  --data-viz-categorical-5-focus: #61800e;
  --data-viz-categorical-5-gradient-default: linear-gradient(
    180deg,
    #7da11b 50%,
    #9dba4c 100%
  );
  --data-viz-categorical-5-gradient-default-end: #7da11b;
  --data-viz-categorical-5-gradient-default-start: #9dba4c;
  --data-viz-categorical-5-hover: #61800e;
  --data-viz-categorical-5-weak-gradient-active: linear-gradient(
    180deg,
    #c7de8a 0%,
    #fff 100%
  );
  --data-viz-categorical-5-weak-gradient-active-end: #c7de8a;
  --data-viz-categorical-5-weak-gradient-active-start: #fff;
  --data-viz-categorical-5-weak-gradient-default: linear-gradient(
    180deg,
    #c7de8a 0%,
    #fff 100%
  );
  --data-viz-categorical-5-weak-gradient-default-end: #c7de8a;
  --data-viz-categorical-5-weak-gradient-default-start: #fff;
  --data-viz-categorical-5-weak-gradient-focus: linear-gradient(
    180deg,
    #b5d166 0%,
    #eaf2d3 100%
  );
  --data-viz-categorical-5-weak-gradient-focus-end: #b5d166;
  --data-viz-categorical-5-weak-gradient-focus-start: #eaf2d3;
  --data-viz-categorical-5-weak-gradient-hover: linear-gradient(
    180deg,
    #b5d166 0%,
    #eaf2d3 100%
  );
  --data-viz-categorical-5-weak-gradient-hover-end: #b5d166;
  --data-viz-categorical-5-weak-gradient-hover-start: #eaf2d3;
  --data-viz-categorical-6-active: #864ae0;
  --data-viz-categorical-6-default: #864ae0;
  --data-viz-categorical-6-focus: #6732b8;
  --data-viz-categorical-6-gradient-default: linear-gradient(
    180deg,
    #864ae0 50%,
    #9b5ff5 100%
  );
  --data-viz-categorical-6-gradient-default-end: #864ae0;
  --data-viz-categorical-6-gradient-default-start: #9b5ff5;
  --data-viz-categorical-6-hover: #6732b8;
  --data-viz-categorical-6-weak-gradient-active: linear-gradient(
    180deg,
    #e0ccff 0%,
    #fff 100%
  );
  --data-viz-categorical-6-weak-gradient-active-end: #e0ccff;
  --data-viz-categorical-6-weak-gradient-active-start: #fff;
  --data-viz-categorical-6-weak-gradient-default: linear-gradient(
    180deg,
    #e0ccff 0%,
    #fff 100%
  );
  --data-viz-categorical-6-weak-gradient-default-end: #e0ccff;
  --data-viz-categorical-6-weak-gradient-default-start: #fff;
  --data-viz-categorical-6-weak-gradient-focus: linear-gradient(
    180deg,
    #d6baff 0%,
    #f3ebff 100%
  );
  --data-viz-categorical-6-weak-gradient-focus-end: #d6baff;
  --data-viz-categorical-6-weak-gradient-focus-start: #f3ebff;
  --data-viz-categorical-6-weak-gradient-hover: linear-gradient(
    180deg,
    #d6baff 0%,
    #f3ebff 100%
  );
  --data-viz-categorical-6-weak-gradient-hover-end: #d6baff;
  --data-viz-categorical-6-weak-gradient-hover-start: #f3ebff;
  --data-viz-categorical-7-active: #f2638c;
  --data-viz-categorical-7-default: #f2638c;
  --data-viz-categorical-7-focus: #cf3a7a;
  --data-viz-categorical-7-gradient-default: linear-gradient(
    180deg,
    #f2638c 50%,
    #ff87a9 100%
  );
  --data-viz-categorical-7-gradient-default-end: #f2638c;
  --data-viz-categorical-7-gradient-default-start: #ff87a9;
  --data-viz-categorical-7-hover: #cf3a7a;
  --data-viz-categorical-7-weak-gradient-active: linear-gradient(
    180deg,
    #ffc4d5 0%,
    #fff 100%
  );
  --data-viz-categorical-7-weak-gradient-active-end: #ffc4d5;
  --data-viz-categorical-7-weak-gradient-active-start: #fff;
  --data-viz-categorical-7-weak-gradient-default: linear-gradient(
    180deg,
    #ffc4d5 0%,
    #fff 100%
  );
  --data-viz-categorical-7-weak-gradient-default-end: #ffc4d5;
  --data-viz-categorical-7-weak-gradient-default-start: #fff;
  --data-viz-categorical-7-weak-gradient-focus: linear-gradient(
    180deg,
    #fcb3c8 0%,
    #ffe8ef 100%
  );
  --data-viz-categorical-7-weak-gradient-focus-end: #fcb3c8;
  --data-viz-categorical-7-weak-gradient-focus-start: #ffe8ef;
  --data-viz-categorical-7-weak-gradient-hover: linear-gradient(
    180deg,
    #fcb3c8 0%,
    #ffe8ef 100%
  );
  --data-viz-categorical-7-weak-gradient-hover-end: #fcb3c8;
  --data-viz-categorical-7-weak-gradient-hover-start: #ffe8ef;
  --data-viz-categorical-8-active: #017580;
  --data-viz-categorical-8-default: #017580;
  --data-viz-categorical-8-focus: #005c66;
  --data-viz-categorical-8-gradient-default: linear-gradient(
    180deg,
    #017580 50%,
    #028e99 100%
  );
  --data-viz-categorical-8-gradient-default-end: #017580;
  --data-viz-categorical-8-gradient-default-start: #028e99;
  --data-viz-categorical-8-hover: #005c66;
  --data-viz-categorical-8-weak-gradient-active: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-categorical-8-weak-gradient-active-end: #84e3e3;
  --data-viz-categorical-8-weak-gradient-active-start: #fff;
  --data-viz-categorical-8-weak-gradient-default: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-categorical-8-weak-gradient-default-end: #84e3e3;
  --data-viz-categorical-8-weak-gradient-default-start: #fff;
  --data-viz-categorical-8-weak-gradient-focus: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-categorical-8-weak-gradient-focus-end: #4ad9d9;
  --data-viz-categorical-8-weak-gradient-focus-start: #d5f5f5;
  --data-viz-categorical-8-weak-gradient-hover: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-categorical-8-weak-gradient-hover-end: #4ad9d9;
  --data-viz-categorical-8-weak-gradient-hover-start: #d5f5f5;
  --data-viz-categorical-9-active: #139beb;
  --data-viz-categorical-9-default: #139beb;
  --data-viz-categorical-9-focus: #087abd;
  --data-viz-categorical-9-gradient-default: linear-gradient(
    180deg,
    #139beb 50%,
    #33bbf5 100%
  );
  --data-viz-categorical-9-gradient-default-end: #139beb;
  --data-viz-categorical-9-gradient-default-start: #33bbf5;
  --data-viz-categorical-9-hover: #087abd;
  --data-viz-categorical-9-weak-gradient-active: linear-gradient(
    180deg,
    #9adffc 0%,
    #fff 100%
  );
  --data-viz-categorical-9-weak-gradient-active-end: #9adffc;
  --data-viz-categorical-9-weak-gradient-active-start: #fff;
  --data-viz-categorical-9-weak-gradient-default: linear-gradient(
    180deg,
    #9adffc 0%,
    #fff 100%
  );
  --data-viz-categorical-9-weak-gradient-default-end: #9adffc;
  --data-viz-categorical-9-weak-gradient-default-start: #fff;
  --data-viz-categorical-9-weak-gradient-focus: linear-gradient(
    180deg,
    #6fd2fc 0%,
    #d9f4ff 100%
  );
  --data-viz-categorical-9-weak-gradient-focus-end: #6fd2fc;
  --data-viz-categorical-9-weak-gradient-focus-start: #d9f4ff;
  --data-viz-categorical-9-weak-gradient-hover: linear-gradient(
    180deg,
    #6fd2fc 0%,
    #d9f4ff 100%
  );
  --data-viz-categorical-9-weak-gradient-hover-end: #6fd2fc;
  --data-viz-categorical-9-weak-gradient-hover-start: #d9f4ff;
  --data-viz-dormant-active: #889099;
  --data-viz-dormant-default: #889099;
  --data-viz-dormant-focus: #6f7680;
  --data-viz-dormant-gradient-default: linear-gradient(
    180deg,
    #889099 50%,
    #a7adb5 100%
  );
  --data-viz-dormant-gradient-default-end: #889099;
  --data-viz-dormant-gradient-default-start: #a7adb5;
  --data-viz-dormant-hover: #6f7680;
  --data-viz-dormant-weak-gradient-active: linear-gradient(
    180deg,
    #d0d4d9 0%,
    #fff 100%
  );
  --data-viz-dormant-weak-gradient-active-end: #d0d4d9;
  --data-viz-dormant-weak-gradient-active-start: #fff;
  --data-viz-dormant-weak-gradient-default: linear-gradient(
    180deg,
    #d0d4d9 0%,
    #fff 100%
  );
  --data-viz-dormant-weak-gradient-default-end: #d0d4d9;
  --data-viz-dormant-weak-gradient-default-start: #fff;
  --data-viz-dormant-weak-gradient-focus: linear-gradient(
    180deg,
    #c1c6cc 0%,
    #f0f1f2 100%
  );
  --data-viz-dormant-weak-gradient-focus-end: #c1c6cc;
  --data-viz-dormant-weak-gradient-focus-start: #f0f1f2;
  --data-viz-dormant-weak-gradient-hover: linear-gradient(
    180deg,
    #c1c6cc 0%,
    #f0f1f2 100%
  );
  --data-viz-dormant-weak-gradient-hover-end: #c1c6cc;
  --data-viz-dormant-weak-gradient-hover-start: #f0f1f2;
  --data-viz-excellent-active: #0d5cbd;
  --data-viz-excellent-default: #0d5cbd;
  --data-viz-excellent-focus: #0051af;
  --data-viz-excellent-gradient-default: linear-gradient(
    180deg,
    #0d5cbd 50%,
    #2774d9 100%
  );
  --data-viz-excellent-gradient-default-end: #0d5cbd;
  --data-viz-excellent-gradient-default-start: #2774d9;
  --data-viz-excellent-hover: #0051af;
  --data-viz-excellent-weak-gradient-active: linear-gradient(
    180deg,
    #bad6ff 0%,
    #fff 100%
  );
  --data-viz-excellent-weak-gradient-active-end: #bad6ff;
  --data-viz-excellent-weak-gradient-active-start: #fff;
  --data-viz-excellent-weak-gradient-default: linear-gradient(
    180deg,
    #bad6ff 0%,
    #fff 100%
  );
  --data-viz-excellent-weak-gradient-default-end: #bad6ff;
  --data-viz-excellent-weak-gradient-default-start: #fff;
  --data-viz-excellent-weak-gradient-focus: linear-gradient(
    180deg,
    #a3c8ff 0%,
    #e3eeff 100%
  );
  --data-viz-excellent-weak-gradient-focus-end: #a3c8ff;
  --data-viz-excellent-weak-gradient-focus-start: #e3eeff;
  --data-viz-excellent-weak-gradient-hover: linear-gradient(
    180deg,
    #a3c8ff 0%,
    #e3eeff 100%
  );
  --data-viz-excellent-weak-gradient-hover-end: #a3c8ff;
  --data-viz-excellent-weak-gradient-hover-start: #e3eeff;
  --data-viz-low-warning-active: #028e99;
  --data-viz-low-warning-default: #028e99;
  --data-viz-low-warning-focus: #017580;
  --data-viz-low-warning-gradient-default: linear-gradient(
    180deg,
    #028e99 50%,
    #0bb2b8 100%
  );
  --data-viz-low-warning-gradient-default-end: #028e99;
  --data-viz-low-warning-gradient-default-start: #0bb2b8;
  --data-viz-low-warning-hover: #017580;
  --data-viz-low-warning-weak-gradient-active: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-low-warning-weak-gradient-active-end: #84e3e3;
  --data-viz-low-warning-weak-gradient-active-start: #fff;
  --data-viz-low-warning-weak-gradient-default: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-low-warning-weak-gradient-default-end: #84e3e3;
  --data-viz-low-warning-weak-gradient-default-start: #fff;
  --data-viz-low-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-low-warning-weak-gradient-focus-end: #4ad9d9;
  --data-viz-low-warning-weak-gradient-focus-start: #d5f5f5;
  --data-viz-low-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-low-warning-weak-gradient-hover-end: #4ad9d9;
  --data-viz-low-warning-weak-gradient-hover-start: #d5f5f5;
  --data-viz-negative-active: #cc2d37;
  --data-viz-negative-default: #cc2d37;
  --data-viz-negative-focus: #a01d26;
  --data-viz-negative-gradient-default: linear-gradient(
    180deg,
    #cc2d37 50%,
    #eb4651 100%
  );
  --data-viz-negative-gradient-default-end: #cc2d37;
  --data-viz-negative-gradient-default-start: #eb4651;
  --data-viz-negative-hover: #a01d26;
  --data-viz-negative-weak-gradient-active: linear-gradient(
    180deg,
    #ffc7c9 0%,
    #fff 100%
  );
  --data-viz-negative-weak-gradient-active-end: #ffc7c9;
  --data-viz-negative-weak-gradient-active-start: #fff;
  --data-viz-negative-weak-gradient-default: linear-gradient(
    180deg,
    #ffc7c9 0%,
    #fff 100%
  );
  --data-viz-negative-weak-gradient-default-end: #ffc7c9;
  --data-viz-negative-weak-gradient-default-start: #fff;
  --data-viz-negative-weak-gradient-focus: linear-gradient(
    180deg,
    #ffb2b5 0%,
    #ffe8e9 100%
  );
  --data-viz-negative-weak-gradient-focus-end: #ffb2b5;
  --data-viz-negative-weak-gradient-focus-start: #ffe8e9;
  --data-viz-negative-weak-gradient-hover: linear-gradient(
    180deg,
    #ffb2b5 0%,
    #ffe8e9 100%
  );
  --data-viz-negative-weak-gradient-hover-end: #ffb2b5;
  --data-viz-negative-weak-gradient-hover-start: #ffe8e9;
  --data-viz-positive-active: #139beb;
  --data-viz-positive-default: #139beb;
  --data-viz-positive-focus: #087abd;
  --data-viz-positive-gradient-default: linear-gradient(
    180deg,
    #139beb 50%,
    #33bbf5 100%
  );
  --data-viz-positive-gradient-default-end: #139beb;
  --data-viz-positive-gradient-default-start: #33bbf5;
  --data-viz-positive-hover: #087abd;
  --data-viz-positive-weak-gradient-active: linear-gradient(
    180deg,
    #9adffc 0%,
    #fff 100%
  );
  --data-viz-positive-weak-gradient-active-end: #9adffc;
  --data-viz-positive-weak-gradient-active-start: #fff;
  --data-viz-positive-weak-gradient-default: linear-gradient(
    180deg,
    #9adffc 0%,
    #fff 100%
  );
  --data-viz-positive-weak-gradient-default-end: #9adffc;
  --data-viz-positive-weak-gradient-default-start: #fff;
  --data-viz-positive-weak-gradient-focus: linear-gradient(
    180deg,
    #6fd2fc 0%,
    #d9f4ff 100%
  );
  --data-viz-positive-weak-gradient-focus-end: #6fd2fc;
  --data-viz-positive-weak-gradient-focus-start: #d9f4ff;
  --data-viz-positive-weak-gradient-hover: linear-gradient(
    180deg,
    #6fd2fc 0%,
    #d9f4ff 100%
  );
  --data-viz-positive-weak-gradient-hover-end: #6fd2fc;
  --data-viz-positive-weak-gradient-hover-start: #d9f4ff;
  --data-viz-severe-warning-active: #f26722;
  --data-viz-severe-warning-default: #f26722;
  --data-viz-severe-warning-focus: #c44f14;
  --data-viz-severe-warning-gradient-default: linear-gradient(
    180deg,
    #f26722 50%,
    #fc8d4c 100%
  );
  --data-viz-severe-warning-gradient-default-end: #f26722;
  --data-viz-severe-warning-gradient-default-start: #fc8d4c;
  --data-viz-severe-warning-hover: #c44f14;
  --data-viz-severe-warning-weak-gradient-active: linear-gradient(
    180deg,
    #fcc9a7 0%,
    #fff 100%
  );
  --data-viz-severe-warning-weak-gradient-active-end: #fcc9a7;
  --data-viz-severe-warning-weak-gradient-active-start: #fff;
  --data-viz-severe-warning-weak-gradient-default: linear-gradient(
    180deg,
    #fcc9a7 0%,
    #fff 100%
  );
  --data-viz-severe-warning-weak-gradient-default-end: #fcc9a7;
  --data-viz-severe-warning-weak-gradient-default-start: #fff;
  --data-viz-severe-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #fcb88d 0%,
    #ffeadb 100%
  );
  --data-viz-severe-warning-weak-gradient-focus-end: #fcb88d;
  --data-viz-severe-warning-weak-gradient-focus-start: #ffeadb;
  --data-viz-severe-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #fcb88d 0%,
    #ffeadb 100%
  );
  --data-viz-severe-warning-weak-gradient-hover-end: #fcb88d;
  --data-viz-severe-warning-weak-gradient-hover-start: #ffeadb;
  --data-viz-warning-active: #cc8604;
  --data-viz-warning-default: #cc8604;
  --data-viz-warning-focus: #b05f04;
  --data-viz-warning-gradient-default: linear-gradient(
    180deg,
    #cc8604 50%,
    #e0a419 100%
  );
  --data-viz-warning-gradient-default-end: #cc8604;
  --data-viz-warning-gradient-default-start: #e0a419;
  --data-viz-warning-hover: #b05f04;
  --data-viz-warning-weak-gradient-active: linear-gradient(
    180deg,
    #f2d268 0%,
    #fff 100%
  );
  --data-viz-warning-weak-gradient-active-end: #f2d268;
  --data-viz-warning-weak-gradient-active-start: #fff;
  --data-viz-warning-weak-gradient-default: linear-gradient(
    180deg,
    #f2d268 0%,
    #fff 100%
  );
  --data-viz-warning-weak-gradient-default-end: #f2d268;
  --data-viz-warning-weak-gradient-default-start: #fff;
  --data-viz-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #f0c243 0%,
    #faefb9 100%
  );
  --data-viz-warning-weak-gradient-focus-end: #f0c243;
  --data-viz-warning-weak-gradient-focus-start: #faefb9;
  --data-viz-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #f0c243 0%,
    #faefb9 100%
  );
  --data-viz-warning-weak-gradient-hover-end: #f0c243;
  --data-viz-warning-weak-gradient-hover-start: #faefb9;

  /* token for modal overlay */
  --overlay-bg-default: rgba(0,0,0,0.4);
}

/* Non-token additions for contextual container. */
*[data-mds-theme="light-classic"] [class^="mds-"] {
  color-scheme: light;
}
*[data-mds-theme="light-classic"] [class*=" mds-"] {
  color-scheme: light;
}
`,Z=`/**
 * This file is auto-generated. Do not edit it directly.
 */

*[data-mds-theme="blue-light"] {
  --brand-bg-active: #464c54;
  --brand-bg-default: #373c42;
  --brand-bg-disabled: #e1e4e8;
  --brand-bg-focus: #464c54;
  --brand-bg-gradient-default: linear-gradient(90deg, #373c42 0%, #0f1214 100%);
  --brand-bg-gradient-end: #0f1214;
  --brand-bg-gradient-start: #373c42;
  --brand-bg-hover: #373c42;
  --brand-bg-strong-active: #373c42;
  --brand-bg-strong-default: #373c42;
  --brand-bg-strong-focus: #373c42;
  --brand-bg-strong-hover: #373c42;
  --brand-border-active: #cce1ff;
  --brand-icon-active: #fff;
  --brand-icon-default: #f7f7f7;
  --brand-icon-hover: #fff;
  --brand-icon-weak-active: #f7f7f7;
  --brand-icon-weak-default: #f7f7f7;
  --brand-icon-weak-focus: #f7f7f7;
  --brand-icon-weak-hover: #f7f7f7;
  --brand-text-active: #f7f7f7;
  --brand-text-default: #f7f7f7;
  --brand-text-hover: #f7f7f7;
  --brand-text-strong-default: #f0f1f2;
  --brand-text-weak-active: #f7f7f7;
  --brand-text-weak-default: #f7f7f7;
  --brand-text-weak-focus: #f7f7f7;
  --brand-text-weak-hover: #f7f7f7;
  --brand-accent-border-active: #3e84e5;
  --brand-accent-border-default: #5191f0;
  --brand-accent-border-focus: #3e84e5;
  --brand-accent-border-hover: #e1e4e8;
  --brand-accent-border-medium-active: #e3eeff;
  --brand-accent-border-medium-default: #f0f1f2;
  --brand-accent-border-medium-disabled: #fff;
  --brand-accent-border-medium-focus: #fff;
  --brand-accent-border-medium-hover: #fff;
  --brand-accent-border-strong-active: #f7f7f7;
  --brand-accent-border-strong-default: #f7f7f7;
  --brand-accent-border-strong-disabled: #fff;
  --brand-accent-border-strong-focus: #f7f7f7;
  --brand-accent-border-strong-hover: #f7f7f7;
  --brand-accent-border-weak-active: #7cadf7;
  --brand-accent-border-weak-default: #d0d4d9;
  --brand-accent-border-weak-disabled: #fff;
  --brand-accent-border-weak-focus: #fff;
  --brand-accent-border-weak-hover: #fff;
  --brand-accent-icon-active: #3e84e5;
  --brand-accent-icon-default: #7e868f;
  --brand-accent-icon-disabled: #d0d4d9;
  --brand-accent-icon-focus: #fff;
  --brand-accent-icon-medium-active: #5191f0;
  --brand-accent-icon-medium-default: #a7adb5;
  --brand-accent-icon-medium-disabled: #d0d4d9;
  --brand-accent-icon-medium-focus: #fff;
  --brand-accent-icon-weak-active: #7cadf7;
  --brand-accent-icon-weak-default: #c1c6cc;
  --brand-accent-icon-weak-disabled: #d0d4d9;
  --brand-accent-icon-weak-focus: #fff;
  --base-bg-default: #f7f7f7;
  --base-bg-hover: #f7f7f7;
  --base-bg-active: #f7f7f7;
  --base-bg-disabled: #f0f1f2;
  --base-bg-weak-default: #fff;
  --base-bg-weak-hover: rgba(225,228,232,0.8);
  --base-bg-weak-active: #f0f1f2;
  --base-bg-weak-disabled: #f0f1f2;
  --base-bg-medium-default: #f7f7f7;
  --base-bg-medium-hover: #e1e4e8;
  --base-bg-medium-active: #f0f1f2;
  --base-bg-medium-disabled: #f7f7f7;
  --base-bg-strong-default: #656c75;
  --base-bg-strong-hover: #23282e;
  --base-bg-strong-focus: #23282e;
  --base-bg-strong-active: #23282e;
  --base-bg-strong-disabled: #d0d4d9;
  --base-icon-in-default: #fff;
  --base-icon-in-hover: #fff;
  --base-icon-in-focus: #fff;
  --base-icon-in-active: #fff;
  --base-icon-in-disabled: #fff;
  --base-text-default: #23282e;
  --base-text-disabled: #c1c6cc;
  --base-text-weak-default: #889099;
  --base-text-weak-disabled: #c1c6cc;
  --base-text-medium-default: #596069;
  --base-text-medium-disabled: #c1c6cc;
  --base-text-strong-default: #373c42;
  --base-text-strong-disabled: #c1c6cc;
  --base-text-in-default: #fff;
  --base-text-in-hover: #fff;
  --base-text-in-focus: #fff;
  --base-text-in-active: #fff;
  --base-text-in-disabled: #fff;
  --base-text-in-weak-default: #f7f7f7;
  --base-border-default: #e1e4e8;
  --base-border-weak-default: #fff;
  --base-border-medium-default: #e1e4e8;
  --base-border-strong-default: #656c75;
  --base-border-gradient-default: linear-gradient(
    180deg,
    #f7f7f7 0%,
    #e1e4e8 50%,
    #f7f7f7 100%
  );
  --inverse-bg-default: #373c42;
  --inverse-bg-hover: #373c42;
  --inverse-bg-focus: #464c54;
  --inverse-bg-active: #464c54;
  --inverse-bg-disabled: #e1e4e8;
  --inverse-bg-gradient-start: #373c42;
  --inverse-bg-gradient-end: #0f1214;
  --inverse-bg-gradient-default: linear-gradient(
    90deg,
    #373c42 0%,
    #0f1214 100%
  );
  --inverse-bg-weak-default: #373c42;
  --inverse-text-default: #f7f7f7;
  --inverse-text-hover: #f7f7f7;
  --inverse-text-focus: #f7f7f7;
  --inverse-text-active: #f7f7f7;
  --inverse-text-disabled: #656c75;
  --inverse-text-medium-default: #c1c6cc;
  --inverse-text-medium-disabled: #656c75;
  --inverse-icon-default: #f7f7f7;
  --inverse-icon-hover: #fff;
  --inverse-icon-focus: #fff;
  --inverse-icon-active: #fff;
  --inverse-icon-disabled: #6f7680;
  --inverse-icon-strong-default: #fff;
  --inverse-icon-strong-hover: #fff;
  --inverse-icon-strong-focus: #fff;
  --inverse-icon-strong-active: #fff;
  --inverse-icon-strong-disabled: #fff;
  --inverse-border-default: #6f7680;
  --inverse-border-hover: #649ef5;
  --inverse-border-focus: #cce1ff;
  --inverse-border-active: #cce1ff;
  --inverse-border-disabled: #e1e4e8;
  --control-bg-default: #fff;
  --control-bg-hover: #e3eeff;
  --control-bg-focus: #f0f1f2;
  --control-bg-active: #f0f1f2;
  --control-bg-disabled: #f7f7f7;
  --control-bg-weak-default: #fff;
  --control-bg-weak-hover: #cce1ff;
  --control-bg-weak-focus: #e3eeff;
  --control-bg-weak-active: #e3eeff;
  --control-bg-weak-disabled: #f7f7f7;
  --control-bg-medium-default: #fff;
  --control-bg-medium-hover: #f7f7f7;
  --control-bg-medium-focus: #e3eeff;
  --control-bg-medium-active: #e3eeff;
  --control-bg-medium-disabled: #e1e4e8;
  --control-bg-strong-default: #2774d9;
  --control-bg-strong-hover: #0d5cbd;
  --control-bg-strong-focus: #0d5cbd;
  --control-bg-strong-active: #0d5cbd;
  --control-bg-strong-disabled: #bad6ff;
  --control-icon-default: #1d69cc;
  --control-icon-hover: #0d5cbd;
  --control-icon-focus: #0d5cbd;
  --control-icon-active: #0d5cbd;
  --control-icon-disabled: #a3c8ff;
  --control-icon-weak-default: #7e868f;
  --control-icon-weak-hover: #2774d9;
  --control-icon-weak-focus: #2774d9;
  --control-icon-weak-active: #2774d9;
  --control-icon-weak-disabled: #d0d4d9;
  --control-icon-medium-default: #2774d9;
  --control-icon-medium-hover: #0d5cbd;
  --control-icon-medium-focus: #0d5cbd;
  --control-icon-medium-active: #0d5cbd;
  --control-icon-medium-disabled: #a3c8ff;
  --control-icon-strong-default: #656c75;
  --control-icon-strong-hover: #464c54;
  --control-icon-strong-focus: #1d69cc;
  --control-icon-strong-active: #1d69cc;
  --control-icon-strong-disabled: #c1c6cc;
  --control-icon-in-default: #fff;
  --control-icon-in-hover: #fff;
  --control-icon-in-focus: #fff;
  --control-icon-in-active: #fff;
  --control-icon-in-disabled: #c1c6cc;
  --control-icon-in-strong-default: #2774d9;
  --control-icon-in-strong-hover: #2774d9;
  --control-icon-in-strong-focus: #2774d9;
  --control-icon-in-strong-active: #2774d9;
  --control-icon-in-strong-disabled: #c1c6cc;
  --control-border-default: #889099;
  --control-border-hover: #3e84e5;
  --control-border-focus: #3e84e5;
  --control-border-active: #3e84e5;
  --control-border-disabled: #d0d4d9;
  --control-border-weak-default: #e1e4e8;
  --control-border-weak-hover: #7cadf7;
  --control-border-weak-focus: #7cadf7;
  --control-border-weak-active: #7cadf7;
  --control-border-weak-disabled: #d0d4d9;
  --control-border-medium-default: #2774d9;
  --control-border-medium-hover: #bad6ff;
  --control-border-medium-focus: #2774d9;
  --control-border-medium-active: #2774d9;
  --control-border-medium-disabled: #d0d4d9;
  --control-border-strong-default: #656c75;
  --control-border-strong-hover: #656c75;
  --control-border-strong-focus: #2774d9;
  --control-border-strong-active: #2774d9;
  --control-border-strong-disabled: #d0d4d9;
  --interact-bg-default: #1d69cc;
  --interact-bg-hover: #0d5cbd;
  --interact-bg-focus: #0d5cbd;
  --interact-bg-active: #0d5cbd;
  --interact-bg-disabled: #a3c8ff;
  --interact-bg-weak-default: #fff;
  --interact-bg-weak-hover: #cce1ff;
  --interact-bg-weak-focus: #cce1ff;
  --interact-bg-weak-active: #cce1ff;
  --interact-bg-weak-disabled: #fff;
  --interact-bg-medium-default: #2774d9;
  --interact-bg-medium-hover: #cce1ff;
  --interact-bg-medium-active: #cce1ff;
  --interact-bg-strong-hover: #f7f7f7;
  --interact-bg-strong-active: #f7f7f7;
  --interact-text-default: #1d69cc;
  --interact-text-hover: #0d5cbd;
  --interact-text-focus: #0d5cbd;
  --interact-text-active: #0d5cbd;
  --interact-text-disabled: #a3c8ff;
  --interact-text-weak-default: #656c75;
  --interact-text-weak-hover: #1d69cc;
  --interact-text-weak-focus: #1d69cc;
  --interact-text-weak-active: #1d69cc;
  --interact-text-weak-disabled: #c1c6cc;
  --interact-text-in-default: #fff;
  --interact-text-in-hover: #fff;
  --interact-text-in-focus: #fff;
  --interact-text-in-active: #fff;
  --interact-text-in-disabled: #fff;
  --interact-icon-default: #1d69cc;
  --interact-icon-hover: #0d5cbd;
  --interact-icon-focus: #0d5cbd;
  --interact-icon-active: #0d5cbd;
  --interact-icon-disabled: #a3c8ff;
  --interact-icon-weak-default: #7e868f;
  --interact-icon-weak-hover: #6f7680;
  --interact-icon-weak-focus: #6f7680;
  --interact-icon-weak-active: #6f7680;
  --interact-icon-weak-disabled: #d0d4d9;
  --interact-icon-medium-default: #7e868f;
  --interact-icon-medium-hover: #2774d9;
  --interact-icon-medium-focus: #2774d9;
  --interact-icon-medium-active: #2774d9;
  --interact-icon-medium-disabled: #c1c6cc;
  --interact-icon-strong-default: #656c75;
  --interact-icon-strong-hover: #464c54;
  --interact-icon-strong-active: #464c54;
  --interact-icon-strong-focus: #464c54;
  --interact-icon-strong-disabled: #a7adb5;
  --interact-icon-in-default: #fff;
  --interact-icon-in-hover: #fff;
  --interact-icon-in-focus: #fff;
  --interact-icon-in-active: #fff;
  --interact-icon-in-disabled: #fff;
  --interact-border-default: #1d69cc;
  --interact-border-hover: #0d5cbd;
  --interact-border-focus: #0d5cbd;
  --interact-border-active: #0d5cbd;
  --interact-border-disabled: #a3c8ff;
  --interact-border-weak-default: #e1e4e8;
  --interact-border-weak-hover: #cce1ff;
  --interact-border-weak-focus: #e1e4e8;
  --interact-border-weak-active: #e1e4e8;
  --interact-border-weak-disabled: #e1e4e8;
  --interact-border-medium-default: #2774d9;
  --interact-border-medium-hover: #bad6ff;
  --interact-border-medium-focus: #2774d9;
  --interact-border-medium-active: #2774d9;
  --interact-border-medium-disabled: #e1e4e8;
  --positive-bg-default: #139beb;
  --positive-bg-hover: #139beb;
  --positive-bg-focus: #139beb;
  --positive-bg-active: #139beb;
  --positive-bg-disabled: #9adffc;
  --positive-bg-weak-default: #fff;
  --positive-bg-weak-hover: #fff;
  --positive-bg-weak-focus: #fff;
  --positive-bg-weak-active: #fff;
  --positive-bg-weak-disabled: #fff;
  --positive-bg-medium-default: #d9f4ff;
  --positive-bg-medium-hover: #d9f4ff;
  --positive-bg-medium-focus: #d9f4ff;
  --positive-bg-medium-active: #d9f4ff;
  --positive-bg-medium-disabled: #f7f7f7;
  --positive-bg-strong-default: #d9f4ff;
  --positive-icon-default: #139beb;
  --positive-icon-hover: #139beb;
  --positive-icon-focus: #139beb;
  --positive-icon-active: #139beb;
  --positive-icon-disabled: #d0d4d9;
  --positive-icon-weak-default: #9adffc;
  --positive-icon-weak-hover: #9adffc;
  --positive-icon-weak-focus: #9adffc;
  --positive-icon-weak-active: #9adffc;
  --positive-icon-weak-disabled: #9adffc;
  --positive-icon-strong-default: #0d8bd4;
  --positive-icon-strong-hover: #0d8bd4;
  --positive-icon-strong-focus: #0d8bd4;
  --positive-icon-strong-active: #0d8bd4;
  --positive-icon-strong-disabled: #d0d4d9;
  --positive-icon-in-default: #fff;
  --positive-icon-in-hover: #fff;
  --positive-icon-in-focus: #fff;
  --positive-icon-in-active: #fff;
  --positive-icon-in-disabled: #fff;
  --positive-border-default: #139beb;
  --positive-border-hover: #139beb;
  --positive-border-focus: #139beb;
  --positive-border-active: #139beb;
  --positive-border-disabled: #d0d4d9;
  --positive-border-weak-default: #fff;
  --positive-border-weak-hover: #fff;
  --positive-border-weak-focus: #fff;
  --positive-border-weak-active: #fff;
  --positive-border-weak-disabled: #d0d4d9;
  --positive-border-strong-default: #0570ad;
  --positive-border-strong-hover: #0570ad;
  --positive-border-strong-focus: #0570ad;
  --positive-border-strong-active: #0570ad;
  --positive-border-strong-disabled: #0570ad;
  --positive-text-in-default: #fff;
  --positive-text-in-hover: #fff;
  --positive-text-in-focus: #fff;
  --positive-text-in-active: #fff;
  --positive-text-in-disabled: #fff;
  --warning-bg-default: #cc8604;
  --warning-bg-hover: #cc8604;
  --warning-bg-focus: #cc8604;
  --warning-bg-active: #cc8604;
  --warning-bg-disabled: #f2d268;
  --warning-bg-weak-default: #fff;
  --warning-bg-weak-hover: #fff;
  --warning-bg-weak-focus: #fff;
  --warning-bg-weak-active: #fff;
  --warning-bg-weak-disabled: #fff;
  --warning-bg-medium-default: #faefb9;
  --warning-bg-medium-hover: #faefb9;
  --warning-bg-medium-focus: #faefb9;
  --warning-bg-medium-active: #faefb9;
  --warning-bg-medium-disabled: #f7f7f7;
  --warning-bg-strong-default: #faefb9;
  --warning-icon-default: #cc8604;
  --warning-icon-hover: #cc8604;
  --warning-icon-focus: #cc8604;
  --warning-icon-active: #cc8604;
  --warning-icon-disabled: #d0d4d9;
  --warning-icon-strong-default: #bd7202;
  --warning-icon-strong-hover: #bd7202;
  --warning-icon-strong-focus: #bd7202;
  --warning-icon-strong-active: #bd7202;
  --warning-icon-strong-disabled: #d0d4d9;
  --warning-icon-in-default: #fff;
  --warning-icon-in-hover: #fff;
  --warning-icon-in-focus: #fff;
  --warning-icon-in-active: #fff;
  --warning-icon-in-disabled: #fff;
  --warning-border-default: #cc8604;
  --warning-border-hover: #cc8604;
  --warning-border-focus: #cc8604;
  --warning-border-active: #cc8604;
  --warning-border-disabled: #d0d4d9;
  --warning-border-weak-default: #fff;
  --warning-border-weak-hover: #fff;
  --warning-border-weak-focus: #fff;
  --warning-border-weak-active: #fff;
  --warning-border-weak-disabled: #d0d4d9;
  --warning-border-strong-default: #a65503;
  --warning-border-strong-hover: #a65503;
  --warning-border-strong-focus: #a65503;
  --warning-border-strong-active: #a65503;
  --warning-border-strong-disabled: #a65503;
  --warning-text-in-default: #fff;
  --warning-text-in-hover: #fff;
  --warning-text-in-focus: #fff;
  --warning-text-in-active: #fff;
  --warning-text-in-disabled: #fff;
  --severe-warning-bg-default: #f26722;
  --severe-warning-bg-hover: #f26722;
  --severe-warning-bg-focus: #f26722;
  --severe-warning-bg-active: #f26722;
  --severe-warning-bg-disabled: #fcc9a7;
  --severe-warning-bg-weak-default: #fff;
  --severe-warning-bg-weak-hover: #fff;
  --severe-warning-bg-weak-focus: #fff;
  --severe-warning-bg-weak-active: #fff;
  --severe-warning-bg-weak-disabled: #fff;
  --severe-warning-bg-medium-default: #ffeadb;
  --severe-warning-bg-medium-hover: #ffeadb;
  --severe-warning-bg-medium-focus: #ffeadb;
  --severe-warning-bg-medium-active: #ffeadb;
  --severe-warning-bg-medium-disabled: #f7f7f7;
  --severe-warning-bg-strong-default: #ffeadb;
  --severe-warning-icon-default: #f26722;
  --severe-warning-icon-hover: #d95a1a;
  --severe-warning-icon-focus: #c44f14;
  --severe-warning-icon-active: #c44f14;
  --severe-warning-icon-disabled: #d0d4d9;
  --severe-warning-icon-strong-default: #d95a1a;
  --severe-warning-icon-strong-hover: #d95a1a;
  --severe-warning-icon-strong-focus: #d95a1a;
  --severe-warning-icon-strong-active: #d95a1a;
  --severe-warning-icon-strong-disabled: #d95a1a;
  --severe-warning-icon-in-default: #fff;
  --severe-warning-icon-in-hover: #fff;
  --severe-warning-icon-in-focus: #fff;
  --severe-warning-icon-in-active: #fff;
  --severe-warning-icon-in-disabled: #fff;
  --severe-warning-border-default: #f26722;
  --severe-warning-border-hover: #f26722;
  --severe-warning-border-focus: #f26722;
  --severe-warning-border-active: #f26722;
  --severe-warning-border-disabled: #f26722;
  --severe-warning-border-weak-default: #fff;
  --severe-warning-border-weak-hover: #fff;
  --severe-warning-border-weak-focus: #fff;
  --severe-warning-border-weak-active: #fff;
  --severe-warning-border-weak-disabled: #d0d4d9;
  --negative-bg-default: #cc2d37;
  --negative-bg-hover: #b2242d;
  --negative-bg-focus: #b2242d;
  --negative-bg-active: #b2242d;
  --negative-bg-disabled: #ffb2b5;
  --negative-bg-weak-default: #fff;
  --negative-bg-weak-hover: #ffd4d5;
  --negative-bg-weak-focus: #ffd4d5;
  --negative-bg-weak-active: #ffd4d5;
  --negative-bg-weak-disabled: #fff;
  --negative-bg-medium-default: #ffe8e9;
  --negative-bg-medium-hover: #ffe8e9;
  --negative-bg-medium-focus: #ffe8e9;
  --negative-bg-medium-active: #ffe8e9;
  --negative-bg-medium-disabled: #f7f7f7;
  --negative-bg-strong-default: #ffe8e9;
  --negative-text-default: #cc2d37;
  --negative-text-hover: #b2242d;
  --negative-text-focus: #b2242d;
  --negative-text-active: #b2242d;
  --negative-text-disabled: #ffb2b5;
  --negative-text-in-default: #fff;
  --negative-text-in-hover: #fff;
  --negative-text-in-focus: #fff;
  --negative-text-in-active: #fff;
  --negative-text-in-disabled: #fff;
  --negative-icon-default: #cc2d37;
  --negative-icon-hover: #b2242d;
  --negative-icon-focus: #b2242d;
  --negative-icon-active: #b2242d;
  --negative-icon-disabled: #ffb2b5;
  --negative-icon-weak-default: #ffc7c9;
  --negative-icon-weak-hover: #ffc7c9;
  --negative-icon-weak-focus: #ffc7c9;
  --negative-icon-weak-active: #ffc7c9;
  --negative-icon-weak-disabled: #d0d4d9;
  --negative-icon-in-default: #fff;
  --negative-icon-in-hover: #fff;
  --negative-icon-in-focus: #fff;
  --negative-icon-in-active: #fff;
  --negative-icon-in-disabled: #fff;
  --negative-border-default: #cc2d37;
  --negative-border-hover: #b2242d;
  --negative-border-focus: #b2242d;
  --negative-border-active: #b2242d;
  --negative-border-disabled: #ffb2b5;
  --negative-border-weak-default: #fff;
  --negative-border-weak-hover: #fff;
  --negative-border-weak-focus: #fff;
  --negative-border-weak-active: #fff;
  --negative-border-weak-disabled: #d0d4d9;
  --negative-border-medium-default: #d93843;
  --negative-border-medium-hover: #d93843;
  --negative-border-medium-focus: #d93843;
  --negative-border-medium-active: #d93843;
  --negative-border-medium-disabled: #ffb2b5;
  --negative-border-strong-default: #b2242d;
  --negative-border-strong-hover: #b2242d;
  --negative-border-strong-focus: #b2242d;
  --negative-border-strong-active: #b2242d;
  --negative-border-strong-disabled: #ffb2b5;
  --info-bg-default: #864ae0;
  --info-bg-hover: #864ae0;
  --info-bg-focus: #864ae0;
  --info-bg-active: #864ae0;
  --info-bg-disabled: #864ae0;
  --info-bg-weak-default: #fff;
  --info-bg-weak-hover: #fff;
  --info-bg-weak-focus: #fff;
  --info-bg-weak-active: #fff;
  --info-bg-weak-disabled: #fff;
  --info-bg-medium-default: #f3ebff;
  --info-bg-medium-hover: #f3ebff;
  --info-bg-medium-focus: #f3ebff;
  --info-bg-medium-active: #f3ebff;
  --info-bg-medium-disabled: #f7f7f7;
  --info-bg-strong-default: #f3ebff;
  --info-icon-default: #864ae0;
  --info-icon-hover: #864ae0;
  --info-icon-focus: #864ae0;
  --info-icon-active: #864ae0;
  --info-icon-disabled: #d0d4d9;
  --info-icon-weak-default: #e0ccff;
  --info-icon-weak-hover: #e0ccff;
  --info-icon-weak-focus: #e0ccff;
  --info-icon-weak-active: #e0ccff;
  --info-icon-weak-disabled: #e0ccff;
  --info-icon-in-default: #fff;
  --info-icon-in-hover: #fff;
  --info-icon-in-focus: #fff;
  --info-icon-in-active: #fff;
  --info-icon-in-disabled: #fff;
  --info-border-default: #864ae0;
  --info-border-hover: #864ae0;
  --info-border-focus: #864ae0;
  --info-border-active: #864ae0;
  --info-border-disabled: #d0d4d9;
  --info-border-weak-default: #fff;
  --info-border-weak-hover: #fff;
  --info-border-weak-focus: #fff;
  --info-border-weak-active: #fff;
  --info-border-weak-disabled: #d0d4d9;
  --dormant-bg-default: #6f7680;
  --dormant-bg-disabled: #6f7680;
  --dormant-bg-medium-default: #e1e4e8;
  --dormant-bg-medium-disabled: #f7f7f7;
  --dormant-icon-default: #6f7680;
  --dormant-icon-disabled: #d0d4d9;
  --dormant-icon-medium-default: #fff;
  --dormant-icon-in-default: #fff;
  --dormant-icon-in-disabled: #fff;
  --dormant-icon-in-medium-default: #fff;
  --dormant-border-default: #889099;
  --dormant-border-disabled: #d0d4d9;
  --accent-a-default: #7d8aff;
  --accent-a-hover: #6977f0;
  --accent-a-weak-default: #ebedff;
  --accent-b-default: #b02863;
  --accent-b-hover: #991d53;
  --accent-b-weak-default: #ffe8ef;
  --accent-c-default: #f2638c;
  --accent-c-hover: #e3447c;
  --accent-c-weak-default: #ffd4e0;
  --accent-d-default: #753bcc;
  --accent-d-hover: #6732b8;
  --accent-d-weak-default: #f3ebff;
  --accent-e-default: #7da11b;
  --accent-e-hover: #6c8c14;
  --accent-e-weak-default: #eaf2d3;
  --accent-f-default: #ad3907;
  --accent-f-hover: #942e03;
  --accent-f-weak-default: #ffeadb;
  --accent-g-default: #04a4b0;
  --accent-g-hover: #028e99;
  --accent-g-weak-default: #d5f5f5;
  --accent-h-default: #006773;
  --accent-h-hover: #005c66;
  --accent-h-weak-default: #a9ebeb;
  --accent-i-default: #e85fc6;
  --accent-i-hover: #d649b3;
  --accent-i-weak-default: #ffe8f9;
  --accent-j-default: #545c8a;
  --accent-j-hover: #484f7a;
  --accent-j-weak-default: #ebedff;
  --accent-k-default: #21a65f;
  --accent-k-hover: #169855;
  --accent-k-weak-default: #d4f5e1;
  --low-warning-bg-medium-default: #d5f5f5;
  --low-warning-bg-medium-hover: #d5f5f5;
  --low-warning-bg-medium-focus: #d5f5f5;
  --low-warning-bg-medium-active: #d5f5f5;
  --low-warning-bg-medium-disabled: #f7f7f7;
  --low-warning-icon-default: #028e99;
  --low-warning-icon-hover: #028e99;
  --low-warning-icon-focus: #028e99;
  --low-warning-icon-active: #028e99;
  --low-warning-icon-disabled: #d0d4d9;
  --low-warning-icon-in-default: #fff;
  --low-warning-icon-in-hover: #fff;
  --low-warning-icon-in-focus: #fff;
  --low-warning-icon-in-active: #fff;
  --low-warning-icon-in-disabled: #fff;
  --low-warning-border-default: #028e99;
  --low-warning-border-hover: #028e99;
  --low-warning-border-focus: #028e99;
  --low-warning-border-active: #028e99;
  --low-warning-border-disabled: #d0d4d9;
  --in-progress-bg-medium-default: #f3ebff;
  --in-progress-bg-medium-hover: #f3ebff;
  --in-progress-bg-medium-focus: #f3ebff;
  --in-progress-bg-medium-active: #f3ebff;
  --in-progress-bg-medium-disabled: #f7f7f7;
  --in-progress-icon-default: #864ae0;
  --in-progress-icon-hover: #864ae0;
  --in-progress-icon-focus: #864ae0;
  --in-progress-icon-active: #864ae0;
  --in-progress-icon-disabled: #d0d4d9;
  --in-progress-icon-in-default: #fff;
  --in-progress-icon-in-hover: #fff;
  --in-progress-icon-in-focus: #fff;
  --in-progress-icon-in-active: #fff;
  --in-progress-icon-in-disabled: #fff;
  --in-progress-border-default: #864ae0;
  --in-progress-border-hover: #864ae0;
  --in-progress-border-focus: #864ae0;
  --in-progress-border-active: #864ae0;
  --in-progress-border-disabled: #d0d4d9;
  --excellent-bg-medium-default: #e3eeff;
  --excellent-bg-medium-hover: #e3eeff;
  --excellent-bg-medium-focus: #e3eeff;
  --excellent-bg-medium-active: #e3eeff;
  --excellent-bg-medium-disabled: #f7f7f7;
  --excellent-icon-default: #1d69cc;
  --excellent-icon-hover: #1d69cc;
  --excellent-icon-focus: #1d69cc;
  --excellent-icon-active: #1d69cc;
  --excellent-icon-disabled: #d0d4d9;
  --excellent-icon-in-default: #fff;
  --excellent-icon-in-hover: #fff;
  --excellent-icon-in-focus: #fff;
  --excellent-icon-in-active: #fff;
  --excellent-icon-in-disabled: #fff;
  --excellent-border-default: #0d5cbd;
  --excellent-border-hover: #0d5cbd;
  --excellent-border-focus: #0d5cbd;
  --excellent-border-active: #0d5cbd;
  --excellent-border-disabled: #d0d4d9;
  --port-diagram-base-bg-default: #c1c6cc;
  --port-diagram-base-bg-active: #889099;
  --port-diagram-base-bg-medium-default: #d0d4d9;
  --port-diagram-base-bg-medium-active: #c1c6cc;
  --port-diagram-base-bg-weak-default: #f0f1f2;
  --port-diagram-base-border-default: #6f7680;
  --port-diagram-base-border-active: #6f7680;
  --port-diagram-base-border-medium-active: #6f7680;
  --port-diagram-base-border-strong-default: #23282e;
  --port-diagram-base-border-strong-active: #23282e;
  --port-diagram-base-icon-in-default: #373c42;
  --port-diagram-base-icon-in-active: #373c42;
  --port-diagram-full-speed-bg-default: #0570ad;
  --port-diagram-full-speed-bg-active: #03639c;
  --port-diagram-full-speed-bg-medium-default: #9adffc;
  --port-diagram-full-speed-bg-medium-active: #33bbf5;
  --port-diagram-full-speed-border-medium-active: #03639c;
  --port-diagram-full-speed-border-strong-default: #23282e;
  --port-diagram-full-speed-border-strong-active: #23282e;
  --port-diagram-full-speed-icon-in-default: #fff;
  --port-diagram-full-speed-icon-in-active: #fff;
  --port-diagram-disconnected-bg-default: #373c42;
  --port-diagram-disconnected-bg-active: #23282e;
  --port-diagram-disconnected-bg-medium-default: #d0d4d9;
  --port-diagram-disconnected-bg-medium-active: #c1c6cc;
  --port-diagram-disconnected-border-medium-active: #6f7680;
  --port-diagram-disconnected-border-strong-default: #23282e;
  --port-diagram-disconnected-border-strong-active: #23282e;
  --port-diagram-disconnected-icon-in-default: #fff;
  --port-diagram-disconnected-icon-in-active: #fff;
  --port-diagram-reduced-speed-bg-default: #0570ad;
  --port-diagram-reduced-speed-bg-active: #03639c;
  --port-diagram-reduced-speed-bg-medium-default: #0d8bd4;
  --port-diagram-reduced-speed-bg-medium-active: #087abd;
  --port-diagram-reduced-speed-border-default: #fff;
  --port-diagram-reduced-speed-border-active: #fff;
  --port-diagram-reduced-speed-border-medium-active: #03639c;
  --port-diagram-reduced-speed-border-strong-default: #23282e;
  --port-diagram-reduced-speed-border-strong-active: #23282e;
  --port-diagram-reduced-speed-icon-in-default: #fff;
  --port-diagram-reduced-speed-icon-in-active: #fff;
  --port-diagram-warning-bg-default: #b05f04;
  --port-diagram-warning-bg-active: #944b03;
  --port-diagram-warning-bg-medium-default: #f0c243;
  --port-diagram-warning-bg-medium-active: #e0a419;
  --port-diagram-warning-border-medium-active: #944b03;
  --port-diagram-warning-border-strong-default: #23282e;
  --port-diagram-warning-border-strong-active: #23282e;
  --port-diagram-warning-border-default: #fff;
  --port-diagram-warning-icon-in-default: #fff;
  --port-diagram-warning-icon-in-active: #fff;
  --port-diagram-critical-bg-default: #cc2d37;
  --port-diagram-critical-bg-active: #a01d26;
  --port-diagram-critical-bg-medium-default: #ffb2b5;
  --port-diagram-critical-bg-medium-active: #ff878b;
  --port-diagram-critical-border-medium-active: #a01d26;
  --port-diagram-critical-border-strong-default: #23282e;
  --port-diagram-critical-border-strong-active: #23282e;
  --port-diagram-critical-icon-in-default: #fff;
  --port-diagram-critical-icon-in-active: #fff;
  --port-diagram-low-power-bg-default: #b05f04;
  --port-diagram-low-power-bg-active: #944b03;
  --port-diagram-low-power-bg-medium-default: #f0c243;
  --port-diagram-low-power-bg-medium-active: #e0a419;
  --port-diagram-low-power-bg-weak-default: #f5e08e;
  --port-diagram-low-power-bg-weak-active: #f2d268;
  --port-diagram-low-power-border-medium-active: #944b03;
  --port-diagram-low-power-border-strong-default: #23282e;
  --port-diagram-low-power-border-strong-active: #23282e;
  --port-diagram-low-power-icon-in-default: #b05f04;
  --port-diagram-low-power-icon-in-active: #944b03;

  /* light theme -- elevation ( FOR INTERNAL USE ONLY, TEMPORARY ) */
  --elevation-control-default: 0px 3px 8px 0px rgba(0,0,0,0.07843);
  --elevation-control-focus: 0px 0px 0px 2px #cce1ff, 0px 0px 0px 4px #2774d9;
  --elevation-control-select: 0px 0px 0px 2px #3e84e5;
  --elevation-data-viz-focus: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #23282e,
    0px 0px 0px 6px #cce1ff, 0px 0px 0px 8px #3e84e5;
  --elevation-data-viz-select: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #23282e;
  --elevation-floating-default: 0px 4px 12px 0px rgba(0,0,0,0.18039);
  --elevation-invalid-default: 0px 0px 0px 2px #ffd4d5;
  --elevation-invalid-focus: 0px 0px 0px 2px #ffd4d5, 0px 0px 0px 4px #d93843;
  --elevation-lifted-default: 0px 3px 8px 0px rgba(0,0,0,0.07843);
  --elevation-lifted-inset: 10px 0 8px -8px rgba(0,0,0,0.07843) inset;
  --elevation-raised-default: 0px 4px 12px 0px rgba(0,0,0,0.12157);
  --elevation-subtle-default: 0px 2px 5px 0px rgba(0,0,0,0.05098);

  /* color tokens -- data visualizations */
  --data-viz-categorical-1-active: #505ed9;
  --data-viz-categorical-1-default: #505ed9;
  --data-viz-categorical-1-focus: #3b47b2;
  --data-viz-categorical-1-gradient-default: linear-gradient(
    180deg,
    #505ed9 50%,
    #6977f0 100%
  );
  --data-viz-categorical-1-gradient-default-end: #505ed9;
  --data-viz-categorical-1-gradient-default-start: #6977f0;
  --data-viz-categorical-1-hover: #3b47b2;
  --data-viz-categorical-1-weak-gradient-active: linear-gradient(
    180deg,
    #ccd1ff 0%,
    #fff 100%
  );
  --data-viz-categorical-1-weak-gradient-active-end: #ccd1ff;
  --data-viz-categorical-1-weak-gradient-active-start: #fff;
  --data-viz-categorical-1-weak-gradient-default: linear-gradient(
    180deg,
    #ccd1ff 0%,
    #fff 100%
  );
  --data-viz-categorical-1-weak-gradient-default-end: #ccd1ff;
  --data-viz-categorical-1-weak-gradient-default-start: #fff;
  --data-viz-categorical-1-weak-gradient-focus: linear-gradient(
    180deg,
    #bac1ff 0%,
    #ebedff 100%
  );
  --data-viz-categorical-1-weak-gradient-focus-end: #bac1ff;
  --data-viz-categorical-1-weak-gradient-focus-start: #ebedff;
  --data-viz-categorical-1-weak-gradient-hover: linear-gradient(
    180deg,
    #bac1ff 0%,
    #ebedff 100%
  );
  --data-viz-categorical-1-weak-gradient-hover-end: #bac1ff;
  --data-viz-categorical-1-weak-gradient-hover-start: #ebedff;
  --data-viz-categorical-10-active: #545c8a;
  --data-viz-categorical-10-default: #545c8a;
  --data-viz-categorical-10-focus: #484f7a;
  --data-viz-categorical-10-gradient-default: linear-gradient(
    180deg,
    #545c8a 50%,
    #6871a3 100%
  );
  --data-viz-categorical-10-gradient-default-end: #545c8a;
  --data-viz-categorical-10-gradient-default-start: #6871a3;
  --data-viz-categorical-10-hover: #484f7a;
  --data-viz-categorical-10-weak-gradient-active: linear-gradient(
    180deg,
    #ced3f2 0%,
    #fff 100%
  );
  --data-viz-categorical-10-weak-gradient-active-end: #ced3f2;
  --data-viz-categorical-10-weak-gradient-active-start: #fff;
  --data-viz-categorical-10-weak-gradient-default: linear-gradient(
    180deg,
    #ced3f2 0%,
    #fff 100%
  );
  --data-viz-categorical-10-weak-gradient-default-end: #ced3f2;
  --data-viz-categorical-10-weak-gradient-default-start: #fff;
  --data-viz-categorical-10-weak-gradient-focus: linear-gradient(
    180deg,
    #c1c6e8 0%,
    #ebedff 100%
  );
  --data-viz-categorical-10-weak-gradient-focus-end: #c1c6e8;
  --data-viz-categorical-10-weak-gradient-focus-start: #ebedff;
  --data-viz-categorical-10-weak-gradient-hover: linear-gradient(
    180deg,
    #c1c6e8 0%,
    #ebedff 100%
  );
  --data-viz-categorical-10-weak-gradient-hover-end: #c1c6e8;
  --data-viz-categorical-10-weak-gradient-hover-start: #ebedff;
  --data-viz-categorical-11-active: #f26722;
  --data-viz-categorical-11-default: #f26722;
  --data-viz-categorical-11-focus: #c44f14;
  --data-viz-categorical-11-gradient-default: linear-gradient(
    180deg,
    #f26722 50%,
    #fc8d4c 100%
  );
  --data-viz-categorical-11-gradient-default-end: #f26722;
  --data-viz-categorical-11-gradient-default-start: #fc8d4c;
  --data-viz-categorical-11-hover: #c44f14;
  --data-viz-categorical-11-weak-gradient-active: linear-gradient(
    180deg,
    #fcc9a7 0%,
    #fff 100%
  );
  --data-viz-categorical-11-weak-gradient-active-end: #fcc9a7;
  --data-viz-categorical-11-weak-gradient-active-start: #fff;
  --data-viz-categorical-11-weak-gradient-default: linear-gradient(
    180deg,
    #fcc9a7 0%,
    #fff 100%
  );
  --data-viz-categorical-11-weak-gradient-default-end: #fcc9a7;
  --data-viz-categorical-11-weak-gradient-default-start: #fff;
  --data-viz-categorical-11-weak-gradient-focus: linear-gradient(
    180deg,
    #fcb88d 0%,
    #ffeadb 100%
  );
  --data-viz-categorical-11-weak-gradient-focus-end: #fcb88d;
  --data-viz-categorical-11-weak-gradient-focus-start: #ffeadb;
  --data-viz-categorical-11-weak-gradient-hover: linear-gradient(
    180deg,
    #fcb88d 0%,
    #ffeadb 100%
  );
  --data-viz-categorical-11-weak-gradient-hover-end: #fcb88d;
  --data-viz-categorical-11-weak-gradient-hover-start: #ffeadb;
  --data-viz-categorical-12-active: #0b7b46;
  --data-viz-categorical-12-default: #0b7b46;
  --data-viz-categorical-12-focus: #075e39;
  --data-viz-categorical-12-gradient-default: linear-gradient(
    180deg,
    #0b7b46 50%,
    #169855 100%
  );
  --data-viz-categorical-12-gradient-default-end: #0b7b46;
  --data-viz-categorical-12-gradient-default-start: #169855;
  --data-viz-categorical-12-hover: #075e39;
  --data-viz-categorical-12-weak-gradient-active: linear-gradient(
    180deg,
    #97e5b8 0%,
    #fff 100%
  );
  --data-viz-categorical-12-weak-gradient-active-end: #97e5b8;
  --data-viz-categorical-12-weak-gradient-active-start: #fff;
  --data-viz-categorical-12-weak-gradient-default: linear-gradient(
    180deg,
    #97e5b8 0%,
    #fff 100%
  );
  --data-viz-categorical-12-weak-gradient-default-end: #97e5b8;
  --data-viz-categorical-12-weak-gradient-default-start: #fff;
  --data-viz-categorical-12-weak-gradient-focus: linear-gradient(
    180deg,
    #75d9a0 0%,
    #d4f5e1 100%
  );
  --data-viz-categorical-12-weak-gradient-focus-end: #75d9a0;
  --data-viz-categorical-12-weak-gradient-focus-start: #d4f5e1;
  --data-viz-categorical-12-weak-gradient-hover: linear-gradient(
    180deg,
    #75d9a0 0%,
    #d4f5e1 100%
  );
  --data-viz-categorical-12-weak-gradient-hover-end: #75d9a0;
  --data-viz-categorical-12-weak-gradient-hover-start: #d4f5e1;
  --data-viz-categorical-2-active: #04a4b0;
  --data-viz-categorical-2-default: #04a4b0;
  --data-viz-categorical-2-focus: #01818c;
  --data-viz-categorical-2-gradient-default: linear-gradient(
    180deg,
    #04a4b0 50%,
    #17c2c2 100%
  );
  --data-viz-categorical-2-gradient-default-end: #04a4b0;
  --data-viz-categorical-2-gradient-default-start: #17c2c2;
  --data-viz-categorical-2-hover: #01818c;
  --data-viz-categorical-2-weak-gradient-active: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-categorical-2-weak-gradient-active-end: #84e3e3;
  --data-viz-categorical-2-weak-gradient-active-start: #fff;
  --data-viz-categorical-2-weak-gradient-default: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-categorical-2-weak-gradient-default-end: #84e3e3;
  --data-viz-categorical-2-weak-gradient-default-start: #fff;
  --data-viz-categorical-2-weak-gradient-focus: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-categorical-2-weak-gradient-focus-end: #4ad9d9;
  --data-viz-categorical-2-weak-gradient-focus-start: #d5f5f5;
  --data-viz-categorical-2-weak-gradient-hover: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-categorical-2-weak-gradient-hover-end: #4ad9d9;
  --data-viz-categorical-2-weak-gradient-hover-start: #d5f5f5;
  --data-viz-categorical-3-active: #a974f7;
  --data-viz-categorical-3-default: #a974f7;
  --data-viz-categorical-3-focus: #8d4eed;
  --data-viz-categorical-3-gradient-default: linear-gradient(
    180deg,
    #a974f7 50%,
    #c299ff 100%
  );
  --data-viz-categorical-3-gradient-default-end: #a974f7;
  --data-viz-categorical-3-gradient-default-start: #c299ff;
  --data-viz-categorical-3-hover: #8d4eed;
  --data-viz-categorical-3-weak-gradient-active: linear-gradient(
    180deg,
    #e0ccff 0%,
    #fff 100%
  );
  --data-viz-categorical-3-weak-gradient-active-end: #e0ccff;
  --data-viz-categorical-3-weak-gradient-active-start: #fff;
  --data-viz-categorical-3-weak-gradient-default: linear-gradient(
    180deg,
    #e0ccff 0%,
    #fff 100%
  );
  --data-viz-categorical-3-weak-gradient-default-end: #e0ccff;
  --data-viz-categorical-3-weak-gradient-default-start: #fff;
  --data-viz-categorical-3-weak-gradient-focus: linear-gradient(
    180deg,
    #d6baff 0%,
    #f3ebff 100%
  );
  --data-viz-categorical-3-weak-gradient-focus-end: #d6baff;
  --data-viz-categorical-3-weak-gradient-focus-start: #f3ebff;
  --data-viz-categorical-3-weak-gradient-hover: linear-gradient(
    180deg,
    #d6baff 0%,
    #f3ebff 100%
  );
  --data-viz-categorical-3-weak-gradient-hover-end: #d6baff;
  --data-viz-categorical-3-weak-gradient-hover-start: #f3ebff;
  --data-viz-categorical-4-active: #c2306f;
  --data-viz-categorical-4-default: #c2306f;
  --data-viz-categorical-4-focus: #991d53;
  --data-viz-categorical-4-gradient-default: linear-gradient(
    180deg,
    #c2306f 50%,
    #e3447c 100%
  );
  --data-viz-categorical-4-gradient-default-end: #c2306f;
  --data-viz-categorical-4-gradient-default-start: #e3447c;
  --data-viz-categorical-4-hover: #991d53;
  --data-viz-categorical-4-weak-gradient-active: linear-gradient(
    180deg,
    #ffc4d5 0%,
    #fff 100%
  );
  --data-viz-categorical-4-weak-gradient-active-end: #ffc4d5;
  --data-viz-categorical-4-weak-gradient-active-start: #fff;
  --data-viz-categorical-4-weak-gradient-default: linear-gradient(
    180deg,
    #ffc4d5 0%,
    #fff 100%
  );
  --data-viz-categorical-4-weak-gradient-default-end: #ffc4d5;
  --data-viz-categorical-4-weak-gradient-default-start: #fff;
  --data-viz-categorical-4-weak-gradient-focus: linear-gradient(
    180deg,
    #fcb3c8 0%,
    #ffe8ef 100%
  );
  --data-viz-categorical-4-weak-gradient-focus-end: #fcb3c8;
  --data-viz-categorical-4-weak-gradient-focus-start: #ffe8ef;
  --data-viz-categorical-4-weak-gradient-hover: linear-gradient(
    180deg,
    #fcb3c8 0%,
    #ffe8ef 100%
  );
  --data-viz-categorical-4-weak-gradient-hover-end: #fcb3c8;
  --data-viz-categorical-4-weak-gradient-hover-start: #ffe8ef;
  --data-viz-categorical-5-active: #7da11b;
  --data-viz-categorical-5-default: #7da11b;
  --data-viz-categorical-5-focus: #61800e;
  --data-viz-categorical-5-gradient-default: linear-gradient(
    180deg,
    #7da11b 50%,
    #9dba4c 100%
  );
  --data-viz-categorical-5-gradient-default-end: #7da11b;
  --data-viz-categorical-5-gradient-default-start: #9dba4c;
  --data-viz-categorical-5-hover: #61800e;
  --data-viz-categorical-5-weak-gradient-active: linear-gradient(
    180deg,
    #c7de8a 0%,
    #fff 100%
  );
  --data-viz-categorical-5-weak-gradient-active-end: #c7de8a;
  --data-viz-categorical-5-weak-gradient-active-start: #fff;
  --data-viz-categorical-5-weak-gradient-default: linear-gradient(
    180deg,
    #c7de8a 0%,
    #fff 100%
  );
  --data-viz-categorical-5-weak-gradient-default-end: #c7de8a;
  --data-viz-categorical-5-weak-gradient-default-start: #fff;
  --data-viz-categorical-5-weak-gradient-focus: linear-gradient(
    180deg,
    #b5d166 0%,
    #eaf2d3 100%
  );
  --data-viz-categorical-5-weak-gradient-focus-end: #b5d166;
  --data-viz-categorical-5-weak-gradient-focus-start: #eaf2d3;
  --data-viz-categorical-5-weak-gradient-hover: linear-gradient(
    180deg,
    #b5d166 0%,
    #eaf2d3 100%
  );
  --data-viz-categorical-5-weak-gradient-hover-end: #b5d166;
  --data-viz-categorical-5-weak-gradient-hover-start: #eaf2d3;
  --data-viz-categorical-6-active: #864ae0;
  --data-viz-categorical-6-default: #864ae0;
  --data-viz-categorical-6-focus: #6732b8;
  --data-viz-categorical-6-gradient-default: linear-gradient(
    180deg,
    #864ae0 50%,
    #9b5ff5 100%
  );
  --data-viz-categorical-6-gradient-default-end: #864ae0;
  --data-viz-categorical-6-gradient-default-start: #9b5ff5;
  --data-viz-categorical-6-hover: #6732b8;
  --data-viz-categorical-6-weak-gradient-active: linear-gradient(
    180deg,
    #e0ccff 0%,
    #fff 100%
  );
  --data-viz-categorical-6-weak-gradient-active-end: #e0ccff;
  --data-viz-categorical-6-weak-gradient-active-start: #fff;
  --data-viz-categorical-6-weak-gradient-default: linear-gradient(
    180deg,
    #e0ccff 0%,
    #fff 100%
  );
  --data-viz-categorical-6-weak-gradient-default-end: #e0ccff;
  --data-viz-categorical-6-weak-gradient-default-start: #fff;
  --data-viz-categorical-6-weak-gradient-focus: linear-gradient(
    180deg,
    #d6baff 0%,
    #f3ebff 100%
  );
  --data-viz-categorical-6-weak-gradient-focus-end: #d6baff;
  --data-viz-categorical-6-weak-gradient-focus-start: #f3ebff;
  --data-viz-categorical-6-weak-gradient-hover: linear-gradient(
    180deg,
    #d6baff 0%,
    #f3ebff 100%
  );
  --data-viz-categorical-6-weak-gradient-hover-end: #d6baff;
  --data-viz-categorical-6-weak-gradient-hover-start: #f3ebff;
  --data-viz-categorical-7-active: #f2638c;
  --data-viz-categorical-7-default: #f2638c;
  --data-viz-categorical-7-focus: #cf3a7a;
  --data-viz-categorical-7-gradient-default: linear-gradient(
    180deg,
    #f2638c 50%,
    #ff87a9 100%
  );
  --data-viz-categorical-7-gradient-default-end: #f2638c;
  --data-viz-categorical-7-gradient-default-start: #ff87a9;
  --data-viz-categorical-7-hover: #cf3a7a;
  --data-viz-categorical-7-weak-gradient-active: linear-gradient(
    180deg,
    #ffc4d5 0%,
    #fff 100%
  );
  --data-viz-categorical-7-weak-gradient-active-end: #ffc4d5;
  --data-viz-categorical-7-weak-gradient-active-start: #fff;
  --data-viz-categorical-7-weak-gradient-default: linear-gradient(
    180deg,
    #ffc4d5 0%,
    #fff 100%
  );
  --data-viz-categorical-7-weak-gradient-default-end: #ffc4d5;
  --data-viz-categorical-7-weak-gradient-default-start: #fff;
  --data-viz-categorical-7-weak-gradient-focus: linear-gradient(
    180deg,
    #fcb3c8 0%,
    #ffe8ef 100%
  );
  --data-viz-categorical-7-weak-gradient-focus-end: #fcb3c8;
  --data-viz-categorical-7-weak-gradient-focus-start: #ffe8ef;
  --data-viz-categorical-7-weak-gradient-hover: linear-gradient(
    180deg,
    #fcb3c8 0%,
    #ffe8ef 100%
  );
  --data-viz-categorical-7-weak-gradient-hover-end: #fcb3c8;
  --data-viz-categorical-7-weak-gradient-hover-start: #ffe8ef;
  --data-viz-categorical-8-active: #017580;
  --data-viz-categorical-8-default: #017580;
  --data-viz-categorical-8-focus: #005c66;
  --data-viz-categorical-8-gradient-default: linear-gradient(
    180deg,
    #017580 50%,
    #028e99 100%
  );
  --data-viz-categorical-8-gradient-default-end: #017580;
  --data-viz-categorical-8-gradient-default-start: #028e99;
  --data-viz-categorical-8-hover: #005c66;
  --data-viz-categorical-8-weak-gradient-active: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-categorical-8-weak-gradient-active-end: #84e3e3;
  --data-viz-categorical-8-weak-gradient-active-start: #fff;
  --data-viz-categorical-8-weak-gradient-default: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-categorical-8-weak-gradient-default-end: #84e3e3;
  --data-viz-categorical-8-weak-gradient-default-start: #fff;
  --data-viz-categorical-8-weak-gradient-focus: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-categorical-8-weak-gradient-focus-end: #4ad9d9;
  --data-viz-categorical-8-weak-gradient-focus-start: #d5f5f5;
  --data-viz-categorical-8-weak-gradient-hover: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-categorical-8-weak-gradient-hover-end: #4ad9d9;
  --data-viz-categorical-8-weak-gradient-hover-start: #d5f5f5;
  --data-viz-categorical-9-active: #139beb;
  --data-viz-categorical-9-default: #139beb;
  --data-viz-categorical-9-focus: #087abd;
  --data-viz-categorical-9-gradient-default: linear-gradient(
    180deg,
    #139beb 50%,
    #33bbf5 100%
  );
  --data-viz-categorical-9-gradient-default-end: #139beb;
  --data-viz-categorical-9-gradient-default-start: #33bbf5;
  --data-viz-categorical-9-hover: #087abd;
  --data-viz-categorical-9-weak-gradient-active: linear-gradient(
    180deg,
    #9adffc 0%,
    #fff 100%
  );
  --data-viz-categorical-9-weak-gradient-active-end: #9adffc;
  --data-viz-categorical-9-weak-gradient-active-start: #fff;
  --data-viz-categorical-9-weak-gradient-default: linear-gradient(
    180deg,
    #9adffc 0%,
    #fff 100%
  );
  --data-viz-categorical-9-weak-gradient-default-end: #9adffc;
  --data-viz-categorical-9-weak-gradient-default-start: #fff;
  --data-viz-categorical-9-weak-gradient-focus: linear-gradient(
    180deg,
    #6fd2fc 0%,
    #d9f4ff 100%
  );
  --data-viz-categorical-9-weak-gradient-focus-end: #6fd2fc;
  --data-viz-categorical-9-weak-gradient-focus-start: #d9f4ff;
  --data-viz-categorical-9-weak-gradient-hover: linear-gradient(
    180deg,
    #6fd2fc 0%,
    #d9f4ff 100%
  );
  --data-viz-categorical-9-weak-gradient-hover-end: #6fd2fc;
  --data-viz-categorical-9-weak-gradient-hover-start: #d9f4ff;
  --data-viz-dormant-active: #889099;
  --data-viz-dormant-default: #889099;
  --data-viz-dormant-focus: #6f7680;
  --data-viz-dormant-gradient-default: linear-gradient(
    180deg,
    #889099 50%,
    #a7adb5 100%
  );
  --data-viz-dormant-gradient-default-end: #889099;
  --data-viz-dormant-gradient-default-start: #a7adb5;
  --data-viz-dormant-hover: #6f7680;
  --data-viz-dormant-weak-gradient-active: linear-gradient(
    180deg,
    #d0d4d9 0%,
    #fff 100%
  );
  --data-viz-dormant-weak-gradient-active-end: #d0d4d9;
  --data-viz-dormant-weak-gradient-active-start: #fff;
  --data-viz-dormant-weak-gradient-default: linear-gradient(
    180deg,
    #d0d4d9 0%,
    #fff 100%
  );
  --data-viz-dormant-weak-gradient-default-end: #d0d4d9;
  --data-viz-dormant-weak-gradient-default-start: #fff;
  --data-viz-dormant-weak-gradient-focus: linear-gradient(
    180deg,
    #c1c6cc 0%,
    #f0f1f2 100%
  );
  --data-viz-dormant-weak-gradient-focus-end: #c1c6cc;
  --data-viz-dormant-weak-gradient-focus-start: #f0f1f2;
  --data-viz-dormant-weak-gradient-hover: linear-gradient(
    180deg,
    #c1c6cc 0%,
    #f0f1f2 100%
  );
  --data-viz-dormant-weak-gradient-hover-end: #c1c6cc;
  --data-viz-dormant-weak-gradient-hover-start: #f0f1f2;
  --data-viz-excellent-active: #0d5cbd;
  --data-viz-excellent-default: #0d5cbd;
  --data-viz-excellent-focus: #0051af;
  --data-viz-excellent-gradient-default: linear-gradient(
    180deg,
    #0d5cbd 50%,
    #2774d9 100%
  );
  --data-viz-excellent-gradient-default-end: #0d5cbd;
  --data-viz-excellent-gradient-default-start: #2774d9;
  --data-viz-excellent-hover: #0051af;
  --data-viz-excellent-weak-gradient-active: linear-gradient(
    180deg,
    #bad6ff 0%,
    #fff 100%
  );
  --data-viz-excellent-weak-gradient-active-end: #bad6ff;
  --data-viz-excellent-weak-gradient-active-start: #fff;
  --data-viz-excellent-weak-gradient-default: linear-gradient(
    180deg,
    #bad6ff 0%,
    #fff 100%
  );
  --data-viz-excellent-weak-gradient-default-end: #bad6ff;
  --data-viz-excellent-weak-gradient-default-start: #fff;
  --data-viz-excellent-weak-gradient-focus: linear-gradient(
    180deg,
    #a3c8ff 0%,
    #e3eeff 100%
  );
  --data-viz-excellent-weak-gradient-focus-end: #a3c8ff;
  --data-viz-excellent-weak-gradient-focus-start: #e3eeff;
  --data-viz-excellent-weak-gradient-hover: linear-gradient(
    180deg,
    #a3c8ff 0%,
    #e3eeff 100%
  );
  --data-viz-excellent-weak-gradient-hover-end: #a3c8ff;
  --data-viz-excellent-weak-gradient-hover-start: #e3eeff;
  --data-viz-low-warning-active: #028e99;
  --data-viz-low-warning-default: #028e99;
  --data-viz-low-warning-focus: #017580;
  --data-viz-low-warning-gradient-default: linear-gradient(
    180deg,
    #028e99 50%,
    #0bb2b8 100%
  );
  --data-viz-low-warning-gradient-default-end: #028e99;
  --data-viz-low-warning-gradient-default-start: #0bb2b8;
  --data-viz-low-warning-hover: #017580;
  --data-viz-low-warning-weak-gradient-active: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-low-warning-weak-gradient-active-end: #84e3e3;
  --data-viz-low-warning-weak-gradient-active-start: #fff;
  --data-viz-low-warning-weak-gradient-default: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-low-warning-weak-gradient-default-end: #84e3e3;
  --data-viz-low-warning-weak-gradient-default-start: #fff;
  --data-viz-low-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-low-warning-weak-gradient-focus-end: #4ad9d9;
  --data-viz-low-warning-weak-gradient-focus-start: #d5f5f5;
  --data-viz-low-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-low-warning-weak-gradient-hover-end: #4ad9d9;
  --data-viz-low-warning-weak-gradient-hover-start: #d5f5f5;
  --data-viz-negative-active: #cc2d37;
  --data-viz-negative-default: #cc2d37;
  --data-viz-negative-focus: #a01d26;
  --data-viz-negative-gradient-default: linear-gradient(
    180deg,
    #cc2d37 50%,
    #eb4651 100%
  );
  --data-viz-negative-gradient-default-end: #cc2d37;
  --data-viz-negative-gradient-default-start: #eb4651;
  --data-viz-negative-hover: #a01d26;
  --data-viz-negative-weak-gradient-active: linear-gradient(
    180deg,
    #ffc7c9 0%,
    #fff 100%
  );
  --data-viz-negative-weak-gradient-active-end: #ffc7c9;
  --data-viz-negative-weak-gradient-active-start: #fff;
  --data-viz-negative-weak-gradient-default: linear-gradient(
    180deg,
    #ffc7c9 0%,
    #fff 100%
  );
  --data-viz-negative-weak-gradient-default-end: #ffc7c9;
  --data-viz-negative-weak-gradient-default-start: #fff;
  --data-viz-negative-weak-gradient-focus: linear-gradient(
    180deg,
    #ffb2b5 0%,
    #ffe8e9 100%
  );
  --data-viz-negative-weak-gradient-focus-end: #ffb2b5;
  --data-viz-negative-weak-gradient-focus-start: #ffe8e9;
  --data-viz-negative-weak-gradient-hover: linear-gradient(
    180deg,
    #ffb2b5 0%,
    #ffe8e9 100%
  );
  --data-viz-negative-weak-gradient-hover-end: #ffb2b5;
  --data-viz-negative-weak-gradient-hover-start: #ffe8e9;
  --data-viz-positive-active: #139beb;
  --data-viz-positive-default: #139beb;
  --data-viz-positive-focus: #087abd;
  --data-viz-positive-gradient-default: linear-gradient(
    180deg,
    #139beb 50%,
    #33bbf5 100%
  );
  --data-viz-positive-gradient-default-end: #139beb;
  --data-viz-positive-gradient-default-start: #33bbf5;
  --data-viz-positive-hover: #087abd;
  --data-viz-positive-weak-gradient-active: linear-gradient(
    180deg,
    #9adffc 0%,
    #fff 100%
  );
  --data-viz-positive-weak-gradient-active-end: #9adffc;
  --data-viz-positive-weak-gradient-active-start: #fff;
  --data-viz-positive-weak-gradient-default: linear-gradient(
    180deg,
    #9adffc 0%,
    #fff 100%
  );
  --data-viz-positive-weak-gradient-default-end: #9adffc;
  --data-viz-positive-weak-gradient-default-start: #fff;
  --data-viz-positive-weak-gradient-focus: linear-gradient(
    180deg,
    #6fd2fc 0%,
    #d9f4ff 100%
  );
  --data-viz-positive-weak-gradient-focus-end: #6fd2fc;
  --data-viz-positive-weak-gradient-focus-start: #d9f4ff;
  --data-viz-positive-weak-gradient-hover: linear-gradient(
    180deg,
    #6fd2fc 0%,
    #d9f4ff 100%
  );
  --data-viz-positive-weak-gradient-hover-end: #6fd2fc;
  --data-viz-positive-weak-gradient-hover-start: #d9f4ff;
  --data-viz-severe-warning-active: #f26722;
  --data-viz-severe-warning-default: #f26722;
  --data-viz-severe-warning-focus: #c44f14;
  --data-viz-severe-warning-gradient-default: linear-gradient(
    180deg,
    #f26722 50%,
    #fc8d4c 100%
  );
  --data-viz-severe-warning-gradient-default-end: #f26722;
  --data-viz-severe-warning-gradient-default-start: #fc8d4c;
  --data-viz-severe-warning-hover: #c44f14;
  --data-viz-severe-warning-weak-gradient-active: linear-gradient(
    180deg,
    #fcc9a7 0%,
    #fff 100%
  );
  --data-viz-severe-warning-weak-gradient-active-end: #fcc9a7;
  --data-viz-severe-warning-weak-gradient-active-start: #fff;
  --data-viz-severe-warning-weak-gradient-default: linear-gradient(
    180deg,
    #fcc9a7 0%,
    #fff 100%
  );
  --data-viz-severe-warning-weak-gradient-default-end: #fcc9a7;
  --data-viz-severe-warning-weak-gradient-default-start: #fff;
  --data-viz-severe-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #fcb88d 0%,
    #ffeadb 100%
  );
  --data-viz-severe-warning-weak-gradient-focus-end: #fcb88d;
  --data-viz-severe-warning-weak-gradient-focus-start: #ffeadb;
  --data-viz-severe-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #fcb88d 0%,
    #ffeadb 100%
  );
  --data-viz-severe-warning-weak-gradient-hover-end: #fcb88d;
  --data-viz-severe-warning-weak-gradient-hover-start: #ffeadb;
  --data-viz-warning-active: #cc8604;
  --data-viz-warning-default: #cc8604;
  --data-viz-warning-focus: #b05f04;
  --data-viz-warning-gradient-default: linear-gradient(
    180deg,
    #cc8604 50%,
    #e0a419 100%
  );
  --data-viz-warning-gradient-default-end: #cc8604;
  --data-viz-warning-gradient-default-start: #e0a419;
  --data-viz-warning-hover: #b05f04;
  --data-viz-warning-weak-gradient-active: linear-gradient(
    180deg,
    #f2d268 0%,
    #fff 100%
  );
  --data-viz-warning-weak-gradient-active-end: #f2d268;
  --data-viz-warning-weak-gradient-active-start: #fff;
  --data-viz-warning-weak-gradient-default: linear-gradient(
    180deg,
    #f2d268 0%,
    #fff 100%
  );
  --data-viz-warning-weak-gradient-default-end: #f2d268;
  --data-viz-warning-weak-gradient-default-start: #fff;
  --data-viz-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #f0c243 0%,
    #faefb9 100%
  );
  --data-viz-warning-weak-gradient-focus-end: #f0c243;
  --data-viz-warning-weak-gradient-focus-start: #faefb9;
  --data-viz-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #f0c243 0%,
    #faefb9 100%
  );
  --data-viz-warning-weak-gradient-hover-end: #f0c243;
  --data-viz-warning-weak-gradient-hover-start: #faefb9;

  /* token for modal overlay */
  --overlay-bg-default: rgba(0,0,0,0.4);
}

/* Non-token additions for contextual container. */
*[data-mds-theme="light"] [class^="mds-"] {
  color-scheme: light;
}
*[data-mds-theme="light"] [class*=" mds-"] {
  color-scheme: light;
}
`,ce=`/**
 * This file is auto-generated. Do not edit it directly.
 */

*[data-mds-theme="dark-classic"] {
  --brand-bg-default: #373c42;
  --brand-bg-hover: #373c42;
  --brand-bg-focus: #464c54;
  --brand-bg-active: #464c54;
  --brand-bg-disabled: #e1e4e8;
  --brand-bg-gradient-start: #373c42;
  --brand-bg-gradient-end: #0f1214;
  --brand-bg-gradient-default: linear-gradient(90deg, #373c42 0%, #0f1214 100%);
  --brand-bg-strong-default: #373c42;
  --brand-bg-strong-hover: #373c42;
  --brand-bg-strong-focus: #373c42;
  --brand-bg-strong-active: #373c42;
  --brand-text-default: #f7f7f7;
  --brand-text-hover: #f7f7f7;
  --brand-text-active: #f7f7f7;
  --brand-text-weak-default: #f7f7f7;
  --brand-text-weak-hover: #f7f7f7;
  --brand-text-weak-focus: #f7f7f7;
  --brand-text-weak-active: #f7f7f7;
  --brand-text-strong-default: #f0f1f2;
  --brand-icon-default: #f7f7f7;
  --brand-icon-hover: #fff;
  --brand-icon-active: #fff;
  --brand-icon-weak-default: #f7f7f7;
  --brand-icon-weak-hover: #f7f7f7;
  --brand-icon-weak-focus: #f7f7f7;
  --brand-icon-weak-active: #f7f7f7;
  --brand-border-active: #cce1ff;
  --brand-accent-icon-default: #c1c6cc;
  --brand-accent-icon-focus: #fff;
  --brand-accent-icon-active: #6bbf41;
  --brand-accent-icon-disabled: #6f7680;
  --brand-accent-icon-weak-default: #6f7680;
  --brand-accent-icon-weak-focus: #fff;
  --brand-accent-icon-weak-active: #398519;
  --brand-accent-icon-weak-disabled: #fff;
  --brand-accent-icon-medium-default: #979fa8;
  --brand-accent-icon-medium-focus: #fff;
  --brand-accent-icon-medium-active: #52a62b;
  --brand-accent-icon-medium-disabled: #fff;
  --brand-accent-border-default: #52a62b;
  --brand-accent-border-hover: #7e868f;
  --brand-accent-border-focus: #52a62b;
  --brand-accent-border-active: #52a62b;
  --brand-accent-border-weak-default: #d0d4d9;
  --brand-accent-border-weak-hover: #fff;
  --brand-accent-border-weak-focus: #fff;
  --brand-accent-border-weak-active: #398519;
  --brand-accent-border-weak-disabled: #fff;
  --brand-accent-border-medium-default: #596069;
  --brand-accent-border-medium-hover: #fff;
  --brand-accent-border-medium-focus: #fff;
  --brand-accent-border-medium-active: #2b7a0c;
  --brand-accent-border-medium-disabled: #fff;
  --brand-accent-border-strong-default: #0f1214;
  --brand-accent-border-strong-hover: #fff;
  --brand-accent-border-strong-focus: #fff;
  --brand-accent-border-strong-active: #0f1214;
  --brand-accent-border-strong-disabled: #fff;
  --base-bg-default: #0f1214;
  --base-bg-hover: #0f1214;
  --base-bg-active: #0f1214;
  --base-bg-disabled: #464c54;
  --base-bg-weak-default: #23282e;
  --base-bg-weak-hover: #373c42;
  --base-bg-weak-active: #23282e;
  --base-bg-weak-disabled: #464c54;
  --base-bg-medium-default: #373c42;
  --base-bg-medium-hover: #464c54;
  --base-bg-medium-active: #373c42;
  --base-bg-medium-disabled: #e85fc6;
  --base-bg-strong-default: #a7adb5;
  --base-bg-strong-hover: #d0d4d9;
  --base-bg-strong-focus: #d0d4d9;
  --base-bg-strong-active: #d0d4d9;
  --base-bg-strong-disabled: #596069;
  --base-icon-in-default: #23282e;
  --base-icon-in-hover: #23282e;
  --base-icon-in-focus: #23282e;
  --base-icon-in-active: #23282e;
  --base-icon-in-disabled: #6f7680;
  --base-text-default: #f7f7f7;
  --base-text-disabled: #6f7680;
  --base-text-weak-default: #889099;
  --base-text-weak-disabled: #6f7680;
  --base-text-medium-default: #d0d4d9;
  --base-text-medium-disabled: #6f7680;
  --base-text-strong-default: #f0f1f2;
  --base-text-strong-disabled: #6f7680;
  --base-text-in-default: #23282e;
  --base-text-in-hover: #23282e;
  --base-text-in-focus: #23282e;
  --base-text-in-active: #23282e;
  --base-text-in-disabled: #23282e;
  --base-text-in-weak-default: #fff;
  --base-border-default: #596069;
  --base-border-weak-default: #23282e;
  --base-border-medium-default: #464c54;
  --base-border-strong-default: #c1c6cc;
  --base-border-gradient-default: linear-gradient(
    180deg,
    #0f1214 0%,
    #656c75 50%,
    #0f1214 100%
  );
  --inverse-bg-default: #373c42;
  --inverse-bg-hover: #373c42;
  --inverse-bg-focus: #464c54;
  --inverse-bg-active: #464c54;
  --inverse-bg-disabled: #e1e4e8;
  --inverse-bg-gradient-start: #373c42;
  --inverse-bg-gradient-end: #0f1214;
  --inverse-bg-gradient-default: linear-gradient(
    90deg,
    #373c42 0%,
    #0f1214 100%
  );
  --inverse-bg-weak-default: #464c54;
  --inverse-text-default: #f7f7f7;
  --inverse-text-hover: #f7f7f7;
  --inverse-text-focus: #f7f7f7;
  --inverse-text-active: #f7f7f7;
  --inverse-text-disabled: #656c75;
  --inverse-text-medium-default: #c1c6cc;
  --inverse-text-medium-disabled: #656c75;
  --inverse-icon-default: #f7f7f7;
  --inverse-icon-hover: #fff;
  --inverse-icon-focus: #fff;
  --inverse-icon-active: #fff;
  --inverse-icon-disabled: #6f7680;
  --inverse-icon-strong-default: #fff;
  --inverse-icon-strong-hover: #fff;
  --inverse-icon-strong-focus: #fff;
  --inverse-icon-strong-active: #fff;
  --inverse-icon-strong-disabled: #6f7680;
  --inverse-border-default: #6f7680;
  --inverse-border-hover: #649ef5;
  --inverse-border-focus: #cce1ff;
  --inverse-border-active: #cce1ff;
  --inverse-border-disabled: #e1e4e8;
  --control-bg-default: #23282e;
  --control-bg-hover: #2a3442;
  --control-bg-focus: #2a3442;
  --control-bg-active: #2a3442;
  --control-bg-disabled: #373c42;
  --control-bg-weak-default: #23282e;
  --control-bg-weak-hover: #373c42;
  --control-bg-weak-focus: #23282e;
  --control-bg-weak-active: #2a3442;
  --control-bg-weak-disabled: #373c42;
  --control-bg-medium-default: #23282e;
  --control-bg-medium-hover: #373c42;
  --control-bg-medium-focus: #979fa8;
  --control-bg-medium-active: #2a3442;
  --control-bg-medium-disabled: #373c42;
  --control-bg-strong-default: #649ef5;
  --control-bg-strong-hover: #7cadf7;
  --control-bg-strong-focus: #7cadf7;
  --control-bg-strong-active: #7cadf7;
  --control-bg-strong-disabled: #596069;
  --control-icon-default: #649ef5;
  --control-icon-hover: #7cadf7;
  --control-icon-focus: #7cadf7;
  --control-icon-active: #7cadf7;
  --control-icon-disabled: #cce1ff;
  --control-icon-weak-default: #c1c6cc;
  --control-icon-weak-hover: #649ef5;
  --control-icon-weak-focus: #649ef5;
  --control-icon-weak-active: #649ef5;
  --control-icon-weak-disabled: #6f7680;
  --control-icon-medium-default: #649ef5;
  --control-icon-medium-hover: #979fa8;
  --control-icon-medium-focus: #979fa8;
  --control-icon-medium-active: #889099;
  --control-icon-medium-disabled: #e1e4e8;
  --control-icon-strong-default: #d0d4d9;
  --control-icon-strong-hover: #f0f1f2;
  --control-icon-strong-focus: #649ef5;
  --control-icon-strong-active: #649ef5;
  --control-icon-strong-disabled: #6f7680;
  --control-icon-in-default: #23282e;
  --control-icon-in-hover: #23282e;
  --control-icon-in-focus: #23282e;
  --control-icon-in-active: #23282e;
  --control-icon-in-disabled: #6f7680;
  --control-icon-in-strong-default: #649ef5;
  --control-icon-in-strong-hover: #7cadf7;
  --control-icon-in-strong-focus: #7cadf7;
  --control-icon-in-strong-active: #7cadf7;
  --control-icon-in-strong-disabled: #6f7680;
  --control-border-default: #7e868f;
  --control-border-hover: #7cadf7;
  --control-border-focus: #7cadf7;
  --control-border-active: #7cadf7;
  --control-border-disabled: #596069;
  --control-border-weak-default: #656c75;
  --control-border-weak-hover: #7cadf7;
  --control-border-weak-focus: #7cadf7;
  --control-border-weak-active: #7cadf7;
  --control-border-weak-disabled: #596069;
  --control-border-medium-default: #649ef5;
  --control-border-medium-hover: #649ef5;
  --control-border-medium-focus: #649ef5;
  --control-border-medium-active: #649ef5;
  --control-border-medium-disabled: #596069;
  --control-border-strong-default: #c1c6cc;
  --control-border-strong-hover: #656c75;
  --control-border-strong-focus: #656c75;
  --control-border-strong-active: #649ef5;
  --control-border-strong-disabled: #596069;
  --interact-bg-default: #649ef5;
  --interact-bg-hover: #7cadf7;
  --interact-bg-focus: #7cadf7;
  --interact-bg-active: #7cadf7;
  --interact-bg-disabled: #446392;
  --interact-bg-weak-default: #23282e;
  --interact-bg-weak-hover: #2f3d52;
  --interact-bg-weak-focus: #2f3d52;
  --interact-bg-weak-active: #2f3d52;
  --interact-bg-weak-disabled: #464c54;
  --interact-bg-medium-default: #649ef5;
  --interact-bg-medium-hover: #596069;
  --interact-bg-medium-active: #3a5276;
  --interact-bg-strong-hover: #596069;
  --interact-bg-strong-active: #596069;
  --interact-text-default: #649ef5;
  --interact-text-hover: #7cadf7;
  --interact-text-focus: #7cadf7;
  --interact-text-active: #7cadf7;
  --interact-text-disabled: #446392;
  --interact-text-weak-default: #c1c6cc;
  --interact-text-weak-hover: #649ef5;
  --interact-text-weak-focus: #649ef5;
  --interact-text-weak-active: #649ef5;
  --interact-text-weak-disabled: #6f7680;
  --interact-text-in-default: #23282e;
  --interact-text-in-hover: #23282e;
  --interact-text-in-focus: #23282e;
  --interact-text-in-active: #23282e;
  --interact-text-in-disabled: #23282e;
  --interact-icon-default: #649ef5;
  --interact-icon-hover: #7cadf7;
  --interact-icon-focus: #7cadf7;
  --interact-icon-active: #7cadf7;
  --interact-icon-disabled: #446392;
  --interact-icon-weak-default: #c1c6cc;
  --interact-icon-weak-hover: #d0d4d9;
  --interact-icon-weak-focus: #d0d4d9;
  --interact-icon-weak-active: #d0d4d9;
  --interact-icon-weak-disabled: #6f7680;
  --interact-icon-medium-default: #c1c6cc;
  --interact-icon-medium-hover: #649ef5;
  --interact-icon-medium-focus: #649ef5;
  --interact-icon-medium-active: #649ef5;
  --interact-icon-medium-disabled: #6f7680;
  --interact-icon-strong-default: #d0d4d9;
  --interact-icon-strong-hover: #f0f1f2;
  --interact-icon-strong-focus: #f0f1f2;
  --interact-icon-strong-active: #f0f1f2;
  --interact-icon-strong-disabled: #6f7680;
  --interact-icon-in-default: #23282e;
  --interact-icon-in-hover: #23282e;
  --interact-icon-in-focus: #23282e;
  --interact-icon-in-active: #23282e;
  --interact-icon-in-disabled: #23282e;
  --interact-border-default: #649ef5;
  --interact-border-hover: #7cadf7;
  --interact-border-focus: #7cadf7;
  --interact-border-active: #7cadf7;
  --interact-border-disabled: #446392;
  --interact-border-weak-default: #656c75;
  --interact-border-weak-hover: #cce1ff;
  --interact-border-weak-focus: #e1e4e8;
  --interact-border-weak-active: #e1e4e8;
  --interact-border-weak-disabled: #596069;
  --interact-border-medium-default: #649ef5;
  --interact-border-medium-hover: #a3c8ff;
  --interact-border-medium-focus: #649ef5;
  --interact-border-medium-active: #649ef5;
  --interact-border-medium-disabled: #e1e4e8;
  --positive-bg-default: #6bbf41;
  --positive-bg-hover: #6bbf41;
  --positive-bg-focus: #6bbf41;
  --positive-bg-active: #6bbf41;
  --positive-bg-disabled: #6bbf41;
  --positive-bg-weak-default: #23282e;
  --positive-bg-weak-hover: #23282e;
  --positive-bg-weak-focus: #23282e;
  --positive-bg-weak-active: #23282e;
  --positive-bg-weak-disabled: #23282e;
  --positive-bg-medium-default: #395534;
  --positive-bg-medium-hover: #395534;
  --positive-bg-medium-focus: #395534;
  --positive-bg-medium-active: #395534;
  --positive-bg-medium-disabled: #373c42;
  --positive-bg-strong-default: #23381e;
  --positive-icon-default: #6bbf41;
  --positive-icon-hover: #6bbf41;
  --positive-icon-focus: #6bbf41;
  --positive-icon-active: #6bbf41;
  --positive-icon-disabled: #596069;
  --positive-icon-weak-default: #6bbf41;
  --positive-icon-weak-hover: #6bbf41;
  --positive-icon-weak-focus: #6bbf41;
  --positive-icon-weak-active: #6bbf41;
  --positive-icon-weak-disabled: #596069;
  --positive-icon-strong-default: #6bbf41;
  --positive-icon-strong-hover: #6bbf41;
  --positive-icon-strong-focus: #6bbf41;
  --positive-icon-strong-active: #6bbf41;
  --positive-icon-strong-disabled: #477438;
  --positive-icon-in-default: #23282e;
  --positive-icon-in-hover: #23282e;
  --positive-icon-in-focus: #23282e;
  --positive-icon-in-active: #23282e;
  --positive-icon-in-disabled: #23282e;
  --positive-border-default: #6bbf41;
  --positive-border-hover: #6bbf41;
  --positive-border-focus: #6bbf41;
  --positive-border-active: #6bbf41;
  --positive-border-disabled: #6bbf41;
  --positive-border-weak-default: #23282e;
  --positive-border-weak-hover: #6bbf41;
  --positive-border-weak-focus: #6bbf41;
  --positive-border-weak-active: #6bbf41;
  --positive-border-weak-disabled: #596069;
  --positive-border-strong-default: #f7f7f7;
  --positive-border-strong-hover: #f7f7f7;
  --positive-border-strong-focus: #f7f7f7;
  --positive-border-strong-active: #f7f7f7;
  --positive-border-strong-disabled: #f7f7f7;
  --positive-text-in-default: #23282e;
  --positive-text-in-hover: #23282e;
  --positive-text-in-focus: #23282e;
  --positive-text-in-active: #23282e;
  --positive-text-in-disabled: #23282e;
  --warning-bg-default: #f0c243;
  --warning-bg-hover: #f0c243;
  --warning-bg-focus: #f0c243;
  --warning-bg-active: #f0c243;
  --warning-bg-disabled: #f0c243;
  --warning-bg-weak-default: #23282e;
  --warning-bg-weak-hover: #23282e;
  --warning-bg-weak-focus: #23282e;
  --warning-bg-weak-active: #23282e;
  --warning-bg-weak-disabled: #23282e;
  --warning-bg-medium-default: #5c4d28;
  --warning-bg-medium-hover: #5c4d28;
  --warning-bg-medium-focus: #5c4d28;
  --warning-bg-medium-active: #5c4d28;
  --warning-bg-medium-disabled: #373c42;
  --warning-bg-strong-default: #35301c;
  --warning-icon-default: #f0c243;
  --warning-icon-hover: #f0c243;
  --warning-icon-focus: #f0c243;
  --warning-icon-active: #f0c243;
  --warning-icon-disabled: #596069;
  --warning-icon-strong-default: #f0c243;
  --warning-icon-strong-hover: #f0c243;
  --warning-icon-strong-focus: #f0c243;
  --warning-icon-strong-active: #f0c243;
  --warning-icon-strong-disabled: #f0c243;
  --warning-icon-in-default: #23282e;
  --warning-icon-in-hover: #23282e;
  --warning-icon-in-focus: #23282e;
  --warning-icon-in-active: #23282e;
  --warning-icon-in-disabled: #23282e;
  --warning-border-default: #f0c243;
  --warning-border-hover: #f0c243;
  --warning-border-focus: #f0c243;
  --warning-border-active: #f0c243;
  --warning-border-disabled: #f0c243;
  --warning-border-weak-default: #23282e;
  --warning-border-weak-hover: #23282e;
  --warning-border-weak-focus: #23282e;
  --warning-border-weak-active: #23282e;
  --warning-border-weak-disabled: #596069;
  --warning-border-strong-default: #f7f7f7;
  --warning-border-strong-hover: #f7f7f7;
  --warning-border-strong-focus: #f7f7f7;
  --warning-border-strong-active: #f7f7f7;
  --warning-border-strong-disabled: #f7f7f7;
  --warning-text-in-default: #23282e;
  --warning-text-in-hover: #23282e;
  --warning-text-in-focus: #23282e;
  --warning-text-in-active: #23282e;
  --warning-text-in-disabled: #23282e;
  --severe-warning-bg-default: #f7782f;
  --severe-warning-bg-hover: #f7782f;
  --severe-warning-bg-focus: #f7782f;
  --severe-warning-bg-active: #f7782f;
  --severe-warning-bg-disabled: #f7782f;
  --severe-warning-bg-weak-default: #23282e;
  --severe-warning-bg-weak-hover: #23282e;
  --severe-warning-bg-weak-focus: #23282e;
  --severe-warning-bg-weak-active: #23282e;
  --severe-warning-bg-weak-disabled: #23282e;
  --severe-warning-bg-medium-default: #644637;
  --severe-warning-bg-medium-hover: #644637;
  --severe-warning-bg-medium-focus: #644637;
  --severe-warning-bg-medium-active: #644637;
  --severe-warning-bg-medium-disabled: #373c42;
  --severe-warning-bg-strong-default: #462e21;
  --severe-warning-icon-default: #f7782f;
  --severe-warning-icon-hover: #f7782f;
  --severe-warning-icon-focus: #f7782f;
  --severe-warning-icon-active: #f7782f;
  --severe-warning-icon-disabled: #596069;
  --severe-warning-icon-strong-default: #fc8d4c;
  --severe-warning-icon-strong-hover: #fc8d4c;
  --severe-warning-icon-strong-focus: #fc8d4c;
  --severe-warning-icon-strong-active: #fc8d4c;
  --severe-warning-icon-strong-disabled: #fc8d4c;
  --severe-warning-icon-in-default: #23282e;
  --severe-warning-icon-in-hover: #23282e;
  --severe-warning-icon-in-focus: #23282e;
  --severe-warning-icon-in-active: #23282e;
  --severe-warning-icon-in-disabled: #23282e;
  --severe-warning-border-default: #f7782f;
  --severe-warning-border-hover: #f7782f;
  --severe-warning-border-focus: #f7782f;
  --severe-warning-border-active: #f7782f;
  --severe-warning-border-disabled: #f7782f;
  --severe-warning-border-weak-default: #23282e;
  --severe-warning-border-weak-hover: #23282e;
  --severe-warning-border-weak-focus: #23282e;
  --severe-warning-border-weak-active: #23282e;
  --severe-warning-border-weak-disabled: #596069;
  --negative-bg-default: #fa5762;
  --negative-bg-hover: #ff6e72;
  --negative-bg-focus: #ff6e72;
  --negative-bg-active: #ff6e72;
  --negative-bg-disabled: #8f3f48;
  --negative-bg-weak-default: #23282e;
  --negative-bg-weak-hover: #984952;
  --negative-bg-weak-focus: #984952;
  --negative-bg-weak-active: #984952;
  --negative-bg-weak-disabled: #373c42;
  --negative-bg-medium-default: #63363e;
  --negative-bg-medium-hover: #63363e;
  --negative-bg-medium-focus: #63363e;
  --negative-bg-medium-active: #63363e;
  --negative-bg-medium-disabled: #373c42;
  --negative-bg-strong-default: #46272a;
  --negative-text-default: #fa5762;
  --negative-text-hover: #ff878b;
  --negative-text-focus: #ff878b;
  --negative-text-active: #ff878b;
  --negative-text-disabled: #8f3f48;
  --negative-text-in-default: #23282e;
  --negative-text-in-hover: #23282e;
  --negative-text-in-focus: #23282e;
  --negative-text-in-active: #23282e;
  --negative-text-in-disabled: #23282e;
  --negative-icon-default: #fa5762;
  --negative-icon-hover: #ff878b;
  --negative-icon-focus: #ff878b;
  --negative-icon-active: #ff878b;
  --negative-icon-disabled: #8f3f48;
  --negative-icon-weak-default: #ffb2b5;
  --negative-icon-weak-hover: #ffb2b5;
  --negative-icon-weak-focus: #ffb2b5;
  --negative-icon-weak-active: #ffb2b5;
  --negative-icon-weak-disabled: #596069;
  --negative-icon-in-default: #23282e;
  --negative-icon-in-hover: #23282e;
  --negative-icon-in-focus: #23282e;
  --negative-icon-in-active: #23282e;
  --negative-icon-in-disabled: #23282e;
  --negative-border-default: #fa5762;
  --negative-border-hover: #ff878b;
  --negative-border-focus: #ff878b;
  --negative-border-active: #ff878b;
  --negative-border-disabled: #914b50;
  --negative-border-weak-default: #23282e;
  --negative-border-weak-hover: #23282e;
  --negative-border-weak-focus: #23282e;
  --negative-border-weak-active: #23282e;
  --negative-border-weak-disabled: #596069;
  --negative-border-medium-default: #eb4651;
  --negative-border-medium-hover: #ff878b;
  --negative-border-medium-focus: #ff878b;
  --negative-border-medium-active: #ff878b;
  --negative-border-medium-disabled: #8f3f48;
  --negative-border-strong-default: #f7f7f7;
  --negative-border-strong-hover: #fff;
  --negative-border-strong-focus: #f7f7f7;
  --negative-border-strong-active: #f7f7f7;
  --negative-border-strong-disabled: #f7f7f7;
  --info-bg-default: #7cadf7;
  --info-bg-hover: #7cadf7;
  --info-bg-focus: #7cadf7;
  --info-bg-active: #7cadf7;
  --info-bg-disabled: #7cadf7;
  --info-bg-weak-default: #23282e;
  --info-bg-weak-hover: #23282e;
  --info-bg-weak-focus: #23282e;
  --info-bg-weak-active: #23282e;
  --info-bg-weak-disabled: #23282e;
  --info-bg-medium-default: #3e506a;
  --info-bg-medium-hover: #3e506a;
  --info-bg-medium-focus: #3e506a;
  --info-bg-medium-active: #3e506a;
  --info-bg-medium-disabled: #373c42;
  --info-bg-strong-default: #283648;
  --info-icon-default: #7cadf7;
  --info-icon-hover: #7cadf7;
  --info-icon-focus: #7cadf7;
  --info-icon-active: #7cadf7;
  --info-icon-disabled: #596069;
  --info-icon-weak-default: #7cadf7;
  --info-icon-weak-hover: #7cadf7;
  --info-icon-weak-focus: #7cadf7;
  --info-icon-weak-active: #7cadf7;
  --info-icon-weak-disabled: #596069;
  --info-icon-in-default: #23282e;
  --info-icon-in-hover: #23282e;
  --info-icon-in-focus: #23282e;
  --info-icon-in-active: #23282e;
  --info-icon-in-disabled: #23282e;
  --info-border-default: #7cadf7;
  --info-border-hover: #7cadf7;
  --info-border-focus: #7cadf7;
  --info-border-active: #7cadf7;
  --info-border-disabled: #7cadf7;
  --info-border-weak-default: #23282e;
  --info-border-weak-hover: #23282e;
  --info-border-weak-focus: #23282e;
  --info-border-weak-active: #23282e;
  --info-border-weak-disabled: #596069;
  --dormant-bg-default: #6f7680;
  --dormant-bg-disabled: #6f7680;
  --dormant-bg-medium-default: #464c54;
  --dormant-bg-medium-disabled: #373c42;
  --dormant-icon-default: #c1c6cc;
  --dormant-icon-disabled: #596069;
  --dormant-icon-medium-default: #fff;
  --dormant-icon-in-default: #23282e;
  --dormant-icon-in-disabled: #23282e;
  --dormant-icon-in-medium-default: #23282e;
  --dormant-border-default: #a7adb5;
  --dormant-border-disabled: #596069;
  --accent-a-default: #9ca6ff;
  --accent-a-hover: #8a95ff;
  --accent-a-weak-default: #4d5477;
  --accent-b-default: #e3447c;
  --accent-b-hover: #cf3a7a;
  --accent-b-weak-default: #704959;
  --accent-c-default: #fcb3c8;
  --accent-c-hover: #ff87a9;
  --accent-c-weak-default: #6f5964;
  --accent-d-default: #9b5ff5;
  --accent-d-hover: #8d4eed;
  --accent-d-weak-default: #5b5077;
  --accent-e-default: #9dba4c;
  --accent-e-hover: #89ab2c;
  --accent-e-weak-default: #4e5b39;
  --accent-f-default: #d95a1a;
  --accent-f-hover: #c44f14;
  --accent-f-weak-default: #6f4b39;
  --accent-g-default: #4ad9d9;
  --accent-g-hover: #17c2c2;
  --accent-g-weak-default: #1f5e62;
  --accent-h-default: #028e99;
  --accent-h-hover: #01818c;
  --accent-h-weak-default: #456a6d;
  --accent-i-default: #f582d8;
  --accent-i-hover: #f26dd1;
  --accent-i-weak-default: #6c476a;
  --accent-j-default: #767eb2;
  --accent-j-hover: #6871a3;
  --accent-j-weak-default: #505569;
  --accent-k-default: #4cbf7f;
  --accent-k-hover: #36b26e;
  --accent-k-weak-default: #315d4a;
  --in-progress-bg-medium-default: #3e506a;
  --in-progress-bg-medium-hover: #3e506a;
  --in-progress-bg-medium-focus: #3e506a;
  --in-progress-bg-medium-active: #3e506a;
  --in-progress-bg-medium-disabled: #373c42;
  --in-progress-icon-default: #7cadf7;
  --in-progress-icon-hover: #7cadf7;
  --in-progress-icon-focus: #7cadf7;
  --in-progress-icon-active: #7cadf7;
  --in-progress-icon-disabled: #596069;
  --in-progress-icon-in-default: #23282e;
  --in-progress-icon-in-hover: #23282e;
  --in-progress-icon-in-focus: #23282e;
  --in-progress-icon-in-active: #23282e;
  --in-progress-icon-in-disabled: #23282e;
  --in-progress-border-default: #7cadf7;
  --in-progress-border-hover: #7cadf7;
  --in-progress-border-focus: #7cadf7;
  --in-progress-border-active: #7cadf7;
  --in-progress-border-disabled: #7cadf7;
  --low-warning-bg-medium-default: #1f565b;
  --low-warning-bg-medium-hover: #1f565b;
  --low-warning-bg-medium-focus: #1f565b;
  --low-warning-bg-medium-active: #1f565b;
  --low-warning-bg-medium-disabled: #373c42;
  --low-warning-icon-default: #0bb2b8;
  --low-warning-icon-hover: #0bb2b8;
  --low-warning-icon-focus: #0bb2b8;
  --low-warning-icon-active: #0bb2b8;
  --low-warning-icon-disabled: #596069;
  --low-warning-icon-in-default: #23282e;
  --low-warning-icon-in-hover: #23282e;
  --low-warning-icon-in-focus: #23282e;
  --low-warning-icon-in-active: #23282e;
  --low-warning-icon-in-disabled: #23282e;
  --low-warning-border-default: #0bb2b8;
  --low-warning-border-hover: #0bb2b8;
  --low-warning-border-focus: #0bb2b8;
  --low-warning-border-active: #0bb2b8;
  --low-warning-border-disabled: #0bb2b8;
  --excellent-bg-medium-default: #2f5546;
  --excellent-bg-medium-hover: #2f5546;
  --excellent-bg-medium-focus: #2f5546;
  --excellent-bg-medium-active: #2f5546;
  --excellent-bg-medium-disabled: #373c42;
  --excellent-icon-default: #4cbf7f;
  --excellent-icon-hover: #4cbf7f;
  --excellent-icon-focus: #4cbf7f;
  --excellent-icon-active: #4cbf7f;
  --excellent-icon-disabled: #596069;
  --excellent-icon-in-default: #23282e;
  --excellent-icon-in-hover: #23282e;
  --excellent-icon-in-focus: #23282e;
  --excellent-icon-in-active: #23282e;
  --excellent-icon-in-disabled: #23282e;
  --excellent-border-default: #4cbf7f;
  --excellent-border-hover: #4cbf7f;
  --excellent-border-focus: #4cbf7f;
  --excellent-border-active: #4cbf7f;
  --excellent-border-disabled: #4cbf7f;
  --port-diagram-base-bg-default: #c1c6cc;
  --port-diagram-base-bg-active: #889099;
  --port-diagram-base-bg-medium-default: #d0d4d9;
  --port-diagram-base-bg-medium-active: #c1c6cc;
  --port-diagram-base-bg-weak-default: #f0f1f2;
  --port-diagram-base-border-default: #6f7680;
  --port-diagram-base-border-active: #6f7680;
  --port-diagram-base-border-medium-active: #6f7680;
  --port-diagram-base-border-strong-default: #23282e;
  --port-diagram-base-border-strong-active: #23282e;
  --port-diagram-base-icon-in-default: #373c42;
  --port-diagram-base-icon-in-active: #373c42;
  --port-diagram-full-speed-bg-default: #2b7a0c;
  --port-diagram-full-speed-bg-active: #266b0b;
  --port-diagram-full-speed-bg-medium-default: #b0e396;
  --port-diagram-full-speed-bg-medium-active: #6bbf41;
  --port-diagram-full-speed-border-medium-active: #266b0b;
  --port-diagram-full-speed-border-strong-default: #23282e;
  --port-diagram-full-speed-border-strong-active: #23282e;
  --port-diagram-full-speed-icon-in-default: #fff;
  --port-diagram-full-speed-icon-in-active: #fff;
  --port-diagram-disconnected-bg-default: #373c42;
  --port-diagram-disconnected-bg-active: #23282e;
  --port-diagram-disconnected-bg-medium-default: #d0d4d9;
  --port-diagram-disconnected-bg-medium-active: #c1c6cc;
  --port-diagram-disconnected-border-medium-active: #6f7680;
  --port-diagram-disconnected-border-strong-default: #23282e;
  --port-diagram-disconnected-border-strong-active: #23282e;
  --port-diagram-disconnected-icon-in-default: #fff;
  --port-diagram-disconnected-icon-in-active: #fff;
  --port-diagram-reduced-speed-bg-default: #2b7a0c;
  --port-diagram-reduced-speed-bg-active: #266b0b;
  --port-diagram-reduced-speed-bg-medium-default: #45991f;
  --port-diagram-reduced-speed-bg-medium-active: #398519;
  --port-diagram-reduced-speed-border-default: #fff;
  --port-diagram-reduced-speed-border-active: #fff;
  --port-diagram-reduced-speed-border-medium-active: #266b0b;
  --port-diagram-reduced-speed-border-strong-default: #23282e;
  --port-diagram-reduced-speed-border-strong-active: #23282e;
  --port-diagram-reduced-speed-icon-in-default: #fff;
  --port-diagram-reduced-speed-icon-in-active: #fff;
  --port-diagram-warning-bg-default: #b05f04;
  --port-diagram-warning-bg-active: #944b03;
  --port-diagram-warning-bg-medium-default: #f0c243;
  --port-diagram-warning-bg-medium-active: #e0a419;
  --port-diagram-warning-border-medium-active: #944b03;
  --port-diagram-warning-border-strong-default: #23282e;
  --port-diagram-warning-border-strong-active: #23282e;
  --port-diagram-warning-border-default: #fff;
  --port-diagram-warning-icon-in-default: #fff;
  --port-diagram-warning-icon-in-active: #fff;
  --port-diagram-critical-bg-default: #cc2d37;
  --port-diagram-critical-bg-active: #a01d26;
  --port-diagram-critical-bg-medium-default: #ffb2b5;
  --port-diagram-critical-bg-medium-active: #ff878b;
  --port-diagram-critical-border-medium-active: #a01d26;
  --port-diagram-critical-border-strong-default: #23282e;
  --port-diagram-critical-border-strong-active: #23282e;
  --port-diagram-critical-icon-in-default: #fff;
  --port-diagram-critical-icon-in-active: #fff;
  --port-diagram-low-power-bg-default: #b05f04;
  --port-diagram-low-power-bg-active: #944b03;
  --port-diagram-low-power-bg-medium-default: #f0c243;
  --port-diagram-low-power-bg-medium-active: #e0a419;
  --port-diagram-low-power-bg-weak-default: #f5e08e;
  --port-diagram-low-power-bg-weak-active: #f2d268;
  --port-diagram-low-power-border-medium-active: #944b03;
  --port-diagram-low-power-border-strong-default: #23282e;
  --port-diagram-low-power-border-strong-active: #23282e;
  --port-diagram-low-power-icon-in-default: #b05f04;
  --port-diagram-low-power-icon-in-active: #944b03;

  /* dark classic theme -- elevation ( FOR INTERNAL USE ONLY, TEMPORARY ) */
  --elevation-control-default: 0px 3px 8px 0px rgba(0,0,0,0.47843);
  --elevation-control-focus: 0px 0px 0px 2px #446392, 0px 0px 0px 4px #649ef5;
  --elevation-control-select: 0px 0px 0px 2px #7cadf7;
  --elevation-data-viz-focus: 0px 0px 0px 2px #23282e, 0px 0px 0px 4px #fff,
    0px 0px 0px 6px #446392, 0px 0px 0px 8px #7cadf7;
  --elevation-data-viz-select: 0px 0px 0px 2px #23282e, 0px 0px 0px 4px #fff;
  --elevation-floating-default: 0px 4px 12px 0px rgba(0,0,0,0.78039);
  --elevation-invalid-default: 0px 0px 0px 2px #914b50;
  --elevation-invalid-focus: 0px 0px 0px 2px #914b50, 0px 0px 0px 4px #ff878b;
  --elevation-lifted-default: 0px 3px 8px 0px rgba(0,0,0,0.47843);
  --elevation-lifted-inset: 10px 0 8px -8px rgba(0,0,0,0.47843) inset;
  --elevation-raised-default: 0px 4px 12px 0px rgba(0,0,0,0.61961);
  --elevation-subtle-default: 0px 2px 5px 0px rgba(0,0,0,0.34902);

  /* color tokens -- data visualizations */
  --data-viz-categorical-1-active: #6977f0;
  --data-viz-categorical-1-default: #6977f0;
  --data-viz-categorical-1-focus: #bac1ff;
  --data-viz-categorical-1-gradient-default: linear-gradient(
    180deg,
    #6977f0 50%,
    #4653c7 100%
  );
  --data-viz-categorical-1-gradient-default-end: #6977f0;
  --data-viz-categorical-1-gradient-default-start: #4653c7;
  --data-viz-categorical-1-hover: #bac1ff;
  --data-viz-categorical-1-weak-gradient-active: linear-gradient(
    180deg,
    #384068 0%,
    #23282e 100%
  );
  --data-viz-categorical-1-weak-gradient-active-end: #384068;
  --data-viz-categorical-1-weak-gradient-active-start: #23282e;
  --data-viz-categorical-1-weak-gradient-default: linear-gradient(
    180deg,
    #384068 0%,
    #23282e 100%
  );
  --data-viz-categorical-1-weak-gradient-default-end: #384068;
  --data-viz-categorical-1-weak-gradient-default-start: #23282e;
  --data-viz-categorical-1-weak-gradient-focus: linear-gradient(
    180deg,
    #46508f 0%,
    #23282e 100%
  );
  --data-viz-categorical-1-weak-gradient-focus-end: #46508f;
  --data-viz-categorical-1-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-1-weak-gradient-hover: linear-gradient(
    180deg,
    #46508f 0%,
    #23282e 100%
  );
  --data-viz-categorical-1-weak-gradient-hover-end: #46508f;
  --data-viz-categorical-1-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-10-active: #767eb2;
  --data-viz-categorical-10-default: #767eb2;
  --data-viz-categorical-10-focus: #c1c6e8;
  --data-viz-categorical-10-gradient-default: linear-gradient(
    180deg,
    #767eb2 50%,
    #545c8a 100%
  );
  --data-viz-categorical-10-gradient-default-end: #767eb2;
  --data-viz-categorical-10-gradient-default-start: #545c8a;
  --data-viz-categorical-10-hover: #c1c6e8;
  --data-viz-categorical-10-weak-gradient-active: linear-gradient(
    180deg,
    #3c4256 0%,
    #23282e 100%
  );
  --data-viz-categorical-10-weak-gradient-active-end: #3c4256;
  --data-viz-categorical-10-weak-gradient-active-start: #23282e;
  --data-viz-categorical-10-weak-gradient-default: linear-gradient(
    180deg,
    #3c4256 0%,
    #23282e 100%
  );
  --data-viz-categorical-10-weak-gradient-default-end: #3c4256;
  --data-viz-categorical-10-weak-gradient-default-start: #23282e;
  --data-viz-categorical-10-weak-gradient-focus: linear-gradient(
    180deg,
    #4d5370 0%,
    #23282e 100%
  );
  --data-viz-categorical-10-weak-gradient-focus-end: #4d5370;
  --data-viz-categorical-10-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-10-weak-gradient-hover: linear-gradient(
    180deg,
    #4d5370 0%,
    #23282e 100%
  );
  --data-viz-categorical-10-weak-gradient-hover-end: #4d5370;
  --data-viz-categorical-10-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-11-active: #fc8d4c;
  --data-viz-categorical-11-default: #fc8d4c;
  --data-viz-categorical-11-focus: #ffd9bf;
  --data-viz-categorical-11-gradient-default: linear-gradient(
    180deg,
    #fc8d4c 50%,
    #d95a1a 100%
  );
  --data-viz-categorical-11-gradient-default-end: #fc8d4c;
  --data-viz-categorical-11-gradient-default-start: #d95a1a;
  --data-viz-categorical-11-hover: #ffd9bf;
  --data-viz-categorical-11-weak-gradient-active: linear-gradient(
    180deg,
    #644637 0%,
    #23282e 100%
  );
  --data-viz-categorical-11-weak-gradient-active-end: #644637;
  --data-viz-categorical-11-weak-gradient-active-start: #23282e;
  --data-viz-categorical-11-weak-gradient-default: linear-gradient(
    180deg,
    #644637 0%,
    #23282e 100%
  );
  --data-viz-categorical-11-weak-gradient-default-end: #644637;
  --data-viz-categorical-11-weak-gradient-default-start: #23282e;
  --data-viz-categorical-11-weak-gradient-focus: linear-gradient(
    180deg,
    #8f5b3d 0%,
    #23282e 100%
  );
  --data-viz-categorical-11-weak-gradient-focus-end: #8f5b3d;
  --data-viz-categorical-11-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-11-weak-gradient-hover: linear-gradient(
    180deg,
    #8f5b3d 0%,
    #23282e 100%
  );
  --data-viz-categorical-11-weak-gradient-hover-end: #8f5b3d;
  --data-viz-categorical-11-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-12-active: #169855;
  --data-viz-categorical-12-default: #169855;
  --data-viz-categorical-12-focus: #75d9a0;
  --data-viz-categorical-12-gradient-default: linear-gradient(
    180deg,
    #169855 50%,
    #087041 100%
  );
  --data-viz-categorical-12-gradient-default-end: #169855;
  --data-viz-categorical-12-gradient-default-start: #087041;
  --data-viz-categorical-12-hover: #75d9a0;
  --data-viz-categorical-12-weak-gradient-active: linear-gradient(
    180deg,
    #1f4a3a 0%,
    #23282e 100%
  );
  --data-viz-categorical-12-weak-gradient-active-end: #1f4a3a;
  --data-viz-categorical-12-weak-gradient-active-start: #23282e;
  --data-viz-categorical-12-weak-gradient-default: linear-gradient(
    180deg,
    #1f4a3a 0%,
    #23282e 100%
  );
  --data-viz-categorical-12-weak-gradient-default-end: #1f4a3a;
  --data-viz-categorical-12-weak-gradient-default-start: #23282e;
  --data-viz-categorical-12-weak-gradient-focus: linear-gradient(
    180deg,
    #1d6042 0%,
    #23282e 100%
  );
  --data-viz-categorical-12-weak-gradient-focus-end: #1d6042;
  --data-viz-categorical-12-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-12-weak-gradient-hover: linear-gradient(
    180deg,
    #1d6042 0%,
    #23282e 100%
  );
  --data-viz-categorical-12-weak-gradient-hover-end: #1d6042;
  --data-viz-categorical-12-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-2-active: #17c2c2;
  --data-viz-categorical-2-default: #17c2c2;
  --data-viz-categorical-2-focus: #a9ebeb;
  --data-viz-categorical-2-gradient-default: linear-gradient(
    180deg,
    #17c2c2 50%,
    #028e99 100%
  );
  --data-viz-categorical-2-gradient-default-end: #17c2c2;
  --data-viz-categorical-2-gradient-default-start: #028e99;
  --data-viz-categorical-2-hover: #a9ebeb;
  --data-viz-categorical-2-weak-gradient-active: linear-gradient(
    180deg,
    #1f565b 0%,
    #23282e 100%
  );
  --data-viz-categorical-2-weak-gradient-active-end: #1f565b;
  --data-viz-categorical-2-weak-gradient-active-start: #23282e;
  --data-viz-categorical-2-weak-gradient-default: linear-gradient(
    180deg,
    #1f565b 0%,
    #23282e 100%
  );
  --data-viz-categorical-2-weak-gradient-default-end: #1f565b;
  --data-viz-categorical-2-weak-gradient-default-start: #23282e;
  --data-viz-categorical-2-weak-gradient-focus: linear-gradient(
    180deg,
    #1d7578 0%,
    #23282e 100%
  );
  --data-viz-categorical-2-weak-gradient-focus-end: #1d7578;
  --data-viz-categorical-2-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-2-weak-gradient-hover: linear-gradient(
    180deg,
    #1d7578 0%,
    #23282e 100%
  );
  --data-viz-categorical-2-weak-gradient-hover-end: #1d7578;
  --data-viz-categorical-2-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-3-active: #e0ccff;
  --data-viz-categorical-3-default: #e0ccff;
  --data-viz-categorical-3-focus: #f3ebff;
  --data-viz-categorical-3-gradient-default: linear-gradient(
    180deg,
    #e0ccff 50%,
    #b587fa 100%
  );
  --data-viz-categorical-3-gradient-default-end: #e0ccff;
  --data-viz-categorical-3-gradient-default-start: #b587fa;
  --data-viz-categorical-3-hover: #f3ebff;
  --data-viz-categorical-3-weak-gradient-active: linear-gradient(
    180deg,
    #5c596d 0%,
    #23282e 100%
  );
  --data-viz-categorical-3-weak-gradient-active-end: #5c596d;
  --data-viz-categorical-3-weak-gradient-active-start: #23282e;
  --data-viz-categorical-3-weak-gradient-default: linear-gradient(
    180deg,
    #5c596d 0%,
    #23282e 100%
  );
  --data-viz-categorical-3-weak-gradient-default-end: #5c596d;
  --data-viz-categorical-3-weak-gradient-default-start: #23282e;
  --data-viz-categorical-3-weak-gradient-focus: linear-gradient(
    180deg,
    #817a96 0%,
    #23282e 100%
  );
  --data-viz-categorical-3-weak-gradient-focus-end: #817a96;
  --data-viz-categorical-3-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-3-weak-gradient-hover: linear-gradient(
    180deg,
    #817a96 0%,
    #23282e 100%
  );
  --data-viz-categorical-3-weak-gradient-hover-end: #817a96;
  --data-viz-categorical-3-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-4-active: #e3447c;
  --data-viz-categorical-4-default: #e3447c;
  --data-viz-categorical-4-focus: #fcb3c8;
  --data-viz-categorical-4-gradient-default: linear-gradient(
    180deg,
    #e3447c 50%,
    #b02863 100%
  );
  --data-viz-categorical-4-gradient-default-end: #e3447c;
  --data-viz-categorical-4-gradient-default-start: #b02863;
  --data-viz-categorical-4-hover: #fcb3c8;
  --data-viz-categorical-4-weak-gradient-active: linear-gradient(
    180deg,
    #5d3045 0%,
    #23282e 100%
  );
  --data-viz-categorical-4-weak-gradient-active-end: #5d3045;
  --data-viz-categorical-4-weak-gradient-active-start: #23282e;
  --data-viz-categorical-4-weak-gradient-default: linear-gradient(
    180deg,
    #5d3045 0%,
    #23282e 100%
  );
  --data-viz-categorical-4-weak-gradient-default-end: #5d3045;
  --data-viz-categorical-4-weak-gradient-default-start: #23282e;
  --data-viz-categorical-4-weak-gradient-focus: linear-gradient(
    180deg,
    #833655 0%,
    #23282e 100%
  );
  --data-viz-categorical-4-weak-gradient-focus-end: #833655;
  --data-viz-categorical-4-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-4-weak-gradient-hover: linear-gradient(
    180deg,
    #833655 0%,
    #23282e 100%
  );
  --data-viz-categorical-4-weak-gradient-hover-end: #833655;
  --data-viz-categorical-4-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-5-active: #9dba4c;
  --data-viz-categorical-5-default: #9dba4c;
  --data-viz-categorical-5-focus: #d7e8a9;
  --data-viz-categorical-5-gradient-default: linear-gradient(
    180deg,
    #9dba4c 50%,
    #6c8c14 100%
  );
  --data-viz-categorical-5-gradient-default-end: #9dba4c;
  --data-viz-categorical-5-gradient-default-start: #6c8c14;
  --data-viz-categorical-5-hover: #d7e8a9;
  --data-viz-categorical-5-weak-gradient-active: linear-gradient(
    180deg,
    #485437 0%,
    #23282e 100%
  );
  --data-viz-categorical-5-weak-gradient-active-end: #485437;
  --data-viz-categorical-5-weak-gradient-active-start: #23282e;
  --data-viz-categorical-5-weak-gradient-default: linear-gradient(
    180deg,
    #485437 0%,
    #23282e 100%
  );
  --data-viz-categorical-5-weak-gradient-default-end: #485437;
  --data-viz-categorical-5-weak-gradient-default-start: #23282e;
  --data-viz-categorical-5-weak-gradient-focus: linear-gradient(
    180deg,
    #60713d 0%,
    #23282e 100%
  );
  --data-viz-categorical-5-weak-gradient-focus-end: #60713d;
  --data-viz-categorical-5-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-5-weak-gradient-hover: linear-gradient(
    180deg,
    #60713d 0%,
    #23282e 100%
  );
  --data-viz-categorical-5-weak-gradient-hover-end: #60713d;
  --data-viz-categorical-5-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-6-active: #9b5ff5;
  --data-viz-categorical-6-default: #9b5ff5;
  --data-viz-categorical-6-focus: #d6baff;
  --data-viz-categorical-6-gradient-default: linear-gradient(
    180deg,
    #9b5ff5 50%,
    #753bcc 100%
  );
  --data-viz-categorical-6-gradient-default-end: #9b5ff5;
  --data-viz-categorical-6-gradient-default-start: #753bcc;
  --data-viz-categorical-6-hover: #d6baff;
  --data-viz-categorical-6-weak-gradient-active: linear-gradient(
    180deg,
    #47396a 0%,
    #23282e 100%
  );
  --data-viz-categorical-6-weak-gradient-active-end: #47396a;
  --data-viz-categorical-6-weak-gradient-active-start: #23282e;
  --data-viz-categorical-6-weak-gradient-default: linear-gradient(
    180deg,
    #47396a 0%,
    #23282e 100%
  );
  --data-viz-categorical-6-weak-gradient-default-end: #47396a;
  --data-viz-categorical-6-weak-gradient-default-start: #23282e;
  --data-viz-categorical-6-weak-gradient-focus: linear-gradient(
    180deg,
    #5f4491 0%,
    #23282e 100%
  );
  --data-viz-categorical-6-weak-gradient-focus-end: #5f4491;
  --data-viz-categorical-6-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-6-weak-gradient-hover: linear-gradient(
    180deg,
    #5f4491 0%,
    #23282e 100%
  );
  --data-viz-categorical-6-weak-gradient-hover-end: #5f4491;
  --data-viz-categorical-6-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-7-active: #ff87a9;
  --data-viz-categorical-7-default: #ff87a9;
  --data-viz-categorical-7-focus: #ffd4e0;
  --data-viz-categorical-7-gradient-default: linear-gradient(
    180deg,
    #ff87a9 50%,
    #e3447c 100%
  );
  --data-viz-categorical-7-gradient-default-end: #ff87a9;
  --data-viz-categorical-7-gradient-default-start: #e3447c;
  --data-viz-categorical-7-hover: #ffd4e0;
  --data-viz-categorical-7-weak-gradient-active: linear-gradient(
    180deg,
    #654553 0%,
    #23282e 100%
  );
  --data-viz-categorical-7-weak-gradient-active-end: #654553;
  --data-viz-categorical-7-weak-gradient-active-start: #23282e;
  --data-viz-categorical-7-weak-gradient-default: linear-gradient(
    180deg,
    #654553 0%,
    #23282e 100%
  );
  --data-viz-categorical-7-weak-gradient-default-end: #654553;
  --data-viz-categorical-7-weak-gradient-default-start: #23282e;
  --data-viz-categorical-7-weak-gradient-focus: linear-gradient(
    180deg,
    #91586c 0%,
    #23282e 100%
  );
  --data-viz-categorical-7-weak-gradient-focus-end: #91586c;
  --data-viz-categorical-7-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-7-weak-gradient-hover: linear-gradient(
    180deg,
    #91586c 0%,
    #23282e 100%
  );
  --data-viz-categorical-7-weak-gradient-hover-end: #91586c;
  --data-viz-categorical-7-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-8-active: #028e99;
  --data-viz-categorical-8-default: #028e99;
  --data-viz-categorical-8-focus: #4ad9d9;
  --data-viz-categorical-8-gradient-default: linear-gradient(
    180deg,
    #028e99 50%,
    #006773 100%
  );
  --data-viz-categorical-8-gradient-default-end: #028e99;
  --data-viz-categorical-8-gradient-default-start: #006773;
  --data-viz-categorical-8-hover: #4ad9d9;
  --data-viz-categorical-8-weak-gradient-active: linear-gradient(
    180deg,
    #19474e 0%,
    #23282e 100%
  );
  --data-viz-categorical-8-weak-gradient-active-end: #19474e;
  --data-viz-categorical-8-weak-gradient-active-start: #23282e;
  --data-viz-categorical-8-weak-gradient-default: linear-gradient(
    180deg,
    #19474e 0%,
    #23282e 100%
  );
  --data-viz-categorical-8-weak-gradient-default-end: #19474e;
  --data-viz-categorical-8-weak-gradient-default-start: #23282e;
  --data-viz-categorical-8-weak-gradient-focus: linear-gradient(
    180deg,
    #135b64 0%,
    #23282e 100%
  );
  --data-viz-categorical-8-weak-gradient-focus-end: #135b64;
  --data-viz-categorical-8-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-8-weak-gradient-hover: linear-gradient(
    180deg,
    #135b64 0%,
    #23282e 100%
  );
  --data-viz-categorical-8-weak-gradient-hover-end: #135b64;
  --data-viz-categorical-8-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-9-active: #9adffc;
  --data-viz-categorical-9-default: #9adffc;
  --data-viz-categorical-9-focus: #d9f4ff;
  --data-viz-categorical-9-gradient-default: linear-gradient(
    180deg,
    #9adffc 50%,
    #23a8eb 100%
  );
  --data-viz-categorical-9-gradient-default-end: #9adffc;
  --data-viz-categorical-9-gradient-default-start: #23a8eb;
  --data-viz-categorical-9-hover: #d9f4ff;
  --data-viz-categorical-9-weak-gradient-active: linear-gradient(
    180deg,
    #475f6c 0%,
    #23282e 100%
  );
  --data-viz-categorical-9-weak-gradient-active-end: #475f6c;
  --data-viz-categorical-9-weak-gradient-active-start: #23282e;
  --data-viz-categorical-9-weak-gradient-default: linear-gradient(
    180deg,
    #475f6c 0%,
    #23282e 100%
  );
  --data-viz-categorical-9-weak-gradient-default-end: #475f6c;
  --data-viz-categorical-9-weak-gradient-default-start: #23282e;
  --data-viz-categorical-9-weak-gradient-focus: linear-gradient(
    180deg,
    #5e8395 0%,
    #23282e 100%
  );
  --data-viz-categorical-9-weak-gradient-focus-end: #5e8395;
  --data-viz-categorical-9-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-9-weak-gradient-hover: linear-gradient(
    180deg,
    #5e8395 0%,
    #23282e 100%
  );
  --data-viz-categorical-9-weak-gradient-hover-end: #5e8395;
  --data-viz-categorical-9-weak-gradient-hover-start: #23282e;
  --data-viz-dormant-active: #a7adb5;
  --data-viz-dormant-default: #a7adb5;
  --data-viz-dormant-focus: #e1e4e8;
  --data-viz-dormant-gradient-default: linear-gradient(
    180deg,
    #a7adb5 50%,
    #7e868f 100%
  );
  --data-viz-dormant-gradient-default-end: #a7adb5;
  --data-viz-dormant-gradient-default-start: #7e868f;
  --data-viz-dormant-hover: #e1e4e8;
  --data-viz-dormant-weak-gradient-active: linear-gradient(
    180deg,
    #464c54 0%,
    #23282e 100%
  );
  --data-viz-dormant-weak-gradient-active-end: #464c54;
  --data-viz-dormant-weak-gradient-active-start: #23282e;
  --data-viz-dormant-weak-gradient-default: linear-gradient(
    180deg,
    #464c54 0%,
    #23282e 100%
  );
  --data-viz-dormant-weak-gradient-default-end: #464c54;
  --data-viz-dormant-weak-gradient-default-start: #23282e;
  --data-viz-dormant-weak-gradient-focus: linear-gradient(
    180deg,
    #656c75 0%,
    #23282e 100%
  );
  --data-viz-dormant-weak-gradient-focus-end: #656c75;
  --data-viz-dormant-weak-gradient-focus-start: #23282e;
  --data-viz-dormant-weak-gradient-hover: linear-gradient(
    180deg,
    #656c75 0%,
    #23282e 100%
  );
  --data-viz-dormant-weak-gradient-hover-end: #656c75;
  --data-viz-dormant-weak-gradient-hover-start: #23282e;
  --data-viz-excellent-active: #649ef5;
  --data-viz-excellent-default: #649ef5;
  --data-viz-excellent-focus: #bad6ff;
  --data-viz-excellent-gradient-default: linear-gradient(
    180deg,
    #649ef5 50%,
    #2774d9 100%
  );
  --data-viz-excellent-gradient-default-end: #649ef5;
  --data-viz-excellent-gradient-default-start: #2774d9;
  --data-viz-excellent-hover: #bad6ff;
  --data-viz-excellent-weak-gradient-active: linear-gradient(
    180deg,
    #374b6a 0%,
    #23282e 100%
  );
  --data-viz-excellent-weak-gradient-active-end: #374b6a;
  --data-viz-excellent-weak-gradient-active-start: #23282e;
  --data-viz-excellent-weak-gradient-default: linear-gradient(
    180deg,
    #374b6a 0%,
    #23282e 100%
  );
  --data-viz-excellent-weak-gradient-default-end: #374b6a;
  --data-viz-excellent-weak-gradient-default-start: #23282e;
  --data-viz-excellent-weak-gradient-focus: linear-gradient(
    180deg,
    #446392 0%,
    #23282e 100%
  );
  --data-viz-excellent-weak-gradient-focus-end: #446392;
  --data-viz-excellent-weak-gradient-focus-start: #23282e;
  --data-viz-excellent-weak-gradient-hover: linear-gradient(
    180deg,
    #446392 0%,
    #23282e 100%
  );
  --data-viz-excellent-weak-gradient-hover-end: #446392;
  --data-viz-excellent-weak-gradient-hover-start: #23282e;
  --data-viz-low-warning-active: #0bb2b8;
  --data-viz-low-warning-default: #0bb2b8;
  --data-viz-low-warning-focus: #84e3e3;
  --data-viz-low-warning-gradient-default: linear-gradient(
    180deg,
    #0bb2b8 50%,
    #01818c 100%
  );
  --data-viz-low-warning-gradient-default-end: #0bb2b8;
  --data-viz-low-warning-gradient-default-start: #01818c;
  --data-viz-low-warning-hover: #84e3e3;
  --data-viz-low-warning-weak-gradient-active: linear-gradient(
    180deg,
    #1c5157 0%,
    #23282e 100%
  );
  --data-viz-low-warning-weak-gradient-active-end: #1c5157;
  --data-viz-low-warning-weak-gradient-active-start: #23282e;
  --data-viz-low-warning-weak-gradient-default: linear-gradient(
    180deg,
    #1c5157 0%,
    #23282e 100%
  );
  --data-viz-low-warning-weak-gradient-default-end: #1c5157;
  --data-viz-low-warning-weak-gradient-default-start: #23282e;
  --data-viz-low-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #176d73 0%,
    #23282e 100%
  );
  --data-viz-low-warning-weak-gradient-focus-end: #176d73;
  --data-viz-low-warning-weak-gradient-focus-start: #23282e;
  --data-viz-low-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #176d73 0%,
    #23282e 100%
  );
  --data-viz-low-warning-weak-gradient-hover-end: #176d73;
  --data-viz-low-warning-weak-gradient-hover-start: #23282e;
  --data-viz-negative-active: #fa5762;
  --data-viz-negative-default: #fa5762;
  --data-viz-negative-focus: #ffb2b5;
  --data-viz-negative-gradient-default: linear-gradient(
    180deg,
    #fa5762 50%,
    #cc2d37 100%
  );
  --data-viz-negative-gradient-default-end: #fa5762;
  --data-viz-negative-gradient-default-start: #cc2d37;
  --data-viz-negative-hover: #ffb2b5;
  --data-viz-negative-weak-gradient-active: linear-gradient(
    180deg,
    #63363e 0%,
    #23282e 100%
  );
  --data-viz-negative-weak-gradient-active-end: #63363e;
  --data-viz-negative-weak-gradient-active-start: #23282e;
  --data-viz-negative-weak-gradient-default: linear-gradient(
    180deg,
    #63363e 0%,
    #23282e 100%
  );
  --data-viz-negative-weak-gradient-default-end: #63363e;
  --data-viz-negative-weak-gradient-default-start: #23282e;
  --data-viz-negative-weak-gradient-focus: linear-gradient(
    180deg,
    #8f3f48 0%,
    #23282e 100%
  );
  --data-viz-negative-weak-gradient-focus-end: #8f3f48;
  --data-viz-negative-weak-gradient-focus-start: #23282e;
  --data-viz-negative-weak-gradient-hover: linear-gradient(
    180deg,
    #8f3f48 0%,
    #23282e 100%
  );
  --data-viz-negative-weak-gradient-hover-end: #8f3f48;
  --data-viz-negative-weak-gradient-hover-start: #23282e;
  --data-viz-positive-active: #33bbf5;
  --data-viz-positive-default: #33bbf5;
  --data-viz-positive-focus: #b5e9ff;
  --data-viz-positive-gradient-default: linear-gradient(
    180deg,
    #33bbf5 50%,
    #0d8bd4 100%
  );
  --data-viz-positive-gradient-default-end: #33bbf5;
  --data-viz-positive-gradient-default-start: #0d8bd4;
  --data-viz-positive-hover: #b5e9ff;
  --data-viz-positive-weak-gradient-active: linear-gradient(
    180deg,
    #28546a 0%,
    #23282e 100%
  );
  --data-viz-positive-weak-gradient-active-end: #28546a;
  --data-viz-positive-weak-gradient-active-start: #23282e;
  --data-viz-positive-weak-gradient-default: linear-gradient(
    180deg,
    #28546a 0%,
    #23282e 100%
  );
  --data-viz-positive-weak-gradient-default-end: #28546a;
  --data-viz-positive-weak-gradient-default-start: #23282e;
  --data-viz-positive-weak-gradient-focus: linear-gradient(
    180deg,
    #2b7192 0%,
    #23282e 100%
  );
  --data-viz-positive-weak-gradient-focus-end: #2b7192;
  --data-viz-positive-weak-gradient-focus-start: #23282e;
  --data-viz-positive-weak-gradient-hover: linear-gradient(
    180deg,
    #2b7192 0%,
    #23282e 100%
  );
  --data-viz-positive-weak-gradient-hover-end: #2b7192;
  --data-viz-positive-weak-gradient-hover-start: #23282e;
  --data-viz-severe-warning-active: #f7782f;
  --data-viz-severe-warning-default: #f7782f;
  --data-viz-severe-warning-focus: #fcc9a7;
  --data-viz-severe-warning-gradient-default: linear-gradient(
    180deg,
    #f7782f 50%,
    #c44f14 100%
  );
  --data-viz-severe-warning-gradient-default-end: #f7782f;
  --data-viz-severe-warning-gradient-default-start: #c44f14;
  --data-viz-severe-warning-hover: #fcc9a7;
  --data-viz-severe-warning-weak-gradient-active: linear-gradient(
    180deg,
    #63402e 0%,
    #23282e 100%
  );
  --data-viz-severe-warning-weak-gradient-active-end: #63402e;
  --data-viz-severe-warning-weak-gradient-active-start: #23282e;
  --data-viz-severe-warning-weak-gradient-default: linear-gradient(
    180deg,
    #63402e 0%,
    #23282e 100%
  );
  --data-viz-severe-warning-weak-gradient-default-end: #63402e;
  --data-viz-severe-warning-weak-gradient-default-start: #23282e;
  --data-viz-severe-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #8d502f 0%,
    #23282e 100%
  );
  --data-viz-severe-warning-weak-gradient-focus-end: #8d502f;
  --data-viz-severe-warning-weak-gradient-focus-start: #23282e;
  --data-viz-severe-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #8d502f 0%,
    #23282e 100%
  );
  --data-viz-severe-warning-weak-gradient-hover-end: #8d502f;
  --data-viz-severe-warning-weak-gradient-hover-start: #23282e;
  --data-viz-warning-active: #f0c243;
  --data-viz-warning-default: #f0c243;
  --data-viz-warning-focus: #f5e08e;
  --data-viz-warning-gradient-default: linear-gradient(
    180deg,
    #f0c243 50%,
    #d6900d 100%
  );
  --data-viz-warning-gradient-default-end: #f0c243;
  --data-viz-warning-gradient-default-start: #d6900d;
  --data-viz-warning-hover: #f5e08e;
  --data-viz-warning-weak-gradient-active: linear-gradient(
    180deg,
    #615634 0%,
    #23282e 100%
  );
  --data-viz-warning-weak-gradient-active-end: #615634;
  --data-viz-warning-weak-gradient-active-start: #23282e;
  --data-viz-warning-weak-gradient-default: linear-gradient(
    180deg,
    #615634 0%,
    #23282e 100%
  );
  --data-viz-warning-weak-gradient-default-end: #615634;
  --data-viz-warning-weak-gradient-default-start: #23282e;
  --data-viz-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #897539 0%,
    #23282e 100%
  );
  --data-viz-warning-weak-gradient-focus-end: #897539;
  --data-viz-warning-weak-gradient-focus-start: #23282e;
  --data-viz-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #897539 0%,
    #23282e 100%
  );
  --data-viz-warning-weak-gradient-hover-end: #897539;
  --data-viz-warning-weak-gradient-hover-start: #23282e;

  /* token for modal overlay */
  --overlay-bg-default: rgba(0,0,0,0.69804);
}

/* Non-token additions for contextual container. */
*[data-mds-theme="dark-classic"] [class^="mds-"] {
  color-scheme: dark;
}
*[data-mds-theme="dark-classic"] [class*=" mds-"] {
  color-scheme: dark;
}
`,O=`/**
 * This file is auto-generated. Do not edit it directly.
 */

*[data-mds-theme="dark"] {
  --brand-bg-default: #373c42;
  --brand-bg-hover: #373c42;
  --brand-bg-focus: #464c54;
  --brand-bg-active: #464c54;
  --brand-bg-disabled: #e1e4e8;
  --brand-bg-gradient-start: #373c42;
  --brand-bg-gradient-end: #0f1214;
  --brand-bg-gradient-default: linear-gradient(90deg, #373c42 0%, #0f1214 100%);
  --brand-bg-strong-default: #373c42;
  --brand-bg-strong-hover: #373c42;
  --brand-bg-strong-focus: #373c42;
  --brand-bg-strong-active: #373c42;
  --brand-text-default: #f7f7f7;
  --brand-text-hover: #f7f7f7;
  --brand-text-active: #f7f7f7;
  --brand-text-weak-default: #f7f7f7;
  --brand-text-weak-hover: #f7f7f7;
  --brand-text-weak-focus: #f7f7f7;
  --brand-text-weak-active: #f7f7f7;
  --brand-text-strong-default: #f0f1f2;
  --brand-icon-default: #f7f7f7;
  --brand-icon-hover: #fff;
  --brand-icon-active: #fff;
  --brand-icon-weak-default: #f7f7f7;
  --brand-icon-weak-hover: #f7f7f7;
  --brand-icon-weak-focus: #f7f7f7;
  --brand-icon-weak-active: #f7f7f7;
  --brand-border-active: #cce1ff;
  --brand-accent-icon-default: #c1c6cc;
  --brand-accent-icon-focus: #fff;
  --brand-accent-icon-active: #6bbf41;
  --brand-accent-icon-disabled: #6f7680;
  --brand-accent-icon-weak-default: #6f7680;
  --brand-accent-icon-weak-focus: #fff;
  --brand-accent-icon-weak-active: #398519;
  --brand-accent-icon-weak-disabled: #fff;
  --brand-accent-icon-medium-default: #979fa8;
  --brand-accent-icon-medium-focus: #fff;
  --brand-accent-icon-medium-active: #52a62b;
  --brand-accent-icon-medium-disabled: #fff;
  --brand-accent-border-default: #52a62b;
  --brand-accent-border-hover: #7e868f;
  --brand-accent-border-focus: #52a62b;
  --brand-accent-border-active: #52a62b;
  --brand-accent-border-weak-default: #d0d4d9;
  --brand-accent-border-weak-hover: #fff;
  --brand-accent-border-weak-focus: #fff;
  --brand-accent-border-weak-active: #398519;
  --brand-accent-border-weak-disabled: #fff;
  --brand-accent-border-medium-default: #596069;
  --brand-accent-border-medium-hover: #fff;
  --brand-accent-border-medium-focus: #fff;
  --brand-accent-border-medium-active: #2b7a0c;
  --brand-accent-border-medium-disabled: #fff;
  --brand-accent-border-strong-default: #0f1214;
  --brand-accent-border-strong-hover: #fff;
  --brand-accent-border-strong-focus: #fff;
  --brand-accent-border-strong-active: #0f1214;
  --brand-accent-border-strong-disabled: #fff;
  --base-bg-default: #0f1214;
  --base-bg-hover: #0f1214;
  --base-bg-active: #0f1214;
  --base-bg-disabled: #464c54;
  --base-bg-weak-default: #23282e;
  --base-bg-weak-hover: #373c42;
  --base-bg-weak-active: #23282e;
  --base-bg-weak-disabled: #464c54;
  --base-bg-medium-default: #373c42;
  --base-bg-medium-hover: #464c54;
  --base-bg-medium-active: #373c42;
  --base-bg-medium-disabled: #e85fc6;
  --base-bg-strong-default: #a7adb5;
  --base-bg-strong-hover: #d0d4d9;
  --base-bg-strong-focus: #d0d4d9;
  --base-bg-strong-active: #d0d4d9;
  --base-bg-strong-disabled: #596069;
  --base-icon-in-default: #23282e;
  --base-icon-in-hover: #23282e;
  --base-icon-in-focus: #23282e;
  --base-icon-in-active: #23282e;
  --base-icon-in-disabled: #6f7680;
  --base-text-default: #f7f7f7;
  --base-text-disabled: #6f7680;
  --base-text-weak-default: #889099;
  --base-text-weak-disabled: #6f7680;
  --base-text-medium-default: #d0d4d9;
  --base-text-medium-disabled: #6f7680;
  --base-text-strong-default: #f0f1f2;
  --base-text-strong-disabled: #6f7680;
  --base-text-in-default: #23282e;
  --base-text-in-hover: #23282e;
  --base-text-in-focus: #23282e;
  --base-text-in-active: #23282e;
  --base-text-in-disabled: #23282e;
  --base-text-in-weak-default: #fff;
  --base-border-default: #596069;
  --base-border-weak-default: #23282e;
  --base-border-medium-default: #464c54;
  --base-border-strong-default: #c1c6cc;
  --base-border-gradient-default: linear-gradient(
    180deg,
    #0f1214 0%,
    #656c75 50%,
    #0f1214 100%
  );
  --inverse-bg-default: #373c42;
  --inverse-bg-hover: #373c42;
  --inverse-bg-focus: #464c54;
  --inverse-bg-active: #464c54;
  --inverse-bg-disabled: #e1e4e8;
  --inverse-bg-gradient-start: #373c42;
  --inverse-bg-gradient-end: #0f1214;
  --inverse-bg-gradient-default: linear-gradient(
    90deg,
    #373c42 0%,
    #0f1214 100%
  );
  --inverse-bg-weak-default: #464c54;
  --inverse-text-default: #f7f7f7;
  --inverse-text-hover: #f7f7f7;
  --inverse-text-focus: #f7f7f7;
  --inverse-text-active: #f7f7f7;
  --inverse-text-disabled: #656c75;
  --inverse-text-medium-default: #c1c6cc;
  --inverse-text-medium-disabled: #656c75;
  --inverse-icon-default: #f7f7f7;
  --inverse-icon-hover: #fff;
  --inverse-icon-focus: #fff;
  --inverse-icon-active: #fff;
  --inverse-icon-disabled: #6f7680;
  --inverse-icon-strong-default: #fff;
  --inverse-icon-strong-hover: #fff;
  --inverse-icon-strong-focus: #fff;
  --inverse-icon-strong-active: #fff;
  --inverse-icon-strong-disabled: #6f7680;
  --inverse-border-default: #6f7680;
  --inverse-border-hover: #649ef5;
  --inverse-border-focus: #cce1ff;
  --inverse-border-active: #cce1ff;
  --inverse-border-disabled: #e1e4e8;
  --control-bg-default: #23282e;
  --control-bg-hover: #2a3442;
  --control-bg-focus: #2a3442;
  --control-bg-active: #2a3442;
  --control-bg-disabled: #373c42;
  --control-bg-weak-default: #23282e;
  --control-bg-weak-hover: #373c42;
  --control-bg-weak-focus: #23282e;
  --control-bg-weak-active: #2a3442;
  --control-bg-weak-disabled: #373c42;
  --control-bg-medium-default: #23282e;
  --control-bg-medium-hover: #373c42;
  --control-bg-medium-focus: #979fa8;
  --control-bg-medium-active: #2a3442;
  --control-bg-medium-disabled: #373c42;
  --control-bg-strong-default: #649ef5;
  --control-bg-strong-hover: #7cadf7;
  --control-bg-strong-focus: #7cadf7;
  --control-bg-strong-active: #7cadf7;
  --control-bg-strong-disabled: #596069;
  --control-icon-default: #649ef5;
  --control-icon-hover: #7cadf7;
  --control-icon-focus: #7cadf7;
  --control-icon-active: #7cadf7;
  --control-icon-disabled: #cce1ff;
  --control-icon-weak-default: #c1c6cc;
  --control-icon-weak-hover: #649ef5;
  --control-icon-weak-focus: #649ef5;
  --control-icon-weak-active: #649ef5;
  --control-icon-weak-disabled: #6f7680;
  --control-icon-medium-default: #649ef5;
  --control-icon-medium-hover: #979fa8;
  --control-icon-medium-focus: #979fa8;
  --control-icon-medium-active: #889099;
  --control-icon-medium-disabled: #e1e4e8;
  --control-icon-strong-default: #d0d4d9;
  --control-icon-strong-hover: #f0f1f2;
  --control-icon-strong-focus: #649ef5;
  --control-icon-strong-active: #649ef5;
  --control-icon-strong-disabled: #6f7680;
  --control-icon-in-default: #23282e;
  --control-icon-in-hover: #23282e;
  --control-icon-in-focus: #23282e;
  --control-icon-in-active: #23282e;
  --control-icon-in-disabled: #6f7680;
  --control-icon-in-strong-default: #649ef5;
  --control-icon-in-strong-hover: #7cadf7;
  --control-icon-in-strong-focus: #7cadf7;
  --control-icon-in-strong-active: #7cadf7;
  --control-icon-in-strong-disabled: #6f7680;
  --control-border-default: #7e868f;
  --control-border-hover: #7cadf7;
  --control-border-focus: #7cadf7;
  --control-border-active: #7cadf7;
  --control-border-disabled: #596069;
  --control-border-weak-default: #656c75;
  --control-border-weak-hover: #7cadf7;
  --control-border-weak-focus: #7cadf7;
  --control-border-weak-active: #7cadf7;
  --control-border-weak-disabled: #596069;
  --control-border-medium-default: #649ef5;
  --control-border-medium-hover: #649ef5;
  --control-border-medium-focus: #649ef5;
  --control-border-medium-active: #649ef5;
  --control-border-medium-disabled: #596069;
  --control-border-strong-default: #c1c6cc;
  --control-border-strong-hover: #656c75;
  --control-border-strong-focus: #656c75;
  --control-border-strong-active: #649ef5;
  --control-border-strong-disabled: #596069;
  --interact-bg-default: #649ef5;
  --interact-bg-hover: #7cadf7;
  --interact-bg-focus: #7cadf7;
  --interact-bg-active: #7cadf7;
  --interact-bg-disabled: #446392;
  --interact-bg-weak-default: #23282e;
  --interact-bg-weak-hover: #2f3d52;
  --interact-bg-weak-focus: #2f3d52;
  --interact-bg-weak-active: #2f3d52;
  --interact-bg-weak-disabled: #464c54;
  --interact-bg-medium-default: #649ef5;
  --interact-bg-medium-hover: #3a5276;
  --interact-bg-medium-active: #3a5276;
  --interact-bg-strong-hover: #596069;
  --interact-bg-strong-active: #596069;
  --interact-text-default: #649ef5;
  --interact-text-hover: #7cadf7;
  --interact-text-focus: #7cadf7;
  --interact-text-active: #7cadf7;
  --interact-text-disabled: #446392;
  --interact-text-weak-default: #c1c6cc;
  --interact-text-weak-hover: #649ef5;
  --interact-text-weak-focus: #649ef5;
  --interact-text-weak-active: #649ef5;
  --interact-text-weak-disabled: #6f7680;
  --interact-text-in-default: #23282e;
  --interact-text-in-hover: #23282e;
  --interact-text-in-focus: #23282e;
  --interact-text-in-active: #23282e;
  --interact-text-in-disabled: #23282e;
  --interact-icon-default: #649ef5;
  --interact-icon-hover: #7cadf7;
  --interact-icon-focus: #7cadf7;
  --interact-icon-active: #7cadf7;
  --interact-icon-disabled: #446392;
  --interact-icon-weak-default: #c1c6cc;
  --interact-icon-weak-hover: #d0d4d9;
  --interact-icon-weak-focus: #d0d4d9;
  --interact-icon-weak-active: #d0d4d9;
  --interact-icon-weak-disabled: #6f7680;
  --interact-icon-medium-default: #c1c6cc;
  --interact-icon-medium-hover: #649ef5;
  --interact-icon-medium-focus: #649ef5;
  --interact-icon-medium-active: #649ef5;
  --interact-icon-medium-disabled: #6f7680;
  --interact-icon-strong-default: #d0d4d9;
  --interact-icon-strong-hover: #f0f1f2;
  --interact-icon-strong-focus: #f0f1f2;
  --interact-icon-strong-active: #f0f1f2;
  --interact-icon-strong-disabled: #6f7680;
  --interact-icon-in-default: #23282e;
  --interact-icon-in-hover: #23282e;
  --interact-icon-in-focus: #23282e;
  --interact-icon-in-active: #23282e;
  --interact-icon-in-disabled: #23282e;
  --interact-border-default: #649ef5;
  --interact-border-hover: #7cadf7;
  --interact-border-focus: #7cadf7;
  --interact-border-active: #7cadf7;
  --interact-border-disabled: #446392;
  --interact-border-weak-default: #656c75;
  --interact-border-weak-hover: #cce1ff;
  --interact-border-weak-focus: #e1e4e8;
  --interact-border-weak-active: #e1e4e8;
  --interact-border-weak-disabled: #596069;
  --interact-border-medium-default: #649ef5;
  --interact-border-medium-hover: #a3c8ff;
  --interact-border-medium-focus: #649ef5;
  --interact-border-medium-active: #649ef5;
  --interact-border-medium-disabled: #e1e4e8;
  --positive-bg-default: #33bbf5;
  --positive-bg-hover: #33bbf5;
  --positive-bg-focus: #33bbf5;
  --positive-bg-active: #33bbf5;
  --positive-bg-disabled: #33bbf5;
  --positive-bg-weak-default: #23282e;
  --positive-bg-weak-hover: #23282e;
  --positive-bg-weak-focus: #23282e;
  --positive-bg-weak-active: #23282e;
  --positive-bg-weak-disabled: #23282e;
  --positive-bg-medium-default: #28546a;
  --positive-bg-medium-hover: #28546a;
  --positive-bg-medium-focus: #28546a;
  --positive-bg-medium-active: #28546a;
  --positive-bg-medium-disabled: #373c42;
  --positive-bg-strong-default: #173746;
  --positive-icon-default: #33bbf5;
  --positive-icon-hover: #33bbf5;
  --positive-icon-focus: #33bbf5;
  --positive-icon-active: #33bbf5;
  --positive-icon-disabled: #596069;
  --positive-icon-weak-default: #6fd2fc;
  --positive-icon-weak-hover: #6fd2fc;
  --positive-icon-weak-focus: #6fd2fc;
  --positive-icon-weak-active: #6fd2fc;
  --positive-icon-weak-disabled: #596069;
  --positive-icon-strong-default: #33bbf5;
  --positive-icon-strong-hover: #33bbf5;
  --positive-icon-strong-focus: #33bbf5;
  --positive-icon-strong-active: #33bbf5;
  --positive-icon-strong-disabled: #2b7192;
  --positive-icon-in-default: #23282e;
  --positive-icon-in-hover: #23282e;
  --positive-icon-in-focus: #23282e;
  --positive-icon-in-active: #23282e;
  --positive-icon-in-disabled: #23282e;
  --positive-border-default: #33bbf5;
  --positive-border-hover: #33bbf5;
  --positive-border-focus: #33bbf5;
  --positive-border-active: #33bbf5;
  --positive-border-disabled: #33bbf5;
  --positive-border-weak-default: #23282e;
  --positive-border-weak-hover: #33bbf5;
  --positive-border-weak-focus: #33bbf5;
  --positive-border-weak-active: #33bbf5;
  --positive-border-weak-disabled: #596069;
  --positive-border-strong-default: #f7f7f7;
  --positive-border-strong-hover: #f7f7f7;
  --positive-border-strong-focus: #f7f7f7;
  --positive-border-strong-active: #f7f7f7;
  --positive-border-strong-disabled: #f7f7f7;
  --positive-text-in-default: #23282e;
  --positive-text-in-hover: #23282e;
  --positive-text-in-focus: #23282e;
  --positive-text-in-active: #23282e;
  --positive-text-in-disabled: #23282e;
  --warning-bg-default: #f0c243;
  --warning-bg-hover: #f0c243;
  --warning-bg-focus: #f0c243;
  --warning-bg-active: #f0c243;
  --warning-bg-disabled: #f0c243;
  --warning-bg-weak-default: #23282e;
  --warning-bg-weak-hover: #23282e;
  --warning-bg-weak-focus: #23282e;
  --warning-bg-weak-active: #23282e;
  --warning-bg-weak-disabled: #23282e;
  --warning-bg-medium-default: #5c4d28;
  --warning-bg-medium-hover: #5c4d28;
  --warning-bg-medium-focus: #5c4d28;
  --warning-bg-medium-active: #5c4d28;
  --warning-bg-medium-disabled: #373c42;
  --warning-bg-strong-default: #35301c;
  --warning-icon-default: #f0c243;
  --warning-icon-hover: #f0c243;
  --warning-icon-focus: #f0c243;
  --warning-icon-active: #f0c243;
  --warning-icon-disabled: #596069;
  --warning-icon-strong-default: #f0c243;
  --warning-icon-strong-hover: #f0c243;
  --warning-icon-strong-focus: #f0c243;
  --warning-icon-strong-active: #f0c243;
  --warning-icon-strong-disabled: #f0c243;
  --warning-icon-in-default: #23282e;
  --warning-icon-in-hover: #23282e;
  --warning-icon-in-focus: #23282e;
  --warning-icon-in-active: #23282e;
  --warning-icon-in-disabled: #23282e;
  --warning-border-default: #f0c243;
  --warning-border-hover: #f0c243;
  --warning-border-focus: #f0c243;
  --warning-border-active: #f0c243;
  --warning-border-disabled: #f0c243;
  --warning-border-weak-default: #23282e;
  --warning-border-weak-hover: #23282e;
  --warning-border-weak-focus: #23282e;
  --warning-border-weak-active: #23282e;
  --warning-border-weak-disabled: #596069;
  --warning-border-strong-default: #f7f7f7;
  --warning-border-strong-hover: #f7f7f7;
  --warning-border-strong-focus: #f7f7f7;
  --warning-border-strong-active: #f7f7f7;
  --warning-border-strong-disabled: #f7f7f7;
  --warning-text-in-default: #23282e;
  --warning-text-in-hover: #23282e;
  --warning-text-in-focus: #23282e;
  --warning-text-in-active: #23282e;
  --warning-text-in-disabled: #23282e;
  --severe-warning-bg-default: #f7782f;
  --severe-warning-bg-hover: #f7782f;
  --severe-warning-bg-focus: #f7782f;
  --severe-warning-bg-active: #f7782f;
  --severe-warning-bg-disabled: #f7782f;
  --severe-warning-bg-weak-default: #23282e;
  --severe-warning-bg-weak-hover: #23282e;
  --severe-warning-bg-weak-focus: #23282e;
  --severe-warning-bg-weak-active: #23282e;
  --severe-warning-bg-weak-disabled: #23282e;
  --severe-warning-bg-medium-default: #644637;
  --severe-warning-bg-medium-hover: #644637;
  --severe-warning-bg-medium-focus: #644637;
  --severe-warning-bg-medium-active: #644637;
  --severe-warning-bg-medium-disabled: #373c42;
  --severe-warning-bg-strong-default: #462e21;
  --severe-warning-icon-default: #f7782f;
  --severe-warning-icon-hover: #f7782f;
  --severe-warning-icon-focus: #f7782f;
  --severe-warning-icon-active: #f7782f;
  --severe-warning-icon-disabled: #596069;
  --severe-warning-icon-strong-default: #fc8d4c;
  --severe-warning-icon-strong-hover: #fc8d4c;
  --severe-warning-icon-strong-focus: #fc8d4c;
  --severe-warning-icon-strong-active: #fc8d4c;
  --severe-warning-icon-strong-disabled: #fc8d4c;
  --severe-warning-icon-in-default: #23282e;
  --severe-warning-icon-in-hover: #23282e;
  --severe-warning-icon-in-focus: #23282e;
  --severe-warning-icon-in-active: #23282e;
  --severe-warning-icon-in-disabled: #23282e;
  --severe-warning-border-default: #f7782f;
  --severe-warning-border-hover: #f7782f;
  --severe-warning-border-focus: #f7782f;
  --severe-warning-border-active: #f7782f;
  --severe-warning-border-disabled: #f7782f;
  --severe-warning-border-weak-default: #23282e;
  --severe-warning-border-weak-hover: #23282e;
  --severe-warning-border-weak-focus: #23282e;
  --severe-warning-border-weak-active: #23282e;
  --severe-warning-border-weak-disabled: #596069;
  --negative-bg-default: #fa5762;
  --negative-bg-hover: #ff6e72;
  --negative-bg-focus: #ff6e72;
  --negative-bg-active: #ff6e72;
  --negative-bg-disabled: #8f3f48;
  --negative-bg-weak-default: #23282e;
  --negative-bg-weak-hover: #984952;
  --negative-bg-weak-focus: #984952;
  --negative-bg-weak-active: #984952;
  --negative-bg-weak-disabled: #373c42;
  --negative-bg-medium-default: #63363e;
  --negative-bg-medium-hover: #63363e;
  --negative-bg-medium-focus: #63363e;
  --negative-bg-medium-active: #63363e;
  --negative-bg-medium-disabled: #373c42;
  --negative-bg-strong-default: #46272a;
  --negative-text-default: #fa5762;
  --negative-text-hover: #ff878b;
  --negative-text-focus: #ff878b;
  --negative-text-active: #ff878b;
  --negative-text-disabled: #8f3f48;
  --negative-text-in-default: #23282e;
  --negative-text-in-hover: #23282e;
  --negative-text-in-focus: #23282e;
  --negative-text-in-active: #23282e;
  --negative-text-in-disabled: #23282e;
  --negative-icon-default: #fa5762;
  --negative-icon-hover: #ff878b;
  --negative-icon-focus: #ff878b;
  --negative-icon-active: #ff878b;
  --negative-icon-disabled: #8f3f48;
  --negative-icon-weak-default: #ffb2b5;
  --negative-icon-weak-hover: #ffb2b5;
  --negative-icon-weak-focus: #ffb2b5;
  --negative-icon-weak-active: #ffb2b5;
  --negative-icon-weak-disabled: #596069;
  --negative-icon-in-default: #23282e;
  --negative-icon-in-hover: #23282e;
  --negative-icon-in-focus: #23282e;
  --negative-icon-in-active: #23282e;
  --negative-icon-in-disabled: #23282e;
  --negative-border-default: #fa5762;
  --negative-border-hover: #ff878b;
  --negative-border-focus: #ff878b;
  --negative-border-active: #ff878b;
  --negative-border-disabled: #914b50;
  --negative-border-weak-default: #23282e;
  --negative-border-weak-hover: #23282e;
  --negative-border-weak-focus: #23282e;
  --negative-border-weak-active: #23282e;
  --negative-border-weak-disabled: #596069;
  --negative-border-medium-default: #eb4651;
  --negative-border-medium-hover: #ff878b;
  --negative-border-medium-focus: #ff878b;
  --negative-border-medium-active: #ff878b;
  --negative-border-medium-disabled: #8f3f48;
  --negative-border-strong-default: #f7f7f7;
  --negative-border-strong-hover: #fff;
  --negative-border-strong-focus: #f7f7f7;
  --negative-border-strong-active: #f7f7f7;
  --negative-border-strong-disabled: #f7f7f7;
  --info-bg-default: #b587fa;
  --info-bg-hover: #b587fa;
  --info-bg-focus: #b587fa;
  --info-bg-active: #b587fa;
  --info-bg-disabled: #b587fa;
  --info-bg-weak-default: #23282e;
  --info-bg-weak-hover: #23282e;
  --info-bg-weak-focus: #23282e;
  --info-bg-weak-active: #23282e;
  --info-bg-weak-disabled: #23282e;
  --info-bg-medium-default: #534a6d;
  --info-bg-medium-hover: #534a6d;
  --info-bg-medium-focus: #534a6d;
  --info-bg-medium-active: #534a6d;
  --info-bg-medium-disabled: #373c42;
  --info-bg-strong-default: #352d49;
  --info-icon-default: #b587fa;
  --info-icon-hover: #b587fa;
  --info-icon-focus: #b587fa;
  --info-icon-active: #b587fa;
  --info-icon-disabled: #596069;
  --info-icon-weak-default: #a974f7;
  --info-icon-weak-hover: #a974f7;
  --info-icon-weak-focus: #a974f7;
  --info-icon-weak-active: #a974f7;
  --info-icon-weak-disabled: #596069;
  --info-icon-in-default: #23282e;
  --info-icon-in-hover: #23282e;
  --info-icon-in-focus: #23282e;
  --info-icon-in-active: #23282e;
  --info-icon-in-disabled: #23282e;
  --info-border-default: #b587fa;
  --info-border-hover: #b587fa;
  --info-border-focus: #b587fa;
  --info-border-active: #b587fa;
  --info-border-disabled: #b587fa;
  --info-border-weak-default: #23282e;
  --info-border-weak-hover: #23282e;
  --info-border-weak-focus: #23282e;
  --info-border-weak-active: #23282e;
  --info-border-weak-disabled: #596069;
  --dormant-bg-default: #6f7680;
  --dormant-bg-disabled: #6f7680;
  --dormant-bg-medium-default: #464c54;
  --dormant-bg-medium-disabled: #373c42;
  --dormant-icon-default: #c1c6cc;
  --dormant-icon-disabled: #596069;
  --dormant-icon-medium-default: #fff;
  --dormant-icon-in-default: #23282e;
  --dormant-icon-in-disabled: #23282e;
  --dormant-icon-in-medium-default: #23282e;
  --dormant-border-default: #a7adb5;
  --dormant-border-disabled: #596069;
  --accent-a-default: #9ca6ff;
  --accent-a-hover: #8a95ff;
  --accent-a-weak-default: #4d5477;
  --accent-b-default: #e3447c;
  --accent-b-hover: #cf3a7a;
  --accent-b-weak-default: #704959;
  --accent-c-default: #fcb3c8;
  --accent-c-hover: #ff87a9;
  --accent-c-weak-default: #6f5964;
  --accent-d-default: #9b5ff5;
  --accent-d-hover: #8d4eed;
  --accent-d-weak-default: #5b5077;
  --accent-e-default: #9dba4c;
  --accent-e-hover: #89ab2c;
  --accent-e-weak-default: #4e5b39;
  --accent-f-default: #d95a1a;
  --accent-f-hover: #c44f14;
  --accent-f-weak-default: #6f4b39;
  --accent-g-default: #4ad9d9;
  --accent-g-hover: #17c2c2;
  --accent-g-weak-default: #1f5e62;
  --accent-h-default: #028e99;
  --accent-h-hover: #01818c;
  --accent-h-weak-default: #456a6d;
  --accent-i-default: #f582d8;
  --accent-i-hover: #f26dd1;
  --accent-i-weak-default: #6c476a;
  --accent-j-default: #767eb2;
  --accent-j-hover: #6871a3;
  --accent-j-weak-default: #505569;
  --accent-k-default: #4cbf7f;
  --accent-k-hover: #36b26e;
  --accent-k-weak-default: #315d4a;
  --in-progress-bg-medium-default: #534a6d;
  --in-progress-bg-medium-hover: #534a6d;
  --in-progress-bg-medium-focus: #534a6d;
  --in-progress-bg-medium-active: #534a6d;
  --in-progress-bg-medium-disabled: #373c42;
  --in-progress-icon-default: #b587fa;
  --in-progress-icon-hover: #b587fa;
  --in-progress-icon-focus: #b587fa;
  --in-progress-icon-active: #b587fa;
  --in-progress-icon-disabled: #596069;
  --in-progress-icon-in-default: #23282e;
  --in-progress-icon-in-hover: #23282e;
  --in-progress-icon-in-focus: #23282e;
  --in-progress-icon-in-active: #23282e;
  --in-progress-icon-in-disabled: #23282e;
  --in-progress-border-default: #b587fa;
  --in-progress-border-hover: #b587fa;
  --in-progress-border-focus: #b587fa;
  --in-progress-border-active: #b587fa;
  --in-progress-border-disabled: #b587fa;
  --low-warning-bg-medium-default: #1f565b;
  --low-warning-bg-medium-hover: #1f565b;
  --low-warning-bg-medium-focus: #1f565b;
  --low-warning-bg-medium-active: #1f565b;
  --low-warning-bg-medium-disabled: #373c42;
  --low-warning-icon-default: #0bb2b8;
  --low-warning-icon-hover: #0bb2b8;
  --low-warning-icon-focus: #0bb2b8;
  --low-warning-icon-active: #0bb2b8;
  --low-warning-icon-disabled: #596069;
  --low-warning-icon-in-default: #23282e;
  --low-warning-icon-in-hover: #23282e;
  --low-warning-icon-in-focus: #23282e;
  --low-warning-icon-in-active: #23282e;
  --low-warning-icon-in-disabled: #23282e;
  --low-warning-border-default: #0bb2b8;
  --low-warning-border-hover: #0bb2b8;
  --low-warning-border-focus: #0bb2b8;
  --low-warning-border-active: #0bb2b8;
  --low-warning-border-disabled: #0bb2b8;
  --excellent-bg-medium-default: #3e506a;
  --excellent-bg-medium-hover: #3e506a;
  --excellent-bg-medium-focus: #3e506a;
  --excellent-bg-medium-active: #3e506a;
  --excellent-bg-medium-disabled: #373c42;
  --excellent-icon-default: #649ef5;
  --excellent-icon-hover: #649ef5;
  --excellent-icon-focus: #649ef5;
  --excellent-icon-active: #649ef5;
  --excellent-icon-disabled: #596069;
  --excellent-icon-in-default: #23282e;
  --excellent-icon-in-hover: #23282e;
  --excellent-icon-in-focus: #23282e;
  --excellent-icon-in-active: #23282e;
  --excellent-icon-in-disabled: #23282e;
  --excellent-border-default: #649ef5;
  --excellent-border-hover: #649ef5;
  --excellent-border-focus: #649ef5;
  --excellent-border-active: #649ef5;
  --excellent-border-disabled: #649ef5;
  --port-diagram-base-bg-default: #c1c6cc;
  --port-diagram-base-bg-active: #889099;
  --port-diagram-base-bg-medium-default: #d0d4d9;
  --port-diagram-base-bg-medium-active: #c1c6cc;
  --port-diagram-base-bg-weak-default: #f0f1f2;
  --port-diagram-base-border-default: #6f7680;
  --port-diagram-base-border-active: #6f7680;
  --port-diagram-base-border-medium-active: #6f7680;
  --port-diagram-base-border-strong-default: #23282e;
  --port-diagram-base-border-strong-active: #23282e;
  --port-diagram-base-icon-in-default: #373c42;
  --port-diagram-base-icon-in-active: #373c42;
  --port-diagram-full-speed-bg-default: #0570ad;
  --port-diagram-full-speed-bg-active: #03639c;
  --port-diagram-full-speed-bg-medium-default: #9adffc;
  --port-diagram-full-speed-bg-medium-active: #33bbf5;
  --port-diagram-full-speed-border-medium-active: #03639c;
  --port-diagram-full-speed-border-strong-default: #23282e;
  --port-diagram-full-speed-border-strong-active: #23282e;
  --port-diagram-full-speed-icon-in-default: #fff;
  --port-diagram-full-speed-icon-in-active: #fff;
  --port-diagram-disconnected-bg-default: #373c42;
  --port-diagram-disconnected-bg-active: #23282e;
  --port-diagram-disconnected-bg-medium-default: #d0d4d9;
  --port-diagram-disconnected-bg-medium-active: #c1c6cc;
  --port-diagram-disconnected-border-medium-active: #6f7680;
  --port-diagram-disconnected-border-strong-default: #23282e;
  --port-diagram-disconnected-border-strong-active: #23282e;
  --port-diagram-disconnected-icon-in-default: #fff;
  --port-diagram-disconnected-icon-in-active: #fff;
  --port-diagram-reduced-speed-bg-default: #0570ad;
  --port-diagram-reduced-speed-bg-active: #03639c;
  --port-diagram-reduced-speed-bg-medium-default: #0d8bd4;
  --port-diagram-reduced-speed-bg-medium-active: #087abd;
  --port-diagram-reduced-speed-border-default: #fff;
  --port-diagram-reduced-speed-border-active: #fff;
  --port-diagram-reduced-speed-border-medium-active: #03639c;
  --port-diagram-reduced-speed-border-strong-default: #23282e;
  --port-diagram-reduced-speed-border-strong-active: #23282e;
  --port-diagram-reduced-speed-icon-in-default: #fff;
  --port-diagram-reduced-speed-icon-in-active: #fff;
  --port-diagram-warning-bg-default: #b05f04;
  --port-diagram-warning-bg-active: #944b03;
  --port-diagram-warning-bg-medium-default: #f0c243;
  --port-diagram-warning-bg-medium-active: #e0a419;
  --port-diagram-warning-border-medium-active: #944b03;
  --port-diagram-warning-border-strong-default: #23282e;
  --port-diagram-warning-border-strong-active: #23282e;
  --port-diagram-warning-border-default: #fff;
  --port-diagram-warning-icon-in-default: #fff;
  --port-diagram-warning-icon-in-active: #fff;
  --port-diagram-critical-bg-default: #cc2d37;
  --port-diagram-critical-bg-active: #a01d26;
  --port-diagram-critical-bg-medium-default: #ffb2b5;
  --port-diagram-critical-bg-medium-active: #ff878b;
  --port-diagram-critical-border-medium-active: #a01d26;
  --port-diagram-critical-border-strong-default: #23282e;
  --port-diagram-critical-border-strong-active: #23282e;
  --port-diagram-critical-icon-in-default: #fff;
  --port-diagram-critical-icon-in-active: #fff;
  --port-diagram-low-power-bg-default: #b05f04;
  --port-diagram-low-power-bg-active: #944b03;
  --port-diagram-low-power-bg-medium-default: #f0c243;
  --port-diagram-low-power-bg-medium-active: #e0a419;
  --port-diagram-low-power-bg-weak-default: #f5e08e;
  --port-diagram-low-power-bg-weak-active: #f2d268;
  --port-diagram-low-power-border-medium-active: #944b03;
  --port-diagram-low-power-border-strong-default: #23282e;
  --port-diagram-low-power-border-strong-active: #23282e;
  --port-diagram-low-power-icon-in-default: #b05f04;
  --port-diagram-low-power-icon-in-active: #944b03;

  /* dark theme -- elevation ( FOR INTERNAL USE ONLY, TEMPORARY ) */
  --elevation-control-default: 0px 3px 8px 0px rgba(0,0,0,0.47843);
  --elevation-control-focus: 0px 0px 0px 2px #446392, 0px 0px 0px 4px #649ef5;
  --elevation-control-select: 0px 0px 0px 2px #7cadf7;
  --elevation-data-viz-focus: 0px 0px 0px 2px #23282e, 0px 0px 0px 4px #fff,
    0px 0px 0px 6px #446392, 0px 0px 0px 8px #7cadf7;
  --elevation-data-viz-select: 0px 0px 0px 2px #23282e, 0px 0px 0px 4px #fff;
  --elevation-floating-default: 0px 4px 12px 0px rgba(0,0,0,0.78039);
  --elevation-invalid-default: 0px 0px 0px 2px #914b50;
  --elevation-invalid-focus: 0px 0px 0px 2px #914b50, 0px 0px 0px 4px #ff878b;
  --elevation-lifted-default: 0px 3px 8px 0px rgba(0,0,0,0.47843);
  --elevation-lifted-inset: inset 10px 0 8px -8px rgba(0,0,0,0.47843);
  --elevation-raised-default: 0px 4px 12px 0px rgba(0,0,0,0.61961);
  --elevation-subtle-default: 0px 2px 5px 0px rgba(0,0,0,0.34902);

  /* color tokens -- data visualizations */
  --data-viz-categorical-1-active: #6977f0;
  --data-viz-categorical-1-default: #6977f0;
  --data-viz-categorical-1-focus: #bac1ff;
  --data-viz-categorical-1-gradient-default: linear-gradient(
    180deg,
    #6977f0 50%,
    #4653c7 100%
  );
  --data-viz-categorical-1-gradient-default-end: #6977f0;
  --data-viz-categorical-1-gradient-default-start: #4653c7;
  --data-viz-categorical-1-hover: #bac1ff;
  --data-viz-categorical-1-weak-gradient-active: linear-gradient(
    180deg,
    #384068 0%,
    #23282e 100%
  );
  --data-viz-categorical-1-weak-gradient-active-end: #384068;
  --data-viz-categorical-1-weak-gradient-active-start: #23282e;
  --data-viz-categorical-1-weak-gradient-default: linear-gradient(
    180deg,
    #384068 0%,
    #23282e 100%
  );
  --data-viz-categorical-1-weak-gradient-default-end: #384068;
  --data-viz-categorical-1-weak-gradient-default-start: #23282e;
  --data-viz-categorical-1-weak-gradient-focus: linear-gradient(
    180deg,
    #46508f 0%,
    #23282e 100%
  );
  --data-viz-categorical-1-weak-gradient-focus-end: #46508f;
  --data-viz-categorical-1-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-1-weak-gradient-hover: linear-gradient(
    180deg,
    #46508f 0%,
    #23282e 100%
  );
  --data-viz-categorical-1-weak-gradient-hover-end: #46508f;
  --data-viz-categorical-1-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-10-active: #767eb2;
  --data-viz-categorical-10-default: #767eb2;
  --data-viz-categorical-10-focus: #c1c6e8;
  --data-viz-categorical-10-gradient-default: linear-gradient(
    180deg,
    #767eb2 50%,
    #545c8a 100%
  );
  --data-viz-categorical-10-gradient-default-end: #767eb2;
  --data-viz-categorical-10-gradient-default-start: #545c8a;
  --data-viz-categorical-10-hover: #c1c6e8;
  --data-viz-categorical-10-weak-gradient-active: linear-gradient(
    180deg,
    #3c4256 0%,
    #23282e 100%
  );
  --data-viz-categorical-10-weak-gradient-active-end: #3c4256;
  --data-viz-categorical-10-weak-gradient-active-start: #23282e;
  --data-viz-categorical-10-weak-gradient-default: linear-gradient(
    180deg,
    #3c4256 0%,
    #23282e 100%
  );
  --data-viz-categorical-10-weak-gradient-default-end: #3c4256;
  --data-viz-categorical-10-weak-gradient-default-start: #23282e;
  --data-viz-categorical-10-weak-gradient-focus: linear-gradient(
    180deg,
    #4d5370 0%,
    #23282e 100%
  );
  --data-viz-categorical-10-weak-gradient-focus-end: #4d5370;
  --data-viz-categorical-10-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-10-weak-gradient-hover: linear-gradient(
    180deg,
    #4d5370 0%,
    #23282e 100%
  );
  --data-viz-categorical-10-weak-gradient-hover-end: #4d5370;
  --data-viz-categorical-10-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-11-active: #fc8d4c;
  --data-viz-categorical-11-default: #fc8d4c;
  --data-viz-categorical-11-focus: #ffd9bf;
  --data-viz-categorical-11-gradient-default: linear-gradient(
    180deg,
    #fc8d4c 50%,
    #d95a1a 100%
  );
  --data-viz-categorical-11-gradient-default-end: #fc8d4c;
  --data-viz-categorical-11-gradient-default-start: #d95a1a;
  --data-viz-categorical-11-hover: #ffd9bf;
  --data-viz-categorical-11-weak-gradient-active: linear-gradient(
    180deg,
    #644637 0%,
    #23282e 100%
  );
  --data-viz-categorical-11-weak-gradient-active-end: #644637;
  --data-viz-categorical-11-weak-gradient-active-start: #23282e;
  --data-viz-categorical-11-weak-gradient-default: linear-gradient(
    180deg,
    #644637 0%,
    #23282e 100%
  );
  --data-viz-categorical-11-weak-gradient-default-end: #644637;
  --data-viz-categorical-11-weak-gradient-default-start: #23282e;
  --data-viz-categorical-11-weak-gradient-focus: linear-gradient(
    180deg,
    #8f5b3d 0%,
    #23282e 100%
  );
  --data-viz-categorical-11-weak-gradient-focus-end: #8f5b3d;
  --data-viz-categorical-11-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-11-weak-gradient-hover: linear-gradient(
    180deg,
    #8f5b3d 0%,
    #23282e 100%
  );
  --data-viz-categorical-11-weak-gradient-hover-end: #8f5b3d;
  --data-viz-categorical-11-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-12-active: #169855;
  --data-viz-categorical-12-default: #169855;
  --data-viz-categorical-12-focus: #75d9a0;
  --data-viz-categorical-12-gradient-default: linear-gradient(
    180deg,
    #169855 50%,
    #087041 100%
  );
  --data-viz-categorical-12-gradient-default-end: #169855;
  --data-viz-categorical-12-gradient-default-start: #087041;
  --data-viz-categorical-12-hover: #75d9a0;
  --data-viz-categorical-12-weak-gradient-active: linear-gradient(
    180deg,
    #1f4a3a 0%,
    #23282e 100%
  );
  --data-viz-categorical-12-weak-gradient-active-end: #1f4a3a;
  --data-viz-categorical-12-weak-gradient-active-start: #23282e;
  --data-viz-categorical-12-weak-gradient-default: linear-gradient(
    180deg,
    #1f4a3a 0%,
    #23282e 100%
  );
  --data-viz-categorical-12-weak-gradient-default-end: #1f4a3a;
  --data-viz-categorical-12-weak-gradient-default-start: #23282e;
  --data-viz-categorical-12-weak-gradient-focus: linear-gradient(
    180deg,
    #1d6042 0%,
    #23282e 100%
  );
  --data-viz-categorical-12-weak-gradient-focus-end: #1d6042;
  --data-viz-categorical-12-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-12-weak-gradient-hover: linear-gradient(
    180deg,
    #1d6042 0%,
    #23282e 100%
  );
  --data-viz-categorical-12-weak-gradient-hover-end: #1d6042;
  --data-viz-categorical-12-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-2-active: #17c2c2;
  --data-viz-categorical-2-default: #17c2c2;
  --data-viz-categorical-2-focus: #a9ebeb;
  --data-viz-categorical-2-gradient-default: linear-gradient(
    180deg,
    #17c2c2 50%,
    #028e99 100%
  );
  --data-viz-categorical-2-gradient-default-end: #17c2c2;
  --data-viz-categorical-2-gradient-default-start: #028e99;
  --data-viz-categorical-2-hover: #a9ebeb;
  --data-viz-categorical-2-weak-gradient-active: linear-gradient(
    180deg,
    #1f565b 0%,
    #23282e 100%
  );
  --data-viz-categorical-2-weak-gradient-active-end: #1f565b;
  --data-viz-categorical-2-weak-gradient-active-start: #23282e;
  --data-viz-categorical-2-weak-gradient-default: linear-gradient(
    180deg,
    #1f565b 0%,
    #23282e 100%
  );
  --data-viz-categorical-2-weak-gradient-default-end: #1f565b;
  --data-viz-categorical-2-weak-gradient-default-start: #23282e;
  --data-viz-categorical-2-weak-gradient-focus: linear-gradient(
    180deg,
    #1d7578 0%,
    #23282e 100%
  );
  --data-viz-categorical-2-weak-gradient-focus-end: #1d7578;
  --data-viz-categorical-2-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-2-weak-gradient-hover: linear-gradient(
    180deg,
    #1d7578 0%,
    #23282e 100%
  );
  --data-viz-categorical-2-weak-gradient-hover-end: #1d7578;
  --data-viz-categorical-2-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-3-active: #e0ccff;
  --data-viz-categorical-3-default: #e0ccff;
  --data-viz-categorical-3-focus: #f3ebff;
  --data-viz-categorical-3-gradient-default: linear-gradient(
    180deg,
    #e0ccff 50%,
    #b587fa 100%
  );
  --data-viz-categorical-3-gradient-default-end: #e0ccff;
  --data-viz-categorical-3-gradient-default-start: #b587fa;
  --data-viz-categorical-3-hover: #f3ebff;
  --data-viz-categorical-3-weak-gradient-active: linear-gradient(
    180deg,
    #5c596d 0%,
    #23282e 100%
  );
  --data-viz-categorical-3-weak-gradient-active-end: #5c596d;
  --data-viz-categorical-3-weak-gradient-active-start: #23282e;
  --data-viz-categorical-3-weak-gradient-default: linear-gradient(
    180deg,
    #5c596d 0%,
    #23282e 100%
  );
  --data-viz-categorical-3-weak-gradient-default-end: #5c596d;
  --data-viz-categorical-3-weak-gradient-default-start: #23282e;
  --data-viz-categorical-3-weak-gradient-focus: linear-gradient(
    180deg,
    #817a96 0%,
    #23282e 100%
  );
  --data-viz-categorical-3-weak-gradient-focus-end: #817a96;
  --data-viz-categorical-3-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-3-weak-gradient-hover: linear-gradient(
    180deg,
    #817a96 0%,
    #23282e 100%
  );
  --data-viz-categorical-3-weak-gradient-hover-end: #817a96;
  --data-viz-categorical-3-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-4-active: #e3447c;
  --data-viz-categorical-4-default: #e3447c;
  --data-viz-categorical-4-focus: #fcb3c8;
  --data-viz-categorical-4-gradient-default: linear-gradient(
    180deg,
    #e3447c 50%,
    #b02863 100%
  );
  --data-viz-categorical-4-gradient-default-end: #e3447c;
  --data-viz-categorical-4-gradient-default-start: #b02863;
  --data-viz-categorical-4-hover: #fcb3c8;
  --data-viz-categorical-4-weak-gradient-active: linear-gradient(
    180deg,
    #5d3045 0%,
    #23282e 100%
  );
  --data-viz-categorical-4-weak-gradient-active-end: #5d3045;
  --data-viz-categorical-4-weak-gradient-active-start: #23282e;
  --data-viz-categorical-4-weak-gradient-default: linear-gradient(
    180deg,
    #5d3045 0%,
    #23282e 100%
  );
  --data-viz-categorical-4-weak-gradient-default-end: #5d3045;
  --data-viz-categorical-4-weak-gradient-default-start: #23282e;
  --data-viz-categorical-4-weak-gradient-focus: linear-gradient(
    180deg,
    #833655 0%,
    #23282e 100%
  );
  --data-viz-categorical-4-weak-gradient-focus-end: #833655;
  --data-viz-categorical-4-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-4-weak-gradient-hover: linear-gradient(
    180deg,
    #833655 0%,
    #23282e 100%
  );
  --data-viz-categorical-4-weak-gradient-hover-end: #833655;
  --data-viz-categorical-4-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-5-active: #9dba4c;
  --data-viz-categorical-5-default: #9dba4c;
  --data-viz-categorical-5-focus: #d7e8a9;
  --data-viz-categorical-5-gradient-default: linear-gradient(
    180deg,
    #9dba4c 50%,
    #6c8c14 100%
  );
  --data-viz-categorical-5-gradient-default-end: #9dba4c;
  --data-viz-categorical-5-gradient-default-start: #6c8c14;
  --data-viz-categorical-5-hover: #d7e8a9;
  --data-viz-categorical-5-weak-gradient-active: linear-gradient(
    180deg,
    #485437 0%,
    #23282e 100%
  );
  --data-viz-categorical-5-weak-gradient-active-end: #485437;
  --data-viz-categorical-5-weak-gradient-active-start: #23282e;
  --data-viz-categorical-5-weak-gradient-default: linear-gradient(
    180deg,
    #485437 0%,
    #23282e 100%
  );
  --data-viz-categorical-5-weak-gradient-default-end: #485437;
  --data-viz-categorical-5-weak-gradient-default-start: #23282e;
  --data-viz-categorical-5-weak-gradient-focus: linear-gradient(
    180deg,
    #60713d 0%,
    #23282e 100%
  );
  --data-viz-categorical-5-weak-gradient-focus-end: #60713d;
  --data-viz-categorical-5-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-5-weak-gradient-hover: linear-gradient(
    180deg,
    #60713d 0%,
    #23282e 100%
  );
  --data-viz-categorical-5-weak-gradient-hover-end: #60713d;
  --data-viz-categorical-5-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-6-active: #9b5ff5;
  --data-viz-categorical-6-default: #9b5ff5;
  --data-viz-categorical-6-focus: #d6baff;
  --data-viz-categorical-6-gradient-default: linear-gradient(
    180deg,
    #9b5ff5 50%,
    #753bcc 100%
  );
  --data-viz-categorical-6-gradient-default-end: #9b5ff5;
  --data-viz-categorical-6-gradient-default-start: #753bcc;
  --data-viz-categorical-6-hover: #d6baff;
  --data-viz-categorical-6-weak-gradient-active: linear-gradient(
    180deg,
    #47396a 0%,
    #23282e 100%
  );
  --data-viz-categorical-6-weak-gradient-active-end: #47396a;
  --data-viz-categorical-6-weak-gradient-active-start: #23282e;
  --data-viz-categorical-6-weak-gradient-default: linear-gradient(
    180deg,
    #47396a 0%,
    #23282e 100%
  );
  --data-viz-categorical-6-weak-gradient-default-end: #47396a;
  --data-viz-categorical-6-weak-gradient-default-start: #23282e;
  --data-viz-categorical-6-weak-gradient-focus: linear-gradient(
    180deg,
    #5f4491 0%,
    #23282e 100%
  );
  --data-viz-categorical-6-weak-gradient-focus-end: #5f4491;
  --data-viz-categorical-6-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-6-weak-gradient-hover: linear-gradient(
    180deg,
    #5f4491 0%,
    #23282e 100%
  );
  --data-viz-categorical-6-weak-gradient-hover-end: #5f4491;
  --data-viz-categorical-6-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-7-active: #ff87a9;
  --data-viz-categorical-7-default: #ff87a9;
  --data-viz-categorical-7-focus: #ffd4e0;
  --data-viz-categorical-7-gradient-default: linear-gradient(
    180deg,
    #ff87a9 50%,
    #e3447c 100%
  );
  --data-viz-categorical-7-gradient-default-end: #ff87a9;
  --data-viz-categorical-7-gradient-default-start: #e3447c;
  --data-viz-categorical-7-hover: #ffd4e0;
  --data-viz-categorical-7-weak-gradient-active: linear-gradient(
    180deg,
    #654553 0%,
    #23282e 100%
  );
  --data-viz-categorical-7-weak-gradient-active-end: #654553;
  --data-viz-categorical-7-weak-gradient-active-start: #23282e;
  --data-viz-categorical-7-weak-gradient-default: linear-gradient(
    180deg,
    #654553 0%,
    #23282e 100%
  );
  --data-viz-categorical-7-weak-gradient-default-end: #654553;
  --data-viz-categorical-7-weak-gradient-default-start: #23282e;
  --data-viz-categorical-7-weak-gradient-focus: linear-gradient(
    180deg,
    #91586c 0%,
    #23282e 100%
  );
  --data-viz-categorical-7-weak-gradient-focus-end: #91586c;
  --data-viz-categorical-7-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-7-weak-gradient-hover: linear-gradient(
    180deg,
    #91586c 0%,
    #23282e 100%
  );
  --data-viz-categorical-7-weak-gradient-hover-end: #91586c;
  --data-viz-categorical-7-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-8-active: #028e99;
  --data-viz-categorical-8-default: #028e99;
  --data-viz-categorical-8-focus: #4ad9d9;
  --data-viz-categorical-8-gradient-default: linear-gradient(
    180deg,
    #028e99 50%,
    #006773 100%
  );
  --data-viz-categorical-8-gradient-default-end: #028e99;
  --data-viz-categorical-8-gradient-default-start: #006773;
  --data-viz-categorical-8-hover: #4ad9d9;
  --data-viz-categorical-8-weak-gradient-active: linear-gradient(
    180deg,
    #19474e 0%,
    #23282e 100%
  );
  --data-viz-categorical-8-weak-gradient-active-end: #19474e;
  --data-viz-categorical-8-weak-gradient-active-start: #23282e;
  --data-viz-categorical-8-weak-gradient-default: linear-gradient(
    180deg,
    #19474e 0%,
    #23282e 100%
  );
  --data-viz-categorical-8-weak-gradient-default-end: #19474e;
  --data-viz-categorical-8-weak-gradient-default-start: #23282e;
  --data-viz-categorical-8-weak-gradient-focus: linear-gradient(
    180deg,
    #135b64 0%,
    #23282e 100%
  );
  --data-viz-categorical-8-weak-gradient-focus-end: #135b64;
  --data-viz-categorical-8-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-8-weak-gradient-hover: linear-gradient(
    180deg,
    #135b64 0%,
    #23282e 100%
  );
  --data-viz-categorical-8-weak-gradient-hover-end: #135b64;
  --data-viz-categorical-8-weak-gradient-hover-start: #23282e;
  --data-viz-categorical-9-active: #9adffc;
  --data-viz-categorical-9-default: #9adffc;
  --data-viz-categorical-9-focus: #d9f4ff;
  --data-viz-categorical-9-gradient-default: linear-gradient(
    180deg,
    #9adffc 50%,
    #23a8eb 100%
  );
  --data-viz-categorical-9-gradient-default-end: #9adffc;
  --data-viz-categorical-9-gradient-default-start: #23a8eb;
  --data-viz-categorical-9-hover: #d9f4ff;
  --data-viz-categorical-9-weak-gradient-active: linear-gradient(
    180deg,
    #475f6c 0%,
    #23282e 100%
  );
  --data-viz-categorical-9-weak-gradient-active-end: #475f6c;
  --data-viz-categorical-9-weak-gradient-active-start: #23282e;
  --data-viz-categorical-9-weak-gradient-default: linear-gradient(
    180deg,
    #475f6c 0%,
    #23282e 100%
  );
  --data-viz-categorical-9-weak-gradient-default-end: #475f6c;
  --data-viz-categorical-9-weak-gradient-default-start: #23282e;
  --data-viz-categorical-9-weak-gradient-focus: linear-gradient(
    180deg,
    #5e8395 0%,
    #23282e 100%
  );
  --data-viz-categorical-9-weak-gradient-focus-end: #5e8395;
  --data-viz-categorical-9-weak-gradient-focus-start: #23282e;
  --data-viz-categorical-9-weak-gradient-hover: linear-gradient(
    180deg,
    #5e8395 0%,
    #23282e 100%
  );
  --data-viz-categorical-9-weak-gradient-hover-end: #5e8395;
  --data-viz-categorical-9-weak-gradient-hover-start: #23282e;
  --data-viz-dormant-active: #a7adb5;
  --data-viz-dormant-default: #a7adb5;
  --data-viz-dormant-focus: #e1e4e8;
  --data-viz-dormant-gradient-default: linear-gradient(
    180deg,
    #a7adb5 50%,
    #7e868f 100%
  );
  --data-viz-dormant-gradient-default-end: #a7adb5;
  --data-viz-dormant-gradient-default-start: #7e868f;
  --data-viz-dormant-hover: #e1e4e8;
  --data-viz-dormant-weak-gradient-active: linear-gradient(
    180deg,
    #464c54 0%,
    #23282e 100%
  );
  --data-viz-dormant-weak-gradient-active-end: #464c54;
  --data-viz-dormant-weak-gradient-active-start: #23282e;
  --data-viz-dormant-weak-gradient-default: linear-gradient(
    180deg,
    #464c54 0%,
    #23282e 100%
  );
  --data-viz-dormant-weak-gradient-default-end: #464c54;
  --data-viz-dormant-weak-gradient-default-start: #23282e;
  --data-viz-dormant-weak-gradient-focus: linear-gradient(
    180deg,
    #656c75 0%,
    #23282e 100%
  );
  --data-viz-dormant-weak-gradient-focus-end: #656c75;
  --data-viz-dormant-weak-gradient-focus-start: #23282e;
  --data-viz-dormant-weak-gradient-hover: linear-gradient(
    180deg,
    #656c75 0%,
    #23282e 100%
  );
  --data-viz-dormant-weak-gradient-hover-end: #656c75;
  --data-viz-dormant-weak-gradient-hover-start: #23282e;
  --data-viz-excellent-active: #649ef5;
  --data-viz-excellent-default: #649ef5;
  --data-viz-excellent-focus: #bad6ff;
  --data-viz-excellent-gradient-default: linear-gradient(
    180deg,
    #649ef5 50%,
    #2774d9 100%
  );
  --data-viz-excellent-gradient-default-end: #649ef5;
  --data-viz-excellent-gradient-default-start: #2774d9;
  --data-viz-excellent-hover: #bad6ff;
  --data-viz-excellent-weak-gradient-active: linear-gradient(
    180deg,
    #374b6a 0%,
    #23282e 100%
  );
  --data-viz-excellent-weak-gradient-active-end: #374b6a;
  --data-viz-excellent-weak-gradient-active-start: #23282e;
  --data-viz-excellent-weak-gradient-default: linear-gradient(
    180deg,
    #374b6a 0%,
    #23282e 100%
  );
  --data-viz-excellent-weak-gradient-default-end: #374b6a;
  --data-viz-excellent-weak-gradient-default-start: #23282e;
  --data-viz-excellent-weak-gradient-focus: linear-gradient(
    180deg,
    #446392 0%,
    #23282e 100%
  );
  --data-viz-excellent-weak-gradient-focus-end: #446392;
  --data-viz-excellent-weak-gradient-focus-start: #23282e;
  --data-viz-excellent-weak-gradient-hover: linear-gradient(
    180deg,
    #446392 0%,
    #23282e 100%
  );
  --data-viz-excellent-weak-gradient-hover-end: #446392;
  --data-viz-excellent-weak-gradient-hover-start: #23282e;
  --data-viz-low-warning-active: #0bb2b8;
  --data-viz-low-warning-default: #0bb2b8;
  --data-viz-low-warning-focus: #84e3e3;
  --data-viz-low-warning-gradient-default: linear-gradient(
    180deg,
    #0bb2b8 50%,
    #01818c 100%
  );
  --data-viz-low-warning-gradient-default-end: #0bb2b8;
  --data-viz-low-warning-gradient-default-start: #01818c;
  --data-viz-low-warning-hover: #84e3e3;
  --data-viz-low-warning-weak-gradient-active: linear-gradient(
    180deg,
    #1c5157 0%,
    #23282e 100%
  );
  --data-viz-low-warning-weak-gradient-active-end: #1c5157;
  --data-viz-low-warning-weak-gradient-active-start: #23282e;
  --data-viz-low-warning-weak-gradient-default: linear-gradient(
    180deg,
    #1c5157 0%,
    #23282e 100%
  );
  --data-viz-low-warning-weak-gradient-default-end: #1c5157;
  --data-viz-low-warning-weak-gradient-default-start: #23282e;
  --data-viz-low-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #176d73 0%,
    #23282e 100%
  );
  --data-viz-low-warning-weak-gradient-focus-end: #176d73;
  --data-viz-low-warning-weak-gradient-focus-start: #23282e;
  --data-viz-low-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #176d73 0%,
    #23282e 100%
  );
  --data-viz-low-warning-weak-gradient-hover-end: #176d73;
  --data-viz-low-warning-weak-gradient-hover-start: #23282e;
  --data-viz-negative-active: #fa5762;
  --data-viz-negative-default: #fa5762;
  --data-viz-negative-focus: #ffb2b5;
  --data-viz-negative-gradient-default: linear-gradient(
    180deg,
    #fa5762 50%,
    #cc2d37 100%
  );
  --data-viz-negative-gradient-default-end: #fa5762;
  --data-viz-negative-gradient-default-start: #cc2d37;
  --data-viz-negative-hover: #ffb2b5;
  --data-viz-negative-weak-gradient-active: linear-gradient(
    180deg,
    #63363e 0%,
    #23282e 100%
  );
  --data-viz-negative-weak-gradient-active-end: #63363e;
  --data-viz-negative-weak-gradient-active-start: #23282e;
  --data-viz-negative-weak-gradient-default: linear-gradient(
    180deg,
    #63363e 0%,
    #23282e 100%
  );
  --data-viz-negative-weak-gradient-default-end: #63363e;
  --data-viz-negative-weak-gradient-default-start: #23282e;
  --data-viz-negative-weak-gradient-focus: linear-gradient(
    180deg,
    #8f3f48 0%,
    #23282e 100%
  );
  --data-viz-negative-weak-gradient-focus-end: #8f3f48;
  --data-viz-negative-weak-gradient-focus-start: #23282e;
  --data-viz-negative-weak-gradient-hover: linear-gradient(
    180deg,
    #8f3f48 0%,
    #23282e 100%
  );
  --data-viz-negative-weak-gradient-hover-end: #8f3f48;
  --data-viz-negative-weak-gradient-hover-start: #23282e;
  --data-viz-positive-active: #33bbf5;
  --data-viz-positive-default: #33bbf5;
  --data-viz-positive-focus: #b5e9ff;
  --data-viz-positive-gradient-default: linear-gradient(
    180deg,
    #33bbf5 50%,
    #0d8bd4 100%
  );
  --data-viz-positive-gradient-default-end: #33bbf5;
  --data-viz-positive-gradient-default-start: #0d8bd4;
  --data-viz-positive-hover: #b5e9ff;
  --data-viz-positive-weak-gradient-active: linear-gradient(
    180deg,
    #28546a 0%,
    #23282e 100%
  );
  --data-viz-positive-weak-gradient-active-end: #28546a;
  --data-viz-positive-weak-gradient-active-start: #23282e;
  --data-viz-positive-weak-gradient-default: linear-gradient(
    180deg,
    #28546a 0%,
    #23282e 100%
  );
  --data-viz-positive-weak-gradient-default-end: #28546a;
  --data-viz-positive-weak-gradient-default-start: #23282e;
  --data-viz-positive-weak-gradient-focus: linear-gradient(
    180deg,
    #2b7192 0%,
    #23282e 100%
  );
  --data-viz-positive-weak-gradient-focus-end: #2b7192;
  --data-viz-positive-weak-gradient-focus-start: #23282e;
  --data-viz-positive-weak-gradient-hover: linear-gradient(
    180deg,
    #2b7192 0%,
    #23282e 100%
  );
  --data-viz-positive-weak-gradient-hover-end: #2b7192;
  --data-viz-positive-weak-gradient-hover-start: #23282e;
  --data-viz-severe-warning-active: #f7782f;
  --data-viz-severe-warning-default: #f7782f;
  --data-viz-severe-warning-focus: #fcc9a7;
  --data-viz-severe-warning-gradient-default: linear-gradient(
    180deg,
    #f7782f 50%,
    #c44f14 100%
  );
  --data-viz-severe-warning-gradient-default-end: #f7782f;
  --data-viz-severe-warning-gradient-default-start: #c44f14;
  --data-viz-severe-warning-hover: #fcc9a7;
  --data-viz-severe-warning-weak-gradient-active: linear-gradient(
    180deg,
    #63402e 0%,
    #23282e 100%
  );
  --data-viz-severe-warning-weak-gradient-active-end: #63402e;
  --data-viz-severe-warning-weak-gradient-active-start: #23282e;
  --data-viz-severe-warning-weak-gradient-default: linear-gradient(
    180deg,
    #63402e 0%,
    #23282e 100%
  );
  --data-viz-severe-warning-weak-gradient-default-end: #63402e;
  --data-viz-severe-warning-weak-gradient-default-start: #23282e;
  --data-viz-severe-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #8d502f 0%,
    #23282e 100%
  );
  --data-viz-severe-warning-weak-gradient-focus-end: #8d502f;
  --data-viz-severe-warning-weak-gradient-focus-start: #23282e;
  --data-viz-severe-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #8d502f 0%,
    #23282e 100%
  );
  --data-viz-severe-warning-weak-gradient-hover-end: #8d502f;
  --data-viz-severe-warning-weak-gradient-hover-start: #23282e;
  --data-viz-warning-active: #f0c243;
  --data-viz-warning-default: #f0c243;
  --data-viz-warning-focus: #f5e08e;
  --data-viz-warning-gradient-default: linear-gradient(
    180deg,
    #f0c243 50%,
    #d6900d 100%
  );
  --data-viz-warning-gradient-default-end: #f0c243;
  --data-viz-warning-gradient-default-start: #d6900d;
  --data-viz-warning-hover: #f5e08e;
  --data-viz-warning-weak-gradient-active: linear-gradient(
    180deg,
    #615634 0%,
    #23282e 100%
  );
  --data-viz-warning-weak-gradient-active-end: #615634;
  --data-viz-warning-weak-gradient-active-start: #23282e;
  --data-viz-warning-weak-gradient-default: linear-gradient(
    180deg,
    #615634 0%,
    #23282e 100%
  );
  --data-viz-warning-weak-gradient-default-end: #615634;
  --data-viz-warning-weak-gradient-default-start: #23282e;
  --data-viz-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #897539 0%,
    #23282e 100%
  );
  --data-viz-warning-weak-gradient-focus-end: #897539;
  --data-viz-warning-weak-gradient-focus-start: #23282e;
  --data-viz-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #897539 0%,
    #23282e 100%
  );
  --data-viz-warning-weak-gradient-hover-end: #897539;
  --data-viz-warning-weak-gradient-hover-start: #23282e;

  /* token for modal overlay */
  --overlay-bg-default: rgba(0,0,0,0.69804);
}

/* Non-token additions for contextual container. */
*[data-mds-theme="dark"] [class^="mds-"] {
  color-scheme: dark;
}
*[data-mds-theme="dark"] [class*=" mds-"] {
  color-scheme: dark;
}
`,ue=`/**
 * This file is auto-generated. Do not edit it directly.
 */

:root {
  --brand-bg-default: #373c42;
  --brand-bg-hover: #373c42;
  --brand-bg-focus: #464c54;
  --brand-bg-active: #464c54;
  --brand-bg-disabled: #e1e4e8;
  --brand-bg-gradient-start: #373c42;
  --brand-bg-gradient-end: #0f1214;
  --brand-bg-gradient-default: linear-gradient(90deg, #373c42 0%, #0f1214 100%);
  --brand-bg-strong-default: #373c42;
  --brand-bg-strong-hover: #373c42;
  --brand-bg-strong-focus: #373c42;
  --brand-bg-strong-active: #373c42;
  --brand-text-default: #f7f7f7;
  --brand-text-hover: #f7f7f7;
  --brand-text-active: #f7f7f7;
  --brand-text-weak-default: #f7f7f7;
  --brand-text-weak-hover: #f7f7f7;
  --brand-text-weak-focus: #f7f7f7;
  --brand-text-weak-active: #f7f7f7;
  --brand-text-strong-default: #f0f1f2;
  --brand-icon-default: #f7f7f7;
  --brand-icon-hover: #fff;
  --brand-icon-active: #fff;
  --brand-icon-weak-default: #f7f7f7;
  --brand-icon-weak-hover: #f7f7f7;
  --brand-icon-weak-focus: #f7f7f7;
  --brand-icon-weak-active: #f7f7f7;
  --brand-border-active: #cce1ff;
  --brand-accent-icon-default: #7e868f;
  --brand-accent-icon-focus: #fff;
  --brand-accent-icon-active: #45991f;
  --brand-accent-icon-disabled: #d0d4d9;
  --brand-accent-icon-weak-default: #c1c6cc;
  --brand-accent-icon-weak-focus: #fff;
  --brand-accent-icon-weak-active: #6bbf41;
  --brand-accent-icon-weak-disabled: #d0d4d9;
  --brand-accent-icon-medium-default: #a7adb5;
  --brand-accent-icon-medium-focus: #fff;
  --brand-accent-icon-medium-active: #52a62b;
  --brand-accent-icon-medium-disabled: #d0d4d9;
  --brand-accent-border-default: #52a62b;
  --brand-accent-border-hover: #e1e4e8;
  --brand-accent-border-focus: #45991f;
  --brand-accent-border-active: #45991f;
  --brand-accent-border-weak-default: #d0d4d9;
  --brand-accent-border-weak-hover: #fff;
  --brand-accent-border-weak-focus: #fff;
  --brand-accent-border-weak-active: #6bbf41;
  --brand-accent-border-weak-disabled: #fff;
  --brand-accent-border-medium-default: #f0f1f2;
  --brand-accent-border-medium-hover: #fff;
  --brand-accent-border-medium-focus: #fff;
  --brand-accent-border-medium-active: #e0f5d5;
  --brand-accent-border-medium-disabled: #fff;
  --brand-accent-border-strong-default: #f7f7f7;
  --brand-accent-border-strong-hover: #f7f7f7;
  --brand-accent-border-strong-focus: #f7f7f7;
  --brand-accent-border-strong-active: #f7f7f7;
  --brand-accent-border-strong-disabled: #fff;
  --base-bg-default: #f7f7f7;
  --base-bg-hover: #f7f7f7;
  --base-bg-active: #f7f7f7;
  --base-bg-disabled: #f0f1f2;
  --base-bg-weak-default: #fff;
  --base-bg-weak-hover: rgba(225,228,232,0.8);
  --base-bg-weak-active: #f0f1f2;
  --base-bg-weak-disabled: #f0f1f2;
  --base-bg-medium-default: #f7f7f7;
  --base-bg-medium-hover: #e1e4e8;
  --base-bg-medium-active: #f0f1f2;
  --base-bg-medium-disabled: #f7f7f7;
  --base-bg-strong-default: #656c75;
  --base-bg-strong-hover: #23282e;
  --base-bg-strong-focus: #23282e;
  --base-bg-strong-active: #23282e;
  --base-bg-strong-disabled: #d0d4d9;
  --base-icon-in-default: #fff;
  --base-icon-in-hover: #fff;
  --base-icon-in-focus: #fff;
  --base-icon-in-active: #fff;
  --base-icon-in-disabled: #fff;
  --base-text-default: #23282e;
  --base-text-disabled: #c1c6cc;
  --base-text-weak-default: #889099;
  --base-text-weak-disabled: #c1c6cc;
  --base-text-medium-default: #596069;
  --base-text-medium-disabled: #c1c6cc;
  --base-text-strong-default: #373c42;
  --base-text-strong-disabled: #c1c6cc;
  --base-text-in-default: #fff;
  --base-text-in-hover: #fff;
  --base-text-in-focus: #fff;
  --base-text-in-active: #fff;
  --base-text-in-disabled: #fff;
  --base-text-in-weak-default: #f7f7f7;
  --base-border-default: #e1e4e8;
  --base-border-weak-default: #fff;
  --base-border-medium-default: #e1e4e8;
  --base-border-strong-default: #656c75;
  --base-border-gradient-default: linear-gradient(
    180deg,
    #f7f7f7 0%,
    #e1e4e8 50%,
    #f7f7f7 100%
  );
  --inverse-bg-default: #373c42;
  --inverse-bg-hover: #373c42;
  --inverse-bg-focus: #464c54;
  --inverse-bg-active: #464c54;
  --inverse-bg-disabled: #e1e4e8;
  --inverse-bg-gradient-start: #373c42;
  --inverse-bg-gradient-end: #0f1214;
  --inverse-bg-gradient-default: linear-gradient(
    90deg,
    #373c42 0%,
    #0f1214 100%
  );
  --inverse-bg-weak-default: #373c42;
  --inverse-text-default: #f7f7f7;
  --inverse-text-hover: #f7f7f7;
  --inverse-text-focus: #f7f7f7;
  --inverse-text-active: #f7f7f7;
  --inverse-text-disabled: #656c75;
  --inverse-text-medium-default: #c1c6cc;
  --inverse-text-medium-disabled: #656c75;
  --inverse-icon-default: #f7f7f7;
  --inverse-icon-hover: #fff;
  --inverse-icon-focus: #fff;
  --inverse-icon-active: #fff;
  --inverse-icon-disabled: #6f7680;
  --inverse-icon-strong-default: #fff;
  --inverse-icon-strong-hover: #fff;
  --inverse-icon-strong-focus: #fff;
  --inverse-icon-strong-active: #fff;
  --inverse-icon-strong-disabled: #fff;
  --inverse-border-default: #6f7680;
  --inverse-border-hover: #649ef5;
  --inverse-border-focus: #cce1ff;
  --inverse-border-active: #cce1ff;
  --inverse-border-disabled: #e1e4e8;
  --control-bg-default: #fff;
  --control-bg-hover: #e3eeff;
  --control-bg-focus: #f0f1f2;
  --control-bg-active: #f0f1f2;
  --control-bg-disabled: #f7f7f7;
  --control-bg-weak-default: #fff;
  --control-bg-weak-hover: #cce1ff;
  --control-bg-weak-focus: #e3eeff;
  --control-bg-weak-active: #e3eeff;
  --control-bg-weak-disabled: #f7f7f7;
  --control-bg-medium-default: #fff;
  --control-bg-medium-hover: #f7f7f7;
  --control-bg-medium-focus: #e3eeff;
  --control-bg-medium-active: #e3eeff;
  --control-bg-medium-disabled: #e1e4e8;
  --control-bg-strong-default: #2774d9;
  --control-bg-strong-hover: #0d5cbd;
  --control-bg-strong-focus: #0d5cbd;
  --control-bg-strong-active: #0d5cbd;
  --control-bg-strong-disabled: #bad6ff;
  --control-icon-default: #1d69cc;
  --control-icon-hover: #0d5cbd;
  --control-icon-focus: #0d5cbd;
  --control-icon-active: #0d5cbd;
  --control-icon-disabled: #a3c8ff;
  --control-icon-weak-default: #7e868f;
  --control-icon-weak-hover: #2774d9;
  --control-icon-weak-focus: #2774d9;
  --control-icon-weak-active: #2774d9;
  --control-icon-weak-disabled: #d0d4d9;
  --control-icon-medium-default: #2774d9;
  --control-icon-medium-hover: #0d5cbd;
  --control-icon-medium-focus: #0d5cbd;
  --control-icon-medium-active: #0d5cbd;
  --control-icon-medium-disabled: #a3c8ff;
  --control-icon-strong-default: #656c75;
  --control-icon-strong-hover: #464c54;
  --control-icon-strong-focus: #1d69cc;
  --control-icon-strong-active: #1d69cc;
  --control-icon-strong-disabled: #c1c6cc;
  --control-icon-in-default: #fff;
  --control-icon-in-hover: #fff;
  --control-icon-in-focus: #fff;
  --control-icon-in-active: #fff;
  --control-icon-in-disabled: #c1c6cc;
  --control-icon-in-strong-default: #2774d9;
  --control-icon-in-strong-hover: #2774d9;
  --control-icon-in-strong-focus: #2774d9;
  --control-icon-in-strong-active: #2774d9;
  --control-icon-in-strong-disabled: #c1c6cc;
  --control-border-default: #889099;
  --control-border-hover: #3e84e5;
  --control-border-focus: #3e84e5;
  --control-border-active: #3e84e5;
  --control-border-disabled: #d0d4d9;
  --control-border-weak-default: #e1e4e8;
  --control-border-weak-hover: #7cadf7;
  --control-border-weak-focus: #7cadf7;
  --control-border-weak-active: #7cadf7;
  --control-border-weak-disabled: #d0d4d9;
  --control-border-medium-default: #2774d9;
  --control-border-medium-hover: #bad6ff;
  --control-border-medium-focus: #2774d9;
  --control-border-medium-active: #2774d9;
  --control-border-medium-disabled: #d0d4d9;
  --control-border-strong-default: #656c75;
  --control-border-strong-hover: #656c75;
  --control-border-strong-focus: #2774d9;
  --control-border-strong-active: #2774d9;
  --control-border-strong-disabled: #d0d4d9;
  --interact-bg-default: #1d69cc;
  --interact-bg-hover: #0d5cbd;
  --interact-bg-focus: #0d5cbd;
  --interact-bg-active: #0d5cbd;
  --interact-bg-disabled: #a3c8ff;
  --interact-bg-weak-default: #fff;
  --interact-bg-weak-hover: #cce1ff;
  --interact-bg-weak-focus: #cce1ff;
  --interact-bg-weak-active: #cce1ff;
  --interact-bg-weak-disabled: #fff;
  --interact-bg-medium-default: #2774d9;
  --interact-bg-medium-hover: #cce1ff;
  --interact-bg-medium-active: #cce1ff;
  --interact-bg-strong-active: #f7f7f7;
  --interact-bg-strong-hover: #f7f7f7;
  --interact-text-default: #1d69cc;
  --interact-text-hover: #0d5cbd;
  --interact-text-focus: #0d5cbd;
  --interact-text-active: #0d5cbd;
  --interact-text-disabled: #a3c8ff;
  --interact-text-weak-default: #656c75;
  --interact-text-weak-hover: #1d69cc;
  --interact-text-weak-focus: #1d69cc;
  --interact-text-weak-active: #1d69cc;
  --interact-text-weak-disabled: #c1c6cc;
  --interact-text-in-default: #fff;
  --interact-text-in-hover: #fff;
  --interact-text-in-focus: #fff;
  --interact-text-in-active: #fff;
  --interact-text-in-disabled: #fff;
  --interact-icon-default: #1d69cc;
  --interact-icon-hover: #0d5cbd;
  --interact-icon-focus: #0d5cbd;
  --interact-icon-active: #0d5cbd;
  --interact-icon-disabled: #a3c8ff;
  --interact-icon-weak-default: #7e868f;
  --interact-icon-weak-hover: #6f7680;
  --interact-icon-weak-focus: #6f7680;
  --interact-icon-weak-active: #6f7680;
  --interact-icon-weak-disabled: #d0d4d9;
  --interact-icon-medium-default: #7e868f;
  --interact-icon-medium-hover: #2774d9;
  --interact-icon-medium-focus: #2774d9;
  --interact-icon-medium-active: #2774d9;
  --interact-icon-medium-disabled: #c1c6cc;
  --interact-icon-strong-default: #656c75;
  --interact-icon-strong-hover: #464c54;
  --interact-icon-strong-focus: #464c54;
  --interact-icon-strong-active: #464c54;
  --interact-icon-strong-disabled: #a7adb5;
  --interact-icon-in-default: #fff;
  --interact-icon-in-hover: #fff;
  --interact-icon-in-focus: #fff;
  --interact-icon-in-active: #fff;
  --interact-icon-in-disabled: #fff;
  --interact-border-default: #1d69cc;
  --interact-border-hover: #0d5cbd;
  --interact-border-focus: #0d5cbd;
  --interact-border-active: #0d5cbd;
  --interact-border-disabled: #a3c8ff;
  --interact-border-weak-default: #e1e4e8;
  --interact-border-weak-hover: #cce1ff;
  --interact-border-weak-focus: #e1e4e8;
  --interact-border-weak-active: #e1e4e8;
  --interact-border-weak-disabled: #e1e4e8;
  --interact-border-medium-default: #2774d9;
  --interact-border-medium-hover: #bad6ff;
  --interact-border-medium-focus: #2774d9;
  --interact-border-medium-active: #2774d9;
  --interact-border-medium-disabled: #e1e4e8;
  --positive-bg-default: #45991f;
  --positive-bg-hover: #45991f;
  --positive-bg-focus: #45991f;
  --positive-bg-active: #45991f;
  --positive-bg-disabled: #b0e396;
  --positive-bg-weak-default: #fff;
  --positive-bg-weak-hover: #fff;
  --positive-bg-weak-focus: #fff;
  --positive-bg-weak-active: #fff;
  --positive-bg-weak-disabled: #fff;
  --positive-bg-medium-default: #e0f5d5;
  --positive-bg-medium-hover: #e0f5d5;
  --positive-bg-medium-focus: #e0f5d5;
  --positive-bg-medium-active: #e0f5d5;
  --positive-bg-medium-disabled: #f7f7f7;
  --positive-bg-strong-default: #e0f5d5;
  --positive-icon-default: #45991f;
  --positive-icon-hover: #45991f;
  --positive-icon-focus: #45991f;
  --positive-icon-active: #45991f;
  --positive-icon-disabled: #d0d4d9;
  --positive-icon-weak-default: #b0e396;
  --positive-icon-weak-hover: #b0e396;
  --positive-icon-weak-focus: #b0e396;
  --positive-icon-weak-active: #b0e396;
  --positive-icon-weak-disabled: #b0e396;
  --positive-icon-strong-default: #45991f;
  --positive-icon-strong-hover: #45991f;
  --positive-icon-strong-focus: #45991f;
  --positive-icon-strong-active: #45991f;
  --positive-icon-strong-disabled: #d0d4d9;
  --positive-icon-in-default: #fff;
  --positive-icon-in-hover: #fff;
  --positive-icon-in-focus: #fff;
  --positive-icon-in-active: #fff;
  --positive-icon-in-disabled: #fff;
  --positive-border-default: #45991f;
  --positive-border-hover: #45991f;
  --positive-border-focus: #45991f;
  --positive-border-active: #45991f;
  --positive-border-disabled: #d0d4d9;
  --positive-border-weak-default: #fff;
  --positive-border-weak-hover: #fff;
  --positive-border-weak-focus: #fff;
  --positive-border-weak-active: #fff;
  --positive-border-weak-disabled: #d0d4d9;
  --positive-border-strong-default: #398519;
  --positive-border-strong-hover: #398519;
  --positive-border-strong-focus: #398519;
  --positive-border-strong-active: #398519;
  --positive-border-strong-disabled: #398519;
  --positive-text-in-default: #fff;
  --positive-text-in-hover: #fff;
  --positive-text-in-focus: #fff;
  --positive-text-in-active: #fff;
  --positive-text-in-disabled: #fff;
  --warning-bg-default: #cc8604;
  --warning-bg-hover: #cc8604;
  --warning-bg-focus: #cc8604;
  --warning-bg-active: #cc8604;
  --warning-bg-disabled: #f2d268;
  --warning-bg-weak-default: #fff;
  --warning-bg-weak-hover: #fff;
  --warning-bg-weak-focus: #fff;
  --warning-bg-weak-active: #fff;
  --warning-bg-weak-disabled: #fff;
  --warning-bg-medium-default: #faefb9;
  --warning-bg-medium-hover: #faefb9;
  --warning-bg-medium-focus: #faefb9;
  --warning-bg-medium-active: #faefb9;
  --warning-bg-medium-disabled: #f7f7f7;
  --warning-bg-strong-default: #faefb9;
  --warning-icon-default: #cc8604;
  --warning-icon-hover: #cc8604;
  --warning-icon-focus: #cc8604;
  --warning-icon-active: #cc8604;
  --warning-icon-disabled: #d0d4d9;
  --warning-icon-strong-default: #bd7202;
  --warning-icon-strong-hover: #bd7202;
  --warning-icon-strong-focus: #bd7202;
  --warning-icon-strong-active: #bd7202;
  --warning-icon-strong-disabled: #d0d4d9;
  --warning-icon-in-default: #fff;
  --warning-icon-in-hover: #fff;
  --warning-icon-in-focus: #fff;
  --warning-icon-in-active: #fff;
  --warning-icon-in-disabled: #fff;
  --warning-border-default: #cc8604;
  --warning-border-hover: #cc8604;
  --warning-border-focus: #cc8604;
  --warning-border-active: #cc8604;
  --warning-border-disabled: #d0d4d9;
  --warning-border-weak-default: #fff;
  --warning-border-weak-hover: #fff;
  --warning-border-weak-focus: #fff;
  --warning-border-weak-active: #fff;
  --warning-border-weak-disabled: #d0d4d9;
  --warning-border-strong-default: #a65503;
  --warning-border-strong-hover: #a65503;
  --warning-border-strong-focus: #a65503;
  --warning-border-strong-active: #a65503;
  --warning-border-strong-disabled: #a65503;
  --warning-text-in-default: #fff;
  --warning-text-in-hover: #fff;
  --warning-text-in-focus: #fff;
  --warning-text-in-active: #fff;
  --warning-text-in-disabled: #fff;
  --severe-warning-bg-default: #f26722;
  --severe-warning-bg-hover: #f26722;
  --severe-warning-bg-focus: #f26722;
  --severe-warning-bg-active: #f26722;
  --severe-warning-bg-disabled: #fcc9a7;
  --severe-warning-bg-weak-default: #fff;
  --severe-warning-bg-weak-hover: #fff;
  --severe-warning-bg-weak-focus: #fff;
  --severe-warning-bg-weak-active: #fff;
  --severe-warning-bg-weak-disabled: #fff;
  --severe-warning-bg-medium-default: #ffeadb;
  --severe-warning-bg-medium-hover: #ffeadb;
  --severe-warning-bg-medium-focus: #ffeadb;
  --severe-warning-bg-medium-active: #ffeadb;
  --severe-warning-bg-medium-disabled: #f7f7f7;
  --severe-warning-bg-strong-default: #ffeadb;
  --severe-warning-icon-default: #f26722;
  --severe-warning-icon-hover: #d95a1a;
  --severe-warning-icon-focus: #c44f14;
  --severe-warning-icon-active: #c44f14;
  --severe-warning-icon-disabled: #d0d4d9;
  --severe-warning-icon-strong-default: #d95a1a;
  --severe-warning-icon-strong-hover: #d95a1a;
  --severe-warning-icon-strong-focus: #d95a1a;
  --severe-warning-icon-strong-active: #d95a1a;
  --severe-warning-icon-strong-disabled: #d95a1a;
  --severe-warning-icon-in-default: #fff;
  --severe-warning-icon-in-hover: #fff;
  --severe-warning-icon-in-focus: #fff;
  --severe-warning-icon-in-active: #fff;
  --severe-warning-icon-in-disabled: #fff;
  --severe-warning-border-default: #f26722;
  --severe-warning-border-hover: #f26722;
  --severe-warning-border-focus: #f26722;
  --severe-warning-border-active: #f26722;
  --severe-warning-border-disabled: #f26722;
  --severe-warning-border-weak-default: #fff;
  --severe-warning-border-weak-hover: #fff;
  --severe-warning-border-weak-focus: #fff;
  --severe-warning-border-weak-active: #fff;
  --severe-warning-border-weak-disabled: #d0d4d9;
  --negative-bg-default: #cc2d37;
  --negative-bg-hover: #cc2d37;
  --negative-bg-focus: #cc2d37;
  --negative-bg-active: #cc2d37;
  --negative-bg-disabled: #ffb2b5;
  --negative-bg-weak-default: #fff;
  --negative-bg-weak-hover: #ffd4d5;
  --negative-bg-weak-focus: #ffd4d5;
  --negative-bg-weak-active: #ffd4d5;
  --negative-bg-weak-disabled: #fff;
  --negative-bg-medium-default: #ffe8e9;
  --negative-bg-medium-hover: #ffe8e9;
  --negative-bg-medium-focus: #ffe8e9;
  --negative-bg-medium-active: #ffe8e9;
  --negative-bg-medium-disabled: #f7f7f7;
  --negative-bg-strong-default: #ffe8e9;
  --negative-text-default: #cc2d37;
  --negative-text-hover: #b2242d;
  --negative-text-focus: #b2242d;
  --negative-text-active: #b2242d;
  --negative-text-disabled: #ffb2b5;
  --negative-text-in-default: #fff;
  --negative-text-in-hover: #fff;
  --negative-text-in-focus: #fff;
  --negative-text-in-active: #fff;
  --negative-text-in-disabled: #fff;
  --negative-icon-default: #cc2d37;
  --negative-icon-hover: #b2242d;
  --negative-icon-focus: #b2242d;
  --negative-icon-active: #b2242d;
  --negative-icon-disabled: #ffb2b5;
  --negative-icon-weak-default: #ffc7c9;
  --negative-icon-weak-hover: #ffc7c9;
  --negative-icon-weak-focus: #ffc7c9;
  --negative-icon-weak-active: #ffc7c9;
  --negative-icon-weak-disabled: #d0d4d9;
  --negative-icon-in-default: #fff;
  --negative-icon-in-hover: #fff;
  --negative-icon-in-focus: #fff;
  --negative-icon-in-active: #fff;
  --negative-icon-in-disabled: #fff;
  --negative-border-default: #cc2d37;
  --negative-border-hover: #b2242d;
  --negative-border-focus: #b2242d;
  --negative-border-active: #b2242d;
  --negative-border-disabled: #ffb2b5;
  --negative-border-weak-default: #fff;
  --negative-border-weak-hover: #fff;
  --negative-border-weak-focus: #fff;
  --negative-border-weak-active: #fff;
  --negative-border-weak-disabled: #d0d4d9;
  --negative-border-medium-default: #d93843;
  --negative-border-medium-hover: #d93843;
  --negative-border-medium-focus: #d93843;
  --negative-border-medium-active: #d93843;
  --negative-border-medium-disabled: #ffb2b5;
  --negative-border-strong-default: #b2242d;
  --negative-border-strong-hover: #b2242d;
  --negative-border-strong-focus: #b2242d;
  --negative-border-strong-active: #b2242d;
  --negative-border-strong-disabled: #ffb2b5;
  --info-bg-default: #2774d9;
  --info-bg-hover: #2774d9;
  --info-bg-focus: #2774d9;
  --info-bg-active: #2774d9;
  --info-bg-disabled: #2774d9;
  --info-bg-weak-default: #fff;
  --info-bg-weak-hover: #fff;
  --info-bg-weak-focus: #fff;
  --info-bg-weak-active: #fff;
  --info-bg-weak-disabled: #fff;
  --info-bg-medium-default: #e3eeff;
  --info-bg-medium-hover: #e3eeff;
  --info-bg-medium-focus: #e3eeff;
  --info-bg-medium-active: #e3eeff;
  --info-bg-medium-disabled: #f7f7f7;
  --info-bg-strong-default: #e3eeff;
  --info-icon-default: #2774d9;
  --info-icon-hover: #2774d9;
  --info-icon-focus: #2774d9;
  --info-icon-active: #2774d9;
  --info-icon-disabled: #d0d4d9;
  --info-icon-weak-default: #a3c8ff;
  --info-icon-weak-hover: #a3c8ff;
  --info-icon-weak-focus: #a3c8ff;
  --info-icon-weak-active: #a3c8ff;
  --info-icon-weak-disabled: #a3c8ff;
  --info-icon-in-default: #fff;
  --info-icon-in-hover: #fff;
  --info-icon-in-focus: #fff;
  --info-icon-in-active: #fff;
  --info-icon-in-disabled: #fff;
  --info-border-default: #2774d9;
  --info-border-hover: #2774d9;
  --info-border-focus: #2774d9;
  --info-border-active: #2774d9;
  --info-border-disabled: #d0d4d9;
  --info-border-weak-default: #fff;
  --info-border-weak-hover: #fff;
  --info-border-weak-focus: #fff;
  --info-border-weak-active: #fff;
  --info-border-weak-disabled: #d0d4d9;
  --dormant-bg-default: #6f7680;
  --dormant-bg-disabled: #6f7680;
  --dormant-bg-medium-default: #e1e4e8;
  --dormant-bg-medium-disabled: #f7f7f7;
  --dormant-icon-default: #6f7680;
  --dormant-icon-disabled: #d0d4d9;
  --dormant-icon-medium-default: #fff;
  --dormant-icon-in-default: #fff;
  --dormant-icon-in-disabled: #fff;
  --dormant-icon-in-medium-default: #fff;
  --dormant-border-default: #889099;
  --dormant-border-disabled: #d0d4d9;
  --accent-a-default: #7d8aff;
  --accent-a-hover: #6977f0;
  --accent-a-weak-default: #ebedff;
  --accent-b-default: #b02863;
  --accent-b-hover: #991d53;
  --accent-b-weak-default: #ffe8ef;
  --accent-c-default: #f2638c;
  --accent-c-hover: #e3447c;
  --accent-c-weak-default: #ffd4e0;
  --accent-d-default: #753bcc;
  --accent-d-hover: #6732b8;
  --accent-d-weak-default: #f3ebff;
  --accent-e-default: #7da11b;
  --accent-e-hover: #6c8c14;
  --accent-e-weak-default: #eaf2d3;
  --accent-f-default: #ad3907;
  --accent-f-hover: #942e03;
  --accent-f-weak-default: #ffeadb;
  --accent-g-default: #04a4b0;
  --accent-g-hover: #028e99;
  --accent-g-weak-default: #d5f5f5;
  --accent-h-default: #006773;
  --accent-h-hover: #005c66;
  --accent-h-weak-default: #a9ebeb;
  --accent-i-default: #e85fc6;
  --accent-i-hover: #d649b3;
  --accent-i-weak-default: #ffe8f9;
  --accent-j-default: #545c8a;
  --accent-j-hover: #484f7a;
  --accent-j-weak-default: #ebedff;
  --accent-k-default: #21a65f;
  --accent-k-hover: #169855;
  --accent-k-weak-default: #d4f5e1;
  --in-progress-bg-medium-default: #e3eeff;
  --in-progress-bg-medium-hover: #e3eeff;
  --in-progress-bg-medium-focus: #e3eeff;
  --in-progress-bg-medium-active: #e3eeff;
  --in-progress-bg-medium-disabled: #f7f7f7;
  --in-progress-icon-default: #2774d9;
  --in-progress-icon-hover: #2774d9;
  --in-progress-icon-focus: #2774d9;
  --in-progress-icon-active: #2774d9;
  --in-progress-icon-disabled: #d0d4d9;
  --in-progress-icon-in-default: #fff;
  --in-progress-icon-in-hover: #fff;
  --in-progress-icon-in-focus: #fff;
  --in-progress-icon-in-active: #fff;
  --in-progress-icon-in-disabled: #fff;
  --in-progress-border-default: #2774d9;
  --in-progress-border-hover: #2774d9;
  --in-progress-border-focus: #2774d9;
  --in-progress-border-active: #2774d9;
  --in-progress-border-disabled: #d0d4d9;
  --low-warning-bg-medium-default: #d5f5f5;
  --low-warning-bg-medium-hover: #d5f5f5;
  --low-warning-bg-medium-focus: #d5f5f5;
  --low-warning-bg-medium-active: #d5f5f5;
  --low-warning-bg-medium-disabled: #f7f7f7;
  --low-warning-icon-default: #028e99;
  --low-warning-icon-hover: #028e99;
  --low-warning-icon-focus: #028e99;
  --low-warning-icon-active: #028e99;
  --low-warning-icon-disabled: #d0d4d9;
  --low-warning-icon-in-default: #fff;
  --low-warning-icon-in-hover: #fff;
  --low-warning-icon-in-focus: #fff;
  --low-warning-icon-in-active: #fff;
  --low-warning-icon-in-disabled: #fff;
  --low-warning-border-default: #028e99;
  --low-warning-border-hover: #028e99;
  --low-warning-border-focus: #028e99;
  --low-warning-border-active: #028e99;
  --low-warning-border-disabled: #d0d4d9;
  --excellent-bg-medium-default: #d4f5e1;
  --excellent-bg-medium-hover: #d4f5e1;
  --excellent-bg-medium-focus: #d4f5e1;
  --excellent-bg-medium-active: #d4f5e1;
  --excellent-bg-medium-disabled: #f7f7f7;
  --excellent-icon-default: #087041;
  --excellent-icon-hover: #087041;
  --excellent-icon-focus: #087041;
  --excellent-icon-active: #087041;
  --excellent-icon-disabled: #d0d4d9;
  --excellent-icon-in-default: #fff;
  --excellent-icon-in-hover: #fff;
  --excellent-icon-in-focus: #fff;
  --excellent-icon-in-active: #fff;
  --excellent-icon-in-disabled: #fff;
  --excellent-border-default: #075e39;
  --excellent-border-hover: #075e39;
  --excellent-border-focus: #075e39;
  --excellent-border-active: #075e39;
  --excellent-border-disabled: #d0d4d9;
  --port-diagram-base-bg-default: #c1c6cc;
  --port-diagram-base-bg-active: #889099;
  --port-diagram-base-bg-medium-default: #d0d4d9;
  --port-diagram-base-bg-medium-active: #c1c6cc;
  --port-diagram-base-bg-weak-default: #f0f1f2;
  --port-diagram-base-border-default: #6f7680;
  --port-diagram-base-border-active: #6f7680;
  --port-diagram-base-border-medium-active: #6f7680;
  --port-diagram-base-border-strong-default: #23282e;
  --port-diagram-base-border-strong-active: #23282e;
  --port-diagram-base-icon-in-default: #373c42;
  --port-diagram-base-icon-in-active: #373c42;
  --port-diagram-full-speed-bg-default: #2b7a0c;
  --port-diagram-full-speed-bg-active: #266b0b;
  --port-diagram-full-speed-bg-medium-default: #b0e396;
  --port-diagram-full-speed-bg-medium-active: #6bbf41;
  --port-diagram-full-speed-border-medium-active: #266b0b;
  --port-diagram-full-speed-border-strong-default: #23282e;
  --port-diagram-full-speed-border-strong-active: #23282e;
  --port-diagram-full-speed-icon-in-default: #fff;
  --port-diagram-full-speed-icon-in-active: #fff;
  --port-diagram-disconnected-bg-default: #373c42;
  --port-diagram-disconnected-bg-active: #23282e;
  --port-diagram-disconnected-bg-medium-default: #d0d4d9;
  --port-diagram-disconnected-bg-medium-active: #c1c6cc;
  --port-diagram-disconnected-border-medium-active: #6f7680;
  --port-diagram-disconnected-border-strong-default: #23282e;
  --port-diagram-disconnected-border-strong-active: #23282e;
  --port-diagram-disconnected-icon-in-default: #fff;
  --port-diagram-disconnected-icon-in-active: #fff;
  --port-diagram-reduced-speed-bg-default: #2b7a0c;
  --port-diagram-reduced-speed-bg-active: #266b0b;
  --port-diagram-reduced-speed-bg-medium-default: #45991f;
  --port-diagram-reduced-speed-bg-medium-active: #398519;
  --port-diagram-reduced-speed-border-default: #fff;
  --port-diagram-reduced-speed-border-active: #fff;
  --port-diagram-reduced-speed-border-medium-active: #266b0b;
  --port-diagram-reduced-speed-border-strong-default: #23282e;
  --port-diagram-reduced-speed-border-strong-active: #23282e;
  --port-diagram-reduced-speed-icon-in-default: #fff;
  --port-diagram-reduced-speed-icon-in-active: #fff;
  --port-diagram-warning-bg-default: #b05f04;
  --port-diagram-warning-bg-active: #944b03;
  --port-diagram-warning-bg-medium-default: #f0c243;
  --port-diagram-warning-bg-medium-active: #e0a419;
  --port-diagram-warning-border-medium-active: #944b03;
  --port-diagram-warning-border-strong-default: #23282e;
  --port-diagram-warning-border-strong-active: #23282e;
  --port-diagram-warning-border-default: #fff;
  --port-diagram-warning-icon-in-default: #fff;
  --port-diagram-warning-icon-in-active: #fff;
  --port-diagram-critical-bg-default: #cc2d37;
  --port-diagram-critical-bg-active: #a01d26;
  --port-diagram-critical-bg-medium-default: #ffb2b5;
  --port-diagram-critical-bg-medium-active: #ff878b;
  --port-diagram-critical-border-medium-active: #a01d26;
  --port-diagram-critical-border-strong-default: #23282e;
  --port-diagram-critical-border-strong-active: #23282e;
  --port-diagram-critical-icon-in-default: #fff;
  --port-diagram-critical-icon-in-active: #fff;
  --port-diagram-low-power-bg-default: #b05f04;
  --port-diagram-low-power-bg-active: #944b03;
  --port-diagram-low-power-bg-medium-default: #f0c243;
  --port-diagram-low-power-bg-medium-active: #e0a419;
  --port-diagram-low-power-bg-weak-default: #f5e08e;
  --port-diagram-low-power-bg-weak-active: #f2d268;
  --port-diagram-low-power-border-medium-active: #944b03;
  --port-diagram-low-power-border-strong-default: #23282e;
  --port-diagram-low-power-border-strong-active: #23282e;
  --port-diagram-low-power-icon-in-default: #b05f04;
  --port-diagram-low-power-icon-in-active: #944b03;

  /* light classic theme -- elevation ( FOR INTERNAL USE ONLY, TEMPORARY ) */
  --elevation-control-default: 0px 3px 8px 0px rgba(0,0,0,0.07843);
  --elevation-control-focus: 0px 0px 0px 2px #cce1ff, 0px 0px 0px 4px #2774d9;
  --elevation-control-select: 0px 0px 0px 2px #3e84e5;
  --elevation-data-viz-focus: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #23282e,
    0px 0px 0px 6px #cce1ff, 0px 0px 0px 8px #3e84e5;
  --elevation-data-viz-select: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #23282e;
  --elevation-floating-default: 0px 4px 12px 0px rgba(0,0,0,0.18039);
  --elevation-invalid-default: 0px 0px 0px 2px #ffd4d5;
  --elevation-invalid-focus: 0px 0px 0px 2px #ffd4d5, 0px 0px 0px 4px #d93843;
  --elevation-lifted-default: 0px 3px 8px 0px rgba(0,0,0,0.07843);
  --elevation-lifted-inset: 10px 0 8px -8px rgba(0,0,0,0.07843) inset;
  --elevation-raised-default: 0px 4px 12px 0px rgba(0,0,0,0.12157);
  --elevation-subtle-default: 0px 2px 5px 0px rgba(0,0,0,0.05098);
}
`,D=`:root {
  --effects-transition: all 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);

  /************* Shadow FX  *************/
  --effects-shadow-floating-reverse: 0 -4px 12px rgba(0,0,0,0.90196);
  --effects-shadow-floating: 0 4px 12px rgba(0,0,0,0.90196);
  --effects-shadow-focus: 0 0 0 2px var(--interact-bg-weak-active),
    0 0 0 4px var(--control-border-focus);
  --effects-shadow-invalid: 0 0 0 2px var(--negative-bg-weak-focus);
  --effects-shadow-invalid-focus: var(--effects-shadow-invalid),
    0 0 0 4px var(--negative-border-medium-active);
  --effects-shadow-lifted-reverse: 0 -3px 8px rgba(0,0,0,0.07843);
  --effects-shadow-lifted: 0 3px 8px rgba(0,0,0,0.07843);
  --effects-shadow-raised-reverse: 0 -4px 12px rgba(0,0,0,0.12157);
  --effects-shadow-raised: 0 4px 12px rgba(0,0,0,0.12157);
  --effects-shadow-subtle-reverse: 0 -2px 5px rgba(0,0,0,0.05098);
  --effects-shadow-subtle: 0 2px 5px rgba(0,0,0,0.05098);
}
`,ee=`/**
 * This file is auto-generated. Do not edit it directly.
 */

*[data-mds-theme="light-classic"] {
  --brand-bg-default: #373c42;
  --brand-bg-hover: #373c42;
  --brand-bg-focus: #464c54;
  --brand-bg-active: #464c54;
  --brand-bg-disabled: #e1e4e8;
  --brand-bg-gradient-start: #373c42;
  --brand-bg-gradient-end: #0f1214;
  --brand-bg-gradient-default: linear-gradient(90deg, #373c42 0%, #0f1214 100%);
  --brand-bg-strong-default: #373c42;
  --brand-bg-strong-hover: #373c42;
  --brand-bg-strong-focus: #373c42;
  --brand-bg-strong-active: #373c42;
  --brand-text-default: #f7f7f7;
  --brand-text-hover: #f7f7f7;
  --brand-text-active: #f7f7f7;
  --brand-text-weak-default: #f7f7f7;
  --brand-text-weak-hover: #f7f7f7;
  --brand-text-weak-focus: #f7f7f7;
  --brand-text-weak-active: #f7f7f7;
  --brand-text-strong-default: #f0f1f2;
  --brand-icon-default: #f7f7f7;
  --brand-icon-hover: #fff;
  --brand-icon-active: #fff;
  --brand-icon-weak-default: #f7f7f7;
  --brand-icon-weak-hover: #f7f7f7;
  --brand-icon-weak-focus: #f7f7f7;
  --brand-icon-weak-active: #f7f7f7;
  --brand-border-active: #cce1ff;
  --brand-accent-icon-default: #7e868f;
  --brand-accent-icon-focus: #fff;
  --brand-accent-icon-active: #45991f;
  --brand-accent-icon-disabled: #d0d4d9;
  --brand-accent-icon-weak-default: #c1c6cc;
  --brand-accent-icon-weak-focus: #fff;
  --brand-accent-icon-weak-active: #6bbf41;
  --brand-accent-icon-weak-disabled: #d0d4d9;
  --brand-accent-icon-medium-default: #a7adb5;
  --brand-accent-icon-medium-focus: #fff;
  --brand-accent-icon-medium-active: #52a62b;
  --brand-accent-icon-medium-disabled: #d0d4d9;
  --brand-accent-border-default: #52a62b;
  --brand-accent-border-hover: #e1e4e8;
  --brand-accent-border-focus: #45991f;
  --brand-accent-border-active: #45991f;
  --brand-accent-border-weak-default: #d0d4d9;
  --brand-accent-border-weak-hover: #fff;
  --brand-accent-border-weak-focus: #fff;
  --brand-accent-border-weak-active: #6bbf41;
  --brand-accent-border-weak-disabled: #fff;
  --brand-accent-border-medium-default: #f0f1f2;
  --brand-accent-border-medium-hover: #fff;
  --brand-accent-border-medium-focus: #fff;
  --brand-accent-border-medium-active: #e0f5d5;
  --brand-accent-border-medium-disabled: #fff;
  --brand-accent-border-strong-default: #f7f7f7;
  --brand-accent-border-strong-hover: #f7f7f7;
  --brand-accent-border-strong-focus: #f7f7f7;
  --brand-accent-border-strong-active: #f7f7f7;
  --brand-accent-border-strong-disabled: #fff;
  --base-bg-default: #f7f7f7;
  --base-bg-hover: #f7f7f7;
  --base-bg-active: #f7f7f7;
  --base-bg-disabled: #f0f1f2;
  --base-bg-weak-default: #fff;
  --base-bg-weak-hover: rgba(225,228,232,0.8);
  --base-bg-weak-active: #f0f1f2;
  --base-bg-weak-disabled: #f0f1f2;
  --base-bg-medium-default: #f7f7f7;
  --base-bg-medium-hover: #e1e4e8;
  --base-bg-medium-active: #f0f1f2;
  --base-bg-medium-disabled: #f7f7f7;
  --base-bg-strong-default: #656c75;
  --base-bg-strong-hover: #23282e;
  --base-bg-strong-focus: #23282e;
  --base-bg-strong-active: #23282e;
  --base-bg-strong-disabled: #d0d4d9;
  --base-icon-in-default: #fff;
  --base-icon-in-hover: #fff;
  --base-icon-in-focus: #fff;
  --base-icon-in-active: #fff;
  --base-icon-in-disabled: #fff;
  --base-text-default: #23282e;
  --base-text-disabled: #c1c6cc;
  --base-text-weak-default: #889099;
  --base-text-weak-disabled: #c1c6cc;
  --base-text-medium-default: #596069;
  --base-text-medium-disabled: #c1c6cc;
  --base-text-strong-default: #373c42;
  --base-text-strong-disabled: #c1c6cc;
  --base-text-in-default: #fff;
  --base-text-in-hover: #fff;
  --base-text-in-focus: #fff;
  --base-text-in-active: #fff;
  --base-text-in-disabled: #fff;
  --base-text-in-weak-default: #f7f7f7;
  --base-border-default: #e1e4e8;
  --base-border-weak-default: #fff;
  --base-border-medium-default: #e1e4e8;
  --base-border-strong-default: #656c75;
  --base-border-gradient-default: linear-gradient(
    180deg,
    #f7f7f7 0%,
    #e1e4e8 50%,
    #f7f7f7 100%
  );
  --inverse-bg-default: #373c42;
  --inverse-bg-hover: #373c42;
  --inverse-bg-focus: #464c54;
  --inverse-bg-active: #464c54;
  --inverse-bg-disabled: #e1e4e8;
  --inverse-bg-gradient-start: #373c42;
  --inverse-bg-gradient-end: #0f1214;
  --inverse-bg-gradient-default: linear-gradient(
    90deg,
    #373c42 0%,
    #0f1214 100%
  );
  --inverse-bg-weak-default: #373c42;
  --inverse-text-default: #f7f7f7;
  --inverse-text-hover: #f7f7f7;
  --inverse-text-focus: #f7f7f7;
  --inverse-text-active: #f7f7f7;
  --inverse-text-disabled: #656c75;
  --inverse-text-medium-default: #c1c6cc;
  --inverse-text-medium-disabled: #656c75;
  --inverse-icon-default: #f7f7f7;
  --inverse-icon-hover: #fff;
  --inverse-icon-focus: #fff;
  --inverse-icon-active: #fff;
  --inverse-icon-disabled: #6f7680;
  --inverse-icon-strong-default: #fff;
  --inverse-icon-strong-hover: #fff;
  --inverse-icon-strong-focus: #fff;
  --inverse-icon-strong-active: #fff;
  --inverse-icon-strong-disabled: #fff;
  --inverse-border-default: #6f7680;
  --inverse-border-hover: #649ef5;
  --inverse-border-focus: #cce1ff;
  --inverse-border-active: #cce1ff;
  --inverse-border-disabled: #e1e4e8;
  --control-bg-default: #fff;
  --control-bg-hover: #e3eeff;
  --control-bg-focus: #f0f1f2;
  --control-bg-active: #f0f1f2;
  --control-bg-disabled: #f7f7f7;
  --control-bg-weak-default: #fff;
  --control-bg-weak-hover: #cce1ff;
  --control-bg-weak-focus: #e3eeff;
  --control-bg-weak-active: #e3eeff;
  --control-bg-weak-disabled: #f7f7f7;
  --control-bg-medium-default: #fff;
  --control-bg-medium-hover: #f7f7f7;
  --control-bg-medium-focus: #e3eeff;
  --control-bg-medium-active: #e3eeff;
  --control-bg-medium-disabled: #e1e4e8;
  --control-bg-strong-default: #2774d9;
  --control-bg-strong-hover: #0d5cbd;
  --control-bg-strong-focus: #0d5cbd;
  --control-bg-strong-active: #0d5cbd;
  --control-bg-strong-disabled: #bad6ff;
  --control-icon-default: #1d69cc;
  --control-icon-hover: #0d5cbd;
  --control-icon-focus: #0d5cbd;
  --control-icon-active: #0d5cbd;
  --control-icon-disabled: #a3c8ff;
  --control-icon-weak-default: #7e868f;
  --control-icon-weak-hover: #2774d9;
  --control-icon-weak-focus: #2774d9;
  --control-icon-weak-active: #2774d9;
  --control-icon-weak-disabled: #d0d4d9;
  --control-icon-medium-default: #2774d9;
  --control-icon-medium-hover: #0d5cbd;
  --control-icon-medium-focus: #0d5cbd;
  --control-icon-medium-active: #0d5cbd;
  --control-icon-medium-disabled: #a3c8ff;
  --control-icon-strong-default: #656c75;
  --control-icon-strong-hover: #464c54;
  --control-icon-strong-focus: #1d69cc;
  --control-icon-strong-active: #1d69cc;
  --control-icon-strong-disabled: #c1c6cc;
  --control-icon-in-default: #fff;
  --control-icon-in-hover: #fff;
  --control-icon-in-focus: #fff;
  --control-icon-in-active: #fff;
  --control-icon-in-disabled: #c1c6cc;
  --control-icon-in-strong-default: #2774d9;
  --control-icon-in-strong-hover: #2774d9;
  --control-icon-in-strong-focus: #2774d9;
  --control-icon-in-strong-active: #2774d9;
  --control-icon-in-strong-disabled: #c1c6cc;
  --control-border-default: #889099;
  --control-border-hover: #3e84e5;
  --control-border-focus: #3e84e5;
  --control-border-active: #3e84e5;
  --control-border-disabled: #d0d4d9;
  --control-border-weak-default: #e1e4e8;
  --control-border-weak-hover: #7cadf7;
  --control-border-weak-focus: #7cadf7;
  --control-border-weak-active: #7cadf7;
  --control-border-weak-disabled: #d0d4d9;
  --control-border-medium-default: #2774d9;
  --control-border-medium-hover: #bad6ff;
  --control-border-medium-focus: #2774d9;
  --control-border-medium-active: #2774d9;
  --control-border-medium-disabled: #d0d4d9;
  --control-border-strong-default: #656c75;
  --control-border-strong-hover: #656c75;
  --control-border-strong-focus: #2774d9;
  --control-border-strong-active: #2774d9;
  --control-border-strong-disabled: #d0d4d9;
  --interact-bg-default: #1d69cc;
  --interact-bg-hover: #0d5cbd;
  --interact-bg-focus: #0d5cbd;
  --interact-bg-active: #0d5cbd;
  --interact-bg-disabled: #a3c8ff;
  --interact-bg-weak-default: #fff;
  --interact-bg-weak-hover: #cce1ff;
  --interact-bg-weak-focus: #cce1ff;
  --interact-bg-weak-active: #cce1ff;
  --interact-bg-weak-disabled: #fff;
  --interact-bg-medium-default: #2774d9;
  --interact-bg-medium-hover: #cce1ff;
  --interact-bg-medium-active: #cce1ff;
  --interact-bg-strong-active: #f7f7f7;
  --interact-bg-strong-hover: #f7f7f7;
  --interact-text-default: #1d69cc;
  --interact-text-hover: #0d5cbd;
  --interact-text-focus: #0d5cbd;
  --interact-text-active: #0d5cbd;
  --interact-text-disabled: #a3c8ff;
  --interact-text-weak-default: #656c75;
  --interact-text-weak-hover: #1d69cc;
  --interact-text-weak-focus: #1d69cc;
  --interact-text-weak-active: #1d69cc;
  --interact-text-weak-disabled: #c1c6cc;
  --interact-text-in-default: #fff;
  --interact-text-in-hover: #fff;
  --interact-text-in-focus: #fff;
  --interact-text-in-active: #fff;
  --interact-text-in-disabled: #fff;
  --interact-icon-default: #1d69cc;
  --interact-icon-hover: #0d5cbd;
  --interact-icon-focus: #0d5cbd;
  --interact-icon-active: #0d5cbd;
  --interact-icon-disabled: #a3c8ff;
  --interact-icon-weak-default: #7e868f;
  --interact-icon-weak-hover: #6f7680;
  --interact-icon-weak-focus: #6f7680;
  --interact-icon-weak-active: #6f7680;
  --interact-icon-weak-disabled: #d0d4d9;
  --interact-icon-medium-default: #7e868f;
  --interact-icon-medium-hover: #2774d9;
  --interact-icon-medium-focus: #2774d9;
  --interact-icon-medium-active: #2774d9;
  --interact-icon-medium-disabled: #c1c6cc;
  --interact-icon-strong-default: #656c75;
  --interact-icon-strong-hover: #464c54;
  --interact-icon-strong-focus: #464c54;
  --interact-icon-strong-active: #464c54;
  --interact-icon-strong-disabled: #a7adb5;
  --interact-icon-in-default: #fff;
  --interact-icon-in-hover: #fff;
  --interact-icon-in-focus: #fff;
  --interact-icon-in-active: #fff;
  --interact-icon-in-disabled: #fff;
  --interact-border-default: #1d69cc;
  --interact-border-hover: #0d5cbd;
  --interact-border-focus: #0d5cbd;
  --interact-border-active: #0d5cbd;
  --interact-border-disabled: #a3c8ff;
  --interact-border-weak-default: #e1e4e8;
  --interact-border-weak-hover: #cce1ff;
  --interact-border-weak-focus: #e1e4e8;
  --interact-border-weak-active: #e1e4e8;
  --interact-border-weak-disabled: #e1e4e8;
  --interact-border-medium-default: #2774d9;
  --interact-border-medium-hover: #bad6ff;
  --interact-border-medium-focus: #2774d9;
  --interact-border-medium-active: #2774d9;
  --interact-border-medium-disabled: #e1e4e8;
  --positive-bg-default: #45991f;
  --positive-bg-hover: #45991f;
  --positive-bg-focus: #45991f;
  --positive-bg-active: #45991f;
  --positive-bg-disabled: #b0e396;
  --positive-bg-weak-default: #fff;
  --positive-bg-weak-hover: #fff;
  --positive-bg-weak-focus: #fff;
  --positive-bg-weak-active: #fff;
  --positive-bg-weak-disabled: #fff;
  --positive-bg-medium-default: #e0f5d5;
  --positive-bg-medium-hover: #e0f5d5;
  --positive-bg-medium-focus: #e0f5d5;
  --positive-bg-medium-active: #e0f5d5;
  --positive-bg-medium-disabled: #f7f7f7;
  --positive-bg-strong-default: #e0f5d5;
  --positive-icon-default: #45991f;
  --positive-icon-hover: #45991f;
  --positive-icon-focus: #45991f;
  --positive-icon-active: #45991f;
  --positive-icon-disabled: #d0d4d9;
  --positive-icon-weak-default: #b0e396;
  --positive-icon-weak-hover: #b0e396;
  --positive-icon-weak-focus: #b0e396;
  --positive-icon-weak-active: #b0e396;
  --positive-icon-weak-disabled: #b0e396;
  --positive-icon-strong-default: #45991f;
  --positive-icon-strong-hover: #45991f;
  --positive-icon-strong-focus: #45991f;
  --positive-icon-strong-active: #45991f;
  --positive-icon-strong-disabled: #d0d4d9;
  --positive-icon-in-default: #fff;
  --positive-icon-in-hover: #fff;
  --positive-icon-in-focus: #fff;
  --positive-icon-in-active: #fff;
  --positive-icon-in-disabled: #fff;
  --positive-border-default: #45991f;
  --positive-border-hover: #45991f;
  --positive-border-focus: #45991f;
  --positive-border-active: #45991f;
  --positive-border-disabled: #d0d4d9;
  --positive-border-weak-default: #fff;
  --positive-border-weak-hover: #fff;
  --positive-border-weak-focus: #fff;
  --positive-border-weak-active: #fff;
  --positive-border-weak-disabled: #d0d4d9;
  --positive-border-strong-default: #398519;
  --positive-border-strong-hover: #398519;
  --positive-border-strong-focus: #398519;
  --positive-border-strong-active: #398519;
  --positive-border-strong-disabled: #398519;
  --positive-text-in-default: #fff;
  --positive-text-in-hover: #fff;
  --positive-text-in-focus: #fff;
  --positive-text-in-active: #fff;
  --positive-text-in-disabled: #fff;
  --warning-bg-default: #cc8604;
  --warning-bg-hover: #cc8604;
  --warning-bg-focus: #cc8604;
  --warning-bg-active: #cc8604;
  --warning-bg-disabled: #f2d268;
  --warning-bg-weak-default: #fff;
  --warning-bg-weak-hover: #fff;
  --warning-bg-weak-focus: #fff;
  --warning-bg-weak-active: #fff;
  --warning-bg-weak-disabled: #fff;
  --warning-bg-medium-default: #faefb9;
  --warning-bg-medium-hover: #faefb9;
  --warning-bg-medium-focus: #faefb9;
  --warning-bg-medium-active: #faefb9;
  --warning-bg-medium-disabled: #f7f7f7;
  --warning-bg-strong-default: #faefb9;
  --warning-icon-default: #cc8604;
  --warning-icon-hover: #cc8604;
  --warning-icon-focus: #cc8604;
  --warning-icon-active: #cc8604;
  --warning-icon-disabled: #d0d4d9;
  --warning-icon-strong-default: #bd7202;
  --warning-icon-strong-hover: #bd7202;
  --warning-icon-strong-focus: #bd7202;
  --warning-icon-strong-active: #bd7202;
  --warning-icon-strong-disabled: #d0d4d9;
  --warning-icon-in-default: #fff;
  --warning-icon-in-hover: #fff;
  --warning-icon-in-focus: #fff;
  --warning-icon-in-active: #fff;
  --warning-icon-in-disabled: #fff;
  --warning-border-default: #cc8604;
  --warning-border-hover: #cc8604;
  --warning-border-focus: #cc8604;
  --warning-border-active: #cc8604;
  --warning-border-disabled: #d0d4d9;
  --warning-border-weak-default: #fff;
  --warning-border-weak-hover: #fff;
  --warning-border-weak-focus: #fff;
  --warning-border-weak-active: #fff;
  --warning-border-weak-disabled: #d0d4d9;
  --warning-border-strong-default: #a65503;
  --warning-border-strong-hover: #a65503;
  --warning-border-strong-focus: #a65503;
  --warning-border-strong-active: #a65503;
  --warning-border-strong-disabled: #a65503;
  --warning-text-in-default: #fff;
  --warning-text-in-hover: #fff;
  --warning-text-in-focus: #fff;
  --warning-text-in-active: #fff;
  --warning-text-in-disabled: #fff;
  --severe-warning-bg-default: #f26722;
  --severe-warning-bg-hover: #f26722;
  --severe-warning-bg-focus: #f26722;
  --severe-warning-bg-active: #f26722;
  --severe-warning-bg-disabled: #fcc9a7;
  --severe-warning-bg-weak-default: #fff;
  --severe-warning-bg-weak-hover: #fff;
  --severe-warning-bg-weak-focus: #fff;
  --severe-warning-bg-weak-active: #fff;
  --severe-warning-bg-weak-disabled: #fff;
  --severe-warning-bg-medium-default: #ffeadb;
  --severe-warning-bg-medium-hover: #ffeadb;
  --severe-warning-bg-medium-focus: #ffeadb;
  --severe-warning-bg-medium-active: #ffeadb;
  --severe-warning-bg-medium-disabled: #f7f7f7;
  --severe-warning-bg-strong-default: #ffeadb;
  --severe-warning-icon-default: #f26722;
  --severe-warning-icon-hover: #d95a1a;
  --severe-warning-icon-focus: #c44f14;
  --severe-warning-icon-active: #c44f14;
  --severe-warning-icon-disabled: #d0d4d9;
  --severe-warning-icon-strong-default: #d95a1a;
  --severe-warning-icon-strong-hover: #d95a1a;
  --severe-warning-icon-strong-focus: #d95a1a;
  --severe-warning-icon-strong-active: #d95a1a;
  --severe-warning-icon-strong-disabled: #d95a1a;
  --severe-warning-icon-in-default: #fff;
  --severe-warning-icon-in-hover: #fff;
  --severe-warning-icon-in-focus: #fff;
  --severe-warning-icon-in-active: #fff;
  --severe-warning-icon-in-disabled: #fff;
  --severe-warning-border-default: #f26722;
  --severe-warning-border-hover: #f26722;
  --severe-warning-border-focus: #f26722;
  --severe-warning-border-active: #f26722;
  --severe-warning-border-disabled: #f26722;
  --severe-warning-border-weak-default: #fff;
  --severe-warning-border-weak-hover: #fff;
  --severe-warning-border-weak-focus: #fff;
  --severe-warning-border-weak-active: #fff;
  --severe-warning-border-weak-disabled: #d0d4d9;
  --negative-bg-default: #cc2d37;
  --negative-bg-hover: #cc2d37;
  --negative-bg-focus: #cc2d37;
  --negative-bg-active: #cc2d37;
  --negative-bg-disabled: #ffb2b5;
  --negative-bg-weak-default: #fff;
  --negative-bg-weak-hover: #ffd4d5;
  --negative-bg-weak-focus: #ffd4d5;
  --negative-bg-weak-active: #ffd4d5;
  --negative-bg-weak-disabled: #fff;
  --negative-bg-medium-default: #ffe8e9;
  --negative-bg-medium-hover: #ffe8e9;
  --negative-bg-medium-focus: #ffe8e9;
  --negative-bg-medium-active: #ffe8e9;
  --negative-bg-medium-disabled: #f7f7f7;
  --negative-bg-strong-default: #ffe8e9;
  --negative-text-default: #cc2d37;
  --negative-text-hover: #b2242d;
  --negative-text-focus: #b2242d;
  --negative-text-active: #b2242d;
  --negative-text-disabled: #ffb2b5;
  --negative-text-in-default: #fff;
  --negative-text-in-hover: #fff;
  --negative-text-in-focus: #fff;
  --negative-text-in-active: #fff;
  --negative-text-in-disabled: #fff;
  --negative-icon-default: #cc2d37;
  --negative-icon-hover: #b2242d;
  --negative-icon-focus: #b2242d;
  --negative-icon-active: #b2242d;
  --negative-icon-disabled: #ffb2b5;
  --negative-icon-weak-default: #ffc7c9;
  --negative-icon-weak-hover: #ffc7c9;
  --negative-icon-weak-focus: #ffc7c9;
  --negative-icon-weak-active: #ffc7c9;
  --negative-icon-weak-disabled: #d0d4d9;
  --negative-icon-in-default: #fff;
  --negative-icon-in-hover: #fff;
  --negative-icon-in-focus: #fff;
  --negative-icon-in-active: #fff;
  --negative-icon-in-disabled: #fff;
  --negative-border-default: #cc2d37;
  --negative-border-hover: #b2242d;
  --negative-border-focus: #b2242d;
  --negative-border-active: #b2242d;
  --negative-border-disabled: #ffb2b5;
  --negative-border-weak-default: #fff;
  --negative-border-weak-hover: #fff;
  --negative-border-weak-focus: #fff;
  --negative-border-weak-active: #fff;
  --negative-border-weak-disabled: #d0d4d9;
  --negative-border-medium-default: #d93843;
  --negative-border-medium-hover: #d93843;
  --negative-border-medium-focus: #d93843;
  --negative-border-medium-active: #d93843;
  --negative-border-medium-disabled: #ffb2b5;
  --negative-border-strong-default: #b2242d;
  --negative-border-strong-hover: #b2242d;
  --negative-border-strong-focus: #b2242d;
  --negative-border-strong-active: #b2242d;
  --negative-border-strong-disabled: #ffb2b5;
  --info-bg-default: #2774d9;
  --info-bg-hover: #2774d9;
  --info-bg-focus: #2774d9;
  --info-bg-active: #2774d9;
  --info-bg-disabled: #2774d9;
  --info-bg-weak-default: #fff;
  --info-bg-weak-hover: #fff;
  --info-bg-weak-focus: #fff;
  --info-bg-weak-active: #fff;
  --info-bg-weak-disabled: #fff;
  --info-bg-medium-default: #e3eeff;
  --info-bg-medium-hover: #e3eeff;
  --info-bg-medium-focus: #e3eeff;
  --info-bg-medium-active: #e3eeff;
  --info-bg-medium-disabled: #f7f7f7;
  --info-bg-strong-default: #e3eeff;
  --info-icon-default: #2774d9;
  --info-icon-hover: #2774d9;
  --info-icon-focus: #2774d9;
  --info-icon-active: #2774d9;
  --info-icon-disabled: #d0d4d9;
  --info-icon-weak-default: #a3c8ff;
  --info-icon-weak-hover: #a3c8ff;
  --info-icon-weak-focus: #a3c8ff;
  --info-icon-weak-active: #a3c8ff;
  --info-icon-weak-disabled: #a3c8ff;
  --info-icon-in-default: #fff;
  --info-icon-in-hover: #fff;
  --info-icon-in-focus: #fff;
  --info-icon-in-active: #fff;
  --info-icon-in-disabled: #fff;
  --info-border-default: #2774d9;
  --info-border-hover: #2774d9;
  --info-border-focus: #2774d9;
  --info-border-active: #2774d9;
  --info-border-disabled: #d0d4d9;
  --info-border-weak-default: #fff;
  --info-border-weak-hover: #fff;
  --info-border-weak-focus: #fff;
  --info-border-weak-active: #fff;
  --info-border-weak-disabled: #d0d4d9;
  --dormant-bg-default: #6f7680;
  --dormant-bg-disabled: #6f7680;
  --dormant-bg-medium-default: #e1e4e8;
  --dormant-bg-medium-disabled: #f7f7f7;
  --dormant-icon-default: #6f7680;
  --dormant-icon-disabled: #d0d4d9;
  --dormant-icon-medium-default: #fff;
  --dormant-icon-in-default: #fff;
  --dormant-icon-in-disabled: #fff;
  --dormant-icon-in-medium-default: #fff;
  --dormant-border-default: #889099;
  --dormant-border-disabled: #d0d4d9;
  --accent-a-default: #7d8aff;
  --accent-a-hover: #6977f0;
  --accent-a-weak-default: #ebedff;
  --accent-b-default: #b02863;
  --accent-b-hover: #991d53;
  --accent-b-weak-default: #ffe8ef;
  --accent-c-default: #f2638c;
  --accent-c-hover: #e3447c;
  --accent-c-weak-default: #ffd4e0;
  --accent-d-default: #753bcc;
  --accent-d-hover: #6732b8;
  --accent-d-weak-default: #f3ebff;
  --accent-e-default: #7da11b;
  --accent-e-hover: #6c8c14;
  --accent-e-weak-default: #eaf2d3;
  --accent-f-default: #ad3907;
  --accent-f-hover: #942e03;
  --accent-f-weak-default: #ffeadb;
  --accent-g-default: #04a4b0;
  --accent-g-hover: #028e99;
  --accent-g-weak-default: #d5f5f5;
  --accent-h-default: #006773;
  --accent-h-hover: #005c66;
  --accent-h-weak-default: #a9ebeb;
  --accent-i-default: #e85fc6;
  --accent-i-hover: #d649b3;
  --accent-i-weak-default: #ffe8f9;
  --accent-j-default: #545c8a;
  --accent-j-hover: #484f7a;
  --accent-j-weak-default: #ebedff;
  --accent-k-default: #21a65f;
  --accent-k-hover: #169855;
  --accent-k-weak-default: #d4f5e1;
  --in-progress-bg-medium-default: #e3eeff;
  --in-progress-bg-medium-hover: #e3eeff;
  --in-progress-bg-medium-focus: #e3eeff;
  --in-progress-bg-medium-active: #e3eeff;
  --in-progress-bg-medium-disabled: #f7f7f7;
  --in-progress-icon-default: #2774d9;
  --in-progress-icon-hover: #2774d9;
  --in-progress-icon-focus: #2774d9;
  --in-progress-icon-active: #2774d9;
  --in-progress-icon-disabled: #d0d4d9;
  --in-progress-icon-in-default: #fff;
  --in-progress-icon-in-hover: #fff;
  --in-progress-icon-in-focus: #fff;
  --in-progress-icon-in-active: #fff;
  --in-progress-icon-in-disabled: #fff;
  --in-progress-border-default: #2774d9;
  --in-progress-border-hover: #2774d9;
  --in-progress-border-focus: #2774d9;
  --in-progress-border-active: #2774d9;
  --in-progress-border-disabled: #d0d4d9;
  --low-warning-bg-medium-default: #d5f5f5;
  --low-warning-bg-medium-hover: #d5f5f5;
  --low-warning-bg-medium-focus: #d5f5f5;
  --low-warning-bg-medium-active: #d5f5f5;
  --low-warning-bg-medium-disabled: #f7f7f7;
  --low-warning-icon-default: #028e99;
  --low-warning-icon-hover: #028e99;
  --low-warning-icon-focus: #028e99;
  --low-warning-icon-active: #028e99;
  --low-warning-icon-disabled: #d0d4d9;
  --low-warning-icon-in-default: #fff;
  --low-warning-icon-in-hover: #fff;
  --low-warning-icon-in-focus: #fff;
  --low-warning-icon-in-active: #fff;
  --low-warning-icon-in-disabled: #fff;
  --low-warning-border-default: #028e99;
  --low-warning-border-hover: #028e99;
  --low-warning-border-focus: #028e99;
  --low-warning-border-active: #028e99;
  --low-warning-border-disabled: #d0d4d9;
  --excellent-bg-medium-default: #d4f5e1;
  --excellent-bg-medium-hover: #d4f5e1;
  --excellent-bg-medium-focus: #d4f5e1;
  --excellent-bg-medium-active: #d4f5e1;
  --excellent-bg-medium-disabled: #f7f7f7;
  --excellent-icon-default: #087041;
  --excellent-icon-hover: #087041;
  --excellent-icon-focus: #087041;
  --excellent-icon-active: #087041;
  --excellent-icon-disabled: #d0d4d9;
  --excellent-icon-in-default: #fff;
  --excellent-icon-in-hover: #fff;
  --excellent-icon-in-focus: #fff;
  --excellent-icon-in-active: #fff;
  --excellent-icon-in-disabled: #fff;
  --excellent-border-default: #075e39;
  --excellent-border-hover: #075e39;
  --excellent-border-focus: #075e39;
  --excellent-border-active: #075e39;
  --excellent-border-disabled: #d0d4d9;
  --port-diagram-base-bg-default: #c1c6cc;
  --port-diagram-base-bg-active: #889099;
  --port-diagram-base-bg-medium-default: #d0d4d9;
  --port-diagram-base-bg-medium-active: #c1c6cc;
  --port-diagram-base-bg-weak-default: #f0f1f2;
  --port-diagram-base-border-default: #6f7680;
  --port-diagram-base-border-active: #6f7680;
  --port-diagram-base-border-medium-active: #6f7680;
  --port-diagram-base-border-strong-default: #23282e;
  --port-diagram-base-border-strong-active: #23282e;
  --port-diagram-base-icon-in-default: #373c42;
  --port-diagram-base-icon-in-active: #373c42;
  --port-diagram-full-speed-bg-default: #2b7a0c;
  --port-diagram-full-speed-bg-active: #266b0b;
  --port-diagram-full-speed-bg-medium-default: #b0e396;
  --port-diagram-full-speed-bg-medium-active: #6bbf41;
  --port-diagram-full-speed-border-medium-active: #266b0b;
  --port-diagram-full-speed-border-strong-default: #23282e;
  --port-diagram-full-speed-border-strong-active: #23282e;
  --port-diagram-full-speed-icon-in-default: #fff;
  --port-diagram-full-speed-icon-in-active: #fff;
  --port-diagram-disconnected-bg-default: #373c42;
  --port-diagram-disconnected-bg-active: #23282e;
  --port-diagram-disconnected-bg-medium-default: #d0d4d9;
  --port-diagram-disconnected-bg-medium-active: #c1c6cc;
  --port-diagram-disconnected-border-medium-active: #6f7680;
  --port-diagram-disconnected-border-strong-default: #23282e;
  --port-diagram-disconnected-border-strong-active: #23282e;
  --port-diagram-disconnected-icon-in-default: #fff;
  --port-diagram-disconnected-icon-in-active: #fff;
  --port-diagram-reduced-speed-bg-default: #2b7a0c;
  --port-diagram-reduced-speed-bg-active: #266b0b;
  --port-diagram-reduced-speed-bg-medium-default: #45991f;
  --port-diagram-reduced-speed-bg-medium-active: #398519;
  --port-diagram-reduced-speed-border-default: #fff;
  --port-diagram-reduced-speed-border-active: #fff;
  --port-diagram-reduced-speed-border-medium-active: #266b0b;
  --port-diagram-reduced-speed-border-strong-default: #23282e;
  --port-diagram-reduced-speed-border-strong-active: #23282e;
  --port-diagram-reduced-speed-icon-in-default: #fff;
  --port-diagram-reduced-speed-icon-in-active: #fff;
  --port-diagram-warning-bg-default: #b05f04;
  --port-diagram-warning-bg-active: #944b03;
  --port-diagram-warning-bg-medium-default: #f0c243;
  --port-diagram-warning-bg-medium-active: #e0a419;
  --port-diagram-warning-border-medium-active: #944b03;
  --port-diagram-warning-border-strong-default: #23282e;
  --port-diagram-warning-border-strong-active: #23282e;
  --port-diagram-warning-border-default: #fff;
  --port-diagram-warning-icon-in-default: #fff;
  --port-diagram-warning-icon-in-active: #fff;
  --port-diagram-critical-bg-default: #cc2d37;
  --port-diagram-critical-bg-active: #a01d26;
  --port-diagram-critical-bg-medium-default: #ffb2b5;
  --port-diagram-critical-bg-medium-active: #ff878b;
  --port-diagram-critical-border-medium-active: #a01d26;
  --port-diagram-critical-border-strong-default: #23282e;
  --port-diagram-critical-border-strong-active: #23282e;
  --port-diagram-critical-icon-in-default: #fff;
  --port-diagram-critical-icon-in-active: #fff;
  --port-diagram-low-power-bg-default: #b05f04;
  --port-diagram-low-power-bg-active: #944b03;
  --port-diagram-low-power-bg-medium-default: #f0c243;
  --port-diagram-low-power-bg-medium-active: #e0a419;
  --port-diagram-low-power-bg-weak-default: #f5e08e;
  --port-diagram-low-power-bg-weak-active: #f2d268;
  --port-diagram-low-power-border-medium-active: #944b03;
  --port-diagram-low-power-border-strong-default: #23282e;
  --port-diagram-low-power-border-strong-active: #23282e;
  --port-diagram-low-power-icon-in-default: #b05f04;
  --port-diagram-low-power-icon-in-active: #944b03;

  /* light classic theme -- elevation ( FOR INTERNAL USE ONLY, TEMPORARY ) */
  --elevation-control-default: 0px 3px 8px 0px rgba(0,0,0,0.07843);
  --elevation-control-focus: 0px 0px 0px 2px #cce1ff, 0px 0px 0px 4px #2774d9;
  --elevation-control-select: 0px 0px 0px 2px #3e84e5;
  --elevation-data-viz-focus: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #23282e,
    0px 0px 0px 6px #cce1ff, 0px 0px 0px 8px #3e84e5;
  --elevation-data-viz-select: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #23282e;
  --elevation-floating-default: 0px 4px 12px 0px rgba(0,0,0,0.18039);
  --elevation-invalid-default: 0px 0px 0px 2px #ffd4d5;
  --elevation-invalid-focus: 0px 0px 0px 2px #ffd4d5, 0px 0px 0px 4px #d93843;
  --elevation-lifted-default: 0px 3px 8px 0px rgba(0,0,0,0.07843);
  --elevation-lifted-inset: 10px 0 8px -8px rgba(0,0,0,0.07843) inset;
  --elevation-raised-default: 0px 4px 12px 0px rgba(0,0,0,0.12157);
  --elevation-subtle-default: 0px 2px 5px 0px rgba(0,0,0,0.05098);

  /* color tokens -- data visualizations */
  --data-viz-categorical-1-active: #505ed9;
  --data-viz-categorical-1-default: #505ed9;
  --data-viz-categorical-1-focus: #3b47b2;
  --data-viz-categorical-1-gradient-default: linear-gradient(
    180deg,
    #505ed9 50%,
    #6977f0 100%
  );
  --data-viz-categorical-1-gradient-default-end: #505ed9;
  --data-viz-categorical-1-gradient-default-start: #6977f0;
  --data-viz-categorical-1-hover: #3b47b2;
  --data-viz-categorical-1-weak-gradient-active: linear-gradient(
    180deg,
    #ccd1ff 0%,
    #fff 100%
  );
  --data-viz-categorical-1-weak-gradient-active-end: #ccd1ff;
  --data-viz-categorical-1-weak-gradient-active-start: #fff;
  --data-viz-categorical-1-weak-gradient-default: linear-gradient(
    180deg,
    #ccd1ff 0%,
    #fff 100%
  );
  --data-viz-categorical-1-weak-gradient-default-end: #ccd1ff;
  --data-viz-categorical-1-weak-gradient-default-start: #fff;
  --data-viz-categorical-1-weak-gradient-focus: linear-gradient(
    180deg,
    #bac1ff 0%,
    #ebedff 100%
  );
  --data-viz-categorical-1-weak-gradient-focus-end: #bac1ff;
  --data-viz-categorical-1-weak-gradient-focus-start: #ebedff;
  --data-viz-categorical-1-weak-gradient-hover: linear-gradient(
    180deg,
    #bac1ff 0%,
    #ebedff 100%
  );
  --data-viz-categorical-1-weak-gradient-hover-end: #bac1ff;
  --data-viz-categorical-1-weak-gradient-hover-start: #ebedff;
  --data-viz-categorical-10-active: #545c8a;
  --data-viz-categorical-10-default: #545c8a;
  --data-viz-categorical-10-focus: #484f7a;
  --data-viz-categorical-10-gradient-default: linear-gradient(
    180deg,
    #545c8a 50%,
    #6871a3 100%
  );
  --data-viz-categorical-10-gradient-default-end: #545c8a;
  --data-viz-categorical-10-gradient-default-start: #6871a3;
  --data-viz-categorical-10-hover: #484f7a;
  --data-viz-categorical-10-weak-gradient-active: linear-gradient(
    180deg,
    #ced3f2 0%,
    #fff 100%
  );
  --data-viz-categorical-10-weak-gradient-active-end: #ced3f2;
  --data-viz-categorical-10-weak-gradient-active-start: #fff;
  --data-viz-categorical-10-weak-gradient-default: linear-gradient(
    180deg,
    #ced3f2 0%,
    #fff 100%
  );
  --data-viz-categorical-10-weak-gradient-default-end: #ced3f2;
  --data-viz-categorical-10-weak-gradient-default-start: #fff;
  --data-viz-categorical-10-weak-gradient-focus: linear-gradient(
    180deg,
    #c1c6e8 0%,
    #ebedff 100%
  );
  --data-viz-categorical-10-weak-gradient-focus-end: #c1c6e8;
  --data-viz-categorical-10-weak-gradient-focus-start: #ebedff;
  --data-viz-categorical-10-weak-gradient-hover: linear-gradient(
    180deg,
    #c1c6e8 0%,
    #ebedff 100%
  );
  --data-viz-categorical-10-weak-gradient-hover-end: #c1c6e8;
  --data-viz-categorical-10-weak-gradient-hover-start: #ebedff;
  --data-viz-categorical-11-active: #f26722;
  --data-viz-categorical-11-default: #f26722;
  --data-viz-categorical-11-focus: #c44f14;
  --data-viz-categorical-11-gradient-default: linear-gradient(
    180deg,
    #f26722 50%,
    #fc8d4c 100%
  );
  --data-viz-categorical-11-gradient-default-end: #f26722;
  --data-viz-categorical-11-gradient-default-start: #fc8d4c;
  --data-viz-categorical-11-hover: #c44f14;
  --data-viz-categorical-11-weak-gradient-active: linear-gradient(
    180deg,
    #fcc9a7 0%,
    #fff 100%
  );
  --data-viz-categorical-11-weak-gradient-active-end: #fcc9a7;
  --data-viz-categorical-11-weak-gradient-active-start: #fff;
  --data-viz-categorical-11-weak-gradient-default: linear-gradient(
    180deg,
    #fcc9a7 0%,
    #fff 100%
  );
  --data-viz-categorical-11-weak-gradient-default-end: #fcc9a7;
  --data-viz-categorical-11-weak-gradient-default-start: #fff;
  --data-viz-categorical-11-weak-gradient-focus: linear-gradient(
    180deg,
    #fcb88d 0%,
    #ffeadb 100%
  );
  --data-viz-categorical-11-weak-gradient-focus-end: #fcb88d;
  --data-viz-categorical-11-weak-gradient-focus-start: #ffeadb;
  --data-viz-categorical-11-weak-gradient-hover: linear-gradient(
    180deg,
    #fcb88d 0%,
    #ffeadb 100%
  );
  --data-viz-categorical-11-weak-gradient-hover-end: #fcb88d;
  --data-viz-categorical-11-weak-gradient-hover-start: #ffeadb;
  --data-viz-categorical-12-active: #0b7b46;
  --data-viz-categorical-12-default: #0b7b46;
  --data-viz-categorical-12-focus: #075e39;
  --data-viz-categorical-12-gradient-default: linear-gradient(
    180deg,
    #0b7b46 50%,
    #169855 100%
  );
  --data-viz-categorical-12-gradient-default-end: #0b7b46;
  --data-viz-categorical-12-gradient-default-start: #169855;
  --data-viz-categorical-12-hover: #075e39;
  --data-viz-categorical-12-weak-gradient-active: linear-gradient(
    180deg,
    #97e5b8 0%,
    #fff 100%
  );
  --data-viz-categorical-12-weak-gradient-active-end: #97e5b8;
  --data-viz-categorical-12-weak-gradient-active-start: #fff;
  --data-viz-categorical-12-weak-gradient-default: linear-gradient(
    180deg,
    #97e5b8 0%,
    #fff 100%
  );
  --data-viz-categorical-12-weak-gradient-default-end: #97e5b8;
  --data-viz-categorical-12-weak-gradient-default-start: #fff;
  --data-viz-categorical-12-weak-gradient-focus: linear-gradient(
    180deg,
    #75d9a0 0%,
    #d4f5e1 100%
  );
  --data-viz-categorical-12-weak-gradient-focus-end: #75d9a0;
  --data-viz-categorical-12-weak-gradient-focus-start: #d4f5e1;
  --data-viz-categorical-12-weak-gradient-hover: linear-gradient(
    180deg,
    #75d9a0 0%,
    #d4f5e1 100%
  );
  --data-viz-categorical-12-weak-gradient-hover-end: #75d9a0;
  --data-viz-categorical-12-weak-gradient-hover-start: #d4f5e1;
  --data-viz-categorical-2-active: #04a4b0;
  --data-viz-categorical-2-default: #04a4b0;
  --data-viz-categorical-2-focus: #01818c;
  --data-viz-categorical-2-gradient-default: linear-gradient(
    180deg,
    #04a4b0 50%,
    #17c2c2 100%
  );
  --data-viz-categorical-2-gradient-default-end: #04a4b0;
  --data-viz-categorical-2-gradient-default-start: #17c2c2;
  --data-viz-categorical-2-hover: #01818c;
  --data-viz-categorical-2-weak-gradient-active: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-categorical-2-weak-gradient-active-end: #84e3e3;
  --data-viz-categorical-2-weak-gradient-active-start: #fff;
  --data-viz-categorical-2-weak-gradient-default: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-categorical-2-weak-gradient-default-end: #84e3e3;
  --data-viz-categorical-2-weak-gradient-default-start: #fff;
  --data-viz-categorical-2-weak-gradient-focus: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-categorical-2-weak-gradient-focus-end: #4ad9d9;
  --data-viz-categorical-2-weak-gradient-focus-start: #d5f5f5;
  --data-viz-categorical-2-weak-gradient-hover: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-categorical-2-weak-gradient-hover-end: #4ad9d9;
  --data-viz-categorical-2-weak-gradient-hover-start: #d5f5f5;
  --data-viz-categorical-3-active: #a974f7;
  --data-viz-categorical-3-default: #a974f7;
  --data-viz-categorical-3-focus: #8d4eed;
  --data-viz-categorical-3-gradient-default: linear-gradient(
    180deg,
    #a974f7 50%,
    #c299ff 100%
  );
  --data-viz-categorical-3-gradient-default-end: #a974f7;
  --data-viz-categorical-3-gradient-default-start: #c299ff;
  --data-viz-categorical-3-hover: #8d4eed;
  --data-viz-categorical-3-weak-gradient-active: linear-gradient(
    180deg,
    #e0ccff 0%,
    #fff 100%
  );
  --data-viz-categorical-3-weak-gradient-active-end: #e0ccff;
  --data-viz-categorical-3-weak-gradient-active-start: #fff;
  --data-viz-categorical-3-weak-gradient-default: linear-gradient(
    180deg,
    #e0ccff 0%,
    #fff 100%
  );
  --data-viz-categorical-3-weak-gradient-default-end: #e0ccff;
  --data-viz-categorical-3-weak-gradient-default-start: #fff;
  --data-viz-categorical-3-weak-gradient-focus: linear-gradient(
    180deg,
    #d6baff 0%,
    #f3ebff 100%
  );
  --data-viz-categorical-3-weak-gradient-focus-end: #d6baff;
  --data-viz-categorical-3-weak-gradient-focus-start: #f3ebff;
  --data-viz-categorical-3-weak-gradient-hover: linear-gradient(
    180deg,
    #d6baff 0%,
    #f3ebff 100%
  );
  --data-viz-categorical-3-weak-gradient-hover-end: #d6baff;
  --data-viz-categorical-3-weak-gradient-hover-start: #f3ebff;
  --data-viz-categorical-4-active: #c2306f;
  --data-viz-categorical-4-default: #c2306f;
  --data-viz-categorical-4-focus: #991d53;
  --data-viz-categorical-4-gradient-default: linear-gradient(
    180deg,
    #c2306f 50%,
    #e3447c 100%
  );
  --data-viz-categorical-4-gradient-default-end: #c2306f;
  --data-viz-categorical-4-gradient-default-start: #e3447c;
  --data-viz-categorical-4-hover: #991d53;
  --data-viz-categorical-4-weak-gradient-active: linear-gradient(
    180deg,
    #ffc4d5 0%,
    #fff 100%
  );
  --data-viz-categorical-4-weak-gradient-active-end: #ffc4d5;
  --data-viz-categorical-4-weak-gradient-active-start: #fff;
  --data-viz-categorical-4-weak-gradient-default: linear-gradient(
    180deg,
    #ffc4d5 0%,
    #fff 100%
  );
  --data-viz-categorical-4-weak-gradient-default-end: #ffc4d5;
  --data-viz-categorical-4-weak-gradient-default-start: #fff;
  --data-viz-categorical-4-weak-gradient-focus: linear-gradient(
    180deg,
    #fcb3c8 0%,
    #ffe8ef 100%
  );
  --data-viz-categorical-4-weak-gradient-focus-end: #fcb3c8;
  --data-viz-categorical-4-weak-gradient-focus-start: #ffe8ef;
  --data-viz-categorical-4-weak-gradient-hover: linear-gradient(
    180deg,
    #fcb3c8 0%,
    #ffe8ef 100%
  );
  --data-viz-categorical-4-weak-gradient-hover-end: #fcb3c8;
  --data-viz-categorical-4-weak-gradient-hover-start: #ffe8ef;
  --data-viz-categorical-5-active: #7da11b;
  --data-viz-categorical-5-default: #7da11b;
  --data-viz-categorical-5-focus: #61800e;
  --data-viz-categorical-5-gradient-default: linear-gradient(
    180deg,
    #7da11b 50%,
    #9dba4c 100%
  );
  --data-viz-categorical-5-gradient-default-end: #7da11b;
  --data-viz-categorical-5-gradient-default-start: #9dba4c;
  --data-viz-categorical-5-hover: #61800e;
  --data-viz-categorical-5-weak-gradient-active: linear-gradient(
    180deg,
    #c7de8a 0%,
    #fff 100%
  );
  --data-viz-categorical-5-weak-gradient-active-end: #c7de8a;
  --data-viz-categorical-5-weak-gradient-active-start: #fff;
  --data-viz-categorical-5-weak-gradient-default: linear-gradient(
    180deg,
    #c7de8a 0%,
    #fff 100%
  );
  --data-viz-categorical-5-weak-gradient-default-end: #c7de8a;
  --data-viz-categorical-5-weak-gradient-default-start: #fff;
  --data-viz-categorical-5-weak-gradient-focus: linear-gradient(
    180deg,
    #b5d166 0%,
    #eaf2d3 100%
  );
  --data-viz-categorical-5-weak-gradient-focus-end: #b5d166;
  --data-viz-categorical-5-weak-gradient-focus-start: #eaf2d3;
  --data-viz-categorical-5-weak-gradient-hover: linear-gradient(
    180deg,
    #b5d166 0%,
    #eaf2d3 100%
  );
  --data-viz-categorical-5-weak-gradient-hover-end: #b5d166;
  --data-viz-categorical-5-weak-gradient-hover-start: #eaf2d3;
  --data-viz-categorical-6-active: #864ae0;
  --data-viz-categorical-6-default: #864ae0;
  --data-viz-categorical-6-focus: #6732b8;
  --data-viz-categorical-6-gradient-default: linear-gradient(
    180deg,
    #864ae0 50%,
    #9b5ff5 100%
  );
  --data-viz-categorical-6-gradient-default-end: #864ae0;
  --data-viz-categorical-6-gradient-default-start: #9b5ff5;
  --data-viz-categorical-6-hover: #6732b8;
  --data-viz-categorical-6-weak-gradient-active: linear-gradient(
    180deg,
    #e0ccff 0%,
    #fff 100%
  );
  --data-viz-categorical-6-weak-gradient-active-end: #e0ccff;
  --data-viz-categorical-6-weak-gradient-active-start: #fff;
  --data-viz-categorical-6-weak-gradient-default: linear-gradient(
    180deg,
    #e0ccff 0%,
    #fff 100%
  );
  --data-viz-categorical-6-weak-gradient-default-end: #e0ccff;
  --data-viz-categorical-6-weak-gradient-default-start: #fff;
  --data-viz-categorical-6-weak-gradient-focus: linear-gradient(
    180deg,
    #d6baff 0%,
    #f3ebff 100%
  );
  --data-viz-categorical-6-weak-gradient-focus-end: #d6baff;
  --data-viz-categorical-6-weak-gradient-focus-start: #f3ebff;
  --data-viz-categorical-6-weak-gradient-hover: linear-gradient(
    180deg,
    #d6baff 0%,
    #f3ebff 100%
  );
  --data-viz-categorical-6-weak-gradient-hover-end: #d6baff;
  --data-viz-categorical-6-weak-gradient-hover-start: #f3ebff;
  --data-viz-categorical-7-active: #f2638c;
  --data-viz-categorical-7-default: #f2638c;
  --data-viz-categorical-7-focus: #cf3a7a;
  --data-viz-categorical-7-gradient-default: linear-gradient(
    180deg,
    #f2638c 50%,
    #ff87a9 100%
  );
  --data-viz-categorical-7-gradient-default-end: #f2638c;
  --data-viz-categorical-7-gradient-default-start: #ff87a9;
  --data-viz-categorical-7-hover: #cf3a7a;
  --data-viz-categorical-7-weak-gradient-active: linear-gradient(
    180deg,
    #ffc4d5 0%,
    #fff 100%
  );
  --data-viz-categorical-7-weak-gradient-active-end: #ffc4d5;
  --data-viz-categorical-7-weak-gradient-active-start: #fff;
  --data-viz-categorical-7-weak-gradient-default: linear-gradient(
    180deg,
    #ffc4d5 0%,
    #fff 100%
  );
  --data-viz-categorical-7-weak-gradient-default-end: #ffc4d5;
  --data-viz-categorical-7-weak-gradient-default-start: #fff;
  --data-viz-categorical-7-weak-gradient-focus: linear-gradient(
    180deg,
    #fcb3c8 0%,
    #ffe8ef 100%
  );
  --data-viz-categorical-7-weak-gradient-focus-end: #fcb3c8;
  --data-viz-categorical-7-weak-gradient-focus-start: #ffe8ef;
  --data-viz-categorical-7-weak-gradient-hover: linear-gradient(
    180deg,
    #fcb3c8 0%,
    #ffe8ef 100%
  );
  --data-viz-categorical-7-weak-gradient-hover-end: #fcb3c8;
  --data-viz-categorical-7-weak-gradient-hover-start: #ffe8ef;
  --data-viz-categorical-8-active: #017580;
  --data-viz-categorical-8-default: #017580;
  --data-viz-categorical-8-focus: #005c66;
  --data-viz-categorical-8-gradient-default: linear-gradient(
    180deg,
    #017580 50%,
    #028e99 100%
  );
  --data-viz-categorical-8-gradient-default-end: #017580;
  --data-viz-categorical-8-gradient-default-start: #028e99;
  --data-viz-categorical-8-hover: #005c66;
  --data-viz-categorical-8-weak-gradient-active: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-categorical-8-weak-gradient-active-end: #84e3e3;
  --data-viz-categorical-8-weak-gradient-active-start: #fff;
  --data-viz-categorical-8-weak-gradient-default: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-categorical-8-weak-gradient-default-end: #84e3e3;
  --data-viz-categorical-8-weak-gradient-default-start: #fff;
  --data-viz-categorical-8-weak-gradient-focus: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-categorical-8-weak-gradient-focus-end: #4ad9d9;
  --data-viz-categorical-8-weak-gradient-focus-start: #d5f5f5;
  --data-viz-categorical-8-weak-gradient-hover: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-categorical-8-weak-gradient-hover-end: #4ad9d9;
  --data-viz-categorical-8-weak-gradient-hover-start: #d5f5f5;
  --data-viz-categorical-9-active: #139beb;
  --data-viz-categorical-9-default: #139beb;
  --data-viz-categorical-9-focus: #087abd;
  --data-viz-categorical-9-gradient-default: linear-gradient(
    180deg,
    #139beb 50%,
    #33bbf5 100%
  );
  --data-viz-categorical-9-gradient-default-end: #139beb;
  --data-viz-categorical-9-gradient-default-start: #33bbf5;
  --data-viz-categorical-9-hover: #087abd;
  --data-viz-categorical-9-weak-gradient-active: linear-gradient(
    180deg,
    #9adffc 0%,
    #fff 100%
  );
  --data-viz-categorical-9-weak-gradient-active-end: #9adffc;
  --data-viz-categorical-9-weak-gradient-active-start: #fff;
  --data-viz-categorical-9-weak-gradient-default: linear-gradient(
    180deg,
    #9adffc 0%,
    #fff 100%
  );
  --data-viz-categorical-9-weak-gradient-default-end: #9adffc;
  --data-viz-categorical-9-weak-gradient-default-start: #fff;
  --data-viz-categorical-9-weak-gradient-focus: linear-gradient(
    180deg,
    #6fd2fc 0%,
    #d9f4ff 100%
  );
  --data-viz-categorical-9-weak-gradient-focus-end: #6fd2fc;
  --data-viz-categorical-9-weak-gradient-focus-start: #d9f4ff;
  --data-viz-categorical-9-weak-gradient-hover: linear-gradient(
    180deg,
    #6fd2fc 0%,
    #d9f4ff 100%
  );
  --data-viz-categorical-9-weak-gradient-hover-end: #6fd2fc;
  --data-viz-categorical-9-weak-gradient-hover-start: #d9f4ff;
  --data-viz-dormant-active: #889099;
  --data-viz-dormant-default: #889099;
  --data-viz-dormant-focus: #6f7680;
  --data-viz-dormant-gradient-default: linear-gradient(
    180deg,
    #889099 50%,
    #a7adb5 100%
  );
  --data-viz-dormant-gradient-default-end: #889099;
  --data-viz-dormant-gradient-default-start: #a7adb5;
  --data-viz-dormant-hover: #6f7680;
  --data-viz-dormant-weak-gradient-active: linear-gradient(
    180deg,
    #d0d4d9 0%,
    #fff 100%
  );
  --data-viz-dormant-weak-gradient-active-end: #d0d4d9;
  --data-viz-dormant-weak-gradient-active-start: #fff;
  --data-viz-dormant-weak-gradient-default: linear-gradient(
    180deg,
    #d0d4d9 0%,
    #fff 100%
  );
  --data-viz-dormant-weak-gradient-default-end: #d0d4d9;
  --data-viz-dormant-weak-gradient-default-start: #fff;
  --data-viz-dormant-weak-gradient-focus: linear-gradient(
    180deg,
    #c1c6cc 0%,
    #f0f1f2 100%
  );
  --data-viz-dormant-weak-gradient-focus-end: #c1c6cc;
  --data-viz-dormant-weak-gradient-focus-start: #f0f1f2;
  --data-viz-dormant-weak-gradient-hover: linear-gradient(
    180deg,
    #c1c6cc 0%,
    #f0f1f2 100%
  );
  --data-viz-dormant-weak-gradient-hover-end: #c1c6cc;
  --data-viz-dormant-weak-gradient-hover-start: #f0f1f2;
  --data-viz-excellent-active: #0d5cbd;
  --data-viz-excellent-default: #0d5cbd;
  --data-viz-excellent-focus: #0051af;
  --data-viz-excellent-gradient-default: linear-gradient(
    180deg,
    #0d5cbd 50%,
    #2774d9 100%
  );
  --data-viz-excellent-gradient-default-end: #0d5cbd;
  --data-viz-excellent-gradient-default-start: #2774d9;
  --data-viz-excellent-hover: #0051af;
  --data-viz-excellent-weak-gradient-active: linear-gradient(
    180deg,
    #bad6ff 0%,
    #fff 100%
  );
  --data-viz-excellent-weak-gradient-active-end: #bad6ff;
  --data-viz-excellent-weak-gradient-active-start: #fff;
  --data-viz-excellent-weak-gradient-default: linear-gradient(
    180deg,
    #bad6ff 0%,
    #fff 100%
  );
  --data-viz-excellent-weak-gradient-default-end: #bad6ff;
  --data-viz-excellent-weak-gradient-default-start: #fff;
  --data-viz-excellent-weak-gradient-focus: linear-gradient(
    180deg,
    #a3c8ff 0%,
    #e3eeff 100%
  );
  --data-viz-excellent-weak-gradient-focus-end: #a3c8ff;
  --data-viz-excellent-weak-gradient-focus-start: #e3eeff;
  --data-viz-excellent-weak-gradient-hover: linear-gradient(
    180deg,
    #a3c8ff 0%,
    #e3eeff 100%
  );
  --data-viz-excellent-weak-gradient-hover-end: #a3c8ff;
  --data-viz-excellent-weak-gradient-hover-start: #e3eeff;
  --data-viz-low-warning-active: #028e99;
  --data-viz-low-warning-default: #028e99;
  --data-viz-low-warning-focus: #017580;
  --data-viz-low-warning-gradient-default: linear-gradient(
    180deg,
    #028e99 50%,
    #0bb2b8 100%
  );
  --data-viz-low-warning-gradient-default-end: #028e99;
  --data-viz-low-warning-gradient-default-start: #0bb2b8;
  --data-viz-low-warning-hover: #017580;
  --data-viz-low-warning-weak-gradient-active: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-low-warning-weak-gradient-active-end: #84e3e3;
  --data-viz-low-warning-weak-gradient-active-start: #fff;
  --data-viz-low-warning-weak-gradient-default: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-low-warning-weak-gradient-default-end: #84e3e3;
  --data-viz-low-warning-weak-gradient-default-start: #fff;
  --data-viz-low-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-low-warning-weak-gradient-focus-end: #4ad9d9;
  --data-viz-low-warning-weak-gradient-focus-start: #d5f5f5;
  --data-viz-low-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-low-warning-weak-gradient-hover-end: #4ad9d9;
  --data-viz-low-warning-weak-gradient-hover-start: #d5f5f5;
  --data-viz-negative-active: #cc2d37;
  --data-viz-negative-default: #cc2d37;
  --data-viz-negative-focus: #a01d26;
  --data-viz-negative-gradient-default: linear-gradient(
    180deg,
    #cc2d37 50%,
    #eb4651 100%
  );
  --data-viz-negative-gradient-default-end: #cc2d37;
  --data-viz-negative-gradient-default-start: #eb4651;
  --data-viz-negative-hover: #a01d26;
  --data-viz-negative-weak-gradient-active: linear-gradient(
    180deg,
    #ffc7c9 0%,
    #fff 100%
  );
  --data-viz-negative-weak-gradient-active-end: #ffc7c9;
  --data-viz-negative-weak-gradient-active-start: #fff;
  --data-viz-negative-weak-gradient-default: linear-gradient(
    180deg,
    #ffc7c9 0%,
    #fff 100%
  );
  --data-viz-negative-weak-gradient-default-end: #ffc7c9;
  --data-viz-negative-weak-gradient-default-start: #fff;
  --data-viz-negative-weak-gradient-focus: linear-gradient(
    180deg,
    #ffb2b5 0%,
    #ffe8e9 100%
  );
  --data-viz-negative-weak-gradient-focus-end: #ffb2b5;
  --data-viz-negative-weak-gradient-focus-start: #ffe8e9;
  --data-viz-negative-weak-gradient-hover: linear-gradient(
    180deg,
    #ffb2b5 0%,
    #ffe8e9 100%
  );
  --data-viz-negative-weak-gradient-hover-end: #ffb2b5;
  --data-viz-negative-weak-gradient-hover-start: #ffe8e9;
  --data-viz-positive-active: #139beb;
  --data-viz-positive-default: #139beb;
  --data-viz-positive-focus: #087abd;
  --data-viz-positive-gradient-default: linear-gradient(
    180deg,
    #139beb 50%,
    #33bbf5 100%
  );
  --data-viz-positive-gradient-default-end: #139beb;
  --data-viz-positive-gradient-default-start: #33bbf5;
  --data-viz-positive-hover: #087abd;
  --data-viz-positive-weak-gradient-active: linear-gradient(
    180deg,
    #9adffc 0%,
    #fff 100%
  );
  --data-viz-positive-weak-gradient-active-end: #9adffc;
  --data-viz-positive-weak-gradient-active-start: #fff;
  --data-viz-positive-weak-gradient-default: linear-gradient(
    180deg,
    #9adffc 0%,
    #fff 100%
  );
  --data-viz-positive-weak-gradient-default-end: #9adffc;
  --data-viz-positive-weak-gradient-default-start: #fff;
  --data-viz-positive-weak-gradient-focus: linear-gradient(
    180deg,
    #6fd2fc 0%,
    #d9f4ff 100%
  );
  --data-viz-positive-weak-gradient-focus-end: #6fd2fc;
  --data-viz-positive-weak-gradient-focus-start: #d9f4ff;
  --data-viz-positive-weak-gradient-hover: linear-gradient(
    180deg,
    #6fd2fc 0%,
    #d9f4ff 100%
  );
  --data-viz-positive-weak-gradient-hover-end: #6fd2fc;
  --data-viz-positive-weak-gradient-hover-start: #d9f4ff;
  --data-viz-severe-warning-active: #f26722;
  --data-viz-severe-warning-default: #f26722;
  --data-viz-severe-warning-focus: #c44f14;
  --data-viz-severe-warning-gradient-default: linear-gradient(
    180deg,
    #f26722 50%,
    #fc8d4c 100%
  );
  --data-viz-severe-warning-gradient-default-end: #f26722;
  --data-viz-severe-warning-gradient-default-start: #fc8d4c;
  --data-viz-severe-warning-hover: #c44f14;
  --data-viz-severe-warning-weak-gradient-active: linear-gradient(
    180deg,
    #fcc9a7 0%,
    #fff 100%
  );
  --data-viz-severe-warning-weak-gradient-active-end: #fcc9a7;
  --data-viz-severe-warning-weak-gradient-active-start: #fff;
  --data-viz-severe-warning-weak-gradient-default: linear-gradient(
    180deg,
    #fcc9a7 0%,
    #fff 100%
  );
  --data-viz-severe-warning-weak-gradient-default-end: #fcc9a7;
  --data-viz-severe-warning-weak-gradient-default-start: #fff;
  --data-viz-severe-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #fcb88d 0%,
    #ffeadb 100%
  );
  --data-viz-severe-warning-weak-gradient-focus-end: #fcb88d;
  --data-viz-severe-warning-weak-gradient-focus-start: #ffeadb;
  --data-viz-severe-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #fcb88d 0%,
    #ffeadb 100%
  );
  --data-viz-severe-warning-weak-gradient-hover-end: #fcb88d;
  --data-viz-severe-warning-weak-gradient-hover-start: #ffeadb;
  --data-viz-warning-active: #cc8604;
  --data-viz-warning-default: #cc8604;
  --data-viz-warning-focus: #b05f04;
  --data-viz-warning-gradient-default: linear-gradient(
    180deg,
    #cc8604 50%,
    #e0a419 100%
  );
  --data-viz-warning-gradient-default-end: #cc8604;
  --data-viz-warning-gradient-default-start: #e0a419;
  --data-viz-warning-hover: #b05f04;
  --data-viz-warning-weak-gradient-active: linear-gradient(
    180deg,
    #f2d268 0%,
    #fff 100%
  );
  --data-viz-warning-weak-gradient-active-end: #f2d268;
  --data-viz-warning-weak-gradient-active-start: #fff;
  --data-viz-warning-weak-gradient-default: linear-gradient(
    180deg,
    #f2d268 0%,
    #fff 100%
  );
  --data-viz-warning-weak-gradient-default-end: #f2d268;
  --data-viz-warning-weak-gradient-default-start: #fff;
  --data-viz-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #f0c243 0%,
    #faefb9 100%
  );
  --data-viz-warning-weak-gradient-focus-end: #f0c243;
  --data-viz-warning-weak-gradient-focus-start: #faefb9;
  --data-viz-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #f0c243 0%,
    #faefb9 100%
  );
  --data-viz-warning-weak-gradient-hover-end: #f0c243;
  --data-viz-warning-weak-gradient-hover-start: #faefb9;

  /* token for modal overlay */
  --overlay-bg-default: rgba(0,0,0,0.4);
}

/* Non-token additions for contextual container. */
*[data-mds-theme="light-classic"] [class^="mds-"] {
  color-scheme: light;
}
*[data-mds-theme="light-classic"] [class*=" mds-"] {
  color-scheme: light;
}
`,ie=`/**
 * This file is auto-generated. Do not edit it directly.
 */

*[data-mds-theme="light"] {
  --brand-bg-default: #373c42;
  --brand-bg-hover: #373c42;
  --brand-bg-focus: #464c54;
  --brand-bg-active: #464c54;
  --brand-bg-disabled: #e1e4e8;
  --brand-bg-gradient-start: #373c42;
  --brand-bg-gradient-end: #0f1214;
  --brand-bg-gradient-default: linear-gradient(90deg, #373c42 0%, #0f1214 100%);
  --brand-bg-strong-default: #373c42;
  --brand-bg-strong-hover: #373c42;
  --brand-bg-strong-focus: #373c42;
  --brand-bg-strong-active: #373c42;
  --brand-text-default: #f7f7f7;
  --brand-text-hover: #f7f7f7;
  --brand-text-active: #f7f7f7;
  --brand-text-weak-default: #f7f7f7;
  --brand-text-weak-hover: #f7f7f7;
  --brand-text-weak-focus: #f7f7f7;
  --brand-text-weak-active: #f7f7f7;
  --brand-text-strong-default: #f0f1f2;
  --brand-icon-default: #f7f7f7;
  --brand-icon-hover: #fff;
  --brand-icon-active: #fff;
  --brand-icon-weak-default: #f7f7f7;
  --brand-icon-weak-hover: #f7f7f7;
  --brand-icon-weak-focus: #f7f7f7;
  --brand-icon-weak-active: #f7f7f7;
  --brand-border-active: #cce1ff;
  --brand-accent-icon-default: #7e868f;
  --brand-accent-icon-focus: #fff;
  --brand-accent-icon-active: #45991f;
  --brand-accent-icon-disabled: #d0d4d9;
  --brand-accent-icon-weak-default: #c1c6cc;
  --brand-accent-icon-weak-focus: #fff;
  --brand-accent-icon-weak-active: #6bbf41;
  --brand-accent-icon-weak-disabled: #d0d4d9;
  --brand-accent-icon-medium-default: #a7adb5;
  --brand-accent-icon-medium-focus: #fff;
  --brand-accent-icon-medium-active: #52a62b;
  --brand-accent-icon-medium-disabled: #d0d4d9;
  --brand-accent-border-default: #52a62b;
  --brand-accent-border-hover: #e1e4e8;
  --brand-accent-border-focus: #45991f;
  --brand-accent-border-active: #45991f;
  --brand-accent-border-weak-default: #d0d4d9;
  --brand-accent-border-weak-hover: #fff;
  --brand-accent-border-weak-focus: #fff;
  --brand-accent-border-weak-active: #6bbf41;
  --brand-accent-border-weak-disabled: #fff;
  --brand-accent-border-medium-default: #f0f1f2;
  --brand-accent-border-medium-hover: #fff;
  --brand-accent-border-medium-focus: #fff;
  --brand-accent-border-medium-active: #e0f5d5;
  --brand-accent-border-medium-disabled: #fff;
  --brand-accent-border-strong-default: #f7f7f7;
  --brand-accent-border-strong-hover: #f7f7f7;
  --brand-accent-border-strong-focus: #f7f7f7;
  --brand-accent-border-strong-active: #f7f7f7;
  --brand-accent-border-strong-disabled: #fff;
  --base-bg-default: #f7f7f7;
  --base-bg-hover: #f7f7f7;
  --base-bg-active: #f7f7f7;
  --base-bg-disabled: #f0f1f2;
  --base-bg-weak-default: #fff;
  --base-bg-weak-hover: rgba(225,228,232,0.8);
  --base-bg-weak-active: #f0f1f2;
  --base-bg-weak-disabled: #f0f1f2;
  --base-bg-medium-default: #f7f7f7;
  --base-bg-medium-hover: #e1e4e8;
  --base-bg-medium-active: #f0f1f2;
  --base-bg-medium-disabled: #f7f7f7;
  --base-bg-strong-default: #656c75;
  --base-bg-strong-hover: #23282e;
  --base-bg-strong-focus: #23282e;
  --base-bg-strong-active: #23282e;
  --base-bg-strong-disabled: #d0d4d9;
  --base-icon-in-default: #fff;
  --base-icon-in-hover: #fff;
  --base-icon-in-focus: #fff;
  --base-icon-in-active: #fff;
  --base-icon-in-disabled: #fff;
  --base-text-default: #23282e;
  --base-text-disabled: #c1c6cc;
  --base-text-weak-default: #889099;
  --base-text-weak-disabled: #c1c6cc;
  --base-text-medium-default: #596069;
  --base-text-medium-disabled: #c1c6cc;
  --base-text-strong-default: #373c42;
  --base-text-strong-disabled: #c1c6cc;
  --base-text-in-default: #fff;
  --base-text-in-hover: #fff;
  --base-text-in-focus: #fff;
  --base-text-in-active: #fff;
  --base-text-in-disabled: #fff;
  --base-text-in-weak-default: #f7f7f7;
  --base-border-default: #e1e4e8;
  --base-border-weak-default: #fff;
  --base-border-medium-default: #e1e4e8;
  --base-border-strong-default: #656c75;
  --base-border-gradient-default: linear-gradient(
    180deg,
    #f7f7f7 0%,
    #e1e4e8 50%,
    #f7f7f7 100%
  );
  --inverse-bg-default: #373c42;
  --inverse-bg-hover: #373c42;
  --inverse-bg-focus: #464c54;
  --inverse-bg-active: #464c54;
  --inverse-bg-disabled: #e1e4e8;
  --inverse-bg-gradient-start: #373c42;
  --inverse-bg-gradient-end: #0f1214;
  --inverse-bg-gradient-default: linear-gradient(
    90deg,
    #373c42 0%,
    #0f1214 100%
  );
  --inverse-bg-weak-default: #373c42;
  --inverse-text-default: #f7f7f7;
  --inverse-text-hover: #f7f7f7;
  --inverse-text-focus: #f7f7f7;
  --inverse-text-active: #f7f7f7;
  --inverse-text-disabled: #656c75;
  --inverse-text-medium-default: #c1c6cc;
  --inverse-text-medium-disabled: #656c75;
  --inverse-icon-default: #f7f7f7;
  --inverse-icon-hover: #fff;
  --inverse-icon-focus: #fff;
  --inverse-icon-active: #fff;
  --inverse-icon-disabled: #6f7680;
  --inverse-icon-strong-default: #fff;
  --inverse-icon-strong-hover: #fff;
  --inverse-icon-strong-focus: #fff;
  --inverse-icon-strong-active: #fff;
  --inverse-icon-strong-disabled: #fff;
  --inverse-border-default: #6f7680;
  --inverse-border-hover: #649ef5;
  --inverse-border-focus: #cce1ff;
  --inverse-border-active: #cce1ff;
  --inverse-border-disabled: #e1e4e8;
  --control-bg-default: #fff;
  --control-bg-hover: #e3eeff;
  --control-bg-focus: #f0f1f2;
  --control-bg-active: #f0f1f2;
  --control-bg-disabled: #f7f7f7;
  --control-bg-weak-default: #fff;
  --control-bg-weak-hover: #cce1ff;
  --control-bg-weak-focus: #e3eeff;
  --control-bg-weak-active: #e3eeff;
  --control-bg-weak-disabled: #f7f7f7;
  --control-bg-medium-default: #fff;
  --control-bg-medium-hover: #f7f7f7;
  --control-bg-medium-focus: #e3eeff;
  --control-bg-medium-active: #e3eeff;
  --control-bg-medium-disabled: #e1e4e8;
  --control-bg-strong-default: #2774d9;
  --control-bg-strong-hover: #0d5cbd;
  --control-bg-strong-focus: #0d5cbd;
  --control-bg-strong-active: #0d5cbd;
  --control-bg-strong-disabled: #bad6ff;
  --control-icon-default: #1d69cc;
  --control-icon-hover: #0d5cbd;
  --control-icon-focus: #0d5cbd;
  --control-icon-active: #0d5cbd;
  --control-icon-disabled: #a3c8ff;
  --control-icon-weak-default: #7e868f;
  --control-icon-weak-hover: #2774d9;
  --control-icon-weak-focus: #2774d9;
  --control-icon-weak-active: #2774d9;
  --control-icon-weak-disabled: #d0d4d9;
  --control-icon-medium-default: #2774d9;
  --control-icon-medium-hover: #0d5cbd;
  --control-icon-medium-focus: #0d5cbd;
  --control-icon-medium-active: #0d5cbd;
  --control-icon-medium-disabled: #a3c8ff;
  --control-icon-strong-default: #656c75;
  --control-icon-strong-hover: #464c54;
  --control-icon-strong-focus: #1d69cc;
  --control-icon-strong-active: #1d69cc;
  --control-icon-strong-disabled: #c1c6cc;
  --control-icon-in-default: #fff;
  --control-icon-in-hover: #fff;
  --control-icon-in-focus: #fff;
  --control-icon-in-active: #fff;
  --control-icon-in-disabled: #c1c6cc;
  --control-icon-in-strong-default: #2774d9;
  --control-icon-in-strong-hover: #2774d9;
  --control-icon-in-strong-focus: #2774d9;
  --control-icon-in-strong-active: #2774d9;
  --control-icon-in-strong-disabled: #c1c6cc;
  --control-border-default: #889099;
  --control-border-hover: #3e84e5;
  --control-border-focus: #3e84e5;
  --control-border-active: #3e84e5;
  --control-border-disabled: #d0d4d9;
  --control-border-weak-default: #e1e4e8;
  --control-border-weak-hover: #7cadf7;
  --control-border-weak-focus: #7cadf7;
  --control-border-weak-active: #7cadf7;
  --control-border-weak-disabled: #d0d4d9;
  --control-border-medium-default: #2774d9;
  --control-border-medium-hover: #bad6ff;
  --control-border-medium-focus: #2774d9;
  --control-border-medium-active: #2774d9;
  --control-border-medium-disabled: #d0d4d9;
  --control-border-strong-default: #656c75;
  --control-border-strong-hover: #656c75;
  --control-border-strong-focus: #2774d9;
  --control-border-strong-active: #2774d9;
  --control-border-strong-disabled: #d0d4d9;
  --interact-bg-default: #1d69cc;
  --interact-bg-hover: #0d5cbd;
  --interact-bg-focus: #0d5cbd;
  --interact-bg-active: #0d5cbd;
  --interact-bg-disabled: #a3c8ff;
  --interact-bg-weak-default: #fff;
  --interact-bg-weak-hover: #cce1ff;
  --interact-bg-weak-focus: #cce1ff;
  --interact-bg-weak-active: #cce1ff;
  --interact-bg-weak-disabled: #fff;
  --interact-bg-medium-default: #2774d9;
  --interact-bg-medium-hover: #cce1ff;
  --interact-bg-medium-active: #cce1ff;
  --interact-bg-strong-hover: #f7f7f7;
  --interact-bg-strong-active: #f7f7f7;
  --interact-text-default: #1d69cc;
  --interact-text-hover: #0d5cbd;
  --interact-text-focus: #0d5cbd;
  --interact-text-active: #0d5cbd;
  --interact-text-disabled: #a3c8ff;
  --interact-text-weak-default: #656c75;
  --interact-text-weak-hover: #1d69cc;
  --interact-text-weak-focus: #1d69cc;
  --interact-text-weak-active: #1d69cc;
  --interact-text-weak-disabled: #c1c6cc;
  --interact-text-in-default: #fff;
  --interact-text-in-hover: #fff;
  --interact-text-in-focus: #fff;
  --interact-text-in-active: #fff;
  --interact-text-in-disabled: #fff;
  --interact-icon-default: #1d69cc;
  --interact-icon-hover: #0d5cbd;
  --interact-icon-focus: #0d5cbd;
  --interact-icon-active: #0d5cbd;
  --interact-icon-disabled: #a3c8ff;
  --interact-icon-weak-default: #7e868f;
  --interact-icon-weak-hover: #6f7680;
  --interact-icon-weak-focus: #6f7680;
  --interact-icon-weak-active: #6f7680;
  --interact-icon-weak-disabled: #d0d4d9;
  --interact-icon-medium-default: #7e868f;
  --interact-icon-medium-hover: #2774d9;
  --interact-icon-medium-focus: #2774d9;
  --interact-icon-medium-active: #2774d9;
  --interact-icon-medium-disabled: #c1c6cc;
  --interact-icon-strong-default: #656c75;
  --interact-icon-strong-hover: #464c54;
  --interact-icon-strong-active: #464c54;
  --interact-icon-strong-focus: #464c54;
  --interact-icon-strong-disabled: #a7adb5;
  --interact-icon-in-default: #fff;
  --interact-icon-in-hover: #fff;
  --interact-icon-in-focus: #fff;
  --interact-icon-in-active: #fff;
  --interact-icon-in-disabled: #fff;
  --interact-border-default: #1d69cc;
  --interact-border-hover: #0d5cbd;
  --interact-border-focus: #0d5cbd;
  --interact-border-active: #0d5cbd;
  --interact-border-disabled: #a3c8ff;
  --interact-border-weak-default: #e1e4e8;
  --interact-border-weak-hover: #cce1ff;
  --interact-border-weak-focus: #e1e4e8;
  --interact-border-weak-active: #e1e4e8;
  --interact-border-weak-disabled: #e1e4e8;
  --interact-border-medium-default: #2774d9;
  --interact-border-medium-hover: #bad6ff;
  --interact-border-medium-focus: #2774d9;
  --interact-border-medium-active: #2774d9;
  --interact-border-medium-disabled: #e1e4e8;
  --positive-bg-default: #139beb;
  --positive-bg-hover: #139beb;
  --positive-bg-focus: #139beb;
  --positive-bg-active: #139beb;
  --positive-bg-disabled: #9adffc;
  --positive-bg-weak-default: #fff;
  --positive-bg-weak-hover: #fff;
  --positive-bg-weak-focus: #fff;
  --positive-bg-weak-active: #fff;
  --positive-bg-weak-disabled: #fff;
  --positive-bg-medium-default: #d9f4ff;
  --positive-bg-medium-hover: #d9f4ff;
  --positive-bg-medium-focus: #d9f4ff;
  --positive-bg-medium-active: #d9f4ff;
  --positive-bg-medium-disabled: #f7f7f7;
  --positive-bg-strong-default: #d9f4ff;
  --positive-icon-default: #139beb;
  --positive-icon-hover: #139beb;
  --positive-icon-focus: #139beb;
  --positive-icon-active: #139beb;
  --positive-icon-disabled: #d0d4d9;
  --positive-icon-weak-default: #9adffc;
  --positive-icon-weak-hover: #9adffc;
  --positive-icon-weak-focus: #9adffc;
  --positive-icon-weak-active: #9adffc;
  --positive-icon-weak-disabled: #9adffc;
  --positive-icon-strong-default: #0d8bd4;
  --positive-icon-strong-hover: #0d8bd4;
  --positive-icon-strong-focus: #0d8bd4;
  --positive-icon-strong-active: #0d8bd4;
  --positive-icon-strong-disabled: #d0d4d9;
  --positive-icon-in-default: #fff;
  --positive-icon-in-hover: #fff;
  --positive-icon-in-focus: #fff;
  --positive-icon-in-active: #fff;
  --positive-icon-in-disabled: #fff;
  --positive-border-default: #139beb;
  --positive-border-hover: #139beb;
  --positive-border-focus: #139beb;
  --positive-border-active: #139beb;
  --positive-border-disabled: #d0d4d9;
  --positive-border-weak-default: #fff;
  --positive-border-weak-hover: #fff;
  --positive-border-weak-focus: #fff;
  --positive-border-weak-active: #fff;
  --positive-border-weak-disabled: #d0d4d9;
  --positive-border-strong-default: #0570ad;
  --positive-border-strong-hover: #0570ad;
  --positive-border-strong-focus: #0570ad;
  --positive-border-strong-active: #0570ad;
  --positive-border-strong-disabled: #0570ad;
  --positive-text-in-default: #fff;
  --positive-text-in-hover: #fff;
  --positive-text-in-focus: #fff;
  --positive-text-in-active: #fff;
  --positive-text-in-disabled: #fff;
  --warning-bg-default: #cc8604;
  --warning-bg-hover: #cc8604;
  --warning-bg-focus: #cc8604;
  --warning-bg-active: #cc8604;
  --warning-bg-disabled: #f2d268;
  --warning-bg-weak-default: #fff;
  --warning-bg-weak-hover: #fff;
  --warning-bg-weak-focus: #fff;
  --warning-bg-weak-active: #fff;
  --warning-bg-weak-disabled: #fff;
  --warning-bg-medium-default: #faefb9;
  --warning-bg-medium-hover: #faefb9;
  --warning-bg-medium-focus: #faefb9;
  --warning-bg-medium-active: #faefb9;
  --warning-bg-medium-disabled: #f7f7f7;
  --warning-bg-strong-default: #faefb9;
  --warning-icon-default: #cc8604;
  --warning-icon-hover: #cc8604;
  --warning-icon-focus: #cc8604;
  --warning-icon-active: #cc8604;
  --warning-icon-disabled: #d0d4d9;
  --warning-icon-strong-default: #bd7202;
  --warning-icon-strong-hover: #bd7202;
  --warning-icon-strong-focus: #bd7202;
  --warning-icon-strong-active: #bd7202;
  --warning-icon-strong-disabled: #d0d4d9;
  --warning-icon-in-default: #fff;
  --warning-icon-in-hover: #fff;
  --warning-icon-in-focus: #fff;
  --warning-icon-in-active: #fff;
  --warning-icon-in-disabled: #fff;
  --warning-border-default: #cc8604;
  --warning-border-hover: #cc8604;
  --warning-border-focus: #cc8604;
  --warning-border-active: #cc8604;
  --warning-border-disabled: #d0d4d9;
  --warning-border-weak-default: #fff;
  --warning-border-weak-hover: #fff;
  --warning-border-weak-focus: #fff;
  --warning-border-weak-active: #fff;
  --warning-border-weak-disabled: #d0d4d9;
  --warning-border-strong-default: #a65503;
  --warning-border-strong-hover: #a65503;
  --warning-border-strong-focus: #a65503;
  --warning-border-strong-active: #a65503;
  --warning-border-strong-disabled: #a65503;
  --warning-text-in-default: #fff;
  --warning-text-in-hover: #fff;
  --warning-text-in-focus: #fff;
  --warning-text-in-active: #fff;
  --warning-text-in-disabled: #fff;
  --severe-warning-bg-default: #f26722;
  --severe-warning-bg-hover: #f26722;
  --severe-warning-bg-focus: #f26722;
  --severe-warning-bg-active: #f26722;
  --severe-warning-bg-disabled: #fcc9a7;
  --severe-warning-bg-weak-default: #fff;
  --severe-warning-bg-weak-hover: #fff;
  --severe-warning-bg-weak-focus: #fff;
  --severe-warning-bg-weak-active: #fff;
  --severe-warning-bg-weak-disabled: #fff;
  --severe-warning-bg-medium-default: #ffeadb;
  --severe-warning-bg-medium-hover: #ffeadb;
  --severe-warning-bg-medium-focus: #ffeadb;
  --severe-warning-bg-medium-active: #ffeadb;
  --severe-warning-bg-medium-disabled: #f7f7f7;
  --severe-warning-bg-strong-default: #ffeadb;
  --severe-warning-icon-default: #f26722;
  --severe-warning-icon-hover: #d95a1a;
  --severe-warning-icon-focus: #c44f14;
  --severe-warning-icon-active: #c44f14;
  --severe-warning-icon-disabled: #d0d4d9;
  --severe-warning-icon-strong-default: #d95a1a;
  --severe-warning-icon-strong-hover: #d95a1a;
  --severe-warning-icon-strong-focus: #d95a1a;
  --severe-warning-icon-strong-active: #d95a1a;
  --severe-warning-icon-strong-disabled: #d95a1a;
  --severe-warning-icon-in-default: #fff;
  --severe-warning-icon-in-hover: #fff;
  --severe-warning-icon-in-focus: #fff;
  --severe-warning-icon-in-active: #fff;
  --severe-warning-icon-in-disabled: #fff;
  --severe-warning-border-default: #f26722;
  --severe-warning-border-hover: #f26722;
  --severe-warning-border-focus: #f26722;
  --severe-warning-border-active: #f26722;
  --severe-warning-border-disabled: #f26722;
  --severe-warning-border-weak-default: #fff;
  --severe-warning-border-weak-hover: #fff;
  --severe-warning-border-weak-focus: #fff;
  --severe-warning-border-weak-active: #fff;
  --severe-warning-border-weak-disabled: #d0d4d9;
  --negative-bg-default: #cc2d37;
  --negative-bg-hover: #b2242d;
  --negative-bg-focus: #b2242d;
  --negative-bg-active: #b2242d;
  --negative-bg-disabled: #ffb2b5;
  --negative-bg-weak-default: #fff;
  --negative-bg-weak-hover: #ffd4d5;
  --negative-bg-weak-focus: #ffd4d5;
  --negative-bg-weak-active: #ffd4d5;
  --negative-bg-weak-disabled: #fff;
  --negative-bg-medium-default: #ffe8e9;
  --negative-bg-medium-hover: #ffe8e9;
  --negative-bg-medium-focus: #ffe8e9;
  --negative-bg-medium-active: #ffe8e9;
  --negative-bg-medium-disabled: #f7f7f7;
  --negative-bg-strong-default: #ffe8e9;
  --negative-text-default: #cc2d37;
  --negative-text-hover: #b2242d;
  --negative-text-focus: #b2242d;
  --negative-text-active: #b2242d;
  --negative-text-disabled: #ffb2b5;
  --negative-text-in-default: #fff;
  --negative-text-in-hover: #fff;
  --negative-text-in-focus: #fff;
  --negative-text-in-active: #fff;
  --negative-text-in-disabled: #fff;
  --negative-icon-default: #cc2d37;
  --negative-icon-hover: #b2242d;
  --negative-icon-focus: #b2242d;
  --negative-icon-active: #b2242d;
  --negative-icon-disabled: #ffb2b5;
  --negative-icon-weak-default: #ffc7c9;
  --negative-icon-weak-hover: #ffc7c9;
  --negative-icon-weak-focus: #ffc7c9;
  --negative-icon-weak-active: #ffc7c9;
  --negative-icon-weak-disabled: #d0d4d9;
  --negative-icon-in-default: #fff;
  --negative-icon-in-hover: #fff;
  --negative-icon-in-focus: #fff;
  --negative-icon-in-active: #fff;
  --negative-icon-in-disabled: #fff;
  --negative-border-default: #cc2d37;
  --negative-border-hover: #b2242d;
  --negative-border-focus: #b2242d;
  --negative-border-active: #b2242d;
  --negative-border-disabled: #ffb2b5;
  --negative-border-weak-default: #fff;
  --negative-border-weak-hover: #fff;
  --negative-border-weak-focus: #fff;
  --negative-border-weak-active: #fff;
  --negative-border-weak-disabled: #d0d4d9;
  --negative-border-medium-default: #d93843;
  --negative-border-medium-hover: #d93843;
  --negative-border-medium-focus: #d93843;
  --negative-border-medium-active: #d93843;
  --negative-border-medium-disabled: #ffb2b5;
  --negative-border-strong-default: #b2242d;
  --negative-border-strong-hover: #b2242d;
  --negative-border-strong-focus: #b2242d;
  --negative-border-strong-active: #b2242d;
  --negative-border-strong-disabled: #ffb2b5;
  --info-bg-default: #864ae0;
  --info-bg-hover: #864ae0;
  --info-bg-focus: #864ae0;
  --info-bg-active: #864ae0;
  --info-bg-disabled: #864ae0;
  --info-bg-weak-default: #fff;
  --info-bg-weak-hover: #fff;
  --info-bg-weak-focus: #fff;
  --info-bg-weak-active: #fff;
  --info-bg-weak-disabled: #fff;
  --info-bg-medium-default: #f3ebff;
  --info-bg-medium-hover: #f3ebff;
  --info-bg-medium-focus: #f3ebff;
  --info-bg-medium-active: #f3ebff;
  --info-bg-medium-disabled: #f7f7f7;
  --info-bg-strong-default: #f3ebff;
  --info-icon-default: #864ae0;
  --info-icon-hover: #864ae0;
  --info-icon-focus: #864ae0;
  --info-icon-active: #864ae0;
  --info-icon-disabled: #d0d4d9;
  --info-icon-weak-default: #e0ccff;
  --info-icon-weak-hover: #e0ccff;
  --info-icon-weak-focus: #e0ccff;
  --info-icon-weak-active: #e0ccff;
  --info-icon-weak-disabled: #e0ccff;
  --info-icon-in-default: #fff;
  --info-icon-in-hover: #fff;
  --info-icon-in-focus: #fff;
  --info-icon-in-active: #fff;
  --info-icon-in-disabled: #fff;
  --info-border-default: #864ae0;
  --info-border-hover: #864ae0;
  --info-border-focus: #864ae0;
  --info-border-active: #864ae0;
  --info-border-disabled: #d0d4d9;
  --info-border-weak-default: #fff;
  --info-border-weak-hover: #fff;
  --info-border-weak-focus: #fff;
  --info-border-weak-active: #fff;
  --info-border-weak-disabled: #d0d4d9;
  --dormant-bg-default: #6f7680;
  --dormant-bg-disabled: #6f7680;
  --dormant-bg-medium-default: #e1e4e8;
  --dormant-bg-medium-disabled: #f7f7f7;
  --dormant-icon-default: #6f7680;
  --dormant-icon-disabled: #d0d4d9;
  --dormant-icon-medium-default: #fff;
  --dormant-icon-in-default: #fff;
  --dormant-icon-in-disabled: #fff;
  --dormant-icon-in-medium-default: #fff;
  --dormant-border-default: #889099;
  --dormant-border-disabled: #d0d4d9;
  --accent-a-default: #7d8aff;
  --accent-a-hover: #6977f0;
  --accent-a-weak-default: #ebedff;
  --accent-b-default: #b02863;
  --accent-b-hover: #991d53;
  --accent-b-weak-default: #ffe8ef;
  --accent-c-default: #f2638c;
  --accent-c-hover: #e3447c;
  --accent-c-weak-default: #ffd4e0;
  --accent-d-default: #753bcc;
  --accent-d-hover: #6732b8;
  --accent-d-weak-default: #f3ebff;
  --accent-e-default: #7da11b;
  --accent-e-hover: #6c8c14;
  --accent-e-weak-default: #eaf2d3;
  --accent-f-default: #ad3907;
  --accent-f-hover: #942e03;
  --accent-f-weak-default: #ffeadb;
  --accent-g-default: #04a4b0;
  --accent-g-hover: #028e99;
  --accent-g-weak-default: #d5f5f5;
  --accent-h-default: #006773;
  --accent-h-hover: #005c66;
  --accent-h-weak-default: #a9ebeb;
  --accent-i-default: #e85fc6;
  --accent-i-hover: #d649b3;
  --accent-i-weak-default: #ffe8f9;
  --accent-j-default: #545c8a;
  --accent-j-hover: #484f7a;
  --accent-j-weak-default: #ebedff;
  --accent-k-default: #21a65f;
  --accent-k-hover: #169855;
  --accent-k-weak-default: #d4f5e1;
  --low-warning-bg-medium-default: #d5f5f5;
  --low-warning-bg-medium-hover: #d5f5f5;
  --low-warning-bg-medium-focus: #d5f5f5;
  --low-warning-bg-medium-active: #d5f5f5;
  --low-warning-bg-medium-disabled: #f7f7f7;
  --low-warning-icon-default: #028e99;
  --low-warning-icon-hover: #028e99;
  --low-warning-icon-focus: #028e99;
  --low-warning-icon-active: #028e99;
  --low-warning-icon-disabled: #d0d4d9;
  --low-warning-icon-in-default: #fff;
  --low-warning-icon-in-hover: #fff;
  --low-warning-icon-in-focus: #fff;
  --low-warning-icon-in-active: #fff;
  --low-warning-icon-in-disabled: #fff;
  --low-warning-border-default: #028e99;
  --low-warning-border-hover: #028e99;
  --low-warning-border-focus: #028e99;
  --low-warning-border-active: #028e99;
  --low-warning-border-disabled: #d0d4d9;
  --in-progress-bg-medium-default: #f3ebff;
  --in-progress-bg-medium-hover: #f3ebff;
  --in-progress-bg-medium-focus: #f3ebff;
  --in-progress-bg-medium-active: #f3ebff;
  --in-progress-bg-medium-disabled: #f7f7f7;
  --in-progress-icon-default: #864ae0;
  --in-progress-icon-hover: #864ae0;
  --in-progress-icon-focus: #864ae0;
  --in-progress-icon-active: #864ae0;
  --in-progress-icon-disabled: #d0d4d9;
  --in-progress-icon-in-default: #fff;
  --in-progress-icon-in-hover: #fff;
  --in-progress-icon-in-focus: #fff;
  --in-progress-icon-in-active: #fff;
  --in-progress-icon-in-disabled: #fff;
  --in-progress-border-default: #864ae0;
  --in-progress-border-hover: #864ae0;
  --in-progress-border-focus: #864ae0;
  --in-progress-border-active: #864ae0;
  --in-progress-border-disabled: #d0d4d9;
  --excellent-bg-medium-default: #e3eeff;
  --excellent-bg-medium-hover: #e3eeff;
  --excellent-bg-medium-focus: #e3eeff;
  --excellent-bg-medium-active: #e3eeff;
  --excellent-bg-medium-disabled: #f7f7f7;
  --excellent-icon-default: #1d69cc;
  --excellent-icon-hover: #1d69cc;
  --excellent-icon-focus: #1d69cc;
  --excellent-icon-active: #1d69cc;
  --excellent-icon-disabled: #d0d4d9;
  --excellent-icon-in-default: #fff;
  --excellent-icon-in-hover: #fff;
  --excellent-icon-in-focus: #fff;
  --excellent-icon-in-active: #fff;
  --excellent-icon-in-disabled: #fff;
  --excellent-border-default: #0d5cbd;
  --excellent-border-hover: #0d5cbd;
  --excellent-border-focus: #0d5cbd;
  --excellent-border-active: #0d5cbd;
  --excellent-border-disabled: #d0d4d9;
  --port-diagram-base-bg-default: #c1c6cc;
  --port-diagram-base-bg-active: #889099;
  --port-diagram-base-bg-medium-default: #d0d4d9;
  --port-diagram-base-bg-medium-active: #c1c6cc;
  --port-diagram-base-bg-weak-default: #f0f1f2;
  --port-diagram-base-border-default: #6f7680;
  --port-diagram-base-border-active: #6f7680;
  --port-diagram-base-border-medium-active: #6f7680;
  --port-diagram-base-border-strong-default: #23282e;
  --port-diagram-base-border-strong-active: #23282e;
  --port-diagram-base-icon-in-default: #373c42;
  --port-diagram-base-icon-in-active: #373c42;
  --port-diagram-full-speed-bg-default: #0570ad;
  --port-diagram-full-speed-bg-active: #03639c;
  --port-diagram-full-speed-bg-medium-default: #9adffc;
  --port-diagram-full-speed-bg-medium-active: #33bbf5;
  --port-diagram-full-speed-border-medium-active: #03639c;
  --port-diagram-full-speed-border-strong-default: #23282e;
  --port-diagram-full-speed-border-strong-active: #23282e;
  --port-diagram-full-speed-icon-in-default: #fff;
  --port-diagram-full-speed-icon-in-active: #fff;
  --port-diagram-disconnected-bg-default: #373c42;
  --port-diagram-disconnected-bg-active: #23282e;
  --port-diagram-disconnected-bg-medium-default: #d0d4d9;
  --port-diagram-disconnected-bg-medium-active: #c1c6cc;
  --port-diagram-disconnected-border-medium-active: #6f7680;
  --port-diagram-disconnected-border-strong-default: #23282e;
  --port-diagram-disconnected-border-strong-active: #23282e;
  --port-diagram-disconnected-icon-in-default: #fff;
  --port-diagram-disconnected-icon-in-active: #fff;
  --port-diagram-reduced-speed-bg-default: #0570ad;
  --port-diagram-reduced-speed-bg-active: #03639c;
  --port-diagram-reduced-speed-bg-medium-default: #0d8bd4;
  --port-diagram-reduced-speed-bg-medium-active: #087abd;
  --port-diagram-reduced-speed-border-default: #fff;
  --port-diagram-reduced-speed-border-active: #fff;
  --port-diagram-reduced-speed-border-medium-active: #03639c;
  --port-diagram-reduced-speed-border-strong-default: #23282e;
  --port-diagram-reduced-speed-border-strong-active: #23282e;
  --port-diagram-reduced-speed-icon-in-default: #fff;
  --port-diagram-reduced-speed-icon-in-active: #fff;
  --port-diagram-warning-bg-default: #b05f04;
  --port-diagram-warning-bg-active: #944b03;
  --port-diagram-warning-bg-medium-default: #f0c243;
  --port-diagram-warning-bg-medium-active: #e0a419;
  --port-diagram-warning-border-medium-active: #944b03;
  --port-diagram-warning-border-strong-default: #23282e;
  --port-diagram-warning-border-strong-active: #23282e;
  --port-diagram-warning-border-default: #fff;
  --port-diagram-warning-icon-in-default: #fff;
  --port-diagram-warning-icon-in-active: #fff;
  --port-diagram-critical-bg-default: #cc2d37;
  --port-diagram-critical-bg-active: #a01d26;
  --port-diagram-critical-bg-medium-default: #ffb2b5;
  --port-diagram-critical-bg-medium-active: #ff878b;
  --port-diagram-critical-border-medium-active: #a01d26;
  --port-diagram-critical-border-strong-default: #23282e;
  --port-diagram-critical-border-strong-active: #23282e;
  --port-diagram-critical-icon-in-default: #fff;
  --port-diagram-critical-icon-in-active: #fff;
  --port-diagram-low-power-bg-default: #b05f04;
  --port-diagram-low-power-bg-active: #944b03;
  --port-diagram-low-power-bg-medium-default: #f0c243;
  --port-diagram-low-power-bg-medium-active: #e0a419;
  --port-diagram-low-power-bg-weak-default: #f5e08e;
  --port-diagram-low-power-bg-weak-active: #f2d268;
  --port-diagram-low-power-border-medium-active: #944b03;
  --port-diagram-low-power-border-strong-default: #23282e;
  --port-diagram-low-power-border-strong-active: #23282e;
  --port-diagram-low-power-icon-in-default: #b05f04;
  --port-diagram-low-power-icon-in-active: #944b03;

  /* light theme -- elevation ( FOR INTERNAL USE ONLY, TEMPORARY ) */
  --elevation-control-default: 0px 3px 8px 0px rgba(0,0,0,0.07843);
  --elevation-control-focus: 0px 0px 0px 2px #cce1ff, 0px 0px 0px 4px #2774d9;
  --elevation-control-select: 0px 0px 0px 2px #3e84e5;
  --elevation-data-viz-focus: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #23282e,
    0px 0px 0px 6px #cce1ff, 0px 0px 0px 8px #3e84e5;
  --elevation-data-viz-select: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #23282e;
  --elevation-floating-default: 0px 4px 12px 0px rgba(0,0,0,0.18039);
  --elevation-invalid-default: 0px 0px 0px 2px #ffd4d5;
  --elevation-invalid-focus: 0px 0px 0px 2px #ffd4d5, 0px 0px 0px 4px #d93843;
  --elevation-lifted-default: 0px 3px 8px 0px rgba(0,0,0,0.07843);
  --elevation-lifted-inset: 10px 0 8px -8px rgba(0,0,0,0.07843) inset;
  --elevation-raised-default: 0px 4px 12px 0px rgba(0,0,0,0.12157);
  --elevation-subtle-default: 0px 2px 5px 0px rgba(0,0,0,0.05098);

  /* color tokens -- data visualizations */
  --data-viz-categorical-1-active: #505ed9;
  --data-viz-categorical-1-default: #505ed9;
  --data-viz-categorical-1-focus: #3b47b2;
  --data-viz-categorical-1-gradient-default: linear-gradient(
    180deg,
    #505ed9 50%,
    #6977f0 100%
  );
  --data-viz-categorical-1-gradient-default-end: #505ed9;
  --data-viz-categorical-1-gradient-default-start: #6977f0;
  --data-viz-categorical-1-hover: #3b47b2;
  --data-viz-categorical-1-weak-gradient-active: linear-gradient(
    180deg,
    #ccd1ff 0%,
    #fff 100%
  );
  --data-viz-categorical-1-weak-gradient-active-end: #ccd1ff;
  --data-viz-categorical-1-weak-gradient-active-start: #fff;
  --data-viz-categorical-1-weak-gradient-default: linear-gradient(
    180deg,
    #ccd1ff 0%,
    #fff 100%
  );
  --data-viz-categorical-1-weak-gradient-default-end: #ccd1ff;
  --data-viz-categorical-1-weak-gradient-default-start: #fff;
  --data-viz-categorical-1-weak-gradient-focus: linear-gradient(
    180deg,
    #bac1ff 0%,
    #ebedff 100%
  );
  --data-viz-categorical-1-weak-gradient-focus-end: #bac1ff;
  --data-viz-categorical-1-weak-gradient-focus-start: #ebedff;
  --data-viz-categorical-1-weak-gradient-hover: linear-gradient(
    180deg,
    #bac1ff 0%,
    #ebedff 100%
  );
  --data-viz-categorical-1-weak-gradient-hover-end: #bac1ff;
  --data-viz-categorical-1-weak-gradient-hover-start: #ebedff;
  --data-viz-categorical-10-active: #545c8a;
  --data-viz-categorical-10-default: #545c8a;
  --data-viz-categorical-10-focus: #484f7a;
  --data-viz-categorical-10-gradient-default: linear-gradient(
    180deg,
    #545c8a 50%,
    #6871a3 100%
  );
  --data-viz-categorical-10-gradient-default-end: #545c8a;
  --data-viz-categorical-10-gradient-default-start: #6871a3;
  --data-viz-categorical-10-hover: #484f7a;
  --data-viz-categorical-10-weak-gradient-active: linear-gradient(
    180deg,
    #ced3f2 0%,
    #fff 100%
  );
  --data-viz-categorical-10-weak-gradient-active-end: #ced3f2;
  --data-viz-categorical-10-weak-gradient-active-start: #fff;
  --data-viz-categorical-10-weak-gradient-default: linear-gradient(
    180deg,
    #ced3f2 0%,
    #fff 100%
  );
  --data-viz-categorical-10-weak-gradient-default-end: #ced3f2;
  --data-viz-categorical-10-weak-gradient-default-start: #fff;
  --data-viz-categorical-10-weak-gradient-focus: linear-gradient(
    180deg,
    #c1c6e8 0%,
    #ebedff 100%
  );
  --data-viz-categorical-10-weak-gradient-focus-end: #c1c6e8;
  --data-viz-categorical-10-weak-gradient-focus-start: #ebedff;
  --data-viz-categorical-10-weak-gradient-hover: linear-gradient(
    180deg,
    #c1c6e8 0%,
    #ebedff 100%
  );
  --data-viz-categorical-10-weak-gradient-hover-end: #c1c6e8;
  --data-viz-categorical-10-weak-gradient-hover-start: #ebedff;
  --data-viz-categorical-11-active: #f26722;
  --data-viz-categorical-11-default: #f26722;
  --data-viz-categorical-11-focus: #c44f14;
  --data-viz-categorical-11-gradient-default: linear-gradient(
    180deg,
    #f26722 50%,
    #fc8d4c 100%
  );
  --data-viz-categorical-11-gradient-default-end: #f26722;
  --data-viz-categorical-11-gradient-default-start: #fc8d4c;
  --data-viz-categorical-11-hover: #c44f14;
  --data-viz-categorical-11-weak-gradient-active: linear-gradient(
    180deg,
    #fcc9a7 0%,
    #fff 100%
  );
  --data-viz-categorical-11-weak-gradient-active-end: #fcc9a7;
  --data-viz-categorical-11-weak-gradient-active-start: #fff;
  --data-viz-categorical-11-weak-gradient-default: linear-gradient(
    180deg,
    #fcc9a7 0%,
    #fff 100%
  );
  --data-viz-categorical-11-weak-gradient-default-end: #fcc9a7;
  --data-viz-categorical-11-weak-gradient-default-start: #fff;
  --data-viz-categorical-11-weak-gradient-focus: linear-gradient(
    180deg,
    #fcb88d 0%,
    #ffeadb 100%
  );
  --data-viz-categorical-11-weak-gradient-focus-end: #fcb88d;
  --data-viz-categorical-11-weak-gradient-focus-start: #ffeadb;
  --data-viz-categorical-11-weak-gradient-hover: linear-gradient(
    180deg,
    #fcb88d 0%,
    #ffeadb 100%
  );
  --data-viz-categorical-11-weak-gradient-hover-end: #fcb88d;
  --data-viz-categorical-11-weak-gradient-hover-start: #ffeadb;
  --data-viz-categorical-12-active: #0b7b46;
  --data-viz-categorical-12-default: #0b7b46;
  --data-viz-categorical-12-focus: #075e39;
  --data-viz-categorical-12-gradient-default: linear-gradient(
    180deg,
    #0b7b46 50%,
    #169855 100%
  );
  --data-viz-categorical-12-gradient-default-end: #0b7b46;
  --data-viz-categorical-12-gradient-default-start: #169855;
  --data-viz-categorical-12-hover: #075e39;
  --data-viz-categorical-12-weak-gradient-active: linear-gradient(
    180deg,
    #97e5b8 0%,
    #fff 100%
  );
  --data-viz-categorical-12-weak-gradient-active-end: #97e5b8;
  --data-viz-categorical-12-weak-gradient-active-start: #fff;
  --data-viz-categorical-12-weak-gradient-default: linear-gradient(
    180deg,
    #97e5b8 0%,
    #fff 100%
  );
  --data-viz-categorical-12-weak-gradient-default-end: #97e5b8;
  --data-viz-categorical-12-weak-gradient-default-start: #fff;
  --data-viz-categorical-12-weak-gradient-focus: linear-gradient(
    180deg,
    #75d9a0 0%,
    #d4f5e1 100%
  );
  --data-viz-categorical-12-weak-gradient-focus-end: #75d9a0;
  --data-viz-categorical-12-weak-gradient-focus-start: #d4f5e1;
  --data-viz-categorical-12-weak-gradient-hover: linear-gradient(
    180deg,
    #75d9a0 0%,
    #d4f5e1 100%
  );
  --data-viz-categorical-12-weak-gradient-hover-end: #75d9a0;
  --data-viz-categorical-12-weak-gradient-hover-start: #d4f5e1;
  --data-viz-categorical-2-active: #04a4b0;
  --data-viz-categorical-2-default: #04a4b0;
  --data-viz-categorical-2-focus: #01818c;
  --data-viz-categorical-2-gradient-default: linear-gradient(
    180deg,
    #04a4b0 50%,
    #17c2c2 100%
  );
  --data-viz-categorical-2-gradient-default-end: #04a4b0;
  --data-viz-categorical-2-gradient-default-start: #17c2c2;
  --data-viz-categorical-2-hover: #01818c;
  --data-viz-categorical-2-weak-gradient-active: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-categorical-2-weak-gradient-active-end: #84e3e3;
  --data-viz-categorical-2-weak-gradient-active-start: #fff;
  --data-viz-categorical-2-weak-gradient-default: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-categorical-2-weak-gradient-default-end: #84e3e3;
  --data-viz-categorical-2-weak-gradient-default-start: #fff;
  --data-viz-categorical-2-weak-gradient-focus: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-categorical-2-weak-gradient-focus-end: #4ad9d9;
  --data-viz-categorical-2-weak-gradient-focus-start: #d5f5f5;
  --data-viz-categorical-2-weak-gradient-hover: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-categorical-2-weak-gradient-hover-end: #4ad9d9;
  --data-viz-categorical-2-weak-gradient-hover-start: #d5f5f5;
  --data-viz-categorical-3-active: #a974f7;
  --data-viz-categorical-3-default: #a974f7;
  --data-viz-categorical-3-focus: #8d4eed;
  --data-viz-categorical-3-gradient-default: linear-gradient(
    180deg,
    #a974f7 50%,
    #c299ff 100%
  );
  --data-viz-categorical-3-gradient-default-end: #a974f7;
  --data-viz-categorical-3-gradient-default-start: #c299ff;
  --data-viz-categorical-3-hover: #8d4eed;
  --data-viz-categorical-3-weak-gradient-active: linear-gradient(
    180deg,
    #e0ccff 0%,
    #fff 100%
  );
  --data-viz-categorical-3-weak-gradient-active-end: #e0ccff;
  --data-viz-categorical-3-weak-gradient-active-start: #fff;
  --data-viz-categorical-3-weak-gradient-default: linear-gradient(
    180deg,
    #e0ccff 0%,
    #fff 100%
  );
  --data-viz-categorical-3-weak-gradient-default-end: #e0ccff;
  --data-viz-categorical-3-weak-gradient-default-start: #fff;
  --data-viz-categorical-3-weak-gradient-focus: linear-gradient(
    180deg,
    #d6baff 0%,
    #f3ebff 100%
  );
  --data-viz-categorical-3-weak-gradient-focus-end: #d6baff;
  --data-viz-categorical-3-weak-gradient-focus-start: #f3ebff;
  --data-viz-categorical-3-weak-gradient-hover: linear-gradient(
    180deg,
    #d6baff 0%,
    #f3ebff 100%
  );
  --data-viz-categorical-3-weak-gradient-hover-end: #d6baff;
  --data-viz-categorical-3-weak-gradient-hover-start: #f3ebff;
  --data-viz-categorical-4-active: #c2306f;
  --data-viz-categorical-4-default: #c2306f;
  --data-viz-categorical-4-focus: #991d53;
  --data-viz-categorical-4-gradient-default: linear-gradient(
    180deg,
    #c2306f 50%,
    #e3447c 100%
  );
  --data-viz-categorical-4-gradient-default-end: #c2306f;
  --data-viz-categorical-4-gradient-default-start: #e3447c;
  --data-viz-categorical-4-hover: #991d53;
  --data-viz-categorical-4-weak-gradient-active: linear-gradient(
    180deg,
    #ffc4d5 0%,
    #fff 100%
  );
  --data-viz-categorical-4-weak-gradient-active-end: #ffc4d5;
  --data-viz-categorical-4-weak-gradient-active-start: #fff;
  --data-viz-categorical-4-weak-gradient-default: linear-gradient(
    180deg,
    #ffc4d5 0%,
    #fff 100%
  );
  --data-viz-categorical-4-weak-gradient-default-end: #ffc4d5;
  --data-viz-categorical-4-weak-gradient-default-start: #fff;
  --data-viz-categorical-4-weak-gradient-focus: linear-gradient(
    180deg,
    #fcb3c8 0%,
    #ffe8ef 100%
  );
  --data-viz-categorical-4-weak-gradient-focus-end: #fcb3c8;
  --data-viz-categorical-4-weak-gradient-focus-start: #ffe8ef;
  --data-viz-categorical-4-weak-gradient-hover: linear-gradient(
    180deg,
    #fcb3c8 0%,
    #ffe8ef 100%
  );
  --data-viz-categorical-4-weak-gradient-hover-end: #fcb3c8;
  --data-viz-categorical-4-weak-gradient-hover-start: #ffe8ef;
  --data-viz-categorical-5-active: #7da11b;
  --data-viz-categorical-5-default: #7da11b;
  --data-viz-categorical-5-focus: #61800e;
  --data-viz-categorical-5-gradient-default: linear-gradient(
    180deg,
    #7da11b 50%,
    #9dba4c 100%
  );
  --data-viz-categorical-5-gradient-default-end: #7da11b;
  --data-viz-categorical-5-gradient-default-start: #9dba4c;
  --data-viz-categorical-5-hover: #61800e;
  --data-viz-categorical-5-weak-gradient-active: linear-gradient(
    180deg,
    #c7de8a 0%,
    #fff 100%
  );
  --data-viz-categorical-5-weak-gradient-active-end: #c7de8a;
  --data-viz-categorical-5-weak-gradient-active-start: #fff;
  --data-viz-categorical-5-weak-gradient-default: linear-gradient(
    180deg,
    #c7de8a 0%,
    #fff 100%
  );
  --data-viz-categorical-5-weak-gradient-default-end: #c7de8a;
  --data-viz-categorical-5-weak-gradient-default-start: #fff;
  --data-viz-categorical-5-weak-gradient-focus: linear-gradient(
    180deg,
    #b5d166 0%,
    #eaf2d3 100%
  );
  --data-viz-categorical-5-weak-gradient-focus-end: #b5d166;
  --data-viz-categorical-5-weak-gradient-focus-start: #eaf2d3;
  --data-viz-categorical-5-weak-gradient-hover: linear-gradient(
    180deg,
    #b5d166 0%,
    #eaf2d3 100%
  );
  --data-viz-categorical-5-weak-gradient-hover-end: #b5d166;
  --data-viz-categorical-5-weak-gradient-hover-start: #eaf2d3;
  --data-viz-categorical-6-active: #864ae0;
  --data-viz-categorical-6-default: #864ae0;
  --data-viz-categorical-6-focus: #6732b8;
  --data-viz-categorical-6-gradient-default: linear-gradient(
    180deg,
    #864ae0 50%,
    #9b5ff5 100%
  );
  --data-viz-categorical-6-gradient-default-end: #864ae0;
  --data-viz-categorical-6-gradient-default-start: #9b5ff5;
  --data-viz-categorical-6-hover: #6732b8;
  --data-viz-categorical-6-weak-gradient-active: linear-gradient(
    180deg,
    #e0ccff 0%,
    #fff 100%
  );
  --data-viz-categorical-6-weak-gradient-active-end: #e0ccff;
  --data-viz-categorical-6-weak-gradient-active-start: #fff;
  --data-viz-categorical-6-weak-gradient-default: linear-gradient(
    180deg,
    #e0ccff 0%,
    #fff 100%
  );
  --data-viz-categorical-6-weak-gradient-default-end: #e0ccff;
  --data-viz-categorical-6-weak-gradient-default-start: #fff;
  --data-viz-categorical-6-weak-gradient-focus: linear-gradient(
    180deg,
    #d6baff 0%,
    #f3ebff 100%
  );
  --data-viz-categorical-6-weak-gradient-focus-end: #d6baff;
  --data-viz-categorical-6-weak-gradient-focus-start: #f3ebff;
  --data-viz-categorical-6-weak-gradient-hover: linear-gradient(
    180deg,
    #d6baff 0%,
    #f3ebff 100%
  );
  --data-viz-categorical-6-weak-gradient-hover-end: #d6baff;
  --data-viz-categorical-6-weak-gradient-hover-start: #f3ebff;
  --data-viz-categorical-7-active: #f2638c;
  --data-viz-categorical-7-default: #f2638c;
  --data-viz-categorical-7-focus: #cf3a7a;
  --data-viz-categorical-7-gradient-default: linear-gradient(
    180deg,
    #f2638c 50%,
    #ff87a9 100%
  );
  --data-viz-categorical-7-gradient-default-end: #f2638c;
  --data-viz-categorical-7-gradient-default-start: #ff87a9;
  --data-viz-categorical-7-hover: #cf3a7a;
  --data-viz-categorical-7-weak-gradient-active: linear-gradient(
    180deg,
    #ffc4d5 0%,
    #fff 100%
  );
  --data-viz-categorical-7-weak-gradient-active-end: #ffc4d5;
  --data-viz-categorical-7-weak-gradient-active-start: #fff;
  --data-viz-categorical-7-weak-gradient-default: linear-gradient(
    180deg,
    #ffc4d5 0%,
    #fff 100%
  );
  --data-viz-categorical-7-weak-gradient-default-end: #ffc4d5;
  --data-viz-categorical-7-weak-gradient-default-start: #fff;
  --data-viz-categorical-7-weak-gradient-focus: linear-gradient(
    180deg,
    #fcb3c8 0%,
    #ffe8ef 100%
  );
  --data-viz-categorical-7-weak-gradient-focus-end: #fcb3c8;
  --data-viz-categorical-7-weak-gradient-focus-start: #ffe8ef;
  --data-viz-categorical-7-weak-gradient-hover: linear-gradient(
    180deg,
    #fcb3c8 0%,
    #ffe8ef 100%
  );
  --data-viz-categorical-7-weak-gradient-hover-end: #fcb3c8;
  --data-viz-categorical-7-weak-gradient-hover-start: #ffe8ef;
  --data-viz-categorical-8-active: #017580;
  --data-viz-categorical-8-default: #017580;
  --data-viz-categorical-8-focus: #005c66;
  --data-viz-categorical-8-gradient-default: linear-gradient(
    180deg,
    #017580 50%,
    #028e99 100%
  );
  --data-viz-categorical-8-gradient-default-end: #017580;
  --data-viz-categorical-8-gradient-default-start: #028e99;
  --data-viz-categorical-8-hover: #005c66;
  --data-viz-categorical-8-weak-gradient-active: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-categorical-8-weak-gradient-active-end: #84e3e3;
  --data-viz-categorical-8-weak-gradient-active-start: #fff;
  --data-viz-categorical-8-weak-gradient-default: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-categorical-8-weak-gradient-default-end: #84e3e3;
  --data-viz-categorical-8-weak-gradient-default-start: #fff;
  --data-viz-categorical-8-weak-gradient-focus: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-categorical-8-weak-gradient-focus-end: #4ad9d9;
  --data-viz-categorical-8-weak-gradient-focus-start: #d5f5f5;
  --data-viz-categorical-8-weak-gradient-hover: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-categorical-8-weak-gradient-hover-end: #4ad9d9;
  --data-viz-categorical-8-weak-gradient-hover-start: #d5f5f5;
  --data-viz-categorical-9-active: #139beb;
  --data-viz-categorical-9-default: #139beb;
  --data-viz-categorical-9-focus: #087abd;
  --data-viz-categorical-9-gradient-default: linear-gradient(
    180deg,
    #139beb 50%,
    #33bbf5 100%
  );
  --data-viz-categorical-9-gradient-default-end: #139beb;
  --data-viz-categorical-9-gradient-default-start: #33bbf5;
  --data-viz-categorical-9-hover: #087abd;
  --data-viz-categorical-9-weak-gradient-active: linear-gradient(
    180deg,
    #9adffc 0%,
    #fff 100%
  );
  --data-viz-categorical-9-weak-gradient-active-end: #9adffc;
  --data-viz-categorical-9-weak-gradient-active-start: #fff;
  --data-viz-categorical-9-weak-gradient-default: linear-gradient(
    180deg,
    #9adffc 0%,
    #fff 100%
  );
  --data-viz-categorical-9-weak-gradient-default-end: #9adffc;
  --data-viz-categorical-9-weak-gradient-default-start: #fff;
  --data-viz-categorical-9-weak-gradient-focus: linear-gradient(
    180deg,
    #6fd2fc 0%,
    #d9f4ff 100%
  );
  --data-viz-categorical-9-weak-gradient-focus-end: #6fd2fc;
  --data-viz-categorical-9-weak-gradient-focus-start: #d9f4ff;
  --data-viz-categorical-9-weak-gradient-hover: linear-gradient(
    180deg,
    #6fd2fc 0%,
    #d9f4ff 100%
  );
  --data-viz-categorical-9-weak-gradient-hover-end: #6fd2fc;
  --data-viz-categorical-9-weak-gradient-hover-start: #d9f4ff;
  --data-viz-dormant-active: #889099;
  --data-viz-dormant-default: #889099;
  --data-viz-dormant-focus: #6f7680;
  --data-viz-dormant-gradient-default: linear-gradient(
    180deg,
    #889099 50%,
    #a7adb5 100%
  );
  --data-viz-dormant-gradient-default-end: #889099;
  --data-viz-dormant-gradient-default-start: #a7adb5;
  --data-viz-dormant-hover: #6f7680;
  --data-viz-dormant-weak-gradient-active: linear-gradient(
    180deg,
    #d0d4d9 0%,
    #fff 100%
  );
  --data-viz-dormant-weak-gradient-active-end: #d0d4d9;
  --data-viz-dormant-weak-gradient-active-start: #fff;
  --data-viz-dormant-weak-gradient-default: linear-gradient(
    180deg,
    #d0d4d9 0%,
    #fff 100%
  );
  --data-viz-dormant-weak-gradient-default-end: #d0d4d9;
  --data-viz-dormant-weak-gradient-default-start: #fff;
  --data-viz-dormant-weak-gradient-focus: linear-gradient(
    180deg,
    #c1c6cc 0%,
    #f0f1f2 100%
  );
  --data-viz-dormant-weak-gradient-focus-end: #c1c6cc;
  --data-viz-dormant-weak-gradient-focus-start: #f0f1f2;
  --data-viz-dormant-weak-gradient-hover: linear-gradient(
    180deg,
    #c1c6cc 0%,
    #f0f1f2 100%
  );
  --data-viz-dormant-weak-gradient-hover-end: #c1c6cc;
  --data-viz-dormant-weak-gradient-hover-start: #f0f1f2;
  --data-viz-excellent-active: #0d5cbd;
  --data-viz-excellent-default: #0d5cbd;
  --data-viz-excellent-focus: #0051af;
  --data-viz-excellent-gradient-default: linear-gradient(
    180deg,
    #0d5cbd 50%,
    #2774d9 100%
  );
  --data-viz-excellent-gradient-default-end: #0d5cbd;
  --data-viz-excellent-gradient-default-start: #2774d9;
  --data-viz-excellent-hover: #0051af;
  --data-viz-excellent-weak-gradient-active: linear-gradient(
    180deg,
    #bad6ff 0%,
    #fff 100%
  );
  --data-viz-excellent-weak-gradient-active-end: #bad6ff;
  --data-viz-excellent-weak-gradient-active-start: #fff;
  --data-viz-excellent-weak-gradient-default: linear-gradient(
    180deg,
    #bad6ff 0%,
    #fff 100%
  );
  --data-viz-excellent-weak-gradient-default-end: #bad6ff;
  --data-viz-excellent-weak-gradient-default-start: #fff;
  --data-viz-excellent-weak-gradient-focus: linear-gradient(
    180deg,
    #a3c8ff 0%,
    #e3eeff 100%
  );
  --data-viz-excellent-weak-gradient-focus-end: #a3c8ff;
  --data-viz-excellent-weak-gradient-focus-start: #e3eeff;
  --data-viz-excellent-weak-gradient-hover: linear-gradient(
    180deg,
    #a3c8ff 0%,
    #e3eeff 100%
  );
  --data-viz-excellent-weak-gradient-hover-end: #a3c8ff;
  --data-viz-excellent-weak-gradient-hover-start: #e3eeff;
  --data-viz-low-warning-active: #028e99;
  --data-viz-low-warning-default: #028e99;
  --data-viz-low-warning-focus: #017580;
  --data-viz-low-warning-gradient-default: linear-gradient(
    180deg,
    #028e99 50%,
    #0bb2b8 100%
  );
  --data-viz-low-warning-gradient-default-end: #028e99;
  --data-viz-low-warning-gradient-default-start: #0bb2b8;
  --data-viz-low-warning-hover: #017580;
  --data-viz-low-warning-weak-gradient-active: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-low-warning-weak-gradient-active-end: #84e3e3;
  --data-viz-low-warning-weak-gradient-active-start: #fff;
  --data-viz-low-warning-weak-gradient-default: linear-gradient(
    180deg,
    #84e3e3 0%,
    #fff 100%
  );
  --data-viz-low-warning-weak-gradient-default-end: #84e3e3;
  --data-viz-low-warning-weak-gradient-default-start: #fff;
  --data-viz-low-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-low-warning-weak-gradient-focus-end: #4ad9d9;
  --data-viz-low-warning-weak-gradient-focus-start: #d5f5f5;
  --data-viz-low-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #4ad9d9 0%,
    #d5f5f5 100%
  );
  --data-viz-low-warning-weak-gradient-hover-end: #4ad9d9;
  --data-viz-low-warning-weak-gradient-hover-start: #d5f5f5;
  --data-viz-negative-active: #cc2d37;
  --data-viz-negative-default: #cc2d37;
  --data-viz-negative-focus: #a01d26;
  --data-viz-negative-gradient-default: linear-gradient(
    180deg,
    #cc2d37 50%,
    #eb4651 100%
  );
  --data-viz-negative-gradient-default-end: #cc2d37;
  --data-viz-negative-gradient-default-start: #eb4651;
  --data-viz-negative-hover: #a01d26;
  --data-viz-negative-weak-gradient-active: linear-gradient(
    180deg,
    #ffc7c9 0%,
    #fff 100%
  );
  --data-viz-negative-weak-gradient-active-end: #ffc7c9;
  --data-viz-negative-weak-gradient-active-start: #fff;
  --data-viz-negative-weak-gradient-default: linear-gradient(
    180deg,
    #ffc7c9 0%,
    #fff 100%
  );
  --data-viz-negative-weak-gradient-default-end: #ffc7c9;
  --data-viz-negative-weak-gradient-default-start: #fff;
  --data-viz-negative-weak-gradient-focus: linear-gradient(
    180deg,
    #ffb2b5 0%,
    #ffe8e9 100%
  );
  --data-viz-negative-weak-gradient-focus-end: #ffb2b5;
  --data-viz-negative-weak-gradient-focus-start: #ffe8e9;
  --data-viz-negative-weak-gradient-hover: linear-gradient(
    180deg,
    #ffb2b5 0%,
    #ffe8e9 100%
  );
  --data-viz-negative-weak-gradient-hover-end: #ffb2b5;
  --data-viz-negative-weak-gradient-hover-start: #ffe8e9;
  --data-viz-positive-active: #139beb;
  --data-viz-positive-default: #139beb;
  --data-viz-positive-focus: #087abd;
  --data-viz-positive-gradient-default: linear-gradient(
    180deg,
    #139beb 50%,
    #33bbf5 100%
  );
  --data-viz-positive-gradient-default-end: #139beb;
  --data-viz-positive-gradient-default-start: #33bbf5;
  --data-viz-positive-hover: #087abd;
  --data-viz-positive-weak-gradient-active: linear-gradient(
    180deg,
    #9adffc 0%,
    #fff 100%
  );
  --data-viz-positive-weak-gradient-active-end: #9adffc;
  --data-viz-positive-weak-gradient-active-start: #fff;
  --data-viz-positive-weak-gradient-default: linear-gradient(
    180deg,
    #9adffc 0%,
    #fff 100%
  );
  --data-viz-positive-weak-gradient-default-end: #9adffc;
  --data-viz-positive-weak-gradient-default-start: #fff;
  --data-viz-positive-weak-gradient-focus: linear-gradient(
    180deg,
    #6fd2fc 0%,
    #d9f4ff 100%
  );
  --data-viz-positive-weak-gradient-focus-end: #6fd2fc;
  --data-viz-positive-weak-gradient-focus-start: #d9f4ff;
  --data-viz-positive-weak-gradient-hover: linear-gradient(
    180deg,
    #6fd2fc 0%,
    #d9f4ff 100%
  );
  --data-viz-positive-weak-gradient-hover-end: #6fd2fc;
  --data-viz-positive-weak-gradient-hover-start: #d9f4ff;
  --data-viz-severe-warning-active: #f26722;
  --data-viz-severe-warning-default: #f26722;
  --data-viz-severe-warning-focus: #c44f14;
  --data-viz-severe-warning-gradient-default: linear-gradient(
    180deg,
    #f26722 50%,
    #fc8d4c 100%
  );
  --data-viz-severe-warning-gradient-default-end: #f26722;
  --data-viz-severe-warning-gradient-default-start: #fc8d4c;
  --data-viz-severe-warning-hover: #c44f14;
  --data-viz-severe-warning-weak-gradient-active: linear-gradient(
    180deg,
    #fcc9a7 0%,
    #fff 100%
  );
  --data-viz-severe-warning-weak-gradient-active-end: #fcc9a7;
  --data-viz-severe-warning-weak-gradient-active-start: #fff;
  --data-viz-severe-warning-weak-gradient-default: linear-gradient(
    180deg,
    #fcc9a7 0%,
    #fff 100%
  );
  --data-viz-severe-warning-weak-gradient-default-end: #fcc9a7;
  --data-viz-severe-warning-weak-gradient-default-start: #fff;
  --data-viz-severe-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #fcb88d 0%,
    #ffeadb 100%
  );
  --data-viz-severe-warning-weak-gradient-focus-end: #fcb88d;
  --data-viz-severe-warning-weak-gradient-focus-start: #ffeadb;
  --data-viz-severe-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #fcb88d 0%,
    #ffeadb 100%
  );
  --data-viz-severe-warning-weak-gradient-hover-end: #fcb88d;
  --data-viz-severe-warning-weak-gradient-hover-start: #ffeadb;
  --data-viz-warning-active: #cc8604;
  --data-viz-warning-default: #cc8604;
  --data-viz-warning-focus: #b05f04;
  --data-viz-warning-gradient-default: linear-gradient(
    180deg,
    #cc8604 50%,
    #e0a419 100%
  );
  --data-viz-warning-gradient-default-end: #cc8604;
  --data-viz-warning-gradient-default-start: #e0a419;
  --data-viz-warning-hover: #b05f04;
  --data-viz-warning-weak-gradient-active: linear-gradient(
    180deg,
    #f2d268 0%,
    #fff 100%
  );
  --data-viz-warning-weak-gradient-active-end: #f2d268;
  --data-viz-warning-weak-gradient-active-start: #fff;
  --data-viz-warning-weak-gradient-default: linear-gradient(
    180deg,
    #f2d268 0%,
    #fff 100%
  );
  --data-viz-warning-weak-gradient-default-end: #f2d268;
  --data-viz-warning-weak-gradient-default-start: #fff;
  --data-viz-warning-weak-gradient-focus: linear-gradient(
    180deg,
    #f0c243 0%,
    #faefb9 100%
  );
  --data-viz-warning-weak-gradient-focus-end: #f0c243;
  --data-viz-warning-weak-gradient-focus-start: #faefb9;
  --data-viz-warning-weak-gradient-hover: linear-gradient(
    180deg,
    #f0c243 0%,
    #faefb9 100%
  );
  --data-viz-warning-weak-gradient-hover-end: #f0c243;
  --data-viz-warning-weak-gradient-hover-start: #faefb9;

  /* token for modal overlay */
  --overlay-bg-default: rgba(0,0,0,0.4);
}

/* Non-token additions for contextual container. */
*[data-mds-theme="light"] [class^="mds-"] {
  color-scheme: light;
}
*[data-mds-theme="light"] [class*=" mds-"] {
  color-scheme: light;
}
`,ye=`:root body[data-mds-theme="light-classic"],
:root body[data-mds-theme="light"] {
  --admin-bg: #ffe8f9;
  --admin-bg-hover: #ffd1f3;
  --admin-bg-focus: #ffd1f3;
  --admin-bg-active: #ffd1f3;
  --admin-bg-disabled: #f7b0e5;
  --admin-text: #b53394;
  --admin-text-hover: #941b76;
  --admin-text-focus: #941b76;
  --admin-text-active: #941b76;
  --admin-text-disabled: #f7b0e5;
  --admin-icon: #f582d8;
  --admin-icon-hover: #c23ea1;
  --admin-icon-focus: #c23ea1;
  --admin-icon-active: #c23ea1;
  --admin-icon-disabled: #f7b0e5;
  --admin-icon-strong: #c23ea1;
  --admin-icon-strong-hover: #941b76;
  --admin-icon-strong-focus: #941b76;
  --admin-icon-strong-active: #941b76;
  --admin-icon-strong-disabled: #f7b0e5;
  --admin-border: #e85fc6;
  --admin-border-hover: #d649b3;
  --admin-border-focus: #b53394;
  --admin-border-active: #b53394;
  --admin-border-disabled: #f7b0e5;
}

:root body[data-mds-theme="dark-classic"],
:root body[data-mds-theme="dark"] {
  --admin-bg: #38313f;
  --admin-bg-hover: #583759;
  --admin-bg-focus: #583759;
  --admin-bg-active: #583759;
  --admin-bg-disabled: #433648;
  --admin-text: #f26dd1;
  --admin-text-hover: #fac5ed;
  --admin-text-focus: #fac5ed;
  --admin-text-active: #fac5ed;
  --admin-text-disabled: #8c5583;
  --admin-icon: #c23ea1;
  --admin-icon-hover: #f582d8;
  --admin-icon-focus: #f582d8;
  --admin-icon-active: #f582d8;
  --admin-icon-disabled: #433648;
  --admin-icon-strong: #f7b0e5;
  --admin-icon-strong-hover: #ffe8f9;
  --admin-icon-strong-focus: #ffe8f9;
  --admin-icon-strong-active: #ffe8f9;
  --admin-icon-strong-disabled: #433648;
  --admin-border: #f26dd1;
  --admin-border-hover: #f582d8;
  --admin-border-focus: #f7b0e5;
  --admin-border-active: #f7b0e5;
  --admin-border-disabled: #433648;
}
`,be=`:root {
  /* Font weight */
  --typography-weight-bold: 700;
  --typography-weight-semi-bold: 600;
  --typography-weight-regular: 400;

  /* Font face */
  --typography-font-code: roboto mono, sfmono-regular, consolas,
    "Liberation Mono", menlo, courier, monospace;
  --typography-font-fallback: -apple-system, blinkmacsystemfont, "Segoe UI",
    roboto, sans-serif;
  --typography-font-heading: "Sharp Sans", var(--typography-font-fallback);
  --typography-font-body: "Inter", var(--typography-font-fallback);

  /* Heading primary */
  --typography-size-heading-primary: 24px;
  --typography-line-height-heading-primary: 34px;
  --typography-heading-primary: normal var(--typography-weight-bold)
    var(--typography-size-heading-primary) /
    var(--typography-line-height-heading-primary) var(--typography-font-heading);

  /* Heading section */
  --typography-size-heading-section: 18px;
  --typography-line-height-heading-section: 24px;
  --typography-heading-section: normal var(--typography-weight-bold)
    var(--typography-size-heading-section) /
    var(--typography-line-height-heading-section) var(--typography-font-heading);

  /* Heading sub */
  --typography-size-heading-sub-section: 16px;
  --typography-line-height-heading-sub-section: 22px;
  --typography-heading-sub-section: normal var(--typography-weight-bold)
    var(--typography-size-heading-sub-section) /
    var(--typography-line-height-heading-sub-section)
    var(--typography-font-heading);

  /* Heading smallest */
  --typography-size-heading-smallest: 14px;
  --typography-line-height-heading-smallest: 20px;
  --typography-heading-smallest: normal var(--typography-weight-bold)
    var(--typography-size-heading-smallest) /
    var(--typography-line-height-heading-smallest)
    var(--typography-font-heading);

  /* P1 */
  --typography-size-p1: 18px;
  --typography-line-height-p1: 24px;
  --typography-p1-regular: normal var(--typography-weight-regular)
    var(--typography-size-p1) / var(--typography-line-height-p1)
    var(--typography-font-body);
  --typography-p1-semibold: normal var(--typography-weight-semi-bold)
    var(--typography-size-p1) / var(--typography-line-height-p1)
    var(--typography-font-body);
  --typography-p1-bold: normal var(--typography-weight-bold)
    var(--typography-size-p1) / var(--typography-line-height-p1)
    var(--typography-font-body);

  /* P2 */
  --typography-size-p2: 16px;
  --typography-line-height-p2: 22px;
  --typography-p2-regular: normal var(--typography-weight-regular)
    var(--typography-size-p2) / var(--typography-line-height-p2)
    var(--typography-font-body);
  --typography-p2-semibold: normal var(--typography-weight-semi-bold)
    var(--typography-size-p2) / var(--typography-line-height-p2)
    var(--typography-font-body);
  --typography-p2-bold: normal var(--typography-weight-bold)
    var(--typography-size-p2) / var(--typography-line-height-p2)
    var(--typography-font-body);

  /* P3 */
  --typography-size-p3: 14px;
  --typography-line-height-p3: 20px;
  --typography-p3-regular: normal var(--typography-weight-regular)
    var(--typography-size-p3) / var(--typography-line-height-p3)
    var(--typography-font-body);
  --typography-p3-semibold: normal var(--typography-weight-semi-bold)
    var(--typography-size-p3) / var(--typography-line-height-p3)
    var(--typography-font-body);
  --typography-p3-bold: normal var(--typography-weight-bold)
    var(--typography-size-p3) / var(--typography-line-height-p3)
    var(--typography-font-body);

  /* P4 */
  --typography-size-p4: 12px;
  --typography-line-height-p4: 18px;
  --typography-p4-regular: normal var(--typography-weight-regular)
    var(--typography-size-p4) / var(--typography-line-height-p4)
    var(--typography-font-body);
  --typography-p4-semibold: normal var(--typography-weight-semi-bold)
    var(--typography-size-p4) / var(--typography-line-height-p4)
    var(--typography-font-body);
  --typography-p4-bold: normal var(--typography-weight-bold)
    var(--typography-size-p4) / var(--typography-line-height-p4)
    var(--typography-font-body);
}
`;const j={"blue-dark":le,"blue-dark-classic":q,"blue-light":Z,"blue-light-classic":te,dark:O,"dark-classic":ce,light:ie,"light-classic":ee},w={defaultTheme:ue,effects:D,tableLegacy:ye,typography:be};var W=Object.defineProperty,oe=(dn,Ce)=>W(dn,"name",{value:Ce,configurable:!0});const ve=oe(()=>{const dn=globalThis?.document?.body;if(!dn)return;const Ce=[];try{const en=dn.getAttribute("data-mds-theme-disable"),Un=JSON.parse(en??"[]");Ce.push(...Un)}catch(en){console.warn('unable to parse "data-mds-theme-disable" attribute, loading magnetic theme defaults.',en)}if(!Ce.includes("all")){if(!Ce.includes("styles")){const en=new I({id:"mds-styles-core"}),Un=new I({id:"mds-styles-themes"});en.set({style:Object.values(w).join(`

`)}),Un.set({style:Object.values(j).join(`

`)})}Ce.includes("themes")||(xe.instance.themes.length<=1&&xe.instance.set({themes:[...T.MAGNETIC_THEME_CONFIG.themes],modeDefaults:{...T.MAGNETIC_THEME_CONFIG.modeDefaults}}),xe.instance.current||(xe.instance.current=T.MAGNETIC_THEME_CONFIG.theme))}},"main");var Se=t(5530),Ae=t.n(Se),Ie=t(2776),We=t.n(Ie),Le=Object.defineProperty,Ke=(dn,Ce)=>Le(dn,"name",{value:Ce,configurable:!0});const Ze=Ke(dn=>{const{className:Ce,theme:en,...Un}=dn;return We().createElement("div",{className:Ae()("mds-theme-provider",Ce),"data-mds-theme":en,style:{display:"contents"},...Un})},"ThemeProvider");Ze.displayName="ThemeProvider";var ln=Object.defineProperty,Rn=(dn,Ce)=>ln(dn,"name",{value:Ce,configurable:!0});const un={ID:"system",LABEL:"System"},dt=null;var In=Object.defineProperty,Dn=(dn,Ce)=>In(dn,"name",{value:Ce,configurable:!0});const yn=null;var Cn=Object.defineProperty,Ct=(dn,Ce)=>Cn(dn,"name",{value:Ce,configurable:!0});const mt=null;var ht=Object.defineProperty,st=(dn,Ce)=>ht(dn,"name",{value:Ce,configurable:!0});const At={DEFAULTS:{SELECTOR:"data-mds-theme"}},St=null;var Pt=Object.defineProperty,kt=(dn,Ce)=>Pt(dn,"name",{value:Ce,configurable:!0});const Mt=null,Ht=null,$t=null,Bt=null;ve()},1311:(F,P,t)=>{var i=t(128),d=i();F.exports=d},1329:F=>{function P(){return!1}F.exports=P},1429:F=>{function P(t,i){return function(d){return t(i(d))}}F.exports=P},1451:(F,P,t)=>{var i=t(5674),d=t(1036),r=t(31),x=t(1907),l=t(971);function p(s){var f=-1,z=s==null?0:s.length;for(this.clear();++f<z;){var N=s[f];this.set(N[0],N[1])}}p.prototype.clear=i,p.prototype.delete=d,p.prototype.get=r,p.prototype.has=x,p.prototype.set=l,F.exports=p},1534:(F,P,t)=>{var i=t(6015),d=Object.create,r=function(){function x(){}return function(l){if(!i(l))return{};if(d)return d(l);x.prototype=l;var p=new x;return x.prototype=void 0,p}}();F.exports=r},1582:(F,P,t)=>{var i=t(436),d=t(7921),r=d(function(x,l,p){i(x,l,p)});F.exports=r},1671:(F,P,t)=>{var i=t(3911);function d(r,x){var l=x?i(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.length)}F.exports=d},1708:(F,P,t)=>{"use strict";t.d(P,{P:()=>u});var i=t(2776),d=t(8236);const r=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M228,48V96a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h19l-7.8-7.8a75.55,75.55,0,0,0-53.32-22.26h-.43A75.49,75.49,0,0,0,72.39,75.57,12,12,0,1,1,55.61,58.41a99.38,99.38,0,0,1,69.87-28.47H126A99.42,99.42,0,0,1,196.2,59.23L204,67V48a12,12,0,0,1,24,0ZM183.61,180.43a75.49,75.49,0,0,1-53.09,21.63h-.43A75.55,75.55,0,0,1,76.77,179.8L69,172H88a12,12,0,0,0,0-24H40a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V189l7.8,7.8A99.42,99.42,0,0,0,130,226.06h.56a99.38,99.38,0,0,0,69.87-28.47,12,12,0,0,0-16.78-17.16Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",opacity:"0.2"}),i.createElement("path",{d:"M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66L180.65,72a79.48,79.48,0,0,0-54.72-22.09h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27,96,96,0,0,1,192,60.7l18.36-18.36A8,8,0,0,1,224,48ZM186.41,183.29A80,80,0,0,1,75.35,184l18.31-18.31A8,8,0,0,0,88,152H40a8,8,0,0,0-8,8v48a8,8,0,0,0,13.66,5.66L64,195.3a95.42,95.42,0,0,0,66,26.76h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M222,48V96a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h33.52L183.47,72a81.51,81.51,0,0,0-57.53-24h-.46A81.5,81.5,0,0,0,68.19,71.28a6,6,0,1,1-8.38-8.58,93.38,93.38,0,0,1,65.67-26.76H126a93.45,93.45,0,0,1,66,27.53l18,18V48a6,6,0,0,1,12,0ZM187.81,184.72a81.5,81.5,0,0,1-57.29,23.34h-.46a81.51,81.51,0,0,1-57.53-24L54.48,166H88a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V174.48l18,18.05a93.45,93.45,0,0,0,66,27.53h.52a93.38,93.38,0,0,0,65.67-26.76,6,6,0,1,0-8.38-8.58Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M220,48V96a4,4,0,0,1-4,4H168a4,4,0,0,1,0-8h38.34L184.89,70.54A84,84,0,0,0,66.8,69.85a4,4,0,1,1-5.6-5.72,92,92,0,0,1,129.34.76L212,86.34V48a4,4,0,0,1,8,0ZM189.2,186.15a83.44,83.44,0,0,1-58.68,23.91h-.47a83.52,83.52,0,0,1-58.94-24.6L49.66,164H88a4,4,0,0,0,0-8H40a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V169.66l21.46,21.45A91.43,91.43,0,0,0,130,218.06h.51a91.45,91.45,0,0,0,64.28-26.19,4,4,0,1,0-5.6-5.72Z"}))]]);var x=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,N=(S,E,L)=>E in S?x(S,E,{enumerable:!0,configurable:!0,writable:!0,value:L}):S[E]=L,h=(S,E)=>{for(var L in E||(E={}))f.call(E,L)&&N(S,L,E[L]);if(s)for(var L of s(E))z.call(E,L)&&N(S,L,E[L]);return S},A=(S,E)=>l(S,p(E));const I=(0,i.forwardRef)((S,E)=>i.createElement(d.A,A(h({ref:E},S),{weights:r})));I.displayName="ArrowsClockwise";var b=t(6375);const u=(0,b.Y)(I);u.displayName="ArrowsClockwise"},1735:(F,P,t)=>{"use strict";t.d(P,{iD:()=>ce,ll:()=>O,rD:()=>ue,v9:()=>J});var i=t(5361);function d(D){var ee;return(D==null||(ee=D.ownerDocument)==null?void 0:ee.defaultView)||window}function r(D){return d(D).getComputedStyle(D)}function x(D){return D instanceof d(D).Node}function l(D){return x(D)?(D.nodeName||"").toLowerCase():"#document"}function p(D){return D instanceof HTMLElement||D instanceof d(D).HTMLElement}function s(D){return typeof ShadowRoot<"u"&&(D instanceof d(D).ShadowRoot||D instanceof ShadowRoot)}function f(D){const{overflow:ee,overflowX:ie,overflowY:ye,display:be}=r(D);return/auto|scroll|overlay|hidden|clip/.test(ee+ye+ie)&&!["inline","contents"].includes(be)}function z(D){return["table","td","th"].includes(l(D))}function N(D){const ee=h(),ie=r(D);return ie.transform!=="none"||ie.perspective!=="none"||!!ie.containerType&&ie.containerType!=="normal"||!ee&&!!ie.backdropFilter&&ie.backdropFilter!=="none"||!ee&&!!ie.filter&&ie.filter!=="none"||["transform","perspective","filter"].some(ye=>(ie.willChange||"").includes(ye))||["paint","layout","strict","content"].some(ye=>(ie.contain||"").includes(ye))}function h(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function A(D){return["html","body","#document"].includes(l(D))}const I=Math.min,b=Math.max,u=Math.round,S=Math.floor,E=D=>({x:D,y:D});function L(D){const ee=r(D);let ie=parseFloat(ee.width)||0,ye=parseFloat(ee.height)||0;const be=p(D),j=be?D.offsetWidth:ie,w=be?D.offsetHeight:ye,W=u(ie)!==j||u(ye)!==w;return W&&(ie=j,ye=w),{width:ie,height:ye,$:W}}function T(D){return D instanceof Element||D instanceof d(D).Element}function Q(D){return T(D)?D:D.contextElement}function G(D){const ee=Q(D);if(!p(ee))return E(1);const ie=ee.getBoundingClientRect(),{width:ye,height:be,$:j}=L(ee);let w=(j?u(ie.width):ie.width)/ye,W=(j?u(ie.height):ie.height)/be;return w&&Number.isFinite(w)||(w=1),W&&Number.isFinite(W)||(W=1),{x:w,y:W}}const se=E(0);function U(D){const ee=d(D);return h()&&ee.visualViewport?{x:ee.visualViewport.offsetLeft,y:ee.visualViewport.offsetTop}:se}function y(D,ee,ie,ye){ee===void 0&&(ee=!1),ie===void 0&&(ie=!1);const be=D.getBoundingClientRect(),j=Q(D);let w=E(1);ee&&(ye?T(ye)&&(w=G(ye)):w=G(D));const W=function(Ie,We,Le){return We===void 0&&(We=!1),!(!Le||We&&Le!==d(Ie))&&We}(j,ie,ye)?U(j):E(0);let oe=(be.left+W.x)/w.x,ve=(be.top+W.y)/w.y,Se=be.width/w.x,Ae=be.height/w.y;if(j){const Ie=d(j),We=ye&&T(ye)?d(ye):ye;let Le=Ie.frameElement;for(;Le&&ye&&We!==Ie;){const Ke=G(Le),Ze=Le.getBoundingClientRect(),ln=getComputedStyle(Le),Rn=Ze.left+(Le.clientLeft+parseFloat(ln.paddingLeft))*Ke.x,un=Ze.top+(Le.clientTop+parseFloat(ln.paddingTop))*Ke.y;oe*=Ke.x,ve*=Ke.y,Se*=Ke.x,Ae*=Ke.y,oe+=Rn,ve+=un,Le=d(Le).frameElement}}return(0,i.B1)({width:Se,height:Ae,x:oe,y:ve})}function B(D){return T(D)?{scrollLeft:D.scrollLeft,scrollTop:D.scrollTop}:{scrollLeft:D.pageXOffset,scrollTop:D.pageYOffset}}function ne(D){var ee;return(ee=(x(D)?D.ownerDocument:D.document)||window.document)==null?void 0:ee.documentElement}function M(D){return y(ne(D)).left+B(D).scrollLeft}function $(D){if(l(D)==="html")return D;const ee=D.assignedSlot||D.parentNode||s(D)&&D.host||ne(D);return s(ee)?ee.host:ee}function ae(D){const ee=$(D);return A(ee)?D.ownerDocument?D.ownerDocument.body:D.body:p(ee)&&f(ee)?ee:ae(ee)}function J(D,ee){var ie;ee===void 0&&(ee=[]);const ye=ae(D),be=ye===((ie=D.ownerDocument)==null?void 0:ie.body),j=d(ye);return be?ee.concat(j,j.visualViewport||[],f(ye)?ye:[]):ee.concat(ye,J(ye))}function xe(D,ee,ie){let ye;if(ee==="viewport")ye=function(be,j){const w=d(be),W=ne(be),oe=w.visualViewport;let ve=W.clientWidth,Se=W.clientHeight,Ae=0,Ie=0;if(oe){ve=oe.width,Se=oe.height;const We=h();(!We||We&&j==="fixed")&&(Ae=oe.offsetLeft,Ie=oe.offsetTop)}return{width:ve,height:Se,x:Ae,y:Ie}}(D,ie);else if(ee==="document")ye=function(be){const j=ne(be),w=B(be),W=be.ownerDocument.body,oe=b(j.scrollWidth,j.clientWidth,W.scrollWidth,W.clientWidth),ve=b(j.scrollHeight,j.clientHeight,W.scrollHeight,W.clientHeight);let Se=-w.scrollLeft+M(be);const Ae=-w.scrollTop;return r(W).direction==="rtl"&&(Se+=b(j.clientWidth,W.clientWidth)-oe),{width:oe,height:ve,x:Se,y:Ae}}(ne(D));else if(T(ee))ye=function(be,j){const w=y(be,!0,j==="fixed"),W=w.top+be.clientTop,oe=w.left+be.clientLeft,ve=p(be)?G(be):E(1);return{width:be.clientWidth*ve.x,height:be.clientHeight*ve.y,x:oe*ve.x,y:W*ve.y}}(ee,ie);else{const be=U(D);ye={...ee,x:ee.x-be.x,y:ee.y-be.y}}return(0,i.B1)(ye)}function q(D,ee){const ie=$(D);return!(ie===ee||!T(ie)||A(ie))&&(r(ie).position==="fixed"||q(ie,ee))}function le(D,ee,ie){const ye=p(ee),be=ne(ee),j=ie==="fixed",w=y(D,!0,j,ee);let W={scrollLeft:0,scrollTop:0};const oe=E(0);if(ye||!ye&&!j)if((l(ee)!=="body"||f(be))&&(W=B(ee)),p(ee)){const ve=y(ee,!0,j,ee);oe.x=ve.x+ee.clientLeft,oe.y=ve.y+ee.clientTop}else be&&(oe.x=M(be));return{x:w.left+W.scrollLeft-oe.x,y:w.top+W.scrollTop-oe.y,width:w.width,height:w.height}}function te(D,ee){return p(D)&&r(D).position!=="fixed"?ee?ee(D):D.offsetParent:null}function Z(D,ee){const ie=d(D);if(!p(D))return ie;let ye=te(D,ee);for(;ye&&z(ye)&&r(ye).position==="static";)ye=te(ye,ee);return ye&&(l(ye)==="html"||l(ye)==="body"&&r(ye).position==="static"&&!N(ye))?ie:ye||function(be){let j=$(be);for(;p(j)&&!A(j);){if(N(j))return j;j=$(j)}return null}(D)||ie}const ce={convertOffsetParentRelativeRectToViewportRelativeRect:function(D){let{rect:ee,offsetParent:ie,strategy:ye}=D;const be=p(ie),j=ne(ie);if(ie===j)return ee;let w={scrollLeft:0,scrollTop:0},W=E(1);const oe=E(0);if((be||!be&&ye!=="fixed")&&((l(ie)!=="body"||f(j))&&(w=B(ie)),p(ie))){const ve=y(ie);W=G(ie),oe.x=ve.x+ie.clientLeft,oe.y=ve.y+ie.clientTop}return{width:ee.width*W.x,height:ee.height*W.y,x:ee.x*W.x-w.scrollLeft*W.x+oe.x,y:ee.y*W.y-w.scrollTop*W.y+oe.y}},getDocumentElement:ne,getClippingRect:function(D){let{element:ee,boundary:ie,rootBoundary:ye,strategy:be}=D;const j=[...ie==="clippingAncestors"?function(oe,ve){const Se=ve.get(oe);if(Se)return Se;let Ae=J(oe).filter(Ke=>T(Ke)&&l(Ke)!=="body"),Ie=null;const We=r(oe).position==="fixed";let Le=We?$(oe):oe;for(;T(Le)&&!A(Le);){const Ke=r(Le),Ze=N(Le);Ze||Ke.position!=="fixed"||(Ie=null),(We?!Ze&&!Ie:!Ze&&Ke.position==="static"&&Ie&&["absolute","fixed"].includes(Ie.position)||f(Le)&&!Ze&&q(oe,Le))?Ae=Ae.filter(ln=>ln!==Le):Ie=Ke,Le=$(Le)}return ve.set(oe,Ae),Ae}(ee,this._c):[].concat(ie),ye],w=j[0],W=j.reduce((oe,ve)=>{const Se=xe(ee,ve,be);return oe.top=b(Se.top,oe.top),oe.right=I(Se.right,oe.right),oe.bottom=I(Se.bottom,oe.bottom),oe.left=b(Se.left,oe.left),oe},xe(ee,w,be));return{width:W.right-W.left,height:W.bottom-W.top,x:W.left,y:W.top}},getOffsetParent:Z,getElementRects:async function(D){let{reference:ee,floating:ie,strategy:ye}=D;const be=this.getOffsetParent||Z,j=this.getDimensions;return{reference:le(ee,await be(ie),ye),floating:{x:0,y:0,...await j(ie)}}},getClientRects:function(D){return Array.from(D.getClientRects())},getDimensions:function(D){return L(D)},getScale:G,isElement:T,isRTL:function(D){return getComputedStyle(D).direction==="rtl"}};function O(D,ee,ie,ye){ye===void 0&&(ye={});const{ancestorScroll:be=!0,ancestorResize:j=!0,elementResize:w=typeof ResizeObserver=="function",layoutShift:W=typeof IntersectionObserver=="function",animationFrame:oe=!1}=ye,ve=Q(D),Se=be||j?[...ve?J(ve):[],...J(ee)]:[];Se.forEach(Ze=>{be&&Ze.addEventListener("scroll",ie,{passive:!0}),j&&Ze.addEventListener("resize",ie)});const Ae=ve&&W?function(Ze,ln){let Rn,un=null;const dt=ne(Ze);function In(){clearTimeout(Rn),un&&un.disconnect(),un=null}return function Dn(yn,Cn){yn===void 0&&(yn=!1),Cn===void 0&&(Cn=1),In();const{left:Ct,top:mt,width:ht,height:st}=Ze.getBoundingClientRect();if(yn||ln(),!ht||!st)return;const At={rootMargin:-S(mt)+"px "+-S(dt.clientWidth-(Ct+ht))+"px "+-S(dt.clientHeight-(mt+st))+"px "+-S(Ct)+"px",threshold:b(0,I(1,Cn))||1};let St=!0;function Pt(kt){const Mt=kt[0].intersectionRatio;if(Mt!==Cn){if(!St)return Dn();Mt?Dn(!1,Mt):Rn=setTimeout(()=>{Dn(!1,1e-7)},100)}St=!1}try{un=new IntersectionObserver(Pt,{...At,root:dt.ownerDocument})}catch{un=new IntersectionObserver(Pt,At)}un.observe(Ze)}(!0),In}(ve,ie):null;let Ie,We=-1,Le=null;w&&(Le=new ResizeObserver(Ze=>{let[ln]=Ze;ln&&ln.target===ve&&Le&&(Le.unobserve(ee),cancelAnimationFrame(We),We=requestAnimationFrame(()=>{Le&&Le.observe(ee)})),ie()}),ve&&!oe&&Le.observe(ve),Le.observe(ee));let Ke=oe?y(D):null;return oe&&function Ze(){const ln=y(D);!Ke||ln.x===Ke.x&&ln.y===Ke.y&&ln.width===Ke.width&&ln.height===Ke.height||ie(),Ke=ln,Ie=requestAnimationFrame(Ze)}(),ie(),()=>{Se.forEach(Ze=>{be&&Ze.removeEventListener("scroll",ie),j&&Ze.removeEventListener("resize",ie)}),Ae&&Ae(),Le&&Le.disconnect(),Le=null,oe&&cancelAnimationFrame(Ie)}}const ue=(D,ee,ie)=>{const ye=new Map,be={platform:ce,...ie},j={...be.platform,_c:ye};return(0,i.rD)(D,ee,{...be,platform:j})}},1772:(F,P,t)=>{"use strict";t.d(P,{m:()=>te});var i=t(6978),d=t(536),r=t(1735),x=t(4445),l=t(5024),p=t(9279),s=Object.defineProperty,f=(Z,ce)=>s(Z,"name",{value:ce,configurable:!0});const z=f(Z=>ce=>{for(const O of Z)O!=null&&(typeof O=="function"?O(ce):O.current=ce)},"mergeRefs");var N=t(5034),h=t(2776),A=t.n(h);const I=8;var b=t(9309),u=Object.defineProperty,S=(Z,ce)=>u(Z,"name",{value:ce,configurable:!0});const E=S(({className:Z,...ce})=>{const O=(0,i.U)("mds-popover-rebuild-divider",Z);return A().createElement(b.c,{...ce,className:O})},"Divider");var L=t(5361),T=t(7464),Q=Object.defineProperty,G=(Z,ce)=>Q(Z,"name",{value:ce,configurable:!0});const se=4,U=G(({arrowRef:Z,placement:ce,preventFlip:O})=>{const ue=[(0,L.cY)(I+se)],D=(0,L.UU)({fallbackPlacements:["top","right","bottom","left"]}),ee=(0,L.BN)({padding:6});return O?ue.push(ee):ce.includes("-")?ue.push(D,ee):ue.push(ee,D),ue.push((0,T.UE)({element:Z,padding:20})),ue},"useFloatingMiddleware");var y=[],B=[];function ne(Z,ce){if(Z&&typeof document<"u"){var O,ue=ce.prepend===!0?"prepend":"append",D=ce.singleTag===!0,ee=typeof ce.container=="string"?document.querySelector(ce.container):document.getElementsByTagName("head")[0];if(D){var ie=y.indexOf(ee);ie===-1&&(ie=y.push(ee)-1,B[ie]={}),O=B[ie]&&B[ie][ue]?B[ie][ue]:B[ie][ue]=ye()}else O=ye();Z.charCodeAt(0)===65279&&(Z=Z.substring(1)),O.styleSheet?O.styleSheet.cssText+=Z:O.appendChild(document.createTextNode(Z))}function ye(){var be=document.createElement("style");if(be.setAttribute("type","text/css"),ce.attributes)for(var j=Object.keys(ce.attributes),w=0;w<j.length;w++)be.setAttribute(j[w],ce.attributes[j[w]]);var W=ue==="prepend"?"afterbegin":"beforeend";return ee.insertAdjacentElement(W,be),be}}var M=`.mds-popover-rebuild {
  --mds-popover-background-color: var(--control-bg-weak-default);
  --mds-popover-border-color-outer: var(--mds-popover-background-color);
  --mds-popover-border-color-inner: var(--mds-popover-background-color);
  --mds-popover-border-radius: 6px;
  --mds-popover-font: var(--typography-p3-regular);
  --mds-popover-font-color: var(--base-text-medium-default);
  --mds-popover-font-size: 12px;
  --mds-popover-font-weight: 400;
  --mds-popover-line-height: 18px;
  --mds-popover-max-width-lg: 360px;
  --mds-popover-max-width-md: 280px;
  --mds-popover-max-width-sm: 200px;
  --mds-popover-border-width-outer: 0px;
  --mds-popover-border-width-inner: 0px;
  --mds-popover-padding-horizontal: 16px;
  --mds-popover-padding-vertical: 12px;

  box-sizing: border-box;
  max-width: var(--mds-popover-max-width);
  padding: calc(
      var(--mds-popover-padding-vertical) +
        max(
          var(--mds-popover-border-width-outer),
          var(--mds-popover-border-width-inner)
        )
    )
    calc(
      var(--mds-popover-padding-horizontal) +
        max(
          var(--mds-popover-border-width-outer),
          var(--mds-popover-border-width-inner)
        )
    );

  font: var(--mds-popover-font);
  font-size: var(--mds-popover-font-size);
  font-weight: var(--mds-popover-font-weight);
  font-style: normal;
  line-height: var(--mds-popover-line-height);
  color: var(--mds-popover-font-color);

  background-color: var(--mds-popover-background-color);
  border-radius: var(--mds-popover-border-radius);
  box-shadow: 0 0 0 var(--mds-popover-border-width-outer)
      var(--mds-popover-border-color-outer) inset,
    0 0 0 var(--mds-popover-border-width-inner)
      var(--mds-popover-border-color-inner) inset,
    var(--elevation-floating-default)
}
.mds-popover-rebuild > .mds-popover-arrow {
    fill: var(--mds-popover-border-color-outer);
  }
.mds-popover-rebuild.mds-popover-rebuild-size-sm {
    --mds-popover-max-width: var(--mds-popover-max-width-sm);
  }
.mds-popover-rebuild.mds-popover-rebuild-size-md {
    --mds-popover-max-width: var(--mds-popover-max-width-md);
  }
.mds-popover-rebuild.mds-popover-rebuild-size-lg {
    --mds-popover-max-width: var(--mds-popover-max-width-lg);
  }
.mds-popover-rebuild .mds-popover-rebuild-divider {
    margin-right: calc(
      -1 * calc(var(--mds-popover-padding-horizontal) -
            min(
              var(--mds-popover-border-width-outer),
              var(--mds-popover-border-width-inner)
            ))
    );
    margin-left: calc(
      -1 * calc(var(--mds-popover-padding-horizontal) -
            min(
              var(--mds-popover-border-width-outer),
              var(--mds-popover-border-width-inner)
            ))
    );
  }
.mds-popover-rebuild.mds-popover-rebuild-size-map,
  .mds-popover-rebuild.mds-popover-rebuild-size-chart {
    --mds-popover-border-color-outer: var(--base-border-strong-default);
    --mds-popover-border-width-outer: 2px;
  }
.mds-popover-rebuild.mds-popover-rebuild-size-feature-highlight {
    --mds-popover-border-width-outer: 2px;
    --mds-popover-border-width-inner: 4px;
    --mds-popover-border-color-outer: var(--brand-accent-icon-weak-active);
    --mds-popover-border-color-inner: var(--brand-accent-icon-medium-active);
  }
`;ne(M,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/popover"}});const $=16,ae=(0,l.E)((0,h.forwardRef)(({analytics:Z,children:ce=A().createElement("div",null),className:O,disabled:ue,kind:D="default",open:ee,placement:ie="top",root:ye,setOpen:be,size:j="md",style:w,title:W,preventFlip:oe=!1,...ve},Se)=>{const Ae=(0,i.U)("mds-popover-rebuild",`mds-popover-rebuild-size-${j}`,`mds-popover-rebuild-size-${D}`,O),Ie=(0,h.useRef)(null),{sendAnalytics:We}=(0,x.st)(),Le=(0,h.useCallback)(()=>{Z?.events.includes("mouseenter")&&We({component:"popover",...Z,event:"mouseenter"})},[Z,We]),[Ke,Ze]=(0,h.useState)(!1),ln=ee??Ke,Rn=be??Ze,un=!ue&&!be;(0,h.useEffect)(()=>{un||Ze(!1)},[Ze,un]);const dt=U({arrowRef:Ie,placement:ie,preventFlip:oe}),{context:In,refs:Dn,strategy:yn,x:Cn,y:Ct}=(0,d.we)({placement:ie,open:ln,onOpenChange:Rn,whileElementsMounted:r.ll,middleware:dt}),{getFloatingProps:mt,getReferenceProps:ht}=(0,d.bv)([(0,d.Mk)(In,{move:!1,handleClose:(0,d.iB)(),enabled:un}),(0,d.iQ)(In,{enabled:un}),(0,d.s9)(In),(0,d.It)(In,{role:"tooltip"}),{reference:{onMouseEnter:Le}}]),st=(0,d.SV)([Dn.setFloating]),At=(0,N.YK)("floating-popover");return D==="chart"?A().createElement("div",{className:Ae},W):A().createElement(p.v,{condition:!!ye,wrap:St=>A().createElement(d.XF,{...ye?{root:ye}:{}},St)},(0,h.cloneElement)(ce,{ref:z([Dn.setReference,ce.ref,Se]),...ht()}),A().createElement(d.XF,null,ln&&!ue&&A().createElement("div",{className:Ae,ref:st,style:{left:Cn??0,position:yn,top:Ct??0,visibility:Cn===null?"hidden":"visible",zIndex:At,...w},...ve,...mt()},A().createElement(d.ie,{className:"mds-popover-arrow",context:In,height:I,ref:Ie,width:$}),W)))}),{Divider:E});var J=[],xe=[];function q(Z,ce){if(Z&&typeof document<"u"){var O,ue=ce.prepend===!0?"prepend":"append",D=ce.singleTag===!0,ee=typeof ce.container=="string"?document.querySelector(ce.container):document.getElementsByTagName("head")[0];if(D){var ie=J.indexOf(ee);ie===-1&&(ie=J.push(ee)-1,xe[ie]={}),O=xe[ie]&&xe[ie][ue]?xe[ie][ue]:xe[ie][ue]=ye()}else O=ye();Z.charCodeAt(0)===65279&&(Z=Z.substring(1)),O.styleSheet?O.styleSheet.cssText+=Z:O.appendChild(document.createTextNode(Z))}function ye(){var be=document.createElement("style");if(be.setAttribute("type","text/css"),ce.attributes)for(var j=Object.keys(ce.attributes),w=0;w<j.length;w++)be.setAttribute(j[w],ce.attributes[j[w]]);var W=ue==="prepend"?"afterbegin":"beforeend";return ee.insertAdjacentElement(W,be),be}}var le=`.mds-popover-rebuild.mds-tooltip-rebuild {
  --mds-popover-background-color: var(--inverse-bg-weak-default);
  --mds-popover-min-width: 30px;
  --mds-popover-max-width: 240px;
  --mds-popover-padding-vertical: 8px;
  --mds-popover-padding-horizontal: 12px;
  --mds-popover-font-size: 12px;
  --mds-popover-line-height: 18px;
  --mds-popover-font-color: var(--base-text-in-weak-default);
  --mds-popover-border-radius: 6px;

  width: -moz-max-content;

  width: max-content;
  box-shadow: var(--elevation-lifted-default);
}
`;q(le,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/tooltip"}});const te=(0,h.forwardRef)(({analytics:Z,className:ce,preventFlip:O=!1,root:ue,style:D,zIndex:ee,...ie},ye)=>A().createElement(ae,{className:(0,i.U)("mds-tooltip-rebuild",ce),...ie,...Z?{analytics:{...Z,component:"tooltip"}}:{},preventFlip:O,ref:ye,root:ue,style:{zIndex:(0,N.YK)(ee??"floating-tooltip"),...D}}))},1784:F=>{var P=9007199254740991;function t(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=P}F.exports=t},1837:(F,P,t)=>{"use strict";t.d(P,{L:()=>d});var i=t(2776),d=(0,i.createContext)({})},1870:F=>{function P(t,i){return t?.[i]}F.exports=P},1907:(F,P,t)=>{var i=t(8037);function d(r){return i(this,r).has(r)}F.exports=d},1960:(F,P,t)=>{var i=t(3188),d=i(Object,"create");F.exports=d},2139:(F,P,t)=>{var i=t(7316),d=t(5369),r=d(i);F.exports=r},2177:(F,P,t)=>{var i=t(9142),d=t(9830),r=Object.prototype,x=r.hasOwnProperty;function l(p,s,f){var z=p[s];(!(x.call(p,s)&&d(z,f))||f===void 0&&!(s in p))&&i(p,s,f)}F.exports=l},2183:(F,P,t)=>{"use strict";t.d(P,{$:()=>x});var i=Object.defineProperty,d=(l,p)=>i(l,"name",{value:p,configurable:!0});const r=[];for(let l=0;l<256;l++)r[l]=(l<16?"0":"")+l.toString(16);const x=d(()=>{const l=[Math.random()*4294967295|0,Math.random()*4294967295|0,Math.random()*4294967295|0,Math.random()*4294967295|0],p=[`${r[l[0]&255]}${r[l[0]>>8&255]}${r[l[0]>>16&255]}${r[l[0]>>24&255]}`,`${r[l[1]&255]}${r[l[1]>>8&255]}`,`${r[l[1]>>16&15|64]}${r[l[1]>>24&255]}`,`${r[l[2]&63|128]}${r[l[2]>>8&255]}`,`${r[l[2]>>16&255]}${r[l[2]>>24&255]}${r[l[3]&255]}${r[l[3]>>8&255]}${r[l[3]>>16&255]}${r[l[3]>>24&255]}`];return`${p[0]}-${p[1]}-${p[2]}-${p[3]}-${p[4]}`},"generateId")},2228:(F,P,t)=>{"use strict";t.d(P,{a3:()=>z,m7:()=>N});var i=t(8616),d=t(7504),r=t(9513);const x=r.O;function l(){try{return new ErrorEvent(""),!0}catch{return!1}}function p(){try{return new DOMError(""),!0}catch{return!1}}function s(){try{return new DOMException(""),!0}catch{return!1}}function f(){if(!("fetch"in x))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch{return!1}}function z(I){return I&&/^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(I.toString())}function N(){if(typeof EdgeRuntime=="string")return!0;if(!f())return!1;if(z(x.fetch))return!0;let I=!1;const b=x.document;if(b&&typeof b.createElement=="function")try{const u=b.createElement("iframe");u.hidden=!0,b.head.appendChild(u),u.contentWindow&&u.contentWindow.fetch&&(I=z(u.contentWindow.fetch)),b.head.removeChild(u)}catch(u){i.T&&d.vF.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",u)}return I}function h(){return"ReportingObserver"in x}function A(){if(!f())return!1;try{return new Request("_",{referrerPolicy:"origin"}),!0}catch{return!1}}},2388:(F,P,t)=>{"use strict";t.d(P,{S:()=>f});var i=t(1308),d=t(2776),r=t.n(d);const x={lg:{width:224,height:224},md:{width:76,height:76},sm:{width:36,height:36}},l=(0,d.forwardRef)((z,N)=>{const{size:h="lg",...A}=z,{height:I,width:b}=x[h];return r().createElement("svg",{fill:"none",height:I,viewBox:"0 0 224 224",width:b,xmlns:"http://www.w3.org/2000/svg",...A,ref:N},r().createElement("rect",{fill:"var(--info-icon-weak-default)",height:"120",opacity:".4",rx:"13.5",transform:"rotate(25 52.714 80.75)",width:"27",x:"52.714",y:"80.75"}),r().createElement("rect",{fill:"var(--info-icon-weak-default)",height:"90",opacity:".2",rx:"13.5",transform:"rotate(25 46.036 2)",width:"27",x:"46.036",y:"2"}),r().createElement("rect",{fill:"var(--info-icon-weak-default)",height:"48.191",opacity:".3",rx:"13.5",transform:"rotate(25 188.116 119)",width:"27",x:"188.116",y:"119"}),r().createElement("path",{d:"M151 53.5H73A19.5 19.5 0 0 0 53.5 73v78A19.5 19.5 0 0 0 73 170.5h78a19.5 19.5 0 0 0 19.5-19.5V73A19.5 19.5 0 0 0 151 53.5Z",fill:"var(--info-icon-default)"}),r().createElement("path",{d:"M99.813 84.537c0-1.8.571-3.559 1.643-5.055 1.071-1.497 2.594-2.663 4.376-3.352a10.395 10.395 0 0 1 5.633-.518 9.986 9.986 0 0 1 4.992 2.49c1.364 1.273 2.292 2.895 2.668 4.66a8.532 8.532 0 0 1-.555 5.258c-.737 1.663-1.987 3.084-3.591 4.084a10.25 10.25 0 0 1-5.416 1.534c-2.586 0-5.066-.96-6.895-2.666-1.828-1.706-2.855-4.021-2.855-6.434Zm19.5 45.887v-18.587c0-3.016-1.284-5.91-3.57-8.043-2.286-2.133-5.386-3.332-8.618-3.332-1.727-.002-3.399.566-4.72 1.604-1.321 1.038-2.206 2.479-2.498 4.068a6.443 6.443 0 0 0 .903 4.612c.875 1.389 2.249 2.445 3.878 2.98v18.586c0 3.017 1.284 5.911 3.569 8.044 2.286 2.133 5.386 3.331 8.618 3.331 1.727.003 3.399-.565 4.72-1.603 1.321-1.038 2.206-2.479 2.498-4.068a6.443 6.443 0 0 0-.903-4.612c-.875-1.389-2.248-2.445-3.877-2.98Z",fill:"var(--info-icon-in-default)"}))}),p=(0,d.forwardRef)((z,N)=>{const{size:h="lg",...A}=z,{height:I,width:b}=x[h];return r().createElement("svg",{fill:"none",height:I,viewBox:"0 0 224 224",width:b,xmlns:"http://www.w3.org/2000/svg",...A,ref:N},r().createElement("rect",{fill:"var(--negative-icon-weak-default)",height:"120",opacity:".4",rx:"13.5",transform:"rotate(25 200 34.25)",width:"27",x:"200",y:"34.25"}),r().createElement("rect",{fill:"var(--negative-icon-weak-default)",height:"90",opacity:".2",rx:"13.5",transform:"rotate(25 37.036 92)",width:"27",x:"37.036",y:"92"}),r().createElement("rect",{fill:"var(--negative-icon-weak-default)",height:"48.191",opacity:".3",rx:"13.5",transform:"rotate(25 68.115 -1)",width:"27",x:"68.115",y:"-1"}),r().createElement("path",{d:"M103.13 46.108a17.86 17.86 0 0 1 17.74 0l45.771 26.257c5.408 3.103 8.734 8.797 8.734 14.954v49.362c0 6.157-3.326 11.851-8.734 14.954l-45.771 26.257a17.862 17.862 0 0 1-17.74 0l-45.771-26.257c-5.408-3.103-8.734-8.797-8.734-14.954V87.319c0-6.157 3.326-11.851 8.734-14.954l45.771-26.257Z",fill:"var(--negative-icon-default)"}),r().createElement("path",{d:"m132.216 102.35-9.638 9.65 9.657 9.651a7.48 7.48 0 0 1-10.578 10.577l-9.657-9.65-9.65 9.657a7.491 7.491 0 0 1-5.29 2.19 7.477 7.477 0 0 1-6.91-10.342 7.476 7.476 0 0 1 1.622-2.426l9.651-9.657-9.657-9.65a7.483 7.483 0 0 1 0-10.578 7.479 7.479 0 0 1 10.577 0l9.657 9.651 9.651-9.657a7.478 7.478 0 0 1 12.768 5.289 7.476 7.476 0 0 1-2.191 5.288l-.012.007Z",fill:"var(--negative-icon-in-default)"}))}),s=(0,d.forwardRef)((z,N)=>{const{size:h="lg",...A}=z,{height:I,width:b}=x[h];return r().createElement("svg",{fill:"none",height:I,viewBox:"0 0 224 224",width:b,xmlns:"http://www.w3.org/2000/svg",...A,ref:N},r().createElement("rect",{fill:"var(--positive-icon-weak-default)",height:"120",opacity:".2",rx:"13.5",transform:"rotate(25 69.964 11)",width:"27",x:"69.964",y:"11"}),r().createElement("rect",{fill:"var(--positive-icon-weak-default)",height:"90",opacity:".5",rx:"13.5",transform:"rotate(25 195.285 65.75)",width:"27",x:"195.285",y:"65.75"}),r().createElement("rect",{fill:"var(--positive-icon-weak-default)",height:"48.191",opacity:".3",rx:"13.5",transform:"rotate(25 28.366 147.5)",width:"27",x:"28.366",y:"147.5"}),r().createElement("circle",{cx:"112",cy:"112",fill:"var(--positive-icon-default)",r:"63.375"}),r().createElement("path",{d:"M139.262 93.922a6.736 6.736 0 0 1 1.984 4.779 6.738 6.738 0 0 1-1.984 4.779l-31.485 31.485a6.74 6.74 0 0 1-4.779 1.984 6.736 6.736 0 0 1-4.779-1.984l-13.493-13.494a6.763 6.763 0 0 1-1.465-7.365 6.763 6.763 0 0 1 3.657-3.658 6.751 6.751 0 0 1 5.173 0c.82.34 1.565.838 2.193 1.465l8.72 8.709 26.711-26.717a6.756 6.756 0 0 1 4.777-1.97 6.749 6.749 0 0 1 4.77 1.987Z",fill:"var(--positive-icon-in-default)"}))}),f={Info:l,Positive:s,Negative:p}},2590:(F,P,t)=>{"use strict";t.d(P,{r:()=>q});var i=t(1308),d=[],r=[];function x(le,te){if(le&&typeof document<"u"){var Z,ce=te.prepend===!0?"prepend":"append",O=te.singleTag===!0,ue=typeof te.container=="string"?document.querySelector(te.container):document.getElementsByTagName("head")[0];if(O){var D=d.indexOf(ue);D===-1&&(D=d.push(ue)-1,r[D]={}),Z=r[D]&&r[D][ce]?r[D][ce]:r[D][ce]=ee()}else Z=ee();le.charCodeAt(0)===65279&&(le=le.substring(1)),Z.styleSheet?Z.styleSheet.cssText+=le:Z.appendChild(document.createTextNode(le))}function ee(){var ie=document.createElement("style");if(ie.setAttribute("type","text/css"),te.attributes)for(var ye=Object.keys(te.attributes),be=0;be<ye.length;be++)ie.setAttribute(ye[be],te.attributes[ye[be]]);var j=ce==="prepend"?"afterbegin":"beforeend";return ue.insertAdjacentElement(j,ie),ie}}var l=`.mds-key-value {
  margin: 0;
  padding: 0;
  color: var(--base-text-default)
}

.mds-key-value.mds-key-value-size-md {
    --mds-key-value-key-font-above: var(--typography-p3-regular);
    --mds-key-value-value-font-above: var(--typography-p3-semibold);
    --mds-key-value-key-font-beside: var(--typography-p3-semibold);
    --mds-key-value-value-font-beside: var(--typography-p3-regular);
    --mds-key-value-gap-between-above: 16px;
    --mds-key-value-gap-between-beside: 12px;
    --mds-key-value-gap-within-above: 4px;
    --mds-key-value-gap-within-beside: 24px;
    --mds-key-value-gap-group-above: 72px;
    --mds-key-value-gap-group-beside: 72px;
  }

.mds-key-value.mds-key-value-size-sm {
    --mds-key-value-key-font-above: var(--typography-p4-regular);
    --mds-key-value-value-font-above: var(--typography-p4-semibold);
    --mds-key-value-key-font-beside: var(--typography-p4-semibold);
    --mds-key-value-value-font-beside: var(--typography-p4-regular);
    --mds-key-value-gap-between-above: 16px;
    --mds-key-value-gap-between-beside: 8px;
    --mds-key-value-gap-within-above: 0;
    --mds-key-value-gap-within-beside: 16px;
    --mds-key-value-gap-group-above: 60px;
    --mds-key-value-gap-group-beside: 60px;
  }

.mds-key-value .mds-key-value-pair > .mds-key-value-pair-key {
      font: var(--mds-key-value-key-font);
    }

.mds-key-value .mds-key-value-pair > .mds-key-value-pair-value {
      font: var(--mds-key-value-value-font);
    }

.mds-key-value.mds-key-value-alignment-right .mds-key-value-pair-value {
      text-align: right;
    }

.mds-key-value.mds-key-value-alignment-right.mds-key-value-placement-above .mds-key-value-pair-key {
        text-align: right;
      }

.mds-key-value .mds-key-value-divider {
    margin: calc(var(--mds-key-value-gap-between) / 2) 0;
    border: none;
    border-top: 1px solid var(--control-border-weak-default);
    border-left: 1px solid var(--control-border-weak-default)
  }

.mds-key-value .mds-key-value-divider:first-child {
      margin-top: 0;
    }

.mds-key-value .mds-key-value-divider:last-child {
      margin-bottom: 0;
    }

.mds-key-value.mds-key-value-placement-above {
  --mds-key-value-key-font: var(--mds-key-value-key-font-above);
  --mds-key-value-value-font: var(--mds-key-value-value-font-above);
  --mds-key-value-gap-group: var(--mds-key-value-gap-group-above);
  --mds-key-value-gap-between: var(--mds-key-value-gap-between-above);
  --mds-key-value-gap-within: var(--mds-key-value-gap-within-above);

  display: flex;
  flex-direction: column
}

.mds-key-value.mds-key-value-placement-above[\\:has\\(\\%3E\\%20.mds-key-value-group\\)] {
    flex-direction: row;
    gap: var(--mds-key-value-gap-group);
  }

.mds-key-value.mds-key-value-placement-above:has(> .mds-key-value-group) {
    flex-direction: row;
    gap: var(--mds-key-value-gap-group);
  }

.mds-key-value.mds-key-value-placement-above .mds-key-value-group {
    display: flex;
    flex-direction: column;
  }

.mds-key-value.mds-key-value-placement-above .mds-key-value-pair {
    padding-top: calc(var(--mds-key-value-gap-between) / 2);
    padding-bottom: calc(var(--mds-key-value-gap-between) / 2)
  }

.mds-key-value.mds-key-value-placement-above .mds-key-value-pair .mds-key-value-pair-key {
      padding-bottom: var(--mds-key-value-gap-within);
      color: var(--base-text-medium-default);
    }

.mds-key-value.mds-key-value-placement-above .mds-key-value-pair .mds-key-value-pair-value {
      margin: 0 !important;
    }

.mds-key-value.mds-key-value-placement-above .mds-key-value-pair:first-child {
      padding-top: 0;
    }

.mds-key-value.mds-key-value-placement-above .mds-key-value-pair:last-child {
      padding-bottom: 0;
    }

.mds-key-value.mds-key-value-placement-beside {
  --mds-key-value-key-font: var(--mds-key-value-key-font-beside);
  --mds-key-value-value-font: var(--mds-key-value-value-font-beside);
  --mds-key-value-gap-group: var(--mds-key-value-gap-group-beside);
  --mds-key-value-gap-between: var(--mds-key-value-gap-between-beside);
  --mds-key-value-gap-within: var(--mds-key-value-gap-within-beside);

  display: table
}

.mds-key-value.mds-key-value-placement-beside[\\:has\\(\\%3E\\%20.mds-key-value-group\\)] {
    display: flex;
    flex-direction: row;
    gap: var(--mds-key-value-gap-group);
  }

.mds-key-value.mds-key-value-placement-beside:has(> .mds-key-value-group) {
    display: flex;
    flex-direction: row;
    gap: var(--mds-key-value-gap-group);
  }

/* stylelint-disable-next-line */

.mds-key-value.mds-key-value-placement-beside .mds-key-value-pair {
    display: table-row
  }

.mds-key-value.mds-key-value-placement-beside .mds-key-value-pair .mds-key-value-pair-key {
      display: table-cell;
      padding-top: calc(var(--mds-key-value-gap-between) / 2);
      padding-right: var(--mds-key-value-gap-within);
      padding-bottom: calc(var(--mds-key-value-gap-between) / 2);
    }

.mds-key-value.mds-key-value-placement-beside .mds-key-value-pair .mds-key-value-pair-value {
      display: table-cell;
    }

.mds-key-value.mds-key-value-placement-beside .mds-key-value-pair:first-child .mds-key-value-pair-key {
      padding-top: 0;
    }
`;x(l,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/key-value"}});var p=t(5024),s=t(6978),f=t(2776),z=t.n(f);const N=(0,f.forwardRef)(({className:le,...te},Z)=>z().createElement("hr",{className:(0,s.U)("mds-key-value-divider",le),ref:Z,...te}));var h=Object.defineProperty,A=(le,te)=>h(le,"name",{value:te,configurable:!0});const I=A(({gapBetween:le,gapGroup:te,gapWithin:Z})=>(0,f.useMemo)(()=>({"--mds-key-value-gap-within":Z?`${Z}px`:void 0,"--mds-key-value-gap-between":le?`${le}px`:void 0,"--mds-key-value-gap-group":te?`${te}px`:void 0}),[Z,le,te]),"useGap");var b=Object.defineProperty,u=(le,te)=>b(le,"name",{value:te,configurable:!0});const S=u(({gapBetween:le,gapGroup:te,gapWithin:Z,style:ce})=>{const O=I({gapWithin:Z,gapGroup:te,gapBetween:le});return(0,f.useMemo)(()=>({...ce,...O}),[ce,O])},"useKeyValueStyle"),E=(0,f.forwardRef)(({children:le,className:te,gapBetween:Z,gapGroup:ce,gapWithin:O,style:ue,...D},ee)=>{const ie=(0,s.U)("mds-key-value-group",te),ye=S({gapBetween:Z,gapGroup:ce,gapWithin:O,style:ue});return z().createElement("div",{className:ie,ref:ee,style:ye,...D},le)});E.displayName="KeyValue.Group";var L=Object.defineProperty,T=(le,te)=>L(le,"name",{value:te,configurable:!0});const Q=(0,f.createContext)({persistent:!0}),G=T(()=>(0,f.useContext)(Q),"useKeyValueContext");var se=t(738),U=t(9279),y=Object.defineProperty,B=(le,te)=>y(le,"name",{value:te,configurable:!0});const ne=B(le=>Array.isArray(le)?le:[le.key,le.value],"getKeyValue"),M=B(le=>z().createElement(se.s,{align:"center",gap:4},le),"wrap"),$=B(({children:le})=>z().createElement("dt",{className:"mds-key-value-pair-key"},z().createElement(U.v,{condition:typeof le!="string",wrap:M},le)),"Key"),ae=B(({children:le})=>z().createElement("dd",{className:"mds-key-value-pair-value"},z().createElement(U.v,{condition:!!le&&typeof le!="string",wrap:M},le||"\u2014")),"Value"),J=(0,f.forwardRef)(({className:le,gapBetween:te,gapWithin:Z,pair:[ce,O],style:ue,...D},ee)=>z().createElement("div",{className:(0,s.U)("mds-key-value-pair",le),style:S({gapWithin:Z,gapBetween:te,style:ue}),...D,ref:ee},z().createElement($,null,ce),z().createElement(ae,null,O))),xe=(0,f.forwardRef)(({pair:le,...te},Z)=>{const{persistent:ce}=G(),[O,ue]=ne(le);return ce||ue?z().createElement(J,{pair:[O,ue],...te,ref:Z}):null});xe.displayName="KeyValue.Pair";const q=(0,p.E)((0,f.forwardRef)(({alignment:le="left",children:te,className:Z,gapBetween:ce,gapGroup:O,gapWithin:ue,persistent:D=!0,placement:ee="beside",size:ie="md",style:ye,...be},j)=>{const w=(0,s.U)("mds-key-value",Z,`mds-key-value-size-${ie}`,`mds-key-value-placement-${ee}`,`mds-key-value-alignment-${le}`),W=S({gapGroup:O,gapWithin:ue,gapBetween:ce,style:ye});return z().createElement(Q.Provider,{value:{persistent:D}},z().createElement("dl",{className:w,ref:j,style:W,...be},te))}),{Pair:xe,Group:E,Divider:N})},2611:(F,P,t)=>{"use strict";F.exports=t(449)},2680:F=>{function P(t){var i=this.__data__,d=i.delete(t);return this.size=i.size,d}F.exports=P},2823:(F,P,t)=>{var i=t(789),d=t(8926),r=t(2680),x=t(3851),l=t(8423),p=t(3967);function s(f){var z=this.__data__=new i(f);this.size=z.size}s.prototype.clear=d,s.prototype.delete=r,s.prototype.get=x,s.prototype.has=l,s.prototype.set=p,F.exports=s},2924:(F,P,t)=>{"use strict";t.d(P,{qO:()=>x});var i=t(6932),d=t(5917);function r(s){const f=timestampInSeconds(),z={sid:uuid4(),init:!0,timestamp:f,started:f,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>p(z)};return s&&x(z,s),z}function x(s,f={}){if(f.user&&(!s.ipAddress&&f.user.ip_address&&(s.ipAddress=f.user.ip_address),!s.did&&!f.did&&(s.did=f.user.id||f.user.email||f.user.username)),s.timestamp=f.timestamp||(0,d.zf)(),f.abnormal_mechanism&&(s.abnormal_mechanism=f.abnormal_mechanism),f.ignoreDuration&&(s.ignoreDuration=f.ignoreDuration),f.sid&&(s.sid=f.sid.length===32?f.sid:(0,i.eJ)()),f.init!==void 0&&(s.init=f.init),!s.did&&f.did&&(s.did=`${f.did}`),typeof f.started=="number"&&(s.started=f.started),s.ignoreDuration)s.duration=void 0;else if(typeof f.duration=="number")s.duration=f.duration;else{const z=s.timestamp-s.started;s.duration=z>=0?z:0}f.release&&(s.release=f.release),f.environment&&(s.environment=f.environment),!s.ipAddress&&f.ipAddress&&(s.ipAddress=f.ipAddress),!s.userAgent&&f.userAgent&&(s.userAgent=f.userAgent),typeof f.errors=="number"&&(s.errors=f.errors),f.status&&(s.status=f.status)}function l(s,f){let z={};f?z={status:f}:s.status==="ok"&&(z={status:"exited"}),x(s,z)}function p(s){return dropUndefinedKeys({sid:`${s.sid}`,init:s.init,started:new Date(s.started*1e3).toISOString(),timestamp:new Date(s.timestamp*1e3).toISOString(),status:s.status,errors:s.errors,did:typeof s.did=="number"||typeof s.did=="string"?`${s.did}`:void 0,duration:s.duration,abnormal_mechanism:s.abnormal_mechanism,attrs:{release:s.release,environment:s.environment,ip_address:s.ipAddress,user_agent:s.userAgent}})}},3117:(F,P,t)=>{"use strict";t.d(P,{y:()=>be});var i=t(9355),d=t(7504),r=t(6932),x=t(5868),l=t(7326),p=t(8972),s=t(535),f=t(3840),z=t(5917);function N(j,w,W){const oe=[{type:"client_report"},{timestamp:W||(0,z.lu)(),discarded_events:j}];return(0,p.h4)(w?{dsn:w}:{},[oe])}const h="7";function A(j){const w=j.protocol?`${j.protocol}:`:"",W=j.port?`:${j.port}`:"";return`${w}//${j.host}${W}${j.path?`/${j.path}`:""}/api/`}function I(j){return`${A(j)}${j.projectId}/envelope/`}function b(j,w){return(0,s.u4)({sentry_key:j.publicKey,sentry_version:h,...w&&{sentry_client:`${w.name}/${w.version}`}})}function u(j,w,W){return w||`${I(j)}?${b(j,W)}`}function S(j,w){const W=makeDsn(j);if(!W)return"";const oe=`${A(W)}embed/error-page/`;let ve=`dsn=${dsnToString(W)}`;for(const Se in w)if(Se!=="dsn"&&Se!=="onClose")if(Se==="user"){const Ae=w.user;if(!Ae)continue;Ae.name&&(ve+=`&name=${encodeURIComponent(Ae.name)}`),Ae.email&&(ve+=`&email=${encodeURIComponent(Ae.email)}`)}else ve+=`&${encodeURIComponent(Se)}=${encodeURIComponent(w[Se])}`;return`${oe}?${ve}`}var E=t(7449),L=t(3894);function T(j,w){return w&&(j.sdk=j.sdk||{},j.sdk.name=j.sdk.name||w.name,j.sdk.version=j.sdk.version||w.version,j.sdk.integrations=[...j.sdk.integrations||[],...w.integrations||[]],j.sdk.packages=[...j.sdk.packages||[],...w.packages||[]]),j}function Q(j,w,W,oe){const ve=(0,p.Cj)(W),Se={sent_at:new Date().toISOString(),...ve&&{sdk:ve},...!!oe&&w&&{dsn:(0,i.SB)(w)}},Ae="aggregates"in j?[{type:"sessions"},j]:[{type:"session"},j.toJSON()];return(0,p.h4)(Se,[Ae])}function G(j,w,W,oe){const ve=(0,p.Cj)(W),Se=j.type&&j.type!=="replay_event"?j.type:"event";T(j,W&&W.sdk);const Ae=(0,p.n2)(j,ve,oe,w);delete j.sdkProcessingMetadata;const Ie=[{type:Se},j];return(0,p.h4)(Ae,[Ie])}function se(j,w){function W(Ke){return!!Ke.trace_id&&!!Ke.public_key}const oe=getDynamicSamplingContextFromSpan(j[0]),ve=w&&w.getDsn(),Se=w&&w.getOptions().tunnel,Ae={sent_at:new Date().toISOString(),...W(oe)&&{trace:oe},...!!Se&&ve&&{dsn:dsnToString(ve)}},Ie=w&&w.getOptions().beforeSendSpan,We=Ie?Ke=>Ie(spanToJSON(Ke)):Ke=>spanToJSON(Ke),Le=[];for(const Ke of j){const Ze=We(Ke);Ze&&Le.push(createSpanEnvelopeItem(Ze))}return createEnvelope(Ae,Le)}var U=t(9462),y=t(2924),B=t(5142);function ne(j){if(typeof j=="boolean")return Number(j);const w=typeof j=="string"?parseFloat(j):j;if(typeof w!="number"||isNaN(w)||w<0||w>1){L.T&&d.vF.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(j)} of type ${JSON.stringify(typeof j)}.`);return}return w}var M=t(7696);const $="Not capturing exception because it's already been captured.";class ae{constructor(w){if(this._options=w,this._integrations={},this._numProcessing=0,this._outcomes={},this._hooks={},this._eventProcessors=[],w.dsn?this._dsn=(0,i.AD)(w.dsn):L.T&&d.vF.warn("No DSN provided, client will not send events."),this._dsn){const W=u(this._dsn,w.tunnel,w._metadata?w._metadata.sdk:void 0);this._transport=w.transport({tunnel:this._options.tunnel,recordDroppedEvent:this.recordDroppedEvent.bind(this),...w.transportOptions,url:W})}}captureException(w,W,oe){const ve=(0,r.eJ)();if((0,r.GR)(w))return L.T&&d.vF.log($),ve;const Se={event_id:ve,...W};return this._process(this.eventFromException(w,Se).then(Ae=>this._captureEvent(Ae,Se,oe))),Se.event_id}captureMessage(w,W,oe,ve){const Se={event_id:(0,r.eJ)(),...oe},Ae=(0,x.NF)(w)?w:String(w),Ie=(0,x.sO)(w)?this.eventFromMessage(Ae,W,Se):this.eventFromException(w,Se);return this._process(Ie.then(We=>this._captureEvent(We,Se,ve))),Se.event_id}captureEvent(w,W,oe){const ve=(0,r.eJ)();if(W&&W.originalException&&(0,r.GR)(W.originalException))return L.T&&d.vF.log($),ve;const Se={event_id:ve,...W},Ie=(w.sdkProcessingMetadata||{}).capturedSpanScope;return this._process(this._captureEvent(w,Se,Ie||oe)),Se.event_id}captureSession(w){typeof w.release!="string"?L.T&&d.vF.warn("Discarded session because of missing or non-string release"):(this.sendSession(w),(0,y.qO)(w,{init:!1}))}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(w){const W=this._transport;return W?(this.emit("flush"),this._isClientDoneProcessing(w).then(oe=>W.flush(w).then(ve=>oe&&ve))):(0,l.XW)(!0)}close(w){return this.flush(w).then(W=>(this.getOptions().enabled=!1,this.emit("close"),W))}getEventProcessors(){return this._eventProcessors}addEventProcessor(w){this._eventProcessors.push(w)}init(){(this._isEnabled()||this._options.integrations.some(({name:w})=>w.startsWith("Spotlight")))&&this._setupIntegrations()}getIntegrationByName(w){return this._integrations[w]}addIntegration(w){const W=this._integrations[w.name];(0,U.qm)(this,w,this._integrations),W||(0,U.lc)(this,[w])}sendEvent(w,W={}){this.emit("beforeSendEvent",w,W);let oe=G(w,this._dsn,this._options._metadata,this._options.tunnel);for(const Se of W.attachments||[])oe=(0,p.W3)(oe,(0,p.bm)(Se));const ve=this.sendEnvelope(oe);ve&&ve.then(Se=>this.emit("afterSendEvent",w,Se),null)}sendSession(w){const W=Q(w,this._dsn,this._options._metadata,this._options.tunnel);this.sendEnvelope(W)}recordDroppedEvent(w,W,oe){if(this._options.sendClientReports){const ve=typeof oe=="number"?oe:1,Se=`${w}:${W}`;L.T&&d.vF.log(`Recording outcome: "${Se}"${ve>1?` (${ve} times)`:""}`),this._outcomes[Se]=(this._outcomes[Se]||0)+ve}}on(w,W){const oe=this._hooks[w]=this._hooks[w]||[];return oe.push(W),()=>{const ve=oe.indexOf(W);ve>-1&&oe.splice(ve,1)}}emit(w,...W){const oe=this._hooks[w];oe&&oe.forEach(ve=>ve(...W))}sendEnvelope(w){return this.emit("beforeEnvelope",w),this._isEnabled()&&this._transport?this._transport.send(w).then(null,W=>(L.T&&d.vF.error("Error while sending event:",W),W)):(L.T&&d.vF.error("Transport disabled"),(0,l.XW)({}))}_setupIntegrations(){const{integrations:w}=this._options;this._integrations=(0,U.P$)(this,w),(0,U.lc)(this,w)}_updateSessionFromEvent(w,W){let oe=!1,ve=!1;const Se=W.exception&&W.exception.values;if(Se){ve=!0;for(const We of Se){const Le=We.mechanism;if(Le&&Le.handled===!1){oe=!0;break}}}const Ae=w.status==="ok";(Ae&&w.errors===0||Ae&&oe)&&((0,y.qO)(w,{...oe&&{status:"crashed"},errors:w.errors||Number(ve||oe)}),this.captureSession(w))}_isClientDoneProcessing(w){return new l.T2(W=>{let oe=0;const ve=1,Se=setInterval(()=>{this._numProcessing==0?(clearInterval(Se),W(!0)):(oe+=ve,w&&oe>=w&&(clearInterval(Se),W(!1)))},ve)})}_isEnabled(){return this.getOptions().enabled!==!1&&this._transport!==void 0}_prepareEvent(w,W,oe,ve=(0,E.rm)()){const Se=this.getOptions(),Ae=Object.keys(this._integrations);return!W.integrations&&Ae.length>0&&(W.integrations=Ae),this.emit("preprocessEvent",w,W),w.type||ve.setLastEventId(w.event_id||W.event_id),(0,M.mG)(Se,w,W,oe,this,ve).then(Ie=>{if(Ie===null)return Ie;const We={...ve.getPropagationContext(),...oe?oe.getPropagationContext():void 0};if(!(Ie.contexts&&Ie.contexts.trace)&&We){const{traceId:Ke,spanId:Ze,parentSpanId:ln,dsc:Rn}=We;Ie.contexts={trace:(0,s.Ce)({trace_id:Ke,span_id:Ze,parent_span_id:ln}),...Ie.contexts};const un=Rn||(0,B.lF)(Ke,this);Ie.sdkProcessingMetadata={dynamicSamplingContext:un,...Ie.sdkProcessingMetadata}}return Ie})}_captureEvent(w,W={},oe){return this._processEvent(w,W,oe).then(ve=>ve.event_id,ve=>{if(L.T){const Se=ve;Se.logLevel==="log"?d.vF.log(Se.message):d.vF.warn(Se)}})}_processEvent(w,W,oe){const ve=this.getOptions(),{sampleRate:Se}=ve,Ae=le(w),Ie=q(w),We=w.type||"error",Le=`before send for type \`${We}\``,Ke=typeof Se>"u"?void 0:ne(Se);if(Ie&&typeof Ke=="number"&&Math.random()>Ke)return this.recordDroppedEvent("sample_rate","error",w),(0,l.xg)(new f.U(`Discarding event because it's not included in the random sample (sampling rate = ${Se})`,"log"));const Ze=We==="replay_event"?"replay":We,Rn=(w.sdkProcessingMetadata||{}).capturedSpanIsolationScope;return this._prepareEvent(w,W,oe,Rn).then(un=>{if(un===null)throw this.recordDroppedEvent("event_processor",Ze,w),new f.U("An event processor returned `null`, will not send event.","log");if(W.data&&W.data.__sentry__===!0)return un;const In=xe(this,ve,un,W);return J(In,Le)}).then(un=>{if(un===null){if(this.recordDroppedEvent("before_send",Ze,w),Ae){const yn=1+(w.spans||[]).length;this.recordDroppedEvent("before_send","span",yn)}throw new f.U(`${Le} returned \`null\`, will not send event.`,"log")}const dt=oe&&oe.getSession();if(!Ae&&dt&&this._updateSessionFromEvent(dt,un),Ae){const Dn=un.sdkProcessingMetadata&&un.sdkProcessingMetadata.spanCountBeforeProcessing||0,yn=un.spans?un.spans.length:0,Cn=Dn-yn;Cn>0&&this.recordDroppedEvent("before_send","span",Cn)}const In=un.transaction_info;if(Ae&&In&&un.transaction!==w.transaction){const Dn="custom";un.transaction_info={...In,source:Dn}}return this.sendEvent(un,W),un}).then(null,un=>{throw un instanceof f.U?un:(this.captureException(un,{data:{__sentry__:!0},originalException:un}),new f.U(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${un}`))})}_process(w){this._numProcessing++,w.then(W=>(this._numProcessing--,W),W=>(this._numProcessing--,W))}_clearOutcomes(){const w=this._outcomes;return this._outcomes={},Object.entries(w).map(([W,oe])=>{const[ve,Se]=W.split(":");return{reason:ve,category:Se,quantity:oe}})}_flushOutcomes(){L.T&&d.vF.log("Flushing outcomes...");const w=this._clearOutcomes();if(w.length===0){L.T&&d.vF.log("No outcomes to send");return}if(!this._dsn){L.T&&d.vF.log("No dsn provided, will not send outcomes");return}L.T&&d.vF.log("Sending outcomes:",w);const W=N(w,this._options.tunnel&&(0,i.SB)(this._dsn));this.sendEnvelope(W)}}function J(j,w){const W=`${w} must return \`null\` or a valid event.`;if((0,x.Qg)(j))return j.then(oe=>{if(!(0,x.Qd)(oe)&&oe!==null)throw new f.U(W);return oe},oe=>{throw new f.U(`${w} rejected with ${oe}`)});if(!(0,x.Qd)(j)&&j!==null)throw new f.U(W);return j}function xe(j,w,W,oe){const{beforeSend:ve,beforeSendTransaction:Se,beforeSendSpan:Ae}=w;if(q(W)&&ve)return ve(W,oe);if(le(W)){if(W.spans&&Ae){const Ie=[];for(const We of W.spans){const Le=Ae(We);Le?Ie.push(Le):j.recordDroppedEvent("before_send","span")}W.spans=Ie}if(Se){if(W.spans){const Ie=W.spans.length;W.sdkProcessingMetadata={...W.sdkProcessingMetadata,spanCountBeforeProcessing:Ie}}return Se(W,oe)}}return W}function q(j){return j.type===void 0}function le(j){return j.type==="transaction"}var te=t(7710);function Z(j,w,W=[w],oe="npm"){const ve=j._metadata||{};ve.sdk||(ve.sdk={name:`sentry.javascript.${w}`,packages:W.map(Se=>({name:`${oe}:@sentry/${Se}`,version:te.M})),version:te.M}),j._metadata=ve}function ce(){return typeof __SENTRY_BROWSER_BUNDLE__<"u"&&!!__SENTRY_BROWSER_BUNDLE__}function O(){return"npm"}var ue=t(7555),D=t(4966),ee=t(6024);function ie(j,{metadata:w,tunnel:W,dsn:oe}){const ve={event_id:j.event_id,sent_at:new Date().toISOString(),...w&&w.sdk&&{sdk:{name:w.sdk.name,version:w.sdk.version}},...!!W&&!!oe&&{dsn:(0,i.SB)(oe)}},Se=ye(j);return(0,p.h4)(ve,[Se])}function ye(j){return[{type:"user_report"},j]}class be extends ae{constructor(w){const W={parentSpanIsAlwaysRootSpan:!0,...w},oe=ee.jf.SENTRY_SDK_SOURCE||O();Z(W,"browser",["browser"],oe),super(W),W.sendClientReports&&ee.jf.document&&ee.jf.document.addEventListener("visibilitychange",()=>{ee.jf.document.visibilityState==="hidden"&&this._flushOutcomes()})}eventFromException(w,W){return(0,D.u)(this._options.stackParser,w,W,this._options.attachStacktrace)}eventFromMessage(w,W="info",oe){return(0,D.qv)(this._options.stackParser,w,W,oe,this._options.attachStacktrace)}captureUserFeedback(w){if(!this._isEnabled()){ue.T&&d.vF.warn("SDK not enabled, will not capture user feedback.");return}const W=ie(w,{metadata:this.getSdkMetadata(),dsn:this.getDsn(),tunnel:this.getOptions().tunnel});this.sendEnvelope(W)}_prepareEvent(w,W,oe){return w.platform=w.platform||"javascript",super._prepareEvent(w,W,oe)}}},3188:(F,P,t)=>{var i=t(3829),d=t(1870);function r(x,l){var p=d(x,l);return i(p)?p:void 0}F.exports=r},3249:(F,P,t)=>{"use strict";t.d(P,{R:()=>u});var i=t(2776),d=t(8236);const r=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),i.createElement("path",{d:"M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]);var x=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,N=(S,E,L)=>E in S?x(S,E,{enumerable:!0,configurable:!0,writable:!0,value:L}):S[E]=L,h=(S,E)=>{for(var L in E||(E={}))f.call(E,L)&&N(S,L,E[L]);if(s)for(var L of s(E))z.call(E,L)&&N(S,L,E[L]);return S},A=(S,E)=>l(S,p(E));const I=(0,i.forwardRef)((S,E)=>i.createElement(d.A,A(h({ref:E},S),{weights:r})));I.displayName="Info";var b=t(6375);const u=(0,b.Y)(I);u.displayName="Info"},3271:(F,P,t)=>{F=t.nmd(F);var i=t(5194),d=P&&!P.nodeType&&P,r=d&&!0&&F&&!F.nodeType&&F,x=r&&r.exports===d,l=x&&i.process,p=function(){try{var s=r&&r.require&&r.require("util").types;return s||l&&l.binding&&l.binding("util")}catch{}}();F.exports=p},3322:(F,P,t)=>{"use strict";t.d(P,{$N:()=>s,Hd:()=>l,xE:()=>z});var i=t(5868),d=t(9513);const r=d.O,x=80;function l(N,h={}){if(!N)return"<unknown>";try{let A=N;const I=5,b=[];let u=0,S=0;const E=" > ",L=E.length;let T;const Q=Array.isArray(h)?h:h.keyAttrs,G=!Array.isArray(h)&&h.maxStringLength||x;for(;A&&u++<I&&(T=p(A,Q),!(T==="html"||u>1&&S+b.length*L+T.length>=G));)b.push(T),S+=T.length,A=A.parentNode;return b.reverse().join(E)}catch{return"<unknown>"}}function p(N,h){const A=N,I=[];if(!A||!A.tagName)return"";if(r.HTMLElement&&A instanceof HTMLElement&&A.dataset){if(A.dataset.sentryComponent)return A.dataset.sentryComponent;if(A.dataset.sentryElement)return A.dataset.sentryElement}I.push(A.tagName.toLowerCase());const b=h&&h.length?h.filter(S=>A.getAttribute(S)).map(S=>[S,A.getAttribute(S)]):null;if(b&&b.length)b.forEach(S=>{I.push(`[${S[0]}="${S[1]}"]`)});else{A.id&&I.push(`#${A.id}`);const S=A.className;if(S&&(0,i.Kg)(S)){const E=S.split(/\s+/);for(const L of E)I.push(`.${L}`)}}const u=["aria-label","type","name","title","alt"];for(const S of u){const E=A.getAttribute(S);E&&I.push(`[${S}="${E}"]`)}return I.join("")}function s(){try{return r.document.location.href}catch{return""}}function f(N){return r.document&&r.document.querySelector?r.document.querySelector(N):null}function z(N){if(!r.HTMLElement)return null;let h=N;const A=5;for(let I=0;I<A;I++){if(!h)return null;if(h instanceof HTMLElement){if(h.dataset.sentryComponent)return h.dataset.sentryComponent;if(h.dataset.sentryElement)return h.dataset.sentryElement}h=h.parentNode}return null}},3368:F=>{function P(t){return function(){return t}}F.exports=P},3581:(F,P,t)=>{var i=t(6252),d=t(6184),r=Object.prototype,x=r.hasOwnProperty,l=r.propertyIsEnumerable,p=i(function(){return arguments}())?i:function(s){return d(s)&&x.call(s,"callee")&&!l.call(s,"callee")};F.exports=p},3615:(F,P,t)=>{var i=t(8342),d=t(9184),r=t(7747),x=t(4287),l=t(7);function p(s){var f=-1,z=s==null?0:s.length;for(this.clear();++f<z;){var N=s[f];this.set(N[0],N[1])}}p.prototype.clear=i,p.prototype.delete=d,p.prototype.get=r,p.prototype.has=x,p.prototype.set=l,F.exports=p},3706:(F,P,t)=>{"use strict";t.d(P,{_:()=>d});var i="production",d=typeof process>"u"||process.env===void 0?i:"production"},3733:(F,P,t)=>{var i=t(3188),d=function(){try{var r=i(Object,"defineProperty");return r({},"",{}),r}catch{}}();F.exports=d},3829:(F,P,t)=>{var i=t(4360),d=t(7234),r=t(6015),x=t(275),l=/[\\^$.*+?()[\]{}|]/g,p=/^\[object .+?Constructor\]$/,s=Function.prototype,f=Object.prototype,z=s.toString,N=f.hasOwnProperty,h=RegExp("^"+z.call(N).replace(l,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function A(I){if(!r(I)||d(I))return!1;var b=i(I)?h:p;return b.test(x(I))}F.exports=A},3840:(F,P,t)=>{"use strict";t.d(P,{U:()=>i});class i extends Error{constructor(r,x="warn"){super(r),this.message=r,this.name=new.target.prototype.constructor.name,Object.setPrototypeOf(this,new.target.prototype),this.logLevel=x}}},3851:F=>{function P(t){return this.__data__.get(t)}F.exports=P},3894:(F,P,t)=>{"use strict";t.d(P,{T:()=>i});const i=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__},3903:(F,P,t)=>{var i=t(4235),d=Math.max;function r(x,l,p){return l=d(l===void 0?x.length-1:l,0),function(){for(var s=arguments,f=-1,z=d(s.length-l,0),N=Array(z);++f<z;)N[f]=s[l+f];f=-1;for(var h=Array(l+1);++f<l;)h[f]=s[f];return h[l]=p(N),i(x,this,h)}}F.exports=r},3905:(F,P,t)=>{var i=t(4271),d=t(6143),r=t(3271),x=r&&r.isTypedArray,l=x?d(x):i;F.exports=l},3911:(F,P,t)=>{var i=t(4465);function d(r){var x=new r.constructor(r.byteLength);return new i(x).set(new i(r)),x}F.exports=d},3957:(F,P,t)=>{var i=t(435);function d(r){return i(this.__data__,r)>-1}F.exports=d},3967:(F,P,t)=>{var i=t(789),d=t(8561),r=t(1451),x=200;function l(p,s){var f=this.__data__;if(f instanceof i){var z=f.__data__;if(!d||z.length<x-1)return z.push([p,s]),this.size=++f.size,this;f=this.__data__=new r(z)}return f.set(p,s),this.size=f.size,this}F.exports=l},4077:(F,P,t)=>{"use strict";t.d(P,{V:()=>d});var i=t(2776);const d=(0,i.createContext)({color:"currentColor",size:"1em",weight:"regular",mirrored:!1})},4209:(F,P,t)=>{"use strict";t.d(P,{$:()=>te});var i=t(5024),d=t(4077),r=t(7570),x=t(2776),l=t.n(x),p=Object.defineProperty,s=(Z,ce)=>p(Z,"name",{value:ce,configurable:!0});const f=s(Z=>l().createElement("svg",{"aria-label":"loading spinner",fill:"none",focusable:"false",height:"1em",role:"img",viewBox:"0 0 20 20",width:"1em",xmlns:"http://www.w3.org/2000/svg",...Z},l().createElement("path",{d:"M17.2442 11.9405C18.3163 7.93947 15.9419 3.82695 11.9409 2.75488",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2.25"})),"IcSpinner");var z=Object.defineProperty,N=(Z,ce)=>z(Z,"name",{value:ce,configurable:!0});const h=N(({icon:Z,loading:ce})=>ce?l().createElement(f,{className:"mds-button-loading-icon",height:"16",width:"16"}):Z?l().createElement(l().Fragment,null,Z):null,"ButtonLoaderIcon");var A=t(5622),I=t(6978),b=Object.defineProperty,u=(Z,ce)=>b(Z,"name",{value:ce,configurable:!0});const S=u(({admin:Z,block:ce,children:O,className:ue,destructive:D,icon:ee,kind:ie,loading:ye,margin:be,rightIcon:j,size:w})=>{const W=!O&&!!(ee?!j:j),oe=(0,A.K)(be);return(0,I.U)("mds-button",ue,{"mds-button-admin":Z,"mds-button-block":ce,"mds-button-destructive":D,"mds-button-icon-only":W,"mds-button-loading":ye,[`mds-button-kind-${ie}`]:ie,[`mds-button-size-${w}`]:w},oe)},"useButtonClassNames");var E=t(4445),L=Object.defineProperty,T=(Z,ce)=>L(Z,"name",{value:ce,configurable:!0});const Q=T(({analytics:Z,disabled:ce,onClick:O})=>{const{sendAnalytics:ue}=(0,E.st)();return(0,x.useCallback)(D=>{const ee=D.target?.nodeName==="A";Z?.events.includes("click")&&!ce&&ue({...Z,component:ee?"link":"button",event:"click"}),O?.(D)},[Z,ce,O,ue])},"useButtonClick");var G=t(1308),se=[],U=[];function y(Z,ce){if(Z&&typeof document<"u"){var O,ue=ce.prepend===!0?"prepend":"append",D=ce.singleTag===!0,ee=typeof ce.container=="string"?document.querySelector(ce.container):document.getElementsByTagName("head")[0];if(D){var ie=se.indexOf(ee);ie===-1&&(ie=se.push(ee)-1,U[ie]={}),O=U[ie]&&U[ie][ue]?U[ie][ue]:U[ie][ue]=ye()}else O=ye();Z.charCodeAt(0)===65279&&(Z=Z.substring(1)),O.styleSheet?O.styleSheet.cssText+=Z:O.appendChild(document.createTextNode(Z))}function ye(){var be=document.createElement("style");if(be.setAttribute("type","text/css"),ce.attributes)for(var j=Object.keys(ce.attributes),w=0;w<j.length;w++)be.setAttribute(j[w],ce.attributes[j[w]]);var W=ue==="prepend"?"afterbegin":"beforeend";return ee.insertAdjacentElement(W,be),be}}var B=`.mds-button {
  --mds-button-border-radius: 6px;
  --mds-button-icon-color: var(--mds-button-icon-color-default);

  cursor: pointer;

  display: inline-flex;
  align-items: center;

  padding: var(--mds-button-padding-vertical)
    var(--mds-button-padding-horizontal);

  color: var(--mds-button-color-text);
  text-decoration: none;

  background-color: var(--mds-button-color-background);
  border: 2px solid var(--mds-button-color-border);
  border-radius: var(--mds-button-border-radius);
  box-shadow: none;

  transition: all 0.3s cubic-bezier(0.7, 0.3, 0.1, 1)
}

.mds-button.mds-button-kind-default,
  .mds-button.mds-button-kind-primary {
    --mds-button-color-border: var(--interact-border-default);
    --mds-button-color-border-active: var(--interact-border-active);
    --mds-button-color-border-hover: var(--interact-border-hover);
    --mds-button-color-border-disabled: var(--interact-border-disabled);
    --mds-button-color-background: var(--interact-bg-default);
    --mds-button-color-background-active: var(--interact-bg-active);
    --mds-button-color-background-hover: var(--interact-bg-hover);
    --mds-button-color-background-disabled: var(--interact-bg-disabled);
    --mds-button-color-text: var(--interact-text-in-default);
    --mds-button-color-text-active: var(--interact-text-in-active);
    --mds-button-color-text-hover: var(--interact-text-in-hover);
    --mds-button-color-text-disabled: var(--interact-text-in-disabled);
    --mds-button-icon-color-default: var(--interact-icon-in-default);
    --mds-button-icon-color-active: var(--interact-icon-in-active);
    --mds-button-icon-color-hover: var(--interact-icon-in-hover);
    --mds-button-icon-color-disabled: var(--interact-icon-in-disabled);
    --mds-button-destructive-color-border: var(--negative-border-default);
    --mds-button-destructive-color-border-active: transparent;
    --mds-button-destructive-color-border-hover: transparent;
    --mds-button-destructive-color-border-disabled: var(
      --negative-border-disabled
    );
    --mds-button-destructive-color-background: var(--negative-bg-default);
    --mds-button-destructive-color-background-active: var(--negative-bg-active);
    --mds-button-destructive-color-background-hover: var(--negative-bg-hover);
    --mds-button-destructive-color-background-disabled: var(
      --negative-bg-disabled
    );
    --mds-button-destructive-color-text: var(--negative-text-in-default);
    --mds-button-destructive-color-text-active: var(--negative-text-in-active);
    --mds-button-destructive-color-text-hover: var(--negative-text-in-hover);
    --mds-button-destructive-color-text-disabled: var(
      --negative-text-in-disabled
    );
    --mds-button-destructive-icon-color: var(--negative-icon-in-default);
    --mds-button-destructive-icon-color-active: var(--negative-icon-in-active);
    --mds-button-destructive-icon-color-hover: var(--negative-icon-in-hover);
    --mds-button-destructive-icon-color-disabled: var(
      --negative-icon-in-disabled
    );
  }

.mds-button.mds-button-kind-secondary {
    --mds-button-color-border: var(--interact-border-default);
    --mds-button-color-border-active: var(--interact-border-active);
    --mds-button-color-border-hover: var(--interact-border-hover);
    --mds-button-color-border-disabled: var(--interact-border-disabled);
    --mds-button-color-background: var(--interact-bg-weak-default);
    --mds-button-color-background-active: var(--interact-bg-weak-active);
    --mds-button-color-background-hover: var(--interact-bg-weak-hover);
    --mds-button-color-background-disabled: var(--interact-bg-weak-disabled);
    --mds-button-color-text: var(--interact-text-default);
    --mds-button-color-text-active: var(--interact-text-active);
    --mds-button-color-text-hover: var(--interact-text-hover);
    --mds-button-color-text-disabled: var(--interact-text-disabled);
    --mds-button-icon-color-default: var(--interact-icon-default);
    --mds-button-icon-color-active: var(--interact-icon-active);
    --mds-button-icon-color-hover: var(--interact-icon-hover);
    --mds-button-icon-color-disabled: var(--interact-icon-disabled);
    --mds-button-destructive-color-border: var(--negative-border-default);
    --mds-button-destructive-color-border-active: var(--negative-border-active);
    --mds-button-destructive-color-border-hover: var(--negative-border-hover);
    --mds-button-destructive-color-border-disabled: var(
      --negative-border-disabled
    );
    --mds-button-destructive-color-background: var(--negative-bg-weak-default);
    --mds-button-destructive-color-background-active: var(
      --negative-bg-weak-active
    );
    --mds-button-destructive-color-background-hover: var(
      --negative-bg-weak-hover
    );
    --mds-button-destructive-color-background-disabled: var(
      --negative-bg-weak-disabled
    );
    --mds-button-destructive-color-text: var(--negative-text-default);
    --mds-button-destructive-color-text-active: var(--negative-text-active);
    --mds-button-destructive-color-text-hover: var(--negative-text-hover);
    --mds-button-destructive-color-text-disabled: var(--negative-text-disabled);
    --mds-button-destructive-icon-color: var(--negative-icon-default);
    --mds-button-destructive-icon-color-active: var(--negative-icon-active);
    --mds-button-destructive-icon-color-hover: var(--negative-icon-hover);
    --mds-button-destructive-icon-color-disabled: var(--negative-icon-disabled);
  }

.mds-button.mds-button-kind-tertiary {
    --mds-button-color-border: transparent;
    --mds-button-color-border-active: transparent;
    --mds-button-color-border-hover: transparent;
    --mds-button-color-border-disabled: transparent;
    --mds-button-color-background: transparent;
    --mds-button-color-background-active: var(--interact-bg-weak-active);
    --mds-button-color-background-hover: var(--interact-bg-weak-hover);
    --mds-button-color-background-disabled: transparent;
    --mds-button-color-text: var(--interact-text-default);
    --mds-button-color-text-active: var(--interact-text-active);
    --mds-button-color-text-hover: var(--interact-text-hover);
    --mds-button-color-text-disabled: var(--interact-text-disabled);
    --mds-button-icon-color-default: var(--interact-icon-default);
    --mds-button-icon-color-active: var(--interact-icon-active);
    --mds-button-icon-color-hover: var(--interact-icon-hover);
    --mds-button-icon-color-disabled: var(--interact-icon-disabled);
    --mds-button-destructive-color-border: transparent;
    --mds-button-destructive-color-border-active: transparent;
    --mds-button-destructive-color-border-hover: transparent;
    --mds-button-destructive-color-border-disabled: transparent;
    --mds-button-destructive-color-background: transparent;
    --mds-button-destructive-color-background-active: var(
      --negative-bg-weak-active
    );
    --mds-button-destructive-color-background-hover: var(
      --negative-bg-weak-hover
    );
    --mds-button-destructive-color-background-disabled: transparent;
    --mds-button-destructive-color-text: var(--negative-text-default);
    --mds-button-destructive-color-text-active: var(--negative-text-active);
    --mds-button-destructive-color-text-hover: var(--negative-text-hover);
    --mds-button-destructive-color-text-disabled: var(--negative-text-disabled);
    --mds-button-destructive-icon-color: var(--negative-icon-default);
    --mds-button-destructive-icon-color-active: var(--negative-icon-active);
    --mds-button-destructive-icon-color-hover: var(--negative-icon-hover);
    --mds-button-destructive-icon-color-disabled: var(--negative-icon-disabled)
  }

.mds-button.mds-button-kind-tertiary.mds-button-size-md,
    .mds-button.mds-button-kind-tertiary.mds-button-size-sm {
      padding: 0;
      border: none;
    }

.mds-button.mds-button-destructive {
    --mds-button-color-border: var(--mds-button-destructive-color-border);
    --mds-button-color-border-active: var(
      --mds-button-destructive-color-border-active
    );
    --mds-button-color-border-hover: var(
      --mds-button-destructive-color-border-hover
    );
    --mds-button-color-border-disabled: var(
      --mds-button-destructive-color-border-disabled
    );
    --mds-button-color-background: var(
      --mds-button-destructive-color-background
    );
    --mds-button-color-background-active: var(
      --mds-button-destructive-color-background-active
    );
    --mds-button-color-background-hover: var(
      --mds-button-destructive-color-background-hover
    );
    --mds-button-color-background-disabled: var(
      --mds-button-destructive-color-background-disabled
    );
    --mds-button-color-text: var(--mds-button-destructive-color-text);
    --mds-button-color-text-active: var(
      --mds-button-destructive-color-text-active
    );
    --mds-button-color-text-hover: var(
      --mds-button-destructive-color-text-hover
    );
    --mds-button-color-text-disabled: var(
      --mds-button-destructive-color-text-disabled
    );
    --mds-button-icon-color-default: var(--mds-button-destructive-icon-color);
    --mds-button-icon-color-active: var(
      --mds-button-destructive-icon-color-active
    );
    --mds-button-icon-color-hover: var(
      --mds-button-destructive-icon-color-hover
    );
    --mds-button-icon-color-disabled: var(
      --mds-button-destructive-icon-color-disabled
    );
  }

.mds-button.hover,
  .mds-button:hover,
  .mds-button[aria-expanded="true"] {
    --mds-button-icon-color: var(--mds-button-icon-color-hover);
    --mds-button-color-text: var(--mds-button-color-text-hover);
    --mds-button-color-background: var(--mds-button-color-background-hover);
    --mds-button-color-border: var(--mds-button-color-border-hover);
  }

.mds-button.active,
  .mds-button.mds-button-pressed,
  .mds-button:active {
    --mds-button-icon-color: var(--mds-button-icon-color-active);
    --mds-button-color-text: var(--mds-button-color-text-active);
    --mds-button-color-background: var(--mds-button-color-background-active);
    --mds-button-color-border: var(--mds-button-color-border-active);
  }

.mds-button.focus-visible,
  .mds-button:focus-visible {
    outline: none;
    box-shadow: var(--elevation-control-focus);
  }

.mds-button.mds-button-size-md {
    --mds-button-padding-vertical: 5px;
    --mds-button-padding-horizontal: 10px;

    gap: 4px;
    font: var(--typography-p3-bold);
  }

.mds-button.mds-button-size-sm {
    --mds-button-padding-vertical: 3px;
    --mds-button-padding-horizontal: 6px;

    gap: 4px;
    font: var(--typography-p4-bold);
  }

.mds-button.mds-button-block {
    display: block;
  }

.mds-button.mds-button-icon-only {
    --mds-button-icon-only-width: 34px;
    --mds-button-icon-only-height: 34px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: var(--mds-button-icon-only-width);
    height: var(--mds-button-icon-only-height)
  }

.mds-button.mds-button-icon-only.mds-button-kind-tertiary {
      --mds-button-icon-color-default: var(--interact-icon-weak-default);
      --mds-button-icon-color-active: var(--interact-icon-weak-active);
      --mds-button-icon-color-hover: var(--interact-icon-weak-hover);
      --mds-button-icon-color-disabled: var(--interact-icon-weak-disabled);
      --mds-button-color-background-active: var(--interact-bg-weak-active);
      --mds-button-color-background-hover: var(--interact-bg-weak-hover)
    }

.mds-button.mds-button-icon-only.mds-button-kind-tertiary.mds-button-destructive {
        --mds-button-icon-color-default: var(--negative-icon-default);
        --mds-button-icon-color-active: var(--negative-icon-active);
        --mds-button-icon-color-hover: var(--negative-icon-hover);
        --mds-button-icon-color-disabled: var(--negative-icon-disabled);
        --mds-button-color-background-active: var(--negative-bg-weak-active);
        --mds-button-color-background-hover: var(--negative-bg-weak-hover);
      }

.mds-button.mds-button-icon-only.mds-button-size-md {
      padding: 0;
    }

.mds-button.mds-button-icon-only.mds-button-size-sm {
      --mds-button-icon-only-width: 28px;
      --mds-button-icon-only-height: 28px;

      padding: 0;
    }

.mds-button.mds-button-icon-only.mds-button-size-xs {
      --mds-button-icon-only-width: 20px;
      --mds-button-icon-only-height: 20px;
    }

.mds-button.mds-button-loading,
  .mds-button:disabled,
  .mds-button[disabled] {
    --mds-button-icon-color: var(--mds-button-icon-color-disabled);
    --mds-button-icon-color-hover: var(--mds-button-icon-color-disabled);
    --mds-button-color-text: var(--mds-button-color-text-disabled);
    --mds-button-color-text-hover: var(--mds-button-color-text-disabled);
    --mds-button-color-background: var(--mds-button-color-background-disabled);
    --mds-button-color-background-hover: var(
      --mds-button-color-background-disabled
    );
    --mds-button-color-border: var(--mds-button-color-border-disabled);
    --mds-button-color-border-hover: var(--mds-button-color-border-disabled);

    cursor: not-allowed
  }

.mds-button.mds-button-loading:not(button), .mds-button:disabled:not(button), .mds-button[disabled]:not(button) {
      pointer-events: none;
    }

.mds-button .mds-button-loading-icon {
    animation: mds-button-loading-icon-spin 1s linear infinite
  }

@media screen and (prefers-reduced-motion: reduce) {

.mds-button .mds-button-loading-icon {
      animation: none
  }
    }

@keyframes mds-button-loading-icon-spin {
  100% {
    transform: rotate(360deg);
  }
}

.mds-button-admin.mds-button-kind-default,
  .mds-button-admin.mds-button-kind-primary {
    --mds-button-color-border: var(--color-admin-interact-border-strong);
    --mds-button-color-border-hover: var(
      --color-admin-interact-border-strong-hover
    );
    --mds-button-color-border-disabled: var(
      --color-admin-interact-border-strong-disabled
    );
    --mds-button-color-background: var(
      --color-admin-interact-background-strong
    );
    --mds-button-color-background-hover: var(
      --color-admin-interact-background-strong-hover
    );
    --mds-button-color-background-disabled: var(
      --color-admin-interact-background-strong-disabled
    );
    --mds-button-color-text: var(--color-admin-interact-text-strong);
    --mds-button-color-text-hover: var(
      --color-admin-interact-text-strong-hover
    );
    --mds-button-color-text-disabled: var(
      --color-admin-interact-text-strong-disabled
    );
  }

.mds-button-admin.mds-button-kind-secondary {
    --mds-button-color-border: var(--color-admin-interact-border-medium);
    --mds-button-color-border-hover: var(
      --color-admin-interact-border-medium-hover
    );
    --mds-button-color-border-disabled: var(
      --color-admin-interact-border-medium-disabled
    );
    --mds-button-color-background: var(
      --color-admin-interact-background-medium
    );
    --mds-button-color-background-hover: var(
      --color-admin-interact-background-medium-hover
    );
    --mds-button-color-background-disabled: var(
      --color-admin-interact-background-medium-disabled
    );
    --mds-button-color-text: var(--color-admin-interact-text-medium);
    --mds-button-color-text-hover: var(
      --color-admin-interact-text-medium-hover
    );
    --mds-button-color-text-disabled: var(
      --color-admin-interact-text-medium-disabled
    );
  }

.mds-button-admin.active,
  .mds-button-admin.hover,
  .mds-button-admin.mds-button-pressed,
  .mds-button-admin:active,
  .mds-button-admin:hover,
  .mds-button-admin[aria-expanded="true"] {
    --mds-button-icon-color: var(--mds-button-icon-color-hover);
    --mds-button-color-text: var(--mds-button-color-text-hover);
    --mds-button-color-background: var(--mds-button-color-background-hover);
    --mds-button-color-border: var(--mds-button-color-border-hover);
  }

.mds-button-admin.focus-visible,
  .mds-button-admin:focus-visible {
    outline: none;
    box-shadow: var(--elevation-control-focus);
  }

.mds-button-admin.mds-button-loading,
  .mds-button-admin:disabled,
  .mds-button-admin[disabled] {
    --mds-button-icon-color: var(--mds-button-icon-color-disabled);
    --mds-button-icon-color-hover: var(--mds-button-icon-color-disabled);
    --mds-button-color-text: var(--mds-button-color-text-disabled);
    --mds-button-color-text-hover: var(--mds-button-color-text-disabled);
    --mds-button-color-background: var(--mds-button-color-background-disabled);
    --mds-button-color-background-hover: var(
      --mds-button-color-background-disabled
    );
    --mds-button-color-border: var(--mds-button-color-border-disabled);
    --mds-button-color-border-hover: var(--mds-button-color-border-disabled);

    cursor: not-allowed
  }

.mds-button-admin.mds-button-loading:not(button), .mds-button-admin:disabled:not(button), .mds-button-admin[disabled]:not(button) {
      pointer-events: none;
    }
`;y(B,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/button"}});const ne=(0,x.forwardRef)(({admin:Z=!1,analytics:ce,as:O,block:ue=!1,children:D,className:ee,destructive:ie=!1,disabled:ye,icon:be,kind:j="primary",loading:w=!1,margin:W,onClick:oe,rightIcon:ve,size:Se="md",...Ae},Ie)=>{const We=O??"button";(0,r.O)({prop:j,propValues:["default"],message:'The `kind="default"` prop has been deprecated and will render as a `primary`.'});const Le=S({admin:Z,block:ue,children:D,className:ee,destructive:ie,icon:be,kind:j,loading:w,margin:W,rightIcon:ve,size:Se}),Ke=Q({analytics:ce,disabled:ye,onClick:oe});return l().createElement(d.V.Provider,{value:{weight:"bold",size:16,color:"var(--mds-button-icon-color)"}},(0,x.createElement)(We,{type:We==="button"?"button":void 0,...Ae,"aria-disabled":w||ye,className:Le,disabled:w||ye,onClick:Ke,ref:Ie},l().createElement(l().Fragment,null,l().createElement(h,{icon:be,loading:w}),D,ve)))});var M=`
  .mds-button.mds-button-floating {
    --mds-button-floating-transition: all 0.08s ease-in-out;
    --mds-button-floating-icon-size: 16px;
    --mds-button-border-radius: 60px;
    --mds-button-floating-height: 34px;
    --mds-button-floating-width: 34px;
    --interact-icon-weak-default: var(--mds-button-floating-icon-fill);
    --mds-button-floating-icon-fill: var(--interact-icon-default);

    position: absolute;
    right: 24px;

    height: var(--mds-button-floating-height);

    box-shadow: var(--elevation-floating-default);

    transition: var(--mds-button-floating-transition)
  }
.mds-button.mds-button-floating.mds-button-floating-position-top {
      top: 24px;
    }
.mds-button.mds-button-floating.mds-button-floating-position-bottom {
      bottom: 24px;
    }
.mds-button.mds-button-floating > svg.mds-general-icon {
      width: var(--mds-button-floating-icon-size);
      transition: var(--mds-button-floating-transition);
    }
.mds-button.mds-button-floating.mds-button-icon-only {
      --mds-button-padding-vertical: 7px;
      --mds-button-padding-horizontal: 7px;
      --mds-button-floating-icon-size: 20px;

      width: var(--mds-button-floating-width);
      height: var(--mds-button-floating-height)
    }
.mds-button.mds-button-floating.mds-button-icon-only.mds-button-size-sm {
        --mds-button-floating-icon-size: 16px;
      }
.mds-button.mds-button-floating.mds-button-size-sm {
      --mds-button-padding-vertical: 5px;
      --mds-button-padding-horizontal: 8px;
      --mds-button-floating-icon-size: 14px;
      --mds-button-floating-height: 28px;
    }
.mds-button.mds-button-floating:hover,
    .mds-button.mds-button-floating.focus-visible,
    .mds-button.mds-button-floating:focus-visible {
      --mds-button-floating-icon-fill: var(--interact-icon-hover);
      --mds-button-color-background: var(--mds-button-color-background-hover);
      --mds-button-color-text: var(--mds-button-color-text-hover);
    }
.mds-button.mds-button-floating:disabled {
      --mds-button-floating-icon-fill: var(--interact-icon-disabled);
    }
`;y(M,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/button"}});const $=(0,x.forwardRef)(({children:Z,className:ce,icon:O,iconOnly:ue=!1,position:D="top",size:ee,...ie},ye)=>{const[be,j]=(0,x.useState)(!1),w=(0,I.U)("mds-button-floating",{[`mds-button-floating-position-${D}`]:D},ce);return l().createElement(ne,{className:w,icon:O,kind:"secondary",onBlur:()=>j(!1),onFocus:()=>j(!0),onMouseOut:()=>j(!1),onMouseOver:()=>j(!0),ref:ye,size:ee,...ie},(!ue||be)&&Z)});$.displayName="Button.Floating";var ae=`.mds-button-group {
  display: flex;
  align-items: center

  /**
   * We set the regular gaps between butons here:
   * - --size-xs for medium buttons
   * - --size-md for medium tertiary buttons
   * - --size-2xs for small buttons
   * - --size-xs for small tertiary button
   */
}
.mds-button-group .mds-button:not(:first-child) {
    margin-left: 8px
  }
.mds-button-group .mds-button.mds-button-size-sm:not(:first-child) {
      margin-left: 4px;
    }
.mds-button-group .mds-button.mds-button-kind-tertiary:not(:first-child) {
      margin-left: 16px
    }
.mds-button-group .mds-button.mds-button-kind-tertiary.mds-button-size-sm:not(:first-child) {
        margin-left: 8px;
      }

/* Here we ensure that buttons neighbouring tertiary buttons have the "special" tertiary spacing */
.mds-button-group .mds-button-kind-tertiary + .mds-button-kind-primary,
    .mds-button-group .mds-button-kind-tertiary + .mds-button-kind-secondary {
      margin-left: 16px
    }
.mds-button-group .mds-button-kind-tertiary + .mds-button-kind-primary.mds-button-size-sm, .mds-button-group .mds-button-kind-tertiary + .mds-button-kind-secondary.mds-button-size-sm {
        margin-left: 8px;
      }
`;y(ae,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/button"}});var J=Object.defineProperty,xe=(Z,ce)=>J(Z,"name",{value:ce,configurable:!0});const q=xe(({as:Z,children:ce,className:O,...ue})=>{const D=Z??"div",ee=(0,I.U)("mds-button-group",O);return l().createElement(l().Fragment,null,(0,x.createElement)(D,{...ue,className:ee},ce))},"Group");q.displayName="Button.Group";const le={Group:q,Floating:$},te=(0,i.E)(ne,le)},4235:F=>{function P(t,i,d){switch(d.length){case 0:return t.call(i);case 1:return t.call(i,d[0]);case 2:return t.call(i,d[0],d[1]);case 3:return t.call(i,d[0],d[1],d[2])}return t.apply(i,d)}F.exports=P},4238:(F,P,t)=>{"use strict";t.d(P,{P:()=>ws});var i=t(7545),d=t(2776),r=t(3706),x=function(e){return{isEnabled:function(n){return e.some(function(a){return!!n[a]})}}},l={measureLayout:x(["layout","layoutId","drag"]),animation:x(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:x(["exit"]),drag:x(["drag","dragControls"]),focus:x(["whileFocus"]),hover:x(["whileHover","onHoverStart","onHoverEnd"]),tap:x(["whileTap","onTap","onTapStart","onTapCancel"]),pan:x(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:x(["whileInView","onViewportEnter","onViewportLeave"])};function p(e){for(var n in e)e[n]!==null&&(n==="projectionNodeConstructor"?l.projectionNodeConstructor=e[n]:l[n].Component=e[n])}var s=function(){},f=function(){},z=(0,d.createContext)({strict:!1}),N=Object.keys(l),h=N.length;function A(e,n,a){var o=[],c=(0,d.useContext)(z);if(!n)return null;r._!=="production"&&a&&c.strict&&f(!1,"You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");for(var C=0;C<h;C++){var v=N[C],m=l[v],V=m.isEnabled,H=m.Component;V(e)&&H&&o.push(d.createElement(H,(0,i.Cl)({key:v},e,{visualElement:n})))}return o}var I=(0,d.createContext)({transformPagePoint:function(e){return e},isStatic:!1,reducedMotion:"never"}),b=(0,d.createContext)({});function u(){return(0,d.useContext)(b).visualElement}var S=t(8331),E=t(7004),L=t(9772),T={current:null},Q=!1;function G(){if(Q=!0,!!L.B)if(window.matchMedia){var e=window.matchMedia("(prefers-reduced-motion)"),n=function(){return T.current=e.matches};e.addListener(n),n()}else T.current=!1}function se(){!Q&&G();var e=(0,i.zs)((0,d.useState)(T.current),1),n=e[0];return n}function U(){var e=se(),n=(0,d.useContext)(I).reducedMotion;return n==="never"?!1:n==="always"?!0:e}function y(e,n,a,o){var c=(0,d.useContext)(z),C=u(),v=(0,d.useContext)(S.t),m=U(),V=(0,d.useRef)(void 0);o||(o=c.renderer),!V.current&&o&&(V.current=o(e,{visualState:n,parent:C,props:a,presenceId:v?.id,blockInitialAnimation:v?.initial===!1,shouldReduceMotion:m}));var H=V.current;return(0,E.E)(function(){H?.syncRender()}),(0,d.useEffect)(function(){var de;(de=H?.animationState)===null||de===void 0||de.animateChanges()}),(0,E.E)(function(){return function(){return H?.notifyUnmount()}},[]),H}function B(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function ne(e,n,a){return(0,d.useCallback)(function(o){var c;o&&((c=e.mount)===null||c===void 0||c.call(e,o)),n&&(o?n.mount(o):n.unmount()),a&&(typeof a=="function"?a(o):B(a)&&(a.current=o))},[n])}function M(e){return Array.isArray(e)}function $(e){return typeof e=="string"||M(e)}function ae(e){var n={};return e.forEachValue(function(a,o){return n[o]=a.get()}),n}function J(e){var n={};return e.forEachValue(function(a,o){return n[o]=a.getVelocity()}),n}function xe(e,n,a,o,c){var C;return o===void 0&&(o={}),c===void 0&&(c={}),typeof n=="function"&&(n=n(a??e.custom,o,c)),typeof n=="string"&&(n=(C=e.variants)===null||C===void 0?void 0:C[n]),typeof n=="function"&&(n=n(a??e.custom,o,c)),n}function q(e,n,a){var o=e.getProps();return xe(o,n,a??o.custom,ae(e),J(e))}function le(e){var n;return typeof((n=e.animate)===null||n===void 0?void 0:n.start)=="function"||$(e.initial)||$(e.animate)||$(e.whileHover)||$(e.whileDrag)||$(e.whileTap)||$(e.whileFocus)||$(e.exit)}function te(e){return!!(le(e)||e.variants)}function Z(e,n){if(le(e)){var a=e.initial,o=e.animate;return{initial:a===!1||$(a)?a:void 0,animate:$(o)?o:void 0}}return e.inherit!==!1?n:{}}function ce(e){var n=Z(e,(0,d.useContext)(b)),a=n.initial,o=n.animate;return(0,d.useMemo)(function(){return{initial:a,animate:o}},[O(a),O(o)])}function O(e){return Array.isArray(e)?e.join(" "):e}var ue=t(7157),D={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ee=1;function ie(){return(0,ue.M)(function(){if(D.hasEverUpdated)return ee++})}var ye=t(1837),be=(0,d.createContext)({});function j(e,n,a,o){var c,C=n.layoutId,v=n.layout,m=n.drag,V=n.dragConstraints,H=n.layoutScroll,de=(0,d.useContext)(be);!o||!a||a?.projection||(a.projection=new o(e,a.getLatestValues(),(c=a.parent)===null||c===void 0?void 0:c.projection),a.projection.setOptions({layoutId:C,layout:v,alwaysMeasureLayout:!!m||V&&B(V),visualElement:a,scheduleRender:function(){return a.scheduleRender()},animationType:typeof v=="string"?v:"both",initialPromotionConfig:de,layoutScroll:H}))}var w=function(e){(0,i.C6)(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.getSnapshotBeforeUpdate=function(){return this.updateProps(),null},n.prototype.componentDidUpdate=function(){},n.prototype.updateProps=function(){var a=this.props,o=a.visualElement,c=a.props;o&&o.setProps(c)},n.prototype.render=function(){return this.props.children},n}(d.Component);function W(e){var n=e.preloadedFeatures,a=e.createVisualElement,o=e.projectionNodeConstructor,c=e.useRender,C=e.useVisualState,v=e.Component;n&&p(n);function m(V,H){var de=oe(V);V=(0,i.Cl)((0,i.Cl)({},V),{layoutId:de});var pe=(0,d.useContext)(I),ke=null,_e=ce(V),Te=pe.isStatic?void 0:ie(),Ne=C(V,pe.isStatic);return!pe.isStatic&&L.B&&(_e.visualElement=y(v,Ne,(0,i.Cl)((0,i.Cl)({},pe),V),a),j(Te,V,_e.visualElement,o||l.projectionNodeConstructor),ke=A(V,_e.visualElement,n)),d.createElement(w,{visualElement:_e.visualElement,props:(0,i.Cl)((0,i.Cl)({},pe),V)},ke,d.createElement(b.Provider,{value:_e},c(v,V,Te,ne(Ne,_e.visualElement,H),Ne,pe.isStatic,_e.visualElement)))}return(0,d.forwardRef)(m)}function oe(e){var n,a=e.layoutId,o=(n=(0,d.useContext)(ye.L))===null||n===void 0?void 0:n.id;return o&&a!==void 0?o+"-"+a:a}function ve(e){function n(o,c){return c===void 0&&(c={}),W(e(o,c))}if(typeof Proxy>"u")return n;var a=new Map;return new Proxy(n,{get:function(o,c){return a.has(c)||a.set(c,n(c)),a.get(c)}})}var Se=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","svg","switch","symbol","text","tspan","use","view"];function Ae(e){return typeof e!="string"||e.includes("-")?!1:!!(Se.indexOf(e)>-1||/[A-Z]/.test(e))}var Ie={};function We(e){Object.assign(Ie,e)}var Le=["","X","Y","Z"],Ke=["translate","scale","rotate","skew"],Ze=["transformPerspective","x","y","z"];Ke.forEach(function(e){return Le.forEach(function(n){return Ze.push(e+n)})});function ln(e,n){return Ze.indexOf(e)-Ze.indexOf(n)}var Rn=new Set(Ze);function un(e){return Rn.has(e)}var dt=new Set(["originX","originY","originZ"]);function In(e){return dt.has(e)}function Dn(e,n){var a=n.layout,o=n.layoutId;return un(e)||In(e)||(a||o!==void 0)&&(!!Ie[e]||e==="opacity")}var yn=function(e){return!!(e!==null&&typeof e=="object"&&e.getVelocity)},Cn={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"};function Ct(e,n,a,o){var c=e.transform,C=e.transformKeys,v=n.enableHardwareAcceleration,m=v===void 0?!0:v,V=n.allowTransformNone,H=V===void 0?!0:V,de="";C.sort(ln);for(var pe=!1,ke=C.length,_e=0;_e<ke;_e++){var Te=C[_e];de+="".concat(Cn[Te]||Te,"(").concat(c[Te],") "),Te==="z"&&(pe=!0)}return!pe&&m?de+="translateZ(0)":de=de.trim(),o?de=o(c,a?"":de):H&&a&&(de="none"),de}function mt(e){var n=e.originX,a=n===void 0?"50%":n,o=e.originY,c=o===void 0?"50%":o,C=e.originZ,v=C===void 0?0:C;return"".concat(a," ").concat(c," ").concat(v)}function ht(e){return e.startsWith("--")}var st=function(e,n){return n&&typeof e=="number"?n.transform(e):e};const At=(e,n)=>a=>Math.max(Math.min(a,n),e),St=e=>e%1?Number(e.toFixed(5)):e,Pt=/(-)?([\d]*\.?[\d])+/g,kt=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,Mt=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function Ht(e){return typeof e=="string"}const $t=e=>({test:n=>Ht(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),Bt=$t("deg"),dn=$t("%"),Ce=$t("px"),en=$t("vh"),Un=$t("vw"),Ve=Object.assign(Object.assign({},dn),{parse:e=>dn.parse(e)/100,transform:e=>dn.transform(e*100)}),gn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Pn=Object.assign(Object.assign({},gn),{transform:At(0,1)}),wt=Object.assign(Object.assign({},gn),{default:1});var ft=(0,i.Cl)((0,i.Cl)({},gn),{transform:Math.round}),Kt={borderWidth:Ce,borderTopWidth:Ce,borderRightWidth:Ce,borderBottomWidth:Ce,borderLeftWidth:Ce,borderRadius:Ce,radius:Ce,borderTopLeftRadius:Ce,borderTopRightRadius:Ce,borderBottomRightRadius:Ce,borderBottomLeftRadius:Ce,width:Ce,maxWidth:Ce,height:Ce,maxHeight:Ce,size:Ce,top:Ce,right:Ce,bottom:Ce,left:Ce,padding:Ce,paddingTop:Ce,paddingRight:Ce,paddingBottom:Ce,paddingLeft:Ce,margin:Ce,marginTop:Ce,marginRight:Ce,marginBottom:Ce,marginLeft:Ce,rotate:Bt,rotateX:Bt,rotateY:Bt,rotateZ:Bt,scale:wt,scaleX:wt,scaleY:wt,scaleZ:wt,skew:Bt,skewX:Bt,skewY:Bt,distance:Ce,translateX:Ce,translateY:Ce,translateZ:Ce,x:Ce,y:Ce,z:Ce,perspective:Ce,transformPerspective:Ce,opacity:Pn,originX:Ve,originY:Ve,originZ:Ce,zIndex:ft,fillOpacity:Pn,strokeOpacity:Pn,numOctaves:ft};function ua(e,n,a,o){var c,C=e.style,v=e.vars,m=e.transform,V=e.transformKeys,H=e.transformOrigin;V.length=0;var de=!1,pe=!1,ke=!0;for(var _e in n){var Te=n[_e];if(ht(_e)){v[_e]=Te;continue}var Ne=Kt[_e],nn=st(Te,Ne);if(un(_e)){if(de=!0,m[_e]=nn,V.push(_e),!ke)continue;Te!==((c=Ne.default)!==null&&c!==void 0?c:0)&&(ke=!1)}else In(_e)?(H[_e]=nn,pe=!0):C[_e]=nn}de?C.transform=Ct(e,a,ke,o):o?C.transform=o({},""):!n.transform&&C.transform&&(C.transform="none"),pe&&(C.transformOrigin=mt(H))}var Sa=function(){return{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}};function Ya(e,n,a){for(var o in n)!yn(n[o])&&!Dn(o,a)&&(e[o]=n[o])}function Na(e,n,a){var o=e.transformTemplate;return(0,d.useMemo)(function(){var c=Sa();ua(c,n,{enableHardwareAcceleration:!a},o);var C=c.vars,v=c.style;return(0,i.Cl)((0,i.Cl)({},C),v)},[n])}function gt(e,n,a){var o=e.style||{},c={};return Ya(c,o,e),Object.assign(c,Na(e,n,a)),e.transformValues&&(c=e.transformValues(c)),c}function Jt(e,n,a){var o={},c=gt(e,n,a);return e.drag&&e.dragListener!==!1&&(o.draggable=!1,c.userSelect=c.WebkitUserSelect=c.WebkitTouchCallout="none",c.touchAction=e.drag===!0?"none":"pan-".concat(e.drag==="x"?"y":"x")),o.style=c,o}var Zt=new Set(["initial","animate","exit","style","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","whileDrag","onPan","onPanStart","onPanEnd","onPanSessionStart","onTap","onTapStart","onTapCancel","onHoverStart","onHoverEnd","whileFocus","whileTap","whileHover","whileInView","onViewportEnter","onViewportLeave","viewport","layoutScroll"]);function ra(e){return Zt.has(e)}var Xt=function(e){return!ra(e)};function ia(e){e&&(Xt=function(n){return n.startsWith("on")?!ra(n):e(n)})}try{ia(require("@emotion/is-prop-valid").default)}catch{}function ja(e,n,a){var o={};for(var c in e)(Xt(c)||a===!0&&ra(c)||!n&&!ra(c)||e.draggable&&c.startsWith("onDrag"))&&(o[c]=e[c]);return o}function oa(e,n,a){return typeof e=="string"?e:Ce.transform(n+a*e)}function Dt(e,n,a){var o=oa(n,e.x,e.width),c=oa(a,e.y,e.height);return"".concat(o," ").concat(c)}var da={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ta={offset:"strokeDashoffset",array:"strokeDasharray"};function Pa(e,n,a,o,c){a===void 0&&(a=1),o===void 0&&(o=0),c===void 0&&(c=!0),e.pathLength=1;var C=c?da:Ta;e[C.offset]=Ce.transform(-o);var v=Ce.transform(n),m=Ce.transform(a);e[C.array]="".concat(v," ").concat(m)}function qt(e,n,a,o){var c=n.attrX,C=n.attrY,v=n.originX,m=n.originY,V=n.pathLength,H=n.pathSpacing,de=H===void 0?1:H,pe=n.pathOffset,ke=pe===void 0?0:pe,_e=(0,i.Tt)(n,["attrX","attrY","originX","originY","pathLength","pathSpacing","pathOffset"]);ua(e,_e,a,o),e.attrs=e.style,e.style={};var Te=e.attrs,Ne=e.style,nn=e.dimensions;Te.transform&&(nn&&(Ne.transform=Te.transform),delete Te.transform),nn&&(v!==void 0||m!==void 0||Ne.transform)&&(Ne.transformOrigin=Dt(nn,v!==void 0?v:.5,m!==void 0?m:.5)),c!==void 0&&(Te.x=c),C!==void 0&&(Te.y=C),V!==void 0&&Pa(Te,V,de,ke,!1)}var ea=function(){return(0,i.Cl)((0,i.Cl)({},Sa()),{attrs:{}})};function Fa(e,n){var a=(0,d.useMemo)(function(){var c=ea();return qt(c,n,{enableHardwareAcceleration:!1},e.transformTemplate),(0,i.Cl)((0,i.Cl)({},c.attrs),{style:(0,i.Cl)({},c.style)})},[n]);if(e.style){var o={};Ya(o,e.style,e),a.style=(0,i.Cl)((0,i.Cl)({},o),a.style)}return a}function Ba(e){e===void 0&&(e=!1);var n=function(a,o,c,C,v,m){var V=v.latestValues,H=Ae(a)?Fa:Jt,de=H(o,V,m),pe=ja(o,typeof a=="string",e),ke=(0,i.Cl)((0,i.Cl)((0,i.Cl)({},pe),de),{ref:C});return c&&(ke["data-projection-id"]=c),(0,d.createElement)(a,ke)};return n}var ga=/([a-z])([A-Z])/g,Ra="$1-$2",va=function(e){return e.replace(ga,Ra).toLowerCase()};function ca(e,n,a,o){var c=n.style,C=n.vars;Object.assign(e.style,c,o&&o.getProjectionStyles(a));for(var v in C)e.style.setProperty(v,C[v])}var ba=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength"]);function sa(e,n,a,o){ca(e,n,void 0,o);for(var c in n.attrs)e.setAttribute(ba.has(c)?c:va(c),n.attrs[c])}function Oa(e){var n=e.style,a={};for(var o in n)(yn(n[o])||Dn(o,e))&&(a[o]=n[o]);return a}function fa(e){var n=Oa(e);for(var a in e)if(yn(e[a])){var o=a==="x"||a==="y"?"attr"+a.toUpperCase():a;n[o]=e[a]}return n}function na(e){return typeof e=="object"&&typeof e.start=="function"}var ma=function(e){return Array.isArray(e)},ir=function(e){return!!(e&&typeof e=="object"&&e.mix&&e.toValue)},pa=function(e){return ma(e)?e[e.length-1]||0:e};function ha(e){var n=yn(e)?e.get():e;return ir(n)?n.toValue():n}function or(e,n,a,o){var c=e.scrapeMotionValuesFromProps,C=e.createRenderState,v=e.onMount,m={latestValues:vr(n,a,o,c),renderState:C()};return v&&(m.mount=function(V){return v(n,V,m)}),m}var Xa=function(e){return function(n,a){var o=(0,d.useContext)(b),c=(0,d.useContext)(S.t);return a?or(e,n,o,c):(0,ue.M)(function(){return or(e,n,o,c)})}};function vr(e,n,a,o){var c={},C=a?.initial===!1,v=o(e);for(var m in v)c[m]=ha(v[m]);var V=e.initial,H=e.animate,de=le(e),pe=te(e);n&&pe&&!de&&e.inherit!==!1&&(V??(V=n.initial),H??(H=n.animate));var ke=C||V===!1,_e=ke?H:V;if(_e&&typeof _e!="boolean"&&!na(_e)){var Te=Array.isArray(_e)?_e:[_e];Te.forEach(function(Ne){var nn=xe(e,Ne);if(nn){var sn=nn.transitionEnd;nn.transition;var mn=(0,i.Tt)(nn,["transitionEnd","transition"]);for(var fn in mn){var En=mn[fn];if(Array.isArray(En)){var An=ke?En.length-1:0;En=En[An]}En!==null&&(c[fn]=En)}for(var fn in sn)c[fn]=sn[fn]}})}return c}var br={useVisualState:Xa({scrapeMotionValuesFromProps:fa,createRenderState:ea,onMount:function(e,n,a){var o=a.renderState,c=a.latestValues;try{o.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{o.dimensions={x:0,y:0,width:0,height:0}}qt(o,c,{enableHardwareAcceleration:!1},e.transformTemplate),sa(n,o)}})},Va={useVisualState:Xa({scrapeMotionValuesFromProps:Oa,createRenderState:Sa})};function Ua(e,n,a,o,c){var C=n.forwardMotionProps,v=C===void 0?!1:C,m=Ae(e)?br:Va;return(0,i.Cl)((0,i.Cl)({},m),{preloadedFeatures:a,useRender:Ba(v),createVisualElement:o,projectionNodeConstructor:c,Component:e})}var yt;(function(e){e.Animate="animate",e.Hover="whileHover",e.Tap="whileTap",e.Drag="whileDrag",e.Focus="whileFocus",e.InView="whileInView",e.Exit="exit"})(yt||(yt={}));function Ia(e,n,a,o){return o===void 0&&(o={passive:!0}),e.addEventListener(n,a,o),function(){return e.removeEventListener(n,a)}}function wa(e,n,a,o){(0,d.useEffect)(function(){var c=e.current;if(a&&c)return Ia(c,n,a,o)},[e,n,a,o])}function Gt(e){var n=e.whileFocus,a=e.visualElement,o=function(){var C;(C=a.animationState)===null||C===void 0||C.setActive(yt.Focus,!0)},c=function(){var C;(C=a.animationState)===null||C===void 0||C.setActive(yt.Focus,!1)};wa(a,"focus",n?o:void 0),wa(a,"blur",n?c:void 0)}function Ja(e){return typeof PointerEvent<"u"&&e instanceof PointerEvent?e.pointerType==="mouse":e instanceof MouseEvent}function xa(e){var n=!!e.touches;return n}function Qa(e){return function(n){var a=n instanceof MouseEvent,o=!a||a&&n.button===0;o&&e(n)}}var ka={pageX:0,pageY:0};function qa(e,n){n===void 0&&(n="page");var a=e.touches[0]||e.changedTouches[0],o=a||ka;return{x:o[n+"X"],y:o[n+"Y"]}}function dr(e,n){return n===void 0&&(n="page"),{x:e[n+"X"],y:e[n+"Y"]}}function Ma(e,n){return n===void 0&&(n="page"),{point:xa(e)?qa(e,n):dr(e,n)}}var Ha=function(e,n){n===void 0&&(n=!1);var a=function(o){return e(o,Ma(o))};return n?Qa(a):a},cr=function(){return L.B&&window.onpointerdown===null},er=function(){return L.B&&window.ontouchstart===null},Ee=function(){return L.B&&window.onmousedown===null},Re={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},Xe={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function xn(e){return cr()?e:er()?Xe[e]:Ee()?Re[e]:e}function Tn(e,n,a,o){return Ia(e,xn(n),Ha(a,n==="pointerdown"),o)}function wn(e,n,a,o){return wa(e,xn(n),a&&Ha(a,n==="pointerdown"),o)}function Sn(e){var n=null;return function(){var a=function(){n=null};return n===null?(n=e,a):!1}}var et=Sn("dragHorizontal"),Jn=Sn("dragVertical");function k(e){var n=!1;if(e==="y")n=Jn();else if(e==="x")n=et();else{var a=et(),o=Jn();a&&o?n=function(){a(),o()}:(a&&a(),o&&o())}return n}function K(){var e=k(!0);return e?(e(),!1):!0}function re(e,n,a){return function(o,c){var C;!Ja(o)||K()||((C=e.animationState)===null||C===void 0||C.setActive(yt.Hover,n),a?.(o,c))}}function Pe(e){var n=e.onHoverStart,a=e.onHoverEnd,o=e.whileHover,c=e.visualElement;wn(c,"pointerenter",n||o?re(c,!0,n):void 0,{passive:!n}),wn(c,"pointerleave",a||o?re(c,!1,a):void 0,{passive:!a})}var Be=function(e,n){return n?e===n?!0:Be(e,n.parentElement):!1},Fe=t(6223);const Je=(e,n)=>a=>n(e(a)),rn=(...e)=>e.reduce(Je);function pn(e){var n=e.onTap,a=e.onTapStart,o=e.onTapCancel,c=e.whileTap,C=e.visualElement,v=n||a||o||c,m=(0,d.useRef)(!1),V=(0,d.useRef)(null),H={passive:!(a||n||o||Te)};function de(){var Ne;(Ne=V.current)===null||Ne===void 0||Ne.call(V),V.current=null}function pe(){var Ne;return de(),m.current=!1,(Ne=C.animationState)===null||Ne===void 0||Ne.setActive(yt.Tap,!1),!K()}function ke(Ne,nn){pe()&&(Be(C.getInstance(),Ne.target)?n?.(Ne,nn):o?.(Ne,nn))}function _e(Ne,nn){pe()&&o?.(Ne,nn)}function Te(Ne,nn){var sn;de(),!m.current&&(m.current=!0,V.current=rn(Tn(window,"pointerup",ke,H),Tn(window,"pointercancel",_e,H)),(sn=C.animationState)===null||sn===void 0||sn.setActive(yt.Tap,!0),a?.(Ne,nn))}wn(C,"pointerdown",v?Te:void 0,H),(0,Fe.l)(de)}var Qn=new Set;function lt(e,n,a){e||Qn.has(n)||(console.warn(n),a&&console.warn(a),Qn.add(n))}var me=new WeakMap,ge=new WeakMap,hn=function(e){var n;(n=me.get(e.target))===null||n===void 0||n(e)},vn=function(e){e.forEach(hn)};function Wn(e){var n=e.root,a=(0,i.Tt)(e,["root"]),o=n||document;ge.has(o)||ge.set(o,{});var c=ge.get(o),C=JSON.stringify(a);return c[C]||(c[C]=new IntersectionObserver(vn,(0,i.Cl)({root:n},a))),c[C]}function Hn(e,n,a){var o=Wn(n);return me.set(e,a),o.observe(e),function(){me.delete(e),o.unobserve(e)}}function Mn(e){var n=e.visualElement,a=e.whileInView,o=e.onViewportEnter,c=e.onViewportLeave,C=e.viewport,v=C===void 0?{}:C,m=(0,d.useRef)({hasEnteredView:!1,isInView:!1}),V=!!(a||o||c);v.once&&m.current.hasEnteredView&&(V=!1);var H=typeof IntersectionObserver>"u"?Fn:Zn;H(V,m.current,n,v)}var Yn={some:0,all:1};function Zn(e,n,a,o){var c=o.root,C=o.margin,v=o.amount,m=v===void 0?"some":v,V=o.once;(0,d.useEffect)(function(){if(e){var H={root:c?.current,rootMargin:C,threshold:typeof m=="number"?m:Yn[m]},de=function(pe){var ke,_e=pe.isIntersecting;if(n.isInView!==_e&&(n.isInView=_e,!(V&&!_e&&n.hasEnteredView))){_e&&(n.hasEnteredView=!0),(ke=a.animationState)===null||ke===void 0||ke.setActive(yt.InView,_e);var Te=a.getProps(),Ne=_e?Te.onViewportEnter:Te.onViewportLeave;Ne?.(pe)}};return Hn(a.getInstance(),H,de)}},[e,c,C,m])}function Fn(e,n,a,o){var c=o.fallback,C=c===void 0?!0:c;(0,d.useEffect)(function(){!e||!C||(r._!=="production"&&lt(!1,"IntersectionObserver not available on this device. whileInView animations will trigger on mount."),requestAnimationFrame(function(){var v;n.hasEnteredView=!0;var m=a.getProps().onViewportEnter;m?.(null),(v=a.animationState)===null||v===void 0||v.setActive(yt.InView,!0)}))},[e])}var xt=function(e){return function(n){return e(n),null}},Vt={inView:xt(Mn),tap:xt(pn),focus:xt(Gt),hover:xt(Pe)},_=t(6514);function g(){var e=(0,d.useContext)(S.t);if(e===null)return[!0,null];var n=e.isPresent,a=e.onExitComplete,o=e.register,c=(0,_.B)();(0,d.useEffect)(function(){return o(c)},[]);var C=function(){return a?.(c)};return!n&&a?[!1,C]:[!0]}function R(){return Y(useContext(PresenceContext))}function Y(e){return e===null?!0:e.isPresent}function fe(e,n){if(!Array.isArray(n))return!1;var a=n.length;if(a!==e.length)return!1;for(var o=0;o<a;o++)if(n[o]!==e[o])return!1;return!0}const he=(e,n,a)=>Math.min(Math.max(a,e),n),we=.001,ze=.01,Oe=10,De=.05,Ge=1;function je({duration:e=800,bounce:n=.25,velocity:a=0,mass:o=1}){let c,C;s(e<=Oe*1e3,"Spring duration must be 10 seconds or less");let v=1-n;v=he(De,Ge,v),e=he(ze,Oe,e/1e3),v<1?(c=H=>{const de=H*v,pe=de*e,ke=de-a,_e=Qe(H,v),Te=Math.exp(-pe);return we-ke/_e*Te},C=H=>{const pe=H*v*e,ke=pe*a+a,_e=Math.pow(v,2)*Math.pow(H,2)*e,Te=Math.exp(-pe),Ne=Qe(Math.pow(H,2),v);return(-c(H)+we>0?-1:1)*((ke-_e)*Te)/Ne}):(c=H=>{const de=Math.exp(-H*e),pe=(H-a)*e+1;return-we+de*pe},C=H=>{const de=Math.exp(-H*e),pe=(a-H)*(e*e);return de*pe});const m=5/e,V=Me(c,C,m);if(e=e*1e3,isNaN(V))return{stiffness:100,damping:10,duration:e};{const H=Math.pow(V,2)*o;return{stiffness:H,damping:v*2*Math.sqrt(o*H),duration:e}}}const $e=12;function Me(e,n,a){let o=a;for(let c=1;c<$e;c++)o=o-e(o)/n(o);return o}function Qe(e,n){return e*Math.sqrt(1-n*n)}const Ue=["duration","bounce"],zn=["stiffness","damping","mass"];function bn(e,n){return n.some(a=>e[a]!==void 0)}function an(e){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!bn(e,zn)&&bn(e,Ue)){const a=je(e);n=Object.assign(Object.assign(Object.assign({},n),a),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function nt(e){var{from:n=0,to:a=1,restSpeed:o=2,restDelta:c}=e,C=(0,i.Tt)(e,["from","to","restSpeed","restDelta"]);const v={done:!1,value:n};let{stiffness:m,damping:V,mass:H,velocity:de,duration:pe,isResolvedFromDuration:ke}=an(C),_e=cn,Te=cn;function Ne(){const nn=de?-(de/1e3):0,sn=a-n,mn=V/(2*Math.sqrt(m*H)),fn=Math.sqrt(m/H)/1e3;if(c===void 0&&(c=Math.min(Math.abs(a-n)/100,.4)),mn<1){const En=Qe(fn,mn);_e=An=>{const pt=Math.exp(-mn*fn*An);return a-pt*((nn+mn*fn*sn)/En*Math.sin(En*An)+sn*Math.cos(En*An))},Te=An=>{const pt=Math.exp(-mn*fn*An);return mn*fn*pt*(Math.sin(En*An)*(nn+mn*fn*sn)/En+sn*Math.cos(En*An))-pt*(Math.cos(En*An)*(nn+mn*fn*sn)-En*sn*Math.sin(En*An))}}else if(mn===1)_e=En=>a-Math.exp(-fn*En)*(sn+(nn+fn*sn)*En);else{const En=fn*Math.sqrt(mn*mn-1);_e=An=>{const pt=Math.exp(-mn*fn*An),Tt=Math.min(En*An,300);return a-pt*((nn+mn*fn*sn)*Math.sinh(Tt)+En*sn*Math.cosh(Tt))/En}}}return Ne(),{next:nn=>{const sn=_e(nn);if(ke)v.done=nn>=pe;else{const mn=Te(nn)*1e3,fn=Math.abs(mn)<=o,En=Math.abs(a-sn)<=c;v.done=fn&&En}return v.value=v.done?a:sn,v},flipTarget:()=>{de=-de,[n,a]=[a,n],Ne()}}}nt.needsInterpolation=(e,n)=>typeof e=="string"||typeof n=="string";const cn=e=>0,kn=(e,n,a)=>{const o=n-e;return o===0?1:(a-e)/o},qe=(e,n,a)=>-a*e+a*n+e,rt=(e,n)=>a=>!!(Ht(a)&&Mt.test(a)&&a.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(a,n)),Kn=(e,n,a)=>o=>{if(!Ht(o))return o;const[c,C,v,m]=o.match(Pt);return{[e]:parseFloat(c),[n]:parseFloat(C),[a]:parseFloat(v),alpha:m!==void 0?parseFloat(m):1}},Ln=At(0,255),On=Object.assign(Object.assign({},gn),{transform:e=>Math.round(Ln(e))}),Nn={test:rt("rgb","red"),parse:Kn("red","green","blue"),transform:({red:e,green:n,blue:a,alpha:o=1})=>"rgba("+On.transform(e)+", "+On.transform(n)+", "+On.transform(a)+", "+St(Pn.transform(o))+")"};function Ye(e){let n="",a="",o="",c="";return e.length>5?(n=e.substr(1,2),a=e.substr(3,2),o=e.substr(5,2),c=e.substr(7,2)):(n=e.substr(1,1),a=e.substr(2,1),o=e.substr(3,1),c=e.substr(4,1),n+=n,a+=a,o+=o,c+=c),{red:parseInt(n,16),green:parseInt(a,16),blue:parseInt(o,16),alpha:c?parseInt(c,16)/255:1}}const on={test:rt("#"),parse:Ye,transform:Nn.transform},He={test:rt("hsl","hue"),parse:Kn("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:a,alpha:o=1})=>"hsla("+Math.round(e)+", "+dn.transform(St(n))+", "+dn.transform(St(a))+", "+St(Pn.transform(o))+")"};function jn(e,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+(n-e)*6*a:a<1/2?n:a<2/3?e+(n-e)*(2/3-a)*6:e}function qn({hue:e,saturation:n,lightness:a,alpha:o}){e/=360,n/=100,a/=100;let c=0,C=0,v=0;if(!n)c=C=v=a;else{const m=a<.5?a*(1+n):a+n-a*n,V=2*a-m;c=jn(V,m,e+1/3),C=jn(V,m,e),v=jn(V,m,e-1/3)}return{red:Math.round(c*255),green:Math.round(C*255),blue:Math.round(v*255),alpha:o}}const ut=(e,n,a)=>{const o=e*e,c=n*n;return Math.sqrt(Math.max(0,a*(c-o)+o))},Xn=[on,Nn,He],zt=e=>Xn.find(n=>n.test(e)),Ut=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,it=(e,n)=>{let a=zt(e),o=zt(n);f(!!a,Ut(e)),f(!!o,Ut(n));let c=a.parse(e),C=o.parse(n);a===He&&(c=qn(c),a=Nn),o===He&&(C=qn(C),o=Nn);const v=Object.assign({},c);return m=>{for(const V in v)V!=="alpha"&&(v[V]=ut(c[V],C[V],m));return v.alpha=qe(c.alpha,C.alpha,m),a.transform(v)}},Bn={test:e=>Nn.test(e)||on.test(e)||He.test(e),parse:e=>Nn.test(e)?Nn.parse(e):He.test(e)?He.parse(e):on.parse(e),transform:e=>Ht(e)?e:e.hasOwnProperty("red")?Nn.transform(e):He.transform(e)},at="${c}",ct="${n}";function Nt(e){var n,a,o,c;return isNaN(e)&&Ht(e)&&((a=(n=e.match(Pt))===null||n===void 0?void 0:n.length)!==null&&a!==void 0?a:0)+((c=(o=e.match(kt))===null||o===void 0?void 0:o.length)!==null&&c!==void 0?c:0)>0}function Lt(e){typeof e=="number"&&(e=`${e}`);const n=[];let a=0;const o=e.match(kt);o&&(a=o.length,e=e.replace(kt,at),n.push(...o.map(Bn.parse)));const c=e.match(Pt);return c&&(e=e.replace(Pt,ct),n.push(...c.map(gn.parse))),{values:n,numColors:a,tokenised:e}}function $n(e){return Lt(e).values}function tt(e){const{values:n,numColors:a,tokenised:o}=Lt(e),c=n.length;return C=>{let v=o;for(let m=0;m<c;m++)v=v.replace(m<a?at:ct,m<a?Bn.transform(C[m]):St(C[m]));return v}}const ot=e=>typeof e=="number"?0:e;function Et(e){const n=$n(e);return tt(e)(n.map(ot))}const Ot={test:Nt,parse:$n,createTransformer:tt,getAnimatableNone:Et},Vn={x:0,y:0,z:0},Wt=e=>typeof e=="number";function ya(e,n){return Wt(e)?a=>qe(e,n,a):Bn.test(e)?it(e,n):sr(e,n)}const Yt=(e,n)=>{const a=[...e],o=a.length,c=e.map((C,v)=>ya(C,n[v]));return C=>{for(let v=0;v<o;v++)a[v]=c[v](C);return a}},_t=(e,n)=>{const a=Object.assign(Object.assign({},e),n),o={};for(const c in a)e[c]!==void 0&&n[c]!==void 0&&(o[c]=ya(e[c],n[c]));return c=>{for(const C in o)a[C]=o[C](c);return a}};function za(e){const n=Ot.parse(e),a=n.length;let o=0,c=0,C=0;for(let v=0;v<a;v++)o||typeof n[v]=="number"?o++:n[v].hue!==void 0?C++:c++;return{parsed:n,numNumbers:o,numRGB:c,numHSL:C}}const sr=(e,n)=>{const a=Ot.createTransformer(n),o=za(e),c=za(n);return o.numHSL===c.numHSL&&o.numRGB===c.numRGB&&o.numNumbers>=c.numNumbers?rn(Yt(o.parsed,c.parsed),a):(s(!0,`Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),v=>`${v>0?n:e}`)},Rr=(e,n)=>a=>qe(e,n,a);function Wo(e){if(typeof e=="number")return Rr;if(typeof e=="string")return Bn.test(e)?it:sr;if(Array.isArray(e))return Yt;if(typeof e=="object")return _t}function Ko(e,n,a){const o=[],c=a||Wo(e[0]),C=e.length-1;for(let v=0;v<C;v++){let m=c(e[v],e[v+1]);if(n){const V=Array.isArray(n)?n[v]:n;m=rn(V,m)}o.push(m)}return o}function Go([e,n],[a]){return o=>a(kn(e,n,o))}function Zo(e,n){const a=e.length,o=a-1;return c=>{let C=0,v=!1;if(c<=e[0]?v=!0:c>=e[o]&&(C=o-1,v=!0),!v){let V=1;for(;V<a&&!(e[V]>c||V===o);V++);C=V-1}const m=kn(e[C],e[C+1],c);return n[C](m)}}function Oi(e,n,{clamp:a=!0,ease:o,mixer:c}={}){const C=e.length;f(C===n.length,"Both input and output ranges must be the same length"),f(!o||!Array.isArray(o)||o.length===C-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[C-1]&&(e=[].concat(e),n=[].concat(n),e.reverse(),n.reverse());const v=Ko(n,o,c),m=C===2?Go(e,v):Zo(e,v);return a?V=>m(he(e[0],e[C-1],V)):m}const Or=e=>n=>1-e(1-n),Zr=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,Yo=e=>n=>Math.pow(n,e),Ii=e=>n=>n*n*((e+1)*n-e),Xo=e=>{const n=Ii(e);return a=>(a*=2)<1?.5*n(a):.5*(2-Math.pow(2,-10*(a-1)))},Mi=1.525,Jo=4/11,Qo=8/11,qo=9/10,Yr=e=>e,Xr=Yo(2),ed=Or(Xr),Ai=Zr(Xr),Di=e=>1-Math.sin(Math.acos(e)),Jr=Or(Di),nd=Zr(Jr),Qr=Ii(Mi),td=Or(Qr),ad=Zr(Qr),rd=Xo(Mi),id=4356/361,od=35442/1805,dd=16061/1805,Ir=e=>{if(e===1||e===0)return e;const n=e*e;return e<Jo?7.5625*n:e<Qo?9.075*n-9.9*e+3.4:e<qo?id*n-od*e+dd:10.8*e*e-20.52*e+10.72},cd=Or(Ir),sd=e=>e<.5?.5*(1-Ir(1-e*2)):.5*Ir(e*2-1)+.5;function fd(e,n){return e.map(()=>n||Ai).splice(0,e.length-1)}function ld(e){const n=e.length;return e.map((a,o)=>o!==0?o/(n-1):0)}function ud(e,n){return e.map(a=>a*n)}function Mr({from:e=0,to:n=1,ease:a,offset:o,duration:c=300}){const C={done:!1,value:e},v=Array.isArray(n)?n:[e,n],m=ud(o&&o.length===v.length?o:ld(v),c);function V(){return Oi(m,v,{ease:Array.isArray(a)?a:fd(v,a)})}let H=V();return{next:de=>(C.value=H(de),C.done=de>=c,C),flipTarget:()=>{v.reverse(),H=V()}}}function gd({velocity:e=0,from:n=0,power:a=.8,timeConstant:o=350,restDelta:c=.5,modifyTarget:C}){const v={done:!1,value:n};let m=a*e;const V=n+m,H=C===void 0?V:C(V);return H!==V&&(m=H-n),{next:de=>{const pe=-m*Math.exp(-de/o);return v.done=!(pe>c||pe<-c),v.value=v.done?H:H+pe,v},flipTarget:()=>{}}}const Li={keyframes:Mr,spring:nt,decay:gd};function vd(e){if(Array.isArray(e.to))return Mr;if(Li[e.type])return Li[e.type];const n=new Set(Object.keys(e));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?Mr:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?nt:Mr}var jt=t(4546);function Ni(e,n,a=0){return e-n-a}function bd(e,n,a=0,o=!0){return o?Ni(n+-e,n,a):n-(e-n)+a}function md(e,n,a,o){return o?e>=n+a:e<=-a}const pd=e=>{const n=({delta:a})=>e(a);return{start:()=>jt.Ay.update(n,!0),stop:()=>jt.eO.update(n)}};function ji(e){var n,a,{from:o,autoplay:c=!0,driver:C=pd,elapsed:v=0,repeat:m=0,repeatType:V="loop",repeatDelay:H=0,onPlay:de,onStop:pe,onComplete:ke,onRepeat:_e,onUpdate:Te}=e,Ne=(0,i.Tt)(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:nn}=Ne,sn,mn=0,fn=Ne.duration,En,An=!1,pt=!0,Tt;const It=vd(Ne);!((a=(n=It).needsInterpolation)===null||a===void 0)&&a.call(n,o,nn)&&(Tt=Oi([0,100],[o,nn],{clamp:!1}),o=0,nn=100);const bt=It(Object.assign(Object.assign({},Ne),{from:o,to:nn}));function Ft(){mn++,V==="reverse"?(pt=mn%2===0,v=bd(v,fn,H,pt)):(v=Ni(v,fn,H),V==="mirror"&&bt.flipTarget()),An=!1,_e&&_e()}function Aa(){sn.stop(),ke&&ke()}function ta(Da){if(pt||(Da=-Da),v+=Da,!An){const Za=bt.next(Math.max(0,v));En=Za.value,Tt&&(En=Tt(En)),An=pt?Za.done:v<=0}Te?.(En),An&&(mn===0&&(fn??(fn=v)),mn<m?md(v,fn,H,pt)&&Ft():Aa())}function Ca(){de?.(),sn=C(ta),sn.start()}return c&&Ca(),{stop:()=>{pe?.(),sn.stop()}}}function Fi(e,n){return n?e*(1e3/n):0}function hd({from:e=0,velocity:n=0,min:a,max:o,power:c=.8,timeConstant:C=750,bounceStiffness:v=500,bounceDamping:m=10,restDelta:V=1,modifyTarget:H,driver:de,onUpdate:pe,onComplete:ke,onStop:_e}){let Te;function Ne(fn){return a!==void 0&&fn<a||o!==void 0&&fn>o}function nn(fn){return a===void 0?o:o===void 0||Math.abs(a-fn)<Math.abs(o-fn)?a:o}function sn(fn){Te?.stop(),Te=ji(Object.assign(Object.assign({},fn),{driver:de,onUpdate:En=>{var An;pe?.(En),(An=fn.onUpdate)===null||An===void 0||An.call(fn,En)},onComplete:ke,onStop:_e}))}function mn(fn){sn(Object.assign({type:"spring",stiffness:v,damping:m,restDelta:V},fn))}if(Ne(e))mn({from:e,velocity:n,to:nn(e)});else{let fn=c*n+e;typeof H<"u"&&(fn=H(fn));const En=nn(fn),An=En===a?-1:1;let pt,Tt;const It=bt=>{pt=Tt,Tt=bt,n=Fi(bt-pt,(0,jt.KK)().delta),(An===1&&bt>En||An===-1&&bt<En)&&mn({from:bt,to:En,velocity:n})};sn({type:"decay",from:e,velocity:n,timeConstant:C,power:c,restDelta:V,modifyTarget:H,onUpdate:Ne(fn)?It:void 0})}return{stop:()=>Te?.stop()}}var Ar=function(e){return e*1e3};const Bi=(e,n)=>1-3*n+3*e,Vi=(e,n)=>3*n-6*e,Ui=e=>3*e,Dr=(e,n,a)=>((Bi(n,a)*e+Vi(n,a))*e+Ui(n))*e,Hi=(e,n,a)=>3*Bi(n,a)*e*e+2*Vi(n,a)*e+Ui(n),wd=1e-7,xd=10;function kd(e,n,a,o,c){let C,v,m=0;do v=n+(a-n)/2,C=Dr(v,o,c)-e,C>0?a=v:n=v;while(Math.abs(C)>wd&&++m<xd);return v}const yd=8,zd=.001;function Ed(e,n,a,o){for(let c=0;c<yd;++c){const C=Hi(n,a,o);if(C===0)return n;const v=Dr(n,a,o)-e;n-=v/C}return n}const Lr=11,Nr=1/(Lr-1);function _d(e,n,a,o){if(e===n&&a===o)return Yr;const c=new Float32Array(Lr);for(let v=0;v<Lr;++v)c[v]=Dr(v*Nr,e,a);function C(v){let m=0,V=1;const H=Lr-1;for(;V!==H&&c[V]<=v;++V)m+=Nr;--V;const de=(v-c[V])/(c[V+1]-c[V]),pe=m+de*Nr,ke=Hi(pe,e,a);return ke>=zd?Ed(v,pe,e,a):ke===0?pe:kd(v,m,m+Nr,e,a)}return v=>v===0||v===1?v:Dr(C(v),n,o)}var $i={linear:Yr,easeIn:Xr,easeInOut:Ai,easeOut:ed,circIn:Di,circInOut:nd,circOut:Jr,backIn:Qr,backInOut:ad,backOut:td,anticipate:rd,bounceIn:cd,bounceInOut:sd,bounceOut:Ir},Wi=function(e){if(Array.isArray(e)){f(e.length===4,"Cubic bezier arrays must contain four numerical values.");var n=(0,i.zs)(e,4),a=n[0],o=n[1],c=n[2],C=n[3];return _d(a,o,c,C)}else if(typeof e=="string")return f($i[e]!==void 0,"Invalid easing type '".concat(e,"'")),$i[e];return e},Cd=function(e){return Array.isArray(e)&&typeof e[0]!="number"},Ki=function(e,n){return e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&Ot.test(n)&&!n.startsWith("url("))},mr=function(){return{type:"spring",stiffness:500,damping:25,restSpeed:10}},jr=function(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}},qr=function(){return{type:"keyframes",ease:"linear",duration:.3}},Sd=function(e){return{type:"keyframes",duration:.8,values:e}},Gi={x:mr,y:mr,z:mr,rotate:mr,rotateX:mr,rotateY:mr,rotateZ:mr,scaleX:jr,scaleY:jr,scale:jr,opacity:qr,backgroundColor:qr,color:qr,default:jr},Td=function(e,n){var a;return ma(n)?a=Sd:a=Gi[e]||Gi.default,(0,i.Cl)({to:n},a(n))};const Pd=new Set(["brightness","contrast","saturate","opacity"]);function Rd(e){let[n,a]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[o]=a.match(Pt)||[];if(!o)return e;const c=a.replace(o,"");let C=Pd.has(n)?1:0;return o!==a&&(C*=100),n+"("+C+c+")"}const Od=/([a-z-]*)\(.*?\)/g,ei=Object.assign(Object.assign({},Ot),{getAnimatableNone:e=>{const n=e.match(Od);return n?n.map(Rd).join(" "):e}});var Id=(0,i.Cl)((0,i.Cl)({},Kt),{color:Bn,backgroundColor:Bn,outlineColor:Bn,fill:Bn,stroke:Bn,borderColor:Bn,borderTopColor:Bn,borderRightColor:Bn,borderBottomColor:Bn,borderLeftColor:Bn,filter:ei,WebkitFilter:ei}),ni=function(e){return Id[e]};function ti(e,n){var a,o=ni(e);return o!==ei&&(o=Ot),(a=o.getAnimatableNone)===null||a===void 0?void 0:a.call(o,n)}var Md={current:!1};function Ad(e){e.when,e.delay,e.delayChildren,e.staggerChildren,e.staggerDirection,e.repeat,e.repeatType,e.repeatDelay,e.from;var n=(0,i.Tt)(e,["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(n).length}var Zi=!1;function Dd(e){var n=e.ease,a=e.times,o=e.yoyo,c=e.flip,C=e.loop,v=(0,i.Tt)(e,["ease","times","yoyo","flip","loop"]),m=(0,i.Cl)({},v);return a&&(m.offset=a),v.duration&&(m.duration=Ar(v.duration)),v.repeatDelay&&(m.repeatDelay=Ar(v.repeatDelay)),n&&(m.ease=Cd(n)?n.map(Wi):Wi(n)),v.type==="tween"&&(m.type="keyframes"),(o||C||c)&&(s(!Zi,"yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."),Zi=!0,o?m.repeatType="reverse":C?m.repeatType="loop":c&&(m.repeatType="mirror"),m.repeat=C||o||c||v.repeat),v.type!=="spring"&&(m.type="keyframes"),m}function Ld(e,n){var a,o,c=ai(e,n)||{};return(o=(a=c.delay)!==null&&a!==void 0?a:e.delay)!==null&&o!==void 0?o:0}function Nd(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=(0,i.fX)([],(0,i.zs)(e.to),!1),e.to[0]=e.from),e}function jd(e,n,a){var o;return Array.isArray(n.to)&&((o=e.duration)!==null&&o!==void 0||(e.duration=.8)),Nd(n),Ad(e)||(e=(0,i.Cl)((0,i.Cl)({},e),Td(a,n.to))),(0,i.Cl)((0,i.Cl)({},n),Dd(e))}function Fd(e,n,a,o,c){var C,v=ai(o,e),m=(C=v.from)!==null&&C!==void 0?C:n.get(),V=Ki(e,a);m==="none"&&V&&typeof a=="string"?m=ti(e,a):Yi(m)&&typeof a=="string"?m=Xi(a):!Array.isArray(a)&&Yi(a)&&typeof m=="string"&&(a=Xi(m));var H=Ki(e,m);s(H===V,"You are trying to animate ".concat(e,' from "').concat(m,'" to "').concat(a,'". ').concat(m," is not an animatable value - to enable this animation set ").concat(m," to a value animatable to ").concat(a," via the `style` property."));function de(){var ke={from:m,to:a,velocity:n.getVelocity(),onComplete:c,onUpdate:function(_e){return n.set(_e)}};return v.type==="inertia"||v.type==="decay"?hd((0,i.Cl)((0,i.Cl)({},ke),v)):ji((0,i.Cl)((0,i.Cl)({},jd(v,ke,e)),{onUpdate:function(_e){var Te;ke.onUpdate(_e),(Te=v.onUpdate)===null||Te===void 0||Te.call(v,_e)},onComplete:function(){var _e;ke.onComplete(),(_e=v.onComplete)===null||_e===void 0||_e.call(v)}}))}function pe(){var ke,_e,Te=pa(a);return n.set(Te),c(),(ke=v?.onUpdate)===null||ke===void 0||ke.call(v,Te),(_e=v?.onComplete)===null||_e===void 0||_e.call(v),{stop:function(){}}}return!H||!V||v.type===!1?pe:de}function Yi(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function Xi(e){return typeof e=="number"?0:ti("",e)}function ai(e,n){return e[n]||e.default||e}function ri(e,n,a,o){return o===void 0&&(o={}),Md.current&&(o={type:!1}),n.start(function(c){var C,v,m=Fd(e,n,a,o,c),V=Ld(o,e),H=function(){return v=m()};return V?C=window.setTimeout(H,Ar(V)):H(),function(){clearTimeout(C),v?.stop()}})}var Bd=function(e){return/^\-?\d*\.?\d+$/.test(e)},Vd=function(e){return/^0[^.\s]+$/.test(e)};function ii(e,n){e.indexOf(n)===-1&&e.push(n)}function oi(e,n){var a=e.indexOf(n);a>-1&&e.splice(a,1)}function Fc(e,n,a){var o=__read(e),c=o.slice(0),C=n<0?c.length+n:n;if(C>=0&&C<c.length){var v=a<0?c.length+a:a,m=__read(c.splice(n,1),1),V=m[0];c.splice(v,0,V)}return c}var zr=function(){function e(){this.subscriptions=[]}return e.prototype.add=function(n){var a=this;return ii(this.subscriptions,n),function(){return oi(a.subscriptions,n)}},e.prototype.notify=function(n,a,o){var c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](n,a,o);else for(var C=0;C<c;C++){var v=this.subscriptions[C];v&&v(n,a,o)}},e.prototype.getSize=function(){return this.subscriptions.length},e.prototype.clear=function(){this.subscriptions.length=0},e}(),Ud=function(e){return!isNaN(parseFloat(e))},Hd=function(){function e(n){var a=this;this.version="6.5.1",this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new zr,this.velocityUpdateSubscribers=new zr,this.renderSubscribers=new zr,this.canTrackVelocity=!1,this.updateAndNotify=function(o,c){c===void 0&&(c=!0),a.prev=a.current,a.current=o;var C=(0,jt.KK)(),v=C.delta,m=C.timestamp;a.lastUpdated!==m&&(a.timeDelta=v,a.lastUpdated=m,jt.Ay.postRender(a.scheduleVelocityCheck)),a.prev!==a.current&&a.updateSubscribers.notify(a.current),a.velocityUpdateSubscribers.getSize()&&a.velocityUpdateSubscribers.notify(a.getVelocity()),c&&a.renderSubscribers.notify(a.current)},this.scheduleVelocityCheck=function(){return jt.Ay.postRender(a.velocityCheck)},this.velocityCheck=function(o){var c=o.timestamp;c!==a.lastUpdated&&(a.prev=a.current,a.velocityUpdateSubscribers.notify(a.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=n,this.canTrackVelocity=Ud(this.current)}return e.prototype.onChange=function(n){return this.updateSubscribers.add(n)},e.prototype.clearListeners=function(){this.updateSubscribers.clear()},e.prototype.onRenderRequest=function(n){return n(this.get()),this.renderSubscribers.add(n)},e.prototype.attach=function(n){this.passiveEffect=n},e.prototype.set=function(n,a){a===void 0&&(a=!0),!a||!this.passiveEffect?this.updateAndNotify(n,a):this.passiveEffect(n,this.updateAndNotify)},e.prototype.get=function(){return this.current},e.prototype.getPrevious=function(){return this.prev},e.prototype.getVelocity=function(){return this.canTrackVelocity?Fi(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0},e.prototype.start=function(n){var a=this;return this.stop(),new Promise(function(o){a.hasAnimated=!0,a.stopAnimation=n(o)}).then(function(){return a.clearAnimation()})},e.prototype.stop=function(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()},e.prototype.isAnimating=function(){return!!this.stopAnimation},e.prototype.clearAnimation=function(){this.stopAnimation=null},e.prototype.destroy=function(){this.updateSubscribers.clear(),this.renderSubscribers.clear(),this.stop()},e}();function xr(e){return new Hd(e)}var Ji=function(e){return function(n){return n.test(e)}},$d={test:function(e){return e==="auto"},parse:function(e){return e}},Qi=[gn,Ce,dn,Bt,Un,en,$d],Er=function(e){return Qi.find(Ji(e))},Wd=(0,i.fX)((0,i.fX)([],(0,i.zs)(Qi),!1),[Bn,Ot],!1),Kd=function(e){return Wd.find(Ji(e))};function Gd(e,n,a){e.hasValue(n)?e.getValue(n).set(a):e.addValue(n,xr(a))}function di(e,n){var a=q(e,n),o=a?e.makeTargetAnimatable(a,!1):{},c=o.transitionEnd,C=c===void 0?{}:c;o.transition;var v=(0,i.Tt)(o,["transitionEnd","transition"]);v=(0,i.Cl)((0,i.Cl)({},v),C);for(var m in v){var V=pa(v[m]);Gd(e,m,V)}}function ci(e,n){var a=__spreadArray([],__read(n),!1).reverse();a.forEach(function(o){var c,C=e.getVariant(o);C&&di(e,C),(c=e.variantChildren)===null||c===void 0||c.forEach(function(v){ci(v,n)})})}function Bc(e,n){if(Array.isArray(n))return ci(e,n);if(typeof n=="string")return ci(e,[n]);di(e,n)}function Zd(e,n,a){var o,c,C,v,m=Object.keys(n).filter(function(_e){return!e.hasValue(_e)}),V=m.length;if(V)for(var H=0;H<V;H++){var de=m[H],pe=n[de],ke=null;Array.isArray(pe)&&(ke=pe[0]),ke===null&&(ke=(c=(o=a[de])!==null&&o!==void 0?o:e.readValue(de))!==null&&c!==void 0?c:n[de]),ke!=null&&(typeof ke=="string"&&(Bd(ke)||Vd(ke))?ke=parseFloat(ke):!Kd(ke)&&Ot.test(pe)&&(ke=ti(de,pe)),e.addValue(de,xr(ke)),(C=(v=a)[de])!==null&&C!==void 0||(v[de]=ke),e.setBaseTarget(de,ke))}}function Yd(e,n){if(n){var a=n[e]||n.default||n;return a.from}}function Xd(e,n,a){var o,c,C={};for(var v in e)C[v]=(o=Yd(v,n))!==null&&o!==void 0?o:(c=a.getValue(v))===null||c===void 0?void 0:c.get();return C}function Jd(e,n,a){a===void 0&&(a={}),e.notifyAnimationStart(n);var o;if(Array.isArray(n)){var c=n.map(function(v){return si(e,v,a)});o=Promise.all(c)}else if(typeof n=="string")o=si(e,n,a);else{var C=typeof n=="function"?q(e,n,a.custom):n;o=qi(e,C,a)}return o.then(function(){return e.notifyAnimationComplete(n)})}function si(e,n,a){var o;a===void 0&&(a={});var c=q(e,n,a.custom),C=(c||{}).transition,v=C===void 0?e.getDefaultTransition()||{}:C;a.transitionOverride&&(v=a.transitionOverride);var m=c?function(){return qi(e,c,a)}:function(){return Promise.resolve()},V=!((o=e.variantChildren)===null||o===void 0)&&o.size?function(_e){_e===void 0&&(_e=0);var Te=v.delayChildren,Ne=Te===void 0?0:Te,nn=v.staggerChildren,sn=v.staggerDirection;return Qd(e,n,Ne+_e,nn,sn,a)}:function(){return Promise.resolve()},H=v.when;if(H){var de=(0,i.zs)(H==="beforeChildren"?[m,V]:[V,m],2),pe=de[0],ke=de[1];return pe().then(ke)}else return Promise.all([m(),V(a.delay)])}function qi(e,n,a){var o,c=a===void 0?{}:a,C=c.delay,v=C===void 0?0:C,m=c.transitionOverride,V=c.type,H=e.makeTargetAnimatable(n),de=H.transition,pe=de===void 0?e.getDefaultTransition():de,ke=H.transitionEnd,_e=(0,i.Tt)(H,["transition","transitionEnd"]);m&&(pe=m);var Te=[],Ne=V&&((o=e.animationState)===null||o===void 0?void 0:o.getState()[V]);for(var nn in _e){var sn=e.getValue(nn),mn=_e[nn];if(!(!sn||mn===void 0||Ne&&ec(Ne,nn))){var fn=(0,i.Cl)({delay:v},pe);e.shouldReduceMotion&&un(nn)&&(fn=(0,i.Cl)((0,i.Cl)({},fn),{type:!1,delay:0}));var En=ri(nn,sn,mn,fn);Te.push(En)}}return Promise.all(Te).then(function(){ke&&di(e,ke)})}function Qd(e,n,a,o,c,C){a===void 0&&(a=0),o===void 0&&(o=0),c===void 0&&(c=1);var v=[],m=(e.variantChildren.size-1)*o,V=c===1?function(H){return H===void 0&&(H=0),H*o}:function(H){return H===void 0&&(H=0),m-H*o};return Array.from(e.variantChildren).sort(qd).forEach(function(H,de){v.push(si(H,n,(0,i.Cl)((0,i.Cl)({},C),{delay:a+V(de)})).then(function(){return H.notifyAnimationComplete(n)}))}),Promise.all(v)}function Vc(e){e.forEachValue(function(n){return n.stop()})}function qd(e,n){return e.sortNodePosition(n)}function ec(e,n){var a=e.protectedKeys,o=e.needsAnimating,c=a.hasOwnProperty(n)&&o[n]!==!0;return o[n]=!1,c}var fi=[yt.Animate,yt.InView,yt.Focus,yt.Hover,yt.Tap,yt.Drag,yt.Exit],nc=(0,i.fX)([],(0,i.zs)(fi),!1).reverse(),tc=fi.length;function ac(e){return function(n){return Promise.all(n.map(function(a){var o=a.animation,c=a.options;return Jd(e,o,c)}))}}function rc(e){var n=ac(e),a=oc(),o={},c=!0,C=function(de,pe){var ke=q(e,pe);if(ke){ke.transition;var _e=ke.transitionEnd,Te=(0,i.Tt)(ke,["transition","transitionEnd"]);de=(0,i.Cl)((0,i.Cl)((0,i.Cl)({},de),Te),_e)}return de};function v(de){return o[de]!==void 0}function m(de){n=de(e)}function V(de,pe){for(var ke,_e=e.getProps(),Te=e.getVariantContext(!0)||{},Ne=[],nn=new Set,sn={},mn=1/0,fn=function(Tt){var It=nc[Tt],bt=a[It],Ft=(ke=_e[It])!==null&&ke!==void 0?ke:Te[It],Aa=$(Ft),ta=It===pe?bt.isActive:null;ta===!1&&(mn=Tt);var Ca=Ft===Te[It]&&Ft!==_e[It]&&Aa;if(Ca&&c&&e.manuallyAnimateOnMount&&(Ca=!1),bt.protectedKeys=(0,i.Cl)({},sn),!bt.isActive&&ta===null||!Ft&&!bt.prevProp||na(Ft)||typeof Ft=="boolean")return"continue";var Da=ic(bt.prevProp,Ft),Za=Da||It===pe&&bt.isActive&&!Ca&&Aa||Tt>mn&&Aa,wr=Array.isArray(Ft)?Ft:[Ft],La=wr.reduce(C,{});ta===!1&&(La={});var Kr=bt.prevResolvedValues,Tr=Kr===void 0?{}:Kr,Pi=(0,i.Cl)((0,i.Cl)({},Tr),La),Pr=function(Gn){Za=!0,nn.delete(Gn),bt.needsAnimating[Gn]=!0};for(var la in Pi){var Rt=La[la],_n=Tr[la];sn.hasOwnProperty(la)||(Rt!==_n?ma(Rt)&&ma(_n)?!fe(Rt,_n)||Da?Pr(la):bt.protectedKeys[la]=!0:Rt!==void 0?Pr(la):nn.add(la):Rt!==void 0&&nn.has(la)?Pr(la):bt.protectedKeys[la]=!0)}bt.prevProp=Ft,bt.prevResolvedValues=La,bt.isActive&&(sn=(0,i.Cl)((0,i.Cl)({},sn),La)),c&&e.blockInitialAnimation&&(Za=!1),Za&&!Ca&&Ne.push.apply(Ne,(0,i.fX)([],(0,i.zs)(wr.map(function(Gn){return{animation:Gn,options:(0,i.Cl)({type:It},de)}})),!1))},En=0;En<tc;En++)fn(En);if(o=(0,i.Cl)({},sn),nn.size){var An={};nn.forEach(function(Tt){var It=e.getBaseTarget(Tt);It!==void 0&&(An[Tt]=It)}),Ne.push({animation:An})}var pt=!!Ne.length;return c&&_e.initial===!1&&!e.manuallyAnimateOnMount&&(pt=!1),c=!1,pt?n(Ne):Promise.resolve()}function H(de,pe,ke){var _e;if(a[de].isActive===pe)return Promise.resolve();(_e=e.variantChildren)===null||_e===void 0||_e.forEach(function(nn){var sn;return(sn=nn.animationState)===null||sn===void 0?void 0:sn.setActive(de,pe)}),a[de].isActive=pe;var Te=V(ke,de);for(var Ne in a)a[Ne].protectedKeys={};return Te}return{isAnimated:v,animateChanges:V,setActive:H,setAnimateFunction:m,getState:function(){return a}}}function ic(e,n){return typeof n=="string"?n!==e:M(n)?!fe(n,e):!1}function pr(e){return e===void 0&&(e=!1),{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function oc(){var e;return e={},e[yt.Animate]=pr(!0),e[yt.InView]=pr(),e[yt.Hover]=pr(),e[yt.Tap]=pr(),e[yt.Drag]=pr(),e[yt.Focus]=pr(),e[yt.Exit]=pr(),e}var dc={animation:xt(function(e){var n=e.visualElement,a=e.animate;n.animationState||(n.animationState=rc(n)),na(a)&&(0,d.useEffect)(function(){return a.subscribe(n)},[a])}),exit:xt(function(e){var n=e.custom,a=e.visualElement,o=(0,i.zs)(g(),2),c=o[0],C=o[1],v=(0,d.useContext)(S.t);(0,d.useEffect)(function(){var m,V;a.isPresent=c;var H=(m=a.animationState)===null||m===void 0?void 0:m.setActive(yt.Exit,!c,{custom:(V=v?.custom)!==null&&V!==void 0?V:n});!c&&H?.then(C)},[c])})};const li=e=>e.hasOwnProperty("x")&&e.hasOwnProperty("y"),eo=e=>li(e)&&e.hasOwnProperty("z"),Fr=(e,n)=>Math.abs(e-n);function no(e,n){if(Wt(e)&&Wt(n))return Fr(e,n);if(li(e)&&li(n)){const a=Fr(e.x,n.x),o=Fr(e.y,n.y),c=eo(e)&&eo(n)?Fr(e.z,n.z):0;return Math.sqrt(Math.pow(a,2)+Math.pow(o,2)+Math.pow(c,2))}}var to=function(){function e(n,a,o){var c=this,C=o===void 0?{}:o,v=C.transformPagePoint;if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=function(){if(c.lastMoveEvent&&c.lastMoveEventInfo){var ke=gi(c.lastMoveEventInfo,c.history),_e=c.startEvent!==null,Te=no(ke.offset,{x:0,y:0})>=3;if(!(!_e&&!Te)){var Ne=ke.point,nn=(0,jt.KK)().timestamp;c.history.push((0,i.Cl)((0,i.Cl)({},Ne),{timestamp:nn}));var sn=c.handlers,mn=sn.onStart,fn=sn.onMove;_e||(mn&&mn(c.lastMoveEvent,ke),c.startEvent=c.lastMoveEvent),fn&&fn(c.lastMoveEvent,ke)}}},this.handlePointerMove=function(ke,_e){if(c.lastMoveEvent=ke,c.lastMoveEventInfo=ui(_e,c.transformPagePoint),Ja(ke)&&ke.buttons===0){c.handlePointerUp(ke,_e);return}jt.Ay.update(c.updatePoint,!0)},this.handlePointerUp=function(ke,_e){c.end();var Te=c.handlers,Ne=Te.onEnd,nn=Te.onSessionEnd,sn=gi(ui(_e,c.transformPagePoint),c.history);c.startEvent&&Ne&&Ne(ke,sn),nn&&nn(ke,sn)},!(xa(n)&&n.touches.length>1)){this.handlers=a,this.transformPagePoint=v;var m=Ma(n),V=ui(m,this.transformPagePoint),H=V.point,de=(0,jt.KK)().timestamp;this.history=[(0,i.Cl)((0,i.Cl)({},H),{timestamp:de})];var pe=a.onSessionStart;pe&&pe(n,gi(V,this.history)),this.removeListeners=rn(Tn(window,"pointermove",this.handlePointerMove),Tn(window,"pointerup",this.handlePointerUp),Tn(window,"pointercancel",this.handlePointerUp))}}return e.prototype.updateHandlers=function(n){this.handlers=n},e.prototype.end=function(){this.removeListeners&&this.removeListeners(),jt.eO.update(this.updatePoint)},e}();function ui(e,n){return n?{point:n(e.point)}:e}function ao(e,n){return{x:e.x-n.x,y:e.y-n.y}}function gi(e,n){var a=e.point;return{point:a,delta:ao(a,ro(n)),offset:ao(a,cc(n)),velocity:io(n,.1)}}function cc(e){return e[0]}function ro(e){return e[e.length-1]}function io(e,n){if(e.length<2)return{x:0,y:0};for(var a=e.length-1,o=null,c=ro(e);a>=0&&(o=e[a],!(c.timestamp-o.timestamp>Ar(n)));)a--;if(!o)return{x:0,y:0};var C=(c.timestamp-o.timestamp)/1e3;if(C===0)return{x:0,y:0};var v={x:(c.x-o.x)/C,y:(c.y-o.y)/C};return v.x===1/0&&(v.x=0),v.y===1/0&&(v.y=0),v}function nr(e){return e.max-e.min}function oo(e,n,a){return n===void 0&&(n=0),a===void 0&&(a=.01),no(e,n)<a}function co(e,n,a,o){o===void 0&&(o=.5),e.origin=o,e.originPoint=qe(n.min,n.max,e.origin),e.scale=nr(a)/nr(n),(oo(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=qe(a.min,a.max,e.origin)-e.originPoint,(oo(e.translate)||isNaN(e.translate))&&(e.translate=0)}function kr(e,n,a,o){co(e.x,n.x,a.x,o?.originX),co(e.y,n.y,a.y,o?.originY)}function so(e,n,a){e.min=a.min+n.min,e.max=e.min+nr(n)}function sc(e,n,a){so(e.x,n.x,a.x),so(e.y,n.y,a.y)}function fo(e,n,a){e.min=n.min-a.min,e.max=e.min+nr(n)}function _r(e,n,a){fo(e.x,n.x,a.x),fo(e.y,n.y,a.y)}function fc(e,n,a){var o=n.min,c=n.max;return o!==void 0&&e<o?e=a?qe(o,e,a.min):Math.max(e,o):c!==void 0&&e>c&&(e=a?qe(c,e,a.max):Math.min(e,c)),e}function lo(e,n,a){return{min:n!==void 0?e.min+n:void 0,max:a!==void 0?e.max+a-(e.max-e.min):void 0}}function uo(e,n){var a=n.top,o=n.left,c=n.bottom,C=n.right;return{x:lo(e.x,o,C),y:lo(e.y,a,c)}}function go(e,n){var a,o=n.min-e.min,c=n.max-e.max;return n.max-n.min<e.max-e.min&&(a=(0,i.zs)([c,o],2),o=a[0],c=a[1]),{min:o,max:c}}function lc(e,n){return{x:go(e.x,n.x),y:go(e.y,n.y)}}function vo(e,n){var a=.5,o=nr(e),c=nr(n);return c>o?a=kn(n.min,n.max-o,e.min):o>c&&(a=kn(e.min,e.max-c,n.min)),he(0,1,a)}function uc(e,n){var a={};return n.min!==void 0&&(a.min=n.min-e.min),n.max!==void 0&&(a.max=n.max-e.min),a}var vi=.35;function gc(e){return e===void 0&&(e=vi),e===!1?e=0:e===!0&&(e=vi),{x:bo(e,"left","right"),y:bo(e,"top","bottom")}}function bo(e,n,a){return{min:Ea(e,n),max:Ea(e,a)}}function Ea(e,n){var a;return typeof e=="number"?e:(a=e[n])!==null&&a!==void 0?a:0}var mo=function(){return{translate:0,scale:1,origin:0,originPoint:0}},Cr=function(){return{x:mo(),y:mo()}},po=function(){return{min:0,max:0}},Qt=function(){return{x:po(),y:po()}};function $a(e){return[e("x"),e("y")]}function ho(e){var n=e.top,a=e.left,o=e.right,c=e.bottom;return{x:{min:a,max:o},y:{min:n,max:c}}}function Wa(e){var n=e.x,a=e.y;return{top:a.min,right:n.max,bottom:a.max,left:n.min}}function bi(e,n){if(!n)return e;var a=n({x:e.left,y:e.top}),o=n({x:e.right,y:e.bottom});return{top:a.y,left:a.x,bottom:o.y,right:o.x}}function Br(e){return e===void 0||e===1}function wo(e){var n=e.scale,a=e.scaleX,o=e.scaleY;return!Br(n)||!Br(a)||!Br(o)}function fr(e){return wo(e)||xo(e.x)||xo(e.y)||e.z||e.rotate||e.rotateX||e.rotateY}function xo(e){return e&&e!=="0%"}function Vr(e,n,a){var o=e-a,c=n*o;return a+c}function mi(e,n,a,o,c){return c!==void 0&&(e=Vr(e,c,o)),Vr(e,a,o)+n}function Ur(e,n,a,o,c){n===void 0&&(n=0),a===void 0&&(a=1),e.min=mi(e.min,n,a,o,c),e.max=mi(e.max,n,a,o,c)}function Ka(e,n){var a=n.x,o=n.y;Ur(e.x,a.translate,a.scale,a.originPoint),Ur(e.y,o.translate,o.scale,o.originPoint)}function tr(e,n,a,o){var c,C;o===void 0&&(o=!1);var v=a.length;if(v){n.x=n.y=1;for(var m,V,H=0;H<v;H++)m=a[H],V=m.projectionDelta,((C=(c=m.instance)===null||c===void 0?void 0:c.style)===null||C===void 0?void 0:C.display)!=="contents"&&(o&&m.options.layoutScroll&&m.scroll&&m!==m.root&&hr(e,{x:-m.scroll.x,y:-m.scroll.y}),V&&(n.x*=V.x.scale,n.y*=V.y.scale,Ka(e,V)),o&&fr(m.latestValues)&&hr(e,m.latestValues))}}function lr(e,n){e.min=e.min+n,e.max=e.max+n}function pi(e,n,a){var o=(0,i.zs)(a,3),c=o[0],C=o[1],v=o[2],m=n[v]!==void 0?n[v]:.5,V=qe(e.min,e.max,m);Ur(e,n[c],n[C],V,n.scale)}var ko=["x","scaleX","originX"],yo=["y","scaleY","originY"];function hr(e,n){pi(e.x,n,ko),pi(e.y,n,yo)}function hi(e,n){return ho(bi(e.getBoundingClientRect(),n))}function zo(e,n,a){var o=hi(e,a),c=n.scroll;return c&&(lr(o.x,c.x),lr(o.y,c.y)),o}var Eo=new WeakMap,_o=function(){function e(n){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qt(),this.visualElement=n}return e.prototype.start=function(n,a){var o=this,c=a===void 0?{}:a,C=c.snapToCursor,v=C===void 0?!1:C;if(this.visualElement.isPresent!==!1){var m=function(pe){o.stopAnimation(),v&&o.snapToCursor(Ma(pe,"page").point)},V=function(pe,ke){var _e,Te=o.getProps(),Ne=Te.drag,nn=Te.dragPropagation,sn=Te.onDragStart;Ne&&!nn&&(o.openGlobalLock&&o.openGlobalLock(),o.openGlobalLock=k(Ne),!o.openGlobalLock)||(o.isDragging=!0,o.currentDirection=null,o.resolveConstraints(),o.visualElement.projection&&(o.visualElement.projection.isAnimationBlocked=!0,o.visualElement.projection.target=void 0),$a(function(mn){var fn,En,An=o.getAxisMotionValue(mn).get()||0;if(dn.test(An)){var pt=(En=(fn=o.visualElement.projection)===null||fn===void 0?void 0:fn.layout)===null||En===void 0?void 0:En.actual[mn];if(pt){var Tt=nr(pt);An=Tt*(parseFloat(An)/100)}}o.originPoint[mn]=An}),sn?.(pe,ke),(_e=o.visualElement.animationState)===null||_e===void 0||_e.setActive(yt.Drag,!0))},H=function(pe,ke){var _e=o.getProps(),Te=_e.dragPropagation,Ne=_e.dragDirectionLock,nn=_e.onDirectionLock,sn=_e.onDrag;if(!(!Te&&!o.openGlobalLock)){var mn=ke.offset;if(Ne&&o.currentDirection===null){o.currentDirection=Co(mn),o.currentDirection!==null&&nn?.(o.currentDirection);return}o.updateAxis("x",ke.point,mn),o.updateAxis("y",ke.point,mn),o.visualElement.syncRender(),sn?.(pe,ke)}},de=function(pe,ke){return o.stop(pe,ke)};this.panSession=new to(n,{onSessionStart:m,onStart:V,onMove:H,onSessionEnd:de},{transformPagePoint:this.visualElement.getTransformPagePoint()})}},e.prototype.stop=function(n,a){var o=this.isDragging;if(this.cancel(),!!o){var c=a.velocity;this.startAnimation(c);var C=this.getProps().onDragEnd;C?.(n,a)}},e.prototype.cancel=function(){var n,a;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),(n=this.panSession)===null||n===void 0||n.end(),this.panSession=void 0;var o=this.getProps().dragPropagation;!o&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),(a=this.visualElement.animationState)===null||a===void 0||a.setActive(yt.Drag,!1)},e.prototype.updateAxis=function(n,a,o){var c=this.getProps().drag;if(!(!o||!Sr(n,c,this.currentDirection))){var C=this.getAxisMotionValue(n),v=this.originPoint[n]+o[n];this.constraints&&this.constraints[n]&&(v=fc(v,this.constraints[n],this.elastic[n])),C.set(v)}},e.prototype.resolveConstraints=function(){var n=this,a=this.getProps(),o=a.dragConstraints,c=a.dragElastic,C=(this.visualElement.projection||{}).layout,v=this.constraints;o&&B(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&C?this.constraints=uo(C.actual,o):this.constraints=!1,this.elastic=gc(c),v!==this.constraints&&C&&this.constraints&&!this.hasMutatedConstraints&&$a(function(m){n.getAxisMotionValue(m)&&(n.constraints[m]=uc(C.actual[m],n.constraints[m]))})},e.prototype.resolveRefConstraints=function(){var n=this.getProps(),a=n.dragConstraints,o=n.onMeasureDragConstraints;if(!a||!B(a))return!1;var c=a.current;f(c!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");var C=this.visualElement.projection;if(!C||!C.layout)return!1;var v=zo(c,C.root,this.visualElement.getTransformPagePoint()),m=lc(C.layout.actual,v);if(o){var V=o(Wa(m));this.hasMutatedConstraints=!!V,V&&(m=ho(V))}return m},e.prototype.startAnimation=function(n){var a=this,o=this.getProps(),c=o.drag,C=o.dragMomentum,v=o.dragElastic,m=o.dragTransition,V=o.dragSnapToOrigin,H=o.onDragTransitionEnd,de=this.constraints||{},pe=$a(function(ke){var _e;if(Sr(ke,c,a.currentDirection)){var Te=(_e=de?.[ke])!==null&&_e!==void 0?_e:{};V&&(Te={min:0,max:0});var Ne=v?200:1e6,nn=v?40:1e7,sn=(0,i.Cl)((0,i.Cl)({type:"inertia",velocity:C?n[ke]:0,bounceStiffness:Ne,bounceDamping:nn,timeConstant:750,restDelta:1,restSpeed:10},m),Te);return a.startAxisValueAnimation(ke,sn)}});return Promise.all(pe).then(H)},e.prototype.startAxisValueAnimation=function(n,a){var o=this.getAxisMotionValue(n);return ri(n,o,0,a)},e.prototype.stopAnimation=function(){var n=this;$a(function(a){return n.getAxisMotionValue(a).stop()})},e.prototype.getAxisMotionValue=function(n){var a,o,c="_drag"+n.toUpperCase(),C=this.visualElement.getProps()[c];return C||this.visualElement.getValue(n,(o=(a=this.visualElement.getProps().initial)===null||a===void 0?void 0:a[n])!==null&&o!==void 0?o:0)},e.prototype.snapToCursor=function(n){var a=this;$a(function(o){var c=a.getProps().drag;if(Sr(o,c,a.currentDirection)){var C=a.visualElement.projection,v=a.getAxisMotionValue(o);if(C&&C.layout){var m=C.layout.actual[o],V=m.min,H=m.max;v.set(n[o]-qe(V,H,.5))}}})},e.prototype.scalePositionWithinConstraints=function(){var n=this,a,o=this.getProps(),c=o.drag,C=o.dragConstraints,v=this.visualElement.projection;if(!(!B(C)||!v||!this.constraints)){this.stopAnimation();var m={x:0,y:0};$a(function(H){var de=n.getAxisMotionValue(H);if(de){var pe=de.get();m[H]=vo({min:pe,max:pe},n.constraints[H])}});var V=this.visualElement.getProps().transformTemplate;this.visualElement.getInstance().style.transform=V?V({},""):"none",(a=v.root)===null||a===void 0||a.updateScroll(),v.updateLayout(),this.resolveConstraints(),$a(function(H){if(Sr(H,c,null)){var de=n.getAxisMotionValue(H),pe=n.constraints[H],ke=pe.min,_e=pe.max;de.set(qe(ke,_e,m[H]))}})}},e.prototype.addListeners=function(){var n=this,a;Eo.set(this.visualElement,this);var o=this.visualElement.getInstance(),c=Tn(o,"pointerdown",function(H){var de=n.getProps(),pe=de.drag,ke=de.dragListener,_e=ke===void 0?!0:ke;pe&&_e&&n.start(H)}),C=function(){var H=n.getProps().dragConstraints;B(H)&&(n.constraints=n.resolveRefConstraints())},v=this.visualElement.projection,m=v.addEventListener("measure",C);v&&!v.layout&&((a=v.root)===null||a===void 0||a.updateScroll(),v.updateLayout()),C();var V=Ia(window,"resize",function(){return n.scalePositionWithinConstraints()});return v.addEventListener("didUpdate",function(H){var de=H.delta,pe=H.hasLayoutChanged;n.isDragging&&pe&&($a(function(ke){var _e=n.getAxisMotionValue(ke);_e&&(n.originPoint[ke]+=de[ke].translate,_e.set(_e.get()+de[ke].translate))}),n.visualElement.syncRender())}),function(){V(),c(),m()}},e.prototype.getProps=function(){var n=this.visualElement.getProps(),a=n.drag,o=a===void 0?!1:a,c=n.dragDirectionLock,C=c===void 0?!1:c,v=n.dragPropagation,m=v===void 0?!1:v,V=n.dragConstraints,H=V===void 0?!1:V,de=n.dragElastic,pe=de===void 0?vi:de,ke=n.dragMomentum,_e=ke===void 0?!0:ke;return(0,i.Cl)((0,i.Cl)({},n),{drag:o,dragDirectionLock:C,dragPropagation:m,dragConstraints:H,dragElastic:pe,dragMomentum:_e})},e}();function Sr(e,n,a){return(n===!0||n===e)&&(a===null||a===e)}function Co(e,n){n===void 0&&(n=10);var a=null;return Math.abs(e.y)>n?a="y":Math.abs(e.x)>n&&(a="x"),a}function vc(e){var n=e.dragControls,a=e.visualElement,o=(0,ue.M)(function(){return new _o(a)});(0,d.useEffect)(function(){return n&&n.subscribe(o)},[o,n]),(0,d.useEffect)(function(){return o.addListeners()},[o])}function bc(e){var n=e.onPan,a=e.onPanStart,o=e.onPanEnd,c=e.onPanSessionStart,C=e.visualElement,v=n||a||o||c,m=(0,d.useRef)(null),V=(0,d.useContext)(I).transformPagePoint,H={onSessionStart:c,onStart:a,onMove:n,onEnd:function(pe,ke){m.current=null,o&&o(pe,ke)}};(0,d.useEffect)(function(){m.current!==null&&m.current.updateHandlers(H)});function de(pe){m.current=new to(pe,H,{transformPagePoint:V})}wn(C,"pointerdown",v&&de),(0,Fe.l)(function(){return m.current&&m.current.end()})}var So={pan:xt(bc),drag:xt(vc)},Hr=["LayoutMeasure","BeforeLayoutMeasure","LayoutUpdate","ViewportBoxUpdate","Update","Render","AnimationComplete","LayoutAnimationComplete","AnimationStart","LayoutAnimationStart","SetAxisTarget","Unmount"];function mc(){var e=Hr.map(function(){return new zr}),n={},a={clearAllListeners:function(){return e.forEach(function(o){return o.clear()})},updatePropListeners:function(o){Hr.forEach(function(c){var C,v="on"+c,m=o[v];(C=n[c])===null||C===void 0||C.call(n),m&&(n[c]=a[v](m))})}};return e.forEach(function(o,c){a["on"+Hr[c]]=function(C){return o.add(C)},a["notify"+Hr[c]]=function(){for(var C=[],v=0;v<arguments.length;v++)C[v]=arguments[v];return o.notify.apply(o,(0,i.fX)([],(0,i.zs)(C),!1))}}),a}function To(e,n,a){var o;for(var c in n){var C=n[c],v=a[c];if(yn(C))e.addValue(c,C);else if(yn(v))e.addValue(c,xr(C));else if(v!==C)if(e.hasValue(c)){var m=e.getValue(c);!m.hasAnimated&&m.set(C)}else e.addValue(c,xr((o=e.getStaticValue(c))!==null&&o!==void 0?o:C))}for(var c in a)n[c]===void 0&&e.removeValue(c);return n}var Po=function(e){var n=e.treeType,a=n===void 0?"":n,o=e.build,c=e.getBaseTarget,C=e.makeTargetAnimatable,v=e.measureViewportBox,m=e.render,V=e.readValueFromInstance,H=e.removeValueFromRenderState,de=e.sortNodePosition,pe=e.scrapeMotionValuesFromProps;return function(ke,_e){var Te=ke.parent,Ne=ke.props,nn=ke.presenceId,sn=ke.blockInitialAnimation,mn=ke.visualState,fn=ke.shouldReduceMotion;_e===void 0&&(_e={});var En=!1,An=mn.latestValues,pt=mn.renderState,Tt,It=mc(),bt=new Map,Ft=new Map,Aa={},ta=(0,i.Cl)({},An),Ca;function Da(){!Tt||!En||(Za(),m(Tt,pt,Ne.style,Rt.projection))}function Za(){o(Rt,pt,An,_e,Ne)}function wr(){It.notifyUpdate(An)}function La(_n,Gn){var aa=Gn.onChange(function(Ri){An[_n]=Ri,Ne.onUpdate&&jt.Ay.update(wr,!1,!0)}),Gr=Gn.onRenderRequest(Rt.scheduleRender);Ft.set(_n,function(){aa(),Gr()})}var Kr=pe(Ne);for(var Tr in Kr){var Pi=Kr[Tr];An[Tr]!==void 0&&yn(Pi)&&Pi.set(An[Tr],!1)}var Pr=le(Ne),la=te(Ne),Rt=(0,i.Cl)((0,i.Cl)({treeType:a,current:null,depth:Te?Te.depth+1:0,parent:Te,children:new Set,presenceId:nn,shouldReduceMotion:fn,variantChildren:la?new Set:void 0,isVisible:void 0,manuallyAnimateOnMount:!!Te?.isMounted(),blockInitialAnimation:sn,isMounted:function(){return!!Tt},mount:function(_n){En=!0,Tt=Rt.current=_n,Rt.projection&&Rt.projection.mount(_n),la&&Te&&!Pr&&(Ca=Te?.addVariantChild(Rt)),bt.forEach(function(Gn,aa){return La(aa,Gn)}),Te?.children.add(Rt),Rt.setProps(Ne)},unmount:function(){var _n;(_n=Rt.projection)===null||_n===void 0||_n.unmount(),jt.eO.update(wr),jt.eO.render(Da),Ft.forEach(function(Gn){return Gn()}),Ca?.(),Te?.children.delete(Rt),It.clearAllListeners(),Tt=void 0,En=!1},addVariantChild:function(_n){var Gn,aa=Rt.getClosestVariantNode();if(aa)return(Gn=aa.variantChildren)===null||Gn===void 0||Gn.add(_n),function(){return aa.variantChildren.delete(_n)}},sortNodePosition:function(_n){return!de||a!==_n.treeType?0:de(Rt.getInstance(),_n.getInstance())},getClosestVariantNode:function(){return la?Rt:Te?.getClosestVariantNode()},getLayoutId:function(){return Ne.layoutId},getInstance:function(){return Tt},getStaticValue:function(_n){return An[_n]},setStaticValue:function(_n,Gn){return An[_n]=Gn},getLatestValues:function(){return An},setVisibility:function(_n){Rt.isVisible!==_n&&(Rt.isVisible=_n,Rt.scheduleRender())},makeTargetAnimatable:function(_n,Gn){return Gn===void 0&&(Gn=!0),C(Rt,_n,Ne,Gn)},measureViewportBox:function(){return v(Tt,Ne)},addValue:function(_n,Gn){Rt.hasValue(_n)&&Rt.removeValue(_n),bt.set(_n,Gn),An[_n]=Gn.get(),La(_n,Gn)},removeValue:function(_n){var Gn;bt.delete(_n),(Gn=Ft.get(_n))===null||Gn===void 0||Gn(),Ft.delete(_n),delete An[_n],H(_n,pt)},hasValue:function(_n){return bt.has(_n)},getValue:function(_n,Gn){var aa=bt.get(_n);return aa===void 0&&Gn!==void 0&&(aa=xr(Gn),Rt.addValue(_n,aa)),aa},forEachValue:function(_n){return bt.forEach(_n)},readValue:function(_n){var Gn;return(Gn=An[_n])!==null&&Gn!==void 0?Gn:V(Tt,_n,_e)},setBaseTarget:function(_n,Gn){ta[_n]=Gn},getBaseTarget:function(_n){if(c){var Gn=c(Ne,_n);if(Gn!==void 0&&!yn(Gn))return Gn}return ta[_n]}},It),{build:function(){return Za(),pt},scheduleRender:function(){jt.Ay.render(Da,!1,!0)},syncRender:Da,setProps:function(_n){(_n.transformTemplate||Ne.transformTemplate)&&Rt.scheduleRender(),Ne=_n,It.updatePropListeners(_n),Aa=To(Rt,pe(Ne),Aa)},getProps:function(){return Ne},getVariant:function(_n){var Gn;return(Gn=Ne.variants)===null||Gn===void 0?void 0:Gn[_n]},getDefaultTransition:function(){return Ne.transition},getTransformPagePoint:function(){return Ne.transformPagePoint},getVariantContext:function(_n){if(_n===void 0&&(_n=!1),_n)return Te?.getVariantContext();if(!Pr){var Gn=Te?.getVariantContext()||{};return Ne.initial!==void 0&&(Gn.initial=Ne.initial),Gn}for(var aa={},Gr=0;Gr<Oo;Gr++){var Ri=Ro[Gr],$o=Ne[Ri];($($o)||$o===!1)&&(aa[Ri]=$o)}return aa}});return Rt}},Ro=(0,i.fX)(["initial"],(0,i.zs)(fi),!1),Oo=Ro.length;function wi(e){return typeof e=="string"&&e.startsWith("var(--")}var Io=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Mo(e){var n=Io.exec(e);if(!n)return[,];var a=(0,i.zs)(n,3),o=a[1],c=a[2];return[o,c]}var Ao=4;function $r(e,n,a){a===void 0&&(a=1),f(a<=Ao,'Max CSS variable fallback depth detected in property "'.concat(e,'". This may indicate a circular fallback dependency.'));var o=(0,i.zs)(Mo(e),2),c=o[0],C=o[1];if(c){var v=window.getComputedStyle(n).getPropertyValue(c);return v?v.trim():wi(C)?$r(C,n,a+1):C}}function Do(e,n,a){var o,c=(0,i.Tt)(n,[]),C=e.getInstance();if(!(C instanceof Element))return{target:c,transitionEnd:a};a&&(a=(0,i.Cl)({},a)),e.forEachValue(function(H){var de=H.get();if(wi(de)){var pe=$r(de,C);pe&&H.set(pe)}});for(var v in c){var m=c[v];if(wi(m)){var V=$r(m,C);V&&(c[v]=V,a&&((o=a[v])!==null&&o!==void 0||(a[v]=m)))}}return{target:c,transitionEnd:a}}var xi=new Set(["width","height","top","left","right","bottom","x","y"]),ki=function(e){return xi.has(e)},tn=function(e){return Object.keys(e).some(ki)},vt=function(e,n){e.set(n,!1),e.set(n)},_a=function(e){return e===gn||e===Ce},ur;(function(e){e.width="width",e.height="height",e.left="left",e.right="right",e.top="top",e.bottom="bottom"})(ur||(ur={}));var gr=function(e,n){return parseFloat(e.split(", ")[n])},ar=function(e,n){return function(a,o){var c=o.transform;if(c==="none"||!c)return 0;var C=c.match(/^matrix3d\((.+)\)$/);if(C)return gr(C[1],n);var v=c.match(/^matrix\((.+)\)$/);return v?gr(v[1],e):0}},rr=new Set(["x","y","z"]),yi=Ze.filter(function(e){return!rr.has(e)});function Lo(e){var n=[];return yi.forEach(function(a){var o=e.getValue(a);o!==void 0&&(n.push([a,o.get()]),o.set(a.startsWith("scale")?1:0))}),n.length&&e.syncRender(),n}var Wr={width:function(e,n){var a=e.x,o=n.paddingLeft,c=o===void 0?"0":o,C=n.paddingRight,v=C===void 0?"0":C;return a.max-a.min-parseFloat(c)-parseFloat(v)},height:function(e,n){var a=e.y,o=n.paddingTop,c=o===void 0?"0":o,C=n.paddingBottom,v=C===void 0?"0":C;return a.max-a.min-parseFloat(c)-parseFloat(v)},top:function(e,n){var a=n.top;return parseFloat(a)},left:function(e,n){var a=n.left;return parseFloat(a)},bottom:function(e,n){var a=e.y,o=n.top;return parseFloat(o)+(a.max-a.min)},right:function(e,n){var a=e.x,o=n.left;return parseFloat(o)+(a.max-a.min)},x:ar(4,13),y:ar(5,14)},No=function(e,n,a){var o=n.measureViewportBox(),c=n.getInstance(),C=getComputedStyle(c),v=C.display,m={};v==="none"&&n.setStaticValue("display",e.display||"block"),a.forEach(function(H){m[H]=Wr[H](o,C)}),n.syncRender();var V=n.measureViewportBox();return a.forEach(function(H){var de=n.getValue(H);vt(de,m[H]),e[H]=Wr[H](V,C)}),e},zi=function(e,n,a,o){a===void 0&&(a={}),o===void 0&&(o={}),n=(0,i.Cl)({},n),o=(0,i.Cl)({},o);var c=Object.keys(n).filter(ki),C=[],v=!1,m=[];if(c.forEach(function(de){var pe=e.getValue(de);if(e.hasValue(de)){var ke=a[de],_e=Er(ke),Te=n[de],Ne;if(ma(Te)){var nn=Te.length,sn=Te[0]===null?1:0;ke=Te[sn],_e=Er(ke);for(var mn=sn;mn<nn;mn++)Ne?f(Er(Te[mn])===Ne,"All keyframes must be of the same type"):(Ne=Er(Te[mn]),f(Ne===_e||_a(_e)&&_a(Ne),"Keyframes must be of the same dimension as the current value"))}else Ne=Er(Te);if(_e!==Ne)if(_a(_e)&&_a(Ne)){var fn=pe.get();typeof fn=="string"&&pe.set(parseFloat(fn)),typeof Te=="string"?n[de]=parseFloat(Te):Array.isArray(Te)&&Ne===Ce&&(n[de]=Te.map(parseFloat))}else _e?.transform&&Ne?.transform&&(ke===0||Te===0)?ke===0?pe.set(Ne.transform(ke)):n[de]=_e.transform(Te):(v||(C=Lo(e),v=!0),m.push(de),o[de]=o[de]!==void 0?o[de]:n[de],vt(pe,Te))}}),m.length){var V=m.indexOf("height")>=0?window.pageYOffset:null,H=No(n,e,m);return C.length&&C.forEach(function(de){var pe=(0,i.zs)(de,2),ke=pe[0],_e=pe[1];e.getValue(ke).set(_e)}),e.syncRender(),V!==null&&window.scrollTo({top:V}),{target:H,transitionEnd:o}}else return{target:n,transitionEnd:o}};function Ei(e,n,a,o){return tn(n)?zi(e,n,a,o):{target:n,transitionEnd:o}}var jo=function(e,n,a,o){var c=Do(e,n,o);return n=c.target,o=c.transitionEnd,Ei(e,n,a,o)};function Fo(e){return window.getComputedStyle(e)}var _i={treeType:"dom",readValueFromInstance:function(e,n){if(un(n)){var a=ni(n);return a&&a.default||0}else{var o=Fo(e);return(ht(n)?o.getPropertyValue(n):o[n])||0}},sortNodePosition:function(e,n){return e.compareDocumentPosition(n)&2?1:-1},getBaseTarget:function(e,n){var a;return(a=e.style)===null||a===void 0?void 0:a[n]},measureViewportBox:function(e,n){var a=n.transformPagePoint;return hi(e,a)},resetTransform:function(e,n,a){var o=a.transformTemplate;n.style.transform=o?o({},""):"none",e.scheduleRender()},restoreTransform:function(e,n){e.style.transform=n.style.transform},removeValueFromRenderState:function(e,n){var a=n.vars,o=n.style;delete a[e],delete o[e]},makeTargetAnimatable:function(e,n,a,o){var c=a.transformValues;o===void 0&&(o=!0);var C=n.transition,v=n.transitionEnd,m=(0,i.Tt)(n,["transition","transitionEnd"]),V=Xd(m,C||{},e);if(c&&(v&&(v=c(v)),m&&(m=c(m)),V&&(V=c(V))),o){Zd(e,m,V);var H=jo(e,m,V,v);v=H.transitionEnd,m=H.target}return(0,i.Cl)({transition:C,transitionEnd:v},m)},scrapeMotionValuesFromProps:Oa,build:function(e,n,a,o,c){e.isVisible!==void 0&&(n.style.visibility=e.isVisible?"visible":"hidden"),ua(n,a,o,c.transformTemplate)},render:ca},Ci=Po(_i),Bo=Po((0,i.Cl)((0,i.Cl)({},_i),{getBaseTarget:function(e,n){return e[n]},readValueFromInstance:function(e,n){var a;return un(n)?((a=ni(n))===null||a===void 0?void 0:a.default)||0:(n=ba.has(n)?n:va(n),e.getAttribute(n))},scrapeMotionValuesFromProps:fa,build:function(e,n,a,o,c){qt(n,a,o,c.transformTemplate)},render:sa})),Vo=function(e,n){return Ae(e)?Bo(n,{enableHardwareAcceleration:!1}):Ci(n,{enableHardwareAcceleration:!0})};function Si(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}var yr={correct:function(e,n){if(!n.target)return e;if(typeof e=="string")if(Ce.test(e))e=parseFloat(e);else return e;var a=Si(e,n.target.x),o=Si(e,n.target.y);return"".concat(a,"% ").concat(o,"%")}},Ti="_$css",Uo={correct:function(e,n){var a=n.treeScale,o=n.projectionDelta,c=e,C=e.includes("var("),v=[];C&&(e=e.replace(Io,function(Ne){return v.push(Ne),Ti}));var m=Ot.parse(e);if(m.length>5)return c;var V=Ot.createTransformer(e),H=typeof m[0]!="number"?1:0,de=o.x.scale*a.x,pe=o.y.scale*a.y;m[0+H]/=de,m[1+H]/=pe;var ke=qe(de,pe,.5);typeof m[2+H]=="number"&&(m[2+H]/=ke),typeof m[3+H]=="number"&&(m[3+H]/=ke);var _e=V(m);if(C){var Te=0;_e=_e.replace(Ti,function(){var Ne=v[Te];return Te++,Ne})}return _e}},Uc=function(e){(0,i.C6)(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return n.prototype.componentDidMount=function(){var a=this,o=this.props,c=o.visualElement,C=o.layoutGroup,v=o.switchLayoutGroup,m=o.layoutId,V=c.projection;We($c),V&&(C?.group&&C.group.add(V),v?.register&&m&&v.register(V),V.root.didUpdate(),V.addEventListener("animationComplete",function(){a.safeToRemove()}),V.setOptions((0,i.Cl)((0,i.Cl)({},V.options),{onExitComplete:function(){return a.safeToRemove()}}))),D.hasEverUpdated=!0},n.prototype.getSnapshotBeforeUpdate=function(a){var o=this,c=this.props,C=c.layoutDependency,v=c.visualElement,m=c.drag,V=c.isPresent,H=v.projection;return H&&(H.isPresent=V,m||a.layoutDependency!==C||C===void 0?H.willUpdate():this.safeToRemove(),a.isPresent!==V&&(V?H.promote():H.relegate()||jt.Ay.postRender(function(){var de;!((de=H.getStack())===null||de===void 0)&&de.members.length||o.safeToRemove()}))),null},n.prototype.componentDidUpdate=function(){var a=this.props.visualElement.projection;a&&(a.root.didUpdate(),!a.currentAnimation&&a.isLead()&&this.safeToRemove())},n.prototype.componentWillUnmount=function(){var a=this.props,o=a.visualElement,c=a.layoutGroup,C=a.switchLayoutGroup,v=o.projection;v&&(v.scheduleCheckAfterUnmount(),c?.group&&c.group.remove(v),C?.deregister&&C.deregister(v))},n.prototype.safeToRemove=function(){var a=this.props.safeToRemove;a?.()},n.prototype.render=function(){return null},n}(d.Component);function Hc(e){var n=(0,i.zs)(g(),2),a=n[0],o=n[1],c=(0,d.useContext)(ye.L);return d.createElement(Uc,(0,i.Cl)({},e,{layoutGroup:c,switchLayoutGroup:(0,d.useContext)(be),isPresent:a,safeToRemove:o}))}var $c={borderRadius:(0,i.Cl)((0,i.Cl)({},yr),{applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]}),borderTopLeftRadius:yr,borderTopRightRadius:yr,borderBottomLeftRadius:yr,borderBottomRightRadius:yr,boxShadow:Uo},Wc={measureLayout:Hc};function Kc(e,n,a){a===void 0&&(a={});var o=yn(e)?e:xr(e);return ri("",o,n,a),{stop:function(){return o.stop()},isAnimating:function(){return o.isAnimating()}}}var pc=["TopLeft","TopRight","BottomLeft","BottomRight"],Gc=pc.length,hc=function(e){return typeof e=="string"?parseFloat(e):e},wc=function(e){return typeof e=="number"||Ce.test(e)};function Zc(e,n,a,o,c,C){var v,m,V,H;c?(e.opacity=qe(0,(v=a.opacity)!==null&&v!==void 0?v:1,Yc(o)),e.opacityExit=qe((m=n.opacity)!==null&&m!==void 0?m:1,0,Xc(o))):C&&(e.opacity=qe((V=n.opacity)!==null&&V!==void 0?V:1,(H=a.opacity)!==null&&H!==void 0?H:1,o));for(var de=0;de<Gc;de++){var pe="border".concat(pc[de],"Radius"),ke=xc(n,pe),_e=xc(a,pe);if(!(ke===void 0&&_e===void 0)){ke||(ke=0),_e||(_e=0);var Te=ke===0||_e===0||wc(ke)===wc(_e);Te?(e[pe]=Math.max(qe(hc(ke),hc(_e),o),0),(dn.test(_e)||dn.test(ke))&&(e[pe]+="%")):e[pe]=_e}}(n.rotate||a.rotate)&&(e.rotate=qe(n.rotate||0,a.rotate||0,o))}function xc(e,n){var a;return(a=e[n])!==null&&a!==void 0?a:e.borderRadius}var Yc=kc(0,.5,Jr),Xc=kc(.5,.95,Yr);function kc(e,n,a){return function(o){return o<e?0:o>n?1:a(kn(e,n,o))}}function yc(e,n){e.min=n.min,e.max=n.max}function Ga(e,n){yc(e.x,n.x),yc(e.y,n.y)}function zc(e,n,a,o,c){return e-=n,e=Vr(e,1/a,o),c!==void 0&&(e=Vr(e,1/c,o)),e}function Jc(e,n,a,o,c,C,v){if(n===void 0&&(n=0),a===void 0&&(a=1),o===void 0&&(o=.5),C===void 0&&(C=e),v===void 0&&(v=e),dn.test(n)){n=parseFloat(n);var m=qe(v.min,v.max,n/100);n=m-v.min}if(typeof n=="number"){var V=qe(C.min,C.max,o);e===C&&(V-=n),e.min=zc(e.min,n,a,V,c),e.max=zc(e.max,n,a,V,c)}}function Ec(e,n,a,o,c){var C=(0,i.zs)(a,3),v=C[0],m=C[1],V=C[2];Jc(e,n[v],n[m],n[V],n.scale,o,c)}var Qc=["x","scaleX","originX"],qc=["y","scaleY","originY"];function _c(e,n,a,o){Ec(e.x,n,Qc,a?.x,o?.x),Ec(e.y,n,qc,a?.y,o?.y)}function Cc(e){return e.translate===0&&e.scale===1}function Sc(e){return Cc(e.x)&&Cc(e.y)}function Tc(e,n){return e.x.min===n.x.min&&e.x.max===n.x.max&&e.y.min===n.y.min&&e.y.max===n.y.max}var es=function(){function e(){this.members=[]}return e.prototype.add=function(n){ii(this.members,n),n.scheduleRender()},e.prototype.remove=function(n){if(oi(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){var a=this.members[this.members.length-1];a&&this.promote(a)}},e.prototype.relegate=function(n){var a=this.members.findIndex(function(v){return n===v});if(a===0)return!1;for(var o,c=a;c>=0;c--){var C=this.members[c];if(C.isPresent!==!1){o=C;break}}return o?(this.promote(o),!0):!1},e.prototype.promote=function(n,a){var o,c=this.lead;if(n!==c&&(this.prevLead=c,this.lead=n,n.show(),c)){c.instance&&c.scheduleRender(),n.scheduleRender(),n.resumeFrom=c,a&&(n.resumeFrom.preserveOpacity=!0),c.snapshot&&(n.snapshot=c.snapshot,n.snapshot.latestValues=c.animationValues||c.latestValues,n.snapshot.isShared=!0),!((o=n.root)===null||o===void 0)&&o.isUpdating&&(n.isLayoutDirty=!0);var C=n.options.crossfade;C===!1&&c.hide()}},e.prototype.exitAnimationComplete=function(){this.members.forEach(function(n){var a,o,c,C,v;(o=(a=n.options).onExitComplete)===null||o===void 0||o.call(a),(v=(c=n.resumingFrom)===null||c===void 0?void 0:(C=c.options).onExitComplete)===null||v===void 0||v.call(C)})},e.prototype.scheduleRender=function(){this.members.forEach(function(n){n.instance&&n.scheduleRender(!1)})},e.prototype.removeLeadSnapshot=function(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)},e}(),ns="translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";function Pc(e,n,a){var o=e.x.translate/n.x,c=e.y.translate/n.y,C="translate3d(".concat(o,"px, ").concat(c,"px, 0) ");if(C+="scale(".concat(1/n.x,", ").concat(1/n.y,") "),a){var v=a.rotate,m=a.rotateX,V=a.rotateY;v&&(C+="rotate(".concat(v,"deg) ")),m&&(C+="rotateX(".concat(m,"deg) ")),V&&(C+="rotateY(".concat(V,"deg) "))}var H=e.x.scale*n.x,de=e.y.scale*n.y;return C+="scale(".concat(H,", ").concat(de,")"),C===ns?"none":C}var ts=function(e,n){return e.depth-n.depth},as=function(){function e(){this.children=[],this.isDirty=!1}return e.prototype.add=function(n){ii(this.children,n),this.isDirty=!0},e.prototype.remove=function(n){oi(this.children,n),this.isDirty=!0},e.prototype.forEach=function(n){this.isDirty&&this.children.sort(ts),this.isDirty=!1,this.children.forEach(n)},e}(),Rc=1e3;function Oc(e){var n=e.attachResizeListener,a=e.defaultParent,o=e.measureScroll,c=e.checkIsScrollRoot,C=e.resetTransform;return function(){function v(m,V,H){var de=this;V===void 0&&(V={}),H===void 0&&(H=a?.()),this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=function(){de.isUpdating&&(de.isUpdating=!1,de.clearAllSnapshots())},this.updateProjection=function(){de.nodes.forEach(ss),de.nodes.forEach(fs)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.id=m,this.latestValues=V,this.root=H?H.root||H:this,this.path=H?(0,i.fX)((0,i.fX)([],(0,i.zs)(H.path),!1),[H],!1):[],this.parent=H,this.depth=H?H.depth+1:0,m&&this.root.registerPotentialNode(m,this);for(var pe=0;pe<this.path.length;pe++)this.path[pe].shouldResetTransform=!0;this.root===this&&(this.nodes=new as)}return v.prototype.addEventListener=function(m,V){return this.eventHandlers.has(m)||this.eventHandlers.set(m,new zr),this.eventHandlers.get(m).add(V)},v.prototype.notifyListeners=function(m){for(var V=[],H=1;H<arguments.length;H++)V[H-1]=arguments[H];var de=this.eventHandlers.get(m);de?.notify.apply(de,(0,i.fX)([],(0,i.zs)(V),!1))},v.prototype.hasListeners=function(m){return this.eventHandlers.has(m)},v.prototype.registerPotentialNode=function(m,V){this.potentialNodes.set(m,V)},v.prototype.mount=function(m,V){var H=this,de;if(V===void 0&&(V=!1),!this.instance){this.isSVG=m instanceof SVGElement&&m.tagName!=="svg",this.instance=m;var pe=this.options,ke=pe.layoutId,_e=pe.layout,Te=pe.visualElement;if(Te&&!Te.getInstance()&&Te.mount(m),this.root.nodes.add(this),(de=this.parent)===null||de===void 0||de.children.add(this),this.id&&this.root.potentialNodes.delete(this.id),V&&(_e||ke)&&(this.isLayoutDirty=!0),n){var Ne,nn=function(){return H.root.updateBlockedByResize=!1};n(m,function(){H.root.updateBlockedByResize=!0,clearTimeout(Ne),Ne=window.setTimeout(nn,250),D.hasAnimatedSinceResize&&(D.hasAnimatedSinceResize=!1,H.nodes.forEach(cs))})}ke&&this.root.registerSharedNode(ke,this),this.options.animate!==!1&&Te&&(ke||_e)&&this.addEventListener("didUpdate",function(sn){var mn,fn,En,An,pt,Tt=sn.delta,It=sn.hasLayoutChanged,bt=sn.hasRelativeTargetChanged,Ft=sn.layout;if(H.isTreeAnimationBlocked()){H.target=void 0,H.relativeTarget=void 0;return}var Aa=(fn=(mn=H.options.transition)!==null&&mn!==void 0?mn:Te.getDefaultTransition())!==null&&fn!==void 0?fn:bs,ta=Te.getProps(),Ca=ta.onLayoutAnimationStart,Da=ta.onLayoutAnimationComplete,Za=!H.targetLayout||!Tc(H.targetLayout,Ft)||bt,wr=!It&&bt;if(!((En=H.resumeFrom)===null||En===void 0)&&En.instance||wr||It&&(Za||!H.currentAnimation)){H.resumeFrom&&(H.resumingFrom=H.resumeFrom,H.resumingFrom.resumingFrom=void 0),H.setAnimationOrigin(Tt,wr);var La=(0,i.Cl)((0,i.Cl)({},ai(Aa,"layout")),{onPlay:Ca,onComplete:Da});Te.shouldReduceMotion&&(La.delay=0,La.type=!1),H.startAnimation(La)}else!It&&H.animationProgress===0&&H.finishAnimation(),H.isLead()&&((pt=(An=H.options).onExitComplete)===null||pt===void 0||pt.call(An));H.targetLayout=Ft})}},v.prototype.unmount=function(){var m,V;this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),(m=this.getStack())===null||m===void 0||m.remove(this),(V=this.parent)===null||V===void 0||V.children.delete(this),this.instance=void 0,jt.eO.preRender(this.updateProjection)},v.prototype.blockUpdate=function(){this.updateManuallyBlocked=!0},v.prototype.unblockUpdate=function(){this.updateManuallyBlocked=!1},v.prototype.isUpdateBlocked=function(){return this.updateManuallyBlocked||this.updateBlockedByResize},v.prototype.isTreeAnimationBlocked=function(){var m;return this.isAnimationBlocked||((m=this.parent)===null||m===void 0?void 0:m.isTreeAnimationBlocked())||!1},v.prototype.startUpdate=function(){var m;this.isUpdateBlocked()||(this.isUpdating=!0,(m=this.nodes)===null||m===void 0||m.forEach(ls))},v.prototype.willUpdate=function(m){var V,H,de;if(m===void 0&&(m=!0),this.root.isUpdateBlocked()){(H=(V=this.options).onExitComplete)===null||H===void 0||H.call(V);return}if(!this.root.isUpdating&&this.root.startUpdate(),!this.isLayoutDirty){this.isLayoutDirty=!0;for(var pe=0;pe<this.path.length;pe++){var ke=this.path[pe];ke.shouldResetTransform=!0,ke.updateScroll()}var _e=this.options,Te=_e.layoutId,Ne=_e.layout;if(!(Te===void 0&&!Ne)){var nn=(de=this.options.visualElement)===null||de===void 0?void 0:de.getProps().transformTemplate;this.prevTransformTemplateValue=nn?.(this.latestValues,""),this.updateSnapshot(),m&&this.notifyListeners("willUpdate")}}},v.prototype.didUpdate=function(){var m=this.isUpdateBlocked();if(m){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ic);return}this.isUpdating&&(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(ms),this.potentialNodes.clear()),this.nodes.forEach(ds),this.nodes.forEach(rs),this.nodes.forEach(is),this.clearAllSnapshots(),jt.qX.update(),jt.qX.preRender(),jt.qX.render())},v.prototype.clearAllSnapshots=function(){this.nodes.forEach(os),this.sharedNodes.forEach(us)},v.prototype.scheduleUpdateProjection=function(){jt.Ay.preRender(this.updateProjection,!1,!0)},v.prototype.scheduleCheckAfterUnmount=function(){var m=this;jt.Ay.postRender(function(){m.isLayoutDirty?m.root.didUpdate():m.root.checkUpdateFailed()})},v.prototype.updateSnapshot=function(){if(!(this.snapshot||!this.instance)){var m=this.measure(),V=this.removeTransform(this.removeElementScroll(m));Lc(V),this.snapshot={measured:m,layout:V,latestValues:{}}}},v.prototype.updateLayout=function(){var m;if(this.instance&&(this.updateScroll(),!(!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))){if(this.resumeFrom&&!this.resumeFrom.instance)for(var V=0;V<this.path.length;V++){var H=this.path[V];H.updateScroll()}var de=this.measure();Lc(de);var pe=this.layout;this.layout={measured:de,actual:this.removeElementScroll(de)},this.layoutCorrected=Qt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.actual),(m=this.options.visualElement)===null||m===void 0||m.notifyLayoutMeasure(this.layout.actual,pe?.actual)}},v.prototype.updateScroll=function(){this.options.layoutScroll&&this.instance&&(this.isScrollRoot=c(this.instance),this.scroll=o(this.instance))},v.prototype.resetTransform=function(){var m;if(C){var V=this.isLayoutDirty||this.shouldResetTransform,H=this.projectionDelta&&!Sc(this.projectionDelta),de=(m=this.options.visualElement)===null||m===void 0?void 0:m.getProps().transformTemplate,pe=de?.(this.latestValues,""),ke=pe!==this.prevTransformTemplateValue;V&&(H||fr(this.latestValues)||ke)&&(C(this.instance,pe),this.shouldResetTransform=!1,this.scheduleRender())}},v.prototype.measure=function(){var m=this.options.visualElement;if(!m)return Qt();var V=m.measureViewportBox(),H=this.root.scroll;return H&&(lr(V.x,H.x),lr(V.y,H.y)),V},v.prototype.removeElementScroll=function(m){var V=Qt();Ga(V,m);for(var H=0;H<this.path.length;H++){var de=this.path[H],pe=de.scroll,ke=de.options,_e=de.isScrollRoot;if(de!==this.root&&pe&&ke.layoutScroll){if(_e){Ga(V,m);var Te=this.root.scroll;Te&&(lr(V.x,-Te.x),lr(V.y,-Te.y))}lr(V.x,pe.x),lr(V.y,pe.y)}}return V},v.prototype.applyTransform=function(m,V){V===void 0&&(V=!1);var H=Qt();Ga(H,m);for(var de=0;de<this.path.length;de++){var pe=this.path[de];!V&&pe.options.layoutScroll&&pe.scroll&&pe!==pe.root&&hr(H,{x:-pe.scroll.x,y:-pe.scroll.y}),fr(pe.latestValues)&&hr(H,pe.latestValues)}return fr(this.latestValues)&&hr(H,this.latestValues),H},v.prototype.removeTransform=function(m){var V,H=Qt();Ga(H,m);for(var de=0;de<this.path.length;de++){var pe=this.path[de];if(pe.instance&&fr(pe.latestValues)){wo(pe.latestValues)&&pe.updateSnapshot();var ke=Qt(),_e=pe.measure();Ga(ke,_e),_c(H,pe.latestValues,(V=pe.snapshot)===null||V===void 0?void 0:V.layout,ke)}}return fr(this.latestValues)&&_c(H,this.latestValues),H},v.prototype.setTargetDelta=function(m){this.targetDelta=m,this.root.scheduleUpdateProjection()},v.prototype.setOptions=function(m){var V;this.options=(0,i.Cl)((0,i.Cl)((0,i.Cl)({},this.options),m),{crossfade:(V=m.crossfade)!==null&&V!==void 0?V:!0})},v.prototype.clearMeasurements=function(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1},v.prototype.resolveTargetDelta=function(){var m,V=this.options,H=V.layout,de=V.layoutId;!this.layout||!(H||de)||(!this.targetDelta&&!this.relativeTarget&&(this.relativeParent=this.getClosestProjectingParent(),this.relativeParent&&this.relativeParent.layout&&(this.relativeTarget=Qt(),this.relativeTargetOrigin=Qt(),_r(this.relativeTargetOrigin,this.layout.actual,this.relativeParent.layout.actual),Ga(this.relativeTarget,this.relativeTargetOrigin))),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qt(),this.targetWithTransforms=Qt()),this.relativeTarget&&this.relativeTargetOrigin&&(!((m=this.relativeParent)===null||m===void 0)&&m.target)?sc(this.target,this.relativeTarget,this.relativeParent.target):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.actual):Ga(this.target,this.layout.actual),Ka(this.target,this.targetDelta)):Ga(this.target,this.layout.actual),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.relativeParent=this.getClosestProjectingParent(),this.relativeParent&&!!this.relativeParent.resumingFrom==!!this.resumingFrom&&!this.relativeParent.options.layoutScroll&&this.relativeParent.target&&(this.relativeTarget=Qt(),this.relativeTargetOrigin=Qt(),_r(this.relativeTargetOrigin,this.target,this.relativeParent.target),Ga(this.relativeTarget,this.relativeTargetOrigin)))))},v.prototype.getClosestProjectingParent=function(){if(!(!this.parent||fr(this.parent.latestValues)))return(this.parent.relativeTarget||this.parent.targetDelta)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()},v.prototype.calcProjection=function(){var m,V=this.options,H=V.layout,de=V.layoutId;if(this.isTreeAnimating=!!(!((m=this.parent)===null||m===void 0)&&m.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!(!this.layout||!(H||de))){var pe=this.getLead();Ga(this.layoutCorrected,this.layout.actual),tr(this.layoutCorrected,this.treeScale,this.path,!!this.resumingFrom||this!==pe);var ke=pe.target;if(ke){this.projectionDelta||(this.projectionDelta=Cr(),this.projectionDeltaWithTransform=Cr());var _e=this.treeScale.x,Te=this.treeScale.y,Ne=this.projectionTransform;kr(this.projectionDelta,this.layoutCorrected,ke,this.latestValues),this.projectionTransform=Pc(this.projectionDelta,this.treeScale),(this.projectionTransform!==Ne||this.treeScale.x!==_e||this.treeScale.y!==Te)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",ke))}}},v.prototype.hide=function(){this.isVisible=!1},v.prototype.show=function(){this.isVisible=!0},v.prototype.scheduleRender=function(m){var V,H,de;m===void 0&&(m=!0),(H=(V=this.options).scheduleRender)===null||H===void 0||H.call(V),m&&((de=this.getStack())===null||de===void 0||de.scheduleRender()),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)},v.prototype.setAnimationOrigin=function(m,V){var H=this,de;V===void 0&&(V=!1);var pe=this.snapshot,ke=pe?.latestValues||{},_e=(0,i.Cl)({},this.latestValues),Te=Cr();this.relativeTarget=this.relativeTargetOrigin=void 0,this.attemptToResolveRelativeTarget=!V;var Ne=Qt(),nn=pe?.isShared,sn=(((de=this.getStack())===null||de===void 0?void 0:de.members.length)||0)<=1,mn=!!(nn&&!sn&&this.options.crossfade===!0&&!this.path.some(vs));this.animationProgress=0,this.mixTargetDelta=function(fn){var En,An=fn/1e3;Mc(Te.x,m.x,An),Mc(Te.y,m.y,An),H.setTargetDelta(Te),H.relativeTarget&&H.relativeTargetOrigin&&H.layout&&(!((En=H.relativeParent)===null||En===void 0)&&En.layout)&&(_r(Ne,H.layout.actual,H.relativeParent.layout.actual),gs(H.relativeTarget,H.relativeTargetOrigin,Ne,An)),nn&&(H.animationValues=_e,Zc(_e,ke,H.latestValues,An,mn,sn)),H.root.scheduleUpdateProjection(),H.scheduleRender(),H.animationProgress=An},this.mixTargetDelta(0)},v.prototype.startAnimation=function(m){var V=this,H,de;this.notifyListeners("animationStart"),(H=this.currentAnimation)===null||H===void 0||H.stop(),this.resumingFrom&&((de=this.resumingFrom.currentAnimation)===null||de===void 0||de.stop()),this.pendingAnimation&&(jt.eO.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=jt.Ay.update(function(){D.hasAnimatedSinceResize=!0,V.currentAnimation=Kc(0,Rc,(0,i.Cl)((0,i.Cl)({},m),{onUpdate:function(pe){var ke;V.mixTargetDelta(pe),(ke=m.onUpdate)===null||ke===void 0||ke.call(m,pe)},onComplete:function(){var pe;(pe=m.onComplete)===null||pe===void 0||pe.call(m),V.completeAnimation()}})),V.resumingFrom&&(V.resumingFrom.currentAnimation=V.currentAnimation),V.pendingAnimation=void 0})},v.prototype.completeAnimation=function(){var m;this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0),(m=this.getStack())===null||m===void 0||m.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")},v.prototype.finishAnimation=function(){var m;this.currentAnimation&&((m=this.mixTargetDelta)===null||m===void 0||m.call(this,Rc),this.currentAnimation.stop()),this.completeAnimation()},v.prototype.applyTransformsToTarget=function(){var m=this.getLead(),V=m.targetWithTransforms,H=m.target,de=m.layout,pe=m.latestValues;!V||!H||!de||(Ga(V,H),hr(V,pe),kr(this.projectionDeltaWithTransform,this.layoutCorrected,V,pe))},v.prototype.registerSharedNode=function(m,V){var H,de,pe;this.sharedNodes.has(m)||this.sharedNodes.set(m,new es);var ke=this.sharedNodes.get(m);ke.add(V),V.promote({transition:(H=V.options.initialPromotionConfig)===null||H===void 0?void 0:H.transition,preserveFollowOpacity:(pe=(de=V.options.initialPromotionConfig)===null||de===void 0?void 0:de.shouldPreserveFollowOpacity)===null||pe===void 0?void 0:pe.call(de,V)})},v.prototype.isLead=function(){var m=this.getStack();return m?m.lead===this:!0},v.prototype.getLead=function(){var m,V=this.options.layoutId;return V?((m=this.getStack())===null||m===void 0?void 0:m.lead)||this:this},v.prototype.getPrevLead=function(){var m,V=this.options.layoutId;return V?(m=this.getStack())===null||m===void 0?void 0:m.prevLead:void 0},v.prototype.getStack=function(){var m=this.options.layoutId;if(m)return this.root.sharedNodes.get(m)},v.prototype.promote=function(m){var V=m===void 0?{}:m,H=V.needsReset,de=V.transition,pe=V.preserveFollowOpacity,ke=this.getStack();ke&&ke.promote(this,pe),H&&(this.projectionDelta=void 0,this.needsReset=!0),de&&this.setOptions({transition:de})},v.prototype.relegate=function(){var m=this.getStack();return m?m.relegate(this):!1},v.prototype.resetRotation=function(){var m=this.options.visualElement;if(m){for(var V=!1,H={},de=0;de<Le.length;de++){var pe=Le[de],ke="rotate"+pe;m.getStaticValue(ke)&&(V=!0,H[ke]=m.getStaticValue(ke),m.setStaticValue(ke,0))}if(V){m?.syncRender();for(var ke in H)m.setStaticValue(ke,H[ke]);m.scheduleRender()}}},v.prototype.getProjectionStyles=function(m){var V,H,de,pe,ke,_e;m===void 0&&(m={});var Te={};if(!this.instance||this.isSVG)return Te;if(this.isVisible)Te.visibility="";else return{visibility:"hidden"};var Ne=(V=this.options.visualElement)===null||V===void 0?void 0:V.getProps().transformTemplate;if(this.needsReset)return this.needsReset=!1,Te.opacity="",Te.pointerEvents=ha(m.pointerEvents)||"",Te.transform=Ne?Ne(this.latestValues,""):"none",Te;var nn=this.getLead();if(!this.projectionDelta||!this.layout||!nn.target){var sn={};return this.options.layoutId&&(sn.opacity=(H=this.latestValues.opacity)!==null&&H!==void 0?H:1,sn.pointerEvents=ha(m.pointerEvents)||""),this.hasProjected&&!fr(this.latestValues)&&(sn.transform=Ne?Ne({},""):"none",this.hasProjected=!1),sn}var mn=nn.animationValues||nn.latestValues;this.applyTransformsToTarget(),Te.transform=Pc(this.projectionDeltaWithTransform,this.treeScale,mn),Ne&&(Te.transform=Ne(mn,Te.transform));var fn=this.projectionDelta,En=fn.x,An=fn.y;Te.transformOrigin="".concat(En.origin*100,"% ").concat(An.origin*100,"% 0"),nn.animationValues?Te.opacity=nn===this?(pe=(de=mn.opacity)!==null&&de!==void 0?de:this.latestValues.opacity)!==null&&pe!==void 0?pe:1:this.preserveOpacity?this.latestValues.opacity:mn.opacityExit:Te.opacity=nn===this?(ke=mn.opacity)!==null&&ke!==void 0?ke:"":(_e=mn.opacityExit)!==null&&_e!==void 0?_e:0;for(var pt in Ie)if(mn[pt]!==void 0){var Tt=Ie[pt],It=Tt.correct,bt=Tt.applyTo,Ft=It(mn[pt],nn);if(bt)for(var Aa=bt.length,ta=0;ta<Aa;ta++)Te[bt[ta]]=Ft;else Te[pt]=Ft}return this.options.layoutId&&(Te.pointerEvents=nn===this?ha(m.pointerEvents)||"":"none"),Te},v.prototype.clearSnapshot=function(){this.resumeFrom=this.snapshot=void 0},v.prototype.resetTree=function(){this.root.nodes.forEach(function(m){var V;return(V=m.currentAnimation)===null||V===void 0?void 0:V.stop()}),this.root.nodes.forEach(Ic),this.root.sharedNodes.clear()},v}()}function rs(e){e.updateLayout()}function is(e){var n,a,o,c,C=(a=(n=e.resumeFrom)===null||n===void 0?void 0:n.snapshot)!==null&&a!==void 0?a:e.snapshot;if(e.isLead()&&e.layout&&C&&e.hasListeners("didUpdate")){var v=e.layout,m=v.actual,V=v.measured;e.options.animationType==="size"?$a(function(mn){var fn=C.isShared?C.measured[mn]:C.layout[mn],En=nr(fn);fn.min=m[mn].min,fn.max=fn.min+En}):e.options.animationType==="position"&&$a(function(mn){var fn=C.isShared?C.measured[mn]:C.layout[mn],En=nr(m[mn]);fn.max=fn.min+En});var H=Cr();kr(H,m,C.layout);var de=Cr();C.isShared?kr(de,e.applyTransform(V,!0),C.measured):kr(de,m,C.layout);var pe=!Sc(H),ke=!1;if(!e.resumeFrom&&(e.relativeParent=e.getClosestProjectingParent(),e.relativeParent&&!e.relativeParent.resumeFrom)){var _e=e.relativeParent,Te=_e.snapshot,Ne=_e.layout;if(Te&&Ne){var nn=Qt();_r(nn,C.layout,Te.layout);var sn=Qt();_r(sn,m,Ne.actual),Tc(nn,sn)||(ke=!0)}}e.notifyListeners("didUpdate",{layout:m,snapshot:C,delta:de,layoutDelta:H,hasLayoutChanged:pe,hasRelativeTargetChanged:ke})}else e.isLead()&&((c=(o=e.options).onExitComplete)===null||c===void 0||c.call(o));e.options.transition=void 0}function os(e){e.clearSnapshot()}function Ic(e){e.clearMeasurements()}function ds(e){var n=e.options.visualElement;n?.getProps().onBeforeLayoutMeasure&&n.notifyBeforeLayoutMeasure(),e.resetTransform()}function cs(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function ss(e){e.resolveTargetDelta()}function fs(e){e.calcProjection()}function ls(e){e.resetRotation()}function us(e){e.removeLeadSnapshot()}function Mc(e,n,a){e.translate=qe(n.translate,0,a),e.scale=qe(n.scale,1,a),e.origin=n.origin,e.originPoint=n.originPoint}function Ac(e,n,a,o){e.min=qe(n.min,a.min,o),e.max=qe(n.max,a.max,o)}function gs(e,n,a,o){Ac(e.x,n.x,a.x,o),Ac(e.y,n.y,a.y,o)}function vs(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var bs={duration:.45,ease:[.4,0,.1,1]};function ms(e,n){for(var a=e.root,o=e.path.length-1;o>=0;o--)if(e.path[o].instance){a=e.path[o];break}var c=a&&a!==e.root?a.instance:document,C=c.querySelector('[data-projection-id="'.concat(n,'"]'));C&&e.mount(C,!0)}function Dc(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function Lc(e){Dc(e.x),Dc(e.y)}var ps=Oc({attachResizeListener:function(e,n){return Ia(e,"resize",n)},measureScroll:function(){return{x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}},checkIsScrollRoot:function(){return!0}}),Ho={current:void 0},hs=Oc({measureScroll:function(e){return{x:e.scrollLeft,y:e.scrollTop}},defaultParent:function(){if(!Ho.current){var e=new ps(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),Ho.current=e}return Ho.current},resetTransform:function(e,n){e.style.transform=n??"none"},checkIsScrollRoot:function(e){return window.getComputedStyle(e).position==="fixed"}}),Nc=(0,i.Cl)((0,i.Cl)((0,i.Cl)((0,i.Cl)({},dc),Vt),So),Wc),ws=ve(function(e,n){return Ua(e,n,Nc,Vo,hs)});function xs(e){return createMotionComponent(createDomMotionConfig(e,{forwardMotionProps:!1},Nc,createDomVisualElement,HTMLProjectionNode))}},4271:(F,P,t)=>{var i=t(6990),d=t(1784),r=t(6184),x="[object Arguments]",l="[object Array]",p="[object Boolean]",s="[object Date]",f="[object Error]",z="[object Function]",N="[object Map]",h="[object Number]",A="[object Object]",I="[object RegExp]",b="[object Set]",u="[object String]",S="[object WeakMap]",E="[object ArrayBuffer]",L="[object DataView]",T="[object Float32Array]",Q="[object Float64Array]",G="[object Int8Array]",se="[object Int16Array]",U="[object Int32Array]",y="[object Uint8Array]",B="[object Uint8ClampedArray]",ne="[object Uint16Array]",M="[object Uint32Array]",$={};$[T]=$[Q]=$[G]=$[se]=$[U]=$[y]=$[B]=$[ne]=$[M]=!0,$[x]=$[l]=$[E]=$[p]=$[L]=$[s]=$[f]=$[z]=$[N]=$[h]=$[A]=$[I]=$[b]=$[u]=$[S]=!1;function ae(J){return r(J)&&d(J.length)&&!!$[i(J)]}F.exports=ae},4287:(F,P,t)=>{var i=t(1960),d=Object.prototype,r=d.hasOwnProperty;function x(l){var p=this.__data__;return i?p[l]!==void 0:r.call(p,l)}F.exports=x},4360:(F,P,t)=>{var i=t(6990),d=t(6015),r="[object AsyncFunction]",x="[object Function]",l="[object GeneratorFunction]",p="[object Proxy]";function s(f){if(!d(f))return!1;var z=i(f);return z==x||z==l||z==r||z==p}F.exports=s},4377:(F,P,t)=>{"use strict";t.d(P,{N:()=>x});var i=t(4209),d=t(2776),r=t.n(d);const x=(0,d.forwardRef)((l,p)=>r().createElement(i.$,{...l,as:"a",kind:"tertiary",ref:p}))},4383:F=>{var P=Array.isArray;F.exports=P},4445:(F,P,t)=>{"use strict";t.d(P,{st:()=>p});var i=t(2776),d=t(7570);const r=(0,i.createContext)({sendAnalytics:()=>{(0,d.O)([{prop:!0,message:"`analytics` prop set on component without function defined for `AnalyticsContext.Provider`."}])}});var x=Object.defineProperty,l=(N,h)=>x(N,"name",{value:h,configurable:!0});const p=l(()=>(0,i.useContext)(r),"useAnalytics");var s=Object.defineProperty,f=(N,h)=>s(N,"name",{value:h,configurable:!0});const z=null},4465:(F,P,t)=>{var i=t(7183),d=i.Uint8Array;F.exports=d},4505:(F,P)=>{"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=typeof Symbol=="function"&&Symbol.for,i=t?Symbol.for("react.element"):60103,d=t?Symbol.for("react.portal"):60106,r=t?Symbol.for("react.fragment"):60107,x=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,p=t?Symbol.for("react.provider"):60109,s=t?Symbol.for("react.context"):60110,f=t?Symbol.for("react.async_mode"):60111,z=t?Symbol.for("react.concurrent_mode"):60111,N=t?Symbol.for("react.forward_ref"):60112,h=t?Symbol.for("react.suspense"):60113,A=t?Symbol.for("react.suspense_list"):60120,I=t?Symbol.for("react.memo"):60115,b=t?Symbol.for("react.lazy"):60116,u=t?Symbol.for("react.block"):60121,S=t?Symbol.for("react.fundamental"):60117,E=t?Symbol.for("react.responder"):60118,L=t?Symbol.for("react.scope"):60119;function T(G){if(typeof G=="object"&&G!==null){var se=G.$$typeof;switch(se){case i:switch(G=G.type,G){case f:case z:case r:case l:case x:case h:return G;default:switch(G=G&&G.$$typeof,G){case s:case N:case b:case I:case p:return G;default:return se}}case d:return se}}}function Q(G){return T(G)===z}P.AsyncMode=f,P.ConcurrentMode=z,P.ContextConsumer=s,P.ContextProvider=p,P.Element=i,P.ForwardRef=N,P.Fragment=r,P.Lazy=b,P.Memo=I,P.Portal=d,P.Profiler=l,P.StrictMode=x,P.Suspense=h,P.isAsyncMode=function(G){return Q(G)||T(G)===f},P.isConcurrentMode=Q,P.isContextConsumer=function(G){return T(G)===s},P.isContextProvider=function(G){return T(G)===p},P.isElement=function(G){return typeof G=="object"&&G!==null&&G.$$typeof===i},P.isForwardRef=function(G){return T(G)===N},P.isFragment=function(G){return T(G)===r},P.isLazy=function(G){return T(G)===b},P.isMemo=function(G){return T(G)===I},P.isPortal=function(G){return T(G)===d},P.isProfiler=function(G){return T(G)===l},P.isStrictMode=function(G){return T(G)===x},P.isSuspense=function(G){return T(G)===h},P.isValidElementType=function(G){return typeof G=="string"||typeof G=="function"||G===r||G===z||G===l||G===x||G===h||G===A||typeof G=="object"&&G!==null&&(G.$$typeof===b||G.$$typeof===I||G.$$typeof===p||G.$$typeof===s||G.$$typeof===N||G.$$typeof===S||G.$$typeof===E||G.$$typeof===L||G.$$typeof===u)},P.typeOf=T},4546:(F,P,t)=>{"use strict";t.d(P,{eO:()=>I,Ay:()=>T,qX:()=>b,KK:()=>L});const i=1/60*1e3,d=typeof performance<"u"?()=>performance.now():()=>Date.now(),r=typeof window<"u"?Q=>window.requestAnimationFrame(Q):Q=>setTimeout(()=>Q(d()),i);function x(Q){let G=[],se=[],U=0,y=!1,B=!1;const ne=new WeakSet,M={schedule:($,ae=!1,J=!1)=>{const xe=J&&y,q=xe?G:se;return ae&&ne.add($),q.indexOf($)===-1&&(q.push($),xe&&y&&(U=G.length)),$},cancel:$=>{const ae=se.indexOf($);ae!==-1&&se.splice(ae,1),ne.delete($)},process:$=>{if(y){B=!0;return}if(y=!0,[G,se]=[se,G],se.length=0,U=G.length,U)for(let ae=0;ae<U;ae++){const J=G[ae];J($),ne.has(J)&&(M.schedule(J),Q())}y=!1,B&&(B=!1,M.process($))}};return M}const l=40;let p=!0,s=!1,f=!1;const z={delta:0,timestamp:0},N=["read","update","preRender","render","postRender"],h=N.reduce((Q,G)=>(Q[G]=x(()=>s=!0),Q),{}),A=N.reduce((Q,G)=>{const se=h[G];return Q[G]=(U,y=!1,B=!1)=>(s||E(),se.schedule(U,y,B)),Q},{}),I=N.reduce((Q,G)=>(Q[G]=h[G].cancel,Q),{}),b=N.reduce((Q,G)=>(Q[G]=()=>h[G].process(z),Q),{}),u=Q=>h[Q].process(z),S=Q=>{s=!1,z.delta=p?i:Math.max(Math.min(Q-z.timestamp,l),1),z.timestamp=Q,f=!0,N.forEach(u),f=!1,s&&(p=!1,r(S))},E=()=>{s=!0,p=!0,f||r(S)},L=()=>z,T=A},4683:F=>{var P=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function i(d,r){var x=typeof d;return r=r??P,!!r&&(x=="number"||x!="symbol"&&t.test(d))&&d>-1&&d%1==0&&d<r}F.exports=i},4780:(F,P,t)=>{"use strict";t.d(P,{zU:()=>ae,pK:()=>se,et:()=>T,kX:()=>u});var i=t(535),d=t(5917);const r="_sentryMetrics";function x(q){const le=q[r];if(!le)return;const te={};for(const[,[Z,ce]]of le)(te[Z]||(te[Z]=[])).push((0,i.Ce)(ce));return te}function l(q,le,te,Z,ce,O,ue){const ee=q[r]||(q[r]=new Map),ie=`${le}:${te}@${ce}`,ye=ee.get(ue);if(ye){const[,be]=ye;ee.set(ue,[ie,{min:Math.min(be.min,Z),max:Math.max(be.max,Z),count:be.count+=1,sum:be.sum+=Z,tags:be.tags}])}else ee.set(ue,[ie,{min:Z,max:Z,count:1,sum:Z,tags:O}])}var p=t(9959);const s=0,f=1,z=2;function N(q){if(q<400&&q>=100)return{code:f};if(q>=400&&q<500)switch(q){case 401:return{code:z,message:"unauthenticated"};case 403:return{code:z,message:"permission_denied"};case 404:return{code:z,message:"not_found"};case 409:return{code:z,message:"already_exists"};case 413:return{code:z,message:"failed_precondition"};case 429:return{code:z,message:"resource_exhausted"};case 499:return{code:z,message:"cancelled"};default:return{code:z,message:"invalid_argument"}}if(q>=500&&q<600)switch(q){case 501:return{code:z,message:"unimplemented"};case 503:return{code:z,message:"unavailable"};case 504:return{code:z,message:"deadline_exceeded"};default:return{code:z,message:"internal_error"}}return{code:z,message:"unknown_error"}}function h(q,le){q.setAttribute("http.response.status_code",le);const te=N(le);te.message!=="unknown_error"&&q.setStatus(te)}const A=0,I=1;function b(q){const{spanId:le,traceId:te}=q.spanContext(),{data:Z,op:ce,parent_span_id:O,status:ue,origin:D}=T(q);return dropUndefinedKeys({parent_span_id:O,span_id:le,trace_id:te,data:Z,op:ce,status:ue,origin:D})}function u(q){const{spanId:le,traceId:te}=q.spanContext(),{parent_span_id:Z}=T(q);return(0,i.Ce)({parent_span_id:Z,span_id:le,trace_id:te})}function S(q){const{traceId:le,spanId:te}=q.spanContext(),Z=se(q);return generateSentryTraceHeader(le,te,Z)}function E(q){return typeof q=="number"?L(q):Array.isArray(q)?q[0]+q[1]/1e9:q instanceof Date?L(q.getTime()):(0,d.zf)()}function L(q){return q>9999999999?q/1e3:q}function T(q){if(G(q))return q.getSpanJSON();try{const{spanId:le,traceId:te}=q.spanContext();if(Q(q)){const{attributes:Z,startTime:ce,name:O,endTime:ue,parentSpanId:D,status:ee}=q;return(0,i.Ce)({span_id:le,trace_id:te,data:Z,description:O,parent_span_id:D,start_timestamp:E(ce),timestamp:E(ue)||void 0,status:U(ee),op:Z[p.uT],origin:Z[p.JD],_metrics_summary:x(q)})}return{span_id:le,trace_id:te}}catch{return{}}}function Q(q){const le=q;return!!le.attributes&&!!le.startTime&&!!le.name&&!!le.endTime&&!!le.status}function G(q){return typeof q.getSpanJSON=="function"}function se(q){const{traceFlags:le}=q.spanContext();return le===I}function U(q){if(!(!q||q.code===s))return q.code===f?"ok":q.message||"unknown_error"}const y="_sentryChildSpans",B="_sentryRootSpan";function ne(q,le){const te=q[B]||q;addNonEnumerableProperty(le,B,te),q[y]?q[y].add(le):addNonEnumerableProperty(q,y,new Set([le]))}function M(q,le){q[y]&&q[y].delete(le)}function $(q){const le=new Set;function te(Z){if(!le.has(Z)&&se(Z)){le.add(Z);const ce=Z[y]?Array.from(Z[y]):[];for(const O of ce)te(O)}}return te(q),Array.from(le)}function ae(q){return q[B]||q}function J(){const q=getMainCarrier(),le=getAsyncContextStrategy(q);return le.getActiveSpan?le.getActiveSpan():_getSpanForScope(getCurrentScope())}function xe(q,le,te,Z,ce,O){const ue=J();ue&&updateMetricSummaryOnSpan(ue,q,le,te,Z,ce,O)}},4848:(F,P,t)=>{"use strict";F.exports=t(1020)},4872:(F,P,t)=>{"use strict";t.d(P,{a:()=>be});var i=t(536),d=t(6978),r=t(622),x=t(4238),l=t(2776),p=t.n(l);const s={type:"keyframes",duration:.3};var f=t(738),z=[],N=[];function h(j,w){if(j&&typeof document<"u"){var W,oe=w.prepend===!0?"prepend":"append",ve=w.singleTag===!0,Se=typeof w.container=="string"?document.querySelector(w.container):document.getElementsByTagName("head")[0];if(ve){var Ae=z.indexOf(Se);Ae===-1&&(Ae=z.push(Se)-1,N[Ae]={}),W=N[Ae]&&N[Ae][oe]?N[Ae][oe]:N[Ae][oe]=Ie()}else W=Ie();j.charCodeAt(0)===65279&&(j=j.substring(1)),W.styleSheet?W.styleSheet.cssText+=j:W.appendChild(document.createTextNode(j))}function Ie(){var We=document.createElement("style");if(We.setAttribute("type","text/css"),w.attributes)for(var Le=Object.keys(w.attributes),Ke=0;Ke<Le.length;Ke++)We.setAttribute(Le[Ke],w.attributes[Le[Ke]]);var Ze=oe==="prepend"?"afterbegin":"beforeend";return Se.insertAdjacentElement(Ze,We),We}}var A=`.mds-carousel-dot {
  width: 12px;
  height: 12px;

  background-color: var(--control-icon-weak-disabled);
  border-radius: 6px;

  transition: var(--effects-transition)
}
.mds-carousel-dot.mds-carousel-dot-active {
    background-color: var(--interact-icon-default);
  }
`;h(A,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/modal"}});var I=Object.defineProperty,b=(j,w)=>I(j,"name",{value:w,configurable:!0});const u=b(({active:j})=>{const w=(0,d.U)({"mds-carousel-dot":!0,"mds-carousel-dot-active":j});return p().createElement("div",{className:w})},"Dot"),S=b(({activeStep:j,className:w,steps:W,...oe})=>{const ve=(0,d.U)("mds-carousel",w),Se=(0,l.useMemo)(()=>[...Array.from({length:W}).keys()],[W]);return p().createElement(f.s,{gap:"sm",...oe,className:ve},Se.map(Ae=>p().createElement(u,{active:Ae===j,key:Ae})))},"Carousel");var E=`.mds-rebuild-modal-content {
  overflow-y: auto;

  max-height: calc(80vh - 156px);
  margin: 0 -24px;
  padding: 0 24px;

  border-top: 1px solid var(--control-border-weak-default);
  border-bottom: 1px solid var(--control-border-weak-default)
}
.mds-rebuild-modal-content.mds-rebuild-modal-content-scroll-at-top {
    border-top: none;
  }
.mds-rebuild-modal-content.mds-rebuild-modal-content-scroll-at-bottom {
    border-bottom: none;
  }
`;h(E,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/modal"}});var L=Object.defineProperty,T=(j,w)=>L(j,"name",{value:w,configurable:!0});const Q=T(({children:j,className:w,...W})=>{const oe=(0,l.useRef)(null),[ve,Se]=(0,l.useState)(!0),[Ae,Ie]=(0,l.useState)(!1),We=T(Ze=>{Ze&&(Se(Ze.scrollTop===0),Ie(Ze.scrollTop+Ze.clientHeight>=Ze.scrollHeight-1))},"computeScrollPosition");(0,l.useEffect)(()=>{We(oe.current)},[]);const Le=T(()=>{We(oe.current)},"handleScroll"),Ke=(0,d.U)("mds-rebuild-modal-content",{"mds-rebuild-modal-content-scroll-at-top":ve,"mds-rebuild-modal-content-scroll-at-bottom":Ae},w);return p().createElement("div",{className:Ke,onScroll:Le,ref:oe,...W},j)},"Content");var G=t(9309),se=Object.defineProperty,U=(j,w)=>se(j,"name",{value:w,configurable:!0});const y=U(({className:j,...w})=>{const W=(0,d.U)("mds-modal-divider",j);return p().createElement(G.c,{className:W,...w})},"ModalDivider");y.displayName="Modal.Divider";var B=`.mds-rebuild-modal-hero {
  width: calc(100% + 48px);
  margin: -24px -24px 24px;
  border-radius: 8px 8px 0 0;
}
`;h(B,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/modal"}});var ne=Object.defineProperty,M=(j,w)=>ne(j,"name",{value:w,configurable:!0});const $=M(({className:j,...w})=>{const W=(0,d.U)("mds-rebuild-modal-hero",j);return p().createElement("img",{alt:"modal-hero",className:W,...w})},"Hero");var ae=t(4445),J=Object.defineProperty,xe=(j,w)=>J(j,"name",{value:w,configurable:!0});const q=xe((j,w={})=>{const{keys:W,type:oe="keyup"}=w;return(0,l.useEffect)(()=>{const ve=xe(Se=>{(!W||W.includes(Se.key))&&j()},"listener");return document.addEventListener(oe,ve),()=>document.removeEventListener(oe,ve)},[j,W,oe])},"useKeyboard");var le=t(5034),te=`.mds-rebuild-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;

  overflow: auto;
  display: grid;
  align-items: center;
  justify-items: center;
  place-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0,0,0,0.4);

  background-color: rgba(0,0,0,0.4);

  background-color: var(--overlay-bg-default, rgba(0,0,0,0.4));
}
`;h(te,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/modal"}});var Z=Object.defineProperty,ce=(j,w)=>Z(j,"name",{value:w,configurable:!0});const O=ce(({analytics:j,children:w,onClose:W})=>{const oe=(0,l.useRef)(null),[ve,Se]=(0,l.useState)(),{sendAnalytics:Ae}=(0,ae.st)(),Ie=(0,l.useCallback)(Ke=>{const Ze=Ke==="esc"?"keyup":"click";j?.events.includes(Ze)&&Ae({...j,component:"modal",event:"click"}),W?.(Ke)},[j,W,Ae]),We=(0,l.useMemo)(()=>j?Ie:W,[W,Ie,j]);q(()=>We("esc"),{keys:["Escape"]});const Le=(0,le.YK)("modal-overlay");return p().createElement(x.P.div,{animate:{opacity:1},className:"mds-rebuild-modal-overlay",exit:{opacity:0},initial:{opacity:0},onMouseDown:Ke=>{Se(Ke.target)},onMouseUp:Ke=>{Ke.target===oe.current&&Ke.target===ve&&We("overlay")},ref:oe,style:{zIndex:Le},transition:s},p().createElement(le.$F,{parentOffset:Le},w))},"Overlay");var ue=`/* TODO: Replace \`mds-rebuild-modal\` with \`mds-modal\` once we have removed the existing modal. */
.mds-rebuild-modal {
  --mds-modal-padding: 24px;

  overflow-y: auto;

  box-sizing: border-box;
  width: var(--mds-modal-width);
  min-width: 384px;
  max-width: 912px;
  max-height: 80vh;
  padding: var(--mds-modal-padding);

  background-color: var(--control-bg-weak-default);
  border-radius: 8px;
  box-shadow: var(--elevation-raised-default)
}
.mds-rebuild-modal > .mds-rebuild-modal-hero {
    max-height: var(--mds-modal-hero-max-height);
  }
.mds-rebuild-modal.mds-rebuild-modal-xl {
    --mds-modal-width: 912px;
    --mds-modal-hero-max-height: 512px;
  }
.mds-rebuild-modal.mds-rebuild-modal-lg {
    --mds-modal-width: 768px;
    --mds-modal-hero-max-height: 384px;
  }
.mds-rebuild-modal.mds-rebuild-modal-md {
    --mds-modal-width: 576px;
    --mds-modal-hero-max-height: 288px;
  }
.mds-rebuild-modal.mds-rebuild-modal-sm {
    --mds-modal-width: 384px;
  }
.mds-rebuild-modal .mds-modal-divider {
    margin-right: calc(var(--mds-modal-padding) * -1);
    margin-left: calc(var(--mds-modal-padding) * -1);
  }

.mds-rebuild-modal-open {
  overflow: hidden;
}
`;h(ue,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/modal"}});var D=Object.defineProperty,ee=(j,w)=>D(j,"name",{value:w,configurable:!0});const ie="mds-rebuild-modal-open",ye=ee(j=>{const[w,W]=(0,l.useState)(),[oe,ve]=(0,l.useState)(!1);return(0,l.useEffect)(()=>(ve(!0),()=>ve(!1)),[]),(0,l.useEffect)(()=>{oe&&W(j)},[j,oe]),w},"useDeferState"),be=ee(({analytics:j,children:w,className:W,isOpen:oe=!1,onClose:ve,root:Se,size:Ae="md"})=>{const Ie=ye(oe),We=(0,d.U)(W,"mds-rebuild-modal",{[`mds-rebuild-modal-${Ae}`]:typeof Ae=="string"});(0,l.useEffect)(()=>(Ie?document.body.classList.add(ie):document.body.classList.remove(ie),()=>{document.body.classList.remove(ie)}),[Ie]);const{context:Le,refs:Ke}=(0,i.we)({open:!!Ie}),Ze=(0,i.It)(Le),{getFloatingProps:ln}=(0,i.bv)([Ze]),Rn=typeof Ae=="number"?{width:Ae}:{};return p().createElement(i.XF,{...Se?{root:Se}:{}},p().createElement(r.N,null,Ie&&p().createElement(O,{analytics:j,onClose:un=>ve?.(un)},p().createElement(i.s3,{context:Le},p().createElement(x.P.div,{animate:{opacity:1,scaleX:1,scaleY:1},"aria-modal":"true",className:We,exit:{opacity:0,scaleX:.9,scaleY:.9},initial:{opacity:0,scaleX:1.1,scaleY:1.1},ref:Ke.setFloating,role:"dialog",style:Rn,transition:s,...ln()},w)))))},"Modal");be.Carousel=S,be.Content=Q,be.Hero=$,be.Divider=y},4892:F=>{function P(t,i){if(!(i==="constructor"&&typeof t[i]=="function")&&i!="__proto__")return t[i]}F.exports=P},4966:(F,P,t)=>{"use strict";t.d(P,{H7:()=>T,K8:()=>s,qv:()=>L,u:()=>E});var i=t(7449),d=t(5868),r=t(6932),x=t(161),l=t(535),p=t(7326);function s(y,B){const ne=N(y,B),M={type:u(B),value:S(B)};return ne.length&&(M.stacktrace={frames:ne}),M.type===void 0&&M.value===""&&(M.value="Unrecoverable error caught"),M}function f(y,B,ne,M){const $=(0,i.KU)(),ae=$&&$.getOptions().normalizeDepth,J=U(B),xe={__serialized__:(0,x.cd)(B,ae)};if(J)return{exception:{values:[s(y,J)]},extra:xe};const q={exception:{values:[{type:(0,d.xH)(B)?B.constructor.name:M?"UnhandledRejection":"Error",value:G(B,{isUnhandledRejection:M})}]},extra:xe};if(ne){const le=N(y,ne);le.length&&(q.exception.values[0].stacktrace={frames:le})}return q}function z(y,B){return{exception:{values:[s(y,B)]}}}function N(y,B){const ne=B.stacktrace||B.stack||"",M=A(B),$=I(B);try{return y(ne,M,$)}catch{}return[]}const h=/Minified React error #\d+;/i;function A(y){return y&&h.test(y.message)?1:0}function I(y){return typeof y.framesToPop=="number"?y.framesToPop:0}function b(y){return typeof WebAssembly<"u"&&typeof WebAssembly.Exception<"u"?y instanceof WebAssembly.Exception:!1}function u(y){const B=y&&y.name;return!B&&b(y)?y.message&&Array.isArray(y.message)&&y.message.length==2?y.message[0]:"WebAssembly.Exception":B}function S(y){const B=y&&y.message;return B?B.error&&typeof B.error.message=="string"?B.error.message:b(y)&&Array.isArray(y.message)&&y.message.length==2?y.message[1]:B:"No error message"}function E(y,B,ne,M){const $=ne&&ne.syntheticException||void 0,ae=T(y,B,$,M);return(0,r.M6)(ae),ae.level="error",ne&&ne.event_id&&(ae.event_id=ne.event_id),(0,p.XW)(ae)}function L(y,B,ne="info",M,$){const ae=M&&M.syntheticException||void 0,J=Q(y,B,ae,$);return J.level=ne,M&&M.event_id&&(J.event_id=M.event_id),(0,p.XW)(J)}function T(y,B,ne,M,$){let ae;if((0,d.T2)(B)&&B.error)return z(y,B.error);if((0,d.BD)(B)||(0,d.W6)(B)){const J=B;if("stack"in B)ae=z(y,B);else{const xe=J.name||((0,d.BD)(J)?"DOMError":"DOMException"),q=J.message?`${xe}: ${J.message}`:xe;ae=Q(y,q,ne,M),(0,r.gO)(ae,q)}return"code"in J&&(ae.tags={...ae.tags,"DOMException.code":`${J.code}`}),ae}return(0,d.bJ)(B)?z(y,B):(0,d.Qd)(B)||(0,d.xH)(B)?(ae=f(y,B,ne,$),(0,r.M6)(ae,{synthetic:!0}),ae):(ae=Q(y,B,ne,M),(0,r.gO)(ae,`${B}`,void 0),(0,r.M6)(ae,{synthetic:!0}),ae)}function Q(y,B,ne,M){const $={};if(M&&ne){const ae=N(y,ne);ae.length&&($.exception={values:[{value:B,stacktrace:{frames:ae}}]})}if((0,d.NF)(B)){const{__sentry_template_string__:ae,__sentry_template_values__:J}=B;return $.logentry={message:ae,params:J},$}return $.message=B,$}function G(y,{isUnhandledRejection:B}){const ne=(0,l.HF)(y),M=B?"promise rejection":"exception";return(0,d.T2)(y)?`Event \`ErrorEvent\` captured as ${M} with message \`${y.message}\``:(0,d.xH)(y)?`Event \`${se(y)}\` (type=${y.type}) captured as ${M}`:`Object captured as ${M} with keys: ${ne}`}function se(y){try{const B=Object.getPrototypeOf(y);return B?B.constructor.name:void 0}catch{}}function U(y){for(const B in y)if(Object.prototype.hasOwnProperty.call(y,B)){const ne=y[B];if(ne instanceof Error)return ne}}},5024:(F,P,t)=>{"use strict";t.d(P,{E:()=>r});var i=Object.defineProperty,d=(x,l)=>i(x,"name",{value:l,configurable:!0});const r=d((x,l)=>{const p=x;for(const[s,f]of Object.entries(l))p[s]=f;return p},"withSubComponent")},5034:(F,P,t)=>{"use strict";t.d(P,{$F:()=>h,YK:()=>b});var i=t(2776),d=t.n(i);const r={dynamic:0,"floating-badge":30,canvas:40,"table-columns":50,"table-header":60,sticky:70,fixed:80,"modal-footer":90,"drawer-footer":90,"drawer-header":100,"modal-header":100,"floating-dropdown":490,"floating-popover":500,"floating-tooltip":500,"drawer-container":950,"nav-drawer":960,"nav-floating-tooltip":970,header:970,"modal-overlay":980,toast:1e3},x=Object.keys(r),l=Object.fromEntries(x.map(u=>[u,new Map])),p=Object.values(r),s=Object.fromEntries(Object.entries(r).map(([u,S])=>{const E=Math.min(...p.filter(L=>L>S));return[u,E-1]}));var f=Object.defineProperty,z=(u,S)=>f(u,"name",{value:S,configurable:!0});const N=(0,i.createContext)(0),h=z(({children:u,parentOffset:S=0})=>{const L=(0,i.useContext)(N)+S;return d().createElement(N.Provider,{value:L},u)},"DynamicZIndexProvider"),A=(0,i.createContext)({addZIndex:()=>{},removeZIndex:()=>{},zIndexMap:l}),I=null,b=z(u=>{const S=(0,i.useContext)(N),{addZIndex:E,removeZIndex:L,zIndexMap:T}=(0,i.useContext)(A),{current:Q}=(0,i.useRef)({});(0,i.useLayoutEffect)(()=>(E({category:u,elementRef:Q}),()=>{L({category:u,elementRef:Q})}),[]);let G=T[u].get(Q);return G!==void 0&&S!==void 0&&(G=S+G),G},"useZIndex")},5142:(F,P,t)=>{"use strict";t.d(P,{lF:()=>T,k1:()=>Q});var i=t(535),d=t(5868);const r="baggage",x="sentry-",l=/^sentry-/,p=8192;function s(se){const U=z(se);if(!U)return;const y=Object.entries(U).reduce((B,[ne,M])=>{if(ne.match(l)){const $=ne.slice(x.length);B[$]=M}return B},{});if(Object.keys(y).length>0)return y}function f(se){if(!se)return;const U=Object.entries(se).reduce((y,[B,ne])=>(ne&&(y[`${x}${B}`]=ne),y),{});return h(U)}function z(se){if(!(!se||!(0,d.Kg)(se)&&!Array.isArray(se)))return Array.isArray(se)?se.reduce((U,y)=>{const B=N(y);return Object.entries(B).forEach(([ne,M])=>{U[ne]=M}),U},{}):N(se)}function N(se){return se.split(",").map(U=>U.split("=").map(y=>decodeURIComponent(y.trim()))).reduce((U,[y,B])=>(y&&B&&(U[y]=B),U),{})}function h(se){if(Object.keys(se).length!==0)return Object.entries(se).reduce((U,[y,B],ne)=>{const M=`${encodeURIComponent(y)}=${encodeURIComponent(B)}`,$=ne===0?M:`${U},${M}`;return $.length>p?(DEBUG_BUILD&&logger.warn(`Not adding key: ${y} with val: ${B} to baggage header due to exceeding baggage size limits.`),U):$},"")}var A=t(9245),I=t(7449),b=t(9959);function u(se){if(typeof __SENTRY_TRACING__=="boolean"&&!__SENTRY_TRACING__)return!1;const U=(0,I.KU)(),y=se||U&&U.getOptions();return!!y&&(y.enableTracing||"tracesSampleRate"in y||"tracesSampler"in y)}var S=t(4780);const E="_frozenDsc";function L(se,U){const y=se;addNonEnumerableProperty(y,E,U)}function T(se,U){const y=U.getOptions(),{publicKey:B}=U.getDsn()||{},ne=(0,i.Ce)({environment:y.environment||A.U,release:y.release,public_key:B,trace_id:se});return U.emit("createDsc",ne),ne}function Q(se){const U=(0,I.KU)();if(!U)return{};const y=T((0,S.et)(se).trace_id||"",U),B=(0,S.zU)(se),ne=B[E];if(ne)return ne;const M=B.spanContext().traceState,$=M&&M.get("sentry.dsc"),ae=$&&s($);if(ae)return ae;const J=(0,S.et)(B),xe=J.data||{},q=xe[b.sy];q!=null&&(y.sample_rate=`${q}`);const le=xe[b.i_],te=J.description;return le!=="url"&&te&&(y.transaction=te),u()&&(y.sampled=String((0,S.pK)(B))),U.emit("createDsc",y,B),y}function G(se){const U=Q(se);return dynamicSamplingContextToSentryBaggageHeader(U)}},5171:(F,P,t)=>{var i=t(7183),d=i["__core-js_shared__"];F.exports=d},5194:(F,P,t)=>{var i=typeof t.g=="object"&&t.g&&t.g.Object===Object&&t.g;F.exports=i},5229:(F,P,t)=>{var i=t(6990),d=t(9637),r=t(6184),x="[object Object]",l=Function.prototype,p=Object.prototype,s=l.toString,f=p.hasOwnProperty,z=s.call(Object);function N(h){if(!r(h)||i(h)!=x)return!1;var A=d(h);if(A===null)return!0;var I=f.call(A,"constructor")&&A.constructor;return typeof I=="function"&&I instanceof I&&s.call(I)==z}F.exports=N},5248:F=>{"use strict";F.exports=function(P){var t=[];return t.toString=function(){return this.map(function(d){var r="",x=typeof d[5]<"u";return d[4]&&(r+="@supports (".concat(d[4],") {")),d[2]&&(r+="@media ".concat(d[2]," {")),x&&(r+="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {")),r+=P(d),x&&(r+="}"),d[2]&&(r+="}"),d[4]&&(r+="}"),r}).join("")},t.i=function(d,r,x,l,p){typeof d=="string"&&(d=[[null,d,void 0]]);var s={};if(x)for(var f=0;f<this.length;f++){var z=this[f][0];z!=null&&(s[z]=!0)}for(var N=0;N<d.length;N++){var h=[].concat(d[N]);x&&s[h[0]]||(typeof p<"u"&&(typeof h[5]>"u"||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=p),r&&(h[2]&&(h[1]="@media ".concat(h[2]," {").concat(h[1],"}")),h[2]=r),l&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=l):h[4]="".concat(l)),t.push(h))}},t}},5361:(F,P,t)=>{"use strict";t.d(P,{B1:()=>z,BN:()=>xe,Ej:()=>le,UE:()=>b,UU:()=>U,cY:()=>ae,rD:()=>p});function i(te){return te.split("-")[1]}function d(te){return te==="y"?"height":"width"}function r(te){return te.split("-")[0]}function x(te){return["top","bottom"].includes(r(te))?"x":"y"}function l(te,Z,ce){let{reference:O,floating:ue}=te;const D=O.x+O.width/2-ue.width/2,ee=O.y+O.height/2-ue.height/2,ie=x(Z),ye=d(ie),be=O[ye]/2-ue[ye]/2,j=ie==="x";let w;switch(r(Z)){case"top":w={x:D,y:O.y-ue.height};break;case"bottom":w={x:D,y:O.y+O.height};break;case"right":w={x:O.x+O.width,y:ee};break;case"left":w={x:O.x-ue.width,y:ee};break;default:w={x:O.x,y:O.y}}switch(i(Z)){case"start":w[ie]-=be*(ce&&j?-1:1);break;case"end":w[ie]+=be*(ce&&j?-1:1)}return w}const p=async(te,Z,ce)=>{const{placement:O="bottom",strategy:ue="absolute",middleware:D=[],platform:ee}=ce,ie=D.filter(Boolean),ye=await(ee.isRTL==null?void 0:ee.isRTL(Z));let be=await ee.getElementRects({reference:te,floating:Z,strategy:ue}),{x:j,y:w}=l(be,O,ye),W=O,oe={},ve=0;for(let Se=0;Se<ie.length;Se++){const{name:Ae,fn:Ie}=ie[Se],{x:We,y:Le,data:Ke,reset:Ze}=await Ie({x:j,y:w,initialPlacement:O,placement:W,strategy:ue,middlewareData:oe,rects:be,platform:ee,elements:{reference:te,floating:Z}});j=We??j,w=Le??w,oe={...oe,[Ae]:{...oe[Ae],...Ke}},Ze&&ve<=50&&(ve++,typeof Ze=="object"&&(Ze.placement&&(W=Ze.placement),Ze.rects&&(be=Ze.rects===!0?await ee.getElementRects({reference:te,floating:Z,strategy:ue}):Ze.rects),{x:j,y:w}=l(be,W,ye)),Se=-1)}return{x:j,y:w,placement:W,strategy:ue,middlewareData:oe}};function s(te,Z){return typeof te=="function"?te(Z):te}function f(te){return typeof te!="number"?function(Z){return{top:0,right:0,bottom:0,left:0,...Z}}(te):{top:te,right:te,bottom:te,left:te}}function z(te){return{...te,top:te.y,left:te.x,right:te.x+te.width,bottom:te.y+te.height}}async function N(te,Z){var ce;Z===void 0&&(Z={});const{x:O,y:ue,platform:D,rects:ee,elements:ie,strategy:ye}=te,{boundary:be="clippingAncestors",rootBoundary:j="viewport",elementContext:w="floating",altBoundary:W=!1,padding:oe=0}=s(Z,te),ve=f(oe),Se=ie[W?w==="floating"?"reference":"floating":w],Ae=z(await D.getClippingRect({element:(ce=await(D.isElement==null?void 0:D.isElement(Se)))==null||ce?Se:Se.contextElement||await(D.getDocumentElement==null?void 0:D.getDocumentElement(ie.floating)),boundary:be,rootBoundary:j,strategy:ye})),Ie=w==="floating"?{...ee.floating,x:O,y:ue}:ee.reference,We=await(D.getOffsetParent==null?void 0:D.getOffsetParent(ie.floating)),Le=await(D.isElement==null?void 0:D.isElement(We))&&await(D.getScale==null?void 0:D.getScale(We))||{x:1,y:1},Ke=z(D.convertOffsetParentRelativeRectToViewportRelativeRect?await D.convertOffsetParentRelativeRectToViewportRelativeRect({rect:Ie,offsetParent:We,strategy:ye}):Ie);return{top:(Ae.top-Ke.top+ve.top)/Le.y,bottom:(Ke.bottom-Ae.bottom+ve.bottom)/Le.y,left:(Ae.left-Ke.left+ve.left)/Le.x,right:(Ke.right-Ae.right+ve.right)/Le.x}}const h=Math.min,A=Math.max;function I(te,Z,ce){return A(te,h(Z,ce))}const b=te=>({name:"arrow",options:te,async fn(Z){const{x:ce,y:O,placement:ue,rects:D,platform:ee,elements:ie}=Z,{element:ye,padding:be=0}=s(te,Z)||{};if(ye==null)return{};const j=f(be),w={x:ce,y:O},W=x(ue),oe=d(W),ve=await ee.getDimensions(ye),Se=W==="y",Ae=Se?"top":"left",Ie=Se?"bottom":"right",We=Se?"clientHeight":"clientWidth",Le=D.reference[oe]+D.reference[W]-w[W]-D.floating[oe],Ke=w[W]-D.reference[W],Ze=await(ee.getOffsetParent==null?void 0:ee.getOffsetParent(ye));let ln=Ze?Ze[We]:0;ln&&await(ee.isElement==null?void 0:ee.isElement(Ze))||(ln=ie.floating[We]||D.floating[oe]);const Rn=Le/2-Ke/2,un=ln/2-ve[oe]/2-1,dt=h(j[Ae],un),In=h(j[Ie],un),Dn=dt,yn=ln-ve[oe]-In,Cn=ln/2-ve[oe]/2+Rn,Ct=I(Dn,Cn,yn),mt=i(ue)!=null&&Cn!=Ct&&D.reference[oe]/2-(Cn<Dn?dt:In)-ve[oe]/2<0?Cn<Dn?Dn-Cn:yn-Cn:0;return{[W]:w[W]-mt,data:{[W]:Ct,centerOffset:Cn-Ct+mt}}}}),u=["top","right","bottom","left"],S=u.reduce((te,Z)=>te.concat(Z,Z+"-start",Z+"-end"),[]),E={left:"right",right:"left",bottom:"top",top:"bottom"};function L(te){return te.replace(/left|right|bottom|top/g,Z=>E[Z])}function T(te,Z,ce){ce===void 0&&(ce=!1);const O=i(te),ue=x(te),D=d(ue);let ee=ue==="x"?O===(ce?"end":"start")?"right":"left":O==="start"?"bottom":"top";return Z.reference[D]>Z.floating[D]&&(ee=L(ee)),{main:ee,cross:L(ee)}}const Q={start:"end",end:"start"};function G(te){return te.replace(/start|end/g,Z=>Q[Z])}const se=function(te){return te===void 0&&(te={}),{name:"autoPlacement",options:te,async fn(Z){var ce,O,ue;const{rects:D,middlewareData:ee,placement:ie,platform:ye,elements:be}=Z,{crossAxis:j=!1,alignment:w,allowedPlacements:W=S,autoAlignment:oe=!0,...ve}=s(te,Z),Se=w!==void 0||W===S?function(In,Dn,yn){return(In?[...yn.filter(Cn=>i(Cn)===In),...yn.filter(Cn=>i(Cn)!==In)]:yn.filter(Cn=>r(Cn)===Cn)).filter(Cn=>!In||i(Cn)===In||!!Dn&&G(Cn)!==Cn)}(w||null,oe,W):W,Ae=await N(Z,ve),Ie=((ce=ee.autoPlacement)==null?void 0:ce.index)||0,We=Se[Ie];if(We==null)return{};const{main:Le,cross:Ke}=T(We,D,await(ye.isRTL==null?void 0:ye.isRTL(be.floating)));if(ie!==We)return{reset:{placement:Se[0]}};const Ze=[Ae[r(We)],Ae[Le],Ae[Ke]],ln=[...((O=ee.autoPlacement)==null?void 0:O.overflows)||[],{placement:We,overflows:Ze}],Rn=Se[Ie+1];if(Rn)return{data:{index:Ie+1,overflows:ln},reset:{placement:Rn}};const un=ln.map(In=>{const Dn=i(In.placement);return[In.placement,Dn&&j?In.overflows.slice(0,2).reduce((yn,Cn)=>yn+Cn,0):In.overflows[0],In.overflows]}).sort((In,Dn)=>In[1]-Dn[1]),dt=((ue=un.filter(In=>In[2].slice(0,i(In[0])?2:3).every(Dn=>Dn<=0))[0])==null?void 0:ue[0])||un[0][0];return dt!==ie?{data:{index:Ie+1,overflows:ln},reset:{placement:dt}}:{}}}},U=function(te){return te===void 0&&(te={}),{name:"flip",options:te,async fn(Z){var ce;const{placement:O,middlewareData:ue,rects:D,initialPlacement:ee,platform:ie,elements:ye}=Z,{mainAxis:be=!0,crossAxis:j=!0,fallbackPlacements:w,fallbackStrategy:W="bestFit",fallbackAxisSideDirection:oe="none",flipAlignment:ve=!0,...Se}=s(te,Z),Ae=r(O),Ie=r(ee)===ee,We=await(ie.isRTL==null?void 0:ie.isRTL(ye.floating)),Le=w||(Ie||!ve?[L(ee)]:function(Dn){const yn=L(Dn);return[G(Dn),yn,G(yn)]}(ee));w||oe==="none"||Le.push(...function(Dn,yn,Cn,Ct){const mt=i(Dn);let ht=function(st,At,St){const Pt=["left","right"],kt=["right","left"],Mt=["top","bottom"],Ht=["bottom","top"];switch(st){case"top":case"bottom":return St?At?kt:Pt:At?Pt:kt;case"left":case"right":return At?Mt:Ht;default:return[]}}(r(Dn),Cn==="start",Ct);return mt&&(ht=ht.map(st=>st+"-"+mt),yn&&(ht=ht.concat(ht.map(G)))),ht}(ee,ve,oe,We));const Ke=[ee,...Le],Ze=await N(Z,Se),ln=[];let Rn=((ce=ue.flip)==null?void 0:ce.overflows)||[];if(be&&ln.push(Ze[Ae]),j){const{main:Dn,cross:yn}=T(O,D,We);ln.push(Ze[Dn],Ze[yn])}if(Rn=[...Rn,{placement:O,overflows:ln}],!ln.every(Dn=>Dn<=0)){var un,dt;const Dn=(((un=ue.flip)==null?void 0:un.index)||0)+1,yn=Ke[Dn];if(yn)return{data:{index:Dn,overflows:Rn},reset:{placement:yn}};let Cn=(dt=Rn.filter(Ct=>Ct.overflows[0]<=0).sort((Ct,mt)=>Ct.overflows[1]-mt.overflows[1])[0])==null?void 0:dt.placement;if(!Cn)switch(W){case"bestFit":{var In;const Ct=(In=Rn.map(mt=>[mt.placement,mt.overflows.filter(ht=>ht>0).reduce((ht,st)=>ht+st,0)]).sort((mt,ht)=>mt[1]-ht[1])[0])==null?void 0:In[0];Ct&&(Cn=Ct);break}case"initialPlacement":Cn=ee}if(O!==Cn)return{reset:{placement:Cn}}}return{}}}};function y(te,Z){return{top:te.top-Z.height,right:te.right-Z.width,bottom:te.bottom-Z.height,left:te.left-Z.width}}function B(te){return u.some(Z=>te[Z]>=0)}const ne=function(te){return te===void 0&&(te={}),{name:"hide",options:te,async fn(Z){const{rects:ce}=Z,{strategy:O="referenceHidden",...ue}=s(te,Z);switch(O){case"referenceHidden":{const D=y(await N(Z,{...ue,elementContext:"reference"}),ce.reference);return{data:{referenceHiddenOffsets:D,referenceHidden:B(D)}}}case"escaped":{const D=y(await N(Z,{...ue,altBoundary:!0}),ce.floating);return{data:{escapedOffsets:D,escaped:B(D)}}}default:return{}}}}};function M(te){const Z=h(...te.map(O=>O.left)),ce=h(...te.map(O=>O.top));return{x:Z,y:ce,width:A(...te.map(O=>O.right))-Z,height:A(...te.map(O=>O.bottom))-ce}}const $=function(te){return te===void 0&&(te={}),{name:"inline",options:te,async fn(Z){const{placement:ce,elements:O,rects:ue,platform:D,strategy:ee}=Z,{padding:ie=2,x:ye,y:be}=s(te,Z),j=Array.from(await(D.getClientRects==null?void 0:D.getClientRects(O.reference))||[]),w=function(Se){const Ae=Se.slice().sort((Le,Ke)=>Le.y-Ke.y),Ie=[];let We=null;for(let Le=0;Le<Ae.length;Le++){const Ke=Ae[Le];!We||Ke.y-We.y>We.height/2?Ie.push([Ke]):Ie[Ie.length-1].push(Ke),We=Ke}return Ie.map(Le=>z(M(Le)))}(j),W=z(M(j)),oe=f(ie),ve=await D.getElementRects({reference:{getBoundingClientRect:function(){if(w.length===2&&w[0].left>w[1].right&&ye!=null&&be!=null)return w.find(Se=>ye>Se.left-oe.left&&ye<Se.right+oe.right&&be>Se.top-oe.top&&be<Se.bottom+oe.bottom)||W;if(w.length>=2){if(x(ce)==="x"){const Ze=w[0],ln=w[w.length-1],Rn=r(ce)==="top",un=Ze.top,dt=ln.bottom,In=Rn?Ze.left:ln.left,Dn=Rn?Ze.right:ln.right;return{top:un,bottom:dt,left:In,right:Dn,width:Dn-In,height:dt-un,x:In,y:un}}const Se=r(ce)==="left",Ae=A(...w.map(Ze=>Ze.right)),Ie=h(...w.map(Ze=>Ze.left)),We=w.filter(Ze=>Se?Ze.left===Ie:Ze.right===Ae),Le=We[0].top,Ke=We[We.length-1].bottom;return{top:Le,bottom:Ke,left:Ie,right:Ae,width:Ae-Ie,height:Ke-Le,x:Ie,y:Le}}return W}},floating:O.floating,strategy:ee});return ue.reference.x!==ve.reference.x||ue.reference.y!==ve.reference.y||ue.reference.width!==ve.reference.width||ue.reference.height!==ve.reference.height?{reset:{rects:ve}}:{}}}},ae=function(te){return te===void 0&&(te=0),{name:"offset",options:te,async fn(Z){const{x:ce,y:O}=Z,ue=await async function(D,ee){const{placement:ie,platform:ye,elements:be}=D,j=await(ye.isRTL==null?void 0:ye.isRTL(be.floating)),w=r(ie),W=i(ie),oe=x(ie)==="x",ve=["left","top"].includes(w)?-1:1,Se=j&&oe?-1:1,Ae=s(ee,D);let{mainAxis:Ie,crossAxis:We,alignmentAxis:Le}=typeof Ae=="number"?{mainAxis:Ae,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...Ae};return W&&typeof Le=="number"&&(We=W==="end"?-1*Le:Le),oe?{x:We*Se,y:Ie*ve}:{x:Ie*ve,y:We*Se}}(Z,te);return{x:ce+ue.x,y:O+ue.y,data:ue}}}};function J(te){return te==="x"?"y":"x"}const xe=function(te){return te===void 0&&(te={}),{name:"shift",options:te,async fn(Z){const{x:ce,y:O,placement:ue}=Z,{mainAxis:D=!0,crossAxis:ee=!1,limiter:ie={fn:Ae=>{let{x:Ie,y:We}=Ae;return{x:Ie,y:We}}},...ye}=s(te,Z),be={x:ce,y:O},j=await N(Z,ye),w=x(r(ue)),W=J(w);let oe=be[w],ve=be[W];if(D){const Ae=w==="y"?"bottom":"right";oe=I(oe+j[w==="y"?"top":"left"],oe,oe-j[Ae])}if(ee){const Ae=W==="y"?"bottom":"right";ve=I(ve+j[W==="y"?"top":"left"],ve,ve-j[Ae])}const Se=ie.fn({...Z,[w]:oe,[W]:ve});return{...Se,data:{x:Se.x-ce,y:Se.y-O}}}}},q=function(te){return te===void 0&&(te={}),{options:te,fn(Z){const{x:ce,y:O,placement:ue,rects:D,middlewareData:ee}=Z,{offset:ie=0,mainAxis:ye=!0,crossAxis:be=!0}=s(te,Z),j={x:ce,y:O},w=x(ue),W=J(w);let oe=j[w],ve=j[W];const Se=s(ie,Z),Ae=typeof Se=="number"?{mainAxis:Se,crossAxis:0}:{mainAxis:0,crossAxis:0,...Se};if(ye){const Le=w==="y"?"height":"width",Ke=D.reference[w]-D.floating[Le]+Ae.mainAxis,Ze=D.reference[w]+D.reference[Le]-Ae.mainAxis;oe<Ke?oe=Ke:oe>Ze&&(oe=Ze)}if(be){var Ie,We;const Le=w==="y"?"width":"height",Ke=["top","left"].includes(r(ue)),Ze=D.reference[W]-D.floating[Le]+(Ke&&((Ie=ee.offset)==null?void 0:Ie[W])||0)+(Ke?0:Ae.crossAxis),ln=D.reference[W]+D.reference[Le]+(Ke?0:((We=ee.offset)==null?void 0:We[W])||0)-(Ke?Ae.crossAxis:0);ve<Ze?ve=Ze:ve>ln&&(ve=ln)}return{[w]:oe,[W]:ve}}}},le=function(te){return te===void 0&&(te={}),{name:"size",options:te,async fn(Z){const{placement:ce,rects:O,platform:ue,elements:D}=Z,{apply:ee=()=>{},...ie}=s(te,Z),ye=await N(Z,ie),be=r(ce),j=i(ce),w=x(ce)==="x",{width:W,height:oe}=O.floating;let ve,Se;be==="top"||be==="bottom"?(ve=be,Se=j===(await(ue.isRTL==null?void 0:ue.isRTL(D.floating))?"start":"end")?"left":"right"):(Se=be,ve=j==="end"?"top":"bottom");const Ae=oe-ye[ve],Ie=W-ye[Se],We=!Z.middlewareData.shift;let Le=Ae,Ke=Ie;if(w){const ln=W-ye.left-ye.right;Ke=j||We?h(Ie,ln):ln}else{const ln=oe-ye.top-ye.bottom;Le=j||We?h(Ae,ln):ln}if(We&&!j){const ln=A(ye.left,0),Rn=A(ye.right,0),un=A(ye.top,0),dt=A(ye.bottom,0);w?Ke=W-2*(ln!==0||Rn!==0?ln+Rn:A(ye.left,ye.right)):Le=oe-2*(un!==0||dt!==0?un+dt:A(ye.top,ye.bottom))}await ee({...Z,availableWidth:Ke,availableHeight:Le});const Ze=await ue.getDimensions(D.floating);return W!==Ze.width||oe!==Ze.height?{reset:{rects:!0}}:{}}}}},5369:F=>{var P=800,t=16,i=Date.now;function d(r){var x=0,l=0;return function(){var p=i(),s=t-(p-l);if(l=p,s>0){if(++x>=P)return arguments[0]}else x=0;return r.apply(void 0,arguments)}}F.exports=d},5403:(F,P,t)=>{"use strict";t.d(P,{Eg:()=>fa});var i=t(1308),d=t(2776),r=t.n(d),x=t(738),l=t(4209),p=t(6843),s=Object.defineProperty,f=(me,ge)=>s(me,"name",{value:ge,configurable:!0});const z=null,N=null,h=null,A=null;var I=Object.defineProperty,b=(me,ge)=>I(me,"name",{value:ge,configurable:!0});const u=null;var S=t(9309),E=Object.defineProperty,L=(me,ge)=>E(me,"name",{value:ge,configurable:!0});const T=null;var Q=Object.defineProperty,G=(me,ge)=>Q(me,"name",{value:ge,configurable:!0});const se=null;var U=Object.defineProperty,y=(me,ge)=>U(me,"name",{value:ge,configurable:!0});const B=null;var ne=Object.defineProperty,M=(me,ge)=>ne(me,"name",{value:ge,configurable:!0});const $={negative:1,warning:2,positive:3,information:4},ae=null;var J=[],xe=[];function q(me,ge){if(me&&typeof document<"u"){var hn,vn=ge.prepend===!0?"prepend":"append",Wn=ge.singleTag===!0,Hn=typeof ge.container=="string"?document.querySelector(ge.container):document.getElementsByTagName("head")[0];if(Wn){var Mn=J.indexOf(Hn);Mn===-1&&(Mn=J.push(Hn)-1,xe[Mn]={}),hn=xe[Mn]&&xe[Mn][vn]?xe[Mn][vn]:xe[Mn][vn]=Yn()}else hn=Yn();me.charCodeAt(0)===65279&&(me=me.substring(1)),hn.styleSheet?hn.styleSheet.cssText+=me:hn.appendChild(document.createTextNode(me))}function Yn(){var Zn=document.createElement("style");if(Zn.setAttribute("type","text/css"),ge.attributes)for(var Fn=Object.keys(ge.attributes),xt=0;xt<Fn.length;xt++)Zn.setAttribute(Fn[xt],ge.attributes[Fn[xt]]);var Vt=vn==="prepend"?"afterbegin":"beforeend";return Hn.insertAdjacentElement(Vt,Zn),Zn}}var le=`.mds-collapsible-banner {
  --collapsible-banner-border-color: transparent;

  width: 100%;
  min-width: 640px;

  background-color: var(--info-bg-weak-default);
  border-left: 6px solid var(--mds-notification-border-color);
  border-radius: 6px;
  box-shadow: var(--effects-shadow-lifted)
}
.mds-collapsible-banner.mds-collapsible-banner-collapsed {
    border-bottom: 0;
    border-radius: 6px;
  }
.mds-collapsible-banner .mds-status-icon {
    flex-shrink: 0;
  }
.mds-collapsible-banner.mds-collapsible-banner-negative {
    --mds-notification-border-color: var(--negative-border-default);
  }
.mds-collapsible-banner.mds-collapsible-banner-warning {
    --mds-notification-border-color: var(--warning-border-default);
  }
.mds-collapsible-banner.mds-collapsible-banner-positive {
    --mds-notification-border-color: var(--positive-border-default);
  }
.mds-collapsible-banner.mds-collapsible-banner-information {
    --mds-notification-border-color: var(--info-border-default);
  }
.mds-collapsible-banner .mds-collapsible-banner-preview {
    padding: 16px 20px 16px 18px;
    border-bottom: 1px solid var(--control-border-weak-default);
    border-radius: 0 6px 0 0
  }
.mds-collapsible-banner .mds-collapsible-banner-preview.mds-collapsible-banner-preview-collapsed {
      border-bottom: none;
      border-radius: 0 6px 6px 0;
    }
.mds-collapsible-banner .mds-collapsible-banner-preview .mds-collapsible-banner-title {
      margin-top: 2px;
      margin-right: 4px;
    }
.mds-collapsible-banner .mds-collapsible-banner-preview .mds-collapsible-banner-dismiss-button {
      margin-top: 2px;
      margin-left: 24px;
      text-wrap: nowrap;
    }
.mds-collapsible-banner .mds-collapsible-banner-list {
    overflow: hidden;

    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 16px 20px 24px 46px
  }
.mds-collapsible-banner .mds-collapsible-banner-list .mds-collapsible-banner-divider {
      padding-left: 8px
    }
.mds-collapsible-banner .mds-collapsible-banner-list .mds-collapsible-banner-divider .mds-divider {
        border-color: var(--control-border-weak-default);
      }
.mds-collapsible-banner .mds-collapsible-banner-list .mds-collapsible-banner-element {
      margin-left: 8px
    }
.mds-collapsible-banner .mds-collapsible-banner-list .mds-collapsible-banner-element .mds-collapsible-banner-element-text {
        max-width: 600px;
      }
.mds-collapsible-banner .mds-collapsible-banner-list .mds-collapsible-banner-element .mds-collapsible-banner-close-button {
        width: 20px;
        height: 20px;
        margin-right: -2px;
      }
.mds-collapsible-banner .mds-collapsible-banner-list-overflow {
    overflow-y: scroll;
    max-height: 270px;
  }
`;q(le,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/notification"}});var te=Object.defineProperty,Z=(me,ge)=>te(me,"name",{value:ge,configurable:!0});const ce=null;var O=t(6978);const ue=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("path",{clipRule:"evenodd",d:"M13.7071 3.79289C14.0976 4.18342 14.0976 4.81658 13.7071 5.20711L7.20711 11.7071C6.81658 12.0976 6.18342 12.0976 5.79289 11.7071L2.29289 8.20711C1.90237 7.81658 1.90237 7.18342 2.29289 6.79289C2.68342 6.40237 3.31658 6.40237 3.70711 6.79289L6.5 9.58579L12.2929 3.79289C12.6834 3.40237 13.3166 3.40237 13.7071 3.79289Z",fill:"var(--positive-icon-default)",fillRule:"evenodd"}))),D=(0,d.forwardRef)(({className:me,...ge},hn)=>{const vn=(0,O.U)("mds-status-icon",me),Wn=ue;return r().createElement(Wn,{"aria-label":"approve",...ge,className:vn,ref:hn})}),ee=(0,d.memo)(D),ie=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("path",{clipRule:"evenodd",d:"M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8ZM8 12C5.79086 12 4 10.2091 4 8C4 7.25819 4.20193 6.56355 4.55382 5.96803L10.032 11.4462C9.43645 11.7981 8.74181 12 8 12ZM11.4462 10.032C11.7981 9.43645 12 8.74181 12 8C12 5.79086 10.2091 4 8 4C7.25819 4 6.56355 4.20193 5.96803 4.55382L11.4462 10.032Z",fill:"var(--negative-icon-default)",fillRule:"evenodd"}))),ye=(0,d.forwardRef)(({className:me,...ge},hn)=>{const vn=(0,O.U)("mds-status-icon",me),Wn=ie;return r().createElement(Wn,{"aria-label":"deny",...ge,className:vn,ref:hn})}),be=(0,d.memo)(ye);var j=t(9279),w=Object.defineProperty,W=(me,ge)=>w(me,"name",{value:ge,configurable:!0});const oe={excellent:"var(--excellent-bg-medium-default)",positive:"var(--positive-bg-medium-default)","low-warning":"var(--low-warning-bg-medium-default)",warning:"var(--warning-bg-medium-default)","severe-warning":"var(--severe-warning-bg-medium-default)",negative:"var(--negative-bg-medium-default)",dormant:"var(--dormant-bg-medium-default)",info:"var(--info-bg-medium-default)",disabled:"var(--dormant-bg-medium-default)","in-progress":"var(--in-progress-bg-medium-default)"},ve=W(({children:me,status:ge})=>r().createElement("svg",{height:"28",viewBox:"0 0 28 28",width:"28"},r().createElement("rect",{fill:oe[ge],height:"28",rx:"4",width:"28"}),r().createElement("svg",{x:"4",y:"6"},me)),"BackgroundWrapper"),Se=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("circle",{cx:"12",cy:"12",fill:"var(--base-bg-weak-default)",r:"10.75",stroke:"var(--base-border-weak-default)",strokeWidth:"2"}),r().createElement("path",{d:"M12 5.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Z",fill:"var(--dormant-icon-default)"}),r().createElement("path",{d:"M5.104 5.104a1.5 1.5 0 0 1 2.122 0l11.67 11.67a1.5 1.5 0 0 1-2.121 2.122L5.105 7.226a1.5 1.5 0 0 1 0-2.122Z",fill:"var(--dormant-icon-default)"}))),Ae=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("path",{clipRule:"evenodd",d:"M8 3.5C5.51472 3.5 3.5 5.51472 3.5 8C3.5 10.4853 5.51472 12.5 8 12.5C10.4853 12.5 12.5 10.4853 12.5 8C12.5 5.51472 10.4853 3.5 8 3.5ZM1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8Z",fill:"var(--dormant-icon-default)",fillRule:"evenodd"}),r().createElement("path",{clipRule:"evenodd",d:"M3.40288 3.40288C3.7934 3.01235 4.42657 3.01235 4.81709 3.40288L12.5973 11.1831C12.9878 11.5736 12.9878 12.2068 12.5973 12.5973C12.2068 12.9878 11.5736 12.9878 11.1831 12.5973L3.40288 4.81709C3.01235 4.42657 3.01235 3.7934 3.40288 3.40288Z",fill:"var(--dormant-icon-default)",fillRule:"evenodd"}))),Ie=(0,d.forwardRef)(({className:me,hasBackground:ge,variation:hn="none",width:vn,...Wn},Hn)=>{const Mn=(0,O.U)("mds-status-icon",me),Yn=ge?20:16,Zn=hn==="none"?Ae:Se;return r().createElement(j.v,{condition:ge,wrap:Fn=>r().createElement(ve,{status:"disabled"},Fn)},r().createElement(Zn,{"aria-label":"disabled",...Wn,className:Mn,ref:Hn,width:vn??Yn}))}),We=(0,d.memo)(Ie),Le=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("circle",{cx:"12",cy:"12",r:"10.75",stroke:"var(--base-border-weak-default)",strokeWidth:"2"}),r().createElement("circle",{cx:"12",cy:"12",fill:"var(--dormant-icon-default)",r:"9.75"}),r().createElement("path",{d:"M16.242 10.874a1.127 1.127 0 1 1 0 2.254H7.757a1.127 1.127 0 1 1 0-2.254h8.485Z",fill:"var(--dormant-icon-in-default)"}))),Ke=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("circle",{cx:"8",cy:"8",fill:"var(--dormant-icon-default)",r:"6.5"}),r().createElement("path",{d:"M10.8281 7.24927C11.0273 7.24927 11.2184 7.32842 11.3593 7.46932C11.5002 7.61021 11.5794 7.80131 11.5794 8.00057C11.5794 8.19983 11.5002 8.39092 11.3593 8.53182C11.2184 8.67271 11.0273 8.75187 10.8281 8.75187L5.17122 8.75187C4.97197 8.75187 4.78087 8.67271 4.63997 8.53182C4.49908 8.39092 4.41992 8.19983 4.41992 8.00057C4.41992 7.80131 4.49908 7.61022 4.63997 7.46932C4.78087 7.32842 4.97197 7.24927 5.17122 7.24927L10.8281 7.24927Z",fill:"var(--dormant-icon-in-default)"}))),Ze=(0,d.forwardRef)(({className:me,hasBackground:ge,variation:hn="none",width:vn,...Wn},Hn)=>{const Mn=(0,O.U)("mds-status-icon",me),Yn=ge?20:16,Zn=hn==="none"?Ke:Le;return r().createElement(j.v,{condition:ge,wrap:Fn=>r().createElement(ve,{status:"dormant"},Fn)},r().createElement(Zn,{"aria-label":"dormant",...Wn,className:Mn,ref:Hn,width:vn??Yn}))}),ln=(0,d.memo)(Ze),Rn=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("circle",{cx:"12",cy:"12",r:"10.75",stroke:"var(--base-border-weak-default)",strokeWidth:"2"}),r().createElement("circle",{cx:"12",cy:"12",fill:"var(--excellent-icon-default)",r:"10.417",stroke:"var(--base-border-weak-default)"}),r().createElement("path",{d:"M7.609 10.589a1.03 1.03 0 0 1 1.34-.575l2.023.81V8.908a1.031 1.031 0 0 1 2.063 0v1.914l2.023-.81a1.031 1.031 0 0 1 .766 1.916l-2.188.875 1.255 1.673a1.033 1.033 0 0 1-.206 1.444 1.03 1.03 0 0 1-1.444-.206l-1.237-1.65-1.238 1.65a1.033 1.033 0 0 1-1.846-.473 1.031 1.031 0 0 1 .196-.765l1.255-1.673-2.188-.875a1.031 1.031 0 0 1-.574-1.34Z",fill:"var(--excellent-icon-in-default)"}))),un=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("circle",{cx:"8",cy:"8",fill:"var(--excellent-icon-default)",r:"6.5"}),r().createElement("path",{d:"M5.07248 7.05926C5.10599 6.9754 5.15568 6.89896 5.21874 6.83431C5.28179 6.76965 5.35696 6.71806 5.43996 6.68247C5.52295 6.64687 5.61215 6.62798 5.70245 6.62687C5.79275 6.62575 5.88238 6.64244 5.96623 6.67598L7.31488 7.21567V5.93921C7.31488 5.75687 7.38731 5.582 7.51624 5.45307C7.64517 5.32414 7.82004 5.25171 8.00238 5.25171C8.18472 5.25171 8.35958 5.32414 8.48851 5.45307C8.61745 5.582 8.68988 5.75687 8.68988 5.93921V7.21567L10.0385 6.67598C10.2075 6.60987 10.3957 6.61321 10.5621 6.68527C10.7286 6.75733 10.8599 6.89227 10.9273 7.06068C10.9947 7.22909 10.9929 7.41732 10.9221 7.58436C10.8514 7.7514 10.7174 7.8837 10.5496 7.95244L9.09092 8.53624L9.92738 9.65171C9.98155 9.72394 10.021 9.80613 10.0434 9.89359C10.0658 9.98104 10.0707 10.0721 10.058 10.1614C10.0452 10.2508 10.015 10.3368 9.96896 10.4145C9.92296 10.4922 9.86211 10.56 9.78988 10.6142C9.71765 10.6684 9.63546 10.7078 9.548 10.7302C9.46054 10.7526 9.36953 10.7576 9.28015 10.7448C9.19078 10.732 9.10479 10.7018 9.0271 10.6558C8.94942 10.6098 8.88155 10.5489 8.82738 10.4767L8.00238 9.37671L7.17738 10.4767C7.12321 10.5489 7.05534 10.6098 6.97766 10.6558C6.89997 10.7018 6.81398 10.732 6.72461 10.7448C6.63523 10.7576 6.54421 10.7526 6.45675 10.7302C6.3693 10.7078 6.28711 10.6684 6.21488 10.6142C6.14265 10.56 6.0818 10.4922 6.0358 10.4145C5.9898 10.3368 5.95956 10.2508 5.94679 10.1614C5.93402 10.0721 5.93898 9.98104 5.96139 9.89359C5.9838 9.80613 6.02321 9.72394 6.07738 9.65171L6.91384 8.53624L5.45519 7.95244C5.28607 7.88466 5.15076 7.75252 5.079 7.58505C5.00725 7.41757 5.0049 7.22846 5.07248 7.05926Z",fill:"var(--excellent-icon-in-default)"}))),dt=(0,d.forwardRef)(({className:me,hasBackground:ge,variation:hn="none",width:vn,...Wn},Hn)=>{const Mn=(0,O.U)("mds-status-icon",me),Yn=ge?20:16,Zn=hn==="none"?un:Rn;return r().createElement(j.v,{condition:ge,wrap:Fn=>r().createElement(ve,{status:"excellent"},Fn)},r().createElement(Zn,{"aria-label":"excellent",...Wn,className:Mn,ref:Hn,width:vn??Yn}))}),In=(0,d.memo)(dt),Dn=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("circle",{cx:"12",cy:"12",r:"10.75",stroke:"var(--base-border-weak-default)",strokeWidth:"2"}),r().createElement("circle",{cx:"12",cy:"12",fill:"var(--in-progress-icon-default)",r:"9.75"}),r().createElement("path",{d:"M8.75 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13.25 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM17.75 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z",fill:"var(--in-progress-icon-in-default)"}))),yn=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("circle",{cx:"8",cy:"8",fill:"var(--in-progress-icon-default)",r:"6.5"}),r().createElement("path",{d:"M5.83366 7.99996C5.83366 8.4602 5.46056 8.83329 5.00033 8.83329C4.54009 8.83329 4.16699 8.4602 4.16699 7.99996C4.16699 7.53972 4.54009 7.16663 5.00033 7.16663C5.46056 7.16663 5.83366 7.53972 5.83366 7.99996Z",fill:"var(--in-progress-icon-in-default)"}),r().createElement("path",{d:"M8.83366 7.99996C8.83366 8.4602 8.46056 8.83329 8.00033 8.83329C7.54009 8.83329 7.16699 8.4602 7.16699 7.99996C7.16699 7.53972 7.54009 7.16663 8.00033 7.16663C8.46056 7.16663 8.83366 7.53972 8.83366 7.99996Z",fill:"var(--in-progress-icon-in-default)"}),r().createElement("path",{d:"M11.8337 7.99996C11.8337 8.4602 11.4606 8.83329 11.0003 8.83329C10.5401 8.83329 10.167 8.4602 10.167 7.99996C10.167 7.53972 10.5401 7.16663 11.0003 7.16663C11.4606 7.16663 11.8337 7.53972 11.8337 7.99996Z",fill:"var(--in-progress-icon-in-default)"}))),Cn=(0,d.forwardRef)(({className:me,hasBackground:ge,variation:hn="none",width:vn,...Wn},Hn)=>{const Mn=(0,O.U)("mds-status-icon",me),Yn=ge?20:16,Zn=hn==="none"?yn:Dn;return r().createElement(j.v,{condition:ge,wrap:Fn=>r().createElement(ve,{status:"in-progress"},Fn)},r().createElement(Zn,{"aria-label":"in-progress",...Wn,className:Mn,ref:Hn,width:vn??Yn}))}),Ct=(0,d.memo)(Cn),mt=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("path",{d:"M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z",stroke:"var(--base-border-weak-default)",strokeWidth:"2"}),r().createElement("path",{d:"M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z",fill:"var(--info-icon-default)"}),r().createElement("path",{d:"M10.125 7.775c0-.277.088-.548.252-.778.165-.23.4-.41.674-.515a1.6 1.6 0 0 1 .866-.08c.291.054.559.187.768.383.21.196.353.445.41.717.059.271.03.553-.085.809a1.425 1.425 0 0 1-.552.628 1.577 1.577 0 0 1-.833.236c-.398 0-.78-.148-1.06-.41a1.354 1.354 0 0 1-.44-.99Zm3 7.06v-2.86c0-.464-.198-.91-.55-1.237a1.945 1.945 0 0 0-1.325-.513c-.266 0-.523.087-.726.247-.204.16-.34.381-.385.626a.99.99 0 0 0 .14.709c.134.214.345.376.596.458v2.86c0 .464.197.91.549 1.237.351.329.828.513 1.326.513.265 0 .523-.087.726-.247.203-.16.34-.381.384-.625a.991.991 0 0 0-.139-.71 1.111 1.111 0 0 0-.596-.458Z",fill:"var(--info-icon-in-default)"}))),ht=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("path",{d:"M12 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V12C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14H12C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12V4C14 3.46957 13.7893 2.96086 13.4142 2.58579C13.0391 2.21071 12.5304 2 12 2Z",fill:"var(--info-icon-default)"}),r().createElement("path",{d:"M6.75014 5.18333C6.75014 4.99874 6.80879 4.81829 6.91867 4.6648C7.02855 4.51132 7.18473 4.39169 7.36746 4.32105C7.55019 4.2504 7.75125 4.23192 7.94523 4.26793C8.13921 4.30395 8.3174 4.39284 8.45725 4.52337C8.5971 4.6539 8.69234 4.8202 8.73093 5.00125C8.76951 5.1823 8.74971 5.36996 8.67402 5.5405C8.59833 5.71105 8.47016 5.85682 8.30571 5.95937C8.14126 6.06193 7.94792 6.11667 7.75014 6.11667C7.48493 6.11667 7.23057 6.01833 7.04304 5.8433C6.8555 5.66827 6.75014 5.43087 6.75014 5.18333ZM8.75014 9.88967V7.98333C8.75014 7.67391 8.61845 7.37717 8.38403 7.15838C8.14961 6.93958 7.83166 6.81667 7.50014 6.81667C7.32302 6.81642 7.15153 6.87469 7.01602 6.98115C6.88052 7.08761 6.78976 7.23539 6.75982 7.39833C6.72988 7.56126 6.76268 7.72882 6.85243 7.87134C6.94217 8.01386 7.08306 8.12214 7.25014 8.177V10.0833C7.25014 10.3928 7.38184 10.6895 7.61626 10.9083C7.85068 11.1271 8.16862 11.25 8.50014 11.25C8.67726 11.2502 8.84876 11.192 8.98426 11.0855C9.11976 10.9791 9.21052 10.8313 9.24046 10.6683C9.27041 10.5054 9.2376 10.3378 9.14786 10.1953C9.05812 10.0528 8.91723 9.94452 8.75014 9.88967Z",fill:"var(--info-icon-in-default)"}))),st=(0,d.forwardRef)(({className:me,hasBackground:ge,variation:hn="none",width:vn,...Wn},Hn)=>{const Mn=(0,O.U)("mds-status-icon",me),Yn=ge?20:16,Zn=hn==="none"?ht:mt;return r().createElement(j.v,{condition:ge,wrap:Fn=>r().createElement(ve,{status:"info"},Fn)},r().createElement(Zn,{"aria-label":"information",...Wn,className:Mn,ref:Hn,width:vn??Yn}))}),At=(0,d.memo)(st),St=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("circle",{cx:"12",cy:"12",r:"10.75",stroke:"var(--base-border-weak-default)",strokeWidth:"2"}),r().createElement("circle",{cx:"12",cy:"12",fill:"var(--low-warning-icon-default)",r:"9.75"}),r().createElement("path",{d:"M10.854 12.58a1.125 1.125 0 0 0-1.328.046l-.806.634a1.125 1.125 0 1 1-1.39-1.77l.806-.633a3.375 3.375 0 0 1 3.983-.137l1.028.7c.405.275.942.256 1.328-.046l.805-.634a1.125 1.125 0 0 1 1.39 1.77l-.805.633a3.375 3.375 0 0 1-3.983.137l-1.028-.7Z",fill:"var(--low-warning-icon-in-default)"}))),Pt=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("circle",{cx:"8",cy:"8",fill:"var(--low-warning-icon-default)",r:"6.5"}),r().createElement("path",{clipRule:"evenodd",d:"M7.23529 8.38725C6.96512 8.20354 6.6071 8.21586 6.35019 8.41771L5.81301 8.83979C5.4873 9.0957 5.01581 9.03912 4.7599 8.71341C4.50399 8.38771 4.56057 7.91622 4.88628 7.66031L5.42346 7.23823C6.19417 6.63267 7.26823 6.59571 8.07875 7.14686L8.76401 7.61283C9.03417 7.79654 9.39219 7.78422 9.64909 7.58237L10.1863 7.1603C10.512 6.9044 10.9835 6.96098 11.2394 7.28669C11.4953 7.61239 11.4387 8.08389 11.113 8.33979L10.5758 8.76186C9.8051 9.36741 8.73106 9.40436 7.92055 8.85322L7.23529 8.38725Z",fill:"var(--low-warning-icon-in-default)",fillRule:"evenodd"}))),kt=(0,d.forwardRef)(({className:me,hasBackground:ge,variation:hn="none",width:vn,...Wn},Hn)=>{const Mn=(0,O.U)("mds-status-icon",me),Yn=ge?20:16,Zn=hn==="none"?Pt:St;return r().createElement(j.v,{condition:ge,wrap:Fn=>r().createElement(ve,{status:"low-warning"},Fn)},r().createElement(Zn,{"aria-label":"low-warning",...Wn,className:Mn,ref:Hn,width:vn??Yn}))}),Mt=(0,d.memo)(kt),Ht=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"26",viewBox:"0 0 24 26",width:"24",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("path",{d:"m13.862 1.995-.497.868.497-.868a3.748 3.748 0 0 0-3.724 0l-7.042 4.04A3.655 3.655 0 0 0 1.25 9.203v7.594c0 1.311.708 2.515 1.846 3.168l7.042 4.04c1.151.66 2.573.66 3.724 0l7.042-4.04a3.655 3.655 0 0 0 1.846-3.168V9.203a3.655 3.655 0 0 0-1.846-3.168l-7.042-4.04Z",stroke:"var(--base-border-weak-default)",strokeLinecap:"round",strokeWidth:"2"}),r().createElement("path",{d:"M10.635 2.863a2.748 2.748 0 0 1 2.73 0l7.041 4.04a2.655 2.655 0 0 1 1.344 2.3v7.594c0 .947-.512 1.823-1.344 2.3l-7.041 4.04a2.748 2.748 0 0 1-2.73 0l-7.041-4.04a2.656 2.656 0 0 1-1.344-2.3V9.203c0-.947.512-1.823 1.344-2.3l7.041-4.04Z",fill:"var(--negative-icon-default)"}),r().createElement("path",{d:"M15.11 11.515 13.627 13l1.486 1.485a1.15 1.15 0 0 1-1.627 1.627L12 14.627l-1.485 1.486a1.15 1.15 0 0 1-1.627-1.627L10.373 13l-1.486-1.485a1.151 1.151 0 0 1 1.627-1.627L12 11.373l1.485-1.486a1.15 1.15 0 0 1 1.627 1.627l-.002.001Z",fill:"var(--negative-icon-in-default)"}))),$t=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("path",{d:"M7.09023 1.24188C7.65242 0.919374 8.34758 0.919375 8.90977 1.24188L13.6042 3.93489C14.1589 4.2531 14.5 4.8371 14.5 5.46863V10.5314C14.5 11.1629 14.1589 11.7469 13.6042 12.0651L8.90977 14.7581C8.34758 15.0806 7.65242 15.0806 7.09023 14.7581L2.39579 12.0651C1.84109 11.7469 1.5 11.1629 1.5 10.5314V5.46863C1.5 4.8371 1.84109 4.2531 2.39579 3.93489L7.09023 1.24188Z",fill:"var(--negative-icon-default)"}),r().createElement("path",{d:"M10.0736 7.01016L9.08508 7.99995L10.0755 8.98975C10.2194 9.13361 10.3002 9.32873 10.3002 9.53219C10.3002 9.73564 10.2194 9.93076 10.0755 10.0746C9.93164 10.2185 9.73652 10.2993 9.53307 10.2993C9.32961 10.2993 9.13449 10.2185 8.99063 10.0746L8.0002 9.08483L7.0104 10.0753C6.93917 10.1465 6.8546 10.203 6.76153 10.2416C6.66845 10.2801 6.5687 10.3 6.46796 10.3C6.36722 10.3 6.26747 10.2801 6.17439 10.2416C6.08132 10.203 5.99675 10.1465 5.92552 10.0753C5.85429 10.004 5.79778 9.91946 5.75923 9.82639C5.72068 9.73332 5.70083 9.63356 5.70083 9.53282C5.70083 9.43208 5.72068 9.33233 5.75923 9.23926C5.79778 9.14619 5.85429 9.06162 5.92552 8.99038L6.91531 7.99995L5.92488 7.01016C5.85365 6.93892 5.79714 6.85435 5.75859 6.76128C5.72004 6.66821 5.7002 6.56846 5.7002 6.46772C5.7002 6.36698 5.72004 6.26722 5.75859 6.17415C5.79714 6.08108 5.85365 5.99651 5.92488 5.92528C5.99612 5.85404 6.08068 5.79754 6.17376 5.75898C6.26683 5.72043 6.36658 5.70059 6.46732 5.70059C6.56806 5.70059 6.66782 5.72043 6.76089 5.75898C6.85396 5.79754 6.93853 5.85404 7.00976 5.92528L8.0002 6.91507L8.98999 5.92464C9.13385 5.78077 9.32898 5.69995 9.53243 5.69995C9.73588 5.69995 9.93101 5.78077 10.0749 5.92464C10.2187 6.0685 10.2996 6.26362 10.2996 6.46708C10.2996 6.67053 10.2187 6.86565 10.0749 7.00952L10.0736 7.01016Z",fill:"var(--negative-icon-in-default)"}))),Bt=(0,d.forwardRef)(({className:me,hasBackground:ge,variation:hn="none",width:vn,...Wn},Hn)=>{const Mn=(0,O.U)("mds-status-icon",me),Yn=ge?20:16,Zn=hn==="none"?$t:Ht;return r().createElement(j.v,{condition:ge,wrap:Fn=>r().createElement(ve,{status:"negative"},Fn)},r().createElement(Zn,{"aria-label":"negative",...Wn,className:Mn,ref:Hn,width:vn??Yn}))}),dn=(0,d.memo)(Bt),Ce=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("circle",{cx:"12",cy:"12",r:"10.75",stroke:"var(--base-border-weak-default)",strokeLinecap:"round",strokeWidth:"2"}),r().createElement("circle",{cx:"12",cy:"12",fill:"var(--positive-icon-default)",r:"9.75"}),r().createElement("path",{d:"M16.1937 9.21878C16.2905 9.31521 16.3673 9.42979 16.4197 9.55596C16.4721 9.68212 16.499 9.81739 16.499 9.954C16.499 10.0906 16.4721 10.2259 16.4197 10.352C16.3673 10.4782 16.2905 10.5928 16.1937 10.6892L11.3499 15.5331C11.2535 15.6298 11.1389 15.7066 11.0127 15.759C10.8866 15.8114 10.7513 15.8383 10.6147 15.8383C10.4781 15.8383 10.3428 15.8114 10.2167 15.759C10.0905 15.7066 9.97591 15.6298 9.87948 15.5331L7.80356 13.4571C7.70701 13.3606 7.63042 13.246 7.57817 13.1198C7.52592 12.9937 7.49902 12.8584 7.49902 12.7219C7.49902 12.5854 7.52592 12.4502 7.57817 12.324C7.63042 12.1979 7.70701 12.0832 7.80356 11.9867C7.90011 11.8901 8.01473 11.8135 8.14088 11.7613C8.26703 11.709 8.40224 11.6821 8.53878 11.6821C8.67533 11.6821 8.81053 11.709 8.93668 11.7613C9.06283 11.8135 9.17745 11.8901 9.274 11.9867L10.6156 13.3265L14.725 9.21618C14.8216 9.11985 14.9362 9.04349 15.0623 8.99148C15.1884 8.93946 15.3235 8.91282 15.4599 8.91306C15.5963 8.9133 15.7313 8.94042 15.8573 8.99288C15.9832 9.04534 16.0975 9.1221 16.1937 9.21878Z",fill:"var(--positive-icon-in-default)"}))),en=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("circle",{cx:"8",cy:"8",fill:me.color||"var(--positive-icon-default)",r:"6.5"}),r().createElement("path",{d:"M10.7965 6.14583C10.861 6.21012 10.9122 6.28651 10.9471 6.37062C10.982 6.45473 11 6.54491 11 6.63598C11 6.72705 10.982 6.81723 10.9471 6.90134C10.9122 6.98545 10.861 7.06184 10.7965 7.12613L7.56727 10.3554C7.50298 10.4199 7.42659 10.471 7.34248 10.506C7.25837 10.5409 7.16819 10.5589 7.07712 10.5589C6.98605 10.5589 6.89587 10.5409 6.81176 10.506C6.72765 10.471 6.65126 10.4199 6.58697 10.3554L5.20303 8.9714C5.13866 8.90703 5.0876 8.83062 5.05276 8.74652C5.01793 8.66242 5 8.57228 5 8.48125C5 8.39022 5.01793 8.30008 5.05276 8.21598C5.0876 8.13188 5.13866 8.05547 5.20303 7.9911C5.26739 7.92673 5.34381 7.87567 5.42791 7.84084C5.51201 7.806 5.60214 7.78807 5.69317 7.78807C5.7842 7.78807 5.87434 7.806 5.95844 7.84084C6.04254 7.87567 6.11895 7.92673 6.18332 7.9911L7.0777 8.88433L9.81733 6.1441C9.88171 6.07988 9.95812 6.02897 10.0422 5.9943C10.1263 5.95962 10.2163 5.94186 10.3073 5.94202C10.3982 5.94218 10.4882 5.96026 10.5722 5.99523C10.6561 6.0302 10.7323 6.08138 10.7965 6.14583Z",fill:"var(--positive-icon-in-default)"}))),Un=(0,d.forwardRef)(({className:me,hasBackground:ge,strong:hn,variation:vn="none",width:Wn,...Hn},Mn)=>{const Yn=(0,O.U)("mds-status-icon",me),Zn=ge?20:16,Fn=hn||ge,xt=vn==="none"?en:Ce;return r().createElement(j.v,{condition:ge,wrap:Vt=>r().createElement(ve,{status:"positive"},Vt)},r().createElement(xt,{"aria-label":"positive",...Hn,className:Yn,color:Fn?"var(--positive-icon-strong-default)":"var(--positive-icon-default)",ref:Mn,width:Wn??Zn}))}),Ve=(0,d.memo)(Un),gn=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"26",viewBox:"0 0 26 26",width:"26",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("path",{d:"m23.43 10.353-7.778-7.778a3.75 3.75 0 0 0-5.304 0L2.57 10.353a3.75 3.75 0 0 0 0 5.303l7.778 7.779a3.75 3.75 0 0 0 5.304 0l7.778-7.779a3.75 3.75 0 0 0 0-5.303Z",stroke:"var(--base-border-weak-default)",strokeWidth:"2"}),r().createElement("path",{d:"m22.723 11.06-7.778-7.778a2.75 2.75 0 0 0-3.89 0L3.278 11.06a2.75 2.75 0 0 0 0 3.89l7.779 7.777a2.75 2.75 0 0 0 3.889 0l7.778-7.778a2.75 2.75 0 0 0 0-3.889Z",fill:"var(--severe-warning-icon-default)"}),r().createElement("path",{d:"M11.95 13.35V8.8a1.05 1.05 0 1 1 2.1 0v4.55a1.05 1.05 0 0 1-2.1 0Zm2.45 3.5a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z",fill:"var(--severe-warning-icon-in-default)"}))),Pn=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("path",{d:"M14.4818 6.70679L9.29636 1.52134C8.95255 1.17752 8.48623 0.984367 8 0.984367C7.51377 0.984367 7.04745 1.17752 6.70364 1.52134L1.51819 6.70679C1.17437 7.0506 0.981217 7.51692 0.981217 8.00315C0.981217 8.48938 1.17437 8.9557 1.51819 9.29951L6.70364 14.485C7.04745 14.8288 7.51377 15.0219 8 15.0219C8.48623 15.0219 8.95255 14.8288 9.29636 14.485L14.4818 9.29951C14.8256 8.9557 15.0188 8.48938 15.0188 8.00315C15.0188 7.51692 14.8256 7.0506 14.4818 6.70679Z",fill:me.color||"var(--severe-warning-icon-default)"}),r().createElement("path",{d:"M7.29974 8.23333V5.2C7.29974 5.01435 7.37349 4.8363 7.50477 4.70503C7.63604 4.57375 7.81409 4.5 7.99974 4.5C8.18539 4.5 8.36344 4.57375 8.49471 4.70503C8.62599 4.8363 8.69974 5.01435 8.69974 5.2V8.23333C8.69974 8.41898 8.62599 8.59703 8.49471 8.72831C8.36344 8.85958 8.18539 8.93333 7.99974 8.93333C7.81409 8.93333 7.63604 8.85958 7.50477 8.72831C7.37349 8.59703 7.29974 8.41898 7.29974 8.23333ZM8.93307 10.5667C8.93307 10.7513 8.87833 10.9317 8.77578 11.0852C8.67322 11.2387 8.52746 11.3583 8.35691 11.429C8.18637 11.4996 7.9987 11.5181 7.81766 11.4821C7.63661 11.4461 7.4703 11.3572 7.33977 11.2266C7.20924 11.0961 7.12035 10.9298 7.08434 10.7488C7.04833 10.5677 7.06681 10.38 7.13745 10.2095C7.20809 10.039 7.32772 9.89318 7.48121 9.79063C7.63469 9.68807 7.81514 9.63333 7.99974 9.63333C8.24728 9.63333 8.48467 9.73167 8.65971 9.9067C8.83474 10.0817 8.93307 10.3191 8.93307 10.5667Z",fill:"var(--severe-warning-icon-in-default)"}))),wt=(0,d.forwardRef)(({className:me,hasBackground:ge,strong:hn,variation:vn="none",width:Wn,...Hn},Mn)=>{const Yn=(0,O.U)("mds-status-icon",me),Zn=ge?20:16,Fn=hn||ge,xt=vn==="none"?Pn:gn;return r().createElement(j.v,{condition:ge,wrap:Vt=>r().createElement(ve,{status:"severe-warning"},Vt)},r().createElement(xt,{"aria-label":"severe-warning",...Hn,className:Yn,color:Fn?"var(--severe-warning-icon-strong-default)":"var(--severe-warning-icon-default)",ref:Mn,width:Wn??Zn}))}),ft=(0,d.memo)(wt),Kt=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"24",viewBox:"0 0 26 24",width:"26",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("path",{d:"M15.8176 2.87605L24.054 17.1187C24.0546 17.1197 24.0552 17.1207 24.0558 17.1218C24.3441 17.6142 24.4974 18.174 24.4999 18.7447C24.5025 19.3166 24.3537 19.8789 24.0687 20.3747C23.7836 20.8704 23.3724 21.2819 22.8769 21.5674C22.382 21.8525 21.8206 22.0017 21.2495 21.9999M15.8176 2.87605L21.251 20.9999M15.8176 2.87605C15.8175 2.87575 15.8173 2.87546 15.8171 2.87516C15.5322 2.38051 15.122 1.96964 14.6278 1.6839C14.1333 1.39798 13.5722 1.24744 13.001 1.24744C12.4298 1.24744 11.8686 1.39798 11.3742 1.6839C10.88 1.96964 10.4698 2.38052 10.1848 2.87516C10.1846 2.87546 10.1845 2.87575 10.1843 2.87605L1.94615 17.1218C1.6578 17.6142 1.50456 18.174 1.50199 18.7447C1.4994 19.3166 1.6482 19.8789 1.93326 20.3747C2.21832 20.8704 2.6295 21.2819 3.12504 21.5674C3.61993 21.8525 4.18136 22.0017 4.75246 21.9999M15.8176 2.87605L4.75096 20.9999M21.2495 21.9999C21.2487 21.9999 21.248 21.9999 21.2472 21.9999L21.251 20.9999M21.2495 21.9999H21.251V20.9999M21.2495 21.9999H4.75246M21.251 20.9999H4.75096M4.75246 21.9999C4.75321 21.9999 4.75396 21.9999 4.7547 21.9999L4.75096 20.9999M4.75246 21.9999H4.75096V20.9999",stroke:"var(--base-border-weak-default)",strokeWidth:"2"}),r().createElement("path",{d:"M23.1916 17.6249L14.951 3.37494C14.7537 3.03222 14.4696 2.74755 14.1272 2.5496C13.7849 2.35166 13.3964 2.24744 13.001 2.24744C12.6055 2.24744 12.217 2.35166 11.8747 2.5496C11.5324 2.74755 11.2482 3.03222 11.051 3.37494L2.81034 17.6249C2.61015 17.9659 2.50376 18.3538 2.50198 18.7492C2.50019 19.1446 2.60307 19.5334 2.80017 19.8762C2.99726 20.219 3.28156 20.5035 3.62418 20.7009C3.96681 20.8982 4.35556 21.0014 4.75096 20.9999H21.251C21.6464 21.0014 22.0351 20.8982 22.3777 20.7009C22.7204 20.5035 23.0047 20.219 23.2018 19.8762C23.3989 19.5334 23.5017 19.1446 23.4999 18.7492C23.4982 18.3538 23.3918 17.9659 23.1916 17.6249Z",fill:"var(--warning-icon-default)"}),r().createElement("path",{d:"M11.9496 13.1V8.55C11.9496 8.27152 12.0602 8.00445 12.2571 7.80754C12.4541 7.61062 12.7211 7.5 12.9996 7.5C13.2781 7.5 13.5452 7.61062 13.7421 7.80754C13.939 8.00445 14.0496 8.27152 14.0496 8.55V13.1C14.0496 13.3785 13.939 13.6455 13.7421 13.8425C13.5452 14.0394 13.2781 14.15 12.9996 14.15C12.7211 14.15 12.4541 14.0394 12.2571 13.8425C12.0602 13.6455 11.9496 13.3785 11.9496 13.1ZM14.3996 16.6C14.3996 16.8769 14.3175 17.1476 14.1637 17.3778C14.0098 17.608 13.7912 17.7875 13.5354 17.8934C13.2796 17.9994 12.9981 18.0271 12.7265 17.9731C12.4549 17.9191 12.2055 17.7857 12.0097 17.5899C11.8139 17.3942 11.6805 17.1447 11.6265 16.8731C11.5725 16.6016 11.6002 16.3201 11.7062 16.0642C11.8121 15.8084 11.9916 15.5898 12.2218 15.4359C12.452 15.2821 12.7227 15.2 12.9996 15.2C13.3709 15.2 13.727 15.3475 13.9896 15.6101C14.2521 15.8726 14.3996 16.2287 14.3996 16.6Z",fill:"var(--warning-icon-in-default)"}))),ua=(0,d.forwardRef)((me,ge)=>r().createElement("svg",{fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...me,ref:ge},r().createElement("path",{d:"M14.7941 11.75L9.30032 2.24996C9.16879 2.02148 8.97938 1.8317 8.75115 1.69973C8.52292 1.56777 8.26395 1.49829 8.00032 1.49829C7.73668 1.49829 7.47771 1.56777 7.24948 1.69973C7.02125 1.8317 6.83184 2.02148 6.70031 2.24996L1.20657 11.75C1.07311 11.9773 1.00218 12.2359 1.00099 12.4995C0.999801 12.7631 1.06839 13.0223 1.19979 13.2508C1.33118 13.4793 1.52071 13.669 1.74913 13.8006C1.97755 13.9322 2.23671 14.0009 2.50032 14H13.5003C13.7639 14.0009 14.0231 13.9322 14.2515 13.8006C14.4799 13.669 14.6694 13.4793 14.8008 13.2508C14.9322 13.0223 15.0008 12.7631 14.9996 12.4995C14.9984 12.2359 14.9275 11.9773 14.7941 11.75Z",fill:me.color||"var(--warning-icon-default)"}),r().createElement("path",{d:"M7.29974 8.73333V5.7C7.29974 5.51435 7.37349 5.3363 7.50477 5.20503C7.63604 5.07375 7.81409 5 7.99974 5C8.18539 5 8.36344 5.07375 8.49471 5.20503C8.62599 5.3363 8.69974 5.51435 8.69974 5.7V8.73333C8.69974 8.91898 8.62599 9.09703 8.49471 9.22831C8.36344 9.35958 8.18539 9.43333 7.99974 9.43333C7.81409 9.43333 7.63604 9.35958 7.50477 9.22831C7.37349 9.09703 7.29974 8.91898 7.29974 8.73333ZM8.93307 11.0667C8.93307 11.2513 8.87833 11.4317 8.77578 11.5852C8.67322 11.7387 8.52746 11.8583 8.35691 11.929C8.18637 11.9996 7.9987 12.0181 7.81766 11.9821C7.63661 11.9461 7.4703 11.8572 7.33977 11.7266C7.20924 11.5961 7.12035 11.4298 7.08434 11.2488C7.04833 11.0677 7.06681 10.88 7.13745 10.7095C7.20809 10.539 7.32772 10.3932 7.48121 10.2906C7.63469 10.1881 7.81514 10.1333 7.99974 10.1333C8.24728 10.1333 8.48467 10.2317 8.65971 10.4067C8.83474 10.5817 8.93307 10.8191 8.93307 11.0667Z",fill:"var(--warning-icon-in-default)"}))),Sa=(0,d.forwardRef)(({className:me,hasBackground:ge,strong:hn,variation:vn="none",width:Wn,...Hn},Mn)=>{const Yn=(0,O.U)("mds-status-icon",me),Zn=ge?20:16,Fn=hn||ge,xt=vn==="none"?ua:Kt;return r().createElement(j.v,{condition:ge,wrap:Vt=>r().createElement(ve,{status:"warning"},Vt)},r().createElement(xt,{"aria-label":"warning",...Hn,className:Yn,color:Fn?"var(--warning-icon-strong-default)":"var(--warning-icon-default)",ref:Mn,width:Wn??Zn}))}),Ya=(0,d.memo)(Sa),Na={excellent:In,positive:Ve,"low-warning":Mt,warning:Ya,"severe-warning":ft,negative:dn,dormant:ln,information:At,disabled:We,"in-progress":Ct,deny:be,approve:ee};var gt=Object.defineProperty,Jt=(me,ge)=>gt(me,"name",{value:ge,configurable:!0});const Zt=["positive","warning","severe-warning"],ra=Jt(me=>Na[me],"useStatus");var Xt=t(8236);const ia=new Map([["bold",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",d.createElement(d.Fragment,null,d.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),d.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",d.createElement(d.Fragment,null,d.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",d.createElement(d.Fragment,null,d.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",d.createElement(d.Fragment,null,d.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",d.createElement(d.Fragment,null,d.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]);var ja=Object.defineProperty,oa=Object.defineProperties,Dt=Object.getOwnPropertyDescriptors,da=Object.getOwnPropertySymbols,Ta=Object.prototype.hasOwnProperty,Pa=Object.prototype.propertyIsEnumerable,qt=(me,ge,hn)=>ge in me?ja(me,ge,{enumerable:!0,configurable:!0,writable:!0,value:hn}):me[ge]=hn,ea=(me,ge)=>{for(var hn in ge||(ge={}))Ta.call(ge,hn)&&qt(me,hn,ge[hn]);if(da)for(var hn of da(ge))Pa.call(ge,hn)&&qt(me,hn,ge[hn]);return me},Fa=(me,ge)=>oa(me,Dt(ge));const Ba=(0,d.forwardRef)((me,ge)=>d.createElement(Xt.A,Fa(ea({ref:ge},me),{weights:ia})));Ba.displayName="X";var ga=t(6375);const Ra=(0,ga.Y)(Ba);Ra.displayName="X";var va=t(7570),ca=Object.defineProperty,ba=(me,ge)=>ca(me,"name",{value:ge,configurable:!0});const sa=ba(({banner:me,status:ge})=>{const hn=ge==="informational"?"information":ge;let vn;return me===!0?vn="page":typeof me=="string"?vn=me:vn=void 0,(0,va.O)([{prop:ge,propValues:["informational"],message:"The `informational` status is deprecated, we've automatically wired up your notification with the `information` status but this will cause breakage in an upcoming major version."}]),(0,va.O)([{prop:me,propValues:[!0],message:'The `banner` property was changed in order to accept a string in order to support multiple types of banner notification. You most likely want to use `banner="page"`.'}]),{banner:vn,status:hn}},"useDeprecations");var Oa=`.mds-notification {
  --mds-notification-bg-color: transparent;
  --mds-notification-border-color: transparent;

  display: flex;
  gap: 8px;
  align-items: flex-start;

  padding: 12px 16px;

  font: var(--typography-p3-regular);
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  color: var(--base-text-default);

  background-color: var(--mds-notification-bg-color);
  border: 1px solid transparent;
  border-radius: 6px
}
.mds-notification .mds-notification-title {
    font: var(--typography-p3-bold);
  }
.mds-notification.mds-notification-information:not(.mds-notification-page-banner) {
      --mds-notification-bg-color: var(--info-bg-strong-default);
      --mds-notification-border-color: var(--info-border-default);
    }
.mds-notification.mds-notification-warning:not(.mds-notification-page-banner) {
      --mds-notification-bg-color: var(--warning-bg-strong-default);
      --mds-notification-border-color: var(--warning-border-default);
    }
.mds-notification.mds-notification-negative:not(.mds-notification-page-banner) {
      --mds-notification-bg-color: var(--negative-bg-strong-default);
      --mds-notification-border-color: var(--negative-border-default);
    }
.mds-notification.mds-notification-positive:not(.mds-notification-page-banner) {
      --mds-notification-bg-color: var(--positive-bg-strong-default);
      --mds-notification-border-color: var(--positive-border-default);
    }
.mds-notification.mds-notification-page-banner {
    gap: 18px;

    padding: 16px 20px 16px 12px;

    border-left: 6px solid var(--mds-notification-border-color);
    border-radius: 6px;
    box-shadow: var(--effects-shadow-lifted)
  }
.mds-notification.mds-notification-page-banner.mds-notification-information {
      --mds-notification-border-color: var(--info-border-default);
      --mds-notification-bg-color: var(--info-bg-weak-default);
    }
.mds-notification.mds-notification-page-banner.mds-notification-negative {
      --mds-notification-border-color: var(--negative-border-default);
      --mds-notification-bg-color: var(--negative-bg-weak-default);
    }
.mds-notification.mds-notification-page-banner.mds-notification-warning {
      --mds-notification-border-color: var(--warning-border-default);
      --mds-notification-bg-color: var(--warning-bg-weak-default);
    }
.mds-notification.mds-notification-page-banner.mds-notification-positive {
      --mds-notification-border-color: var(--positive-border-default);
      --mds-notification-bg-color: var(--positive-bg-weak-default);
    }
.mds-notification .mds-notification-content {
    flex: 1;
    align-self: center;
  }
.mds-notification.mds-notification-product-banner {
    display: flex;
    gap: 16px;

    padding: 12px 16px;

    color: var(--base-text-default);

    background: var(--mds-notification-bg-color);
    border: 1px solid var(--mds-notification-border-color);
    border-radius: 6px;
    box-shadow: var(--effects-shadow-lifted)
  }
.mds-notification.mds-notification-product-banner .mds-notification-content {
      overflow: hidden;
      display: -webkit-box;

      max-width: 940px;

      text-overflow: ellipsis;

      -webkit-box-orient: vertical
    }
.mds-notification.mds-notification-product-banner .mds-notification-content.with-title {
        -webkit-line-clamp: 2;
      }
.mds-notification.mds-notification-product-banner .mds-notification-content.without-title {
        -webkit-line-clamp: 3;
      }
/* Need to overwrite display:inline-flex to display: flex for 3 line truncate text on Safari because otherwise it truncates to one line less */
.mds-notification.mds-notification-product-banner .mds-notification-content .mds-button {
        display: inline;
      }
.mds-notification.mds-notification-product-banner .mds-notification-title {
      overflow: hidden;
      padding-bottom: 4px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
.mds-notification .mds-notification-close-button.mds-button-icon-only {
    /* 
      The small icon-only button is 28px x 28px,
      but the design for this close button is specific and has 24x24
    */
    width: 24px;
    height: 24px;
  }
`;q(Oa,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/notification"}});const fa=(0,d.forwardRef)(({banner:me,children:ge,className:hn,onClose:vn,role:Wn,status:Hn="information",title:Mn,...Yn},Zn)=>{const{banner:Fn,status:xt}=sa({banner:me,status:Hn}),Vt=(0,O.U)("mds-notification",`mds-notification-${xt}`,hn,{"mds-notification-page-banner":Fn==="page","mds-notification-product-banner":Fn==="product"}),_=(0,O.U)("mds-notification-content",{"with-title":!!Mn&&Fn==="product","without-title":!Mn&&Fn==="product"}),g=vn?"dialog":"alert",R=ra(xt),Y=Zt.includes(xt)&&Fn!=="page";return r().createElement("div",{...Yn,className:Vt,ref:Zn,role:Wn??g},r().createElement(R,{height:24,strong:Y||void 0,width:24}),r().createElement("div",{className:_},Mn&&r().createElement("div",{className:"mds-notification-title"},Mn),ge),vn&&r().createElement(l.$,{"aria-label":"close notification",className:"mds-notification-close-button",icon:r().createElement(Ra,{size:16}),kind:"tertiary",onClick:vn,size:"sm"}))});var na=Object.defineProperty,ma=(me,ge)=>na(me,"name",{value:ge,configurable:!0});const ir=null;var pa=Object.defineProperty,ha=(me,ge)=>pa(me,"name",{value:ge,configurable:!0});const or=null;var Xa=Object.defineProperty,vr=(me,ge)=>Xa(me,"name",{value:ge,configurable:!0});const br=null;var Va=Object.defineProperty,Ua=(me,ge)=>Va(me,"name",{value:ge,configurable:!0});const yt=null,Ia=null,wa=null;var Gt=Object.defineProperty,Ja=(me,ge)=>Gt(me,"name",{value:ge,configurable:!0});const xa=null;var Qa=Object.defineProperty,ka=(me,ge)=>Qa(me,"name",{value:ge,configurable:!0});const qa={negative:1,warning:2,information:3},dr=null;var Ma=`.mds-product-notification-group {
  --mds-product-notification-group-border-color: transparent;
  --mds-product-notification-group-bg-color: transparent;

  width: 100%;
  border: 1px solid var(--mds-product-notification-group-border-color);
  border-radius: 6px
}
.mds-product-notification-group.mds-product-notification-group-collapsed {
    border-bottom: 0;
    border-radius: 6px;
  }
.mds-product-notification-group.mds-product-notification-group-warning {
    --mds-product-notification-group-border-color: var(
      --warning-border-default
    );
    --mds-product-notification-group-bg-color: var(--warning-bg-strong-default);
  }
.mds-product-notification-group.mds-product-notification-group-information {
    --mds-product-notification-group-border-color: var(--info-border-default);
    --mds-product-notification-group-bg-color: var(--info-bg-strong-default);
  }
.mds-product-notification-group.mds-product-notification-group-negative {
    --mds-product-notification-group-border-color: var(
      --negative-border-default
    );
    --mds-product-notification-group-bg-color: var(
      --negative-bg-strong-default
    );
  }
.mds-product-notification-group .mds-product-notification-group-preview {
    padding: 12px 24px 12px 16px;
    background-color: var(--mds-product-notification-group-bg-color);
    border-bottom: 1px solid var(--mds-product-notification-group-border-color);
    border-radius: 6px 6px 0 0
  }
.mds-product-notification-group .mds-product-notification-group-preview.mds-product-notification-group-preview-collapsed {
      border-radius: 6px;
    }
.mds-product-notification-group .mds-product-notification-group-list {
    overflow: hidden;

    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 8px 24px 8px 46px
  }
.mds-product-notification-group .mds-product-notification-group-list .mds-product-notification-group-divider {
      --mds-divider-size: 8px;

      border-color: var(--control-border-weak-default);
    }
.mds-product-notification-group .mds-product-notification-group-list .mds-product-notification-group-element {
      margin-left: 8px;
    }
.mds-product-notification-group .mds-product-notification-group-list-overflow {
    overflow-y: scroll;
    max-height: 270px;
  }
`;q(Ma,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/notification"}});var Ha=Object.defineProperty,cr=(me,ge)=>Ha(me,"name",{value:ge,configurable:!0});const er=null;var Ee=t(536),Re=t(5034),Xe=t(5530),xn=t.n(Xe),Tn=t(622),wn=t(4238),Sn=Object.defineProperty,et=(me,ge)=>Sn(me,"name",{value:ge,configurable:!0});const Jn={information:6e3,positive:6e3,warning:3e4},k=(0,d.forwardRef)(({children:me,status:ge,onClose:hn=et(()=>null,"onClose"),timeout:vn,...Wn},Hn)=>{const[Mn,Yn]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{if(vn===0)return;const Zn=setTimeout(()=>{Yn(!0),hn()},vn||Jn[ge]);return()=>clearTimeout(Zn)},[vn,ge]),r().createElement(wn.P.div,{animate:{x:0},exit:Mn?{x:"100vw"}:{},initial:{x:"100vw"},layout:"position",transition:{ease:"linear"}},r().createElement(fa,{role:ge==="warning"?"alert":"status",...Wn,banner:"page",onClose:hn,ref:Hn,status:ge},me))});var K=`.mds-toast {
  position: fixed;
  top: 24px;
  right: 24px;
}

.mds-toast-list .mds-notification {
  box-sizing: border-box;
  width: 464px;
  padding-right: 24px;
}
`;q(K,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/notification"}});var re=Object.defineProperty,Pe=(me,ge)=>re(me,"name",{value:ge,configurable:!0});const Be=(0,d.forwardRef)(({toastList:me,onRemove:ge=Pe(()=>null,"onRemove"),className:hn,root:vn,style:Wn,...Hn},Mn)=>{const Yn=(0,O.U)("mds-toast",hn),Zn=(0,Re.YK)("toast");return r().createElement(j.v,{condition:!!vn,wrap:Fn=>r().createElement(Ee.XF,{...vn?{root:vn}:{}},Fn)},r().createElement(x.s,{className:Yn,justify:"flex-end",ref:Mn,style:{zIndex:Zn,...Wn},...Hn},r().createElement(x.s,{className:"mds-toast-list",direction:"vertical",gap:"xs"},r().createElement(Tn.N,null,me.map(({children:Fn,className:xt,key:Vt,onClose:_,status:g,timeout:R,title:Y})=>r().createElement(k,{className:xn()("mds-toast-list-toast",xt),key:Vt,onClose:()=>{ge(Vt),_?.()},ref:Mn,status:g,timeout:R,title:Y},Fn))))))});Be.displayName="Toast";var Fe=t(2183),Je=Object.defineProperty,rn=(me,ge)=>Je(me,"name",{value:ge,configurable:!0});const pn=(0,d.createContext)(null),Qn=null;function lt(me){const ge=(0,d.useContext)(pn),[hn,vn]=(0,d.useState)(()=>me?me.map(Mn=>({...Mn,key:(0,Fe.$)()})):[]),Wn=(0,d.useCallback)(Mn=>{const Yn=(0,Fe.$)();return vn(Zn=>[{...Mn,key:Yn},...Zn]),Yn},[]),Hn=(0,d.useCallback)(Mn=>{vn(Yn=>Yn.filter(Zn=>Zn.key!==Mn))},[]);if((0,d.useEffect)(()=>{me!==void 0&&(console.warn("[Magnetic] useToast with arguments is deprecated. Please migrate to the new context-based API by wrapping your app with MagneticProvider or ToastProvider."),ge&&console.warn("[Magnetic] You have a ToastProvider in your app but you're using the legacy useToast([]) API. This creates a separate toast state. Consider removing the array argument to use the Provider: useToast()"))},[me,ge]),me!==void 0)return{addToast:Wn,removeToast:Hn,setToastList:vn,toastList:hn};if(!ge)throw new Error("useToast must be used within a ToastProvider. Make sure your app is wrapped with MagneticProvider with toast enabled, or wrap it manually with ToastProvider.");return ge}rn(lt,"useToast")},5418:(F,P,t)=>{"use strict";t.d(P,{D:()=>u});var i=t(5622),d=t(6978),r=t(7570),x=t(2776),l=t.n(x),p=[],s=[];function f(S,E){if(S&&typeof document<"u"){var L,T=E.prepend===!0?"prepend":"append",Q=E.singleTag===!0,G=typeof E.container=="string"?document.querySelector(E.container):document.getElementsByTagName("head")[0];if(Q){var se=p.indexOf(G);se===-1&&(se=p.push(G)-1,s[se]={}),L=s[se]&&s[se][T]?s[se][T]:s[se][T]=U()}else L=U();S.charCodeAt(0)===65279&&(S=S.substring(1)),L.styleSheet?L.styleSheet.cssText+=S:L.appendChild(document.createTextNode(S))}function U(){var y=document.createElement("style");if(y.setAttribute("type","text/css"),E.attributes)for(var B=Object.keys(E.attributes),ne=0;ne<B.length;ne++)y.setAttribute(B[ne],E.attributes[B[ne]]);var M=T==="prepend"?"afterbegin":"beforeend";return G.insertAdjacentElement(M,y),y}}var z=`.mds-heading {
  margin: 0;
  color: var(--base-text-strong-default)
}
.mds-heading.mds-heading-size-primary {
    font: var(--typography-heading-primary);
  }
.mds-heading.mds-heading-size-section {
    font: var(--typography-heading-section);
  }
.mds-heading.mds-heading-size-sub-section {
    font: var(--typography-heading-sub-section);
  }
.mds-heading.mds-heading-size-smallest {
    font: var(--typography-heading-smallest);
  }
`;f(z,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/heading"}});var N=t(1308),h=Object.defineProperty,A=(S,E)=>h(S,"name",{value:E,configurable:!0});const I={primary:"primary",xl:"primary",lg:"primary",md:"primary",sm:"section",section:"section",xs:"sub-section","sub-section":"sub-section",xxs:"smallest",smallest:"smallest",h1:"primary",h2:"section",h3:"sub-section",h4:"smallest"},b={primary:"h1",section:"h2","sub-section":"h3",smallest:"h4"},u=A(({as:S,children:E,className:L,margin:T,size:Q="section",...G})=>{const se=(0,i.K)(T),U=(0,d.U)("mds-heading",`mds-heading-size-${I[Q]}`,se,L),y=(0,x.useMemo)(()=>S??b[I[Q]],[S,Q]);return(0,r.O)({prop:Q,propValues:["xxs","xxs","xs","sm","md","lg","xl","h1","h2","h3","h4"],message:"The use of t-shirt sizes (sm, md, lg, etc) and h sizes (h1, h2, h3, etc) in the `Heading` component is deprecated and will be removed in a future major release of Magnetic in order to align terminology between design and engineering. Please use primary through smallest as they appear in your Figma designs in the inspector tab under the Typography section."}),l().createElement(y,{className:U,role:"heading",...G},E)},"Heading")},5425:(F,P,t)=>{"use strict";t.d(P,{Xr:()=>p,gt:()=>x,xv:()=>d});var i=t(5868);function d(s,f=0){return typeof s!="string"||f===0||s.length<=f?s:`${s.slice(0,f)}...`}function r(s,f){let z=s;const N=z.length;if(N<=150)return z;f>N&&(f=N);let h=Math.max(f-60,0);h<5&&(h=0);let A=Math.min(h+140,N);return A>N-5&&(A=N),A===N&&(h=Math.max(A-140,0)),z=z.slice(h,A),h>0&&(z=`'{snip} ${z}`),A<N&&(z+=" {snip}"),z}function x(s,f){if(!Array.isArray(s))return"";const z=[];for(let N=0;N<s.length;N++){const h=s[N];try{(0,i.L2)(h)?z.push("[VueViewModel]"):z.push(String(h))}catch{z.push("[value cannot be serialized]")}}return z.join(f)}function l(s,f,z=!1){return(0,i.Kg)(s)?(0,i.gd)(f)?f.test(s):(0,i.Kg)(f)?z?s===f:s.includes(f):!1:!1}function p(s,f=[],z=!1){return f.some(N=>l(s,N,z))}},5530:(F,P)=>{var t,i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var d={}.hasOwnProperty;function r(){for(var p="",s=0;s<arguments.length;s++){var f=arguments[s];f&&(p=l(p,x(f)))}return p}function x(p){if(typeof p=="string"||typeof p=="number")return p;if(typeof p!="object")return"";if(Array.isArray(p))return r.apply(null,p);if(p.toString!==Object.prototype.toString&&!p.toString.toString().includes("[native code]"))return p.toString();var s="";for(var f in p)d.call(p,f)&&p[f]&&(s=l(s,f));return s}function l(p,s){return s?p?p+" "+s:p+s:p}F.exports?(r.default=r,F.exports=r):(t=[],i=function(){return r}.apply(P,t),i!==void 0&&(F.exports=i))})()},5567:F=>{function P(t){var i=[];if(t!=null)for(var d in Object(t))i.push(d);return i}F.exports=P},5580:(F,P,t)=>{var i=t(9090),d=t(3903),r=t(2139);function x(l,p){return r(d(l,p,i),l+"")}F.exports=x},5622:(F,P,t)=>{"use strict";t.d(P,{K:()=>N});var i=t(1308),d=t(5530),r=t.n(d),x=t(2776),l=t.n(x),p=Object.defineProperty,s=(h,A)=>p(h,"name",{value:A,configurable:!0});const f=[0,2,4,8,12,16,24,36,48],z=s(()=>{if(typeof window<"u"&&!document.querySelector("#mds-use-margin-style")){const h=f.map(I=>`
          .mds-margin-${I} {margin: ${I}px !important;}
          .mds-margin-vertical-${I} {margin-top: ${I}px !important; margin-bottom: ${I}px !important;}
          .mds-margin-horizontal-${I} {margin-left: ${I}px !important; margin-right: ${I}px !important;}
          .mds-margin-top-${I} {margin-top: ${I}px !important;}
          .mds-margin-right-${I} {margin-right: ${I}px !important;}
          .mds-margin-bottom-${I} {margin-bottom: ${I}px !important;}
          .mds-margin-left-${I} {margin-left: ${I}px !important;}
      `).join("");new i.P_({id:"mds-use-margin-style"}).set({style:h})}},"initUseMargin"),N=s(h=>(0,x.useMemo)(()=>{if(z(),typeof h>"u")return"";if(typeof h=="number")return`mds-margin-${h}`;if(Array.isArray(h))switch(h.length){case 1:return`mds-margin-${h[0]}`;case 2:return`mds-margin-vertical-${h[0]} mds-margin-horizontal-${h[1]}`;case 3:return`mds-margin-top-${h[0]} mds-margin-horizontal-${h[1]} mds-margin-bottom-${h[2]}`;case 4:return`mds-margin-top-${h[0]} mds-margin-right-${h[1]} mds-margin-bottom-${h[2]} mds-margin-left-${h[3]}`}const{bottom:A,left:I,right:b,top:u}=h;return r()({[`mds-margin-top-${u}`]:u!==void 0,[`mds-margin-right-${b}`]:b!==void 0,[`mds-margin-bottom-${A}`]:A!==void 0,[`mds-margin-left-${I}`]:I!==void 0})},[h]),"useMargin")},5674:(F,P,t)=>{var i=t(3615),d=t(789),r=t(8561);function x(){this.size=0,this.__data__={hash:new i,map:new(r||d),string:new i}}F.exports=x},5816:(F,P,t)=>{var i=t(661),d=t(7641),r=t(9592);function x(l){return r(l)?i(l,!0):d(l)}F.exports=x},5838:(F,P,t)=>{"use strict";t.d(P,{f:()=>G});var i=[],d=[];function r(se,U){if(se&&typeof document<"u"){var y,B=U.prepend===!0?"prepend":"append",ne=U.singleTag===!0,M=typeof U.container=="string"?document.querySelector(U.container):document.getElementsByTagName("head")[0];if(ne){var $=i.indexOf(M);$===-1&&($=i.push(M)-1,d[$]={}),y=d[$]&&d[$][B]?d[$][B]:d[$][B]=ae()}else y=ae();se.charCodeAt(0)===65279&&(se=se.substring(1)),y.styleSheet?y.styleSheet.cssText+=se:y.appendChild(document.createTextNode(se))}function ae(){var J=document.createElement("style");if(J.setAttribute("type","text/css"),U.attributes)for(var xe=Object.keys(U.attributes),q=0;q<xe.length;q++)J.setAttribute(xe[q],U.attributes[xe[q]]);var le=B==="prepend"?"afterbegin":"beforeend";return M.insertAdjacentElement(le,J),J}}var x=`.mds-rebuild-text-area {
  --mds-text-area-background-color: var(--control-bg-weak-default);
  --mds-text-area-border-color: var(--control-border-default);
  --mds-text-area-border-color-hover: var(--control-border-hover);
  --mds-text-area-border-color-focus: var(--control-border-focus);
  --mds-text-area-border-color-invalid: var(--negative-border-medium-active);
  --mds-text-area-font-color: var(--base-text-default);
  --mds-text-area-placeholder-font-color: var(--base-text-weak-default);
  --mds-text-area-counter-value-font: var(--base-text-weak-default);

  display: block;
  min-width: var(--mds-rebuild-text-area-min-width);
  max-width: var(--mds-rebuild-text-area-max-width)
}
.mds-rebuild-text-area.mds-rebuild-text-area-fixed-width {
    width: var(--mds-rebuild-text-area-fixed-width);
  }
.mds-rebuild-text-area > .mds-rebuild-text-area-element {
    resize: vertical;
    vertical-align: top;
  }
.mds-rebuild-text-area .mds-rebuild-text-area-element {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: var(--mds-text-area-padding-y) var(--mds-text-area-padding-x);

    font: var(--mds-text-area-font);
    line-height: var(--mds-text-area-line-height);
    color: var(--mds-text-area-font-color);

    background: var(--mds-text-area-background-color);
    border: 2px solid var(--mds-text-area-border-color);
    border-radius: 6px;
  }
.mds-rebuild-text-area.mds-rebuild-text-area-size-md {
    --mds-text-area-font: var(--typography-p3-regular);
    --mds-text-area-label-font: var(--typography-p3-semibold);
    --mds-rebuild-text-area-min-width: 60px;
    --mds-rebuild-text-area-max-width: 600px;
    --mds-rebuild-text-area-fixed-width: 280px
  }
.mds-rebuild-text-area.mds-rebuild-text-area-size-md > .mds-rebuild-text-area-element {
      --mds-text-area-padding-y: 5px 20px;
      --mds-text-area-padding-x: 5px 10px;
      --mds-text-area-line-height: 20px;

      height: 80px;
      margin-top: 3px;
    }
.mds-rebuild-text-area.mds-rebuild-text-area-size-sm {
    --mds-text-area-font: var(--typography-p4-regular);
    --mds-text-area-label-font: var(--typography-p4-semibold);
    --mds-rebuild-text-area-min-width: 48px;
    --mds-rebuild-text-area-max-width: 520px;
    --mds-rebuild-text-area-fixed-width: 240px
  }
.mds-rebuild-text-area.mds-rebuild-text-area-size-sm > .mds-rebuild-text-area-element {
      --mds-text-area-padding-y: 3px 20px;
      --mds-text-area-padding-x: 3px 6px;
      --mds-text-area-line-height: 18px;

      height: 69px;
      margin-top: 4px;
    }
.mds-rebuild-text-area > .mds-rebuild-text-area-element:focus-visible {
    border-color: var(--mds-text-area-border-color-focus);
    outline: none;
    box-shadow: var(--elevation-control-focus);
  }
.mds-rebuild-text-area .mds-rebuild-text-area-element:focus {
    outline-color: var(--control-border-focus);
  }
.mds-rebuild-text-area .mds-rebuild-text-area-element::-moz-placeholder {
    color: var(--mds-text-area-placeholder-font-color);
  }
.mds-rebuild-text-area .mds-rebuild-text-area-element::placeholder {
    color: var(--mds-text-area-placeholder-font-color);
  }
.mds-rebuild-text-area.mds-rebuild-text-area-invalid > .mds-rebuild-text-area-element {
    box-shadow: var(--effects-shadow-invalid);
  }
.mds-rebuild-text-area .mds-rebuild-text-area-element:hover:not(:disabled) {
    --mds-text-area-border-color: var(--mds-text-area-border-color-hover);
  }
.mds-rebuild-text-area.mds-rebuild-text-area-invalid {
    --mds-text-area-border-color: var(--mds-text-area-border-color-invalid);
    --mds-text-area-border-color-hover: var(
      --mds-text-area-border-color-invalid
    );
    --mds-text-area-border-color-focus: var(
      --mds-text-area-border-color-invalid
    )
  }
.mds-rebuild-text-area.mds-rebuild-text-area-invalid[\\:has\\(.mds-rebuild-text-area-element\\:focus-visible\\)] > .mds-rebuild-text-area-element {
        box-shadow: var(--elevation-invalid-focus);
      }
.mds-rebuild-text-area.mds-rebuild-text-area-invalid:has(.mds-rebuild-text-area-element:focus-visible) > .mds-rebuild-text-area-element {
        box-shadow: var(--elevation-invalid-focus);
      }
.mds-rebuild-text-area .mds-rebuild-text-area-label {
    display: flex;
    flex-direction: row;
    font: var(--mds-text-area-label-font);
    color: var(--base-text-default)
  }
.mds-rebuild-text-area .mds-rebuild-text-area-label > span {
      color: var(--base-text-default)
    }
.mds-rebuild-text-area .mds-rebuild-text-area-label > span.mds-rebuild-text-area-label-required {
        margin: 0 2px;
        color: var(--negative-text-default);
      }
.mds-rebuild-text-area .mds-rebuild-text-area-label > span.mds-rebuild-text-area-label-optional {
        margin: 0 4px;
        font-weight: 400;
        color: var(--base-text-medium-default);
      }
.mds-rebuild-text-area .mds-rebuild-text-area-label > svg {
      align-self: center;
      margin: 0 4px
    }
.mds-rebuild-text-area .mds-rebuild-text-area-label > svg:hover {
        fill: var(--interact-icon-weak-default);
      }
.mds-rebuild-text-area .mds-rebuild-text-area-label-size-sm {
    --mds-text-area-label-font: var(--typography-p4-semibold);
  }
.mds-rebuild-text-area .mds-rebuild-text-area-label-size-md {
    --mds-text-area-label-font: var(--typography-p3-semibold);
  }
.mds-rebuild-text-area.mds-rebuild-text-area-disabled {
    --mds-text-area-font-color: var(--base-text-disabled);
    --mds-text-area-background-color: var(--control-bg-weak-disabled);
    --mds-text-area-border-color: var(--control-border-disabled);
    --mds-text-area-placeholder-font-color: var(--base-text-disabled);
  }
.mds-rebuild-text-area .mds-text-area-counter {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    margin-top: 4px;

    font: var(--typography-p4-regular);
    color: var(--base-text-medium-default);
    color: var(
      --mds-text-area-counter-font-color,
      var(--base-text-medium-default)
    )
  }
.mds-rebuild-text-area .mds-text-area-counter .mds-text-area-counter-stats .mds-text-area-counter-value {
      align-items: flex-start;
      font: var(--typography-p4-semibold);
    }
`;r(x,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/text-area"}});var l=t(1308),p=t(5622),s=t(6978),f=t(2776),z=t.n(f),N=Object.defineProperty,h=(se,U)=>N(se,"name",{value:U,configurable:!0});const A=h(({localization:se,maxLength:U,value:y=""})=>{const B=y?.toString()?.length;return U<=0?null:z().createElement("div",{className:"mds-text-area-counter"},z().createElement("span",null,se?.maxLengthExceededMessage?se.maxLengthExceededMessage.replace("{maxLength}",String(U)):`Must contain ${U} characters or less.`),z().createElement("div",{className:"mds-text-area-counter-stats"},z().createElement("span",{className:"mds-text-area-counter-value"},B),z().createElement("span",{className:"mds-rebuild-text-area-counter-max"},"/",U)))},"TextAreaCounter");var I=t(3249),b=t(1772),u=Object.defineProperty,S=(se,U)=>u(se,"name",{value:U,configurable:!0});const E=S(({size:se="md",tooltip:U})=>{const y=typeof U=="string";return z().createElement(b.m,{className:"mds-rebuild-text-area-tooltip",title:y?U:U.content},y?z().createElement(I.R,{"aria-label":U,color:"var(--interact-icon-weak-default)",height:se==="md"?16:14,tabIndex:0,width:se==="md"?16:14}):(0,f.cloneElement)(U.icon,{"aria-label":U.content,color:"var(--interact-icon-weak-default)",height:se==="md"?16:14,tabIndex:0,width:se==="md"?16:14,weight:"bold"}))},"TextAreaTooltip");E.displayName="TextArea.Tooltip";var L=Object.defineProperty,T=(se,U)=>L(se,"name",{value:U,configurable:!0});const Q=T(({hiddenLabel:se,label:U,optional:y,required:B,size:ne="md",tooltip:M})=>{const $=(0,s.U)("mds-rebuild-text-area-label",`mds-rebuild-text-area-label-size-${ne}`);return se?null:z().createElement("div",{className:$},U,B&&z().createElement("span",{className:"mds-rebuild-text-area-label-required"},"*"),y&&z().createElement("span",{className:"mds-rebuild-text-area-label-optional"},"(optional)"),M&&z().createElement(E,{size:ne,tooltip:M}))},"TextAreaLabel"),G=(0,f.forwardRef)(({className:se,disabled:U,fixedWidth:y,hiddenLabel:B,invalid:ne,label:M,localization:$,margin:ae,maxLength:J,optional:xe,required:q=!1,size:le="md",tooltip:te,value:Z,...ce},O)=>{const ue=J&&Number.isInteger(J)&&J>0,D=(0,p.K)(ae),ee=(0,s.U)("mds-rebuild-text-area",`mds-rebuild-text-area-size-${le}`,D,se,{"mds-rebuild-text-area-fixed-width":y,"mds-rebuild-text-area-disabled":U,"mds-rebuild-text-area-invalid":ne});return z().createElement("label",{className:ee},z().createElement(Q,{hiddenLabel:B,label:M,optional:xe,required:q,size:le,tooltip:te}),z().createElement("textarea",{className:"mds-rebuild-text-area-element",disabled:U,maxLength:J,name:M,ref:O,required:q,value:Z,...ce}),ue&&z().createElement(A,{localization:$,maxLength:J,value:Z??""}))})},5868:(F,P,t)=>{"use strict";t.d(P,{BD:()=>l,Kg:()=>s,L2:()=>E,NF:()=>f,Qd:()=>N,Qg:()=>b,T2:()=>x,W6:()=>p,bJ:()=>d,gd:()=>I,mE:()=>u,sO:()=>z,tH:()=>S,vq:()=>A,xH:()=>h});const i=Object.prototype.toString;function d(L){switch(i.call(L)){case"[object Error]":case"[object Exception]":case"[object DOMException]":case"[object WebAssembly.Exception]":return!0;default:return S(L,Error)}}function r(L,T){return i.call(L)===`[object ${T}]`}function x(L){return r(L,"ErrorEvent")}function l(L){return r(L,"DOMError")}function p(L){return r(L,"DOMException")}function s(L){return r(L,"String")}function f(L){return typeof L=="object"&&L!==null&&"__sentry_template_string__"in L&&"__sentry_template_values__"in L}function z(L){return L===null||f(L)||typeof L!="object"&&typeof L!="function"}function N(L){return r(L,"Object")}function h(L){return typeof Event<"u"&&S(L,Event)}function A(L){return typeof Element<"u"&&S(L,Element)}function I(L){return r(L,"RegExp")}function b(L){return!!(L&&L.then&&typeof L.then=="function")}function u(L){return N(L)&&"nativeEvent"in L&&"preventDefault"in L&&"stopPropagation"in L}function S(L,T){try{return L instanceof T}catch{return!1}}function E(L){return!!(typeof L=="object"&&L!==null&&(L.__isVue||L._isVue))}},5912:F=>{function P(t){var i=typeof t;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?t!=="__proto__":t===null}F.exports=P},5917:(F,P,t)=>{"use strict";t.d(P,{lu:()=>r,zf:()=>l});var i=t(9513);const d=1e3;function r(){return Date.now()/d}function x(){const{performance:f}=i.O;if(!f||!f.now)return r;const z=Date.now()-f.now(),N=f.timeOrigin==null?z:f.timeOrigin;return()=>(N+f.now())/d}const l=x();let p;const s=(()=>{const{performance:f}=i.O;if(!f||!f.now){p="none";return}const z=3600*1e3,N=f.now(),h=Date.now(),A=f.timeOrigin?Math.abs(f.timeOrigin+N-h):z,I=A<z,b=f.timing&&f.timing.navigationStart,S=typeof b=="number"?Math.abs(b+N-h):z,E=S<z;return I||E?A<=S?(p="timeOrigin",f.timeOrigin):(p="navigationStart",b):(p="dateNow",h)})()},5919:(F,P,t)=>{var i=t(9592),d=t(6184);function r(x){return d(x)&&i(x)}F.exports=r},6015:F=>{function P(t){var i=typeof t;return t!=null&&(i=="object"||i=="function")}F.exports=P},6018:(F,P,t)=>{"use strict";t.d(P,{B:()=>u});var i=t(2776),d=t(8236);const r=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M228,104a12,12,0,0,1-24,0V69l-59.51,59.51a12,12,0,0,1-17-17L187,52H152a12,12,0,0,1,0-24h64a12,12,0,0,1,12,12Zm-44,24a12,12,0,0,0-12,12v64H52V84h64a12,12,0,0,0,0-24H48A20,20,0,0,0,28,80V208a20,20,0,0,0,20,20H176a20,20,0,0,0,20-20V140A12,12,0,0,0,184,128Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M184,80V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H176A8,8,0,0,1,184,80Z",opacity:"0.2"}),i.createElement("path",{d:"M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M192,136v72a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64h72a8,8,0,0,1,0,16H48V208H176V136a8,8,0,0,1,16,0Zm32-96a8,8,0,0,0-8-8H152a8,8,0,0,0-5.66,13.66L172.69,72l-42.35,42.34a8,8,0,0,0,11.32,11.32L184,83.31l26.34,26.35A8,8,0,0,0,224,104Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M222,104a6,6,0,0,1-12,0V54.49l-69.75,69.75a6,6,0,0,1-8.48-8.48L201.51,46H152a6,6,0,0,1,0-12h64a6,6,0,0,1,6,6Zm-38,26a6,6,0,0,0-6,6v72a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2h72a6,6,0,0,0,0-12H48A14,14,0,0,0,34,80V208a14,14,0,0,0,14,14H176a14,14,0,0,0,14-14V136A6,6,0,0,0,184,130Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M220,104a4,4,0,0,1-8,0V49.66l-73.16,73.17a4,4,0,0,1-5.66-5.66L206.34,44H152a4,4,0,0,1,0-8h64a4,4,0,0,1,4,4Zm-36,28a4,4,0,0,0-4,4v72a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4h72a4,4,0,0,0,0-8H48A12,12,0,0,0,36,80V208a12,12,0,0,0,12,12H176a12,12,0,0,0,12-12V136A4,4,0,0,0,184,132Z"}))]]);var x=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,N=(S,E,L)=>E in S?x(S,E,{enumerable:!0,configurable:!0,writable:!0,value:L}):S[E]=L,h=(S,E)=>{for(var L in E||(E={}))f.call(E,L)&&N(S,L,E[L]);if(s)for(var L of s(E))z.call(E,L)&&N(S,L,E[L]);return S},A=(S,E)=>l(S,p(E));const I=(0,i.forwardRef)((S,E)=>i.createElement(d.A,A(h({ref:E},S),{weights:r})));I.displayName="ArrowSquareOut";var b=t(6375);const u=(0,b.Y)(I);u.displayName="ArrowSquareOut"},6024:(F,P,t)=>{"use strict";t.d(P,{LV:()=>N,jN:()=>f,jf:()=>p});var i=t(9639),d=t(7449),r=t(9513),x=t(6932),l=t(535);const p=r.O;let s=0;function f(){return s>0}function z(){s++,setTimeout(()=>{s--})}function N(h,A={},I){if(typeof h!="function")return h;try{const u=h.__sentry_wrapped__;if(u)return typeof u=="function"?u:h;if((0,l.sp)(h))return h}catch{return h}const b=function(){const u=Array.prototype.slice.call(arguments);try{I&&typeof I=="function"&&I.apply(this,arguments);const S=u.map(E=>N(E,A));return h.apply(this,S)}catch(S){throw z(),(0,d.v4)(E=>{E.addEventProcessor(L=>(A.mechanism&&((0,x.gO)(L,void 0,void 0),(0,x.M6)(L,A.mechanism)),L.extra={...L.extra,arguments:u},L)),(0,i.Cp)(S)}),S}};try{for(const u in h)Object.prototype.hasOwnProperty.call(h,u)&&(b[u]=h[u])}catch{}(0,l.pO)(b,h),(0,l.my)(h,"__sentry_wrapped__",b);try{Object.getOwnPropertyDescriptor(b,"name").configurable&&Object.defineProperty(b,"name",{get(){return h.name}})}catch{}return b}},6063:F=>{"use strict";F.exports=function(P){return P[1]}},6064:(F,P,t)=>{F=t.nmd(F);var i=t(7183),d=P&&!P.nodeType&&P,r=d&&!0&&F&&!F.nodeType&&F,x=r&&r.exports===d,l=x?i.Buffer:void 0,p=l?l.allocUnsafe:void 0;function s(f,z){if(z)return f.slice();var N=f.length,h=p?p(N):new f.constructor(N);return f.copy(h),h}F.exports=s},6143:F=>{function P(t){return function(i){return t(i)}}F.exports=P},6184:F=>{function P(t){return t!=null&&typeof t=="object"}F.exports=P},6218:(F,P,t)=>{var i=t(9830),d=t(9592),r=t(4683),x=t(6015);function l(p,s,f){if(!x(f))return!1;var z=typeof s;return(z=="number"?d(f)&&r(s,f.length):z=="string"&&s in f)?i(f[s],p):!1}F.exports=l},6223:(F,P,t)=>{"use strict";t.d(P,{l:()=>d});var i=t(2776);function d(r){return(0,i.useEffect)(function(){return function(){return r()}},[])}},6252:(F,P,t)=>{var i=t(6990),d=t(6184),r="[object Arguments]";function x(l){return d(l)&&i(l)==r}F.exports=x},6375:(F,P,t)=>{"use strict";t.d(P,{Y:()=>p});var i=t(6978),d=t(2776),r=t.n(d),x=Object.defineProperty,l=(s,f)=>x(s,"name",{value:f,configurable:!0});const p=l(s=>(0,d.forwardRef)(({className:f,...z},N)=>{const h=(0,i.U)("mds-icon-phosphor",f),A=(0,d.useMemo)(()=>Object.fromEntries(Object.entries(z).filter(([,I])=>typeof I<"u")),[z]);return r().createElement(s,{...A,className:h,ref:N})}),"withMagneticIcon")},6514:(F,P,t)=>{"use strict";t.d(P,{B:()=>x});var i=t(7157),d=0,r=function(){return d++},x=function(){return(0,i.M)(r)}},6554:(F,P,t)=>{var i=t(6663),d=t(6064),r=t(1671),x=t(8601),l=t(235),p=t(3581),s=t(4383),f=t(5919),z=t(8098),N=t(4360),h=t(6015),A=t(5229),I=t(3905),b=t(4892),u=t(7774);function S(E,L,T,Q,G,se,U){var y=b(E,T),B=b(L,T),ne=U.get(B);if(ne){i(E,T,ne);return}var M=se?se(y,B,T+"",E,L,U):void 0,$=M===void 0;if($){var ae=s(B),J=!ae&&z(B),xe=!ae&&!J&&I(B);M=B,ae||J||xe?s(y)?M=y:f(y)?M=x(y):J?($=!1,M=d(B,!0)):xe?($=!1,M=r(B,!0)):M=[]:A(B)||p(B)?(M=y,p(y)?M=u(y):(!h(y)||N(y))&&(M=l(B))):$=!1}$&&(U.set(B,M),G(M,B,Q,se,U),U.delete(B)),i(E,T,M)}F.exports=S},6663:(F,P,t)=>{var i=t(9142),d=t(9830);function r(x,l,p){(p!==void 0&&!d(x[l],p)||p===void 0&&!(l in x))&&i(x,l,p)}F.exports=r},6682:(F,P,t)=>{var i=1/0,d="[object Symbol]",r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,x=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l="\\ud800-\\udfff",p="\\u0300-\\u036f\\ufe20-\\ufe23",s="\\u20d0-\\u20f0",f="\\u2700-\\u27bf",z="a-z\\xdf-\\xf6\\xf8-\\xff",N="\\xac\\xb1\\xd7\\xf7",h="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",A="\\u2000-\\u206f",I=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",b="A-Z\\xc0-\\xd6\\xd8-\\xde",u="\\ufe0e\\ufe0f",S=N+h+A+I,E="['\u2019]",L="["+l+"]",T="["+S+"]",Q="["+p+s+"]",G="\\d+",se="["+f+"]",U="["+z+"]",y="[^"+l+S+G+f+z+b+"]",B="\\ud83c[\\udffb-\\udfff]",ne="(?:"+Q+"|"+B+")",M="[^"+l+"]",$="(?:\\ud83c[\\udde6-\\uddff]){2}",ae="[\\ud800-\\udbff][\\udc00-\\udfff]",J="["+b+"]",xe="\\u200d",q="(?:"+U+"|"+y+")",le="(?:"+J+"|"+y+")",te="(?:"+E+"(?:d|ll|m|re|s|t|ve))?",Z="(?:"+E+"(?:D|LL|M|RE|S|T|VE))?",ce=ne+"?",O="["+u+"]?",ue="(?:"+xe+"(?:"+[M,$,ae].join("|")+")"+O+ce+")*",D=O+ce+ue,ee="(?:"+[se,$,ae].join("|")+")"+D,ie="(?:"+[M+Q+"?",Q,$,ae,L].join("|")+")",ye=RegExp(E,"g"),be=RegExp(Q,"g"),j=RegExp(B+"(?="+B+")|"+ie+D,"g"),w=RegExp([J+"?"+U+"+"+te+"(?="+[T,J,"$"].join("|")+")",le+"+"+Z+"(?="+[T,J+q,"$"].join("|")+")",J+"?"+q+"+"+te,J+"+"+Z,G,ee].join("|"),"g"),W=RegExp("["+xe+l+p+s+u+"]"),oe=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ve={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"ss"},Se=typeof t.g=="object"&&t.g&&t.g.Object===Object&&t.g,Ae=typeof self=="object"&&self&&self.Object===Object&&self,Ie=Se||Ae||Function("return this")();function We(Ve,gn,Pn,wt){var ft=-1,Kt=Ve?Ve.length:0;for(wt&&Kt&&(Pn=Ve[++ft]);++ft<Kt;)Pn=gn(Pn,Ve[ft],ft,Ve);return Pn}function Le(Ve){return Ve.split("")}function Ke(Ve){return Ve.match(r)||[]}function Ze(Ve){return function(gn){return Ve?.[gn]}}var ln=Ze(ve);function Rn(Ve){return W.test(Ve)}function un(Ve){return oe.test(Ve)}function dt(Ve){return Rn(Ve)?In(Ve):Le(Ve)}function In(Ve){return Ve.match(j)||[]}function Dn(Ve){return Ve.match(w)||[]}var yn=Object.prototype,Cn=yn.toString,Ct=Ie.Symbol,mt=Ct?Ct.prototype:void 0,ht=mt?mt.toString:void 0;function st(Ve,gn,Pn){var wt=-1,ft=Ve.length;gn<0&&(gn=-gn>ft?0:ft+gn),Pn=Pn>ft?ft:Pn,Pn<0&&(Pn+=ft),ft=gn>Pn?0:Pn-gn>>>0,gn>>>=0;for(var Kt=Array(ft);++wt<ft;)Kt[wt]=Ve[wt+gn];return Kt}function At(Ve){if(typeof Ve=="string")return Ve;if(Ht(Ve))return ht?ht.call(Ve):"";var gn=Ve+"";return gn=="0"&&1/Ve==-i?"-0":gn}function St(Ve,gn,Pn){var wt=Ve.length;return Pn=Pn===void 0?wt:Pn,!gn&&Pn>=wt?Ve:st(Ve,gn,Pn)}function Pt(Ve){return function(gn){gn=$t(gn);var Pn=Rn(gn)?dt(gn):void 0,wt=Pn?Pn[0]:gn.charAt(0),ft=Pn?St(Pn,1).join(""):gn.slice(1);return wt[Ve]()+ft}}function kt(Ve){return function(gn){return We(Un(Ce(gn).replace(ye,"")),Ve,"")}}function Mt(Ve){return!!Ve&&typeof Ve=="object"}function Ht(Ve){return typeof Ve=="symbol"||Mt(Ve)&&Cn.call(Ve)==d}function $t(Ve){return Ve==null?"":At(Ve)}var Bt=kt(function(Ve,gn,Pn){return gn=gn.toLowerCase(),Ve+(Pn?dn(gn):gn)});function dn(Ve){return en($t(Ve).toLowerCase())}function Ce(Ve){return Ve=$t(Ve),Ve&&Ve.replace(x,ln).replace(be,"")}var en=Pt("toUpperCase");function Un(Ve,gn,Pn){return Ve=$t(Ve),gn=Pn?void 0:gn,gn===void 0?un(Ve)?Dn(Ve):Ke(Ve):Ve.match(gn)||[]}F.exports=Bt},6837:(F,P,t)=>{var i=t(2177),d=t(9142);function r(x,l,p,s){var f=!p;p||(p={});for(var z=-1,N=l.length;++z<N;){var h=l[z],A=s?s(p[h],x[h],h,p,x):void 0;A===void 0&&(A=x[h]),f?d(p,h,A):i(p,h,A)}return p}F.exports=r},6843:(F,P,t)=>{"use strict";t.d(P,{E:()=>h});var i=t(5622),d=t(6978),r=t(7570),x=t(2776),l=t.n(x),p=[],s=[];function f(A,I){if(A&&typeof document<"u"){var b,u=I.prepend===!0?"prepend":"append",S=I.singleTag===!0,E=typeof I.container=="string"?document.querySelector(I.container):document.getElementsByTagName("head")[0];if(S){var L=p.indexOf(E);L===-1&&(L=p.push(E)-1,s[L]={}),b=s[L]&&s[L][u]?s[L][u]:s[L][u]=T()}else b=T();A.charCodeAt(0)===65279&&(A=A.substring(1)),b.styleSheet?b.styleSheet.cssText+=A:b.appendChild(document.createTextNode(A))}function T(){var Q=document.createElement("style");if(Q.setAttribute("type","text/css"),I.attributes)for(var G=Object.keys(I.attributes),se=0;se<G.length;se++)Q.setAttribute(G[se],I.attributes[G[se]]);var U=u==="prepend"?"afterbegin":"beforeend";return E.insertAdjacentElement(U,Q),Q}}var z=`.mds-text {
  margin: 0;
  padding: 0;

  /* TODO: Consider replacing this once we have all the font variables defined. */
  font-family: var(--typography-font-body);
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}

code.mds-text {
  display: inline-block;
  font-family: "Roboto Mono", SFMono-Regular, Consolas, "Liberation Mono", Menlo,
    Courier, monospace;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  background-color: var(--base-text-medium-default);
}

.mds-text.mds-text-monospace,
.mds-text.mds-text-monospace * {
  font-family: "Roboto Mono", SFMono-Regular, Consolas, "Liberation Mono", Menlo,
    Courier, monospace;
}

.mds-text-p1 {
  font-size: 18px;
  line-height: 24px;
}

.mds-text-p2 {
  font-size: 16px;
  line-height: 22px;
}

.mds-text-p3 {
  font-size: 14px;
  line-height: 20px;
}

.mds-text-p4 {
  font-size: 12px;
  line-height: 18px;
}

.mds-text-weight-regular {
  font-weight: 400;
}

.mds-text-weight-semi-bold {
  font-weight: 600;
}

.mds-text-weight-bold {
  font-weight: 700;
}

.mds-text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mds-text-compact {
  margin-bottom: 0;
  padding-bottom: 0;
}

.mds-text-color-regular {
  color: var(--base-text-default);
}

.mds-text-color-light {
  color: var(--base-text-medium-default);
}
`;f(z,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/text"}});const N={xxxs:"p4",xxs:"p3",xs:"p2",sm:"p1",p1:"p1",p2:"p2",p3:"p3",p4:"p4"},h=(0,x.forwardRef)(({align:A,as:I,className:b,color:u="regular",compact:S,ellipsis:E=!1,margin:L,monospace:T,size:Q="p3",style:G,weight:se="regular",width:U,...y},B)=>{const ne=I||"p",M=["light","regular"].includes(u),$=(0,i.K)(L),ae=(0,d.U)("mds-text",`mds-text-${N[Q]}`,`mds-text-weight-${se}`,{"mds-text-monospace":T,"mds-text-compact":S,"mds-text-ellipsis":E,[`mds-text-color-${u}`]:M},$,b);(0,r.O)({prop:Q,propValues:["xxxs","xxs","xs","sm"],message:"The use of t-shirt sizes in the `Text` component is deprecated and will be removed in a future major release of Magnetic in order to align terminology between design and engineering. Please use p1 through p4 as they appear in your Figma designs in the inpector tab under the Typography section."});const J={...A&&{textAlign:A},...G,...u&&!M&&{color:u},...U&&{width:U}};return l().createElement(ne,{className:ae,ref:B,style:J,...y})})},6932:(F,P,t)=>{"use strict";t.d(P,{$X:()=>l,GR:()=>A,M6:()=>s,eJ:()=>r,gO:()=>p,k9:()=>I});var i=t(535),d=t(9513);function r(){const b=d.O,u=b.crypto||b.msCrypto;let S=()=>Math.random()*16;try{if(u&&u.randomUUID)return u.randomUUID().replace(/-/g,"");u&&u.getRandomValues&&(S=()=>{const E=new Uint8Array(1);return u.getRandomValues(E),E[0]})}catch{}return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,E=>(E^(S()&15)>>E/4).toString(16))}function x(b){return b.exception&&b.exception.values?b.exception.values[0]:void 0}function l(b){const{message:u,event_id:S}=b;if(u)return u;const E=x(b);return E?E.type&&E.value?`${E.type}: ${E.value}`:E.type||E.value||S||"<unknown>":S||"<unknown>"}function p(b,u,S){const E=b.exception=b.exception||{},L=E.values=E.values||[],T=L[0]=L[0]||{};T.value||(T.value=u||""),T.type||(T.type=S||"Error")}function s(b,u){const S=x(b);if(!S)return;const E={type:"generic",handled:!0},L=S.mechanism;if(S.mechanism={...E,...L,...u},u&&"data"in u){const T={...L&&L.data,...u.data};S.mechanism.data=T}}const f=/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;function z(b){return parseInt(b||"",10)}function N(b){const u=b.match(f)||[],S=z(u[1]),E=z(u[2]),L=z(u[3]);return{buildmetadata:u[5],major:isNaN(S)?void 0:S,minor:isNaN(E)?void 0:E,patch:isNaN(L)?void 0:L,prerelease:u[4]}}function h(b,u,S=5){if(u.lineno===void 0)return;const E=b.length,L=Math.max(Math.min(E-1,u.lineno-1),0);u.pre_context=b.slice(Math.max(0,L-S),L).map(Q=>snipLine(Q,0));const T=Math.min(E-1,L);u.context_line=snipLine(b[T],u.colno||0),u.post_context=b.slice(Math.min(L+1,E),L+1+S).map(Q=>snipLine(Q,0))}function A(b){if(b&&b.__sentry_captured__)return!0;try{(0,i.my)(b,"__sentry_captured__",!0)}catch{}return!1}function I(b){return Array.isArray(b)?b:[b]}},6978:(F,P,t)=>{"use strict";t.d(P,{U:()=>s});var i=t(5530),d=t.n(i),r=t(2776),x=t.n(r),l=Object.defineProperty,p=(f,z)=>l(f,"name",{value:z,configurable:!0});const s=p((...f)=>(0,r.useMemo)(()=>d()(...f),[f]),"useClassNames")},6990:(F,P,t)=>{var i=t(7187),d=t(1029),r=t(8704),x="[object Null]",l="[object Undefined]",p=i?i.toStringTag:void 0;function s(f){return f==null?f===void 0?l:x:p&&p in Object(f)?d(f):r(f)}F.exports=s},7004:(F,P,t)=>{"use strict";t.d(P,{E:()=>r});var i=t(2776),d=t(9772),r=d.B?i.useLayoutEffect:i.useEffect},7094:(F,P,t)=>{"use strict";t.d(P,{pd:()=>er});var i=[],d=[];function r(Ee,Re){if(Ee&&typeof document<"u"){var Xe,xn=Re.prepend===!0?"prepend":"append",Tn=Re.singleTag===!0,wn=typeof Re.container=="string"?document.querySelector(Re.container):document.getElementsByTagName("head")[0];if(Tn){var Sn=i.indexOf(wn);Sn===-1&&(Sn=i.push(wn)-1,d[Sn]={}),Xe=d[Sn]&&d[Sn][xn]?d[Sn][xn]:d[Sn][xn]=et()}else Xe=et();Ee.charCodeAt(0)===65279&&(Ee=Ee.substring(1)),Xe.styleSheet?Xe.styleSheet.cssText+=Ee:Xe.appendChild(document.createTextNode(Ee))}function et(){var Jn=document.createElement("style");if(Jn.setAttribute("type","text/css"),Re.attributes)for(var k=Object.keys(Re.attributes),K=0;K<k.length;K++)Jn.setAttribute(k[K],Re.attributes[k[K]]);var re=xn==="prepend"?"afterbegin":"beforeend";return wn.insertAdjacentElement(re,Jn),Jn}}var x=`.mds-rebuild-input-frame {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font: var(--mds-input-label-font)
}

.mds-rebuild-input-frame > span {
    display: flex;
    gap: 4px;
    align-items: center;
    color: var(--base-text-default)
  }

.mds-rebuild-input-frame > span .mds-rebuild-input-label-required {
      margin-left: -2px;
      color: var(--negative-text-default);
    }

.mds-rebuild-input-frame > span .mds-rebuild-input-label-optional {
      font-weight: var(--typography-weight-regular);
      color: var(--base-text-medium-default);
    }

.mds-rebuild-input-frame.mds-rebuild-input-label-size-sm {
    --mds-input-label-font: var(--typography-p4-semibold);
  }

.mds-rebuild-input-frame.mds-rebuild-input-label-size-md {
    --mds-input-label-font: var(--typography-p3-semibold);
  }

.mds-rebuild-input-frame.mds-rebuild-input-label-size-lg {
    --mds-input-label-font: var(--typography-p2-semibold);
  }

.mds-rebuild-input-frame .mds-tooltip {
    align-self: center;
  }

.mds-rebuild-input-frame .mds-rebuild-input-wrapper {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
  }

.mds-rebuild-input-frame .mds-rebuild-input {
    --mds-input-background-color: var(--control-bg-weak-default);
    --mds-input-border-color: var(--control-border-default);
    --mds-input-border-color-hover: var(--control-border-hover);
    --mds-input-border-color-focus: var(--control-border-focus);
    --mds-input-border-color-invalid: var(--negative-border-medium-active);
    --mds-input-font-color: var(--base-text-default);
    --mds-input-placeholder-font-color: var(--base-text-weak-default);
    --mds-input-svg-font-color: var(--control-icon-weak-default);
    --mds-input-height: 20px;

    cursor: pointer;

    display: flex;
    flex-direction: row;
    flex-grow: 1;
    gap: 6px;
    align-items: center;

    box-sizing: border-box;
    min-width: var(--mds-rebuild-input-frame-min-width);
    max-width: var(--mds-rebuild-input-frame-max-width);
    padding: var(--mds-input-padding-y) var(--mds-input-padding-x);

    color: var(--mds-input-font-color);

    background-color: var(--mds-input-background-color);
    border: 2px solid var(--mds-input-border-color);
    border-radius: 6px
  }

.mds-rebuild-input-frame .mds-rebuild-input.mds-rebuild-input-invalid {
      --mds-input-border-color: var(--mds-input-border-color-invalid);
      --mds-input-border-color-hover: var(--mds-input-border-color-invalid);
      --mds-input-border-color-focus: var(--mds-input-border-color-invalid);

      box-shadow: var(--effects-shadow-invalid)
    }

.mds-rebuild-input-frame .mds-rebuild-input.mds-rebuild-input-invalid[\\:has\\(input\\:focus-visible\\)] {
        box-shadow: var(--effects-shadow-invalid-focus);
      }

.mds-rebuild-input-frame .mds-rebuild-input.mds-rebuild-input-invalid:has(input:focus-visible) {
        box-shadow: var(--effects-shadow-invalid-focus);
      }

.mds-rebuild-input-frame .mds-rebuild-input.mds-rebuild-input-disabled {
      --mds-input-font-color: var(--base-text-disabled);
      --mds-input-background-color: var(--control-bg-weak-disabled);
      --mds-input-border-color: var(--control-border-disabled);
      --mds-input-svg-font-color: var(--control-icon-weak-disabled);
    }

.mds-rebuild-input-frame .mds-rebuild-input > svg {
      color: var(--mds-input-svg-font-color);
    }

.mds-rebuild-input-frame .mds-rebuild-input > input {
      flex-grow: 1;

      width: 100%;
      height: var(--mds-input-height);
      padding: 0;

      font-size: inherit;
      line-height: inherit;
      color: inherit;

      background-color: transparent;
      border: 0
    }

.mds-rebuild-input-frame .mds-rebuild-input > input[type="search"]::-webkit-search-cancel-button {
        display: none;
      }

.mds-rebuild-input-frame .mds-rebuild-input > input::-moz-placeholder {
        font-weight: var(--typography-weight-regular);
        color: var(--mds-input-placeholder-font-color);
      }

.mds-rebuild-input-frame .mds-rebuild-input > input::placeholder {
        font-weight: var(--typography-weight-regular);
        color: var(--mds-input-placeholder-font-color);
      }

.mds-rebuild-input-frame .mds-rebuild-input > input:focus {
        outline: none;
      }

.mds-rebuild-input-frame .mds-rebuild-input .mds-rebuild-input-functional-button {
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-items: center;

      padding: 0;

      color: var(--control-icon-weak-default);

      background-color: transparent;
      border: 0
    }

.mds-rebuild-input-frame .mds-rebuild-input .mds-rebuild-input-functional-button:hover {
        color: var(--control-icon-weak-hover);
      }

.mds-rebuild-input-frame .mds-rebuild-input .mds-rebuild-input-functional-button:focus-visible {
        border-radius: 16px;
        outline: none;
        box-shadow: var(--elevation-control-focus);
      }

.mds-rebuild-input-frame .mds-rebuild-input[\\:has\\(input\\:focus-visible\\)],
    .mds-rebuild-input-frame .mds-rebuild-input[\\:has\\(input\\:focus\\)] {
      border-color: var(--mds-input-border-color-focus);
      box-shadow: var(--elevation-control-focus);
    }

.mds-rebuild-input-frame .mds-rebuild-input:has(input:focus-visible),
    .mds-rebuild-input-frame .mds-rebuild-input:has(input:focus) {
      border-color: var(--mds-input-border-color-focus);
      box-shadow: var(--elevation-control-focus);
    }

.mds-rebuild-input-frame .mds-rebuild-input:hover:not(.mds-rebuild-input-disabled) {
      --mds-input-border-color: var(--mds-input-border-color-hover);
      --mds-input-placeholder-font-color: var(--base-text-weak-default);
    }

.mds-rebuild-input-frame .mds-rebuild-input.mds-rebuild-input-size-lg {
      --mds-input-padding-x: 14px;
      --mds-input-padding-y: 7px;
      --mds-input-fixed-width: 280px;
      --mds-rebuild-input-frame-min-width: 60px;
      --mds-rebuild-input-frame-max-width: 600px;
      --mds-input-height: 22px;
    }

.mds-rebuild-input-frame .mds-rebuild-input.mds-rebuild-input-size-md {
      --mds-input-padding-x: 10px;
      --mds-input-padding-y: 5px;
      --mds-input-fixed-width: 280px;
      --mds-rebuild-input-frame-min-width: 60px;
      --mds-rebuild-input-frame-max-width: 600px;
      --mds-input-height: 20px;
    }

.mds-rebuild-input-frame .mds-rebuild-input.mds-rebuild-input-size-sm {
      --mds-input-padding-x: 6px;
      --mds-input-padding-y: 3px;
      --mds-input-fixed-width: 240px;
      --mds-rebuild-input-frame-min-width: 48px;
      --mds-rebuild-input-frame-max-width: 520px;
      --mds-input-height: 18px;
    }

.mds-rebuild-input-frame .mds-rebuild-input.mds-rebuild-input-fixed-width {
      flex-grow: 0;
      width: var(--mds-input-fixed-width);
    }

/* TODO add sizes for this */
.mds-rebuild-input-autocomplete-menu {
  --mds-input-autocomplete-menu-bg-color: var(--control-bg-weak-default);
  --mds-input-autocomplete-divider: 1px var(--base-border-default) solid;

  overflow: hidden;

  box-sizing: border-box;
  margin-top: 4px;

  font: var(--mds-input-autocomplete-font);
  color: var(--base-text-default);

  background-color: var(--mds-input-autocomplete-menu-bg-color);
  border: 2px var(--control-border-default) solid;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05098)
}
.mds-rebuild-input-autocomplete-menu .mds-rebuild-input-autocomplete-menu-item {
    --mds-input-autocomplete-font: var(--typography-p3-regular);

    padding: var(--mds-input-autocomplete-padding-y)
      var(--mds-input-autocomplete-padding-x)
  }
.mds-rebuild-input-autocomplete-menu .mds-rebuild-input-autocomplete-menu-item.mds-rebuild-input-autocomplete-menu-item-active {
      background-color: var(--control-bg-weak-hover);
    }
.mds-rebuild-input-autocomplete-menu.mds-rebuild-input-autocomplete-menu-size-lg,
  .mds-rebuild-input-autocomplete-menu.mds-rebuild-input-autocomplete-menu-size-md {
    --mds-input-autocomplete-font: var(--typography-p3-regular);
    --mds-input-autocomplete-category-title-font: var(--typography-p4-regular);
    --mds-input-autocomplete-padding-x: 10px;
    --mds-input-autocomplete-padding-y: 8px;
    --mds-input-autocomplete-category-title-padding-x: 10px;
    --mds-input-autocomplete-category-title-padding-y: 6px;
    --mds-input-autocomplete-category-padding-x: 16px;
    --mds-input-autocomplete-category-padding-y: 8px;
  }
.mds-rebuild-input-autocomplete-menu.mds-rebuild-input-autocomplete-menu-size-sm {
    --mds-input-autocomplete-font: var(--typography-p3-regular);
    --mds-input-autocomplete-category-title-font: var(--typography-p4-regular);
    --mds-input-autocomplete-padding-x: 6px;
    --mds-input-autocomplete-padding-y: 4px;
    --mds-input-autocomplete-category-title-padding-x: 6px;
    --mds-input-autocomplete-category-title-padding-y: 4px;
    --mds-input-autocomplete-category-padding-x: 12px;
    --mds-input-autocomplete-category-padding-y: 4px;
  }
.mds-rebuild-input-autocomplete-menu .mds-rebuild-input-autocomplete-menu-category + .mds-rebuild-input-autocomplete-menu-category {
      border-top: var(--mds-input-autocomplete-divider);
    }
.mds-rebuild-input-autocomplete-menu .mds-rebuild-input-autocomplete-menu-category > .mds-rebuild-input-autocomplete-menu-category-title {
      --mds-input-autocomplete-font: var(
        --mds-input-autocomplete-category-title-font
      );

      padding: var(--mds-input-autocomplete-category-title-padding-y)
        var(--mds-input-autocomplete-category-title-padding-x);
      color: var(--base-text-medium-default);
    }
.mds-rebuild-input-autocomplete-menu .mds-rebuild-input-autocomplete-menu-category > .mds-rebuild-input-autocomplete-menu-item {
      --mds-input-autocomplete-padding-x: var(
        --mds-input-autocomplete-category-padding-x
      );
      --mds-input-autocomplete-padding-y: var(
        --mds-input-autocomplete-category-padding-y
      );
    }
`;r(x,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/input"}});var l=t(1308),p=t(5024),s=t(2776),f=t.n(s),z=t(6978),N=t(4077),h=t(8236);const A=new Map([["bold",s.createElement(s.Fragment,null,s.createElement("path",{d:"M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"}))],["duotone",s.createElement(s.Fragment,null,s.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),s.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["fill",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",s.createElement(s.Fragment,null,s.createElement("path",{d:"M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",s.createElement(s.Fragment,null,s.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["thin",s.createElement(s.Fragment,null,s.createElement("path",{d:"M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]);var I=Object.defineProperty,b=Object.defineProperties,u=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,T=(Ee,Re,Xe)=>Re in Ee?I(Ee,Re,{enumerable:!0,configurable:!0,writable:!0,value:Xe}):Ee[Re]=Xe,Q=(Ee,Re)=>{for(var Xe in Re||(Re={}))E.call(Re,Xe)&&T(Ee,Xe,Re[Xe]);if(S)for(var Xe of S(Re))L.call(Re,Xe)&&T(Ee,Xe,Re[Xe]);return Ee},G=(Ee,Re)=>b(Ee,u(Re));const se=(0,s.forwardRef)((Ee,Re)=>s.createElement(h.A,G(Q({ref:Re},Ee),{weights:A})));se.displayName="XCircle";var U=t(6375);const y=(0,U.Y)(se);y.displayName="XCircle";var B=Object.defineProperty,ne=(Ee,Re)=>B(Ee,"name",{value:Re,configurable:!0});const M=ne(({className:Ee,...Re})=>{const Xe=(0,z.U)("mds-rebuild-input-functional-button",Ee);return f().createElement("button",{className:Xe,...Re,type:"button"})},"InputFunctionalButton");M.displayName="Input.FunctionalButton";var $=Object.defineProperty,ae=(Ee,Re)=>$(Ee,"name",{value:Re,configurable:!0});const J=ae(({onClear:Ee})=>f().createElement(M,{"aria-label":"Clear Input",onClick:Ee},f().createElement(y,{"aria-hidden":!0,size:16})),"InputClearButton");J.displayName="Input.ClearButton";var xe=t(3249),q=t(1772),le=Object.defineProperty,te=(Ee,Re)=>le(Ee,"name",{value:Re,configurable:!0});const Z=te(({tooltip:Ee})=>{const Re=typeof Ee=="string";return f().createElement(q.m,{className:"mds-rebuild-input-tooltip",title:Re?Ee:Ee.content},Re?f().createElement(xe.R,{"aria-label":Ee,color:"var(--interact-icon-weak-default)",height:16,tabIndex:0,width:16}):(0,s.cloneElement)(Ee.icon,{"aria-label":Ee.content,color:"var(--interact-icon-weak-default)",height:16,tabIndex:0,width:16}))},"InputTooltip");Z.displayName="Input.Tooltip";const ce={lg:16,md:16,sm:14},O=(0,s.forwardRef)(({children:Ee,className:Re,disabled:Xe,fixedWidth:xn,hasValue:Tn,hiddenLabel:wn,invalid:Sn,label:et,onClear:Jn,optional:k,outsideSuffix:K,prefix:re,required:Pe,size:Be="md",suffix:Fe,tooltip:Je},rn)=>{const pn=(0,z.U)("mds-rebuild-input-frame",`mds-rebuild-input-label-size-${Be}`,Re),Qn=(0,z.U)("mds-rebuild-input",`mds-rebuild-input-size-${Be}`,{"mds-rebuild-input-disabled":Xe,"mds-rebuild-input-invalid":Sn,"mds-rebuild-input-fixed-width":xn});return f().createElement(N.V.Provider,{value:{size:ce[Be],weight:"bold"}},f().createElement("label",{className:pn},!wn&&f().createElement("span",null,et,Pe&&f().createElement("span",{className:"mds-rebuild-input-label-required"},"*"),k&&f().createElement("span",{className:"mds-rebuild-input-label-optional"},"(optional)"),Je&&f().createElement(Z,{tooltip:Je})),f().createElement("div",{className:"mds-rebuild-input-wrapper"},f().createElement("div",{className:Qn,ref:rn},re,Ee,Fe,Jn&&Tn&&!Xe&&f().createElement(J,{onClear:Jn})),K)))});O.displayName="Input.Frame";var ue=t(4445);const D=(0,s.forwardRef)(({analytics:Ee,label:Re,onBlur:Xe,...xn},Tn)=>{const{sendAnalytics:wn}=(0,ue.st)(),Sn=(0,s.useCallback)(et=>{Ee?.events.includes("blur")&&wn({...Ee,component:"input",event:"blur"}),Xe?.(et)},[Ee,Xe,wn]);return f().createElement("input",{"aria-label":Re,ref:Tn,...xn,onBlur:Sn})});D.displayName="Input.WithAnalytics";const ee=(0,s.forwardRef)(({className:Ee,disabled:Re,fixedWidth:Xe,hiddenLabel:xn=!1,invalid:Tn=!1,label:wn,onClear:Sn,optional:et,outsideSuffix:Jn,prefix:k,required:K=!1,size:re="md",suffix:Pe,tooltip:Be,value:Fe,...Je},rn)=>f().createElement(O,{className:Ee,disabled:Re,fixedWidth:Xe,hasValue:!!Fe,hiddenLabel:xn,invalid:Tn,label:wn,onClear:Sn,optional:et,outsideSuffix:Jn,prefix:k,required:K,size:re,suffix:Pe,tooltip:Be},f().createElement(D,{type:"text",...Je,"aria-invalid":Tn,disabled:Re,label:wn,ref:rn,required:K,value:Fe})));var ie=t(536),ye=t(1735),be=t(5361),j=t(9279),w=Object.defineProperty,W=(Ee,Re)=>w(Ee,"name",{value:Re,configurable:!0});const oe=W(Ee=>{const[Re,Xe]=(0,s.useState)(Ee),xn=(0,s.useCallback)(()=>Xe(!1),[Xe]),Tn=(0,s.useCallback)(()=>Xe(!0),[Xe]),wn=(0,s.useCallback)(()=>Xe(Sn=>!Sn),[Xe]);return{setFalse:xn,setTrue:Tn,setValue:Xe,toggle:wn,value:Re}},"useBoolean");var ve=t(5034),Se=Object.defineProperty,Ae=(Ee,Re)=>Se(Ee,"name",{value:Re,configurable:!0});const Ie=Ae(Ee=>Ee.querySelector("input"),"getInput");var We=Object.defineProperty,Le=(Ee,Re)=>We(Ee,"name",{value:Re,configurable:!0});const Ke=Le(Ee=>{Ie(Ee)?.focus()},"focusInput");var Ze=[],ln=[];function Rn(Ee,Re){if(Ee&&typeof document<"u"){var Xe,xn=Re.prepend===!0?"prepend":"append",Tn=Re.singleTag===!0,wn=typeof Re.container=="string"?document.querySelector(Re.container):document.getElementsByTagName("head")[0];if(Tn){var Sn=Ze.indexOf(wn);Sn===-1&&(Sn=Ze.push(wn)-1,ln[Sn]={}),Xe=ln[Sn]&&ln[Sn][xn]?ln[Sn][xn]:ln[Sn][xn]=et()}else Xe=et();Ee.charCodeAt(0)===65279&&(Ee=Ee.substring(1)),Xe.styleSheet?Xe.styleSheet.cssText+=Ee:Xe.appendChild(document.createTextNode(Ee))}function et(){var Jn=document.createElement("style");if(Jn.setAttribute("type","text/css"),Re.attributes)for(var k=Object.keys(Re.attributes),K=0;K<k.length;K++)Jn.setAttribute(k[K],Re.attributes[k[K]]);var re=xn==="prepend"?"afterbegin":"beforeend";return wn.insertAdjacentElement(re,Jn),Jn}}var un=`.mds-highlighted-match {
  font-weight: 700;
  color: unset;
  white-space: pre-wrap;
  background: unset;
}

.mds-highlighted-match-item {
  white-space: pre-wrap;
}
`;Rn(un,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/highlighted-match"}});var dt=Object.defineProperty,In=(Ee,Re)=>dt(Ee,"name",{value:Re,configurable:!0});const Dn=In(Ee=>Ee.replace(/[\s#$()*+,.?[\\\]^{|}-]/g,"\\$&"),"regexEscape"),yn=(0,s.memo)(({wrap:Ee=s.Fragment,children:Re,searchTerm:Xe,renderHighlight:xn=In((Tn,wn)=>f().createElement("mark",{className:"mds-highlighted-match",key:`highlighted-match-item-${Tn}-${wn}`},Tn),"renderHighlight")})=>{if(!Xe)return f().createElement(Ee,null,Re);const Tn=new RegExp(`(${Dn(Xe)})`,"i");return f().createElement(Ee,null,Re.split(Tn).map((wn,Sn)=>Sn%2?xn(wn,Sn):f().createElement("span",{className:"mds-highlighted-match-item",key:`highlighted-match-item-${wn}-${Sn}`},wn)))});var Cn=t(2183),Ct=Object.defineProperty,mt=(Ee,Re)=>Ct(Ee,"name",{value:Re,configurable:!0});const ht=mt((Ee={})=>{const{id:Re}=Ee;return{id:(0,s.useRef)(Re??(0,Cn.$)()).current}},"useId"),st=(0,s.forwardRef)(({active:Ee,children:Re,value:Xe="",...xn},Tn)=>{const{id:wn}=ht(),Sn=(0,z.U)("mds-rebuild-input-autocomplete-menu-item",Ee&&"mds-rebuild-input-autocomplete-menu-item-active");return f().createElement("div",{"aria-selected":Ee,className:Sn,id:wn,ref:Tn,role:"option",...xn},f().createElement(yn,{searchTerm:Xe},Re))});var At=Object.defineProperty,St=(Ee,Re)=>At(Ee,"name",{value:Re,configurable:!0});const Pt=St((Ee,Re)=>{const Xe=Ie(Ee);Xe&&(Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set?.call(Ee.querySelector("input"),Re),Xe.dispatchEvent(new Event("input",{bubbles:!0})))},"setValue");var kt=Object.defineProperty,Mt=(Ee,Re)=>kt(Ee,"name",{value:Re,configurable:!0});const Ht=Mt(({activeIndex:Ee,getItemProps:Re,indexOffset:Xe=0,listRef:xn,onSelect:Tn,options:wn,refs:Sn,setOpen:et,value:Jn})=>wn.length===0?null:f().createElement(f().Fragment,null,wn.map((k,K)=>f().createElement(st,{...Re({key:k,ref(re){xn.current[K+Xe]=re},onClick:()=>{Sn.reference.current&&(Pt(Sn.reference.current,k),et(!1),Ke(Sn.reference.current),Tn?.(k))}}),active:Ee===K+Xe,value:Jn},k))),"Options");var $t=Object.defineProperty,Bt=(Ee,Re)=>$t(Ee,"name",{value:Re,configurable:!0});const dn=Bt(({activeIndex:Ee,getItemProps:Re,listRef:Xe,onSelect:xn,options:Tn,refs:wn,setOpen:Sn,value:et})=>{if(Tn.length===0)return null;let Jn=0;const k=[];for(const{label:K,options:re}of Tn)k.push(f().createElement("div",{className:"mds-rebuild-input-autocomplete-menu-category",key:K},f().createElement("div",{className:"mds-rebuild-input-autocomplete-menu-category-title"},K),f().createElement(Ht,{activeIndex:Ee,getItemProps:Re,indexOffset:Jn,key:K,listRef:Xe,onSelect:xn,options:re,refs:wn,setOpen:Sn,value:et}))),Jn+=re.length;return f().createElement(f().Fragment,null,k)},"Categories");var Ce=Object.defineProperty,en=(Ee,Re)=>Ce(Ee,"name",{value:Re,configurable:!0});const Un=en(Ee=>Ee.replace(/[\s#$()*+,.?[\\\]^{|}-]/g,"\\$&"),"regexEscape");var Ve=Object.defineProperty,gn=(Ee,Re)=>Ve(Ee,"name",{value:Re,configurable:!0});const Pn=gn((Ee,Re,Xe,xn)=>{const Tn=Math.ceil(Xe/xn),wn=[],Sn=new RegExp(`(${Un(Re)})`,"i");for(const et of Ee){const Jn=[];for(const k of et.options)Sn.test(k)&&Jn.push(k);if(Jn.length>0&&wn.push({...et,options:Jn.slice(0,Tn)}),wn.length>=xn)break}return wn},"filterCategories");var wt=Object.defineProperty,ft=(Ee,Re)=>wt(Ee,"name",{value:Re,configurable:!0});const Kt=ft((Ee,Re,Xe)=>{const xn=[],Tn=new RegExp(`(${Un(Re)})`,"i");for(const wn of Ee)Tn.test(wn)&&xn.push(wn);return xn.slice(0,Xe)},"filterOptions");var ua=Object.defineProperty,Sa=(Ee,Re)=>ua(Ee,"name",{value:Re,configurable:!0});const Ya=Sa((Ee,Re)=>{let Xe=0;for(const{options:xn}of Ee){if(Re-Xe<xn.length)return xn[Re-Xe];Xe+=xn.length}},"findCategoryIndex");var Na=Object.defineProperty,gt=(Ee,Re)=>Na(Ee,"name",{value:Re,configurable:!0});const Jt=gt(Ee=>!Ee.some(Re=>typeof Re=="string"),"isAutocompleteCategories");var Zt=Object.defineProperty,ra=(Ee,Re)=>Zt(Ee,"name",{value:Re,configurable:!0});const Xt=ra(({className:Ee,disabled:Re,fixedWidth:Xe,hiddenLabel:xn,invalid:Tn=!1,label:wn,maxShownCategories:Sn=2,maxShownOptions:et=6,onChange:Jn,onClear:k,onSelect:K,optional:re,options:Pe=[],outsideSuffix:Be,prefix:Fe,required:Je=!1,root:rn,size:pn="md",suffix:Qn,tooltip:lt,value:me,...ge})=>{const hn=(0,z.U)("mds-rebuild-input-autocomplete-menu",`mds-rebuild-input-autocomplete-menu-size-${pn}`),{setValue:vn,value:Wn}=oe(!1),[Hn,Mn]=(0,s.useState)(null),Yn=(0,s.useRef)([]),{context:Zn,refs:Fn,strategy:xt,x:Vt,y:_}=(0,ie.we)({whileElementsMounted:ye.ll,open:Wn,onOpenChange:vn,middleware:[(0,be.Ej)({apply:({availableHeight:Oe,elements:De,rects:Ge})=>{Object.assign(De.floating.style,{width:`${Ge.reference.width}px`,maxHeight:`${Oe}px`})}})]}),g=(0,ve.YK)("floating-dropdown"),{getFloatingProps:R,getItemProps:Y,getReferenceProps:fe}=(0,ie.bv)([(0,ie.It)(Zn,{role:"listbox"}),(0,ie.s9)(Zn),(0,ie.C1)(Zn,{listRef:Yn,activeIndex:Hn,onNavigate:Mn,virtual:!0,loop:!0})]),he=(0,s.useCallback)(Oe=>{const{value:De}=Oe.target;Jn?.(Oe),De?(vn(!0),Mn(0)):vn(!1)},[Jn,vn]),we=(0,s.useMemo)(()=>me?Jt(Pe)?Pn(Pe,me,et,Sn):Kt(Pe,me,et):Pe,[me,Pe,et,Sn]),ze=(0,s.useCallback)(Oe=>{const De=Jt(we)?Ya(we,Hn??0):we[Hn??0];Oe.key==="Enter"&&Hn!==null&&De&&Fn.reference.current&&(Pt(Fn.reference.current,De),Mn(null),vn(!1))},[Fn.reference,vn,Hn,we]);return f().createElement(j.v,{condition:!!rn,wrap:Oe=>f().createElement(ie.XF,{...rn?{root:rn}:{}},Oe)},f().createElement(O,{className:Ee,disabled:Re,fixedWidth:Xe,hasValue:!!me,hiddenLabel:xn,invalid:Tn,label:wn,onClear:k,optional:re,outsideSuffix:Be,prefix:Fe,ref:Fn.setReference,required:Je,size:pn,suffix:Qn,tooltip:lt},f().createElement(D,{"aria-invalid":Tn,label:wn,...fe({...ge,disabled:Re,required:Je,type:"search",ref:Fn.setReference,onChange:he,value:me,"aria-autocomplete":"list",onKeyDown:ze})})),f().createElement(ie.XF,null,Wn&&we.length>0&&f().createElement(ie.s3,{context:Zn,initialFocus:-1,visuallyHiddenDismiss:!0},f().createElement("div",{...R({ref:Fn.setFloating,className:hn,style:{position:xt,left:Vt??0,top:_??0,zIndex:g}})},Jt(we)?f().createElement(dn,{activeIndex:Hn,getItemProps:Y,listRef:Yn,onSelect:K,options:we,refs:Fn,setOpen:vn,value:me}):f().createElement(Ht,{activeIndex:Hn,getItemProps:Y,listRef:Yn,onSelect:K,options:we,refs:Fn,setOpen:vn,value:me})))))},"InputAutocomplete");Xt.displayName="Input.Autocomplete";const ia=(0,s.forwardRef)((Ee,Re)=>f().createElement(ee,{...Ee,ref:Re,type:"date"})),ja=(0,s.forwardRef)((Ee,Re)=>f().createElement(ee,{...Ee,ref:Re,type:"datetime-local"})),oa=(0,s.forwardRef)(({className:Ee,disabled:Re,hiddenLabel:Xe=!1,invalid:xn,label:Tn,onChange:wn,onClear:Sn,optional:et,outsideSuffix:Jn,prefix:k,required:K,size:re="md",suffix:Pe,tooltip:Be,value:Fe,...Je},rn)=>f().createElement(O,{className:Ee,disabled:Re,hasValue:!!Fe,hiddenLabel:Xe,invalid:xn,label:Tn,onClear:Sn,optional:et,outsideSuffix:Jn,prefix:k,required:K,size:re,suffix:Pe,tooltip:Be},f().createElement(D,{...Je,disabled:Re,label:Tn,onChange:wn,ref:rn,required:K,type:"number",value:Fe??""})));oa.displayName="Input.Number";var Dt=t(4209),da=Object.defineProperty,Ta=(Ee,Re)=>da(Ee,"name",{value:Re,configurable:!0});const Pa=Ta(({isPassword:Ee,size:Re,suffix:Xe,toggle:xn})=>f().createElement(f().Fragment,null,f().createElement(Dt.$,{kind:"tertiary",onClick:xn,size:Re},Ee?"Show":"Hide"),Xe),"PasswordSuffix"),qt=(0,s.forwardRef)(({className:Ee,disabled:Re,fixedWidth:Xe,hiddenLabel:xn=!1,invalid:Tn,label:wn,onChange:Sn,onClear:et,optional:Jn,outsideSuffix:k,prefix:K,required:re,size:Pe="md",suffix:Be,tooltip:Fe,value:Je,...rn},pn)=>{const{toggle:Qn,value:lt}=oe(!0);return f().createElement(O,{className:Ee,disabled:Re,fixedWidth:Xe,hasValue:!!Je,hiddenLabel:xn,invalid:Tn,label:wn,onClear:et,optional:Jn,outsideSuffix:k,prefix:K,required:re,size:Pe,suffix:f().createElement(Pa,{isPassword:lt,size:Pe==="sm"?"sm":"md",suffix:Be,toggle:Qn}),tooltip:Fe},f().createElement(D,{...rn,disabled:Re,label:wn,onChange:Sn,ref:pn,required:re,type:lt?"password":"text",value:Je}))});qt.displayName="Input.Password";const ea=(0,s.forwardRef)((Ee,Re)=>f().createElement(ee,{...Ee,ref:Re,type:"time"}));var Fa=Object.defineProperty,Ba=(Ee,Re)=>Fa(Ee,"name",{value:Re,configurable:!0});const ga=null;var Ra=Object.defineProperty,va=(Ee,Re)=>Ra(Ee,"name",{value:Re,configurable:!0});const ca=null,ba=null,sa=null,Oa=null;var fa=Object.defineProperty,na=(Ee,Re)=>fa(Ee,"name",{value:Re,configurable:!0});const ma=null,ir=null,pa=null,ha=null,or=null,Xa=null,vr=null,br=null,Va=null;var Ua=Object.defineProperty,yt=(Ee,Re)=>Ua(Ee,"name",{value:Re,configurable:!0});const Ia=null;var wa=Object.defineProperty,Gt=(Ee,Re)=>wa(Ee,"name",{value:Re,configurable:!0});const Ja=null,xa=null,Qa=null,ka=null;var qa=Object.defineProperty,dr=(Ee,Re)=>qa(Ee,"name",{value:Re,configurable:!0});const Ma=null,Ha=null,cr=null,er=(0,p.E)(ee,{FunctionalButton:M,Number:oa,Password:qt,Autocomplete:Xt,Date:ia,Time:ea,DateTime:ja})},7157:(F,P,t)=>{"use strict";t.d(P,{M:()=>d});var i=t(2776);function d(r){var x=(0,i.useRef)(null);return x.current===null&&(x.current=r()),x.current}},7183:(F,P,t)=>{var i=t(5194),d=typeof self=="object"&&self&&self.Object===Object&&self,r=i||d||Function("return this")();F.exports=r},7187:(F,P,t)=>{var i=t(7183),d=i.Symbol;F.exports=d},7234:(F,P,t)=>{var i=t(5171),d=function(){var x=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||"");return x?"Symbol(src)_1."+x:""}();function r(x){return!!d&&d in x}F.exports=r},7316:(F,P,t)=>{var i=t(3368),d=t(3733),r=t(9090),x=d?function(l,p){return d(l,"toString",{configurable:!0,enumerable:!1,value:i(p),writable:!0})}:r;F.exports=x},7326:(F,P,t)=>{"use strict";t.d(P,{T2:()=>l,XW:()=>r,xg:()=>x});var i=t(5868),d;(function(p){p[p.PENDING=0]="PENDING";const f=1;p[p.RESOLVED=f]="RESOLVED";const z=2;p[p.REJECTED=z]="REJECTED"})(d||(d={}));function r(p){return new l(s=>{s(p)})}function x(p){return new l((s,f)=>{f(p)})}class l{constructor(s){l.prototype.__init.call(this),l.prototype.__init2.call(this),l.prototype.__init3.call(this),l.prototype.__init4.call(this),this._state=d.PENDING,this._handlers=[];try{s(this._resolve,this._reject)}catch(f){this._reject(f)}}then(s,f){return new l((z,N)=>{this._handlers.push([!1,h=>{if(!s)z(h);else try{z(s(h))}catch(A){N(A)}},h=>{if(!f)N(h);else try{z(f(h))}catch(A){N(A)}}]),this._executeHandlers()})}catch(s){return this.then(f=>f,s)}finally(s){return new l((f,z)=>{let N,h;return this.then(A=>{h=!1,N=A,s&&s()},A=>{h=!0,N=A,s&&s()}).then(()=>{if(h){z(N);return}f(N)})})}__init(){this._resolve=s=>{this._setResult(d.RESOLVED,s)}}__init2(){this._reject=s=>{this._setResult(d.REJECTED,s)}}__init3(){this._setResult=(s,f)=>{if(this._state===d.PENDING){if((0,i.Qg)(f)){f.then(this._resolve,this._reject);return}this._state=s,this._value=f,this._executeHandlers()}}}__init4(){this._executeHandlers=()=>{if(this._state===d.PENDING)return;const s=this._handlers.slice();this._handlers=[],s.forEach(f=>{f[0]||(this._state===d.RESOLVED&&f[1](this._value),this._state===d.REJECTED&&f[2](this._value),f[0]=!0)})}}}},7449:(F,P,t)=>{"use strict";t.d(P,{KU:()=>se,o5:()=>E,m6:()=>T,rm:()=>L,v4:()=>Q});var i=t(9513),d=t(7710);function r(){return x(i.O),i.O}function x(U){const y=U.__SENTRY__=U.__SENTRY__||{};return y.version=y.version||d.M,y[d.M]=y[d.M]||{}}var l=t(5868),p=t(8553);function s(){return(0,i.B)("defaultCurrentScope",()=>new p.H)}function f(){return(0,i.B)("defaultIsolationScope",()=>new p.H)}class z{constructor(y,B){let ne;y?ne=y:ne=new p.H;let M;B?M=B:M=new p.H,this._stack=[{scope:ne}],this._isolationScope=M}withScope(y){const B=this._pushScope();let ne;try{ne=y(B)}catch(M){throw this._popScope(),M}return(0,l.Qg)(ne)?ne.then(M=>(this._popScope(),M),M=>{throw this._popScope(),M}):(this._popScope(),ne)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const y=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:y}),y}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function N(){const U=r(),y=x(U);return y.stack=y.stack||new z(s(),f())}function h(U){return N().withScope(U)}function A(U,y){const B=N();return B.withScope(()=>(B.getStackTop().scope=U,y(U)))}function I(U){return N().withScope(()=>U(N().getIsolationScope()))}function b(){return{withIsolationScope:I,withScope:h,withSetScope:A,withSetIsolationScope:(U,y)=>I(y),getCurrentScope:()=>N().getScope(),getIsolationScope:()=>N().getIsolationScope()}}function u(U){const y=getMainCarrier(),B=getSentryCarrier(y);B.acs=U}function S(U){const y=x(U);return y.acs?y.acs:b()}function E(){const U=r();return S(U).getCurrentScope()}function L(){const U=r();return S(U).getIsolationScope()}function T(){return(0,i.B)("globalScope",()=>new p.H)}function Q(...U){const y=r(),B=S(y);if(U.length===2){const[ne,M]=U;return ne?B.withSetScope(ne,M):B.withScope(M)}return B.withScope(U[0])}function G(...U){const y=getMainCarrier(),B=getAsyncContextStrategy(y);if(U.length===2){const[ne,M]=U;return ne?B.withSetIsolationScope(ne,M):B.withIsolationScope(M)}return B.withIsolationScope(U[0])}function se(){return E().getClient()}},7464:(F,P,t)=>{"use strict";t.d(P,{UE:()=>s,we:()=>I});var i=t(5361),d=t(1735),r=t(2776),x=t.n(r),l=t(4220),p=t.n(l);const s=b=>{function u(S){return{}.hasOwnProperty.call(S,"current")}return{name:"arrow",options:b,fn(S){const{element:E,padding:L}=typeof b=="function"?b(S):b;return E&&u(E)?E.current!=null?(0,i.UE)({element:E.current,padding:L}).fn(S):{}:E?(0,i.UE)({element:E,padding:L}).fn(S):{}}}};var f=typeof document<"u"?r.useLayoutEffect:r.useEffect;function z(b,u){if(b===u)return!0;if(typeof b!=typeof u)return!1;if(typeof b=="function"&&b.toString()===u.toString())return!0;let S,E,L;if(b&&u&&typeof b=="object"){if(Array.isArray(b)){if(S=b.length,S!=u.length)return!1;for(E=S;E--!==0;)if(!z(b[E],u[E]))return!1;return!0}if(L=Object.keys(b),S=L.length,S!==Object.keys(u).length)return!1;for(E=S;E--!==0;)if(!{}.hasOwnProperty.call(u,L[E]))return!1;for(E=S;E--!==0;){const T=L[E];if(!(T==="_owner"&&b.$$typeof)&&!z(b[T],u[T]))return!1}return!0}return b!==b&&u!==u}function N(b){return typeof window>"u"?1:(b.ownerDocument.defaultView||window).devicePixelRatio||1}function h(b,u){const S=N(b);return Math.round(u*S)/S}function A(b){const u=r.useRef(b);return f(()=>{u.current=b}),u}function I(b){b===void 0&&(b={});const{placement:u="bottom",strategy:S="absolute",middleware:E=[],platform:L,elements:{reference:T,floating:Q}={},transform:G=!0,whileElementsMounted:se,open:U}=b,[y,B]=r.useState({x:0,y:0,strategy:S,placement:u,middlewareData:{},isPositioned:!1}),[ne,M]=r.useState(E);z(ne,E)||M(E);const[$,ae]=r.useState(null),[J,xe]=r.useState(null),q=r.useCallback(W=>{W!=ce.current&&(ce.current=W,ae(W))},[ae]),le=r.useCallback(W=>{W!==O.current&&(O.current=W,xe(W))},[xe]),te=T||$,Z=Q||J,ce=r.useRef(null),O=r.useRef(null),ue=r.useRef(y),D=A(se),ee=A(L),ie=r.useCallback(()=>{if(!ce.current||!O.current)return;const W={placement:u,strategy:S,middleware:ne};ee.current&&(W.platform=ee.current),(0,d.rD)(ce.current,O.current,W).then(oe=>{const ve={...oe,isPositioned:!0};ye.current&&!z(ue.current,ve)&&(ue.current=ve,l.flushSync(()=>{B(ve)}))})},[ne,u,S,ee]);f(()=>{U===!1&&ue.current.isPositioned&&(ue.current.isPositioned=!1,B(W=>({...W,isPositioned:!1})))},[U]);const ye=r.useRef(!1);f(()=>(ye.current=!0,()=>{ye.current=!1}),[]),f(()=>{if(te&&(ce.current=te),Z&&(O.current=Z),te&&Z){if(D.current)return D.current(te,Z,ie);ie()}},[te,Z,ie,D]);const be=r.useMemo(()=>({reference:ce,floating:O,setReference:q,setFloating:le}),[q,le]),j=r.useMemo(()=>({reference:te,floating:Z}),[te,Z]),w=r.useMemo(()=>{const W={position:S,left:0,top:0};if(!j.floating)return W;const oe=h(j.floating,y.x),ve=h(j.floating,y.y);return G?{...W,transform:"translate("+oe+"px, "+ve+"px)",...N(j.floating)>=1.5&&{willChange:"transform"}}:{position:S,left:oe,top:ve}},[S,G,j.floating,y.x,y.y]);return r.useMemo(()=>({...y,update:ie,refs:be,elements:j,floatingStyles:w}),[y,ie,be,j,w])}},7478:(F,P,t)=>{"use strict";var i=function(){var u;return function(){return typeof u>"u"&&(u=!!(window&&document&&document.all&&!window.atob)),u}}(),d=function(){var u={};return function(E){if(typeof u[E]>"u"){var L=document.querySelector(E);if(window.HTMLIFrameElement&&L instanceof window.HTMLIFrameElement)try{L=L.contentDocument.head}catch{L=null}u[E]=L}return u[E]}}(),r=[];function x(b){for(var u=-1,S=0;S<r.length;S++)if(r[S].identifier===b){u=S;break}return u}function l(b,u){for(var S={},E=[],L=0;L<b.length;L++){var T=b[L],Q=u.base?T[0]+u.base:T[0],G=S[Q]||0,se="".concat(Q," ").concat(G);S[Q]=G+1;var U=x(se),y={css:T[1],media:T[2],sourceMap:T[3]};U!==-1?(r[U].references++,r[U].updater(y)):r.push({identifier:se,updater:I(y,u),references:1}),E.push(se)}return E}function p(b){var u=document.createElement("style"),S=b.attributes||{};if(typeof S.nonce>"u"){var E=t.nc;E&&(S.nonce=E)}if(Object.keys(S).forEach(function(T){u.setAttribute(T,S[T])}),typeof b.insert=="function")b.insert(u);else{var L=d(b.insert||"head");if(!L)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");L.appendChild(u)}return u}function s(b){if(b.parentNode===null)return!1;b.parentNode.removeChild(b)}var f=function(){var u=[];return function(E,L){return u[E]=L,u.filter(Boolean).join(`
`)}}();function z(b,u,S,E){var L=S?"":E.media?"@media ".concat(E.media," {").concat(E.css,"}"):E.css;if(b.styleSheet)b.styleSheet.cssText=f(u,L);else{var T=document.createTextNode(L),Q=b.childNodes;Q[u]&&b.removeChild(Q[u]),Q.length?b.insertBefore(T,Q[u]):b.appendChild(T)}}function N(b,u,S){var E=S.css,L=S.media,T=S.sourceMap;if(L?b.setAttribute("media",L):b.removeAttribute("media"),T&&typeof btoa<"u"&&(E+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(T))))," */")),b.styleSheet)b.styleSheet.cssText=E;else{for(;b.firstChild;)b.removeChild(b.firstChild);b.appendChild(document.createTextNode(E))}}var h=null,A=0;function I(b,u){var S,E,L;if(u.singleton){var T=A++;S=h||(h=p(u)),E=z.bind(null,S,T,!1),L=z.bind(null,S,T,!0)}else S=p(u),E=N.bind(null,S,u),L=function(){s(S)};return E(b),function(G){if(G){if(G.css===b.css&&G.media===b.media&&G.sourceMap===b.sourceMap)return;E(b=G)}else L()}}F.exports=function(b,u){u=u||{},!u.singleton&&typeof u.singleton!="boolean"&&(u.singleton=i()),b=b||[];var S=l(b,u);return function(L){if(L=L||[],Object.prototype.toString.call(L)==="[object Array]"){for(var T=0;T<S.length;T++){var Q=S[T],G=x(Q);r[G].references--}for(var se=l(L,u),U=0;U<S.length;U++){var y=S[U],B=x(y);r[B].references===0&&(r[B].updater(),r.splice(B,1))}S=se}}}},7504:(F,P,t)=>{"use strict";t.d(P,{Ow:()=>x,Z9:()=>l,pq:()=>p,vF:()=>f});var i=t(8616),d=t(9513);const r="Sentry Logger ",x=["debug","info","warn","error","log","assert","trace"],l={};function p(z){if(!("console"in d.O))return z();const N=d.O.console,h={},A=Object.keys(l);A.forEach(I=>{const b=l[I];h[I]=N[I],N[I]=b});try{return z()}finally{A.forEach(I=>{N[I]=h[I]})}}function s(){let z=!1;const N={enable:()=>{z=!0},disable:()=>{z=!1},isEnabled:()=>z};return i.T?x.forEach(h=>{N[h]=(...A)=>{z&&p(()=>{d.O.console[h](`${r}[${h}]:`,...A)})}}):x.forEach(h=>{N[h]=()=>{}}),N}const f=(0,d.B)("logger",s)},7545:(F,P,t)=>{"use strict";t.d(P,{C6:()=>d,Cl:()=>r,Ju:()=>A,Tt:()=>x,fX:()=>S,zs:()=>I});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var i=function(M,$){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(ae,J){ae.__proto__=J}||function(ae,J){for(var xe in J)Object.prototype.hasOwnProperty.call(J,xe)&&(ae[xe]=J[xe])},i(M,$)};function d(M,$){if(typeof $!="function"&&$!==null)throw new TypeError("Class extends value "+String($)+" is not a constructor or null");i(M,$);function ae(){this.constructor=M}M.prototype=$===null?Object.create($):(ae.prototype=$.prototype,new ae)}var r=function(){return r=Object.assign||function($){for(var ae,J=1,xe=arguments.length;J<xe;J++){ae=arguments[J];for(var q in ae)Object.prototype.hasOwnProperty.call(ae,q)&&($[q]=ae[q])}return $},r.apply(this,arguments)};function x(M,$){var ae={};for(var J in M)Object.prototype.hasOwnProperty.call(M,J)&&$.indexOf(J)<0&&(ae[J]=M[J]);if(M!=null&&typeof Object.getOwnPropertySymbols=="function")for(var xe=0,J=Object.getOwnPropertySymbols(M);xe<J.length;xe++)$.indexOf(J[xe])<0&&Object.prototype.propertyIsEnumerable.call(M,J[xe])&&(ae[J[xe]]=M[J[xe]]);return ae}function l(M,$,ae,J){var xe=arguments.length,q=xe<3?$:J===null?J=Object.getOwnPropertyDescriptor($,ae):J,le;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")q=Reflect.decorate(M,$,ae,J);else for(var te=M.length-1;te>=0;te--)(le=M[te])&&(q=(xe<3?le(q):xe>3?le($,ae,q):le($,ae))||q);return xe>3&&q&&Object.defineProperty($,ae,q),q}function p(M,$){return function(ae,J){$(ae,J,M)}}function s(M,$){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(M,$)}function f(M,$,ae,J){function xe(q){return q instanceof ae?q:new ae(function(le){le(q)})}return new(ae||(ae=Promise))(function(q,le){function te(O){try{ce(J.next(O))}catch(ue){le(ue)}}function Z(O){try{ce(J.throw(O))}catch(ue){le(ue)}}function ce(O){O.done?q(O.value):xe(O.value).then(te,Z)}ce((J=J.apply(M,$||[])).next())})}function z(M,$){var ae={label:0,sent:function(){if(q[0]&1)throw q[1];return q[1]},trys:[],ops:[]},J,xe,q,le;return le={next:te(0),throw:te(1),return:te(2)},typeof Symbol=="function"&&(le[Symbol.iterator]=function(){return this}),le;function te(ce){return function(O){return Z([ce,O])}}function Z(ce){if(J)throw new TypeError("Generator is already executing.");for(;ae;)try{if(J=1,xe&&(q=ce[0]&2?xe.return:ce[0]?xe.throw||((q=xe.return)&&q.call(xe),0):xe.next)&&!(q=q.call(xe,ce[1])).done)return q;switch(xe=0,q&&(ce=[ce[0]&2,q.value]),ce[0]){case 0:case 1:q=ce;break;case 4:return ae.label++,{value:ce[1],done:!1};case 5:ae.label++,xe=ce[1],ce=[0];continue;case 7:ce=ae.ops.pop(),ae.trys.pop();continue;default:if(q=ae.trys,!(q=q.length>0&&q[q.length-1])&&(ce[0]===6||ce[0]===2)){ae=0;continue}if(ce[0]===3&&(!q||ce[1]>q[0]&&ce[1]<q[3])){ae.label=ce[1];break}if(ce[0]===6&&ae.label<q[1]){ae.label=q[1],q=ce;break}if(q&&ae.label<q[2]){ae.label=q[2],ae.ops.push(ce);break}q[2]&&ae.ops.pop(),ae.trys.pop();continue}ce=$.call(M,ae)}catch(O){ce=[6,O],xe=0}finally{J=q=0}if(ce[0]&5)throw ce[1];return{value:ce[0]?ce[1]:void 0,done:!0}}}var N=Object.create?function(M,$,ae,J){J===void 0&&(J=ae),Object.defineProperty(M,J,{enumerable:!0,get:function(){return $[ae]}})}:function(M,$,ae,J){J===void 0&&(J=ae),M[J]=$[ae]};function h(M,$){for(var ae in M)ae!=="default"&&!Object.prototype.hasOwnProperty.call($,ae)&&N($,M,ae)}function A(M){var $=typeof Symbol=="function"&&Symbol.iterator,ae=$&&M[$],J=0;if(ae)return ae.call(M);if(M&&typeof M.length=="number")return{next:function(){return M&&J>=M.length&&(M=void 0),{value:M&&M[J++],done:!M}}};throw new TypeError($?"Object is not iterable.":"Symbol.iterator is not defined.")}function I(M,$){var ae=typeof Symbol=="function"&&M[Symbol.iterator];if(!ae)return M;var J=ae.call(M),xe,q=[],le;try{for(;($===void 0||$-- >0)&&!(xe=J.next()).done;)q.push(xe.value)}catch(te){le={error:te}}finally{try{xe&&!xe.done&&(ae=J.return)&&ae.call(J)}finally{if(le)throw le.error}}return q}function b(){for(var M=[],$=0;$<arguments.length;$++)M=M.concat(I(arguments[$]));return M}function u(){for(var M=0,$=0,ae=arguments.length;$<ae;$++)M+=arguments[$].length;for(var J=Array(M),xe=0,$=0;$<ae;$++)for(var q=arguments[$],le=0,te=q.length;le<te;le++,xe++)J[xe]=q[le];return J}function S(M,$,ae){if(ae||arguments.length===2)for(var J=0,xe=$.length,q;J<xe;J++)(q||!(J in $))&&(q||(q=Array.prototype.slice.call($,0,J)),q[J]=$[J]);return M.concat(q||Array.prototype.slice.call($))}function E(M){return this instanceof E?(this.v=M,this):new E(M)}function L(M,$,ae){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var J=ae.apply(M,$||[]),xe,q=[];return xe={},le("next"),le("throw"),le("return"),xe[Symbol.asyncIterator]=function(){return this},xe;function le(D){J[D]&&(xe[D]=function(ee){return new Promise(function(ie,ye){q.push([D,ee,ie,ye])>1||te(D,ee)})})}function te(D,ee){try{Z(J[D](ee))}catch(ie){ue(q[0][3],ie)}}function Z(D){D.value instanceof E?Promise.resolve(D.value.v).then(ce,O):ue(q[0][2],D)}function ce(D){te("next",D)}function O(D){te("throw",D)}function ue(D,ee){D(ee),q.shift(),q.length&&te(q[0][0],q[0][1])}}function T(M){var $,ae;return $={},J("next"),J("throw",function(xe){throw xe}),J("return"),$[Symbol.iterator]=function(){return this},$;function J(xe,q){$[xe]=M[xe]?function(le){return(ae=!ae)?{value:E(M[xe](le)),done:xe==="return"}:q?q(le):le}:q}}function Q(M){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var $=M[Symbol.asyncIterator],ae;return $?$.call(M):(M=typeof A=="function"?A(M):M[Symbol.iterator](),ae={},J("next"),J("throw"),J("return"),ae[Symbol.asyncIterator]=function(){return this},ae);function J(q){ae[q]=M[q]&&function(le){return new Promise(function(te,Z){le=M[q](le),xe(te,Z,le.done,le.value)})}}function xe(q,le,te,Z){Promise.resolve(Z).then(function(ce){q({value:ce,done:te})},le)}}function G(M,$){return Object.defineProperty?Object.defineProperty(M,"raw",{value:$}):M.raw=$,M}var se=Object.create?function(M,$){Object.defineProperty(M,"default",{enumerable:!0,value:$})}:function(M,$){M.default=$};function U(M){if(M&&M.__esModule)return M;var $={};if(M!=null)for(var ae in M)ae!=="default"&&Object.prototype.hasOwnProperty.call(M,ae)&&N($,M,ae);return se($,M),$}function y(M){return M&&M.__esModule?M:{default:M}}function B(M,$,ae,J){if(ae==="a"&&!J)throw new TypeError("Private accessor was defined without a getter");if(typeof $=="function"?M!==$||!J:!$.has(M))throw new TypeError("Cannot read private member from an object whose class did not declare it");return ae==="m"?J:ae==="a"?J.call(M):J?J.value:$.get(M)}function ne(M,$,ae,J,xe){if(J==="m")throw new TypeError("Private method is not writable");if(J==="a"&&!xe)throw new TypeError("Private accessor was defined without a setter");if(typeof $=="function"?M!==$||!xe:!$.has(M))throw new TypeError("Cannot write private member to an object whose class did not declare it");return J==="a"?xe.call(M,ae):xe?xe.value=ae:$.set(M,ae),ae}},7555:(F,P,t)=>{"use strict";t.d(P,{T:()=>i});const i=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__},7570:(F,P,t)=>{"use strict";t.d(P,{O:()=>x});var i=Object.defineProperty,d=(l,p)=>i(l,"name",{value:p,configurable:!0});const r=new Set;function x(l,...p){const s=Array.isArray(l)?l:[l];for(const f of s){const{message:z,prop:N,propValues:h}=f;!r.has(JSON.stringify(f))&&(N&&!h||N&&h&&h.includes(N))&&(console.warn(`Magnetic: ${z}`,p),r.add(JSON.stringify(f)))}}d(x,"consoleWarn")},7641:(F,P,t)=>{var i=t(6015),d=t(8089),r=t(5567),x=Object.prototype,l=x.hasOwnProperty;function p(s){if(!i(s))return r(s);var f=d(s),z=[];for(var N in s)N=="constructor"&&(f||!l.call(s,N))||z.push(N);return z}F.exports=p},7696:(F,P,t)=>{"use strict";t.d(P,{li:()=>le,mG:()=>B});var i=t(6932),d=t(5917),r=t(5425),x=t(9513),l=t(161),p=t(9245),s=t(7449),f=t(7326),z=t(7504),N=t(5868),h=t(3894);function A(O,ue,D,ee=0){return new f.T2((ie,ye)=>{const be=O[ee];if(ue===null||typeof be!="function")ie(ue);else{const j=be({...ue},D);h.T&&be.id&&j===null&&z.vF.log(`Event processor "${be.id}" dropped event`),(0,N.Qg)(j)?j.then(w=>A(O,w,D,ee+1).then(ie)).then(null,ye):A(O,j,D,ee+1).then(ie).then(null,ye)}})}var I=t(8553),b=t(535),u=t(5142),S=t(4780);function E(O,ue){const{fingerprint:D,span:ee,breadcrumbs:ie,sdkProcessingMetadata:ye}=ue;Q(O,ue),ee&&U(O,ee),y(O,D),G(O,ie),se(O,ye)}function L(O,ue){const{extra:D,tags:ee,user:ie,contexts:ye,level:be,sdkProcessingMetadata:j,breadcrumbs:w,fingerprint:W,eventProcessors:oe,attachments:ve,propagationContext:Se,transactionName:Ae,span:Ie}=ue;T(O,"extra",D),T(O,"tags",ee),T(O,"user",ie),T(O,"contexts",ye),T(O,"sdkProcessingMetadata",j),be&&(O.level=be),Ae&&(O.transactionName=Ae),Ie&&(O.span=Ie),w.length&&(O.breadcrumbs=[...O.breadcrumbs,...w]),W.length&&(O.fingerprint=[...O.fingerprint,...W]),oe.length&&(O.eventProcessors=[...O.eventProcessors,...oe]),ve.length&&(O.attachments=[...O.attachments,...ve]),O.propagationContext={...O.propagationContext,...Se}}function T(O,ue,D){if(D&&Object.keys(D).length){O[ue]={...O[ue]};for(const ee in D)Object.prototype.hasOwnProperty.call(D,ee)&&(O[ue][ee]=D[ee])}}function Q(O,ue){const{extra:D,tags:ee,user:ie,contexts:ye,level:be,transactionName:j}=ue,w=(0,b.Ce)(D);w&&Object.keys(w).length&&(O.extra={...w,...O.extra});const W=(0,b.Ce)(ee);W&&Object.keys(W).length&&(O.tags={...W,...O.tags});const oe=(0,b.Ce)(ie);oe&&Object.keys(oe).length&&(O.user={...oe,...O.user});const ve=(0,b.Ce)(ye);ve&&Object.keys(ve).length&&(O.contexts={...ve,...O.contexts}),be&&(O.level=be),j&&O.type!=="transaction"&&(O.transaction=j)}function G(O,ue){const D=[...O.breadcrumbs||[],...ue];O.breadcrumbs=D.length?D:void 0}function se(O,ue){O.sdkProcessingMetadata={...O.sdkProcessingMetadata,...ue}}function U(O,ue){O.contexts={trace:(0,S.kX)(ue),...O.contexts},O.sdkProcessingMetadata={dynamicSamplingContext:(0,u.k1)(ue),...O.sdkProcessingMetadata};const D=(0,S.zU)(ue),ee=(0,S.et)(D).description;ee&&!O.transaction&&O.type==="transaction"&&(O.transaction=ee)}function y(O,ue){O.fingerprint=O.fingerprint?(0,i.k9)(O.fingerprint):[],ue&&(O.fingerprint=O.fingerprint.concat(ue)),O.fingerprint&&!O.fingerprint.length&&delete O.fingerprint}function B(O,ue,D,ee,ie,ye){const{normalizeDepth:be=3,normalizeMaxBreadth:j=1e3}=O,w={...ue,event_id:ue.event_id||D.event_id||(0,i.eJ)(),timestamp:ue.timestamp||(0,d.lu)()},W=D.integrations||O.integrations.map(Le=>Le.name);ne(w,O),J(w,W),ie&&ie.emit("applyFrameMetadata",ue),ue.type===void 0&&$(w,O.stackParser);const oe=q(ee,D.captureContext);D.mechanism&&(0,i.M6)(w,D.mechanism);const ve=ie?ie.getEventProcessors():[],Se=(0,s.m6)().getScopeData();if(ye){const Le=ye.getScopeData();L(Se,Le)}if(oe){const Le=oe.getScopeData();L(Se,Le)}const Ae=[...D.attachments||[],...Se.attachments];Ae.length&&(D.attachments=Ae),E(w,Se);const Ie=[...ve,...Se.eventProcessors];return A(Ie,w,D).then(Le=>(Le&&ae(Le),typeof be=="number"&&be>0?xe(Le,be,j):Le))}function ne(O,ue){const{environment:D,release:ee,dist:ie,maxValueLength:ye=250}=ue;"environment"in O||(O.environment="environment"in ue?D:p.U),O.release===void 0&&ee!==void 0&&(O.release=ee),O.dist===void 0&&ie!==void 0&&(O.dist=ie),O.message&&(O.message=(0,r.xv)(O.message,ye));const be=O.exception&&O.exception.values&&O.exception.values[0];be&&be.value&&(be.value=(0,r.xv)(be.value,ye));const j=O.request;j&&j.url&&(j.url=(0,r.xv)(j.url,ye))}const M=new WeakMap;function $(O,ue){const D=x.O._sentryDebugIds;if(!D)return;let ee;const ie=M.get(ue);ie?ee=ie:(ee=new Map,M.set(ue,ee));const ye=Object.entries(D).reduce((be,[j,w])=>{let W;const oe=ee.get(j);oe?W=oe:(W=ue(j),ee.set(j,W));for(let ve=W.length-1;ve>=0;ve--){const Se=W[ve];if(Se.filename){be[Se.filename]=w;break}}return be},{});try{O.exception.values.forEach(be=>{be.stacktrace.frames.forEach(j=>{j.filename&&(j.debug_id=ye[j.filename])})})}catch{}}function ae(O){const ue={};try{O.exception.values.forEach(ee=>{ee.stacktrace.frames.forEach(ie=>{ie.debug_id&&(ie.abs_path?ue[ie.abs_path]=ie.debug_id:ie.filename&&(ue[ie.filename]=ie.debug_id),delete ie.debug_id)})})}catch{}if(Object.keys(ue).length===0)return;O.debug_meta=O.debug_meta||{},O.debug_meta.images=O.debug_meta.images||[];const D=O.debug_meta.images;Object.entries(ue).forEach(([ee,ie])=>{D.push({type:"sourcemap",code_file:ee,debug_id:ie})})}function J(O,ue){ue.length>0&&(O.sdk=O.sdk||{},O.sdk.integrations=[...O.sdk.integrations||[],...ue])}function xe(O,ue,D){if(!O)return null;const ee={...O,...O.breadcrumbs&&{breadcrumbs:O.breadcrumbs.map(ie=>({...ie,...ie.data&&{data:(0,l.S8)(ie.data,ue,D)}}))},...O.user&&{user:(0,l.S8)(O.user,ue,D)},...O.contexts&&{contexts:(0,l.S8)(O.contexts,ue,D)},...O.extra&&{extra:(0,l.S8)(O.extra,ue,D)}};return O.contexts&&O.contexts.trace&&ee.contexts&&(ee.contexts.trace=O.contexts.trace,O.contexts.trace.data&&(ee.contexts.trace.data=(0,l.S8)(O.contexts.trace.data,ue,D))),O.spans&&(ee.spans=O.spans.map(ie=>({...ie,...ie.data&&{data:(0,l.S8)(ie.data,ue,D)}}))),ee}function q(O,ue){if(!ue)return O;const D=O?O.clone():new I.H;return D.update(ue),D}function le(O){if(O)return te(O)?{captureContext:O}:ce(O)?{captureContext:O}:O}function te(O){return O instanceof I.H||typeof O=="function"}const Z=["user","level","extra","contexts","tags","fingerprint","requestSession","propagationContext"];function ce(O){return Object.keys(O).some(ue=>Z.includes(ue))}},7710:(F,P,t)=>{"use strict";t.d(P,{M:()=>i});const i="8.34.0"},7747:(F,P,t)=>{var i=t(1960),d="__lodash_hash_undefined__",r=Object.prototype,x=r.hasOwnProperty;function l(p){var s=this.__data__;if(i){var f=s[p];return f===d?void 0:f}return x.call(s,p)?s[p]:void 0}F.exports=l},7752:F=>{function P(){this.__data__=[],this.size=0}F.exports=P},7774:(F,P,t)=>{var i=t(6837),d=t(5816);function r(x){return i(x,d(x))}F.exports=r},7849:(F,P,t)=>{var i=t(435);function d(r){var x=this.__data__,l=i(x,r);return l<0?void 0:x[l][1]}F.exports=d},7921:(F,P,t)=>{var i=t(5580),d=t(6218);function r(x){return i(function(l,p){var s=-1,f=p.length,z=f>1?p[f-1]:void 0,N=f>2?p[2]:void 0;for(z=x.length>3&&typeof z=="function"?(f--,z):void 0,N&&d(p[0],p[1],N)&&(z=f<3?void 0:z,f=1),l=Object(l);++s<f;){var h=p[s];h&&x(l,h,s,z)}return l})}F.exports=r},8037:(F,P,t)=>{var i=t(5912);function d(r,x){var l=r.__data__;return i(x)?l[typeof x=="string"?"string":"hash"]:l.map}F.exports=d},8089:F=>{var P=Object.prototype;function t(i){var d=i&&i.constructor,r=typeof d=="function"&&d.prototype||P;return i===r}F.exports=t},8098:(F,P,t)=>{F=t.nmd(F);var i=t(7183),d=t(1329),r=P&&!P.nodeType&&P,x=r&&!0&&F&&!F.nodeType&&F,l=x&&x.exports===r,p=l?i.Buffer:void 0,s=p?p.isBuffer:void 0,f=s||d;F.exports=f},8236:(F,P,t)=>{"use strict";t.d(P,{A:()=>h});var i=t(2776),d=t(4077),r=Object.defineProperty,x=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(A,I,b)=>I in A?r(A,I,{enumerable:!0,configurable:!0,writable:!0,value:b}):A[I]=b,f=(A,I)=>{for(var b in I||(I={}))l.call(I,b)&&s(A,b,I[b]);if(x)for(var b of x(I))p.call(I,b)&&s(A,b,I[b]);return A},z=(A,I)=>{var b={};for(var u in A)l.call(A,u)&&I.indexOf(u)<0&&(b[u]=A[u]);if(A!=null&&x)for(var u of x(A))I.indexOf(u)<0&&p.call(A,u)&&(b[u]=A[u]);return b};const N=(0,i.forwardRef)((A,I)=>{const b=A,{alt:u,color:S,size:E,weight:L,mirrored:T,children:Q,weights:G}=b,se=z(b,["alt","color","size","weight","mirrored","children","weights"]),U=(0,i.useContext)(d.V),{color:y="currentColor",size:B,weight:ne="regular",mirrored:M=!1}=U,$=z(U,["color","size","weight","mirrored"]);return i.createElement("svg",f(f({ref:I,xmlns:"http://www.w3.org/2000/svg",width:E??B,height:E??B,fill:S??y,viewBox:"0 0 256 256",transform:T||M?"scale(-1, 1)":void 0},$),se),!!u&&i.createElement("title",null,u),Q,G.get(L??ne))});N.displayName="IconBase";const h=N},8331:(F,P,t)=>{"use strict";t.d(P,{t:()=>d});var i=t(2776),d=(0,i.createContext)(null)},8342:(F,P,t)=>{var i=t(1960);function d(){this.__data__=i?i(null):{},this.size=0}F.exports=d},8423:F=>{function P(t){return this.__data__.has(t)}F.exports=P},8553:(F,P,t)=>{"use strict";t.d(P,{H:()=>I});var i=t(6932);function d(){return{traceId:(0,i.eJ)(),spanId:(0,i.eJ)().substring(16)}}var r=t(5868),x=t(5917),l=t(7504),p=t(2924),s=t(535);const f="_sentrySpan";function z(b,u){u?(0,s.my)(b,f,u):delete b[f]}function N(b){return b[f]}const h=100;class A{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext=d()}clone(){const u=new A;return u._breadcrumbs=[...this._breadcrumbs],u._tags={...this._tags},u._extra={...this._extra},u._contexts={...this._contexts},u._user=this._user,u._level=this._level,u._session=this._session,u._transactionName=this._transactionName,u._fingerprint=this._fingerprint,u._eventProcessors=[...this._eventProcessors],u._requestSession=this._requestSession,u._attachments=[...this._attachments],u._sdkProcessingMetadata={...this._sdkProcessingMetadata},u._propagationContext={...this._propagationContext},u._client=this._client,u._lastEventId=this._lastEventId,z(u,N(this)),u}setClient(u){this._client=u}setLastEventId(u){this._lastEventId=u}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(u){this._scopeListeners.push(u)}addEventProcessor(u){return this._eventProcessors.push(u),this}setUser(u){return this._user=u||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&(0,p.qO)(this._session,{user:u}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(u){return this._requestSession=u,this}setTags(u){return this._tags={...this._tags,...u},this._notifyScopeListeners(),this}setTag(u,S){return this._tags={...this._tags,[u]:S},this._notifyScopeListeners(),this}setExtras(u){return this._extra={...this._extra,...u},this._notifyScopeListeners(),this}setExtra(u,S){return this._extra={...this._extra,[u]:S},this._notifyScopeListeners(),this}setFingerprint(u){return this._fingerprint=u,this._notifyScopeListeners(),this}setLevel(u){return this._level=u,this._notifyScopeListeners(),this}setTransactionName(u){return this._transactionName=u,this._notifyScopeListeners(),this}setContext(u,S){return S===null?delete this._contexts[u]:this._contexts[u]=S,this._notifyScopeListeners(),this}setSession(u){return u?this._session=u:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(u){if(!u)return this;const S=typeof u=="function"?u(this):u,[E,L]=S instanceof I?[S.getScopeData(),S.getRequestSession()]:(0,r.Qd)(S)?[u,u.requestSession]:[],{tags:T,extra:Q,user:G,contexts:se,level:U,fingerprint:y=[],propagationContext:B}=E||{};return this._tags={...this._tags,...T},this._extra={...this._extra,...Q},this._contexts={...this._contexts,...se},G&&Object.keys(G).length&&(this._user=G),U&&(this._level=U),y.length&&(this._fingerprint=y),B&&(this._propagationContext=B),L&&(this._requestSession=L),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._session=void 0,z(this,void 0),this._attachments=[],this._propagationContext=d(),this._notifyScopeListeners(),this}addBreadcrumb(u,S){const E=typeof S=="number"?S:h;if(E<=0)return this;const L={timestamp:(0,x.lu)(),...u},T=this._breadcrumbs;return T.push(L),this._breadcrumbs=T.length>E?T.slice(-E):T,this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(u){return this._attachments.push(u),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:N(this)}}setSDKProcessingMetadata(u){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...u},this}setPropagationContext(u){return this._propagationContext=u,this}getPropagationContext(){return this._propagationContext}captureException(u,S){const E=S&&S.event_id?S.event_id:(0,i.eJ)();if(!this._client)return l.vF.warn("No client configured on scope - will not capture exception!"),E;const L=new Error("Sentry syntheticException");return this._client.captureException(u,{originalException:u,syntheticException:L,...S,event_id:E},this),E}captureMessage(u,S,E){const L=E&&E.event_id?E.event_id:(0,i.eJ)();if(!this._client)return l.vF.warn("No client configured on scope - will not capture message!"),L;const T=new Error(u);return this._client.captureMessage(u,S,{originalException:u,syntheticException:T,...E,event_id:L},this),L}captureEvent(u,S){const E=S&&S.event_id?S.event_id:(0,i.eJ)();return this._client?(this._client.captureEvent(u,{...S,event_id:E},this),E):(l.vF.warn("No client configured on scope - will not capture event!"),E)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(u=>{u(this)}),this._notifyingListeners=!1)}}const I=A},8561:(F,P,t)=>{var i=t(3188),d=t(7183),r=i(d,"Map");F.exports=r},8601:F=>{function P(t,i){var d=-1,r=t.length;for(i||(i=Array(r));++d<r;)i[d]=t[d];return i}F.exports=P},8616:(F,P,t)=>{"use strict";t.d(P,{T:()=>i});const i=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__},8704:F=>{var P=Object.prototype,t=P.toString;function i(d){return t.call(d)}F.exports=i},8926:(F,P,t)=>{var i=t(789);function d(){this.__data__=new i,this.size=0}F.exports=d},8939:(F,P,t)=>{"use strict";t.d(P,{w:()=>S});var i=t(4209),d=t(9309),r=t(738),x=[],l=[];function p(E,L){if(E&&typeof document<"u"){var T,Q=L.prepend===!0?"prepend":"append",G=L.singleTag===!0,se=typeof L.container=="string"?document.querySelector(L.container):document.getElementsByTagName("head")[0];if(G){var U=x.indexOf(se);U===-1&&(U=x.push(se)-1,l[U]={}),T=l[U]&&l[U][Q]?l[U][Q]:l[U][Q]=y()}else T=y();E.charCodeAt(0)===65279&&(E=E.substring(1)),T.styleSheet?T.styleSheet.cssText+=E:T.appendChild(document.createTextNode(E))}function y(){var B=document.createElement("style");if(B.setAttribute("type","text/css"),L.attributes)for(var ne=Object.keys(L.attributes),M=0;M<ne.length;M++)B.setAttribute(ne[M],L.attributes[ne[M]]);var $=Q==="prepend"?"afterbegin":"beforeend";return se.insertAdjacentElement($,B),B}}var s=`.mds-footer {
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: -moz-fit-content;
  height: fit-content;
  padding: 20px 0 24px;

  background-color: var(--base-bg-default)
}
.mds-footer .mds-copyright {
    padding-right: 36px;
  }
`;p(s,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/footer"}});var f=t(6978),z=t(4377),N=t(2776),h=t.n(N),A=t(6843),I=Object.defineProperty,b=(E,L)=>I(E,"name",{value:L,configurable:!0});const u=b(()=>{const E=(0,f.U)("mds-copyright");return h().createElement(A.E,{className:E,size:"p4"},"\xA9 ",new Date().getFullYear()," Cisco Systems, Inc.")},"Copyright"),S=(0,N.forwardRef)(({children:E,className:L,links:T,...Q},G)=>{const se=(0,f.U)(L,"mds-footer");return h().createElement("footer",{className:se,ref:G,...Q},h().createElement(r.s,{direction:"vertical",gap:16},h().createElement(r.s,{direction:"vertical"},h().createElement(d.c,{size:"md"}),h().createElement(r.s,{justify:"space-between"},h().createElement(u,null),h().createElement(r.s,{gap:16},T?.privacy&&h().createElement(z.N,{href:T.privacy,size:"sm"},"Privacy policy"),T?.terms&&h().createElement(z.N,{href:T.terms,size:"sm"},"Terms of service"),T?.custom?.map(U=>"onClick"in U?h().createElement(i.$,{key:U.text,kind:"tertiary",onClick:U.onClick,size:"sm",type:"button"},U.text):h().createElement(z.N,{href:U.link,key:U.text,size:"sm"},U.text))))),h().createElement(r.s,{align:"flex-start",justify:"space-between"},E)))})},8972:(F,P,t)=>{"use strict";t.d(P,{Cj:()=>L,W3:()=>p,bN:()=>h,bm:()=>u,h4:()=>l,n2:()=>T,yH:()=>s,zk:()=>E});var i=t(9355),d=t(161),r=t(535),x=t(9513);function l(Q,G=[]){return[Q,G]}function p(Q,G){const[se,U]=Q;return[se,[...U,G]]}function s(Q,G){const se=Q[1];for(const U of se){const y=U[0].type;if(G(U,y))return!0}return!1}function f(Q,G){return s(Q,(se,U)=>G.includes(U))}function z(Q){return x.O.__SENTRY__&&x.O.__SENTRY__.encodePolyfill?x.O.__SENTRY__.encodePolyfill(Q):new TextEncoder().encode(Q)}function N(Q){return GLOBAL_OBJ.__SENTRY__&&GLOBAL_OBJ.__SENTRY__.decodePolyfill?GLOBAL_OBJ.__SENTRY__.decodePolyfill(Q):new TextDecoder().decode(Q)}function h(Q){const[G,se]=Q;let U=JSON.stringify(G);function y(B){typeof U=="string"?U=typeof B=="string"?U+B:[z(U),B]:U.push(typeof B=="string"?z(B):B)}for(const B of se){const[ne,M]=B;if(y(`
${JSON.stringify(ne)}
`),typeof M=="string"||M instanceof Uint8Array)y(M);else{let $;try{$=JSON.stringify(M)}catch{$=JSON.stringify((0,d.S8)(M))}y($)}}return typeof U=="string"?U:A(U)}function A(Q){const G=Q.reduce((y,B)=>y+B.length,0),se=new Uint8Array(G);let U=0;for(const y of Q)se.set(y,U),U+=y.length;return se}function I(Q){let G=typeof Q=="string"?z(Q):Q;function se(ne){const M=G.subarray(0,ne);return G=G.subarray(ne+1),M}function U(){let ne=G.indexOf(10);return ne<0&&(ne=G.length),JSON.parse(N(se(ne)))}const y=U(),B=[];for(;G.length;){const ne=U(),M=typeof ne.length=="number"?ne.length:void 0;B.push([ne,M?se(M):U()])}return[y,B]}function b(Q){return[{type:"span"},Q]}function u(Q){const G=typeof Q.data=="string"?z(Q.data):Q.data;return[(0,r.Ce)({type:"attachment",length:G.length,filename:Q.filename,content_type:Q.contentType,attachment_type:Q.attachmentType}),G]}const S={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",profile_chunk:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor",feedback:"feedback",span:"span",statsd:"metric_bucket"};function E(Q){return S[Q]}function L(Q){if(!Q||!Q.sdk)return;const{name:G,version:se}=Q.sdk;return{name:G,version:se}}function T(Q,G,se,U){const y=Q.sdkProcessingMetadata&&Q.sdkProcessingMetadata.dynamicSamplingContext;return{event_id:Q.event_id,sent_at:new Date().toISOString(),...G&&{sdk:G},...!!se&&U&&{dsn:(0,i.SB)(U)},...y&&{trace:(0,r.Ce)({...y})}}}},8987:(F,P,t)=>{"use strict";t.d(P,{A:()=>x});/*! js-cookie v3.0.5 | MIT */function i(l){for(var p=1;p<arguments.length;p++){var s=arguments[p];for(var f in s)l[f]=s[f]}return l}var d={read:function(l){return l[0]==='"'&&(l=l.slice(1,-1)),l.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(l){return encodeURIComponent(l).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function r(l,p){function s(z,N,h){if(!(typeof document>"u")){h=i({},p,h),typeof h.expires=="number"&&(h.expires=new Date(Date.now()+h.expires*864e5)),h.expires&&(h.expires=h.expires.toUTCString()),z=encodeURIComponent(z).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var A="";for(var I in h)h[I]&&(A+="; "+I,h[I]!==!0&&(A+="="+h[I].split(";")[0]));return document.cookie=z+"="+l.write(N,z)+A}}function f(z){if(!(typeof document>"u"||arguments.length&&!z)){for(var N=document.cookie?document.cookie.split("; "):[],h={},A=0;A<N.length;A++){var I=N[A].split("="),b=I.slice(1).join("=");try{var u=decodeURIComponent(I[0]);if(h[u]=l.read(b,u),z===u)break}catch{}}return z?h[z]:h}}return Object.create({set:s,get:f,remove:function(z,N){s(z,"",i({},N,{expires:-1}))},withAttributes:function(z){return r(this.converter,i({},this.attributes,z))},withConverter:function(z){return r(i({},this.converter,z),this.attributes)}},{attributes:{value:Object.freeze(p)},converter:{value:Object.freeze(l)}})}var x=r(d,{path:"/"})},9090:F=>{function P(t){return t}F.exports=P},9096:(F,P,t)=>{"use strict";t.d(P,{X:()=>N});var i=t(5868),d=t(7504),r=t(161),x=t(535),l=t(5425),p=t(9462),s=t(3894);const f="ExtraErrorData",z=(I={})=>{const{depth:b=3,captureErrorCause:u=!0}=I;return{name:f,processEvent(S,E,L){const{maxValueLength:T=250}=L.getOptions();return h(S,E,b,u,T)}}},N=(0,p._C)(z);function h(I,b={},u,S,E){if(!b.originalException||!(0,i.bJ)(b.originalException))return I;const L=b.originalException.name||b.originalException.constructor.name,T=A(b.originalException,S,E);if(T){const Q={...I.contexts},G=(0,r.S8)(T,u);return(0,i.Qd)(G)&&((0,x.my)(G,"__sentry_skip_normalization__",!0),Q[L]=G),{...I,contexts:Q}}return I}function A(I,b,u){try{const S=["name","message","stack","line","column","fileName","lineNumber","columnNumber","toJSON"],E={};for(const L of Object.keys(I)){if(S.indexOf(L)!==-1)continue;const T=I[L];E[L]=(0,i.bJ)(T)||typeof T=="string"?(0,l.xv)(`${T}`,u):T}if(b&&I.cause!==void 0&&(E.cause=(0,i.bJ)(I.cause)?I.cause.toString():I.cause),typeof I.toJSON=="function"){const L=I.toJSON();for(const T of Object.keys(L)){const Q=L[T];E[T]=(0,i.bJ)(Q)?Q.toString():Q}}return E}catch(S){s.T&&d.vF.error("Unable to extract extra data from the Error object:",S)}return null}},9142:(F,P,t)=>{var i=t(3733);function d(r,x,l){x=="__proto__"&&i?i(r,x,{configurable:!0,enumerable:!0,value:l,writable:!0}):r[x]=l}F.exports=d},9184:F=>{function P(t){var i=this.has(t)&&delete this.__data__[t];return this.size-=i?1:0,i}F.exports=P},9245:(F,P,t)=>{"use strict";t.d(P,{U:()=>i});const i="production"},9279:(F,P,t)=>{"use strict";t.d(P,{v:()=>l});var i=t(2776),d=t.n(i),r=Object.defineProperty,x=(p,s)=>r(p,"name",{value:s,configurable:!0});const l=x(({children:p,condition:s,wrap:f})=>d().createElement(d().Fragment,null,s?f(p):p),"ConditionalWrap")},9284:(F,P,t)=>{"use strict";t.d(P,{lG:()=>M});var i=t(9353);const d=10,r=20,x=30,l=40,p=50;function s(ae,J,xe,q){const le={filename:ae,function:J==="<anonymous>"?i.yF:J,in_app:!0};return xe!==void 0&&(le.lineno=xe),q!==void 0&&(le.colno=q),le}const f=/^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,z=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,N=/\((\S*)(?::(\d+))(?::(\d+))\)/,A=[x,ae=>{const J=f.exec(ae);if(J){const[,q,le,te]=J;return s(q,i.yF,+le,+te)}const xe=z.exec(ae);if(xe){if(xe[2]&&xe[2].indexOf("eval")===0){const Z=N.exec(xe[2]);Z&&(xe[2]=Z[1],xe[3]=Z[2],xe[4]=Z[3])}const[le,te]=$(xe[1]||i.yF,xe[2]);return s(te,le,xe[3]?+xe[3]:void 0,xe[4]?+xe[4]:void 0)}}],I=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,b=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,S=[p,ae=>{const J=I.exec(ae);if(J){if(J[3]&&J[3].indexOf(" > eval")>-1){const te=b.exec(J[3]);te&&(J[1]=J[1]||"eval",J[3]=te[1],J[4]=te[2],J[5]="")}let q=J[3],le=J[1]||i.yF;return[le,q]=$(le,q),s(q,le,J[4]?+J[4]:void 0,J[5]?+J[5]:void 0)}}],E=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,T=[l,ae=>{const J=E.exec(ae);return J?s(J[2],J[1]||i.yF,+J[3],J[4]?+J[4]:void 0):void 0}],Q=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,se=[d,ae=>{const J=Q.exec(ae);return J?s(J[2],J[3]||i.yF,+J[1]):void 0}],U=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,B=[r,ae=>{const J=U.exec(ae);return J?s(J[5],J[3]||J[4]||i.yF,+J[1],+J[2]):void 0}],ne=[A,S],M=(0,i.gd)(...ne),$=(ae,J)=>{const xe=ae.indexOf("safari-extension")!==-1,q=ae.indexOf("safari-web-extension")!==-1;return xe||q?[ae.indexOf("@")!==-1?ae.split("@")[0]:i.yF,xe?`safari-extension:${J}`:`safari-web-extension:${J}`]:[ae,J]}},9309:(F,P,t)=>{"use strict";t.d(P,{c:()=>f});var i=[],d=[];function r(z,N){if(z&&typeof document<"u"){var h,A=N.prepend===!0?"prepend":"append",I=N.singleTag===!0,b=typeof N.container=="string"?document.querySelector(N.container):document.getElementsByTagName("head")[0];if(I){var u=i.indexOf(b);u===-1&&(u=i.push(b)-1,d[u]={}),h=d[u]&&d[u][A]?d[u][A]:d[u][A]=S()}else h=S();z.charCodeAt(0)===65279&&(z=z.substring(1)),h.styleSheet?h.styleSheet.cssText+=z:h.appendChild(document.createTextNode(z))}function S(){var E=document.createElement("style");if(E.setAttribute("type","text/css"),N.attributes)for(var L=Object.keys(N.attributes),T=0;T<L.length;T++)E.setAttribute(L[T],N.attributes[L[T]]);var Q=A==="prepend"?"afterbegin":"beforeend";return b.insertAdjacentElement(Q,E),E}}var x=`.mds-divider {
  display: flex;
  flex-grow: 1
}
.mds-divider.mds-divider-direction-horizontal {
    --mds-divider-margin-left-right: 0;

    margin: var(--mds-divider-size) var(--mds-divider-margin-left-right);
    border-top: 1px var(--mds-divider-intensity) solid;
  }
.mds-divider.mds-divider-direction-vertical {
    height: 0.9em;
    margin: 0 var(--mds-divider-size);
    border-left: 1px var(--mds-divider-intensity) solid;
  }
.mds-divider.mds-divider-size-xs {
    --mds-divider-size: 8px;
  }
.mds-divider.mds-divider-size-sm {
    --mds-divider-size: 12px;
  }
.mds-divider.mds-divider-size-md {
    --mds-divider-size: 16px;
  }
.mds-divider.mds-divider-size-lg {
    --mds-divider-size: 24px;
  }
.mds-divider.mds-divider-size-xl {
    --mds-divider-size: 36px;
  }
.mds-divider.mds-divider-intensity-default {
    --mds-divider-intensity: var(--base-border-default);
  }
.mds-divider.mds-divider-intensity-strong {
    --mds-divider-intensity: var(--base-border-strong-default);
  }
`;r(x,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/divider"}});var l=t(6978),p=t(2776),s=t.n(p);const f=(0,p.memo)((0,p.forwardRef)(({as:z,className:N,direction:h="horizontal",size:A="md",strong:I=!1,...b},u)=>{const S=z??"div",E=(0,l.U)("mds-divider",`mds-divider-size-${A}`,`mds-divider-direction-${h}`,I?"mds-divider-intensity-strong":"mds-divider-intensity-default",N);return s().createElement(S,{...b,"aria-orientation":h,className:E,ref:u,role:"separator"})}))},9353:(F,P,t)=>{"use strict";t.d(P,{RV:()=>h,gd:()=>l,qQ:()=>N,yF:()=>d});const i=50,d="?",r=/\(error: (.*)\)/,x=/captureMessage|captureException/;function l(...A){const I=A.sort((b,u)=>b[0]-u[0]).map(b=>b[1]);return(b,u=0,S=0)=>{const E=[],L=b.split(`
`);for(let T=u;T<L.length;T++){const Q=L[T];if(Q.length>1024)continue;const G=r.test(Q)?Q.replace(r,"$1"):Q;if(!G.match(/\S*Error: /)){for(const se of I){const U=se(G);if(U){E.push(U);break}}if(E.length>=i+S)break}}return s(E.slice(S))}}function p(A){return Array.isArray(A)?l(...A):A}function s(A){if(!A.length)return[];const I=Array.from(A);return/sentryWrapped/.test(f(I).function||"")&&I.pop(),I.reverse(),x.test(f(I).function||"")&&(I.pop(),x.test(f(I).function||"")&&I.pop()),I.slice(0,i).map(b=>({...b,filename:b.filename||f(I).filename,function:b.function||d}))}function f(A){return A[A.length-1]||{}}const z="<anonymous>";function N(A){try{return!A||typeof A!="function"?z:A.name||z}catch{return z}}function h(A){const I=A.exception;if(I){const b=[];try{return I.values.forEach(u=>{u.stacktrace.frames&&b.push(...u.stacktrace.frames)}),b}catch{return}}}},9355:(F,P,t)=>{"use strict";t.d(P,{AD:()=>z,SB:()=>l});var i=t(8616),d=t(7504);const r=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function x(N){return N==="http"||N==="https"}function l(N,h=!1){const{host:A,path:I,pass:b,port:u,projectId:S,protocol:E,publicKey:L}=N;return`${E}://${L}${h&&b?`:${b}`:""}@${A}${u?`:${u}`:""}/${I&&`${I}/`}${S}`}function p(N){const h=r.exec(N);if(!h){(0,d.pq)(()=>{console.error(`Invalid Sentry Dsn: ${N}`)});return}const[A,I,b="",u="",S="",E=""]=h.slice(1);let L="",T=E;const Q=T.split("/");if(Q.length>1&&(L=Q.slice(0,-1).join("/"),T=Q.pop()),T){const G=T.match(/^\d+/);G&&(T=G[0])}return s({host:u,pass:b,path:L,projectId:T,port:S,protocol:A,publicKey:I})}function s(N){return{protocol:N.protocol,publicKey:N.publicKey||"",pass:N.pass||"",host:N.host,port:N.port||"",path:N.path||"",projectId:N.projectId}}function f(N){if(!i.T)return!0;const{port:h,projectId:A,protocol:I}=N;return["protocol","publicKey","host","projectId"].find(S=>N[S]?!1:(d.vF.error(`Invalid Sentry Dsn: ${S} missing`),!0))?!1:A.match(/^\d+$/)?x(I)?h&&isNaN(parseInt(h,10))?(d.vF.error(`Invalid Sentry Dsn: Invalid port ${h}`),!1):!0:(d.vF.error(`Invalid Sentry Dsn: Invalid protocol ${I}`),!1):(d.vF.error(`Invalid Sentry Dsn: Invalid projectId ${A}`),!1)}function z(N){const h=typeof N=="string"?p(N):s(N);if(!(!h||!f(h)))return h}},9459:(F,P,t)=>{"use strict";t.d(P,{Z:()=>B});var i=t(4445),d=t(6978),r=t(7570),x=t(2776),l=t.n(x),p=t(9309),s=Object.defineProperty,f=(ne,M)=>s(ne,"name",{value:M,configurable:!0});const z=f(({className:ne,...M})=>{const $=(0,d.U)("mds-card-divider",ne);return l().createElement(p.c,{className:$,...M})},"CardDivider");z.displayName="Card.Divider";var N=t(738),h=[],A=[];function I(ne,M){if(ne&&typeof document<"u"){var $,ae=M.prepend===!0?"prepend":"append",J=M.singleTag===!0,xe=typeof M.container=="string"?document.querySelector(M.container):document.getElementsByTagName("head")[0];if(J){var q=h.indexOf(xe);q===-1&&(q=h.push(xe)-1,A[q]={}),$=A[q]&&A[q][ae]?A[q][ae]:A[q][ae]=le()}else $=le();ne.charCodeAt(0)===65279&&(ne=ne.substring(1)),$.styleSheet?$.styleSheet.cssText+=ne:$.appendChild(document.createTextNode(ne))}function le(){var te=document.createElement("style");if(te.setAttribute("type","text/css"),M.attributes)for(var Z=Object.keys(M.attributes),ce=0;ce<Z.length;ce++)te.setAttribute(Z[ce],M.attributes[Z[ce]]);var O=ae==="prepend"?"afterbegin":"beforeend";return xe.insertAdjacentElement(O,te),te}}var b=`
  .mds-card-group > .mds-card {
    flex: 1 1 20%;
    min-width: 208px;
    max-width: 428px

    /*
     * Excludes card groups with ne or two children
     * :first-child:last-child - selects a card where the first child is the last child
     * :first-child:nth-last-child(2) - selects a card where the first child is the second to last child
     * :last-child:nth-child(2) - selects a card where the last child is the second child
    */
  }
.mds-card-group > .mds-card:not(:first-child:last-child):not(:first-child:nth-last-child(2)):not(:last-child:nth-child(2)) {
      max-width: unset;
    }
`;I(b,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/card"}});var u=Object.defineProperty,S=(ne,M)=>u(ne,"name",{value:M,configurable:!0});const E=S(({children:ne,...M})=>l().createElement(N.s,{className:"mds-card-group",gap:"sm",wrap:!0,...M},ne),"Group");E.displayName="Card.Group";var L=Object.defineProperty,T=(ne,M)=>L(ne,"name",{value:M,configurable:!0});const Q=T(({children:ne,className:M,...$})=>{const ae=(0,d.U)("mds-card-well",M);return l().createElement(N.s,{...$,className:ae},ne)},"Well");Q.displayName="Card.Well";var G=`.mds-card {
  --mds-accent-color-bar-height: 6px;
  --mds-card-padding: 16px;

  position: relative;

  display: block;

  padding: var(--mds-card-padding);

  background-color: var(--control-bg-weak-default);
  border: 2px solid var(--control-border-weak-default);
  border-radius: 8px;

  transition: all linear 0.5s
}
.mds-card::before {
    content: "";

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: var(--mds-accent-color-bar-height);

    border-radius: 5px 5px 0 0;
  }
.mds-card.mds-card-accent-default,
  .mds-card.mds-card-accent-positive,
  .mds-card.mds-card-accent-excellent,
  .mds-card.mds-card-accent-negative,
  .mds-card.mds-card-accent-severe-warning,
  .mds-card.mds-card-accent-warning,
  .mds-card.mds-card-accent-low-warning,
  .mds-card.mds-card-accent-in-progress,
  .mds-card.mds-card-accent-info,
  .mds-card.mds-card-accent-dormant {
    padding-top: calc(12px + var(--mds-accent-color-bar-height));
  }
.mds-card.mds-card-accent-default::before {
    background-color: var(--info-border-default);
  }
.mds-card.mds-card-accent-positive::before {
    background-color: var(--positive-border-default);
  }
.mds-card.mds-card-accent-excellent::before {
    background-color: var(--excellent-border-default);
  }
.mds-card.mds-card-accent-negative::before {
    background-color: var(--negative-border-default);
  }
.mds-card.mds-card-accent-severe-warning::before {
    background-color: var(--severe-warning-border-default);
  }
.mds-card.mds-card-accent-warning::before {
    background-color: var(--warning-border-default);
  }
.mds-card.mds-card-accent-low-warning::before {
    background-color: var(--low-warning-border-default);
  }
.mds-card.mds-card-accent-in-progress::before {
    background-color: var(--in-progress-border-default);
  }
.mds-card.mds-card-accent-info::before {
    background-color: var(--info-border-default);
  }
.mds-card.mds-card-accent-dormant::before {
    background-color: var(--dormant-border-default);
  }
@media screen and (prefers-reduced-motion: reduce) {
  .mds-card {
    transition: none
}
  }
.mds-card.mds-card-selectable {
    cursor: pointer;
    border: 2px solid var(--control-border-weak-default);
    box-shadow: var(--elevation-subtle-default);
    transition: all linear 0.3s
  }
@media screen and (prefers-reduced-motion: reduce) {
  .mds-card.mds-card-selectable {
      transition: none
  }
    }
.mds-card.mds-card-selectable.focus-visible,
    .mds-card.mds-card-selectable:focus-visible {
      outline: none;
      box-shadow: var(--elevation-control-focus);
    }
.mds-card.mds-card-selectable:hover {
      border: 2px solid var(--control-border-hover);
      box-shadow: var(--elevation-lifted-default);
    }
.mds-card.mds-card-selected {
    border: 2px solid var(--control-border-active);
    box-shadow: var(--elevation-subtle-default);
  }
.mds-card.mds-card-disabled {
    cursor: not-allowed;
    opacity: 0.5
  }
*.mds-card.mds-card-disabled {
      pointer-events: none;
    }
.mds-card.mds-card-disabled.mds-card-accent-default::before,
    .mds-card.mds-card-disabled.mds-card-accent-negative::before,
    .mds-card.mds-card-disabled.mds-card-accent-warning::before,
    .mds-card.mds-card-disabled.mds-card-accent-dormant::before {
      background-color: var(--control-border-disabled);
    }
.mds-card .mds-card-well {
    padding: 4px 8px;
    background-color: var(--base-bg-medium-default);
  }
.mds-card .mds-card-divider {
    margin-right: calc(var(--mds-card-padding) * -1);
    margin-left: calc(var(--mds-card-padding) * -1);
  }
`;I(G,{container:"body",singleTag:!0,prepend:!0,attributes:{id:"@magnetic/card"}});var se=t(1308),U=Object.defineProperty,y=(ne,M)=>U(ne,"name",{value:M,configurable:!0});const B=y(({accent:ne,analytics:M,className:$,disabled:ae,maxWidth:J,minWidth:xe,onClick:q,onKeyDown:le,selected:te=!1,size:Z,style:ce,...O})=>{const{sendAnalytics:ue}=(0,i.st)(),D=!ae&&q?"button":"",ee=ae?!1:q||le,ie=(0,d.U)($,{"mds-card":!0,"mds-card-info":!0,[`mds-card-accent-${ne}`]:ne,"mds-card-disabled":ae,"mds-card-selected":te,"mds-card-selectable":ee}),ye=(0,x.useMemo)(()=>{const w=xe&&xe==="fluid"?"100%":xe,W=J&&J==="fluid"?"100%":J;return{...w?{minWidth:w}:{},...W?{maxWidth:W}:{}}},[xe,J]),be=[];Z&&["lg","xl"].includes(Z)&&be.push({prop:Z,message:["The `Card` component is underdoing an overhaul. Using it in","its large and extra-large size most likely indicates that you should","migrate to the newly added `Container` component since those sizes have been","removed from this component."].join(" ")}),ne&&["default"].includes(ne)&&be.push({prop:ne,message:["The `Card` component now offers new status colors!","accent `default` has been deprecated and will be removed","soon. Please migrate to the new status colors: `positive`, `excellent`,","`negative`, `severe-warning`, `warning`, `low-warning`, `in-progress`, `info`,","`dormant`."].join(" ")}),be.length>0&&(0,r.O)(be);const j=(0,x.useCallback)(w=>{M?.events.includes("click")&&!ae&&ue({...M,component:"card",event:"click"}),q?.(w)},[M,ae,q,ue]);return l().createElement("div",{tabIndex:ee?0:-1,...O,className:ie,onClick:j,onKeyDown:le,role:D,style:{...ce,...ye}})},"Card");B.Well=Q,B.Group=E,B.Divider=z},9462:(F,P,t)=>{"use strict";t.d(P,{P$:()=>p,_C:()=>N,lc:()=>s,qm:()=>f});var i=t(7504),d=t(3894);const r=[];function x(h){const A={};return h.forEach(I=>{const{name:b}=I,u=A[b];u&&!u.isDefaultInstance&&I.isDefaultInstance||(A[b]=I)}),Object.values(A)}function l(h){const A=h.defaultIntegrations||[],I=h.integrations;A.forEach(E=>{E.isDefaultInstance=!0});let b;Array.isArray(I)?b=[...A,...I]:typeof I=="function"?b=arrayify(I(A)):b=A;const u=x(b),S=u.findIndex(E=>E.name==="Debug");if(S>-1){const[E]=u.splice(S,1);u.push(E)}return u}function p(h,A){const I={};return A.forEach(b=>{b&&f(h,b,I)}),I}function s(h,A){for(const I of A)I&&I.afterAllSetup&&I.afterAllSetup(h)}function f(h,A,I){if(I[A.name]){d.T&&i.vF.log(`Integration skipped because it was already installed: ${A.name}`);return}if(I[A.name]=A,r.indexOf(A.name)===-1&&typeof A.setupOnce=="function"&&(A.setupOnce(),r.push(A.name)),A.setup&&typeof A.setup=="function"&&A.setup(h),typeof A.preprocessEvent=="function"){const b=A.preprocessEvent.bind(A);h.on("preprocessEvent",(u,S)=>b(u,S,h))}if(typeof A.processEvent=="function"){const b=A.processEvent.bind(A),u=Object.assign((S,E)=>b(S,E,h),{id:A.name});h.addEventProcessor(u)}d.T&&i.vF.log(`Integration installed: ${A.name}`)}function z(h){const A=getClient();if(!A){DEBUG_BUILD&&logger.warn(`Cannot add integration "${h.name}" because no SDK Client is available.`);return}A.addIntegration(h)}function N(h){return h}},9513:(F,P,t)=>{"use strict";t.d(P,{B:()=>r,O:()=>d});var i=t(7710);const d=globalThis;function r(x,l,p){const s=p||d,f=s.__SENTRY__=s.__SENTRY__||{},z=f[i.M]=f[i.M]||{};return z[x]||(z[x]=l())}},9545:(F,P,t)=>{"use strict";var i=t(261),d={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},x={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},p={};p[i.ForwardRef]=x,p[i.Memo]=l;function s(u){return i.isMemo(u)?l:p[u.$$typeof]||d}var f=Object.defineProperty,z=Object.getOwnPropertyNames,N=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,A=Object.getPrototypeOf,I=Object.prototype;function b(u,S,E){if(typeof S!="string"){if(I){var L=A(S);L&&L!==I&&b(u,L,E)}var T=z(S);N&&(T=T.concat(N(S)));for(var Q=s(u),G=s(S),se=0;se<T.length;++se){var U=T[se];if(!r[U]&&!(E&&E[U])&&!(G&&G[U])&&!(Q&&Q[U])){var y=h(S,U);try{f(u,U,y)}catch{}}}}return u}F.exports=b},9592:(F,P,t)=>{var i=t(4360),d=t(1784);function r(x){return x!=null&&d(x.length)&&!i(x)}F.exports=r},9637:(F,P,t)=>{var i=t(1429),d=i(Object.getPrototypeOf,Object);F.exports=d},9639:(F,P,t)=>{"use strict";t.d(P,{Cp:()=>r,r:()=>l});var i=t(7449),d=t(7696);function r(y,B){return(0,i.o5)().captureException(y,(0,d.li)(B))}function x(y,B){const ne=typeof B=="string"?B:void 0,M=typeof B!="string"?{captureContext:B}:void 0;return getCurrentScope().captureMessage(y,ne,M)}function l(y,B){return(0,i.o5)().captureEvent(y,B)}function p(y,B){getIsolationScope().setContext(y,B)}function s(y){getIsolationScope().setExtras(y)}function f(y,B){getIsolationScope().setExtra(y,B)}function z(y){getIsolationScope().setTags(y)}function N(y,B){getIsolationScope().setTag(y,B)}function h(y){getIsolationScope().setUser(y)}function A(){return getIsolationScope().lastEventId()}function I(y,B){const ne=getCurrentScope(),M=getClient();if(!M)DEBUG_BUILD&&logger.warn("Cannot capture check-in. No client defined.");else if(!M.captureCheckIn)DEBUG_BUILD&&logger.warn("Cannot capture check-in. Client does not support sending check-ins.");else return M.captureCheckIn(y,B,ne);return uuid4()}function b(y,B,ne){const M=I({monitorSlug:y,status:"in_progress"},ne),$=timestampInSeconds();function ae(J){I({monitorSlug:y,status:J,checkInId:M,duration:timestampInSeconds()-$})}return withIsolationScope(()=>{let J;try{J=B()}catch(xe){throw ae("error"),xe}return isThenable(J)?Promise.resolve(J).then(()=>{ae("ok")},()=>{ae("error")}):ae("ok"),J})}async function u(y){const B=getClient();return B?B.flush(y):(DEBUG_BUILD&&logger.warn("Cannot flush events. No client defined."),Promise.resolve(!1))}async function S(y){const B=getClient();return B?B.close(y):(DEBUG_BUILD&&logger.warn("Cannot flush events and disable SDK. No client defined."),Promise.resolve(!1))}function E(){return!!getClient()}function L(){const y=getClient();return!!y&&y.getOptions().enabled!==!1&&!!y.getTransport()}function T(y){getIsolationScope().addEventProcessor(y)}function Q(y){const B=getClient(),ne=getIsolationScope(),M=getCurrentScope(),{release:$,environment:ae=DEFAULT_ENVIRONMENT}=B&&B.getOptions()||{},{userAgent:J}=GLOBAL_OBJ.navigator||{},xe=makeSession({release:$,environment:ae,user:M.getUser()||ne.getUser(),...J&&{userAgent:J},...y}),q=ne.getSession();return q&&q.status==="ok"&&updateSession(q,{status:"exited"}),G(),ne.setSession(xe),M.setSession(xe),xe}function G(){const y=getIsolationScope(),B=getCurrentScope(),ne=B.getSession()||y.getSession();ne&&closeSession(ne),se(),y.setSession(),B.setSession()}function se(){const y=getIsolationScope(),B=getCurrentScope(),ne=getClient(),M=B.getSession()||y.getSession();M&&ne&&ne.captureSession(M)}function U(y=!1){if(y){G();return}se()}},9772:(F,P,t)=>{"use strict";t.d(P,{B:()=>i});var i=typeof document<"u"},9830:F=>{function P(t,i){return t===i||t!==t&&i!==i}F.exports=P},9841:(F,P,t)=>{"use strict";t.d(P,{l:()=>u});var i=t(2776),d=t(8236);const r=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),i.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z"}))]]);var x=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,N=(S,E,L)=>E in S?x(S,E,{enumerable:!0,configurable:!0,writable:!0,value:L}):S[E]=L,h=(S,E)=>{for(var L in E||(E={}))f.call(E,L)&&N(S,L,E[L]);if(s)for(var L of s(E))z.call(E,L)&&N(S,L,E[L]);return S},A=(S,E)=>l(S,p(E));const I=(0,i.forwardRef)((S,E)=>i.createElement(d.A,A(h({ref:E},S),{weights:r})));I.displayName="Trash";var b=t(6375);const u=(0,b.Y)(I);u.displayName="Trash"},9959:(F,P,t)=>{"use strict";t.d(P,{JD:()=>x,i_:()=>i,sy:()=>d,uT:()=>r});const i="sentry.source",d="sentry.sample_rate",r="sentry.op",x="sentry.origin",l="sentry.idle_span_finish_reason",p="sentry.measurement_unit",s="sentry.measurement_value",f="sentry.profile_id",z="sentry.exclusive_time",N="cache.hit",h="cache.key",A="cache.item_size",I="http.request.method",b="url.full"},9983:(F,P,t)=>{"use strict";t.d(P,{nI:()=>Ee});var i=t(7504),d=t(6932),r=t(5425),x=t(3894),l=t(9462);const p=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/,/^ResizeObserver loop completed with undelivered notifications.$/,/^Cannot redefine property: googletag$/,"undefined is not an object (evaluating 'a.L')",`can't redefine non-configurable property "solana"`,"vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)","Can't find variable: _AutofillCallbackHandler"],s="InboundFilters",f=(k={})=>({name:s,processEvent(K,re,Pe){const Be=Pe.getOptions(),Fe=N(k,Be);return h(K,Fe)?null:K}}),z=(0,l._C)(f);function N(k={},K={}){return{allowUrls:[...k.allowUrls||[],...K.allowUrls||[]],denyUrls:[...k.denyUrls||[],...K.denyUrls||[]],ignoreErrors:[...k.ignoreErrors||[],...K.ignoreErrors||[],...k.disableErrorDefaults?[]:p],ignoreTransactions:[...k.ignoreTransactions||[],...K.ignoreTransactions||[]],ignoreInternal:k.ignoreInternal!==void 0?k.ignoreInternal:!0}}function h(k,K){return K.ignoreInternal&&E(k)?(x.T&&i.vF.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0,d.$X)(k)}`),!0):A(k,K.ignoreErrors)?(x.T&&i.vF.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0,d.$X)(k)}`),!0):Q(k)?(x.T&&i.vF.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0,d.$X)(k)}`),!0):I(k,K.ignoreTransactions)?(x.T&&i.vF.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0,d.$X)(k)}`),!0):b(k,K.denyUrls)?(x.T&&i.vF.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0,d.$X)(k)}.
Url: ${T(k)}`),!0):u(k,K.allowUrls)?!1:(x.T&&i.vF.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0,d.$X)(k)}.
Url: ${T(k)}`),!0)}function A(k,K){return k.type||!K||!K.length?!1:S(k).some(re=>(0,r.Xr)(re,K))}function I(k,K){if(k.type!=="transaction"||!K||!K.length)return!1;const re=k.transaction;return re?(0,r.Xr)(re,K):!1}function b(k,K){if(!K||!K.length)return!1;const re=T(k);return re?(0,r.Xr)(re,K):!1}function u(k,K){if(!K||!K.length)return!0;const re=T(k);return re?(0,r.Xr)(re,K):!0}function S(k){const K=[];k.message&&K.push(k.message);let re;try{re=k.exception.values[k.exception.values.length-1]}catch{}return re&&re.value&&(K.push(re.value),re.type&&K.push(`${re.type}: ${re.value}`)),K}function E(k){try{return k.exception.values[0].type==="SentryError"}catch{}return!1}function L(k=[]){for(let K=k.length-1;K>=0;K--){const re=k[K];if(re&&re.filename!=="<anonymous>"&&re.filename!=="[native code]")return re.filename||null}return null}function T(k){try{let K;try{K=k.exception.values[0].stacktrace.frames}catch{}return K?L(K):null}catch{return x.T&&i.vF.error(`Cannot extract url for event ${(0,d.$X)(k)}`),null}}function Q(k){return k.type||!k.exception||!k.exception.values||k.exception.values.length===0?!1:!k.message&&!k.exception.values.some(K=>K.stacktrace||K.type&&K.type!=="Error"||K.value)}var G=t(535),se=t(7449);let U;const y="FunctionToString",B=new WeakMap,ne=()=>({name:y,setupOnce(){U=Function.prototype.toString;try{Function.prototype.toString=function(...k){const K=(0,G.sp)(this),re=B.has((0,se.KU)())&&K!==void 0?K:this;return U.apply(re,k)}}catch{}},setup(k){B.set(k,!0)}}),M=(0,l._C)(ne);var $=t(9353);const ae="Dedupe",J=()=>{let k;return{name:ae,processEvent(K){if(K.type)return K;try{if(q(K,k))return x.T&&i.vF.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{}return k=K}}},xe=(0,l._C)(J);function q(k,K){return K?!!(le(k,K)||te(k,K)):!1}function le(k,K){const re=k.message,Pe=K.message;return!(!re&&!Pe||re&&!Pe||!re&&Pe||re!==Pe||!ce(k,K)||!Z(k,K))}function te(k,K){const re=O(K),Pe=O(k);return!(!re||!Pe||re.type!==Pe.type||re.value!==Pe.value||!ce(k,K)||!Z(k,K))}function Z(k,K){let re=(0,$.RV)(k),Pe=(0,$.RV)(K);if(!re&&!Pe)return!0;if(re&&!Pe||!re&&Pe||(re=re,Pe=Pe,Pe.length!==re.length))return!1;for(let Be=0;Be<Pe.length;Be++){const Fe=Pe[Be],Je=re[Be];if(Fe.filename!==Je.filename||Fe.lineno!==Je.lineno||Fe.colno!==Je.colno||Fe.function!==Je.function)return!1}return!0}function ce(k,K){let re=k.fingerprint,Pe=K.fingerprint;if(!re&&!Pe)return!0;if(re&&!Pe||!re&&Pe)return!1;re=re,Pe=Pe;try{return re.join("")===Pe.join("")}catch{return!1}}function O(k){return k.exception&&k.exception.values&&k.exception.values[0]}var ue=t(8616);const D={},ee={};function ie(k,K){D[k]=D[k]||[],D[k].push(K)}function ye(){Object.keys(D).forEach(k=>{D[k]=void 0})}function be(k,K){ee[k]||(K(),ee[k]=!0)}function j(k,K){const re=k&&D[k];if(re)for(const Pe of re)try{Pe(K)}catch(Be){ue.T&&i.vF.error(`Error while triggering instrumentation handler.
Type: ${k}
Name: ${(0,$.qQ)(Pe)}
Error:`,Be)}}var w=t(1146);const W=1e3;let oe,ve,Se;function Ae(k){const K="dom";ie(K,k),be(K,Ie)}function Ie(){if(!w.j.document)return;const k=j.bind(null,"dom"),K=Ke(k,!0);w.j.document.addEventListener("click",K,!1),w.j.document.addEventListener("keypress",K,!1),["EventTarget","Node"].forEach(re=>{const Pe=w.j[re]&&w.j[re].prototype;!Pe||!Pe.hasOwnProperty||!Pe.hasOwnProperty("addEventListener")||((0,G.GS)(Pe,"addEventListener",function(Be){return function(Fe,Je,rn){if(Fe==="click"||Fe=="keypress")try{const pn=this,Qn=pn.__sentry_instrumentation_handlers__=pn.__sentry_instrumentation_handlers__||{},lt=Qn[Fe]=Qn[Fe]||{refCount:0};if(!lt.handler){const me=Ke(k);lt.handler=me,Be.call(this,Fe,me,rn)}lt.refCount++}catch{}return Be.call(this,Fe,Je,rn)}}),(0,G.GS)(Pe,"removeEventListener",function(Be){return function(Fe,Je,rn){if(Fe==="click"||Fe=="keypress")try{const pn=this,Qn=pn.__sentry_instrumentation_handlers__||{},lt=Qn[Fe];lt&&(lt.refCount--,lt.refCount<=0&&(Be.call(this,Fe,lt.handler,rn),lt.handler=void 0,delete Qn[Fe]),Object.keys(Qn).length===0&&delete pn.__sentry_instrumentation_handlers__)}catch{}return Be.call(this,Fe,Je,rn)}}))})}function We(k){if(k.type!==ve)return!1;try{if(!k.target||k.target._sentryId!==Se)return!1}catch{}return!0}function Le(k,K){return k!=="keypress"?!1:!K||!K.tagName?!0:!(K.tagName==="INPUT"||K.tagName==="TEXTAREA"||K.isContentEditable)}function Ke(k,K=!1){return re=>{if(!re||re._sentryCaptured)return;const Pe=Ze(re);if(Le(re.type,Pe))return;(0,G.my)(re,"_sentryCaptured",!0),Pe&&!Pe._sentryId&&(0,G.my)(Pe,"_sentryId",(0,d.eJ)());const Be=re.type==="keypress"?"input":re.type;We(re)||(k({event:re,name:Be,global:K}),ve=re.type,Se=Pe?Pe._sentryId:void 0),clearTimeout(oe),oe=w.j.setTimeout(()=>{Se=void 0,ve=void 0},W)}}function Ze(k){try{return k.target}catch{return null}}var ln=t(5917),Rn=t(5868);const un="__sentry_xhr_v3__";function dt(k){const K="xhr";ie(K,k),be(K,In)}function In(){if(!w.j.XMLHttpRequest)return;const k=XMLHttpRequest.prototype;k.open=new Proxy(k.open,{apply(K,re,Pe){const Be=(0,ln.zf)()*1e3,Fe=(0,Rn.Kg)(Pe[0])?Pe[0].toUpperCase():void 0,Je=Dn(Pe[1]);if(!Fe||!Je)return K.apply(re,Pe);re[un]={method:Fe,url:Je,request_headers:{}},Fe==="POST"&&Je.match(/sentry_key/)&&(re.__sentry_own_request__=!0);const rn=()=>{const pn=re[un];if(pn&&re.readyState===4){try{pn.status_code=re.status}catch{}const Qn={endTimestamp:(0,ln.zf)()*1e3,startTimestamp:Be,xhr:re};j("xhr",Qn)}};return"onreadystatechange"in re&&typeof re.onreadystatechange=="function"?re.onreadystatechange=new Proxy(re.onreadystatechange,{apply(pn,Qn,lt){return rn(),pn.apply(Qn,lt)}}):re.addEventListener("readystatechange",rn),re.setRequestHeader=new Proxy(re.setRequestHeader,{apply(pn,Qn,lt){const[me,ge]=lt,hn=Qn[un];return hn&&(0,Rn.Kg)(me)&&(0,Rn.Kg)(ge)&&(hn.request_headers[me.toLowerCase()]=ge),pn.apply(Qn,lt)}}),K.apply(re,Pe)}}),k.send=new Proxy(k.send,{apply(K,re,Pe){const Be=re[un];if(!Be)return K.apply(re,Pe);Pe[0]!==void 0&&(Be.body=Pe[0]);const Fe={startTimestamp:(0,ln.zf)()*1e3,xhr:re};return j("xhr",Fe),K.apply(re,Pe)}})}function Dn(k){if((0,Rn.Kg)(k))return k;try{return k.toString()}catch{}}var yn=t(9513);const Cn=yn.O;function Ct(){const k=Cn.chrome,K=k&&k.app&&k.app.runtime,re="history"in Cn&&!!Cn.history.pushState&&!!Cn.history.replaceState;return!K&&re}let mt;function ht(k){const K="history";ie(K,k),be(K,st)}function st(){if(!Ct())return;const k=w.j.onpopstate;w.j.onpopstate=function(...re){const Pe=w.j.location.href,Be=mt;if(mt=Pe,j("history",{from:Be,to:Pe}),k)try{return k.apply(this,re)}catch{}};function K(re){return function(...Pe){const Be=Pe.length>2?Pe[2]:void 0;if(Be){const Fe=mt,Je=String(Be);mt=Je,j("history",{from:Fe,to:Je})}return re.apply(this,Pe)}}(0,G.GS)(w.j.history,"pushState",K),(0,G.GS)(w.j.history,"replaceState",K)}const At=100;function St(k,K){const re=(0,se.KU)(),Pe=(0,se.rm)();if(!re)return;const{beforeBreadcrumb:Be=null,maxBreadcrumbs:Fe=At}=re.getOptions();if(Fe<=0)return;const rn={timestamp:(0,ln.lu)(),...k},pn=Be?(0,i.pq)(()=>Be(rn,K)):rn;pn!==null&&(re.emit&&re.emit("beforeAddBreadcrumb",pn,K),Pe.addBreadcrumb(pn,Fe))}function Pt(k){const K="console";ie(K,k),be(K,kt)}function kt(){"console"in yn.O&&i.Ow.forEach(function(k){k in yn.O.console&&(0,G.GS)(yn.O.console,k,function(K){return i.Z9[k]=K,function(...re){j("console",{args:re,level:k});const Be=i.Z9[k];Be&&Be.apply(yn.O.console,re)}})})}var Mt=t(2228);function Ht(k,K){const re="fetch";ie(re,k),be(re,()=>Bt(void 0,K))}function $t(k){const K="fetch-body-resolved";addHandler(K,k),maybeInstrument(K,()=>Bt(Ce))}function Bt(k,K=!1){K&&!(0,Mt.m7)()||(0,G.GS)(yn.O,"fetch",function(re){return function(...Pe){const{method:Be,url:Fe}=Ve(Pe),Je={args:Pe,fetchData:{method:Be,url:Fe},startTimestamp:(0,ln.zf)()*1e3};k||j("fetch",{...Je});const rn=new Error().stack;return re.apply(yn.O,Pe).then(async pn=>(k?k(pn):j("fetch",{...Je,endTimestamp:(0,ln.zf)()*1e3,response:pn}),pn),pn=>{throw j("fetch",{...Je,endTimestamp:(0,ln.zf)()*1e3,error:pn}),(0,Rn.bJ)(pn)&&pn.stack===void 0&&(pn.stack=rn,(0,G.my)(pn,"framesToPop",1)),pn})}})}async function dn(k,K){if(k&&k.body){const re=k.body,Pe=re.getReader(),Be=setTimeout(()=>{re.cancel().then(null,()=>{})},90*1e3);let Fe=!0;for(;Fe;){let Je;try{Je=setTimeout(()=>{re.cancel().then(null,()=>{})},5e3);const{done:rn}=await Pe.read();clearTimeout(Je),rn&&(K(),Fe=!1)}catch{Fe=!1}finally{clearTimeout(Je)}}clearTimeout(Be),Pe.releaseLock(),re.cancel().then(null,()=>{})}}function Ce(k){let K;try{K=k.clone()}catch{return}dn(K,()=>{triggerHandlers("fetch-body-resolved",{endTimestamp:timestampInSeconds()*1e3,response:k})})}function en(k,K){return!!k&&typeof k=="object"&&!!k[K]}function Un(k){return typeof k=="string"?k:k?en(k,"url")?k.url:k.toString?k.toString():"":""}function Ve(k){if(k.length===0)return{method:"GET",url:""};if(k.length===2){const[re,Pe]=k;return{url:Un(re),method:en(Pe,"method")?String(Pe.method).toUpperCase():"GET"}}const K=k[0];return{url:Un(K),method:en(K,"method")?String(K.method).toUpperCase():"GET"}}var gn=t(3322);const Pn=["fatal","error","warning","log","info","debug"];function wt(k){return k==="warn"?"warning":Pn.includes(k)?k:"log"}function ft(k){if(k!==void 0)return k>=400&&k<500?"warning":k>=500?"error":void 0}function Kt(k){if(!k)return{};const K=k.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!K)return{};const re=K[6]||"",Pe=K[8]||"";return{host:K[4],path:K[5],protocol:K[2],search:re,hash:Pe,relative:K[5]+re+Pe}}function ua(k){return k.split(/[?#]/,1)[0]}function Sa(k){return k.split(/\\?\//).filter(K=>K.length>0&&K!==",").length}function Ya(k){const{protocol:K,host:re,path:Pe}=k,Be=re&&re.replace(/^.*@/,"[filtered]:[filtered]@").replace(/(:80)$/,"").replace(/(:443)$/,"")||"";return`${K?`${K}://`:""}${Be}${Pe}`}var Na=t(7555),gt=t(6024);const Jt=1024,Zt="Breadcrumbs",ra=(k={})=>{const K={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...k};return{name:Zt,setup(re){K.console&&Pt(oa(re)),K.dom&&Ae(ja(re,K.dom)),K.xhr&&dt(Dt(re)),K.fetch&&Ht(da(re)),K.history&&ht(Ta(re)),K.sentry&&re.on("beforeSendEvent",ia(re))}}},Xt=(0,l._C)(ra);function ia(k){return function(re){(0,se.KU)()===k&&St({category:`sentry.${re.type==="transaction"?"transaction":"event"}`,event_id:re.event_id,level:re.level,message:(0,d.$X)(re)},{event:re})}}function ja(k,K){return function(Pe){if((0,se.KU)()!==k)return;let Be,Fe,Je=typeof K=="object"?K.serializeAttribute:void 0,rn=typeof K=="object"&&typeof K.maxStringLength=="number"?K.maxStringLength:void 0;rn&&rn>Jt&&(Na.T&&i.vF.warn(`\`dom.maxStringLength\` cannot exceed ${Jt}, but a value of ${rn} was configured. Sentry will use ${Jt} instead.`),rn=Jt),typeof Je=="string"&&(Je=[Je]);try{const Qn=Pe.event,lt=Pa(Qn)?Qn.target:Qn;Be=(0,gn.Hd)(lt,{keyAttrs:Je,maxStringLength:rn}),Fe=(0,gn.xE)(lt)}catch{Be="<unknown>"}if(Be.length===0)return;const pn={category:`ui.${Pe.name}`,message:Be};Fe&&(pn.data={"ui.component_name":Fe}),St(pn,{event:Pe.event,name:Pe.name,global:Pe.global})}}function oa(k){return function(re){if((0,se.KU)()!==k)return;const Pe={category:"console",data:{arguments:re.args,logger:"console"},level:wt(re.level),message:(0,r.gt)(re.args," ")};if(re.level==="assert")if(re.args[0]===!1)Pe.message=`Assertion failed: ${(0,r.gt)(re.args.slice(1)," ")||"console.assert"}`,Pe.data.arguments=re.args.slice(1);else return;St(Pe,{input:re.args,level:re.level})}}function Dt(k){return function(re){if((0,se.KU)()!==k)return;const{startTimestamp:Pe,endTimestamp:Be}=re,Fe=re.xhr[un];if(!Pe||!Be||!Fe)return;const{method:Je,url:rn,status_code:pn,body:Qn}=Fe,lt={method:Je,url:rn,status_code:pn},me={xhr:re.xhr,input:Qn,startTimestamp:Pe,endTimestamp:Be},ge=ft(pn);St({category:"xhr",data:lt,type:"http",level:ge},me)}}function da(k){return function(re){if((0,se.KU)()!==k)return;const{startTimestamp:Pe,endTimestamp:Be}=re;if(Be&&!(re.fetchData.url.match(/sentry_key/)&&re.fetchData.method==="POST"))if(re.error){const Fe=re.fetchData,Je={data:re.error,input:re.args,startTimestamp:Pe,endTimestamp:Be};St({category:"fetch",data:Fe,level:"error",type:"http"},Je)}else{const Fe=re.response,Je={...re.fetchData,status_code:Fe&&Fe.status},rn={input:re.args,response:Fe,startTimestamp:Pe,endTimestamp:Be},pn=ft(Je.status_code);St({category:"fetch",data:Je,type:"http",level:pn},rn)}}}function Ta(k){return function(re){if((0,se.KU)()!==k)return;let Pe=re.from,Be=re.to;const Fe=Kt(gt.jf.location.href);let Je=Pe?Kt(Pe):void 0;const rn=Kt(Be);(!Je||!Je.path)&&(Je=Fe),Fe.protocol===rn.protocol&&Fe.host===rn.host&&(Be=rn.relative),Fe.protocol===Je.protocol&&Fe.host===Je.host&&(Pe=Je.relative),St({category:"navigation",data:{from:Pe,to:Be}})}}function Pa(k){return!!k&&!!k.target}const qt=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","BroadcastChannel","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","SharedWorker","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],ea="BrowserApiErrors",Fa=(k={})=>{const K={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...k};return{name:ea,setupOnce(){K.setTimeout&&(0,G.GS)(gt.jf,"setTimeout",ga),K.setInterval&&(0,G.GS)(gt.jf,"setInterval",ga),K.requestAnimationFrame&&(0,G.GS)(gt.jf,"requestAnimationFrame",Ra),K.XMLHttpRequest&&"XMLHttpRequest"in gt.jf&&(0,G.GS)(XMLHttpRequest.prototype,"send",va);const re=K.eventTarget;re&&(Array.isArray(re)?re:qt).forEach(ca)}}},Ba=(0,l._C)(Fa);function ga(k){return function(...K){const re=K[0];return K[0]=(0,gt.LV)(re,{mechanism:{data:{function:(0,$.qQ)(k)},handled:!1,type:"instrument"}}),k.apply(this,K)}}function Ra(k){return function(K){return k.apply(this,[(0,gt.LV)(K,{mechanism:{data:{function:"requestAnimationFrame",handler:(0,$.qQ)(k)},handled:!1,type:"instrument"}})])}}function va(k){return function(...K){const re=this;return["onload","onerror","onprogress","onreadystatechange"].forEach(Be=>{Be in re&&typeof re[Be]=="function"&&(0,G.GS)(re,Be,function(Fe){const Je={mechanism:{data:{function:Be,handler:(0,$.qQ)(Fe)},handled:!1,type:"instrument"}},rn=(0,G.sp)(Fe);return rn&&(Je.mechanism.data.handler=(0,$.qQ)(rn)),(0,gt.LV)(Fe,Je)})}),k.apply(this,K)}}function ca(k){const K=gt.jf,re=K[k]&&K[k].prototype;!re||!re.hasOwnProperty||!re.hasOwnProperty("addEventListener")||((0,G.GS)(re,"addEventListener",function(Pe){return function(Be,Fe,Je){try{typeof Fe.handleEvent=="function"&&(Fe.handleEvent=(0,gt.LV)(Fe.handleEvent,{mechanism:{data:{function:"handleEvent",handler:(0,$.qQ)(Fe),target:k},handled:!1,type:"instrument"}}))}catch{}return Pe.apply(this,[Be,(0,gt.LV)(Fe,{mechanism:{data:{function:"addEventListener",handler:(0,$.qQ)(Fe),target:k},handled:!1,type:"instrument"}}),Je])}}),(0,G.GS)(re,"removeEventListener",function(Pe){return function(Be,Fe,Je){const rn=Fe;try{const pn=rn&&rn.__sentry_wrapped__;pn&&Pe.call(this,Be,pn,Je)}catch{}return Pe.call(this,Be,rn,Je)}}))}var ba=t(9639);let sa=null;function Oa(k){const K="error";ie(K,k),be(K,fa)}function fa(){sa=yn.O.onerror,yn.O.onerror=function(k,K,re,Pe,Be){return j("error",{column:Pe,error:Be,line:re,msg:k,url:K}),sa&&!sa.__SENTRY_LOADER__?sa.apply(this,arguments):!1},yn.O.onerror.__SENTRY_INSTRUMENTED__=!0}let na=null;function ma(k){const K="unhandledrejection";ie(K,k),be(K,ir)}function ir(){na=yn.O.onunhandledrejection,yn.O.onunhandledrejection=function(k){return j("unhandledrejection",k),na&&!na.__SENTRY_LOADER__?na.apply(this,arguments):!0},yn.O.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0}var pa=t(4966);const ha="GlobalHandlers",or=(k={})=>{const K={onerror:!0,onunhandledrejection:!0,...k};return{name:ha,setupOnce(){Error.stackTraceLimit=50},setup(re){K.onerror&&(vr(re),Ia("onerror")),K.onunhandledrejection&&(br(re),Ia("onunhandledrejection"))}}},Xa=(0,l._C)(or);function vr(k){Oa(K=>{const{stackParser:re,attachStacktrace:Pe}=wa();if((0,se.KU)()!==k||(0,gt.jN)())return;const{msg:Be,url:Fe,line:Je,column:rn,error:pn}=K,Qn=yt((0,pa.H7)(re,pn||Be,void 0,Pe,!1),Fe,Je,rn);Qn.level="error",(0,ba.r)(Qn,{originalException:pn,mechanism:{handled:!1,type:"onerror"}})})}function br(k){ma(K=>{const{stackParser:re,attachStacktrace:Pe}=wa();if((0,se.KU)()!==k||(0,gt.jN)())return;const Be=Va(K),Fe=(0,Rn.sO)(Be)?Ua(Be):(0,pa.H7)(re,Be,void 0,Pe,!0);Fe.level="error",(0,ba.r)(Fe,{originalException:Be,mechanism:{handled:!1,type:"onunhandledrejection"}})})}function Va(k){if((0,Rn.sO)(k))return k;try{if("reason"in k)return k.reason;if("detail"in k&&"reason"in k.detail)return k.detail.reason}catch{}return k}function Ua(k){return{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(k)}`}]}}}function yt(k,K,re,Pe){const Be=k.exception=k.exception||{},Fe=Be.values=Be.values||[],Je=Fe[0]=Fe[0]||{},rn=Je.stacktrace=Je.stacktrace||{},pn=rn.frames=rn.frames||[],Qn=isNaN(parseInt(Pe,10))?void 0:Pe,lt=isNaN(parseInt(re,10))?void 0:re,me=(0,Rn.Kg)(K)&&K.length>0?K:(0,gn.$N)();return pn.length===0&&pn.push({colno:Qn,filename:me,function:$.yF,in_app:!0,lineno:lt}),k}function Ia(k){Na.T&&i.vF.log(`Global Handler attached: ${k}`)}function wa(){const k=(0,se.KU)();return k&&k.getOptions()||{stackParser:()=>[],attachStacktrace:!1}}const Gt=(0,l._C)(()=>({name:"HttpContext",preprocessEvent(k){if(!gt.jf.navigator&&!gt.jf.location&&!gt.jf.document)return;const K=k.request&&k.request.url||gt.jf.location&&gt.jf.location.href,{referrer:re}=gt.jf.document||{},{userAgent:Pe}=gt.jf.navigator||{},Be={...k.request&&k.request.headers,...re&&{Referer:re},...Pe&&{"User-Agent":Pe}},Fe={...k.request,...K&&{url:K},headers:Be};k.request=Fe}}));function Ja(k,K,re=250,Pe,Be,Fe,Je){if(!Fe.exception||!Fe.exception.values||!Je||!(0,Rn.tH)(Je.originalException,Error))return;const rn=Fe.exception.values.length>0?Fe.exception.values[Fe.exception.values.length-1]:void 0;rn&&(Fe.exception.values=qa(xa(k,K,Be,Je.originalException,Pe,Fe.exception.values,rn,0),re))}function xa(k,K,re,Pe,Be,Fe,Je,rn){if(Fe.length>=re+1)return Fe;let pn=[...Fe];if((0,Rn.tH)(Pe[Be],Error)){Qa(Je,rn);const Qn=k(K,Pe[Be]),lt=pn.length;ka(Qn,Be,lt,rn),pn=xa(k,K,re,Pe[Be],Be,[Qn,...pn],Qn,lt)}return Array.isArray(Pe.errors)&&Pe.errors.forEach((Qn,lt)=>{if((0,Rn.tH)(Qn,Error)){Qa(Je,rn);const me=k(K,Qn),ge=pn.length;ka(me,`errors[${lt}]`,ge,rn),pn=xa(k,K,re,Qn,Be,[me,...pn],me,ge)}}),pn}function Qa(k,K){k.mechanism=k.mechanism||{type:"generic",handled:!0},k.mechanism={...k.mechanism,...k.type==="AggregateError"&&{is_exception_group:!0},exception_id:K}}function ka(k,K,re,Pe){k.mechanism=k.mechanism||{type:"generic",handled:!0},k.mechanism={...k.mechanism,type:"chained",source:K,exception_id:re,parent_id:Pe}}function qa(k,K){return k.map(re=>(re.value&&(re.value=(0,r.xv)(re.value,K)),re))}const dr="cause",Ma=5,Ha="LinkedErrors",cr=(k={})=>{const K=k.limit||Ma,re=k.key||dr;return{name:Ha,preprocessEvent(Pe,Be,Fe){const Je=Fe.getOptions();Ja(pa.K8,Je.stackParser,Je.maxValueLength,re,K,Pe,Be)}}},er=(0,l._C)(cr);function Ee(k){return[z(),M(),Ba(),Xt(),Xa(),er(),xe(),Gt()]}function Re(k={}){const K={defaultIntegrations:Ee(),release:typeof __SENTRY_RELEASE__=="string"?__SENTRY_RELEASE__:WINDOW.SENTRY_RELEASE&&WINDOW.SENTRY_RELEASE.id?WINDOW.SENTRY_RELEASE.id:void 0,autoSessionTracking:!0,sendClientReports:!0};return k.defaultIntegrations==null&&delete k.defaultIntegrations,{...K,...k}}function Xe(){const k=typeof WINDOW.window<"u"&&WINDOW;if(!k)return!1;const K=k.chrome?"chrome":"browser",re=k[K],Pe=re&&re.runtime&&re.runtime.id,Be=WINDOW.location&&WINDOW.location.href||"",Fe=["chrome-extension:","moz-extension:","ms-browser-extension:","safari-web-extension:"],Je=!!Pe&&WINDOW===WINDOW.top&&Fe.some(pn=>Be.startsWith(`${pn}//`)),rn=typeof k.nw<"u";return!!Pe&&!Je&&!rn}function xn(k={}){const K=Re(k);if(Xe()){consoleSandbox(()=>{console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")});return}DEBUG_BUILD&&(supportsFetch()||logger.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."));const re={...K,stackParser:stackParserFromStackParserOptions(K.stackParser||defaultStackParser),integrations:getIntegrationsToSetup(K),transport:K.transport||makeFetchTransport},Pe=initAndBind(BrowserClient,re);return K.autoSessionTracking&&et(),Pe}function Tn(k={}){if(!WINDOW.document){DEBUG_BUILD&&logger.error("Global document not defined in showReportDialog call");return}const K=getCurrentScope(),re=K.getClient(),Pe=re&&re.getDsn();if(!Pe){DEBUG_BUILD&&logger.error("DSN not configured for showReportDialog call");return}if(K&&(k.user={...K.getUser(),...k.user}),!k.eventId){const rn=lastEventId();rn&&(k.eventId=rn)}const Be=WINDOW.document.createElement("script");Be.async=!0,Be.crossOrigin="anonymous",Be.src=getReportDialogEndpoint(Pe,k),k.onLoad&&(Be.onload=k.onLoad);const{onClose:Fe}=k;if(Fe){const rn=pn=>{if(pn.data==="__sentry_reportdialog_closed__")try{Fe()}finally{WINDOW.removeEventListener("message",rn)}};WINDOW.addEventListener("message",rn)}const Je=WINDOW.document.head||WINDOW.document.body;Je?Je.appendChild(Be):DEBUG_BUILD&&logger.error("Not injecting report dialog. No injection point found in HTML")}function wn(){}function Sn(k){k()}function et(){if(typeof WINDOW.document>"u"){DEBUG_BUILD&&logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");return}startSession({ignoreDuration:!0}),captureSession(),addHistoryInstrumentationHandler(({from:k,to:K})=>{k!==void 0&&k!==K&&(startSession({ignoreDuration:!0}),captureSession())})}function Jn(k){const K=getClient();K&&K.captureUserFeedback(k)}}}]);
