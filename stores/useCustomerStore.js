import { defineStore } from 'pinia'
// import { useLocalStorage } from "@vueuse/core"
import { nanoid } from 'nanoid'

export const useCustomerStore = defineStore('customer', () => {
    const { $shopify } = useNuxtApp()

    // const customer = ref({})
    // const event = ref({})
    const checkoutId = useCookie('checkoutId')
    const checkout = ref({})
    const cart = ref({})

    // const inCartCount = computed(() => count.value * 2)
    // a computed property that shows the count of a specific product in the cart
    const inCartCount = computed(() => {
        return (productId) => {
            return cart.value.items?.filter(id => id === productId).length
        }
    })

    // function storeCustomer() {
    //     this.customer = {
    //         id: nanoid(),
    //     }
    // }

    function addToCart(productVariantId) {
        // const { $shopify } = useNuxtApp()
        console.log('checkout id', checkoutId.value)
        console.log('product variant id', productVariantId)
        
        const lineItemsToAdd = [
            {
                variantId: productVariantId,
                quantity: 1,
                // customAttributes: [{key: "MyKey", value: "MyValue"}]
            }
        ];

        $shopify.checkout.addLineItems(checkoutId.value, lineItemsToAdd)
        // this.cart.push(productId)
    }

    async function createCheckout() {
        // const { $shopify } = useNuxtApp()
        // let c = await $shopify.checkout.create()
        // checkoutId.value = c.id
        // console.log('new checkout', c)

        $shopify.checkout.create().then((c) => {
            checkoutId.value = c.id
            console.log('new checkout', c)
        })
    }

    async function fetchCheckout(checkoutId) {
        // const { $shopify } = useNuxtApp()
        // let c = await $shopify.checkout.fetch(checkoutId)
        // checkout.value.email = c.email
        // checkout.value.items = c.lineItems
        // checkout.value.address = c.shippingAddress
        // checkout.value.amount = c.totalPrice.amount
        // console.log('cart', c)

        $shopify.checkout.fetch(checkoutId).then((c) => {
            cart.value = {
                id: c.id,
                email: c.email,
                lineItems: c.lineItems,
                note: c.note,
                shippingAddress: c.shippingAddress,
                amount: c.totalPrice.amount,
            }

            console.log('fetched checkout', c)
        })
    }

    onMounted(() => {
        console.log('checkout id', checkoutId.value)

        if (checkoutId.value) {
            fetchCheckout(checkoutId.value)
        } else {
            createCheckout()
        }
    })
  
    return { 
        // customer, 
        // event, 
        
        checkoutId,
        checkout, 
        cart, 
        inCartCount, 
        // storeCustomer, 
        addToCart 
    }
})