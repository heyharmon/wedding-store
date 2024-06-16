<template>
  <!-- <CategoryTabs/> -->
  <!-- <CategoryThumbnails/> -->
  <HomeHero/>
  <CategoryThreeUp/>
  <ProductsGrid title="Popular rentals" :products="products"/>
</template>

<script setup>
// import CategoryTabs from '@/components/CategoryTabs.vue'
// import CategoryThumbnails from '@/components/CategoryThumbnails.vue'
import CategoryThreeUp from '@/components/CategoryThreeUp.vue'
import ProductsGrid from '@/components/ProductsGrid.vue'
import HomeHero from '../components/HomeHero.vue';

const { $shopify } = useNuxtApp()
const products = await $shopify.product.fetchAll(9)

// console.log('home page products: ', products)
</script>