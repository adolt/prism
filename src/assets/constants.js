const BACKGROUND_COLOR_ENUM = [
  { color: '#317DFB' },
  { color: '#324DFA' },
  { color: '#7B32FA' },
  { color: '#FA4932' },
  { color: '#FFAE33' },
  { color: '#0BD180' },
  { color: '#D7E6FF' },
  { color: '#D4D9FA' },
  { color: '#E2D4FA' },
  { color: '#FAD9D4' },
  { color: '#FFF0D9' },
  { color: '#D9FFE9' },
]

const TEXT_COLOR_ENUM = [
  { color: '#333333' },
  { color: '#FFFFFF' },
  { color: '#324DFA' },
  { color: '#7B32FA' },
  { color: '#FA4932' },
  { color: '#FFAE33' },
]

const MATERIAL_TYPE_CODE = {
  label: 1,
  image: 2,
}

const MATERIAL_SUBTYPE = {
  label: ['systemNotice', 'prizeActivity', 'dadaMall'],
  image: ['systemAnnounce', 'prizeActivity'],
}

const MATERIAL_SUBTYPE_TITLE = {
  systemNotice: '系统通知',
  prizeActivity: '奖励活动',
  dadaMall: '达达商城',
  systemAnnounce: '系统通知',
}

const DEFAULT_TEMPLATE = {
  bgColor: '#FFAE33',
  label: 'https://fe.imdada.cn/heron/assets/奖励活动_02.png',
  image: 'https://fe.imdada.cn/heron/assets/活动素材_06.png',
}

export {
  BACKGROUND_COLOR_ENUM,
  TEXT_COLOR_ENUM,
  MATERIAL_TYPE_CODE,
  MATERIAL_SUBTYPE,
  MATERIAL_SUBTYPE_TITLE,
  DEFAULT_TEMPLATE,
}
