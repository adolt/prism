import React from 'react'
import { BACKGROUND_COLOR_ENUM } from '@/constants'
import ColorPicker from './ColorPicker'
import styles from './BackgroundPanel.module.less'

const BackgroundPanel = ({ onSelect }) => (
  <div className={styles.container}>
    <header className={styles.header}>背景色</header>
    <ColorPicker colorEnum={BACKGROUND_COLOR_ENUM} onSelect={onSelect} />
  </div>
)

export default BackgroundPanel
