import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Varieties.module.css'
import VarietyCard from './components/VarietyCard'
import OriginalSeriesCard from './components/OriginalSeriesCard'
import { HomepageLayout } from '../../layout'
import VideoCarousel from '../../components/VideoCarousel'

import realityShows from '../../mock/reality_shows.json'
import originalSeries from '../../mock/original_series.json'
import varietiesPlaylists from '../../mock/playlists/varieties.json'

export default function Varieties() {
  const { t } = useTranslation();
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 767) {
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
        <div className={styles.firstCarousel}>
          <VideoCarousel playlist={varietiesPlaylists[0]} isFirstCarousel />
        </div>

        <div className={styles.contentDiv}>
          <h2 className={styles.title}>{t("Reality show")}</h2>
          <div className={styles.realityShowContainer}>
            {realityShows.map((show, index) =>
              <div key={index}>
                <VarietyCard
                  name={show.name}
                  description={t(`Realities.${show.name}`)}
                  cover={show.cover}
                  link={show.link}
                  mobileMode={mobileMode}
                />
              </div>
            )}
          </div>
        </div>

        <div className={styles.contentDiv}>
          <h2 className={styles.title}>{t("Original series")}</h2>
          <div>
            {originalSeries.map((item, index) =>
              <div key={index}>
                <OriginalSeriesCard
                  cover={item.cover}
                  title={item.name}
                  description={t(`Series.${item.name}`)}
                  link={item.link}
                  mobileMode={mobileMode}
                />
              </div>
            )}
          </div>
        </div>

        {varietiesPlaylists.map((playlist, index) =>
          index !== 0 &&
          <div key={playlist.id} className={styles.contentDiv}>
            <VideoCarousel playlist={playlist} />
          </div>
        )}
      </div>
    </HomepageLayout >
  )
}
