import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import('@/nuomain/main.vue')
        },
        {
            path: "/aboutme",
            name: "aboutme",
            component: () => import('@/nuomain/aboutme/aboutme.vue')
        },
        {
            path: "/announcement",
            name: "announcement",
            component: () => import('@/nuomain/announcement/announcement.vue')
        },
]
})

export default router