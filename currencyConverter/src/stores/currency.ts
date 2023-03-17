import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCurrencyStore = defineStore('currency', () => {
  interface Currencies {
    [key: string] : string;
  }

  let currencies = [
    ['Kuwati Dinar', 'KWD'],
    ['Barhin Dinar', 'BHD'],
    ['Omani Rial', 'OMR'],
    ['British Pound Stering', 'GBP'],
    ['European Euro', 'EUR'],
    ['US Dollar', 'USD'],
    ['Brunei Dollar', 'BND'],
    ['New Zealand Dollar', 'NZD'],
    [ 'Aruban Florin', 'AWG'],
    ['Indian Rupee', 'INR']   
  ]

  const allCurrencies = ref(currencies);


  return {allCurrencies}
})
