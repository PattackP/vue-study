<template>
  <div class="study-app">
    <div class="study-header">
      <h1>Vue 3 学习测试中心</h1>
      <p>点击下方按钮切换不同的测试案例</p>
    </div>

    <div class="study-nav">
      <button 
        v-for="item in testList" 
        :key="item.name"
        :class="{ active: currentView === item.name }" 
        @click="currentView = item.name"
        :title="item.description"
      >
        {{ item.label }}
      </button>
    </div>

    <div class="study-content">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { testList } from './studyConfig.js'

const currentView = ref(testList[0].name)

const currentComponent = computed(() => {
  const found = testList.find(item => item.name === currentView.value)
  return found ? found.component : null
})
</script>

<style>
.study-app {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.study-app * {
  box-sizing: border-box;
}

.study-app h1 {
  margin: 0;
  padding: 0;
}

.study-header {
  text-align: center;
  padding: 40px 20px 20px;
  color: white;
}

.study-header h1 {
  margin: 0 0 10px;
  font-size: 32px;
}

.study-header p {
  margin: 0;
  opacity: 0.9;
}

.study-nav {
  display: flex;
  gap: 10px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  flex-wrap: wrap;
}

.study-nav button {
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  transition: all 0.3s;
  font-family: inherit;
}

.study-nav button:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.study-nav button.active {
  background-color: white;
  color: #667eea;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.study-content {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>