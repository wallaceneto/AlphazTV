import React from "react";
import {
  faYoutube,
  faSpotify,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';
import styles from "./About.module.css";
import { HomepageLayout } from "../../layout";
import { URLs } from "../../global/lib/URLs";
import IconButton from "../../components/IconButton";
import PhotoGallery from "../../components/PhotoGallery";

import { about } from "../../mock/about.json";
import groupGallery from '../../mock/group_gallery.json';

const socialLinks = [
  { icon: faGlobe, url: URLs.xgSite, label: "Site" },
  { icon: faYoutube, url: URLs.xgYoutube, label: "Youtube" },
  { icon: faSpotify, url: URLs.xgSpotify, label: "Spotify" },
  { icon: faApple, url: URLs.xgAppleMusic, label: "Apple Music" },
];

function SocialLinks() {
  return (
    <ul className={styles.socialMedia}>
      {socialLinks.map(({ icon, url, label }) => (
        <IconButton
          key={label}
          icon={icon}
          text={label}
          link={url}
        />
      ))}
    </ul>
  );
}

export default function About() {
  const { t } = useTranslation();

  return (
    <HomepageLayout>
      <div key={about[0].title} className={styles.container_about}>
        <img
          src={about[0].image}
          alt={about[0].title}
          className={styles.image}
        />
        <div className={styles.content}>
          <h1 className={styles.title}>{t(`AboutPage.${about[0].title}`)}</h1>
          <p className={styles.description}>{t(`AboutPage.${about[0].description}`)}</p>
          <div className={styles.container_socialLinks}>
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className={styles.galleryContainer}>
        <h2 className={styles.title}>{t('Gallery')}</h2>
        <PhotoGallery
          galleryPath={groupGallery.galleryPath}
          galleryLength={groupGallery.galleryLength}
        />
      </div>

      <div key={about[1].title} className={styles.container_about}>
        <img
          src={about[1].image}
          alt={about[1].title}
          className={styles.image}
        />
        <div className={styles.content}>
          <h1 className={styles.title}>{t(`AboutPage.${about[1].title}`)}</h1>
          <p className={styles.description}>{t(`AboutPage.${about[1].description}`)}</p>
        </div>
      </div>
    </HomepageLayout>
  );
}
