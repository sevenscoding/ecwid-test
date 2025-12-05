<script setup lang="ts">
import CartIcon from '@shared/components/icons/CartIcon.vue'
import { useCartStore } from '@shared/stores/cart'
import { RouterLink } from 'vue-router'
import { ROUTES } from '@app/types/routes'

const store = useCartStore()
</script>

<template>
  <header class="header">
    <RouterLink :to="ROUTES.CART" class="header__cart">
      <CartIcon />
      <div class="header__cart-counter">{{ store.count }}</div>
    </RouterLink>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: flex-end;
  padding: var(--indent-200) var(--indent-700);

  &__cart {
    color: var(--black-100);
    text-decoration: none;
    position: relative;
    cursor: pointer;
    transition: 0.25s background-color ease-in-out;

    &:hover {
      color: var(--red);
    }

    &-counter {
      width: 1rem;
      height: 1rem;
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--red);
      color: var(--white);
      border-radius: 50%;
      font-size: var(--font-size-100);
    }
  }
}
</style>
