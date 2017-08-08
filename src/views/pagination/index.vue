<template>
  <div class="page">
    <h3>{{ title }}</h3>
    <vis-pagination :total.sync="page.total" :current.sync="page.current" :size.sync="page.size" @change="handleChange"></vis-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Pagination 分页',
      page: {
        current: 1,
        size: 10,
        total: 100
      }
    }
  },
  methods: {
    handleChange(current, size) {
      console.log('current:' + current, 'pageSize:' + size);
    }
  }
}
</script>
