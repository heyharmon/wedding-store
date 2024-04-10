<template>
  <BaseWrapper v-bind="wrapper" class="overflow-hidden">
    <!-- Wrapper -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Container -->
      <div class="mx-auto max-w-2xl text-center">
        <BaseContent v-bind="content" />
      </div>

      <div v-if="content.images" class="mt-16 flow-root sm:mt-24">
        <BaseImage v-bind="content.images[0]" class="mx-auto w-full rounded-md shadow-2xl"/>
      </div>
    </div>
  </BaseWrapper>
</template>

<script setup>
const props = defineProps({
  wrapper: Object,
  content: Object,
  // content: {
  //   type: Object,
  //   default: () => ({
  //     pretitle: Object, 
  //     title: Object,
  //     body: Object,
  //     buttons: Array,
  //     image: Object,
  //   }),
  // },
})
</script>