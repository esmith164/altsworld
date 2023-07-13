import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Landing
    }
  ]
})

export default router
