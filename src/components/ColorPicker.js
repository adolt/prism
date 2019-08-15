import React from 'react'
import { Tooltip } from 'antd'
import styles from './ColorPicker.module.less'

const ColorPicker = ({ colorEnum, onSelect, needTooltip }) => (
  <div className={styles.list}>
    {colorEnum.map(({ color, pv, clickRate }) =>
      needTooltip ? (
        <Tooltip key={color} title={`曝光次数：${pv} 点击率：${clickRate}%`}>
          <div
            className={styles.color}
            style={{ backgroundColor: color }}
            onClick={() => onSelect(color)}
          />
        </Tooltip>
      ) : (
        <div
          key={color}
          className={styles.color}
          style={{ backgroundColor: color }}
          onClick={() => onSelect(color)}
        />
      )
    )}
  </div>
)

export default ColorPicker
