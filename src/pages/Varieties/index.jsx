import React from 'react'
import { Grid } from '@mui/material'
import styles from './Varieties.module.css'
import VarietyCard from './components/VarietyCard'
import OriginalSeriesCard from './components/OriginalSeriesCard'
import { HomepageLayout } from '../../layout'

import realityShows from '../../mock/reality_shows.json'
import originalSeries from '../../mock/original_series.json'

export default function Varieties() {
  return (
    <HomepageLayout>
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>Reality show</h2>

          <Grid container>
            {realityShows.map((show, index) =>
              <Grid key={index} size={{ xs: 6, md: 4 }}>
                <VarietyCard
                  name={show.name}
                  description={show.description}
                  cover={show.cover}
                  link={show.link}
                />
              </Grid>
            )}
          </Grid>
        </div>

        <div>
          <h2 className={styles.title}>Séries originais</h2>

          <Grid container>
            {originalSeries.map((item, index) =>
              <Grid key={index} size={{ xs: 12 }}>
                <OriginalSeriesCard
                  cover={item.cover}
                  title={item.name}
                  description={item.description}
                  link={item.link}
                />
              </Grid>
            )}
          </Grid>
        </div>
      </div>
    </HomepageLayout>
  )
}
