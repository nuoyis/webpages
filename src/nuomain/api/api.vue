<template>
  <div class="nuoyis-api-main">
    <div class="nuoyis-biaoti">
      <h1>API调用 - 诺依阁旗下最快最稳定的API</h1>
      <span class="nuoyis-biaoti-underline"></span>
    </div>
    <p>目前推出的API调用</p>
    <div class="nuoyis-api" id="nuoyis-api">
      <a class="nuoyis-api-url" v-for="api in info.data" :href="nuoapi(api.id)" :key="api.id">
        <i class="nuoyis-api-images"></i>
        <div class="nuoyis-api-text">
          <h2>{{ api.name }}</h2>
          <p>
            说明:无
            <br />
            状态:{{ api.state }}
          </p>
        </div>
      </a>
    </div>
  </div>
  <div>
    <router-link to="/" class="routerbtn">首页</router-link>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      info:
        [
            {
              "id": 1,
              "name": "没有任何数据",
              "dz": "/",
              "cs": "",
              "gg": "",
              "sl": "",
              "sj": "",
              "state": "异常"
            }
        ]
    }
  },
    mounted () {
      axios
          .get('https://server-api.nuoyis.net/jiekou.json')
          .then(response => {
            this.info = response;
          })
          .catch(error => console.log(error))
    },
    methods: {
      nuoapi: function (id) {
        return '/search.html?id=' + id
      }
    }
  }
</script>