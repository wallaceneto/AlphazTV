import React, { useEffect, useState } from 'react'
import styles from './MemberCarousel.module.css'
import MemberCard from '../MemberCard'
import { handleSlideResize } from '../../global/lib'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import members from '../../mock/members.json';

const MemberCarousel = () => {
  const [slidePerView, setSlidePerView] = useState(4.3)

  useEffect(() => {
    const sm = 1.7
    const md = 2.7
    const xl = 4.3

    handleSlideResize(setSlidePerView, sm, md, xl)

    window.addEventListener("resize", () => handleSlideResize(setSlidePerView, sm, md, xl))

    return () => window.removeEventListener("resize", () => handleSlideResize(setSlidePerView, sm, md, xl))
  }, [])

  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={slidePerView}
      >
        {members.map((member) =>
          <SwiperSlide>
            <MemberCard
              key={member.id}
              name={member.iconName}
              memberImage={`src/assets/members/${member.name}/profile.jpg`}
            />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default MemberCarousel