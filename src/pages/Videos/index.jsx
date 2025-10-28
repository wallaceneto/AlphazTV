import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import ArrowIcon from '@mui/icons-material/ArrowBack'
import styles from './Videos.module.css'
import { useTranslation } from 'react-i18next'
import { fetchVideos, getPlaylistDataFromMock, handleOpenVideo } from './lib'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import YoutubeEmbedModal from '../modals/YoutubeEmbedModal'
import { ThumbImage } from '../../components/ThumbImage'

export default function Videos() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  let { playlistId } = useParams();
  const location = useLocation();

  const [playlist, setPlaylist] = useState({ name: "Videos", description: "All the videos from the playlist" });
  const [playlistItems, setPlaylistItems] = useState([]);
  const [openModal, setOpenModal] = useState();
  const [currentLink, setCurrentLink] = useState('');

  useEffect(() => {
    if (location.state) {
      setPlaylist(location.state?.playlist);
    } else {
      getPlaylistDataFromMock(playlistId, setPlaylist);
    }

    window.scrollTo(0, 0);
    fetchVideos(playlistId, setPlaylistItems);
  }, [])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Button onClick={() => navigation(location.state ? -1 : '/')}>
            <ArrowIcon className={styles.icon} fontSize='large' />
          </Button>
          <h2 className={styles.title}>
            {t("Playlist." + playlist.name)}
          </h2>
        </div>

        {playlist.description ?
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              {t("Playlist." + playlist.description)}
            </p>
          </div>
          : null
        }

        <div className={styles.content}>
          {
            playlistItems.map((video) =>
              video.snippet.title === 'Private video' ? null :
                <Button
                  key={video.id}
                  onClick={() => handleOpenVideo(video.contentDetails.videoId, setCurrentLink, setOpenModal)}
                >
                  <div className={styles.thumb}>
                    <div className={styles.overlay}>
                      <p className={styles.label}>{video.snippet.title}</p>
                    </div>

                    <ThumbImage
                      videoId={video.contentDetails.videoId}
                      videoTitle={video.snippet.title}
                      style={styles.thumbImage}
                      highRes
                    />
                  </div>
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
