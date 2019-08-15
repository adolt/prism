const BACKGROUND_COLOR_ENUM = [
  '#317DFB',
  '#324DFA',
  '#7B32FA',
  '#FA4932',
  '#FFAE33',
  '#0BD180',
  '#D7E6FF',
  '#D4D9FA',
  '#E2D4FA',
  '#FAD9D4',
  '#FFF0D9',
  '#D9FFE9',
]

const TEXT_COLOR_ENUM = [
  '#333333',
  '#FFFFFF',
  '#324DFA',
  '#7B32FA',
  '#FA4932',
  '#FFAE33',
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
