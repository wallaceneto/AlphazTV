import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './IconButton.module.css'

const IconButton = ({ icon, text, link, color }) => {
  return (
    <a className={styles.button} target='_blank' href={link}>
      <FontAwesomeIcon
        icon={icon}
        className={styles.icon}
        style={{ color: color || null }}
      />

      <p
        className={styles.text}
        style={{ color: color || null  }}>
        {text}
      </p>
    </a>
  )
}

export default IconButton
