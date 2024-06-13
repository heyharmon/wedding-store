<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 v-if="title" class="font-header text-3xl text-gray-900">{{ title }}</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <NuxtImg 
              v-if="product.images[0]" 
              :src="product.images[0].src" 
              :alt="product.title + ' featured image'" 
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
              format="webp"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-base font-medium text-gray-900">
                <NuxtLink :to="'/products/' + product.handle">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.title }}
                </NuxtLink>
              </h3>
              <p class="text-sm italic text-gray-500">Available</p>
            </div>
            <p class="text-sm text-gray-700">${{ product.variants[0].price.amount }} / day</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  products: Array,
})
</script>