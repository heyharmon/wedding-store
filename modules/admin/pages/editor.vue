<template>
  <EditorLayout>
    <template v-slot:top>
      <div class="flex items-center gap-x-4 h-14 px-4">
        <div class="flex flex-1 items-center gap-x-3">
          <!-- Back -->
          <button type="button" class="inline-flex items-center rounded-md bg-gray-100 p-[6px] text-gray-900 hover:bg-gray-200 active:translate-y-px">
            <Icon name="heroicons:arrow-left" class="h-5 w-5 text-gray-700" aria-hidden="true" />
          </button>

          <!-- Blocks -->
          <button @click="store.showDefault()" :class="store.show.blocksPanel ? 'bg-indigo-100' : ''" class="inline-flex items-center py-[6px] px-[12px] text-[14px] text-indigo-600 rounded-md hover:bg-indigo-100 active:translate-y-px">
            <Icon name="heroicons:squares-plus-solid" class="h-5 w-5 mr-1.5" aria-hidden="true" />
            Blocks
          </button>

          <!-- Design -->
          <button @click="store.showDesignPanel()" :class="store.show.designPanel ? 'bg-indigo-100' : ''" class="inline-flex items-center py-[6px] px-[12px] text-[14px] text-indigo-600 rounded-md hover:bg-indigo-100 active:translate-y-px">
            <Icon name="heroicons:swatch-solid" class="h-5 w-5 mr-1.5" aria-hidden="true" />
            Design
          </button>
        </div>

        <nav class="flex items-center gap-x-4">
          <!-- Page title -->
          <div class="text-[15px]">Homepage</div>

          <!-- Badge -->
          <span class="inline-flex items-center gap-x-1 rounded-md bg-indigo-100 text-indigo-700 text-[13px] px-[6px] py-[2px]">
            <svg class="h-1.5 w-1.5 fill-indigo-500" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3" /></svg>
            Draft
          </span>
        </nav>

        <div class="flex flex-1 items-center justify-end gap-x-3">
          <!-- Separator -->
          <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

          <!-- Settings -->
          <button type="button" class="inline-flex items-center rounded-md bg-gray-100 p-[6px] text-gray-900 hover:bg-gray-200 active:translate-y-px">
            <Icon name="heroicons:cog-6-tooth-solid" class="h-5 w-5 text-gray-700" aria-hidden="true" />
          </button>

          <!-- Preview -->
          <button type="button" class="inline-flex items-center rounded-md bg-gray-100 p-[6px] text-gray-900 hover:bg-gray-200 active:translate-y-px">
            <Icon name="heroicons:eye-solid" class="h-5 w-5 text-gray-700" aria-hidden="true" />
          </button>

          <!-- Publish -->
          <button type="button" class="inline-flex items-center rounded-md bg-indigo-500 py-[5px] px-[12px] text-[14px] text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:translate-y-px">
            Publish
          </button>
        </div>
      </div>
    </template>

    <template v-slot:left>
      <BlocksPanel v-if="store.show.blocksPanel"/>
      <FieldsPanel v-if="store.activeBlockId"/>
    </template>

    <template v-slot:middle>
      <BlockWrapper v-for="(block, index) in blocks" :key="index" :index="index" :block="block">
        <Block v-bind="block"/>
      </BlockWrapper>
    </template>

    <template v-slot:right>
      <ThumbnailsPanel/>
    </template>
  </EditorLayout>

  <FilesModal v-if="store.filesModal.open" @close="store.filesModal.open = false" title="Files" size="full"/>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import BlockWrapper from '@/cms/editor/components/BlockWrapper.vue'
import Block from '@/client/components/Block.vue'

const store = useEditorStore()
const { blocks } = storeToRefs(store)

await useAsyncData('page', () => store.showPage('homepage'))
</script>