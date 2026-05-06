<template>
  <div class="my-tag">
    <input
      v-if="isEdit"
      ref="inp"
      class="input"
      type="text"
      placeholder="输入标签"
      :value="modelValue"
      @blur="isEdit = false"
      @keyup.enter="handleEnter"
    />
    <div
      v-else
      @dblclick="handleClick"
      class="text"
    >
      {{ modelValue }}
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const isEdit = ref(false)
const inp = ref(null)

const handleClick = async () => {
  isEdit.value = true
  await nextTick(() => {
    inp.value.focus()
  })
}

const handleEnter = (e) => {
  if (!e.target.value) {
    alert('标签内容不能为空')
    return
  }
  emit('update:modelValue', e.target.value)
  isEdit.value = false
}
</script>

<style scoped>
.my-tag {
  cursor: pointer;
}
.my-tag .input {
  appearance: none;
  outline: none;
  border: 1px solid #ccc;
  width: 100px;
  height: 40px;
  box-sizing: border-box;
  padding: 10px;
  color: #666;
}
.my-tag .input::placeholder {
  color: #666;
}
</style>