import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faXTwitter, faTiktok, faBluesky } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'
import { toggleLanguage } from '../../global/lib';
import { URLs } from '../../global/utils';

const Footer = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation('Home');

  return (
    <>
      <div className={styles.background}>
        <Grid container>
          <Grid size={{ xs: 12, md: 8 }}>
            <h1 className={styles.title}>ALPHAZ TV+</h1>
            <p className={styles.description}>
              {t('Footer.Description')}
            </p>
          </Grid>

          <Grid size={{ xs: 12, md: 0 }}><br /></Grid>

          <Grid size={{ xs: 12, md: 4 }} className={styles.socialContainer}>
            <p className={styles.socialText}>{t('Footer.XG Accounts')}</p>
            <div className={styles.socialGroup}>
              <a href={URLs.xgYoutube} target='_blank'>
                <FontAwesomeIcon icon={faYoutube} className={styles.socialIcon} />
              </a>
              <a href={URLs.xgInstagram} target='_blank'>
                <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
              </a>
              <a href={URLs.xgTiktok} target='_blank'>
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
      </div>

      <div className={styles.languageContainer}>
        <button className={styles.languageButton} onClick={() => toggleLanguage('pt-BR')}>
          <p className={i18n.language === 'pt-BR' ? styles.languageTextSelected : styles.languageText}>
            Português (Brasil)
          </p>
        </button>

        <span className={styles.verticalDivider} />

        <button className={styles.languageButton} onClick={() => toggleLanguage('es')}>
          <p className={i18n.language === 'es' ? styles.languageTextSelected : styles.languageText}>
            Español
          </p>
        </button>

        <span className={styles.verticalDivider} />

        <button className={styles.languageButton} onClick={() => toggleLanguage('en-US')}>
          <p className={i18n.language === 'en-US' ? styles.languageTextSelected : styles.languageText}>
            English
          </p>
        </button>

      </div>
    </>
  )
}

export default Footer