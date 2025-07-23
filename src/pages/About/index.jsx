import React from 'react'
import classes from './About.module.css'
import { HomepageLayout } from '../../layout'

export default function About() {
  return (
    <HomepageLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Sobre o site</h1>
      </div>
    </HomepageLayout>
  )
}
