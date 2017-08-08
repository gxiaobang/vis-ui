<template>
  <div class="home">
    <page-header></page-header>
    <page-content></page-content>
  </div>
</template>

<script>
/**
 * 主页
 */
import PageHeader from '@/layouts/header';
import PageContent from '@/layouts/content';
export default {
  data() {
    return {
    }
  },
  components: {
    PageHeader, PageContent
  }
}
</script>

<style lang="scss">
@import "~normalize.css";
@import "~@/styles/normalize-addon"; // @import "~animate.css";
body {
  min-width: 600px;
  background-color: #e4e4e4;
}
</style>
