<template>
  <option class="vis-option" :value="value">
    <slot></slot>
  </option>
</template>

<script>
export default {
  name: 'vis-option',
  props: ['value']
}
</script>

<style lang="scss" scoped>
</style>