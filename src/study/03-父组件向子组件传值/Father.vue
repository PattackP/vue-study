<template>
  <div class="father">
    <h2>父组件</h2>
    <p>我正在向子组件传值...</p>
    
    <Son title="父组件传值:Hello Son!" />
  </div>
</template>

<!-- Vue 2 写法对比 -->
<!--
<template>
  <div class="father">
    <h2>父组件</h2>
    <p>我正在向子组件传值...</p>
    <Son title="父组件传值:Hello Son!" />
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  components: {
    Son
  }
}
</script>
-->

<script setup>
import Son from './Son.vue'
</script>

<style scoped>
.father {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 15px;
  color: white;
}

h2 {
  margin: 0 0 10px;
  font-size: 28px;
}

p {
  margin: 0 0 20px;
  opacity: 0.9;
}
</style>