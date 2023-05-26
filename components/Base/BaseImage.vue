<template>
  <!-- <NuxtImg :src="'https://d25r5txdw1c9o7.cloudfront.net/fit-in/' + width + 'x' + height + '/' + path" :alt="alt" :format="format" :width="width" :height="height"/> -->
  <NuxtImg :src="'https://d25r5txdw1c9o7.cloudfront.net/fit-in/' + path" :alt="alt" :format="format" :width="width" :height="height"/>
</template>
  350x350
<script setup>
const props = defineProps({
    path: {
        type: String,
    },
    alt: {
        type: String,
        default: null
    },
    format: {
        type: String,
        default: null
    },
    width: {
        type: String,
        default: null
    },
    height: {
        type: String,
        default: null
    },
})
</script>
