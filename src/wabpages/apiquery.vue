<template>
  <nuotitle>
    <template #nuoyis-biaoti-text>API调用详细页面</template>
  </nuotitle>
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
  <var-button
      color="linear-gradient(to right bottom, #6750A4, #D0BCFF)"
      text-color="#fff"
      @click="$router.push('/api')"
      style="margin-top:calc(2vh);"
  >
    返回上页
  </var-button>
</div>

</template>

<script setup>
import { nuorequst } from '@/function.js'
import nuotitle from "@/wabpages/public/nuotitle.vue";
const { nuostatus, nuodata, get, post } = nuorequst('https://server-api.nuoyis.net/jiekou.json')
get();
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