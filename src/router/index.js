import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/nuomain/index/index.vue";
import About from "@/nuomain/aboutme/aboutme.vue";
import Announcement from "@/nuomain/announcement/announcement.vue"
import NotFound from "@/nuomain/404/404.vue";

const routes = [
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/aboutme",
        name: "Aboutme",
        component: About,
    },
    {
        path: "/announcement",
        name: "Announcement",
        component: Announcement,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;