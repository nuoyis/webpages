import{_ as d,n as p,c as s,a as t,F as l,f as h,u as b,b as c,w as u,r as y,o,t as n,d as _,p as f,h as v}from"./index-CzNggQgU.js";const m=a=>(f("data-v-6b1ce714"),a=a(),v(),a),x={class:"nuoyis-blogview"},g=m(()=>t("div",{class:"nuoyis-biaoti"},[t("h1",null,"诺依阁的日记簿 - 文章展示"),t("span",{class:"nuoyis-biaoti-underline"})],-1)),k={class:"nuoyis-blog-essay-view"},w={key:0},I={key:1},S=["href"],B={__name:"blogview",setup(a){const{nuostatus:N,nuodata:i}=p("https://blog.nuoyis.net/atom.xml");return(V,C)=>{const r=y("router-link");return o(),s(l,null,[t("div",x,[g,(o(!0),s(l,null,h(b(i).feed.entry,e=>(o(),s("div",k,[t("p",null,n(e.title._text),1),t("p",null,"编写/更新时间:"+n(e.updated._text),1),e.summary?(o(),s("p",w,n(e.summary._text.replace(/<[^>]+>/g,""))+"...",1)):(o(),s("p",I,"没有简介哦")),t("a",{href:e.link._attributes.href},"查看更多",8,S)]))),256))]),t("div",null,[c(r,{to:"/youlian",class:"routerbtn"},{default:u(()=>[_("上一页(友链)")]),_:1}),c(r,{to:"/",class:"routerbtn"},{default:u(()=>[_("首页")]),_:1})])],64)}}},q=d(B,[["__scopeId","data-v-6b1ce714"]]);export{q as default};
