<template>
<div class="nuoyis-api-query">
  <div class="nuoyis-api-query-frame">
  <p>请求地址</p>
  <pre>
  <a :href="nuodata[$route.query.id-1].dz">{{ nuodata[$route.query.id-1].dz }}</a>
  </pre>
  <p>参数：</p>
  <pre>
    {{ nuodata[$route.query.id-1].cs }}
  </pre>
  <p>调用示例</p>
  <pre>
  {{ nuodata[$route.query.id-1].sl }}
  </pre>
  <p>返回数据</p>
  <pre style="text-shadow: initial;"><span>{{ nuodata[$route.query.id-1].gg }}</span></pre>
  <p>接口通知</p>
  <pre>状态: {{ nuodata[$route.query.id-1].state }},{{ nuodata[$route.query.id-1].sj }} </pre>
  </div>
</div>
  <div>
    <router-link to="/api" class="routerbtn">返回上页</router-link>
    <router-link to="/" class="routerbtn">首页</router-link>
  </div>
</template>

<script setup>
import { nuorequst } from '@/function.js'
const { nuostatus, nuodata } = nuorequst('https://server-api.nuoyis.net/jiekou.json')
</script>

<style scoped>
.nuoyis-api-query {
  margin: 0 auto;
  margin-bottom: 5%;
}
@media (min-width: 992px) {
  .nuoyis-api-query {
    width: 970px;
  }
}
@media (min-width: 768px){
  .nuoyis-api-query {
    width: 750px;
  }
}

.nuoyis-api-query-frame{
  text-shadow: #000 1px 1px 1px;
  color: #00F1FF;
  font-size: 20px;
}

.nuoyis-api-query-frame a{
  text-decoration: none;
  color: #2196F3;
}

pre {
  color: #2196F3;
  /* font-size: 18px; */
  font-family: 微软雅黑;
  background: rgba(255, 255, 255, 0.55);
  /* line-height: 30px; */
  border-radius: 20px;
  padding-left: 20px;
/* display: inline-block;*/
}


</style>