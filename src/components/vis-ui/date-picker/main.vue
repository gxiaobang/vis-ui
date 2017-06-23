<template>
  <el-date-picker
    v-bind="$props"
    v-model="date"
    size="small"
    @change="handleChange"
  >
    <slot></slot>
  </el-date-picker>
</template>
<script>
  import { DatePicker } from 'element-ui';

  export default {
    name: 'vis-date-picker',
    mixins: [DatePicker],
    props: ['value'],
    data() {
      return {
        date: this.value
      }
    },
    created() {
      // console.log(this)
    },
    methods: {
      handleChange(date) {
        // this.$emit('change', date)
        this.$emit('input', date)
      }
    }
  }
</script>
