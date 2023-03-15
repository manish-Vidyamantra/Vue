<script setup>
    import { useCounterStore } from '../stores/counter'

    const store = useCounterStore();
    store.$patch({
        count: 50
    })

    store.$patch( (state) => {
        state.items.push(...['vue', 'react'])
    })
</script>

<template>
    <h1>A Component</h1>
    <h1>count: {{ store.count }}</h1>
    <h1>doubleCount: {{ store.doubleCount }}</h1>
    <button @click="store.increment">Increment</button>

    <h2>Name: {{ store.name }} </h2>
    <h2>Items: {{ store.items }}</h2>
</template>

<style></style>