<script setup lang="ts">
import { generateGradient } from '@shared/utils/generateGradient'
import type { CategoryDetails } from '@modules/category/types'

type Props = {
  category: CategoryDetails
}

defineProps<Props>()
</script>

<template>
  <div class="category-item">
    <div
      class="category-item__card"
      :class="{ 'category-item--with-image': !!category.imageUrl }"
      :style="category.imageUrl ? {} : { background: generateGradient(category.id) }"
    >
      <span class="category-item__label">{{ category.name ?? '-' }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-item {
  display: flex;
  cursor: pointer;

  &--with-image {
    background-size: cover;
    background-position: center;
  }

  .category-item__label {
    transition: 0.25s transform ease-in-out;
  }

  &__card {
    width: 100%;
    height: 10rem;
    border-radius: var(--radius-200);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-weight: 600;
    font-size: var(--font-size-400);

    &:hover .category-item__label {
      transform: translateY(-4px);
    }
  }
}
</style>
