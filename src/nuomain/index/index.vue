<template>
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
      <div>
        <router-link to="/aboutme" class="routerbtn">点击查看</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMouse, nuotime } from '@/function.js'
const { x, y } = useMouse()
const { nowdate, currentTime } = nuotime()
defineProps({
  webname: {
    type: String,
    required: true
  }
})
</script>