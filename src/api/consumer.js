import fetch from '@/common/js/fetch'

/**
 * 消费者列表
 * @param {*} query
 */
export function lists (query) {
  return fetch({
    url: '/kong/consumer/lists',
    method: 'get',
    params: query
  })
}

/**
 * 服务添加
 * @param {*} query
 */
export function add (query) {
  return fetch({
    url: '/kong/consumer/add',
    method: 'post',
    data: query
  })
}

/**
 * 服务编辑
 * @param {*} query
 */
export function updated (query) {
  return fetch({
    url: '/kong/consumer/upload',
    method: 'post',
    data: query
  })
}

/**
 * 消费者查询
 * @param {*} query
 */
export function info (query) {
  return fetch({
    url: '/kong/consumer/info',
    method: 'get',
    params: query
  })
}
