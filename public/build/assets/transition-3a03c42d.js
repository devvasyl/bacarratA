import{r as l,ag as y}from"./app-fd42b944.js";var we=Object.defineProperty,Fe=(e,t,n)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,G=(e,t,n)=>(Fe(e,typeof t!="symbol"?t+"":t,n),n);let Se=class{constructor(){G(this,"current",this.detect()),G(this,"handoffState","pending"),G(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},R=new Se,A=(e,t)=>{R.isServer?l.useEffect(e,t):l.useLayoutEffect(e,t)};function $(e){let t=l.useRef(e);return A(()=>{t.current=e},[e]),t}function Te(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function q(){let e=[],t=[],n={enqueue(r){t.push(r)},addEventListener(r,i,c,u){return r.addEventListener(i,c,u),n.add(()=>r.removeEventListener(i,c,u))},requestAnimationFrame(...r){let i=requestAnimationFrame(...r);return n.add(()=>cancelAnimationFrame(i))},nextFrame(...r){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...r))},setTimeout(...r){let i=setTimeout(...r);return n.add(()=>clearTimeout(i))},microTask(...r){let i={current:!0};return Te(()=>{i.current&&r[0]()}),n.add(()=>{i.current=!1})},add(r){return e.push(r),()=>{let i=e.indexOf(r);if(i>=0){let[c]=e.splice(i,1);c()}}},dispose(){for(let r of e.splice(0))r()},async workQueue(){for(let r of t.splice(0))await r()},style(r,i,c){let u=r.style.getPropertyValue(i);return Object.assign(r.style,{[i]:c}),this.add(()=>{Object.assign(r.style,{[i]:u})})}};return n}function re(){let[e]=l.useState(q);return l.useEffect(()=>()=>e.dispose(),[e]),e}let j=function(e){let t=$(e);return y.useCallback((...n)=>t.current(...n),[t])};function ie(){let[e,t]=l.useState(R.isHandoffComplete);return e&&R.isHandoffComplete===!1&&t(!1),l.useEffect(()=>{e!==!0&&t(!0)},[e]),l.useEffect(()=>R.handoff(),[]),e}function E(e,t,...n){if(e in t){let i=t[e];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,E),r}let le=Symbol();function Be(e,t=!0){return Object.assign(e,{[le]:t})}function ae(...e){let t=l.useRef(e);l.useEffect(()=>{t.current=e},[e]);let n=j(r=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return e.every(r=>r==null||(r==null?void 0:r[le]))?void 0:n}function oe(...e){return e.filter(Boolean).join(" ")}var se=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(se||{}),S=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(S||{});function ue({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:c=!0,name:u}){let s=ce(t,e);if(c)return H(s,n,r,u);let o=i??0;if(o&2){let{static:f=!1,...d}=s;if(f)return H(d,n,r,u)}if(o&1){let{unmount:f=!0,...d}=s;return E(f?0:1,{[0](){return null},[1](){return H({...d,hidden:!0,style:{display:"none"}},n,r,u)}})}return H(s,n,r,u)}function H(e,t={},n,r){var i;let{as:c=n,children:u,refName:s="ref",...o}=K(e,["unmount","static"]),f=e.ref!==void 0?{[s]:e.ref}:{},d=typeof u=="function"?u(t):u;o.className&&typeof o.className=="function"&&(o.className=o.className(t));let b={};if(t){let v=!1,m=[];for(let[a,h]of Object.entries(t))typeof h=="boolean"&&(v=!0),h===!0&&m.push(a);v&&(b["data-headlessui-state"]=m.join(" "))}if(c===l.Fragment&&Object.keys(te(o)).length>0){if(!l.isValidElement(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(a=>`  - ${a}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));let v=oe((i=d.props)==null?void 0:i.className,o.className),m=v?{className:v}:{};return l.cloneElement(d,Object.assign({},ce(d.props,te(K(o,["ref"]))),b,f,Ce(d.ref,f.ref),m))}return l.createElement(c,Object.assign({},K(o,["ref"]),c!==l.Fragment&&f,c!==l.Fragment&&b),d)}function Ce(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function ce(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(r[i])):t[i]=r[i];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](i,...c){let u=n[r];for(let s of u){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;s(i,...c)}}});return t}function J(e){var t;return Object.assign(l.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function te(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function K(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let Z=l.createContext(null);Z.displayName="OpenClosedContext";var F=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(F||{});function fe(){return l.useContext(Z)}function Oe({value:e,children:t}){return y.createElement(Z.Provider,{value:e},t)}function de(){let e=l.useRef(!1);return A(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function je(e=0){let[t,n]=l.useState(e),r=l.useCallback(s=>n(o=>o|s),[t]),i=l.useCallback(s=>Boolean(t&s),[t]),c=l.useCallback(s=>n(o=>o&~s),[n]),u=l.useCallback(s=>n(o=>o^s),[n]);return{flags:t,addFlag:r,hasFlag:i,removeFlag:c,toggleFlag:u}}function $e(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function X(e,...t){e&&t.length>0&&e.classList.add(...t)}function _(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Pe(e,t){let n=q();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[c,u]=[r,i].map(s=>{let[o=0]=s.split(",").filter(Boolean).map(f=>f.includes("ms")?parseFloat(f):parseFloat(f)*1e3).sort((f,d)=>d-f);return o});if(c+u!==0){let s=n.addEventListener(e,"transitionend",o=>{o.target===o.currentTarget&&(t(),s())})}else t();return n.add(()=>t()),n.dispose}function Re(e,t,n,r){let i=n?"enter":"leave",c=q(),u=r!==void 0?$e(r):()=>{};i==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let s=E(i,{enter:()=>t.enter,leave:()=>t.leave}),o=E(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),f=E(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return _(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),X(e,...s,...f),c.nextFrame(()=>{_(e,...f),X(e,...o),Pe(e,()=>(_(e,...s),X(e,...t.entered),u()))}),c.dispose}function xe({container:e,direction:t,classes:n,onStart:r,onStop:i}){let c=de(),u=re(),s=$(t);A(()=>{let o=q();u.add(o.dispose);let f=e.current;if(f&&s.current!=="idle"&&c.current)return o.dispose(),r.current(s.current),o.add(Re(f,n.current,s.current==="enter",()=>{o.dispose(),i.current(s.current)})),o.dispose},[t])}function O(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let M=l.createContext(null);M.displayName="TransitionContext";var Ne=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Ne||{});function ke(){let e=l.useContext(M);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Le(){let e=l.useContext(D);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let D=l.createContext(null);D.displayName="NestingContext";function I(e){return"children"in e?I(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function me(e,t){let n=$(e),r=l.useRef([]),i=de(),c=re(),u=j((m,a=S.Hidden)=>{let h=r.current.findIndex(({el:p})=>p===m);h!==-1&&(E(a,{[S.Unmount](){r.current.splice(h,1)},[S.Hidden](){r.current[h].state="hidden"}}),c.microTask(()=>{var p;!I(r)&&i.current&&((p=n.current)==null||p.call(n))}))}),s=j(m=>{let a=r.current.find(({el:h})=>h===m);return a?a.state!=="visible"&&(a.state="visible"):r.current.push({el:m,state:"visible"}),()=>u(m,S.Unmount)}),o=l.useRef([]),f=l.useRef(Promise.resolve()),d=l.useRef({enter:[],leave:[],idle:[]}),b=j((m,a,h)=>{o.current.splice(0),t&&(t.chains.current[a]=t.chains.current[a].filter(([p])=>p!==m)),t==null||t.chains.current[a].push([m,new Promise(p=>{o.current.push(p)})]),t==null||t.chains.current[a].push([m,new Promise(p=>{Promise.all(d.current[a].map(([g,w])=>w)).then(()=>p())})]),a==="enter"?f.current=f.current.then(()=>t==null?void 0:t.wait.current).then(()=>h(a)):h(a)}),v=j((m,a,h)=>{Promise.all(d.current[a].splice(0).map(([p,g])=>g)).then(()=>{var p;(p=o.current.shift())==null||p()}).then(()=>h(a))});return l.useMemo(()=>({children:r,register:s,unregister:u,onStart:b,onStop:v,wait:f,chains:d}),[s,u,r,b,v,d,f])}function He(){}let Ae=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ne(e){var t;let n={};for(let r of Ae)n[r]=(t=e[r])!=null?t:He;return n}function qe(e){let t=l.useRef(ne(e));return l.useEffect(()=>{t.current=ne(e)},[e]),t}let Me="div",pe=se.RenderStrategy,he=J(function(e,t){let{beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:c,enter:u,enterFrom:s,enterTo:o,entered:f,leave:d,leaveFrom:b,leaveTo:v,...m}=e,a=l.useRef(null),h=ae(a,t),p=m.unmount?S.Unmount:S.Hidden,{show:g,appear:w,initial:ve}=ke(),[T,U]=l.useState(g?"visible":"hidden"),ee=Le(),{register:x,unregister:N}=ee,B=l.useRef(null);l.useEffect(()=>x(a),[x,a]),l.useEffect(()=>{if(p===S.Hidden&&a.current){if(g&&T!=="visible"){U("visible");return}return E(T,{hidden:()=>N(a),visible:()=>x(a)})}},[T,a,x,N,g,p]);let V=$({enter:O(u),enterFrom:O(s),enterTo:O(o),entered:O(f),leave:O(d),leaveFrom:O(b),leaveTo:O(v)}),k=qe({beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:c}),Y=ie();l.useEffect(()=>{if(Y&&T==="visible"&&a.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[a,T,Y]);let Q=ve&&!w,ge=(()=>!Y||Q||B.current===g?"idle":g?"enter":"leave")(),P=je(0),be=j(C=>E(C,{enter:()=>{P.addFlag(F.Opening),k.current.beforeEnter()},leave:()=>{P.addFlag(F.Closing),k.current.beforeLeave()},idle:()=>{}})),ye=j(C=>E(C,{enter:()=>{P.removeFlag(F.Opening),k.current.afterEnter()},leave:()=>{P.removeFlag(F.Closing),k.current.afterLeave()},idle:()=>{}})),L=me(()=>{U("hidden"),N(a)},ee);xe({container:a,classes:V,direction:ge,onStart:$(C=>{L.onStart(a,C,be)}),onStop:$(C=>{L.onStop(a,C,ye),C==="leave"&&!I(L)&&(U("hidden"),N(a))})}),l.useEffect(()=>{!Q||(p===S.Hidden?B.current=null:B.current=g)},[g,Q,T]);let W=m,Ee={ref:h};return w&&g&&R.isServer&&(W={...W,className:oe(m.className,...V.current.enter,...V.current.enterFrom)}),y.createElement(D.Provider,{value:L},y.createElement(Oe,{value:E(T,{visible:F.Open,hidden:F.Closed})|P.flags},ue({ourProps:Ee,theirProps:W,defaultTag:Me,features:pe,visible:T==="visible",name:"Transition.Child"})))}),z=J(function(e,t){let{show:n,appear:r=!1,unmount:i,...c}=e,u=l.useRef(null),s=ae(u,t);ie();let o=fe();if(n===void 0&&o!==null&&(n=(o&F.Open)===F.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[f,d]=l.useState(n?"visible":"hidden"),b=me(()=>{d("hidden")}),[v,m]=l.useState(!0),a=l.useRef([n]);A(()=>{v!==!1&&a.current[a.current.length-1]!==n&&(a.current.push(n),m(!1))},[a,n]);let h=l.useMemo(()=>({show:n,appear:r,initial:v}),[n,r,v]);l.useEffect(()=>{if(n)d("visible");else if(!I(b))d("hidden");else{let g=u.current;if(!g)return;let w=g.getBoundingClientRect();w.x===0&&w.y===0&&w.width===0&&w.height===0&&d("hidden")}},[n,b]);let p={unmount:i};return y.createElement(D.Provider,{value:b},y.createElement(M.Provider,{value:h},ue({ourProps:{...p,as:l.Fragment,children:y.createElement(he,{ref:s,...p,...c})},theirProps:{},defaultTag:l.Fragment,features:pe,visible:f==="visible",name:"Transition"})))}),De=J(function(e,t){let n=l.useContext(M)!==null,r=fe()!==null;return y.createElement(y.Fragment,null,!n&&r?y.createElement(z,{ref:t,...e}):y.createElement(he,{ref:t,...e}))}),Ve=Object.assign(z,{Child:De,Root:z});export{fe as C,Be as T,J as V,ue as X,Ve as Y,A as a,$ as b,F as d,de as f,se as j,ie as l,q as m,j as o,re as p,R as s,Te as t,E as u,ae as y};
