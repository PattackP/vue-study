<template>
  <div class="default-slot">
    <slot>这是默认的备用内容</slot>
  </div>
</template>

<script setup>
</script>

<style scoped>
.default-slot {
  background: rgba(64, 158, 255, 0.3);
  padding: 20px;
  border-radius: 8px;
  border: 2px dashed #409EFF;
}

.default-slot:empty::after {
  content: '子组件：插槽为空，显示备用内容';
  color: rgba(255, 255, 255, 0.5);
}
</style>