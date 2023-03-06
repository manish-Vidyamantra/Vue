<script setup >
  import {ref} from 'vue';

  const header = ref('Shoppint List App');
  const items = ref([
    {id: 1, label: '10 party hats'},
    {id: 2, label: '2 board games'},
    {id: 3, label: '20 cups'}
  ]);
  let id = 4;
  const addItem = (item) => {
    const obj = {};
    obj.id = id++;
    obj.label = item;
    items.value.push(obj);

  }
  const newItem = ref("manish");
  const checked = ref(false);

</script>

<template>
  <h1>{{ header }}</h1>
  <input v-model.lazy="newItem" type="text" placeholder="Add an item">
  <button @click="addItem(newItem)">add</button>
  <ul>
    <li v-for="{id, label} in items" :key="id" >
      {{ label }}
    </li>
  </ul>
  

  <!-- <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox"> {{ checked }}</label> -->
</template>

<style scoped>
</style>