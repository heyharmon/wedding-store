<template>
  <!-- Button field -->
  <div @click="open = true" class="group sm:flex sm:items-start sm:justify-between border-b border-gray-300 last:border-0 cursor-pointer hover:bg-gray-50 px-2 py-3">
    <div class="sm:flex sm:items-center">
      <div class="h-8 w-6 mr-2 flex items-center justify-center cursor-move">
        <Icon name="heroicons:bars-3" class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>

      <div class="truncate">
        <div class="text-xs text-gray-900">{{ modelValue.label }}</div>
        <div class="mt-1.5 text-xs text-gray-400">{{ modelValue.to }}</div>
      </div>
    </div>

    <div class="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
      <button @click.stop="destroy()" type="button" class="opacity-0 group-hover:opacity-100 inline-flex items-center rounded-md border border-gray-300 p-[6px] bg-white hover:bg-gray-100 active:translate-y-px">
        <Icon name="heroicons:trash" class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </button>
    </div>

    <!-- Button editor modal -->
    <AppModal v-if="open" @close="open = false" title="Button" size="sm">
      <div class="flex flex-col gap-y-5 p-8">
        <AppInput label="Label" v-model="modelValue.label"/>
        <AppInput label="To" v-model="modelValue.to"/>
      </div>
    </AppModal>
  </div>
</template>

<script setup>
import pullAt from "lodash/pullAt";

const props = defineProps({
  modelValue: Object,
  index: Number,
})

const store = useEditorStore()
const open = ref(false)

function destroy() {
  pullAt(
    store.activeBlock.data.buttons,
    [props.index]
  )
}
</script>
