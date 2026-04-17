import { computed } from 'vue'

export function useCartData(cartDates, cartData) {
  // 改为 computed 确保响应式
  const chartConfigs = computed(() => [
    { id: 'tPct', label: '总T细胞(T%)', color: '#4472C4', class: 'tpct', data: cartData.tPct },
    { id: 'cd4Pct', label: '辅助T细胞(CD4+%)', color: '#70AD47', class: 'cd4pct', data: cartData.cd4Pct },
    { id: 'cd8Pct', label: '杀伤T细胞(CD8+%)', color: '#ED7D31', class: 'cd8pct', data: cartData.cd8Pct },
    { id: 'tNum', label: '总T细胞(T#)', color: '#9B59B6', class: 'tnum', data: cartData.tNum },
    { id: 'cd4Num', label: '辅助T细胞(CD4+%)', color: '#70AD47', class: 'cd4num', data: cartData.cd4Num },
    { id: 'cd8Num', label: '杀伤T细胞(CD8+%)', color: '#ED7D31', class: 'cd8num', data: cartData.cd8Num },
    { id: 'carTPct', label: 'CarT-T(CD3+CarT%)', color: '#E74C3C', class: 'cartpct', data: cartData.carTPct },
    { id: 'cd4CarTPct', label: 'CD4+Car-T(%)', color: '#3498DB', class: 'cartcd4pct', data: cartData.cd4CarTPct },
    { id: 'cd8CarTPct', label: 'CD8+Car-T(%)', color: '#F39C12', class: 'cartcd8pct', data: cartData.cd8CarTPct },
    { id: 'carTNum', label: 'CarT-T#', color: '#E74C3C', class: 'cartnum', data: cartData.carTNum },
    { id: 'cd4CarTNum', label: 'CD4+Car-T#', color: '#3498DB', class: 'cartcd4num', data: cartData.cd4CarTNum },
    { id: 'cd8CarTNum', label: 'CD8+Car-T#', color: '#F39C12', class: 'cartcd8num', data: cartData.cd8CarTNum }
  ])

  const shortDates = computed(() => cartDates.map(d => d.substring(5)))

  const tableHeaders = computed(() => ['检测项目', '单位', '参考值', ...cartDates])

  const tableRows = computed(() => [
    { key: 'tPct', label: '总T细胞(T%)', unit: '%', ref: '51~85', values: cartData.tPct },
    { key: 'cd4Pct', label: '辅助T细胞(CD4+%)', unit: '%', ref: '33~58', values: cartData.cd4Pct },
    { key: 'cd8Pct', label: '杀伤T细胞(CD8+%)', unit: '%', ref: '9~39', values: cartData.cd8Pct },
    { key: 'tNum', label: '总T细胞(T#)', unit: '个/μL', ref: '723~2737', values: cartData.tNum },
    { key: 'cd4Num', label: '辅助T细胞(CD4+%)', unit: '个/μL', ref: '404~1612', values: cartData.cd4Num },
    { key: 'cd8Num', label: '杀伤T细胞(CD8+%)', unit: '个/μL', ref: '220~1129', values: cartData.cd8Num },
    { key: 'carTPct', label: 'CarT-T(CD3+CarT%)', unit: '%', ref: '0~0', values: cartData.carTPct },
    { key: 'cd4CarTPct', label: 'CD4+Car-T(%)', unit: '%', ref: '0~0', values: cartData.cd4CarTPct },
    { key: 'cd8CarTPct', label: 'CD8+Car-T(%)', unit: '%', ref: '0~0', values: cartData.cd8CarTPct },
    { key: 'carTNum', label: 'CarT-T#', unit: '个/μL', ref: '0~0', values: cartData.carTNum },
    { key: 'cd4CarTNum', label: 'CD4+Car-T#', unit: '个/μL', ref: '0~0', values: cartData.cd4CarTNum },
    { key: 'cd8CarTNum', label: 'CD8+Car-T#', unit: '个/μL', ref: '0~0', values: cartData.cd8CarTNum }
  ])

  return {
    chartConfigs,
    shortDates,
    tableHeaders,
    tableRows
  }
}
