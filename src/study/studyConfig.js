import BaseCount02 from './02-工程化状态下的data是一个函数/BaseCount.vue'
import Father03 from './03-父组件向子组件传值/Father.vue'
import Father04 from './04-子组件向父组件传值/Father.vue'
import PropsApp from './05-props传值/App.vue'
import ProgressApp from './06-props设置类型/App.vue'
import ValidatorApp from './07-props类型检查/App.vue'
import UnidirectionalApp from './08-单向数据流/App.vue'
import TodoApp from './09-小黑记事本/TodoApp.vue'
import EventBusApp from './10-事件总线/App.vue'
import ProvideInjectApp from './11-provide和inject/App.vue'
import VModelApp from './12-v-model原理/App.vue'
import SelectApp from './13-下拉框组件封装/App.vue'
import VModelSelectApp from './14-v-model封装下拉框/App.vue'
import SyncApp from './15-sync修饰符/App.vue'
import RefsApp from './16-refs获取DOM标签/App.vue'
import NextTickApp from './17-$nextTick/App.vue'
import DirectiveApp from './18-自定义指令-全局注册-局部注册/App.vue'
import LoadingApp from './19-v-loading指令封装/App.vue'
import SlotApp from './20-插槽/App.vue'
import TableCaseApp from './21-商品案例-组件封装/App.vue'

export const testList = [
  {
    name: 'BaseCount02',
    label: '计数器测试',
    component: BaseCount02,
    description: '测试响应式数据的增删改'
  },
  {
    name: 'Father03',
    label: '父传子 Props',
    component: Father03,
    description: '测试父组件向子组件传递数据'
  },
  {
    name: 'Father04',
    label: '子传父 Emit',
    component: Father04,
    description: '测试子组件向父组件传递数据'
  },
  {
    name: 'PropsApp',
    label: 'Props 基础',
    component: PropsApp,
    description: '学习 props 的基本用法'
  },
  {
    name: 'ProgressApp',
    label: 'Props 类型',
    component: ProgressApp,
    description: '学习 props 类型设置'
  },
  {
    name: 'ValidatorApp',
    label: 'Props 校验',
    component: ValidatorApp,
    description: '学习 props 类型检查'
  },
  {
    name: 'UnidirectionalApp',
    label: '单向数据流',
    component: UnidirectionalApp,
    description: '理解 Vue 单向数据流原则'
  },
  {
    name: 'TodoApp',
    label: '小黑记事本',
    component: TodoApp,
    description: '综合练习：记事本功能'
  },
  {
    name: 'EventBusApp',
    label: '事件总线',
    component: EventBusApp,
    description: '学习 mitt 事件总线'
  },
  {
    name: 'ProvideInjectApp',
    label: 'Provide/Inject',
    component: ProvideInjectApp,
    description: '学习跨层级组件通信'
  },
  {
    name: 'VModelApp',
    label: 'v-model 原理',
    component: VModelApp,
    description: '理解 v-model 实现原理'
  },
  {
    name: 'SelectApp',
    label: '下拉框封装',
    component: SelectApp,
    description: '封装下拉框组件'
  },
  {
    name: 'VModelSelectApp',
    label: 'v-model 下拉框',
    component: VModelSelectApp,
    description: '使用 v-model 封装下拉框'
  },
  {
    name: 'SyncApp',
    label: 'sync 修饰符',
    component: SyncApp,
    description: '学习 .sync 修饰符用法'
  },
  {
    name: 'RefsApp',
    label: 'refs 获取 DOM',
    component: RefsApp,
    description: 'ref 获取 DOM 元素和组件实例'
  },
  {
    name: 'NextTickApp',
    label: 'nextTick 异步更新',
    component: NextTickApp,
    description: '数据变化后等待 DOM 更新完成'
  },
  {
    name: 'DirectiveApp',
    label: '自定义指令',
    component: DirectiveApp,
    description: '全局注册 vs 局部注册 vs 钩子函数'
  },
  {
    name: 'LoadingApp',
    label: 'v-loading 指令',
    component: LoadingApp,
    description: 'loading 遮罩层指令封装'
  },
  {
    name: 'SlotApp',
    label: '插槽',
    component: SlotApp,
    description: '默认插槽 具名插槽 作用域插槽'
  },
  {
    name: 'TableCaseApp',
    label: '商品案例',
    component: TableCaseApp,
    description: '表格组件封装 + 标签组件 + 作用域插槽'
  },
]