<template>
  <div class="unidirectional-demo">
    <h2>单向数据流原则</h2>
    <p class="subtitle">子组件不能直接修改 props，必须通过 emit 通知父组件</p>
    
    <div class="flow-diagram">
      <div class="flow-item parent">
        <span class="label">父组件</span>
        <span class="value">count = {{ count }}</span>
      </div>
      <div class="arrow">↓ props</div>
      <div class="flow-item child">
        <span class="label">子组件</span>
        <span class="value">显示 {{ propsCount }}</span>
      </div>
      <div class="arrow">↑ emit('changeCount', newValue)</div>
      <div class="flow-item parent">
        <span class="label">父组件</span>
        <span class="value">修改 count = {{ count }}</span>
      </div>
    </div>
    
    <div class="demo-section">
      <BaseCount :count="count" @changeCount="handleChange" />
    </div>
    
    <div class="explanation">
      <h4>单向数据流流程</h4>
      <ol>
        <li>父组件定义 `count: 100`</li>
        <li>通过 `:count="count"` 传给子组件</li>
        <li>子组件通过 `props.count` 获取值并显示</li>
        <li>点击按钮时，子组件用 `emit('changeCount', newVal)` 通知父组件</li>
        <li>父组件收到通知，修改自己的 `count`</li>
        <li>数据再次从父组件流向子组件</li>
      </ol>
      
      <div class="warning">
        <strong>⚠️ 重要原则：</strong>
        子组件永远不要直接修改 props！
        <br>
        <code>count++  // ❌ 错误！不能直接修改 props</code>
        <br>
        <code>emit('changeCount', count + 1)  // ✅ 正确！通知父组件</code>
      </div>
    </div>
  </div>
</template>

<!-- Vue 2 写法对比 -->
<!--
<template>
  <div class="unidirectional-demo">
    <BaseCount :count="count" @changeCount="handleChange" />
  </div>
</template>

<script>
import BaseCount from './BaseCount.vue'
export default {
  components: { BaseCount },
  data() {
    return {
      count: 100,
      propsCount: 100
    }
  },
  methods: {
    handleChange(newVal) {
      this.count = newVal
      this.propsCount = newVal
    }
  }
}
</script>
-->

<script setup>
import { ref } from 'vue'
import BaseCount from './BaseCount.vue'

const count = ref(100)
const propsCount = ref(100)

const handleChange = (newVal) => {
  count.value = newVal
  propsCount.value = newVal
}
</script>

<style scoped>
.unidirectional-demo {
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

.flow-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
}

.flow-item {
  padding: 15px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.flow-item.parent {
  background: rgba(52, 152, 219, 0.3);
  border: 2px solid #3498db;
}

.flow-item.child {
  background: rgba(155, 89, 182, 0.3);
  border: 2px solid #9b59b6;
}

.flow-item .label {
  font-size: 14px;
  opacity: 0.8;
}

.flow-item .value {
  font-size: 18px;
  font-weight: bold;
}

.arrow {
  font-size: 14px;
  opacity: 0.7;
}

.demo-section {
  margin-bottom: 30px;
}

.explanation {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
}

.explanation h4 {
  margin: 0 0 15px;
}

.explanation ol {
  margin: 0 0 20px;
  padding-left: 25px;
}

.explanation li {
  margin-bottom: 8px;
  line-height: 1.6;
}

.warning {
  background: rgba(231, 76, 60, 0.2);
  border: 2px solid rgba(231, 76, 60, 0.5);
  border-radius: 10px;
  padding: 15px;
  line-height: 2;
}

.warning strong {
  color: #e74c3c;
}

.warning code {
  background: rgba(0, 0, 0, 0.3);
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 14px;
}
</style>