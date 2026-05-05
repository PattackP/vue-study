<template>
  <div class="props-demo">
    <h2>Props 传值演示</h2>
    <p class="subtitle">父组件向子组件传递：字符串、数字、布尔、对象、数组</p>
    
    <UserInfo 
      :username="userData.username" 
      :age="userData.age" 
      :isSingle="userData.isSingle" 
      :car="userData.car" 
      :hobby="userData.hobby" 
    />
    
    <div class="modify-section">
      <h4>点击按钮修改数据（观察子组件变化）</h4>
      <div class="button-group">
        <button @click="changeName">改名字</button>
        <button @click="changeAge">加年龄</button>
        <button @click="toggleSingle">切换单身状态</button>
        <button @click="changeCar">换车</button>
      </div>
      
      <div class="data-preview">
        <p><strong>当前数据：</strong></p>
        <pre>{{ JSON.stringify(userData, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<!-- Vue 2 写法对比 -->
<!--
<template>
  <div class="props-demo">
    <UserInfo 
      :username="userData.username" 
      :age="userData.age" 
      :isSingle="userData.isSingle" 
      :car="userData.car" 
      :hobby="userData.hobby" 
    />
  </div>
</template>

<script>
import UserInfo from './UserInfo.vue'
export default {
  components: { UserInfo },
  data() {
    return {
      userData: {
        username: '小帅',
        age: 28,
        isSingle: true,
        car: { brand: '宝马' },
        hobby: ['篮球', '足球', '羽毛球']
      }
    }
  },
  methods: {
    changeName() {
      // 方法逻辑...
    }
  }
}
</script>
-->

<script setup>
import { reactive } from 'vue'
import UserInfo from './UserInfo.vue'

// ============================================
// 父组件的数据
// ============================================
const userData = reactive({
  username: '小帅',
  age: 28,
  isSingle: true,
  car: {
    brand: '宝马'
  },
  hobby: ['篮球', '足球', '羽毛球']
})

// ============================================
// 修改数据的方法（触发子组件更新）
// ============================================
const changeName = () => {
  const names = ['小明', '小李', '小红', '小张', '小帅']
  userData.username = names[Math.floor(Math.random() * names.length)]
}

const changeAge = () => {
  userData.age++
}

const toggleSingle = () => {
  userData.isSingle = !userData.isSingle
}

const changeCar = () => {
  const cars = ['宝马', '奔驰', '奥迪', '特斯拉', '保时捷']
  userData.car.brand = cars[Math.floor(Math.random() * cars.length)]
}
</script>

<style scoped>
.props-demo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 15px;
  color: white;
}

h2 {
  margin: 0 0 10px;
  text-align: center;
}

.subtitle {
  margin: 0 0 30px;
  text-align: center;
  opacity: 0.9;
}

.modify-section {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid rgba(255, 255, 255, 0.2);
}

h4 {
  margin: 0 0 15px;
  color: rgba(255, 255, 255, 0.8);
}

.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.data-preview {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 15px;
  margin-top: 20px;
}

.data-preview p {
  margin: 0 0 10px;
}

.data-preview pre {
  margin: 0;
  background: rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
}
</style>