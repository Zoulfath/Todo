<script setup lang="ts">
import AddTaskItem from '@/components/AddTaskItem.vue'
import ErrorPage from '@/components/ErrorPage.vue'
import ItemSkeleton from '@/components/ItemSkeleton.vue'
import SideBar from '@/components/SideBar.vue'
import { fetchWrapper } from '@/lib/fetchWrapper'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/solid'
import { onMounted, ref } from 'vue'
const showAddItemCard = ref(false)
const loadingState = ref('done')
const addItemColor = ref('')
const todoItems = ref()

const addItem = (color: string) => {
  if (color.length) {
    addItemColor.value = color
    showAddItemCard.value = true
  } else {
    showAddItemCard.value = false
  }
}

onMounted(async () => {
  try {
    loadingState.value = 'loading'
    const data = await fetchWrapper.get('/api/tasks', null)
    todoItems.value = data
    loadingState.value = 'done'
  } catch (error) {
    loadingState.value = 'error'
  }
})
</script>

<template>
  <div class="min-h-full flex">
    <SideBar @new-element="addItem" />
    <div class="w-full p-6 md:px-16 mt-16">
      <h1 class="mb-8 text-3xl font-[500]">To Do</h1>
      <div v-if="loadingState === 'done'" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AddTaskItem v-if="showAddItemCard" :color="addItemColor" />
        <AddTaskItem v-for="data of todoItems" :key="data.id" :data="data" />
      </div>
      <div v-else-if="loadingState === 'loading'" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ItemSkeleton v-for="i of [1, 2, 3, 4, 5, 6]" :key="i" />
      </div>
      <div v-else>
        <ErrorPage />
      </div>

      <div
        v-if="!todoItems?.length && !showAddItemCard"
        class="border py-5 rounded-lg bg-gray-100 flex flex-col w-full items-center"
      >
        <ExclamationTriangleIcon class="size-24" />
        <p class="md:w-1/2 text-center mt-3">
          Aucune tâche disponible pour l'instant. Créer un tâche dès maintenant pour planifier vos
          objectifs.
        </p>
        <button
          class="hidden px-4 mt-5 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 mb-2"
        >
          Créer une tâche
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
