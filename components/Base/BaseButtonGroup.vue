<template>
  <div v-if="buttons" class="flex items-center gap-x-4">
    <BaseButton v-for="button in buttons" v-bind="button"/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
    buttons: {
        type: Array,
    }
})
</script>