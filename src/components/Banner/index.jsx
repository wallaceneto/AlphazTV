import React, { useContext } from 'react'
import styles from './Banner.module.css'
import Header from '../Header'
import { ThemeContext } from '../../contexts'

import darkBanner from '../../assets/dark_banner.png'
import lightBanner from '../../assets/light_banner.png'
const Banner = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.bannerContainer}>
      <Header />
      <img
        src={theme === 'dark' ? darkBanner : lightBanner}
        className={styles.image}
        alt='imagem do grupo XG'
      />

      <div className={styles.overlay} />

      <h1 className={styles.title}>Alphaz TV+</h1>
    </div>
  )
}

export default Banner