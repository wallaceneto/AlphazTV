import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './VideoCarousel.module.css'
import Videothumb from '../Videothumb'
import EmblaCarousel from '../EmblaCarousel'

const VideoCarousel = ({ playlist, hideLabel }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>
          {t(playlist.name)}
        </h2>
        <Link
          className={styles.buttonLink}
          to={`/playlist/${playlist.name}`}
        >
          {t('Show all')}
        </Link>
      </div>

      <EmblaCarousel>
        {
          playlist.videos.map((video) =>
            <div className={styles.emblaSlide} key={video.videoId}>
              <Videothumb
                key={video.videoId}
                videoName={video.name}
                videoId={video.videoId}
                videoLink={video.link}
                hideLabel={hideLabel}
              />
            </div>
          )
        }
      </EmblaCarousel>
    </div>
  )
}

export default VideoCarousel