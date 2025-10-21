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
                <VideoCarousel playlist={playlist} isFirstCarousel cacheKey={playlist.cachekey} />
              </div>
              :
              <div className={styles.carousel}>
                <VideoCarousel playlist={playlist} cacheKey={playlist.cachekey} />
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
