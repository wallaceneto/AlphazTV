import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './VideoCarousel.module.css'
import Videothumb from '../Videothumb'

const VideoCarousel = ({ playlist, hideLabel }) => {
  const { t } = useTranslation();
  const [emblaRef] = useEmblaCarousel({ align: 'start' });

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

      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {
            playlist.videos.map((video) =>
              <div className={styles.emblaSlide}>
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
        </div>
      </div>
    </div>
  )
}

export default VideoCarousel