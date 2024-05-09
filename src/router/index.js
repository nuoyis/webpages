import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/wabpages/index.vue";
import NotFound from "@/wabpages/404.vue";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // 导入NProgress的样式

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/:catchAll(.*)",
            component: NotFound,
        },
        {
            path: '/',
            name: 'nuoyis-home',
            component: Home
        },
        {
            path: '/api',
            name: 'api',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/wabpages/api.vue')
        },
        {
            path: '/apiquery',
            name: 'apiquery',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/wabpages/apiquery.vue')
        },
        {
            path: '/blogview',
            name: 'blogview',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/wabpages/blogview.vue')
        },
        {
            path: '/uptimerobot',
            name: 'uptimerobot',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/wabpages/uptimerobot.vue')
        },
        {
            path: '/serverstatus',
            name: 'serverstatus',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/wabpages/serverstatus.vue')
        },
        {
            path: '/htmlview',
            name: 'htmlview',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/wabpages/htmlview.vue')
        },
    ]
})


router.beforeEach((to, from, next) => {
    // 在每次路由切换时，开始显示进度条
    NProgress.start();
    next();
});

router.afterEach(() => {
    // 在路由切换完成后，停止进度条
    NProgress.done();
});

export default router