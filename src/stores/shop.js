import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
export const useShopStore = defineStore('shop', () => {
  const loading = ref(true)
  const categories = ref([])
  const listings = ref()
  async function fetch() {
    const res = await axios.get('https://dev.sellpass.io/v2/public/shops/19174/listings')
    console.log(res.data)
    loading.value = false
    categories.value = res.data.data.categories
    listings.value = res.data.data.listings
  }
  return { loading, fetch, categories, listings }
})