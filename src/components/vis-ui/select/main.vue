<template>
  <select
    class="vis-select"
    v-bind="$props"
    @change="handleChange"
  >
    <slot></slot>
  </select>
</template>

<script>
export default {
  name: 'vis-select',
  props: ['value'],
  methods: {
    handleChange(event) {
      let value = event.target.value;
      // console.log(value)
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
