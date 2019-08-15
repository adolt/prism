import { stringify } from 'qs'

const base =
  process.env.NODE_ENV !== 'production'
    ? 'http://toc-service-1f46c3.ndev.imdada.cn/toc/corp'
    : ''

const get = (url, params) =>
  fetch(`${base}${url}?${stringify(params)}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return { status: 'fail' }
    })
    .then(
      json => {
        if (json.status === 'success') {
          return json.content
        }
        return null
      },
      error => null
    )

const post = (url, payload) => {
  return window
    .fetch(`${base}${url}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(payload),
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return { status: 'fail' }
    })
    .then(
      json => {
        if (json.status === 'success') {
          return json.content
        }
        return null
      },
      error => null
    )
}

const getBackgroundColorEnum = () =>
  get('/prism/bgcolor/list').then(res => res || [])

const getMaterialList = params =>
  get('/prism/material/list', params).then(res => res || [])

const getBannerList = () => get('/prism/banner/list').then(res => res || [])

const record = payload => post('/prism/record', payload)

export { getBackgroundColorEnum, getMaterialList, getBannerList, record }
