<template>
  <el-input-number
    v-bind="$props"
    v-model="val"
    :disabled="formDisabled"
    size="small"
    style="width: 172px;" @change="handleChange"></el-input-number>
</template>

<script>
  import { InputNumber } from 'element-ui';
  import getParent from '@/assets/js/getParent';

  export default {
    name: 'vis-input-number',
    mixins: [InputNumber],
    data() {
      return {
        val: this.value,
        form: getParent(this, 'vis-form'),
        validator: getParent(this, 'vis-validate', 1)
      }
    },
    props: {
      value: Number
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
        this.val = val;
      }
    },
    components: { 'el-input-number': InputNumber },
    methods: {
      /*handleInputNumber(val) {
        val = Number(val);
        this.$emit('input', val);
      }*/

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

</style>
