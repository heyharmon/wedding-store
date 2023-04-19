<template>
  <BlockWrapper :theme="theme" :padding-top="paddingTop" :padding-bottom="paddingBottom">
    <div class="mx-auto max-w-2xl text-center">
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
        <Button label="Hello World" icon="heroicons:cloud-arrow-up"/>

        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
          Learn more 
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
    
    <!-- Image -->
    <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" width="2432" height="1442" class="mt-16 rounded-tl-md rounded-tr-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24" />
  </BlockWrapper>
</template>

<script setup>
const props = defineProps({
  theme: {
    type: String,
  },
  paddingTop: {
    type: String,
    default: 'lg',
  },
  paddingBottom: {
    type: String,
    default: 'lg',
  },
})
</script>
