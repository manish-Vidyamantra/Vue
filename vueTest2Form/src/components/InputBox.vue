<script setup>

  import {ref, defineExpose} from 'vue';

  defineExpose({validateForm});
  
  let userNameRef = ref(null);
  let emailRef = ref(null);
  let passwordRef = ref(null);
  
  let isUserNameNotValid = ref(false);
  let isEmailNotValid = ref(false);
  let isPasswordNotValid = ref(false);

  function validateForm() {
    console.log('called')
    let userName = userNameRef._value.value.trim();
    let email = emailRef._value.value.trim();
    let password = passwordRef._value.value.trim();

    if(!userName) {
      isUserNameNotValid.value = true;
    } else {
      isUserNameNotValid.value = false;
    }
    if(!email) {
      isEmailNotValid.value = true; 
    } else {
      isEmailNotValid.value = false; 
    }
    if(!password) {
      isPasswordNotValid.value = true;
    } else {
      isPasswordNotValid.value = false;
    }

    if((!userName || (!email) || (!password))) {
      alert('Form Not submitted')
    } else {
      alert('Form submitted successfully');
    }

  }
</script>

<template>

  <div class="flex flex-col m-5 w-96">
    <input ref ="userNameRef" type="text" placeholder="Full name" class=" m-4 p-5 border-2 border-black rounded-md">
    <p v-if="isUserNameNotValid" class="text-red-300 text-center">Full name is incorrect</p>
    <input ref ="emailRef" type="email" placeholder="Email" class=" m-4 p-5 rounded-md border-2 border-black">
    <p v-if="isEmailNotValid" class="text-red-300 text-center">Email is incorrect</p>
    <input ref ="passwordRef" type="password" placeholder="Password" class="m-4 p-5 rounded-md border-2 border-black">
    <p v-if="isPasswordNotValid" class="text-red-300 text-center">password is incorrect</p>
  </div>
  
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>