import { stringify } from 'qs'

const base =
  process.env.NODE_ENV === 'production'
    ? 'http://growth-shine-f0da87.ndev.imdada.cn'
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

const getBackgroundColorEnum = () =>
  get('/prism/bgcolor/list').then(res => res || [])

const getMaterialList = params =>
  get('/prism/material/list', params).then(res => res || [])

const getBannerList = () => get('/prism/banner/list').then(res => res || [])

export { getBackgroundColorEnum, getMaterialList, getBannerList }
