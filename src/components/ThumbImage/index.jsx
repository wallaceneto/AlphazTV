import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import styles from './ThumbImage.module.css';
import { getThumb } from '../../services/getData';

export const ThumbImage = ({ videoId, style, highRes }) => {
  const [thumbUrl, setThumbUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThumb = async () => {
      setLoading(true);
      const url = await getThumb(videoId, highRes);
      setThumbUrl(url);
      setLoading(false);
    }

    fetchThumb();
  }, [videoId, highRes]);

  return (
    loading
      ?
      <TailSpin
        visible
        height={60}
        width={60}
        wrapperClass={styles.loading}
      />
      :
      <img
        src={thumbUrl}
        alt="YouTube Thumbnail"
        className={style}
      />
  )
}
