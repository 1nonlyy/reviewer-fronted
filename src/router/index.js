// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Импорт страниц
import Home from '@/App.vue'
import AddReview from '@/AddReview.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/add-review', name: 'AddReview', component: AddReview }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
