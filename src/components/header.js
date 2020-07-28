import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'

const Header = () => (
  <div className={styles.outerDiv}>
    <Link to='/' className={styles.siteHeader}>
      <h1 className={styles.siteHeaderText}>~/&nbsp;</h1>
      <h1 className={styles.siteHeaderText}>nevin&nbsp;</h1>
      <h1 className={styles.siteHeaderText}>valsaraj</h1>
    </Link>
  </div>
)

export default Header
