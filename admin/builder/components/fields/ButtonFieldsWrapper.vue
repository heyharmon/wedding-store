<template>
  <div class="margin-bottom-sm">
    <label v-if="label" class="block text-sm font-medium leading-6 text-gray-900" :for="label">{{ label }}</label>

    <div class="mt-2 overflow-hidden rounded-md border bg-white">
      <slot/>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String
  }
})
</script>
