<template>
  <div class="fetch">
    <slot :data="data"></slot>
  </div>
</template>

<script>
export default {
  name: 'fetch',
  data() {
    return {
      data: []
    }
  },
  props: ['get', 'post'],
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
          this.data = data.data;
        }
      })
    }
  }
}
</script>
