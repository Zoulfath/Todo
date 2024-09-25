<script setup lang="ts">
import { ref, onMounted } from 'vue'
import router from '@/router'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 1000)
})
</script>

<template>
  <div class="relative mb-8" id="home">
    <nav
      class="absolute z-10 px-4 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent"
    >
      <div>
        <div
          class="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4"
        >
          <div class="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
            <div class="relative flex max-h-10 items-center lg:hidden">
              <button aria-label="humburger" id="hamburger" class="relative -mr-6 p-6">
                <div
                  aria-hidden="true"
                  id="line"
                  class="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                ></div>
              </button>
            </div>
          </div>
          <div
            id="navLayer"
            aria-hidden="true"
            class="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden"
          ></div>
          <div
            id="navlinks"
            class="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none"
          >
            <div class="mt-12 lg:mt-0">
              <button
                @click="router.push('/login')"
                class="px-5 py-3 rounded-lg bg-black relative text-sm font-semibold text-white"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div
      aria-hidden="true"
      class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
    >
      <div
        class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"
      ></div>
      <div
        class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"
      ></div>
    </div>
    <div>
      <div class="relative pt-36 ml-auto">
        <div class="lg:w-2/3 text-center mx-auto">
          <h1 class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
            Organisez votre monde, simplifiez
            <span class="text-primary dark:text-white">votre vie.</span>
          </h1>
          <p class="mt-8 text-gray-700 dark:text-gray-300">
            Pour une application simple et efficace : "Organisez votre journée en un clin d'œil.
            Simple, intuitive, efficace. Boostez votre productivité. Planifiez, suivez vos progrès,
            et atteignez vos objectifs."
          </p>
          <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
            <a
              href="#"
              class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <button
                @click="router.push('/login')"
                class="px-5 py-3 rounded-lg bg-black relative text-sm font-semibold text-white"
              >
                Get started
              </button>
            </a>
            <a
              href="#"
              class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span class="relative text-base font-semibold text-primary hover:text-red-700"
                >Learn more</span
              >
            </a>
          </div>
          <div
            class="hidden py-8 mt-16 border-y border-gray-200 dark:border-gray-800 sm:flex justify-between"
          >
            <div class="text-left">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">The lowest price</h6>
              <p class="mt-2 text-gray-500">The Lowest on the market.</p>
            </div>
            <div class="text-left">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                The fastest on the market
              </h6>
              <p class="mt-2 text-gray-500">The fastest ever.</p>
            </div>
            <div class="text-left">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">The most loved</h6>
              <p class="mt-2 text-gray-500">And the easiest.</p>
            </div>
          </div>
        </div>
        <div class="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="../images/clients/microsoft.svg"
              class="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="../images/clients/airbnb.svg"
              class="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0">
            <img
              src="../images/clients/google.svg"
              class="h-9 w-auto m-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="../images/clients/ge.svg"
              class="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0">
            <img
              src="../images/clients/netflix.svg"
              class="h-8 w-auto m-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="../images/clients/google-cloud.svg"
              class="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
