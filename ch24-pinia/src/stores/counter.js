import {defineStore} from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(1);
    const name = ref('manish');
    const items = ref(['Java'])

    const doubleCount = computed(() => count.value * 2);

    function increment() {
        count.value++;
    }

    return {count, name, items, doubleCount, increment}
})