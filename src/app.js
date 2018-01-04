import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import components from './components/vis-ui';
import i18n from './i18n';
import './assets/styles/transition';

Vue.use(Element, { size: 'small' });
Vue.config.productionTip = false;

Vue.prototype.$store = new Vue;

// console.log(i18n)

let vm = new Vue({
  el: '#app',
  i18n,
  data() {
    return {
      view: null
    }
  },
  mounted() {
    // console.log('ready')

    // 主页
    import('@/views/home')
      .then((view) => {
        // console.log(view)
        this.view = view;
      })
  }
})
