<template>
  <div class="vis-tabs">
    <div class="vis-tabs-header">
      <div v-for="(item,key) in tabs" :key="key" @click="handleTabs(key)">{{ item.title }}</div>
    </div>
    <div class="vis-tabs-body">
      <div v-for="(item,key) in tabs" :key="key">{{ item.body }}</div>
    </div>
  </div>
</template>

<script>
/**
 * Tabs 选项卡组件
 */
export default {
  name: 'vis-tabs',
  data() {
    return {
      tabs: [
        {
          title: 'title 1',
          body: 'body 1'
        }
      ],
      current: 0
    }
  },
  methods: {
    handleTabs(index) {
      this.current = index;
      console.log(index)

      this.$emit('tabs', index);
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
