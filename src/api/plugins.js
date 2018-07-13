import fetch from '@/common/js/fetch'

/**
 * api列表
 */
export function pluginsLists () {
  return fetch({
    url: '/kong/plugins/lists',
    method: 'get',
    params: {}
  })
}
