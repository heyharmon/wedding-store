<template>
  <!-- Background image-->
  <div v-if="image" aria-hidden="true" class="absolute inset-0 overflow-hidden">
    <Image v-bind="image" class="h-full w-full object-cover object-center"/>
  </div>

  <!-- Overlay -->
  <div v-if="overlay" aria-hidden="true" class="absolute inset-0 bg-primary-100 opacity-100"/>
</template>

<script setup>
const props = defineProps({
  image: Object,
  overlay: {
    type: Boolean,
    default: false
  }
})
</script>
  