import React from 'react'
import styles from './Board.module.less'

const Board = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default Board
