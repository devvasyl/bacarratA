import{a as e,j as o,F as l,H as m}from"./app-9fcf97ec.js";import{a as c,P as p}from"./PageTemplate-a54fa130.js";import{u as n,C,G as h}from"./GuestLayout-595252ba.js";import{G as u,g}from"./GamesCarouseCard-b168caab.js";import{o as i}from"./dropdown-95653cd9.js";const F="/build/assets/raceheader-35cc5469.png",f="/build/assets/raceheadermobile-a6528eed.png",y="/build/assets/prev-6b0c659a.png",x="/build/assets/next-5cb04ddf.png",A=({cardItems:r})=>{const t=r[0],{isMobile:d}=n();return e(c,{item:t,index:0,children:e("div",{style:{marginTop:"60px",zIndex:500,position:"relative"},children:e(C,{autoplay:!1,rowPerCount:d?1:4,paging:!1,prevArrow:e("img",{src:y,alt:"prev"}),nextArrow:e("img",{src:x,alt:"next"}),children:t.cards.map((s,a)=>e("div",{className:"testimoni--wrapper",children:e(u,{card:s,index:a},a)}))})})})},w=i("div")(()=>({marginLeft:"auto",marginRight:"auto",paddingTop:"2.125rem",width:"100%",height:"100%"})),v=i("div")(({isMobile:r})=>({background:`url(${r?f:F})`,borderRadius:"10px",backgroundSize:"cover",backgroundRepeat:"no-repeat, no-repeat",padding:r?"1.25rem":"4.125rem",paddingLeft:r?"1.25rem":"4.125rem",margin:"0 25px","& p":{color:"#fff",lineHeight:"2.25rem",fontWeight:"900","&:nth-child(1)":{fontSize:r?"1.4rem":"2.25rem",paddingBottom:r?".5rem":"1.5rem"},"&:nth-child(2)":{fontSize:r?"1.4rem":"3.5rem",paddingBottom:r?".5rem":"2rem",color:"#5AA2FF"},"&:nth-child(3)":{fontSize:r?".7rem":".9rem",lineHeight:"1.2rem",fontWeight:"medium",color:"#9BA6D4",width:r?"70%":"30%","& span":{color:"#FFEF61"}}}})),R=()=>{const r=[{title:"Active Races",icon:g,imageWidth:"534px",imageHeight:"175px",perColumn:3,cards:[{title:"weekly card",cardColors:["#32CCEE","#3586FF"]},{title:"weekly tournament",cardColors:["#F9AD3C","#F93C56"]},{title:"tournament of the month",cardColors:["#3CF97C","#16B5D8"]},{title:"tournament of the day",cardColors:["#A63CF9","#6D3CF9"]},{title:"weekly card",cardColors:["#32CCEE","#3586FF"]},{title:"weekly tournament",cardColors:["#F9AD3C","#F93C56"]},{title:"tournament of the month",cardColors:["#3CF97C","#16B5D8"]},{title:"tournament of the day",cardColors:["#A63CF9","#6D3CF9"]},{title:"weekly card",cardColors:["#32CCEE","#3586FF"]},{title:"weekly tournament",cardColors:["#F9AD3C","#F93C56"]},{title:"tournament of the month",cardColors:["#3CF97C","#16B5D8"]},{title:"tournament of the day",cardColors:["#A63CF9","#6D3CF9"]}]}],{isMobile:t}=n();return o(l,{children:[e(m,{title:"Promotions"}),e(h,{children:o(p,{innerHeader:!0,children:[e(w,{children:o(v,{isMobile:t,children:[e("p",{children:"WEEKLY"}),e("p",{children:"TOURNAMENTS"}),o("p",{children:["Participate in numerous tournaments and complete againts other players for a hefty"," ",e("span",{children:"Prize Pool"})]})]})}),e(A,{cardItems:r})]})})]})};export{R as default};
