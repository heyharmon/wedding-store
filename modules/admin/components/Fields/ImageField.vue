<template>
  <div 
    @click="$emit('openFilesModal')"
    class="group flex items-center justify-between border-b border-gray-300 last:border-0 cursor-pointer hover:bg-gray-50"
  >
    <div class="flex w-16 h-16 overflow-hidden flex-shrink-0 items-center justify-center rounded-l-md bg-gray-100">
      <NuxtImg provider="imagekit" :src="image.file.path" :alt="image.file.alt" width="64" height="64" class="pointer-events-none shrink-0 min-w-full min-h-full group-hover:opacity-75"/>
    </div>

    <div class="flex flex-1 items-center justify-between truncate">
      <div class="flex-1 truncate px-4 py-2 text-xs">
        <div class="text-gray-900">{{ image.file.name }}</div>
        <div class="text-gray-400 mt-1">{{ image.file.extension }}</div>
      </div>

      <div class="opacity-0 group-hover:opacity-100 flex-shrink-0 pr-2">
          <button @click.stop="$emit('removeImage', index)" type="button" class="inline-flex items-center rounded-md border border-gray-300 p-[6px] bg-white hover:bg-gray-100 active:translate-y-px">
            <Icon name="heroicons:trash" class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: Object,
  index: Number,
})

const emit = defineEmits(['removeImage', 'openFilesModal'])
</script>