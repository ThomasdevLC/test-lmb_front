import { createRouter, createWebHistory } from 'vue-router'
import SearchClientsView from '@/views/SearchClientsView.vue'
import GetClientView from '@/views/GetClientView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchClientsView,
    },
    {
      path: '/about',
      name: 'about',
      component: GetClientView,

  },
  ],
})

export default router
