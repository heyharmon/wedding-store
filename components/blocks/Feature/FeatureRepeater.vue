<template>
  <BaseWrapper v-bind="wrapper">
    <!-- Wrapper -->
    <div class="mx-auto max-w-7xl px-8">

      <!-- Container -->
      <div class="max-w-2xl">
        <!-- Content -->
        <BaseContent v-bind="content"/>
      </div>
      
      <!-- Features -->
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in collection" class="flex flex-col">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <BaseImage v-bind="feature.image" class="h-6 w-6 fill-white"/>
              </div>
              <BaseHeading v-bind="feature.title"/>
            </dt>
            <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <BaseText v-bind="feature.body" class="flex-auto mb-6"/>
              <BaseButtonGroup>
                <BaseButton v-for="button in feature.buttons" v-bind="button" variant="text"/>
              </BaseButtonGroup>
            </dd>
          </div>
        </dl>
      </div>

    </div>
  </BaseWrapper>
</template>

<script setup lang="ts">
const props = defineProps({
  wrapper: Object,
  content: Object,
  collection: Array,
})
</script>
