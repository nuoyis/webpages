import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/nuomain/index/index.vue";
import NotFound from "@/nuomain/404/404.vue";

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
            path: '/aboutme',
            name: 'nuoyis-about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/nuomain/aboutme/aboutme.vue')
        },
        {
            path: '/youlian',
            name: 'youlian',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/nuomain/youlian/youlian.vue')
        },
    ]
})

export default router