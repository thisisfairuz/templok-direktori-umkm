<script setup>
import { computed } from "vue";
import { useUmkmData } from "../composable/UseUmkmData";

const { umkmData, categories } = useUmkmData();

const categoryStats = computed(() => {
  return categories.map((category) => ({
    name: category,
    count: umkmData.filter((umkm) => umkm.category === category).length,
  }));
});
</script>

<template>
  <div
    class="w-full flex px-4 lg:px-16 justify-between lg:gap-4 xl:gap-8 gap-2 overflow-x-auto"
  >
    <div
      v-for="category in categoryStats"
      :key="category.name"
      class="bg-green-templok text-center justify-center flex flex-col border lg:border-2 items-center border-blue-templok rounded-xl py-4 lg:py-8 xl:px-0 px-2 lg:w-72 xl:w-80"
    >
      <p class="league-spartan-bold text-sm lg:text-3xl">{{ category.name }}</p>
      <p class="lg:text-8xl text-3xl league-spartan-bold text-blue-templok">
        {{ category.count }}
      </p>
      <p class="league-spartan-medium text-xs lg:text-2xl">
        UMKM<br />TERDAFTAR
      </p>
    </div>
  </div>
</template>
