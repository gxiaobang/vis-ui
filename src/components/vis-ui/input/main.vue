<template>
  <input 
    class="vis-input"
    type="text"
    v-bind="$props"
    @input="handleInput" 
    @keyup="handleKeyUp"
  >
</template>

<script>
export default {
  name: 'vis-input',
  data() {
    return {}
  },
  props: ['value'],
  mounted() {
    // console.log(this.$props)
  },
  methods: {
    handleInput(event) {
      let value = event.target.value;
      this.$emit('input', value);
    },
    handleKeyUp(event) {
      this.$emit('keyup', event);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/main";
.vis-input {
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