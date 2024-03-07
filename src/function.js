import { ref, onMounted, onUnmounted } from 'vue'
import axios from "axios";
import xmljs from 'xml-js';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // 导入NProgress的样式

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

    const get = () => {
        NProgress.start(); // 启动进度条

        axios.get(url)
            .then(response => {
                handleResponse(response);
            })
            .catch(error => {
                handleError(error);
            })
            .finally(() => {
                NProgress.done(); // 无论请求成功或失败都停止进度条
            });
    };

    const post = (data) => {
        NProgress.start(); // 启动进度条

        axios.post(url, data)
            .then(response => {
                handleResponse(response);
            })
            .catch(error => {
                handleError(error);
            })
            .finally(() => {
                NProgress.done(); // 无论请求成功或失败都停止进度条
            });
    };

    const handleResponse = (response) => {
        // 判断响应的Content-Type是否为XML
        const contentType = response.headers['content-type'];
        if (contentType && contentType.includes('xml')) {
            // 如果是XML，则将其解析为JSON
            const jsonResult = xmljs.xml2js(response.data, { compact: true, spaces: 4 });
            nuodata.value = jsonResult;
        } else {
            // 如果是JSON，则直接使用响应数据
            nuodata.value = response.data;
        }
        nuostatus.value = response.status;
    };

    const handleError = (error) => {
        nuostatus.value = error.response ? error.response.status : 500;
        nuodata.value = error.response ? error.response.data : error;
    };

    return { nuostatus, nuodata, get, post };
}

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 * from https://blog.csdn.net/LW0512/article/details/120287699
 */
export function parseTime(time, cFormat) {
    if (arguments.length === 0) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
            time = parseInt(time)
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
        const value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
        return value.toString().padStart(2, '0')
    })
    return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
    if (('' + time).length === 10) {
        time = parseInt(time) * 1000
    } else {
        time = +time
    }
    const d = new Date(time)
    const now = Date.now()

    const diff = (now - d) / 1000

    if (diff < 30) {
        return '刚刚'
    } else if (diff < 3600) {
        // less 1 hour
        return Math.ceil(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前'
    } else if (diff < 3600 * 24 * 2) {
        return '1天前'
    }
    if (option) {
        return parseTime(time, option)
    } else {
        return (
            d.getMonth() +
            1 +
            '月' +
            d.getDate() +
            '日' +
            d.getHours() +
            '时' +
            d.getMinutes() +
            '分'
        )
    }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse(
        '{"' +
        decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"')
            .replace(/\+/g, ' ') +
        '"}'
    )
}