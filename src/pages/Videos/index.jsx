/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowIcon from '@mui/icons-material/ArrowBack'
import styles from './Videos.module.css'
import { handleOpenVideo } from './lib'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import YoutubeEmbedModal from '../modals/YoutubeEmbedModal'
import { getPlaylistItens } from '../../services/getData'

export default function Videos() {
  const navigation = useNavigate();
  let { playlistId } = useParams();
  const [openModal, setOpenModal] = useState();
  const [currentLink, setCurrentLink] = useState('');
  const [playlistName, setPlaylistName] = useState('');
  const [playlistItems, setPlaylistItems] = useState([]);

  const fetchVideos = async () => {
    if (playlistItems.length === 0) {
      const data = await getPlaylistItens(playlistId);

      console.log(data);
      setPlaylistName('TESTE');
      setPlaylistItems(data.items);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchVideos();
  }, [])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Button onClick={() => navigation(-1)}>
            <ArrowIcon className={styles.icon} fontSize='large' />
          </Button>
          <h2 className={styles.title}>
            {playlistName}
          </h2>
        </div>

        <div className={styles.content}>
          {
            playlistItems.map((video) =>
              <Button
                key={video.id}
                onClick={() => handleOpenVideo(video.contentDetails.videoId, setCurrentLink, setOpenModal)}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.contentDetails.videoId}/maxresdefault.jpg`}
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
