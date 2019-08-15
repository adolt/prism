import React from 'react'
import styles from './Board.module.less'

const Board = ({ children, onClick }) => (
  <div
    className={styles.container}
    onClick={e => {
      // 重置素材选中状态
      e.target.tagName.toUpperCase() === 'DIV' && onClick()
    }}
  >
    {children}
  </div>
)

export default Board
