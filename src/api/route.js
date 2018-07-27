import fetch from '@/common/js/fetch'

export function getRoutes (data) {
  return fetch({
    url: '/kong/route/lists',
    method: 'get',
    params: data
  })
}
