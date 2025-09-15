import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import ArrowIcon from '@mui/icons-material/ArrowBack'
import styles from './Videos.module.css'
import { handleOpenVideo } from './lib'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import YoutubeEmbedModal from '../modals/YoutubeEmbedModal'
import { getPlaylistItens } from '../../services/getData'

export default function Videos() {
  const navigation = useNavigate();
  const location = useLocation();
  let { playlistId } = useParams();
  const playlist = location.state?.playlist;
  const [playlistItems, setPlaylistItems] = useState([]);
  const [openModal, setOpenModal] = useState();
  const [currentLink, setCurrentLink] = useState('');

  const fetchVideos = async () => {
    if (playlistItems.length === 0) {
      const data = await getPlaylistItens(playlistId);
      setPlaylistItems(data.items);
      if (data.nextPageToken) {
        fetchNextPage(data.items, data.nextPageToken);
      }
    }
  }

  const fetchNextPage = async (previousPageResults, nextPageToken) => {
    const data = await getPlaylistItens(playlistId, 50, nextPageToken);
    const fullPlaylist = previousPageResults.concat(data.items);

    setPlaylistItems(fullPlaylist);
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
            {playlist.name}
          </h2>
        </div>

        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            {playlist.description}
          </p>
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
