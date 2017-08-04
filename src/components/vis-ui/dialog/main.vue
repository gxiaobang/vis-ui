<template>
  <transition>
    <div v-if="visible" class="vis-dialog-wrapper">
      <div :class="{
        'vis-dialog': true,
        'vis-dialog--tiny': !isPage
      }">
        <div class="vis-dialog--header">
          {{ title }}
          <span class="close" @click="handleClose">&times;</span>
        </div>
        <div class="vis-dialog--body">
          <slot name="body" v-if="isPage"></slot>
          <div class="vis-dialog--message" v-else>
            <div :class="`vis-dialog--icon-${icon}`">
              <vis-icon :type="icon"></vis-icon>
            </div>
            <div class="vis-dialog--text">
              <div class="vis-dialog--text-main">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
        <div class="vis-dialog--footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'vis-dialog',
    data() {
      return {
        isPage: this.type == 'open' || this.type == 'insert'
      }
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '提示框'
      },
      type: {
        type: String,
        default: 'alert'
      },
      icon: {
        type: String,
        default: 'warn'
      }
    },
    mounted() {
      // console.log(this)
    },
    watch: {
    },
    methods: {
      handleClose() {
        // this.show = false
        this.$emit('update:visible', false);
        // console.log(this)
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/styles/base";

  .vis-dialog-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.4);
    z-index: 99;
    overflow: hidden;

    display: flex;
    align-items: center;
    // text-align: center;
    justify-content: center;


    .vis-dialog {
      position: absolute;
      min-width: 360px;
      margin-top: -1%;
      // max-width: 90%;
      // min-height: 120px;
      // border: $border;
      border-radius: 4px;
      background-color: $white;
      box-shadow: 0 0 6px #ccc;
      overflow: hidden;

      &.vis-dialog-disabled:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;

        width: 100%;
        height: 100%;
        background-color: rgba(255,255,255,.3);
      }

      &.vis-dialog--tiny {
        width: 400px;
        // height: 192px;
        padding: 40px;

        .vis-dialog--header {
          display: none;
        }

        .vis-dialog--body {

          width: auto;
          min-height: auto;
          padding: 0;
        }

        .vis-dialog--message {
          display: flex;
          align-items: center;
          justify-content: center;

          min-height: 100px;

          .vis-dialog--text {
            margin: 10px;
            max-height: 120px;
            overflow: auto;

            .vis-dialog--text-main {
              font-size: 16px;
              color: #666;
            }

            .vis-dialog--text-sub {
              font-size: 12px;
              color: #999 ;
            }
          }
        }
      }

      // 图标
      .vis-dialog--icon-warn {
        // fill: $warn-color;
        color: #ff0000;
      }
      .vis-dialog--icon-success {
        color: $success-color;
      }
      .vis-dialog--icon-info {
        color: $primary-color;
      }
      .vis-dialog--icon-error {
        color: $danger-color;
      }

      .vis-dialog--header {
        padding: 14px 16px;
        // padding-left: 46px;
        font-size: 16px;
        line-height: 30px;
        background-color: #f4f4f4;
        // border-bottom: $border;|

        .close {
          float: right;
          display: inline-block;
          width: 30px;
          height: 30px;
          background-color: $primary-color;
          cursor: pointer;
          border-radius: 4px;
          color: white;
          font-size: 26px;
          text-align: center;
          line-height: 31px;

          &:hover {
            background-color: lighten($primary-color, 6%);
          }
        }
      }

      .vis-dialog--body  {
        // padding: 10px;
        // min-height: 100px;
        background-color: $white;
        overflow: auto;

        width: 960px;
        min-height: 520px;
        max-height: calc(100vh - 100px);
        padding: 10px;
      }

      .vis-dialog--footer {
        // padding: 10px 70px;
        // border-top: $border;

        text-align: center;

        button {
          margin: 0 4px;
          font-size: 14px;
        }
      }

      /* header, footer {
        background-color: #f5f5f5;
      } */
    }
  }
</style>
