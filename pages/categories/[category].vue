<template>
  <ProductsGrid :title="collection.title" :products="collection.products"/>
  <!-- <pre>{{ collection }}</pre> -->
</template>
  
<script setup>
import { useRoute } from 'vue-router'
import ProductsGrid from '@/components/ProductsGrid.vue'

const route = useRoute()
const { $shopify } = useNuxtApp()
// const collectionStore = useCollectionStore()
// const products = ref(null)

const collectionId = 'gid://shopify/Collection/302115586214';
// const gid = collectionStore.getCollectionBySlug(route.params.category)
const collection = await $shopify.collection.fetchWithProducts(collectionId, {productsFirst: 10});
</script>