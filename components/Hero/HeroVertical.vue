<template>
  <BlockWrapper :data-theme="theme" v-bind="padding" class="isolate">
    <!-- Bg image -->
    <Background v-bind="background"/>
    
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
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

        <div class="mt-16 flow-root sm:mt-24">
          <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <Image v-bind="image" width="2432" height="1442" class="rounded-md shadow-2xl ring-1 ring-gray-900/10"/>
          </div>
        </div>
      </div>
  </BlockWrapper>
</template>

<script setup>
const props = defineProps({
  theme: String,
  overlay: Boolean,
  image: Object,
  background: Object,
  padding: Object,
})
</script>
