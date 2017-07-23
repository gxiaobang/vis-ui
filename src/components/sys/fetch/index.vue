<template>
  <div class="fetch">
    <div v-if="rendered">
      <vis-spin></vis-spin>
    </div>
    <slot v-else :data="data"></slot>
  </div>
</template>

<script>
  export default {
    name: 'fetch',
    data() {
      return {
        data: {},
        rendered: this.loading
      }
    },
    props: {
      get: Object,
      post: Object,
      mixin: Object,
      loading: Boolean
    },
    mounted() {
      this.$nextTick(() => {
        this.request()
      })
    },
    methods: {
      request() {
        let config = this.get || this.post;
        this.$fetch({
          ...config,
          method: this.get ? 'get' : 'post',
          onSuccess: (data) => {
            this.data = Object.assign(data.data, this.mixin);
            this.$emit('ready', this.data);
          },
          onComplete: () => {
            this.rendered = false;
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .fetch {
    display: inline-block;
  }
</style>
