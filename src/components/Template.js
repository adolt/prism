import React from 'react'
import styles from './Template.module.less'

const Template = ({ bg, label, image, onSelect }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: bg }}>
      <img
        src={label}
        alt='标签'
        className={styles.label}
        onClick={() => onSelect('label')}
      />
      <img
        src={image}
        alt='配图'
        className={styles.image}
        onClick={() => onSelect('image')}
      />
    </div>
  )
}

export default Template
