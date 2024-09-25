<template>
  <aside class="min-h-screen px-6 flex flex-col items-center border-r-2 border-r-slate-100">
    <div class="logo mb-12 mt-5">
      <span class="font-bold text-xl tracking-wide">To Do</span>
    </div>
    <!-- Bouton d'ajout -->
    <div @click="clickAdd" class="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#fff"
        class="size-16"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </div>
    <!-- Filtres de couleur -->
    <div v-if="showColor" class="flex flex-col gap-5 mt-5">
      <div
        class="w-6 h-6 rounded-full"
        v-for="(color, index) in colors"
        :key="index"
        :style="{ backgroundColor: color }"
      ></div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showColor = ref(false)
const clickAdd = () => {
  showColor.value = !showColor.value
}
// Liste des couleurs
const colors = ref(['#FFD700', '#FF8C00', '#DDA0DD', '#00CED1', '#ADFF2F'])
</script>
