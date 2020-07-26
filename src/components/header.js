import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'

const Header = () => (
  <div className={styles.outerDiv}>
      <h1>
        <Link to="/" className={styles.link}>
          ~ / nevin valsaraj
        </Link>
      </h1>
  </div>
)

export default Header
