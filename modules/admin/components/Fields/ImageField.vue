<template>
  <div 
    @click="openFilePicker()"
    class="group flex items-center justify-between border-b border-gray-300 last:border-0 cursor-pointer hover:bg-gray-50"
  >
    <div class="flex w-16 h-16 overflow-hidden flex-shrink-0 items-center justify-center rounded-l-md bg-gray-100">
      <!-- <img :src="'https://d25r5txdw1c9o7.cloudfront.net/fit-in/350x350/' + file.path" :alt="file.alt" class="pointer-events-none shrink-0 min-w-full min-h-full group-hover:opacity-75" /> -->
      <img :src="image.file.src" :alt="image.file.alt" class="pointer-events-none shrink-0 min-w-full min-h-full group-hover:opacity-75" />
    </div>

    <div class="flex flex-1 items-center justify-between truncate">
      <div class="flex-1 truncate px-4 py-2 text-xs">
        <div class="text-gray-900">{{ image.file.name }}</div>
        <div class="text-gray-400 mt-1">{{ image.file.extension }}</div>
      </div>

      <div class="opacity-0 group-hover:opacity-100 flex-shrink-0 pr-2">
          <button @click.stop="destroy()" type="button" class="inline-flex items-center rounded-md border border-gray-300 p-[6px] bg-white hover:bg-gray-100 active:translate-y-px">
            <Icon name="heroicons:trash" class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useEditorStore } from '@/modules/admin/store/editorStore'
import { getValue, setValue, forget } from '@/modules/admin/composables/useArrayHelpers'

const props = defineProps({
  image: Object,
  path: String,
  index: Number,
})

const store = useEditorStore()

// let image = computed({
//   get() {
//     return getValue({
//       object: store.activeBlock.data, 
//       path: props.path
//     })
//   },
//   set(value) {
//     setValue({
//       object: store.activeBlock.data, 
//       path: props.path, 
//       value: value
//     })
//   }
// })

function destroy() { // TODO: This needs to be emitted up to the parent which knows about the array of images
  forget({
    array: store.activeBlock.data[props.path],
    index: [props.index]
  })
  // setValue({
  //   object: store.activeBlock.data,
  //   path: props.path,
  //   value: null
  // })
}

function openFilePicker() {
  store.filesModal.open = true 
  store.filesModal.targetProp = props.path
}
</script>