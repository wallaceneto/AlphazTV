import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Videothumb.module.css'
import YoutubeEmbedModal from '../../pages/modals/YoutubeEmbedModal'

const Videothumb = ({ videoName, videoId, videoLink, hideLabel }) => {
  const [openModal, setOpenModal] = useState(false)
  const { t } = useTranslation()

  const handleVideoModal = () => {
    setOpenModal(true)
  }

  return (
    <>
      <button
        className={styles.container}
        onClick={() => handleVideoModal(videoId)}
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt="YouTube Thumbnail"
          className={styles.image}
        />

        {!hideLabel &&
          <div className={styles.textBg}>
            <p className={styles.text}>
              {videoName || t("Video not found")}
            </p>
          </div>
        }
      </button>

      <YoutubeEmbedModal openModal={openModal} setOpenModal={setOpenModal} videoLink={videoLink} />
    </>
  )
}

export default Videothumb