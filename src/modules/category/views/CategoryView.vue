<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useCategory } from '@modules/category/composables/use-category'
import LoadingSpinner from '@shared/components/LoadingSpinner.vue'
import CategoryItem from '@modules/category/components/CategoryItem.vue'

const { categories, products, loading, fetchCatalog } = useCategory()

onBeforeMount(fetchCatalog)
</script>

<template>
  <div class="category-view">
    <div v-if="loading" class="category-view__loading">
      <LoadingSpinner />
    </div>
    <div v-else class="category-view__content">
      <div class="category-view__categories">
        <div v-for="cat in categories" class="category-item" :key="cat.id">
          <CategoryItem :category="cat" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-view {
  &__loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
  }

  &__categories {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--indent-500);

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
