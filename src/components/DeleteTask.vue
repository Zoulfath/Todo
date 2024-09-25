<template>
  <div @click="deleteTask" role="status">
    <TrashIcon class="size-6 text-red-700" />
  </div>
</template>
<script setup lang="ts">
import { fetchWrapper } from '@/lib/fetchWrapper'
import router from '@/router'
import { TrashIcon } from '@heroicons/vue/24/solid'

const props = defineProps(['id'])

const deleteTask = async () => {
  try {
    await fetchWrapper.delete('/api/tasks/' + props.id, null)
    router.go(0)
  } catch (error) {
    console.log('echec')
  }
}
</script>
