<template>
  <main class="p-layout">
    <Calculator />
  </main>
</template>

<script setup lang="ts">
import Calculator from './components/Calculator.vue';
</script>

<style scoped>
main {
  display: flex;
  flex: 1 1 auto;
  font-size: 1.3rem;
}
</style>
