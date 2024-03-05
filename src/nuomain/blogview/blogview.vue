<template>
  <div v-for="item in nuodata['feed']['entry']">
    <p>{{ item['title']['_text'] }}</p>
    <p>{{ item['updated']['_text'] }}</p>
    <p>{{ item['updated']['_text'] }}</p>
    <a :href="item['link']['_attributes']['href'] ">{{ item['link']['_attributes']['href'] }}</a>
<!--    <p>{{ item['_attribute']['type'] }}</p>-->
  </div>
  {{ nuodata['feed']['entry'][1]['_attribute']['type'] }}
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