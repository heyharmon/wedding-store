<template>
  <Disclosure as="header" class="bg-white" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:divide-y lg:divide-gray-200">
      <!-- Top -->
      <div class="relative flex h-16 justify-between">
        <div class="relative z-10 flex lg:px-0">
          <!-- Logo -->
          <div class="flex gap-3 items-center">
            <AppLogo class="h-6 w-auto"/>
            <!-- <span class="mt-1 rounded-md bg-gray-50 text-sm text-gray-500 p-1">Salt Lake City</span> -->
            <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              <svg class="h-1.5 w-1.5 fill-teal-600" viewBox="0 0 6 6" aria-hidden="true">
                <circle cx="3" cy="3" r="3" />
              </svg>
              Salt Lake City
            </span>
          </div>
        </div>
        
        <!-- Search -->
        <!-- <div class="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
          <div class="w-full sm:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input id="search" name="search" class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6" placeholder="Search" type="search" />
            </div>
          </div>
        </div> -->

        <!-- Right -->
        <div class="relative ml-4 flex gap-1 items-center">

          <!-- Favorites -->
          <a href="#" class="group flex items-center p-2">
            <svg class="h-6 w-6 flex-shrink-0 fill-gray-900 group-hover:fill-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
            <span class="sr-only">View favorites</span>
          </a>

          <!-- Cart -->
          <a href="#" class="group flex items-center p-2">
            <svg class="h-6 w-6 flex-shrink-0 fill-gray-900 group-hover:fill-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z"/></svg>
            <span class="ml-2 text-sm font-medium text-gray-900 group-hover:text-gray-800">0</span>
            <span class="sr-only"> items in cart, view bag</span>
          </a>

          <!-- Mobile menu button -->
          <div class="relative z-10 flex items-center mr-1 lg:hidden">
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-1 text-gray-900 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open menu</span>
              <Bars3Icon v-if="!open" class="block h-7 w-7" aria-hidden="true" />
              <XMarkIcon v-else class="block h-7 w-7" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <nav class="hidden lg:flex lg:space-x-4 lg:py-2" aria-label="Global">
        <a 
          v-for="item in navigation" 
          :key="item.name" 
          :href="item.href" 
          :aria-current="item.current ? 'page' : undefined"
          :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-teal-100 hover:text-gray-900', '']" 
          class="inline-flex items-center rounded-full px-3 py-2 text-base bg-teal-50 sm:-ml-2"
        >
          {{ item.name }}
        </a>
        <!-- <a 
          v-for="item in navigation" 
          :key="item.name" 
          :href="item.href" 
          :aria-current="item.current ? 'page' : undefined"
          :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-teal-50 hover:text-gray-900', '']" 
          class="inline-flex items-center rounded-md px-3 py-2 text-base sm:-ml-2"
        >
          {{ item.name }}
        </a> -->
      </nav>
    </div>

    <!-- Mobile flyout -->
    <DisclosurePanel as="nav" class="lg:hidden bg-teal-50" aria-label="Global">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton 
          v-for="item in navigation" 
          as="a"
          :key="item.name"  
          :href="item.href" 
          :aria-current="item.current ? 'page' : undefined"
          :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-teal-100 hover:text-gray-900', '']" 
          class="block rounded-md px-3 py-2 text-base font-medium"
        >
          {{ item.name }}
        </DisclosureButton>
      </div>
      <!-- <div class="border-t border-gray-200 pb-3 pt-4">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">{{ user.name }}</div>
            <div class="text-sm font-medium text-gray-500">{{ user.email }}</div>
          </div>
          <button type="button" class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-3 space-y-1 px-2">
          <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">{{ item.name }}</DisclosureButton>
        </div>
      </div> -->
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { provideUseId, Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { name: 'Arches', href: '#', current: false },
  { name: 'Signage', href: '#', current: false },
  { name: 'Walls', href: '#', current: false },
  { name: 'Chairs', href: '#', current: false },
  { name: 'Tables', href: '#', current: false },
  // { name: 'Carts', href: '#', current: false },
  { name: 'Decor', href: '#', current: false },
  // { name: 'Food & Drink', href: '#', current: false },
  { name: 'Games', href: '#', current: false },
]

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

// This fixes hydration mismatch issues
provideUseId(() => useId())
</script>