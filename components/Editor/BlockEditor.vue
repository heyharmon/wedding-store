<template>
  <div class="relative">
    <div
      v-if="active"
      class="z-10 h-full w-full absolute border-4 border-primary-500"
    ></div>
    <!-- <div
      v-if="active"
      class="z-10 h-full w-full absolute"
      :class="{'border-4 border-primary-500 ': active}"
    ></div> -->
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  active: Boolean
})
</script>