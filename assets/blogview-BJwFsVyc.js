import{_ as p,n as d,c as s,a as u,w as c,b as e,F as l,h as b,u as y,o,e as f,d as h,t as n}from"./index-reNgl3_M.js";import{N as m}from"./nuotitle-DwfRT-KB.js";const g={class:"nuoyis-blogview"},v={class:"nuoyis-blog-essay-view"},x={key:0},k={key:1},w=["href"],N={__name:"blogview",setup($){const{nuostatus:B,nuodata:i,get:_,post:C}=d("https://blog.nuoyis.net/atom.xml");return _(),(r,a)=>(o(),s(l,null,[u(f),u(m,null,{"nuoyis-biaoti-text":c(()=>[h("诺依阁的日记簿 - 文章展示")]),_:1}),e("div",g,[(o(!0),s(l,null,b(y(i).feed.entry,t=>(o(),s("div",v,[e("p",null,n(t.title._text),1),e("p",null,"编写/更新时间:"+n(t.updated._text),1),t.summary?(o(),s("p",x,n(t.summary._text.replace(/<[^>]+>/g,""))+"...",1)):(o(),s("p",k,"没有简介哦")),e("a",{href:t.link._attributes.href},"查看更多",8,w)]))),256))]),e("button",{onClick:a[0]||(a[0]=t=>r.$router.push("/youlian")),class:"routerbtn"},"上一页(友链)"),e("button",{onClick:a[1]||(a[1]=t=>r.$router.push("/")),class:"routerbtn"},"首页")],64))}},q=p(N,[["__scopeId","data-v-808fa6b0"]]);export{q as default};
