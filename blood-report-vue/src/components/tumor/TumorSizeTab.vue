<template>
  <div class="tumor-tab">
    <SectionCard title="PET-CT 检查">
      <DataTable
        :columns="petColumns"
        :data="petCt"
      />
    </SectionCard>

    <SectionCard title="增强CT 检查">
      <DataTable
        :columns="ctColumns"
        :data="contrastCt"
      />
    </SectionCard>

    <div class="tumor-summary">
      <p>📊 <strong>趋势总结：</strong>PET-CT 病灶由 84mm×63mm×89mm（SUVmax 28.7）缩小至 43mm×31mm×51mm（SUVmax 3.6）；增强CT 病灶由 43mm×61mm×58mm 缩小至 32mm×49mm×46mm，整体均呈持续缩小趋势。</p>
    </div>

    <div class="tumor-footer">
      <p>📝 <strong>说明：</strong>PET-CT 与增强CT 的测量方式不同，两类结果分表展示，各自进行纵向对比，不做跨方式直接比较。</p>
      <p>📝 <strong>数据来源：</strong>LDH_Cart.xlsx「CT结果」表</p>
      <p>📅 <strong>更新日期：</strong>2026-10-31</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import SectionCard from '../common/SectionCard.vue'
import DataTable from '../common/DataTable.vue'

const props = defineProps({
  tumorData: {
    type: Object,
    default: () => ({ petCt: [], contrastCt: [] })
  }
})

const petColumns = [
  { key: 'date', label: '时间' },
  { key: 'size', label: '尺寸' },
  { key: 'suvmax', label: 'SUVmax' }
]

const ctColumns = [
  { key: 'date', label: '时间' },
  { key: 'size', label: '尺寸' }
]

const petCt = computed(() => (props.tumorData.petCt || []).map(row => ({
  ...row,
  suvmax: row.suvmax ?? '—'
})))

const contrastCt = computed(() => props.tumorData.contrastCt || [])
</script>

<style scoped>
.tumor-summary {
  background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
  border-radius: 10px;
  padding: 16px;
  margin-top: 16px;
  font-size: 13px;
}

.tumor-footer {
  background: #f8f9fb;
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 16px;
  font-size: 12px;
  color: var(--text-muted);
  border-top: 1px solid var(--border);
}

.tumor-footer p {
  margin: 4px 0;
}
</style>
