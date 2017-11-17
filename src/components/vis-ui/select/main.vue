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
    class="vis-select"
    ref="select"
    :disabled="formDisabled"
    v-bind="$props"
    v-model="val"
    style="width: 172px;"
    @change="handleChange"
  >
    <slot></slot>
  </el-select>
</template>

<script>
  import { Select } from 'element-ui';
  import getParent from '@/assets/js/getParent';
  import _ from 'lodash';

  export default {
    name: 'vis-select',
    props: ['value'],
    mixins: [Select],
    data() {
      return {
        val: this.value,
        form: getParent(this, 'vis-form'),
        validator: getParent(this, 'vis-validate', 1)
      }
    },
    computed: {
      formDisabled() {
        if (this.form) {
          return this.form.readonly/* || this.$props.disabled*/
        }
        else {
          return null;
        }
      }
    },
    mounted() {
      // 修正refs指向
      this.$refs = this.$refs.select.$refs;
    },
    watch: {
      value(val) {
        this.val = val;
      }
    },
    updated(...args) {
      /*_.forEach(this.$slots.default, item => {
        console.log(item)
      })*/
    },
    methods: {
      handleChange(value) {
        this.$emit('input', value);

        if (this.validator) {
          this.validator.$emit('validate', value);
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/styles/base";
  .vis-select {
    /* width: 162px;
    height: 28px;
    padding: 4px 7px;
    border: $border;
    border-radius: 6px;
    font-size: 12px;
    line-height: 1.5;
    color: #666; */

    @extend %form-disabled;

    .el-input.is-disabled .el-input__inner {
      background-color: #f3f3f3;
      cursor: default;
    }
  }
</style>
