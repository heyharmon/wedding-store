<template> 
  <div>
    <AppSelectButtons
      :label="label" 
      v-model="topAndBottomPadding" 
      :options="[
        {value: '3xl', label: 'Small'},
        {value: '6xl', label: 'Default'},
        {value: '7xl', label: 'Large'},
      ]"
    />
  </div>
</template>

<script setup>
import { useEditorStore } from '@/modules/admin/store/editorStore'
import AppSelectButtons from '@/modules/admin/components/Fields/AppSelectButtons.vue'

const props = defineProps({
  label: String,
  path: String,
})

const store = useEditorStore()

let topAndBottomPadding = computed({
  get() {
    return store.activeBlock.data.padding.paddingTop;
  },
  set(value) {
    store.activeBlock.data.padding.paddingTop = value
    store.activeBlock.data.padding.paddingBottom = value
  }
})

// let topAndBottomPadding = computed({
//   get() {
//     return store.activeBlock.data[props.path].paddingTop;
//   },
//   set(value) {
//     store.activeBlock.data[props.path].paddingTop = value
//     store.activeBlock.data[props.path].paddingBottom = value
//   }
// })
</script>
