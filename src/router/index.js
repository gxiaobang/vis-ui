import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component(resolve) {
        require(['@/views/login/index'], resolve)
      }
    },
    {
      path: '/*',
      component(resolve) {
        let path = window.location.pathname.replace(/^\//, '')
        // views
        if (path) {
          require(['@/views/' + path + '.vue'], resolve)
        }
      }
    }
  ]
})

export default router;
