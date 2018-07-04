import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/404',
      hidden: true
    }, {
      path: '/404',
      name: '404',
      component: _import('errorPage/404'),
      hidden: true
    }
  ]
})
