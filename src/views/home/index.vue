<template>
  <div class="home">
    <h3>Vis UI组件</h3>

    <vis-form inline>
      <vis-form-item label="用户">
        <vis-input></vis-input>
      </vis-form-item>

      <vis-form-item>
        <vis-button type="primary">确定</vis-button>
      </vis-form-item>
    </vis-form>
  </div>
</template>

<script>

</script>

<style lang="scss">
/**
 * 主页
 */

@import "~normalize.css";
@import "~@/styles/normalize-addon";
// @import "~animate.css";


body {
  min-width: 800px;
  background-color: #e4e4e4;
  // overflow: hidden;
}
</style>
