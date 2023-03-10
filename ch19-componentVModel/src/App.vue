<script setup>
import { ref } from 'vue';
import CustomInput from './components/CustomInput.vue'

const message = ref('hello')
</script>

<template>
  <h1>Local registration by {{ name }}</h1>
  <CustomInput v-model="message" /> {{ message }}
</template>

<style scoped>
h1 {
  color: red;
}
</style>