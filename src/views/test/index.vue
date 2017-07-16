<template>
  <div class="test">
    <vis-form inline>
      <vis-form-item label="用户">
        <vis-input></vis-input>
      </vis-form-item>

      <vis-form-item label="选项">
        <vis-select v-model="select" clearable multiple>
          <!-- <vis-option value="" label="全部" disabled></vis-option> -->
          <vis-option value="1" label="选项一"></vis-option>
          <vis-option value="2" label="选项二"></vis-option>
          <vis-option value="3" label="选项三"></vis-option>
        </vis-select>
      </vis-form-item>

      <vis-form-item label="日期">
        <vis-date-picker></vis-date-picker>
      </vis-form-item>

      <vis-form-item>
        <vis-button type="primary">确定</vis-button>
      </vis-form-item>
    </vis-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: []
    }
  }
}
</script>
