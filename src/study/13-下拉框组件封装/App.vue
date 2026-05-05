<template>
  <div class="select-demo">
    <div class="intro">
      <h2>下拉框组件封装</h2>
      <p>使用 props + emit + v-model 实现父子组件通信</p>
    </div>

    <div class="demo-section">
      <h4>使用 v-model</h4>
      <BaseSelect v-model="cityId" />
      <p class="info">双向绑定：选择后父组件数据自动更新</p>
    </div>

    <div class="demo-section">
      <h4>原理说明</h4>
      <div class="code-block">
        <div class="item">
          <code>v-model="cityId"</code>
          <span>= :model-value + @update:model-value</span>
        </div>
      </div>
    </div>

    <div class="summary">
      <h4>组件封装要点</h4>
      <ul>
        <li><strong>子组件 props：</strong>接收 modelValue</li>
        <li><strong>子组件 emit：</strong>触发 update:modelValue</li>
        <li><strong>父组件：</strong>使用 v-model 双向绑定</li>
      </ul>
    </div>
  </div>
</template>

<!-- Vue 2 写法对比 -->
<!--
<template>
  <div class="select-demo">
    <BaseSelect v-model="cityId" />
  </div>
</template>

<script>
import BaseSelect from './BaseSelect.vue'
export default {
  components: { BaseSelect },
  data() {
    return {
      cityId: '102'
    }
  }
}
</script>
-->

<script setup>
import { ref } from 'vue'
import BaseSelect from './BaseSelect.vue'

const cityId = ref('102')
</script>

<style scoped>
.select-demo {
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
  color: #ffd700;
  font-size: 16px;
}

.info {
  margin: 15px 0 0;
  font-size: 14px;
  opacity: 0.8;
}

.code-block {
  background: rgba(0, 0, 0, 0.3);
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
  padding: 8px 15px;
  border-radius: 5px;
  color: #ffd700;
  font-size: 14px;
}

span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
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

ul {
  margin: 0;
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
  line-height: 1.6;
}

li:last-child {
  margin-bottom: 0;
}
</style>