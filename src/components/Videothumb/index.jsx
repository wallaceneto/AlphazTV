import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './Videothumb.module.css'
import YoutubeEmbedModal from '../../pages/modals/YoutubeEmbedModal'

export default function Videothumb({ videoName, videoId, videoLink, hideLabel }) {
  const [openModal, setOpenModal] = useState(false)
  const { t } = useTranslation()

  const handleVideoModal = () => {
    setOpenModal(true)
  }

  return (
    <>
      <button
        className={classes.container}
        onClick={() => handleVideoModal(videoId)}
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt="YouTube Thumbnail"
          className={classes.image}
        />

        {!hideLabel &&
          <div className={classes.textBg}>
            <p className={classes.text}>
              {videoName || t("Video not found")}
            </p>
          </div>
        }
      </button>

      <YoutubeEmbedModal openModal={openModal} setOpenModal={setOpenModal} videoLink={videoLink} />
    </>
  )
}
