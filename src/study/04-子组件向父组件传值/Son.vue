<template>
  <div class="son">
    <h3>我是 Son 子组件</h3>
    <p>点击按钮，向父组件发送数据</p>
    
    <div class="button-group">
      <!-- 方式一：使用 emit 发送数据 -->
      <button @click="sendToFather('Hello Father!')">
        发送消息
      </button>
      
      <button @click="sendCount">
        发送计数器：{{ count }}
      </button>
      
      <button @click="sendObject">
        发送对象数据
      </button>
    </div>
    
    <div class="demo-code">
      <p>计数器当前值：<strong>{{ count }}</strong></p>
      <button class="btn-counter" @click="count++">点我 +1</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// ============================================
// 子组件向父组件传值的方式
// ============================================
const count = ref(100)

// 【方式一】emit 事件（最常用）✅ 当前使用
// 父组件用 @事件名="处理函数" 来监听
const emit = defineEmits(['message', 'count', 'data'])

// 发送字符串消息
const sendToFather = (msg) => {
  emit('message', msg)  // 触发 message 事件，传递 msg
}

// 发送数字
const sendCount = () => {
  emit('count', count.value)
}

// 发送对象
const sendObject = () => {
  emit('data', {
    name: 'Tom',
    age: 18,
    from: 'Son Component'
  })
}

// ============================================
// 【方式二】v-model 双向绑定
// ============================================
// 子组件：
// const props = defineProps(['modelValue'])
// const emit = defineEmits(['update:modelValue'])
// emit('update:modelValue', newValue)
//
// 父组件：
// <Son v-model="count" />
//
// 效果：子组件修改值会直接影响父组件，反之亦然

// ============================================
// 【方式三】.sync 修饰符（Vue 2 常用，Vue 3 已废弃）
// ============================================
// Vue 2 写法：
// 父组件：<Son :visible.sync="show" />
// 子组件：this.$emit('update:visible', false)
//
// Vue 3 中已移除，推荐使用 v-model 代替

// ============================================
// 【方式四】回调函数（通过 props 传递函数）
// ============================================
// 父组件：
// <Son :onChange="handleChange" />
//
// 子组件：
// props.onChange(value)
// 这种方式较少用，一般用 emit

// ============================================
// 【方式五】依赖注入 provide/inject
// ============================================
// 不需要通过父组件，一级一级传递
// 可以跨多层传递数据，但会增加耦合

// ============================================
// 推荐：emit 事件方式
// ============================================
// 优点：
// 1. 清晰明了，数据流明确
// 2. 父组件明确知道子组件传了什么
// 3. 易于调试和维护


</script>

<style scoped>
.son {
  border: 3px solid rgba(255, 255, 255, 0.3);
  margin: 20px 0;
  padding: 25px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
}

h3 {
  margin: 0 0 10px;
  font-size: 24px;
  color: white;
}

p {
  margin: 0 0 20px;
  color: rgba(255, 255, 255, 0.9);
}

.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 25px;
}

button {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);
}

.demo-code {
  margin-top: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.demo-code p {
  margin-bottom: 15px;
  font-size: 18px;
}

.demo-code strong {
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 22px;
}

.btn-counter {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 15px 30px;
  font-size: 16px;
}
</style>