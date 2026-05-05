<template>
  <div class="nexttick-demo">
    <div class="intro">
      <h2>nextTick 异步更新队列</h2>
      <p class="subtitle">数据变化后等待 DOM 更新完成再执行回调</p>
    </div>

    <div class="demo-section">
      <h3>场景：点击编辑，输入框出现后自动聚焦</h3>

      <div class="edit-demo">
        <div v-if="!isEditing" class="display-mode">
          <span class="text" @dblclick="startEdit">{{ displayText }}</span>
          <button @click="startEdit" class="edit-btn">编辑</button>
        </div>

        <div v-else class="edit-mode">
          <input
            ref="inputRef"
            v-model="editText"
            @keyup.enter="saveEdit"
            @keyup.escape="cancelEdit"
            class="edit-input"
            placeholder="输入内容..."
          />
          <div class="edit-actions">
            <button @click="saveEdit" class="save-btn">保存</button>
            <button @click="cancelEdit" class="cancel-btn">取消</button>
          </div>
        </div>
      </div>

      <div class="status-box">
        <p><strong>isEditing:</strong> {{ isEditing }}</p>
        <p><strong>inputRef 是否存在:</strong> {{ inputRefExists }}</p>
      </div>
    </div>

    <div class="demo-section">
      <h3>场景二：修改数据后获取 DOM 高度</h3>

      <div class="box-demo">
        <button @click="expandBox" class="expand-btn">
          {{ isExpanded ? '收缩' : '展开' }}内容
        </button>

        <div ref="boxRef" class="content-box" :class="{ expanded: isExpanded }">
          <p v-for="i in itemCount" :key="i">这是第 {{ i }} 行内容</p>
        </div>

        <div class="height-info">
          <p>当前高度：<strong>{{ boxHeight }}px</strong></p>
          <button @click="getHeight" class="get-height-btn">获取高度</button>
        </div>
      </div>
    </div>

    <div class="explanation">
      <h4>nextTick 执行时机</h4>
      <ol>
        <li>点击"编辑"按钮 → <code>isEditing = true</code></li>
        <li>Vue 检测到变化，触发异步更新队列</li>
        <li><strong>DOM 尚未更新</strong>（inputRef 还是 null）</li>
        <li>调用 <code>nextTick()</code> 等待 DOM 更新完成</li>
        <li>DOM 更新完成后，回调函数执行 → <code>inputRef.value.focus()</code></li>
      </ol>

      <div class="code-flow">
        <div class="flow-item">
          <span class="step">1</span>
          <span>数据变化 isEditing = true</span>
        </div>
        <div class="flow-item">
          <span class="step">2</span>
          <span>Vue 批量更新 DOM</span>
        </div>
        <div class="flow-item highlight">
          <span class="step">3</span>
          <span>nextTick 回调执行 → focus()</span>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Vue 2 写法对比 -->
<!--
<template>
  <div class="nexttick-demo">
    <div v-if="!isEditing">
      <span @dblclick="startEdit">{{ displayText }}</span>
      <button @click="startEdit">编辑</button>
    </div>
    <div v-else>
      <input
        ref="inputRef"
        v-model="editText"
        @keyup.enter="saveEdit"
      />
      <button @click="saveEdit">保存</button>
      <button @click="cancelEdit">取消</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      displayText: '双击编辑这段文字',
      editText: '',
      inputRef: null
    }
  },
  methods: {
    async startEdit() {
      this.isEditing = true
      // 等待 DOM 更新
      await this.$nextTick()
      // 现在可以访问更新后的 DOM
      this.$refs.inputRef.focus()
    },
    saveEdit() {
      this.displayText = this.editText
      this.isEditing = false
    },
    cancelEdit() {
      this.isEditing = false
    }
  }
}
</script>
-->

<script setup>
import { ref, nextTick } from 'vue'

const displayText = ref('双击编辑这段文字')
const isEditing = ref(false)
const editText = ref('')
const inputRef = ref(null)
const inputRefExists = ref(false)

const startEdit = async () => {
  editText.value = displayText.value
  isEditing.value = true

  await nextTick()

  inputRefExists.value = inputRef.value !== null
  if (inputRef.value) {
    inputRef.value.focus()
  }
}

const saveEdit = () => {
  displayText.value = editText.value || displayText.value
  isEditing.value = false
}

const cancelEdit = () => {
  isEditing.value = false
}

const isExpanded = ref(false)
const itemCount = ref(3)
const boxRef = ref(null)
const boxHeight = ref(0)

const expandBox = async () => {
  isExpanded.value = !isExpanded.value

  if (isExpanded.value) {
    itemCount.value = 10
  } else {
    itemCount.value = 3
  }

  await nextTick()

  if (boxRef.value) {
    boxHeight.value = boxRef.value.clientHeight
  }
}

const getHeight = async () => {
  await nextTick()
  if (boxRef.value) {
    boxHeight.value = boxRef.value.clientHeight
  }
}
</script>

<style scoped>
.nexttick-demo {
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

.subtitle {
  margin: 0;
  opacity: 0.8;
  color: rgba(255, 255, 255, 0.8);
}

.demo-section {
  background: rgba(255, 255, 255, 0.1);
  padding: 25px;
  border-radius: 15px;
  margin-bottom: 20px;
}

h3 {
  margin: 0 0 20px;
  color: #ffd700;
  font-size: 18px;
}

.edit-demo {
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
}

.display-mode {
  display: flex;
  align-items: center;
  gap: 15px;
}

.text {
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: background 0.3s;
}

.text:hover {
  background: rgba(255, 255, 255, 0.2);
}

.edit-btn {
  padding: 10px 20px;
  background: #409EFF;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 14px;
}

.edit-mode {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.edit-input {
  padding: 12px 15px;
  font-size: 16px;
  border: 2px solid #409EFF;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  outline: none;
}

.edit-input:focus {
  border-color: #ffd700;
  box-shadow: 0 0 0 3px rgba(64, 158, 255, 0.3);
}

.edit-actions {
  display: flex;
  gap: 10px;
}

.save-btn {
  padding: 10px 25px;
  background: #67c23a;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}

.cancel-btn {
  padding: 10px 25px;
  background: #909399;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}

.status-box {
  margin-top: 15px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.status-box p {
  margin: 5px 0;
  font-size: 14px;
}

.box-demo {
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
}

.expand-btn {
  padding: 10px 25px;
  background: #e6a23c;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  margin-bottom: 15px;
}

.content-box {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.content-box.expanded {
  padding: 15px;
  max-height: 500px;
}

.content-box p {
  margin: 8px 0;
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.height-info {
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.height-info p {
  margin: 0;
}

.get-height-btn {
  padding: 8px 20px;
  background: #409EFF;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}

.explanation {
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
}

.explanation h4 {
  margin: 0 0 15px;
  color: #ffd700;
}

.explanation ol {
  margin: 0 0 20px;
  padding-left: 25px;
}

.explanation li {
  margin-bottom: 10px;
  line-height: 1.8;
  font-size: 14px;
}

.explanation code {
  background: rgba(255, 255, 255, 0.15);
  padding: 3px 10px;
  border-radius: 4px;
  color: #ffd700;
}

.code-flow {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.flow-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 14px;
}

.flow-item.highlight {
  background: rgba(103, 194, 58, 0.3);
  border: 1px solid rgba(103, 194, 58, 0.5);
}

.step {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #409EFF;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
}

.flow-item.highlight .step {
  background: #67c23a;
}
</style>