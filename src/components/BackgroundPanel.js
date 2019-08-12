import React from 'react'
import { BACKGROUND_COLOR_ENUM } from '@/constants'
import styles from './BackgroundPanel.module.less'

const BackgroundPanel = ({ onSelect }) => (
  <div className={styles.container}>
    <header className={styles.header}>背景色</header>
    <div className={styles.list}>
      {BACKGROUND_COLOR_ENUM.map(color => (
        <div
          key={color}
          className={styles.color}
          style={{ backgroundColor: color }}
          onClick={() => onSelect(color)}
        />
      ))}
    </div>
  </div>
)

export default BackgroundPanel
