<template>
  <div class="relative">
    <!-- Outline -->
    <div v-if="active" class="z-10 h-full w-full absolute border-4 border-indigo-500">

      <!-- Controls -->
      <div class="flex justify-between w-full mt-3">
        <div>
          <button class="text-xs font-semibold inline-block py-2 px-3 ml-2 uppercase rounded text-indigo-600 bg-indigo-200 focus:bg-indigo-600 focus:text-white">
            <Icon name="heroicons:swatch" class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div>
          <button
            v-if="index < total - 1"
            @click="emitMove('down')"
            class="text-xs font-semibold inline-block py-2 px-3 mr-2 uppercase rounded text-indigo-600 bg-indigo-200 focus:bg-indigo-600 focus:text-white"
          >
            <Icon name="heroicons:arrow-down" class="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            v-if="index > 0"
            @click="emitMove('up')"
            class="text-xs font-semibold inline-block py-2 px-3 mr-2 uppercase rounded text-indigo-600 bg-indigo-200 focus:bg-indigo-600 focus:text-white"
          >
            <Icon name="heroicons:arrow-up" class="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            @click="emitDelete()"
            class="text-xs font-semibold inline-block py-2 px-3 mr-2 uppercase rounded text-red-600 bg-red-200 focus:bg-red-600 focus:text-white"
          >
            <Icon name="heroicons:trash" class="h-5 w-5" aria-hidden="true" />
          </button>
          
          <button
            @click="emitClose()"
            class="text-xs font-semibold inline-block py-2 px-3 mr-2 ml-12 uppercase rounded text-gray-600 bg-gray-200 focus:bg-gray-600 focus:text-white"
          >
            <Icon name="heroicons:x-mark" class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  active: Boolean,
  total: Number,
  index: Number,
  block: Object,
})

const emit = defineEmits(['move', 'delete', 'close'])

function emitMove(direction) {
  emit('move', {
    index: props.index,
    block: props.block,
    direction: direction,
  });
}

function emitDelete() {
 emit('delete', props.block)
}

function emitClose() {
 emit('close')
}
</script>