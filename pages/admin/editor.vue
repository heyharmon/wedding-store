<template>
  <NuxtLayout name="three-column">
    <template v-slot:top>
      <div class="flex items-center gap-x-4 h-14 px-4">
        <div class="flex flex-1 items-center gap-x-3">
          <!-- Back -->
          <button type="button" class="inline-flex items-center rounded-md bg-gray-100 p-[6px] text-gray-900 hover:bg-gray-200 active:translate-y-px">
            <Icon name="heroicons:arrow-left" class="h-5 w-5 text-gray-700" aria-hidden="true" />
          </button>

          <!-- Settings -->
          <button type="button" class="inline-flex items-center rounded-md bg-gray-100 p-[6px] text-gray-900 hover:bg-gray-200 active:translate-y-px">
            <Icon name="heroicons:cog-6-tooth-solid" class="h-5 w-5 text-gray-700" aria-hidden="true" />
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
          <!-- Profile dropdown -->
          <Menu as="div" class="relative">
            <MenuButton class="-m-1.5 flex items-center p-1.5">
              <img class="h-8 w-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </MenuButton>
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                  <a :href="item.href" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">{{ item.name }}</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>

          <!-- Separator -->
          <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

          <!-- Preview -->
          <button type="button" class="inline-flex items-center rounded-md bg-gray-100 p-[6px] text-gray-900 hover:bg-gray-200 active:translate-y-px">
            <Icon name="heroicons:eye-solid" class="h-5 w-5 text-gray-700" aria-hidden="true" />
          </button>

          <!-- Publish -->
          <button type="button" class="inline-flex items-center rounded-md bg-indigo-500 py-[6px] px-[12px] text-[13px] text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:translate-y-px">
            Publish
          </button>
        </div>
      </div>
    </template>

    <template v-slot:left>
      <div v-if="store.activeBlock">
        <!-- Panel top -->
        <div class="flex items-center justify-between border-b px-4 py-3">
          <p class="font-medium">Panel title</p>
          <button type="button" class="inline-flex items-center rounded-md border border-gray-300 p-[6px] hover:bg-gray-100 active:translate-y-px">
            <Icon name="heroicons:x-mark" class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </button>
        </div>

        <!-- Content fields -->
        <div class="flex flex-col gap-y-5 px-4 py-6">
          <!-- Pretitle -->
          <AppInput label="Pretitle" v-model="store.activeBlock.data.pretitle.content"/>

          <!-- Title -->
          <AppInput label="Title" v-model="store.activeBlock.data.title.content"/>

          <!-- Title size -->
          <AppSelectButtons label="Title size" v-model="store.activeBlock.data.title.size" :options="[
            {value: '4xl', label: 'Small'},
            {value: '5xl', label: 'Default'},
            {value: '6xl', label: 'Large'},
            {value: '7xl', label: 'Huge'},
          ]"/>

          <!-- Subtitle -->
          <AppInput label="Subtitle" v-model="store.activeBlock.data.subtitle.content"/>

          <!-- Buttons -->
          <ButtonFieldRepeater label="Buttons" path="buttons"/>

          <!-- Background image -->
          <FileField 
            label="Background image"
            path="background.file"
            v-model="store.activeBlock.data.background.file" 
          />
          
          <!-- Background overlay -->
          <AppSwitch 
            label="Overlay" 
            v-model="store.activeBlock.data.background.overlay"
          />

          <!-- Padding -->
          <PaddingField 
            label="Padding" 
            path="padding"
          />
        </div>
      </div>
    </template>

    <template v-slot:middle>
      <BlockWrapper
        v-for="(block, index) in store.page.blocks"
        :key="index"
        :active="block.id === store.activeBlockId"
        :total="store.page.blocks.length"
        :index="index"
        :block="block"
        @close="closeBlockWrapper"
        @delete="deleteBlock"
        @move="moveBlock"
      >
        <Block v-bind="block" @click="toggleActiveBlockId(block.id)"/>
      </BlockWrapper>
    </template>

    <template v-slot:right>
      <div>Right...</div>
    </template>
  </NuxtLayout>

  <FilesModal v-if="store.filesModal.open" @close="store.filesModal.open = false" title="Files" size="full"/>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

const store = useEditorStore()

await useAsyncData('page', () => store.show('homepage'))

function toggleActiveBlockId(id) {
  store.activeBlockId = id
}

function closeBlockWrapper() {
  store.activeBlockId = ''
}

function deleteBlock(block) {
  console.log('deleting...')
}

function moveBlock({index, block, direction} = {}) {
  console.log('moving...')
}
</script>