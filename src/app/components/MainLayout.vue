<template>
  <div class="layout">
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  padding: 0 var(--indent-700);
}
</style>
