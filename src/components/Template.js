import React from 'react'
import Text from './Text'
import styles from './Template.module.less'

const Template = ({ bg, label, image, title, header, onSelect }) => {
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
      <Text
        className={styles.title}
        style={title}
        onClick={() => onSelect('text:title')}
      >
        点击即可编辑此区域文本
      </Text>
      <Text
        className={styles.header}
        style={header}
        onClick={() => onSelect('text:header')}
      >
        点击即可编辑此区域文本
      </Text>
    </div>
  )
}

export default Template
