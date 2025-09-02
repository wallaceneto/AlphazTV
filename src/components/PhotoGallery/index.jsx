import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import styles from './PhotoGallery.module.css'
import Button from '../Button'

const PhotoGallery = ({ galleryPath, galleryLength }) => {
  const [loading, setLoading] = useState(true);
  const [gallery, setGallery] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onNextButton = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onPreviousButton = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

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

            <div className={styles.slideButtonContainer}>
              <Button onClick={() => onPreviousButton()} disabled={prevBtnDisabled}>
                <div className={styles.slideButton}>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className={styles.slideButtonIcon}
                  />
                </div>
              </Button>
              <Button onClick={() => onNextButton()} disabled={nextBtnDisabled}>
                <div className={styles.slideButton}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={styles.slideButtonIcon}
                  />
                </div>
              </Button>
            </div>
          </div>
      }
    </div>
  )
}

export default PhotoGallery
