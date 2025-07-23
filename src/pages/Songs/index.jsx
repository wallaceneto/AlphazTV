import React from 'react'
import classes from './Songs.module.css'
import { HomepageLayout } from '../../layout'

export default function Songs() {
  return (
    <HomepageLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Tela com as músicas</h1>
      </div>
    </HomepageLayout>
  )
}
