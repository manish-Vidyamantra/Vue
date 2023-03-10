import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import {ref} from 'vue';
let count = ref(0);


let app = createApp(App);
app.provide('count', count);
app.mount('#app')
