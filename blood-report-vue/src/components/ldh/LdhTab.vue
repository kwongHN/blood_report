<template>
  <div class="ldh-tab">
    <!-- 汇总卡片 -->
    <div class="summary-cards">
      <div class="card">
        <div class="card-date">最新：{{ latest.date }}</div>
        <div class="card-title">LDH值</div>
        <div class="card-value">{{ latest.value }}</div>
        <span class="card-indicator" :class="status">{{ statusText }}</span>
      </div>
      <div class="card">
        <div class="card-date">首次：{{ first.date }}</div>
        <div class="card-title">首次检测值</div>
        <div class="card-value">{{ first.value }}</div>
        <span class="card-indicator">首次</span>
      </div>
      <div class="card">
        <div class="card-date">变化</div>
        <div class="card-title">变化幅度</div>
        <div class="card-value">{{ change }}%</div>
        <span class="card-indicator" :class="parseFloat(change) < 0 ? 'normal' : 'high'">
          {{ parseFloat(change) < 0 ? '↓' : '↑' }}
        </span>
      </div>
    </div>

    <!-- 数据表格 -->
    <SectionCard title="LDH检测数据">
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>日期</th>
              <th>LDH (U/L)<br><span class="sub">参考值: 120-250</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in ldhData" :key="row.date">
              <td class="date-cell">{{ row.date }}</td>
              <td class="value-cell">
                <span class="badge" :class="getBadgeClass(row.value)">{{ row.value }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </SectionCard>

    <!-- 趋势图 -->
    <SectionCard title="LDH趋势图">
      <div class="charts-grid">
        <TrendChart
          class="wide-chart"
          title="乳酸脱氢酶(LDH)"
          :labels="labels"
          :data="values"
          color="#667eea"
          :range="{ min: 120, max: 250 }"
          chart-class="ldh"
        />
      </div>
    </SectionCard>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import SectionCard from '../common/SectionCard.vue'
import TrendChart from '../charts/TrendChart.vue'
import { useLdhData } from '../../composables/useLdhData'
import { useStatus } from '../../composables/useStatus'

const props = defineProps({
  ldhData: {
    type: Array,
    required: true
  }
})

const { latest, first, change, status, labels } = useLdhData(props.ldhData)
const { getLdhStatus, getBadgeClass: getBadge } = useStatus()

const statusText = computed(() => {
  const map = { low: '偏低', normal: '正常', high: '偏高' }
  return map[status.value]
})

const values = computed(() => props.ldhData.map(d => d.value))

function getBadgeClass(value) {
  const s = getLdhStatus(value)
  return s === 'low' ? 'badge-low' : s === 'high' ? 'badge-high' : 'badge-normal'
}
</script>
