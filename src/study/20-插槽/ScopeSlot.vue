<template>
  <div class="scope-slot">
    <h4>子组件的数据列表：</h4>
    <slot :item="item1" :index="0">默认1</slot>
    <slot :item="item2" :index="1">默认2</slot>
    <slot :item="item3" :index="2">默认3</slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const item1 = ref({ name: '张三', age: 18 })
const item2 = ref({ name: '李四', age: 20 })
const item3 = ref({ name: '王五', age: 22 })
</script>

<style scoped>
.scope-slot {
  background: rgba(255, 153, 0, 0.2);
  padding: 20px;
  border-radius: 8px;
}

.scope-slot h4 {
  margin: 0 0 15px;
  color: #ffd700;
}
</style>