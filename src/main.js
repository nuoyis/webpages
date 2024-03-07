import { createApp } from 'vue';
import App from './app.vue'
import router from './router/index'
// import VueLazyload from 'vue-lazyload'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './assets/main.css'
//导入进度条插件
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // 导入NProgress的样式
const app = createApp(App)
app.use(router);
// app.use(ElementPlus)
app.mount('#main')
