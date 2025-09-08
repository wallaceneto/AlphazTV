import React, { useEffect, useState } from 'react'
import styles from './Songs.module.css'
import { HomepageLayout } from '../../layout'
import Album from '../../components/Album'
import VideoCarousel from '../../components/VideoCarousel'
import { MOBILE_WIDTH_BREAKPOINT } from '../../global/utils'

import mockvideos from '../../mock/mvs_playlist.json'
import albums from '../../mock/albums.json'
import singles from '../../mock/singles.json'

export default function Songs() {
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < MOBILE_WIDTH_BREAKPOINT) {
        setMobileMode(true);
      } else {
        setMobileMode(false);
      }
    }

    window.scrollTo(0, 0);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return (
    <HomepageLayout>
      <div className={styles.container}>
        {albums.map((album) =>
          <div key={album.name} className={styles.contentContainer}>
            <Album album={album} mobileMode={mobileMode} />
          </div>
        )}

        <div className={styles.carouselContainer}>
          <VideoCarousel playlist={mockvideos} />
        </div>

        <div className={styles.carouselContainer}>
          <VideoCarousel playlist={mockvideos} />
        </div>

        <div className={styles.contentContainer}>
          <h2 className={styles.singleLabel}>Singles</h2>
          <div className={mobileMode ? styles.singlesContainerMobile : styles.singlesContainer}>
            {singles.map((single) =>
              <a key={single.name} href={single.link} target='_blank'>
                <img
                  src={single.cover}
                  className={mobileMode ? styles.singleCoverMobile : styles.singleCover}
                  alt={'Capa da música ' + single.name} />
              </a>
            )}
          </div>
        </div>
      </div>
    </HomepageLayout>
  )
}
