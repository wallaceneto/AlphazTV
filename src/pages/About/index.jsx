import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import styles from "./About.module.css";
import { socialLinks } from "./lib";
import { HomepageLayout } from "../../layout";
import { MOBILE_WIDTH_BREAKPOINT } from "../../global/utils";
import IconButton from "../../components/IconButton";
import PhotoGallery from "../../components/PhotoGallery";

import groupGallery from '../../mock/group_gallery.json';

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
          src="/assets/about/xg.jpg"
          alt="Foto do grupo XG"
          className={styles.leftImage}
        />

        <div className={styles.content}>
          <h1 className={styles.title}>{t(`AboutPage.About XG`)}</h1>
          <p className={styles.description}>{t(`AboutPage.XG-description`)}</p>
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
        </div>
      </div>

      <PhotoGallery
        galleryPath={groupGallery.galleryPath}
        galleryLength={groupGallery.galleryLength}
      />

      <div className={mobileMode ? styles.mobileContainer_about : styles.container_about}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t(`AboutPage.About website`)}</h1>
          <p className={styles.description}>{t(`AboutPage.Website-description`)}</p>
        </div>

        <img
          src={`/assets/about/lobo_preto.png`}
          alt="Logo do site Alphaz TV"
          className={mobileMode ? styles.rightImageMobile : styles.rightImage}
        />
      </div>
    </HomepageLayout>
  );
}
