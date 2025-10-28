import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import styles from './MemberCarousel.module.css'
import Button from '../Button'
import MemberCard from '../MemberCard'
import { MOBILE_WIDTH_BREAKPOINT } from '../../global/utils/globalVars'

import members from '../../mock/members.json';

const MemberCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < MOBILE_WIDTH_BREAKPOINT) {
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
        {members.map((member) =>
          <div className={styles.slide} key={member.id}>
            <MemberCard
              route={`/member/${member.id}`}
              name={member.iconName}
              memberImage={`/members/${member.name}/profile.jpg`}
            />
          </div>
        )}
      </div>

      {!mobileMode &&
        <div className={styles.slideButtonContainer}>
          <Button onClick={() => onPreviousButton()} disabled={prevBtnDisabled}>
            <div className={styles.slideButtonLarge}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className={styles.slideButtonIcon}
              />
            </div>
          </Button>
          <Button onClick={() => onNextButton()} disabled={nextBtnDisabled}>
            <div className={styles.slideButtonLarge}>
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

export default MemberCarousel