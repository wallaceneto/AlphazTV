import React from 'react'
import classes from './Videothumb.module.css'

export default function Videothumb({ videoName, videoId, hideLabel }) {

  const handleVideoModal = (videoId) => {
    console.log('Abrir modal com embed do vídeo: ' + videoId);
  }

  return (
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
          <p className={classes.text}>{videoName || "Vídeo não encontrado"}</p>
        </div>
      }
    </button>
  )
}
