<template>
    <div 
        class="flex flex-row"
        :class="`${justifyContentClasses[justify]} ${alignContainerClasses[align]}`" 
    >
        <div>
            <BaseText v-bind="pretitle" class="text-primary-600 font-semibold mb-3" />
            <BaseHeading v-bind="title" />
            <BaseText v-bind="body" class="mt-4 text-gray-600"/>
            <BaseButtonGroup v-if="buttons.length" :buttons="buttons" class="mt-8"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    justify: {
        type: String,
        default: 'left' // Options: left, center
    },
    align: {
        type: String,
        default: 'center' // Options: top, center, bottom
    },
    pretitle: Object,
    title: Object,
    body: Object,
    buttons: Array,
})

const justifyContentClasses = {
  left: 'justify-start',
  center: 'justify-center text-center',
}

const alignContainerClasses = {
  top: 'lg:items-start',
  center: 'lg:items-center',
  bottom: 'lg:items-end',
}
</script>
