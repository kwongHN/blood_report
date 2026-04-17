<template>
  <div id="app">
    <AppHeader />

    <AppTabs
      :tabs="tabs"
      v-model="activeTab"
    />

    <div class="container">
      <BloodTab
        v-show="activeTab === 'blood'"
        :blood-data="bloodData"
      />
      <LdhTab
        v-show="activeTab === 'ldh'"
        :ldh-data="ldhData"
      />
      <CartTab
        v-show="activeTab === 'cart'"
        :cart-dates="cartDates"
        :cart-data="cartData"
      />
      <AnalysisTab
        v-show="activeTab === 'analysis'"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppHeader from './components/common/AppHeader.vue'
import AppTabs from './components/common/AppTabs.vue'
import BloodTab from './components/blood/BloodTab.vue'
import LdhTab from './components/ldh/LdhTab.vue'
import CartTab from './components/cart/CartTab.vue'
import AnalysisTab from './components/analysis/AnalysisTab.vue'

// 导入数据
import reportData from './data/report.json'

const tabs = [
  { id: 'blood', label: '血常规报告' },
  { id: 'ldh', label: 'LDH数据' },
  { id: 'cart', label: 'Cart细胞' },
  { id: 'analysis', label: '报告解析' }
]

const activeTab = ref('blood')

// 血常规数据
const bloodData = computed(() => reportData.blood.records)

// LDH数据
const ldhData = computed(() => reportData.ldh.records)

// Cart数据
const cartDates = computed(() => reportData.cart.dates)
const cartData = computed(() => reportData.cart)
</script>

<style>
@import './assets/styles/base.css';
@import './assets/styles/components.css';
</style>
