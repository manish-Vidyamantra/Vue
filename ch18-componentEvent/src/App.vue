<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {ref} from 'vue'
let count= ref(0);
</script>

<template>
  <h1>Count: {{ count }}</h1>
  <HelloWorld @incrementCount="count++"/>
</template>

<style scoped >
h1 {
  color: green;
}
</style>