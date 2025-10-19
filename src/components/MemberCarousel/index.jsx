import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './MemberCarousel.module.css'
import MemberCard from '../MemberCard'

import members from '../../mock/members.json';

const MemberCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ align: 'start' })

  return (
    <div className={styles.viewport} ref={emblaRef}>
      <div className={styles.container}>
        {members.map((member) =>
          <div className={styles.slide} key={member.id}>
            <MemberCard
              route={`/member/${member.id}`}
              name={member.iconName}
              memberImage={`/members/${member.name}/profile.jpg`}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default MemberCarousel