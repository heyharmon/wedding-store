<template>
    <h1>{{ route.params.slug }}</h1>
    <!-- <ProductsGrid :title="`Wedding ${collection.title}`" :products="collection.products"/> -->
    <!-- <pre>{{ collection }}</pre> -->
  </template>
    
  <script setup>
//   import { useRoute } from 'vue-router'
//   import ProductsGrid from '@/components/ProductsGrid.vue'
//   import { useCollectionStore } from '@/stores/useCollectionStore'
  
  const route = useRoute()
//   const collectionStore = useCollectionStore()
//   const { $shopify } = useNuxtApp()
  
  
//   const gid = collectionStore.getGidFromSlug(route.params.category)
//   const collection = await $shopify.collection.fetchWithProducts(gid, {productsFirst: 10});
  </script>