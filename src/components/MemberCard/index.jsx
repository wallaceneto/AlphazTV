import React from 'react'
import styles from './MemberCard.module.css'
import { useNavigate } from 'react-router-dom'

const MemberCard = ({ route, name, memberImage }) => {
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

      <img src={memberImage} className={styles.image} alt={'Imagem da ' + name} />
    </a>
  )
}

export default MemberCard
