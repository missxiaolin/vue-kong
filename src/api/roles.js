import fetch from '@/common/js/fetch'

/**
 * 添加
 * @param {*} data
 */
export function addRoles (data) {
  return fetch({
    url: '/kong/role/add',
    method: 'post',
    data: data
  })
}

/**
 * 详情
 * @param {*} data
 */
export function infoRoles (data) {
  return fetch({
    url: '/kong/role/info',
    method: 'get',
    params: data
  })
}

/**
 * 删除
 * @param {*} data
 */
export function delRoles (data) {
  return fetch({
    url: '/kong/role/delete',
    method: 'get',
    params: data
  })
}

/**
 * 角色列表
 * @param {*} data
 */
export function getRoles (data) {
  return fetch({
    url: '/kong/role/lists',
    method: 'get',
    params: data
  })
}

/**
 * 搜索
 * @param {*} params
 */
export function getRouters (params) {
  return fetch({
    url: '/kong/role/routers',
    method: 'post',
    data: params
  })
}

/**
 * 绑定路由
 * @param {*} params
 */
export function upRouter (params) {
  return fetch({
    url: '/kong/role/routers/update',
    method: 'post',
    data: params
  })
}

/**
 * 跟新缓存
 * @param {*} data
 */
export function reloadRole () {
  return fetch({
    url: '/kong/role/reload',
    method: 'get',
    params: {}
  })
}
