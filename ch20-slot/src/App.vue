<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {ref, provide} from 'vue'
const message = ref('Hello');

provide('message', message);
</script>

<template>
<input v-model="message">
<HelloWorld />

</template>

<style scoped>
h1 {
  color: green;
}
</style>