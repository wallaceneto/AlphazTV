import React from 'react'
import { Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { faYoutube, faSpotify, faApple } from '@fortawesome/free-brands-svg-icons'
import styles from './Album.module.css'
import IconButton from '../IconButton'

const Album = ({ album, mobileMode }) => {
  const { t } = useTranslation()

  return (
    <Grid container className={styles.container} >
      <Grid className={styles.leftContent} size={{ xs: 12, md: 10 }}>
        <img
          src={album.cover}
          alt={'Capa do album ' + album.name}
          className={mobileMode ? styles.coverMobile : styles.cover}
        />

        <div>
          <h4 className={styles.albumInfoTitle}>
            {album.order}st {album.type} Album
          </h4>
          <h4 className={styles.albumInfoSubtitle}>
            {album.name}
          </h4>

          {mobileMode ?
            <div className={styles.socialsButonsMobile}>
              <IconButton
                icon={faYoutube}
                link={album.links.youtube}
              />

              <IconButton
                icon={faSpotify}
                link={album.links.spotify}
              />

              <IconButton
                icon={faApple}
                link={album.links.apple}
              />
            </div>
            :
            <>
              <p className={styles.tracksTitle}>{t('Tracks')}</p>
              <div className={styles.tracksContainer}>
                {album.tracks.map((track, index) =>
                  <p key={index} className={styles.tracksText}>
                    {`${index + 1}. ${track}`}
                  </p>
                )}
              </div>
            </>
          }
        </div>
      </Grid>

      {mobileMode &&
        <div className={styles.tracksContainerMobile}>
          {album.tracks.map((track, index) =>
            <p key={index} className={styles.tracksText}>
              {`${index + 1}. ${track}`}
            </p>
          )}
        </div>
      }

      {!mobileMode &&
        <Grid className={styles.socialsButons} size={{ xs: 12, md: 2 }}>
          <IconButton
            text='Youtube'
            icon={faYoutube}
            link={album.links.youtube}
          />

          <IconButton
            text='Spotify'
            icon={faSpotify}
            link={album.links.spotify}
          />

          <IconButton
            text='Apple Music'
            icon={faApple}
            link={album.links.apple}
          />
        </Grid>
      }
    </Grid>
  )
}

export default Album