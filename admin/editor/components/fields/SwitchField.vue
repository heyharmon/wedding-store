<template>
  <AppSwitch 
    :label="label" 
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
  path: String
})

const store = useEditorStore()
</script>

