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
      inline: Boolean,
      model: Object,
      readonly: Boolean
    },
    data() {
      return {
        validate: {}
      }
    },
    mounted() {
      // console.log(this.inline)
      // console.log(this.model)
      /*this.$nextTick(() => {
        this.$emit('ready', this.model);
      })*/
    },
    methods: {
      handleSubmit() {
        // console.log(this)

        let pass = true;
        if (this.model) {
          for (let key in this.model) {
            let val = this.model[key];

            if (this.validate[key]) {
              this.validate[key].vm.$emit('validate', val);
              // console.log(this.validate[key].vm.error)

              if (this.validate[key].vm.error) {
                pass = false;
              }
            }
          }
        }

        if (pass) {
          this.$emit('submit');
        }
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
