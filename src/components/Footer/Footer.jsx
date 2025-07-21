import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faXTwitter, faTiktok, faBluesky } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'
import { toggleLanguage, URLs } from './lib';

import brIcon from '../../assets/languages/brazil.svg'
import usaIcon from '../../assets/languages/usa.svg'

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.background}>
      <Grid container>
        <Grid size={{ xs: 12, md: 8 }}>
          <h1 className={styles.title}>ALPHAZ TV+</h1>
          <p className={styles.description}>
            {t('Footer.Description')}
          </p>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }} className={styles.socialContainer}>
          <p className={styles.socialText}>{t('Language')}</p>
          <div className={styles.socialGroup}>
            <button className={styles.flagButton} onClick={() => toggleLanguage('pt-BR')}>
              <img src={brIcon} alt='Bandeira do Brasil' width={30} />
            </button>
            <button className={styles.flagButton} onClick={() => toggleLanguage('en-US')}>
              <img src={usaIcon} alt='US flag' width={30} />
            </button>
          </div>

          <p className={styles.socialText}>{t('Footer.XG Accounts')}</p>
          <div className={styles.socialGroup}>
            <a href={URLs.xgYoutube} target='_blank'>
              <FontAwesomeIcon icon={faYoutube} className={styles.socialIcon} />
            </a>
            <a href={URLs.xgInstagram} target='_blank'>
              <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
            </a>
            <a href={URLs.xgTwitter} target='_blank'>
              <FontAwesomeIcon icon={faTiktok} className={styles.socialIcon} />
            </a>
            <a href={URLs.xgTwitter} target='_blank'>
              <FontAwesomeIcon icon={faXTwitter} className={styles.socialIcon} />
            </a>
          </div>

          <p className={styles.socialText}>{t('Footer.Contact')}</p>
          <div className={styles.socialGroup}>
            <a href={URLs.contactBluesky} target='_blank'>
              <FontAwesomeIcon icon={faBluesky} className={styles.socialIcon} />
            </a>
            <a href={URLs.contactTwitter} target='_blank'>
              <FontAwesomeIcon icon={faXTwitter} className={styles.socialIcon} />
            </a>
          </div>
        </Grid>
      </Grid>

      <div className={styles.bottomContent}>
        <p>{t('Footer.All rights reserved', { year: '2025' })}</p>
      </div>
    </div>
  )
}
