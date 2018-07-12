import Vue from 'vue'
import Router from 'vue-router'

/* layout */
import layout from '@/view/layout/Layout'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const asyncRouterMap = [
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }, {
    path: '/404',
    name: '404',
    component: _import('errorPage/404'),
    hidden: true
  }, {
    path: '/error',
    name: '401',
    component: layout,
    redirect: '/error/401',
    hidden: true,
    children: [
      {
        path: '401',
        component: _import('errorPage/401')
      }
    ]
  }, {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: _import('dashboard/index')
      }
    ]
  }, {
    path: '/login', // 登录
    name: 'login',
    hidden: true,
    component: _import('login/login')
  }, {
    path: '/introduction',
    name: '设置',
    component: layout,
    redirect: '/introduction/index',
    icon: 'icon-iconfonticonfontjixieqimo',
    noDropdown: false,
    children: [
      {
        path: 'index',
        component: _import('introduction/index'),
        name: '介绍'
      }
    ]
  }, {
    path: '/user',
    name: '用户中心',
    component: layout,
    redirect: '/user/index',
    icon: 'icon-ren',
    noDropdown: false,
    children: [
      {
        path: 'index',
        component: _import('user/index'),
        name: '用户列表'
      },
      {
        path: 'edit/:id',
        component: _import('user/edit'),
        name: '用户编辑',
        hidden: true
      }
    ]
  }, {
    path: '/service',
    name: '服务中心',
    component: layout,
    redirect: '/service/index',
    icon: 'icon-fuwuqi',
    noDropdown: false,
    children: [
      {
        path: 'index',
        component: _import('service/index'),
        name: '服务列表'
      },
      {
        path: 'edit/:id',
        component: _import('service/edit'),
        name: '服务编辑',
        hidden: true
      }, {
        path: 'add',
        component: _import('service/add'),
        name: '服务添加',
        hidden: true
      }
    ]
  }, {
    path: '/consumer',
    name: '消费者中心',
    component: layout,
    redirect: '/consumer/index',
    icon: 'icon-pinpaixiaofeizhe',
    noDropdown: false,
    children: [
      {
        path: 'index',
        component: _import('consumer/index'),
        name: '消费者列表'
      }
    ]
  }, {
    path: '/apis',
    name: 'API中心',
    component: layout,
    redirect: '/apis/index',
    icon: 'icon-APIwendang',
    noDropdown: false,
    children: [
      {
        path: 'index',
        component: _import('apis/index'),
        name: 'API列表'
      },
      {
        path: 'edit/:id',
        component: _import('apis/edit'),
        name: 'API编辑',
        hidden: true
      }, {
        path: 'add',
        component: _import('apis/add'),
        name: 'API添加',
        hidden: true
      }
    ]
  }, {
    path: '/routes',
    name: '路由中心',
    component: layout,
    redirect: '/routes/index',
    icon: 'icon-luyou',
    noDropdown: false,
    children: [
      {
        path: 'index',
        component: _import('routes/index'),
        name: '路由列表'
      },
      {
        path: 'edit/:id',
        component: _import('routes/edit'),
        name: '路由编辑',
        hidden: true
      }, {
        path: 'add',
        component: _import('routes/add'),
        name: '路由添加',
        hidden: true
      }
    ]
  }, {
    path: '/plugins',
    name: '插件中心',
    component: layout,
    redirect: '/plugins/index',
    icon: 'icon-zuzhiheguanlitubiao-',
    noDropdown: false,
    children: [
      {
        path: 'index',
        component: _import('plugins/index'),
        name: '插件列表'
      },
      {
        path: 'edit/:id',
        component: _import('plugins/edit'),
        name: '插件编辑',
        hidden: true
      }, {
        path: 'add',
        component: _import('plugins/add'),
        name: '插件添加',
        hidden: true
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  routes: asyncRouterMap
})
