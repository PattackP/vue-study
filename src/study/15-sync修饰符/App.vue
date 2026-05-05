<template>
  <div class="app">
    <h2>sync 修饰符 vs v-model</h2>
    <p class="subtitle">.sync 是 Vue 2 语法，Vue 3 用 v-model:xxx 代替</p>

    <div class="demo-container">
      <div class="demo-box">
        <h3>Vue 2 - .sync 修饰符</h3>
        <pre>
父组件：
  :visible.sync="dialogVisible"
子组件：
  this.$emit('update:visible', false)
        </pre>
        <p class="note">Vue 2 中 .sync 等于 :visible + @update:visible</p>
      </div>

      <div class="demo-box">
        <h3>Vue 3 - v-model 多属性</h3>
        <pre>
父组件：
  v-model:visible="dialogVisible"
子组件：
  emit('update:visible', false)
        </pre>
        <p class="note">Vue 3 统一用 v-model:xxx 语法</p>
      </div>
    </div>

    <div class="example">
      <h3>弹框示例</h3>
      <button @click="openDialog">打开弹框</button>

      <Dialog
        v-model:visible="dialogVisible"
        v-model:title="dialogTitle"
        v-model:content="dialogContent"
      />

      <div class="status">
        <p>visible: <strong>{{ dialogVisible }}</strong></p>
        <p>title: <strong>{{ dialogTitle }}</strong></p>
        <p>content: <strong>{{ dialogContent }}</strong></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from './Dialog.vue'

const dialogVisible = ref(false)
const dialogTitle = ref('提示')
const dialogContent = ref('这是一条消息')

const openDialog = () => {
  dialogVisible.value = true
}
</script>

<style scoped>
.app {
  padding: 20px;
  color: white;
}

h2 {
  text-align: center;
  margin: 0 0 5px;
}

.subtitle {
  text-align: center;
  margin: 0 0 20px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
}

.demo-container {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.demo-box {
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
}

h3 {
  margin: 0 0 15px;
  color: #ffd700;
}

pre {
  background: rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 8px;
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
}

.note {
  margin: 15px 0 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}

.example {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
}

.example h3 {
  margin: 0 0 15px;
  color: #ffd700;
}

button {
  padding: 10px 30px;
  border: none;
  border-radius: 8px;
  background: #ffd700;
  color: #333;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background: #ffaa00;
}

.status {
  margin-top: 20px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.status p {
  margin: 8px 0;
}

strong {
  color: #ffd700;
}
</style>