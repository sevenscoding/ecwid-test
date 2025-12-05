<script setup lang="ts">
import { onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'
import CartItem from '@modules/cart/components/CartItem.vue'
import { useCartStore } from '@shared/stores/cart'
import { useCart } from '@modules/cart/composables/use-cart'
import BackArrowIcon from '@shared/components/icons/BackArrowIcon.vue'
import LoadingSpinner from '@shared/components/LoadingSpinner.vue'

const router = useRouter()

const { getCartProducts, productsMap, isProductsLoading, submitOrder, total } = useCart()

const cartStore = useCartStore()

const ids = computed(() => cartStore.cart.map(i => i.id))

onBeforeMount(() => getCartProducts(ids.value))
</script>

<template>
  <div v-if="isProductsLoading" class="cart__loading">
    <LoadingSpinner />
  </div>
  <div v-else class="cart">
    <div class="cart__back" @click="router.back()">
      <BackArrowIcon />
      Back
    </div>
    <h1 class="cart__title">Cart</h1>
    <ul class="cart__list">
      <CartItem
        v-for="item in cartStore.cart"
        :key="item.id"
        :product="productsMap[item.id]"
        :quantity="item.qty"
      />
    </ul>
    <div v-if="cartStore.cart.length > 0" class="cart__total">
      Total: <strong>{{ total }}$</strong>
    </div>
    <button v-if="cartStore.cart.length > 0" class="cart__btn" @click="submitOrder">
      Place order
    </button>
    <div v-else class="cart__empty">Cart is empty</div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  padding: var(--indent-700);

  &__back {
    display: flex;
    align-items: center;
    gap: var(--indent-200);
    cursor: pointer;

    &:hover {
      color: var(--gray-100);
    }
  }

  &__btn {
    width: 100%;
    cursor: pointer;
    padding: var(--indent-200);
    border: 1px solid var(--color-gray-100);
    border-radius: var(--radius-200);
    font-size: var(--font-size-200);
    background-color: var(--yellow);
    font-weight: 600;
    transition: background 0.2s;
    margin-top: var(--indent-500);

    &:hover {
      background: var(--orange);
    }
  }

  &__total {
    padding: var(--indent-400) 0;
    font-size: var(--font-size-300);
    text-align: right;
  }

  &__empty {
    padding: var(--indent-700);
    background-color: var(--gray-200);
    text-align: center;
    font-size: var(--font-size-300);
    border-radius: var(--radius-200);
  }

  &__loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
  }
}
</style>
