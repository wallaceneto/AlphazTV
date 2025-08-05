import React from 'react'
import styles from './VarietyCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export const VarietyCard = ({ name, description, cover, link }) => {
  return (
    <a className={styles.container} target='_blank' href={link}>
      <div className={styles.cardOverlay}>
        <h1 className={styles.text}>{name}</h1>
        <p className={styles.text}>{description}</p>

        <a className={styles.linkButton} target='_blank' href={link}>
          <FontAwesomeIcon icon={faYoutube} className={styles.linkIcon} />
          <p className={styles.linkText}>Assistir no Youtube</p>
        </a>
      </div>
      <img src={cover} className={styles.image} alt={'capa do ' + name} />
    </a>
  )
}
