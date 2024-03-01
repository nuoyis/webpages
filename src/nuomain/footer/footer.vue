<template>
  <div class="nuoyis-footer">
    <div class="nuoyis-footer-main">
      <div class="nuoyis-footer-left">
        本站有任何违规和违法内容,请发送邮件<br>至wkkjonlykang@vip.qq.com,本站会在24天内解决完毕
        <br>
        全站由<a target="_blank" href="https://www.upyun.com/?utm_source=lianmeng&amp;utm_medium=referral" title="又拍云CDN" alt="又拍云CDN"><img src="@/img/upyun_logo.webp" style="margin-bottom: -10px;margin-left: 3px" alt="CDN" width="70" height="35"></a>提供CDN加速/云存储服务
        <br>
        <a href="//beian.miit.gov.cn">鄂ICP备2023004941号-2</a> | <img src="@/img/beian.png">鄂公网安备 <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011702000752">42011702000752</a>号
        <br>
        @2020 - {{ nowdate }} <a href="https://www.nuoyis.net">诺依阁</a>
        <div class="nuoyis-copyright">
          This <a href="https://github.com/nuoyis/webpages">webpages</a> copyright by <a href="https://www.nuoyis.net">nuoyis</a>
        </div>
      </div>
      <div class="nuoyis-footer-right">
        本站的合作创作平台
        <br>
        <a href="https://space.bilibili.com/476800638">哔哩哔哩</a> | <a href="https://cloud.tencent.com/developer/user/7040262">腾讯云创作者平台</a> | <a href="https://blog.csdn.net/nuoyis">CSDN创作者平台</a>
        <br><br>
        本站公开透明区
        <br>
        <a href="@/img/domain-name-certificate.webp">域名注册证书</a> | <a href="#">敬请期待</a> | <a href="#">敬请期待</a>
        <br><br>
        本站公众号
        <br>
        微信搜索:诺依阁的技术树,或者微信号:nuoyis1024
      </div>
    </div>
  </div>
</template>

<script setup>
import { nuotime } from '@/function.js'
const { nowdate } = nuotime()
</script>