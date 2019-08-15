import React, { useState, useEffect } from 'react'
import { getBannerList, record } from './apis'
import { Spin } from 'antd'
import landing from '@/images/landing.png'
import styles from './Landing.module.less'

const Landing = () => {
  const [loading, toggleLoading] = useState(false)
  const [banners, setBanners] = useState([])

  useEffect(() => {
    toggleLoading(true)

    getBannerList()
      .then(list => {
        setBanners(list)
        return list
      })
      .then(list => {
        toggleLoading(false)

        list.forEach(({ materialList }) => record({ type: 1, materialList }))
      })
  }, [])

  const viewDetail = (url, materialList) => {
    toggleLoading(true)
    record({ type: 2, materialList })
      .then(() => (window.location.href = url))
      .then(() => toggleLoading(false))
  }

  return (
    <div className={styles.container}>
      <img src={landing} alt='' className={styles.top} />
      <p className={styles.header}>【棱镜小调研】</p>
      <p className={styles.title}>以下哪个banner入口更吸引你？</p>
      <Spin spinning={loading}>
        <div className={styles.banners}>
          {banners.map(({ img, url, materialList }) => (
            <img
              key={img}
              src={img}
              alt=''
              onClick={() => viewDetail(url, materialList)}
            />
          ))}
        </div>
      </Spin>
    </div>
  )
}

export default Landing
