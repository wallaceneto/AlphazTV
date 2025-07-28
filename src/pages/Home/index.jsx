import React from 'react'
import { HomepageLayout } from '../../layout'
import { VideoCarousel } from '../../components/VideoCarousel'
import styles from './Home.module.css'

import mockvideos from '../../mock/mvs_playlist.json'
import MemberCard from '../../components/MemberCard'

import jurin from '../../assets/members/jurin.jpg'
import chisa from '../../assets/members/chisa.jpg'
import hinata from '../../assets/members/hinata.jpg'
import harvey from '../../assets/members/harvey.jpg'
import juria from '../../assets/members/juria.jpg'
import maya from '../../assets/members/maya.jpg'
import cocona from '../../assets/members/cocona.jpg'

export default function Home() {

  return (
    <HomepageLayout>
      <div className={styles.content}>
        <div className={styles.firstCarousel}>
          <VideoCarousel playlist={mockvideos} hideLabel />
        </div>
        <div className={styles.carousel}>
          <VideoCarousel playlist={mockvideos} />
        </div>

        <div className={styles.memberCarousel}>
          <MemberCard name={'Jurin 🦋'} memberImage={jurin} />
          <MemberCard name={'Chisa ☀️'} memberImage={chisa} />
          <MemberCard name={'Hinata 💎'} memberImage={hinata} />
          <MemberCard name={'Harvey 🦄'} memberImage={harvey} />
          <MemberCard name={'Juria 🐿️'} memberImage={juria} />
          <MemberCard name={'Maya 🐶'} memberImage={maya} />
          <MemberCard name={'Cocona 🍄'} memberImage={cocona} />
        </div>
      </div>
    </HomepageLayout>
  )
}
