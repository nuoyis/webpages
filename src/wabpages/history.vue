<template>
  <nuotitle>
    <template #nuoyis-biaoti-text>建站历史 - 一个建站流水线</template>
  </nuotitle>
  <div class="nuoyis-history">
    <ul id="line">
      <li v-for="data in nuodata">
        <div class="focus"></div>
        <div>{{ data.date }}</div>
        <div>{{ data.description }}</div>
      </li>
      <li>
        <div class="focus"></div>
        <div>{{ currentTime }}以后</div>
        <div>更长的路，正等着我继续探索...</div>
      </li>
    </ul>
  </div>
  <div>
    <router-link to="/aboutintroduce" class="routerbtn">上一页(站长介绍)</router-link>
    <router-link to="/youlian" class="routerbtn">下一页(友链)</router-link>
  </div>
</template>

<script setup>
import { nuorequst, nuotime } from '@/function.js';
import Nuotitle from "@/wabpages/nuotitle.vue";
const { nuostatus, nuodata, get, post } = nuorequst('https://server-api.nuoyis.net/history.json')
const { nowdate, currentTime } = nuotime()
get();
</script>

<style scoped>
.nuoyis-history{
  width: 80%;
  height: auto;
  margin: 0 auto;
  margin-bottom:5%;
}

#line {
  width: 100%;
  font-size: 13px;
  padding-left: 10px;
  scroll-snap-type: y mandatory;
}

#line li {
  list-style: none;
  position: relative;
  padding: 15px 0px 0px 15px;
  border-left: 2px solid #adbeff;
  border-radius: 0;
  scroll-snap-align: end;
  color: #eeeeee;
}
.focus {
  width: 15px;
  height: 15px;
  border-radius: 22px;
  background-color: rgb(255 255 255);
  border: 2px solid #fff;
  position: absolute;
  left: -9px;
  top: 50%;
}

#line li:last-child .focus{
  background-color: #2ecc71;
  animation: focus 1.8s ease infinite;
}
</style>