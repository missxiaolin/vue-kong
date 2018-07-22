import fetch from '@/common/js/fetch'

/**
 * 插件添加
 */
export function pluginsAdd (query) {
  return fetch({
    url: '/kong/plugins/add',
    method: 'post',
    data: query
  })
}

/**
 * 插件修改
 */
export function pluginsUpload (query) {
  return fetch({
    url: '/kong/plugins/upload',
    method: 'post',
    data: query
  })
}

/**
 * 插件详情
 */
export function pluginsInfo (query) {
  return fetch({
    url: '/kong/plugins/info',
    method: 'get',
    params: query
  })
}

/**
 * 插件列表
 */
export function pluginsLists () {
  return fetch({
    url: '/kong/plugins/lists',
    method: 'get',
    params: {}
  })
}

/**
 * 插件删除
 */
export function pluginsDelete (query) {
  return fetch({
    url: '/kong/plugins/delete',
    method: 'get',
    params: query
  })
}
