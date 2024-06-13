import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

export const useCustomerStore = defineStore('customer', () => {
    const customer = ref({})
    const event = ref({})
    const cart = ref([])

    // const doubleCount = computed(() => count.value * 2)

    function storeCustomer() {
        this.customer = {
            id: nanoid(),
        }
    }

    function addToCart(productId) {
        this.cart.push(productId)
    }
  
    return { customer, event, cart, storeCustomer, addToCart }
  },
  {
    persist: true,
})