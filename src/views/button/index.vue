<template>
  <div class="page">
    <h3>{{ title }}</h3>
    <p>
      <vis-button type="default">Default</vis-button>
    </p>

    <p>
      <vis-button type="primary">Primary</vis-button>
    </p>

    <p>
      <vis-button type="ghost">Ghost</vis-button>
    </p>

    <p>
      <vis-button type="success">Success</vis-button>
    </p>

    <p>
      <vis-button type="info">Info</vis-button>
    </p>

    <p>
      <vis-button type="warn">Warn</vis-button>
    </p>

    <p>
      <vis-button type="danger">Danger</vis-button>
    </p>
  </div>
</template>

<script>
import Dialog from 'vis-ui/dialog';

export default {
  data() {
    return {
      title: 'Button 按钮'
    }
  },
  methods: {
  }
}
</script>
