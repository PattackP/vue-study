<template>
  <div class="named-slot">
    <slot name="header">默认头部</slot>
    <div class="content">
      <slot name="default">默认内容区域</slot>
    </div>
    <slot name="footer">默认底部</slot>
  </div>
</template>

<script setup>
</script>

<style scoped>
.named-slot {
  background: rgba(103, 194, 58, 0.2);
  border-radius: 8px;
  overflow: hidden;
}

.content {
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
}
</style>