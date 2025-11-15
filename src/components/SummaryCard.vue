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
  <div class="w-full flex px-16 justify-between gap-4 overflow-x-auto">
    <div
      v-for="category in categoryStats"
      :key="category.name"
      class="bg-green-templok text-center justify-center flex flex-col border-2 items-center border-blue-templok rounded-xl py-8 w-80"
    >
      <p class="league-spartan-bold text-3xl">{{ category.name }}</p>
      <p class="text-8xl league-spartan-bold text-blue-templok">
        {{ category.count }}
      </p>
      <p class="league-spartan-medium text-2xl">UMKM<br />TERDAFTAR</p>
    </div>
  </div>
</template>
