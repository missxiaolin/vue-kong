import fetch from '@/common/js/fetch'

/**
 * 路由列表
 * @param {*} data
 */
export function getRoutes (data) {
  return fetch({
    url: '/kong/route/lists',
    method: 'get',
    params: data
  })
}

/**
 * 刷新路由缓存
 */
export function reloadRoutes () {
  return fetch({
    url: '/kong/route/reload',
    method: 'get',
    params: {}
  })
}
