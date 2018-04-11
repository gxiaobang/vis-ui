<template>
  <div class="vis-form-item">
    <div
      v-if="label"
      :class="{
        'vis-form-item-label': true,
        'required': required
      }"
    >
      {{ label }}
    </div>
    <div class="vis-form-item-control">
      <!-- <slot v-if="!readonly"></slot>
      <div v-else>{{ text }}</div> -->

      <slot></slot>
    </div>
  </div>
</template>

<script>
  import getParent from '@/assets/js/getParent';

  export default {
    name: 'vis-form-item',
    data() {
      let form = getParent(this, 'vis-form');
      return {
        form,
        readonly: form.readonly,
        text: ''
      }
    },
    props: {
      label: String,
      required: Boolean
    },
    mounted() {
      // console.log(this.required)
      // console.log(this)
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  @import "~@/assets/styles/base";
  // 表单元素
  .vis-form-item {
    display: inline-block;
    vertical-align: middle;
    min-height: 54px;
    padding: 10px;
    padding-bottom: 0;

    .vis-form-item-label {
      display: inline-block;
      line-height: 30px;
      min-width: 100px;
      text-align: right;
      vertical-align: top;
      padding-left: 8px;
      padding-right: 8px;

      &.required:before {
        content: "*";
        // margin: 1px;
        font-weight: bold;
        color: $danger-color;
      }
    }

    .vis-form-item-control {
      display: inline-block;
    }
  }
</style>
