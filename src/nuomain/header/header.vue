<template>
  <div class="nuoyis-nav">
    <div class="nuoyis-nav-text">
      <div class="nuoyis-nav-left">
        <router-link to="/">{{ msg }}</router-link>
      </div>
      <div class="nuoyis-nav-right">
        <ul>
          <li><a href="https://www.nuoyis.net">诺依阁的技术树</a></li>
          <li><a href="https://blog.nuoyis.net">诺依阁的日常记录</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>