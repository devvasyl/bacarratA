import{r as u,z as J,y as M,h as N,a as O,_ as m,b1 as Q,b2 as U,b3 as L}from"./app-6fc95e32.js";const V=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function p(l){return`scale(${l}, ${l**2})`}const X={entering:{opacity:1,transform:p(1)},entered:{opacity:1,transform:"none"}},h=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),_=u.forwardRef(function(y,j){const{addEndListener:x,appear:v=!0,children:f,easing:T,in:R,onEnter:b,onEntered:D,onEntering:G,onExit:w,onExited:H,onExiting:C,style:E,timeout:o="auto",TransitionComponent:F=Q}=y,P=J(y,V),A=u.useRef(),g=u.useRef(),r=M(),d=u.useRef(null),$=N(d,f.ref,j),s=t=>e=>{if(t){const i=d.current;e===void 0?t(i):t(i,e)}},z=s(G),S=s((t,e)=>{U(t);const{duration:i,delay:c,easing:n}=L({style:E,timeout:o,easing:T},{mode:"enter"});let a;o==="auto"?(a=r.transitions.getAutoHeightDuration(t.clientHeight),g.current=a):a=i,t.style.transition=[r.transitions.create("opacity",{duration:a,delay:c}),r.transitions.create("transform",{duration:h?a:a*.666,delay:c,easing:n})].join(","),b&&b(t,e)}),W=s(D),K=s(C),k=s(t=>{const{duration:e,delay:i,easing:c}=L({style:E,timeout:o,easing:T},{mode:"exit"});let n;o==="auto"?(n=r.transitions.getAutoHeightDuration(t.clientHeight),g.current=n):n=e,t.style.transition=[r.transitions.create("opacity",{duration:n,delay:i}),r.transitions.create("transform",{duration:h?n:n*.666,delay:h?i:i||n*.333,easing:c})].join(","),t.style.opacity=0,t.style.transform=p(.75),w&&w(t)}),q=s(H),B=t=>{o==="auto"&&(A.current=setTimeout(t,g.current||0)),x&&x(d.current,t)};return u.useEffect(()=>()=>{clearTimeout(A.current)},[]),O(F,m({appear:v,in:R,nodeRef:d,onEnter:S,onEntered:W,onEntering:z,onExit:k,onExited:q,onExiting:K,addEndListener:B,timeout:o==="auto"?null:o},P,{children:(t,e)=>u.cloneElement(f,m({style:m({opacity:0,transform:p(.75),visibility:t==="exited"&&!R?"hidden":void 0},X[t],E,f.props.style),ref:$},e))}))});_.muiSupportAuto=!0;const Z=_;export{Z as G};