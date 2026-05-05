<template>
  <div class="base-select">
    <select :value="modelValue" @change="handleChange">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">广州</option>
      <option value="105">深圳</option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const handleChange = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<style scoped>
.base-select {
  display: inline-block;
}

select {
  width: 200px;
  padding: 10px 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 16px;
  cursor: pointer;
}

option {
  background: #2c3e50;
  color: white;
}
</style>