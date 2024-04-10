<template>
  <BaseWrapper v-bind="wrapper" class="overflow-hidden">
    <!-- Wrapper -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Container -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

        <!-- Content -->
        <div class="lg:pr-8 lg:py-32">
          <div class="lg:max-w-lg">
            <BaseText v-bind="content.pretitle" class="text-primary-600 font-semibold mb-4" />
            <BaseHeading v-bind="content.title" class="mb-6"/>
            <BaseText v-bind="content.body" class="leading-9 text-gray-600 mb-10"/>
            <BaseButtonGroup v-bind="content.buttons"/>
          </div>
        </div>
        <BaseImage v-if="content.images" v-bind="content.images[0]" class="w-[48rem] sm:w-[57rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"/>

      </div>
    </div>
  </BaseWrapper>
</template>

<script setup>
const props = defineProps({
  wrapper: Object,
  content: Object,
})
</script>
