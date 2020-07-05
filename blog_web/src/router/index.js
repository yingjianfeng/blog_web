import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'HelloWorld',
      component: () => import('@/views/common/login/login')
    }
  ]
})
