import { createApp } from 'vue';
import App from './app.vue'
import router from './router/index'
// import VueLazyload from 'vue-lazyload'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './assets/main.css'
const app = createApp(App)
app.use(router);
// app.use(ElementPlus)
app.mount('#main')
