<script setup>
  defineProps(['fullName']);
</script>

<template>
  <h1>{{ fullName }}</h1>
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>