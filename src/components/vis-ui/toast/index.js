import Vue from 'vue';
import Component from './main';

/* istanbul ignore next */
Component.install = (Vue) => {
  Vue.component(Component.name, Component);
};

let container;

const add = (opt) => {
  if (!container) {
    let d = document.createElement('div')
    document.body.appendChild(d)
    container = new Vue({
      template: `
        <div data-toast>
          <vis-toast v-if="show" :icon="icon">{{ content }}</vis-toast>
        </div>
      `,
      data() {
        return {
          show: false,
          content: null,
          icon: null,
          duration: null
        }
      },
      watch: {
        show(val) {
          clearTimeout(this.timer);
          if (val) {
            this.timer = setTimeout(() => {
              this.show = false;
            }, this.duration)
          }
        }
      }
    })

    container.$mount(d)
  }

  container.$nextTick(() => {
    container.show = true;
    for (let key in opt) {
      container[ key ] = opt[ key ];
    }
  })
}

Object.assign(Component, {
  // 警告
  warn(content, duration = 3000, onClose) {
    add({
      content,
      duration,
      onClose,
      icon: 'warn'
    })
  },

  // 成功
  success(content, duration = 3000, onClose) {
    add({
      content,
      duration,
      onClose,
      icon: 'success'
    })
  },

  // 信息
  info(content, duration = 3000, onClose) {
    add({
      content,
      duration,
      onClose,
      icon: 'info'
    })
  },

  // 错误
  error(content, duration = 3000, onClose) {
    add({
      content,
      duration,
      onClose,
      icon: 'error'
    })
  },

  // 加载
  loading(content, duration = 3000, onClose) {
    add({
      content,
      duration,
      onClose,
      icon: 'loading'
    })
  },

  // 销毁
  destroy() {
    clearTimeout(container.timer);
    container.show = false;
  }
})

Vue.prototype.$toast = Component;

export default Component;
