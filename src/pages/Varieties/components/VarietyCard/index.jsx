import React from 'react'
import { useTranslation } from 'react-i18next'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import styles from './VarietyCard.module.css'
import IconButton from '../../../../components/IconButton'

const VarietyCard = ({ name, description, cover, link }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.cardOverlay}>
        <h1 className={styles.text}>{name}</h1>
        <p className={styles.text}>{description}</p>

        <IconButton
          text={t("Watch on Youtube")}
          icon={faYoutube}
          link={link}
          color='#FFF'
        />
      </div>
      <img src={cover} className={styles.image} alt={'capa do ' + name} />
    </div>
  )
}

export default VarietyCard