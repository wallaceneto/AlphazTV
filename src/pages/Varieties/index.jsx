import React from 'react'
import { Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from './Varieties.module.css'
import VarietyCard from './components/VarietyCard'
import OriginalSeriesCard from './components/OriginalSeriesCard'
import { HomepageLayout } from '../../layout'
import { VideoCarousel } from '../../components/VideoCarousel'

import realityShows from '../../mock/reality_shows.json'
import originalSeries from '../../mock/original_series.json'
import mockvideos from '../../mock/mvs_playlist.json'

export default function Varieties() {
  const { t } = useTranslation();

  return (
    <HomepageLayout>
      <div className={styles.container}>

        <div className={styles.contentDiv}>
          <h2 className={styles.title}>{t("Reality show")}</h2>
          <Grid container>
            {realityShows.map((show, index) =>
              <Grid key={index} size={{ xs: 12, md: 4 }}>
                <VarietyCard
                  name={show.name}
                  description={t(`Realities.${show.name}`)}
                  cover={show.cover}
                  link={show.link}
                />
              </Grid>
            )}
          </Grid>
        </div>

        <div className={styles.contentDiv}>
          <h2 className={styles.title}>{t("Original series")}</h2>
          <Grid container>
            {originalSeries.map((item, index) =>
              <Grid key={index} size={{ xs: 12 }}>
                <OriginalSeriesCard
                  cover={item.cover}
                  title={item.name}
                  description={t(`Series.${item.name}`)}
                  link={item.link}
                />
              </Grid>
            )}
          </Grid>
        </div>

        <div className={styles.contentDiv}>
          <VideoCarousel playlist={mockvideos} />
        </div>

        <div className={styles.contentDiv}>
          <VideoCarousel playlist={mockvideos} />
        </div>
      </div>
    </HomepageLayout>
  )
}
