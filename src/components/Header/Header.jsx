import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ContrastIcon from '@mui/icons-material/Contrast'
import styles from './Header.module.css'

export const Header = ({ theme, setTheme }) => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState('home');

  const toggleTab = (tab) => {
    setSelectedTab(tab)
  }

  const toggleTheme = () => {
    setTheme(!theme)
  }

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.content}>

          <button className={styles.button} onClick={() => toggleTheme()}>
            <ContrastIcon className={styles.icon} />
          </button>

          <div className={selectedTab === 'home' ? styles.selectedTab : undefined}>
            <button className={styles.button} onClick={() => toggleTab('home')}>
              <h4 className={selectedTab === 'home' ? styles.selectedTabText : styles.title}>
                {t('Home')}
              </h4>
            </button>
          </div>

          <div className={selectedTab === 'songs' ? styles.selectedTab : undefined}>
            <button className={styles.button} onClick={() => toggleTab('songs')}>
              <h4 className={selectedTab === 'songs' ? styles.selectedTabText : styles.title}>
                {t('Songs')}
              </h4>
            </button>
          </div>

          <div className={selectedTab === 'varieties' ? styles.selectedTab : undefined}>
            <button className={styles.button} onClick={() => toggleTab('varieties')}>
              <h4 className={selectedTab === 'varieties' ? styles.selectedTabText : styles.title}>
                {t('Varieties')}
              </h4>
            </button>
          </div>

          <div className={selectedTab === 'about' ? styles.selectedTab : undefined}>
            <button className={styles.button} onClick={() => toggleTab('about')}>
              <h4 className={selectedTab === 'about' ? styles.selectedTabText : styles.title}>
                {t('About')}
              </h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}