<template>
  <div class="page">
    <h3>{{ title }}</h3>
    <vis-tabs></vis-tabs>
  </div>
</template>

<script>
  import Dialog from 'vis-ui/dialog';

  export default {
    data() {
      return {
        title: 'Tabs 选项卡',
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
