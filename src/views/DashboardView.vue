<script setup lang="ts">
import Dashboard from '@/components/Dashboard.vue'
import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <div class="min-h-full flex">
    <SideBar />
    <div class="w-full p-6 md:px-16 mt-10">
      <h1 class="mb-4 text-3xl font-[500]">Dashboard</h1>
      <span class="text-xs tracking-wide text-gray-500"
        >Le Dashboard offre un aperçu visuel clair de la progression des tâches, permettant de
        suivre en temps réel les tâches complétées, incomplètes, restantes, ainsi que le respect des
        délais.</span
      >
      <div class="mt-6">
        <Dashboard />
      </div>
    </div>
  </div>
</template>
