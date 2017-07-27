<template>
  <el-option v-bind="$props">
    <slot></slot>
  </el-option>
</template>

<script>
  import { Option } from 'element-ui'
  export default {
    name: 'vis-option',
    props: ['value'],
    mixins: [Option],
  }
</script>

<style lang="scss" scoped>
</style>
