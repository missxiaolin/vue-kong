import fetch from '@/common/js/fetch'

/**
 * api列表
 */
export function routeLists () {
  return fetch({
    url: '/kong/routes/lists',
    method: 'get',
    params: {}
  })
}
