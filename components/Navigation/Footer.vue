<template>
  <footer class="bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-10">
        <div class="space-y-8 pr-4">
          <Logo class="h-6 w-auto"/>
          <p class="text-xl font-header text-gray-600">Serving Northern Utah with beautifully crafted wedding rentals.</p>
          <!-- <div class="flex space-x-6">
            <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div> -->
        </div>
        <div class="mt-16 xl:col-span-2 xl:mt-0">
          <div class="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Destinations</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.destinations" :key="item.name">
                  <NuxtLink 
                    :key="item.id" 
                    :to="`/destinations/${item.slug}`" 
                    :aria-current="item.slug === route.params.category ? 'page' : undefined"
                    class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Rentals</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.rentals" :key="item.name">
                  <NuxtLink 
                    :key="item.id" 
                    :to="`/categories/${item.slug}`" 
                    :aria-current="item.slug === route.params.category ? 'page' : undefined"
                    class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mt-10 sm:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-gray-900">About</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.about" :key="item.name">
                  <NuxtLink 
                    :key="item.id" 
                    :to="`/${item.slug}`" 
                    :aria-current="item.slug === route.name ? 'page' : undefined"
                    class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-900/10 pt-8 sm:mt-16 lg:mt-20">
        <p class="text-xs leading-5 text-gray-500">
          &copy; 2024 Rent Crafted. 
          All rights reserved. 
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Logo from '@/components/Navigation/Logo.vue'

const route = useRoute()

const navigation = {
  about: [
    { name: 'About Us', slug: 'about' },
    { name: 'Contact Us', slug: 'about/contact-us' },
    { name: 'How It Works', slug: 'about/how-it-works' },
  ],
  destinations: [
    { name: 'Salt Lake City', slug: 'salt-lake-city'},
    { name: 'Bountiful', slug: 'bountiful'},
    { name: 'Provo', slug: 'provo'},
    { name: 'Sandy', slug: 'sandy'},
    { name: 'Ogden', slug: 'ogden'},
    { name: 'Orem', slug: 'orem' },
    { name: 'Lehi', slug: 'lehi'},
  ],
  rentals: [
    { name: 'Arch Rentals', slug: 'arches' },
    { name: 'Backdrop Rentals', slug: 'backdrops' },
    { name: 'Decor Rentals', slug: 'decor' },
    { name: 'Game Rentals', slug: 'games' },
    { name: 'Signage Rentals', slug: 'signage' },
    // { name: 'Chair Rentals', slug: 'chairs' },
    // { name: 'Table Rentals', slug: 'tables' },
  ],
}

// const cities = [
//   'Salt Lake City',
//   'Provo',
//   'Orem',
//   'Sandy',
//   'Ogden',
//   'South Jordan',
//   'Lehi',
//   'Murray',
//   'Draper',
//   'Bountiful',
//   'Riverton',
//   'Roy'
// ]
</script>
