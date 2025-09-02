import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './PhotoGallery.module.css'
import Button from '../Button'

const PhotoGallery = ({ galleryPath, galleryLength }) => {
  const [loading, setLoading] = useState(true);
  const [gallery, setGallery] = useState([]);
  const [emblaRef] = useEmblaCarousel({ align: 'start' });

  useEffect(() => {
    const photos = [];

    for (let index = 0; index < galleryLength; index++) {
      photos.push(`${galleryPath}/${index}.jpg`);
      if (index === galleryLength - 1) setLoading(false);
    }
    setGallery(photos);

  }, [galleryPath, galleryLength])

  return (
    <div>
      {
        loading ?
          <h3 className={styles.text}>Loading . . .</h3> :
          <div className={styles.emblaViewport} ref={emblaRef}>
            <div className={styles.emblaContainer}>
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
            </div>
          </div>
      }
    </div>
  )
}

export default PhotoGallery
