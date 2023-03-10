<script setup>
  const props = defineProps(['fullName'])
  props.fullName = 'Bikash'
</script>

<template>
 <slot></slot>
</template>

<style scoped>
  h1 {
    color: blue;
  }
</style>