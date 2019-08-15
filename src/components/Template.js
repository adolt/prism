import React, { forwardRef } from 'react'
import classNames from 'classnames'
import Text from './Text'
import styles from './Template.module.less'

const Template = forwardRef(
  ({ bg, label, image, title, header, current, onSelect }, ref) => {
    return (
      <div
        ref={ref}
        className={styles.container}
        style={{ backgroundColor: bg }}
      >
        <img
          src={label}
          alt='标签'
          className={classNames(styles.label, {
            [styles.active]: current === 'label',
          })}
          onClick={() => onSelect('label')}
        />
        <img
          src={image}
          alt='配图'
          className={classNames(styles.image, {
            [styles.active]: current === 'image',
          })}
          onClick={() => onSelect('image')}
        />
        <Text
          className={classNames(styles.title, {
            [styles.active]: current === 'text:title',
          })}
          style={title}
          onClick={() => onSelect('text:title')}
        >
          点击即可编辑此处文本
        </Text>
        <Text
          className={classNames(styles.header, {
            [styles.active]: current === 'text:header',
          })}
          style={header}
          onClick={() => onSelect('text:header')}
        >
          点击即可编辑此区域文本
        </Text>
      </div>
    )
  }
)

export default Template
