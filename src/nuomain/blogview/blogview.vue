<template>
  <div class="nuoyis-blogview">
    <div class="nuoyis-biaoti">
      <h1>诺依阁的日记簿 - 文章展示</h1>
      <span class="nuoyis-biaoti-underline"></span>
    </div>
    <div class="nuoyis-blog-essay-view" v-for="item in nuodata.feed.entry">
      <p>{{ item.title._text }}</p>
      <p>编写/更新时间:{{ item.updated._text }}</p>
      <p v-if="item.summary">{{ item.summary._text.replace(/<[^>]+>/g,"") }}...</p>
      <p v-else>没有简介哦</p>
      <a :href="item.link._attributes.href ">查看更多</a>
<!--    <p>{{ item['_attribute']['type'] }}</p>-->
    </div>
  </div>
  <div>
    <router-link to="/youlian" class="routerbtn">上一页(友链)</router-link>
    <router-link to="/" class="routerbtn">首页</router-link>
  </div>
</template>

<script setup>
import { nuorequst } from '@/function.js';
// import { extractFromXml } from '@extractus/feed-extractor'
const { nuostatus, nuodata } = nuorequst('https://blog.nuoyis.net/atom.xml');
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