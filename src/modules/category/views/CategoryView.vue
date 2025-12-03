<script setup lang="ts">
import { useCategory } from '@modules/category/composables/use-category'

const { categories, products } = useCategory()
console.log(categories)
console.log(products)
</script>

<template>category</template>

<style scoped></style>
