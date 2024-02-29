import { ref, onMounted, onUnmounted } from 'vue'

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