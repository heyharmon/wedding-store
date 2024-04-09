<template>
  <BaseSection v-bind="section" class="overflow-hidden">
    <!-- Block wrapper -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Content -->
      <div class="mx-auto max-w-2xl text-center">
        <BaseContent v-bind="content" />
      </div>

      <div v-if="images" class="mt-16 flow-root sm:mt-24">
        <BaseImage v-bind="images[0]" class="mx-auto w-full rounded-md shadow-2xl"/>
      </div>
    </div>
  </BaseSection>
</template>

<script setup>
const props = defineProps({
  section: Object,
  content: Object,
  images: Array,
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