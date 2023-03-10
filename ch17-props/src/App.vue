<script setup>
import {ref} from 'vue';

import HelloWorld from './components/HelloWorld.vue'

const fullName = {
  firstName: 'Manish Kumar',
  lastName: 'Prasad'
}
</script>

<template>
  <h1>Local registration by </h1>
  <HelloWorld v-bind="fullName"/>
</template>

<style scoped>
h1 {
  color: red;
}
</style>