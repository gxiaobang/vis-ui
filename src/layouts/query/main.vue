<template>
  <div class="query">
    <div class="query-form">
      <vis-form :inline="true" @submit="handleSubmit">
        <slot name="form" :form="formData"></slot>
        <vis-form-item>
          <vis-button type="primary" :submit="true">查询</vis-button>
        </vis-form-item>
        <!-- <component :is="button"></component> -->
      </vis-form>
    </div>

    <div class="query-btns">
      <slot name="btns"></slot>
    </div>

    <div class="query-list">
      <vis-table
        ref="table"
        :data="data"
        :columns="columns"
        :page.sync="page"
        :loading="loading"
        @change="handleChange"
      ></vis-table>
    </div>
  </div>
</template>

<script>
import getPoint from '@/utils/getPoint';
import evt from '@/utils/evt';
// import form from ''
export default {
  data() {
    return {
      // columns: [],
      formData: this.form || {},
      data: [],
      page: {},
      loading: false
    }
  },
  computed: {
    keys() {
      return this.columns.map(item => item.key);
    }
  },
  props: ['columns', 'fetch', 'form'],
  mounted() {
    // console.log(this.columns)
    this.handleSubmit()

    this.$nextTick(() => {
      this.adapt();
    })

    this.hide = evt.add(window, 'resize', () => {
      this.adapt();
    })
  },
  destroyed() {
    this.hide();
  },
  methods: {
    handleSubmit(params) {
      console.log(this.formData);
      this.loading = true;
      this.$fetch({
        url: this.fetch.url,
        params: {
          ...fetch.params,
          ...this.formData,
          ...params
        },
        onSuccess: (data) => {
          this.loading = false;
          let { page, list } = data.data;
          this.data = list;
          this.page = {
            current: page.pageNo,
            size: page.pageSize,
            total: page.totalRecord
          }
          // console.log(this.page)
        }
      })
    },
    handleReset() {
      this.form = {}
    },
    // 分页改变
    handleChange(current, size) {
      // console.log(current, size)
      this.handleSubmit({
        pageNo: current,
        pageSize: size
      });
    },
    // 自适应
    adapt() {
      let main = this.$refs.table.$refs.main;
      let h = document.documentElement.clientHeight;
      let p = getPoint(main);

      // console.log(h, p);
      main.style.minHeight = h - p.y - 82 + 'px';
    },
    // 刷新
    refresh() {
      this.handleSubmit({
        pageNo: this.page.current,
        size: this.page.pageSize
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/main";

.query {
  .query-form,
  .query-header,
  .query-btns,
  .query-list {
    background-color: #fff;
  }

  .query-form {
    margin-bottom: 12px;
  }

  .query-header {
    padding: 16px;
    @extend .clearfix;
    .query-header-title {
      display: inline-block;
      font-size: 16px;
      line-height: 30px;
    }
  }

  .query-btns {
    padding: 16px;

    button {
      margin-right: 10px;
    }
  }

  .query-list {
    padding: 0 16px;
  }

  /* .query-header {
    // display: inline-block;
    padding: 4px;
    font-size: 16px;
    // font-weight: bold;
  } */
}
</style>
