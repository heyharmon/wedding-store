<template>
<!-- <ProductHero :product="product"/> -->
<!-- <ProductsSimilar type="Arbors" :products="related"/> -->
 <pre>{{ products }}</pre>
</template>
  
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const { $shopify } = useNuxtApp()

const collectionId = 'gid://shopify/Collection/302115586214';
const products = await $shopify.collection.fetchWithProducts(collectionId, {productsFirst: 10}).then((collection) => {
    console.log(collection);
    console.log(collection.products);
});
  </script>