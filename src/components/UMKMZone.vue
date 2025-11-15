<script setup lang="ts">
import { ref } from 'vue'
import Badge from './Badge.vue'
import Pagination from './Pagination.vue'

// Data UMKM
const allUMKM = ref([
  { id: 1, image: '/src/assets/vue.svg', title: 'YAMIE GONEL', description: 'Yamie Gonel menghadirkan cita rasa mie klasik dengan sentuhan modern. Setiap mangkuk dibuat dengan bumbu segar dan bumbu khas yang bikin rasanya beda banget.', category: 'MAKANAN' },
  { id: 2, image: '/images/toko-kue.jpg', title: 'TOKO KUE MANIS', description: 'Menyediakan berbagai macam kue tradisional dan modern dengan bahan berkualitas tinggi.', category: 'KUE' },
  { id: 3, image: '/images/warung-kopi.jpg', title: 'WARUNG KOPI NUSANTARA', description: 'Kopi pilihan dari berbagai daerah di Indonesia. Disajikan dengan teknik brewing modern.', category: 'MINUMAN' },
  { id: 4, image: '/images/bakso.jpg', title: 'BAKSO BERANAK', description: 'Bakso kenyal dengan kuah yang gurih, dilengkapi dengan bakso beranak yang unik.', category: 'MAKANAN' },
  { id: 5, image: '/images/laundry.jpg', title: 'LAUNDRY EXPRESS', description: 'Layanan laundry cepat dan bersih dengan harga terjangkau untuk semua kalangan.', category: 'JASA' },
  { id: 6, image: '/images/salon.jpg', title: 'SALON CANTIK', description: 'Salon kecantikan dengan pelayanan ramah dan hasil memuaskan.', category: 'JASA' },
  { id: 7, image: '/images/toko-baju.jpg', title: 'FASHION STORE', description: 'Menjual berbagai pakaian trendy dengan harga terjangkau untuk semua usia.', category: 'FASHION' },
  { id: 8, image: '/images/sayur.jpg', title: 'TOKO SAYUR SEGAR', description: 'Sayuran segar langsung dari petani lokal setiap hari.', category: 'SAYURAN' },
  { id: 9, image: '/images/elektronik.jpg', title: 'SERVICE ELEKTRONIK', description: 'Jasa perbaikan berbagai peralatan elektronik rumah tangga dengan garansi.', category: 'JASA' },
  { id: 10, image: '/images/ayam.jpg', title: 'AYAM GEPREK MANTUL', description: 'Ayam geprek dengan sambal level yang bisa disesuaikan dengan selera.', category: 'MAKANAN' },
  { id: 11, image: '/images/bunga.jpg', title: 'TOKO BUNGA INDAH', description: 'Menyediakan berbagai rangkaian bunga untuk berbagai acara spesial.', category: 'BUNGA' },
  { id: 12, image: '/images/roti.jpg', title: 'ROTI BAKAR ENAK', description: 'Roti bakar dengan berbagai topping pilihan yang lezat dan menggugah selera.', category: 'MAKANAN' },
  { id: 13, image: '/images/foto.jpg', title: 'STUDIO FOTO', description: 'Jasa fotografi profesional untuk berbagai kebutuhan acara.', category: 'JASA' },
  { id: 14, image: '/images/bengkel.jpg', title: 'BENGKEL MOTOR', description: 'Service motor dengan mekanik berpengalaman dan harga terjangkau.', category: 'JASA' },
  { id: 15, image: '/images/tas.jpg', title: 'TAS HANDMADE', description: 'Tas handmade berkualitas dengan desain unik dan menarik.', category: 'FASHION' },
])

// Search & Filter state
const searchQuery = ref('')
const selectedCategory = ref<string | null>(null)

// Categories
const categories = ['TEKNOLOGI', 'KULINER', 'JASA', 'KERAJINAN', 'BUSANA']

// Toggle category
const toggleCategory = (category: string) => {
  if (selectedCategory.value === category) {
    selectedCategory.value = null
  } else {
    selectedCategory.value = category
  }
}
</script>

<template>
  <section class="w-full min-h-screen flex flex-col justify-start items-center bg-blue-templok">
    <!-- Marque -->
    <div class="w-full relative py-8 mb-24">
      <!-- Marquee 1 -->
      <div class="w-full overflow-hidden bg-green-templok py-4 absolute top-0 left-0" style="transform: rotate(-3deg); transform-origin: center;">
        <div class="marquee-container">
          <div class="marquee-content">
            <img 
              v-for="i in 30" 
              :key="i" 
              src="/src/assets/templok-marque.svg" 
              alt="Logo" 
              class="h-4 w-auto mx-1"
            >
          </div>
        </div>
      </div>

      <!-- Marquee 2 -->
      <div class="w-full overflow-hidden bg-green-templok py-4 absolute top-0 left-0" style="transform: rotate(3deg); transform-origin: center;">
        <div class="marquee-container">
          <div class="marquee-content-reverse">
            <img 
              v-for="i in 30" 
              :key="i" 
              src="/src/assets/templok-marque.svg" 
              alt="Logo" 
              class="h-4 w-auto mx-1"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Title -->
    <div class="league-spartan-black font-black mb-3 justify-center items-center flex flex-col">
      <p class="text-green-templok text-8xl">TEMPLOK ZONE</p>
    </div>

    <!-- Search bar -->
    <div class="flex items-center relative">
      <input 
        v-model="searchQuery"
        type="search" 
        class="w-[828px] rounded-full py-2 pl-4 pr-12 text-[20px] text-blue-templok font-montserrat font-reguler leading-none bg-white focus:ring-2 focus:ring-green-templok focus:outline-none" 
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
    <div class="mt-4 flex gap-2 items-center mb-12">
      <Badge 
        v-for="category in categories" 
        :key="category"
        :text="category"
        :class="{ 'ring-2 ring-green-templok': selectedCategory === category }"
        class="cursor-pointer transition-all hover:scale-105"
        @click="toggleCategory(category)"
      />
    </div>

    <!-- Pagination Component -->
    <Pagination 
      :all-umkm="allUMKM" 
      :search-query="searchQuery"
      :selected-category="selectedCategory"
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