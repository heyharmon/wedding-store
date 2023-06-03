<template>
  <AppSelectButtons
    :label="label" 
    v-model="topAndBottomPadding" 
    :options="[
      {value: '3xl', label: 'Small'},
      {value: '6xl', label: 'Default'},
      {value: '7xl', label: 'Large'},
    ]"
  />
</template>

<script setup>
const props = defineProps({
  label: String,
  path: String,
})

const store = useEditorStore()

let topAndBottomPadding = computed({
  get() {
    return store.activeBlock.data[props.path].paddingTop;
  },
  set(value) {
    store.activeBlock.data[props.path].paddingTop = value
    store.activeBlock.data[props.path].paddingBottom = value
  }
})
</script>
