import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/products', component: () => import('../views/ProductsView.vue') },
    { path: '/product/:id', component: () => import('../views/ProductDetailView.vue') },
    { path: '/about', component: () => import('../views/AboutView.vue') },
    { path: '/contact', component: () => import('../views/ContactView.vue') },
  ],
})

export default router
