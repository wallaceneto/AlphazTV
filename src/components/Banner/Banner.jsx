import React from 'react'
import styles from './Banner.module.css'
import { Header } from '../Header/Header'

import darkBanner from '../../assets/dark_banner.png'
import lightBanner from '../../assets/light_banner.png'

export const Banner = ({ isDarkMode, setIsDarkMode }) => {

  return (
    <div className={styles.bannerContainer}>
      <Header theme={isDarkMode} setTheme={setIsDarkMode} />
      <img
        src={isDarkMode ? darkBanner : lightBanner}
        className={styles.image}
        alt='imagem do grupo XG'
      />

      <div className={styles.overlay} />

      <h1 className={styles.title}>Alphaz TV+</h1>
    </div>
  )
}
