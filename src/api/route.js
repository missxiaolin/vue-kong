import fetch from '@/common/js/fetch'

/**
 * 新增权限
 * @param {*} data
 */
export function addRoute (data) {
  return fetch({
    url: '/kong/route/save',
    method: 'post',
    data: data
  })
}

/**
 * 搜索
 * @param {*} data
 */
export function routeSearch (data) {
  return fetch({
    url: '/kong/route/search',
    method: 'post',
    data: data
  })
}

/**
 * 规则详情
 * @param {*} data
 */
export function infoRoute (data) {
  return fetch({
    url: '/kong/route/info',
    method: 'post',
    params: data
  })
}

/**
 * 规则删除
 * @param {*} data
 */
export function delRoute (data) {
  return fetch({
    url: '/kong/route/delete',
    method: 'post',
    params: data
  })
}

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
