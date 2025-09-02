import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowIcon from '@mui/icons-material/ArrowBack'
import styles from './Videos.module.css'
import { handleOpenVideo } from './lib'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import YoutubeEmbedModal from '../modals/YoutubeEmbedModal'

import mock_playlist from '../../mock/mvs_playlist.json'

export default function Videos() {
  const navigation = useNavigate()
  const [openModal, setOpenModal] = useState()
  const [currentLink, setCurrentLink] = useState('')
  const playlist = mock_playlist // buscar na api

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Button onClick={() => navigation(-1)}>
            <ArrowIcon className={styles.icon} fontSize='large' />
          </Button>
          <h2 className={styles.title}>
            {playlist.name}
          </h2>
        </div>

        <div className={styles.content}>
          {
            playlist.videos.map((video) =>
              <Button
                key={video.videoId}
                onClick={() => handleOpenVideo(video.link, setCurrentLink, setOpenModal)}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt="YouTube Thumbnail"
                  className={styles.thumb}
                />
              </Button>

            )
          }
        </div>
        <Footer />
      </div>

      <YoutubeEmbedModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        videoLink={currentLink}
      />
    </>
  )
}
