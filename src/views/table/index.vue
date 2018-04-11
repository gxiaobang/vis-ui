<template>
  <div class="page">
    <h3>{{ title }}</h3>
    <vis-table :data="data" :columns="columns" :page="page" style="height: calc(100vh - 146px);"></vis-table>
  </div>
</template>

<script>
import fetch from '@/assets/js/fetch';

export default {
  data() {
    return {
      title: 'Table 表格',
      data: [],
      columns: [
        {
          title: this.$t('common.code'),
          key: 'code'
        },
        {
          title: this.$t('common.name'),
          key: 'name'
        }
      ],
      page: {
        size: 10,
        total: 0,
        current: 1
      }
    }
  },
  mounted() {
    fetch({
      url: '/test',
      mock: true
    }).then(fetch.succ(data => {

      // console.log(data)
      this.data = data.data;
      this.page.total = 100;
    }));
  },
  methods: {
  }
}
</script>
