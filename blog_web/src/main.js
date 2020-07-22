// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
//markdown
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor);
Vue.config.productionTip = false

import axios from 'axios'

Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Router from 'vue-router'
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:8111/'
axios.interceptors.request.use(config => {
  
  config.headers.common['cloud_blog_token'] = window.localStorage.getItem("cloud_blog_token")
  return config;
})
// http response 响应拦截器
axios.interceptors.response.use(response => {
 
  switch (response.data.code) {
    case 500:
      localStorage.removeItem('token');
      router.replace({
        path: '/'
      })
      ElementUI.Message({
        message: '未登录',
        type: 'error'
      });
      return null;
  }
  return response;
}, error => {
  if (error.response) {
    // 返回接口返回的错误信息
    return Promise.reject(error.response.data);
  }
});



import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';


Vue.component(CollapseTransition.name, CollapseTransition)

