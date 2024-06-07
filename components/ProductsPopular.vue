<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
        <div>
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">Popular rentals</h2>
          <p class="mt-4 text-base text-gray-500">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>
        </div>

        <a href="#" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
          Browse all popular
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div v-if="products" class="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
        <NuxtLink v-for="product in products" :key="product.id" :to="'/products/' + product.handle" class="group text-sm">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
            <NuxtImg 
              v-if="product.images[0]" 
              :src="product.images[0].src" 
              :alt="product.title + ' featured image'" 
              class="h-full w-full object-cover object-center"
              format="webp"
            />
          </div>
          <h3 class="mt-4 font-medium text-gray-900">{{ product.title }}</h3>
          <p class="italic text-gray-500">Available</p>
          <p class="mt-2 font-medium text-gray-900">${{ product.variants[0].price.amount }} / day</p>
        </NuxtLink>
      </div>
    </div>
    
    <pre>{{ products }}</pre>
  </div>
</template>

<script setup>
const props = defineProps({
  products: Array,
})
</script>