<template>
  <div class="page">
    <h3>{{ title }}</h3>
    <vis-form inline>
      <vis-form-item label="用户名">
        <vis-input v-model="form.user"></vis-input>
      </vis-form-item>

      <vis-form-item label="密码">
        <vis-input v-model="form.pwd"></vis-input>
      </vis-form-item>

      <vis-form-item label="登录方式">
        <vis-select v-model="form.type">
          <vis-option value="1" label="方式一"></vis-option>
          <vis-option value="2" label="方式二"></vis-option>
        </vis-select>
      </vis-form-item>

      <vis-form-item>
        <vis-button type="primary">登录</vis-button>
      </vis-form-item>
    </vis-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Form 表单',
      form: {
        user: null,
        pwd: null,
        type: null,
        select: null
      }
    }
  },
  methods: {
  }
}
</script>
