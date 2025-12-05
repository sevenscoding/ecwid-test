<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@shared/stores/cart'
import { useCart } from '@modules/cart/composables/use-cart'
import BackArrowIcon from '@shared/components/icons/BackArrowIcon.vue'
import CartI

const router = useRouter()

const { getCartProducts, products } = useCart()

const cartStore = useCartStore()

onBeforeMount(() => getCartProducts(cartStore.cart))
</script>

<template>
  <div class="cart">
    <div class="cart__link cart__back" @click="router.back()">
      <BackArrowIcon />
      Back
    </div>
    <h1 class="cart__title">Cart</h1>
    <ul class="cart__list">
      <CartItem v-for="item in products" :key="item.id" :product="products" :qty="item.qty" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.cart-list {
  display: flex;
  flex-direction: column;
}
</style>
