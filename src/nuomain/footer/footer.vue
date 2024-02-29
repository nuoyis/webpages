<template>
  <div class="nuoyis-footer">
    新页面由vue3构建，持续翻车优化中
    |
    备案号:<a href="//beian.miit.gov.cn" data-pjax-state="">鄂ICP备2023004941号-2</a>
    |
    <img style="vertical-align:middle" src="./img/beian.png" data-ll-status="loading" class="entered loading">鄂公网安备<a href="//www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011702000728" data-pjax-state="">42011702000728</a>号
    |
    © 2020 - {{ nowdate }}<a href="https://www.nuoyis.com" target="_blank" style="color:#999;">  诺依阁</a>
  </div>
</template>

<script setup>
import { nuotime } from '@/function.js'
const { nowdate } = nuotime()
</script>