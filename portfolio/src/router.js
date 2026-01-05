import { createWebHistory, createRouter } from 'vue-router'

import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue';
import Aniseeds from './components/projects/Aniseeds.vue';

const routes = [
  {path: '/', component: About},
  {path: '/about', component: About},
  {path: '/projects', component: Projects},
  {path: '/contact', component: Contact},
  {path: '/projects/aniseeds', component: Aniseeds},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
