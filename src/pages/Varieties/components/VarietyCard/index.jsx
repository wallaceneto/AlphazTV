import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Info from '@mui/icons-material/Info'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import styles from './VarietyCard.module.css'
import IconButton from '../../../../components/IconButton'

const VarietyCard = ({ name, description, cover, link, mobileMode }) => {
  const { t } = useTranslation();
  const [openOverlay, setOpenOverlay] = useState(false);

  return (
    <div
      className={styles.container}
      onClick={mobileMode ? () => setOpenOverlay(!openOverlay) : null}
    >
      {(!mobileMode || (mobileMode && openOverlay)) &&
        <div
          className={mobileMode
            ? styles.mobileCardOverlay
            : styles.cardOverlay
          }
        >
          <h1 className={styles.text}>{name}</h1>
          <p className={styles.text}>{description}</p>

          <IconButton
            text={t("Watch on Youtube")}
            icon={faYoutube}
            link={link}
            color='#FFF'
          />
        </div>
      }

      <img src={cover} className={styles.image} alt={'capa do ' + name} />

      {mobileMode && !openOverlay &&
        <Info className={styles.icon} fontSize='large' />
      }
    </div>
  )
}

export default VarietyCard