<template>
  <button 
    :class="cls"
    :type="submit ? 'submit' : 'button'"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'vis-button',
  data() {
    let type = this.type || 'default';
    return {
      cls: {
        'vis-btn': true,
        ['vis-btn--' + type]: true
      }
    }
  },
  props: ['type', 'submit'],
}
</script>

<style lang="scss" scoped>
/**
 * 按钮
 */
@import "~@/styles/main";

.vis-btn {
  min-width: 56px;
  padding: 6px 10px;
  border: $border-transparent;
  border-radius: 5px;
  font-size: 12px;
  outline: none;

  // line-height: 1.5;
  white-space: nowrap;
  background-color: transparent;
  // color: $white;
  cursor: pointer;

  &.vis-btn--default   {
    // color: #fff;
    background-color: #f5f5f5;
    border-color: #ccc;

    &:hover {
      background-color: lighten(#f5f5f5, 6%);
    }
  }

  &.vis-btn--ghost {
    color: $primary-color;
    border-color: $primary-color;
    /* background-color: $primary-color;
    // border-color: #2e6da4;

    &:hover {
      background-color: lighten($primary-color, 6%);
    } */
  }

  &.vis-btn--primary {
    color: #fff;
    background-color: $primary-color;
    // border-color: #2e6da4;

    &:hover {
      background-color: lighten($primary-color, 6%);
    }
  }

  &.vis-btn--success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;

    &:hover {
      background-color: lighten(#5cb85c, 6%);
    }
  }

  &.vis-btn--info {
    color: #fff;
    background-color: #5bc0de;
    border-color: #46b8da;

    &:hover {
      background-color: lighten(#5bc0de, 6%);
    }
  }

  &.vis-btn--warn {
    color: #fff;
    background-color: #f0ad4e;
    border-color: #eea236;

    &:hover {
      background-color: lighten(#f0ad4e, 6%);
    }
  }

  &.vis-btn--danger {
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;

    &:hover {
      background-color: lighten(#d9534f, 6%);
    }
  }
}
</style>