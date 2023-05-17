import Vue from "vue";
import VueRouter from "vue-router";
import namedRoutes from "./NamedRouter"

Vue.use(VueRouter);

const routes = [
    ...namedRoutes,
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;