import{r as n,b as j,j as o,F as y,a as e,H as w,aS as g,aT as x,s as t}from"./app-d45d5a46.js";import{P}from"./PageTemplate-ef15a3ad.js";import{l as B,c as G,b as S,a as c,d as T,g as L,e as I,f as H,h as R,u as m,T as z}from"./32cards-b217a3bd.js";import{s as A}from"./search-48b450a8.js";const F="/build/assets/ruletika-66abd5aa.png",D="/build/assets/andarbar-ddf7c52b.png",W="/build/assets/blackjcklive-75652fd8.png",u="/build/assets/goldblackjack-3e4db6cd.png",E="/build/assets/craps-66084fda.png",M="/build/assets/sniondrive-40484283.png",N="/build/assets/dragontigerlive-c41c9be5.png",O=t("div")(({isMobile:a})=>({display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:a?"column":"row",margin:"20px 0",padding:"0 20px"})),U=t("div")(({isMobile:a})=>({display:"flex",alignItems:"center",gap:"20px",width:a?"100%":"auto",marginBottom:a&&"20px"})),V=t("div")(({isMobile:a})=>({width:a&&"100%"}));function X(a){const i=[{title:"Live Casino",icon:B,imageWidth:"534px",imageHeight:"175px",margin:"5px",perColumn:5,page:"home",countOnMobile:4,hoverEffect:"overlay",images:[{image:G,link:"/games/great-rhyno",addon:"New",addonColor:"#F93C56",title:"Crazy Coin Flip"},{image:S,link:"/games/aztech-magic",addon:"HOT",addonColor:"#F9C43C",title:"Blackjack Magic"},{image:c,link:"/games/sweet-bonanza",addon:null,addonColor:null,title:"Casino Hold'em"},{image:T,link:"/games/lightning-blackjck",addon:null,addonColor:null,title:"Lightning Blackjack"},{image:L,link:"/games/goldbar-roulette",addon:null,addonColor:null,title:"Goldbar Roulette"},{image:I,link:"/games/golden-wealth",addon:null,addonColor:null,title:"Golden Wealth"},{image:H,link:"/games/wheel",addon:null,addonColor:null,title:"Dragon Tiger Live"},{image:R,link:"/games/bet-on-number",addon:null,addonColor:null,title:"Bet on Number"},{image:m,link:"/games/ultimate-sic-bo",addon:null,addonColor:null,title:"Ultimate Sic Bo"},{image:u,link:"/games/goldblackjack",addon:null,addonColor:null,title:"Gold Blackjack"},{image:z,link:"/stairs",addon:null,addonColor:null,title:"32 Cards"},{image:F,link:"/games/ruletika",addon:null,addonColor:null,title:"Ruletika"},{image:D,link:"/games/andarbar",addon:null,addonColor:null,title:"Andar Bahar"},{image:W,link:"/games/blackjcklive",addon:null,addonColor:null,title:"Blackjack Live"},{image:u,link:"/games/goldblackjack",addon:null,addonColor:null,title:"Gold Blackjack"},{image:E,link:"/games/craps",addon:null,addonColor:null,title:"Craps"},{image:M,link:"/games/sniondrive",addon:null,addonColor:null,title:"Snion Drive"},{image:c,link:"/sweet-bonanza",addon:null,addonColor:null,title:"Sweet Bonanza"},{image:N,link:"/games/dragontigerlive",addon:null,addonColor:null,title:"Dragon Tiger Live"},{image:m,link:"/games/ultimatesicbo",addon:null,addonColor:null,title:"Ultimate Sic Bo"}]}],[k,p]=n.exports.useState(i),[C,b]=n.exports.useState("Game Provider"),[h,v]=n.exports.useState("Game Type"),{isMobile:l}=j();return o(y,{children:[e(w,{title:"Live Casino"}),e(P,{innerHeader:!0,homeCarousel:!0,gridWithHeader:k,children:o(O,{isMobile:l,children:[o(U,{isMobile:l,children:[e(g,{items:["Pragmatic Play","Evolution Gaming","Amatic Gaming","Pragmatic Play","Evolution Gaming","Amatic Gaming","Pragmatic Play","Evolution Gaming","Amatic Gaming","Game Provider"],value:C,setValue:b}),e(g,{items:["Bacakrat","Roulette","Poker","Bacakrat","Roulette","Poker","Bacakrat","Roulette","Poker","Bacakrat","Roulette","Poker","Game Type"],value:h,setValue:v})]}),e(V,{isMobile:l,children:e(x,{addon:e("img",{src:A,alt:"search"}),type:"phone",placeholder:"Search for games",bg:"#3A4072",br:"10px",onChange:r=>{const f=i.map(d=>({...d,images:d.images.filter(s=>s.link.toLowerCase().includes(r.target.value.toLowerCase())||s.image.toLowerCase().includes(r.target.value.toLowerCase()))}));p(f)}})})]})})]})}export{X as default};
