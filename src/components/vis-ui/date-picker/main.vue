<template>
  <el-date-picker
    class="vis-date-picker"
    :disabled="formDisabled"
    v-bind="$props"
    v-model="val"
    style="width: 172px"
    @change="handleChange"
  >
    <slot></slot>
  </el-date-picker>
</template>
<script>
  import { DatePicker } from 'element-ui';
  import getParent from '@/utils/getParent';
  import moment from 'moment';

  export default {
    name: 'vis-date-picker',
    mixins: [DatePicker],
    props: ['value'],
    data() {
      return {
        val: this.value ? moment(this.value) : null,
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
    watch: {
      value(val) {
        this.val = val ? moment(val) : null;
      }
    },
    methods: {
      handleChange(val) {
        // this.$emit('change', val)
        this.$emit('input', val)

        if (this.validator) {
          this.validator.$emit('validate', val);
        }
      }
    }
  }
</script>

<style lang="scss">
  .vis-date-picker {
    &.el-input.is-disabled .el-input__inner {
      background-color: #f3f3f3;
      cursor: default;
    }
  }
</style>
