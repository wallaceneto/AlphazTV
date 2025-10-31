import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { useTranslation } from 'react-i18next';
import styles from './PhotoGallery.module.css'
import EmblaCarousel from '../EmblaCarousel'
import Button from '../Button';
import GalleryViewer from '../../pages/modals/GalleryViewer';

const PhotoGallery = ({ galleryPath, galleryLength }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [gallery, setGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalVisibility, setModalVisibility] = useState(false);

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

  const handleGalleryOpen = (index) => {
    setCurrentIndex(index)
    setModalVisibility(true);
  }

  return (
    <>
      <div>
        <h2 className={styles.text}>{t('Gallery')}</h2>

        <EmblaCarousel gallery>
          {gallery.map((photo, index) =>
            <div className={styles.emblaSlide} key={index}>
              <Button onClick={() => handleGalleryOpen(index)}>
                <img
                  src={photo}
                  className={styles.image}
                />
              </Button>
            </div>
          )}
        </EmblaCarousel>
      </div>

      <GalleryViewer
        openModal={modalVisibility}
        setOpenModal={setModalVisibility}
        galleryLink={galleryPath}
        index={currentIndex}
      />
    </>
  )
}

export default PhotoGallery
