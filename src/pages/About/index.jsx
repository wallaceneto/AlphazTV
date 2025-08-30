import React from "react";
import {
  faYoutube,
  faSpotify,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import styles from "./About.module.css";
import { HomepageLayout } from "../../layout";
import { about } from "../../mock/about.json";
import { URLs } from "../../global/lib/URLs"; 
import IconButton from "../../components/IconButton";

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
          icon={icon}
          text={label}
          link={url}
        />
      ))}
    </ul>
  );
}

export default function About() {
  return (
    <HomepageLayout>
      {about.map((section, index) => (
        <>
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

          {index === 0 && <h2>Galeria</h2>}
        </>
      ))}
    </HomepageLayout>
  );
}
