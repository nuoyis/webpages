import{_ as f,n as m,i as y,c as e,a as s,F as u,f as b,u as r,t as n,b as c,w as d,r as x,o as a,d as _,p as k,h as w}from"./index-BvuPOPBZ.js";const o=t=>(k("data-v-56f739b0"),t=t(),w(),t),I={class:"nuoyis-history"},S=o(()=>s("div",{class:"nuoyis-biaoti"},[s("h1",null,"建站历史 - 一个建站流水线"),s("span",{class:"nuoyis-biaoti-underline"})],-1)),g={id:"line"},B=o(()=>s("div",{class:"focus"},null,-1)),N=o(()=>s("div",{class:"focus"},null,-1)),V=o(()=>s("div",null,"更长的路，正等着我继续探索...",-1)),C={__name:"history",setup(t){const{nuostatus:F,nuodata:p,get:h,post:T}=m("https://server-api.nuoyis.net/history.json"),{nowdate:j,currentTime:v}=y();return h(),(q,D)=>{const i=x("router-link");return a(),e(u,null,[s("div",I,[S,s("ul",g,[(a(!0),e(u,null,b(r(p),l=>(a(),e("li",null,[B,s("div",null,n(l.date),1),s("div",null,n(l.description),1)]))),256)),s("li",null,[N,s("div",null,n(r(v))+"以后",1),V])])]),s("div",null,[c(i,{to:"/aboutintroduce",class:"routerbtn"},{default:d(()=>[_("上一页(站长介绍)")]),_:1}),c(i,{to:"/youlian",class:"routerbtn"},{default:d(()=>[_("下一页(友链)")]),_:1})])],64)}}},L=f(C,[["__scopeId","data-v-56f739b0"]]);export{L as default};