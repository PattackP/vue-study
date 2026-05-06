<template>
  <div class="user">
    <h2>用户详情</h2>
    <p>用户ID: {{ $route.params.id }}</p>
    <button @click="goBack">返回上一页</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<style scoped>
.user {
  padding: 20px;
}
.user h2 {
  color: #9b59b6;
  margin-bottom: 15px;
}
.user button {
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.user button:hover {
  background-color: #2980b9;
}
</style>
