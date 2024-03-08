import{_ as y,n as v,c as l,a as e,F as h,f as x,u as f,o as r,t as o,l as u,m as F,p as w,h as B}from"./index-DubFXSy6.js";const i=n=>(w("data-v-255a2f3b"),n=n(),B(),n),a=i(()=>e("link",{href:"/semantic.min.css",type:"text/css",rel:"stylesheet"},null,-1)),b={class:"nuoyis-serverstatus"},k=i(()=>e("div",{class:"nuoyis-biaoti"},[e("h1",null,"探针 - 监测服务器稳定/正常"),e("span",{class:"nuoyis-biaoti-underline"})],-1)),g=i(()=>e("p",null,"每隔10秒更新一次",-1)),I=i(()=>e("thead",null,[e("tr",null,[e("th",{id:"status4"},"运行状态"),e("th",{id:"name"},"节点名"),e("th",{id:"type"},"类型"),e("th",{id:"location"},"服务器位置"),e("th",{id:"uptime"},"在线时间"),e("th",{id:"load"},"负载"),e("th",{id:"network"},"网络(B/s) ↓|↑"),e("th",{id:"traffic"},"流量(B) ↓|↑"),e("th",{id:"cpu"},"CPU"),e("th",{id:"ram"},"内存"),e("th",{id:"hdd"},"硬盘")])],-1)),S={id:"servers"},C={key:0,class:"tableRow"},R=i(()=>e("td",null,[e("div",{class:"ui progress success"},[e("div",{class:"bar",style:{width:"100%"}},[e("span",null,"运行中")])])],-1)),D={class:"ui progress success"},G={class:"ui progress success"},K={class:"ui progress success"},M={__name:"serverstatus",setup(n){const{nuostatus:N,nuodata:p,get:m,post:T}=v("https://serverstatus.nuoyis.net/stats.json"),c=()=>{m()};c(),setInterval(c,10*1e3);const d=s=>s<1024?s.toFixed(0)+"B":s<1024*1024?(s/1024).toFixed(0)+"K":s<1024*1024*1024?(s/1024/1024).toFixed(1)+"M":s<1024*1024*1024*1024?(s/1024/1024/1024).toFixed(2)+"G":(s/1024/1024/1024/1024).toFixed(2)+"T",_=s=>s<1024?s.toFixed(0)+" B":s<1024*1024?(s/1024).toFixed(2)+" KiB":s<1024*1024*1024?(s/1024/1024).toFixed(2)+" MiB":s<1024*1024*1024*1024?(s/1024/1024/1024).toFixed(2)+" GiB":(s/1024/1024/1024/1024).toFixed(2)+" TiB";return(s,V)=>(r(),l(h,null,[a,e("div",b,[k,g,e("table",null,[I,(r(!0),l(h,null,x(f(p).servers,t=>(r(),l("tbody",S,[t.online4?(r(),l("tr",C,[R,e("td",null,o(t.name),1),e("td",null,o(t.type),1),e("td",null,o(t.location),1),e("td",null,o(t.uptime),1),e("td",null,o(t.load),1),e("td",null,o(_(t.network_rx))+" | "+o(_(t.network_tx)),1),e("td",null,o(d(t.network_in))+" | "+o(d(t.network_out)),1),e("td",null,[e("div",D,[e("div",{class:"bar",style:u({width:t.cpu+"%"})},o(t.cpu)+"%",5)])]),e("td",null,[e("div",G,[e("div",{class:"bar",style:u({width:(t.memory_used/t.memory_total).toFixed(2)*100+"%"})},o((t.memory_used/t.memory_total).toFixed(2)*100)+"%",5)])]),e("td",null,[e("div",K,[e("div",{class:"bar",style:u([{width:(t.hdd_used/t.hdd_total).toFixed(2)*100+"%"},{width:"47%"}])},o((t.hdd_used/t.hdd_total).toFixed(2)*100)+"%",5)])])])):F("",!0)]))),256))])])],64))}},q=y(M,[["__scopeId","data-v-255a2f3b"]]);export{q as default};