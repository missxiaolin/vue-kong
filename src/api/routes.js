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
export function add (query) {
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
export function updated (query) {
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
export function info (query) {
  return fetch({
    url: '/kong/routes/info',
    method: 'get',
    params: query
  })
}
