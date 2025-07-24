import React from 'react'
import { Modal } from '@mui/material'
import Close from '@mui/icons-material/Close'
import { useTranslation } from 'react-i18next'
import classes from './YoutubeEmbedModal.module.css'

export default function YoutubeEmbedModal({ openModal, setOpenModal, videoLink }) {
  const { t } = useTranslation()

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
    >
      <div className={classes.container}>
        <div className={classes.content}>
          <iframe
            width="900"
            height="506"
            src={`https://www.youtube.com/embed/${videoLink}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

          <button className={classes.textButton} onClick={() => setOpenModal(false)}>
            <Close className={classes.icon} fontSize='large' />
            <p className={classes.text}>
              {t('Close')}
            </p>
          </button>
        </div>
      </div>
    </Modal>
  )
}
