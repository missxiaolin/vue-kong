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
 * 用户角色列表
 * @param {*} query
 */
export function userRoles (query) {
  return fetch({
    url: '/kong/user/roles',
    method: 'get',
    params: query
  })
}

/**
 * 绑定角色
 * @param {*} query
 */
export function userUpdateRoles (query) {
  return fetch({
    url: '/kong/user/update/roles',
    method: 'post',
    data: query
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

/**
 * 列表权限
 * @param {*} query
 */
export function userPower () {
  return fetch({
    url: '/kong/user/power',
    method: 'get',
    params: {}
  })
}

/**
 * 按钮权限
 * @param {*} query
 */
export function btnPower (query) {
  return fetch({
    url: '/kong/user/btn/power',
    method: 'post',
    data: query
  })
}
