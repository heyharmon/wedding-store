<template>
  <BlockWrapper :theme="theme" :padding-top="paddingTop" :padding-bottom="paddingBottom">
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
      <Button label="Hello World" icon="heroicons:cloud-arrow-up"/>

      <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
        Learn more 
        <span aria-hidden="true">→</span>
      </a>
    </div>
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
