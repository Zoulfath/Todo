<template>
  <div>
    <button @click="open = !open" class="absolute md:hidden">
      <Bars3Icon class="size-6" />
    </button>
    <aside
      :class="open ? '' : 'hidden'"
      class="min-h-screen px-6 md:flex flex-col items-center border-r-[1px] border-r-slate-100"
    >
      <div @click="() => router.push('/dashboard')" class="cursor-pointer logo mb-12 mt-5">
        <HomeIcon class="size-10" />
      </div>
      <!-- Bouton d'ajout -->
      <div
        @click="clickAdd"
        class="flex flex-col px-2 items-center"
        v-if="$router.currentRoute.value.path !== '/todo'"
      >
        <RectangleStackIcon class="size-10" />
        <span class="text-sm w-full mt-1">Tâches</span>
      </div>
      <div v-else :data-tooltip="tooltip" @click="clickAdd" class="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#fff"
          class="size-16 svg-icon"
          :class="showColor ? 'cross' : ''"
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
          @click="$emit('new-element', color)"
        ></div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { Bars3Icon, HomeIcon, RectangleStackIcon } from '@heroicons/vue/24/solid'
import { computed, ref } from 'vue'

const emit = defineEmits(['new-element'])
const showColor = ref(false)
const open = ref(false)
const clickAdd = () => {
  if (router.currentRoute.value.path !== '/todo') {
    router.push('/todo')
  } else {
    showColor.value = !showColor.value
    if (!showColor.value) {
      emit('new-element', '')
    }
  }
}

const tooltip = computed<string>(() =>
  showColor.value ? 'Choisissez la couleur de votre tâche pour continuer' : ''
)
// Liste des couleurs
const colors = ref(['#E4A581', '#F2D188', '#B99EF7', '#E9F1A4', '#83D8F7'])
</script>
<style scoped>
.svg-icon {
  transition:
    transform 0.5s ease-in-out,
    stroke 0.5s ease-in-out,
    fill 0.5s ease-in-out;
  cursor: pointer;
}

.svg-icon.cross {
  transform: rotate(45deg);
  stroke: red;
  fill: transparent;
}

.svg-icon:hover {
  transform: scale(1.2);
}

.svg-icon.cross:hover {
  transform: scale(1.2) rotate(45deg);
}
</style>
