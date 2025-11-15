<template>
  <button 
    type="button" 
    class="inline-flex items-center justify-center whitespace-nowrap rounded-full py-2 px-10 text-[20px] text-blue-templok font-montserrat font-semibold leading-none bg-white hover:bg-green-templok focus:outline-2 focus:outline-offset-2 focus:outline-green-templok transition"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})

defineEmits(['click'])
</script>