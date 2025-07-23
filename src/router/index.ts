import { createRouter, createWebHistory } from 'vue-router'
import SearchClientsView from '@/views/SearchClientsView.vue'
import GetClientView from '@/views/GetClientView.vue'
import UpdateClientView from '@/views/UpdateClientView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchClientsView,
    },
    {
      path: '/client/:id',
      name: 'client-details',
      component: GetClientView,
    },

    {
      path: '/edit',
      name: 'edit-client',
      component: UpdateClientView,

    },

  ],
})

export default router
