import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'

import './assets/main.css'

let app = createApp(App)
app.component('HelloWorld', HelloWorld);
app.mount('#app')
