<template>
  <div class="nuoyis-main">
  <div class="nuoyis-about">
    <div class="nuoyis-biaoti">
      <h1>关于站长</h1>
      <span class="nuoyis-biaoti-underline"></span>
    </div>
    <div class="nuoyis-zhengwen">
      <p>诺依阁，起名源于"诺天依倚靠的楼阁"。同时想出的灵感。英文nuoyis则是is nuoyi合并成nuoyi(i)s。</p>
      <p>一个半宅半社牛半社恐的学云计算却做着代码事的屑大学生。最喜欢蓝色，更喜欢二次元的蓝色(懂的都懂)</p>
      <p>从QQ机器人一路建设过来，虽然有时对人态度差，但仍尽力克制并对人道歉</p>
      <p>更多关于站长，请<a href="https://www.nuoyis.cn">点击这里</a>访问站长的个人介绍</p>
    </div>
    <button @click="$router.push('/')" class="routerbtn">首页(上一页)</button>
    <button @click="$router.push('/history')" class="routerbtn">下一页(建站历史)</button>
  </div>
  </div>
</template>
<script setup>
</script>