import{_ as k,n as y,c as d,a,w as e,N as g,b as r,u as p,g as l,F as f,r as x,i as u,o,d as i,f as w,j as C,e as N}from"./index-CgrdglRR.js";const $={class:"nuoyis-blogview"},h={__name:"blogview",setup(B){const{nuostatus:V,nuodata:c,get:b,post:F}=y("https://blog.nuoyis.net/atom.xml");return b(),(n,s)=>{const _=u("var-skeleton"),m=u("var-space"),v=u("var-card");return o(),d(f,null,[a(g,null,{"nuoyis-biaoti-text":e(()=>[i("诺依阁的日记簿 - 文章展示")]),_:1}),a(w),r("div",$,[JSON.stringify(p(c))==="{}"?(o(),l(_,{key:0,loading:!0},{default:e(()=>[i("正在加载")]),_:1})):(o(!0),d(f,{key:1},x(p(c).feed.entry,t=>(o(),l(_,{title:"",rows:3,loading:!1,"rows-width":["200px","100px","50px"]},{default:e(()=>[t.summary?(o(),l(v,{key:0,title:t.title._text,subtitle:"编写/更新时间:"+t.updated._text,ripple:"",onClick:j=>n.location.assign(t.link._attributes.href),description:t.summary?t.summary._text.replace(/<[^>]+>/g,"")+"...":"没有简介哦",style:{"margin-bottom":"calc(5vw)"}},{extra:e(()=>[a(m,null,{default:e(()=>[a(C,{round:!1,block:!0,url:t.link._attributes.href},{"nuoyis-url":e(()=>[i("点击前往")]),_:2},1032,["url"])]),_:2},1024)]),_:2},1032,["title","subtitle","onClick","description"])):N("",!0)]),_:2},1024))),256))]),r("button",{onClick:s[0]||(s[0]=t=>n.$router.push("/youlian")),class:"routerbtn"},"上一页(友链)"),r("button",{onClick:s[1]||(s[1]=t=>n.$router.push("/")),class:"routerbtn"},"首页")],64)}}},E=k(h,[["__scopeId","data-v-cadef00f"]]);export{E as default};