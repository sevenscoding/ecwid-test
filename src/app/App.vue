<script setup lang="ts">
import MainLayout from '@app/components/MainLayout.vue'
import ToastContainer from '@shared/components/ToastContainer.vue'
</script>

<template>
  <div class="app-view">
    <ToastContainer />
    <MainLayout>
      <router-view />
    </MainLayout>
  </div>
</template>

<style lang="scss" scoped></style>
