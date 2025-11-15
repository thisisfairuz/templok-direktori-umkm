<script setup>
const scrollToUMKMZone = () => {
  const element = document.querySelector("#templok-zone");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<template>
  <section
    id="home"
    class="w-full flex flex-col justify-center items-center h-full px-4 sm:px-8 lg:px-16"
  >
    <div class="flex items-start space-x-1">
      <img
        src="/src/assets/bunga-green.svg"
        alt="Bunga Hijau"
        class="w-10 h-10 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 -mt-3 -ms-3 animate-spin-slow"
      />
      <div class="flex justify-center items-center flex-col">
        <div class="mb-6 sm:mb-8">
          <div
            class="league-spartan-black font-black mb-2 sm:mb-4 justify-center items-center flex flex-col"
          >
            <p
              class="text-white text-5xl sm:text-7xl md:text-8xl xl:text-9xl leading-none"
            >
              TEMPAT
            </p>
            <p
              class="text-green-templok text-5xl sm:text-7xl md:text-8xl xl:text-9xl leading-none"
            >
              LOKAL
            </p>
          </div>
          <p
            class="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl font-montserrat text-center"
          >
            Biar yang kecil makin dikenal
          </p>
        </div>
        <a
          href="#templok-zone"
          @click.prevent="scrollToUMKMZone"
          class="atkinson-hyperlegible-bold text-blue-templok bg-green-templok px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 rounded-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:scale-105 transition-transform duration-300 cursor-pointer relative inline-block"
        >
          Explore More!
        </a>
      </div>
      <img
        src="/src/assets/bunga-white.svg"
        alt="Bunga Putih"
        class="w-10 h-10 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mt-16 sm:mt-24 md:mt-28 -ms-5 animate-spin-slow-reverse"
      />
    </div>
  </section>
</template>
