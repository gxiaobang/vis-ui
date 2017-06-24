<template>
  <div class="home">
    <h3>Vis UI组件</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: ''
    }
  }
}
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
