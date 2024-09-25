<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend, scales } from 'chart.js'
import { computed, ref } from 'vue'
import { Doughnut } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps(['statsData'])

const data = computed<any>(() => {
  return {
    labels: ['Completed', 'Incomplete', 'Remaining'],
    datasets: [
      {
        backgroundColor: ['#0068FF', '#4A8922', '#AD0000'],
        data: [
          props.statsData?.completed_tasks,
          props.statsData?.incomplete_tasks,
          props.statsData?.remaining_tasks
        ]
      }
    ]
  }
})

const options: any = {
  responsive: true,
  maintainAspectRatio: false,
  spacing: 4,
  cutout: '85%',
  plugins: {
    legend: {
      display: true,
      position: 'bottom'
    }
  }
}
</script>

<template>
  <div
    class="p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <div class="">
      <Doughnut class="" :data="data" :options="options" />
    </div>
  </div>
</template>

<style></style>
