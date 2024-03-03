<template>
<p>请求地址</p>
<pre>
<a :href="nuodata.data[$route.query.id-1].dz">{{ nuodata.data[$route.query.id-1].dz }}</a>
</pre>
<p>参数：</p>
<pre>
  {{ nuodata.data[$route.query.id-1].cs }}
</pre>
<p>调用示例</p>
<pre>
{{ nuodata.data[$route.query.id-1].sl }}
</pre>
<p>返回数据</p>
<pre style="text-shadow: initial;"><span>{{ nuodata.data[$route.query.id-1].gg }}</span></pre>
<p>接口通知</p>
<pre>状态: {{ nuodata.data[$route.query.id-1].state }},{{ nuodata.data[$route.query.id-1].sj }} </pre>

</template>

<script setup>
import { nuorequst } from '@/function.js'
const { nuostatus, nuodata } = nuorequst('https://server-api.nuoyis.net/jiekou.json')
</script>
