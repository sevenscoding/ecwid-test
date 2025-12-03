import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '@/app/types/routes'

const CategoryView = () => import('@modules/category/views/CategoryView.vue')
const ProductView = () => import('@modules/product/views/ProductView.vue')
const CartView = () => import('@modules/cart/views/CartView.vue')

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: ROUTES.CATEGORY, component: CategoryView },
    { path: ROUTES.PRODUCT, component: ProductView },
    { path: ROUTES.CART, component: CartView }
  ]
})
