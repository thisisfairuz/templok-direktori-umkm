<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { umkmList } from '@/data/umkm.js'

defineProps<{
  id: number
  image: string
  title: string
  description: string
  buttonText?: string
}>()

defineEmits<{
  click: [id:number]
}>()

const truncateText = (text: string, maxLength = 100) => {
  if (!text) return ''
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}

</script>

<template>
  <div 
    @click="$emit('click')"
    class="w-[285px] h-[314px] p-2 bg-white border-4 border-blue-templok rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
  >
    <!-- Image -->
    <div class="relative h-[140px] mb-2">
      <img 
        :src="image" 
        :alt="title" 
        class="w-full h-full object-cover rounded-t-xl rounded-b"
      />
    </div>

    <div class="h-[140px] flex flex-col">
      <!-- Title -->
      <h3 class="text-[16px] font-montserrat font-bold text-blue-templok px-1 mb-2 line-clamp-1">
        {{ title }}
      </h3>

      <!-- Description -->
      <p class="text-[12px] font-montserrat text-blue-templok leading-relaxed px-1 mb-3 text-justify flex-1 overflow-hidden">
        {{ truncateText(description, 120) }}
      </p>

      <!-- Category -->
      <div class="inline-flex items-center justify-center px-2 py-1 bg-green-templok text-blue-templok font-montserrat font-bold text-[12px] rounded-full self-start">
        {{ buttonText || 'MAKANAN' }}
      </div>
    </div>
  </div>
</template>