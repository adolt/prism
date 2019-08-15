import React, { useState, useEffect } from 'react'
import { getBackgroundColorEnum, getBannerList } from '../apis'
import { Spin } from 'antd'
import ColorPicker from '../components/ColorPicker'
import styles from './BackgroundPanel.module.less'

const BackgroundPanel = ({ onSelect }) => {
  const [loading, toggleLoading] = useState(false)
  const [backgroundColors, setBackgroundColors] = useState([])

  useEffect(() => {
    toggleLoading(true)
    getBannerList()
    getBackgroundColorEnum()
      .then(setBackgroundColors)
      .then(() => toggleLoading(false))
  }, [])

  return (
    <div className={styles.container}>
      <header className={styles.header}>背景色</header>
      <Spin spinning={loading}>
        <ColorPicker colorEnum={backgroundColors} onSelect={onSelect} />
      </Spin>
    </div>
  )
}

export default BackgroundPanel
