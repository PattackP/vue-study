<template>
  <header class="header">
    <h1>小黑记事本</h1>
    <div class="input-wrapper">
      <input 
        v-model="inputValue"
        placeholder="请输入任务" 
        class="new-todo"
        @keyup.enter="handleAdd"
      />
      <button class="add" @click="handleAdd">添加任务</button>
    </div>
  </header>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const inputValue = ref('')
const emit = defineEmits(['add'])

const handleAdd = () => {
  if (!inputValue.value) {
    alert('请输入任务')
       return
  }
  emit('add', inputValue.value)
  inputValue.value = ''
}


</script>

<style scoped>
.header {
  position: relative;
  padding-top: 10px;
}

.input-wrapper {
  display: flex;
  align-items: stretch;
}

.new-todo {
  flex: 1;
  height: 68px;
  padding: 16px;
  border: 2px solid rgba(175, 47, 47, 0.8);
  border-right: none;
  border-radius: 10px 0 0 10px;
  font-size: 24px;
  font-family: inherit;
  line-height: 1.4em;
  box-sizing: border-box;
  outline: none;
}

.new-todo:focus {
  border-color: rgba(175, 47, 47, 1);
}

.add {
  height: 68px;
  width: 140px;
  background-color: rgba(175, 47, 47, 0.8);
  color: #fff;
  border: none;
  border-radius: 0 10px 10px 0;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add:hover {
  background-color: rgba(175, 47, 47, 1);
}
</style>