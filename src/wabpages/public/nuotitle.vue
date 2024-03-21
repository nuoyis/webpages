<template>
  <div class="nuoyis-biaoti">
    <h1>
      <slot name="nuoyis-biaoti-text"></slot>
    </h1>
    <span class="nuoyis-biaoti-underline"></span>
  </div>
</template>

<style scoped>
.nuoyis-biaoti{
  font-weight: bold;
  text-align: center;
  margin: calc(5vw) calc(5vw) calc(5vw) calc(5vw);
}

.nuoyis-biaoti-underline{
  display: inline-block;
  width: 80px;
  height: 4px;
  background-color: pink;
}
</style>