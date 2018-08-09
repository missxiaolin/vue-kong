/* layout */
import layout from '@/view/layout/Layout'
const _import = require('./_import_' + process.env.NODE_ENV)

export default {
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
}
