import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import ContrastIcon from '@mui/icons-material/Contrast'
import styles from './Header.module.css'
import { ThemeContext } from '../../contexts'
import { useLocation, useNavigate } from 'react-router-dom'
import { setItemOnStorage } from '../../global/lib'

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const navigate = useNavigate()

  const location = useLocation()
  const currentPath = location.pathname

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      setItemOnStorage('theme', 'light');
    } else {
      setTheme('dark');
      setItemOnStorage('theme', 'dark');
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.content}>
          <button
            className={styles.button}
            onClick={toggleTheme}
          >
            <ContrastIcon className={styles.icon} />
          </button>

          <div className={currentPath === '/' ? styles.selectedTab : undefined}>
            <button
              className={styles.button}
              onClick={() => navigate('/')}
            >
              <h4 className={currentPath === '/' ? styles.selectedTabText : styles.title}>
                {t('Home')}
              </h4>
            </button>
          </div>

          <div className={currentPath === '/musicas' ? styles.selectedTab : undefined}>
            <button
              className={styles.button}
              onClick={() => navigate('/musicas')}
            >
              <h4 className={currentPath === '/musicas' ? styles.selectedTabText : styles.title}>
                {t('Songs')}
              </h4>
            </button>
          </div>

          <div className={currentPath === '/variedades' ? styles.selectedTab : undefined}>
            <button
              className={styles.button}
              onClick={() => navigate('/variedades')}
            >
              <h4 className={currentPath === '/variedades' ? styles.selectedTabText : styles.title}>
                {t('Varieties')}
              </h4>
            </button>
          </div>

          <div className={currentPath === '/sobre' ? styles.selectedTab : undefined}>
            <button
              className={styles.button}
              onClick={() => navigate('/sobre')}
            >
              <h4 className={currentPath === '/sobre' ? styles.selectedTabText : styles.title}>
                {t('About')}
              </h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header