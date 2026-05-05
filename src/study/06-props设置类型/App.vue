<template>
  <div class="progress-demo">
    <h2>Props 类型设置演示</h2>
    <p class="subtitle">进度条组件 - 演示 props 的类型验证</p>
    
    <div class="demo-section">
      <BaseProgress :w="width" />
    </div>
    
    <div class="controls">
      <h4>调整进度（0-100）</h4>
      <input 
        type="range" 
        min="0" 
        max="100" 
        v-model.number="width"
        class="slider"
      />
      
      <div class="button-group">
        <button @click="width = 0">重置</button>
        <button @click="width = 25">25%</button>
        <button @click="width = 50">50%</button>
        <button @click="width = 75">75%</button>
        <button @click="width = 100">完成</button>
      </div>
      
      <div class="current-value">
        当前值：<strong>{{ width }}</strong>
      </div>
    </div>
    
    <div class="type-info">
      <h4>Props 类型验证说明</h4>
      <ul>
        <li><code>type: Number</code> - 必须是数字类型</li>
        <li><code>required: true</code> - 必填，不能为空</li>
        <li><code>default: 0</code> - 如果没传，默认值是 0</li>
        <li><code>validator</code> - 自定义验证，范围 0-100</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseProgress from './BaseProgress.vue'

const width = ref(30)
</script>

<style scoped>
.progress-demo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 15px;
  color: white;
}

h2 {
  margin: 0 0 10px;
  text-align: center;
}

.subtitle {
  margin: 0 0 30px;
  text-align: center;
  opacity: 0.9;
}

.demo-section {
  margin-bottom: 30px;
}

.controls {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}

h4 {
  margin: 0 0 15px;
  color: rgba(255, 255, 255, 0.8);
}

.slider {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.2);
  outline: none;
  margin-bottom: 20px;
  cursor: pointer;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
}

.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.current-value {
  text-align: center;
  font-size: 18px;
}

.current-value strong {
  font-size: 28px;
  color: #f5576c;
}

.type-info {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 15px;
}

.type-info h4 {
  margin: 0 0 10px;
}

.type-info ul {
  margin: 0;
  padding-left: 20px;
}

.type-info li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.type-info code {
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 14px;
}
</style>