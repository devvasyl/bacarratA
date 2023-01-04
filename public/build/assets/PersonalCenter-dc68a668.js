import{j as n,F as h,a as e,H as m}from"./app-0f969b83.js";import{P as y,a as u}from"./PageTemplate-32b09271.js";import{u as f,G as b,c as p,b as t,ad as w,ae as S,a as x}from"./GuestLayout-01c8b0ae.js";import{l as z,T as c}from"./TextWithBg-30e3995c.js";import{l as W}from"./link-712e60d6.js";import{o as d}from"./dropdown-3603c896.js";const A="/build/assets/userIcon-69fc7353.svg",B="/build/assets/useravatarwithbg-9f637a75.png",I="/build/assets/walletmini-27de28c2.svg",C="/build/assets/settings-5defa9c5.svg",T=d("div")(({isMobile:i})=>({margin:"0 auto",paddingTop:"2.125rem",width:"100%",height:"100%",position:"relative",zIndex:100})),r=d("div")(({padding:i,isMobile:o})=>({zIndex:1e3,background:"linear-gradient(119.77deg, #272C56 2.99%, #444AC7 100%)",borderRadius:"10px",width:o?"100%":"30%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:i||"20px"})),g=d("div")(()=>({width:"100%","& input[type='range']":{overflow:"hidden",borderRadius:"10px",WebkitAppearance:"none",backgroundColor:"#172C4F"},"& input[type='range']::-webkit-slider-runnable-track":{height:"20px",WebkitAppearance:"none",color:"blue",marginTop:"-1px"},"& input[type='range']::-webkit-slider-thumb":{width:"10px",WebkitAppearance:"none",height:"10px",cursor:"ew-resize",background:"#434343",display:"none"}})),a=({icon:i,text:o,width:l,height:s})=>e("div",{style:{background:"#191C51",borderRadius:"10px",padding:"5px 10px",display:"flex",alignItems:"center",cursor:"pointer",justifyContent:"center",width:l||"100%",height:s||"auto"},children:n(p,{alignItems:"center",gap:"7px",children:[e("img",{src:i,alt:"",style:{height:"15px"}}),e(t,{type:"p",text:o,fontSize:"14px",color:"#A0ABDB",fontWeight:"500"})]})}),j=()=>{const{isMobile:i}=f();return n(h,{children:[e(m,{title:"Personal Center"}),e(b,{children:e(y,{innerHeader:!0,children:e(T,{children:e(u,{item:{title:"Personal Center",icon:A,margin:"10px"},index:0,page:"personal-center",children:n(p,{alignItems:"stretch",gap:"20px",direction:i?"column":"row",margin:i?"60px 0 0":"60px 0",children:[n(r,{isMobile:i,children:[e(t,{type:"p",text:"Personal Information",fontSize:"18px",color:"white",fontWeight:"700",paddingBottom:"20px"}),n(p,{gap:"30px",alignItems:"center",margin:"0 0 20px 0",children:[e("img",{src:B,alt:""}),n("div",{style:{textAlign:"center"},children:[e(t,{type:"p",text:"User323123131313",fontSize:"15px",color:"white",fontWeight:"700",paddingBottom:"10px"}),e(a,{icon:W,text:"Copy"}),e(t,{type:"p",text:"Change Avatar",fontSize:"14px",color:"#A0ABDB"})]})]}),e(a,{icon:C,text:"Change Nickname",width:"80%",height:"40px"}),e("br",{}),e(a,{icon:w,height:"40px",text:"Game History",width:"80%"})]}),n(r,{padding:"20px 20px 0 20px",isMobile:i,children:[e(t,{type:"p",text:"My VIP Level",fontSize:"18px",color:"white",fontWeight:"700",paddingBottom:"20px"}),e("div",{style:{textAlign:"center"},children:e("img",{src:z,alt:""})}),n(p,{justifyContent:"space-between",width:"80%",children:[e(t,{type:"p",text:"Deposit Amount",fontSize:"15px",fontWeight:"bold"}),n(p,{alignItems:"center",gap:"3px",children:[e(t,{type:"p",text:"R$0",fontSize:"15px",fontWeight:"bold"}),e("small",{children:"/"}),e(t,{type:"p",text:"R$100",fontSize:"15px",fontWeight:"bold",color:"#64A2FF"})]})]}),e(g,{style:{width:"80%",marginTop:"10px"},children:n(p,{alignItems:"center",gap:"6px",children:[e("input",{type:"range",max:100,min:0,value:10,style:{width:"100%"}}),e(t,{text:"0%",type:"p",fontWeight:"bold"})]})}),e("br",{}),n(p,{justifyContent:"space-between",width:"80%",children:[e(t,{type:"p",text:"Bet amount",fontSize:"15px",fontWeight:"bold"}),n(p,{alignItems:"center",gap:"3px",children:[e(t,{type:"p",text:"R$0",fontSize:"15px",fontWeight:"bold"}),e("small",{children:"/"}),e(t,{type:"p",text:"R$100",fontSize:"15px",fontWeight:"bold",color:"#64A2FF"})]})]}),e(g,{style:{width:"80%",marginTop:"10px"},children:n(p,{alignItems:"center",gap:"6px",children:[e("input",{type:"range",max:100,min:0,value:10,style:{width:"100%"}}),e(t,{text:"0%",type:"p",fontWeight:"bold"})]})}),e(t,{type:"p",text:"View Rank System",color:"#A0ABDB",fontSize:"13px",paddingTop:"20px",cursor:"pointer"})]}),n(r,{padding:"20px 40px 0 40px",isMobile:i,children:[e(t,{type:"p",text:"Wallets",fontSize:"18px",color:"white",fontWeight:"700",paddingBottom:"20px"}),e(t,{type:"p",text:"R$",fontSize:"18px",color:"white",fontWeight:"700",paddingBottom:"20px"}),e(t,{type:"p",text:"0",fontSize:"28px",color:"#64A2FF",fontWeight:"700",paddingBottom:"20px"}),n(p,{justifyContent:"space-between",alignItems:"center",width:"100%",gap:"20px",children:[e(c,{bg:"#191C51",primaryText:"BET",secondaryText:"R$ 50",secondaryTextSize:"14px",primaryTextSize:"12px",whiteSpace:"nowrap",padding:i?"10px 20px":"10px 45px"}),e(c,{secondaryTextSize:"14px",primaryTextSize:"12px",padding:"10px 45px",bg:"#191C51",primaryText:"DEPOSIT",secondaryText:"R$ 0"})]}),e(S,{bg:"#A0ABDB",margin:"20px",style:{width:"100%"}}),n(p,{width:"100%",gap:"20px",children:[e(x,{text:"Deposit",background:"#5484FF",width:"100%",padding:"15px 20px",addon:I}),e(x,{text:"Withdraw",background:"#F93967",width:"100%",padding:"15px 20px"})]}),e(t,{type:"p",text:"History",color:"#A0ABDB",fontSize:"13px",padding:"10px",cursor:"pointer"})]})]})})})})})]})};export{j as default};
