<template>
  <CategoriesGrid/>
  <ProductsPopular :products="products"/>
</template>

<script setup>
// import { getProductsQuery } from '@/shopify/getProductsQuery'
import CategoriesGrid from '@/components/CategoriesGrid.vue'
import ProductsPopular from '@/components/ProductsPopular.vue'

// const query = { first: 10 }
// const { data } = await useAsyncQuery(getProductsQuery, query)

const { $shopify } = useNuxtApp()
const products = await $shopify.product.fetchAll(9)
</script>