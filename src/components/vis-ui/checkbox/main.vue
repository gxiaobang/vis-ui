<template>
  <el-checkbox
    v-bind="$props"
  >
    <slot></slot>
  </el-checkbox>
</template>

<script>
  import { Checkbox } from 'element-ui';
  export default {
    name: 'vis-checkbox',
    mixins: [Checkbox]
  }
</script>

<style lang="scss">
  .vis-checkbox {

  }
</style>
