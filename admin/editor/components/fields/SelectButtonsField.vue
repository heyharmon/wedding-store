<template>
  <AppSelectButtons 
    :label="label" 
    :options="options"
    :modelValue="getValue({
      object: store.activeBlock.data, 
      path: path
    })" 
    @update:modelValue="setValue({
      object: store.activeBlock.data, 
      path: path, 
      value: $event
    })"
  />
</template>

<script setup>
const props = defineProps({
  label: String,
  path: String,
  options: Array,
})

const store = useEditorStore()
</script>