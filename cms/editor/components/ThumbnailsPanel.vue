<template>
  <ul role="list" class="grid gap-y-2.5 mr-4">
    <li v-for="(block, index) in store.page.blocks" :key="index" @click="store.showEditorPanel(block.id)" :class="store.activeBlockId == block.id ? 'border-2 border-indigo-500' : ''" class="relative cursor-pointer overflow-hidden rounded-md border drop-shadow-sm bg-white">
      <p class="block truncate text-xs text-gray-900 p-2">{{ block.name }}</p>
      <!-- <div class="group aspect-h-7 aspect-w-10 block w-full max-h-44 bg-gray-100">
        <img :src="'https://placehold.co/350x200'" :alt="`${block.name} thumbnail`" class="pointer-events-none shrink-0 min-w-full min-h-full group-hover:opacity-75" />
        <button type="button" class="absolute inset-0 focus:outline-none">
          <span class="sr-only">Yolo</span>
        </button>
      </div> -->
    </li>
  </ul>
</template>

<script setup>
const store = useEditorStore()
</script>