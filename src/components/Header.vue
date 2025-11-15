<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const hasScrolled = ref(false);

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'w-full bg-green-templok fixed top-0 z-10 flex justify-between items-center px-16 py-3 transition-shadow duration-300',
      hasScrolled ? 'shadow-lg' : 'shadow-none',
    ]"
  >
    <a href="#home"
      ><img src="/src/assets/logo-templok.svg" alt="Logo" class="w-60 h-14" />
    </a>
    <div class="space-x-8 text-blue-templok text-2xl league-spartan-bold">
      <a href="#about" class="">ABOUT</a>
      <a href="#templok-zone">TEMPLOK ZONE</a>
      <a href="#the-developers">THE DEVELOPERS</a>
    </div>
  </nav>
</template>
