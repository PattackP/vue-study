<template>
  <div class="base-select">
    <label>{{ label }}</label>
    <select :value="modelValue" @change="handleChange">
      <option v-for="city in cities" :key="city.id" :value="city.id">{{ city.name }}</option>
    </select>
    <p class="result">当前选中：{{ selectedCity?.name || placeholder }}</p>
    <div class="actions">
      <button @click="changeLabel">改标题</button>
      <button @click="changePlaceholder">改提示</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String
})

const emit = defineEmits(['update:modelValue', 'update:label', 'update:placeholder'])

const cities = [
  { id: '101', name: '北京' },
  { id: '102', name: '上海' },
  { id: '103', name: '武汉' },
  { id: '104', name: '广州' },
  { id: '105', name: '深圳' }
]

const selectedCity = computed(() => {
  return cities.find(city => city.id === props.modelValue)
})

const handleChange = (e) => {
  emit('update:modelValue', e.target.value)
}

const changeLabel = () => {
  emit('update:label', '新标题-' + Date.now())
}

const changePlaceholder = () => {
  emit('update:placeholder', '新提示-' + Date.now())
}
</script>

<style scoped>
.base-select {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ffd700;
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

.result {
  margin: 15px 0 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

button {
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  background: #ffd700;
  color: #333;
  cursor: pointer;
  font-size: 12px;
}

button:hover {
  background: #ffaa00;
}
</style>