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
    class="w-full flex flex-col justify-center items-center h-full"
  >
    <div class="flex space-x-1">
      <img
        src="/src/assets/bunga-green.svg"
        alt="Bunga Hijau"
        class="w-36 h-36 -mt-3 -ms-3 animate-spin-slow"
      />
      <div class="flex justify-center items-center flex-col">
        <div class="mb-7">
          <div
            class="league-spartan-black font-black mb-3 justify-center items-center flex flex-col"
          >
            <p class="text-white text-9xl">TEMPAT</p>
            <p class="text-green-templok text-9xl">LOKAL</p>
          </div>
          <p class="text-white font-bold text-4xl font-montserrat">
            Biar yang kecil makin dikenal
          </p>
        </div>
        <a
          href="#templok-zone"
          @click.prevent="scrollToUMKMZone"
          class="atkinson-hyperlegible-bold text-blue-templok bg-green-templok px-12 py-3 rounded-full text-5xl hover:scale-105 transition-transform duration-300 cursor-pointer relative inline-block"
        >
          Explore More!
        </a>
      </div>
      <img
        src="/src/assets/bunga-white.svg"
        alt="Bunga Putih"
        class="w-36 h-36 mt-28 -ms-5 animate-spin-slow-reverse"
      />
    </div>
  </section>
</template>
