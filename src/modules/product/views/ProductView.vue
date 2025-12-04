<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useProduct } from '@modules/product/composables/use-product'
import { ROUTES } from '@app/types/routes'
import BackArrowIcon from '@shared/components/icons/BackArrowIcon.vue'

const route = useRoute()
const id = Number(route.params.id)

const { getProduct, product, loadingProduct } = useProduct()

onBeforeMount(() => getProduct(id))
</script>

<template>
  <RouterLink :to="ROUTES.HOME" class="product-view__link product-view__back">
    <BackArrowIcon />
    Back to Categories
  </RouterLink>
  <div class="product-view">
    <div class="product-view__img">
      <img
        v-if="product?.imageUrl"
        :src="product.imageUrl"
        :alt="product.name"
        loading="lazy"
        class="product-view__img-src"
      />
    </div>
    <div class="product-view__description">
      <h1>{{ product?.name ?? '-' }}</h1>
      <div v-html="product?.description" />
      <div class="product-view__price">
        {{ product?.price ?? '-' }}
      </div>
      <button class="product-view__btn">Buy</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-view {
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: var(--indent-700);
  }

  &__img {
    max-width: 50%;

    @media (max-width: 900px) {
      width: 100%;
    }

    &-src {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  &__description {
    width: 50%;
    padding: var(--indent-500);

    @media (max-width: 900px) {
      width: 100%;
    }
  }

  &__link {
    color: inherit;
    text-decoration: none;
  }

  &__back {
    display: flex;
    align-items: center;
    gap: var(--indent-200);
    margin-bottom: var(--indent-700);

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
}
</style>
