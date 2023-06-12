<template>
  <section 
    :class="`
      ${PaddingTop[paddingTop]} 
      ${PaddingBottom[paddingBottom]}
    `"
    class="relative bg-white"
  >
    <slot/>
  </section>
</template>

<script setup>
import { PaddingTop, PaddingBottom } from '@/nuxt-website/dictionaries/Padding.js'

const props = defineProps({
  paddingTop: {
    type: String,
    default: '5xl',
  },
  paddingBottom: {
    type: String,
    default: '5xl',
  },
})
</script>
  