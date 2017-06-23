import Vue from 'vue';
import Home from '@/views/home';
import components from '@/components/vis-ui';

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue;

// 挂载
const Mount = {
  template: `
    <div class="mount">
      <vis-dialog></vis-dialog>
    </div>
  `
}

// app
const App = {
  template: `
    <div class="app">
      <home></home>
      <mount></mount>
    </div>
  `,
  components: { Home, Mount }
}

let vm = new Vue({
  el: '#app',
  template: '<app/>',
  components: { App }
})
