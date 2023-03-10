<script setup>

let props = defineProps({
    firstName: String,
    lastName: Number
  });
 
  
</script>

<template>
  <h1>{{ firstName }} {{ lastName }}</h1>
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>