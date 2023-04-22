<template>
  <section class="relative bg-white" :data-theme="theme">
    <!-- <Background src="/images/blurry-gradient-haikei.svg"/> -->

    <div 
      :class="[PaddingTop[paddingTop], PaddingBottom[paddingBottom]]"  
      class="relative flex flex-col mx-auto max-w-3xl items-center px-6 text-center"
    >
      <slot/>
    </div>
  </section>
</template>

<script setup>
//   import { computed } from 'vue'
import { PaddingTop, PaddingBottom } from '@/dictionaries/Padding.js'

const props = defineProps({
  theme: {
    type: String
  },
  paddingTop: {
    type: String,
    default: 'lg',
    // validator: (value) => {
    //   return Object.keys(PaddingTop).includes(value)
    // }
  },
  paddingBottom: {
    type: String,
    default: 'lg',
    // validator: (value) => {
    //   return Object.keys(PaddingBottom).includes(value)
    // }
  },
})

// const PaddingTop = {
//     'sm': 'pt-10',
//     'md': 'pt-20',
//     'base': 'pt-32',
//     'lg': 'pt-36',
// }

// const PaddingBottom = {
//     'sm': 'pb-10',
//     'md': 'pb-20',
//     'base': 'pb-32',
//     'lg': 'pb-36',
// }

// const paddingTop = computed(() => {
//   return PaddingTop[props.padding_top]
// })

// const paddingBottom = computed(() => {
//   return PaddingBottom[props.padding_bottom]
// })

// const classBinds = computed(() => {
//   let classSet = ''

//   classSet = appendToSet('pt-' + props.paddingTop, classSet)
//   classSet = appendToSet('pb-' + props.paddingbottom, classSet)
  
//   return classSet
// })

// const classBinds = computed(() => {
//   let classSet = ''

//   classSet = appendToSet('pt-' + props.paddingTop, classSet)
//   classSet = appendToSet('pb-' + props.paddingbottom, classSet)
  
//   return classSet
// })

// const appendToSet = (str, set) => {
//   if (set.trim().length) {
//     set += ` ${str}`;
//   } else {
//     set = `${str}`;
//   }
//   return set;
// };

// const classNames = computed(() => {
//   return [
//     'pt-' + props.paddingTop,
//     'pb-' + props.paddingBottom
//   ]
// })
</script>
  