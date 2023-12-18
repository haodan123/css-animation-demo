import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/testSliter1.vue')
    },
    {
      path: '/login1',
      name: 'login1',
      component: () => import('@/views/logIn1.vue')
    },
    {
      path: '/xielunyan',
      name: 'xielunyan',
      component: () => import('@/views/xielunyan.vue')
    }
  ]
})

export default router
