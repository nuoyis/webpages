<template>
  <nuotitle>
    <template #nuoyis-biaoti-text>诺依阁的日记簿 - 文章展示</template>
  </nuotitle>
  <fab></fab>

  <div class="nuoyis-blogview">
    <var-skeleton v-if="JSON.stringify(nuodata) === '{}'" :loading=true>正在加载</var-skeleton>
    <var-skeleton
        v-else
        title
        :rows="3"
        :loading=false
        :rows-width="['200px', '100px', '50px']"
        v-for="item in nuodata.feed.entry"
    >
      <var-card
          v-if="item.summary"
          :title="item.title._text"
          :subtitle="'编写/更新时间:'+item.updated._text"
          ripple
          @click="location.assign(item.link._attributes.href)"
          :description="item.summary ? item.summary._text.replace(/<[^>]+>/g,'')+'...':'没有简介哦'"
          style = "margin-bottom:calc(5vw)"
      >
        <template #extra>
          <var-space>
            <nuoyis-var-link :round=false :block=true :url="item.link._attributes.href"><template #nuoyis-url>点击前往</template></nuoyis-var-link>
          </var-space>
        </template>
      </var-card>
<!--      <div class="nuoyis-blog-essay-view" v-for="item in nuodata.feed.entry">-->
<!--        <p>{{ item.title._text }}</p>-->
<!--        <p>编写/更新时间:{{ item.updated._text }}</p>-->
<!--        <p v-if="item.summary">{{ item.summary._text.replace(/<[^>]+>/g,"") }}...</p>-->
<!--        <p v-else>没有简介哦</p>-->
<!--        <a :href="item.link._attributes.href ">查看更多</a>-->
<!--  &lt;!&ndash;    <p>{{ item['_attribute']['type'] }}</p>&ndash;&gt;-->
<!--      </div>-->
    </var-skeleton>
  </div>
  <button @click="$router.push('/youlian')" class="routerbtn">上一页(友链)</button>
  <button @click="$router.push('/')" class="routerbtn">首页</button>
</template>

<script setup>
import { nuorequst } from '@/function.js';
import Nuotitle from "@/wabpages/public/nuotitle.vue";
import Fab from "@/wabpages/public/fab.vue";
import NuoyisVarLink from "@/wabpages/public/nuoyis-var-link.vue";
// import { extractFromXml } from '@extractus/feed-extractor'
const { nuostatus, nuodata, get, post } = nuorequst('https://blog.nuoyis.net/atom.xml');
get();
// import {extract, extractFromXml} from "@extractus/feed-extractor";
// const url = 'https://blog.nuoyis.net/atom.xml'
// // this resource provides data in ATOM feed format
// // so we fetch remote content as text
// // then pass to feed-extractor
// const res = await fetch(url)
// const xml = await res.text()
//
// const nuofeed = extractFromXml(xml)
// console.log(nuofeed)
</script>

<style scoped>
.nuoyis-blogview{
  width:80%;
  height:auto;
  margin:0 auto;
  margin-bottom:5%;
}
.nuoyis-blogview .nuoyis-blog-essay-view{
  margin-bottom: 2%;
}
.nuoyis-blogview .nuoyis-blog-essay-view a{
  text-decoration: none;
  color:wheat;
}
</style>