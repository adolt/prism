import React from 'react'
import styles from './ColorPicker.module.less'

const ColorPicker = ({ colorEnum, onSelect }) => (
  <div className={styles.list}>
    {colorEnum.map(color => (
      <div
        key={color}
        className={styles.color}
        style={{ backgroundColor: color }}
        onClick={() => onSelect(color)}
      />
    ))}
  </div>
)

export default ColorPicker
