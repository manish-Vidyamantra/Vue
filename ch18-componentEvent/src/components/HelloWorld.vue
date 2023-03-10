<script setup>
import { onMounted } from 'vue';
</script>

<template>
 <button @click="$emit('incrementCount')">Increase</button>
</template>

<style scoped>
 h1 {
  color: red;
 }
</style>