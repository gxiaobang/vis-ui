<template>
  <div class="page">
    <h3>{{ title }}</h3>

    <vis-table :data="data" :columns="columns" :page="page"></vis-table>

  </div>
</template>

<script>
import fetch from '@/utils/fetch';

export default {
  data() {
    return {
      title: 'Table 表格',
      data: [],
      columns: [
        {
          title: '编码',
          key: 'code'
        },
        {
          title: '名称',
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
