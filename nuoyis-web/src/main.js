import { createApp } from 'vue';
import Header from './header.vue'
import App from './app.vue'
import router from './router/index'
// import VueLazyload from 'vue-lazyload'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './assets/main.css'
const app = createApp(App)
const header = createApp(Header)
app.use(router);
// app.use(ElementPlus)
header.mount("#header")
app.mount('#main')