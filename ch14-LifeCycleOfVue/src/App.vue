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
import HelloWorld from './components/HelloWorld.vue';
const showHelloComp = ref(true);
const count = ref(0);

onBeforeMount(() => {
  console.log("onBeforeMount called - Parent");
})

onMounted(() => {
  console.log('onMounted called - Parent');
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate Called -Parent');
})

onUpdated (() => {
  console.log('onUpdated Called -p arent');
})

onBeforeUnmount(() => {
  console.log('onUnmount called - Parent');
})

onUnmounted(() => {
  console.log('onUnmounted Called - Parent');
})
</script>

<template>
  <h1>App Components-Parent</h1>
  <h1>Count: {{ count }}</h1>
  <HelloWorld v-if="showHelloComp"/>
  <button @click="showHelloComp = !showHelloComp">show/hide</button>
  <button @click="count++">Increase</button>
</template>

<style scoped>
h1 {
  color: red;
}
</style>