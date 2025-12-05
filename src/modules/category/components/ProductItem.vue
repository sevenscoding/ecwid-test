<script setup lang="ts">
import type { Product } from '@modules/category/types'
import { generateGradient } from '@shared/utils/generateGradient'

type Props = {
  product: Product
}

type Emits = {
  add: []
}

defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<template>
  <div class="product-item">
    <div class="product-item__image-wrapper">
      <img
        v-if="product.imageUrl"
        :src="product.imageUrl"
        :alt="product.name"
        loading="lazy"
        class="product-item__image"
      />

      <div
        v-else
        class="product-item__image-fallback"
        :style="{ background: generateGradient(product.id) }"
      >
        <span class="product-item__fallback-text">
          {{ product?.name ?? '-' }}
        </span>
      </div>
    </div>

    <div class="product-item__info">
      <div class="product-item__name">{{ product?.name ?? '-' }}</div>
      <div class="product-item__price">{{ product?.price ?? '-' }}$</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--indent-200);
  cursor: pointer;
  user-select: none;
  padding-bottom: var(--indent-600);

  transition: 0.2s transform ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }

  &__image-wrapper {
    border-radius: var(--radius-200);
    margin-bottom: var(--indent-100);
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 40rem;
    object-fit: cover;
    display: block;
  }

  &__image-fallback {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-200);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--indent-200);
    text-align: center;
    color: var(--white);
    font-weight: 600;
  }

  &__fallback-text {
    font-size: var(--font-size-300);
    line-height: 1.2;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--indent-300);
  }

  &__name {
    font-size: var(--font-size-200);
    text-align: center;
    font-weight: 500;
    line-height: 1.2;
  }

  &__price {
    font-size: var(--font-size-300);
    font-weight: 700;
  }
}
</style>
