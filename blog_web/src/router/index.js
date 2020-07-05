import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('@/views/common/login/login')
    },
    {
      path: '/user',
      component: () => import('@/views/user/user')
    }
  ]
})
