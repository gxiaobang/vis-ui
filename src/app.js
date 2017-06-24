import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import components from '@/components/vis-ui';
import router from '@/router';

Vue.use(Element)
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue;

const Mount = {
  template: `
    <div class="mount">
      <div v-for="item in data">
        <component :is="item.name"></component>
      </div>
    </div>
  `,
  data() {
    return {
      data: [{ name: 'vis-dialog' }]
    }
  }
}

let vm = new Vue({
  el: '#app',
  router,
  data() {
    return {
      view: null
    }
  },
  mounted() {
    // console.log('ready')

    // 主页
    if (window.location.pathname == '/login') {
      import('@/views/login')
        .then((view) => {
          // console.log(view)
          this.view = view;
        })
    }
    else {
      import('@/views/home')
        .then((view) => {
          // console.log(view)
          this.view = view;
        })
    }
  },
  components: { Mount }
})
