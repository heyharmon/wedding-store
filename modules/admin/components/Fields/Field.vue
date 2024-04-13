<template>
  <component
    :is="component"
    :label="label"
    :path="path"
    :name="name"
    :options="options"
  />
</template>

<script setup>
const props = defineProps({
  label: String,
  path: String,
  name: String,
  options: Object,
})

let component = computed(() => {
  return defineAsyncComponent(() => import(`./${props.name}.vue`))
})
</script>