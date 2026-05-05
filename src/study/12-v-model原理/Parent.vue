<template>
  <div class="vmodel-demo">
    <div class="intro">
      <h2>v-model 原理</h2>
      <p>v-model = :value + @input 的语法糖</p>
    </div>

    <div class="demo-section">
      <h4>示例 1：v-model 直接使用</h4>
      <input type="text" v-model="msg1" placeholder="使用 v-model" />
      <p>当前值：<strong>{{ msg1 }}</strong></p>
    </div>

    <div class="demo-section">
      <h4>示例 2：等价写法 :value + @input</h4>
      <input 
        type="text" 
        :value="msg2" 
        @input="msg2 = $event.target.value" 
        placeholder="使用 :value + @input"
      />
      <p>当前值：<strong>{{ msg2 }}</strong></p>
    </div>

    <div class="demo-section">
      <h4>示例 3：v-model 实现双向绑定</h4>
      <CustomInput v-model="msg3" />
      <p>当前值：<strong>{{ msg3 }}</strong></p>
    </div>

    <div class="summary">
      <h4>原理说明</h4>
      <div class="formula">
        <div class="item">
          <code>v-model="msg"</code>
          <span>=</span>
          <code>:value="msg" @input="msg = $event"</code>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CustomInput from './CustomInput.vue'

const msg1 = ref('')
const msg2 = ref('')
const msg3 = ref('Hello v-model!')
</script>

<style scoped>
.vmodel-demo {
  padding: 20px;
  color: white;
}

.intro {
  text-align: center;
  margin-bottom: 30px;
}

.intro h2 {
  margin: 0 0 10px;
  font-size: 28px;
}

.intro p {
  margin: 0;
  opacity: 0.8;
}

.demo-section {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

h4 {
  margin: 0 0 15px;
  font-size: 16px;
  color: #ffd700;
}

input {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 16px;
  box-sizing: border-box;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

input:focus {
  outline: none;
  border-color: #ffd700;
}

p {
  margin: 15px 0 0;
  font-size: 14px;
}

strong {
  color: #ffd700;
  font-size: 18px;
}

.summary {
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 10px;
}

.summary h4 {
  margin: 0 0 15px;
  color: white;
}

.formula {
  background: rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 8px;
}

.item {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

code {
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;
  color: #ffd700;
}

span {
  color: rgba(255, 255, 255, 0.6);
}
</style>