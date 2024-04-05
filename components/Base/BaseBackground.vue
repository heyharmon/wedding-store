<template>
  <div v-if="file || overlay">
    <!-- Background image-->
    <div v-if="file">
      <BaseImage v-bind="file" class="absolute inset-0 -z-10 h-full w-full object-cover"/>
    </div>

    <!-- Overlay -->
    <div v-if="overlay" aria-hidden="true" class="absolute inset-0 -z-10 bg-primary-100 opacity-70"/>
  </div>
</template>

<script setup lang="ts">
// import BaseImage from '~/modules/client/components/Base/BaseImage.vue'

const props = defineProps({
  overlay: {
    type: Boolean,
    default: false,
  },
  file: Object,
})
</script>
  