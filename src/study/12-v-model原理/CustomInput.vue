<template>
  <div class="custom-input">
    <input 
      type="text" 
      :value="modelValue" 
      @input="handleInput"
      placeholder="子组件输入框"
    />
    <p class="tip">子组件中使用 emit('update:modelValue') 更新父组件数据</p>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
.custom-input {
  background: rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 8px;
}

input {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 16px;
  box-sizing: border-box;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

input:focus {
  outline: none;
  border-color: #ffd700;
}

.tip {
  margin: 10px 0 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
}
</style>