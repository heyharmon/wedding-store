<template>
  <component
    :is="component"
    v-bind="data"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  group: String,
  name: String,
  data: Object,
})

let component = computed(() => {
  return defineAsyncComponent(() => import(`~/components/blocks/${props.group}/${props.name}.vue`))
})
</script>