import React from 'react'
import styles from './Songs.module.css'
import { HomepageLayout } from '../../layout'
import { Album } from '../../components/Album'
import { VideoCarousel } from '../../components/VideoCarousel'

import albums from '../../mock/albums.json'
import mockvideos from '../../mock/mvs_playlist.json'

export default function Songs() {
  return (
    <HomepageLayout>
      <div className={styles.container}>
        {albums.map((album) =>
          <div key={album.name} className={styles.album}>
            <Album album={album} />
          </div>
        )}

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
