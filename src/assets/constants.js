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
  bgColor: '#324DFA',
  label: 'https://fe.imdada.cn/heron/assets/系统通知_02.png',
  image: 'https://fe.imdada.cn/heron/assets/通知素材_05.png',
  titleStyle: { fontSize: '1.944vw', color: 'white' },
  headerStyle: { fontSize: '2.916vw', color: 'white', fontFamily: 'font4' },
}

const FONT_FAMILY_DESC = {
  font1: '方正兰亭黑体',
  font2: '方正兰亭特黑体',
  font3: '方正锐正圆简体',
  font4: '方正正大黑简体',
  font5: '方正正中黑简体',
}

export {
  BACKGROUND_COLOR_ENUM,
  TEXT_COLOR_ENUM,
  MATERIAL_TYPE_CODE,
  MATERIAL_SUBTYPE,
  MATERIAL_SUBTYPE_TITLE,
  DEFAULT_TEMPLATE,
  FONT_FAMILY_DESC,
}
