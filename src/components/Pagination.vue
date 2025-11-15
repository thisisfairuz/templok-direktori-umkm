<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import CardUMKM from './CardUMKM.vue'
import { useRouter } from 'vue-router'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

// Props

const router = useRouter()



const props = defineProps<{
  allUmkm: Array<{
    id: number;
    image: string;
    title: string;
    description: string;
    category: string;
  }>;
  searchQuery: string;
  selectedCategory: string | null;
}>();

// Emit untuk handle click card
const emit = defineEmits<{
  cardClick: [id: number];
}>();

// Filter UMKM berdasarkan search dan category
const filteredUMKM = computed(() => {
  let result = props.allUmkm;

  // Filter by search query
  if (props.searchQuery.trim()) {
    const query = props.searchQuery.toLowerCase();
    result = result.filter(
      (umkm) =>
        umkm.title.toLowerCase().includes(query) ||
        umkm.description.toLowerCase().includes(query) ||
        umkm.category.toLowerCase().includes(query)
    );
  }

  // Filter by category
  if (props.selectedCategory) {
    result = result.filter((umkm) => umkm.category === props.selectedCategory);
  }

  return result;
});

// Pagination settings
const currentPage = ref(1);
const itemsPerPage = 12;
const totalPages = computed(() =>
  Math.ceil(filteredUMKM.value.length / itemsPerPage)
);

// Reset to page 1 when search or filter changes
watch([() => props.searchQuery, () => props.selectedCategory], () => {
  currentPage.value = 1;
});

// Computed untuk data yang ditampilkan di halaman aktif
const paginatedUMKM = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredUMKM.value.slice(start, end);
});

// Computed untuk info pagination
const paginationInfo = computed(() => {
  const start =
    filteredUMKM.value.length > 0
      ? (currentPage.value - 1) * itemsPerPage + 1
      : 0;
  const end = Math.min(
    currentPage.value * itemsPerPage,
    filteredUMKM.value.length
  );
  return { start, end, total: filteredUMKM.value.length };
});

// Ref untuk scroll ke grid
const gridRef = ref<HTMLElement | null>(null);

// Functions
const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    gridRef.value?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    gridRef.value?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    gridRef.value?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const handleCardClick = (id: number) => {
  emit("cardClick", id);
  // TODO: Navigate to detail page
  router.push(`/detail/${id}`)
}


// Generate page numbers
const visiblePages = computed(() => {
  const pages: (number | string)[] = [];
  const delta = 1;

  for (let i = 1; i <= totalPages.value; i++) {
    if (
      i === 1 ||
      i === totalPages.value ||
      (i >= currentPage.value - delta && i <= currentPage.value + delta)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return pages;
});
</script>

<template>
  <div class="w-full bg-blue-templok min-h-screen py-8">
    <div class="max-w-7xl mx-auto px-4">
      <div
        ref="gridRef"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8 justify-items-center"
      >
        <CardUMKM
          v-for="umkm in paginatedUMKM"
          :key="umkm.id"
          :id="umkm.id"
          :image="umkm.image"
          :title="umkm.title"
          :description="umkm.description"
          :button-text="umkm.category"
          @click="handleCardClick(umkm.id)"
        />
      </div>

      <!-- No Results Message -->
      <div v-if="filteredUMKM.length === 0" class="text-center py-12">
        <p class="text-white text-xl font-semibold mb-2">
          Tidak ada hasil ditemukan
        </p>
        <p class="text-gray-300">
          Coba gunakan kata kunci lain atau hapus filter
        </p>
      </div>

      <!-- Pagination -->
      <div
        v-if="filteredUMKM.length > 0"
        class="flex items-center justify-between border-t border-white/10 px-4 py-3"
      >
        <!-- Mobile -->
        <div class="flex flex-1 justify-between sm:hidden">
          <button
            @click="previousPage"
            :disabled="currentPage === 1"
            class="relative inline-flex items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="relative ml-3 inline-flex items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>

        <!-- Desktop -->
        <div
          class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"
        >
          <div>
            <p class="text-sm text-gray-300">
              Showing
              <span class="font-medium">{{ paginationInfo.start }}</span>
              to
              <span class="font-medium">{{ paginationInfo.end }}</span>
              of
              <span class="font-medium">{{ paginationInfo.total }}</span>
              results
            </p>
          </div>

          <nav
            class="isolate inline-flex -space-x-px rounded-md"
            aria-label="Pagination"
          >
            <button
              @click="previousPage"
              :disabled="currentPage === 1"
              class="relative inline-flex items-center rounded-l-md px-2 py-2 text-white ring-1 ring-inset ring-white hover:bg-white/5 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span class="sr-only">Previous</span>
              <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
            </button>

            <template v-for="(page, index) in visiblePages" :key="index">
              <span
                v-if="page === '...'"
                class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white"
              >
                ...
              </span>
              <button
                v-else
                @click="goToPage(page as number)"
                :class="[
                  page === currentPage
                    ? 'relative z-10 inline-flex items-center bg-green-templok px-4 py-2 text-sm font-semibold text-blue-templok focus:z-20'
                    : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white hover:bg-white/5 focus:z-20 focus:outline-offset-0',
                ]"
              >
                {{ page }}
              </button>
            </template>

            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="relative inline-flex items-center rounded-r-md px-2 py-2 text-white ring-1 ring-inset ring-white hover:bg-white/5 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span class="sr-only">Next</span>
              <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
