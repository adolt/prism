import React, { useState } from 'react'
import { TEXT_COLOR_ENUM } from '@/constants'
import { Select, InputNumber } from 'antd'
import ColorPicker from './ColorPicker'
import FontStyle from './FontStyle'
import FontOpacity from './FontOpacity'
import styles from './TextPropertyPanel.module.less'

const SelectOption = Select.Option

const TextPropertyPanel = ({ onChange }) => {
  const [fontFamily, setFontFamily] = useState('font1')

  const changeProperty = (property, value) => {
    if (property === 'fontFamily') {
      setFontFamily(value)
    }
    onChange(property, value)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>文字颜色</header>
      <ColorPicker
        colorEnum={TEXT_COLOR_ENUM}
        onSelect={value => changeProperty('color', value)}
      />
      <div className={styles.properties}>
        <Select
          defaultValue={fontFamily}
          className={styles[fontFamily]}
          onSelect={value => changeProperty('fontFamily', value)}
        >
          {Array.from({ length: 5 }, (v, i) => `font${i + 1}`).map(
            fontFamily => (
              <SelectOption
                value={fontFamily}
                key={fontFamily}
                className={styles[fontFamily]}
              >
                汉体
              </SelectOption>
            )
          )}
        </Select>
        <InputNumber
          min={12}
          max={32}
          defaultValue={14}
          onChange={value => changeProperty('fontSize', value)}
        />
        <FontStyle onChange={changeProperty} />
        <FontOpacity onChange={changeProperty} />
      </div>
    </div>
  )
}

export default TextPropertyPanel
