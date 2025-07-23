import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faXTwitter, faTiktok, faBluesky } from '@fortawesome/free-brands-svg-icons'
import classes from './Footer.module.css'
import { toggleLanguage, URLs } from './lib';

const Footer = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation('Home');

  return (
    <>
      <div className={classes.background}>
        <Grid container>
          <Grid size={{ xs: 12, md: 8 }}>
            <h1 className={classes.title}>ALPHAZ TV+</h1>
            <p className={classes.description}>
              {t('Footer.Description')}
            </p>
          </Grid>

          <Grid size={{ xs: 12, md: 0 }}><br /></Grid>

          <Grid size={{ xs: 12, md: 4 }} className={classes.socialContainer}>
            <p className={classes.socialText}>{t('Footer.XG Accounts')}</p>
            <div className={classes.socialGroup}>
              <a href={URLs.xgYoutube} target='_blank'>
                <FontAwesomeIcon icon={faYoutube} className={classes.socialIcon} />
              </a>
              <a href={URLs.xgInstagram} target='_blank'>
                <FontAwesomeIcon icon={faInstagram} className={classes.socialIcon} />
              </a>
              <a href={URLs.xgTwitter} target='_blank'>
                <FontAwesomeIcon icon={faTiktok} className={classes.socialIcon} />
              </a>
              <a href={URLs.xgTwitter} target='_blank'>
                <FontAwesomeIcon icon={faXTwitter} className={classes.socialIcon} />
              </a>
            </div>

            <p className={classes.socialText}>{t('Footer.Contact')}</p>
            <div className={classes.socialGroup}>
              <a href={URLs.contactBluesky} target='_blank'>
                <FontAwesomeIcon icon={faBluesky} className={classes.socialIcon} />
              </a>
              <a href={URLs.contactTwitter} target='_blank'>
                <FontAwesomeIcon icon={faXTwitter} className={classes.socialIcon} />
              </a>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={classes.languageContainer}>
        <button className={classes.languageButton} onClick={() => toggleLanguage('pt-BR')}>
          <p className={i18n.language === 'pt-BR' ? classes.languageTextSelected : classes.languageText}>
            Português (Brasil)
          </p>
        </button>

        <span className={classes.verticalDivider} />

        <button className={classes.languageButton} onClick={() => toggleLanguage('en-US')}>
          <p className={i18n.language === 'en-US' ? classes.languageTextSelected : classes.languageText}>
            English (USA)
          </p>
        </button>
      </div>
    </>
  )
}

export default Footer