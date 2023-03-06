<script setup>
import HelloWorld from './components/HelloWorld.vue'
const name = 'Manish';
</script>

<template>
  <h1>Local registration by {{ name }}</h1>
  <HelloWorld fullName="Manish Prasad"/>
</template>

<style scoped>
h1 {
  color: red;
}
</style>