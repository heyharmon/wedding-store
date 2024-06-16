import { defineStore } from 'pinia'
import { isProxy, toRaw } from 'vue';

// import { useLocalStorage } from "@vueuse/core"
import { nanoid } from 'nanoid'

export const useCustomerStore = defineStore('customer', () => {
    const { $shopify } = useNuxtApp()

    // const customer = ref({})
    // const event = ref({})
    const checkoutId = useCookie('checkoutId')
    // const checkout = ref({})
    const cart = ref({
        items: []
    })

    // const inCartCount = computed(() => count.value * 2)
    // a computed property that shows the count of a specific product in the cart
    const inCartCount = computed(() => {
        return (productId) => {
            return cart.value.items?.filter(id => id === productId).length
        }
    })

    const itemFromShopify = ((item) => {
        return {
            id: item.id,
            quantity: item.quantity,
            title: item.title,
            variant: {
                id: item.variant.id,
                image: {
                    altText: item.variant.image.altText,
                    src: item.variant.image.src
                }
            }
        }
    })

    const itemListFromShopify = ((items) => {
        return items.map(item => {
            return itemFromShopify(item)
        })
    })

    async function fetchCheckout(checkoutId) {
        $shopify.checkout.fetch(checkoutId).then((c) => {
            let fetchedCart = {
                id: c.id,
                email: c.email,
                items: itemListFromShopify(c.lineItems),
                totalPrice: c.totalPriceV2,
            }

            cart.value = JSON.parse(JSON.stringify(fetchedCart))

            console.log('fetched checkout: ', c)
            console.log('cart: ', fetchedCart)
        })
    }

    async function createCheckout() {
        $shopify.checkout.create().then((c) => {
            checkoutId.value = c.id
            console.log('new checkout: ', c)
        })
    }

    function addToCart(productVariantId) {
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
        // checkout, 
        cart, 
        inCartCount, 
        // storeCustomer, 
        addToCart 
    }
})