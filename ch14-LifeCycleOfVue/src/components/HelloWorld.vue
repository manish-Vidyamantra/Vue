<script setup>

  import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref
} from 'vue';

const msg = 'Hello World';


onBeforeMount(() => {
  console.log("onBeforeMount called - Child");
})

onMounted(() => {
  console.log('onMounted called - child');
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate Cal childnt');
})

onUpdated (() => {
  console.log('onUpdated Called - child');
})

onBeforeUnmount(() => {
  console.log('onUnmount called - child')
})

onUnmounted(() => {
  console.log('onUnmounted Called child');
})
</script>

<template>
  <h4>{{ msg }}</h4>
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>