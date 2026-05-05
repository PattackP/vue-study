<template>
  <div class="base-select">
    <label>选择城市：</label>
    <select :value="modelValue" @change="handleChange">
      <option 
        v-for="city in cities" 
        :key="city.id" 
        :value="city.id"
      >
        {{ city.name }}
      </option>
    </select>
    <p class="selected">
      当前选中：{{ selectedCity?.name || '请选择' }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

// 城市列表
const cities = [
  { id: '101', name: '北京' },
  { id: '102', name: '上海' },
  { id: '103', name: '武汉' },
  { id: '104', name: '广州' },
  { id: '105', name: '深圳' }
]

// 获取当前选中的城市（用 computed 自动响应变化）
const selectedCity = computed(() => {
  return cities.find(city => city.id === props.modelValue)
})

// 监听选择事件，通知父组件
const handleChange = (e) => {
  emit('update:modelValue', e.target.value)
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
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
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

select:focus {
  outline: none;
  border-color: #ffd700;
}

select option {
  background: #2c3e50;
  color: white;
  padding: 10px;
}

.selected {
  margin: 15px 0 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}
</style>