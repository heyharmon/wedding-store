<template>
    <div>
        <Navbar/>
        <slot/>
        <Footer/>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navigation/Navbar.vue'
import Footer from '@/components/Navigation/Footer.vue'
</script>