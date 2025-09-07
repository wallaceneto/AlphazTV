import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import styles from './EmblaCarousel.module.css'
import Button from '../Button'

const EmblaCarousel = ({ children, gallery }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 767) {
        setMobileMode(true);
      } else {
        setMobileMode(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

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

  return (
    <div className={styles.viewport} ref={emblaRef}>
      <div className={styles.container}>
        {children}
      </div>

      {!mobileMode &&
        <div className={styles.slideButtonContainer}>
          <Button onClick={() => onPreviousButton()} disabled={prevBtnDisabled}>
            <div className={gallery ? styles.slideButtonLarge : styles.slideButtonSmall}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className={styles.slideButtonIcon}
              />
            </div>
          </Button>
          <Button onClick={() => onNextButton()} disabled={nextBtnDisabled}>
            <div className={gallery ? styles.slideButtonLarge : styles.slideButtonSmall}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.slideButtonIcon}
              />
            </div>
          </Button>
        </div>
      }
    </div>
  )
}

export default EmblaCarousel 
