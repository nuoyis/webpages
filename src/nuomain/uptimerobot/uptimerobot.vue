<template>
  <div class="nuoyis-uptimerobot">
    <div class="nuoyis-uptimerobot-status">
      <div class="nuoyis-uptimerobot-item">
        <div class="nuoyis-biaoti">
          <h1>站点状态监测</h1>
          <span class="nuoyis-biaoti-underline"></span>
        </div>
        <table>
          <thead>
              <tr>
                <th>状态</th>
                <th>名称</th>
                <th>创建时间</th>
                <th>请求类型</th>
                <th>过去7天</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in nuodata.monitors" :key="data.id">
                <td :class="{ 'status-up': data.status === 2, 'status-down': data.status === 9 }">
                  {{ data.status === 2 ? 'up' : 'down' }}
                </td>
                <td><a :href="data.url">{{ data.friendly_name }}</a></td>
                <td>{{ parseTime(data.create_datetime, '{y}-{m}-{d}') }}</td>
                <td>{{ UptimeRobottype(data.type) }}</td>
                <td>{{ calculateAverageUptime(data.logs) }}%</td>
              </tr>
            </tbody>
<!--          {{ data.create_datetime }}-->
<!--          <p v-for="log in data.logs">-->
<!--            {{ log.reason.code }}-->
<!--          </p>-->

        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nuorequst, parseTime } from '@/function.js'
const { nuostatus, nuodata, get, post } = nuorequst('https://api.uptimerobot.com/v2/getMonitors')
const postData = { api_key: 'ur1745273-524a0e88d422ce95b442a4dd', format: 'json', logs: '1', log_types: '1-2' };
const fetchData = () => {
  post(postData);
};

// 初始加载数据
fetchData();

// 每半小时刷新一次数据
setInterval(fetchData, 30 * 60 * 1000);
const calculateAverageUptime = (logs) => {
  if (!logs || logs.length === 0) {
    return 'N/A';
  }

  // 过滤出失败的记录
  const failureLogs = logs.filter(log => log.type === 1);

  if (failureLogs.length === 0) {
    return '100';
  }

  // 计算失败的总时长和总记录数
  const totalDuration = failureLogs.reduce((sum, log) => sum + log.duration, 0);
  const totalRecords = failureLogs.length;

  // 计算平均可用率
  const averageUptime = 1 - totalDuration / (totalRecords * 24 * 60 * 60 * 1000); // 转换为天

  return (averageUptime * 100).toFixed(2);
};

const UptimeRobottype = (type) => {
  switch (type) {
    case 1:
      return "HTTP(s)";
    case 2:
      return "Keyword";
    case 3:
      return "Ping";
    case 4:
      return "Port";
    case 5:
      return "Heartbeat";
  }
}
</script>

<style scoped>
.nuoyis-uptimerobot{
  width:70%;
  margin:0 auto;
}

.status-up{
  color: #43a047;
}
.status-down{
  color: #ff5252;
}
table{
  margin: 0;
  width: 100%;
  border: none;
  text-align: left;
  box-shadow: none;
  border-spacing: 0;
  position: relative;
  transition: all .3s;
  -webkit-box-shadow: none;
  border-collapse: separate;
}

table tbody tr td{
  width: 20%;
}

table tbody td{
  font-size: 14px;
  line-height: 24px;
}
table tbody td a{
  text-decoration: none;
  color:white;

}


</style>