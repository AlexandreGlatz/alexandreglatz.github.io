import { createWebHashHistory, createRouter } from 'vue-router'

import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue';
import Aniseeds from './components/projects/Aniseeds.vue';
import Engine from './components/projects/Engine.vue';
import Read from './components/projects/Read.vue';

const routes = [
    {path: '/', component: About},
    {path: '/about', component: About},
    {path: '/projects', component: Projects},
    {path: '/contact', component: Contact},
    {path: '/projects/aniseeds', component: Aniseeds},
    {path: '/projects/engine', component: Engine},
    {path: '/projects/read', component: Read},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
