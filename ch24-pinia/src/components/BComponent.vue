<script setup>
    import { useCounterStore } from '../stores/counter'

    const store = useCounterStore();
    console.log(store);
</script>

<template>
    <hr>
    <h1>B Component</h1>
    <h1>count: {{ store.count }}</h1>
</template>

<style></style>