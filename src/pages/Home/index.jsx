import React from 'react'
import { HomepageLayout } from '../../layout'
import { VideoCarousel } from '../../components/VideoCarousel'
import classes from './Home.module.css'

import mockvideos from '../../mock/mvs_playlist.json'

export default function Home() {

  return (
    <HomepageLayout>
      <div className={classes.content}>
        <div className={classes.firstCarousel}>
          <VideoCarousel playlist={mockvideos} hideLabel />
        </div>
        <div className={classes.carousel}>
          <VideoCarousel playlist={mockvideos} />
        </div>
      </div>
    </HomepageLayout>
  )
}
