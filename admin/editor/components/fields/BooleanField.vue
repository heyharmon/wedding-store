<template>
  <AppInput 
    :label="label" 
    :modelValue="boolean" 
    @update:modelValue="boolean = $event"
  />
</template>

<script setup>
const props = defineProps({
  label: String,
  path: String
})

const store = useEditorStore()

let boolean = computed({
  get() {
    return store.activeBlock.data[props.path];
  },
  set(value) {
    store.activeBlock.data[props.path] = value
  }
})
</script>

