<template>
  <div class="header">
    <div class="header-main">web组件</div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleBack() {

      },
      handleLogout() {

      }
    }
  }
</script>

<style lang="scss">
  /**
   * 主页头部
   */
  @import "~@/assets/styles/base";

  .header {
    background-color: $white;

    .header-main {
      padding: 10px;
      font-size: 18px;
      // border-bottom: $border;
      // color: $white;
    }

    .header-user-info {
      float: right;
      margin-top: -34px;
      margin-right: 10px;
      font-size: 14px;
      // color: $white;
    }
  }
</style>
