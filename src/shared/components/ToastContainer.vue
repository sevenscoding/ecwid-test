<script setup lang="ts">
import { useToast } from '@shared/composables/use-toast'

const { messages } = useToast()
</script>

<template>
  <div class="toast-container">
    <div v-for="(msg, i) in messages" :key="i" class="toast" :class="`toast--${msg.type}`">
      {{ msg.message }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.toast-container {
  position: fixed;
  top: var(--indent-400);
  right: var(--indent-400);
  display: flex;
  flex-direction: column;
  gap: var(--indent-300);
  z-index: 9999;
}

.toast {
  padding: var(--indent-300) var(--indent-400);
  border-radius: var(--radius-200);
  color: var(--white);
  font-size: var(--font-size-150);
  box-shadow: var(--shadow-100);
  animation: fadeIn 0.25s ease;
  font-weight: 500;

  &--error {
    background: var(--red);
  }

  &--success {
    background-color: var(--green);
    color: var(--white);
  }
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
