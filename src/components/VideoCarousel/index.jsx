import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import classes from './VideoCarousel.module.css'
import Videothumb from '../Videothumb'

import { Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export const VideoCarousel = ({ playlist, hideLabel }) => {
  const { t } = useTranslation()
  const [slidePerView, setSlidePerView] = useState(3.3)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerView(1.5)
      } else if (window.innerWidth < 1100) {
        setSlidePerView(2.5)
      } else {
        setSlidePerView(3.5)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div>
      <div className={classes.textContainer}>
        <h2 className={classes.title}>
          {playlist.name}
        </h2>
        <Link className={classes.buttonLink}>
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
                hideLabel={hideLabel}
              />
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  )
}
