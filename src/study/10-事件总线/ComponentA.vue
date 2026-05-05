<template>
  <div class="component-a">
    <h3>组件 A（发送者）</h3>
    <div class="sender">
      <input 
        v-model="message" 
        placeholder="输入要发送的消息..."
        @keyup.enter="sendMessage"
      />
      <button @click="sendMessage">发送给 B</button>
    </div>
    <div class="counter">
      <p>已发送消息数量：<strong>{{ sendCount }}</strong></p>
      <button @click="sendCount++">增加发送计数</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emitter from './emitter.js'

const message = ref('')
const sendCount = ref(0)

const sendMessage = () => {
  if (message.value.trim()) {
    // 触发事件，发送消息
    emitter.emit('message-to-b', message.value)
    message.value = ''
  }
}
</script>

<style scoped>
.component-a {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  border-radius: 10px;
  color: white;
  margin-bottom: 20px;
}

h3 {
  margin: 0 0 15px;
  font-size: 18px;
}

.sender {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

input {
  flex: 1;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
}

button {
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.counter {
  background: rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 5px;
}

.counter p {
  margin: 0 0 10px;
}

.counter strong {
  font-size: 20px;
  color: #ffd700;
}
</style>