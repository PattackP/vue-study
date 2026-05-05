<template>
  <div class="son">
    <h3>我是 Son 子组件</h3>
    <p class="received-data">接收到的数据：<strong>{{ title }}</strong></p>
    <p class="props-type">props 类型验证通过 ✓</p>
  </div>
</template>

<!-- Vue 2 写法对比 -->
<!--
<template>
  <div class="son">
    <h3>我是 Son 子组件</h3>
    <p class="received-data">接收到的数据：<strong>{{ title }}</strong></p>
    <p class="props-type">props 类型验证通过 ✓</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: '默认值',
      validator: (value) => {
        return value.length > 0
      }
    }
  }
}
</script>
-->

<script setup>
// ============================================
// defineProps 的几种写法
// ============================================

// 【方式一】数组形式（简单，不推荐）
// defineProps(['title', 'content'])

// 【方式二】对象形式（推荐，最常用）
// defineProps({
//   title: String,  // 直接写类型
//   count: Number,
//   isActive: Boolean
// })

// 【方式三】对象形式（带完整配置，最详细）
defineProps({
  title: {
    type: String,           // 类型：String, Number, Boolean, Array, Object, Function, Date, Symbol
    required: true,         // 是否必填：true = 必填，false = 可选
    default: '默认值',      // 默认值：如果没传就用这个
    validator: (value) => {  // 自定义验证函数，返回 true 表示通过
      return value.length > 0
    }
  }
})

// 【方式四】使用解构 + withDefaults（Vue 3.4+，推荐用于需要默认值）
// import { withDefaults } from 'vue'
// const props = withDefaults(defineProps<{
//   title: string
//   count?: number
// }>(), {
//   count: 0
// })

// 【方式五】TypeScript 类型定义（推荐配合 TypeScript 使用）
// defineProps<{
//   title: string
//   count?: number
// }>()

// ============================================
// 注意点
// ============================================
// 1. defineProps 不需要 return，因为 <script setup> 自动暴露到模板
// 2. 在模板中使用时，直接写 {{ title }}，不需要写 props.title
// 3. 如果需要在 script 中使用，需要用解构：const { title } = defineProps()
</script>

<style scoped>
.son {
  border: 3px solid rgba(255, 255, 255, 0.3);
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
}

h3 {
  margin: 0 0 15px;
  font-size: 22px;
}

.received-data {
  margin: 10px 0;
  font-size: 18px;
}

.received-data strong {
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 10px;
  border-radius: 5px;
}

.props-type {
  margin: 15px 0 0;
  color: #90EE90;
  font-size: 14px;
}
</style>