<template>
  <fab></fab>
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
</template>
<script setup>
import Nuotitle from "@/wabpages/public/nuotitle.vue";
import Fab from "@/wabpages/public/fab.vue";
</script>

<style scoped>
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
  background-image: url(../../public/img/morenbackground.jpg);
  background-size: cover;
  border-radius: 5px 5px 0 0;
  background-position: center;
  background-repeat: no-repeat;
}
</style>