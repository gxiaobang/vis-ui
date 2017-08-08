<template>
  <div class="page">
    <h3>{{ title }}</h3>
    <vis-form>
      <vis-form-item label="开始日期">
        <vis-date-picker v-model="form.beginDate"></vis-date-picker>
      </vis-form-item>

      <vis-form-item label="结束日期">
        <vis-date-picker v-model="form.endDate"></vis-date-picker>
      </vis-form-item>
    </vis-form>

  </div>
</template>

<script>
import Dialog from 'vis-ui/dialog';

export default {
  data() {
    return {
      title: 'DatePicker 日历',
      form: {
        beginDate: null,
        endDate: null
      }
    }
  },
  methods: {
  }
}
</script>
