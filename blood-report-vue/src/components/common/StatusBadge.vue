<template>
  <span class="badge" :class="badgeClass">
    {{ displayValue }}
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  status: {
    type: String,
    required: true,
    validator: (v) => ['low', 'normal', 'high'].includes(v)
  },
  value: {
    type: [Number, String],
    default: null
  }
})

const badgeClass = computed(() => {
  return `badge-${props.status}`
})

const displayValue = computed(() => {
  if (props.value !== null) {
    return props.value
  }
  const labels = { low: '偏低', normal: '正常', high: '偏高' }
  return labels[props.status]
})
</script>
