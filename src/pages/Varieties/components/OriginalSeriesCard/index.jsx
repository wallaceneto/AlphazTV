import React from 'react'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import styles from './OriginalSeriesCard.module.css'
import IconButton from '../../../../components/IconButton'

const OriginalSeriesCard = ({ cover, title, description, link }) => {
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
          text='Assistir aos episódios'
          icon={faYoutube}
          link={link}
        />
      </div>
    </div>
  )
}

export default OriginalSeriesCard