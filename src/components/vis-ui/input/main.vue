<template>
  <input
    class="vis-input"
    type="text"
    :disabled="formDisabled"
    v-bind="$props"
    @input="handleInput"
    @keyup="handleKeyUp"
    @focus="handleFocus"
    @blur="handleBlur"
  >
</template>

<script>
  import getParent from '@/assets/js/getParent';
  export default {
    name: 'vis-input',
    data() {
      // console.log(this.$parent)
      return {
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
    props: {
      value: [String, Number]
    },
    mounted() {
      // console.log(this.$props)
      // console.log(this)
    },
    methods: {
      handleInput(event) {
        let value = event.target.value;
        this.$emit('input', value);

        // console.log(this.validator)

        if (this.validator) {
          this.validator.$emit('validate', value);
        }
      },
      handleKeyUp(event) {
        this.$emit('keyup', event);
      },
      handleFocus(event) {
        this.$emit('focus', event);
      },
      handleBlur(event) {
        this.$emit('blur', event);
      },
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/styles/base";
  .vis-input {
    width: 172px;
    height: 30px;
    padding: 4px 7px;
    border: $border;
    border-radius: 6px;
    font-size: 12px;
    line-height: 1.5;
    color: #666;

    @extend %form-disabled;
  }
</style>
