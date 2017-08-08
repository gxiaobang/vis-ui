<template>
  <div class="page">
    <h3>{{ title }}</h3>
    <vis-form inline>
      <vis-form-item label="消息">
        <vis-input
          v-model="form.input"
          @focus="handleFocus"
          @blur="handleBlur"
          :placeholder="placeholder"></vis-input>
      </vis-form-item>

      <vis-form-item>
        <vis-button type="primary" @click="handleOpenMessage">消息提示</vis-button>
      </vis-form-item>
    </vis-form>

  </div>
</template>

<script>
  import Dialog from 'vis-ui/dialog';

  export default {
    data() {
      return {
        title: 'Message 消息',
        form: {
          input: '我是消息内容'
        },
        placeholder: ''
      }
    },
    methods: {
      handleOpenMessage() {
        console.log(this.form)
        Dialog.alert(this.form.input, 'warn')
      },
      handleFocus() {
        this.placeholder = this.form.input;
        this.form.input = '';
      },
      handleBlur() {
        if (!this.form.input) {
          this.form.input = this.placeholder;
        }
      }
    }
  }
</script>
