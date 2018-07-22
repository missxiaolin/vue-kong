import fetch from '@/common/js/fetch'

/**
 * routes列表
 */
export function routeLists () {
  return fetch({
    url: '/kong/routes/lists',
    method: 'get',
    params: {}
  })
}

/**
 * routes添加
 * @param {*} query
 */
export function routesAdd (query) {
  return fetch({
    url: '/kong/routes/add',
    method: 'post',
    data: query
  })
}

/**
 * routes修改
 * @param {*} query
 */
export function routesUpdated (query) {
  return fetch({
    url: '/kong/routes/upload',
    method: 'post',
    data: query
  })
}

/**
 * routes查询
 * @param {*} query
 */
export function routesInfo (query) {
  return fetch({
    url: '/kong/routes/info',
    method: 'get',
    params: query
  })
}

/**
 * routes删除
 * @param {*} query
 */
export function routesDelete (query) {
  return fetch({
    url: '/kong/routes/delete',
    method: 'get',
    params: query
  })
}
