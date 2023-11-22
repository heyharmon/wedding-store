<template>
  <EditorLayout>
    <template v-slot:top>
      <div class="flex items-center gap-x-4 h-14 px-4">
        <div class="flex flex-1 items-center gap-x-3">
          <!-- Back -->
          <button type="button" class="inline-flex items-center rounded-md bg-gray-100 p-[6px] text-gray-900 hover:bg-gray-200 active:translate-y-px">
            <Icon name="heroicons:arrow-left" class="h-5 w-5 text-gray-700" aria-hidden="true" />
          </button>

          <!-- Settings -->
          <!-- <button type="button" class="inline-flex items-center rounded-md bg-gray-100 p-[6px] text-gray-900 hover:bg-gray-200 active:translate-y-px">
            <Icon name="heroicons:cog-6-tooth-solid" class="h-5 w-5 text-gray-700" aria-hidden="true" />
          </button> -->

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
          <!-- Undo/redo -->
          <div class="flex items-center">
            <button @click="undo()" type="button" class="inline-flex items-center p-[6px] text-gray-900 active:translate-y-px">
              <Icon name="ph:arrow-counter-clockwise" class="h-5 w-5 text-gray-700" aria-hidden="true" />
            </button>
            <button @click="redo()" type="button" class="inline-flex items-center p-[6px] text-gray-900 active:translate-y-px">
              <Icon name="ph:arrow-clockwise" class="h-5 w-5 text-gray-700" aria-hidden="true" />
            </button>
          </div>

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

          <!-- Profile dropdown -->
          <!-- <Menu as="div" class="relative">
            <MenuButton class="-m-1.5 flex items-center p-1.5">
              <img class="h-8 w-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </MenuButton>
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                <MenuItem v-for="item in [{ name: 'Your profile', href: '#' }, { name: 'Sign out', href: '#' }]" :key="item.name" v-slot="{ active }">
                  <a :href="item.href" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">{{ item.name }}</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu> -->

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
      <!-- History -->
      <!-- <ul>
        <li v-for="entry of history" :key="entry.timestamp">
          <span>{{ entry }}</span>
        </li>
      </ul> -->
      
      <!-- Panel top -->
      <!-- <div class="sticky z-20 top-0 flex items-center justify-between border-b px-4 py-3 bg-white">
        <p class="font-medium">Yolo</p>
      </div> -->

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
import { useRefHistory } from '@vueuse/core'
import BlockWrapper from '@/cms/editor/components/BlockWrapper.vue'
import Block from '@/client/components/Block/Block.vue'
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const store = useEditorStore()
const { blocks } = storeToRefs(store)

const { history, undo, redo } = useRefHistory(blocks, {
  capacity: 10, // limit history records
});

// let fields = computed(() => {
//   const fields = import('@/components/Hero/fields/index.js');

//   return fields
// })

await useAsyncData('page', () => store.showPage('homepage'))
</script>