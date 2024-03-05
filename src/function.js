import { ref, onMounted, onUnmounted } from 'vue'
import axios from "axios";
import xmljs from 'xml-js';

// 按照惯例，组合式函数名以“use”开头
export function useMouse() {
    // 被组合式函数封装和管理的状态
    const x = ref(0)
    const y = ref(0)

    // 组合式函数可以随时更改其状态。
    function update(event) {
        x.value = event.pageX
        y.value = event.pageY
    }

    // 一个组合式函数也可以挂靠在所属组件的生命周期上
    // 来启动和卸载副作用
    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))

    // 通过返回值暴露所管理的状态
    return { x, y }
}

export function nuotime() {
    const nowdate = ref(null)
    const currentTime = ref(null)
        setInterval(() => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            nowdate.value = year;
            currentTime.value = `${year}年${month}月${day}日 ${hours}时${minutes}分${seconds}秒`;
        }, 1000);
    return { nowdate, currentTime }
}

export function nuorequst(url) {
    const nuostatus = ref(200);
    const nuodata = ref(null);

    axios.get(url)
        .then(response => {
            //判断响应的Content-Type是否为XML
            const contentType = response.headers['content-type'];
            if (contentType.includes('xml')) {
                // 如果是XML，则将其解析为JSON
                console.log(response.data)
                const jsonResult = xmljs.xml2json(response.data, { compact: true, spaces: 2 });
                console.log(jsonResult)
                nuodata.value = JSON.parse(jsonResult);
            } else {
                // 如果是JSON，则直接使用响应数据
                nuodata.value = response.data;
            }
        })
        .catch(error => {
            nuostatus.value = 500;
            nuodata.value = error.response ? error.response.data : error;
        });

    return { nuostatus, nuodata };
}