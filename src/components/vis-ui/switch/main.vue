<template>
  <label class="vis-switch">
    <input type="checkbox" :disabled="formDisabled" :checked="checked" @change="handleChange">
    <div class="vis-switch-inner">
      <div class="vis-switch-unchecked"></div>
      <div class="vis-switch-checked"></div>
    </div>
  </label>
</template>

<script>
  import _ from 'lodash';
  import getParent from '@/assets/js/getParent';

  export default {
    name: 'vis-switch',
    data() {
      return {
        form: getParent(this, 'vis-form')
      }
    },
    props: {
      value: [Boolean, Number]
    },
    computed: {
      checked() {
        let checked = this.value;
        if (!_.isBoolean(this.value)) {
          checked = this.value != 1;
        }

        return checked;
      },
      formDisabled() {
        if (this.form) {
          return this.form.readonly/* || this.$props.disabled*/
        }
        else {
          return null;
        }
      }
    },
    methods: {
      handleChange(event) {
        // console.log(event)
        let checked = event.target.checked;
        if (_.isNumber(this.value)) {
          checked = checked ? 0 : 1;
        }

        this.$emit('input', checked);
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/styles/base";

  .vis-switch {
    display: inline-block;
    // margin: 2px;
    line-height: 0;
    cursor: pointer;

    input[type="checkbox"] {
      display: none !important;

      &:checked + .vis-switch-inner {
        border-color: $primary-color;
        background-color: $primary-color;

        &:after {
          left: auto;
          right: 0;
        }

        .vis-switch-checked {
          display: block;
        }
        .vis-switch-unchecked {
          display: none;
        }
      }

      &:disabled + .vis-switch-inner {
        background-color: #f4f4f4;
        border-color: #f4f4f4;

        &:after {
          background-color: #ccc;
        }
        // cursor: not-allowed;
        cursor: default;
      }
    }

    .vis-switch-inner {
      display: inline-block;
      position: relative;
      min-width: 50px;
      height: 28px;
      border: $border;
      border-width: 2px;
      border-radius: 14px;
      background-color: #c0c0c0;

      overflow: hidden;

      &:after {
        content: "";

        position: absolute;
        top: 0;
        left: 0;
        right: auto;

        width: 24px;
        height: 24px;
        border-radius: 50%;

        background-color: $white;
      }

      .switch-checked,
      .switch-unchecked {
        font-size: 12px;
        color: $white;
        padding: 5px;
        text-align: center;
      }
      .switch-checked {
        display: none;
        margin-right: 22px;
      }
      .switch-unchecked {
        margin-left: 22px;
      }
    }
  }
</style>
