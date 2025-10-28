import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { useTranslation } from 'react-i18next';
import styles from './PhotoGallery.module.css'
import EmblaCarousel from '../EmblaCarousel'

const PhotoGallery = ({ galleryPath, galleryLength }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const photos = [];

    for (let index = 0; index < galleryLength; index++) {
      photos.push(`${galleryPath}/${index}.jpg`);
      if (index === galleryLength - 1) setLoading(false);
    }
    setGallery(photos);

  }, [galleryPath, galleryLength])

  if (loading) {
    return (
      <TailSpin
        visible
        height={60}
        width={60}
        wrapperClass={styles.loading}
      />
    );
  }

  return (
    <div>
      <h2 className={styles.text}>{t('Gallery')}</h2>

      <EmblaCarousel gallery>
        {gallery.map((photo, index) =>
          <div className={styles.emblaSlide} key={index}>
            <a target='_blank' href={photo}>
              <img
                src={photo}
                className={styles.image}
              />
            </a>
          </div>
        )}
      </EmblaCarousel>
    </div>

  )
}

export default PhotoGallery
