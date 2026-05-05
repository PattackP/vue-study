<template>
  <div class="select-demo">
    <h2>v-model 多属性绑定</h2>
    <p>3 个下拉框，每个用不同的 v-model 属性名</p>

    <div class="box-container">
      <div class="box">
        <h3>下拉框1</h3>
        <BaseSelect
          v-model="city1"
          v-model:label="label1"
          v-model:placeholder="tip1"
        />
      </div>

      <div class="box">
        <h3>下拉框2</h3>
        <BaseSelect
          v-model="city2"
          v-model:label="label2"
          v-model:placeholder="tip2"
        />
      </div>

      <div class="box">
        <h3>下拉框3</h3>
        <BaseSelect
          v-model="city3"
          v-model:label="label3"
          v-model:placeholder="tip3"
        />
      </div>
    </div>

    <div class="summary">
      <h4>父组件数据</h4>
      <div class="data-row">
        <span>city1: <strong>{{ city1 }}</strong></span>
        <span>label1: <strong>{{ label1 }}</strong></span>
        <span>tip1: <strong>{{ tip1 }}</strong></span>
      </div>
      <div class="data-row">
        <span>city2: <strong>{{ city2 }}</strong></span>
        <span>label2: <strong>{{ label2 }}</strong></span>
        <span>tip2: <strong>{{ tip2 }}</strong></span>
      </div>
      <div class="data-row">
        <span>city3: <strong>{{ city3 }}</strong></span>
        <span>label3: <strong>{{ label3 }}</strong></span>
        <span>tip3: <strong>{{ tip3 }}</strong></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseSelect from './BaseSelect.vue'

const city1 = ref('101')
const label1 = ref('城市1')
const tip1 = ref('请选择城市')

const city2 = ref('102')
const label2 = ref('城市2')
const tip2 = ref('请选择城市')

const city3 = ref('103')
const label3 = ref('城市3')
const tip3 = ref('请选择城市')
</script>

<style scoped>
.select-demo {
  padding: 20px;
  color: white;
}

h2 {
  text-align: center;
  margin: 0 0 10px;
}

.box-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.box {
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 10px;
}

.box h3 {
  margin: 0 0 15px;
  color: #ffd700;
  text-align: center;
}

.summary {
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 10px;
}

h4 {
  margin: 0 0 15px;
  color: #ffd700;
}

.data-row {
  display: flex;
  gap: 30px;
  margin: 10px 0;
  flex-wrap: wrap;
}

.data-row span {
  color: rgba(255, 255, 255, 0.8);
}

strong {
  color: #ffd700;
}
</style>