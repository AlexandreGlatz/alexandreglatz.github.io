import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from "../components/pageComponents/HelloWorld.vue";
import About from "../components/pageComponents/About.vue"
import Projects from "../components/pageComponents/Projects.vue";
import Aniseeds from "../components/Projects/Aniseeds.vue";
import ICF from "../components/Projects/ICF.vue";
import Read from "../components/Projects/Read.vue";
import Engine from "../components/Projects/Engine.vue";
import Contact from "../components/pageComponents/Contact.vue";

const routes = [
    //Main pages
    {
        path: "/",
        name: "Home",
        component: About
    },
    {
        path: "/about",
        name: "About",
        component: About
    },

    {
        path: "/projects",
        name: "Projects",
        component: Projects
    },

    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },


    //Projects
    {
        path: "/projects/Aniseeds",
        name: "Aniseeds",
        component: Aniseeds
    },
    {
        path: "/projects/ICF",
        name: "ICF",
        component: ICF
    },
    {
        path: "/projects/Read",
        name: "Read",
        component: Read
    },
    {
        path: "/projects/Engine",
        name: "Engine",
        component: Engine
    },

];

const router = createRouter({
    history: createWebHistory('/alexandreglatz.github.io/'),
    routes,
});

export default router;