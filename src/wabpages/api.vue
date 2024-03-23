<template>
  <fab></fab>
  <nuotitle>
    <template #nuoyis-biaoti-text>API调用 - 诺依阁旗下最快最稳定的API</template>
  </nuotitle>
  <div class="nuoyis-api-main">
    <p class="nuoyis-api-stext" v-if=" nuostatus===200 ">api接口名单请求状态:正常</p>
    <p class="nuoyis-api-stext" v-else>api接口名单请求状态:异常<br/>请联系站长修复</p>
    <p class="nuoyis-api-stext" v-if=" nuostatus===200 ">目前推出的API调用</p>
    <div class="nuoyis-api" id="nuoyis-api" v-if=" nuostatus===200 ">
        <router-link class="nuoyis-api-url" v-for="api in nuodata" :to="{ path:'/apiquery',query:{id:api.id}}">
        <i class="nuoyis-api-images"></i>
        <div class="nuoyis-api-text">
          <h2>{{ api.name }}</h2>
          <p>
            说明:无
            <br />
            状态:{{ api.state }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import nuotitle from '@/wabpages/public/nuotitle.vue'
import { nuorequst } from '@/function.js'
import Fab from "@/wabpages/public/fab.vue";
const { nuostatus, nuodata, get, post } = nuorequst('https://server-api.nuoyis.net/jiekou.json')
get();
</script>

<style scoped>
.nuoyis-api {
  display: grid;
  padding: 0px 8%;
  color: #66CCFF;
  grid-gap: 30px;
  padding-bottom: 3rem;
  text-decoration: none;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.nuoyis-api-stext{
  padding: 10px 8%;
}

.nuoyis-api-url {
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color:#f2f2f2;
  box-shadow: 4px 6px 16px gray;
  transition: transform 0.5s,background 0.5s;
}

.nuoyis-api-url i {
  font-size: 40px;
  margin-bottom: 10px;
  color: #303ef7;
}

.nuoyis-api-url h2 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.nuoyis-api-url:hover {
  background: #303ef7;
  color: #fff;
  transform: scale(1.05);
}

.nuoyis-api-url:hover i {
  color: #fff;
}

.nuoyis-api-text{
  color: black;
  padding: 0 5px;
}

.nuoyis-api-text p{
  margin:0;
  font-size: 10px;
}

</style>