<template>
  <div class="header">
    <!-- header -->
    <div class="header-top">
      <div class="header-logo">        
        <img :src="require('@/images/logo.png')" alt="logo">
      </div>

      <div class="header-info">
        城市便捷：广州白云山店
        营业日期：2017-05-08
        班次：早班
      </div>

      <div class="header-user">
        <ul class="header-user-list">
          <li class="header-user-info">
            用户名
            <span class="caret"></span>
          </li>
          <li>
            <vis-icon type="message" :size="18"></vis-icon>
            <div class="header-user-text">消息</div>
          </li>
          <li>
            <vis-icon type="lang" :size="18"></vis-icon>
            <div class="header-user-text">切换</div>
          </li>
          <li @click="handleBack">
            <vis-icon type="home" :size="18"></vis-icon>
            <div class="header-user-text">首页</div>
          </li>
          <li @click="handleLogout">
            <vis-icon type="logout" :size="18"></vis-icon>
            <div class="header-user-text">退出</div>
          </li>
        </ul>
      </div>  
    </div>
    <div class="header-bottom">
      <page-menu :items="[]"></page-menu>
    </div>
  </div>
</template>

<script>
import PageMenu from '@/layouts/menu/main';
export default {
  methods: {
    handleBack() {

    },
    handleLogout() {

    }
  },
  components: {
    PageMenu
  }
}
</script>

<style lang="scss" scoped>
/**
 * 主页头部
 */
@import "~@/styles/main";

.header {
  // height: 56px;
  // padding: 18px 16px;
  
  .header-top {
    // flex 布局
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 40px;
    background-color: $white;
  }

  .header-bottom {
    height: 32px;
    background-color: $primary-color;
  }

  .header-logo {
    // padding: 10px;
    // font-size: 18px;
    // border-bottom: $border;
    // display: inline-block;
    padding: 0 16px;
    line-height: 0;
    // vertical-align: middle;
    // color: $white;
  }

  .header-info {
    // display: inline-block;
    // width: calc(100vw - 460px);
    // text-align: center;
    // line-height: 40px;
  }

  .header-user {
    // float: right;
    margin-right: 10px;
    
    .header-user-list {
      // line-height: 0;
      > li {
        display: inline-block;
        vertical-align: top;
        padding-right: 10px;
        // line-height: 18px;
        // margin: 9px 0;
        cursor: pointer;

        &:hover {
          color: #666;

          .icon {
            fill: #666;
          }
        }
      }

      > .header-user-info {
        margin-top: 1px;
      }
    }

    .header-user-text {
      display: inline-block;
      padding-top: 2px;
      margin-left: 6px;
      vertical-align: top;
    }
  }
}
</style>