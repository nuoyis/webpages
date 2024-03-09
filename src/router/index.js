import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/nuomain/index/index.vue";
import NotFound from "@/nuomain/404/404.vue";
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
            path: '/aboutintroduce',
            name: 'nuoyis-about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/nuomain/aboutintroduce/aboutintroduce.vue')
        },
        {
            path: '/youlian',
            name: 'youlian',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/nuomain/youlian/youlian.vue')
        },
        {
            path: '/api',
            name: 'api',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/nuomain/api/api.vue')
        },
        {
            path: '/apiquery',
            name: 'apiquery',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/nuomain/api/apiquery.vue')
        },
        {
            path: '/blogview',
            name: 'blogview',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/nuomain/blogview/blogview.vue')
        },
        {
            path: '/history',
            name: 'history',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/nuomain/history/history.vue')
        },
        {
            path: '/uptimerobot',
            name: 'uptimerobot',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/nuomain/uptimerobot/uptimerobot.vue')
        },
        {
            path: '/serverstatus',
            name: 'serverstatus',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/nuomain/serverstatus/serverstatus.vue')
        },
        {
            path: '/htmlview',
            name: 'htmlview',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/nuomain/htmlview/htmlview.vue')
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