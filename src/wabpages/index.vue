<template>
  <fab></fab>
  <div class="nuoyis-main">
    <div class="nuoyis-home">
      <!-- 	<div class="nuoyis-header-text-1">欢迎来到诺依阁的技术树</div>
            <div class="nuoyis-header-text-2">Welcome to nuoyis's Pavilion Tech Tree</div> -->
<!--      <p>-->
<!--        <br>一个游走在互联网前沿边缘{{ nowdate-2020 }}年的小站<br/>-->
<!--        指针方位: X轴:{{ x }}, Y轴{{ y }}<br/>-->
<!--        当前北京时间:{{ currentTime }}-->
<!--      </p>-->
      <h2>服务器闪烁之光，守护万家灯火</h2>
      <p>欢迎访问一个游走在互联网前沿边缘{{ nowdate-2020 }}年的小站<br/></p>
<!--        <button @click="$router.push('/aboutintroduce')" class="routerbtn">点击查看</button>-->
    </div>
  </div>
<!--  个人介绍 -->
  <nuotitle>
    <template #nuoyis-biaoti-text>关于站长</template>
  </nuotitle>
    <div class="nuoyis-about">
      <div class="nuoyis-zhengwen">
        <p>诺依阁，起名源于"诺天依倚靠的楼阁"。同时想出的灵感。英文nuoyis则是is nuoyi合并成nuoyi(i)s。</p>
        <p>一个半宅半社牛半社恐的学云计算却做着代码事的屑大学生。最喜欢蓝色，更喜欢二次元的蓝色(懂的都懂)</p>
        <p>从QQ机器人一路建设过来，虽然有时对人态度差，但仍尽力克制并对人道歉</p>
        <p>更多关于站长，请<a href="https://www.nuoyis.cn">点击这里</a>访问站长的个人介绍</p>
      </div>
    </div>
  <nuotitle>
    <template #nuoyis-biaoti-text>绿色环保</template>
  </nuotitle>
  <div class="nuoyis-huanbao">
    <div class="nuoyis-zhengwen">
    <p>站长多年以绿色环保为理念,坚持未用完的纸张合理利用起来,坚持有用的纸箱用来做置物架。饭食光盘行动,所有对外提供90%上云。同时将性能低下的设备低价出售，完成电子设备的二次利用。</p>
    </div>
  </div>
<!--  历史页面 -->、
  <nuotitle>
    <template #nuoyis-biaoti-text>建站历史</template>
  </nuotitle>
  <div class="nuoyis-history">
    <var-paper :elevation="4">
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
    </var-paper>
  </div>
  <nuotitle>
    <template #nuoyis-biaoti-text>合作开发者企业</template>
  </nuotitle>
  <div class="nuoyis-project" id="nuoyis-project">
    <a class="nuoyis-project-url" href="https://www.aliyun.com">
      <i class="nuoyis-project-images"></i>
      <div class="nuoyis-project-text">
        <h2>阿里云</h2>
        <p>
          合作域名/CDN/服务器提供商
        </p>
      </div>
    </a>
    <a class="nuoyis-project-url" href="https://cloud.tencent.com">
      <i class="nuoyis-project-images"></i>
      <div class="nuoyis-project-text">
        <h2>腾讯云</h2>
        <p>
          合作域名/CDN/服务器提供商
        </p>
      </div>
    </a>
    <a class="nuoyis-project-url" href="https://huaweicloud.com">
      <i class="nuoyis-project-images"></i>
      <div class="nuoyis-project-text">
        <h2>华为云</h2>
        <p>
          合作域名/CDN/服务器提供商
        </p>
      </div>
    </a>
    <a class="nuoyis-project-url" href="https://www.upyun.com">
      <i class="nuoyis-project-images"></i>
      <div class="nuoyis-project-text">
        <h2>又拍云</h2>
        <p>
          合作CDN/存储通提供商
        </p>
      </div>
    </a>
    <a class="nuoyis-project-url" href="https://www.qijieya.cn">
      <i class="nuoyis-project-images"></i>
      <div class="nuoyis-project-text">
        <h2>祈杰吖 And 洛天依x64</h2>
        <p>
          合作优质开发者
        </p>
      </div>
    </a>
    <a class="nuoyis-project-url" href="#">
      <i class="nuoyis-project-images"></i>
      <div class="nuoyis-project-text">
        <h2></h2>
        <p>
          等待加入
        </p>
      </div>
    </a>
    <a class="nuoyis-project-url" href="#">
      <i class="nuoyis-project-images"></i>
      <div class="nuoyis-project-text">
        <h2></h2>
        <p>
          等待加入
        </p>
      </div>
    </a>
    <a class="nuoyis-project-url" href="#">
      <i class="nuoyis-project-images"></i>
      <div class="nuoyis-project-text">
        <h2></h2>
        <p>
          等待加入
        </p>
      </div>
    </a>
  </div>
  <footer>
    <nuofooter />
  </footer>
</template>

<script setup>
import {useMouse, nuotime, nuorequst} from '@/function.js'
import nuofooter from '@/wabpages/public/footer.vue'
import Fab from "@/wabpages/public/fab.vue";
import Nuotitle from "@/wabpages/public/nuotitle.vue";
const { nuostatus, nuodata, get, post } = nuorequst('https://server-api.nuoyis.net/history.json')
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

.nuoyis-zhengwen{
  width:75%;
  margin: 0 auto;
}

.nuoyis-history{
  width: 40%;
  height: auto;
  margin: 0 auto;
}

#line {
  width: 100%;
  font-size: 13px;
  padding: calc(2vw) calc(10vw) calc(2vw) calc(12vw);
  scroll-snap-type: y mandatory;
}

#line li {
  list-style: none;
  position: relative;
  padding: 15px 0px 0px 15px;
  border-left: 2px solid #adbeff;
  border-radius: 0;
  scroll-snap-align: end;
  color: black;
}
.focus {
  width: 15px;
  height: 15px;
  border-radius: 22px;
  background-color: gray;
  border: 2px solid #fff;
  position: absolute;
  left: -9px;
  top: 50%;
}

#line li:last-child .focus{
  background-color: #2ecc71;
  animation: focus 1.8s ease infinite;
}

.nuoyis-project {
  display: grid;
  padding: 0px 8%;
  color: #66CCFF;
  grid-gap: 30px;
  padding-bottom: 3rem;
  text-decoration: none;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.nuoyis-project-url {
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  background-color:#f2f2f2;
  box-shadow: 4px 6px 16px gray;
  transition: transform 0.5s,background 0.5s;
}

.nuoyis-project-url i {
  font-size: 40px;
  color: #303ef7;
}

.nuoyis-project-url h2 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.nuoyis-project-url:hover {
  background: #303ef7;
  color: #fff;
  transform: scale(1.05);
}

.nuoyis-project-url:hover i {
  color: #fff;
}

.nuoyis-project-text{
  color: black;
  padding: 20px 20px;
}

.nuoyis-project-text p{
  margin:0;
  font-size: 10px;
}

.nuoyis-project-images{
  height: 150px;
  display: block;
  position: relative;
  background-size: cover;
  border-radius: 5px 5px 0 0;
  background-position: center;
  background-repeat: no-repeat;
}

</style>