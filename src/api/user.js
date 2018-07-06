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

/**
 * 用户编辑
 * @param {*} query
 */
export function userEdit (query) {
  return fetch({
    url: '/kong/user/add',
    method: 'post',
    data: query
  })
}
