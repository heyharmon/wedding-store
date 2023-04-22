<template>
  <section :data-theme="theme" class="relative bg-white">
    <!-- Bg image -->
    <Background v-bind="background"/>

    <div :class="[PaddingTop[padding.top], PaddingBottom[padding.bottom]]" class="relative flex flex-col mx-auto max-w-3xl items-center px-6 text-center">
      <!-- Pretitle -->
      <div class="mb-8 flex justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding. 
          <a href="#" class="font-semibold text-primary-600"><span class="absolute inset-0" aria-hidden="true" />
            Read more 
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      <!-- Title -->
      <h1 class="text-5xl font-bold tracking-tight text-gray-900">
        Data to enrich your online business
      </h1>

      <!-- Subtitle -->
      <p class="mt-6 text-xl leading-9 text-gray-600">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat fcommodo. Elit sunt amet fugiat.
      </p>

      <!-- Button group -->
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <Button to="/homepage" rel="next" label="Homepage" icon="heroicons:cloud-arrow-up"/>

        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
          Learn more 
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PaddingTop, PaddingBottom } from '@/dictionaries/Padding.js'

const props = defineProps({
  theme: String,
  overlay: Boolean,
  image: Object,
  background: Object,
  padding: {
    top: String,
    bottom: String,
  },
})
</script>
