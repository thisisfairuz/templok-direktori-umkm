<template>
  <section
    id="the-developers"
    class="w-full min-h-screen flex flex-col justify-start items-center bg-green-templok pb-24"
  >
    <!-- Marquee -->
    <div class="w-full overflow-hidden py-4 mb-16">
      <div class="marquee-container">
        <div class="marquee-content">
          <img
            v-for="i in 30"
            :key="i"
            src="/src/assets/templok-marque.svg"
            alt="Logo"
            class="h-4 w-auto mx-1"
          />
        </div>
      </div>
    </div>

    <!-- The Developers -->
    <div class="w-full flex flex-col justify-center items-center px-24">
      <h1
        class="league-spartan-blgack font-black text-blue-templok text-8xl mb-20 text-center"
      >
        THE DEVELOPERS
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-20">
        <!-- Developer 1 -->
        <div class="flex flex-col items-center">
          <div class="w-74 h-74 mb-8 relative">
            <img
              src="/src/assets/fairuz-foto.svg"
              alt="fairuz photo"
              class="absolute inset-0 w-full h-full pointer-events-none"
            />
          </div>
          <h2
            class="text-4xl font-bold text-black font-montserrat mb-8 text-center"
          >
            Fairuz Zahirah Abhista
          </h2>
          <a
            href="https://www.linkedin.com/in/fairuzzahirah"
            class="flex items-center gap-2"
          >
            <img
              src="/src/assets/linkedin-logo.svg"
              alt="LinkedIn"
              class="w-10 h-10 object-contain"
              aria-hidden="false"
            />
            <span
              class="font-reguler text-3xl text-blue-templok font-montserrat"
              >@fairuzzahirah</span
            >
          </a>
        </div>

        <!-- Developer 2 -->
        <div class="flex flex-col items-center">
          <div class="w-74 h-74 mb-8 relative">
            <img
              src="/src/assets/irene-foto.svg"
              alt="fairuz photo"
              class="absolute inset-0 w-full h-full pointer-events-none"
            />
          </div>
          <h2
            class="text-4xl font-bold text-black font-montserrat mb-8 text-center"
          >
            Irene Talitha Tyas Raharjo
          </h2>
          <a
            href="https://www.linkedin.com/in/irenetalitha"
            class="flex items-center gap-2"
          >
            <img
              src="/src/assets/linkedin-logo.svg"
              alt="LinkedIn"
              class="w-10 h-10 object-contain"
              aria-hidden="false"
            />
            <span
              class="font-reguler text-3xl text-blue-templok font-montserrat"
              >@irenetalitha</span
            >
          </a>
        </div>

        <!-- Developer 3 -->
        <div class="flex flex-col items-center">
          <div class="w-74 h-74 mb-8 relative">
            <img
              src="/src/assets/anti-foto.svg"
              alt="fairuz photo"
              class="absolute inset-0 w-full h-full pointer-events-none"
            />
          </div>
          <h2
            class="text-4xl font-bold text-black font-montserrat mb-8 text-center"
          >
            Najmina Kinanti Putri
          </h2>
          <a
            href="https://www.linkedin.com/in/najminakinanti"
            class="flex items-center gap-2"
          >
            <img
              src="/src/assets/linkedin-logo.svg"
              alt="LinkedIn"
              class="w-10 h-10 object-contain"
              aria-hidden="false"
            />
            <span
              class="font-reguler text-3xl text-blue-templok font-montserrat"
              >@najminakinanti</span
            >
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-container {
  display: flex;
  width: 100%;
}

.marquee-content {
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
</style>
