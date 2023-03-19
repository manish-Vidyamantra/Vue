<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useCurrencyStore } from '../stores/currency'
import { storeToRefs } from 'pinia';
import axios from 'axios'

const selected1 = ref('INR');
const inputVal1 = ref(0);

const selected2 = ref('INR');
const inputVal2 = ref(0);


watchEffect(() => {
    console.log('selected1: ', selected1.value);
    console.log('inputVal1: ', inputVal1.value);

    console.log('selected2: ', selected2.value);
    console.log('inputVal2: ', inputVal2.value);

    axios.get(`https://v6.exchangerate-api.com/v6/acd3a97e523a141b052fb7d2/latest/${selected1.value}`)
        .then(function (response) {
            // handle success
            const conversionRate = response.data.conversion_rates[selected2.value];
            inputVal2.value = conversionRate * inputVal1.value;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })


})
const store = useCurrencyStore();
const { allCurrencies } = storeToRefs(store);


</script>

<template>
    <div class="bg-gray-400 w-[600px] h-[300px] flex justify-center items-center gap-4">
        <div class="" >
            <div class="selection">
                <select class="bg-slate-300 w-[214px] border-2 border-black border-solid" v-model="selected1">
                    <option class="" v-for="currency in allCurrencies" :selected="true" :value="currency[1]"> {{ currency[1] }} | {{ currency[0] }}</option>
                    <h1>{{ selected1 }}</h1>
                </select>
            </div>
            <div class="inputContainer">
                <input class="w-[214px] border-2 border-black border-solid border-t-0" type="text" v-model="inputVal1">
            </div>
        </div>

        <div class="bg-gray-300">
            <div class="selection">
                <select class="bg-slate-300 w-[214px] border-2 border-black border-solid" v-model="selected2">
                    <option v-for="currency in allCurrencies" :value="currency[1]"> {{ currency[1] }} | {{ currency[0] }}</option>
                    <h1>{{ selected2 }}</h1>
                </select>
            </div>
            <div class="inputContainer">
                <input class="w-[214px] border-2 border-black border-solid border-t-0" type="text" v-model="inputVal2">
            </div>
        </div>
    </div>
    
</template>

<style scoped></style>
