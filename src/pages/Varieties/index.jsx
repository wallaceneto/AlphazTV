import React from 'react'
import styles from './Varieties.module.css'
import { HomepageLayout } from '../../layout'

import realityShows from '../../mock/reality_shows.json'
import { Grid } from '@mui/material'
import { VarietyCard } from './components/VarietyCard'

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
      </div>
    </HomepageLayout>
  )
}
