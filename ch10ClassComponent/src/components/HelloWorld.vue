<script setup>
  const msg = 'Hello World';
</script>

<template>
  <h1 class="text-blue">{{ msg }}</h1>
  <h1 :class="$attrs.class">Hello I am new Element</h1>
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>