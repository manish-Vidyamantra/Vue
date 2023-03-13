<script setup>
import HelloWorld from './components/HelloWorld.vue';
import {ref, watchEffect, watch} from 'vue';

const firstName = ref('manish');
watch(firstName, (newValue, oldValue) => {
  console.log('watch')
  console.log(newValue);
});

watchEffect(()=> {
  console.log('watch', firstName)
})

</script>

<template>
  <h1>Local registration by </h1>
  <h1>parent: {{ firstName }}</h1>
  <HelloWorld :nam="firstName"/>
</template>

<style scoped>
h1 {
  color: red;
}
</style>