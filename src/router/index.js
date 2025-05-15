// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Импорт страниц
import Home from '@/pages/Home.vue'
import ReviewForm from '@/ReviewForm.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/add-review', name: 'ReviewForm', component: ReviewForm }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
