<template>
  <NuxtLayout name="three-column" class="bg-slate-50">
    <template #top>
      <div class="flex items-center gap-x-4 h-14 border-b bg-white px-8">
        <div class="flex flex-1 items-center gap-x-6">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        </div>

        <nav class="flex items-center gap-x-4">
          <!-- Page title -->
          <div class="text-gray-600 font-semibold text-[15px]">Homepage</div>

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
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                  <a :href="item.href" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">{{ item.name }}</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>

          <!-- Settings -->
          <button type="button" class="inline-flex items-center rounded-md bg-white p-[6px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <Icon name="heroicons:cog-6-tooth-solid" class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </button>

          <!-- Preview -->
          <button type="button" class="inline-flex items-center rounded-md bg-white p-[6px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <Icon name="heroicons:eye-solid" class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </button>

          <!-- Publish -->
          <button type="button" class="inline-flex items-center rounded-md bg-indigo-600 py-[6px] px-[12px] text-[13px] text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Publish
          </button>
        </div>
      </div>
    </template>

    <template #left>
      <div class="border-b border-light-91 px-3 pb-2">
        <a class="mx-1 mb-4 block h-5 w-5 rounded p-1 text-wedges-gray-400 hover:bg-light-91" href="https://app.lemonsqueezy.com/dashboard">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 fill-transparent stroke-current"><path d="M4.75 11.98h14.5M11.25 18.25 4.75 12l6.5-6.25" stroke="#25252D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </a>
        
        <div class="rounded hover:bg-light-91">
          <div class="flex items-center px-2 py-1">
            <label class="form-label mb-0 flex-grow">Enable your store</label>
          </div>
          <p class="form-input-desc m-0 px-2 pb-1"> Display your store or hide it and redirect to your website instead.</p>
        </div>
      </div>
    </template>

    <template #middle>
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="overflow-hidden rounded-lg bg-white shadow-lg border">
          <BlockEditor
            v-for="(block, index) in store.page.blocks"
            :key="index"
            :active="block.id === activeBlockId"
            :total="store.page.blocks.length"
            :index="index"
            :block="block"
            @close="closeBlockEditor"
            @delete="deleteBlock"
            @move="moveBlock"
          >
            <Block v-bind="block" @click="toggleActiveBlockId(block.id)"/>
          </BlockEditor>
        </div>
      </div>
    </template>

    <template #right>
      <div>Right...</div>
    </template>
  </NuxtLayout>
</template>

<script setup>
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

const store = usePageStore()

let activeBlockId = ref('')

await useAsyncData('page', () => store.show('page-1'))

function toggleActiveBlockId(id) {
  activeBlockId.value = id;
}

function closeBlockEditor() {
  activeBlockId.value = ''
}

function deleteBlock(block) {
  console.log('deleting...')
}

function moveBlock({index, block, direction} = {}) {
  console.log('moving...')
}
</script>