import { createRouter, createWebHistory } from 'vue-router'
import AddContextView from '../views/AddContextView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AddContextView
    }
  ]
})

export default router
