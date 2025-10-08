import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      linkActiveClass: 'active',
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
        name: 'Projects',
        icon: 'briefcase',
        component: () => import('@/views/Projects.vue')
    },
    {
        path: '/skills',
        name: 'Skills',
        icon: 'tools',
        component: () => import('@/views/Skills.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        icon: 'envelope',
        component: () => import('@/views/Contact.vue')
    }
  ]
})

export default router
