import React from 'react'
import styles from './MemberCard.module.css'
import { useNavigate } from 'react-router-dom'

const MemberCard = ({ route, name, memberImage, color }) => {
  const navigation = useNavigate()
  return (
    <a
      className={styles.container}
      onClick={() => navigation(route)}
    >
      <div className={styles.textContainer}>
        <h1 className={styles.mainTitle}>
          THIS IS
        </h1>
        <h1 className={styles.nameTitle}>
          {name}
        </h1>
      </div>

      <div className={styles.divider} style={{ backgroundColor: color }} />

      <img src={memberImage} className={styles.image} alt={'Imagem da ' + name} />
    </a>
  )
}

export default MemberCard
