<script setup>
import {ref, onMounted} from 'vue';

const input = ref(null);
onMounted(() => {

  input.value.focus();
})
</script>

<template>
  <input ref="input" type="text">
</template>

<style scoped>
h1 {
  color: red;
}
</style>