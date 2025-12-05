<script setup lang="ts">
import { defineProps } from 'vue'
import { useCartStore } from '@shared/stores/cart'
import type { Product } from '@modules/category/types'

type Props = {
  product: Product
  qty: number
}

const props = defineProps<Props>()
const store = useCartStore()

const increase = () => {
  store.add(props.product.id, props.product.name)
}

const decrease = () => {
  store.remove(props.product.id)
}
</script>

<template>
  <div class="cart-item">
    <img
      v-if="product.imageUrl"
      :src="product.imageUrl"
      :alt="product.name"
      class="cart-item__image"
    />

    <div class="cart-item__info">
      <div class="cart-item__name">{{ product.name }}</div>
      <div class="cart-item__price">{{ product.price }}$</div>

      <div class="cart-item__controls">
        <button @click="decrease" class="cart-item__btn">−</button>
        <span class="cart-item__qty">{{ qty }}</span>
        <button @click="increase" class="cart-item__btn">+</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-item {
  display: flex;
  align-items: center;
  gap: var(--indent-400);
  padding: var(--indent-300);
  border-bottom: 1px solid var(--gray-300);

  &__image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: var(--radius-200);
  }

  &__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--indent-200);
  }

  &__name {
    font-size: var(--font-size-200);
    font-weight: 600;
  }

  &__price {
    font-size: var(--font-size-200);
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: var(--indent-200);
  }

  &__btn {
    width: 32px;
    height: 32px;
    border-radius: var(--radius-100);
    cursor: pointer;
    border: 1px solid var(--gray-300);
    background: var(--gray-200);
    font-size: 20px;
    font-weight: 600;

    &:hover {
      background: var(--gray-300);
    }
  }

  &__qty {
    font-size: var(--font-size-200);
    min-width: 24px;
    text-align: center;
    font-weight: 600;
  }
}
</style>
