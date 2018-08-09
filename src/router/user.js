/* layout */
import layout from '@/view/layout/Layout'
const _import = require('./_import_' + process.env.NODE_ENV)

export default {
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
    }, {
      path: 'route/list',
      name: '权限列表',
      component: _import('router/routes')
    }, {
      path: 'route/add/:id',
      name: '权限添加',
      component: _import('router/add'),
      hidden: true
    }, {
      path: 'role/list',
      name: '角色管理',
      component: _import('roles/index')
    }, {
      path: 'role/add/:id',
      name: '角色添加',
      component: _import('roles/add'),
      hidden: true
    }
  ]
}
