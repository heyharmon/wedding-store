<template>
  <!-- <CategoryTabs/> -->
  <!-- <CategoryThumbnails/> -->
  <HomeHero/>
  <CategoryThreeUp/>
  <ProductsPopular :products="products"/>
</template>

<script setup>
// import { getProductsQuery } from '@/shopify/getProductsQuery'
import CategoryTabs from '@/components/CategoryTabs.vue'
import CategoryThumbnails from '@/components/CategoryThumbnails.vue'
import CategoryThreeUp from '@/components/CategoryThreeUp.vue'
import ProductsPopular from '@/components/ProductsPopular.vue'
import HomeHero from '../components/HomeHero.vue';

// const query = { first: 10 }
// const { data } = await useAsyncQuery(getProductsQuery, query)

const { $shopify } = useNuxtApp()
const products = await $shopify.product.fetchAll(9)
</script>