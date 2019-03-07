import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div className={styles.outerDiv}>
    <div className={styles.innerDiv}>
      <h1 className={styles.h1}>
        <Link to="/" className={styles.link}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
