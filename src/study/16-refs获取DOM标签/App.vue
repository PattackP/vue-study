<template>
  <div class="app">
    <h2>ref 获取组件实例并调用方法</h2>

    <div class="demo-area">
      <div class="chart-section">
        <BaseChart ref="chartRef"></BaseChart>
      </div>

      <div class="control-panel">
        <h3>控制面板</h3>

        <div class="control-group">
          <h4>操作图表</h4>
          <button @click="changeTitle">改标题</button>
          <button @click="addNewData">添加数据</button>
          <button @click="clearData">清空数据</button>
          <button @click="getData">获取数据</button>
        </div>

        <div class="control-group">
          <h4>样式控制</h4>
          <button @click="setColor('red')">红色</button>
          <button @click="setColor('green')">绿色</button>
          <button @click="setColor('purple')">紫色</button>
          <button @click="setColor('#409EFF')">蓝色</button>
        </div>

        <div class="control-group">
          <h4>显示/隐藏</h4>
          <button @click="showChart">显示</button>
          <button @click="hideChart">隐藏</button>
        </div>

        <div class="result-area">
          <h4>操作结果</h4>
          <div id="result">{{ result }}</div>
        </div>
      </div>
    </div>

    <div class="info-box">
      <h4>说明</h4>
      <p><strong>ref="chartRef"</strong> 获取的是子组件实例</p>
      <p><strong>chartRef.value</strong> 是组件对象，可以调用 defineExpose 暴露的方法</p>
      <p><strong>chartRef.value.$el</strong> 是组件的根 DOM 元素</p>
    </div>
  </div>
</template>

<!-- Vue 2 写法对比 -->
<!--
<template>
  <div class="app">
    <BaseChart ref="chartRef"></BaseChart>
  </div>
</template>

<script>
import BaseChart from './BaseChart.vue'
export default {
  components: { BaseChart },
  data() {
    return {
      result: '等待操作...'
    }
  },
  methods: {
    changeTitle() {
      this.$refs.chartRef.changeTitle('新标题-' + Date.now())
      this.showResult('调用了 changeTitle 方法')
    },
    showResult(msg) {
      this.result = msg
    }
  }
}
</script>
-->

<script setup>
import { ref } from 'vue'
import BaseChart from './BaseChart.vue'

const chartRef = ref(null)
const result = ref('等待操作...')

const showResult = (msg) => {
  result.value = msg
  console.log(msg)
}

const changeTitle = () => {
  chartRef.value.changeTitle('新标题-' + Date.now())
  showResult('调用了 changeTitle 方法')
}

const addNewData = () => {
  const names = ['帽子', '围巾', '手套', '包包']
  const name = names[Math.floor(Math.random() * names.length)]
  const value = Math.floor(Math.random() * 50)
  chartRef.value.addData(name, value)
  showResult(`添加了数据: ${name} = ${value}`)
}

const clearData = () => {
  chartRef.value.clearData()
  showResult('数据已清空')
}

const getData = () => {
  const data = chartRef.value.getData()
  showResult('当前数据: ' + JSON.stringify(data))
}

const setColor = (color) => {
  chartRef.value.setBgColor(color)
  showResult(`背景色已改为 ${color}`)
}

const showChart = () => {
  chartRef.value.show()
  showResult('图表已显示')
}

const hideChart = () => {
  chartRef.value.hide()
  showResult('图表已隐藏')
}
</script>

<style scoped>
.app {
  padding: 20px;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.demo-area {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.chart-section {
  flex-shrink: 0;
}

.control-panel {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  min-width: 400px;
}

h3 {
  margin: 0 0 20px;
  color: #333;
}

h4 {
  margin: 15px 0 10px;
  color: #666;
  font-size: 14px;
}

.control-group {
  margin-bottom: 10px;
}

button {
  padding: 8px 15px;
  margin: 5px 5px 5px 0;
  border: none;
  border-radius: 5px;
  background: #409EFF;
  color: white;
  cursor: pointer;
  font-size: 13px;
}

button:hover {
  background: #66b1ff;
}

.result-area {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #ddd;
}

#result {
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  min-height: 40px;
  font-size: 13px;
  color: #666;
  word-break: break-all;
}

.info-box {
  margin-top: 30px;
  padding: 15px;
  background: #e8f4ff;
  border-radius: 10px;
  border-left: 4px solid #409EFF;
}

.info-box h4 {
  margin: 0 0 10px;
  color: #333;
}

.info-box p {
  margin: 5px 0;
  font-size: 13px;
  color: #666;
}
</style>