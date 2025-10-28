import React, { useEffect, useState } from 'react'
import ArrowIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.css'
import { HomepageLayout } from '../../layout'

import notFoundGif from '/assets/notfound.gif'
import Button from '../../components/Button'
import { MOBILE_WIDTH_BREAKPOINT } from '../../global/utils';

export default function NotFound() {
  const navigation = useNavigate();
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
  }, [])

  return (
    <HomepageLayout>
      <div className={mobileMode ? styles.mobileContainer : styles.container}>
        <img src={notFoundGif} className={mobileMode ? styles.gifMobile : styles.gif} />

        <div className={styles.textContainer}>
          <h1 className={styles.title}>"Something ain't right"</h1>
          <p className={styles.text}>
            {t("We can't found the page you was looking for. Check the url and try again")}
          </p>

          <Button onClick={() => navigation('/')}>
            <div className={styles.button}>
              <ArrowIcon className={styles.textButton} fontSize='medium' />
              <h2 className={styles.textButton}>{t("Back to homepage")}</h2>
            </div>
          </Button>
        </div>
      </div>
    </HomepageLayout>
  )
}
