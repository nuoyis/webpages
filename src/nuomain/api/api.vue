<template>
  <div class="nuoyis-api-main">
    <div class="nuoyis-biaoti">
      <h1>API调用 - 诺依阁旗下最快最稳定的API</h1>
      <span class="nuoyis-biaoti-underline"></span>
    </div>
    <p v-if=" nuostatus===200 ">api接口名单请求状态:正常</p>
    <p v-else>api接口名单请求状态:异常</p>
    <p>目前推出的API调用</p>
    <div class="nuoyis-api" id="nuoyis-api">
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
  <div>
    <router-link to="/" class="routerbtn">首页</router-link>
  </div>
</template>
<script setup>
import { nuorequst } from '@/function.js'
const { nuostatus, nuodata } = nuorequst('https://server-api.nuoyis.net/jiekou.json')
</script>