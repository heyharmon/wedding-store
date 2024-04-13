<template>
  <BaseWrapper v-bind="wrapper">
    <!-- Wrapper -->
    <div class="mx-auto max-w-7xl px-8">

      <!-- Container -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

        <!-- Content -->
        <!-- <div class="lg:pr-8 lg:py-32"> -->
          <BaseContent v-bind="content" />
        <!-- </div> -->
        <BaseImage v-if="content.images" v-bind="content.images[0]" class="w-full max-w-none rounded-xl object-cover shadow-xl ring-1 ring-gray-400/10 lg:w-[57rem] sm:mx-auto lg:mx-0"/>
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
