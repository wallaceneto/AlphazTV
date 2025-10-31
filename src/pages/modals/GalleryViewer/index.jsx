import React from 'react'
import { Modal } from '@mui/material'
import Close from '@mui/icons-material/Close'
import { useTranslation } from 'react-i18next'
import styles from './GalleryViewer.module.css'

export default function GalleryViewer({ openModal, setOpenModal, galleryLink, index }) {
  const { t } = useTranslation()

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src={`${galleryLink}/${index}.jpg`}
              alt={galleryLink}
              className={styles.image}
            />
          </div>

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
