<template>
  <Block :padding-top="paddingTop" :padding-bottom="paddingBottom">
    <!-- Pretitle -->
    <div class="mb-8 flex justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding. 
          <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true" />
            Read more 
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      <!-- Title -->
      <h1 class="text-6xl font-bold tracking-tight text-gray-900 __sm:text-6xl">
        Data to enrich your online business
      </h1>

      <!-- Subtitle -->
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <!-- <p class="mt-4 text-xl text-white">
        The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.
      </p> -->

      <!-- Button group -->
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Get started
        </a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
          Learn more 
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </Block>
</template>

<script setup>
import Block from '@/components/blocks/Block.vue'

// const paddingVertical = ref('11')

const props = defineProps({
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
