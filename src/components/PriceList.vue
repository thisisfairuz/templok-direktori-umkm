<template>
  <div class="bg-blue-templok rounded-t-3xl rounded-b-full p-8 md:p-12 md:pb-48 max-w-md mx-auto shadow-xl ">
    <h2 class="font-montserrat font-bold text-3xl md:text-4xl text-green-templok text-center mb-6">
      Daftar Harga
    </h2>
    <div class="space-y-3 overflow-y-auto h-full pr-2">   
      <div class="grid grid-cols-2 font-montserrat text-white font-semibold"v-for="(item, index) in products" :key="index">
        <p>{{ item.name }}</p>
        <p class="text-right">{{ formatPrice(item.price) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useUmkmData } from '../composable/UseUmkmData'

const route = useRoute()
const id = Number(route.params.id)

const { umkmData } = useUmkmData()

// Ambil UMKM berdasarkan ID
const umkm = computed(() => umkmData.find(item => item.id === id))

// Ambil produk (tidak error meski umkm masih undefined)
const products = computed(() => umkm.value?.product || [])

const formatPrice = (price) => {
  return price.toLocaleString('id-ID')
}
</script>
