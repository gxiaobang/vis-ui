import Vue from 'vue';
import Component from './main';
import router from '@/assets/js/router';

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
        <div data-dialog>
          <vis-dialog
            v-for="(item, index) in data"
            :key="index"
            :visible.sync="item.visible"
            :title="item.title"
            :type="item.type"
            :icon="item.icon"
          >
            <component :is="item.body" slot="body"></component>
            {{ item.content }}
            <component :is="item.footer" slot="footer"></component>
          </vis-dialog>
        </div>
      `,
      data() {
        return {
          data: []
        }
      },
      watch: {
        data(arr) {
          for (let i = 0; i < arr.length; i++) {
            if (!arr[i].visible) {
              arr.splice(i, 1)
              i--;
            }
          }
        }
      }
    })

    container.$mount(d)
  }

  container.$nextTick(() => {
    container.data.push({
      ...opt,
      visible: true
    })
  })
}

Object.assign(Component, {
  // 关闭当前
  alert(content, icon, onOk) {
    add({
      type: 'alert',
      title: '提示框',
      content, icon,
      onOk,
      footer: {
        template: `<vis-button type="primary" @click="handleClick">确定</vis-button>`,
        methods: {
          handleClick() {
            // console.log('确定')
            Component.close();
          }
        }
      }
    });
  },
  confirm(content, icon, onOk) {
    add({
      type: 'confirm',
      title: '提示框',
      content, icon,
      onOk,
      footer: {
        template: `
          <div>
            <vis-button type="primary" @click="handleClick">确定</vis-button>
            <vis-button type="default" @click="handleClick">取消</vis-button>
          </div>
        `,
        methods: {
          handleClick() {
            // console.log('确定')
            Component.close();
          }
        }
      }
    });
  },
  // 打开页面
  open({ url, title }) {
    let route = router.getLocation(url);
    url = router.getPageURL(url);
    import('@/views/' + url + '.vue')
      .then((component) => {
        add({
          type: 'open',
          title,
          body: {
            template: '<com :route="route"></com>',
            data() {
              return { route }
            },
            components: { 'com': component }
          }
        });
      })
  },
  // 关闭当前
  closeCurrent() {
    let { data } = container;
    for (let i = data.length - 1; i > -1; i--) {
      if (data[i].type == 'open') {
        data.splice(i, 1);
        break;
      }
    }
  },
  // 关闭
  close() {
    let { data } = container;
    data.pop();
  }
})

Vue.prototype.$dialog = Component;

/*$dialog.open({
  url: 'xxx',
  title: '123'
})

$dialog.alert('xxxx', 'warn')*/

export default Component;
