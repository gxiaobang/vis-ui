<template>
  <div class="vis-table-wrapper">
    <div class="vis-table-main" ref="main">
      <table class="vis-table">
        <thead>
          <tr>
            <th v-for="item in columns">
              {{ item.title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data">
            <td v-for="(key, index) in keys">
              <component
                v-if="columns[index].component"
                :is="columns[index].render(item[ columns[index].key ], item)"
              ></component>
              <span
                v-else
                v-html="
                  columns[index].render ?
                    columns[index].render(item[ columns[index].key ], item) :
                    item[ columns[index].key ]
                "
              ></span>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- <img
        v-if="!loading && data.length == 0"
        :src="require('@/images/empty.svg')"
        alt="empty"
        style="max-height: 600px;"
      > -->

      <!-- vis-icon[type="empty"] -->
      <div class="vis-table-empty" v-if="!loading && data.length == 0">
        <vis-icon type="empty" color="#ddd"></vis-icon>
      </div>
    </div>
    <div class="vis-table-footer">
      <vis-pagination
        :timer="timer"
        :total.sync="page.total"
        :current.sync="page.current"
        :size.sync="page.size"
        @change="handleChange"
      ></vis-pagination>
    </div>

    <div v-if="loading" class="vis-table-loading">
      <vis-spin></vis-spin>
    </div>
  </div>
</template>

<script>
  import dom from '@/assets/js/dom';
  import _ from 'lodash';
  export default {
    name: 'vis-table',
    data() {
      return {
        timer: +new Date
      }
    },
    props: {
      columns: {
        type: Array,
        default: []
      },
      data: {
        type: Array,
        default: []
      },
      page: {
        type: Object,
        default: {}
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      keys() {
        return this.columns.map(item => item.key);
      }
    },

    watch: {
      page() {
        // console.log(this.page)
        this.timer = +new Date;
      }
    },

    methods: {
      // 分页修改
      handleChange(current, size) {
        // console.log(current, size);
        this.$emit('change', current, size);
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/styles/base";

  .vis-table-wrapper {
    position: relative;
    // overflow: auto;

    .vis-table-main {
      position: relative;
      overflow: auto;
      min-height: 120px;
    }

    .vis-table {
      width: 100%;
      border-radius: 4px;

      thead {
        th {
          background-color: #f0f0f0;
          // border-right: $border;
          /* border-right: 1px solid #f3efef;

          &:last-child {
            border-right: none;
          } */
        }
      }

      th, td {
        padding: 10px 18px;
        border: 1px solid #eae4e4;
        text-align: left;
        white-space: nowrap;
        font-size: 12px;
      }
    }

    tr {
      &:nth-child(2n-1) {

      }

      &:nth-child(2n) {
        background-color: #f5f5f5;
      }
    }

    .vis-table-empty {
      min-height: 200px;
      line-height: 200px;
      text-align: center;
    }

    .vis-table-loading {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255,255,255,.5);

      .vis-spin-wrapper {
        position: absolute;
        left: 40%;
        top: 40%;
      }
    }
  }
</style>

<style lang="scss">
  .vis-link-group {
    &.vis-link-group--table {
      .vis-link {
        padding-right: 4px;
        border-right: 1px solid #bbbbbb;

        &:last-child {
          border-right: none;
        }
      }
    }
  }
</style>
