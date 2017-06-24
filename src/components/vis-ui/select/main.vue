<template>
  <!-- <select
    ref="select"
    class="vis-select"
    v-bind="$props"
    @change="handleChange"
  >
    <slot></slot>
  </select> -->

  <el-select
    ref="reference"
    v-bind="$props"
    v-model="val"
    size="small"
    @change="handleChange"
  >
    <slot></slot>
  </el-select>
</template>

<script>
  import { Select } from 'element-ui'

  export default {
    name: 'vis-select',
    props: ['value'],
    mixins: [Select],
    data() {
      return {
        val: this.value
      }
    },
    updated() {
      // console.log(this.$refs.select, this)
    },
    methods: {
      handleChange(value) {
        this.$emit('input', value);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/styles/main";
  .vis-select {
    width: 162px;
    height: 28px;
    padding: 4px 7px;
    border: $border;
    border-radius: 6px;
    font-size: 12px;
    line-height: 1.5;
    color: #666;

    @extend %form-disabled;
  }
</style>
