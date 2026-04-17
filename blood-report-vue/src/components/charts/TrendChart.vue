<template>
  <div class="chart-container">
    <div class="chart-title" :class="chartClass">{{ title }}</div>
    <div class="chart-wrapper">
      <canvas ref="chartRef"></canvas>
    </div>
    <div class="legend-info" v-if="showLegend">
      <div class="legend-item">
        <span class="legend-dot low"></span>&lt;{{ range.min }}
      </div>
      <div class="legend-item">
        <span class="legend-dot normal"></span>正常
      </div>
      <div class="legend-item">
        <span class="legend-dot high"></span>&gt;{{ range.max }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { createLineChart } from '../../composables/useChart'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  labels: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
  color: {
    type: String,
    default: '#667eea'
  },
  range: {
    type: Object,
    default: () => ({ min: 0, max: 100 })
  },
  chartClass: {
    type: String,
    default: ''
  },
  showLegend: {
    type: Boolean,
    default: true
  }
})

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
  if (chartRef.value) {
    chartInstance = createLineChart(chartRef.value, {
      label: props.title,
      labels: props.labels,
      data: props.data,
      color: props.color
    })
  }
})

onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy()
    chartInstance = null
  }
})

// 使用 deep: true 确保数组内容变化也能检测到
watch(() => props.data, (newData) => {
  if (chartInstance && newData) {
    chartInstance.data.datasets[0].data = [...newData]
    chartInstance.update()
  }
}, { deep: true })

// 同时监听 labels 变化
watch(() => props.labels, (newLabels) => {
  if (chartInstance && newLabels) {
    chartInstance.data.labels = [...newLabels]
    chartInstance.update()
  }
}, { deep: true })
</script>
