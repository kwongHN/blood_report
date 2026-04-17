<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">
            {{ col.label }}
            <span v-if="col.sub" class="sub">{{ col.sub }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td
            v-for="col in columns"
            :key="col.key"
            :class="{ 'date-cell': col.isDate, 'value-cell': col.isValue }"
          >
            <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]" :column="col">
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  columns: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    required: true
  }
})
</script>
