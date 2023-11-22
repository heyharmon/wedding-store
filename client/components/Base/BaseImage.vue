<template>
  <NuxtImg v-if="file" :src="'https://d25r5txdw1c9o7.cloudfront.net/fit-in/' + file.path" :alt="file.alt" :format="file.format" :width="width" :height="height"/>
</template>

<script setup>
const props = defineProps({
  file: {
    type: Object,
  },
  width: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '',
  },
})
</script>
