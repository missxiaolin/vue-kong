import fetch from '@/common/js/fetch'

/**
 * 服务列表
 */
export function apiLists () {
  return fetch({
    url: '/kong/api/lists',
    method: 'get',
    params: {}
  })
}
