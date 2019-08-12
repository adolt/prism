import React, { useState, useEffect } from 'react'
import { getMaterialList } from '../apis'
import styles from './MaterialPanel.module.less'

const MaterialPanel = ({ materialType, onSelect }) => {
  const [materials, setMaterials] = useState({})

  useEffect(() => {
    if (!materialType) return
    getMaterialList(materialType).then(setMaterials)
  }, [materialType])

  if (!materialType) {
    return <div className={styles.container} />
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>元素替换</header>
      <div className={styles.list}>
        {Object.keys(materials).map(type => (
          <div key={type} className={styles.section}>
            <p className={styles.title}>{type}</p>
            <div className={styles.content}>
              {materials[type].map(material => (
                <div
                  key={material}
                  className={styles.material}
                  onClick={() => onSelect(material)}
                >
                  <img
                    src={material}
                    alt='素材'
                    className={styles[materialType]}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MaterialPanel
