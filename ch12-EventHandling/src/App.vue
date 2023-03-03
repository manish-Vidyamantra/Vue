<script setup>
import { ref } from 'vue';
// let name = ref("manish");

// function greet(event) {
//   alert(`Hello ${name.value}!`)
//   // `event` is the native DOM event
//   if (event) {
//     alert(event.target.tagName)
//   }
// }

// function say(message) {
//   alert(message);
// }

// function warn(message, event) {
//   // now we have access to the native event
//   if (event) {
//     console.log(event);
//     event.preventDefault()
//   }
//   alert(message)
// }

function sayHi() {
  alert("Hii")
}

</script>

<template>
  <!-- <h1 @click="count++">increment</h1>
  <h1>{{ count }}</h1>
  <h1 @click="count--">decrement</h1> -->
  
  <!-- <button @click="greet">Greet</button> -->
  
  <!-- <button @click="say('Hello')">say hello</button>
  <button @click="say('Bye')">say Bye</button> -->

  <!-- <button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button> -->

<!-- <button @keyup.enter="sayHi">say hii</button> -->

<input @keyup.enter="sayHi" />

</template>


<style scoped></style>