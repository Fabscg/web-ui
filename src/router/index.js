import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      icon: 'house',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      icon: 'user',
      component: () => import('@/views/About.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        icon: 'briefcase',
        component: () => import('@/views/Projects.vue')
    },
    {
        path: '/skills',
        name: 'skills',
        icon: 'tools',
        component: () => import('@/views/Skills.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        icon: 'envelope',
        component: () => import('@/views/Contact.vue')
    }
  ],
  linkActiveClass: 'active',
})

export default router
