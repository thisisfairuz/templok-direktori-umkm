<script setup>
import { umkmList } from "./data/umkm.js"
</script>


<template>
  <div class="min-h-screen p-8 bg-gray-100">
    <h1 class="text-3xl font-bold mb-6 text-center">Daftar UMKM</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in umkmList"
        :key="item.id"
        class="rounded-2xl shadow-md overflow-hidden bg-white"
      >
        <img
          :src="item.foto"
          :alt="item.nama_umkm"
          class="w-full h-40 object-cover"
        />

        <div class="p-4 space-y-2">
          <h2 class="text-xl font-semibold">{{ item.nama_umkm }}</h2>

          <p class="text-sm text-gray-600">
            Kategori: {{ item.kategori }}
          </p>

          <p class="text-gray-700 text-sm min-h-[60px]">
            {{ item.deskripsi }}
          </p>

          <details class="mt-3 bg-gray-50 p-3 rounded-lg">
            <summary class="cursor-pointer font-semibold text-sm">
              Lihat Produk
            </summary>

            <ul class="mt-2 space-y-1 text-sm">
              <li
                v-for="(produk, index) in item.produk"
                :key="index"
                class="flex justify-between border-b py-1"
              >
                <span>{{ produk.nama_produk }}</span>
                <span class="font-medium">
                  Rp{{ produk.harga_produk.toLocaleString() }}
                </span>
              </li>
            </ul>
          </details>

          <p
            v-if="item.alamat_umkm"
            class="text-xs text-gray-500 mt-3"
          >
            {{ item.alamat_umkm }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
