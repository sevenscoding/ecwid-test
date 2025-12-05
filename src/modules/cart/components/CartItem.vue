<script setup lang="ts">
import type { Product } from '@modules/category/types'
import { useCartStore } from '@shared/stores/cart'

type Props = {
  product: Product
  quantity: number
}

const props = defineProps<Props>()
const store = useCartStore()

const increase = () => store.add(props.product.id, props.product.name)
const decrease = () => store.decrease(props.product.id)
const removeItem = () => store.remove(props.product.id)
</script>

<template>
  <div class="cart-item">
    <img :src="product.imageUrl" :alt="product.name" class="cart-item__img" />

    <div class="cart-item__info">
      <div class="cart-item__name">{{ product.name }}</div>
      <div class="cart-item__price">{{ product.price }}$</div>

      <div class="cart-item__counter">
        <button @click="decrease" class="cart-item__btn">-</button>
        <span class="cart-item__qty">{{ quantity }}</span>
        <button @click="increase" class="cart-item__btn">+</button>
      </div>
    </div>
    <button @click="removeItem" class="cart-item__remove">✕</button>
  </div>
</template>

<style scoped lang="scss">
.cart-item {
  display: flex;
  gap: var(--indent-300);
  padding: var(--indent-300) 0;
  border-bottom: 1px solid var(--gray-300);

  &__img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: var(--radius-200);
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: var(--indent-200);
  }

  &__name {
    font-size: var(--font-size-200);
    font-weight: 500;
  }

  &__price {
    font-size: var(--font-size-200);
    font-weight: 600;
  }

  &__counter {
    display: flex;
    align-items: center;
    gap: var(--indent-200);
  }

  &__btn {
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--gray-200);
    border-radius: var(--radius-200);
    cursor: pointer;
    border: none;
  }

  &__remove {
    width: 28px;
    height: 28px;
    background: var(--red);
    color: white;
    border: none;
    border-radius: var(--radius-200);
    cursor: pointer;
    margin-left: auto;
  }

  &__qty {
    min-width: 20px;
    text-align: center;
    font-weight: 600;
  }
}
</style>
