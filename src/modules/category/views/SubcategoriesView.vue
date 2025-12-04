<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { useCategories } from '@modules/category/composables/use-categories'
import ProductItem from '@modules/category/components/ProductItem.vue'
import CategoryItem from '@modules/category/components/CategoryItem.vue'
import LoadingSpinner from '@shared/components/LoadingSpinner.vue'
import { onBeforeMount } from 'vue'
import { useProducts } from '@modules/category/composables/use-products'
import { ROUTES } from '@app/types/routes'
import BackArrowIcon from '@shared/components/icons/BackArrowIcon.vue'

const route = useRoute()
const id = Number(route.params.id)

const { categories, loadingCategories, getSubcategoryNameById, categoryName, getCategories } =
  useCategories()

const { products, loadingProducts, getProductsByCategoryId } = useProducts()

onBeforeMount(async () => {
  await getCategories(id)
  await getSubcategoryNameById(id)
  await getProductsByCategoryId(id)
})
</script>

<template>
  <div class="subcategories-view">
    <RouterLink :to="ROUTES.HOME" class="subcategories-view__link subcategories-view__back">
      <BackArrowIcon />
      Back to Categories
    </RouterLink>
    <h1 v-if="categoryName" class="subcategories-view__title">{{ categoryName }}</h1>
    <div class="subcategories-view__block">
      <div class="subcategories-view__subcategories">
        <div v-if="loadingCategories" class="subcategories-view__loading">
          <LoadingSpinner />
        </div>
        <div v-for="cat in categories" :key="cat.id">
          <RouterLink :to="`/subcategory/${cat.id}`" class="subcategories-view__link">
            <CategoryItem :category="cat" />
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="subcategories-view__products">
      <div v-if="loadingProducts" class="subcategories-view__loading">
        <LoadingSpinner />
      </div>
      <div v-for="product in products" :key="product.id">
        <RouterLink :to="`/product/${product.id}`" class="subcategories-view__link">
          <ProductItem :product="product" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.subcategories-view {
  &__block {
    margin-bottom: var(--indent-500);
  }

  &__title {
    font-size: var(--font-size-500);
  }

  &__back {
    display: flex;
    align-items: center;
    gap: var(--indent-200);

    &:hover {
      color: var(--gray-100);
    }
  }

  &__block {
    margin-bottom: var(--indent-500);
  }

  &__products {
    display: grid;
    gap: var(--indent-500);
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  &__subcategories {
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

  &__link {
    color: inherit;
    text-decoration: none;
  }
}
</style>
