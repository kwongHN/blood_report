<template>
  <div class="blood-tab">
    <!-- 汇总卡片 -->
    <div class="summary-cards">
      <div class="card">
        <div class="card-date">最新：{{ latest.date }}</div>
        <div class="card-title">白细胞(WBC)</div>
        <div class="card-value">{{ latest.wbc }}</div>
        <span class="card-indicator" :class="statusMap.wbc">{{ statusText[statusMap.wbc] }}</span>
      </div>
      <div class="card">
        <div class="card-date">最新：{{ latest.date }}</div>
        <div class="card-title">中性粒细胞(NE#)</div>
        <div class="card-value">{{ latest.ne }}</div>
        <span class="card-indicator" :class="statusMap.ne">{{ statusText[statusMap.ne] }}</span>
      </div>
      <div class="card">
        <div class="card-date">最新：{{ latest.date }}</div>
        <div class="card-title">淋巴细胞(LY#)</div>
        <div class="card-value">{{ latest.ly }}</div>
        <span class="card-indicator" :class="statusMap.ly">{{ statusText[statusMap.ly] }}</span>
      </div>
      <div class="card">
        <div class="card-date">最新：{{ latest.date }}</div>
        <div class="card-title">血小板(PLT)</div>
        <div class="card-value">{{ latest.plt }}</div>
        <span class="card-indicator" :class="statusMap.plt">{{ statusText[statusMap.plt] }}</span>
      </div>
      <div class="card">
        <div class="card-date">最新：{{ latest.date }}</div>
        <div class="card-title">血红蛋白(HGB)</div>
        <div class="card-value">{{ latest.hgb }}</div>
        <span class="card-indicator" :class="statusMap.hgb">{{ statusText[statusMap.hgb] }}</span>
      </div>
    </div>

    <!-- 数据明细 -->
    <SectionCard title="数据明细">
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>日期</th>
              <th>WBC<br><span class="sub">3.5-9.5</span></th>
              <th>NE#<br><span class="sub">1.8-6.3</span></th>
              <th>LY#<br><span class="sub">1.1-3.2</span></th>
              <th>PLT<br><span class="sub">125-350</span></th>
              <th>HGB<br><span class="sub">115-150</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in bloodData" :key="row.date">
              <td class="date-cell">{{ row.date }}</td>
              <td class="value-cell">
                <span class="badge" :class="getBadgeClass(getStatus(row.wbc, 'wbc'))">{{ row.wbc }}</span>
              </td>
              <td class="value-cell">
                <span class="badge" :class="getBadgeClass(getStatus(row.ne, 'ne'))">{{ row.ne }}</span>
              </td>
              <td class="value-cell">
                <span class="badge" :class="getBadgeClass(getStatus(row.ly, 'ly'))">{{ row.ly }}</span>
              </td>
              <td class="value-cell">
                <span class="badge" :class="getBadgeClass(getStatus(row.plt, 'plt'))">{{ row.plt }}</span>
              </td>
              <td class="value-cell">
                <span class="badge" :class="getBadgeClass(getStatus(row.hgb, 'hgb'))">{{ row.hgb }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </SectionCard>

    <!-- 趋势分析 -->
    <SectionCard title="趋势分析">
      <div class="charts-grid">
        <TrendChart
          v-for="chart in charts"
          :key="chart.id"
          :title="chart.title"
          :labels="chartLabels"
          :data="chartDataMap[chart.key]"
          :color="chart.color"
          :range="chart.range"
          :chart-class="chart.class"
        />
      </div>
    </SectionCard>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import SectionCard from '../common/SectionCard.vue'
import TrendChart from '../charts/TrendChart.vue'
import { useBloodData } from '../../composables/useBloodData'
import { useStatus } from '../../composables/useStatus'

const props = defineProps({
  bloodData: {
    type: Array,
    required: true
  }
})

const { latest, statusMap, charts, chartLabels } = useBloodData(props.bloodData)
const { getBloodStatus, getBadgeClass } = useStatus()

const statusText = { low: '偏低', normal: '正常', high: '偏高' }

// 使用 computed 缓存图表数据映射，避免函数重复创建
const chartDataMap = computed(() => ({
  wbc: props.bloodData.map(d => d.wbc),
  ne: props.bloodData.map(d => d.ne),
  ly: props.bloodData.map(d => d.ly),
  plt: props.bloodData.map(d => d.plt),
  hgb: props.bloodData.map(d => d.hgb)
}))

function getStatus(value, key) {
  return getBloodStatus(value, key)
}
</script>
