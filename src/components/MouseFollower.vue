<template>
  <div>
    <!-- Boucle pour afficher les éléments de la traînée -->
    <div
      v-for="(trail, index) in trails"
      :key="index"
      class="trail hidden md:block absolute"
      :style="{
        top: trail.y + 'px',
        left: trail.x + 'px',
        opacity: trail.opacity,
        position: 'absolute',
        width: '20px',
        height: '20px',
        backgroundColor: '#e9e9e9e3',
        borderRadius: '50%',
        transition: 'opacity 0.1s ease'
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Définir les traînées comme une liste réactive
const trails = ref<any>([])
// Fonction pour mettre à jour la position de la souris
const updateMousePosition = (event: MouseEvent) => {
  let mouseX = 0
  let mouseY = 0
  if (event instanceof MouseEvent) {
    mouseX = event.pageX
    mouseY = event.pageY
  }

  trails.value.push({ x: mouseX, y: mouseY, opacity: 1 })

  if (trails.value.length > 5) {
    trails.value.shift()
  }
}

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', updateMousePosition)
})
</script>

<style scoped>
.trail {
  width: 20px;
  height: 20px;
  background-color: #e9e9e9b6;
  border-radius: 50%;
  transition: opacity 0.1s ease;
}
</style>
