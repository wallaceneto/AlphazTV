import React from 'react'
import ArrowIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import { Button } from '../../../../components/Button'

export const Header = ({ title }) => {
  const navigation = useNavigate()

  return (
    <div className={styles.container}>
      <Button onClick={() => navigation('/')}>
        <ArrowIcon className={styles.icon} fontSize='large' />
      </Button>
      <h1 className={styles.text}>{title}</h1>
    </div>
  )
}
