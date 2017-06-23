<template>
  <div class="menu">
    <ul>
      <li class="menu-first">
        <!-- <Icon type="more" size={20} color={'#fff'} /> -->
      </li>
      <li
        v-for="item of items"
        :class="{ active: url === item.url }"
        @click="handleClick(item)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import router from '@/utils/router';

export default {
  // props: ['items'],
  data() {
    return {
      items: [],
      url: router.getURL()
    }
  },
  mounted() {
    // this.items
    // console.log(this.items)
    this.$nextTick(() => {
      // console.log(this.$http)
      this.$fetch({
        url: '/menu',
        mock: true,
      }).then(response => {
        let { data } = response.data;
        this.items = data;
        this.items.map(item => {
          if (item.url == this.url) {
            this.$bus.$emit('router-view', item);
          }
        })
      });
    })
  },
  methods: {
    handleClick(item) {
      this.url = router.getURL(item.url)
      this.$bus.$emit('router-view', item)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/main";
.menu {
  // float: left;
  // width: 200px;
  // height: calc(100vh - 55px);
  // padding: 10px;
  // border-right: $border;
  display: inline-block;
  // background-color: #39434d;

  ul {
    li {
      display: inline-block;
      padding: 5px 10px;
      // border-radius: 20px;
      font-size: 15px;
      vertical-align: top;
      color: $white;
      cursor: pointer;

      &.menu-first {
        padding-bottom: 2px;
      }

      &.active {
        position: relative;
        // background: $white;
        background-color: #006bb8 !important;
        // color: #108ae2;

        /* &:before {
          content: "";
          position: absolute;

          left: 0;
          top: 0;

          width: 3px;
          height: 100%;

          background-color: #10a5ba;
        } */
      }

      &:hover {
        background-color: #027cd4;
      }
    }
  }
}
</style>
