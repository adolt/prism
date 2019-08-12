// import { stringify } from 'qs'

// const get = (url, params) =>
//   fetch(`${url}?${stringify(params)}`)
//     .then(response => {
//       if (response.ok) {
//         return response.json()
//       }
//       return { status: 'fail' }
//     })
//     .then(
//       json => {
//         if (json.status === 'ok') {
//           return json.content
//         }
//         return null
//       },
//       error => null
//     )

// const getMaterialList = type =>
//   get('prism/material/list', { type }).then(res => res || {})

const labelList = {
  系统通知: [
    require('@/labels/notice/1.png'),
    require('@/labels/notice/2.png'),
    require('@/labels/notice/3.png'),
    require('@/labels/notice/4.png'),
  ],
  奖励活动: [
    require('@/labels/activity/1.png'),
    require('@/labels/activity/2.png'),
    require('@/labels/activity/3.png'),
    require('@/labels/activity/4.png'),
  ],
  达达商城: [
    require('@/labels/mall/1.png'),
    require('@/labels/mall/2.png'),
    require('@/labels/mall/3.png'),
    require('@/labels/mall/4.png'),
  ],
}

const imageList = {
  系统通知: Array(12)
    .fill(null)
    .map((noop, idx) => require(`@/materials/notice/${idx + 1}.png`)),
  奖励活动: Array(12)
    .fill(null)
    .map((noop, idx) => require(`@/materials/activity/${idx + 1}.png`)),
}

const getMaterialList = type =>
  Promise.resolve(
    type === 'label' ? labelList : type === 'image' ? imageList : []
  )

export { getMaterialList }
