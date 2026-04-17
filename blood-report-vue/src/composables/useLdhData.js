import { computed } from 'vue'
import { ldhRange } from './useStatus'

export function useLdhData(ldhData) {
  const latest = computed(() => ldhData[ldhData.length - 1] || {})
  const first = computed(() => ldhData[0] || {})

  const change = computed(() => {
    if (!latest.value.value || !first.value.value) return 0
    return ((latest.value.value - first.value.value) / first.value.value * 100).toFixed(1)
  })

  const status = computed(() => {
    const v = latest.value.value
    if (v > ldhRange.max) return 'high'
    if (v < ldhRange.min) return 'low'
    return 'normal'
  })

  const labels = computed(() => ldhData.map(d => d.date))

  return {
    latest,
    first,
    change,
    status,
    labels
  }
}
