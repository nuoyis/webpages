<template>
  <nuotitle>
    <template #nuoyis-biaoti-text>合作开发者企业</template>
  </nuotitle>
  <div class="nuoyis-youlian">
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
    <button @click="$router.push('/history')" class="routerbtn">上一页(建站历史)</button>
    <button @click="$router.push('/blogview')" class="routerbtn">下一页(博客简单展示)</button>
  </div>
</template>
<script setup>
import Nuotitle from "@/wabpages/nuotitle.vue";
</script>