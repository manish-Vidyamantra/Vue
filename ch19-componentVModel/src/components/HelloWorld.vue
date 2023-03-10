<script setup>
  const props = defineProps(['fullName'])
  props.fullName = 'Bikash'
</script>

<template>
  <h1>{{ fullName }}</h1>
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>