import React from 'react'
import styles from './Home.module.css'
import { HomepageLayout } from '../../layout'
import VideoCarousel from '../../components/VideoCarousel'
import MemberCarousel from '../../components/MemberCarousel'

import homePlaylists from '../../mock/playlists/home.json'

export default function Home() {
  return (
    <HomepageLayout>
      <div className={styles.content}>
        {homePlaylists.map((playlist, index) =>
          <div key={playlist.id}>
            {index === 0 ?
              <div className={styles.firstCarousel}>
                <VideoCarousel playlist={homePlaylists[index]} hideLabel isFirstCarousel />
              </div>
              :
              <div className={styles.carousel}>
                <VideoCarousel playlist={homePlaylists[index]} />
              </div>
            }
            {index === 1 &&
              <MemberCarousel />
            }
          </div>
        )}
      </div>
    </HomepageLayout>
  )
}
