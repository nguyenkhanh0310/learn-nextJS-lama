import React from 'react'
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Sam Nguyen</div>
      <div className={styles.text}>
        Sam Nguyen create thoughts agency @ All rights reserved
      </div>
    </div>
  )
}
