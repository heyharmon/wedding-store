<template>
  <BaseWrapper v-bind="wrapper">
    <!-- Content wrapper -->
    <div class="mx-auto max-w-7xl px-8">

      <!-- Container -->
      <div class="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl rounded-xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <!-- <BaseBackground v-bind="content.background"/> -->

        <!-- Container -->
        <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <!-- Content -->
          <BaseContent v-bind="content" />
        </div>
        <div v-if="content.image" class="relative mt-16 h-80 lg:mt-8">
          <BaseImage v-bind="content.image" class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"/>
        </div>
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