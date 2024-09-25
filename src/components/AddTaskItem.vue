<template>
  <div
    :style="{ 'background-color': fillColor }"
    :class="isEdition && canModify ? 'border border-red-800' : ''"
    class="min-w-full min-h-40 flex flex-col justify-between rounded-2xl p-4"
  >
    <div class="flex justify-between gap-2 items-center">
      <input
        :disabled="isEdition && !canModify"
        v-model="title"
        type="text"
        name=""
        id=""
        autofocus
        :style="{ 'background-color': fillColor }"
        class="w-full mb-3"
        placeholder="Title"
      />
      <DeleteTask
        data-tooltip="Supprimer la tâche"
        class="cursor-pointer"
        v-if="data?.id && !canModify"
        :id="data?.id"
      />
      <div
        v-if="data?.id && canModify"
        data-tooltip="Fermer l'edition"
        @click="closeEdit"
        class="cursor-pointer"
      >
        <XCircleIcon class="size-10 text-red-700" />
      </div>
    </div>
    <textarea
      :disabled="isEdition && !canModify"
      v-model="description"
      placeholder="Description"
      :style="{ 'background-color': fillColor }"
      name=""
      id=""
      autofocus
      class="w-full text-gray-700 border-none"
      rows="6"
    ></textarea>
    <div class="flex items-center gap-5 mt-8">
      <input
        :disabled="isEdition && !canModify"
        v-model="due_date"
        type="datetime"
        placeholder="dd/mm/yyyy"
        name=""
        id=""
        autofocus
        :style="{ 'background-color': fillColor }"
        class="w-full"
      />
      <button
        data-tooltip="Sauvegarder la tâche"
        v-if="canModify || !data?.id"
        @click="addItem"
        class="text-green-500"
      >
        <HandThumbUpIcon class="size-8 text-green-700" />
      </button>
      <button
        data-tooltip="Modifier la tâche"
        v-if="isEdition && !canModify && !data.completed"
        @click="editData"
        class=""
      >
        <PencilIcon class="size-6 text-blue-500" />
      </button>

      <button
        data-tooltip="Completer la tâche"
        v-if="isEdition && !data.completed"
        @click="completeTask"
        class=""
      >
        <CheckCircleIcon class="size-8 text-green-700" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { PencilIcon, CheckCircleIcon, XCircleIcon, HandThumbUpIcon } from '@heroicons/vue/24/solid'
import { fetchWrapper } from '@/lib/fetchWrapper'
import router from '@/router'
import DeleteTask from './DeleteTask.vue'

const props = defineProps(['color', 'data'])
const showColor = ref(false)
const canModify = ref(false)
const title = ref(props.data?.title)
const description = ref(props.data?.description.split('$$backgroundColor$$')[0])
const due_date = ref(props.data?.due_date)
const fillColor = ref(props.color || props.data?.description.split('$$backgroundColor$$')[1])
const clickAdd = () => {
  showColor.value = !showColor.value
}

const editData = () => {
  canModify.value = true
}

const closeEdit = () => {
  canModify.value = false
}

const isEdition = computed<boolean>(() => !!props.data?.id)

const addItem = async () => {
  try {
    await fetchWrapper[props.data?.id ? 'put' : 'post'](
      '/api' + '/tasks' + (props.data?.id ? '/' + props.data?.id : ''),
      JSON.stringify({
        title: title.value,
        description:
          description.value +
          (fillColor.value?.length ? '$$backgroundColor$$' + fillColor.value : ''),
        due_date: new Date(due_date.value)
      })
    )
    router.go(0)
  } catch (error) {
    console.log(error)
  }
}

const completeTask = async () => {
  try {
    await fetchWrapper.patch('/api/tasks/' + props.data?.id + '/complete', null)
    router.go(0)
  } catch (error) {
    console.log(error)
  }
}
// Liste des couleurs
const colors = ref(['#FFD700', '#FF8C00', '#DDA0DD', '#00CED1', '#ADFF2F'])
</script>
