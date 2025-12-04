<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { RouterLink } from 'vue-router'

import { useProducts } from '@modules/category/composables/use-products'
import LoadingSpinner from '@shared/components/LoadingSpinner.vue'
import CategoryItem from '@modules/category/components/CategoryItem.vue'
import ProductItem from '@modules/category/components/ProductItem.vue'
import { useCategories } from '@modules/category/composables/use-categories'

const { categories, loadingCategories, getCategories } = useCategories()
const { products, loadingProducts, getProducts } = useProducts()

onBeforeMount(async () => {
  await getCategories()
  await getProducts()
})
</script>

<template>
  <div class="categories-view">
    <div class="categories-view__block">
      <h2 class="categories-view__title">Categories:</h2>
      <div class="categories-view__categories">
        <div v-if="loadingCategories" class="categories-view__loading">
          <LoadingSpinner />
        </div>
        <div v-for="cat in categories" :key="cat.id">
          <RouterLink :to="`/category/${cat.id}`" class="categories-view__link">
            <CategoryItem :category="cat" />
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="categories-view__block">
      <h2 class="categories-view_title">Products:</h2>
      <div class="categories-view__products">
        <div v-if="loadingProducts" class="categories-view__loading">
          <LoadingSpinner />
        </div>
        <div v-for="product in products" :key="product.id">
          <RouterLink :to="`/product/${product.id}`" class="categories-view__link">
            <ProductItem :product="product" />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.categories-view {
  &__loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
  }

  &__title {
    font-size: var(--font-size-500);
  }

  &__link {
    color: inherit;
    text-decoration: none;
  }

  &__block {
    margin-bottom: var(--indent-500);
  }

  &__products {
    display: grid;
    gap: var(--indent-500);
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  &__categories {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--indent-500);

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
