import React, { useState, useMemo, useRef } from 'react'
import { omit } from 'lodash-es'
import html2canvas from 'html2canvas'
import { DEFAULT_TEMPLATE } from '@/constants'
import { Button } from 'antd'
import MaterialPanel from './MaterialPanel'
import BackgroundPanel from './BackgroundPanel'
import TextPropertyPanel from '../components/TextPropertyPanel'
import Board from '../components/Board'
import Template from '../components/Template'
import styles from './WorkBox.module.less'

const WorkBox = () => {
  const [downloading, setDownloading] = useState(false)
  const [materialType, setMaterialType] = useState()
  const [bgColor, setBgColor] = useState(DEFAULT_TEMPLATE.bgColor)
  const [label, setLabel] = useState(DEFAULT_TEMPLATE.label)
  const [image, setImage] = useState(DEFAULT_TEMPLATE.image)
  const [titleStyle, setTitleStyle] = useState(DEFAULT_TEMPLATE.titleStyle)
  const [headerStyle, setHeaderStyle] = useState(DEFAULT_TEMPLATE.headerStyle)

  const banner = useRef(null)

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
      if (titleStyle[property] === value && property !== 'fontSize') {
        setTitleStyle(omit(titleStyle, property))
      } else {
        setTitleStyle({ ...titleStyle, [property]: value })
      }
    }
    if (materialType.endsWith('header')) {
      if (headerStyle[property] === value && property !== 'fontSize') {
        setHeaderStyle(omit(headerStyle, property))
      } else {
        setHeaderStyle({ ...headerStyle, [property]: value })
      }
    }
  }

  const download = () => {
    setDownloading(true)

    html2canvas(banner.current, {
      useCORS: true,
      y: banner.current.offsetTop,
    }).then(canvas => {
      const link = document.createElement('a')
      link.setAttribute('download', 'banner.png')
      link.setAttribute(
        'href',
        canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
      )
      link.click()

      setDownloading(false)
    })
  }

  const textEditing = useMemo(
    () => materialType && materialType.startsWith('text:'),
    [materialType]
  )

  return (
    <>
      <div className={styles.container}>
        <MaterialPanel
          textEditing={textEditing}
          materialType={materialType}
          onSelect={setMaterial}
        />
        <Board onClick={setMaterialType}>
          <Template
            ref={banner}
            bg={bgColor}
            label={label}
            image={image}
            title={titleStyle}
            header={headerStyle}
            current={materialType}
            onSelect={setMaterialType}
          />
        </Board>
        {textEditing ? (
          <TextPropertyPanel onChange={updateTextStyle} />
        ) : (
          <BackgroundPanel onSelect={setBgColor} />
        )}
      </div>
      <div className={styles.download}>
        <Button
          type='primary'
          icon='download'
          size='large'
          onClick={download}
          loading={downloading}
        >
          下载
        </Button>
      </div>
    </>
  )
}

export default WorkBox
