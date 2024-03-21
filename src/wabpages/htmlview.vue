<template>
  <fab></fab>
  <nuotitle>
    <template #nuoyis-biaoti-text>html文本编辑器</template>
  </nuotitle>
  <div class="nuoyis-htmlview">
    <div class="editor">
      <textarea v-model="htmlContent" placeholder="请在这里输入你的html代码"></textarea>
    </div>
    <div class="rendered-html" v-html="htmlContent"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Nuotitle from "@/wabpages/public/nuotitle.vue";
import Fab from "@/wabpages/public/fab.vue";

const htmlContent = ref('')

function renderHtml() {
  htmlContent.value = htmlContent.value
}
</script>

<style scoped>
.nuoyis-htmlview {
  display:flex;
  height:70%;
  width:50%;
  margin: 0 auto;
  margin-top: 60px;
}

.editor{
  width: 50%;
  height: 100%;
}

.editor textarea {
  width: 100%;
  height: 100%;
}

.rendered-html {
  width: 45%;
  height: 100%;
  margin-left: 5%;
  border: 1px solid #ccc;
}

</style>