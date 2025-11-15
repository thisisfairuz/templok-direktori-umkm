<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const hasScrolled = ref(false);
const mobileOpen = ref(false);

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

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value;
};
</script>

<template>
  <nav
    :class="[
      'w-full bg-green-templok fixed top-0 z-50 flex items-center justify-between px-2 sm:px-8 lg:px-16 py-2 sm:py-3 transition-shadow duration-300',
      hasScrolled ? 'shadow-lg' : 'shadow-none',
    ]"
  >
    <a href="#home" @click="smoothScrollTo" class="flex items-center shrink-0"
      ><img
        src="/src/assets/logo-templok.svg"
        alt="Logo"
        class="h-5 w-auto sm:h-8"
      />
    </a>

    <!-- Desktop Links -->
    <div
      class="hidden md:flex space-x-6 lg:space-x-10 text-blue-templok text-base sm:text-xl lg:text-2xl league-spartan-bold"
    >
      <a
        href="#about"
        @click="smoothScrollTo"
        class="relative inline-block px-1 transition-colors duration-200 hover:text-blue-templok/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-templok rounded-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-blue-templok after:transition-transform after:duration-300 hover:after:scale-x-100"
        >ABOUT</a
      >
      <a
        href="#templok-zone"
        @click="smoothScrollTo"
        class="relative inline-block px-1 transition-colors duration-200 hover:text-blue-templok/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-templok rounded-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-blue-templok after:transition-transform after:duration-300 hover:after:scale-x-100"
        >TEMPLOK ZONE</a
      >
      <a
        href="#the-developers"
        @click="smoothScrollTo"
        class="relative inline-block px-1 transition-colors duration-200 hover:text-blue-templok/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-templok rounded-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-blue-templok after:transition-transform after:duration-300 hover:after:scale-x-100"
        >THE DEVELOPERS</a
      >
    </div>

    <!-- Mobile Hamburger -->
    <button
      @click="toggleMobile"
      class="md:hidden text-blue-templok focus:outline-none focus:ring-2 focus:ring-blue-templok rounded p-2"
      aria-label="Toggle navigation menu"
      :aria-expanded="mobileOpen.toString()"
    >
      <svg
        v-if="!mobileOpen"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-7 h-7"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-7 h-7"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Mobile Menu Panel -->
    <transition name="fade">
      <div
        v-if="mobileOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-green-templok border-t border-blue-templok shadow-lg flex flex-col px-4 py-4 space-y-3 text-blue-templok league-spartan-bold text-lg"
      >
        <a
          href="#about"
          @click="
            smoothScrollTo;
            toggleMobile();
          "
          class="py-1"
          >ABOUT</a
        >
        <a
          href="#templok-zone"
          @click="
            smoothScrollTo;
            toggleMobile();
          "
          class="py-1"
          >TEMPLOK ZONE</a
        >
        <a
          href="#the-developers"
          @click="
            smoothScrollTo;
            toggleMobile();
          "
          class="py-1"
          >THE DEVELOPERS</a
        >
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
