<template>
  <div v-if="file || overlay">
    <!-- Background image-->
    <div v-if="file" aria-hidden="true" class="absolute inset-0 overflow-hidden">
      <BaseImage :file="file" class="h-full w-full object-cover object-center"/>
    </div>

    <!-- Overlay -->
    <div v-if="overlay" aria-hidden="true" class="absolute inset-0 bg-primary-100 opacity-70"/>

    <!-- <div aria-hidden="true" class="absolute inset-0 overflow-hidden bg-[url('@/public/images/blurry-gradient-haikei.svg')] bg-cover bg-center opacity-30"></div> -->
  </div>
</template>

<script setup>
import BaseImage from '~/nuxt-website/components/Base/BaseImage.vue'

const props = defineProps({
  file: {
    type: Object,
  },
  overlay: {
    type: Boolean,
    default: false
  }
})
</script>
  