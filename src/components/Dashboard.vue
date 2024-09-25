<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BarChart from './BarChart.vue'
import DoughnutChart from './DoughnutChart.vue'
import { fetchWrapper } from '@/lib/fetchWrapper'
const statsData = ref<any>('')

onMounted(async () => {
  try {
    console.log('ge')
    const data = await fetchWrapper.get('/api/tasks/stats', null)
    statsData.value = data
    console.log(statsData)
  } catch (e) {
    console.log(e)
  }
})

const getData = (data: string) => {
  return statsData.value ? statsData.value[data] : '--'
}
</script>

<template>
  <div class="max-h-screen max-w-screen">
    <div class="grid md:grid-cols-5 grid-cols-1 gap-8">
      <div class="px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
        <h1 class="text-gray-500 text-xs">Total Tasks</h1>
        <span class="font-bold text-xl tracking-wider">{{ getData('total_tasks') }}</span>
        <div
          class="rounded-md w-[60px] mt-3 bg-blue-100 py-0.5 px-2.5 border border-transparent text-xs text-blue-600 transition-all shadow-sm"
        >
          100%
        </div>
      </div>

      <div class="px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
        <h1 class="text-gray-500 text-xs">Completed Tasks</h1>
        <span class="font-bold text-xl tracking-wider">{{ getData('completed_tasks') }}</span>
        <div
          class="rounded-md w-[60px] mt-3 bg-green-100 py-0.5 px-2.5 border border-transparent text-xs text-green-600 transition-all shadow-sm"
        >
          {{ statsData ? (statsData.completed_tasks / statsData.total_tasks) * 100 : '--' }} %
        </div>
      </div>

      <div class="px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
        <h1 class="text-gray-500 text-xs">Incomplete Tasks</h1>
        <span class="font-bold text-xl tracking-wider">{{ getData('incomplete_tasks') }}</span>
        <div
          class="rounded-md w-[60px] mt-3 bg-red-100 py-0.5 px-2.5 border border-transparent text-xs text-red-600 transition-all shadow-sm"
        >
          {{ statsData ? (statsData.incomplete_tasks / statsData.total_tasks) * 100 : '--' }} %
        </div>
      </div>

      <div class="px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
        <h1 class="text-gray-500 text-xs">Remaining Tasks</h1>
        <span class="font-bold text-xl tracking-wider">{{ getData('remaining_tasks') }}</span>
        <div
          class="rounded-md w-[60px] mt-3 bg-yellow-100 py-0.5 px-2.5 border border-transparent text-xs text-yellow-600 transition-all shadow-sm"
        >
          {{ statsData ? (statsData.remaining_tasks / statsData.total_tasks) * 100 : '--' }} %
        </div>
      </div>

      <div class="px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
        <h1 class="text-gray-500 text-xs">Completed on Time</h1>
        <span class="font-bold text-xl tracking-wider">{{ getData('completed_on_time') }}</span>
        <div
          class="rounded-md w-[60px] mt-3 bg-green-100 py-0.5 px-2.5 border border-transparent text-xs text-green-600 transition-all shadow-sm"
        >
          {{ statsData ? (statsData.completed_on_time / statsData.completed_tasks) * 100 : '--' }} %
        </div>
      </div>
    </div>
    <div class="flex mt-4 gap-8">
      <DoughnutChart class="w-1/2" :statsData="statsData" />
      <BarChart class="w-1/2" :statsData="statsData" />
    </div>
  </div>
</template>

<style></style>
