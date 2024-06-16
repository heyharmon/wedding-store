<template>
    <TransitionRoot as="template" :show="uiStore.isCartModalOpen">
        <Dialog class="relative z-10" @close="uiStore.isCartModalOpen = false">
        <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-hidden">
            <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
                <DialogPanel class="pointer-events-auto w-screen max-w-md">
                    <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div class="flex items-start justify-between">
                        <DialogTitle class="text-lg font-medium text-gray-900">Wishlist</DialogTitle>
                        <div class="ml-3 flex h-7 items-center">
                            <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500" @click="uiStore.isCartModalOpen = false">
                            <span class="absolute -inset-0.5" />
                            <span class="sr-only">Close panel</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        </div>

                        <div class="mt-8">
                        <div class="flow-root">
                            <ul role="list" class="-my-6 divide-y divide-gray-200">
                            <li v-for="item in customerStore.cart.items" :key="item.id" class="flex py-6">
                                <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <NuxtImg 
                                    :src="item.variant.image.src" 
                                    :alt="item.variant.image.altText" 
                                    class="h-full w-full object-cover object-center"
                                    format="webp"
                                    width="100"
                                    height="100"
                                />
                                </div>

                                <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div class="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                        <NuxtLink :to="'/products/' + item.variant.product.handle" target="_blank">{{ item.title }}</NuxtLink>
                                    </h3>
                                    <p class="ml-4">${{ item.variant.price }}</p>
                                    </div>
                                    <!-- <p class="mt-1 text-sm text-gray-500">{{ item.color }}</p> -->
                                </div>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                    <p class="text-gray-500">Qty {{ item.quantity }}</p>

                                    <div class="flex">
                                    <button @click="customerStore.removeFromCart(item.checkoutLineItemId)" type="button" class="font-medium text-teal-600 hover:text-teal-500">Remove</button>
                                    </div>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>

                    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div class="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${{ customerStore.cart.total }}</p>
                        </div>
                        <p class="mt-0.5 text-sm text-gray-500">Delivery fees and taxes calculated at checkout.</p>
                        <div class="mt-6">
                        <a :href="customerStore.cart.webUrl" target="_blank" class="flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-700">
                            Checkout
                        </a>
                        </div>
                        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                            or{{ ' ' }}
                            <button @click="uiStore.isCartModalOpen = false" type="button" class="font-medium text-teal-600 hover:text-teal-500">
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                            </button>
                        </p>
                        </div>
                    </div>
                    </div>
                </DialogPanel>
                </TransitionChild>
            </div>
            </div>
        </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { useUiStore } from '@/stores/useUiStore'
import { useCustomerStore } from '@/stores/useCustomerStore'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const uiStore = useUiStore()
const customerStore = useCustomerStore()

const products = [
{
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
},
{
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
    'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
},
]
</script>