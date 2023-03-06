<script setup>
  import {ref, watch, watchEffect} from 'vue';
  let heartBeat = ref(75);

  // watch(heartBeat, (newHeartBeat, oldHeartBeat) => {
  //   console.log('newHeartBeat', newHeartBeat);
  //   console.log('oldHeartBeat', oldHeartBeat);
  // })

  watchEffect(() => {
    console.log('heartBeat: ', heartBeat.value);
  }
  )
  
  
</script>

<template>
  <h1>watcher</h1>
  <h2 >heartBeat : {{ heartBeat }}</h2>
  <h2 v-if="heartBeat <= 0">Sorry, You are dead now!</h2>
  <button @click="heartBeat+=5">increase</button>
  <button @click="heartBeat-=5">decrease</button>
</template>

<style scoped>
h1 {
  color: red;
}
</style>