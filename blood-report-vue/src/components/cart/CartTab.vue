<template>
  <div class="cart-tab">
    <!-- 数据表格 -->
    <SectionCard title="Cart细胞检测数据">
      <div class="table-fixed">
        <table id="cartTable">
          <thead>
            <tr>
              <th v-for="h in tableHeaders" :key="h">{{ h }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in tableRows" :key="row.key">
              <td>{{ row.label }}</td>
              <td>{{ row.unit }}</td>
              <td>{{ row.ref }}</td>
              <td class="value-cell" v-for="(v, i) in row.values" :key="i">{{ v }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </SectionCard>

    <!-- T细胞亚群百分比 -->
    <SectionCard title="T细胞亚群百分比">
      <div class="charts-grid">
        <TrendChart
          v-for="cfg in percentageCharts"
          :key="cfg.id"
          :title="cfg.label"
          :labels="shortDates"
          :data="cfg.data"
          :color="cfg.color"
          :chart-class="cfg.class"
          :show-legend="false"
        />
      </div>
    </SectionCard>

    <!-- T细胞绝对计数 -->
    <SectionCard title="T细胞绝对计数">
      <div class="charts-grid">
        <TrendChart
          v-for="cfg in countCharts"
          :key="cfg.id"
          :title="cfg.label"
          :labels="shortDates"
          :data="cfg.data"
          :color="cfg.color"
          :chart-class="cfg.class"
          :show-legend="false"
        />
      </div>
    </SectionCard>

    <!-- CarT-T细胞百分比 -->
    <SectionCard title="CarT-T细胞百分比">
      <div class="charts-grid">
        <TrendChart
          v-for="cfg in cartPctCharts"
          :key="cfg.id"
          :title="cfg.label"
          :labels="shortDates"
          :data="cfg.data"
          :color="cfg.color"
          :chart-class="cfg.class"
          :show-legend="false"
        />
      </div>
    </SectionCard>

    <!-- CarT-T细胞绝对计数 -->
    <SectionCard title="CarT-T细胞绝对计数">
      <div class="charts-grid">
        <TrendChart
          v-for="cfg in cartNumCharts"
          :key="cfg.id"
          :title="cfg.label"
          :labels="shortDates"
          :data="cfg.data"
          :color="cfg.color"
          :chart-class="cfg.class"
          :show-legend="false"
        />
      </div>
    </SectionCard>

    <footer>
      <p>Cart-T细胞治疗监测数据</p>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import SectionCard from '../common/SectionCard.vue'
import TrendChart from '../charts/TrendChart.vue'
import { useCartData } from '../../composables/useCartData'

const props = defineProps({
  cartDates: {
    type: Array,
    required: true
  },
  cartData: {
    type: Object,
    required: true
  }
})

const { tableHeaders, tableRows, shortDates } = useCartData(props.cartDates, props.cartData)

const percentageCharts = computed(() => [
  { id: 'tPct', label: '总T细胞(T%)', color: '#4472C4', class: 'tpct', data: props.cartData.tPct },
  { id: 'cd4Pct', label: '辅助T细胞(CD4+%)', color: '#70AD47', class: 'cd4pct', data: props.cartData.cd4Pct },
  { id: 'cd8Pct', label: '杀伤T细胞(CD8+%)', color: '#ED7D31', class: 'cd8pct', data: props.cartData.cd8Pct }
])

const countCharts = computed(() => [
  { id: 'tNum', label: '总T细胞(T#)', color: '#9B59B6', class: 'tnum', data: props.cartData.tNum },
  { id: 'cd4Num', label: '辅助T细胞(CD4+%)', color: '#70AD47', class: 'cd4num', data: props.cartData.cd4Num },
  { id: 'cd8Num', label: '杀伤T细胞(CD8+%)', color: '#ED7D31', class: 'cd8num', data: props.cartData.cd8Num }
])

const cartPctCharts = computed(() => [
  { id: 'carTPct', label: 'CarT-T(CD3+CarT%)', color: '#E74C3C', class: 'cartpct', data: props.cartData.carTPct },
  { id: 'cd4CarTPct', label: 'CD4+Car-T(%)', color: '#3498DB', class: 'cartcd4pct', data: props.cartData.cd4CarTPct },
  { id: 'cd8CarTPct', label: 'CD8+Car-T(%)', color: '#F39C12', class: 'cartcd8pct', data: props.cartData.cd8CarTPct }
])

const cartNumCharts = computed(() => [
  { id: 'carTNum', label: 'CarT-T#', color: '#E74C3C', class: 'cartnum', data: props.cartData.carTNum },
  { id: 'cd4CarTNum', label: 'CD4+Car-T#', color: '#3498DB', class: 'cartcd4num', data: props.cartData.cd4CarTNum },
  { id: 'cd8CarTNum', label: 'CD8+Car-T#', color: '#F39C12', class: 'cartcd8num', data: props.cartData.cd8CarTNum }
])
</script>
