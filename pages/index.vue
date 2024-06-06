<template>
  <CategoriesGrid/>
  <ProductsPopular :products="data.products.edges"/>
</template>

<script setup>
import { getProductsQuery } from '@/shopify/getProductsQuery'
import CategoriesGrid from '@/components/CategoriesGrid.vue'
import ProductsPopular from '@/components/ProductsPopular.vue'

const query = { first: 10 }
const { data } = await useAsyncQuery(getProductsQuery, query)
</script>