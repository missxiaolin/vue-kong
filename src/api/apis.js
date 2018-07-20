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

/**
 * api添加
 * @param {*} query
 */
export function add (query) {
  return fetch({
    url: '/kong/api/add',
    method: 'post',
    data: query
  })
}

/**
 * api修改
 * @param {*} query
 */
export function updated (query) {
  return fetch({
    url: '/kong/api/upload',
    method: 'post',
    data: query
  })
}

/**
 * api查询
 * @param {*} query
 */
export function apiInfo (query) {
  return fetch({
    url: '/kong/api/info',
    method: 'get',
    params: query
  })
}

/**
 * api查询
 * @param {*} query
 */
export function deleteApi (query) {
  return fetch({
    url: '/kong/api/delete',
    method: 'get',
    params: query
  })
}
