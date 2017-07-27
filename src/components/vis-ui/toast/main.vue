<template>
  <div class="toast">
    <div class="vis-toast">
      <div class="vis-toast-content">
        <vis-icon :type="icon" color="#fff"></vis-icon>
        <div class="vis-toast-text">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vis-toast',
    props: ['icon'],
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/styles/base";
  .vis-toast {
    position: fixed;
    left: 50%;
    top: 45%;

    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    // text-align: center;
    justify-content: center;

    width: 176px;
    height: 96px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background-color: rgba(0,0,0,.5);

    z-index: 999;

    .vis-toast-content {
      // width: 100%;

      .vis-toast-text {
        margin-top: 4px;
        font-size: 16px;
        color: $white;
      }
      /* display: inline-block;
      min-width: 160px;
      padding: 6px 12px;
      // border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,.2);

      font-size: 12px;

      // color: #468847;
      background-color: $white; */
    }

    // transform: translateX(-50%);
  }
</style>
