<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useCategory } from '@modules/category/composables/use-category'
import LoadingSpinner from '@shared/components/LoadingSpinner.vue'
import { generateGradient } from '@shared/utils/generateGradient'

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
          <div
            class="category-card"
            :class="{ 'category-card--with-image': !!cat.imageUrl }"
            :style="cat.imageUrl ? {} : { background: generateGradient(cat.id) }"
          >
            <span>{{ cat.name }}</span>
          </div>
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
}
</style>
