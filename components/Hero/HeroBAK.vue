<template>
  <BaseSection :data-theme="theme" v-bind="padding">
    <BaseBackground v-bind="background"/>

    <div class="relative flex flex-col mx-auto max-w-3xl items-center px-6 text-center">
      <BaseText v-if="pretitle" v-bind="pretitle" class="text-primary-600 font-semibold pb-3" />
      <BaseHeading v-bind="title"/>
      <BaseText v-if="subtitle" v-bind="subtitle" class="mt-6 leading-9 text-gray-600"/>
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
  image: Object,
  background: Object,
  padding: Object,
  theme: String,
})
</script>
