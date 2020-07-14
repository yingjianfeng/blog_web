import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: () => import('@/views/common/login/login')
    },
    {
      path: '/user',
      component: () => import('@/views/user/user'),
      children: [
        {
          path: 'personal',
          component: () => import('@/views/user/personal/personal'),
        },
        {
          path: 'baseinfo',
          component: () => import('@/views/user/baseinfo/baseinfo'),
        },
        {
          path: 'index',
          component: () => import('@/views/user/index/index'),
        }
        ,
        {
          path: 'questions',
          component: () => import('@/views/user/questions/questions'),
        },
        {
          path: 'blog',
          component: () => import('@/views/user/blog/blog'),
        },
        {
          path: 'bug',
          component: () => import('@/views/user/bug/bug'),
        }
      ]
    }
  ]
})
