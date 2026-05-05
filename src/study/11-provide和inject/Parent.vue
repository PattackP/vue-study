<template>
  <div class="provide-inject-demo">
    <div class="intro">
      <h2>Provide / Inject</h2>
      <p>祖先组件向后代组件传递数据，无需层层传递 props</p>
    </div>

    <div class="level-1">
      <h4>Level 1（曾祖父组件）</h4>
      <p class="info">提供数据：user 和 theme</p>
      <button @click="updateUser">更新用户</button>

      <div class="level-2">
        <h4>Level 2（祖父组件）</h4>
        <p class="info">无需接收，直接使用</p>

        <div class="level-3">
          <h4>Level 3（父组件）</h4>
          <p class="info">也无需接收，直接使用</p>

          <ChildComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

// 祖先组件提供数据
const user = ref({ name: '张三', age: 25 })
const theme = ref('dark')

// 提供给后代组件使用
provide('user', user)
provide('theme', theme)

// 提供方法给后代组件修改数据
provide('updateUser', () => {
  user.value.age++
})

// 提供计算属性
provide('userName', () => user.value.name)
</script>

<style scoped>
.provide-inject-demo {
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

.level-1, .level-2, .level-3 {
  padding: 15px;
  border-radius: 10px;
  margin-top: 15px;
}

.level-1 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.level-2 {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  margin-left: 30px;
}

.level-3 {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  margin-left: 30px;
}

h4 {
  margin: 0 0 10px;
  font-size: 16px;
}

.info {
  margin: 5px 0 15px;
  font-size: 14px;
  opacity: 0.8;
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
</style>