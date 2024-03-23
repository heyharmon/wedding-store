<template>
  <section 
    :data-theme="theme" 
    :class="`
      ${PaddingTop[paddingTop]} 
      ${PaddingBottom[paddingBottom]}
    `"
    class="relative bg-white"
  >
    <BaseBackground v-bind="background"/>
    <slot/>
  </section>
</template>

<script setup>
import { PaddingTop, PaddingBottom } from '@/client/dictionaries/Padding.js'

const props = defineProps({
  theme: String,
  // padding: Object,
  background: Object,

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
  ~/modules/client/dictionaries/Padding.js