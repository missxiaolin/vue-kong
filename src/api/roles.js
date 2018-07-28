import fetch from '@/common/js/fetch'

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
