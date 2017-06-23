<template>
  <i :class="{ 'vis-icon': true, 'animated infinite spin': spin }">
    <svg :style="{ width: size, height: size, fill: color }">
      <use :xlink:href="href"></use>
    </svg>
  </i>
</template>

<script>
import fileURL from 'file-loader?name=[hash:5].[ext]!./symbols/lib/svg-symbols.svg';
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
      return fileURL + '#' + this.type;
    }
  }
}
</script>

<style lang="scss" scoped>
.vis-icon {
  display: inline-block;
  font-size: 0;
}
</style>