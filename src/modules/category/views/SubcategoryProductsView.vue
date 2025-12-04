<script setup lang="ts">
import LoadingSpinner from '@shared/components/LoadingSpinner.vue'
import { RouterLink, useRoute } from 'vue-router'
import ProductItem from '@modules/category/components/ProductItem.vue'
import { useProducts } from '@modules/category/composables/use-products'
import { onBeforeMount } from 'vue'
import { useCategories } from '@modules/category/composables/use-categories'
import { ROUTES } from '@app/types/routes'

const route = useRoute()
const id = Number(route.params.id)

const { products, loadingProducts, getProductsByCategoryId } = useProducts()

const { getSubcategoryNameById, categoryName, parentCategoryId } = useCategories()

onBeforeMount(async () => {
  await getProductsByCategoryId(id)
  await getSubcategoryNameById(id)
})
</script>

<template>
  <div class="subcategory-view">
    <div class="subcategory-view__breadcrumbs">
      <RouterLink :to="ROUTES.HOME" class="subcategories-view__link subcategory-view__breadcrumb">
        Home
      </RouterLink>
      <RouterLink
        :to="`/category/${parentCategoryId}`"
        class="subcategories-view__link subcategory-view__breadcrumb"
      >
        Categories
      </RouterLink>
      <span>{{ categoryName }}</span>
    </div>
    <h1 v-if="categoryName" class="subcategory-view__title">{{ categoryName }}</h1>
    <div v-if="loadingProducts" class="subcategory-view__loading">
      <LoadingSpinner />
    </div>
    <div class="subcategory-view__products">
      <div v-for="product in products" :key="product.id">
        <RouterLink :to="`/product/${product.id}`" class="subcategory-view__link">
          <ProductItem :product="product" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.subcategory-view {
  &__title {
    font-size: var(--font-size-500);
  }

  &__breadcrumbs {
    display: flex;
    align-items: center;
    gap: var(--indent-200);
    color: var(--black-100);

    & > *:not(:last-child)::after {
      content: '/';
      margin: 0 4px;
      color: var(--black-100);
    }
  }

  &__products {
    display: grid;
    gap: var(--indent-500);
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  &__link {
    color: inherit;
    text-decoration: none;
  }

  &__breadcrumb {
    color: var(--black-100);
    text-decoration: none;

    &:hover {
      color: var(--gray-100);
    }
  }
}
</style>
