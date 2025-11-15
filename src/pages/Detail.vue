<template>
  <div class="bg-blue-templok min-h-screen text-white">
    <div v-if="umkm" class="container mx-auto px-4 py-8 max-w-8xl">
      <h1 class="text-4xl md:text-5xl font-bold font-montserrat mb-6">{{ umkm.title }}</h1>
      <div class="mb-8">
        <img :src="umkm.image" :alt="umkm.title" class="w-full rounded-lg shadow-lg object-cover max-h-[700px]" />
      </div>  
    </div>
  </div>
  <Summary />
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import Summary from '../components/Summary.vue'
import { useUmkmData } from '../composable/UseUmkmData'

const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)

// Ambil data dari composable
const { umkmData } = useUmkmData()

// Cari data sesuai ID
const umkm = computed(() => umkmData.find(item => item.id === id))

// Function untuk kembali
const goBack = () => {
  router.push('/templok-zone')
}
</script>

<style scoped>
.bg-blue-templok {
  background-color: #0047BB;
}

.text-yellow-templok {
  color: #B3FF00;
}

.bg-yellow-templok {
  background-color: #B3FF00;
}
</style>