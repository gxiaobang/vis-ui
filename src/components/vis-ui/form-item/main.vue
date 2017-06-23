<template>
  <div class="vis-form-item">
    <div v-if="label" class="vis-form-item-label">{{ label }}</div>
    <div class="vis-form-item-control">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vis-form-item',
  props: ['label']
}
</script>

<style lang="scss" scoped>
@import "~@/styles/main";
// 表单元素
.vis-form-item {
  display: inline-block;
  vertical-align: middle;
  min-height: 54px;
  padding: 10px;
  padding-bottom: 0;

  .vis-form-item-label {
    display: inline-block;
    line-height: 29px;
    min-width: 100px;
    text-align: right;
    vertical-align: top;
    padding-left: 8px;
    padding-right: 8px;

    &.required:before {
      content: "*";
      margin: 1px;
      font-weight: bold;
      color: $danger-color;
    }
  }

  .vis-form-item-control {
    display: inline-block;
  }
}
</style>