import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import ContrastIcon from '@mui/icons-material/Contrast'
import classes from './Header.module.css'
import { ThemeContext } from '../../contexts'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const navigate = useNavigate()

  const location = useLocation()
  const currentPath = location.pathname

  return (
    <div className={classes.container}>
      <div className={classes.background}>
        <div className={classes.content}>
          <button
            className={classes.button}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <ContrastIcon className={classes.icon} />
          </button>

          <div className={currentPath === '/' ? classes.selectedTab : undefined}>
            <button
              className={classes.button}
              onClick={() => navigate('/')}
            >
              <h4 className={currentPath === '/' ? classes.selectedTabText : classes.title}>
                {t('Home')}
              </h4>
            </button>
          </div>

          <div className={currentPath === '/musicas' ? classes.selectedTab : undefined}>
            <button
              className={classes.button}
              onClick={() => navigate('/musicas')}
            >
              <h4 className={currentPath === '/musicas' ? classes.selectedTabText : classes.title}>
                {t('Songs')}
              </h4>
            </button>
          </div>

          <div className={currentPath === '/variedades' ? classes.selectedTab : undefined}>
            <button
              className={classes.button}
              onClick={() => navigate('/variedades')}
            >
              <h4 className={currentPath === '/variedades' ? classes.selectedTabText : classes.title}>
                {t('Varieties')}
              </h4>
            </button>
          </div>

          <div className={currentPath === '/sobre' ? classes.selectedTab : undefined}>
            <button
              className={classes.button}
              onClick={() => navigate('/sobre')}
            >
              <h4 className={currentPath === '/sobre' ? classes.selectedTabText : classes.title}>
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