<script setup>

import {ref, inject} from 'vue';
const count = inject('count');
  
</script>

<template>
  <h1>{{ count }}</h1>

</template>

<style scoped>
  h1 {
    color: red;
  }
</style>