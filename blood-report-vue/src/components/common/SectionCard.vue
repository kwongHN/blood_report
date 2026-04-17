<template>
  <div class="section">
    <div class="section-header" v-if="title">
      <h2 class="section-title">{{ title }}</h2>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>
