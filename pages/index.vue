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
const route = useRoute()
const store = usePageStore()
import { usePageStore } from '@/modules/client/store/pageStore.js'
await useAsyncData('page', () => store.showPage(route.fullPath))
</script>