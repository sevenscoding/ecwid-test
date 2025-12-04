import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from '@/app/types/routes'

const CategoriesView = () => import('@modules/category/views/CategoriesView.vue')
const SubcategoriesView = () => import('@modules/category/views/SubcategoriesView.vue')
const SubcategoryProductsView = () => import('@modules/category/views/SubcategoryProductsView.vue')
const ProductView = () => import('@modules/product/views/ProductView.vue')
const CartView = () => import('@modules/cart/views/CartView.vue')

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: ROUTES.HOME, component: CategoriesView },
    { path: ROUTES.CATEGORIES, component: SubcategoriesView },
    { path: ROUTES.SUBCATEGORY, component: SubcategoryProductsView },
    { path: ROUTES.PRODUCT, component: ProductView },
    { path: ROUTES.CART, component: CartView }
  ]
})
