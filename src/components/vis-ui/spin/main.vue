<template>
  <div class="vis-spin-wrapper">
    <vis-icon type="spinner" spin :size="16"></vis-icon>
    加载中
  </div>
</template>

<script>
  export default {
    name: 'vis-spin'
  }
</script>

<style lang="scss">
  .vis-spin-wrapper {
    .vis-icon {
      margin-top: -2px;
      margin-right: 6px;
      vertical-align: middle;
    }
  }
</style>
