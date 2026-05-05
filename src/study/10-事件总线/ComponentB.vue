<template>
  <div class="component-b">
    <h3>组件 B（接收者）</h3>
    <div class="receiver">
      <div v-if="messages.length === 0" class="no-message">
        暂无消息，等待 A 发送...
      </div>
      <ul v-else class="message-list">
        <li v-for="(msg, index) in messages" :key="index">
          {{ msg }}
        </li>
      </ul>
    </div>
    <div class="counter">
      <p>收到消息数量：<strong>{{ receiveCount }}</strong></p>
      <button @click="receiveCount++">增加接收计数</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import emitter from './emitter.js'

const messages = ref([])
const receiveCount = ref(0)

// 处理收到的消息
const handleMessage = (msg) => {
  messages.value.unshift(msg)
  receiveCount.value++
}

// 组件挂载时监听事件
onMounted(() => {
  emitter.on('message-to-b', handleMessage)
})

// 组件卸载时移除监听
onUnmounted(() => {
  emitter.off('message-to-b', handleMessage)
})
</script>

<style scoped>
.component-b {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  padding: 20px;
  border-radius: 10px;
  color: white;
  margin-bottom: 20px;
}

h3 {
  margin: 0 0 15px;
  font-size: 18px;
}

.receiver {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
  min-height: 100px;
}

.no-message {
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  text-align: center;
  padding: 30px;
}

.message-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.message-list li {
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 8px;
  border-radius: 5px;
  word-break: break-all;
}

.message-list li:last-child {
  margin-bottom: 0;
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

button {
  padding: 8px 16px;
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
</style>