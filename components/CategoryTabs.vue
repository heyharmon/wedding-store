<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <NuxtLink v-for="category in categories" :key="category" to="/" as="div" class="bg-gray-400/5 p-8 sm:p-10">
            <p>{{ category }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // const categories = ['Seating', 'Tables', 'Decor', 'Backdrops', 'Bars', 'Games', 'Rugs']
  const categories = ['Seating', 'Tables', 'Decor', 'Backdrops', 'Bars', 'Games']
  // const categories = [
  //   {
  //     name: 'Seating',
  //     href: '#',
  //   },
  //   {
  //     name: 'Tables',
  //     href: '#',
  //   },
  //   {
  //     name: 'Decor',
  //     href: '#',
  //   },
  //   {
  //     name: 'Backdrops',
  //     href: '#',
  //   },
  //   { name: 'Bars', 
  //     href: '#', 
  //   },
  //   { name: 'Games', 
  //     href: '#', 
  //   },
  //   { name: 'Rugs', 
  //     href: '#', 
  //   },
  // ]
</script>