<template>
  <div class="userinfo">
    <h3>我是个人信息组件</h3>
    
    <div class="info-item">
      <span class="label">姓名：</span>
      <span class="value">{{ username }}</span>
    </div>
    
    <div class="info-item">
      <span class="label">年龄：</span>
      <span class="value">{{ age }}</span>
    </div>
    
    <div class="info-item">
      <span class="label">是否单身：</span>
      <span class="value" :class="{ 'single': isSingle }">
        {{ isSingle ? '是 💕' : '否' }}
      </span>
    </div>
    
    <div class="info-item">
      <span class="label">座驾：</span>
      <span class="value">{{ car.brand }}</span>
    </div>
    
    <div class="info-item">
      <span class="label">兴趣爱好：</span>
      <span class="value hobby">{{ hobby.join('、') }}</span>
    </div>
  </div>
</template>

<script setup>
// ============================================
// props 的几种写法（基于 03-父组件向子组件传值 的笔记）
// ============================================

// 【方式一】数组形式（简单，不推荐）
// props: ['username', 'age', 'isSingle', 'car', 'hobby']

// 【方式二】对象形式 - 简化版
// props: {
//   username: String,
//   age: Number,
//   isSingle: Boolean,
//   car: Object,
//   hobby: Array
// }

// 【方式三】对象形式 - 完整配置（推荐）
defineProps({
  username: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  isSingle: {
    type: Boolean,
    required: true
  },
  car: {
    type: Object,
    required: true
  },
  hobby: {
    type: Array,
    required: true
  }
})

// ============================================
// props 使用注意点
// ============================================
// 1. 模板中直接使用 {{ username }}，不需要 {{ props.username }}
// 2. 如果在 script 中使用，可以用解构：
//    const { username, age } = defineProps()
// 3. props 是只读的，不要在子组件中修改
// 4. 数组和对象是引用传递，修改会影响父组件
</script>

<style scoped>
.userinfo {
  width: 350px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  padding: 25px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
}

h3 {
  text-align: center;
  color: white;
  margin: 0 0 25px;
  font-size: 24px;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  font-size: 16px;
}

.info-item:last-child {
  margin-bottom: 0;
}

.label {
  color: rgba(255, 255, 255, 0.7);
  min-width: 80px;
  font-weight: bold;
}

.value {
  color: white;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 15px;
  border-radius: 8px;
  flex: 1;
}

.value.single {
  color: #f5576c;
  font-weight: bold;
}

.value.hobby {
  letter-spacing: 1px;
}
</style>