import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import styles from "./About.module.css";
import { HomepageLayout } from "../../layout";
import { MOBILE_WIDTH_BREAKPOINT } from "../../global/utils";
import IconButton from "../../components/IconButton";
import PhotoGallery from "../../components/PhotoGallery";
import { socialLinks } from "./lib";

import { about } from "../../mock/about.json";
import groupGallery from '../../mock/group_gallery.json';

function SocialLinks({ mobileMode }) {
  return (
    <div className={styles.socialMedia}>
      {socialLinks.map(({ icon, url, label }) => (
        <IconButton
          key={label}
          icon={icon}
          text={!mobileMode && label}
          link={url}
        />
      ))}
    </div>
  );
}

export default function About() {
  const { t } = useTranslation();
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
      <div className={mobileMode ? styles.mobileContainer_about : styles.container_about}>
        <img
          src={about[0].image}
          alt={about[0].title}
          className={styles.leftImage}
        />

        <div className={styles.content}>
          <h1 className={styles.title}>{t(`AboutPage.${about[0].title}`)}</h1>
          <p className={styles.description}>{t(`AboutPage.${about[0].description}`)}</p>
          <SocialLinks mobileMode={mobileMode} />
        </div>
      </div>

      <div>
        <h2 className={styles.title}>{t('Gallery')}</h2>
        <PhotoGallery
          galleryPath={groupGallery.galleryPath}
          galleryLength={groupGallery.galleryLength}
        />
      </div>

      <div className={mobileMode ? styles.mobileContainer_about : styles.container_about}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t(`AboutPage.${about[1].title}`)}</h1>
          <p className={styles.description}>{t(`AboutPage.${about[1].description}`)}</p>
        </div>

        {!mobileMode &&
          <img
            src={about[1].image}
            alt={about[1].title}
            className={styles.rightImage}
          />
        }
      </div>
    </HomepageLayout>
  );
}
