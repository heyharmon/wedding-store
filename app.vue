<template>
  <div>
    <NuxtLoadingIndicator/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
const modalOpen = ref(false)
// const { $shopify } = useNuxtApp()
// const checkout = await $shopify.checkout.create()

// console.log(checkout)
</script>