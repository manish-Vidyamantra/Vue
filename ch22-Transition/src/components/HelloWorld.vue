<script setup>
import { ref } from 'vue';
const show = ref(true);
</script>

<template>
  <button @click="show = !show">button</button>
  <Transition>
    <h1 v-if="show">Hello</h1>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>