import{N as k}from"./nuotitle-PlUZbPTy.js";import{_ as x,n as f,r as v,c as e,a as r,w as l,f as t,u as n,e as o,g as p,F as _,h as I,o as s,d as N,i as g,t as d,p as b,j as B}from"./index-ZfLVurda.js";const c=a=>(b("data-v-14d5ad9e"),a=a(),B(),a),S={class:"nuoyis-api-main"},V={key:0,class:"nuoyis-api-stext"},j={key:1,class:"nuoyis-api-stext"},q=c(()=>t("br",null,null,-1)),w={key:2,class:"nuoyis-api-stext"},A={key:3,class:"nuoyis-api",id:"nuoyis-api"},C=c(()=>t("i",{class:"nuoyis-api-images"},null,-1)),F={class:"nuoyis-api-text"},P=c(()=>t("br",null,null,-1)),D={__name:"api",setup(a){const{nuostatus:i,nuodata:y,get:h,post:E}=f("https://server-api.nuoyis.net/jiekou.json");return h(),(L,T)=>{const m=v("router-link");return s(),e(_,null,[r(N),r(k,null,{"nuoyis-biaoti-text":l(()=>[o("API调用 - 诺依阁旗下最快最稳定的API")]),_:1}),t("div",S,[n(i)===200?(s(),e("p",V,"api接口名单请求状态:正常")):(s(),e("p",j,[o("api接口名单请求状态:异常"),q,o("请联系站长修复")])),n(i)===200?(s(),e("p",w,"目前推出的API调用")):p("",!0),n(i)===200?(s(),e("div",A,[(s(!0),e(_,null,I(n(y),u=>(s(),g(m,{class:"nuoyis-api-url",to:{path:"/apiquery",query:{id:u.id}}},{default:l(()=>[C,t("div",F,[t("h2",null,d(u.name),1),t("p",null,[o(" 说明:无 "),P,o(" 状态:"+d(u.state),1)])])]),_:2},1032,["to"]))),256))])):p("",!0)])],64)}}},H=x(D,[["__scopeId","data-v-14d5ad9e"]]);export{H as default};
