import React from 'react'
import { Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faSpotify, faApple } from '@fortawesome/free-brands-svg-icons'
import styles from './Album.module.css'

export const Album = ({ album }) => {
  const { t } = useTranslation()

  return (
    <Grid container className={styles.container} >
      <Grid className={styles.leftContent}>
        <img src={album.cover} alt={'Capa do album ' + album.name} className={styles.cover} />

        <div className={styles.albumInfo}>
          <h4 className={styles.albumInfoTitle}>
            {album.order}st {album.type} Album
          </h4>
          <h4 className={styles.albumInfoSubtitle}>
            {album.name}
          </h4>

          <p className={styles.tracksTitle}>{t('Tracks')}</p>
          <div className={styles.tracksContainer}>
            {album.tracks.map((track, index) =>
              <p key={index} className={styles.tracksText}>
                {`${index + 1}. ${track}`}
              </p>
            )}
          </div>
        </div>
      </Grid>

      <Grid className={styles.rightContent}>
        <a className={styles.linkButton} target='_blank' href={album.links.youtube}>
          <FontAwesomeIcon icon={faYoutube} className={styles.linkIcon} />
          <p className={styles.linkText}>Youtube</p>
        </a>

        <a className={styles.linkButton} target='_blank' href={album.links.spotify} >
          <FontAwesomeIcon icon={faSpotify} className={styles.linkIcon} />
          <p className={styles.linkText}>Spotify</p>
        </a>

        <a className={styles.linkButton} target='_blank' href={album.links.apple}>
          <FontAwesomeIcon icon={faApple} className={styles.linkIcon} />
          <p className={styles.linkText}>Apple Music</p>
        </a>
      </Grid>
    </Grid>
  )
}
