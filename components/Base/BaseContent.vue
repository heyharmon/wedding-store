<template>
    <div>
        <BaseText v-bind="pretitle" class="text-primary-600 font-semibold mb-3" />
        <BaseHeading v-bind="title" class="mb-6"/>
        <BaseText v-bind="body" class="leading-9 text-gray-600"/>
        <BaseButtonGroup v-bind="buttons" class="mt-10"/>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    pretitle: Object,
    title: Object,
    body: Object,
    buttons: Array,
    images: Array,
})
</script>
