<template>
  <div class="vis-tab-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vis-tab-pane',

  data() {
    return {}
  },

  props: {
    label: String,
    name: String
  },

  mounted() {
    this.$parent.addPane(this);
  }
}
</script>
