import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './VideoCarousel.module.css'
import Videothumb from '../Videothumb'
import EmblaCarousel from '../EmblaCarousel'
import { fetchVideos, fetchVideosWithCache } from './lib'

const VideoCarousel = ({ playlist, hideLabel, isFirstCarousel, cacheKey }) => {
  const { t } = useTranslation();
  const [playlistItems, setPlaylistItems] = useState([]);

  useEffect(() => {
    if (cacheKey) {
      fetchVideosWithCache(cacheKey, playlist.id, setPlaylistItems);
    } else {
      fetchVideos(playlist.id, setPlaylistItems);
    }
  }, []);

  return (
    <div>
      <div className={styles.textContainer}>
        <h2 className={styles.title} style={isFirstCarousel && { color: '#fff' }}>
          {t("Playlist." + playlist.name)}
        </h2>
        <Link
          className={styles.buttonLink}
          to={`/playlist/${playlist.id}`}
          state={{ playlist }}
          style={isFirstCarousel && { color: '#fff' }}
        >
          {t('Show all')}
        </Link>
      </div>

      <EmblaCarousel>
        {
          playlistItems.map((video) =>
            video.snippet.title === 'Private video' ? null :
              <div className={styles.emblaSlide} key={video.id}>
                <Videothumb
                  key={video.id}
                  videoName={video.snippet.title}
                  videoId={video.contentDetails.videoId}
                  videoLink={video.contentDetails.videoId}
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