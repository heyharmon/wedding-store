<template>
  <div v-if="product" class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-8">
        <!-- Image gallery -->
        <TabGroup as="div" class="lg:col-span-2 flex flex-col-reverse">
          <!-- Image selector -->
          <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <TabList class="grid grid-cols-5 gap-6">
              <Tab v-for="(image, index) in product.images" :key="image.src" class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4" v-slot="{ selected }">
                <span class="sr-only">Product image {{ index + 1 }}</span>
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <NuxtImg 
                    :src="image.src" 
                    :alt="product.title + ' thumbnail' + index + 1" 
                    class="h-full w-full object-cover object-center"
                    format="webp"
                  />
                </span>
                <span :class="[selected ? 'ring-indigo-500' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2']" aria-hidden="true" />
              </Tab>
            </TabList>
          </div>

          <!-- Image -->
          <TabPanels class="aspect-h-1 aspect-w-1 w-full">
            <TabPanel v-for="(image, index) in product.images" :key="image.src">
              <NuxtImg 
                :src="image.src" 
                :alt="product.title + ' image' + index + 1" 
                class="h-full w-full object-cover object-center sm:rounded-lg"
                format="webp"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <!-- Product info -->
        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="font-header text-4xl font-bold tracking-tight text-gray-900">{{ product.title }}</h1>

          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-2xl tracking-tight text-gray-900">${{ product.variants[0].price.amount }} / day</p>
          </div>

          <!-- Description -->
          <div class="mt-6">
            <h3 class="sr-only">Description</h3>
            <div class="space-y-6 text-sm text-gray-700" v-html="product.description" />
          </div>

          <div class="mt-6">
            <!-- Colors -->
            <!-- <div>
              <h3 class="text-sm font-medium text-gray-600">Color</h3>
              <fieldset aria-label="Choose a color" class="mt-2">
                <RadioGroup v-model="selectedColor" class="flex items-center space-x-3">
                  <RadioGroupOption as="template" v-for="color in mockedProduct.colors" :key="color.name" :value="color" :aria-label="color.name" v-slot="{ active, checked }">
                    <div :class="[color.selectedColor, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
                      <span aria-hidden="true" :class="[color.bgColor, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
                    </div>
                  </RadioGroupOption>
                </RadioGroup>
              </fieldset>
            </div> -->

            <div class="mt-10 flex">
              <button @click="customerStore.addToCart(product.id)" type="button" class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">
                Add to bag
              </button>

              <button type="button" class="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                <HeartIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                <span class="sr-only">Add to favorites</span>
              </button>
            </div>
          </div>

          <!-- <section aria-labelledby="details-heading" class="mt-12">
            <h2 id="details-heading" class="sr-only">Additional details</h2>

            <div class="divide-y divide-gray-200 border-t">
              <Disclosure as="div" v-for="detail in mockedProduct.details" :key="detail.name" v-slot="{ open }">
                <h3>
                  <DisclosureButton class="group relative flex w-full items-center justify-between py-6 text-left">
                    <span :class="[open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium']">{{ detail.name }}</span>
                    <span class="ml-6 flex items-center">
                      <PlusIcon v-if="!open" class="block h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                      <MinusIcon v-else class="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500" aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel as="div" class="prose prose-sm pb-6">
                  <ul role="list">
                    <li v-for="item in detail.items" :key="item">{{ item }}</li>
                  </ul>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </section> -->
        </div>

      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { provideUseId, Disclosure, DisclosureButton, DisclosurePanel, RadioGroup, RadioGroupOption, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { useCustomerStore } from '@/stores/useCustomerStore'

const props = defineProps({
  product: Object,
})

const customerStore = useCustomerStore()
provideUseId(() => useId())
// const selectedColor = ref(mockedProduct.colors[0])
</script>