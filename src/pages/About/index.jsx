import React from "react";
import styles from "./About.module.css";
import { HomepageLayout } from "../../layout";
import { about } from "../../mock/about.json";
import { URLs } from "../../components/Footer/lib";
import {
  faYoutube,
  faSpotify,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialLinks = [
  { icon: faGlobe, url: URLs.xgSite, label: "Site" },
  { icon: faYoutube, url: URLs.xgYoutube, label: "Youtube" },
  { icon: faApple, url: URLs.xgAppleMusic, label: "Apple" },
  { icon: faSpotify, url: URLs.xgSpotify, label: "Spotify" },
];

function SocialLinks() {
  return (
    <ul className={styles.socialMedia}>
      {socialLinks.map(({ icon, url, label }) => (
        <li key={label} className={styles.socialItem}>
          <FontAwesomeIcon icon={icon} className={styles.socialIcon} />
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialText}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function About() {
  return (
    <HomepageLayout>
      {about.map((section, index) => (
        <div key={section.title} className={styles.container_about}>
          <img
            src={section.image}
            alt={section.title}
            className={styles.image}
          />
          <div className={styles.content}>
            <h1 className={styles.title}>{section.title}</h1>
            <p className={styles.description}>{section.description}</p>
            <div className={styles.container_socialLinks}>
              {index === 0 && <SocialLinks />}
            </div>
          </div>
        </div>
      ))}
    </HomepageLayout>
  );
}
