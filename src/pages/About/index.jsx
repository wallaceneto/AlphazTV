import React from 'react'
import styles from './About.module.css'
import { HomepageLayout } from '../../layout'

export default function About() {
  return (
    <HomepageLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>Sobre o site</h1>
      </div>
    </HomepageLayout>
  )
}
