import React, { useEffect, useState } from 'react'
import { Modal } from '@mui/material'
import Close from '@mui/icons-material/Close'
import { useTranslation } from 'react-i18next'
import styles from './YoutubeEmbedModal.module.css'

export default function YoutubeEmbedModal({ openModal, setOpenModal, videoLink }) {
  const { t } = useTranslation()
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 767) {
        setMobileMode(true)
      } else {
        setMobileMode(false)
      }
    }

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
        <div className={styles.content}>
          <iframe
            width={mobileMode ? "470" : "900"}
            height={mobileMode ? "263" : "506"}
            src={`https://www.youtube.com/embed/${videoLink}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

          <button className={styles.textButton} onClick={() => setOpenModal(false)}>
            <Close className={styles.icon} fontSize='large' />
            <p className={styles.text}>
              {t('Close')}
            </p>
          </button>
        </div>
      </div>
    </Modal>
  )
}
