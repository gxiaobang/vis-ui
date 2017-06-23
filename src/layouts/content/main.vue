<template>
  <div class="content">
    <component ref="view" :is="view" :data="data" :code="code" keep-alive></component>
  </div>
</template>

<script>
import Page from '@/views/test/index';
// import bus from '@/stores/bus';
import router from '@/utils/router';
export default {
  data() {
    return {
      data: null,
      view: null
    }
  },
  computed: {
    code() {
      return this.data ? this.data.code : null;
    }
  },
  mounted() {
    // console.log(this)
    this.$bus.$on('router-view', (item) => {
      // console.log(item);
      let url = router.getPageURL(item.url);
      router.setURL(item.url);
      // console.log(url);
      import('@/views/' + url + '.vue')
        .then(view => {
          // console.log(module)
          this.view = view
          this.data = { ...item }
        })
    })

    this.$bus.$on('refresh', (code) => {
      console.log(code, this.$refs.view.$refs.main)
    })
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 10px;
}
</style>
