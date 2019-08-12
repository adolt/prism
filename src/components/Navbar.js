import React from 'react'
import logo from '@/images/logo.png'
import User from './User'
import styles from './Navbar.module.less'

const Navbar = () => (
  <header className={styles.container}>
    <img src={logo} alt='logo' className={styles.logo} />
    <div className={styles.rightPanel}>
      <nav className={styles.nav}>
        <li className={styles.active}>在线作图</li>
      </nav>
      <div className={styles.split} />
      <User />
    </div>
  </header>
)

export default Navbar
