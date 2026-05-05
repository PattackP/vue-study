<template>
  <div class="base-count">
    <button @click="handleSub">-</button>
    <span>{{ count }}</span>
    <button @click="handleAdd">+</button>
  </div>
</template>

<script setup>
// ============================================
// 单向数据流原则
// ============================================
// 1. props 是只读的，子组件不能直接修改
// 2. 如果要修改，必须通过 emit 通知父组件
// 3. 父组件收到通知后，自己修改数据
// 4. 数据流动方向：父 → 子，只能单向
//
// 错误做法（不要这样写）：
// count++  // ❌ 不能直接修改 props
//
// 正确做法：
// emit('changeCount', count + 1)  // ✅ 通知父组件

const props = defineProps({
  count: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['changeCount'])

const handleSub = () => {
  emit('changeCount', props.count - 1)
}

const handleAdd = () => {
  emit('changeCount', props.count + 1)
}
</script>

<style scoped>
.base-count {
  margin: 20px;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  padding: 20px 30px;
  border-radius: 15px;
}

button {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: white;
  color: #f5576c;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

span {
  font-size: 32px;
  font-weight: bold;
  color: white;
  min-width: 60px;
  text-align: center;
}
</style>