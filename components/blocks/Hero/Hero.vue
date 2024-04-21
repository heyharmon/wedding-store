<template>
  <BaseWrapper v-bind="wrapper">
    <!-- Wrapper -->
    <div class="mx-auto max-w-7xl px-8">

      <!-- Content container TODO: this should handle the content alignment horizontal and vertical -->
      <!-- <div class="max-w-2xl"> -->
        <!-- Content -->
        <BaseContent v-bind="content" />
      <!-- </div> -->

      <div v-if="content.image" class="mt-16 flow-root sm:mt-24">
        <BaseImage v-bind="content.image" class="mx-auto w-full rounded-md shadow-2xl"/>
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