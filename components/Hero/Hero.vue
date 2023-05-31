<template>
  <BaseSection :data-theme="theme" v-bind="padding">
    <!-- Bg image -->
    <BaseBackground v-bind="background"/>

    <div class="relative flex flex-col mx-auto max-w-3xl items-center px-6 text-center">
      <!-- Pretitle -->
      <BaseText v-if="pretitle" v-bind="pretitle" class="text-primary-600 font-semibold pb-3" />

      <!-- Title -->
      <BaseHeading v-bind="title"/>

      <!-- Subtitle -->
      <BaseText v-if="subtitle" v-bind="subtitle" class="mt-6 leading-9 text-gray-600"/>

      <!-- Buttons -->
      <BaseButtonGroup class="mt-10">
        <BaseButton v-for="button in buttons" v-bind="button"/>
      </BaseButtonGroup>
    </div>
  </BaseSection>
</template>

<script setup>
const props = defineProps({
  pretitle: Object,
  title: Object,
  subtitle: Object,
  buttons: Array,
  background: Object,
  theme: String,
  overlay: Boolean,
  padding: Object,
  // title: {
  //   type: String,
  //   default: 'The title'
  // },
  // subtitle: {
  //   type: String,
  //   default: 'The subtitle'
  // },
  // background: {
  //   type: Object,
  //   default: () => ({
  //     image: {},
  //     overlay: {}
  //   })
  // },
  // theme: String,
  // overlay: Boolean,
  // padding: Object,
})
</script>
