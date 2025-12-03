<script setup lang="ts">
import { useToast } from '@shared/composables/use-toast'

const { messages } = useToast()
</script>

<template>
  <div class="toast-container">
    <div v-for="(msg, i) in messages" :key="i" class="toast">
      {{ msg }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;
}

.toast {
  background: #ff4d4f;
  color: white;
  padding: 12px 16px;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.25s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
