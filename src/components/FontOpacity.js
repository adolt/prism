import React from 'react'
import { Slider } from 'antd'
import styles from './FontOpacity.module.less'

const FontOpacity = ({ onChange }) => (
  <div className={styles.container}>
    <span>不透明度</span>
    <Slider
      className={styles.slider}
      defaultValue={100}
      min={0}
      max={100}
      onChange={value => onChange('opacity', value / 100)}
    />
  </div>
)

export default FontOpacity
