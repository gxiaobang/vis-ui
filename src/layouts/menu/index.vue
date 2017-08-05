<template>
  <div class="menu">
    <ul>
      <li
        v-for="(item,key) of items"
        :key="key"
        :class="{ active: currentItem.url === item.url }"
        @click="handleClick(item)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  import router from '@/utils/router';
  import fetch from '@/utils/fetch';

  export default {
    // props: ['items'],
    data() {
      return {
        items: [],
        currentItem: null
      }
    },
    watch: {
      currentItem(item) {
        // console.log(item)

        if (item.url) {
          this.$store.$emit('loadPage', item)
        }
      }
    },
    mounted() {
      // this.items
      // console.log(this.items)
      this.$nextTick(() => {
        fetch({
          url: '/menu',
          mock: true,
        }).then(response => {
          // console.log(data);
          this.items = response.data.data;
          // this.url = router.getURL();

          this.currentItem = {
            url: router.getURL()
          }
        });
      })
    },
    methods: {
      handleClick(item) {
        this.currentItem = { ...item };
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/styles/base";

  .menu {
    float: left;
    width: 200px;
    height: calc(100vh - 100px);
    // height: calc(100vh - 46px);
    border-right: $border;
    margin-top: 20px;
    background-color: $white;
    // padding: 10px;
    // border-right: $border;
    // background-color: #39434d;

    ul {
      li {
        padding: 8px 15px;
        border-radius: 2px;
        // color: $white;
        cursor: pointer;

        &.active {
          position: relative;
          background: #f5f5f5;
          // color: white;

          &:after {
            content: "";
            position: absolute;

            right: 0;
            top: 0;

            width: 3px;
            height: 100%;

            background-color: #10a5ba;
          }
        }

        &:hover {
          background: #f5f5f5;
        }
      }
    }
  }
</style>
