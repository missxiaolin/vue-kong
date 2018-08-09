/* layout */
import layout from '@/view/layout/Layout'
const _import = require('./_import_' + process.env.NODE_ENV)

export default {
  path: '/kong',
  name: 'Kong',
  component: layout,
  redirect: '/kong/service/list',
  icon: 'icon-fuwuqi',
  noDropdown: false,
  children: [
    {
      path: 'service/list',
      component: _import('service/index'),
      name: '服务列表'
    },
    {
      path: 'service/edit/:id',
      component: _import('service/edit'),
      name: '服务编辑',
      hidden: true
    }, {
      path: 'service/add',
      component: _import('service/add'),
      name: '服务添加',
      hidden: true
    }, {
      path: 'consumer/list',
      component: _import('consumer/index'),
      name: '消费者列表'
    }, {
      path: 'apis/list',
      component: _import('apis/index'),
      name: 'API列表'
    },
    {
      path: 'apis/edit/:id',
      component: _import('apis/edit'),
      name: 'API编辑',
      hidden: true
    }, {
      path: 'apis/add',
      component: _import('apis/add'),
      name: 'API添加',
      hidden: true
    }, {
      path: 'routes/list',
      component: _import('routes/index'),
      name: '路由列表'
    }, {
      path: 'routes/add',
      component: _import('routes/add'),
      name: '路由添加',
      hidden: true
    }, {
      path: 'routes/edit/:id',
      component: _import('routes/edit'),
      name: '路由编辑',
      hidden: true
    }, {
      path: 'plugins/list',
      component: _import('plugins/index'),
      name: '插件列表'
    },
    {
      path: 'plugins/edit/:id',
      component: _import('plugins/edit'),
      name: '插件编辑',
      hidden: true
    }, {
      path: 'plugins/add',
      component: _import('plugins/add'),
      name: '插件添加',
      hidden: true
    }
  ]
}
