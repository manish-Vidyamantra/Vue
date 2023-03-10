<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {inject} from 'vue';
const count = inject('count');
</script>

<template>
  <h1>Provide & Inject</h1>
  <button v-on:click="count++">increment</button>
  <!-- <input  v-model="message"> -->
  <HelloWorld />
</template>

<style scoped>
h1 {
  color: red;
}
</style>