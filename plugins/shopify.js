import Client from 'shopify-buy';
import {createStorefrontApiClient} from '@shopify/storefront-api-client';

export default defineNuxtPlugin(nuxtApp => {
    // const config = useRuntimeConfig()

    const shopify = createStorefrontApiClient({
        storeDomain: 'http://d573c7-7e.myshopify.com',
        apiVersion: '2024-04',
        publicAccessToken: 'd781953a88ab5472df81d7c055d19971',
    });

    return {
        provide: {
            shopify: shopify
        }
    }
})