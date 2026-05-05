<template>
  <div class="father">
    <h2>我是 Father 父组件</h2>
    <p>子组件会向我发送数据，我在这里接收：</p>
    
    <div class="received-area">
      <div class="received-item">
        <span class="label">收到消息：</span>
        <span class="value">{{ receivedMessage || '等待子组件发送...' }}</span>
      </div>
      
      <div class="received-item">
        <span class="label">收到计数：</span>
        <span class="value count">{{ receivedCount || '---' }}</span>
      </div>
      
      <div class="received-item">
        <span class="label">收到对象：</span>
        <span class="value">{{ receivedData ? JSON.stringify(receivedData) : '等待子组件发送...' }}</span>
      </div>
    </div>
    
    <div class="son-wrapper">
      <Son 
        @message="handleMessage"
        @count="handleCount"
        @data="handleData"
      />
    </div>
  </div>
</template>

<!-- Vue 2 写法对比 -->
<!--
<template>
  <div class="father">
    <Son 
      @message="handleMessage"
      @count="handleCount"
      @data="handleData"
    />
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  components: { Son },
  data() {
    return {
      receivedMessage: '',
      receivedCount: '',
      receivedData: null
    }
  },
  methods: {
    handleMessage(msg) {
      this.receivedMessage = msg
    },
    handleCount(count) {
      this.receivedCount = count
    },
    handleData(data) {
      this.receivedData = data
    }
  }
}
</script>
-->

<script setup>
import { ref } from 'vue'
import Son from './Son.vue'

// ============================================
// 接收子组件 emit 的数据
// ============================================

// 存储接收到的数据
const receivedMessage = ref('')
const receivedCount = ref('')
const receivedData = ref(null)


// 接收字符串消息
const handleMessage = (msg) => {
  receivedMessage.value = msg
  console.log('收到子组件消息：', msg)
}

// 接收数字
const handleCount = (count) => {
  receivedCount.value = count
  console.log('收到子组件计数：', count)
}

// 接收对象
const handleData = (data) => {
  receivedData.value = data
  console.log('收到子组件数据：', data)
}


</script>

<style scoped>
.father {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 15px;
  color: white;
  min-height: 400px;
}

h2 {
  margin: 0 0 10px;
  font-size: 28px;
}

p {
  margin: 0 0 25px;
  opacity: 0.9;
}

.received-area {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 25px;
}

.received-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 16px;
}

.received-item:last-child {
  margin-bottom: 0;
}

.label {
  font-weight: bold;
  min-width: 100px;
  color: rgba(255, 255, 255, 0.8);
}

.value {
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 15px;
  border-radius: 5px;
  flex: 1;
}

.value.count {
  font-size: 24px;
  font-weight: bold;
  color: #f5576c;
}

.son-wrapper {
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  padding-top: 20px;
}
</style>