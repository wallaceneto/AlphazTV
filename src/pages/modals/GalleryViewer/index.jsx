import React, { useEffect, useState } from 'react'
import { Modal } from '@mui/material'
import Close from '@mui/icons-material/Close'
import { useTranslation } from 'react-i18next'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faLink, faDownload } from "@fortawesome/free-solid-svg-icons"
import styles from './GalleryViewer.module.css'
import { nextImage, prevImage } from './lib'
import Button from '../../../components/Button'
import { MOBILE_WIDTH_BREAKPOINT } from '../../../global/utils'

export default function GalleryViewer({ openModal, setOpenModal, galleryLink, index, setIndex, galleryLength }) {
  const { t } = useTranslation();
  const [mobileMode, setMobileMode] = useState(false);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  //swipe logic
  const minSwipeDistance = 50;
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const onTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const onTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const onTouchEnd = () => {
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) nextImage(index, setIndex, galleryLength, setDirection);
    else if (distance < -minSwipeDistance) prevImage(index, setIndex, setDirection);
  };

  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -150 : 150,
      opacity: 0,
    }),
  };

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
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
    >
      <div className={styles.container}>
        <Button
          onClick={() => prevImage(index, setIndex, setDirection)}
          disabled={index === 0}
        >
          {mobileMode ?
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={styles.slideButtonIconMobile}
            />
            :
            <div className={styles.slideButton}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className={styles.slideButtonIcon}
              />
            </div>
          }
        </Button>

        <div
          className={styles.content}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button className={styles.textButton} onClick={() => setOpenModal(false)}>
            <Close className={styles.icon} fontSize='large' />
            <p className={styles.text}>
              {t('Close')}
            </p>
          </button>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={index}
              src={`${galleryLink}/${index}.jpg`}
              alt={galleryLink}
              className={styles.image} custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'tween', stiffness: 300, damping: 30 },
                opacity: { duration: 0.1 },
              }}
            />
          </AnimatePresence>

          <div className={styles.buttonsContainer}>
            <a target='_blank' href={`${galleryLink}/${index}.jpg`} className={styles.button} download>
              <FontAwesomeIcon
                icon={faDownload}
                className={styles.buttonIcon}
              />
              {!mobileMode &&
                <p className={styles.buttonText}>Baixar</p>
              }
            </a>

            <a target='_blank' href={`${galleryLink}/${index}.jpg`} className={styles.button}>
              <FontAwesomeIcon
                icon={faLink}
                className={styles.buttonIcon}
              />
              {!mobileMode &&
                <p className={styles.buttonText}>Abrir link</p>
              }
            </a>
          </div>
        </div>

        <Button
          onClick={() => nextImage(index, setIndex, galleryLength, setDirection)}
          disabled={index === galleryLength}
        >
          {mobileMode ?
            <FontAwesomeIcon
              icon={faChevronRight}
              className={styles.slideButtonIconMobile}
            />
            :
            <div className={styles.slideButton}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.slideButtonIcon}
              />
            </div>
          }
        </Button>
      </div>
    </Modal>
  )
}
