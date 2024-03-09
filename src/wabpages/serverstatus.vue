<template>
  <nuotitle>
    <template #nuoyis-biaoti-text>探针 - 监测服务器稳定/正常</template>
  </nuotitle>
  <link href="/semantic.min.css" type="text/css" rel="stylesheet" />
  <div class="nuoyis-serverstatus">
    <p>每隔10秒更新一次</p>
    <table>
      <thead>
      <tr>
        <th id="status4">运行状态</th>
        <th id="name">节点名</th>
        <th id="type">类型</th>
        <th id="location">服务器位置</th>
        <th id="uptime">在线时间</th>
        <th id="load">负载</th>
        <th id="network">网络(B/s) ↓|↑</th>
        <th id="traffic">流量(B) ↓|↑</th>
        <th id="cpu">CPU</th>
        <th id="ram">内存</th>
        <th id="hdd">硬盘</th>
      </tr>
      </thead>
      <tbody id="servers" v-for="data in nuodata.servers">
      <tr class="tableRow" v-if="data.online4">
        <td>
          <div class="ui progress success">
            <div class="bar" style="width: 100%;">
              <span>运行中</span>
            </div>
          </div>
        </td>
        <td>{{ data.name }}</td>
        <td>{{ data.type }}</td>
        <td>{{ data.location }}</td>
        <td>{{ data.uptime }}</td>
        <td>{{ data.load }}</td>
        <td>{{ expandRowByteConvert(data.network_rx) }} | {{ expandRowByteConvert(data.network_tx) }}</td>
        <td>{{ tableRowByteConvert(data.network_in) }} | {{ tableRowByteConvert(data.network_out) }}</td>
        <td>
          <div class="ui progress success">
            <div class="bar" :style="{ width: data.cpu + '%' }">{{ data.cpu }}%</div>
          </div>
        </td>
        <td>
          <div class="ui progress success">
            <div class="bar" :style="{ width:((data.memory_used/data.memory_total).toFixed(2)) * 100 + '%' }">{{ ((data.memory_used/data.memory_total).toFixed(2)) * 100 }}%</div>
          </div>
        </td>
        <td>
          <div class="ui progress success">
            <div class="bar" :style="{ width:((data.hdd_used/data.hdd_total).toFixed(2)) * 100 + '%' }" style="width: 47%;">{{ ((data.hdd_used/data.hdd_total).toFixed(2)) * 100 }}%</div>
          </div>
        </td>
      </tr>
    </tbody>
    </table>
  </div>
</template>
<script setup>
import { nuorequst, nuotime } from '@/function.js';
import Nuotitle from "@/wabpages/nuotitle.vue";
const { nuostatus, nuodata, get, post } = nuorequst('https://serverstatus.nuoyis.net/stats.json')
const fetchData = () => {
  get();
};

// 初始加载数据
fetchData();

// 每10秒刷新一次数据
setInterval(fetchData, 10 * 1000);

const tableRowByteConvert = (data) => {
  if (data < 1024) return data.toFixed(0) + 'B';
  else if (data < 1024 * 1024) return (data / 1024).toFixed(0) + 'K';
  else if (data < 1024 * 1024 * 1024) return (data / 1024 / 1024).toFixed(1) + 'M';
  else if (data < 1024 * 1024 * 1024 * 1024) return (data / 1024 / 1024 / 1024).toFixed(2) + 'G';
  else return (data / 1024 / 1024 / 1024 / 1024).toFixed(2) + 'T';
};

const expandRowByteConvert = (data) => {
  if (data < 1024) return data.toFixed(0) + ' B';
  else if (data < 1024 * 1024) return (data / 1024).toFixed(2) + ' KiB';
  else if (data < 1024 * 1024 * 1024) return (data / 1024 / 1024).toFixed(2) + ' MiB';
  else if (data < 1024 * 1024 * 1024 * 1024) return (data / 1024 / 1024 / 1024).toFixed(2) + ' GiB';
  else return (data / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' TiB';
};
</script>

<style scoped>
.nuoyis-serverstatus{
  width: 71%;
  margin: 0 auto;
}
table tbody tr td{
  padding: .7em;
}

</style>