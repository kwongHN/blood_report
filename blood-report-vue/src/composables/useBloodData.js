import { computed } from 'vue'
import { bloodRanges } from './useStatus'

export function useBloodData(bloodData) {
  const latest = computed(() => bloodData[bloodData.length - 1] || {})

  const statusMap = computed(() => ({
    wbc: getStatus(latest.value.wbc, 'wbc'),
    ne: getStatus(latest.value.ne, 'ne'),
    ly: getStatus(latest.value.ly, 'ly'),
    plt: getStatus(latest.value.plt, 'plt'),
    hgb: getStatus(latest.value.hgb, 'hgb')
  }))

  function getStatus(value, key) {
    if (value < bloodRanges[key].min) return 'low'
    if (value > bloodRanges[key].max) return 'high'
    return 'normal'
  }

  const charts = computed(() => [
    { id: 'wbc', title: '白细胞(WBC)', key: 'wbc', color: '#4472C4', class: 'wbc', range: bloodRanges.wbc },
    { id: 'ne', title: '中性粒细胞(NE#)', key: 'ne', color: '#ED7D31', class: 'ne', range: bloodRanges.ne },
    { id: 'ly', title: '淋巴细胞(LY#)', key: 'ly', color: '#9B59B6', class: 'ly', range: bloodRanges.ly },
    { id: 'plt', title: '血小板(PLT)', key: 'plt', color: '#70AD47', class: 'plt', range: bloodRanges.plt },
    { id: 'hgb', title: '血红蛋白(HGB)', key: 'hgb', color: '#FF4444', class: 'hgb', range: bloodRanges.hgb }
  ])

  const chartLabels = computed(() => bloodData.map(d => formatDate(d.date)))

  function formatDate(dateStr) {
    return dateStr ? dateStr.substring(5) : ''
  }

  return {
    latest,
    statusMap,
    charts,
    chartLabels,
    formatDate
  }
}
