<template>
  <div class="vis-validate">
    <slot></slot>

    <div class="vis-validate-error-label" v-if="error">{{ error }}</div>
  </div>
  <!-- <slot v-else></slot> -->
</template>

<script>
  import Validator from 'validatorjs';
  import getParent from '@/utils/getParent';
  Validator.useLang('zh');
  export default {
    name: 'vis-validate',
    props: {
      rule: String,
      name: String
    },
    data() {
      let formItem = this.getFormItem();
      return {
        error: null,
        label: formItem ? formItem.label : ''
      }
    },
    mounted() {
      this.$on('validate', (val) => this.verify(val))

      this.$nextTick(() => {
        let form = this.getForm()

        // form.
        // console.log(form)
        form.validate[this.name] = {
          vm: this,
          label: this.label,
        }

        // console.log(form.validate)
      })
    },

    methods: {
      verify(val) {
        // console.log(this)
        var validation = new Validator(
          { [this.label]: val },
          { [this.label]: this.rule }
        );

        if (validation.fails()) {
          this.error = validation.errors.first(this.label);
        }
        else {
          this.error = null;
        }
      },
      // 获取表单项
      getFormItem() {
        return getParent(this, 'vis-form-item')
      },
      // 获取表单
      getForm() {
        return getParent(this, 'vis-form')
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/styles/base";

  .vis-validate {
    height: 48px;
    @extend %form-element;

    &.error {
      input, select {
        border: 1px solid $red;
      }
    }

    .vis-validate-error-label {
      // display: inline-block;
      font-size: 12px;
      line-height: 1.5;
      color: $red;
    }
  }
</style>
