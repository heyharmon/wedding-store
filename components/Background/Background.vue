<template>
  <!-- Background image-->
  <!-- <div v-if="src" aria-hidden="true" class="absolute inset-0 overflow-hidden">
    <img :src="src" :alt="alt" class="h-full w-full object-cover object-center"/>
  </div> -->

  <!-- Overlay -->
  <div aria-hidden="true" class="absolute inset-0 bg-primary-100"/>

  <!-- Background via CSS only  -->
  <!-- <div aria-hidden="true" class="absolute inset-0 overflow-hidden bg-[url('@/assets/images/blurry-gradient-haikei.svg')] bg-cover bg-center opacity-30"></div> -->
</template>

<script setup>
const props = defineProps({
  src: String,
  alt: String,
  // caption: String,
})
</script>
  