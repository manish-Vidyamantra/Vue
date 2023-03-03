<script setup>
  import {ref} from 'vue';
  let isActive = ref(false);
  let type = ref();
  const names = ref(["manish", "bikash"]);
</script>

<template >
 
  <!-- <h1 v-if="type === 'A'">Hello, I am if.</h1>
  <h2 v-else-if="type == 'B'">Hello, I am else if for B</h2>
  <h1 v-else-if="type === 'C'">Hello, I am else if for C.</h1>
  <h1 v-else>Hello, I am else</h1> -->
  <!-- <h1 v-if="false">Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p> -->

  <!-- <h1 v-for="(nam, index) in names" >
    {{ index}} {{ nam }} {{ key }}
  </h1> -->

  <h1 v-for="n in 10">{{ 2 * n }}</h1>


  
</template>

<style scoped>
</style>