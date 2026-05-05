<template>
  <div class="validator-demo">
    <h2>Props Validator 验证器演示</h2>
    <p class="subtitle">打开浏览器控制台查看验证信息</p>
    
    <div class="demo-section">
      <BaseProgress :w="width" />
    </div>
    
    <div class="controls">
      <h4>正常范围（1-99）</h4>
      <div class="button-group">
        <button @click="width = 25">25%</button>
        <button @click="width = 50">50%</button>
        <button @click="width = 75">75%</button>
      </div>
      
      <h4>非法值（会触发警告）</h4>
      <div class="button-group danger">
        <button @click="width = 0">0%（非法）</button>
        <button @click="width = 100">100%（非法）</button>
        <button @click="width = 150">150%（非法）</button>
        <button @click="width = -10">-10%（非法）</button>
      </div>
      
      <div class="current-value">
        当前值：<strong>{{ width }}</strong>
        <span :class="{ 'warning': isWarning }">
          {{ isWarning ? '⚠️ 非法值' : '' }}
        </span>
      </div>
    </div>
    
    <div class="code-explanation">
      <h4>Validator 代码解释</h4>
      <pre v-text="codeText"></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseProgress from './BaseProgress.vue'

const width = ref(30)

const isWarning = computed(() => {
  return width.value <= 0 || width.value >= 100
})

const codeText = `props: {
  w: {
    type: Number,         // 类型：必须是数字
    required: true,      // 必填
    default: 0,          // 默认值
    
    validator(val) {
      // val 是传入的值
      if (val >= 100 || val <= 0) {
        // 返回 false → 控制台报警告
        console.error('范围必须是 0-100')
        return false
      }
      return true  // 返回 true → 验证通过
    }
  }
}`
</script>

<style scoped>
.validator-demo {
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
  margin: 0 0 12px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.button-group.danger {
  margin-bottom: 0;
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

.button-group.danger button {
  background: rgba(231, 76, 60, 0.3);
  border: 2px solid rgba(231, 76, 60, 0.5);
}

.button-group.danger button:hover {
  background: rgba(231, 76, 60, 0.5);
}

.current-value {
  text-align: center;
  font-size: 18px;
  margin-top: 15px;
}

.current-value strong {
  font-size: 28px;
  color: #f5576c;
}

.current-value span {
  margin-left: 10px;
}

.current-value span.warning {
  color: #e74c3c;
  font-weight: bold;
}

.code-explanation {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
}

.code-explanation h4 {
  margin: 0 0 15px;
}

.code-explanation pre {
  margin: 0;
  background: rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
  white-space: pre-wrap;
}
</style>