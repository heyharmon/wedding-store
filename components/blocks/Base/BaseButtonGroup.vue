<template>
  <div v-if="buttons" class="space-x-4">
    <BaseButton v-for="button in buttons" v-bind="button" />
  </div>
</template>

<script setup>
const props = defineProps({
    buttons: {
        type: Array,
    }
})
</script>