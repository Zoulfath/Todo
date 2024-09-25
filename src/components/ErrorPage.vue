<template>
  <div class="text-left border p-8 rounded-lg bg-gray-100">
    <h1 class="mb-4 text-6xl font-semibold text-red-500">500</h1>
    <p class="mb-4 text-lg text-gray-600">Oops! Quelque chose s'est mal passée.</p>
    <div class="animate-bounce">
      <svg class="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        ></path>
      </svg>
    </div>
    <p class="mt-4 text-gray-600">
      Réessayer <button @click="$router.go(0)" href="/" class="text-blue-500">maintenant</button>.
    </p>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
</script>
