<template>
  <ProductHero :product="product"/>
  <ProductsSimilar type="Arbors" :products="related"/>
</template>

<script setup>
import { useRoute } from 'vue-router'
// import { getProductQuery } from '@/shopify/getProductQuery'
// import { getProductsQuery } from '@/shopify/getProductsQuery'
import ProductHero from '@/components/ProductHero.vue'
import ProductsSimilar from '@/components/ProductsSimilar.vue'

const route = useRoute()
// const { data: product } = await useAsyncQuery(getProductQuery, { handle: route.params.slug })
// const { data: related } = await useAsyncQuery(getProductsQuery, { first: 8, query: `product_type:${product.value.productByHandle.productType}` })

const { $shopify } = useNuxtApp()
const product = await $shopify.product.fetchByHandle(route.params.slug)
const related = await $shopify.product.fetchAll(8)
</script>