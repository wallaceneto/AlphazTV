import React, { useContext, useEffect, useState } from 'react'
import styles from './Banner.module.css'
import Header from '../Header'
import { ThemeContext } from '../../contexts'

import darkBanner from '../../assets/dark_logo_banner.png'
import lightBanner from '../../assets/light_logo_banner.png'
import mobileBanner from '../../assets/mobile_logo_banner.png'

const Banner = () => {
  const { theme } = useContext(ThemeContext);
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 767) {
        setMobileMode(true);
      } else {
        setMobileMode(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <div className={styles.bannerContainer}>
      <Header />
      <img
        src={
          mobileMode ? mobileBanner :
            theme === 'dark' ? darkBanner : lightBanner
        }
        className={styles.image}
        alt='imagem do grupo XG'
      />
    </div>
  )
}

export default Banner