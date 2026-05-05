<template>
  <div class="child-component">
    <h4>Level 4（孙组件）</h4>
    
    <div class="display">
      <div class="item">
        <span class="label">用户名：</span>
        <span class="value">{{ user?.name }}</span>
      </div>
      <div class="item">
        <span class="label">年龄：</span>
        <span class="value">{{ user?.age }}</span>
      </div>
      <div class="item">
        <span class="label">主题：</span>
        <span class="value">{{ theme }}</span>
      </div>
      <div class="item">
        <span class="label">用户名字：</span>
        <span class="value">{{ userName?.() }}</span>
      </div>
    </div>

    <div class="actions">
      <button @click="updateUser">年龄+1（通过 inject 来的方法）</button>
      <button @click="user.age++">直接修改（不推荐）</button>
    </div>

    <div class="explain">
      <h5>💡 注入来源</h5>
      <ul>
        <li>数据来自 Level 1（曾祖父组件）</li>
        <li>中间经过了 Level 2、Level 3</li>
        <li>但孙组件不需要逐层接收</li>
        <li>直接通过 inject 获取即可</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

// 注入祖先组件提供的数据
const user = inject('user')
const theme = inject('theme')

// 注入祖先组件提供的方法
const updateUser = inject('updateUser')

// 注入计算属性（函数形式）
const userName = inject('userName')

// inject 也可以设置默认值：
// const color = inject('color', 'blue')
</script>

<style scoped>
.child-component {
  background: rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 10px;
}

h4 {
  margin: 0 0 15px;
  font-size: 16px;
}

.display {
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.item {
  display: flex;
  margin-bottom: 10px;
}

.item:last-child {
  margin-bottom: 0;
}

.label {
  min-width: 80px;
  opacity: 0.8;
}

.value {
  font-weight: bold;
  color: #ffd700;
}

.actions {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

button {
  padding: 8px 15px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  transition: background 0.3s;
}

button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.explain {
  background: rgba(255, 255, 255, 0.1);
  padding: 12px;
  border-radius: 8px;
}

h5 {
  margin: 0 0 10px;
  font-size: 14px;
}

ul {
  margin: 0;
  padding-left: 20px;
  font-size: 12px;
  opacity: 0.8;
}

li {
  margin-bottom: 5px;
}
</style>