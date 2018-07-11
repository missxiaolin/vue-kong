import fetch from '@/common/js/fetch'

/**
 * 服务列表
 * @param {*} query
 */
export function serviceLists (query) {
  return fetch({
    url: '/kong/service/lists',
    method: 'get',
    params: query
  })
}

/**
 * 服务添加
 * @param {*} query
 */
export function serviceAdd (query) {
  return fetch({
    url: '/kong/service/add',
    method: 'post',
    data: query
  })
}

/**
 * 服务编辑
 * @param {*} query
 */
export function serviceUpload (query) {
  return fetch({
    url: '/kong/service/upload',
    method: 'post',
    data: query
  })
}

/**
 * 服务查询
 * @param {*} query
 */
export function serviceInfo (query) {
  return fetch({
    url: '/kong/service/info',
    method: 'get',
    params: query
  })
}
