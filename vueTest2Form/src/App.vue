<script setup>
import { ref } from 'vue';
import InputBox from './components/InputBox.vue'

const validate = ref(null);

function handleClick(e) {
  e.preventDefault();
  console.log('run')
  validate.value.validateForm();
}

</script>

<template>
  <div class="w-1/2 h-2/3 flex justify-center items-center bg-gray-800 rounded-md">
    <form class=" flex flex-col justify-center items-center w-full h-full">
      <h1 class="text-5xl font-medium text-white">Registration Form</h1>
        <InputBox ref="validate" />
        <button @click="handleClick" class="bg-white p-4 rounded-lg mb-5" type="submit">Create Account</button>
    </form>
  </div>
</template>

<style scoped></style>