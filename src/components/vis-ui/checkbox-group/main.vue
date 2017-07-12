<template>
  <el-checkbox-group
    v-bind="$props"
  >
    <slot></slot>
  </el-checkbox-group>
</template>

<script>
  import { CheckboxGroup } from 'element-ui';
  export default {
    name: 'vis-checkbox-group',
    mixins: [CheckboxGroup]
  }
</script>

<style lang="scss">
  .vis-checkbox {

  }
</style>
