import React, { useState, useMemo } from 'react'
import { omit } from 'lodash-es'
import { DEFAULT_TEMPLATE } from '@/constants'
import MaterialPanel from './MaterialPanel'
import BackgroundPanel from '../components/BackgroundPanel'
import TextPropertyPanel from '../components/TextPropertyPanel'
import Board from '../components/Board'
import Template from '../components/Template'
import styles from './WorkBox.module.less'

const WorkBox = () => {
  const [materialType, setMaterialType] = useState()
  const [bgColor, setBgColor] = useState(DEFAULT_TEMPLATE.bgColor)
  const [label, setLabel] = useState(DEFAULT_TEMPLATE.label)
  const [image, setImage] = useState(DEFAULT_TEMPLATE.image)
  const [titleStyle, setTitleStyle] = useState({})
  const [headerStyle, setHeaderStyle] = useState({})

  const setMaterial = material => {
    if (materialType === 'label') {
      setLabel(material)
    }
    if (materialType === 'image') {
      setImage(material)
    }
  }

  const updateTextStyle = (property, value) => {
    if (materialType.endsWith('title')) {
      if (titleStyle[property] === value) {
        setTitleStyle(omit(titleStyle, property))
      } else {
        setTitleStyle({ ...titleStyle, [property]: value })
      }
    }
    if (materialType.endsWith('header')) {
      if (headerStyle[property] === value) {
        setHeaderStyle(omit(headerStyle, property))
      } else {
        setHeaderStyle({ ...headerStyle, [property]: value })
      }
    }
  }

  const textEditing = useMemo(
    () => materialType && materialType.startsWith('text:'),
    [materialType]
  )

  return (
    <div className={styles.container}>
      <MaterialPanel
        textEditing={textEditing}
        materialType={materialType}
        onSelect={setMaterial}
      />
      <Board>
        <Template
          bg={bgColor}
          label={label}
          image={image}
          title={titleStyle}
          header={headerStyle}
          onSelect={setMaterialType}
        />
      </Board>
      {textEditing ? (
        <TextPropertyPanel onChange={updateTextStyle} />
      ) : (
        <BackgroundPanel onSelect={setBgColor} />
      )}
    </div>
  )
}

export default WorkBox
