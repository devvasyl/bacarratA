import{r as u,v as B,A as M,ac as N,a as O,_ as m,aJ as Q,aK as U,aL as w}from"./app-8c7a9aa0.js";const V=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function x(l){return`scale(${l}, ${l**2})`}const X={entering:{opacity:1,transform:x(1)},entered:{opacity:1,transform:"none"}},p=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),_=u.exports.forwardRef(function(h,j){const{addEndListener:y,appear:D=!0,children:f,easing:T,in:R,onEnter:A,onEntered:G,onEntering:H,onExit:L,onExited:C,onExiting:F,style:E,timeout:o="auto",TransitionComponent:P=Q}=h,$=B(h,V),v=u.exports.useRef(),g=u.exports.useRef(),r=M(),c=u.exports.useRef(null),b=N(c,f.ref,j),s=t=>e=>{if(t){const i=c.current;e===void 0?t(i):t(i,e)}},K=s(H),S=s((t,e)=>{U(t);const{duration:i,delay:d,easing:n}=w({style:E,timeout:o,easing:T},{mode:"enter"});let a;o==="auto"?(a=r.transitions.getAutoHeightDuration(t.clientHeight),g.current=a):a=i,t.style.transition=[r.transitions.create("opacity",{duration:a,delay:d}),r.transitions.create("transform",{duration:p?a:a*.666,delay:d,easing:n})].join(","),A&&A(t,e)}),W=s(G),z=s(F),J=s(t=>{const{duration:e,delay:i,easing:d}=w({style:E,timeout:o,easing:T},{mode:"exit"});let n;o==="auto"?(n=r.transitions.getAutoHeightDuration(t.clientHeight),g.current=n):n=e,t.style.transition=[r.transitions.create("opacity",{duration:n,delay:i}),r.transitions.create("transform",{duration:p?n:n*.666,delay:p?i:i||n*.333,easing:d})].join(","),t.style.opacity=0,t.style.transform=x(.75),L&&L(t)}),k=s(C),q=t=>{o==="auto"&&(v.current=setTimeout(t,g.current||0)),y&&y(c.current,t)};return u.exports.useEffect(()=>()=>{clearTimeout(v.current)},[]),O(P,m({appear:D,in:R,nodeRef:c,onEnter:S,onEntered:W,onEntering:K,onExit:J,onExited:k,onExiting:z,addEndListener:q,timeout:o==="auto"?null:o},$,{children:(t,e)=>u.exports.cloneElement(f,m({style:m({opacity:0,transform:x(.75),visibility:t==="exited"&&!R?"hidden":void 0},X[t],E,f.props.style),ref:b},e))}))});_.muiSupportAuto=!0;const Z=_;export{Z as G};
