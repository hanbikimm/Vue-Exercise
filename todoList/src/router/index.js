import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: () => import('@/components/todo/TodoMain.vue'),
            name: "TodoMain",
        },
        {
            path: "/todo/:id",
            component: () => import('@/components/todo/TodoDetail.vue'),
            name: "TodoDetail",
        },
        {
            path: "/user",
            component: () => import('@/components/user/UserMain.vue'),
            name: "UserMain",
        },

    ]
});

export default router;