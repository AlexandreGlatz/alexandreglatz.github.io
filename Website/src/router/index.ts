import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from "../components/HelloWorld.vue";
import About from "../components/About.vue"
import Projects from "../components/Projects.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HelloWorld
    },
    {
        path: "/about",
        name: "About",
        component: About
    }

    {
        path: "/projects",
        name: "Projects",
        component: Projects
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;