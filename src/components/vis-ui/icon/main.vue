<template>
  <svg :class="{ 'vis-icon': true, 'vis-spin': spin }" :style="{ width: size, height: size, color: color }">
    <use :xlink:href="href"></use>
  </svg>
</template>

<script>
  // import fileURL from 'file-loader?name=[hash:5].[ext]!./symbols/lib/svg-symbols.svg';
  import './iconfont/iconfont.js';
  export default {
    name: 'vis-icon',
    props: {
      type: {
        type: String,
        default: ''
      },
      spin: {
        type: Boolean,
        default: false
      },
      size: {
        type: Number,
        default: 32
      },
      color: {
        type: String,
        default: ''
      }
    },
    computed: {
      href() {
        return /*fileURL + */'#vis-icon-' + this.type;
      }
    }
  }
</script>

<style lang="scss">
  .vis-icon {
     width: 1em; height: 1em;
     vertical-align: -0.15em;
     fill: currentColor;
     overflow: hidden;
  }

  .vis-spin {
    animation: spin-round 1s linear infinite;
  }

  @keyframes spin-round {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
