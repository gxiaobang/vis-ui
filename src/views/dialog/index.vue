<template>
  <div class="page">
    <h3>{{ title }}</h3>
    <p>
      <vis-button @click="handleAlert">Alert</vis-button>
    </p>
    <p>
      <vis-button @click="handleConfirm">Confirm</vis-button>
    </p>
  </div>
</template>

<script>
import Dialog from 'vis-ui/dialog';

export default {
  data() {
    return {
      title: 'Dialog 弹窗'
    }
  },
  methods: {
    handleAlert() {
      Dialog.alert('我是Alert框', 'warn')
    },
    handleConfirm() {
      Dialog.confirm('我是Confirm框', 'warn')
    }
  }
}
</script>
