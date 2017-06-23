<template>
  <div class="vis-pagination">
    <div class="vis-pagination-record">
      总记录数 {{ total }} 条
    </div>
    <div class="vis-pagination-main">
      <ul class="vis-pagination-pager">
        <li @click="handleClick('prev')">&laquo;</li>
        <li
          v-for="num in nums"
          :class="{ active: num == index }"
          @click="handleClick(num)"
        >{{ num }}</li>
        <li @click="handleClick('next')">&raquo;</li>
      </ul>
      <div class="vis-pagination-goto">
        跳至
        <vis-input @keyup="handleKeyUp" style="width: 45px;"></vis-input>
        页
      </div>
    </div>
  </div>
</template>

<script>
import keyCode from '@/utils/keyCode';
export default {
  name: 'vis-pagination',
  data() {
    return {
      count: 0,
      index: this.current
    }
  },
  props: ['total', 'current', 'size'],
  computed: {
    nums() {
      this.count = Math.ceil(this.total / this.size);

      const n = 5;
      const p = (n - 1) / 2;
      // 补够位
      const fixnumStart = Math.max(0, p - (this.count - this.index));
      const fixnumEnd = Math.max(0, p + 1 - this.index);

      const nums = [];

      for (let i = 1; i <= this.count; i++) {
        if (i >= this.index - p - fixnumStart && i <= this.index + p + fixnumEnd) {
          nums.push(i);
        }
      }
      return nums;
    }
  },
  watch: {
    current(val) {
      console.log(val)
      this.index = val;
    }
  },
  methods: {
    handleKeyUp(event) {
      if (keyCode(event.keyCode).is('enter')) {
        let el = event.target;
        let num = parseInt(el.value);
        el.value = '';

        num = Math.min(Math.max(0, num), this.count);
        this.handleClick(num);
      }
    },
    handleClick(num) {
      switch (num) {
        case 'prev':
          num = Math.max(this.index - 1, 1);
          break;
        case 'next':
          num = Math.min(this.index + 1, this.count);
          break;
      }

      if (num != this.index) {
        this.index = num || 1;
        this.$emit('change', this.index, this.size);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/main";

.vis-pagination {
  padding: 16px 8px;
  // border: $border;
  border-top: none;
  border-radius: 0 0 6px 6px;
  background-color: $white;
  @extend .clearfix;

  .vis-pagination-record,
  .vis-pagination-pager,
  .vis-pagination-goto {
    display: inline-block;
  }

  .vis-pagination-record {
    line-height: 32px;
  }

  .vis-pagination-main {
    float: right;
  }

  .vis-pagination-pager {
    margin-right: 10px;
    li {
      display: inline-block;
      margin: 0 2px;
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 5px;

      font-size: 12px;
      background-color: $white;

      cursor: pointer;

      &:hover, &.active {
        // background-color: darken($white, 5%);
        border-color: $primary-color;
      }

      &.active {
        color: #fff;
        background-color: $primary-color;
      }
    }
  }

  .vis-pagination-input {
    width: 45px;
  }
}
</style>
