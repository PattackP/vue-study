<template>
  <div>
    <div ref="chartBox" class="base-chart-box">
      <div class="chart-content">
        <div class="title">{{ title }}</div>
        <div class="data-info">
          <div v-for="(item, index) in data" :key="index" class="data-item">
            {{ item.name }}: {{ item.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue'

const chartBox = ref(null)
const title = ref('销售数据图表')
const data = ref([
  { name: '衬衫', value: 5 },
  { name: '羊毛衫', value: 20 },
  { name: '雪纺衫', value: 36 },
  { name: '裤子', value: 10 },
  { name: '高跟鞋', value: 10 },
  { name: '袜子', value: 20 }
])

const changeTitle = (newTitle) => {
  title.value = newTitle
  console.log('子组件: 标题已改为', newTitle)
}

const addData = (name, value) => {
  data.value.push({ name, value })
  console.log('子组件: 添加数据', name, value)
}

const clearData = () => {
  data.value = []
  console.log('子组件: 数据已清空')
}

const getData = () => {
  return data.value
}

const setBgColor = (color) => {
  if (chartBox.value) {
    chartBox.value.style.background = color
    console.log('子组件: 背景色已改为', color)
  }
}

const show = () => {
  if (chartBox.value) {
    chartBox.value.style.display = 'flex'
    console.log('子组件: 已显示')
  }
}

const hide = () => {
  if (chartBox.value) {
    chartBox.value.style.display = 'none'
    console.log('子组件: 已隐藏')
  }
}

defineExpose({
  changeTitle,
  addData,
  clearData,
  getData,
  setBgColor,
  show,
  hide
})
</script>

<style scoped>
.base-chart-box {
  width: 400px;
  height: 300px;
  border: 3px solid #000;
  border-radius: 6px;
  background: #409EFF;
  transition: all 0.3s;
}

.chart-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.data-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.data-item {
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
}
</style>