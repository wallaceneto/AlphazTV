import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Member.module.css'
import { translateBirthDate } from './lib'
import { Header } from './components/Header'
import Footer from '../../components/Footer'
import VideoCarousel from '../../components/VideoCarousel'

import members from '../../mock/members.json'
import jurin_playlist from '../../mock/jurin_playlist.json'

export default function Member() {
  const { t } = useTranslation();
  const { i18n } = useTranslation('Home');
  let { memberId } = useParams();
  const [member, setMember] = useState(members[0]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    members.find(item => {
      if (item.id === memberId) {
        setMember(item)
        return true
      }
    })
  }, [memberId])

  return (
    <div className={styles.container}>
      <Header title={`This is ${member.iconName}`} />

      <div className={styles.content}>
        <div className={styles.infoContainer}>
          <img
            src={`/members/${member.name}/cover.jpg`}
            className={styles.image}
            alt={member.name}
          />

          <span className={styles.textContainer}>
            <div>
              <h1 className={styles.title}>{member.fullName}</h1>
              <p className={styles.subtitle}>"{member.citation}"</p>
            </div>

            <div>
              {member.curiosities.map((curiositie, index) =>
                <p key={index} className={styles.text}>
                  {index === 0
                    ? translateBirthDate(curiositie, t, i18n)
                    : t(curiositie)
                  }
                </p>
              )}
            </div>
          </span>
        </div>

        {/* TRECHO PARA O COMPONENTE DE GALERIA */}
        <div className={styles.galleryContainer}>
          <h2>Galeria</h2>
        </div>

        <VideoCarousel playlist={jurin_playlist} />

      </div>

      <Footer />
    </div>
  )
}
