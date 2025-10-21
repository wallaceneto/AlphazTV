import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Member.module.css'
import { translateBirthDate, translateCuriosites } from './lib'
import { Header } from './components/Header'
import Footer from '../../components/Footer'
import VideoCarousel from '../../components/VideoCarousel'
import PhotoGallery from '../../components/PhotoGallery'

import members from '../../mock/members.json'

export default function Member() {
  const { t } = useTranslation();
  const { i18n } = useTranslation('Home');
  let { memberId } = useParams();
  const member = members[memberId < 7 ? memberId : 0];
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
    <div className={styles.container}>
      <Header title={`This is ${member.iconName}`} />

      <div className={mobileMode ? styles.contentMobile : styles.content}>
        <div className={!mobileMode ? styles.infoContainer : undefined}>
          <img
            src={`/members/${member.name}/cover.jpg`}
            className={mobileMode ? styles.coverMobile : styles.cover}
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
                    : translateCuriosites(curiositie, t)
                  }
                </p>
              )}
            </div>
          </span>
        </div>

        <div className={styles.galleryContainer}>
          <h2 className={styles.text}>{t('Gallery')}</h2>
          <PhotoGallery
            galleryPath={member.galleryPath}
            galleryLength={member.galleryLength}
          />
        </div>

        {member.playlists.map((playlist) =>
          <VideoCarousel key={playlist.id} playlist={playlist} />
        )}

        <div className={styles.linksContainer}>
          <h2 className={styles.text}>{t('Meet the rest')}</h2>
          {members.map((item) =>
            item.id !== member.id &&
            <a
              key={item.id}
              href={`/member/${item.id}`}
              className={styles.linkText}
            >
              {item.iconName}
            </a>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
