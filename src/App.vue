<script setup>
import Developers from "./components/Developers.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import SummaryCard from "./components/SummaryCard.vue";
import UMKMZone from "./components/UMKMZone.vue";
</script>

<template>
  <div class="absolute inset-0 h-full w-full grid-templok">
    <Header />
    <Hero />
    <div class="relative">
      <About />
      <!-- SummaryCard floating di antara About dan UMKMZone -->
      <div class="absolute left-0 right-0 -bottom-32 flex justify-center">
        <SummaryCard />
      </div>
    </div>
    <UMKMZone />
    <Developers />
    <Footer />
  </div>
</template>
