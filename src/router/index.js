import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: (resolve) => {
        require(['@/views/home/index'], resolve)
      }
    },*/
    {
      path: '/test',
      name: 'test',
      component: (resolve) => {
        require(['@/views/test/index'], resolve)
      }
    }
  ]
})

export default router;
