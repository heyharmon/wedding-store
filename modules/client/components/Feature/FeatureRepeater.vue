<template>
  <BaseSection v-bind="section" class="overflow-hidden">
    <!-- Block wrapper -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Content -->
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Stay on top of customer support</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="content in repeaterContent" class="flex flex-col">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <!-- <component :is="content.icon" class="h-6 w-6 text-white" aria-hidden="true" /> -->
                <BaseImage v-bind="content.image.file" class="h-6 w-6 fill-white"/>
              </div>
              <BaseHeading v-bind="content.title"/>
            </dt>
            <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <BaseText v-bind="content.body" class="flex-auto mb-6"/>
              <!-- <p class="flex-auto">{{ content.body.content }}</p> -->
              <BaseButtonGroup>
                <BaseButton v-for="button in content.buttons" v-bind="button" variant="text"/>
              </BaseButtonGroup>
              <!-- <a :href="content.href" class="text-sm font-semibold leading-6 text-indigo-600">Learn more <span aria-hidden="true">→</span></a> -->
            </dd>
          </div>
        </dl>
      </div>

      <!-- <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:py-32">
          <div class="lg:max-w-lg">
            <BaseText v-bind="pretitle" class="text-primary-600 font-semibold mb-4" />
            <BaseHeading v-bind="title" class="mb-6"/>
            <BaseText v-bind="body" class="leading-9 text-gray-600 mb-10"/>
            <BaseButtonGroup>
              <BaseButton v-for="button in buttons" v-bind="button"/>
            </BaseButtonGroup>
          </div>
        </div>
        <BaseImage v-bind="image.file" class="w-[48rem] sm:w-[57rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"/>
      </div>  -->

    </div>
  </BaseSection>
</template>

<script setup>
const props = defineProps({
  section: Object,
  repeaterContent: Array,
})
</script>
