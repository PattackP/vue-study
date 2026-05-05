<template>
  <div class="base-count">
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<!-- Vue 2 写法对比 -->
<!--
<template>
  <div class="base-count">
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 100
    }
  }
}
</script>
-->

<script setup>
import { ref } from 'vue'

const count = ref(100)
</script>

<style scoped>
.base-count {
  margin: 20px;
  padding: 20px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  gap: 15px;
}

button {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: white;
  color: #f5576c;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

span {
  font-size: 32px;
  font-weight: bold;
  color: white;
  min-width: 60px;
  text-align: center;
}
</style>