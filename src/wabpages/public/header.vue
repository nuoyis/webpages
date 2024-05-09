<template>
  <!--  <div class="nuoyis-nav">-->
  <!--    <div class="nuoyis-nav-text">-->
  <!--      <div class="nuoyis-nav-left">-->
  <!--        <router-link to="/">{{ msg }}</router-link>-->
  <!--      </div>-->
  <!--      <div class="nuoyis-nav-right">-->
  <!--        <ul>-->
  <!--          <li><a href="https://www.nuoyis.net">诺依阁的技术树</a></li>-->
  <!--          <li><a href="https://blog.nuoyis.net">诺依阁的日常记录</a></li>-->
  <!--        </ul>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <var-app-bar
      color="linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)"
      text-color="black"
  >
    <template #left>
<!--      <nuoyis-var-link :round=false :block=true url="/"><template #nuoyis-url></template></nuoyis-var-link>-->
      <var-button
          color="transparent"
          text
          block
          text-color="#555"
          style="font-size:20px;"
          @click="$router.push('/')"
      >
          诺依阁的技术树

      </var-button>
    </template>
    <template #right>
      <var-menu>
        <var-button
            color="transparent"
            text
            text-color="#555"
            checked-value="hover"
        >
          <var-icon name="palette" :size="30"/>
          <var-icon name="chevron-down" />
        </var-button>
        <template #menu>
          <var-button block @click="() => StyleProvider(null)">Material Design 2 亮色</var-button>
          <var-button block @click="() => StyleProvider(Themes.dark)">Material Design 2 暗色</var-button>
          <var-button block @click="() => StyleProvider(Themes.md3Light)">Material Design 3 亮色</var-button>
          <var-button block @click="() => StyleProvider(Themes.md3Dark)">Material Design 3 暗色</var-button>
        </template>
      </var-menu>
      <nuoyis-var-link :round=true :block=false url="https://github.com/nuoyis"><template #nuoyis-url><var-icon name="github" :size="30"/></template></nuoyis-var-link>
      <var-button
          color="transparent"
          round
          text
          text-color="#555"
      >
        <var-icon name="menu" :size="30" @click="right = true" />
      </var-button>
      <var-popup position="right" v-model:show="right">
        <div class="popup-example-block" >
          诺依阁的技术树附属站点
          ==================
        </div>
        <nuoyis-var-link :round=false :block=true url="https://blog.nuoyis.net"><template #nuoyis-url>诺依阁的日常记录</template></nuoyis-var-link>
        <nuoyis-var-link :round=false :block=true url="https://api.nuoyis.net"><template #nuoyis-url>诺依阁的API</template></nuoyis-var-link>
        <nuoyis-var-link :round=false :block=true url="https://status.nuoyis.net"><template #nuoyis-url>诺依阁的服务状态</template></nuoyis-var-link>
        <nuoyis-var-link :round=false :block=true url="https://static.nuoyis.net"><template #nuoyis-url>诺依阁的静态加速库</template></nuoyis-var-link>
        <div class="popup-example-block" >
          ==================
          与站长共行,感受代码和技术之美
          与技术宅一起走向下一个10年
        </div>
      </var-popup>
    </template>
  </var-app-bar>
</template>
<script setup>
import {ref} from "vue";
import NuoyisVarLink from "@/wabpages/public/nuoyis-var-link.vue";

defineProps({
  msg: {
    type: String,
    required: true
  }
})
const right = ref(false)
</script>

<style scoped>
.nuoyis-nav{
  width: 100%;
  height: 10%;
}

.nuoyis-nav-text{
  width:80%;
  padding:15px 15px 15px 15px;
  margin:0 auto;
}

.nuoyis-nav-left{
  float:left;
}

.nuoyis-nav-right li{
  float:right;
  list-style:none;
  margin-right:5%;
}

.nuoyis-nav-left a,.nuoyis-nav-right a{
  color:white;
  text-decoration: none;
}

.popup-example-block {
  padding: 24px;
  width: 280px;
}
</style>