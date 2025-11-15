<script setup>
import Developers from "./components/Developers.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import UMKMZone from "./components/UMKMZone.vue";
</script>

<template>
  <div class="absolute inset-0 h-full w-full grid-templok">
    <Header />
    <Hero />
    <About />
    <UMKMZone />
    <Developers />
    <Footer />
  </div>
</template>
