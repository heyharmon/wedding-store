<template>
  <div class="margin-bottom-sm">
    <label v-if="label" class="block text-sm font-medium leading-6 text-gray-900" :for="label">{{ label }}</label>

    <!-- Mini card -->
    <div class="mt-2 group flex rounded-md shadow-sm cursor-pointer border border-gray-300 bg-white hover:bg-gray-50">
      <div class="flex w-16 h-16 overflow-hidden flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white bg-gray-100">
        <img :src="'https://d25r5txdw1c9o7.cloudfront.net/fit-in/350x350/' + path" :alt="alt" class="pointer-events-none shrink-0 min-w-full min-h-full group-hover:opacity-75" />
      </div>

      <div class="flex flex-1 items-center justify-between truncate">
        <div class="flex-1 truncate px-4 py-2 text-xs">
          <div class="text-gray-900">{{ name }}</div>
          <div class="text-gray-400 mt-1">{{ extension }}</div>
        </div>

        <div class="opacity-0 group-hover:opacity-100 flex-shrink-0 pr-2">
            <button type="button" class="inline-flex items-center rounded-md border border-gray-300 p-[6px] bg-white hover:bg-gray-100 active:translate-y-px">
              <Icon name="heroicons:trash" class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  name: String,
  path: String,
  extension: String,
  alt: String,
  description: String,
  caption: String,
})
</script>