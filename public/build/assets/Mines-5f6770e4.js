import{a as e,j as i,H as x}from"./app-5a95df40.js";import{B as t,e as o,u as h,ad as g,f as m,G as f}from"./GuestLayout-06ca8965.js";import{P as u}from"./PageTemplate-433c2cb7.js";import{m as p,d as b,G as y}from"./GameLayout-0c156672.js";import{o as c}from"./dropdown-0d2fe5ad.js";import{G as r}from"./Grid-850cd057.js";import"./Select-fd27c3a0.js";import"./Grow-6ce3f537.js";import"./DataGrid-5bfe7777.js";import"./Tooltip-4aec9e13.js";const w="/build/assets/coin2-899be69b.svg",S="/build/assets/Bomb-cea8851a.svg",A=({multiplier:n,hits:s})=>e(t,{sx:{borderRadius:"0.3125rem",background:{xs:"#2E3665",md:"#1D234F"},width:{xs:"4.25rem",sm:"4.25rem",md:"4.25rem"},height:"2rem",display:"flex",justifyContent:"center",textAlign:"center",cursor:"pointer"},children:i(t,{sx:{width:"80%",display:"flex",flexDirection:"column",justifyContent:"center"},children:[i(o,{sx:{fontWeight:800,fontSize:".75rem",width:"100%"},children:[n,"x"]}),i(o,{sx:{fontWeight:800,fontSize:".5rem",width:"100%",color:"#A6B0DA"},children:[s," Hits"]})]})});let C={dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:4,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};const D=c("div")(()=>({height:{xs:"14.375rem",md:"26.25rem"},width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"})),a=c("div")(()=>({height:"3.125rem",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:"#296CD3",borderRadius:".3125rem",fontWeight:900,fontSize:"1.5rem",color:"#90A3C7",cursor:"pointer",transition:"all .1s ease-out","&:hover":{transform:"scale(1.3) ",background:"transparent"}})),F=new Array(25).fill(0),k=new Array(20).fill(0),j=()=>{var s;const{isMobile:n}=h();return e(t,{sx:{display:"flex",flexDirection:"column",minHeight:"100%"},children:i(D,{children:[e(t,{sx:{width:{xs:"13%",sm:"13%",md:"20%"},height:"100%",display:"flex",justifyContent:{xs:"flex-start",sm:"center",md:"center"},alignItems:"center"},children:i(t,{sx:{width:"3.2rem",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",height:"8rem"},children:[e(o,{sx:{color:"white",fontWeight:800,fontSize:{xs:".75rem",md:".875rem"},textAlign:"center"},children:"COINS"}),e("img",{src:w}),e(o,{sx:{color:"white",fontWeight:800,fontSize:{xs:".75rem",md:".875rem"},textAlign:"center"},children:"22"})]})}),i(t,{sx:{width:{xs:"70%",sm:"70%",md:"60%"},height:{xs:"15rem",md:"100%"},position:"relative",top:{xs:0,md:"-1.5rem"},backgroundColor:"#333965",py:{xs:".5rem",md:"1rem"},px:".3rem",display:"flex",flexDirection:"column",alignItems:"center"},children:[e(t,{sx:{width:{xs:"14rem",md:"16rem"}},children:e(r,{container:!0,spacing:1,children:n?k.map((l,d)=>e(r,{item:!0,xs:2.4,md:2.4,children:e(a,{children:"?"},d)})):F.map((l,d)=>e(r,{item:!0,xs:2.4,md:2.4,children:e(a,{children:"?"},d)}))})}),e(t,{sx:{display:{xs:"none",md:"block"},mt:"2.8125rem",width:"80%"},children:e(g,{...C,children:(s=p)==null?void 0:s.map((l,d)=>e(A,{multiplier:l.multiplier,hits:l.hits},d))})})]}),e(t,{sx:{width:{xs:"13%",sm:"13%",md:"20%"},height:"100%",display:"flex",justifyContent:{xs:"flex-end",sm:"center",md:"center"},alignItems:"center"},children:i(t,{sx:{width:"3.2rem",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"8.5rem"},children:[e(o,{sx:{color:"white",fontWeight:800,fontSize:{xs:".75rem",md:".875rem"},textAlign:"center"},children:"COINS"}),e("img",{src:S}),e(o,{sx:{color:"white",fontWeight:800,fontSize:{xs:".75rem",md:".875rem"},textAlign:"center"},children:"3"})]})})]})})},z=()=>e(t,{sx:{width:"100%",mt:"0.6875rem"},children:i(r,{container:!0,spacing:2,children:[e(r,{item:!0,md:6,xs:8,children:e(t,{sx:{width:"100%",height:"4rem",borderRadius:"0.625rem",background:"#333965",padding:".4125rem"},children:i(t,{sx:{height:"100%",width:"100%",display:"flex",justifyContent:"space-between",alignContent:"center"},children:[i(t,{sx:{width:"15%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e(t,{sx:{height:"46%",background:"#535D9D",borderRadius:"0.3125rem",width:"100%",color:"#A6B0DA",fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:"Min"}),e(t,{sx:{height:"46%",background:"#535D9D",borderRadius:"0.3125rem",width:"100%",color:"#A6B0DA",fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:"Max"})]}),e(t,{sx:{width:"65%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:e(t,{sx:{fontSize:"1rem",fontWeight:800,textAlign:"center"},children:"R$ 0.0000000"})}),i(t,{sx:{width:"15%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e(t,{sx:{height:"46%",background:"#535D9D",borderRadius:"0.3125rem",width:"100%",color:"#A6B0DA",fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:"1/2"}),e(t,{sx:{height:"46%",background:"#535D9D",borderRadius:"0.3125rem",width:"100%",color:"#A6B0DA",fontSize:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:"2x"})]})]})})}),e(r,{item:!0,md:6,xs:4,children:e(m,{sx:{width:"100%",height:"4rem",borderRadius:"0.625rem",background:"#333965",fontSize:"1.375rem",fontWeight:800,backgroundColor:"#3585ff",color:"#FFFFFF"},children:"BET"})}),i(r,{item:!0,xs:6,children:[" ",e(m,{endIcon:e(b,{sx:{fontSize:"1rem"}}),sx:{width:"100%",height:{xs:"4rem",md:"3rem"},borderRadius:"0.625rem",background:"#333965",fontSize:".875rem",fontWeight:800,backgroundColor:"#333965",color:"#A6B0DA",display:"flex",justifyContent:"space-between",textTransform:"none"},children:"Mines:1"})]}),i(r,{item:!0,xs:6,md:3,children:[" ",e(m,{sx:{width:"100%",height:{xs:"4rem",md:"3rem"},borderRadius:"0.625rem",background:"#333965",fontSize:".875rem",fontWeight:800,backgroundColor:"#3585ff",color:"#FFFFFF"},children:"Auto Pick"})]}),i(r,{item:!0,xs:3,sx:{display:{xs:"none",md:"block"}},children:[" ",e(m,{sx:{width:"100%",height:"3rem",borderRadius:"0.625rem",background:"#333965",fontSize:".875rem",fontWeight:800,backgroundColor:"#333965",color:"#FFFFFF"},children:"Clear Table"})]})]})}),$=()=>{const{isMobile:n}=h(),s=c("div")(()=>({background:"#1D2036",width:`${n?"99%":"98%"}`,marginLeft:"auto",marginRight:"auto",marginTop:`${n?"1.3rem":"2rem"}`,paddingTop:"2.125rem",paddingLeft:`${n?"0.8rem":"1rem"}`,paddingRight:`${n?"0":"1rem"}`,paddingBottom:"2.125rem",height:"80%",position:"relative"}));return i("div",{children:[e(x,{title:"Game Mines"}),e(f,{children:e(u,{innerHeader:!0,children:e(s,{children:e(y,{GameFrame:j,GameFrameText:"Mines",ButtonGrid:z,customFrameHeader:!0,innerHeader:!0,customFrameStyles:{background:"#1D234F",paddingBottom:"0 !important",paddingLeft:0,height:{xs:"15rem",md:"26.25rem"}}})})})})]})};export{$ as default};
