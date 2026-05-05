<template>
  <div class="base-progress">
    <div class="progress-bar">
      <div 
        class="inner" 
        :style="{ width: w + '%' }"
        :class="progressClass"
      ></div>
    </div>
    <div class="progress-info">
      <span>进度：{{ w }}%</span>
      <span class="status">{{ statusText }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  w: {
    type: Number,
    required: true,
    default: 0,
    validator: (value) => {
      return value >= 0 && value <= 100
    }
  }
})

const progressClass = computed(() => {
  if (props.w >= 80) return 'high'
  if (props.w >= 50) return 'medium'
  return 'low'
})

const statusText = computed(() => {
  if (props.w >= 100) return '完成！🎉'
  if (props.w >= 80) return '即将完成'
  if (props.w >= 50) return '进行中...'
  if (props.w >= 1) return '刚起步'
  return '等待开始'
})

// ============================================
// props 类型设置的方式
// ============================================

// 【方式一】直接写类型
// props: { w: Number }

// 【方式二】数组形式（仅声明，不验证类型）
// props: ['w']

// 【方式三】对象形式 - 带类型（推荐）
// props: {
//   w: {
//     type: Number,      // 类型：String, Number, Boolean, Array, Object, Function, Date
//     required: true,   // 是否必填
//     default: 0         // 默认值
//   }
// }

// 【方式四】对象形式 - 带验证函数
// props: {
//   w: {
//     type: Number,
//     validator: (value) => {
//       return value >= 0 && value <= 100  // 验证范围 0-100
//     }
//   }
// }

// 【方式五】TypeScript 类型定义
// defineProps<{
//   w: number
// }>()

// ============================================
// 当前使用的是【方式三】- 最常用
// ============================================


</script>

<style scoped>
.base-progress {
  width: 400px;
  margin: 20px auto;
}

.progress-bar {
  height: 26px;
  width: 100%;
  border-radius: 15px;
  background-color: #272425;
  border: 3px solid #272425;
  box-sizing: border-box;
  overflow: hidden;
}

.inner {
  position: relative;
  border-radius: 15px;
  height: 25px;
  box-sizing: border-box;
  left: -3px;
  top: -2px;
  transition: width 0.5s ease;
}

.inner.low {
  background: linear-gradient(90deg, #379bff, #67c8ff);
}

.inner.medium {
  background: linear-gradient(90deg, #f093fb, #f5576c);
}

.inner.high {
  background: linear-gradient(90deg, #11998e, #38ef7d);
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}

.status {
  font-weight: bold;
}
</style>