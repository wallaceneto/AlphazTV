import React, { useContext } from 'react'
import classes from './Banner.module.css'
import Header from '../Header'
import { ThemeContext } from '../../contexts'

import darkBanner from '../../assets/dark_banner.png'
import lightBanner from '../../assets/light_banner.png'

const Banner = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classes.bannerContainer}>
      <Header />
      <img
        src={theme === 'dark' ? darkBanner : lightBanner}
        className={classes.image}
        alt='imagem do grupo XG'
      />

      <div className={classes.overlay} />

      <h1 className={classes.title}>Alphaz TV+</h1>
    </div>
  )
}

export default Banner