<script setup lang="ts">
import { ref } from "vue";
import Badge from "./Badge.vue";
import Pagination from "./Pagination.vue";
import { useUmkmData } from "../composable/UseUmkmData";

// Import data UMKM yang sudah di-transform
const { umkmData, categories } = useUmkmData();

// Search & Filter state
const searchQuery = ref("");
const selectedCategory = ref<string | null>(null);

// Toggle category
const toggleCategory = (category: string) => {
  if (selectedCategory.value === category) {
    selectedCategory.value = null;
  } else {
    selectedCategory.value = category;
  }
};

// Handle card click
const handleCardClick = (id: number) => {
  console.log("UMKM Card clicked, ID:", id);
  // TODO: Navigate to detail page
  // router.push(`/umkm/${id}`)
};
</script>

<template>
  <section
    class="w-full min-h-screen flex flex-col justify-start items-center bg-blue-templok pt-44"
  >
    <!-- Marque -->
    <div class="w-full relative py-8 mb-24">
      <!-- Marquee 1 -->
      <div
        class="w-full overflow-hidden bg-green-templok py-4 absolute top-0 left-0"
        style="transform: rotate(-3deg); transform-origin: center"
      >
        <div class="marquee-container">
          <div class="marquee-content">
            <img
              v-for="i in 30"
              :key="i"
              src="/src/assets/templok-marque.svg"
              alt="Logo"
              class="h-4 w-auto mx-1"
            />
          </div>
        </div>
      </div>

      <!-- Marquee 2 -->
      <div
        class="w-full overflow-hidden bg-green-templok py-4 absolute top-0 left-0"
        style="transform: rotate(3deg); transform-origin: center"
      >
        <div class="marquee-container">
          <div class="marquee-content-reverse">
            <img
              v-for="i in 30"
              :key="i"
              src="/src/assets/templok-marque.svg"
              alt="Logo"
              class="h-4 w-auto mx-1"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Title -->
    <div
      id="templok-zone"
      class="league-spartan-black font-black mb-3 justify-center items-center flex flex-col"
    >
      <p class="text-green-templok text-center text-6xl xl:text-9xl">
        TEMPLOK ZONE
      </p>
    </div>

    <!-- Search bar -->
    <div class="flex items-center relative">
      <input
        v-model="searchQuery"
        type="search"
        placeholder="Cari UMKM..."
        class="lg:w-3xl rounded-full py-2 pl-4 pr-12 text-[20px] text-blue-templok font-montserrat font-reguler leading-none bg-white focus:ring-2 focus:ring-green-templok focus:outline-none"
      />
      <svg
        class="absolute right-4 w-6 h-6 text-blue-templok pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>

    <!-- Category -->
    <div class="mt-4 flex gap-2 items-center mb-12 flex-wrap justify-center">
      <Badge
        v-for="category in categories"
        :key="category"
        :text="category"
        :class="{ 'ring-2 ring-green-templok': selectedCategory === category }"
        class="cursor-pointer transition-all hover:scale-105"
        @click="toggleCategory(category)"
      />
    </div>

    <!-- Pagination Component with real data -->
    <Pagination
      :all-umkm="umkmData"
      :search-query="searchQuery"
      :selected-category="selectedCategory"
      @card-click="handleCardClick"
    />
  </section>
</template>

<style scoped>
.marquee-container {
  display: flex;
  width: 100%;
}

.marquee-content {
  display: flex;
  animation: marquee-left 30s linear infinite;
  white-space: nowrap;
}

.marquee-content-reverse {
  display: flex;
  animation: marquee-right 30s linear infinite;
  white-space: nowrap;
}

@keyframes marquee-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes marquee-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
*/
