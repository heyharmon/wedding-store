<template>
  <NuxtLayout name="three-column">
    <template v-slot:top>
      <div class="flex items-center gap-x-4 h-14 px-4">
        <div class="flex flex-1 items-center gap-x-3">
          <!-- Back -->
          <button type="button" class="inline-flex items-center rounded-md bg-slate-100 p-[6px] text-slate-900 hover:bg-slate-200 active:translate-y-px">
            <Icon name="heroicons:arrow-left" class="h-5 w-5 text-slate-700" aria-hidden="true" />
          </button>

          <!-- Settings -->
          <button type="button" class="inline-flex items-center rounded-md bg-slate-100 p-[6px] text-slate-900 hover:bg-slate-200 active:translate-y-px">
            <Icon name="heroicons:cog-6-tooth-solid" class="h-5 w-5 text-slate-700" aria-hidden="true" />
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
              <img class="h-8 w-8 rounded-full bg-slate-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </MenuButton>
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-slate-900/5 focus:outline-none">
                <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                  <a :href="item.href" :class="[active ? 'bg-slate-50' : '', 'block px-3 py-1 text-sm leading-6 text-slate-900']">{{ item.name }}</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>

          <!-- Separator -->
          <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-slate-900/10" aria-hidden="true" />

          <!-- Preview -->
          <button type="button" class="inline-flex items-center rounded-md bg-slate-100 p-[6px] text-slate-900 hover:bg-slate-200 active:translate-y-px">
            <Icon name="heroicons:eye-solid" class="h-5 w-5 text-slate-700" aria-hidden="true" />
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
          <button type="button" class="inline-flex items-center rounded-md border border-slate-300 p-[6px] hover:bg-slate-100 active:translate-y-px">
            <Icon name="heroicons:x-mark" class="h-5 w-5 text-slate-400" aria-hidden="true" />
          </button>
        </div>

        <!-- Content group -->
        <div class="border-b px-4 py-6">
          <div class="flex flex-col gap-y-5">
            <!-- Pretitle -->
            <div>
              <!-- <label class="text-xs leading-6 font-medium text-slate-900 mb-1.5">Pretitle</label> -->
              <TextField v-model="store.activeBlock.data.pretitle.content" label="Pretitle" type="text"/>
            </div>

            <!-- Title -->
            <div>
              <!-- <label class="text-xs leading-6 font-medium text-slate-900 mb-1.5">Title</label> -->
              <TextField v-model="store.activeBlock.data.title.content" label="Title" type="text"/>
            </div>

            <!-- Title size -->
            <div>
              <SelectField v-model="store.activeBlock.data.title.size" label="Title size" :options="[
                {value: 'xl', label: 'Tiny'},
                {value: '3xl', label: 'Smaller'},
                {value: '4xl', label: 'Small'},
                {value: '5xl', label: 'Default'},
                {value: '6xl', label: 'Large'},
                {value: '7xl', label: 'Larger'},
                {value: '8xl', label: 'Huge'},
              ]"/>
            </div>

            <!-- Subtitle -->
            <div>
              <TextField v-model="store.activeBlock.data.subtitle.content" label="Subtitle" type="text"/>
            </div>

            <!-- Buttons -->
            <div>
              <p class="text-xs leading-6 font-medium text-slate-900 mb-1.5">Buttons</p>

              <div class="overflow-hidden rounded-md border bg-white">
                <!-- Button 1 -->
                <div class="group sm:flex sm:items-start sm:justify-between border-b last:border-0 cursor-pointer hover:bg-slate-50 transition-color duration-200 ease-in-out px-2 py-3">
                  <div class="sm:flex sm:items-center">
                    <div class="h-8 w-6 mr-2 flex items-center justify-center cursor-move">
                      <Icon name="heroicons:bars-3" class="h-5 w-5 text-slate-400" aria-hidden="true" />
                    </div>
                    
                    <div class="truncate">
                      <div class="text-xs text-slate-900">Homepage</div>
                      <div class="mt-1 text-xs text-slate-400">/homepage</div>
                    </div>
                  </div>

                  <div class="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
                    <button type="button" class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center rounded-md border border-slate-300 p-[6px] bg-white hover:bg-slate-100 active:translate-y-px">
                      <Icon name="heroicons:trash" class="h-5 w-5 text-slate-400" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <!-- Button 2 -->
                <div class="group sm:flex sm:items-start sm:justify-between border-b last:border-0 cursor-pointer hover:bg-slate-50 transition-opacity duration-200 ease-in-out px-2 py-3">
                  <div class="sm:flex sm:items-center">
                    <div class="h-8 w-6 mr-2 flex items-center justify-center cursor-move">
                      <Icon name="heroicons:bars-3" class="h-5 w-5 text-slate-400" aria-hidden="true" />
                    </div>
                    
                    <div class="truncate">
                      <div class="text-xs text-slate-900">Learn more</div>
                      <div class="mt-1 text-xs text-slate-400">/learn-more</div>
                    </div>
                  </div>

                  <div class="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
                    <button type="button" class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center rounded-md border border-slate-300 p-[6px] bg-white hover:bg-slate-100 active:translate-y-px">
                      <Icon name="heroicons:trash" class="h-5 w-5 text-slate-400" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Background -->
        <div class="border-b px-4 py-6">
          <p class="text-xs leading-6 font-medium text-slate-900 mb-1.5">Background</p>

          <!-- Image -->
          <div class="group flex rounded-md shadow-sm cursor-pointer border bg-white transition-colors duration-200 ease-in-out hover:bg-slate-50">
            <div class="flex w-16 h-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white bg-slate-100"></div>

            <div class="flex flex-1 items-center justify-between truncate">
              <div class="flex-1 truncate px-4 py-2 text-xs">
                <div class="text-slate-900">Image title</div>
                <div class="text-slate-400 mt-1">png</div>
              </div>

              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out flex-shrink-0 pr-2">
                <button type="button" class="inline-flex items-center rounded-md border border-slate-300 p-[6px] bg-white hover:bg-slate-100 active:translate-y-px">
                  <Icon name="heroicons:trash" class="h-5 w-5 text-slate-400" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <!-- Overlay -->
          <div class="group mt-2">
            <SwitchGroup as="div" class="flex items-center cursor-pointer">
              <SwitchLabel as="span" class="flex-1 text-xs font-medium text-slate-900 py-4">
                Overlay
              </SwitchLabel>

              <Switch 
                v-model="store.activeBlock.data.background.overlay" 
                :class="[store.activeBlock.data.background.overlay ? 'bg-indigo-600' : 'bg-slate-200']"
                class="group-hover:bg-indigo-400 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
              >
                <span 
                  aria-hidden="true" 
                  :class="[store.activeBlock.data.background.overlay ? 'translate-x-5' : 'translate-x-0']" 
                  class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                />
              </Switch>
            </SwitchGroup>
          </div>

          <!-- Gradient -->
          <!-- <div class="last:border-t">
            <SwitchGroup as="div" class="flex items-center cursor-pointer">
              <SwitchLabel as="span" class="flex-1 text-xs font-medium text-slate-900 py-4">
                Gradient
              </SwitchLabel>

              <Switch 
                v-model="gradientEnabled" 
                :class="[gradientEnabled ? 'bg-indigo-600' : 'bg-slate-200']"
                class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
              >
                <span 
                  aria-hidden="true" 
                  :class="[gradientEnabled ? 'translate-x-5' : 'translate-x-0']" 
                  class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                />
              </Switch>
            </SwitchGroup>
          </div> -->

          <!-- <Menu as="div" class="relative">
            <MenuButton class="flex items-center">
              <div class="h-8 w-8 rounded-full bg-white"></div>
            </MenuButton>
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute left-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-slate-900/5 focus:outline-none">
                <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                  <a :href="item.href" :class="[active ? 'bg-slate-50' : '', 'block px-3 py-1 text-sm leading-6 text-slate-900']">{{ item.name }}</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu> -->
          
          <!-- Background color -->
          <!-- <FormKit
            type="select"
            label="Background color"
            :options="[
              {label: 'Primary', value: '#fff'},
              {label: 'Secondary', value: '#fff'},
              {label: 'Accent', value: '#fff'},
            ]"
          >
            <template #option="{ option }">
              <div class="formkit-option">
                <div class="h-8 w-8 rounded-full" :style="`background-color: ${option.value};`"></div>
                <span>
                  {{ option.label }}
                </span>
              </div>
            </template>
          </FormKit> -->

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
</template>

<script setup>
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

const store = usePageStore()

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