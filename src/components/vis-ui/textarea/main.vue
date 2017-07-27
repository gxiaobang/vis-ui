<template>
  <textarea
    v-bind="$props"
    :disabled="formDisabled"
    class="vis-textarea"
    @input="handleInput"
  ></textarea>
</template>

<script>
  import getParent from '@/utils/getParent';
  export default {
    name: 'vis-textarea',
    data() {
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
      value: String
    },
    methods: {
      handleInput(event) {
        let value = event.target.value;
        this.$emit('input', value);

        if (this.validator) {
          this.validator.$emit('validate', value);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
 /**
  * 多行文本框
  */
  @import "~@/styles/base";

  .vis-textarea {
    width: 770px;
    height: 98px;
    padding: 5px;
    border: $border;
    border-radius: 6px;
    color: #666;
    resize: vertical;

    @extend %form-disabled;
  }
</style>
