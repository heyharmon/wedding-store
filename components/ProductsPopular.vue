<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl overflow-hidden px-4 py-10 sm:px-6 lg:px-8">

      <div class="sm:flex sm:items-center sm:justify-between ">
        <h2 class="font-header text-3xl text-gray-900">Popular rentals</h2>
        <a href="#" class="hidden text-sm font-semibold text-teal-700 hover:text-teal-600 sm:block">
          Browse all popular
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div v-if="products" class="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
        <NuxtLink v-for="product in products" :key="product.id" :to="'/products/' + product.handle" class="group text-sm">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
            <NuxtImg 
              v-if="product.images[0]" 
              :src="product.images[0].src" 
              :alt="'Featured image of our ' + product.title" 
              class="h-full w-full object-cover object-center"
              format="webp"
            />
          </div>
          <h3 class="mt-4 font-medium text-gray-900">{{ product.title }}</h3>
          <p class="italic text-gray-500">Available</p>
          <p class="mt-2 font-medium text-gray-900">${{ product.variants[0].price.amount }} / day</p>
        </NuxtLink>
      </div>

      <div class="mt-6 sm:hidden">
        <a href="#" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
          Browse all popular
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  products: Array,
})
</script>