<template>
    <!-- <NuxtPage /> -->
    <base-heading>Homepage</base-heading>

    <BaseButtonGroup>
        <BaseButton to="/">Homepage</BaseButton>
        <BaseButton to="/about">About</BaseButton>
        <BaseButton to="/about/contact">Contact</BaseButton>
    </BaseButtonGroup>
</template>

<script setup>
import { usePageStore } from '@/store/pageStore.js'

const route = useRoute()
const store = usePageStore()

console.log('path', route.path)
console.log('fullPath', route.fullPath)

await useAsyncData('page', () => store.showPage(route.fullPath))
</script>~/store/pageStore.js