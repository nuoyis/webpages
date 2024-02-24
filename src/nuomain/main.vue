<template>
  <div class="nuoyis-header-text">
    <!-- 	<div class="nuoyis-header-text-1">欢迎来到诺依阁的技术树</div>
          <div class="nuoyis-header-text-2">Welcome to nuoyis's Pavilion Tech Tree</div> -->
    <span>WelCome</span>
    <span>to this site</span>
    <p>
      {{ msg }}欢迎您<br>一个游走在互联网前沿边缘的小站
    </p>
    <div>
      <router-link to="/aboutme">点击查看</router-link>
    </div>
  </div>
  <router-view></router-view>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>