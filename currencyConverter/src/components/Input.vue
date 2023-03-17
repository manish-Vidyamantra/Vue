<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useCurrencyStore } from '../stores/currency'
import { storeToRefs } from 'pinia';
import axios from 'axios'

const selected1 = ref('Select Country');
const inputVal1 = ref(0);

const selected2 = ref('Select Country');
const inputVal2 = ref(0);


watchEffect(() => {
    console.log('selected1: ', selected1.value);
    console.log('inputVal1: ', inputVal1.value);

    console.log('selected2: ', selected2.value);
    console.log('inputVal2: ', inputVal2.value);

    const options = {
        method: 'GET',
        url: 'https://currency-converter5.p.rapidapi.com/currency/convert',
        params: { format: 'json', from: `${selected1.value}`, to: `${selected2.value}`, amount:`inputVal1.value` },
        headers: {
            'X-RapidAPI-Key': 'cb45540bfdmshbc0c65daa08c60cp1df8d5jsnc5c064fc2510',
            'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });


})
const store = useCurrencyStore();

const { allCurrencies } = storeToRefs(store);
console.log(allCurrencies.value)

</script>

<template>
    <h1>Input Component</h1>

    <div>
        <div class="selection">
            <select v-model="selected1">
                <option v-for="currency in allCurrencies" :value="currency[1]"> {{ currency[1] }} {{ currency[0] }}</option>
                <h1>{{ selected1 }}</h1>
            </select>
        </div>
        <div class="inputContainer">
            <input type="text" v-model.lazy="inputVal1">
        </div>
    </div>

    <br>
    <br>

    <div>
        <div class="selection">
            <select v-model="selected2">
                <option v-for="currency in allCurrencies" :value="currency[1]"> {{ currency[1] }} {{ currency[0] }}</option>
                <h1>{{ selected2 }}</h1>
            </select>
        </div>
        <div class="inputContainer">
            <input type="text" v-model.lazy="inputVal2">
        </div>
    </div>
</template>

<style scoped></style>
