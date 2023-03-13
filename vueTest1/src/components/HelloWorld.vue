<script setup>
import {ref, watchEffect} from 'vue'
const props = defineProps(["nam"]);

  
const changeName = () => {
  if(props.nam === 'manish') {
    props.nam = 'bikash';
  } else {
    props.nam = 'manish'
  }
}

</script>

<template>
  <h1>Child Component</h1>
  <button @click="changeName()">change name</button>

  <h1>{{ nam.name }}</h1>
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>