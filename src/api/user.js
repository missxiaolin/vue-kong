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

/**
 * 用户查询
 * @param {*} query
 */
export function userInfo (query) {
  return fetch({
    url: '/kong/user/info',
    method: 'get',
    params: query
  })
}

/**
 * 用户禁用、开启
 * @param {*} query
 */
export function userStatus (query) {
  return fetch({
    url: '/kong/user/status',
    method: 'post',
    data: query
  })
}
