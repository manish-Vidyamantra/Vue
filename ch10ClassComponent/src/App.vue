<script setup>
import HelloWorld from './components/HelloWorld.vue'
const name = 'Manish';
</script>

<template>
  <h1 class="blue">Local registration by {{ name }}</h1>
  <HelloWorld :class="{blue:true}"/>
</template>

<style scoped>
.blue {
  color: blue;
}
</style>