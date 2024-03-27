<template>
  <!-- <NuxtImg v-if="file" :src="'https://d25r5txdw1c9o7.cloudfront.net/fit-in/' + file.path" :alt="file.alt" :format="file.format" :width="width" :height="height"/> -->
  <NuxtImg v-if="src" :src="src" :alt="alt" :format="extension" :width="width" :height="height"/>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  extension: {
    type: String,
    default: '',
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
