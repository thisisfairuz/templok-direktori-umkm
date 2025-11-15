<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const hasScrolled = ref(false);

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 0;
};

const smoothScrollTo = (event) => {
  const link = event.target.closest ? event.target.closest("a") : event.target;
  const href = link && link.getAttribute ? link.getAttribute("href") : null;
  if (href && href.startsWith("#")) {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
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
      'w-full bg-green-templok fixed top-0 z-50 flex justify-between items-center px-16 py-3 transition-shadow duration-300',
      hasScrolled ? 'shadow-lg' : 'shadow-none',
    ]"
  >
    <a href="#home" @click="smoothScrollTo"
      ><img src="/src/assets/logo-templok.svg" alt="Logo" class="w-60 h-14" />
    </a>
    <div class="space-x-8 text-blue-templok text-2xl league-spartan-bold">
      <a href="#about" @click="smoothScrollTo">ABOUT</a>
      <a href="#templok-zone" @click="smoothScrollTo">TEMPLOK ZONE</a>
      <a href="#the-developers" @click="smoothScrollTo">THE DEVELOPERS</a>
    </div>
  </nav>
</template>

<style scoped></style>
