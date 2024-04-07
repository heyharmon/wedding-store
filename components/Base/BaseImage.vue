<template>
  <!-- <NuxtImg v-if="file" :src="'https://d25r5txdw1c9o7.cloudfront.net/fit-in/' + file.path" :alt="file.alt" :format="file.format" :width="width" :height="height"/> -->
  <NuxtImg v-if="file" :src="file.src" :alt="file.alt" :format="file.extension" :width="file.width" :height="file.height"/>
  <!-- <NuxtImg v-if="file" v-bind="file"/> -->
</template>

<script setup lang="ts">
const props = defineProps({
  file: Object,
  // name: {
  //   type: String,
  //   default: '',
  // },
  // src: {
  //   type: String,
  //   default: '',
  // },
  // alt: {
  //   type: String,
  //   default: '',
  // },
  // extension: {
  //   type: String,
  //   default: '',
  // },
  // width: {
  //   type: String,
  //   default: '',
  // },
  // height: {
  //   type: String,
  //   default: '',
  // },
})
</script>
