import React from 'react'
import { Button } from 'antd'
import fontBold from '@/images/font-bold.png'
import fontItalic from '@/images/font-italic.png'
import fontLineThrough from '@/images/font-line-through.png'
import fontUnderline from '@/images/font-underline.png'
import styles from './FontStyle.module.less'

const ButtonGroup = Button.Group

const FontStyle = ({ onChange }) => (
  <ButtonGroup>
    <Button onClick={() => onChange('fontWeight', 'bold')}>
      <img className={styles.icon} src={fontBold} alt='bold' />
    </Button>
    <Button onClick={() => onChange('fontStyle', 'italic')}>
      <img className={styles.icon} src={fontItalic} alt='italic' />
    </Button>
    <Button onClick={() => onChange('textDecoration', 'line-through')}>
      <img className={styles.icon} src={fontLineThrough} alt='line-through' />
    </Button>
    <Button onClick={() => onChange('textDecoration', 'underline')}>
      <img className={styles.icon} src={fontUnderline} alt='underline' />
    </Button>
  </ButtonGroup>
)

export default FontStyle
