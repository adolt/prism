import React from 'react'
import avatar from '@/images/avatar.png'
import styles from './User.module.less'

const User = () => (
  <div className={styles.container}>
    <img className={styles.avatar} src={avatar} alt='头像' />
    <span className={styles.name}>用户名</span>
  </div>
)

export default User
