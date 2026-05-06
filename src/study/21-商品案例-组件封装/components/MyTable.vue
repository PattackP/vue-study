<template>
  <table class="my-table">
    <thead>
      <tr>
        <slot name="head"></slot>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="item.id">
        <slot name="body" :item="item" :index="index"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.my-table {
  width: 100%;
  border-spacing: 0;
}
.my-table img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  vertical-align: middle;
}
.my-table th {
  background: #f5f5f5;
  border-bottom: 2px solid #069;
}
.my-table td {
  border-bottom: 1px dashed #ccc;
}
.my-table td,
.my-table th {
  text-align: center;
  padding: 10px;
  transition: all 0.5s;
}
</style>