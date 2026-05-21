<template>
  <div class="tumor-tab">
    <SectionCard title="肿瘤大小变化">
      <DataTable
        :columns="columns"
        :data="tumorData"
      />
    </SectionCard>

    <div class="tumor-summary">
      <p>📊 <strong>趋势总结：</strong>肿瘤尺寸从 84mm×63mm×89mm 缩小至 43mm×61mm×58mm，整体呈持续缩小趋势。</p>
    </div>

    <div class="tumor-footer">
      <p>📝 <strong>数据来源：</strong>PET-CT / 增强CT 报告</p>
      <p>📅 <strong>更新日期：</strong>2026-05-07</p>
    </div>
  </div>
</template>

<script setup>
import SectionCard from '../common/SectionCard.vue'
import DataTable from '../common/DataTable.vue'

const columns = [
  { key: 'date', label: '时间' },
  { key: 'method', label: '检测手段' },
  { key: 'size', label: '尺寸' }
]

const tumorData = [
  { date: '2026.01.22', method: 'PET-CT', size: '84mm×63mm×89mm' },
  { date: '2026.02.25', method: 'PET-CT', size: '82mm×50mm×82mm' },
  { date: '2026.03.27', method: 'PET-CT', size: '73mm×47mm×79mm' },
  { date: '2026.04.27', method: 'PET-CT', size: '68mm×45mm×75mm' },
  { date: '2026.05.07', method: '增强CT', size: '43mm×61mm×58mm' }
]
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
