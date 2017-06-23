<template>
  <form
    action="javascript:"
    :class="{ 'vis-form': true, 'vis-form--inline': inline }"
    @submit="handleSubmit"
  >
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'vis-form',
  props: {
    inline: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // console.log(this.inline)
  },
  methods: {
    handleSubmit() {
      this.$emit('submit');
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/main";

.vis-form {
  &.vis-form--inline {
    .vis-form-item {
      .vis-form-item-label {
        min-width: auto;
      }
    }
  }

  .vis-form-item-group {
    @for $i from 1 through 5 {
      &.vis-form-item-group-#{$i} {
        .vis-form-item {
          width: 100% / $i;
        }
      }
    }
  }
}
</style>
