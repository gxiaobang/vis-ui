<template>
  <div class="content">
    <div class="content-main">
      <div class="content-side">
        <page-menu></page-menu>
      </div>
      <div class="content-view">
        <component :is="view"></component>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/assets/js/router';
  import PageMenu from '@/layouts/menu';
  export default {
    data() {
      return {
        view: null
      }
    },
    mounted() {
      this.$store.$on('loadPage', (item) => {
        let url = router.getPageURL(item.url);
        import('@/views/' + url + '.vue')
          .then((view) => {
            this.view = view;
          })
          .catch((error) => {
            import('@/views/404')
              .then((view) => {
                this.view = view;
              })

            throw error;
          })

        router.setURL(item.url);
      })
    },
    components: {
      PageMenu
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/styles/base";

  .content {
    padding: 16px;

    .content-main {
      display: flex;
      background: $white;
      @extend .clearfix;
    }

    // 左侧菜单 、右侧页面
    .content-side,
    .content-view {
      float: left;
    }

    .content-view {
      float: left;
      padding: 10px;
      flex: 1;
    }
  }
</style>
