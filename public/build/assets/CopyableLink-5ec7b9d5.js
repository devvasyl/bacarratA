import{j as n,a as o}from"./app-1171afa7.js";import{Q as s}from"./GuestLayout-01950070.js";import{l}from"./link-712e60d6.js";import{o as a}from"./dropdown-4bf85ea6.js";const d=a("div")(({splitted:i,size:e,background:p})=>({border:"1px solid #ABB7E2",borderRadius:"15px",position:"relative",background:p,height:"40px",fontSize:e||"16px","& p":{overflow:"hidden",paddingLeft:"13px",display:"flex",alignItems:"center",height:"100%",whiteSpace:"nowrap","& span":{"&:nth-child(1)":{color:i&&"#F93C56"}}}})),m=({text:i,addon:e,background:p,size:t})=>{const r=(i==null?void 0:i.split("_"))||[];return n(d,{splitted:r[1],size:t,background:p,onClick:()=>{navigator.clipboard.writeText(i),s.info("Copied to clipboard")},children:[n("p",{children:[o("span",{children:r[0]}),r[1]&&o("span",{style:{color:"#4792FF"},children:"_"}),o("span",{children:r[1]})]}),e&&o("div",{style:{background:"#4792FF",position:"absolute",top:0,right:"0",height:"100%",width:"50px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"0px 15px 15px 0px",cursor:"pointer"},children:o("img",{src:l,alt:""})})]})};export{m as C};
