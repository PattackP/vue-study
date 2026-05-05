<template>
  <div class="event-bus-demo">
    <div class="intro">
      <h2>非父子组件通信 - 事件总线方案</h2>
      <p>使用 <strong>mitt</strong> 实现任意组件间的通信</p>
    </div>
    
    <div class="components">
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
    
    <div class="summary">
      <h4>核心 API</h4>
      <div class="api-list">
        <div class="api-item">
          <code>emitter.emit('事件名', 数据)</code>
          <span>触发事件</span>
        </div>
        <div class="api-item">
          <code>emitter.on('事件名', 回调)</code>
          <span>监听事件</span>
        </div>
        <div class="api-item">
          <code>emitter.off('事件名', 回调)</code>
          <span>取消监听</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'
import ComponentC from './ComponentC.vue'
</script>

<style scoped>
.event-bus-demo {
  padding: 20px;
}

.intro {
  text-align: center;
  margin-bottom: 30px;
  color: white;
}

.intro h2 {
  margin: 0 0 10px;
  font-size: 28px;
}

.intro p {
  margin: 0;
  opacity: 0.9;
}

.intro strong {
  color: #ffd700;
}

.components {
  max-width: 600px;
  margin: 0 auto 30px;
}

.summary {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.summary h4 {
  margin: 0 0 15px;
  color: white;
  font-size: 18px;
}

.api-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.api-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.api-item code {
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
  color: #ffd700;
  flex: 1;
}

.api-item span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  min-width: 60px;
}
</style>