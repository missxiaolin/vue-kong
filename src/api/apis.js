import fetch from '@/common/js/fetch'

/**
 * api列表
 */
export function apiLists () {
  return fetch({
    url: '/kong/api/lists',
    method: 'get',
    params: {}
  })
}
