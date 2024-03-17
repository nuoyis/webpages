<template>
  <nuotitle>
    <template #nuoyis-biaoti-text>探针 - 监测服务器稳定/正常</template>
  </nuotitle>
  <div class="nuoyis-serverstatus">
    <p>每隔10秒更新一次</p>
    <div class="nuoyis-project" id="nuoyis-project">
      <div class="nuoyis-project-text" v-for="data in nuodata.servers">
        <div v-if="data.online4 || data.online6">
          <h3>{{ data.name }}   已运行:{{ data.uptime }}</h3>
          <p>类型:{{ data.type }}</p>
          <p>负载:<div class="nuoyis-progress"><span :style="{width: (data.load) * 100 + '%', 'background-color': data.load > 0.6 ? 'red': data.load >0.3 ? 'blue' :'green'}"></span><span class="nuoyis-progress-text">{{ (data.load) * 100 }}%</span></div></p>
          <p>下载:{{ expandRowByteConvert(data.network_rx) }}({{ tableRowByteConvert(data.network_in) }}) 上传: {{ expandRowByteConvert(data.network_tx) }}({{ tableRowByteConvert(data.network_out) }})</p>
          <p>CPU:<div class="nuoyis-progress"><span :style="{ width: data.cpu + '%','background-color': data.cpu > 60 ? 'red' : data.cpu > 30 ? 'blue' : 'green'  }"></span><span class="nuoyis-progress-text">{{ data.cpu }}%</span></div></p>
          <p>内存:<div class="nuoyis-progress"><span :style="{ width:((data.memory_used/data.memory_total).toFixed(2)) * 100 + '%','background-color': (data.memory_used/data.memory_total).toFixed(2) > 0.6 ? 'red' : data.cpu > 0.3 ? 'blue' : 'green' }"></span><span class="nuoyis-progress-text">{{ ((data.memory_used/data.memory_total).toFixed(2)) * 100 }}%(已用{{ Memoryandharddisk(data.memory_used) }} | 未用{{ Memoryandharddisk(data.memory_total) }})</span></div></p>
          <p>硬盘:<div class="nuoyis-progress"><span :style="{ width:((data.hdd_used/data.hdd_total).toFixed(2)) * 100 + '%','background-color': (data.hdd_used/data.hdd_total).toFixed(2) > 0.6 ? 'red' : data.cpu > 0.3 ? 'blue' : 'green' }"></span><span class="nuoyis-progress-text">{{ ((data.hdd_used/data.hdd_total).toFixed(2)) * 100 }}%(已用{{ Memoryandharddisk(data.hdd_used) }} | 未用{{ Memoryandharddisk(data.hdd_total) }})</span></div></p>
      </div>
          <div v-else><p>服务器异常，等待修复</p></div>
      </div>
    </div>
<!--    <table>-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <th id="status4">运行状态</th>-->
<!--        <th id="name">节点名</th>-->
<!--        <th id="type">类型</th>-->
<!--        <th id="location">服务器位置</th>-->
<!--        <th id="uptime">在线时间</th>-->
<!--        <th id="load"></th>-->
<!--        <th id="network"></th>-->
<!--        <th id="traffic">流量(B) ↓|↑</th>-->
<!--        <th id="cpu"></th>-->
<!--        <th id="ram">内存</th>-->
<!--        <th id="hdd">硬盘</th>-->
<!--      </tr>-->
<!--      </thead>-->
<!--      <tbody id="servers" v-for="data in nuodata.servers">-->
<!--      <tr class="tableRow" v-if="data.online4">-->
<!--        <td>-->
<!--          <div class="ui progress success">-->
<!--            <div class="bar" style="width: 100%;">-->
<!--              <span>运行中</span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </td>-->
<!--        <td>{{ data.name }}</td>-->
<!--        <td>{{ data.type }}</td>-->
<!--        <td>{{ data.location }}</td>-->
<!--        <td>{{ data.uptime }}</td>-->
<!--        <td>{{ data.load }}</td>-->
<!--        <td>{{ expandRowByteConvert(data.network_rx) }} | {{ expandRowByteConvert(data.network_tx) }}</td>-->
<!--        <td>{{ tableRowByteConvert(data.network_in) }} | {{ tableRowByteConvert(data.network_out) }}</td>-->
<!--        <td>-->
<!--          <div class="ui progress success">-->
<!--            <div class="bar" :style="{ width: data.cpu + '%' }">{{ data.cpu }}%</div>-->
<!--          </div>-->
<!--        </td>-->
<!--        <td>-->
<!--          <div class="ui progress success">-->
<!--            <div class="bar" :style="{ width:((data.memory_used/data.memory_total).toFixed(2)) * 100 + '%' }">{{ ((data.memory_used/data.memory_total).toFixed(2)) * 100 }}%</div>-->
<!--          </div>-->
<!--        </td>-->
<!--        <td>-->
<!--          <div class="ui progress success">-->
<!--            <div class="bar" :style="{ width:((data.hdd_used/data.hdd_total).toFixed(2)) * 100 + '%' }" style="width: 47%;">{{ ((data.hdd_used/data.hdd_total).toFixed(2)) * 100 }}%</div>-->
<!--          </div>-->
<!--        </td>-->
<!--      </tr>-->
<!--    </tbody>-->
<!--    </table>-->
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

const Memoryandharddisk = (data) => {
  if (data < 1024) return data.toFixed(0) + 'KB';
  else if (data < 1024 * 1024) return (data / 1024).toFixed(0) + 'MB';
  else if (data < 1024 * 1024 * 1024) return (data / 1024 / 1024).toFixed(1) + 'GB';
  else if (data < 1024 * 1024 * 1024 * 1024) return (data / 1024 / 1024 / 1024).toFixed(2) + 'TB';
  else return (data / 1024 / 1024 / 1024 / 1024).toFixed(2) + 'PB';
};
</script>

<style scoped>
.nuoyis-serverstatus{
  width: 90%;
  margin: 0 auto;
}
.nuoyis-project-text{
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  background-color: #f2f2f2;
  box-shadow: 4px 6px 16px gray;
  transition: transform 0.5s, background 0.5s;
}
.nuoyis-project-text p{
  font-size:20px;
  margin-bottom:10px;
}

.nuoyis-progress{
  display: inline-flex;
  background-color:#9f9f9f99;
  width:85%;
  height: 20px;
  font-size: 15px;
  color:white;
  border-radius: 10px 10px 10px 10px;
}

.nuoyis-progress span{
  border-radius: 10px 10px 10px 10px;
}

.nuoyis-progress-text{
  position: absolute;
}
</style>