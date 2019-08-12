import React, { useState } from 'react'
import { DEFAULT_TEMPLATE } from '@/constants'
import MaterialPanel from './MaterialPanel'
import BackgroundPanel from '../components/BackgroundPanel'
import Board from '../components/Board'
import Template from '../components/Template'
import styles from './WorkBox.module.less'

const WorkBox = () => {
  const [bgColor, setBgColor] = useState(DEFAULT_TEMPLATE.bgColor)
  const [materialType, setMaterialType] = useState()
  const [label, setLabel] = useState(DEFAULT_TEMPLATE.label)
  const [image, setImage] = useState(DEFAULT_TEMPLATE.image)

  const setMaterial = material => {
    if (materialType === 'label') {
      setLabel(material)
    }
    if (materialType === 'image') {
      setImage(material)
    }
  }

  return (
    <div className={styles.container}>
      <MaterialPanel materialType={materialType} onSelect={setMaterial} />
      <Board>
        <Template
          bg={bgColor}
          label={label}
          image={image}
          onSelect={setMaterialType}
        />
      </Board>
      <BackgroundPanel onSelect={setBgColor} />
    </div>
  )
}

export default WorkBox
