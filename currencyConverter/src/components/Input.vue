<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useCurrencyStore } from '../stores/currency'
import { storeToRefs } from 'pinia'

const selected = ref('Select Country');
watchEffect(() => {
    console.log(selected.value);
})
const store = useCurrencyStore();

const { allCurrencies } = storeToRefs(store);
console.log(allCurrencies.value)

</script>

<template>
    <h1>Input Component</h1>
    <div>
        <div class="selection">
            <select v-model="selected">
                <option v-for="currency in allCurrencies" :value="currency">{{ currency }}</option>
                <h1>{{ selected }}</h1>
            </select>
        </div>
        <div class="inputContainer">

        </div>
    </div>
</template>

<style scoped></style>
