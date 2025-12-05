<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProduct } from '@modules/product/composables/use-product'
import BackArrowIcon from '@shared/components/icons/BackArrowIcon.vue'
import LoadingSpinner from '@shared/components/LoadingSpinner.vue'
import { useCartStore } from '@shared/stores/cart'

const store = useCartStore()

const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)

const { getProduct, product, loadingProduct } = useProduct()

onBeforeMount(() => getProduct(id))
</script>

<template>
  <div class="product-view__link product-view__back" @click="router.back()">
    <BackArrowIcon />
    Back
  </div>
  <div v-if="loadingProduct" class="product-view__loading">
    <LoadingSpinner />
  </div>
  <div v-else class="product-view">
    <div class="product-view__img">
      <img
        v-if="product?.imageUrl"
        :src="product.imageUrl"
        :alt="product.name"
        class="product-view__img-src"
      />
    </div>
    <div class="product-view__description">
      <h1>{{ product?.name ?? '-' }}</h1>
      <div v-html="product?.description" />
      <div class="product-view__price">{{ product?.price ?? '-' }}$</div>
      <button v-if="product" class="product-view__btn" @click="store.add(product.id, product.name)">
        Buy
      </button>
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

  &__loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
  }

  &__price {
    font-size: var(--font-size-400);
  }

  &__back {
    display: flex;
    align-items: center;
    gap: var(--indent-200);
    cursor: pointer;

    &:hover {
      color: var(--gray-100);
    }
  }

  &__img {
    width: 50%;

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
    padding: var(--indent-700);

    @media (max-width: 900px) {
      width: 100%;
      padding: var(--indent-200);
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
