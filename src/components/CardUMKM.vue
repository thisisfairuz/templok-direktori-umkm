<script setup lang="ts">
defineProps<{
  image: string
  title: string
  description: string
  buttonText?: string
}>()

defineEmits<{
  click: []
}>()
</script>

<template>
  <div 
    @click="$emit('click')"
    class="w-[285px] h-[314px] p-2 bg-white border-4 border-blue-templok rounded-3xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
  >
    <!-- Image -->
    <div class="relative h-[140px]">
      <img 
        :src="image" 
        :alt="title" 
        class="w-full h-full object-cover"
      />
    </div>

    <div class="h-[150px] flex flex-col">
      <!-- Title -->
      <h3 class="text-[16px] font-montserrat font-bold text-blue-templok px-1 mb-2 line-clamp-1">
        {{ title }}
      </h3>

      <!-- Description -->
      <p class="text-[12px] font-montserrat text-blue-templok leading-relaxed px-1 mb-3 text-justify flex-1 overflow-hidden line-clamp-3">
        {{ description }}
      </p>

      <!-- Category -->
      <div class="inline-flex items-center justify-center px-2 py-1 bg-yellow-400 text-blue-templok font-montserrat font-bold text-[12px] rounded-full self-start">
        {{ buttonText || 'MAKANAN' }}
      </div>
    </div>
  </div>
</template>