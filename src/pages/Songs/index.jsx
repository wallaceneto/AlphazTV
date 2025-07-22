import React from 'react'
import styles from './Songs.module.css'
import { HomepageLayout } from '../../layout'

export default function Songs() {
  return (
    <HomepageLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>Tela com as músicas</h1>
      </div>
    </HomepageLayout>
  )
}
