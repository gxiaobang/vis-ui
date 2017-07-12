<template>
  <vis-input
    class="vis-input-number"
    type="number"
    v-bind="$props"
    @input="handleInputNumber"
  ></vis-input>
</template>

<script>
  import getParent from '@/utils/getParent';
  import Input from '../input';
  export default {
    name: 'vis-input-number',
    mixins: [Input],
    components: { 'vis-input': Input },
    methods: {
      handleInputNumber(val) {
        val = Number(val);
        this.$emit('input', val);
      }
    }
  }
</script>

<style lang="scss">
  .vis-input-number {

  }
</style>
