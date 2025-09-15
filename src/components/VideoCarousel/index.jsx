import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './VideoCarousel.module.css'
import Videothumb from '../Videothumb'
import EmblaCarousel from '../EmblaCarousel'
import { getPlaylistItens } from '../../services/getData'

const VideoCarousel = ({ playlist, hideLabel, isFirstCarousel }) => {
  const { t } = useTranslation();
  const [playlistItems, setPlaylistItems] = useState([]);

  const fetchVideos = async () => {
    if (playlistItems.length === 0) {
      const data = await getPlaylistItens(playlist.id);
      setPlaylistItems(data.items);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div>
      <div className={styles.textContainer}>
        <h2 className={styles.title} style={isFirstCarousel && { color: '#fff' }}>
          {t(playlist.name)}
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