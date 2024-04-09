<template>
    <BaseSection v-bind="section" class="overflow-hidden">
      <!-- Block wrapper -->
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
  
        <!-- Content -->
        <div class="mx-auto max-w-2xl lg:mx-0">
          <BaseText v-bind="content.pretitle" class="text-primary-600 font-semibold mb-4" />
          <BaseHeading v-bind="content.title" class="mb-6"/>
          <BaseText v-bind="content.body" class="leading-9 text-gray-600 mb-10"/>
          <BaseButtonGroup>
            <BaseButton v-for="button in content.buttons" v-bind="button"/>
          </BaseButtonGroup>
        </div>
        
        <!-- Cards -->
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article v-for="card in cards" class="flex flex-col items-start justify-between">
                <div class="relative w-full">
                    <BaseImage v-bind="card.content.image" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
                    <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div class="max-w-xl pt-10">
                    <div class="flex items-center gap-x-4 text-xs">
                        <BaseText v-bind="card.content.pretitle" class="text-gray-500" size="sm"/>
                    </div>
                    <div class="relative">
                        <BaseHeading v-bind="card.content.title" class="mt-3"/>
                        <BaseText v-bind="card.content.body" class="mt-5 line-clamp-3 text-gray-600" />
                    </div>
                </div>
            </article>
        </div>
  
      </div>
    </BaseSection>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    section: Object,
    content: Object,
    cards: Array,
  })
  </script>
  