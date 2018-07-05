import fetch from '@/common/js/fetch'

/**
 * 用户列表
 * @param {*} query
 */
export function userLists (query) {
  return fetch({
    url: '/kong/user/lists',
    method: 'get',
    params: query
  })
}
