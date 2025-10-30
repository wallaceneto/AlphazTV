import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import styles from './NetlifyRedirect.module.css'
import Footer from '../../components/Footer';
import { MOBILE_WIDTH_BREAKPOINT } from '../../global/utils';

import redirect from '/assets/redirect.png';
import lobo from '/assets/lobo_preto.png';

export default function NetlifyRedirect() {
  const { t } = useTranslation();
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < MOBILE_WIDTH_BREAKPOINT) {
        setMobileMode(true);
      } else {
        setMobileMode(false);
      }
    }

    window.scrollTo(0, 0);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.overlay} />
        <img src={redirect} alt='Imagem do XG na era Howling' className={styles.image} />

        <img src={lobo} alt='Logo do site ' className={styles.logo} />

        <div className={mobileMode ? styles.textContainerMobile : styles.textContainer}>
          <h1 className={styles.title}>{t("Redirect.Alphaz TV+ has a new home!")}</h1>
          <p className={styles.text}>
            {t("Redirect.Description-1")}
          </p>
          <p className={styles.text}>
            {t("Redirect.Description-2")}
          </p>

          <div className={styles.textButton}>
            <p className={styles.text}>{t("Redirect.Check it out")}</p>
            <a href='https://alphaztvplus.pages.dev/' className={styles.button}>
              <h2 className={styles.link}>www.alphaztvplus.com.br</h2>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
