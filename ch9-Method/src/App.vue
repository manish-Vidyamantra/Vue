<script setup>
  import {ref, computed, reactive} from 'vue';

  let firstName = ref('manish');
  let lastName = ref('prasad');

  // let fullNameRoll = (roll) => {
  //   return `${firstName.value} ${lastName.value}`;
  // }

  // let fullNameRoll = computed(() => {
  //   return `${firstName.value} ${lastName.value}.`;
  // })

  // let count = 5;
  // let id = setInterval(() => {
  //   console.log('run');
  //   firstName.value = 'qwerty';
    
  //   // if(count % 2 == 0) {
  //   //   firstName.value = 'sohan';
  //   // } else {
  //   //   firstName.value = 'nagesh';
  //   // }
  // }, 250);

  // let id1 = setInterval(() => {
  //   console.log('run');
  //   firstName.value = 'roshan';
  //   // if(count % 2 == 0) {
  //   //   firstName.value = 'sohan';
  //   // } else {
  //   //   firstName.value = 'nagesh';
  //   // }
  // }, 500);


  // let add = () => {
  //   console.log("add run");
  //   return 5 +  2;
  // }

  // add(5, 2);
  // add(5, 2)//

  // let add = computed((a, b) => {
  //   console.log("computed run");
  //   return a + b;
  // }); 

let isActive = ref(true);

// const classObj = reactive({
//   active: true,
//   bold: true
// });

const classObject = reactive({
  active: true,
  'text-danger': true
})

</script>

<template>
  <h1 :style="{color: 'blue'}">Method</h1>
  <h2 v-bind:class="{active : isActive}">Name</h2>
  <div :class="classObject">Hello</div>
  <!-- <h3 v-bind:class="classObj">manish</h3> -->
  <!-- <h1>{{ add(5, 8) }}</h1>
  <h1>{{ add }}</h1>
  <h1>{{ add }}</h1>
  <h1>{{ add }}</h1> -->


  
</template>

<style scoped>
h1 {
  color: red;
}
</style>