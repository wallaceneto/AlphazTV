import React from 'react'
import styles from './Button.module.css'

export const Button = ({ children, onClick }) => {
  return (
    <button
      className={[styles.container]}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
