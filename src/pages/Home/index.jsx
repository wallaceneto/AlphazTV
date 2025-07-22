import React from 'react'
import styles from './Home.module.css'
import { HomepageLayout } from '../../layout'

export default function Home() {
  return (
    <HomepageLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>Tela inicial</h1>
      </div>
    </HomepageLayout>
  )
}
