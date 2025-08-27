import React from 'react'
import styles from './Home.module.css'
import { HomepageLayout } from '../../layout'
import VideoCarousel from '../../components/VideoCarousel'
import MemberCarousel from '../../components/MemberCarousel'

import mockvideos from '../../mock/mvs_playlist.json'

export default function Home() {
  return (
    <HomepageLayout>
      <div className={styles.content}>
        <div className={styles.firstCarousel}>
          <VideoCarousel playlist={mockvideos} hideLabel />
        </div>
        <div className={styles.carousel}>
          <VideoCarousel playlist={mockvideos} />
        </div>

        <MemberCarousel />

        <div className={styles.carousel}>
          <VideoCarousel playlist={mockvideos} />
        </div>
        <div className={styles.carousel}>
          <VideoCarousel playlist={mockvideos} />
        </div>
      </div>
    </HomepageLayout>
  )
}
