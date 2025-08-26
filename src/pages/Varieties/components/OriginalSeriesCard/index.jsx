import React from 'react'
import { useTranslation } from 'react-i18next'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import styles from './OriginalSeriesCard.module.css'
import IconButton from '../../../../components/IconButton'

const OriginalSeriesCard = ({ cover, title, description, link }) => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.container}>
      <img src={cover} className={styles.image} alt={'Capa de ' + title} />

      <div className={styles.textContainer}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>
            {description}
          </p>
        </div>

        <IconButton
          text={t("Watch all episodes")}
          icon={faYoutube}
          link={link}
        />
      </div>
    </div>
  )
}

export default OriginalSeriesCard