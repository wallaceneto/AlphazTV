import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './VideoCarousel.module.css'
import Videothumb from '../Videothumb'
import { handleSlideResize } from '../../global/lib'

import { Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const VideoCarousel = ({ playlist, hideLabel }) => {
  const { t } = useTranslation()
  const [slidePerView, setSlidePerView] = useState(3.3)

  useEffect(() => {
    const sm = 1.5
    const md = 2.5
    const xl = 3.5

    handleSlideResize(setSlidePerView, sm, md, xl)

    window.addEventListener("resize", () => handleSlideResize(setSlidePerView, sm, md, xl))

    return () => window.removeEventListener("resize", () => handleSlideResize(setSlidePerView, sm, md, xl))
  }, [])

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

      <Swiper
        modules={[Mousewheel]}
        slidesPerView={slidePerView}
        mousewheel
      >
        {
          playlist.videos.map((video) =>
            <SwiperSlide>
              <Videothumb
                key={video.videoId}
                videoName={video.name}
                videoId={video.videoId}
                videoLink={video.link}
                hideLabel={hideLabel}
              />
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  )
}

export default VideoCarousel