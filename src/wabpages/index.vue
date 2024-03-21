<template>
  <fab></fab>
  <div class="nuoyis-main">
    <div class="nuoyis-home">
      <!-- 	<div class="nuoyis-header-text-1">欢迎来到诺依阁的技术树</div>
            <div class="nuoyis-header-text-2">Welcome to nuoyis's Pavilion Tech Tree</div> -->
      <span>WelCome</span>
      <span>to this site</span>
      <p>
        {{ webname }}欢迎您<br>一个游走在互联网前沿边缘{{ nowdate-2020 }}年的小站<br/>
        指针方位: X轴:{{ x }}, Y轴{{ y }}<br/>
        当前北京时间:{{ currentTime }}
      </p>
<!--        <button @click="$router.push('/aboutintroduce')" class="routerbtn">点击查看</button>-->
    </div>
  </div>
  <footer>
    <nuofooter />
  </footer>
</template>

<script setup>
import { useMouse, nuotime } from '@/function.js'
import nuofooter from '@/wabpages/public/footer.vue'
import Fab from "@/wabpages/public/fab.vue";
const { x, y } = useMouse()
const { nowdate, currentTime } = nuotime()
defineProps({
  webname: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.nuoyis-main{
  background-image: -moz-linear-gradient(rgba(23, 24, 32, 0.5), rgba(23, 24, 32, 0.5)), url("https://images.nuoyis.net/acg/img-avif/1467.avif");
  background-image: -webkit-linear-gradient(rgba(23, 24, 32, 0.5), rgba(23, 24, 32, 0.5)), url("https://images.nuoyis.net/acg/img-avif/1467.avif");
  background-image: -ms-linear-gradient(rgba(23, 24, 32, 0.5), rgba(23, 24, 32, 0.5)), url("https://images.nuoyis.net/acg/img-avif/1467.avif");
  background-image: linear-gradient(rgba(23, 24, 32, 0.5), rgba(23, 24, 32, 0.5)), url("https://images.nuoyis.net/acg/img-avif/1467.avif");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.nuoyis-home{
  height: calc(90vh);
  width: 65%;
  padding-top: calc(11vh) !important;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.nuoyis-main p{
  padding: 0 0 0 5px;
  margin: 0 0 30px 0;
  font-weight: bold;
  font-size: 25px;
  color:white;
}
@media screen and (max-width:999px) {
  .nuoyis-main span:nth-child(1) {
    font-size: calc(16vw);
    font-weight: bold;
    color: rgb(255, 164, 89);
    text-shadow: 2px 5px 5px rgb(71, 36, 0);

  }

  .nuoyis-main span:nth-child(2) {
    font-size: calc(11vw);
    font-weight: bold;
    margin-bottom: 30px;
    color: rgb(255, 252, 250);
    text-shadow: 2px 5px 5px rgb(10, 5, 0);
  }
}

@media screen and (min-width:1000px) {
  .nuoyis-main span:nth-child(1) {
    font-size: 150px;
    font-weight: bold;
    color: rgb(255, 164, 89);
    text-shadow: 2px 5px 5px rgb(71, 36, 0);

  }

  .nuoyis-main span:nth-child(2) {
    font-size: 80px;
    font-weight: bold;
    margin-bottom: 30px;
    color: rgb(255, 252, 250);
    text-shadow: 2px 5px 5px rgb(10, 5, 0);
  }
}
</style>