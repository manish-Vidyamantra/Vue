<script setup>

  let num = 10;
  let myId = 'manish'
  let myAttr = {
    myId: 101,
    class: 'manish'
  }
  let attributeName = 'class';
  let isDisabled = true;

</script>

<template>
  <h1>Hello World</h1>
  <h1>{{(ture) ? 'dark' : 'gray' }}</h1>
  <h2 :id="myId">manish</h2>

  <!-- adding attribute like object -->
  <h3 v-bind = "myAttr">Roshan</h3>

  <!-- adding dynamic attribute -->
  <h2 v-bind:[attributeName] = "myId">dynamic attribute</h2>
  
  <!-- Boolean attribute -->
  <button :disabled="isDisabled">click</button>
  <button disabled>click</button>

</template>

<style scoped>
  #manish {
    color: rebeccapurple;
  }

</style>