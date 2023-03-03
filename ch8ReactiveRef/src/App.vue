<script setup>
  import {reactive, ref} from 'vue';
  let obj = reactive( {
    name: 'manish',
    country: 'india',
  })
  console.log(obj);


  let num = ref(2);
  console.log(num);

  let obj1 = ref({count: 5});
  console.log(obj1);
  console.log(obj1.value);
  console.log(obj1.value.count);
  // let id = setInterval(()=> {
  //   if(num.value == 10) {
  //     clearInterval(id);
  //   }
  //   console.log('run');
  //   num.value++;
  // }, 1000)

  setTimeout(()=>{
    obj.name = 'bikash';
    // console.log('objUpdated');
  },
  2000)
</script>

<template>
  <h1>{{obj.name}}</h1>
  <h1>{{ num }}</h1>
  <h1>{{ obj1.count}}</h1>
</template>

<style scoped>
h1 {
  color: red;
}
</style>