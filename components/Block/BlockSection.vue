<template>
  <section 
    :data-theme="theme" 
    :class="`${PaddingTop[padding.top]} ${PaddingBottom[padding.bottom]}`"
    class="relative isolate overflow-hidden bg-white"
  >
    <BlockBackground v-bind="background"/>
    <slot/>
  </section>
</template>

<script setup lang="ts">
import { PaddingTop, PaddingBottom } from '@/dictionaries/Padding.js'

const props = defineProps({
  theme: {
    type: String,
    default: null,
  },
  padding: {
    type: Object,
    default: () => ({
      top: '6xl',
      bottom: '6xl',
    }),
  },
  background: Object,
})
</script>