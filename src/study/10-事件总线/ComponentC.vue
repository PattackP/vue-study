<template>
  <div class="component-c">
    <h3>组件 C（双向通信）</h3>
    <p class="desc">组件 A 和 B 也能收到 C 的消息</p>
    
    <div class="actions">
      <button @click="sendToAll('Hello from C!')">
        发送给 A 和 B
      </button>
      <button @click="sendToAll('C says hi!')">
        C 说 hello
      </button>
    </div>
    
    <div class="status">
      <p>本组件事件监听数：<strong>{{ listenerCount }}</strong></p>
      <button @click="listenerCount++">增加监听计数</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import emitter from './emitter.js'

const listenerCount = ref(0)

const sendToAll = (msg) => {
  // 同时触发两个事件
  emitter.emit('message-to-b', `[C] ${msg}`)
  emitter.emit('message-from-c', msg)
}

onMounted(() => {
  // 组件 C 也能收到其他组件发送的消息
  emitter.on('message-from-a', (msg) => {
    console.log('C 收到 A 的消息：', msg)
  })
})

onUnmounted(() => {
  emitter.off('message-from-a')
})
</script>

<style scoped>
.component-c {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  padding: 20px;
  border-radius: 10px;
  color: white;
  margin-bottom: 20px;
}

h3 {
  margin: 0 0 5px;
  font-size: 18px;
}

.desc {
  margin: 0 0 15px;
  opacity: 0.8;
  font-size: 14px;
}

.actions {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

button {
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 14px;
}

button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.status {
  background: rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 5px;
}

.status p {
  margin: 0 0 10px;
}

.status strong {
  font-size: 20px;
  color: #ffd700;
}
</style>