<template>
  <div class="vis-tabs">
    <!-- {{ $slots.default }} -->

    <!-- <component v-for="(item,key) in $slots.default" :key="key"></component> -->
    <slot></slot>
  </div>
</template>

<script>
/**
 * Tabs 选项卡组件
 */
export default {
  name: 'vis-tabs',
  data() {
    // console.log(this.$slots);
    return {
      panes: [],
      current: 0
    }
  },
  methods: {
    handleTabs(index) {
      this.current = index;
      console.log(index)

      this.$emit('tabs', index);
    },

    addPane(pane) {
      this.panes.push(pane);
    }
  }
}
</script>

<style lang="scss">
.vis-tabs {
  .vis-tabs-header {
    > div {

    }
  }

  .vis-tabs-body {
    > div {

    }
  }
}
</style>
