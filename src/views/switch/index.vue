<template>
  <div class="page">
    <h3>{{ title }}</h3>
    <vis-form>
      <vis-form-item label="是否启用">
        <vis-switch v-model="enabled"></vis-switch>
      </vis-form-item>
    </vis-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Switch 开关',
      enabled: false
    }
  },
  methods: {
  }
}
</script>
