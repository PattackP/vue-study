<template>
  <div class="loading-demo">
    <h2>v-loading 指令封装</h2>

    <div class="section">
      <h3>基本用法</h3>
      <p>使用 v-loading="isLoading" 控制加载状态</p>

      <div class="control">
        <button @click="toggleLoading">切换加载状态</button>
      </div>

      <div v-loading="isLoading" class="content-box">
        <p>这是一段内容</p>
        <p>加载时会显示遮罩层</p>
      </div>
    </div>

    <div class="section">
      <h3>模拟异步请求</h3>
      <p>点击按钮模拟 2 秒加载</p>

      <div class="control">
        <button @click="simulateRequest">发送请求</button>
      </div>

      <div v-loading="loading2" class="content-box">
        <p>请求结果：{{ result || '暂无数据' }}</p>
      </div>
    </div>

    <div class="section">
      <h3>代码示例</h3>

      <div class="code-box">
        <code>// 局部注册</code>
        <code>const vLoading = &#123;</code>
        <code>  beforeMount(el, binding) &#123;</code>
        <code>    if (binding.value) &#123;</code>
        <code>      el.style.position = 'relative'</code>
        <code>      const mask = document.createElement('div')</code>
        <code>      mask.className = 'loading-mask'</code>
        <code>      mask.innerHTML = '&lt;div class="spinner"&gt;&lt;/div&gt;'</code>
        <code>      el.appendChild(mask)</code>
        <code>    &#125;</code>
        <code>  &#125;</code>
        <code>&#125;</code>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLoading = ref(false)
const loading2 = ref(false)
const result = ref('')

const toggleLoading = () => {
  isLoading.value = !isLoading.value
}

const simulateRequest = async () => {
  loading2.value = true
  result.value = ''

  await new Promise(resolve => setTimeout(resolve, 2000))

  result.value = '数据加载完成！'
  loading2.value = false
}

const vLoading = {
  beforeMount(el, binding) {
    if (binding.value) {
      el.style.position = 'relative'
      const mask = document.createElement('div')
      mask.className = 'loading-mask'
      mask.innerHTML = '<div class="spinner"></div>'
      el.appendChild(mask)
    }
  },
  updated(el, binding) {
    if (binding.value) {
      el.style.position = 'relative'
      if (!el.querySelector('.loading-mask')) {
        const mask = document.createElement('div')
        mask.className = 'loading-mask'
        mask.innerHTML = '<div class="spinner"></div>'
        el.appendChild(mask)
      }
    } else {
      const mask = el.querySelector('.loading-mask')
      if (mask) {
        mask.remove()
      }
    }
  },
  unmounted(el) {
    const mask = el.querySelector('.loading-mask')
    if (mask) {
      mask.remove()
    }
  }
}

defineExpose({ vLoading })
</script>

<style scoped>
.loading-demo {
  padding: 20px;
  color: white;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}

.section {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

h3 {
  margin: 0 0 10px;
  color: #ffd700;
}

.section > p {
  margin: 0 0 15px;
  opacity: 0.8;
}

.control {
  margin-bottom: 15px;
}

.control button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: #409EFF;
  color: white;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
}

.control button:hover {
  background: #66b1ff;
}

.content-box {
  background: rgba(0, 0, 0, 0.2);
  padding: 30px;
  border-radius: 10px;
  min-height: 100px;
}

.content-box p {
  margin: 0;
  line-height: 1.6;
}

.code-box {
  background: rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 8px;
}

.code-box code {
  display: block;
  font-size: 12px;
  color: #67c23a;
  font-family: monospace;
  margin-bottom: 5px;
}
</style>

<style>
.loading-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: inherit;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top-color: #409EFF;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>