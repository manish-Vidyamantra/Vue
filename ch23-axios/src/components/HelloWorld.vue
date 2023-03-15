<script setup>
import { ref } from 'vue';
import { getSingleUserData } from '../composables/userApi.js'
let url = ref("https://reqres.in/api/users/");
let uid = ref(-2);
const res = await getSingleUserData(url, uid);
console.log(res)
</script>

<template>
  <h1>child component</h1>
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>