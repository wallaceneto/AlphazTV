import React from 'react'
import { Grid } from '@mui/material'
import styles from './Songs.module.css'
import { HomepageLayout } from '../../layout'
import { Album } from '../../components/Album'
import { VideoCarousel } from '../../components/VideoCarousel'

import mockvideos from '../../mock/mvs_playlist.json'
import albums from '../../mock/albums.json'
import singles from '../../mock/singles.json'

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

        <div className={styles.singleContainer}>
          <h2 className={styles.singleTitle}>Singles</h2>
          <Grid container>
            {singles.map((single) => 
              <Grid key={single.name} size={{ xs: 6, md: 3 }}>
                <a href={single.link} target='_blank'>
                  <img src={single.cover} className={styles.image} />
                </a>
              </Grid>
            )}
          </Grid>
        </div>
      </div>
    </HomepageLayout>
  )
}
