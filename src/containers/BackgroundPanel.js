import React, { useState, useEffect } from 'react'
import { getBackgroundColorEnum } from '../apis'
import ColorPicker from '../components/ColorPicker'
import styles from './BackgroundPanel.module.less'

const BackgroundPanel = ({ onSelect }) => {
  const [backgroundColors, setBackgroundColors] = useState([])

  useEffect(() => {
    getBackgroundColorEnum().then(setBackgroundColors)
  }, [])

  return (
    <div className={styles.container}>
      <header className={styles.header}>背景色</header>
      <ColorPicker colorEnum={backgroundColors} onSelect={onSelect} />
    </div>
  )
}

export default BackgroundPanel
