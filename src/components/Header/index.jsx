import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ContrastIcon from '@mui/icons-material/Contrast'
import styles from './Header.module.css'
import { toggleTheme } from './lib'
import { ThemeContext } from '../../contexts'
import Button from '../../components/Button'
import MobileHeader from './components/MobileHeader'

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 767) {
        setMobileMode(true);
      } else {
        setMobileMode(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  if (mobileMode) {
    return <MobileHeader />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.content}>
          <Button onClick={() => toggleTheme(theme, setTheme)}>
            <ContrastIcon className={styles.icon} />
          </Button>

          <div className={currentPath === '/' ? styles.selectedTab : undefined}>
            <Button onClick={() => navigate('/')}>
              <h4 className={currentPath === '/' ? styles.selectedTabText : styles.title}>
                {t('Home')}
              </h4>
            </Button>
          </div>

          <div className={currentPath === '/musicas' ? styles.selectedTab : undefined}>
            <Button onClick={() => navigate('/musicas')}>
              <h4 className={currentPath === '/musicas' ? styles.selectedTabText : styles.title}>
                {t('Songs')}
              </h4>
            </Button>
          </div>

          <div className={currentPath === '/variedades' ? styles.selectedTab : undefined}>
            <Button onClick={() => navigate('/variedades')}>
              <h4 className={currentPath === '/variedades' ? styles.selectedTabText : styles.title}>
                {t('Varieties')}
              </h4>
            </Button>
          </div>

          <div className={currentPath === '/sobre' ? styles.selectedTab : undefined}>
            <Button onClick={() => navigate('/sobre')}>
              <h4 className={currentPath === '/sobre' ? styles.selectedTabText : styles.title}>
                {t('About')}
              </h4>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header