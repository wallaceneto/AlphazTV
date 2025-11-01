import React, { useEffect, useState } from 'react'
import { Modal } from '@mui/material'
import Close from '@mui/icons-material/Close'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faLink, faDownload } from "@fortawesome/free-solid-svg-icons"
import styles from './GalleryViewer.module.css'
import { nextImage, prevImage } from './lib'
import Button from '../../../components/Button'
import { MOBILE_WIDTH_BREAKPOINT } from '../../../global/utils'

export default function GalleryViewer({ openModal, setOpenModal, galleryLink, index, setIndex, galleryLenght }) {
  const { t } = useTranslation();
  const [mobileMode, setMobileMode] = useState(false);
  const [gallery, setGallery] = useState([]);

  const fillGallery = () => {
    let galleryList = []
    for (let index = 0; index < galleryLenght; index++) {
      galleryList.push(`${galleryLink}/${index}.jpg`);
    }
    return galleryList;
  }

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

    setGallery(fillGallery());
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
    >
      <div className={styles.container}>
        <Button
          onClick={() => prevImage(index, setIndex)}
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

        <div className={styles.content}>
          <button className={styles.textButton} onClick={() => setOpenModal(false)}>
            <Close className={styles.icon} fontSize='large' />
            <p className={styles.text}>
              {t('Close')}
            </p>
          </button>

          <img
            src={`${galleryLink}/${index}.jpg`}
            alt={galleryLink}
            className={styles.image}
          />

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
          onClick={() => nextImage(index, setIndex, galleryLenght)}
          disabled={index === galleryLenght}
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
